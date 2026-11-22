import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Check,
  Heart,
  LockKeyhole,
  Search,
  Volume2,
  Leaf,
  Target,
  Trophy,
  Sprout,
  Moon,
  Sun,
  Download,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shell, PageHeading } from "./shell";
import {
  lessons,
  vocabulary,
  skillNames,
  faNumber,
  placementLevel,
  units,
  levelNames,
  type Level,
} from "@/features/learning/content";
import { useLearning } from "@/features/learning/store";
import { speak } from "@/features/learning/browser-speech";
import squirrel from "@/assets/zaban-squirrel.png";
export function LevelsPage() {
  const [level, setLevel] = useState<Level>("A1");
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("all");
  const state = useLearning();
  const levelLessons = units.filter((u) => u.level === level).flatMap((u) => u.lessons);
  const filtered = levelLessons.filter(
    (l) =>
      (skill === "all" ||
        (skill === "favorite" ? state.favorites.includes(l.id) : l.skill === skill)) &&
      (l.title.includes(search) || l.explanation.includes(search)),
  );
  return (
    <Shell>
      <PageHeading
        title="مسیر یادگیری تو"
        description="از اولین سلام تا یک گفت‌وگوی واقعی؛ قدم به قدم، همراه تو هستیم."
      />
      <div className="flex flex-wrap gap-3 mb-8">
        {["A1", "A2", "B1", "B2", "C1", "C2"].map((l, i) =>
          i < 3 ? (
            <button
              type="button"
              key={l}
              aria-pressed={level === l}
              onClick={() => setLevel(l as Level)}
              className={`flex items-center gap-2 px-5 py-3 border rounded-md ${level === l ? "bg-secondary text-primary border-primary" : "text-muted-foreground hover:bg-muted"}`}
            >
              <Sprout className="size-4" />
              <strong dir="ltr">{l}</strong>
              <span className="text-xs">{levelNames[l as Level]}</span>
            </button>
          ) : (
            <div
              className="flex items-center gap-2 px-5 py-3 border rounded-md text-muted-foreground bg-muted"
              key={l}
            >
              <LockKeyhole className="size-4" />
              <strong dir="ltr">{l}</strong>
              <span className="text-xs">به‌زودی</span>
            </div>
          ),
        )}
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute right-3 top-3.5 size-4 text-muted-foreground" />
          <input
            aria-label="جست‌وجوی درس"
            className="form-field pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="چه چیزی می‌خوای یاد بگیری؟"
          />
        </div>
        <select
          aria-label="فیلتر مهارت"
          className="form-field w-auto"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        >
          <option value="all">همهٔ مهارت‌ها</option>
          <option value="favorite">درس‌های ذخیره‌شده</option>
          {Object.entries(skillNames).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="page-grid">
        {filtered.map((l, i) => (
          <article className="content-card" key={l.id}>
            <div className="flex justify-between items-center">
              <span className="text-4xl">{l.icon}</span>
              <span className="pill">
                {state.completed.includes(l.id) ? (
                  <>
                    <Check className="size-3" />
                    کامل شده
                  </>
                ) : (
                  skillNames[l.skill]
                )}
              </span>
            </div>
            <h3>{l.title}</h3>
            <p>توضیح ساده، مثال کاربردی و تمرین واقعی</p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-xs text-muted-foreground">۵ دقیقه · ۲۰ امتیاز</span>
              <Button size="sm" variant="outline" asChild>
                <Link to="/lesson/$lessonId" params={{ lessonId: l.id }}>
                  شروع <ArrowLeft />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <div className="text-center py-12">
          <img src={squirrel} width={150} height={150} className="mx-auto" alt="سنجاب زبان‌لند" />
          <p>درسی پیدا نشد؛ یک عبارت دیگه امتحان کن.</p>
        </div>
      )}
    </Shell>
  );
}
export function VocabularyPage() {
  const state = useLearning();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [revealed, setRevealed] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const words = vocabulary.filter(
    (v) =>
      (v.word.includes(search.toLowerCase()) || v.meaning.includes(search)) &&
      (filter === "all" ||
        (filter === "review" && !state.knownWords.includes(v.word)) ||
        (filter === "favorite" && state.favorites.includes(v.word))),
  );
  return (
    <Shell>
      <PageHeading
        title="دفتر واژگان من"
        description="کلمه‌ها را تنها حفظ نکن؛ آن‌ها را با جمله‌ها و ترکیب‌های کاربردی به خاطر بسپار."
      />
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          className="form-field flex-1 min-w-40"
          placeholder="جست‌وجوی کلمه یا معنی…"
          aria-label="جست‌وجوی واژه"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-field w-auto"
          aria-label="فیلتر واژگان"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">همهٔ کلمه‌ها</option>
          <option value="review">برای مرور</option>
          <option value="favorite">علاقه‌مندی‌ها</option>
        </select>
      </div>
      {notice && <p className="feedback mb-5">{notice}</p>}
      <div className="page-grid">
        {words.map((v, i) => (
          <article className="content-card" key={`${v.word}-${i}`}>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                size="icon"
                aria-label={`شنیدن ${v.word}`}
                onClick={() => {
                  if (!speak(v.example)) setNotice("پخش صدا در این مرورگر پشتیبانی نمی‌شود.");
                }}
              >
                <Volume2 />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`ذخیره ${v.word}`}
                onClick={() => state.toggleFavorite(v.word)}
              >
                <Heart
                  className={state.favorites.includes(v.word) ? "fill-primary text-primary" : ""}
                />
              </Button>
            </div>
            <h3 dir="ltr" className="text-center text-2xl">
              {v.word}
            </h3>
            {revealed.includes(v.word) ? (
              <p className="text-center">{v.meaning}</p>
            ) : (
              <Button
                variant="link"
                className="w-full"
                onClick={() => setRevealed((old) => [...old, v.word])}
              >
                نمایش معنی
              </Button>
            )}
            <p dir="ltr" className="text-center mt-4 text-primary">
              {v.chunk}
            </p>
            <p dir="ltr" className="text-center mt-2">
              {v.example}
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="w-full mt-5"
              disabled={state.knownWords.includes(v.word)}
              onClick={() => state.markKnown(v.word)}
            >
              <Check />
              {state.knownWords.includes(v.word) ? "مرور شد" : "یادم بود"}
            </Button>
          </article>
        ))}
      </div>
      {!words.length && (
        <p className="text-center py-10 text-muted-foreground">فعلاً کلمه‌ای در این بخش نیست. 🌱</p>
      )}
    </Shell>
  );
}
export function ProgressPage() {
  const state = useLearning();
  return (
    <Shell>
      <PageHeading
        title="جنگل کوچک پیشرفت تو"
        description="هر دقیقه یادگیری و هر کلمهٔ تازه، یک قدم ارزشمند است."
      />
      <div className="stats-grid mb-8">
        {[
          { value: state.xp, label: "امتیاز یادگیری", icon: Trophy },
          { value: state.completed.length, label: "درس کامل‌شده", icon: BookOpen },
          { value: state.knownWords.length, label: "واژهٔ مرورشده", icon: Leaf },
          { value: state.minutes, label: "دقیقه یادگیری", icon: Target },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div>
              <strong>{faNumber(s.value)}</strong>
              <span>{s.label}</span>
            </div>
            <s.icon className="size-6 text-primary" />
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold mb-5">چهار شاخهٔ یادگیری</h2>
      <div className="page-grid mb-8">
        {Object.entries(skillNames).map(([skill, name]) => {
          const all = lessons.filter((l) => l.skill === skill);
          const count = all.filter((l) => state.completed.includes(l.id)).length;
          return (
            <div className="content-card" key={skill}>
              <h3>{name}</h3>
              <p>
                {faNumber(count)} از {faNumber(all.length)} درس
              </p>
              <div className="progress-track mt-4">
                <div
                  className="progress-fill"
                  style={{ width: `${(count / all.length) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="text-lg font-bold mb-5">نشان‌های رشد</h2>
      <div className="flex flex-wrap gap-6 mb-8">
        {[
          { title: "اولین جوانه", need: 1 },
          { title: "شاخهٔ تازه", need: 5 },
          { title: "درخت دانایی", need: 20 },
          { title: "جنگل زبان", need: 50 },
        ].map((b) => (
          <div
            key={b.title}
            className={`content-card text-center w-44 ${state.completed.length >= b.need ? "" : "opacity-50"}`}
          >
            <Trophy className="size-10 text-sunshine mx-auto" />
            <h3>{b.title}</h3>
            <p>{faNumber(b.need)} درس کامل</p>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold">تاریخچهٔ همین جلسه</h2>
      {state.completed.length ? (
        state.completed.map((id) => {
          const l = lessons.find((l) => l.id === id);
          return (
            <Link key={id} to="/lesson/$lessonId" params={{ lessonId: id }} className="unit-row">
              <Check className="size-5 text-primary" />
              {l?.title}
              <span className="mr-auto text-xs text-primary">۲۰ امتیاز</span>
            </Link>
          );
        })
      ) : (
        <div className="text-center py-8">
          <img
            src={squirrel}
            width={150}
            height={150}
            className="mx-auto"
            alt="سنجاب منتظر اولین درس"
          />
          <p className="text-muted-foreground my-4">اولین جوانه منتظر توست!</p>
          <Button asChild>
            <Link to="/levels">
              شروع مسیر یادگیری <ArrowLeft />
            </Link>
          </Button>
        </div>
      )}
    </Shell>
  );
}
export function ProfilePage() {
  const state = useLearning();
  const [name, setName] = useState(state.name);
  const [saved, setSaved] = useState(false);
  return (
    <Shell>
      <PageHeading
        title="حساب من و تنظیمات"
        description="یادگیری را با ریتم زندگی خودت هماهنگ کن."
      />
      <div className="max-w-2xl">
        <section className="border-b pb-8 mb-8">
          <h2 className="font-bold text-lg mb-4">دربارهٔ تو</h2>
          <label htmlFor="name" className="text-sm block mb-2">
            چه اسمی صدات کنیم؟
          </label>
          <input
            id="name"
            className="form-field"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSaved(false);
            }}
          />
          <Button
            className="mt-4"
            disabled={!name.trim()}
            onClick={() => {
              state.update({ name: name.trim() });
              setSaved(true);
            }}
          >
            ذخیرهٔ نام
          </Button>
          {saved && <span className="mr-4 text-sm text-primary">ذخیره شد 🌱</span>}
        </section>
        <section className="border-b pb-8 mb-8">
          <h2 className="font-bold text-lg mb-3">هدف روزانه</h2>
          <p className="text-sm text-muted-foreground mb-5">
            هر روز چقدر برای انگلیسی وقت می‌ذاری؟
          </p>
          <div className="flex flex-wrap gap-3">
            {[5, 10, 15, 20].map((n) => (
              <Button
                variant={state.goal === n ? "default" : "outline"}
                onClick={() => state.update({ goal: n })}
                key={n}
              >
                {faNumber(n)} دقیقه
              </Button>
            ))}
          </div>
        </section>
        <section className="border-b pb-8 mb-8">
          <h2 className="font-bold text-lg mb-4">رنگ و حال‌وهوای جنگلت</h2>
          <div className="flex gap-3">
            <Button
              variant={!state.dark ? "default" : "outline"}
              onClick={() => state.update({ dark: false })}
            >
              <Sun />
              روشن
            </Button>
            <Button
              variant={state.dark ? "default" : "outline"}
              onClick={() => state.update({ dark: true })}
            >
              <Moon />
              تاریک
            </Button>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-lg mb-3">حساب مهمان</h2>
          <p className="text-sm text-muted-foreground leading-8">
            فعلاً بدون ثبت‌نام یاد می‌گیری. پیشرفت و تنظیمات فقط در همین جلسه باقی می‌مانند. ورود،
            ثبت‌نام و ذخیرهٔ دائمی با اتصال سرویس حساب‌ها فعال خواهند شد.
          </p>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/placement">
              آزمون تعیین سطح <ArrowLeft />
            </Link>
          </Button>
        </section>
      </div>
    </Shell>
  );
}
const placementQuestions = [
  { prompt: "جای خالی را کامل کن: I ___ a student.", options: ["am", "is", "are"], answer: "am" },
  {
    prompt: "معنی «خوشبختم» کدام است؟",
    options: ["Good night.", "Nice to meet you.", "I am fine."],
    answer: "Nice to meet you.",
  },
  {
    prompt: "جای خالی: She ___ tea every day.",
    options: ["drink", "drinks", "drinking"],
    answer: "drinks",
  },
  {
    prompt: "برای پرسیدن قیمت کدام درست است؟",
    options: ["How much is it?", "Who is it?", "Where is it?"],
    answer: "How much is it?",
  },
  { prompt: "جای خالی: There ___ two books.", options: ["am", "is", "are"], answer: "are" },
  {
    prompt: "کدام جمله درست است؟",
    options: ["He can swim.", "He can swims.", "He cans swim."],
    answer: "He can swim.",
  },
];
export function PlacementPage() {
  const [index, setIndex] = useState(-1);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const state = useLearning();
  const q = placementQuestions[index];
  return (
    <Shell>
      <div className="lesson-player">
        <PageHeading
          title="اولین قدم، پیدا کردن مسیر تو"
          description="چند سؤال کوتاه؛ بدون استرس، بدون نمرهٔ بد. فقط برای اینکه بهتر شروع کنیم."
        />
        <div className="learning-sheet text-center">
          {index === -1 ? (
            <>
              <img
                src={squirrel}
                width={220}
                height={220}
                className="mx-auto"
                alt="سنجاب راهنمای تعیین سطح"
              />
              <h2>بیا ببینیم از کجا شروع کنیم!</h2>
              <p>۶ سؤال کوتاه برای بررسی پایه‌های انگلیسی.</p>
              <Button className="mt-6" onClick={() => setIndex(0)}>
                آماده‌ام <ArrowLeft />
              </Button>
            </>
          ) : q ? (
            <>
              <div className="text-xs text-muted-foreground mb-5">
                سؤال {faNumber(index + 1)} از {faNumber(placementQuestions.length)}
              </div>
              <h2>{q.prompt}</h2>
              <div dir="ltr" className="grid gap-3">
                {q.options.map((o) => (
                  <Button
                    key={o}
                    variant={answer === o ? "secondary" : "outline"}
                    className="answer-option"
                    onClick={() => setAnswer(o)}
                  >
                    {o}
                  </Button>
                ))}
              </div>
              <Button
                className="mt-6"
                disabled={!answer}
                onClick={() => {
                  const correct = score + (answer === q.answer ? 1 : 0);
                  setScore(correct);
                  setAnswer("");
                  setIndex(index + 1);
                  if (index === placementQuestions.length - 1)
                    state.update({ placement: placementLevel(correct, placementQuestions.length) });
                }}
              >
                ادامه <ArrowLeft />
              </Button>
            </>
          ) : (
            <>
              <Sprout className="size-16 text-primary mx-auto mb-6" />
              <h2>{score >= 5 ? "پایه‌های خوبی داری!" : "از یک شروع تازه لذت ببر!"}</h2>
              <p>
                {faNumber(score)} پاسخ درست از {faNumber(placementQuestions.length)} سؤال.{" "}
                {score >= 5
                  ? "پیشنهاد ما مرور هدفمند A1 و تمرین موقعیت‌های واقعی است."
                  : "پیشنهاد ما شروع مسیر A1 از الفبا و صداهای پایه است."}
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <Button asChild>
                  <Link
                    to="/lesson/$lessonId"
                    params={{ lessonId: score >= 5 ? "cafe" : "sounds" }}
                  >
                    شروع مسیر من <ArrowLeft />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIndex(-1);
                    setScore(0);
                  }}
                >
                  دوباره <RotateCcw />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Shell>
  );
}
export function AboutPage() {
  return (
    <Shell>
      <PageHeading
        title="اینجا زبان‌لند است"
        description="یک جنگل کوچک برای رویاهای بزرگ؛ انگلیسی برای زندگی، نه فقط برای امتحان."
      />
      <div className="max-w-3xl">
        <img
          src={squirrel}
          width={230}
          height={230}
          className="mx-auto mb-6"
          alt="سنجاب زبان‌لند"
        />
        {[
          {
            title: "یادگیری با معنا",
            text: "با معرفی خودت، سفارش در کافه و گفت‌وگو دربارهٔ خانواده تمرین می‌کنی. هر درس، یک موقعیت واقعی دارد.",
          },
          {
            title: "فارسی روان، انگلیسی کاربردی",
            text: "توضیح‌ها فارسی‌اند تا از همان اول راحت باشی. انگلیسی را در جمله و ترکیب‌های طبیعی یاد می‌گیری، نه به‌صورت کلمه‌های جدا.",
          },
          {
            title: "چهار مهارت، یک مسیر",
            text: "گوش دادن، حرف زدن، خواندن و نوشتن کنار هم رشد می‌کنند. اشتباه کردن بخشی از یادگیری است.",
          },
          {
            title: "هر روز یک قدم",
            text: "یک هدف کوچک انتخاب کن، درس بخوان و واژه‌ها را مرور کن. سنجاب کوچولوی ما در هر قدم همراه توست.",
          },
          {
            title: "جوانه‌های آینده",
            text: "سطح‌های A1 تا B1 در دسترس‌اند. سطح‌های بالاتر، گفت‌وگوی هوشمند و امکانات اجتماعی در ادامه به جنگل ما اضافه می‌شوند.",
          },
        ].map((s) => (
          <section className="py-6 border-b" key={s.title}>
            <h2 className="text-xl font-bold mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-9 text-sm">{s.text}</p>
          </section>
        ))}
        <Button asChild className="mt-8">
          <Link to="/levels">
            بیا با هم رشد کنیم <ArrowLeft />
          </Link>
        </Button>
      </div>
    </Shell>
  );
}

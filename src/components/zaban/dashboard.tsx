import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  Clock3,
  Flame,
  Headphones,
  Leaf,
  MessageCircle,
  Mic,
  NotebookPen,
  Sprout,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shell } from "./shell";
import { lessons, faNumber, levelNames, levelOf } from "@/features/learning/content";
import { useLearning } from "@/features/learning/store";
import forest from "@/assets/forest-learning.jpg";
import squirrel from "@/assets/zaban-squirrel.png";
export function Dashboard() {
  const state = useLearning();
  const next = lessons.find((l) => !state.completed.includes(l.id)) ?? lessons[0];
  const pct = Math.min(100, Math.round((state.minutes / state.goal) * 100));
  if (!next) return null;
  const level = levelOf(next.id);
  const levelLessons = lessons.filter((l) => levelOf(l.id) === level);
  const levelDone = levelLessons.filter((l) => state.completed.includes(l.id)).length;
  return (
    <Shell>
      <div className="welcome">
        <div>
          <h1>
            سلام، {state.name}! <span className="text-xl">🌿</span>
          </h1>
          <p>امروز هم یه فرصت تازه‌ست تا با هم رشد کنیم.</p>
        </div>
        <span className="date-label">
          {new Date().toLocaleDateString("fa-IR", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </span>
      </div>
      <section className="forest-hero">
        <img
          className="forest-backdrop"
          src={forest}
          width={1536}
          height={768}
          alt="جنگل سرسبز زبان‌لند"
        />
        <div className="hero-copy">
          <div className="eyebrow">
            <Sprout className="size-4" />
            اینجا، یادگیری جوانه می‌زند
          </div>
          <h2>
            زبان‌لند؛
            <br />
            یک دنیای تازه، با هر کلمه.
          </h2>
          <p>
            انگلیسی را برای زندگی یاد بگیر؛
            <br />
            با قدم‌های کوچک و یک دوست کوچولوی جنگلی!
          </p>
          <Button asChild className="h-10 px-5">
            <Link to="/lesson/$lessonId" params={{ lessonId: next.id }}>
              بیا یاد بگیریم <ArrowLeft />
            </Link>
          </Button>
        </div>
        <img
          className="hero-mascot"
          src={squirrel}
          width={1024}
          height={1024}
          alt="سنجاب خندان زبان‌لند که دست تکان می‌دهد"
        />
        <span className="hero-badge">🌱 من کنارت هستم، قدم به قدم!</span>
      </section>
      <div className="stats-grid">
        {[
          {
            value: faNumber(state.completed.length ? 1 : 0),
            label: "روز یادگیری پیوسته",
            icon: Flame,
            tone: "orange",
          },
          { value: faNumber(state.xp), label: "امتیاز یادگیری", icon: Zap, tone: "gold" },
          {
            value: faNumber(state.completed.length),
            label: "درس کامل‌شده",
            icon: BookOpen,
            tone: "green",
          },
          { value: "مبتدی", label: "سطح فعلی شما", icon: Sprout, tone: "blue" },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
            <div className={`stat-icon tone-${s.tone}`}>
              <s.icon className="size-6" />
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-columns">
        <div>
          <div className="section-heading">
            <h2>
              قدم بعدی تو <span className="text-base">🌱</span>
            </h2>
            <Link to="/levels">
              دیدن مسیر یادگیری <ArrowLeft className="size-3" />
            </Link>
          </div>
          <div className="lesson-feature">
            <div className="lesson-feature-main">
              <div className="lesson-art">{next.icon}</div>
              <div>
                <span className="pill">
                  سطح {levelNames[level]} · {level}
                </span>
                <h3>{next.title}</h3>
                <p>با یک قدم کوچک، یک مهارت تازه یاد بگیر.</p>
                <div className="flex gap-4 mt-3 text-muted-foreground text-[10px]">
                  <span className="flex items-center gap-1">
                    <Clock3 className="size-3" />۵ دقیقه
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="size-3 text-sunshine" />
                    ۲۰ امتیاز
                  </span>
                </div>
              </div>
            </div>
            <div className="lesson-feature-footer">
              <div className="flex-1 max-w-[210px]">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-2">
                  <span>پیشرفت در سطح {levelNames[level]}</span>
                  <span>{faNumber(Math.round((levelDone / levelLessons.length) * 100))}٪</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${(levelDone / levelLessons.length) * 100}%` }}
                  />
                </div>
              </div>
              <Button asChild size="sm">
                <Link to="/lesson/$lessonId" params={{ lessonId: next.id }}>
                  شروع درس <ArrowLeft />
                </Link>
              </Button>
            </div>
          </div>
          <div className="section-heading mt-7">
            <h2>چه مهارتی تمرین کنیم؟</h2>
            <span className="text-[10px] text-muted-foreground">هر مهارت، یک قدم جلوتر</span>
          </div>
          <div className="skill-grid">
            {[
              {
                title: "شنیداری",
                sub: "گوش بده، کشف کن",
                icon: Headphones,
                tone: "blue",
                id: "numbers",
              },
              {
                title: "گفتاری",
                sub: "با اعتماد حرف بزن",
                icon: Mic,
                tone: "orange",
                id: "greetings",
              },
              {
                title: "خواندن",
                sub: "بخوان و یاد بگیر",
                icon: BookOpen,
                tone: "green",
                id: "family",
              },
              {
                title: "نوشتن",
                sub: "کلمه‌ها را کنار هم بچین",
                icon: NotebookPen,
                tone: "gold",
                id: "personal",
              },
            ].map((s) => (
              <Link
                to="/lesson/$lessonId"
                params={{ lessonId: s.id }}
                className="skill-card"
                key={s.title}
              >
                <div className={`stat-icon tone-${s.tone}`}>
                  <s.icon className="size-5" />
                </div>
                <strong>{s.title}</strong>
                <small>{s.sub}</small>
              </Link>
            ))}
          </div>
          <div className="unit-list">
            <div className="section-heading">
              <h2>جوانه‌های مسیر تو</h2>
              <Link to="/levels">
                همهٔ درس‌ها <ArrowLeft className="size-3" />
              </Link>
            </div>
            {lessons.slice(0, 3).map((l, i) => (
              <Link
                to="/lesson/$lessonId"
                params={{ lessonId: l.id }}
                className="unit-row"
                key={l.id}
              >
                <span className="unit-number">
                  {state.completed.includes(l.id) ? <Check className="size-4" /> : faNumber(i + 1)}
                </span>
                <div className="flex-1">
                  <h3>{l.title}</h3>
                  <p>یک گفت‌وگوی تازه، یک قدم نزدیک‌تر</p>
                </div>
                <ChevronLeft className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="section-heading">
            <h2>
              هدف امروز <Target className="inline size-4 text-peach mr-1" />
            </h2>
            <Link to="/profile">ویرایش</Link>
          </div>
          <div className="daily-goal">
            <div className="daily-goal-top">
              <strong>
                {faNumber(state.minutes)} از {faNumber(state.goal)} دقیقه
              </strong>
              <span className="text-primary">{faNumber(pct)}٪</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <p>
              {state.minutes ? "آفرین! هر قدم کوچک ارزشمنده." : "یه درس کوتاه، شروع یه روز خوبه!"}
            </p>
            <div className="week-days">
              {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((d, i) => (
                <div className="week-day" key={i}>
                  <span className={`day-dot ${state.completed.length && i === 0 ? "done" : ""}`}>
                    {state.completed.length && i === 0 ? (
                      <Check className="size-3" />
                    ) : (
                      <span className="size-1 rounded-full bg-border" />
                    )}
                  </span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section-heading mt-7">
            <h2>یک گفت‌وگوی واقعی</h2>
            <MessageCircle className="size-4 text-sky" />
          </div>
          <div className="practice-banner">
            <div className="stat-icon tone-blue shrink-0">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <h3>یه قهوه به انگلیسی سفارش بده!</h3>
              <p>
                با یک گفت‌وگوی کوتاه در کافه،
                <br />
                کلمه‌ها را به زندگی بیار.
              </p>
              <Button variant="link" className="px-0 text-[11px] h-7 mt-1" asChild>
                <Link to="/lesson/$lessonId" params={{ lessonId: "cafe" }}>
                  بریم کافه <ArrowLeft />
                </Link>
              </Button>
            </div>
          </div>
          <div className="section-heading mt-7">
            <h2>نشان‌های تو</h2>
            <Trophy className="size-4 text-sunshine" />
          </div>
          <Link to="/progress" className="flex gap-3 items-center py-3">
            <div className="stat-icon tone-gold">
              <Leaf />
            </div>
            <div>
              <strong className="text-xs">اولین جوانه</strong>
              <p className="text-[10px] text-muted-foreground mt-1">
                {state.completed.length
                  ? "آفرین! اولین قدم را برداشتی."
                  : "با تمام کردن اولین درس دریافت کن."}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <footer className="text-center text-[10px] text-muted-foreground mt-10">
        با عشق به یادگیری، در زبان‌لند 🌿
      </footer>
    </Shell>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, Heart, Mic, Volume2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shell } from "./shell";
import {
  lessons,
  normalizeAnswer,
  faNumber,
  levelNames,
  levelOf,
  type Lesson,
} from "@/features/learning/content";
import { useLearning } from "@/features/learning/store";
import { speak, recognize } from "@/features/learning/browser-speech";
import squirrel from "@/assets/zaban-squirrel.png";
export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [listening, setListening] = useState(false);
  const [notice, setNotice] = useState("");
  const [task, setTask] = useState("");
  const state = useLearning();
  const activity = lesson.activities[step - 1];
  const correct = activity ? normalizeAnswer(answer) === normalizeAnswer(activity.answer) : false;
  const done = step === 5;
  function next() {
    setStep((s) => s + 1);
    setAnswer("");
    setChecked(false);
    setNotice("");
  }
  function listen(text: string) {
    if (!speak(text)) setNotice("پخش صدا در این مرورگر پشتیبانی نمی‌شود.");
  }
  function record() {
    setNotice("");
    setListening(true);
    try {
      const r = recognize(
        (text) => {
          setAnswer(text);
          setChecked(true);
        },
        () => setListening(false),
      );
      if (!r) {
        setListening(false);
        setNotice("تشخیص گفتار در این مرورگر در دسترس نیست؛ جمله را بنویس و بررسی کن.");
      }
    } catch {
      setListening(false);
      setNotice("دسترسی به میکروفن را بررسی کن یا جمله را بنویس.");
    }
  }
  function download() {
    const text = `${lesson.title}\n\n${lesson.explanation}\n\n${lesson.examples.join("\n")}\n\n${lesson.vocabulary.map((v) => `${v.word}: ${v.meaning}\n${v.chunk}\n${v.example}`).join("\n\n")}\n\n${lesson.task}`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `zaban-land-${lesson.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <Shell>
      <div className="lesson-player">
        <div className="flex justify-between mb-5">
          <Button variant="ghost" asChild>
            <Link to="/levels">
              <ArrowRight />
              مسیر یادگیری
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="ذخیرهٔ درس"
              title="ذخیرهٔ درس"
              onClick={() => state.toggleFavorite(lesson.id)}
            >
              <Heart
                className={state.favorites.includes(lesson.id) ? "fill-primary text-primary" : ""}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="دانلود یادداشت درس"
              title="دانلود یادداشت درس"
              onClick={download}
            >
              <Download />
            </Button>
          </div>
        </div>
        <span className="pill">
          سطح {levelNames[levelOf(lesson.id)]} · {levelOf(lesson.id)}
        </span>
        <h1 className="page-heading mt-3">
          {lesson.icon} {lesson.title}
        </h1>
        <div className="flex justify-between text-xs text-muted-foreground my-4">
          <span>{done ? "درس کامل شد" : `قدم ${faNumber(step + 1)} از ۵`}</span>
          <span>۲۰ امتیاز</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${Math.min(100, (step / 5) * 100)}%` }} />
        </div>
        <section className="learning-sheet">
          {step === 0 ? (
            <>
              <h2>بیا با هم کشف کنیم</h2>
              <p>{lesson.explanation}</p>
              <div className="english-example">
                {lesson.examples.map((ex) => (
                  <div className="flex justify-between gap-2 items-center" key={ex}>
                    <span>{ex}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`شنیدن ${ex}`}
                      onClick={() => listen(ex)}
                    >
                      <Volume2 />
                    </Button>
                  </div>
                ))}
              </div>
              <h3 className="font-bold mb-3">کلمه‌ها در کنار هم</h3>
              {lesson.vocabulary.map((v) => (
                <div key={v.word} className="flex justify-between border-b py-3 text-sm">
                  <strong dir="ltr">{v.word}</strong>
                  <span>{v.meaning}</span>
                  <span dir="ltr" className="text-primary">
                    {v.chunk}
                  </span>
                </div>
              ))}
              <Button className="mt-6" onClick={next}>
                بریم تمرین کنیم <ArrowLeft />
              </Button>
            </>
          ) : activity && step <= 3 ? (
            <>
              <span className="pill mb-4">
                {activity.kind === "choice"
                  ? "انتخاب پاسخ"
                  : activity.kind === "writing"
                    ? "تمرین نوشتن"
                    : "تمرین تلفظ"}
              </span>
              <h2>{activity.prompt}</h2>
              {activity.kind === "choice" ? (
                <div dir="ltr" className="grid gap-3">
                  {activity.options?.map((option) => (
                    <Button
                      key={option}
                      variant={answer === option ? "secondary" : "outline"}
                      className="answer-option"
                      disabled={checked && correct}
                      onClick={() => {
                        setAnswer(option);
                        setChecked(false);
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="english-example flex justify-between items-center">
                    <span>{activity.answer}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="شنیدن جمله"
                      onClick={() => listen(activity.answer)}
                    >
                      <Volume2 />
                    </Button>
                  </div>
                  {activity.kind === "speaking" && (
                    <Button
                      variant="outline"
                      className="mb-4"
                      onClick={record}
                      disabled={listening}
                    >
                      <Mic />
                      {listening ? "دارم گوش می‌دم…" : "ضبط صدای من"}
                    </Button>
                  )}
                  <input
                    className="form-field"
                    dir="ltr"
                    aria-label="پاسخ انگلیسی"
                    placeholder="…"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                      setChecked(false);
                    }}
                  />
                </>
              )}
              {checked && (
                <div className={`feedback ${correct ? "" : "error"}`}>
                  {correct ? "آفرین! درست گفتی. 🌱" : "هنوز یک قدم مونده؛ دوباره امتحان کن."}
                  <p className="mt-2 text-sm">{activity.explanation}</p>
                  {!correct && (
                    <p dir="ltr" className="mt-2">
                      {activity.answer}
                    </p>
                  )}
                </div>
              )}
              {checked && correct ? (
                <Button className="mt-6" onClick={next}>
                  قدم بعدی <ArrowLeft />
                </Button>
              ) : (
                <Button className="mt-6" disabled={!answer.trim()} onClick={() => setChecked(true)}>
                  بررسی پاسخ
                </Button>
              )}
            </>
          ) : step === 4 ? (
            <>
              <h2>حالا نوبت زندگی واقعیه!</h2>
              <p>{lesson.task}</p>
              <textarea
                rows={4}
                className="form-field mt-5"
                dir="ltr"
                aria-label="پاسخ فعالیت ارتباطی"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <p className="text-muted-foreground text-xs mt-3">
                جوابت را با مثال‌های درس مقایسه کن؛ این فعالیت پاسخ آزاد دارد.
              </p>
              <Button
                className="mt-6"
                disabled={!task.trim()}
                onClick={() => {
                  state.complete(lesson.id);
                  next();
                }}
              >
                درس را تمام کردم <CheckCircle2 />
              </Button>
            </>
          ) : (
            <div className="text-center">
              <img
                src={squirrel}
                className="w-48 h-48 object-contain mx-auto"
                alt="سنجاب خوشحال"
                width={1024}
                height={1024}
              />
              <h2>یک جوانهٔ تازه به جنگلت اضافه شد!</h2>
              <p>۲۰ امتیاز گرفتی. حالا می‌تونی این درس را در پیشرفتت ببینی.</p>
              <div className="flex gap-3 justify-center mt-6">
                <Button asChild>
                  <Link to="/">
                    برگشت به خانه <ArrowLeft />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/vocabulary">مرور واژه‌ها</Link>
                </Button>
              </div>
            </div>
          )}
          {notice && (
            <p role="status" className="feedback">
              {notice}
            </p>
          )}
        </section>
      </div>
    </Shell>
  );
}
export function findLesson(id: string) {
  return lessons.find((l) => l.id === id);
}

"use client";

import * as React from "react";
import {LangDe} from "@/components/shared/lang-de";
import {ChevronLeft, ChevronRight, Headphones, Send} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {ResultsPanel} from "@/components/tests/results-panel";
import {TestTimer} from "@/components/tests/test-timer";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {speakSequence} from "@/lib/speech/voices";
import {buildTestResult, formatTime} from "@/lib/tests/test-engine";
import {useCountdown} from "@/lib/tests/use-countdown";
import {cn} from "@/lib/utils";
import {seededShuffleTestQuestions} from "@/lib/tests/shuffle-questions";
import {dailySeed} from "@/lib/lesson/shuffle";
import type { TestQuestion, TestResult, TestSkill } from "@/types/test";
import {useRadioGroupNav} from "@/lib/use-radio-group-nav";

export interface TestSectionConfig {
  skill: TestSkill;
  title: string;
  titleDe: string;
  minutes: number;
}

interface TestRunnerProps {
  kind: TestResult["kind"];
  level: TestResult["level"];
  sections: TestSectionConfig[];
  questions: TestQuestion[];
  title: string;
  /** مفتاح إعادة التشغيل */
  resetKey?: number;
  /** يُستدعى بعد اكتمال الاختبار وحفظ النتيجة (لأمتحان الختم) */
  onComplete?: (result: TestResult) => void;
}

const SECTION_LABEL: Record<string, string> = {
  grammatik: "القواعد",
  wortschatz: "المفردات",
  lesen: "القراءة",
  hören: "الاستماع",
  schreiben: "الكتابة",
};

/**
 * جلسة الاختبار — أقسام زمنية + أسئلة متنوعة + تسليم تلقائي
 */
export function TestRunner({ kind, level, sections, questions, title, resetKey , onComplete }: TestRunnerProps) {
  const [sectionIdx, setSectionIdx] = React.useState(0);
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Map<string, string | number | null>>(new Map());
  const [finished, setFinished] = React.useState(false);
  const [result, setResult] = React.useState<TestResult | null>(null);
  const [startedAt] = React.useState(() => Date.now());
  const [runKey, setRunKey] = React.useState(0);
  const nav = useRadioGroupNav();

  /* خلط الخيارات مرة واحدة لكل محاولة — بنوك الأسئلة تضع الإجابة الصحيحة في
     الموضع الأول دائماً، فبدون الخلط يكفي اختيار «أ» للنجاح بنسبة 100%.

     ولماذا البذرة؟ كان الخلط عشوائياً (`Math.random`)، فتُصيَّر الخيارات في
     الخادم بترتيب وتُصيَّر في العميل بترتيب آخر ⇒ خطأ هيدرشن React #418
     («server rendered text didn't match») يُعيد بناء الشجرة كلها. لذلك صار
     الخلط حتمياً ببذرة يومية + رقم المحاولة: نفس الترتيب على الطرفين،
     ويتجدّد يومياً ومع كل «إعادة» (runKey). */
  const shuffledQuestions = React.useMemo(
    () =>
      seededShuffleTestQuestions(
        questions,
        `${dailySeed("test-runner")}:${runKey}:${resetKey ?? 0}`,
      ),
    [questions, runKey, resetKey],
  );

  const section = sections[sectionIdx];
  const sectionQuestions = shuffledQuestions.filter((q) => q.skill === section.skill);
  const totalSeconds = section.minutes * 60;

  /* الجولة الحادية عشرة — WCAG 2.2.1: كان العدّاد يبدأ فور تحميل الصفحة
     (10:00 → 09:55) والمستخدم ما زال يقرأ المقدمة. صار الوقت محدَّداً بقرار
     المستخدم: لا يمضي إلا بعد «ابدأ المؤقت». */
  const [timerStarted, setTimerStarted] = React.useState(false);
  const [timedOut, setTimedOut] = React.useState(false);
  const [timerNotice, setTimerNotice] = React.useState("");

  const remaining = useCountdown(
    totalSeconds,
    () => {
      // انتهاء وقت القسم → الانتقال للقسم التالي أو التسليم
      if (sectionIdx < sections.length - 1) {
        setSectionIdx((i) => i + 1);
        setQuestionIdx(0);
        setTimerStarted(false);
        setTimerNotice(`انتهى وقت القسم — انتقلنا إلى القسم ${sectionIdx + 2}. اضغط «ابدأ المؤقت» لبدء عدّاده.`);
      } else {
        setTimedOut(true);
        submitTest();
      }
    },
    {paused: !timerStarted},
  );

  const current = sectionQuestions[questionIdx];

  const submitTest = async () => {
    const res = await buildTestResult({
      kind,
      level,
      startedAt,
      finishedAt: Date.now(),
      questions: shuffledQuestions,
      answers,
    });
    setResult(res);
    setFinished(true);
  };

  const setAnswer = (key: string, value: string | number | null) => {
    setAnswers((prev) => {
      const next = new Map(prev);
      next.set(key, value);
      return next;
    });
  };

  const nextQuestion = () => {
    if (questionIdx + 1 < sectionQuestions.length) {
      setQuestionIdx((i) => i + 1);
    } else if (sectionIdx < sections.length - 1) {
      setSectionIdx((i) => i + 1);
      setQuestionIdx(0);
    } else {
      submitTest();
    }
  };

  const prevQuestion = () => {
    if (questionIdx > 0) setQuestionIdx((i) => i - 1);
  };

  const restart = React.useCallback(() => {
    setRunKey((k) => k + 1);
    setSectionIdx(0);
    setQuestionIdx(0);
    setAnswers(new Map());
    setFinished(false);
    setResult(null);
    setTimerStarted(false);
    setTimedOut(false);
    setTimerNotice("");
  }, []);

  // إعادة التشغيل عند تغيير resetKey
  React.useEffect(() => {
    restart();
  }, [resetKey, restart]);

  if (finished && result) {
    return (
      <div className="space-y-3">
        {/* التسليم التلقائي عند انتهاء الوقت كان يحدث بلا أي إعلان: يختفي
            المؤقت وتظهر النتيجة. role=alert يُعلن السبب مرة واحدة. */}
        {timedOut && (
          <p
            role="alert"
            className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm font-bold text-destructive"
          >
            انتهى الوقت — سُلِّم الاختبار تلقائياً وحُفظت إجاباتك.
          </p>
        )}
        <ResultsPanel result={result} onRetry={restart} onComplete={onComplete} />
      </div>
    );
  }

  const answeredCount = sectionQuestions.filter((q) => {
    const a = answers.get(q.id);
    return a !== undefined && a !== null && a !== "";
  }).length;

  /* إعلان تغيّر القسم — وُجِد في التدقيق أنه كان يُعرَض داخل شريط الحالة وحده،
     والشريط يختفي في فرع «لا توجد أسئلة»، فتنتقل الشاشة بصمت. صار الشريط
     والإعلان يُعادان في الفرعين. */
  const timerNoticeRegion = (
    <span className="sr-only" role="status" aria-live="polite">
      {timerNotice}
    </span>
  );

  if (!current) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
          <p className="min-w-0 truncate text-sm font-bold">
            {title} — القسم {sectionIdx + 1}/{sections.length}
          </p>
          <TestTimer seconds={remaining} total={totalSeconds} />
          {!timerStarted && (
            <Button size="sm" variant="outline" onClick={() => setTimerStarted(true)}>
              ابدأ المؤقت
            </Button>
          )}
          {timerNoticeRegion}
        </div>
        <div className="rounded-xl border bg-muted/20 p-8 text-center">
          <p className="text-muted-foreground">
            {timerNotice || "لا توجد أسئلة في هذا القسم."}
          </p>
          <Button className="mt-4" onClick={nextQuestion}>
            {sectionIdx < sections.length - 1 ? "القسم التالي" : "تسليم الاختبار"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div key={runKey} className="space-y-4">
      {/* شريط الحالة */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
        <div className="min-w-0">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs text-muted-foreground">
            القسم {sectionIdx + 1}/{sections.length}: {section.title}{" "}
            <span className="font-de" dir="ltr" lang="de">
              ({section.titleDe})
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            أجبت {answeredCount}/{sectionQuestions.length}
          </span>
          <TestTimer seconds={remaining} total={totalSeconds} />
          {!timerStarted && (
            <Button size="sm" variant="outline" onClick={() => setTimerStarted(true)} className="gap-1">
              ابدأ المؤقت
            </Button>
          )}
          {timerNoticeRegion}
        </div>
      </div>

      {/* أزرار الأقسام */}
      <div className="flex flex-wrap gap-1.5">
        {sections.map((s, i) => (
          <button
            key={s.skill}
            type="button"
            aria-pressed={i === sectionIdx}
            onClick={() => {
              setSectionIdx(i);
              setQuestionIdx(0);
            }}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
              i === sectionIdx
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background hover:border-primary/50",
            )}
          >
            {s.title} · {s.minutes}د
          </button>
        ))}
      </div>

      {/* السؤال الحالي */}
      <div className="rounded-xl border bg-card p-4">
        {current.kind === "reading" && current.text && (
          <div className="mb-4 rounded-lg bg-muted/30 p-3">
            <p className="text-xs font-bold text-muted-foreground">نص القراءة:</p>
            <p className="font-de mt-1 text-sm leading-relaxed" dir="ltr" lang="de">
              {current.text}
            </p>
            {current.textAr && <p className="mt-1 text-xs text-muted-foreground">{current.textAr}</p>}
          </div>
        )}

        {current.kind === "listening" && current.text && (
          <div className="mb-4 rounded-lg bg-muted/30 p-3">
            <p className="text-xs font-bold text-muted-foreground">استمع ثم أجب:</p>
            <div className="mt-2 flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => speakSequence([{ de: current.text ?? "" }, { de: current.text ?? "" }], { rate: 0.9 })}
                className="gap-1.5"
              >
                <Headphones className="h-4 w-4" aria-hidden="true" />
                استمع مرتين
              </Button>
              <SpeakButton text={current.text} variant="outline" size="sm" />
            </div>
          </div>
        )}

        {/* ═══ C-02: عرض الأسئلة الفرعية المتداخلة (قراءة/استماع) — كانت تُصحَّح
            دون أن تُعرض فينهار السقف إلى ~40%. الآن كل سؤال فرعي يُعرض ويُجاب
            ويُصحَّح بمفتاحه المركّب (id:index) ═══ */}
        {(current.kind === "reading" || current.kind === "listening") &&
          current.questions &&
          current.questions.length > 0 && (
            <div className="mt-4 space-y-4">
              {current.questions.map((sub, i) => (
                <div key={i} className="rounded-xl border bg-muted/10 p-3">
                  <p className="text-sm font-bold">
                    <LangDe>{sub.q}</LangDe>
                  </p>
                  {sub.qAr && <p className="mt-0.5 text-xs text-muted-foreground">{sub.qAr}</p>}
                  <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2" role="radiogroup" aria-label={sub.q} {...nav}>
                    {sub.options.map((opt, j) => {
                      const selected = answers.get(`${current.id}:${i}`) === j;
                      return (
                        <button
                          key={`${opt}-${j}`}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setAnswer(`${current.id}:${i}`, j)}
                          className={cn(
                            "rounded-lg border bg-background px-3 py-2 text-start text-sm transition-all",
                            selected
                              ? "border-primary bg-primary/10 text-primary"
                              : "hover:border-primary/40 hover:bg-primary/5",
                          )}
                        >
                          <LangDe>{opt}</LangDe>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

        {current.kind === "writing" ? (
          <div className="space-y-3">
            <p className="text-lg font-bold">
              <LangDe>{current.prompt}</LangDe>
            </p>
            <p className="text-sm text-muted-foreground">{current.promptAr}</p>
            {current.rubric && (
              <p className="inline-block rounded-lg bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold-foreground">
                المعيار: {current.rubric}
              </p>
            )}
            <textarea
              value={(answers.get(current.id) as string) ?? ""}
              onChange={(e) => setAnswer(current.id, e.target.value)}
              placeholder="اكتب إجابتك هنا..."
              dir="ltr"
              lang="de"
              rows={5}
              aria-label="إجابتك الكتابية"
              className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>
        ) : (
          <>
            {current.questionDe && (
              <p className="text-lg font-bold">
                <LangDe>{current.questionDe}</LangDe>
              </p>
            )}
            {current.questionAr && (
              <p className="mt-1 text-sm text-muted-foreground">{current.questionAr}</p>
            )}
            {current.options && (
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" role="radiogroup" aria-label={current.questionDe ?? "سؤال"} {...nav}>
                {current.options.map((opt, i) => {
                  const selected = answers.get(current.id) === i;
                  return (
                    <button
                      key={`${opt}-${i}`}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setAnswer(current.id, i)}
                      className={cn(
                        "rounded-xl border bg-background px-4 py-3 text-start transition-all",
                        "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]",
                        selected && "border-primary bg-primary/10 ring-2 ring-ring",
                      )}
                    >
                      <LangDe className="font-medium">{opt}</LangDe>
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* التقدم داخل القسم */}
        <div className="mt-4 flex items-center gap-3">
          <Progress
            value={((questionIdx + 1) / sectionQuestions.length) * 100}
            className="h-1.5"
            aria-hidden="true"
          />
          <span className="font-de shrink-0 text-xs font-bold text-muted-foreground">
            {questionIdx + 1}/{sectionQuestions.length}
          </span>
        </div>
      </div>

      {/* التنقل */}
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" onClick={prevQuestion} disabled={questionIdx === 0} className="gap-1">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          السابق
        </Button>
        {questionIdx < sectionQuestions.length - 1 ? (
          <Button size="sm" onClick={nextQuestion} className="gap-1">
            التالي
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : sectionIdx < sections.length - 1 ? (
          <Button size="sm" onClick={nextQuestion} className="gap-1">
            القسم التالي: {sections[sectionIdx + 1].title}
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button size="sm" variant="gold" onClick={submitTest} className="gap-1.5">
            <Send className="h-4 w-4" aria-hidden="true" />
            تسليم الاختبار
          </Button>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        لا يبدأ العدّ حتى تضغط «ابدأ المؤقت». عند انتهاء الوقت يُسلَّم القسم تلقائياً —
        الوقت المتبقي: {formatTime(remaining)}
      </p>
    </div>
  );
}

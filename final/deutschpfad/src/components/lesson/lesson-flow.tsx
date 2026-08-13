"use client";

import * as React from "react";
import {ArrowLeft, CheckCircle2, Hand, Headphones, Lightbulb, PenLine, RotateCcw, Sparkles, Trophy, Volume2} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {TextDe} from "@/components/shared/text-de";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {LESSON_META} from "@/data/lessons/meta";
import {cn} from "@/lib/utils";
import type { Exercise, Lesson, TheoryBlock } from "@/types/lesson";

/** زر «استمع للقاعدة» — يقرأ الشرح بصوت (TTS) */
function SpeakRule({ text }: { text: string }) {
  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ar-SA";
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  };
  return (
    <button
      type="button"
      onClick={speak}
      className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-bold text-primary transition-colors hover:bg-primary/10"
      aria-label="استمع للشرح"
      title="استمع للشرح بصوت"
    >
      <Volume2 className="h-3 w-3" aria-hidden="true" />
      استمع للشرح
    </button>
  );
}

/**
 * ═══════════════════════════════════════════════════════════
 *  تدفق الدرس التفاعلي — منهجية «الأستاذ الحي»:
 *  المحتوى يتكشف تدريجياً كلما تفاعلت — لا كتل مكدسة، لا خطوات قافزة.
 *  التسلسل: سؤال تحفيزي ← شرح قصير بمثال ← تدريب (يتكشف تمريناً تمريناً)
 *  ← استماع ← اختبار سريع ← إكمال. كل مرحلة تُفتح بإتمام سابقتها.
 * ═══════════════════════════════════════════════════════════
 */
export function LessonFlow({ lesson, onFinish }: { lesson: Lesson; onFinish?: () => void }) {
  /* ── بناء مراحل التدفق من بيانات الدرس ── */
  const learnBlocks: TheoryBlock[] = lesson.theory.slice(0, 4);
  const practiceCount = Math.min(4, lesson.practiceBank.length);
  // أسئلة الاختبار السريع: MCQ فقط (متوافقة مع MultipleChoiceExercise)
  const quizQuestions = lesson.miniTest.filter((q) => q.type === "multiple-choice");
  const quizCount = Math.min(3, quizQuestions.length);
  const hasListening = lesson.listening.items.length > 0;

  const [stage, setStage] = React.useState(0);
  const [learnIdx, setLearnIdx] = React.useState(0);
  const [practiceShown, setPracticeShown] = React.useState(1); // عدد التمارين المتكشفة
  const [quizAnswered, setQuizAnswered] = React.useState(0);
  const [done, setDone] = React.useState(false);
  // المستوى الذهبي: أخطاء الجلسة تُعاد في النهاية + تلميحات متدرجة
  const [mistakes, setMistakes] = React.useState<Exercise[]>([]);
  const [reviewMode, setReviewMode] = React.useState(false);

  // مراحل التدفق + مرحلة «أخطائي اليوم» (تظهر فقط إذا وُجدت أخطاء)
  const hasMistakeStage = mistakes.length > 0;
  const totalStages =
    2 +
    learnBlocks.length +
    (practiceCount > 0 ? 1 : 0) +
    (hasListening ? 1 : 0) +
    (quizCount > 0 ? 1 : 0) +
    (hasMistakeStage ? 1 : 0);

  // حفظ موضع التدفق
  React.useEffect(() => {
    try {
      window.localStorage.setItem(`dp-flow:${lesson.id}`, String(stage));
    } catch {
      /* تجاهل */
    }
  }, [stage, lesson.id]);

  // الاستماع لحدث «حل تمرين» — يتكشف التالي أو يفتح المرحلة التالية
  React.useEffect(() => {
    const handler = () => {
      if (stage === 2 + learnBlocks.length && practiceCount > 0) {
        // مرحلة التدريب: أظهر التمرين التالي
        setPracticeShown((p) => {
          if (p < practiceCount) return p + 1;
          return p;
        });
      }
    };
    window.addEventListener("dp:exercise-solved", handler);
    return () => window.removeEventListener("dp:exercise-solved", handler);
  }, [stage, learnBlocks.length, practiceCount]);

  // الاستماع لحدث «خطأ في تمرين» — يُسجَّل في قائمة أخطائي اليوم
  React.useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail?.exerciseId;
      if (!id) return;
      const found = [...lesson.practiceBank, ...lesson.miniTest].find((x) => x.id === id);
      if (found && !mistakes.some((m) => m.id === id)) {
        setMistakes((prev) => [...prev, found]);
      }
    };
    window.addEventListener("dp:exercise-wrong", handler);
    return () => window.removeEventListener("dp:exercise-wrong", handler);
  }, [lesson, mistakes]);

  const progressPct = Math.round((stage / Math.max(1, totalStages - 1)) * 100);

  const next = () => {
    if (stage < totalStages - 1) {
      setStage((s) => s + 1);
      setLearnIdx((s) => s + 1);
      setPracticeShown(1);
      setQuizAnswered(0);
    } else {
      setDone(true);
      onFinish?.();
    }
  };

  /* ── المراحل ── */
  const renderStage = () => {
    let s = stage;

    // المرحلة 0: الافتتاح
    if (s === 0) {
      return (
        <div className="space-y-5 text-center">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl" aria-hidden="true">🎯</span>
          <div>
            <h2 className="text-2xl font-extrabold">
              <TextDe text={lesson.titleDe} />
            </h2>
            <p className="mt-1 text-muted-foreground">{lesson.titleAr}</p>
          </div>
          <div className="mx-auto max-w-md rounded-xl border border-primary/20 bg-primary/5 p-4 text-start">
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              <Hand className="h-4 w-4" aria-hidden="true" />
              قبل أن نبدأ — فكّر:
            </p>
            <p className="mt-2 text-sm leading-relaxed">{lesson.einfuehrung.motivatingQuestionAr}</p>
          </div>
          {lesson.lernziele.length > 0 && (
            <div className="mx-auto max-w-md rounded-xl border border-muted bg-muted/20 p-4 text-start">
              <p className="text-xs font-bold text-muted-foreground">بنهاية هذا الدرس ستكون قادراً على:</p>
              <ul className="mt-2 space-y-1">
                {lesson.lernziele.slice(0, 3).map((z) => (
                  <li key={z.id} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    {z.ar}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    s -= 1;

    // مراحل التعلم (لكل كتلة نظرية)
    if (s < learnBlocks.length) {
      const block = learnBlocks[s];
      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="flex items-center gap-2 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              القاعدة {s + 1} من {learnBlocks.length}
            </p>
            <h3 className="mt-1 text-lg font-extrabold">{block.titleAr}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              <TextDe text={block.titleDe} />
            </p>
          </div>
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-relaxed">{block.explanationAr}</p>
            <SpeakRule text={block.explanationAr} />
          </div>
          {block.examples && block.examples.length > 0 && (
            <div className="space-y-2">
              {block.examples.slice(0, 2).map((ex, i) => (
                <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-muted bg-muted/20 p-3">
                  <div>
                    <TextDe text={ex.de} />
                    <p className="mt-0.5 text-sm text-muted-foreground">{ex.ar}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    s -= learnBlocks.length;

    // مرحلة التدريب (تتكشف التمارين واحداً واحداً)
    if (practiceCount > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-strong">
              <PenLine className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">الآن دورك — درّب ما تعلمته</h3>
              <p className="text-xs text-muted-foreground">
                حُل التمارين واحداً تلو الآخر — كل تمرين محلول يكشف الذي يليه.
              </p>
            </div>
          </div>
          {lesson.practiceBank.slice(0, practiceShown).map((ex) => (
            <div key={ex.id}>
              <ExerciseRenderer exercise={ex} />
            </div>
          ))}
          {practiceShown >= practiceCount && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🎉 أكملت كل التمارين — أنت جاهز للمتابعة!
            </p>
          )}
        </div>
      );
    }

    if (practiceCount > 0) s -= 1;

    // مرحلة الاستماع
    if (hasListening && s === 0) {
      const item = lesson.listening.items[0];
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Headphones className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="text-base font-extrabold">استمع ثم أجب</h3>
          </div>
          <div className="rounded-xl border border-muted bg-muted/20 p-4">
            <p className="text-xs font-bold text-primary">{item.title}</p>
            <div className="mt-3 space-y-2">
              {item.lines.map((line, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold text-primary">{line.speaker}</p>
                    <TextDe text={line.de} />
                    <p className="text-xs text-muted-foreground">{line.ar}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            🔊 اضغط زر الصوت بجانب كل سطر لسماعه، ثم أجب عن الأسئلة في التقييم.
          </p>
        </div>
      );
    }

    if (hasListening) s -= 1;

    // مرحلة الاختبار السريع
    if (quizCount > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626]">
              <Trophy className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">اختبار سريع — أثبت فهمك</h3>
              <p className="text-xs text-muted-foreground">أجب عن الأسئلة التالية لتثبيت ما تعلمته.</p>
            </div>
          </div>
          {quizQuestions.slice(0, quizCount).map((q, i) => (
            <div key={q.id}>
              <MultipleChoiceExercise
                exercise={q}
                onResult={() => setQuizAnswered((n) => Math.max(n, i + 1))}
              />
            </div>
          ))}
          {quizAnswered >= quizCount && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🏆 أحسنت! أنهيت اختبار الدرس.
            </p>
          )}
        </div>
      );
    }

    // مرحلة أخطائي اليوم: إعادة التمارين الخاطئة لتثبيتها (المستوى الذهبي)
    if (mistakes.length > 0 && s === 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold">أخطاؤك اليوم — أعد حلها لتثبيتها</h3>
              <p className="text-xs text-muted-foreground">
                أخطأت في {mistakes.length} {mistakes.length === 1 ? "سؤال" : "أسئلة"} — أعد حلها الآن لترسخ.
              </p>
            </div>
          </div>
          {mistakes.map((m) => (
            <div key={m.id}>
              <ExerciseRenderer
                exercise={m}
                onResult={(r) => {
                  if (r.isCorrect) {
                    setMistakes((prev) => prev.filter((x) => x.id !== m.id));
                  }
                }}
              />
            </div>
          ))}
          {mistakes.length === 0 && (
            <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
              🎉 صحّحت كل أخطائك — تثبّتت!
            </p>
          )}
        </div>
      );
    }

    if (mistakes.length > 0) s -= 1;

    // المرحلة الأخيرة: الإكمال
    return (
      <div className="space-y-4 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">🎓</span>
        <h3 className="text-xl font-extrabold">أنهيت الدرس!</h3>
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          {lesson.summary}
        </p>
        {mistakes.length === 0 && (
          <p className="mx-auto max-w-md rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
            🏆 بلا أخطاء في هذه الجلسة — أداء ممتاز!
          </p>
        )}
      </div>
    );
  };

  /* ── الواجهة ── */
  return (
    <div>
      {/* شريط التقدم العلوي اللاصق */}
      <div className="sticky top-16 z-30 mb-5 rounded-xl border bg-background/90 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Progress value={progressPct} className="progress-gradient h-2.5" aria-label={`تقدم الدرس ${progressPct}%`} />
          <span className="font-de shrink-0 text-sm font-extrabold text-primary">{progressPct}%</span>
          <span className="shrink-0 text-[11px] font-bold text-muted-foreground">
            {stage + 1}/{totalStages}
          </span>
        </div>
        <p className="mt-1 text-center text-[11px] font-semibold text-muted-foreground">
          {done ? "🎉 اكتمل الدرس" : "تفاعل مع كل خطوة — المحتوى يتكشف معك"}
        </p>
      </div>

      {/* محتوى المرحلة الحالية */}
      <div key={stage} className="lesson-step-enter fade-up rounded-2xl border bg-card p-4 shadow-soft sm:p-6">
        {renderStage()}
      </div>

      {/* زر المتابعة */}
      <div className="mt-6 flex items-center justify-center">
        {stage < totalStages - 1 ? (
          <Button
            size="lg"
            className="gap-2 px-10 text-base"
            onClick={next}
            disabled={
              (stage === 2 + learnBlocks.length && practiceCount > 0 && practiceShown < practiceCount) ||
              (stage === totalStages - 2 && quizCount > 0 && quizAnswered < quizCount) ||
              (hasMistakeStage && stage === totalStages - 2 && mistakes.length > 0)
            }
          >
            متابعة
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
        ) : (
          <Button size="lg" variant="gold" className="gap-2 px-10 text-base" onClick={next}>
            <Trophy className="h-5 w-5" aria-hidden="true" />
            أكمل الدرس
          </Button>
        )}
      </div>

      {/* إرشاد صغير */}
      {stage === 2 + learnBlocks.length && practiceCount > 0 && practiceShown < practiceCount && (
        <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
          🔒 حُلّ التمرين الظاهر ليُكشف التالي — ثم يُفعَّل زر «متابعة».
        </p>
      )}
      {stage === totalStages - 2 && quizCount > 0 && quizAnswered < quizCount && (
        <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
          🔒 أجب عن جميع الأسئلة ليُفعَّل زر «متابعة».
        </p>
      )}
    </div>
  );
}

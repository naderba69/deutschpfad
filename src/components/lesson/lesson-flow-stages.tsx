"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  مراحل تدفق الدرس — مُستخرَجة من lesson-flow.tsx (المرحلة 4)
 *  كل مرحلة مكوّن مستقلّ يستقبل ما يحتاجه صراحةً (بلا حالة داخلية).
 *  النقل حرفيّ: الوسوم والنصوص كما هي — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import * as React from "react";
import {ArrowLeft, CheckCircle2, Hand, Headphones, PenLine, RotateCcw, Sparkles, Trophy, Volume2} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {Celebration} from "@/components/gamification/celebration";
import {InterleavingReview} from "@/components/lesson/sections/interleaving-review";
import {TextDe} from "@/components/shared/text-de";
import {RichText} from "@/components/shared/rich-text";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {reviewLevelLabel} from "@/lib/lesson/review-generator";
import type { Exercise, Lesson, ListeningQuestion, McqExercise, TheoryBlock } from "@/types/lesson";

/** زر «استمع للقاعدة» — يقرأ الشرح بصوت (TTS) */
export function SpeakRule({ text }: { text: string }) {
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
 * المرحلة 0 — الافتتاح: مراجعة تراكمية + سؤال تحفيزي + الأهداف + التحدي الزمني.
 */
export function OpeningStage({
  lesson,
  reviewQuestions,
  timeBonus,
  setTimeBonus,
}: {
  lesson: Lesson;
  reviewQuestions: Exercise[];
  timeBonus: boolean;
  setTimeBonus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="space-y-5 text-center">
      {/* المراجعة التراكمية من المستوى السابق (تظهر قبل البدء) */}
      {reviewQuestions.length > 0 && (
        <div className="text-start">
          <InterleavingReview
            review={reviewQuestions}
            levelLabel={reviewLevelLabel(reviewQuestions, lesson.level)}
          />
        </div>
      )}
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
      {/* تحدي زمني */}
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/5 p-3">
        <p className="text-start text-sm">
          <span className="font-bold">التحدي الزمني:</span> أجب خلال 15 ثانية لتحصل على +5 XP إضافية لكل سؤال.
        </p>
        <button
          type="button"
          onClick={() => setTimeBonus((v) => !v)}
          className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
            timeBonus ? "bg-primary text-primary-foreground" : "bg-background border border-primary/40 hover:bg-primary/10"
          }`}
        >
          {timeBonus ? "✓ مفعّل" : "فعّل"}
        </button>
      </div>
    </div>
  );
}

/**
 * مراحل التعلّم — كتلة نظرية واحدة في كل مرحلة (الشرح + الأمثلة + زر النطق).
 */
export function TheoryStage({
  block,
  index,
  total,
}: {
  block: TheoryBlock;
  index: number;
  total: number;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="flex items-center gap-2 text-xs font-bold text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          القاعدة {index + 1} من {total}
        </p>
        <h3 className="mt-1 text-lg font-extrabold">{block.titleAr}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          <TextDe text={block.titleDe} />
        </p>
      </div>
      <div className="flex items-start justify-between gap-3">
        <RichText text={block.explanationAr} className="space-y-2 text-sm leading-relaxed" />
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

/**
 * مرحلة التدريب — التمارين تتكشف واحداً واحداً حتى آخر تمرين متاح.
 */
export function PracticeStage({
  lesson,
  practiceCount,
  practiceShown,
}: {
  lesson: Lesson;
  practiceCount: number;
  practiceShown: number;
}) {
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
          <ExerciseRenderer
            exercise={ex}
            onResult={(r) => {
              void import("@/lib/analytics/events").then(({recordEvent}) =>
                recordEvent({
                  type: "exercise-result",
                  exerciseId: ex.id,
                  exerciseType: ex.type,
                  correct: r.isCorrect,
                  points: r.pointsEarned,
                  errorType: r.errorType,
                  lessonId: lesson.id,
                  taskId: `flow-practice:${lesson.id}:${ex.id}`,
                }),
              );
            }}
          />
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

/**
 * مرحلة الاستماع — النص مخفي حتى يختار المتعلم إظهاره، والأسئلة اختيارية.
 */
export function ListeningStage({
  lesson,
  listeningQuestions,
  showListeningTranscript,
  setShowListeningTranscript,
  next,
}: {
  lesson: Lesson;
  listeningQuestions: ListeningQuestion[];
  showListeningTranscript: boolean;
  setShowListeningTranscript: React.Dispatch<React.SetStateAction<boolean>>;
  next: () => void;
}) {
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
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold text-primary">{item.title}</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowListeningTranscript((visible) => !visible)}
            aria-pressed={showListeningTranscript}
          >
            {showListeningTranscript ? "أخف النص" : "أظهر النص بعد الاستماع"}
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          إجابات هذا المسار لا تُستخدم دليلاً على الاستماع، سواء أظهرت النص أم أخفيته.
        </p>
        <div className="mt-3 space-y-2">
          {item.lines.map((line, i) => (
            <div key={i} className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-bold text-primary">{line.speaker}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <SpeakButton text={line.de} />
                  {showListeningTranscript ? (
                    <span className="font-de" dir="ltr" lang="de">{line.de}</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">النص مخفي</span>
                  )}
                </div>
                {showListeningTranscript && (
                  <p className="text-xs text-muted-foreground">{line.ar}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* أسئلة الفهم إن وُجدت (اختياري) — حتى لا يُحبس المتعلم */}
      {listeningQuestions.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-bold text-muted-foreground">أسئلة الفهم (اختيارية):</p>
          {listeningQuestions.map((q) => (
            <MultipleChoiceExercise
              key={q.id}
              exercise={q}
              onResult={(r) => {
                // اربط نتيجة السؤال بمهارة الاستماع وسياق الدرس والمهمة، لا بتخمين نوع التمرين.
                void import("@/lib/analytics/events").then(({recordEvent}) =>
                  recordEvent({
                    type: "exercise-result",
                    exerciseId: q.id,
                    exerciseType: q.type,
                    correct: r.isCorrect,
                    points: r.pointsEarned,
                    errorType: r.errorType,
                    skill: "الاستماع",
                    lessonId: lesson.id,
                    // Flow questions may be answered after the optional transcript is revealed;
                    // keep them separate from dedicated hidden-transcript listening evidence.
                    taskId: `flow-listening:${lesson.id}:${q.itemId}:${q.id}`,
                  }),
                );
              }}
            />
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        🔊 اضغط زر الصوت بجانب كل سطر لسماعه. استمع جيداً، ثم تابع.
      </p>
      <Button size="sm" onClick={next} className="gap-1.5">
        استمعت وفهمت — تابع
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}

/**
 * الاختبار السريع — أسئلة MCQ من الاختبار المصغّر للدرس.
 */
export function QuizStage({
  lesson,
  quizQuestions,
  quizCount,
  quizAnswered,
  setQuizAnswered,
}: {
  lesson: Lesson;
  quizQuestions: McqExercise[];
  quizCount: number;
  quizAnswered: number;
  setQuizAnswered: React.Dispatch<React.SetStateAction<number>>;
}) {
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
            onResult={(r) => {
              setQuizAnswered((n) => Math.max(n, i + 1));
              void import("@/lib/analytics/events").then(({recordEvent}) =>
                recordEvent({
                  type: "exercise-result",
                  exerciseId: q.id,
                  exerciseType: q.type,
                  correct: r.isCorrect,
                  points: r.pointsEarned,
                  errorType: r.errorType,
                  lessonId: lesson.id,
                  taskId: `flow-mini-test:${lesson.id}:${q.id}`,
                }),
              );
            }}
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

/**
 * «أخطاؤك اليوم» — إعادة التمارين الخاطئة لتثبيتها (المستوى الذهبي).
 */
export function MistakesStage({
  mistakes,
  setMistakes,
}: {
  mistakes: Exercise[];
  setMistakes: React.Dispatch<React.SetStateAction<Exercise[]>>;
}) {
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

/**
 * المرحلة الأخيرة — الإكمال: احتفال + ملخّص النقاط + نجوم الإتقان + إرشاد الانتقال.
 */
export function FinalStage({
  lesson,
  xpEarned,
  hearts,
  streakPoints,
  mistakes,
  timeBonus,
}: {
  lesson: Lesson;
  xpEarned: number;
  hearts: number;
  streakPoints: number;
  mistakes: Exercise[];
  timeBonus: boolean;
}) {
  // المرحلة الأخيرة: الإكمال
  return (
    <div className="space-y-4">
      <Celebration
        title="أنهيت الدرس! 🎉"
        subtitle={lesson.summary}
        emoji="🎓"
        stats={[
          { label: "نقاط XP", value: `⚡${xpEarned}` },
          { label: "قلوب متبقية", value: `❤️${hearts}` },
          { label: "مكافآت سرعة", value: `${streakPoints}` },
        ]}
      />
      {mistakes.length === 0 && (
        <p className="mx-auto max-w-md rounded-lg bg-success/10 px-3 py-2 text-center text-sm font-bold text-success">
          🏆 بلا أخطاء في هذه الجلسة — أداء ممتاز!
        </p>
      )}
      {mistakes.length > 0 && (
        <p className="mx-auto max-w-md rounded-lg bg-gold/10 px-3 py-2 text-center text-sm font-bold text-gold-strong">
          📖 راجعت {mistakes.length} خطأ — هذا هو طريق الإتقان.
        </p>
      )}
      {/* نجوم الإتقان */}
      <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-xl border bg-gold/10 px-4 py-2.5">
        <div className="flex items-center gap-1" aria-label="نجوم إتقانك">
          {[0, 1, 2].map((i) => {
            const filled = i < (mistakes.length === 0 ? 2 : 1) + (timeBonus && streakPoints > 0 ? 1 : 0);
            return (
              <span key={i} className={`text-2xl transition-all ${filled ? "" : "opacity-25 grayscale"}`} aria-hidden="true">
                ⭐
              </span>
            );
          })}
        </div>
        <p className="text-[11px] font-bold text-muted-foreground">
          الإتقان: أُنجز + {mistakes.length === 0 ? "بلا أخطاء" : "أخطاء"} {timeBonus && streakPoints > 0 ? "+ سرعة" : ""}
        </p>
      </div>
      {/* إرشاد الانتقال: الزر السفلي يسجّل الإنجاز ويفتح الدرس التالي */}
      <p className="mx-auto max-w-md rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 text-center text-xs font-bold leading-relaxed text-primary">
        👇 اضغط «أكمل الدرس» بالأسفل — سيُسجَّل إنجازك في مسارك، وستظهر لك بطاقة الدرس
        التالي للانتقال إليه مباشرة.
      </p>
    </div>
  );
}

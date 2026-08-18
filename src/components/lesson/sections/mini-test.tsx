"use client";

import * as React from "react";
import {Award, ClipboardCheck, RotateCcw, Trophy} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {recordEvent} from "@/lib/analytics/events";
import {addLessonFlashcards} from "@/lib/srs/flashcard-service";
import {cn} from "@/lib/utils";
import type { Exercise, FeedbackResult, Flashcard } from "@/types/lesson";

/** نسبة النجاح المطلوبة لاعتبار الاختبار ناجحاً */
const PASS_THRESHOLD = 60;

/**
 * 9) التقييم الختامي (Mini-Test)
 * — تصحيح فوري مع شرح «لماذا» وتصنيف الخطأ
 * — يتقدم تلقائياً عند الإجابة الصحيحة
 * — عند النجاح: تُعلَّم الوحدة مكتملة + تُضاف بطاقات الدرس لحقيبة SM-2 —
 */
export function MiniTestSection({
  questions,
  unitId,
  lessonId,
  flashcards,
  lessonDone = false,
}: {
  questions: Exercise[];
  unitId: string;
  lessonId?: string;
  flashcards?: Flashcard[];
  /** ═══ P1-01: هل الدرس مكتمل سابقاً؟ — يمنع تكرار مكافأة/حدث الإكمال ═══ */
  lessonDone?: boolean;
}) {
  const { completeUnit } = useProgress();
  const [index, setIndex] = React.useState(0);
  const [scores, setScores] = React.useState<Record<string, boolean>>({});
  const [wrongCount, setWrongCount] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [round, setRound] = React.useState(0);
  const [cardsAdded, setCardsAdded] = React.useState(false);

  const current = questions[index];
  const answered = Object.keys(scores).length;
  const score = Math.round((Object.values(scores).filter(Boolean).length / questions.length) * 100);
  const passed = score >= PASS_THRESHOLD;

  const handleResult = (result: FeedbackResult, exercise: Exercise) => {
    if (scores[exercise.id] !== undefined) return; // لا تُحسب إعادة المحاولة مرتين
    setScores((prev) => ({ ...prev, [exercise.id]: result.isCorrect }));
    if (!result.isCorrect) setWrongCount((c) => c + 1);

    void recordEvent({
      type: "exercise-result",
      exerciseId: exercise.id,
      exerciseType: exercise.type,
      correct: result.isCorrect,
      points: result.pointsEarned,
      errorType: result.errorType,
    });

    // التقدم التلقائي بعد 900ms ليتسنى للمتعلم قراءة التصحيح
    setTimeout(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= questions.length) {
          setFinished(true);
          return i;
        }
        return next;
      });
    }, 900);
  };

  const restart = () => {
    setIndex(0);
    setScores({});
    setWrongCount(0);
    setFinished(false);
    setRound((r) => r + 1);
  };

  // عند الانتهاء الناجح → تعليم الوحدة + إضافة البطاقات + تسجيل الحدث
  // ═══ P1-01: لا نكرر حدث/مكافأة الإكمال إن كان الدرس مكتملاً سابقاً ═══
  React.useEffect(() => {
    if (finished && passed) {
      completeUnit(unitId);
      if (lessonId && !lessonDone) {
        void recordEvent({ type: "lesson-completed", lessonId, unitId });
      }
      if (flashcards && flashcards.length > 0 && !cardsAdded) {
        void addLessonFlashcards(flashcards).then(() => setCardsAdded(true));
      }
    }
  }, [finished, passed, unitId, lessonId, flashcards, cardsAdded, lessonDone, completeUnit]);

  if (finished) {
    return (
      <div className="rounded-2xl border bg-muted/20 p-6 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {passed ? (
            <Trophy className="h-8 w-8 text-gold-strong" aria-hidden="true" />
          ) : (
            <RotateCcw className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
          )}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold">
          {passed ? "أحسنت! اجتزت التقييم 🎉" : "لا بأس — المحاولة جزء من التعلم"}
        </h3>
        <p className="font-de mt-2 text-4xl font-extrabold text-primary">{score}%</p>
        <p className="mt-2 text-sm text-muted-foreground">
          أجبت صحيحاً على {Object.values(scores).filter(Boolean).length} من {questions.length}
          {!passed && " — أعد المحاولة بعد مراجعة الشرح، أو انتقل للبطاقات لتثبيت المفردات."}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {passed && (
            <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-bold text-success">
              <Award className="h-4 w-4" aria-hidden="true" />
              وحدة «{unitId}» عُلِّمت مكتملة ✓
              {cardsAdded && " + بطاقات الدرس أُضيفت لحقيبة SM-2"}
            </span>
          )}
          <Button variant="outline" onClick={restart}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            إعادة الاختبار
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-xl border bg-muted/30 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <ClipboardCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            اختبار قصير — {questions.length} أسئلة · نجاحك يحتاج {PASS_THRESHOLD}%+
          </p>
          <span className="font-de text-sm font-bold text-muted-foreground">
            سؤال {index + 1} / {questions.length}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={(answered / questions.length) * 100} aria-label="التقدم في الاختبار" />
          <span className="font-de shrink-0 text-sm font-bold text-primary">{answered}/{questions.length}</span>
        </div>
      </div>

      {current && (
        <div key={`${current.id}-${round}`}>
          <ExerciseRenderer exercise={current} onResult={(r) => handleResult(r, current)} />
        </div>
      )}

      <div className="flex gap-1.5" aria-label="تقدم الأسئلة">
        {questions.map((q, i) => {
          const state = scores[q.id];
          return (
            <span
              key={q.id}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                state === true && "bg-success",
                state === false && "bg-destructive",
                state === undefined && (i === index ? "bg-primary" : "bg-muted"),
              )}
            />
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        {wrongCount > 0
          ? `لاحظت ${wrongCount} خطأً حتى الآن — كل خطأ مصنّف لك في التصحيح الفوري.`
          : "لا أخطاء حتى الآن — استمر! ⭐"}
      </p>
    </div>
  );
}

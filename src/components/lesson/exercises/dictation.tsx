"use client";

import * as React from "react";
import {CheckCircle2, Headphones, RotateCcw, Send, XCircle} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateDictation} from "@/lib/lesson/exercise-engine";
import {normalizeGermanText} from "@/lib/speech/scoring";
import {speakRepeated} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import type { DictationExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين الإملاء الصوتي (Diktat) — المرحلة 3 المحسّن:
 * — نطق بسرعات مختلفة + تشغيل متكرر + تحليل كلمة-بكلمة —
 */
export function DictationExerciseView({
  exercise,
  onResult,
}: {
  exercise: DictationExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [answer, setAnswer] = React.useState("");
  const [wordAnalysis, setWordAnalysis] = React.useState<{
    correct: string[];
    missed: string[];
  } | null>(null);
  const state = useExerciseState(exercise);
  const locked = state.result?.isCorrect === true || state.revealedSolution;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === "") return;
    const feedback = evaluateDictation(exercise, answer);
    state.submit(feedback);
    onResult?.(feedback);

    // تحليل الكلمات: صحيحة / ناقصة
    if (!feedback.isCorrect) {
      const targetWords = normalizeGermanText(exercise.audioText).split(" ").filter(Boolean);
      const answerWords = normalizeGermanText(answer).split(" ").filter(Boolean);
      const correct = targetWords.filter((w) => answerWords.includes(w));
      const missed = targetWords.filter((w) => !answerWords.includes(w));
      setWordAnalysis({ correct, missed });
    } else {
      setWordAnalysis(null);
    }
  };

  const handleRetry = () => {
    setAnswer("");
    setWordAnalysis(null);
    state.retry();
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      {/* لوحة التحكم الصوتي */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-muted/30 p-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Headphones className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">استمع بتركيز ثم اكتب ما سمعت</p>
          <p className="text-xs text-muted-foreground">
            ابدأ بالبطيء، ثم جرّب العادي — ويمكنك تشغيل الجملة مرتين متتاليتين
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => speakRepeated(exercise.audioText, 1, { rate: 0.75 })}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            بطيء
          </Button>
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => speakRepeated(exercise.audioText, 1, { rate: 1 })}
          >
            عادي
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => speakRepeated(exercise.audioText, 2, { rate: 1 })}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            ×2 متتالي
          </Button>
        </div>
      </div>

      {/* حقل الكتابة */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-end gap-2">
          <AutoGrowTextarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onEnter={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
            disabled={locked || state.revealedSolution}
            placeholder="اكتب الجملة التي سمعتها…"
            aria-label="النص المسموع"
            autoComplete="off"
            dir="ltr"
            lang="de"
            className="font-de flex-1"
          />
          <Button type="submit" disabled={answer.trim() === "" || locked} className="shrink-0 gap-1.5">
            <Send className="h-4 w-4" aria-hidden="true" />
            تحقق
          </Button>
        </div>
      </form>

      {/* تحليل الكلمات بعد الخطأ */}
      {wordAnalysis && !locked && (
        <div className="space-y-2 rounded-xl border border-amber-300/50 bg-amber-50/60 p-3 text-sm dark:border-amber-500/30 dark:bg-amber-500/10">
          <p className="font-bold">تحليل إملائك:</p>
          <div className="flex flex-wrap items-center gap-1.5">
            {normalizeGermanText(exercise.audioText)
              .split(" ")
              .filter(Boolean)
              .map((word, i) => {
                const ok = wordAnalysis.correct.includes(word);
                return (
                  <span
                    key={i}
                    className={cn(
                      "font-de rounded-md px-1.5 py-0.5",
                      ok ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
                    )}
                    dir="ltr"
                    lang="de"
                  >
                    {word}
                    {ok ? (
                      <CheckCircle2 className="ms-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                    ) : (
                      <XCircle className="ms-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                    )}
                  </span>
                );
              })}
          </div>
          <p className="text-xs text-muted-foreground">
            أتقنت {wordAnalysis.correct.length} من {wordAnalysis.correct.length + wordAnalysis.missed.length} كلمة —
            أعد الاستماع ببطء وركّز على الكلمات المعلّمة بالأحمر.
          </p>
        </div>
      )}

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.audioText}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
    </div>
  );
}

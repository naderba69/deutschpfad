"use client";

import * as React from "react";

import {Lightbulb} from "lucide-react";
import {SpeakButton} from "@/components/shared/speak-button";
import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
;
import {evaluateMcq} from "@/lib/lesson/exercise-engine";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { McqExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين الاختيار من متعدد — خيارات مخلوطة عشوائياً في كل عرض
 */
export function MultipleChoiceExercise({
  exercise,
  onResult,
}: {
  exercise: McqExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [options] = React.useState(() => shuffle(exercise.options));
  const [selected, setSelected] = React.useState<string | null>(null);
  const state = useExerciseState(exercise);

  const correctOption = exercise.options[exercise.correctIndex];

  const handleSelect = (option: string) => {
    if (state.result?.isCorrect) return;
    setSelected(option);
    const feedback = evaluateMcq(exercise, option);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setSelected(null);
    state.retry();
  };

  // التلميح المتدرج: يظهر تلقائياً بعد خطأ أول (إن وُجد تلميح)
  const showHintAfterError = state.attempts > 0 && !state.result?.isCorrect && exercise.hint != null;

  return (
    <div className="space-y-4">
      <div className="rounded-xl border bg-muted/30 p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="font-de text-lg font-semibold" dir="ltr" lang="de">
            {exercise.questionDe}
          </p>
          <SpeakButton text={exercise.questionDe} />
        </div>
        {exercise.questionAr && (
          <p className="mt-1 text-sm text-muted-foreground">{exercise.questionAr}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="radiogroup" aria-label={exercise.instructionAr}>
        {options.map((option, i) => {
          const isCorrectOption = option === correctOption;
          const isSelected = option === selected;
          const isLocked = state.result?.isCorrect === true;
          const showState =
            selected !== null && (isSelected || (state.revealedSolution && isCorrectOption) || (state.result && !state.result.isCorrect && isCorrectOption));

          return (
            <button
              key={`${option}-${i}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isLocked || state.revealedSolution}
              onClick={() => handleSelect(option)}
              className={cn(
                "rounded-xl border bg-background px-4 py-3 text-start transition-all",
                "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]",
                showState && isCorrectOption && "border-success/60 bg-success/10 text-success",
                showState && isSelected && !isCorrectOption && "border-destructive/60 bg-destructive/10 text-destructive",
                isLocked && !showState && "opacity-60",
                state.revealedSolution && !isCorrectOption && "opacity-50",
              )}
            >
              <span className="font-de font-medium" dir="ltr" lang="de">
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* تلميح متدرج: يظهر بعد خطأ أول */}
      {showHintAfterError && (
        <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
          <p>
            <span className="font-bold text-gold-strong">تلميح:</span> {exercise.hint}
          </p>
        </div>
      )}

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={correctOption}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
      {!state.result && !state.revealedSolution && (
        <p className="text-xs text-muted-foreground">{exercise.instructionAr}</p>
      )}
    </div>
  );
}

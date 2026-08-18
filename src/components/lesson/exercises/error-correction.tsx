"use client";

import * as React from "react";
import {Wrench} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateErrorCorrection} from "@/lib/lesson/exercise-engine";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { ErrorCorrectionExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين تصحيح الخطأ — أشر إلى الكلمة الخاطئة ثم اختر التصحيح الصحيح
 */
export function ErrorCorrectionExerciseView({
  exercise,
  onResult,
}: {
  exercise: ErrorCorrectionExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [options] = React.useState(() => shuffle(exercise.options));
  const [selected, setSelected] = React.useState<string | null>(null);
  const state = useExerciseState(exercise);

  const locked = state.result?.isCorrect === true || state.revealedSolution;

  const handleSelect = (option: string) => {
    if (locked) return;
    setSelected(option);
    const feedback = evaluateErrorCorrection(exercise, option);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setSelected(null);
    state.retry();
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      {/* الجملة الخاطئة مع تمييز الكلمة المشكوك فيها */}
      <div className="rounded-xl border bg-muted/30 p-4">
        <p className="flex flex-wrap items-center gap-x-1.5 text-lg leading-relaxed" dir="ltr" lang="de">
          {exercise.wrongSentence.split(/(\s+)/).map((word, i) => {
            const isTarget = word.replace(/[^a-zA-ZäöüßÄÖÜ]/g, "") === exercise.wrongWord.replace(/[^a-zA-ZäöüßÄÖÜ]/g, "");
            return (
              <span key={i}>
                {isTarget ? (
                  <span className="rounded-md bg-destructive/15 px-1.5 py-0.5 font-de font-bold text-destructive line-through decoration-2">
                    {word}
                  </span>
                ) : (
                  <span className="font-de">{word}</span>
                )}
              </span>
            );
          })}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          <Wrench className="inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
          {" "}اكتشف الخطأ ثم اختر التصحيح الصحيح:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="radiogroup" aria-label="خيارات التصحيح">
        {options.map((option, i) => {
          const isCorrectOption = option === exercise.correctWord;
          const isSelected = option === selected;
          const showState =
            selected !== null && (isSelected || (state.revealedSolution && isCorrectOption) || (state.result && !state.result.isCorrect && isCorrectOption));

          return (
            <button
              key={`${option}-${i}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={locked || state.revealedSolution}
              onClick={() => handleSelect(option)}
              className={cn(
                "rounded-xl border bg-background px-4 py-3 text-start transition-all",
                "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]",
                showState && isCorrectOption && "border-success/60 bg-success/10 text-success",
                showState && isSelected && !isCorrectOption && "border-destructive/60 bg-destructive/10 text-destructive",
                locked && !showState && "opacity-60",
              )}
            >
              <span className="font-de font-medium" dir="ltr" lang="de">
                {option}
              </span>
            </button>
          );
        })}
      </div>

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.correctWord}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
      {!state.result && !state.revealedSolution && (
        <Button variant="outline" size="sm" onClick={state.revealSolution}>
          لا أعرف — أرني الحل
        </Button>
      )}
    </div>
  );
}

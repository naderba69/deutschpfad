"use client";

import * as React from "react";
import {Wrench} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {NO_ERROR_OPTION, buildHighlightSegments} from "@/lib/lesson/error-correction-highlight";
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
  // خيار «لا خطأ» يُعرض في *كل* بنود التصحيح، لا في البنود الخادعة وحدها:
  // لو ظهر عند الخدعة فقط لصار وجوده ذاته كاشفاً للإجابة.
  const [options] = React.useState(() =>
    shuffle([
      ...exercise.options.filter(
        (o) => o !== NO_ERROR_OPTION && !(exercise.isAlreadyCorrect && o === exercise.correctWord),
      ),
      NO_ERROR_OPTION,
    ]),
  );
  // لا نشطب شيئاً حين تكون الجملة سليمة — الشطب وحده يوحي بوجود خطأ
  const segments = React.useMemo(
    () =>
      exercise.isAlreadyCorrect
        ? [{ text: exercise.wrongSentence, isTarget: false }]
        : buildHighlightSegments(exercise.wrongSentence, exercise.wrongWord),
    [exercise.isAlreadyCorrect, exercise.wrongSentence, exercise.wrongWord],
  );
  const expectedAnswer = exercise.isAlreadyCorrect ? NO_ERROR_OPTION : exercise.correctWord;
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
        <p className="text-lg leading-relaxed" dir="ltr" lang="de">
          {segments.map((segment, i) =>
            segment.isTarget ? (
              <span
                key={i}
                className="rounded-md bg-destructive/15 px-1.5 py-0.5 font-de font-bold text-destructive line-through decoration-2"
              >
                {segment.text}
              </span>
            ) : (
              <span key={i} className="font-de">
                {segment.text}
              </span>
            ),
          )}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          <Wrench className="inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
          {" "}
          {"اقرأ الجملة بتمعّن: قد تحتوي خطأً واحداً وقد تكون صحيحة كما هي."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="radiogroup" aria-label="خيارات التصحيح">
        {options.map((option, i) => {
          const isCorrectOption = option === expectedAnswer;
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
        solution={expectedAnswer}
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

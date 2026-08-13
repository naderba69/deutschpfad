"use client";

import * as React from "react";
import {Check} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateFillBlank} from "@/lib/lesson/exercise-engine";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { FillBlankExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين إكمال الفراغات — كل فراغ له قائمة خيارات منسدلة (أو بنك كلمات)
 */
export function FillBlankExerciseView({
  exercise,
  onResult,
}: {
  exercise: FillBlankExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [answers, setAnswers] = React.useState<string[]>(() =>
    exercise.blanks.map(() => ""),
  );
  const state = useExerciseState(exercise);
  const locked = state.result?.isCorrect === true || state.revealedSolution;

  // تقسيم القالب على الفراغات
  const parts = exercise.template.split("___");

  const setAnswer = (index: number, value: string) => {
    if (locked) return;
    setAnswers((prev) => prev.map((a, i) => (i === index ? value : a)));
  };

  const handleCheck = () => {
    if (answers.some((a) => a.trim() === "")) return;
    const feedback = evaluateFillBlank(exercise, answers);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setAnswers(exercise.blanks.map(() => ""));
    state.retry();
  };

  const allFilled = answers.every((a) => a.trim() !== "");

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      <div className="rounded-xl border bg-muted/30 p-4">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-lg leading-relaxed" dir="ltr" lang="de">
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              <span className="font-de">{part}</span>
              {i < exercise.blanks.length && (
                <span className="inline-flex flex-col">
                  {locked || state.revealedSolution ? (
                    <span className="rounded-lg bg-success/15 px-3 py-1 font-de font-bold text-success" dir="ltr" lang="de">
                      {exercise.blanks[i].correct}
                    </span>
                  ) : (
                    <select
                      value={answers[i]}
                      onChange={(e) => setAnswer(i, e.target.value)}
                      aria-label={`الفراغ ${i + 1}`}
                      className={cn(
                        "h-10 rounded-lg border bg-background px-2 font-de text-base font-semibold outline-none transition-colors",
                        "focus:border-primary focus:ring-2 focus:ring-ring",
                        answers[i] ? "border-primary/50" : "border-input text-muted-foreground",
                      )}
                    >
                      <option value="" disabled>
                        …
                      </option>
                      {shuffleOnce(exercise.blanks[i].options ?? [exercise.blanks[i].correct]).map((opt, j) => (
                        <option key={`${opt}-${j}`} value={opt} dir="ltr">
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      {!locked && !state.revealedSolution && (
        <Button onClick={handleCheck} disabled={!allFilled} className="gap-1.5">
          <Check className="h-4 w-4" aria-hidden="true" />
          تحقق من الإجابة
        </Button>
      )}

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.blanks.map((b) => b.correct).join(" · ")}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
    </div>
  );
}

/** خلط خيارات فراغ (مع إبقاء التتابع مستقراً داخل نفس العرض) */
const optionCache = new WeakMap<object, string[]>();
function shuffleOnce(options: string[]): string[] {
  if (optionCache.has(options)) return optionCache.get(options)!;
  const shuffled = shuffle(options);
  optionCache.set(options, shuffled);
  return shuffled;
}

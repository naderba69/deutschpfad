"use client";

import * as React from "react";
import {Check} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateMatching} from "@/lib/lesson/exercise-engine";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { MatchingExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين الوصل — انقر عنصراً من اليسار ثم نظيره من اليمين
 * (بديل لمسي كامل يعمل على الموبايل والديسكتوب)
 */
export function MatchingExerciseView({
  exercise,
  onResult,
}: {
  exercise: MatchingExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [leftOrder] = React.useState(() => shuffle(exercise.pairs));
  const [rightOrder] = React.useState(() => shuffle(exercise.pairs));
  const [selectedLeft, setSelectedLeft] = React.useState<string | null>(null);
  const [matched, setMatched] = React.useState<{ left: string; right: string }[]>([]);
  const state = useExerciseState(exercise);

  const locked = state.result?.isCorrect === true || state.revealedSolution;

  const rightForLeft = (left: string) => exercise.pairs.find((p) => p.left === left)?.right;

  const handleLeftClick = (left: string) => {
    if (locked) return;
    if (matched.some((m) => m.left === left)) return;
    setSelectedLeft((prev) => (prev === left ? null : left));
  };

  const handleRightClick = (right: string) => {
    if (locked || !selectedLeft) return;
    const correct = rightForLeft(selectedLeft);
    if (right === correct) {
      setMatched((prev) => [...prev, { left: selectedLeft, right }]);
      setSelectedLeft(null);
    } else {
      // خطأ: وميض ثم إعادة الاختيار
      setSelectedLeft(null);
    }
  };

  const isLeftMatched = (left: string) => matched.some((m) => m.left === left);
  const isRightMatched = (right: string) => matched.some((m) => m.right === right);

  const handleCheck = () => {
    const feedback = evaluateMatching(exercise, matched);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setMatched([]);
    setSelectedLeft(null);
    state.retry();
  };

  const allMatched = matched.length === exercise.pairs.length;

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      <div className="grid grid-cols-2 gap-3">
        {/* العمود الأيسر — الألماني */}
        <div className="space-y-2">
          {leftOrder.map((pair) => (
            <button
              key={pair.left}
              type="button"
              disabled={locked || isLeftMatched(pair.left)}
              onClick={() => handleLeftClick(pair.left)}
              className={cn(
                "flex w-full items-center justify-between gap-2 rounded-xl border bg-background px-3 py-2.5 text-start transition-all",
                "hover:border-primary/50 active:scale-[0.98]",
                selectedLeft === pair.left && "border-primary bg-primary/10 ring-2 ring-ring",
                isLeftMatched(pair.left) && "border-success/50 bg-success/5 opacity-80",
                locked && !isLeftMatched(pair.left) && "opacity-50",
              )}
              aria-pressed={selectedLeft === pair.left}
            >
              <span className="font-de font-semibold" dir="ltr" lang="de">
                {pair.left}
              </span>
              <SpeakButton text={pair.left} size="sm" className="h-7 w-7" />
            </button>
          ))}
        </div>

        {/* العمود الأيمن — العربي */}
        <div className="space-y-2">
          {rightOrder.map((pair) => (
            <button
              key={pair.right}
              type="button"
              disabled={locked || isRightMatched(pair.right)}
              onClick={() => handleRightClick(pair.right)}
              className={cn(
                "w-full rounded-xl border bg-background px-3 py-2.5 text-start transition-all",
                "hover:border-primary/50 active:scale-[0.98]",
                selectedLeft && !isRightMatched(pair.right) && "cursor-pointer",
                isRightMatched(pair.right) && "border-success/50 bg-success/5 opacity-80",
                locked && !isRightMatched(pair.right) && "opacity-50",
              )}
            >
              {pair.right}
            </button>
          ))}
        </div>
      </div>

      {!locked && !state.revealedSolution && (
        <Button onClick={handleCheck} disabled={!allMatched} className="gap-1.5">
          <Check className="h-4 w-4" aria-hidden="true" />
          تحقق من الوصل
        </Button>
      )}

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.pairs.map((p) => `${p.left} = ${p.right}`).join("  ·  ")}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
    </div>
  );
}

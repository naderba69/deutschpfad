"use client";

import * as React from "react";
import {Check, Send} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateTransformation} from "@/lib/lesson/exercise-engine";
import type { TransformationExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين التحويل — يكتب المتعلم الإجابة بحرية (نص حر) مع تحقق مرن
 */
export function TransformationExerciseView({
  exercise,
  onResult,
}: {
  exercise: TransformationExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [answer, setAnswer] = React.useState("");
  const state = useExerciseState(exercise);
  const locked = state.result?.isCorrect === true || state.revealedSolution;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === "") return;
    const feedback = evaluateTransformation(exercise, answer);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setAnswer("");
    state.retry();
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      <div className="rounded-xl border bg-muted/30 p-4">
        <p className="font-de text-lg font-semibold" dir="ltr" lang="de">
          {exercise.prompt}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-end gap-2">
          <AutoGrowTextarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onEnter={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
            disabled={locked || state.revealedSolution}
            placeholder="اكتب إجابتك هنا بالألمانية…"
            aria-label="إجابة المتعلم"
            autoComplete="off"
            dir="ltr"
            lang="de"
            className="font-de flex-1"
          />
          <Button type="submit" disabled={answer.trim() === "" || locked} className="shrink-0 gap-1.5">
            <Send className="h-4 w-4" aria-hidden="true" />
            إرسال
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          يُقبل أي صياغة صحيحة — اكتب الجملة كما تفهمها، والتصحيح يشرح لك الصيغة المثالية.
        </p>
      </form>

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.sampleAnswer}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
      {!state.result && !state.revealedSolution && (
        <Button variant="ghost" size="sm" onClick={state.revealSolution} className="gap-1.5">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          لا أعرف — أرني إجابة نموذجية
        </Button>
      )}
    </div>
  );
}

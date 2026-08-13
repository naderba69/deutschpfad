"use client";

import * as React from "react";
import type { Exercise, FeedbackResult } from "@/types/lesson";

/** عدد الأخطاء المتتالية قبل تفعيل «وضع عدم الإحباط» */
export const FRUSTRATION_THRESHOLD = 3;

/**
 * حالة التمرين المشتركة:
 * — يحفظ النتيجة والعدد المتتالي من الأخطاء
 * — يفعّل «وضع عدم الإحباط» بعد 3 أخطاء متتالية
 * — يسمح بعرض الحل
 */
export function useExerciseState(exercise: Exercise) {
  const [result, setResult] = React.useState<FeedbackResult | null>(null);
  const [consecutiveErrors, setConsecutiveErrors] = React.useState(0);
  const [revealedSolution, setRevealedSolution] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);

  const frustrated = consecutiveErrors >= FRUSTRATION_THRESHOLD;

  /** تقديم إجابة وتقييمها */
  const submit = React.useCallback(
    (feedback: FeedbackResult) => {
      setResult(feedback);
      setAttempts((a) => a + 1);
      setConsecutiveErrors((c) => (feedback.isCorrect ? 0 : c + 1));
    },
    [],
  );

  /** المحاولة مرة أخرى بعد الخطأ */
  const retry = React.useCallback(() => {
    setResult(null);
  }, []);

  /** عرض الحل */
  const revealSolution = React.useCallback(() => {
    setRevealedSolution(true);
    setResult(null);
  }, []);

  const reset = React.useCallback(() => {
    setResult(null);
    setConsecutiveErrors(0);
    setRevealedSolution(false);
    setAttempts(0);
  }, []);

  return {
    result,
    attempts,
    consecutiveErrors,
    frustrated,
    revealedSolution,
    submit,
    retry,
    revealSolution,
    reset,
  };
}

export type ExerciseState = ReturnType<typeof useExerciseState>;

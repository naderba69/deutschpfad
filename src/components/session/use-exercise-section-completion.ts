"use client";

import * as React from "react";

import {markSectionCompleted} from "@/lib/session/section-completion";
import {isSectionSolved} from "@/lib/session/solved";

/**
 * يعيد دالة `report(key, correct)` تُستدعى مع كل نتيجة تمرين داخل القسم.
 * عند اكتمال كل المفاتيح المطلوبة إجابةً صحيحة يُسجَّل إنجاز القسم مرة واحدة.
 */
export function useExerciseSectionCompletion(
  lessonId: string,
  sectionId: string,
  requiredKeys: readonly string[],
): (key: string, correct: boolean) => void {
  const solved = React.useRef(new Set<string>());
  const required = React.useRef(requiredKeys);
  const finished = React.useRef(false);
  required.current = requiredKeys;

  return React.useCallback(
    (key: string, correct: boolean) => {
      if (!correct || finished.current) return;
      solved.current.add(key);
      if (isSectionSolved(required.current, solved.current)) {
        finished.current = true;
        void markSectionCompleted(lessonId, sectionId).catch(() => undefined);
      }
    },
    [lessonId, sectionId],
  );
}

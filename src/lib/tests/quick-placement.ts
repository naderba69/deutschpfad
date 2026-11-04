import type {TestLevel} from "@/types/test";

export interface QuickPlacementSuggestion {
  level: TestLevel;
  label: string;
  message: string;
}

/** Suggest an internal starting point from a short item sample—not a CEFR assessment. */
export function getQuickPlacementSuggestion(correct: number, total: number): QuickPlacementSuggestion {
  const percentage = total > 0 ? (correct / total) * 100 : 0;
  if (percentage >= 80) {
    return {
      level: "B1",
      label: "نقطة بداية مقترحة: B1",
      message: "تشير إجابات هذه العينة القصيرة إلى تجربة البدء في نطاق B1؛ عدّل نقطة البداية إذا لم تلائم خبرتك.",
    };
  }
  if (percentage >= 55) {
    return {
      level: "A2",
      label: "نقطة بداية مقترحة: A2",
      message: "تشير إجابات هذه العينة القصيرة إلى تجربة البدء في نطاق A2؛ عدّل نقطة البداية إذا لم تلائم خبرتك.",
    };
  }
  if (percentage >= 30) {
    return {
      level: "A1",
      label: "نقطة بداية مقترحة: A1",
      message: "تشير إجابات هذه العينة القصيرة إلى تجربة البدء في نطاق A1؛ يمكنك البدء بالأبجدية إذا احتجت ذلك.",
    };
  }
  return {
    level: "A1",
    label: "ابدأ استرشادياً من الأبجدية",
    message: "هذه إجابات على عينة قصيرة فقط؛ جرّب درس الأبجدية والنطق وعدّل اختيارك متى شئت.",
  };
}

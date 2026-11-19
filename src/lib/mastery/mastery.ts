/**
 * ═══════════════════════════════════════════════════════════
 *  قاعدة الإتقان لمعلومة واحدة — دالة نقية
 *
 *  القاعدة المتفق عليها:
 *  · إتقان = 3 إجابات صحيحة متتالية بدون تلميح،
 *    وتمتد هذه السلسلة على يومين مختلفين على الأقل (اختبار مؤجَّل).
 *  · آخر إجابة خاطئة ⇒ «تحتاج مراجعة» (تعود في اليوم التالي).
 *  · هذا إتقان داخل التطبيق فقط، وليس إثباتاً لمستوى CEFR.
 * ═══════════════════════════════════════════════════════════
 */

export const MASTERY_STREAK = 3;

export interface Attempt {
  ts: number;
  correct: boolean;
  /** هل استُعمل تلميح؟ (لا يُسجَّل حالياً في الأحداث — انظر docs) */
  hintUsed: boolean;
}

export type MasteryStatus = "not-started" | "learning" | "needs-review" | "mastered";

export interface MasteryResult {
  status: MasteryStatus;
  /** طول السلسلة الصحيحة الأخيرة بدون تلميح */
  streak: number;
}

/** مفتاح اليوم بالتاريخ المحلي (YYYY-MM-DD) */
export function dayKey(ts: number): string {
  const d = new Date(ts);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

/** مفتاح اليوم التالي لوقت معيّن — موعد المراجعة بعد الخطأ */
export function nextDayKey(ts: number): string {
  const d = new Date(ts);
  d.setDate(d.getDate() + 1);
  return dayKey(d.getTime());
}

export function evaluateMastery(attempts: readonly Attempt[]): MasteryResult {
  if (attempts.length === 0) return {status: "not-started", streak: 0};

  const sorted = [...attempts].sort((a, b) => a.ts - b.ts);
  const last = sorted[sorted.length - 1];
  if (!last.correct) return {status: "needs-review", streak: 0};

  // السلسلة الأخيرة: إجابات صحيحة بدون تلميح من النهاية للخلف
  let streak = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    const a = sorted[i];
    if (!a.correct || a.hintUsed) break;
    streak++;
  }

  if (streak < MASTERY_STREAK) return {status: "learning", streak};

  const window = sorted.slice(-MASTERY_STREAK);
  const days = new Set(window.map((a) => dayKey(a.ts)));
  return {status: days.size >= 2 ? "mastered" : "learning", streak};
}

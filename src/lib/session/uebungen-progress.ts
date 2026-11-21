/**
 * ═══════════════════════════════════════════════════════════
 *  تقدّم دفعة التمارين التفاعلية (قسم uebungen) — دوال نقية
 *
 *  - الدفعة = BATCH_SIZE تمارين عشوائية من بنك الدرس.
 *  - الإجابة الصحيحة تُسجَّل لتمرين في هذه الدفعة مرة واحدة.
 *    الإجابة الخاطئة لا تُسجَّل، وإعادة المحاولة مسموحة.
 *  - "تمرين جديد عشوائياً" يبدأ دفعة جديدة بتقدم فارغ.
 *  - القسم يكتمل حين تُجاب كل تمارين الدفعة الحالية صحيحاً.
 *
 *  المكوّن يستعمل هذه الدوال فقط، حتى تُختبر القواعد دون متصفح.
 * ═══════════════════════════════════════════════════════════
 */

import {sample} from "@/lib/lesson/shuffle";
import {isSectionSolved} from "@/lib/session/solved";

export const BATCH_SIZE = 5;

/** معرّفات التمارين التي أُجيبت صحيحاً في الدفعة الحالية */
export type BatchProgress = ReadonlySet<string>;

export interface BatchRound<T extends {id: string}> {
  batch: T[];
  solved: BatchProgress;
}

/** دفعة جديدة: تمارين مختارة، وتقدّم فارغ دائماً */
export function startBatch<T extends {id: string}>(
  bank: readonly T[],
  size: number = BATCH_SIZE,
  pick: (input: readonly T[], n: number) => T[] = sample,
): BatchRound<T> {
  return {batch: pick(bank, size), solved: new Set<string>()};
}

/**
 * يسجّل نتيجة إجابة على تمرين في الدفعة.
 * - الإجابة الخاطئة: لا تغيير في التقدم.
 * - الإجابة الصحيحة: يُضاف المعرّف (مرة واحدة فقط).
 * - complete: هل صار كل تمارين الدفعة مُجاباً صحيحاً بعد هذه الإجابة؟
 */
export function applyBatchAnswer(
  batchIds: readonly string[],
  solved: BatchProgress,
  exerciseId: string,
  isCorrect: boolean,
): {solved: BatchProgress; complete: boolean} {
  const next: BatchProgress =
    isCorrect && !solved.has(exerciseId) ? new Set([...solved, exerciseId]) : solved;
  return {solved: next, complete: isSectionSolved(batchIds, next)};
}

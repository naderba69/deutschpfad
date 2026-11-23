/**
 * ═══════════════════════════════════════════════════════════
 *  الإتقان والتصنيف للوحة الرسوم — دوال نقية
 *
 *  قاعدة الإتقان (معتمدة): 3 إجابات صحيحة متتالية، على يومين مختلفين على الأقل.
 *  «متتالية» = repetitions منذ آخر فشل (الفشل يُصفّره). «يومان» = أيام نجاح مختلفة.
 *  ملاحظة: لا تُحسب إجابة بتلميح لأن وضع الكتابة لا يملك تلميحاً بعد.
 *
 *  التصنيف (لكل بطاقة، في لحظة معيّنة):
 *   · متقنة   — تحقّقت قاعدة الإتقان
 *   · مستحقة  — غير متقنة وموعدها حان
 *   · مجدولة  — غير متقنة وموعدها لم يحن بعد
 * ═══════════════════════════════════════════════════════════
 */

import type {LevelCode} from "@/types/curriculum";
import type {Sm2CardData} from "@/types/srs";

export const MASTERY_STREAK = 3;
export const MASTERY_DAYS = 2;
export const LEVELS: readonly LevelCode[] = ["A1", "A2", "B1", "B2"];

export type CardCategory = "mastered" | "due" | "scheduled";

export function isMastered(card: Pick<Sm2CardData, "repetitions" | "successDays">): boolean {
  const days = new Set(card.successDays ?? []).size;
  return card.repetitions >= MASTERY_STREAK && days >= MASTERY_DAYS;
}

export function categorize(card: Sm2CardData, now: number): CardCategory {
  if (isMastered(card)) return "mastered";
  return card.due <= now ? "due" : "scheduled";
}

export interface CategoryCounts {
  mastered: number;
  due: number;
  scheduled: number;
  total: number;
}

export function countCategories(cards: readonly Sm2CardData[], now: number): CategoryCounts {
  const c: CategoryCounts = {mastered: 0, due: 0, scheduled: 0, total: cards.length};
  for (const card of cards) c[categorize(card, now)]++;
  return c;
}

/** عدّ الفئات حسب المستوى (للرسم الشريطي المكدّس) */
export function countByLevel(
  cards: readonly Sm2CardData[],
  now: number,
): {level: LevelCode; mastered: number; due: number; scheduled: number}[] {
  return LEVELS.map((level) => {
    const counts = countCategories(
      cards.filter((c) => c.level === level),
      now,
    );
    return {level, mastered: counts.mastered, due: counts.due, scheduled: counts.scheduled};
  });
}

import type { LevelCode } from "@/types/curriculum";

/**
 * بطاقة المراجعة (SRS) — بيانات خوارزمية SM-2 + المحتوى
 */
export interface Sm2CardData {
  id: string;
  de: string;
  ar: string;
  example?: string;
  exampleAr?: string;
  level: LevelCode;
  source: "lesson" | "manual" | "sentence";
  createdAt: number;

  /* ── حالة SM-2 ── */
  /** عدد التكرارات الناجحة المتتالية */
  repetitions: number;
  /** الفاصل الحالي بالأيام */
  interval: number;
  /** معامل السهولة (2.5 ابتداءً، حد أدنى 1.3) */
  ease: number;
  /** موعد الاستحقاق التالي (epoch ms) */
  due: number;
  /** آخر مراجعة (epoch ms أو null) */
  lastReview: number | null;
  /** عدد مرات الفشل (q<3) */
  lapses: number;
  /** مجموع الجودات (لحساب معامل النسيان الشخصي) */
  qualitySum: number;
  qualityCount: number;
}

/** تقييم الجودة حسب SM-2 (0-5) */
export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;

/** الحد الأقصى للفاصل بالأيام */
export const MAX_INTERVAL_DAYS = 365;

/** الحد الأدنى لمعامل السهولة */
export const MIN_EASE = 1.3;

/** معامل السهولة الابتدائي */
export const DEFAULT_EASE = 2.5;

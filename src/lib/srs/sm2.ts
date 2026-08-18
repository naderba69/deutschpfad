import {DEFAULT_EASE, MAX_INTERVAL_DAYS, MIN_EASE, type ReviewQuality, type Sm2CardData} from "@/types/srs";

/**
 * ═══════════════════════════════════════════════════════════
 *  خوارزمية المراجعة المتباعدة SM-2 (النسخة الكلاسيكية)
 *  + معامل النسيان الشخصي لكل مستخدم
 * ═══════════════════════════════════════════════════════════
 */

/** إنشاء بطاقة جديدة (مستحقة فوراً) */
export function createCard(input: {
  id: string;
  de: string;
  ar: string;
  example?: string;
  exampleAr?: string;
  level: Sm2CardData["level"];
  source: Sm2CardData["source"];
}): Sm2CardData {
  return {
    id: input.id,
    de: input.de,
    ar: input.ar,
    example: input.example,
    exampleAr: input.exampleAr,
    level: input.level,
    source: input.source,
    createdAt: Date.now(),
    repetitions: 0,
    interval: 0,
    ease: DEFAULT_EASE,
    due: Date.now(),
    lastReview: null,
    lapses: 0,
    qualitySum: 0,
    qualityCount: 0,
  };
}

/** تحديث معامل السهولة (EF) وفق معادلة SM-2 */
export function updateEase(ease: number, q: ReviewQuality): number {
  const next = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  return Math.max(MIN_EASE, next);
}

/** الفاصل الزمني القياسي (قبل تطبيق معامل النسيان) */
export function standardInterval(
  card: Pick<Sm2CardData, "repetitions" | "interval" | "ease">,
  q: ReviewQuality,
): number {
  if (q < 3) return 1; // فشل → غداً
  if (card.repetitions === 0) return 1; // أول نجاح → يوم واحد
  if (card.repetitions === 1) return 6; // ثاني نجاح → 6 أيام
  return Math.round(card.interval * card.ease); // بعدها: فاصل × معامل السهولة
}

/**
 * معامل النسيان الشخصي من متوسط جودة المراجعات:
 * — ذاكرة قوية (متوسط عالٍ) → فترات أطول (معامل > 1)
 * — نسيان متكرر (متوسط منخفض) → فترات أقصر (معامل < 1)
 * القيمة الافتراضية 1 قبل توفر 5 مراجعات على الأقل.
 */
export function forgettingCoefficient(avgQuality: number, reviewCount: number): number {
  if (reviewCount < 5) return 1;
  const fc = 0.8 + avgQuality * 0.12;
  return Math.min(1.4, Math.max(0.7, fc));
}

/** وصف لفظي لمعامل النسيان بالعربية */
export function forgettingCoefficientLabel(fc: number): string {
  if (fc > 1.15) return "ذاكرتك ممتازة — يمكنك تباعد المراجعات أكثر";
  if (fc < 0.95) return "تحتاج مراجعات أكثر تكراراً — حسّن جودة إجاباتك";
  return "معامل نسيانك متوازن — استمر على هذا المنوال";
}

/** تطبيق مراجعة بطاقة: يحدّث حالة SM-2 كاملة */
export function applyReview(
  card: Sm2CardData,
  q: ReviewQuality,
  personalCoefficient: number,
): Sm2CardData {
  const next: Sm2CardData = { ...card };
  next.qualitySum += q;
  next.qualityCount += 1;
  next.lastReview = Date.now();

  if (q < 3) {
    // فشل: إعادة التعلم
    next.repetitions = 0;
    next.interval = 1;
    next.lapses += 1;
    next.due = Date.now() + 24 * 60 * 60 * 1000;
  } else {
    next.repetitions += 1;
    const base = standardInterval(card, q);
    next.interval = Math.min(
      MAX_INTERVAL_DAYS,
      Math.max(1, Math.round(base * personalCoefficient)),
    );
    next.due = Date.now() + next.interval * 24 * 60 * 60 * 1000;
  }

  next.ease = updateEase(card.ease, q);
  return next;
}

/** تسمية أزرار الجودة (للواجهة) */
export const QUALITY_BUTTONS: { q: ReviewQuality; label: string; emoji: string; hint: string }[] = [
  { q: 1, label: "نسيت", emoji: "😵", hint: "لم أتذكر إطلاقاً" },
  { q: 3, label: "صعب", emoji: "🤔", hint: "تذكرت بصعوبة" },
  { q: 4, label: "حسن", emoji: "🙂", hint: "تذكرت جيداً" },
  { q: 5, label: "سهل", emoji: "😎", hint: "فوري وبلا تردد" },
];

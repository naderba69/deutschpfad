/**
 * ═══════════════════════════════════════════════════════════
 *  سجل مراجعات البطاقات — دوال نقية
 *
 *  لماذا سجل مستقل؟ سجل الأحداث العام محدود بآخر 2000 حدث، فلا يصلح
 *  لإجمالي تاريخي دقيق. هذا السجل يحفظ:
 *   · total: كل المراجعات منذ البداية (لا تُحذف)
 *   · days : عدد مراجعات كل يوم محلي (YYYY-MM-DD)، آخر 400 يوم فقط
 *  السلسلة: أيام متتالية بمراجعة واحدة على الأقل، تنتهي اليوم أو أمس.
 * ═══════════════════════════════════════════════════════════
 */

import {dayKey} from "@/lib/mastery/mastery";

export const REVIEW_LOG_KEEP_DAYS = 400;

export interface ReviewLog {
  total: number;
  days: Record<string, number>;
}

export const EMPTY_REVIEW_LOG: ReviewLog = {total: 0, days: {}};

/** تسجيل مراجعة واحدة في اليوم المحلي للوقت المعطى (لا يعدّل الأصل) */
export function addReview(log: ReviewLog, now: number): ReviewLog {
  const key = dayKey(now);
  const days = {...log.days, [key]: (log.days[key] ?? 0) + 1};
  // تقليم: نُبقي آخر REVIEW_LOG_KEEP_DAYS مفتاحاً فقط
  const keys = Object.keys(days).sort();
  for (const old of keys.slice(0, Math.max(0, keys.length - REVIEW_LOG_KEEP_DAYS))) {
    delete days[old];
  }
  return {total: log.total + 1, days};
}

/** مراجعات يوم محدد (افتراضياً اليوم) */
export function reviewsOn(log: ReviewLog, now: number): number {
  return log.days[dayKey(now)] ?? 0;
}

/** السلسلة: أيام متتالية بمراجعة، تبدأ من اليوم أو من أمس إن لم تحدث اليوم بعد */
export function currentStreak(log: ReviewLog, now: number): number {
  const cursor = new Date(now);
  cursor.setHours(0, 0, 0, 0);
  if (!log.days[dayKey(cursor.getTime())]) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (log.days[dayKey(cursor.getTime())]) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

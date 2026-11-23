import {getRecentEventsResult} from "@/lib/analytics/events";
import {dayKey} from "@/lib/mastery/mastery";

/**
 * الخريطة الحرارية للنشاط — شبيهة بـ GitHub
 * — يوم واحد = خلية واحدة، آخر 52 أسبوعاً —
 */

/** نشاط كل يوم: YYYY-MM-DD → عدد الأحداث */
export type ActivityMapReadResult = {ok: true; activity: Map<string, number>} | {ok: false};

export async function getActivityMapResult(): Promise<ActivityMapReadResult> {
  const result = await getRecentEventsResult(2000);
  if (!result.ok) return {ok: false};
  const map = new Map<string, number>();
  for (const e of result.events) {
    // اليوم المحلي (مثل بقية الواجهة) — لا UTC، وإلا انتقل نشاط منتصف الليل لليوم السابق
    const key = dayKey(e.ts);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return {ok: true, activity: map};
}

/** واجهة توافقية؛ استخدم النتيجة الصريحة حين تُعرض الخلايا أو السلاسل كبيانات فعلية. */
export async function getActivityMap(): Promise<Map<string, number>> {
  const result = await getActivityMapResult();
  return result.ok ? result.activity : new Map<string, number>();
}

/** مستوى نشاط خلية (0-4) حسب عدد الأحداث */
function activityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

export interface HeatCell {
  date: Date;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

/** بناء مصفوفة الخلايا: 52 أسبوعاً × 7 أيام (من الأحد) */
export function buildHeatmap(activity: Map<string, number>, weeks = 52): HeatCell[][] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // نهاية آخر أسبوع كامل: اليوم
  const start = new Date(today);
  start.setDate(start.getDate() - (weeks * 7 - 1));
  // ابدأ من الأحد
  start.setDate(start.getDate() - start.getDay());

  const columns: HeatCell[][] = [];
  const cursor = new Date(start);
  while (cursor <= today) {
    const column: HeatCell[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(cursor);
      const key = dayKey(date.getTime());
      const count = activity.get(key) ?? 0;
      column.push({ date: new Date(date), count, level: activityLevel(count) });
      cursor.setDate(cursor.getDate() + 1);
    }
    columns.push(column);
  }
  return columns;
}

/** حساب سلسلة الأيام المتتالية (Streak) — مع حماية يوم واحد */
export function computeStreak(activity: Map<string, number>, now: number = Date.now()): number {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const keys = new Set(activity.keys());
  let streak = 0;
  const cursor = new Date(today);
  // إذا لم يسجل اليوم، نبدأ من أمس (حماية يوم واحد)
  if (!keys.has(dayKey(cursor.getTime()))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (keys.has(dayKey(cursor.getTime()))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

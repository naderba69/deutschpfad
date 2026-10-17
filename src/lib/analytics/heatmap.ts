import {getRecentEvents} from "@/lib/analytics/events";

/**
 * الخريطة الحرارية للنشاط — شبيهة بـ GitHub
 * — يوم واحد = خلية واحدة، آخر 52 أسبوعاً —
 */

/** نشاط كل يوم: YYYY-MM-DD → عدد الأحداث */
export async function getActivityMap(): Promise<Map<string, number>> {
  const events = await getRecentEvents(2000);
  const map = new Map<string, number>();
  for (const e of events) {
    const key = new Date(e.ts).toISOString().slice(0, 10);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return map;
}

/** مستوى نشاط خلية (0-4) حسب عدد الأحداث */
export function activityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
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
      const key = date.toISOString().slice(0, 10);
      const count = activity.get(key) ?? 0;
      column.push({ date: new Date(date), count, level: activityLevel(count) });
      cursor.setDate(cursor.getDate() + 1);
    }
    columns.push(column);
  }
  return columns;
}

/** حساب سلسلة الأيام المتتالية (Streak) — مع حماية يوم واحد */
export function computeStreak(activity: Map<string, number>): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const keys = new Set(activity.keys());
  let streak = 0;
  const cursor = new Date(today);
  // إذا لم يسجل اليوم، نبدأ من أمس (حماية يوم واحد)
  if (!keys.has(cursor.toISOString().slice(0, 10))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (keys.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

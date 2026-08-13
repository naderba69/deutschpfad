import {getActivityMap} from "@/lib/analytics/heatmap";

/**
 * السلسلة الأسبوعية (Weekly Streak) — اقتراح المرحلة 14:
 * عدد الأسابيع المتتالية التي مارس فيها المستخدم (نشاط واحد على الأقل)
 */

export async function computeWeeklyStreak(): Promise<number> {
  const activity = await getActivityMap();
  const keys = new Set(activity.keys());

  // الأسابيع: من بداية الأسبوع الحالي (الاثنين)
  const startOfWeek = (d: Date) => {
    const day = (d.getDay() + 6) % 7; // الاثنين = 0
    const s = new Date(d);
    s.setDate(s.getDate() - day);
    s.setHours(0, 0, 0, 0);
    return s;
  };

  const weekHasActivity = (start: Date): boolean => {
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (keys.has(d.toISOString().slice(0, 10))) return true;
    }
    return false;
  };

  let streak = 0;
  const cursor = startOfWeek(new Date());

  // إذا لم يكن الأسبوع الحالي نشطاً، نبدأ من السابق (تسامح أسبوع)
  if (!weekHasActivity(cursor)) {
    cursor.setDate(cursor.getDate() - 7);
  }

  while (weekHasActivity(cursor)) {
    streak++;
    cursor.setDate(cursor.getDate() - 7);
  }
  return streak;
}

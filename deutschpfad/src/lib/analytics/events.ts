import {getDb} from "@/lib/storage/db";
import type { AnalyticsEvent, EventStats } from "@/types/analytics";

/**
 * الأحداث التحليلية — تسجيل وقراءة (تغذي لوحة التحكم لاحقاً)
 * تُستدعى دون انتظار (fire-and-forget) حتى لا تؤثر على التفاعلية
 */

/** توزيعي Omit: يحافظ على تفريق الاتحاد (يمكن تمرير ts اختيارياً) */
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type AnalyticsEventInput = DistributiveOmit<AnalyticsEvent, "ts"> & { ts?: number };

export async function recordEvent(event: AnalyticsEventInput): Promise<void> {
  try {
    const full: AnalyticsEvent = { ...event, ts: event.ts ?? Date.now() } as AnalyticsEvent;
    await (await getDb()).add("events", full);
  } catch {
    /* تجاهل — الأحداث تحليلية غير حرجة */
  }
}

/** آخر N أحداث (الأحدث أولاً) */
export async function getRecentEvents(limit = 100): Promise<AnalyticsEvent[]> {
  try {
    const all = await (await getDb()).getAll("events");
    return all.sort((a, b) => b.ts - a.ts).slice(0, limit);
  } catch {
    return [];
  }
}

/** إحصائيات مجمّعة (للوحة والمراجعة الذكية) */
export async function getEventStats(): Promise<EventStats> {
  const events = await getRecentEvents(500);

  const exercises = events.filter((e) => e.type === "exercise-result");
  const correct = exercises.filter((e) => e.correct).length;
  const pronunciation = events.filter((e) => e.type === "pronunciation-score");
  const reviews = events.filter((e) => e.type === "review");
  const lessons = events.filter((e) => e.type === "lesson-completed");

  const errorTypeCounts: Record<string, number> = {};
  for (const e of exercises) {
    if (e.type === "exercise-result" && e.errorType) {
      errorTypeCounts[e.errorType] = (errorTypeCounts[e.errorType] ?? 0) + 1;
    }
  }

  const pronunciationScores = pronunciation
    .filter((e) => e.type === "pronunciation-score")
    .map((e) => e.score);

  // نقاط XP تقريبية: صحيح = 10، نطق = درجة/10، درس = 50، مراجعة = 5
  const xp =
    correct * 10 +
    pronunciationScores.reduce((s, sc) => s + Math.round(sc / 10), 0) +
    lessons.length * 50 +
    reviews.length * 5;

  return {
    totalEvents: events.length,
    exercisesAnswered: exercises.length,
    exercisesCorrect: correct,
    accuracyPct: exercises.length > 0 ? Math.round((correct / exercises.length) * 100) : 0,
    pronunciationScores,
    pronunciationAvg:
      pronunciationScores.length > 0
        ? Math.round(
            pronunciationScores.reduce((s, sc) => s + sc, 0) / pronunciationScores.length,
          )
        : null,
    reviewsCount: reviews.length,
    lessonsCompleted: lessons.length,
    errorTypeCounts,
    xp,
  };
}

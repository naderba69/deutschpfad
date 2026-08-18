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
    // ═══ P1-01: بذر العدادات من الأحداث الموجودة قبل إضافة الحدث الجديد ═══
    // (كان البذر يحدث بعد الإضافة فيحسب الحدث الجديد مرتين: مرة في البذر
    //  ومرة في bumpCounter)
    const {ensureSeeded} = await import("@/lib/gamification/counters");
    await ensureSeeded();
    await (await getDb()).add("events", full);
    // تحديث العدادات التراكمية (XP لا ينقص أبداً) — ذرية عبر transaction
    await import("@/lib/gamification/counters").then(({bumpCounter}) => bumpCounter(full));
  } catch {
    /* تجاهل — الأحداث تحليلية غير حرجة */
  }
}

/** كل الأحداث (للبذر الأولي للعدادات) */
export async function getAllEvents(): Promise<AnalyticsEvent[]> {
  try {
    return await (await getDb()).getAll("events");
  } catch {
    return [];
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

  // النسب الفورية تُحسب من الأحداث الحديثة، لكن المجاميع الكلية من العدادات
  // (حتى لا ينخفض XP/عدد الدروس عند تساقط الأحداث القديمة)
  let counters;
  try {
    const { getCounters } = await import("@/lib/gamification/counters");
    counters = await getCounters();
  } catch {
    counters = null;
  }

  return {
    totalEvents: counters?.totalEvents ?? events.length,
    exercisesAnswered: counters?.exercisesAnswered ?? exercises.length,
    exercisesCorrect: counters?.exercisesCorrect ?? correct,
    accuracyPct:
      (counters?.exercisesAnswered ?? exercises.length) > 0
        ? Math.round(((counters?.exercisesCorrect ?? correct) / Math.max(1, counters?.exercisesAnswered ?? exercises.length)) * 100)
        : 0,
    pronunciationScores,
    pronunciationAvg:
      counters && counters.pronunciationCount > 0
        ? Math.round(counters.pronunciationSum / counters.pronunciationCount)
        : pronunciationScores.length > 0
          ? Math.round(pronunciationScores.reduce((s, sc) => s + sc, 0) / pronunciationScores.length)
          : null,
    reviewsCount: counters?.reviewsCount ?? reviews.length,
    lessonsCompleted: counters?.lessonsCompleted ?? lessons.length,
    errorTypeCounts,
    xp: counters?.xp ?? 0,
  };
}

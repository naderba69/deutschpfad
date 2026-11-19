import {getDb} from "@/lib/storage/db";
import type { AnalyticsEvent, EventStats } from "@/types/analytics";
import {GOAL_EVIDENCE_UPDATED_EVENT} from "@/lib/lesson/goal-evidence";

/**
 * الأحداث التحليلية — تسجيل وقراءة (تغذي لوحة التحكم لاحقاً)
 * تُستدعى دون انتظار (fire-and-forget) حتى لا تؤثر على التفاعلية
 */

/** توزيعي Omit: يحافظ على تفريق الاتحاد (يمكن تمرير ts اختيارياً) */
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type AnalyticsEventInput = DistributiveOmit<AnalyticsEvent, "ts"> & { ts?: number };

export async function recordEvent(event: AnalyticsEventInput): Promise<boolean> {
  const full: AnalyticsEvent = { ...event, ts: event.ts ?? Date.now() } as AnalyticsEvent;
  // محاولة بذر العدادات قبل إضافة الحدث لتجنب احتسابه مرتين.
  try {
    const {ensureSeeded} = await import("@/lib/gamification/counters");
    await ensureSeeded();
  } catch {
    // تعطل العدادات لا ينبغي أن يمنع حفظ الحدث نفسه.
  }
  try {
    await (await getDb()).add("events", full);
  } catch {
    return false;
  }
  if (full.type === "exercise-result" && full.lessonId && typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(GOAL_EVIDENCE_UPDATED_EVENT, {detail: {lessonId: full.lessonId}}),
    );
  }
  // فشل تحديث العدادات لا يعني أن الحدث نفسه لم يُحفظ.
  try {
    await import("@/lib/gamification/counters").then(({bumpCounter}) => bumpCounter(full));
  } catch {
    // تعاد مزامنة العدادات عند التهيئة التالية.
  }
  return true;
}

/** كل الأحداث مع فصل فشل القراءة عن قاعدة بيانات فارغة. */
export type AllEventsReadResult =
  | {ok: true; events: AnalyticsEvent[]}
  | {ok: false; events: []};

export async function getAllEventsResult(): Promise<AllEventsReadResult> {
  try {
    return {ok: true, events: await (await getDb()).getAll("events")};
  } catch {
    return {ok: false, events: []};
  }
}

/** واجهة توافقية؛ كل الأحداث (للبذر الأولي للعدادات). */
export async function getAllEvents(): Promise<AnalyticsEvent[]> {
  return (await getAllEventsResult()).events;
}

/** آخر N أحداث (الأحدث أولاً) مع التمييز بين القائمة الفارغة وفشل القراءة. */
export type RecentEventsReadResult =
  | {ok: true; events: AnalyticsEvent[]}
  | {ok: false; events: []};

export async function getRecentEventsResult(limit = 100): Promise<RecentEventsReadResult> {
  try {
    const all = await (await getDb()).getAll("events");
    return {ok: true, events: all.sort((a, b) => b.ts - a.ts).slice(0, limit)};
  } catch {
    return {ok: false, events: []};
  }
}

/** واجهة توافقية؛ استخدم getRecentEventsResult حين يؤثر الفراغ في قرار المستخدم. */
export async function getRecentEvents(limit = 100): Promise<AnalyticsEvent[]> {
  return (await getRecentEventsResult(limit)).events;
}

/** إحصائيات مجمّعة مع فصل تعذر القراءة عن الأصفار الصحيحة. */
export type EventStatsReadResult = {ok: true; stats: EventStats} | {ok: false};

export async function getEventStatsResult(): Promise<EventStatsReadResult> {
  const readResult = await getRecentEventsResult(500);
  if (!readResult.ok) return {ok: false};
  const events = readResult.events;

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

  return {ok: true, stats: {
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
  }};
}

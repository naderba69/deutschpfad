import {getRecentEventsResult} from "@/lib/analytics/events";

/**
 * مقارنة «قبل وبعد» — دقة التمارين في أول فترة مقابل آخر فترة
 */

export interface BeforeAfter {
  beforePct: number;
  afterPct: number;
  delta: number;
  beforeCount: number;
  afterCount: number;
  improved: boolean;
}

/** مقارنة النصف الأول من الأحداث مقابل النصف الأخير */
export type BeforeAfterReadResult = {ok: true; comparison: BeforeAfter | null} | {ok: false};

export async function getBeforeAfterComparisonResult(): Promise<BeforeAfterReadResult> {
  const result = await getRecentEventsResult(400);
  if (!result.ok) return {ok: false};
  const events = result.events;
  const exercises = events.filter((e) => e.type === "exercise-result");
  if (exercises.length < 20) return {ok: true, comparison: null};

  const half = Math.floor(exercises.length / 2);
  const first = exercises.slice(0, half);
  const last = exercises.slice(half);

  const pct = (arr: typeof exercises) => {
    const correct = arr.filter((e) => e.correct).length;
    return arr.length === 0 ? 0 : Math.round((correct / arr.length) * 100);
  };

  const beforePct = pct(first);
  const afterPct = pct(last);

  return {ok: true, comparison: {
    beforePct,
    afterPct,
    delta: afterPct - beforePct,
    beforeCount: first.length,
    afterCount: last.length,
    improved: afterPct >= beforePct,
  }};
}

import {getRecentEvents} from "@/lib/analytics/events";

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
export async function getBeforeAfterComparison(): Promise<BeforeAfter | null> {
  const events = await getRecentEvents(400);
  const exercises = events.filter((e) => e.type === "exercise-result");
  if (exercises.length < 20) return null;

  const half = Math.floor(exercises.length / 2);
  const first = exercises.slice(0, half);
  const last = exercises.slice(half);

  const pct = (arr: typeof exercises) => {
    const correct = arr.filter((e) => e.correct).length;
    return arr.length === 0 ? 0 : Math.round((correct / arr.length) * 100);
  };

  const beforePct = pct(first);
  const afterPct = pct(last);

  return {
    beforePct,
    afterPct,
    delta: afterPct - beforePct,
    beforeCount: first.length,
    afterCount: last.length,
    improved: afterPct >= beforePct,
  };
}

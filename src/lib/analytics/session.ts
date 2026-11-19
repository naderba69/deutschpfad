/**
 * تتبع زمن الدراسة (Study Sessions) — يقيس الوقت الفعلي في الصفحة
 * يسجّل أحداث جلسة في IndexedDB (events) ويعرض إحصائيات زمنية.
 */

import {recordEvent, getAllEventsResult} from "@/lib/analytics/events";

const SESSION_INTERVAL = 60_000; // نبضة كل دقيقة

/** عدد الدقائق المكتملة منذ آخر نبضة (مع تجاهل فرق ساعة سالب). */
export function elapsedWholeMinutes(last: number, now: number): number {
  return Math.max(0, Math.floor((now - last) / SESSION_INTERVAL));
}

/** بدء تتبع الجلسة — يُستدعى عند دخول الصفحة، يعيد دالة الإيقاف */
export function startSessionTracking(): () => void {
  let last = Date.now();
  let active = true;

  const beat = () => {
    if (!active) return;
    const now = Date.now();
    // نحسب الدقائق المتراكمة (يمكن أن تمر دقائق بين النبضات)
    const elapsedMin = elapsedWholeMinutes(last, now);
    if (elapsedMin >= 1) {
      void recordEvent({ type: "session-minute", minutes: elapsedMin, ts: now });
      last = now;
    }
  };

  const timer = window.setInterval(beat, SESSION_INTERVAL);
  const onVisibility = () => {
    if (document.hidden) {
      // عند الإخفاء: سجّل ما تراكم وأوقف
      beat();
      active = false;
    } else {
      active = true;
      last = Date.now();
    }
  };
  document.addEventListener("visibilitychange", onVisibility);
  const onUnload = () => {
    beat();
  };
  window.addEventListener("beforeunload", onUnload);

  return () => {
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("beforeunload", onUnload);
  };
}

export interface StudyStats {
  /** إجمالي دقائق الدراسة المسجلة */
  totalMinutes: number;
  /** متوسط دقائق/يوم خلال آخر 14 يوماً */
  dailyAvg: number;
  /** عدد أيام النشاط */
  activeDays: number;
  /** توزيع الأخطاء (نوع → عدد) */
  errorDistribution: Record<string, number>;
}

/** جلب إحصائيات الدراسة من الأحداث المسجلة */
export type StudyStatsReadResult = {ok: true; stats: StudyStats} | {ok: false};

export async function getStudyStatsResult(): Promise<StudyStatsReadResult> {
  const result = await getAllEventsResult();
  if (!result.ok) return {ok: false};
  const events = result.events;
  const now = Date.now();
  const validSessionEvents = events.filter(
    (e): e is Extract<typeof e, {type: "session-minute"}> =>
      e.type === "session-minute" && Number.isFinite(e.ts) && e.ts <= now
      && Number.isInteger(e.minutes ?? 1) && (e.minutes ?? 1) > 0,
  );
  const sessionMinutes = validSessionEvents.reduce((sum, event) => sum + (event.minutes ?? 1), 0);

  const days = new Set<string>();
  for (const e of validSessionEvents) {
    const d = new Date(e.ts);
    days.add(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  }

  const errorDistribution: Record<string, number> = {};
  for (const e of events) {
    if (e.type === "exercise-result" && e.errorType) {
      errorDistribution[e.errorType] = (errorDistribution[e.errorType] ?? 0) + 1;
    }
  }

  const fourteenDaysMs = 14 * 24 * 3600 * 1000;
  const last14 = validSessionEvents
    .filter((e) => now - e.ts < fourteenDaysMs)
    .reduce((sum, e) => sum + (e.minutes ?? 1), 0);

  return {ok: true, stats: {
    totalMinutes: sessionMinutes,
    dailyAvg: Math.round((last14 / 14) * 10) / 10,
    activeDays: days.size,
    errorDistribution,
  }};
}

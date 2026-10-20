/**
 * تتبع زمن الدراسة (Study Sessions) — يقيس الوقت الفعلي في الصفحة
 * يسجّل أحداث جلسة في IndexedDB (events) ويعرض إحصائيات زمنية.
 */

import { recordEvent, getRecentEvents } from "@/lib/analytics/events";

const SESSION_INTERVAL = 60_000; // نبضة كل دقيقة

/** بدء تتبع الجلسة — يُستدعى عند دخول الصفحة، يعيد دالة الإيقاف */
export function startSessionTracking(): () => void {
  let minutes = 0;
  let last = Date.now();
  let active = true;

  const beat = () => {
    if (!active) return;
    const now = Date.now();
    // نحسب الدقائق المتراكمة (يمكن أن تمر دقائق بين النبضات)
    const elapsedMin = Math.floor((now - last) / SESSION_INTERVAL);
    if (elapsedMin >= 1) {
      minutes += elapsedMin;
      void recordEvent({ type: "session-minute", minutes: 1, ts: now });
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
export async function getStudyStats(): Promise<StudyStats> {
  const events = await getRecentEvents(2000);
  const sessionMinutes = events
    .filter((e) => e.type === "session-minute")
    .reduce((s, e) => s + (e.minutes ?? 1), 0);

  const days = new Set<string>();
  for (const e of events) {
    if (e.type === "session-minute") {
      const d = new Date(e.ts);
      days.add(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
    }
  }

  const errorDistribution: Record<string, number> = {};
  for (const e of events) {
    if (e.type === "exercise-result" && e.errorType) {
      errorDistribution[e.errorType] = (errorDistribution[e.errorType] ?? 0) + 1;
    }
  }

  const now = Date.now();
  const last14 = events.filter(
    (e) => e.type === "session-minute" && now - e.ts < 14 * 24 * 3600 * 1000,
  ).length;

  return {
    totalMinutes: sessionMinutes,
    dailyAvg: Math.round((last14 / 14) * 10) / 10,
    activeDays: days.size,
    errorDistribution,
  };
}

/**
 * عدادات تقدم دائمة (Incremental Counters) 🧮
 * — تحل محل «إعادة حساب كل شيء من آخر N حدث» —
 * السبب: getRecentEvents(N) يسقط الأحداث الأقدم صامتةً → XP والمستوى
 * والشارات تنخفض مع الاستخدام! هنا تُجمَّع المجاميع بشكل تراكمي ولا تنقص أبداً.
 * المخزن: IndexedDB (settings) — تقدم منفصل لكل متصفح.
 */

import {getRecord, putRecord} from "@/lib/storage/db";
import {XP_RULES} from "@/lib/gamification/xp";
import type { AnalyticsEvent } from "@/types/analytics";

const COUNTERS_KEY = "dp:counters:v1";

export interface CounterState {
  /** إجمالي XP المتراكم */
  xp: number;
  exercisesAnswered: number;
  exercisesCorrect: number;
  reviewsCount: number;
  lessonsCompleted: number;
  testsCompleted: number;
  testsPassed: number;
  pronunciationSum: number;
  pronunciationCount: number;
  /** عدد الأحداث الكلي (بعد التقليم أيضاً) */
  totalEvents: number;
  /** هل بُذرت العدادات من الأحداث القديمة؟ */
  seeded: boolean;
}

const EMPTY: CounterState = {
  xp: 0,
  exercisesAnswered: 0,
  exercisesCorrect: 0,
  reviewsCount: 0,
  lessonsCompleted: 0,
  testsCompleted: 0,
  testsPassed: 0,
  pronunciationSum: 0,
  pronunciationCount: 0,
  totalEvents: 0,
  seeded: false,
};

/** قراءة العدادات الحالية (مع بذر أولي من الأحداث إن لم توجد) */
export async function getCounters(): Promise<CounterState> {
  const stored = await getRecord<CounterState>("settings", COUNTERS_KEY);
  if (stored && typeof stored === "object" && typeof stored.xp === "number") return stored;
  return seedCounters();
}

/**
 * ═══ P1-01: بذر مضمون مرة واحدة — يُستدعى من recordEvent قبل إضافة
 * الحدث الجديد حتى لا يُحسب الحدث نفسه مرتين (كان البذر يقرأ الأحداث
 * بما فيها الجديد ثم bumpCounter يطبقه ثانية) ═══
 */
export async function ensureSeeded(): Promise<void> {
  const stored = await getRecord<CounterState>("settings", COUNTERS_KEY);
  if (stored && typeof stored === "object" && typeof stored.xp === "number") return;
  await seedCounters();
}

/** بذر العدادات من كل الأحداث المخزنة (مرة واحدة للمستخدمين الحاليين) */
async function seedCounters(): Promise<CounterState> {
  const { getAllEvents } = await import("@/lib/analytics/events");
  const events = await getAllEvents();
  const c: CounterState = { ...EMPTY, seeded: true };
  for (const e of events) {
    applyToCounter(c, e);
  }
  await saveCounters(c);
  return c;
}

/** تطبيق حدث واحد على العداد */
function applyToCounter(c: CounterState, e: AnalyticsEvent): void {
  c.totalEvents += 1;
  switch (e.type) {
    case "exercise-result":
      c.exercisesAnswered += 1;
      if (e.correct) c.exercisesCorrect += 1;
      c.xp += e.correct ? XP_RULES.exerciseCorrect : XP_RULES.exerciseWrong;
      break;
    case "pronunciation-score":
      c.pronunciationSum += e.score;
      c.pronunciationCount += 1;
      c.xp += XP_RULES.pronunciationScore(e.score);
      break;
    case "review":
      c.reviewsCount += 1;
      c.xp += XP_RULES.review;
      break;
    case "lesson-completed":
      c.lessonsCompleted += 1;
      c.xp += XP_RULES.lessonCompleted;
      break;
    case "test-result":
      c.testsCompleted += 1;
      if (e.result.passed) c.testsPassed += 1;
      c.xp += e.result.passed ? XP_RULES.testPassed : XP_RULES.testCompleted;
      break;
    default:
      break;
  }
}

/**
 * إضافة حدث إلى العداد (تُستدعى من recordEvent)
 * ═══ P1-01: ذرية عبر transaction واحد — read-modify-write متسلسل
 * (كانت قراءة ثم كتابة منفصلتين فيضيع التحديث مع الأحداث المتوازية) ═══
 */
export async function bumpCounter(e: AnalyticsEvent): Promise<void> {
  try {
    const { getDb } = await import("@/lib/storage/db");
    const db = await getDb();
    const tx = db.transaction("settings", "readwrite");
    const store = tx.store;
    let c = (await store.get(COUNTERS_KEY)) as CounterState | undefined;
    if (!c || typeof c !== "object" || typeof c.xp !== "number") {
      c = { ...EMPTY, seeded: true };
    }
    applyToCounter(c, e);
    await store.put({ key: COUNTERS_KEY, data: c });
    await tx.done;
  } catch {
    /* غير حرج */
  }
}

async function saveCounters(c: CounterState): Promise<void> {
  await putRecord("settings", COUNTERS_KEY, c);
}

/** إعادة تعيين العدادات (اختياري — مع مسح التقدم) */
export async function resetCounters(): Promise<void> {
  await putRecord("settings", COUNTERS_KEY, { ...EMPTY, seeded: true });
}

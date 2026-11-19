import type { TestResult } from "@/types/test";

/**
 * مخزن نتائج الاختبارات — في IndexedDB (مخزن events بحرف خاص)
 * يُغذي: تحليل الأخطاء بالمعلّم + التقرير الأسبوعي
 */
const STORE = "events" as const;

interface TestResultEvent {
  id?: number;
  type: "test-result";
  ts: number;
  result: TestResult;
}

/** تسجيل نتيجة اختبار */
export async function saveTestResult(result: TestResult): Promise<boolean> {
  try {
    // المرور عبر المسار الموحد يربط الحفظ بتحديث العدادات عند نجاحه.
    const {recordEvent} = await import("@/lib/analytics/events");
    return await recordEvent({type: "test-result", result});
  } catch {
    return false;
  }
}

export type TestResultReadResult<T> = {ok: true; value: T} | {ok: false; value: null};

/** آخر نتيجة اختبار مع التمييز بين عدم وجودها وفشل التخزين. */
export async function getLastTestResultResult(): Promise<TestResultReadResult<TestResult | null>> {
  try {
    const db = await (await import("@/lib/storage/db")).getDb();
    const all = (await db.getAll(STORE)) as TestResultEvent[];
    const tests = all.filter((e) => e.type === "test-result").sort((a, b) => b.ts - a.ts);
    return {ok: true, value: tests[0]?.result ?? null};
  } catch {
    return {ok: false, value: null};
  }
}

/** آخر نتيجة اختبار (للاستخدامات القديمة التي لا تعرض حالة التخزين). */
export async function getLastTestResult(): Promise<TestResult | null> {
  return (await getLastTestResultResult()).value;
}

/** آخر N نتائج اختبار مع حالة التخزين. */
export async function getRecentTestResultsResult(limit = 10): Promise<TestResultReadResult<TestResult[]>> {
  try {
    const db = await (await import("@/lib/storage/db")).getDb();
    const all = (await db.getAll(STORE)) as TestResultEvent[];
    return {
      ok: true,
      value: all
        .filter((e) => e.type === "test-result")
        .sort((a, b) => b.ts - a.ts)
        .slice(0, limit)
        .map((e) => e.result),
    };
  } catch {
    return {ok: false, value: null};
  }
}

/** آخر N نتائج اختبار (للاستخدامات القديمة التي لا تعرض حالة التخزين). */
export async function getRecentTestResults(limit = 10): Promise<TestResult[]> {
  const result = await getRecentTestResultsResult(limit);
  return result.value ?? [];
}

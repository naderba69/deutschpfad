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
export async function saveTestResult(result: TestResult): Promise<void> {
  try {
    // ═══ P1-01: نمر عبر recordEvent الموحّد ليُحدَّث العداد والـXP
    // (كانت تُكتب مباشرة في events فتتجاوز العدادات) ═══
    const { recordEvent } = await import("@/lib/analytics/events");
    await recordEvent({ type: "test-result", result });
  } catch {
    /* تجاهل */
  }
}

/** آخر نتيجة اختبار (لزر «حلل أخطائي») */
export async function getLastTestResult(): Promise<TestResult | null> {
  try {
    const db = await (await import("@/lib/storage/db")).getDb();
    const all = (await db.getAll(STORE)) as TestResultEvent[];
    const tests = all.filter((e) => e.type === "test-result").sort((a, b) => b.ts - a.ts);
    return tests[0]?.result ?? null;
  } catch {
    return null;
  }
}

/** آخر N نتائج اختبار */
export async function getRecentTestResults(limit = 10): Promise<TestResult[]> {
  try {
    const db = await (await import("@/lib/storage/db")).getDb();
    const all = (await db.getAll(STORE)) as TestResultEvent[];
    return all
      .filter((e) => e.type === "test-result")
      .sort((a, b) => b.ts - a.ts)
      .slice(0, limit)
      .map((e) => e.result);
  } catch {
    return [];
  }
}

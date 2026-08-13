import {getRecord, putRecord} from "@/lib/storage/db";

/**
 * العدّاد اليومي لطلبات LLM (جهة العميل)
 * — العدّاد المرئي للمستخدم + حد يومي قابل للتعديل من الإعدادات —
 */

const STORE = "llm-usage" as const;
const USAGE_KEY = "today";
const LIMIT_SETTINGS_KEY = "llm.dailyLimit";

interface UsageRecord {
  key: string;
  date: string;
  count: number;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** القراءة الافتراضية من البيئة */
function envDefaultLimit(): number {
  return Number(process.env.NEXT_PUBLIC_LLM_DAILY_LIMIT ?? 50) || 50;
}

/** الحد اليومي الحالي (من إعدادات المستخدم أو الافتراضي) */
export async function getDailyLimit(): Promise<number> {
  try {
    const stored = await getRecord<number>("settings", LIMIT_SETTINGS_KEY);
    const value = Number(stored);
    if (Number.isFinite(value) && value >= 1 && value <= 200) return Math.round(value);
  } catch {
    /* تجاهل */
  }
  return envDefaultLimit();
}

/** حفظ حد يومي جديد (يُقبض 5-200) */
export async function setDailyLimit(limit: number): Promise<number> {
  const clamped = Math.min(200, Math.max(5, Math.round(limit) || 50));
  await putRecord("settings", LIMIT_SETTINGS_KEY, clamped);
  return clamped;
}

/** استهلاك اليوم */
export async function getTodayUsage(): Promise<{ date: string; count: number }> {
  try {
    const db = await (await import("@/lib/storage/db")).getDb();
    const record = (await db.get(STORE, USAGE_KEY)) as UsageRecord | undefined;
    const today = todayKey();
    if (!record || record.date !== today) return { date: today, count: 0 };
    return { date: record.date, count: record.count };
  } catch {
    return { date: todayKey(), count: 0 };
  }
}

/** زيادة العدّاد وإرجاع القيمة الجديدة */
export async function incrementUsage(): Promise<number> {
  const { date, count } = await getTodayUsage();
  const next = count + 1;
  try {
    await (await (await import("@/lib/storage/db")).getDb()).put(STORE, {
      key: USAGE_KEY,
      date,
      count: next,
    });
  } catch {
    /* تجاهل */
  }
  return next;
}

/** إعادة تعيين عدّاد اليوم (للاختبار/الإعدادات) */
export async function resetUsageToday(): Promise<void> {
  try {
    await (await (await import("@/lib/storage/db")).getDb()).put(STORE, {
      key: USAGE_KEY,
      date: todayKey(),
      count: 0,
    });
  } catch {
    /* تجاهل */
  }
}

/** الطلبات المتبقية اليوم (للعدّاد المرئي) */
export async function getRemainingCount(): Promise<number> {
  const [limit, usage] = await Promise.all([getDailyLimit(), getTodayUsage()]);
  return Math.max(0, limit - usage.count);
}

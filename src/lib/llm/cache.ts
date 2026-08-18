import {getDb} from "@/lib/storage/db";

/**
 * التخزين المؤقت لردود LLM (Prompt Caching) في IndexedDB
 * — نفس السؤال لا يستهلك طلباً جديداً —
 */

const STORE = "llm-cache" as const;
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 يوماً
const MAX_ENTRIES = 500;

interface CacheRecord {
  key: string;
  response: string;
  purpose?: string;
  ts: number;
}

/** قراءة رد مخزّن (يرفض المنتهي) */
export async function getCachedLLM(key: string): Promise<string | null> {
  try {
    const db = await getDb();
    const record = await db.get(STORE, key);
    if (!record) return null;
    if (Date.now() - record.ts > TTL_MS) {
      await db.delete(STORE, key);
      return null;
    }
    return record.response;
  } catch {
    return null;
  }
}

/** تخزين رد + تقليم عند تجاوز الحد الأقصى (الأقدم يُحذف) */
export async function setCachedLLM(key: string, response: string, purpose?: string): Promise<void> {
  try {
    const db = await getDb();
    await db.put(STORE, { key, response, purpose, ts: Date.now() });

    const all = await db.getAll(STORE);
    if (all.length > MAX_ENTRIES) {
      const sorted = [...all].sort((a, b) => a.ts - b.ts);
      const tx = db.transaction(STORE, "readwrite");
      for (const old of sorted.slice(0, all.length - MAX_ENTRIES)) {
        tx.store.delete(old.key);
      }
      await tx.done;
    }
  } catch {
    /* تجاهل */
  }
}

/** مسح كل التخزين المؤقت */
export async function clearLLMCache(): Promise<void> {
  try {
    await (await getDb()).clear(STORE);
  } catch {
    /* تجاهل */
  }
}

/** عدد المدخلات المخزنة (للإعدادات) */
export async function countLLMCache(): Promise<number> {
  try {
    return (await (await getDb()).getAll(STORE)).length;
  } catch {
    return 0;
  }
}

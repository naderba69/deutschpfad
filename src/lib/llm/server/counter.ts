import fs from "node:fs";
import path from "node:path";

import {LLM_DAILY_LIMIT} from "@/lib/llm/server/config";

/**
 * عدّاد الطلبات اليومي (جهة الخادم)
 * — سقف يومي صلب قبل الوصول للمزودين —
 * يعمل في الذاكرة + ملف محلي (أفضل جهد)؛ على Vercel serverless
 * يبدأ من الصفر لكل دالة لكنه يظل طبقة حماية إضافية.
 */

const memory = new Map<string, number>();
const FILE_NAME = ".llm-counter.json";

function counterFilePath(): string {
  try {
    return path.join(process.cwd(), FILE_NAME);
  } catch {
    return FILE_NAME;
  }
}

function loadFile(): void {
  try {
    const file = counterFilePath();
    if (fs.existsSync(file)) {
      const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as Record<string, number>;
      for (const [k, v] of Object.entries(parsed)) {
        if (typeof v === "number") memory.set(k, v);
      }
    }
  } catch {
    /* تجاهل — الذاكرة كافية */
  }
}

function saveFile(): void {
  try {
    fs.writeFileSync(counterFilePath(), JSON.stringify(Object.fromEntries(memory)));
  } catch {
    /* تجاهل */
  }
}

/** مفتاح اليوم (YYYY-MM-DD بالتوقيت العالمي) */
export function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

/** عدد الطلبات المستهلكة اليوم */
export function getServerUsage(date: string = todayKey()): number {
  if (!memory.has(date)) loadFile();
  return memory.get(date) ?? 0;
}

/** زيادة عدّاد اليوم وإرجاع القيمة الجديدة */
export function incrementServerUsage(date: string = todayKey()): number {
  const next = (memory.get(date) ?? 0) + 1;
  memory.set(date, next);
  saveFile();
  return next;
}

/** الحد الأقصى اليومي (من البيئة) */
export function getServerLimit(): number {
  return LLM_DAILY_LIMIT;
}

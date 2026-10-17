/**
 * دفتر الأخطاء التراكمي 📖
 * — يسجّل كل خطأ ترتكبه عبر كل الجلسات (وليس جلسة الدرس فقط):
 *   كل خطأ يتكرر يتراكم عدّاده — فيرى المتعلم «نقاط ضعفه الحقيقية»
 *   ويُراجعها من صفحة /error-notebook.
 * المخزن: IndexedDB (settings) — تقدم منفصل لكل متصفح.
 */

export interface NotebookEntry {
  /** مفتاح فريد: exerciseId */
  id: string;
  /** نوع الخطأ (أجناس، إملاء، ترتيب…) */
  errorType: string;
  /** الشرح بالعربية (لماذا كان خطأً) */
  explanation: string;
  /** الإجابة الصحيحة إن وُجدت */
  correctAnswer?: string;
  /** عدد مرات تكرار الخطأ */
  count: number;
  /** آخر مرة حصل فيها الخطأ */
  lastAt: number;
  /** أول مرة حصل فيها */
  firstAt: number;
  /** هل أُتقن (أُصلح لاحقاً)؟ */
  mastered?: boolean;
}

const KEY = "error-notebook:v1";

type Store = "settings" | "progress";

/** قراءة كل الأخطاء (مرتبة بالأحدث أولاً) */
export async function getNotebook(): Promise<NotebookEntry[]> {
  try {
    const { getRecord } = await import("@/lib/storage/db");
    const rows = await getRecord<NotebookEntry[]>("settings", KEY);
    if (!Array.isArray(rows)) return [];
    return rows.sort((a, b) => b.lastAt - a.lastAt);
  } catch {
    return [];
  }
}

/** حفظ القائمة كاملة */
async function saveNotebook(rows: NotebookEntry[]): Promise<void> {
  try {
    const { putRecord } = await import("@/lib/storage/db");
    await putRecord("settings", KEY, rows);
  } catch {
    /* تجاهل */
  }
}

/** تسجيل خطأ جديد (أو زيادة عدّاد خطأ موجود) */
export async function recordMistake(entry: Omit<NotebookEntry, "count" | "lastAt" | "firstAt" | "mastered">): Promise<void> {
  const rows = await getNotebook();
  const existing = rows.find((r) => r.id === entry.id);
  if (existing) {
    existing.count += 1;
    existing.lastAt = Date.now();
    existing.mastered = false;
  } else {
    rows.push({
      ...entry,
      count: 1,
      lastAt: Date.now(),
      firstAt: Date.now(),
      mastered: false,
    });
  }
  // حد أقصى 500 سطر للحفاظ على الأداء
  const sorted = rows.sort((a, b) => b.lastAt - a.lastAt).slice(0, 500);
  await saveNotebook(sorted);
}

/** تحديد خطأ كـ«أتقنته» */
export async function markMastered(id: string): Promise<void> {
  const rows = await getNotebook();
  const e = rows.find((r) => r.id === id);
  if (e) {
    e.mastered = true;
    await saveNotebook(rows);
  }
}

/** حذف خطأ واحد */
export async function removeEntry(id: string): Promise<void> {
  const rows = await getNotebook();
  await saveNotebook(rows.filter((r) => r.id !== id));
}

/** مسح الدفتر كاملاً */
export async function clearNotebook(): Promise<void> {
  await saveNotebook([]);
}

/** إحصائيات سريعة: عدد الأخطاء الفريدة + الأكثر تكراراً + المتقنة */
export async function getNotebookStats(): Promise<{
  total: number;
  repeated: number;
  mastered: number;
  top: NotebookEntry | null;
}> {
  const rows = await getNotebook();
  const active = rows.filter((r) => !r.mastered);
  const top = active.length > 0 ? active.reduce((a, b) => (b.count > a.count ? b : a)) : null;
  return {
    total: active.length,
    repeated: active.filter((r) => r.count > 1).length,
    mastered: rows.filter((r) => r.mastered).length,
    top,
  };
}

/** أسماء أنواع الأخطاء بالعربية */
export const ERROR_TYPE_LABELS: Record<string, string> = {
  gender: "الجنس النحوي",
  article: "أداة التعريف",
  spelling: "الإملاء",
  word_order: "ترتيب الكلمات",
  conjugation: "التصريف",
  vocabulary: "المفردات",
  case: "الحالة الإعرابية",
  preposition: "حرف الجر",
  plural: "الجمع",
  listening: "الفهم السمعي",
  "not-available": "غير محدد",
};

export type { Store };

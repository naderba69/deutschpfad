/**
 * سجلّ الملاحظات للأخطاء التي ترسلها التمارين المدعومة عبر recordMistake.
 * لا يمثل السجل كل نشاط المنصة ولا يقيس مستوى المتعلم. يميّز المفتاح بين
 * الدرس والتمرين لأن معرّفات التمارين (مثل e1) تتكرر عبر الدروس.
 * المخزن: IndexedDB (settings) — بيانات منفصلة لكل متصفح.
 */

export interface NotebookEntry {
  /** مفتاح فريد مركب من نطاق المصدر ومعرّف التمرين؛ الإدخالات القديمة قد تحمل exerciseId فقط. */
  id: string;
  /** معرّف التمرين الأصلي للعرض */
  exerciseId?: string;
  /** نطاق مصدر التمرين لمنع الدمج بين مجموعات مختلفة */
  sourceId?: string;
  /** الدرس الذي سجّل فيه التمرين، إن كان من درس محدد */
  lessonId?: string;
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
  /** وسم داخلي قديم لاختيار المستخدم تعليمه كمُراجَع ذاتياً؛ ليس دليلاً على الإتقان. */
  mastered?: boolean;
}

const KEY = "error-notebook:v1";

type Store = "settings" | "progress";

export interface NotebookReadResult {
  ok: boolean;
  rows: NotebookEntry[];
}

/** قراءة السجل مع التمييز بين سجل فارغ وخلل في التخزين */
export async function getNotebookResult(): Promise<NotebookReadResult> {
  try {
    const { getRecord } = await import("@/lib/storage/db");
    const rows = await getRecord<NotebookEntry[]>("settings", KEY);
    if (!Array.isArray(rows)) return {ok: true, rows: []};
    return {ok: true, rows: rows.sort((a, b) => b.lastAt - a.lastAt)};
  } catch {
    return {ok: false, rows: []};
  }
}

/** قراءة كل الأخطاء (مرتبة بالأحدث أولاً). للاستخدامات التي لا تعرض حالة التخزين. */
export async function getNotebook(): Promise<NotebookEntry[]> {
  return (await getNotebookResult()).rows;
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

/** مفتاح ثابت يمنع دمج تمارين متشابهة المعرّف من دروس مختلفة. */
export function getNotebookEntryId(sourceId: string, exerciseId: string): string {
  return `${sourceId}::${exerciseId}`;
}

/** تسجيل خطأ جديد (أو زيادة عدّاد الخطأ نفسه في الدرس نفسه) */
export async function recordMistake(entry: Omit<NotebookEntry, "count" | "lastAt" | "firstAt" | "mastered">): Promise<void> {
  const result = await getNotebookResult();
  if (!result.ok) return; // لا تستبدل سجلاً قديمًا بقائمة فارغة عند تعذر القراءة.
  const rows = result.rows;
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

/** تسجيل اختيار المستخدم تعليم الإدخال كمُراجَع ذاتياً؛ لا يثبت الإتقان. */
export async function markMastered(id: string): Promise<void> {
  const result = await getNotebookResult();
  if (!result.ok) return;
  const rows = result.rows;
  const e = rows.find((r) => r.id === id);
  if (e) {
    e.mastered = true;
    await saveNotebook(rows);
  }
}

/** حذف خطأ واحد */
export async function removeEntry(id: string): Promise<void> {
  const result = await getNotebookResult();
  if (!result.ok) return;
  await saveNotebook(result.rows.filter((r) => r.id !== id));
}

/** مسح الدفتر كاملاً */
export async function clearNotebook(): Promise<void> {
  await saveNotebook([]);
}

/** إحصائيات سريعة لسجل محدد */
export function getNotebookStatsForRows(rows: NotebookEntry[]): {
  total: number;
  repeated: number;
  mastered: number;
  top: NotebookEntry | null;
} {
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
  writing_length: "طول النص",
  "not-available": "غير محدد",
};

export type { Store };

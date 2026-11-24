/**
 * ═══════════════════════════════════════════════════════════
 *  ملف المفردات JSON — دوال نقية (تصدير / تحقق / استيراد)
 *
 *  - التصدير: بطاقات المستخدم اليدوية فقط (source = manual).
 *    بطاقات الدروس وبطاقات الأخطاء لا تُصدَّر: تُولَّد من المحتوى.
 *  - الاستيراد: يتحقق من كل سطر؛ السطر الخاطئ يُتخطى ويُعد،
 *    وصيغة الملف نفسها إن كانت خاطئة يُرفض الملف كله.
 *  - المعرّف مشتق من الكلمة والمستوى، فالاستيراد المتكرر لا يكرر البطاقة.
 * ═══════════════════════════════════════════════════════════
 */
import type {LevelCode} from "@/types/curriculum";
import type {Sm2CardData} from "@/types/srs";

export const VOCAB_FORMAT = "deutschpfad-vocab" as const;
export const VOCAB_VERSION = 1 as const;
/** حد أقصى للعناصر في ملف واحد (يمنع ملفات ضخمة تُجمّد الصفحة) */
export const MAX_VOCAB_ITEMS = 2000;
/** حد أقصى لحجم النص الخام للملف (1 ميغابايت) */
export const MAX_VOCAB_CHARS = 1_000_000;

const LEVELS: readonly LevelCode[] = ["A1", "A2", "B1", "B2"];
const MAX_DE = 120;
const MAX_AR = 200;
const MAX_EXAMPLE = 400;

export interface VocabItem {
  de: string;
  ar: string;
  example?: string;
  exampleAr?: string;
  level: LevelCode;
}

export interface VocabFile {
  format: typeof VOCAB_FORMAT;
  version: typeof VOCAB_VERSION;
  exportedAt: string;
  items: VocabItem[];
}

export type VocabParseResult =
  | {ok: true; items: VocabItem[]; skipped: number}
  | {ok: false; error: string};

/** مفتاح ثابت للكلمة: مستوى + الكلمة بعد توحيد المسافات وحالة الأحرف */
export function vocabKey(level: LevelCode, de: string): string {
  return `${level}|${de.trim().replace(/\s+/g, " ").toLowerCase()}`;
}

/** بناء ملف التصدير من البطاقات اليدوية فقط */
export function buildVocabFile(cards: Sm2CardData[], now: Date = new Date()): VocabFile {
  const items: VocabItem[] = cards
    .filter((c) => c.source === "manual")
    .map((c) => ({
      de: c.de,
      ar: c.ar,
      ...(c.example ? {example: c.example} : {}),
      ...(c.exampleAr ? {exampleAr: c.exampleAr} : {}),
      level: c.level,
    }));
  return {format: VOCAB_FORMAT, version: VOCAB_VERSION, exportedAt: now.toISOString(), items};
}

function cleanText(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim().replace(/\s+/g, " ");
  if (!t || t.length > max) return null;
  return t;
}

/** تحقق من عنصر واحد؛ يعيد null إن كان خاطئاً */
export function parseVocabItem(raw: unknown): VocabItem | null {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const de = cleanText(r.de, MAX_DE);
  const ar = cleanText(r.ar, MAX_AR);
  if (!de || !ar) return null;
  if (typeof r.level !== "string" || !LEVELS.includes(r.level as LevelCode)) return null;
  const item: VocabItem = {de, ar, level: r.level as LevelCode};
  if (r.example !== undefined) {
    const ex = cleanText(r.example, MAX_EXAMPLE);
    if (ex) item.example = ex;
  }
  if (r.exampleAr !== undefined) {
    const exAr = cleanText(r.exampleAr, MAX_EXAMPLE);
    if (exAr) item.exampleAr = exAr;
  }
  return item;
}

/** تحليل نص الملف والتحقق منه. صيغة خاطئة ⇒ رفض كامل؛ سطر خاطئ ⇒ تخطٍّ مع العدّ. */
export function parseVocabFile(text: string): VocabParseResult {
  if (text.length > MAX_VOCAB_CHARS) return {ok: false, error: "الملف كبير جداً (الحد 1 ميغابايت)."};
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return {ok: false, error: "الملف ليس JSON صالحاً."};
  }
  if (typeof data !== "object" || data === null) return {ok: false, error: "صيغة الملف غير معروفة."};
  const f = data as Record<string, unknown>;
  if (f.format !== VOCAB_FORMAT) return {ok: false, error: "هذا ليس ملف مفردات من DeutschPfad."};
  if (f.version !== VOCAB_VERSION) return {ok: false, error: `إصدار الملف (${String(f.version)}) غير مدعوم.`};
  if (!Array.isArray(f.items)) return {ok: false, error: "لا توجد قائمة مفردات في الملف."};
  if (f.items.length > MAX_VOCAB_ITEMS) {
    return {ok: false, error: `عدد المفردات (${f.items.length}) يتجاوز الحد ${MAX_VOCAB_ITEMS}.`};
  }

  const items: VocabItem[] = [];
  let skipped = 0;
  for (const raw of f.items) {
    const item = parseVocabItem(raw);
    if (item) items.push(item);
    else skipped++;
  }
  return {ok: true, items, skipped};
}

/** معرّف البطاقة المستوردة: ثابت من المفتاح، مع بادئة تفصل المصدر */
export function importedCardId(prefix: "vocab" | "core", item: Pick<VocabItem, "de" | "level">): string {
  return `${prefix}-${vocabKey(item.level, item.de)}`;
}

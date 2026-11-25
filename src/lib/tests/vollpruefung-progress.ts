/**
 * تقدّم الامتحان الكامل بالترتيب: A1 ← A2 ← B1 ← B2.
 * قاعدة واحدة: لا تُفتح مرحلة قبل إكمال التي قبلها.
 * التقدم يُحفظ في هذا المتصفح فقط (localStorage) ولا يُزامَن ولا يُعد نتيجة رسمية.
 */

export const VOLL_STAGES = ["A1", "A2", "B1", "B2"] as const;
export type VollStage = (typeof VOLL_STAGES)[number];

export const VOLL_STORAGE_KEY = "deutschpfad.vollpruefung.v1";

export function isVollStage(value: string): value is VollStage {
  return (VOLL_STAGES as readonly string[]).includes(value);
}

/** المرحلة الأولى غير المكتملة، أو null إذا اكتملت كلها */
export function nextStage(done: readonly VollStage[]): VollStage | null {
  return VOLL_STAGES.find((s) => !done.includes(s)) ?? null;
}

/** تُفتح المرحلة فقط إذا اكتملت كل المراحل قبلها */
export function canStart(stage: VollStage, done: readonly VollStage[]): boolean {
  const index = VOLL_STAGES.indexOf(stage);
  return VOLL_STAGES.slice(0, index).every((s) => done.includes(s));
}

/** يُعيد المراحل المكتملة مرتبةً حسب الترتيب، ويتجاهل أي قيمة غير معروفة */
export function markDone(done: readonly VollStage[], stage: VollStage): VollStage[] {
  return VOLL_STAGES.filter((s) => s === stage || done.includes(s));
}

export function parseProgress(raw: string | null): VollStage[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    const known = value.filter((x): x is VollStage => typeof x === "string" && isVollStage(x));
    return VOLL_STAGES.filter((s) => known.includes(s));
  } catch {
    return [];
  }
}

export function loadVollProgress(): VollStage[] {
  if (typeof window === "undefined") return [];
  try {
    return parseProgress(window.localStorage.getItem(VOLL_STORAGE_KEY));
  } catch {
    return [];
  }
}

export function saveVollProgress(done: readonly VollStage[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(VOLL_STORAGE_KEY, JSON.stringify(VOLL_STAGES.filter((s) => done.includes(s))));
  } catch {
    /* التخزين غير متاح (وضع خاص مثلاً): التقدم يبقى لهذه الجلسة فقط */
  }
}

/** نظام الجواهر — رصيد مكافآت محلي منفصل لكل متصفح. */

const GEMS_KEY = "dp:gems";

export type GemsReadResult = {ok: true; balance: number} | {ok: false; balance: 0};
export type GemsWriteResult = {ok: true; balance: number} | {ok: false; balance: number};

/** قراءة الرصيد مع التمييز بين رصيد صفري وتعذر القراءة/تلف القيمة. */
export function getGemsResult(): GemsReadResult {
  if (typeof window === "undefined") return {ok: false, balance: 0};
  try {
    const raw = window.localStorage.getItem(GEMS_KEY);
    if (raw === null) return {ok: true, balance: 0};
    if (!/^(0|[1-9]\d*)$/.test(raw)) return {ok: false, balance: 0};
    const balance = Number(raw);
    return Number.isSafeInteger(balance) ? {ok: true, balance} : {ok: false, balance: 0};
  } catch {
    return {ok: false, balance: 0};
  }
}

/** إضافة جواهر دون الكتابة فوق رصيد لم نستطع قراءته. */
export function addGemsResult(amount: number): GemsWriteResult {
  const current = getGemsResult();
  if (!current.ok || !Number.isSafeInteger(amount) || amount <= 0) {
    return {ok: false, balance: current.balance};
  }
  const total = current.balance + amount;
  if (!Number.isSafeInteger(total)) return {ok: false, balance: current.balance};
  try {
    window.localStorage.setItem(GEMS_KEY, String(total));
    return {ok: true, balance: total};
  } catch {
    return {ok: false, balance: current.balance};
  }
}

/** واجهة توافقية تعيد الرصيد الحالي إذا تعذر التعديل. */
export function addGems(amount: number): number {
  return addGemsResult(amount).balance;
}

/** إنفاق جواهر؛ لا تخصم عند تعذر القراءة أو الكتابة أو إدخال مبلغ غير صالح. */
export function spendGems(amount: number): boolean {
  if (!Number.isSafeInteger(amount) || amount <= 0) return false;
  const current = getGemsResult();
  if (!current.ok || current.balance < amount) return false;
  try {
    window.localStorage.setItem(GEMS_KEY, String(current.balance - amount));
    return true;
  } catch {
    return false;
  }
}

/** نقاط مكافآت الجواهر للأحداث الرئيسية */
export const GEM_REWARDS = {
  LESSON_COMPLETED: 5,
  TEST_PASSED: 10,
  LEVEL_SEALED: 30,
  STREAK_DAY: 2,
  DAILY_CHALLENGE: 8,
} as const;

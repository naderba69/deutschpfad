/**
 * نظام الجواهر 💎 — عملة المكافآت المحلية
 * تُكسب بالإنجاز (إكمال درس/اختبار/سلسلة) وتُحفظ في LocalStorage
 * (بلا خادم — تبقى المنصة مجانية تماماً وتقدم كل مستخدم منفصل)
 */

const GEMS_KEY = "dp:gems";

/** قراءة الرصيد */
export function getGems(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(GEMS_KEY);
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** إضافة جواهر */
export function addGems(n: number): number {
  const total = getGems() + n;
  try {
    localStorage.setItem(GEMS_KEY, String(total));
  } catch {
    /* تجاهل */
  }
  return total;
}

/** إنفاق جواهر (ترجع false لو الرصيد غير كافٍ) */
export function spendGems(n: number): boolean {
  const total = getGems();
  if (total < n) return false;
  try {
    localStorage.setItem(GEMS_KEY, String(total - n));
  } catch {
    return false;
  }
  return true;
}

/** نقاط مكافآت الجواهر للأحداث الرئيسية */
export const GEM_REWARDS = {
  LESSON_COMPLETED: 5,
  TEST_PASSED: 10,
  LEVEL_SEALED: 30,
  STREAK_DAY: 2,
  DAILY_CHALLENGE: 8,
} as const;

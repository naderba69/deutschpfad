/**
 * تفضيلات الصوت — سرعة الاستماع العامة + المؤثرات الصوتية
 * (مخزنة محلياً — تفضيل شخصي لكل متصفح)
 */

const RATE_KEY = "dp:preferred-rate";
const SFX_KEY = "dp:sfx-enabled";

/** سرعة الاستماع المفضلة (0.5 – 1.5، الافتراضي 1) */
export function getPreferredRate(): number {
  if (typeof window === "undefined") return 1;
  try {
    const raw = localStorage.getItem(RATE_KEY);
    const n = raw ? parseFloat(raw) : 1;
    if (!Number.isFinite(n)) return 1;
    return Math.min(1.5, Math.max(0.5, n));
  } catch {
    return 1;
  }
}

export function setPreferredRate(rate: number): void {
  try {
    localStorage.setItem(RATE_KEY, String(Math.min(1.5, Math.max(0.5, rate))));
  } catch {
    /* تجاهل */
  }
}

/** هل المؤثرات الصوتية مفعّلة؟ */
export function isSfxEnabledPref(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const raw = localStorage.getItem(SFX_KEY);
    return raw === null ? true : raw === "1";
  } catch {
    return true;
  }
}

export function setSfxEnabledPref(enabled: boolean): void {
  try {
    localStorage.setItem(SFX_KEY, enabled ? "1" : "0");
  } catch {
    /* تجاهل */
  }
}

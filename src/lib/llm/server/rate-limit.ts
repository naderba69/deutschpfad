/**
 * ═══════════════════════════════════════════════════════════
 *  حد المعدل: 45 طلباً في الدقيقة لكل IP (نافذة منزلقة)
 *
 *  · IP العميل: مع TRUST_PROXY=1 نقرأ x-forwarded-for (أول عنوان) ثم x-real-ip.
 *    بدونه لا نثق بالترويسات (يمكن للعميل انتحالها) فكل الطلبات تُحسب في
 *    مجموعة واحدة "unknown" — أكثر تحفظاً، وتُفعَّل الثقة عند وجود وكيل موثوق.
 *  · الحالة في الذاكرة لكل نسخة من الخادم. في بيئة بعدة نسخ (serverless)
 *    يكون الحد لكل نسخة لا عالمياً؛ وهذا مُعلَن في دليل الإعداد.
 * ═══════════════════════════════════════════════════════════
 */

export const RATE_LIMIT_PER_MINUTE = 45;
export const RATE_WINDOW_MS = 60_000;
const MAX_TRACKED_KEYS = 10_000;

/** استخراج IP العميل من الترويسات — لا يُقبل إلا إن كان الوكيل موثوقاً */
export function clientIp(headers: {get(name: string): string | null}, trustProxy: boolean): string {
  if (!trustProxy) return "unknown";
  const fwd = headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip")?.trim();
  return real || "unknown";
}

export interface RateVerdict {
  allowed: boolean;
  remaining: number;
  /** مللي ثانية حتى يُسمح طلب جديد (0 إن كان مسموحاً) */
  retryAfterMs: number;
}

export class SlidingWindowLimiter {
  private readonly hits = new Map<string, number[]>();

  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
    private readonly now: () => number = Date.now,
  ) {}

  hit(key: string): RateVerdict {
    const t = this.now();
    const cutoff = t - this.windowMs;
    const recent = (this.hits.get(key) ?? []).filter((ts) => ts > cutoff);

    if (recent.length >= this.limit) {
      this.hits.set(key, recent);
      return {allowed: false, remaining: 0, retryAfterMs: recent[0] + this.windowMs - t};
    }

    recent.push(t);
    this.hits.set(key, recent);
    if (this.hits.size > MAX_TRACKED_KEYS) this.prune(cutoff);
    return {allowed: true, remaining: this.limit - recent.length, retryAfterMs: 0};
  }

  private prune(cutoff: number): void {
    for (const [key, list] of this.hits) {
      if (list.every((ts) => ts <= cutoff)) this.hits.delete(key);
    }
  }
}

/** المحدد المشترك لمسار /api/llm */
export const llmLimiter = new SlidingWindowLimiter(RATE_LIMIT_PER_MINUTE, RATE_WINDOW_MS);

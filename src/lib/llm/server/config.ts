/**
 * إعدادات مزودي LLM (تعمل على الخادم فقط — المفاتيح سرية)
 */

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim() ?? "";
export const GROQ_API_KEY = process.env.GROQ_API_KEY?.trim() ?? "";
export const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY?.trim() ?? "";

export const GEMINI_MODEL = process.env.GEMINI_MODEL?.trim() ?? "gemini-2.5-flash";
export const GROQ_MODEL = process.env.GROQ_MODEL?.trim() ?? "llama-3.3-70b-versatile";
export const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL?.trim() ?? "meta-llama/llama-3.3-70b-instruct:free";

/** Parse a configured request quota as a positive, safe integer; fail back to a finite default. */
export function parseDailyLimit(value: string | undefined, fallback = 50): number {
  if (!Number.isSafeInteger(fallback) || fallback < 1) {
    throw new RangeError("fallback must be a positive safe integer");
  }
  if (value === undefined || value.trim() === "") return fallback;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

/** السقف اليومي الافتراضي (يُستخدم على الخادم كحد صلب) */
export const LLM_DAILY_LIMIT = parseDailyLimit(process.env.NEXT_PUBLIC_LLM_DAILY_LIMIT);

/**
 * ═══ P0-02: وضع مفاتيح الخادم مغلق افتراضياً ═══
 * endpoint عام بمفاتيح المالك = استنزاف مالي بلا حماية حقيقية على 0$.
 * يتطلب LLM_SERVER_MODE=1 ومفتاح مزود ومخزن عداد ذري مشترك؛
 * وإلا تُعاد not-configured ولا يُستدعى أي مزود بمفتاح المالك أبداً.
 */
export const LLM_SERVER_MODE = process.env.LLM_SERVER_MODE === "1";
const counterRestUrl = process.env.LLM_COUNTER_REST_URL?.trim() ?? "";
export const LLM_COUNTER_REST_URL = counterRestUrl.endsWith("/")
  ? counterRestUrl.slice(0, -1)
  : counterRestUrl;
export const LLM_COUNTER_REST_TOKEN = process.env.LLM_COUNTER_REST_TOKEN?.trim() ?? "";

/** لا نفعّل endpoint بمفاتيح المالك دون مخزن عدّاد ذري مشترك بين النسخ. */
function hasSharedLLMCounter(): boolean {
  return Boolean(LLM_COUNTER_REST_URL && LLM_COUNTER_REST_TOKEN);
}

/** هل وضع الخادم مفعّل وآمن للاستخدام؟ */
export function serverModeEnabled(): boolean {
  return LLM_SERVER_MODE && hasAnyKey() && hasSharedLLMCounter();
}

export type ProviderName = "gemini" | "groq" | "openrouter";

/** هل المفتاح مضبوط لمزوّد معيّن؟ */
function hasKey(name: ProviderName): boolean {
  if (name === "gemini") return !!GEMINI_API_KEY;
  if (name === "groq") return !!GROQ_API_KEY;
  return !!OPENROUTER_API_KEY;
}

/** هل هناك أي مفتاح على الإطلاق؟ */
export function hasAnyKey(): boolean {
  return hasKey("gemini") || hasKey("groq") || hasKey("openrouter");
}

/** ترتيب المزوّدين المتاحين (للـ Fallback) */
export function configuredProviders(): ProviderName[] {
  return (["gemini", "groq", "openrouter"] as const).filter(hasKey);
}

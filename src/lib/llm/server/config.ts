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

/** السقف اليومي الافتراضي (يُستخدم على الخادم كحد صلب) */
export const LLM_DAILY_LIMIT = Number(process.env.NEXT_PUBLIC_LLM_DAILY_LIMIT ?? 50) || 50;

/**
 * ═══ P0-02: وضع مفاتيح الخادم مغلق افتراضياً ═══
 * endpoint عام بمفاتيح المالك = استنزاف مالي بلا حماية حقيقية على 0$.
 * يتفعّل فقط بـ LLM_SERVER_MODE=1 صراحةً (للاستخدام الخاص/التطوير)،
 * وإلا تُعاد not-configured ولا يُستدعى أي مزود بمفتاح المالك أبداً.
 */
export const LLM_SERVER_MODE = process.env.LLM_SERVER_MODE === "1";

/** هل وضع الخادم مفعّل (ومفاتيح موجودة)؟ */
export function serverModeEnabled(): boolean {
  return LLM_SERVER_MODE && hasAnyKey();
}

export type ProviderName = "gemini" | "groq" | "openrouter";

/** هل المفتاح مضبوط لمزوّد معيّن؟ */
export function hasKey(name: ProviderName): boolean {
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

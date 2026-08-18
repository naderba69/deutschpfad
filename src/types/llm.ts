/**
 * أنواع نظام الذكاء الاصطناعي (LLM) — المرحلة 5
 */

/** رسالة محادثة (صيغة موحدة للمزودين) */
export interface LLMMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export type LLMProviderName = "gemini" | "groq" | "openrouter" | "cache";

/** مدخلات استدعاء LLM */
export interface LLMCallInput {
  messages: LLMMessage[];
  /** الغرض (chat, corrector, generator...) — يدخل في مفتاح التخزين المؤقت */
  purpose?: string;
  /** مفتاح تخزين مؤقت مخصص (اختياري) */
  cacheKey?: string;
  maxTokens?: number;
  temperature?: number;
  /** ═══ P0-02: تجاهل مسار BYOK وإجبار الخادم (للاستخدام الخاص فقط) ═══ */
  forceServer?: boolean;
}

/** نتيجة استدعاء LLM */
export interface LLMResult {
  ok: boolean;
  content?: string;
  provider?: LLMProviderName;
  /** عدد الطلبات المتبقية اليوم (من الخادم) */
  remaining?: number;
  limit?: number;
  status?: "ok" | "limit" | "not-configured" | "error";
  error?: string;
}

/** حالة خدمة LLM (من /api/llm/status) */
export interface LLMStatus {
  configured: boolean;
  providers: LLMProviderName[];
  dailyLimit: number;
  usageToday: number;
}

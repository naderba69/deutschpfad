import {configuredProviders, type ProviderName} from "@/lib/llm/server/config";
import {callGemini, callGroq, callOpenRouter, LLMProviderError} from "@/lib/llm/server/providers";
import type { LLMMessage } from "@/types/llm";

/**
 * التراجع التلقائي (Fallback) بين المزودين:
 * Gemini → Groq → OpenRouter
 * — إعادة محاولة بانتظار مضاعف (Exponential Backoff) عند 429/5xx
 * — الانتقال للمزوّد التالي فوراً عند فشل دائم (مفتاح خاطئ مثلاً)
 */

export interface FallbackResult {
  content: string;
  provider: ProviderName;
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** استدعاء مزوّد محدد حسب اسمه */
async function callProvider(
  name: ProviderName,
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number },
): Promise<string> {
  if (name === "gemini") return callGemini(messages, opts);
  if (name === "groq") return callGroq(messages, opts);
  return callOpenRouter(messages, opts);
}

/** إعادة محاولة مع backoff مضاعف (1s, 2s, 4s) */
async function withBackoff<T>(
  fn: () => Promise<T>,
  attempts = 3,
  baseDelayMs = 1000,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      const retriable = err instanceof LLMProviderError ? err.retriable : true;
      if (!retriable) throw err; // فشل دائم → انتقل للمزوّد التالي فوراً
      if (attempt < attempts - 1) {
        await sleep(baseDelayMs * 2 ** attempt);
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error("فشل الاستدعاء بعد المحاولات");
}

/** توليد رد عبر أول مزوّد متاح يعمل */
export async function generateWithFallback(
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number } = {},
): Promise<FallbackResult> {
  const order = configuredProviders();
  if (order.length === 0) {
    throw new LLMProviderError("لا توجد مفاتيح LLM مضبوطة على الخادم", undefined, false);
  }

  let lastError: unknown = null;
  for (const name of order) {
    try {
      const content = await withBackoff(() => callProvider(name, messages, opts));
      return { content, provider: name };
    } catch (err) {
      lastError = err;
      await sleep(350); // فاصل بسيط قبل المحاولة على المزوّد التالي
    }
  }

  throw lastError instanceof Error ? lastError : new Error("فشلت جميع مزوّدي LLM");
}

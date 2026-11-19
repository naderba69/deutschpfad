import {configuredProviders, type ProviderName} from "@/lib/llm/server/config";
import {callGemini, callGroq, callOpenRouter, LLMProviderError} from "@/lib/llm/server/providers";
import type {LLMMessage} from "@/types/llm";

export interface FallbackResult {
  content: string;
  provider: ProviderName;
}

function throwIfAborted(signal: AbortSignal): void {
  if (signal.aborted) throw signal.reason ?? new DOMException("تم إلغاء الطلب", "AbortError");
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  throwIfAborted(signal);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(done, ms);
    function cleanup() {
      clearTimeout(timer);
      signal.removeEventListener("abort", onAbort);
    }
    function done() {
      cleanup();
      resolve();
    }
    function onAbort() {
      cleanup();
      reject(signal.reason ?? new DOMException("تم إلغاء الطلب", "AbortError"));
    }
    signal.addEventListener("abort", onAbort, {once: true});
  });
}

async function callProvider(
  name: ProviderName,
  messages: LLMMessage[],
  opts: {maxTokens?: number; temperature?: number},
  signal: AbortSignal,
): Promise<string> {
  if (name === "gemini") return callGemini(messages, opts, signal);
  if (name === "groq") return callGroq(messages, opts, signal);
  return callOpenRouter(messages, opts, signal);
}

async function withBackoff<T>(
  fn: () => Promise<T>,
  attempts: number,
  baseDelayMs: number,
  signal: AbortSignal,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt++) {
    throwIfAborted(signal);
    try {
      return await fn();
    } catch (err) {
      if (signal.aborted) throw signal.reason ?? err;
      lastError = err;
      const retriable = err instanceof LLMProviderError ? err.retriable : true;
      if (!retriable) throw err;
      if (attempt < attempts - 1) await sleep(baseDelayMs * 2 ** attempt, signal);
    }
  }
  throw lastError instanceof Error ? lastError : new Error("فشل الاستدعاء بعد المحاولات");
}

export async function generateWithFallback(
  messages: LLMMessage[],
  opts: {maxTokens?: number; temperature?: number} = {},
  signal: AbortSignal = new AbortController().signal,
): Promise<FallbackResult> {
  const order = configuredProviders();
  if (order.length === 0) {
    throw new LLMProviderError("لا توجد مفاتيح LLM مضبوطة على الخادم", undefined, false);
  }

  let lastError: unknown = null;
  for (const name of order) {
    throwIfAborted(signal);
    try {
      const content = await withBackoff(
        () => callProvider(name, messages, opts, signal),
        3,
        1000,
        signal,
      );
      return {content, provider: name};
    } catch (err) {
      if (signal.aborted) throw signal.reason ?? err;
      lastError = err;
      await sleep(350, signal);
    }
  }

  throw lastError instanceof Error ? lastError : new Error("فشلت جميع مزوّدي LLM");
}

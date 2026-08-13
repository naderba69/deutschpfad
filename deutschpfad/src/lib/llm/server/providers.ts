import type { LLMMessage } from "@/types/llm";
import {GEMINI_API_KEY, GEMINI_MODEL, GROQ_API_KEY, GROQ_MODEL, OPENROUTER_API_KEY, OPENROUTER_MODEL} from "@/lib/llm/server/config";

/**
 * مزودو LLM — كل مزود كدالة مستقلة
 * الخطأ يُرمى كـ LLMProviderError مع: status (رقم HTTP) و retriable
 */

export class LLMProviderError extends Error {
  status?: number;
  retriable: boolean;

  constructor(message: string, status?: number, retriable = false) {
    super(message);
    this.name = "LLMProviderError";
    this.status = status;
    this.retriable = retriable;
  }
}

const DEFAULT_TIMEOUT_MS = 45000;

/** جلب JSON مع معالجة موحّدة للأخطاء (429/401/5xx/شبكة) */
async function fetchJson(url: string, init: RequestInit, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<Record<string, unknown>> {
  let res: Response;
  try {
    res = await fetch(url, { ...init, signal: AbortSignal.timeout(timeoutMs) });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      throw new LLMProviderError("انتهت مهلة الاتصال", undefined, true);
    }
    throw new LLMProviderError("خطأ في الشبكة", undefined, true);
  }

  if (res.status === 429) {
    throw new LLMProviderError("تجاوز حد الطلبات (429)", 429, true);
  }
  if (res.status === 401 || res.status === 403) {
    throw new LLMProviderError("المفتاح غير صالح — تحقق من إعدادات الخادم", res.status, false);
  }
  if (res.status >= 500) {
    throw new LLMProviderError(`خطأ خادم المزوّد (${res.status})`, res.status, true);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new LLMProviderError(`HTTP ${res.status}: ${text.slice(0, 200)}`, res.status, true);
  }
  return (await res.json()) as Record<string, unknown>;
}

/* ═══════════ Google Gemini ═══════════ */

export async function callGemini(
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number },
): Promise<string> {
  const system = messages.filter((m) => m.role === "system").map((m) => m.content).join("\n");
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature: opts.temperature ?? 0.7,
      maxOutputTokens: opts.maxTokens ?? 1024,
    },
  };
  if (system) body.systemInstruction = { parts: [{ text: system }] };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const data = await fetchJson(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text =
    (data as { candidates?: { content?: { parts?: { text?: string }[] } }[] })
      .candidates?.[0]?.content?.parts?.map((p) => p.text ?? "")
      .join("") ?? "";
  if (!text.trim()) {
    throw new LLMProviderError("Gemini أعاد رداً فارغاً", undefined, false);
  }
  return text;
}

/* ═══════════ Groq (صيغة OpenAI) ═══════════ */

export async function callGroq(
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number },
): Promise<string> {
  const url = "https://api.groq.com/openai/v1/chat/completions";
  const data = await fetchJson(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: opts.temperature ?? 0.7,
      max_tokens: opts.maxTokens ?? 1024,
    }),
  });

  const text = (data as { choices?: { message?: { content?: string } }[] })
    .choices?.[0]?.message?.content ?? "";
  if (!text.trim()) {
    throw new LLMProviderError("Groq أعاد رداً فارغاً", undefined, false);
  }
  return text;
}

/* ═══════════ OpenRouter (صيغة OpenAI) ═══════════ */

export async function callOpenRouter(
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number },
): Promise<string> {
  const url = "https://openrouter.ai/api/v1/chat/completions";
  const data = await fetchJson(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://deutschpfad.app",
      "X-Title": "DeutschPfad",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages,
      temperature: opts.temperature ?? 0.7,
      max_tokens: opts.maxTokens ?? 1024,
    }),
  });

  const text = (data as { choices?: { message?: { content?: string } }[] })
    .choices?.[0]?.message?.content ?? "";
  if (!text.trim()) {
    throw new LLMProviderError("OpenRouter أعاد رداً فارغاً", undefined, false);
  }
  return text;
}

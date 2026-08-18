import {getCachedLLM, setCachedLLM} from "@/lib/llm/cache";
import {hashLLMRequest} from "@/lib/llm/hash";
import {getDailyLimit, getTodayUsage, incrementUsage} from "@/lib/llm/usage";
import type { LLMCallInput, LLMMessage, LLMProviderName, LLMResult, LLMStatus } from "@/types/llm";

/**
 * دالة الاستدعاء الموحّدة (جهة العميل):
 * 1) فحص التخزين المؤقت (نفس السؤال لا يستهلك طلباً)
 * 2) فحص السقف اليومي محلياً
 * 3) استدعاء /api/llm (الذي يدير المزودين والـ Fallback)
 * 4) زيادة العدّاد + حفظ الرد في التخزين المؤقت
 */

export async function callLLM(input: LLMCallInput): Promise<LLMResult> {
  const purpose = input.purpose ?? "general";
  const cacheKey = input.cacheKey ?? (await hashLLMRequest(input.messages, purpose));

  // 1) التخزين المؤقت
  try {
    const cached = await getCachedLLM(cacheKey);
    if (cached) {
      const limit = await getDailyLimit();
      const { count } = await getTodayUsage();
      return {
        ok: true,
        content: cached,
        provider: "cache",
        remaining: Math.max(0, limit - count),
        limit,
      };
    }
  } catch {
    /* المتابعة للاستدعاء */
  }

  // 2) السقف اليومي (محلي)
  const limit = await getDailyLimit();
  const { count } = await getTodayUsage();
  if (count >= limit) {
    return { ok: false, status: "limit", remaining: 0, limit, error: "استنفدت حصتك اليومية" };
  }

  // ═══ P0-02: مسار BYOK — مفتاح المستخدم الخاص (Gemini) يعمل من المتصفح
  // مباشرة دون المرور بخادمنا (لا تكلفة على صاحب المنصة، ولا يُرسل المفتاح
  // لأي خادم تابع للمشروع). يُخزَّن محلياً فقط ويُستثنى من النسخة الاحتياطية. ═══
  const userKey = (() => {
    try {
      return typeof window !== "undefined" ? window.localStorage.getItem("dp:llm:user-key") ?? "" : "";
    } catch {
      return "";
    }
  })();
  if (userKey && !input.forceServer) {
    try {
      const content = await callGeminiDirect(userKey, input.messages, {
        maxTokens: input.maxTokens,
        temperature: input.temperature,
      });
      await incrementUsage();
      void setCachedLLM(cacheKey, content, purpose);
      return { ok: true, content, provider: "byok-gemini" as LLMProviderName, remaining: Math.max(0, limit - (count + 1)), limit };
    } catch (e) {
      return {
        ok: false,
        status: "error",
        error: e instanceof Error ? e.message : "فشل الاتصال بمفتاحك — تحقق منه في الإعدادات",
        remaining: Math.max(0, limit - count),
        limit,
      };
    }
  }

  // 3) الاستدعاء عبر الخادم (معطّل افتراضياً — لا يُستدعى بمفتاح المالك)
  try {
    const res = await fetch("/api/llm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: input.messages,
        purpose,
        maxTokens: input.maxTokens,
        temperature: input.temperature,
      }),
    });
    const data = (await res.json()) as LLMResult;

    if (data.ok && data.content) {
      await incrementUsage();
      void setCachedLLM(cacheKey, data.content, purpose);
      return data;
    }
    if (data.status === "limit") {
      // مزامنة العدّاد المحلي مع الخادم
      return { ...data, remaining: 0 };
    }
    return data;
  } catch {
    return { ok: false, status: "error", error: "تعذّر الاتصال بخادم الذكاء الاصطناعي" };
  }
}

/** هل مفتاح BYOK محفوظ محلياً؟ */
export function hasUserLLMKey(): boolean {
  try {
    return typeof window !== "undefined" && !!window.localStorage.getItem("dp:llm:user-key");
  } catch {
    return false;
  }
}

/** جلب حالة الخدمة (لإخفاء الميزات عند غياب المفاتيح) */
export async function fetchLLMStatus(): Promise<LLMStatus | null> {
  // ═══ P0-02: مفتاح BYOK المحلي يفعّل الميزات دون أي اعتماد على الخادم ═══
  if (hasUserLLMKey()) {
    return { configured: true, providers: ["gemini"], dailyLimit: 100, usageToday: 0 };
  }
  try {
    const res = await fetch("/api/llm/status", { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as LLMStatus;
  } catch {
    return null;
  }
}

/**
 * ═══ P0-02: استدعاء Gemini مباشرة من المتصفح بمفتاح المستخدم (BYOK) ═══
 * — لا يمر بخادمنا إطلاقاً: لا تكلفة على المنصة ولا تسريب للمفتاح —
 * Gemini Web API يسمح بذلك (CORS + مفتاح API). مدة 45 ثانية ثم خطأ.
 */
async function callGeminiDirect(
  apiKey: string,
  messages: LLMMessage[],
  opts: { maxTokens?: number; temperature?: number } = {},
): Promise<string> {
  const model = "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

  // نبني المحتوى: كل الرسائل بنصها
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents,
      generationConfig: {
        maxOutputTokens: Math.min(2048, Math.max(1, Math.round(opts.maxTokens ?? 512))),
        temperature: Math.min(2, Math.max(0, opts.temperature ?? 0.7)),
      },
    }),
    signal: AbortSignal.timeout(45_000),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`مفتاحك غير صالح أو الحصة منتهية (${res.status})${txt ? `: ${txt.slice(0, 120)}` : ""}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text) throw new Error("لا ردّ من المزود");
  return text;
}

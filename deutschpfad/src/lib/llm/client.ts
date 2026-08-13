import {getCachedLLM, setCachedLLM} from "@/lib/llm/cache";
import {hashLLMRequest} from "@/lib/llm/hash";
import {getDailyLimit, getTodayUsage, incrementUsage} from "@/lib/llm/usage";
import type { LLMCallInput, LLMResult, LLMStatus } from "@/types/llm";

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

  // 3) الاستدعاء
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

/** جلب حالة الخدمة (لإخفاء الميزات عند غياب المفاتيح) */
export async function fetchLLMStatus(): Promise<LLMStatus | null> {
  try {
    const res = await fetch("/api/llm/status", { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as LLMStatus;
  } catch {
    return null;
  }
}

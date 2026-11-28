/**
 * أدوات المحادثة المشتركة للمعلّم الذكي (الدردشة + المعلّم الصوتي + اسأل المعلّم)
 * — دوال نقية بلا تبعيات واجهة، لتسهيل اختبارها.
 */
import type {LLMResult} from "@/types/llm";

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

/** حد عدد الرسائل المرسلة كتاريخ محادثة (الزوج = رسالتان) */
export const HISTORY_MAX_TURNS = 12;
/** حد مجموع أحرف التاريخ — يبقى ضمن سقف الخادم (16000 حرف بما فيه النظام) */
export const HISTORY_MAX_CHARS = 6000;

/**
 * يقصّ تاريخ المحادثة ليبقى ضمن الحدود:
 * - يحتفظ بآخر `maxTurns` رسالة
 * - يبدأ دائماً برسالة للمستخدم
 * - يُسقط الأقدم حتى يتحقق حد الأحرف (مع بقاء آخر رسالة للمستخدم)
 */
export function trimHistory(messages: ChatTurn[], maxTurns = HISTORY_MAX_TURNS, maxChars = HISTORY_MAX_CHARS): ChatTurn[] {
  let out = messages.slice(-maxTurns);
  while (out.length > 0 && out[0].role !== "user") out = out.slice(1);
  let total = out.reduce((n, m) => n + m.content.length, 0);
  while (out.length > 1 && total > maxChars) {
    total -= out[0].content.length;
    out = out.slice(1);
    while (out.length > 0 && out[0].role !== "user") {
      total -= out[0].content.length;
      out = out.slice(1);
    }
  }
  return out;
}

/** وسم التصحيح في رد المعلّم الصوتي (يقبل ###تصحيح: و ### تصحيح: و ##تصحيح:) */
const VOICE_CORRECTION_TAG = /#{2,3}\s*تصحيح\s*:/;

/**
 * يفصل رد المعلّم الصوتي عن سطر التصحيح الموجّه للقارئ العربي.
 * سطر التصحيح لا يُنطق صوتياً. «لا أخطاء» تُعامل كغياب تصحيح.
 */
export function splitVoiceReply(raw: string): {reply: string; correction?: string} {
  const m = VOICE_CORRECTION_TAG.exec(raw);
  if (!m) return {reply: raw.trim()};
  const reply = raw.slice(0, m.index).trim();
  const correction = raw.slice(m.index + m[0].length).trim();
  const isNone = correction === "" || /^لا\s*(أخطاء|توجد أخطاء|يوجد خطأ)/.test(correction);
  return isNone ? {reply} : {reply, correction};
}

/** نص مقروء للمتعلم يشرح سبب فشل استدعاء المعلّم الذكي */
export function llmFailureMessage(r: LLMResult): string {
  switch (r.status) {
    case "limit":
      return "استنفدت حصتك اليومية من طلبات المعلّم الذكي — تعود غداً، والتمارين والدروس تعمل بلا حصة.";
    case "not-configured":
      return "المعلّم الذكي غير مفعّل. أضف مفتاح Gemini الخاص بك من صفحة الإعدادات، أو استخدم الوضع المحلي.";
    default: {
      const detail = r.error?.trim();
      return detail
        ? `تعذّر الرد الآن: ${detail.length > 160 ? `${detail.slice(0, 160)}…` : detail}`
        : "تعذّر الرد الآن — حاول مرة أخرى بعد لحظات.";
    }
  }
}

import {getRecord, putRecord} from "@/lib/storage/db";
import {SETTINGS_KEYS} from "@/lib/storage/keys";

/**
 * شخصية المعلّم — رسمي / ودّي / صارم
 * تؤثر على رسائل التحفيز والنبرة
 */

export type TeacherPersonality = "formal" | "friendly" | "strict";

export const PERSONALITY_META: Record<TeacherPersonality, { label: string; emoji: string; desc: string }> = {
  formal: { label: "رسمي", emoji: "🎩", desc: "نبرة أكاديمية محترمة — مثل الأستاذ الجامعي" },
  friendly: { label: "ودّي", emoji: "😊", desc: "مشجع ومرح — مثل الصديق الذي يتعلم معك" },
  strict: { label: "صارم", emoji: "📏", desc: "مطالب ومباشر — يدفعك لأداء أفضل" },
};

export const DEFAULT_PERSONALITY: TeacherPersonality = "friendly";

export async function getPersonality(): Promise<TeacherPersonality> {
  try {
    const prefs = await getRecord<{ personality?: TeacherPersonality }>("settings", SETTINGS_KEYS.preferences);
    return prefs?.personality ?? DEFAULT_PERSONALITY;
  } catch {
    return DEFAULT_PERSONALITY;
  }
}

export async function setPersonality(p: TeacherPersonality): Promise<void> {
  const prefs = (await getRecord<Record<string, unknown>>("settings", SETTINGS_KEYS.preferences)) ?? {};
  await putRecord("settings", SETTINGS_KEYS.preferences, { ...prefs, personality: p });
}

/** رسالة تحفيزية حسب الشخصية */
export function motivationalByPersonality(personality: TeacherPersonality, kind: "success" | "error" | "daily"): string {
  const msgs: Record<TeacherPersonality, Record<typeof kind, string>> = {
    formal: {
      success: "أداء ممتاز — استمر على هذا المستوى من الاجتهاد.",
      error: "الخطأ جزء من التعلم. راجع القاعدة ثم أعد المحاولة.",
      daily: "يُوصى بممارسة يومية منتظمة لتحقيق أفضل النتائج.",
    },
    friendly: {
      success: "رائع جداً! أنت تتألق! 🎉",
      error: "لا بأس إطلاقاً — الجميع يخطئ، حاول مرة أخرى! 💪",
      daily: "يوم جديد، فرصة جديدة لنتعلم معاً! 🌟",
    },
    strict: {
      success: "جيد. لكن لا تتوانَ — أمامك المزيد.",
      error: "خطأ غير مقبول إذا تكرر. راجع وعد بقوة.",
      daily: "الوقت لا ينتظر. افتح الدرس الآن وابدأ.",
    },
  };
  return msgs[personality][kind];
}

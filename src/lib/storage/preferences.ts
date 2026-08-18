import {getRecord, putRecord} from "@/lib/storage/db";
import {SETTINGS_KEYS} from "@/lib/storage/keys";

/**
 * تفضيلات المستخدم — الهدف والخطة الزمنية
 * (تُحفظ في IndexedDB وتغذي التوصيات)
 */

export type LearningGoal = "travel" | "work" | "study" | "exam";
export type StudyPace = "intensive" | "medium" | "slow";

export interface UserPreferences {
  goal: LearningGoal;
  pace: StudyPace;
  /** وقت مراجعة يومي مفضل (ساعة) */
  preferredHour?: number;
}

export const GOAL_LABELS: Record<LearningGoal, { label: string; emoji: string; note: string }> = {
  travel: { label: "سفر", emoji: "✈️", note: "نركّز على عبارات السفر والحوارات العملية" },
  work: { label: "عمل", emoji: "💼", note: "نركّز على مفردات العمل والمراسلات الرسمية" },
  study: { label: "دراسة", emoji: "🎓", note: "نركّز على اللغة الأكاديمية والجامعية" },
  exam: { label: "امتحان Goethe", emoji: "📜", note: "نركّز على نمط الأسئلة والاختبارات" },
};

export const PACE_LABELS: Record<StudyPace, { label: string; daily: string }> = {
  intensive: { label: "مكثفة", daily: "45-60 دقيقة يومياً" },
  medium: { label: "متوسطة", daily: "20-30 دقيقة يومياً" },
  slow: { label: "بطيئة", daily: "10-15 دقيقة يومياً" },
};

const DEFAULT: UserPreferences = { goal: "travel", pace: "medium" };

export async function getPreferences(): Promise<UserPreferences> {
  try {
    const stored = await getRecord<Partial<UserPreferences>>("settings", SETTINGS_KEYS.preferences);
    return { ...DEFAULT, ...stored };
  } catch {
    return DEFAULT;
  }
}

export async function savePreferences(prefs: UserPreferences): Promise<void> {
  await putRecord("settings", SETTINGS_KEYS.preferences, prefs);
}

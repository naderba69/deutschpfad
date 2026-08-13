import {getRecord, putRecord} from "@/lib/storage/db";

/**
 * ═══════════════════════════════════════════════════════════
 *  بيانات المتعلم (Learner Profile) — الهوية والرحلة
 *  الاسم · آخر درس · نتيجة التقييم · هل بدأ للتو؟
 *  تُحفظ في IndexedDB وتغذي «لوحة الرحلة» على الرئيسية.
 * ═══════════════════════════════════════════════════════════
 */

export interface LearnerProfile {
  /** اسم المتعلم (مثل «نادر») — يُطلب في أول دخول */
  name?: string;
  /** معرّف آخر درس فتحه (للاستئناف من حيث توقف) */
  lastLessonId?: string;
  /** نتيجة اختبار تحديد المستوى */
  placementLevel?: "A1" | "A2" | "B1" | "B2";
  /** هل أُكمل «تأكيد الاسم» من قبل؟ */
  onboarded?: boolean;
  /** الطابع الزمني لآخر دخول */
  lastSeen?: number;
  /* ─── خطة الدراسة (اقتراح 2026-08) ─── */
  /** ساعة الدراسة المفضلة (0-23) */
  studyHour?: number;
  /** الهدف اليومي بالدقائق */
  dailyGoalMinutes?: number;
  /** كم يوماً في الأسبوع ينوي الدراسة؟ */
  daysPerWeek?: number;
}

const STORE = "settings";
const KEY = "learner-profile";

const DEFAULT: LearnerProfile = {};

export async function getLearnerProfile(): Promise<LearnerProfile> {
  try {
    const stored = await getRecord<Partial<LearnerProfile>>(STORE, KEY);
    return { ...DEFAULT, ...stored };
  } catch {
    return { ...DEFAULT };
  }
}

export async function saveLearnerProfile(patch: Partial<LearnerProfile>): Promise<LearnerProfile> {
  const current = await getLearnerProfile();
  const next = { ...current, ...patch, lastSeen: Date.now() };
  try {
    await putRecord(STORE, KEY, next);
  } catch {
    // تجاهل أخطاء الكتابة (IndexedDB غير متاح) — نكمل في الذاكرة
  }
  return next;
}

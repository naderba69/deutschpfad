import {getRecord, putRecord} from "@/lib/storage/db";

/**
 * ═══════════════════════════════════════════════════════════
 *  بيانات المتعلم (Learner Profile) — الهوية والرحلة
 *  الاسم · آخر درس · نتيجة التقييم · هل بدأ للتو؟
 *  تُحفظ في IndexedDB + مرآة LocalStorage فورية:
 *  · الريفريش يعيد الاسم/التقدم فوراً (قراءة متزامنة)
 *  · حتى لو فشل IndexedDB تبقى الهوية محفوظة
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
const LS_MIRROR = "dp:learner-profile";

const DEFAULT: LearnerProfile = {};

/* ─── مرآة LocalStorage (متزامنة وسريعة) ─── */

function readMirror(): Partial<LearnerProfile> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LS_MIRROR);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LearnerProfile>;
    return typeof parsed === "object" && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}

function writeMirror(profile: LearnerProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LS_MIRROR, JSON.stringify(profile));
  } catch {
    /* تجاهل (وضع خاص مثلاً) */
  }
}

/* ─── القراءة: المرآة أولاً (فورية) ثم تعزيز من IndexedDB ─── */

/** قراءة سريعة متزامنة — مثالية لعرض الهوية فور الريفريش */
export function getLearnerProfileSync(): LearnerProfile {
  return { ...DEFAULT, ...(readMirror() ?? {}) };
}

export async function getLearnerProfile(): Promise<LearnerProfile> {
  // المرآة المحلية تعطي نتيجة فورية
  const mirror = readMirror();
  const fromMirror = { ...DEFAULT, ...(mirror ?? {}) };

  // ثم نحاول التعزيز من IndexedDB (الأحدث)
  try {
    const stored = await getRecord<Partial<LearnerProfile>>(STORE, KEY);
    const merged = { ...fromMirror, ...(stored ?? {}) };
    // إن اختلفت المرآة عن IndexedDB → حدّث المرآة بالأحدث
    if (JSON.stringify(merged) !== JSON.stringify(fromMirror)) writeMirror(merged);
    return merged;
  } catch {
    // IndexedDB فشل → نكتفي بالمرآة (لا نطلب الاسم مجدداً!)
    return fromMirror;
  }
}

export async function saveLearnerProfile(patch: Partial<LearnerProfile>): Promise<LearnerProfile> {
  const current = await getLearnerProfile();
  const next = { ...current, ...patch, lastSeen: Date.now() };
  // 1) المرآة أولاً — الريفريش يعيد الحالة فوراً
  writeMirror(next);
  // 2) ثم IndexedDB (غير متزامن)
  try {
    await putRecord(STORE, KEY, next);
  } catch {
    /* تجاهل أخطاء الكتابة — المرآة كافية */
  }
  return next;
}

/** مسح الملف الشخصي (اختياري — عند إعادة تعيين) */
export async function clearLearnerProfile(): Promise<void> {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(LS_MIRROR);
    } catch {
      /* تجاهل */
    }
  }
  try {
    const { getDb } = await import("@/lib/storage/db");
    await (await getDb()).delete("settings", KEY);
  } catch {
    /* تجاهل */
  }
}

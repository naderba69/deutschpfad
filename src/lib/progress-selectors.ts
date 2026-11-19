import {LEVELS, getUnitsByLevel} from "@/lib/constants/curriculum";
import {LESSON_META} from "@/data/lessons/meta";
import type { LevelCode, LevelCompletion, Unit } from "@/types/curriculum";

/** نسبة إكمال الدروس في مستوى معيّن (0-100) */
export function getLessonLevelCompletion(
  completedLessons: string[],
  level: LevelCode,
): { completed: number; total: number; pct: number } {
  const list = LESSON_META.filter((l) => l.level === level);
  const completed = list.filter((l) => completedLessons.includes(l.id)).length;
  return {
    completed,
    total: list.length,
    pct: list.length === 0 ? 0 : Math.round((completed / list.length) * 100),
  };
}

/** أول درس غير مكتمل في المسار الكامل (نقطة الاستئناف الحقيقية) */
export function firstIncompleteLesson(
  completedLessons: string[],
): { id: string; level: LevelCode } | undefined {
  return LESSON_META.find((l) => !completedLessons.includes(l.id));
}

/** هل اكتملت كل دروس المستوى؟ (إشارة لامتحان الختم) */
export function isLevelLessonsDone(completedLessons: string[], level: LevelCode): boolean {
  return getLessonLevelCompletion(completedLessons, level).pct === 100;
}

/**
 * دوال اختيار التقدم (Pure functions)
 * — حساب حالة المستويات والوحدات بناءً على الوحدات المكتملة والمستويات المختومة —
 * اجتياز امتحان الختم يسجل حالة الختم. وللتوافق مع بيانات المستخدمين القدامى،
 * إكمال كل الوحدات يتيح الانتقال داخلياً لكنه لا يسجل اجتيازاً أو ختماً.
 */

/** إحصاءات مستوى معيّن */
export function getLevelCompletion(completed: string[], level: LevelCode): LevelCompletion {
  const units = getUnitsByLevel(level);
  const completedCount = units.filter((u) => completed.includes(u.id)).length;
  return {
    level,
    total: units.length,
    completed: completedCount,
    pct: units.length === 0 ? 0 : Math.round((completedCount / units.length) * 100),
  };
}

/** هل اجتاز المستخدم امتحان الختم وسُجل ذلك صراحةً؟ */
export function isLevelSealed(
  _completed: string[],
  level: LevelCode,
  sealed: LevelCode[] = [],
): boolean {
  return sealed.includes(level);
}

/**
 * أهلية الانتقال الداخلية للمستوى التالي.
 * يُحافظ إكمال 100% من الوحدات على مسار المستخدمين القدامى، لكنه لا يعني اجتياز امتحان.
 */
export function isLevelProgressionComplete(
  completed: string[],
  level: LevelCode,
  sealed: LevelCode[] = [],
): boolean {
  return isLevelSealed(completed, level, sealed) || getLevelCompletion(completed, level).pct === 100;
}

/** المستوى النشط الحالي: أول مستوى اجتاز بوابته الداخلية */
export function getActiveLevel(completed: string[], sealed: LevelCode[] = []): LevelCode {
  for (const level of LEVELS) {
    if (!isLevelProgressionComplete(completed, level.code, sealed)) return level.code;
  }
  return "B2";
}

/** هل المستوى جاهز لامتحان الختم؟ (اكتملت نسبة العتبة من وحداته) */
export function canTakeSealExam(completed: string[], level: LevelCode): boolean {
  const meta = LEVELS.find((l) => l.code === level);
  if (!meta) return false;
  return getLevelCompletion(completed, level).pct >= meta.unlockThreshold;
}

/** هل الوحدة مفتوحة للتعلم؟ (ختم المستوى السابق + فتح تسلسلي داخل المستوى) */
export function isUnitUnlocked(
  completed: string[],
  unit: Unit,
  sealed: LevelCode[] = [],
): boolean {
  const levelIndex = LEVELS.findIndex((l) => l.code === unit.level);
  const active = getActiveLevel(completed, sealed);
  const activeIndex = LEVELS.findIndex((l) => l.code === active);

  // مستوى بعد المستوى النشط → مقفل (يتطلب ختم السابق)
  if (levelIndex > activeIndex) return false;
  // مستوى قبل المستوى النشط → مفتوح للمراجعة
  if (levelIndex < activeIndex) return true;

  // أول وحدة في المستوى النشط → مفتوحة دائماً
  if (unit.number === 1) return true;

  // الوحدة تفتح إذا اكتملت سابقتها
  const previous = getUnitsByLevel(unit.level).find((u) => u.number === unit.number - 1);
  return previous ? completed.includes(previous.id) : true;
}

/** حالة الوحدة الظاهرية: locked | current | completed */
export function getUnitStatus(
  completed: string[],
  unit: Unit,
  sealed: LevelCode[] = [],
): "locked" | "current" | "completed" {
  if (completed.includes(unit.id)) return "completed";
  return isUnitUnlocked(completed, unit, sealed) ? "current" : "locked";
}

/** النسبة الإجمالية للتقدم في المنهج كاملاً */
export function getOverallProgress(completed: string[]): number {
  const units = LEVELS.flatMap((level) => getUnitsByLevel(level.code));
  if (units.length === 0) return 0;
  const completedSet = new Set(completed);
  const completedKnownUnits = units.reduce((count, unit) => count + Number(completedSet.has(unit.id)), 0);
  return Math.round((completedKnownUnits / units.length) * 100);
}

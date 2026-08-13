import {LEVELS, getUnitsByLevel} from "@/lib/constants/curriculum";
import type { LevelCode, LevelCompletion, Unit } from "@/types/curriculum";

/**
 * دوال اختيار التقدم (Pure functions)
 * — حساب حالة المستويات والوحدات بناءً على الوحدات المكتملة والمستويات المختومة —
 * نظام الختم (Seal Exams): لا يُفتح مستوى جديد إلا بعد ختم المستوى السابق
 * بامتحان ختم (أو إكمال 100% من وحداته — توافق مع المستخدمين القدامى).
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

/** هل المستوى مختوم؟ (بامتحان الختم أو بإكمال كل وحداته) */
export function isLevelSealed(
  completed: string[],
  level: LevelCode,
  sealed: LevelCode[] = [],
): boolean {
  if (sealed.includes(level)) return true;
  return getLevelCompletion(completed, level).pct === 100;
}

/** المستوى النشط الحالي: أول مستوى غير مختوم */
export function getActiveLevel(completed: string[], sealed: LevelCode[] = []): LevelCode {
  for (const level of LEVELS) {
    if (!isLevelSealed(completed, level.code, sealed)) return level.code;
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
  const totalUnits = LEVELS.reduce((sum, l) => sum + l.units, 0);
  if (totalUnits === 0) return 0;
  return Math.round((completed.length / totalUnits) * 100);
}

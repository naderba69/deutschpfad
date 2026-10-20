import {getRecentEvents} from "@/lib/analytics/events";

/**
 * نظام النقاط (XP) والمستويات — من الأحداث المخزنة
 */

/** نقاط كل نشاط */
export const XP_RULES = {
  exerciseCorrect: 10,
  exerciseWrong: 2,
  pronunciationScore: (score: number) => Math.round(score / 10),
  review: 5,
  lessonCompleted: 50,
  testCompleted: 30,
  testPassed: 40,
  streakBonus: 15,
};

/** نقاط المستوى التالي (تصاعدي) */
export function xpForLevel(level: number): number {
  return level * 100 + (level - 1) * 50;
}

/**
 * ═══ P1-01: حساب المستوى والتقدم — دالة صافية ═══
 * earnedInLevel = ما تبقى بعد اقتطاع تكلفة المستويات السابقة
 * (كان يُحسب بطرح تكلفة مستوى واحد فقط فيكون خاطئاً من المستوى 3)
 */
export function computeLevelFromXp(xp: number): {
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  earnedInLevel: number;
  progressToNext: number;
} {
  let level = 1;
  let remaining = Math.max(0, xp);
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level++;
  }
  const currentLevelXp = xpForLevel(level);
  return {
    level,
    currentLevelXp,
    nextLevelXp: xpForLevel(level + 1),
    earnedInLevel: remaining,
    progressToNext: Math.min(100, Math.round((remaining / currentLevelXp) * 100)),
  };
}

export interface XpSummary {
  xp: number;
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  progressToNext: number;
  streak: number;
}

/** حساب ملخص XP من العدادات التراكمية (لا ينقص أبداً) */
export async function computeXpSummary(streak?: number): Promise<XpSummary> {
  const { getCounters } = await import("@/lib/gamification/counters");
  const counters = await getCounters();
  let xp = counters.xp;

  // مكافأة السلسلة
  const s = streak ?? 0;
  if (s >= 7) xp += XP_RULES.streakBonus;

  // ═══ P1-01: تحديد المستوى عبر الدالة الصافية (منطق واحد موحّد) ═══
  const { level, currentLevelXp, nextLevelXp, progressToNext } = computeLevelFromXp(xp);

  return { xp, level, currentLevelXp, nextLevelXp, progressToNext, streak: s };
}

/** ألقاب المستويات */
export function levelTitle(level: number): string {
  if (level >= 30) return "أسطورة الألمانية 👑";
  if (level >= 20) return "سفير اللغة 🎖️";
  if (level >= 15) return "خبير دويتش 🏆";
  if (level >= 10) return "متقدم واثق 🚀";
  if (level >= 7) return "محارب المفردات ⚔️";
  if (level >= 5) return "متعلم نشيط 💪";
  if (level >= 3) return "باحث عن المعرفة 🔍";
  return "مبتدئ شغوف 🌱";
}

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

export interface XpSummary {
  xp: number;
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  progressToNext: number;
  streak: number;
}

/** حساب ملخص XP من الأحداث */
export async function computeXpSummary(streak?: number): Promise<XpSummary> {
  const events = await getRecentEvents(1500);
  let xp = 0;

  for (const e of events) {
    if (e.type === "exercise-result") {
      xp += e.correct ? XP_RULES.exerciseCorrect : XP_RULES.exerciseWrong;
    } else if (e.type === "pronunciation-score") {
      xp += XP_RULES.pronunciationScore(e.score);
    } else if (e.type === "review") {
      xp += XP_RULES.review;
    } else if (e.type === "lesson-completed") {
      xp += XP_RULES.lessonCompleted;
    } else if (e.type === "test-result") {
      xp += e.result.passed ? XP_RULES.testPassed : XP_RULES.testCompleted;
    }
  }

  // مكافأة السلسلة
  const s = streak ?? 0;
  if (s >= 7) xp += XP_RULES.streakBonus;

  // تحديد المستوى
  let level = 1;
  let remaining = xp;
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level++;
  }
  const currentLevelXp = xpForLevel(level);
  const earnedInLevel = xp - (level > 1 ? xpForLevel(level - 1) : 0);
  const progressToNext = Math.min(100, Math.round((earnedInLevel / currentLevelXp) * 100));

  return { xp, level, currentLevelXp, nextLevelXp: xpForLevel(level + 1), progressToNext, streak: s };
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

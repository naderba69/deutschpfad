import {getEventStatsResult} from "@/lib/analytics/events";
import {getCardStats} from "@/lib/srs/flashcard-service";
import {getRecentTestResults} from "@/lib/storage/test-results-store";
import {getRecord, putRecord} from "@/lib/storage/db";
import type {EventStats} from "@/types/analytics";

/**
 * نظام الشارات — تعريف + فحص الإنجازات من البيانات
 */

export interface BadgeDef {
  id: string;
  name: string;
  description: string;
  emoji: string;
  /** فئة */
  category: "first" | "progress" | "consistency" | "skill" | "test" | "goal";
  /** دالة فحص: هل استوفى الشرط؟ */
  check: () => Promise<boolean>;
}

const UNLOCKED_KEY = "badges:unlocked:v1";

/** قراءة الشارات المفتوحة */
export async function getUnlockedBadges(): Promise<string[]> {
  try {
    const stored = await getRecord<string[]>("settings", UNLOCKED_KEY);
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

async function saveUnlocked(ids: string[]): Promise<void> {
  await putRecord("settings", UNLOCKED_KEY, ids);
}

async function eventStatCheck(select: (stats: EventStats) => boolean): Promise<boolean> {
  const result = await getEventStatsResult();
  return result.ok ? select(result.stats) : false;
}

/** تعريفات الشارات — الشروط من البيانات الحقيقية */
export const BADGES: BadgeDef[] = [
  {
    id: "first-lesson",
    name: "أول خطوة",
    description: "أكملت أول درس في رحلتك",
    emoji: "🚶",
    category: "first",
    check: async () => eventStatCheck((stats) => stats.lessonsCompleted >= 1),
  },
  {
    id: "first-test",
    name: "المختبَر الجديد",
    description: "أنجزت أول اختبار",
    emoji: "📝",
    category: "first",
    check: async () => (await getRecentTestResults()).length >= 1,
  },
  {
    id: "first-review",
    name: "حارس الذاكرة",
    description: "أول مراجعة بطاقات",
    emoji: "🔁",
    category: "first",
    check: async () => eventStatCheck((stats) => stats.reviewsCount >= 1),
  },
  {
    id: "xp-100",
    name: "جامع النقاط",
    description: "جمعت 100 نقطة خبرة",
    emoji: "⭐",
    category: "progress",
    check: async () => eventStatCheck((stats) => stats.xp >= 100),
  },
  {
    id: "xp-500",
    name: "صائد XP",
    description: "جمعت 500 نقطة خبرة",
    emoji: "🌟",
    category: "progress",
    check: async () => eventStatCheck((stats) => stats.xp >= 500),
  },
  {
    id: "exercises-50",
    name: "آلة التمارين",
    description: "حللت 50 تمريناً",
    emoji: "⚙️",
    category: "progress",
    check: async () => eventStatCheck((stats) => stats.exercisesAnswered >= 50),
  },
  {
    id: "cards-50",
    name: "أمين الكنز",
    description: "50 بطاقة مراجعة في حقيبتك",
    emoji: "🗃️",
    category: "progress",
    check: async () => (await getCardStats()).total >= 50,
  },
  {
    id: "streak-7",
    name: "أسبوع ذهبي",
    description: "سلسلة 7 أيام متتالية",
    emoji: "🔥",
    category: "consistency",
    check: async () => false, // يُفحص خارجياً بالسلسلة (streak7)
  },
  {
    id: "accuracy-80",
    name: "الدقة العالية",
    description: "دقة 80%+ في التمارين",
    emoji: "🎯",
    category: "skill",
    check: async () => eventStatCheck((stats) => stats.accuracyPct >= 80),
  },
  {
    id: "pronunciation-90",
    name: "صوت نقي",
    description: "تقييم نطق 90%+",
    emoji: "🎤",
    category: "skill",
    check: async () => eventStatCheck((stats) => stats.pronunciationAvg !== null && stats.pronunciationAvg >= 90),
  },
  {
    id: "test-pass",
    name: "ناجح في الاختبار",
    description: "اجتزت اختباراً بنسبة 60%+",
    emoji: "🏅",
    category: "test",
    check: async () => {
      const tests = await getRecentTestResults();
      return tests.some((t) => t.passed);
    },
  },
  {
    id: "goal-1",
    name: "صانع الأهداف",
    description: "أضفت أول هدف SMART",
    emoji: "🎯",
    category: "goal",
    check: async () => {
      const goals = await getRecord<unknown[]>("settings", "smart-goals:v1");
      return Array.isArray(goals) && goals.length >= 1;
    },
  },
];

/** شارة مستوى محقق (تُفحص خارجياً) */
const LEVEL_BADGES: { id: string; level: number; name: string; emoji: string }[] = [
  { id: "level-5", level: 5, name: "متوسط متعلم", emoji: "🥉" },
  { id: "level-10", level: 10, name: "متقدم", emoji: "🥈" },
  { id: "level-15", level: 15, name: "خبير", emoji: "🥇" },
];

/** فحص كل الشارات وتحديث المفتوحة — يعيد الجديدة */
export async function refreshBadges(extraChecks?: Record<string, boolean>): Promise<string[]> {
  const unlocked = new Set(await getUnlockedBadges());
  const newly: string[] = [];

  // شارات المستوى
  const xpStats = await getEventStatsResult();
  if (xpStats.ok) {
    for (const lb of LEVEL_BADGES) {
      if (unlocked.has(lb.id)) continue;
      const level = Math.max(1, Math.floor(xpStats.stats.xp / 100) + 1);
      if (level >= lb.level) {
        unlocked.add(lb.id);
        newly.push(lb.id);
      }
    }
  }

  for (const badge of BADGES) {
    if (unlocked.has(badge.id)) continue;
    let earned = false;
    if (badge.id === "streak-7" && extraChecks?.streak7) earned = true;
    else if (badge.id === "goal-1" && extraChecks?.goalEarned) earned = true;
    else earned = await badge.check();
    if (earned) {
      unlocked.add(badge.id);
      newly.push(badge.id);
    }
  }

  await saveUnlocked([...unlocked]);
  return newly;
}

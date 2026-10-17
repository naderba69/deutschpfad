import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  معلّمك الخاص — يخطّط لك جلسة يومية كاملة تلقائياً
 *  · اليوم تدرس + تراجع + تقرأ/تستمع (حسب مستواك)
 *  · غداً برنامج مختلف (4 أنماط تتناوب وفق يوم المسار)
 *  · كل نشاط له وقت تقديري ورابط مباشر — لا تفكير لك
 *  · يُحفظ إنجاز اليوم (dp:plan-done:{date}) ليطمئنك
 * ═══════════════════════════════════════════════════════════
 */

export interface PlanActivity {
  kind: "lesson" | "review" | "story" | "podcast" | "reading" | "practice" | "test" | "mistakes";
  title: string;
  sub: string;
  href: string;
  minutes: number;
  emoji: string;
}

export interface DailyPlan {
  dateKey: string;
  /** نمط اليوم (0-3) */
  pattern: number;
  patternName: string;
  /** رسالة المعلّم الافتتاحية */
  teacherIntro: string;
  activities: PlanActivity[];
  totalMinutes: number;
}

const LEVEL_ORDER: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/** أيام الأسبوع (لرسالة مخصصة) */
const WEEKDAYS_AR = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

/** حساب «يوم المسار»: عدد الدروس المكتملة (يحدد النمط المتناوب) */
export function getPathDay(completedLessons: number): number {
  return completedLessons;
}

/** مفتاح اليوم (لتخزين إنجاز الخطة) */
export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** رسالة افتتاحية من المعلّم حسب اليوم والنمط */
function teacherIntro(weekday: string, pattern: number): string {
  const intros = [
    `صباح الخير! ${weekday} — خطة اليوم: درس جديد + مراجعة + قصة. سأمشي معك خطوة بخطوة.`,
    `${weekday} اليوم: درس + بودكاست + تدريب نطق. اللغة تُبنى بالاستماع والتحدث!`,
    `${weekday} اليوم: درس + مراجعة + اختبار سريع. لنثبّت ما تعلمته.`,
    `${weekday} اليوم: مراجعة شاملة + قراءة + أخطاؤك. يوم تثبيت وترسيخ.`,
  ];
  return intros[pattern % 4];
}

/** بناء خطة اليوم من الحالة */
export async function buildDailyPlan(input: {
  level: LevelCode;
  completedLessons: number;
  nextLesson?: { id: string; titleDe: string; titleAr: string };
  dueCards: number;
}): Promise<DailyPlan> {
  const pattern = input.completedLessons % 4;
  const weekday = WEEKDAYS_AR[new Date().getDay()];
  const levelIdx = LEVEL_ORDER[input.level] ?? 0;
  const levelForContent = ["A1", "A2", "B1", "B2"][Math.min(3, Math.max(0, levelIdx))] as LevelCode;

  const activities: PlanActivity[] = [];

  // النشاط 1: الدرس الجديد (كل الأنماط)
  if (input.nextLesson) {
    activities.push({
      kind: "lesson",
      title: `الدرس: ${input.nextLesson.titleDe}`,
      sub: input.nextLesson.titleAr,
      href: `/lesson/${input.nextLesson.id}`,
      minutes: 30,
      emoji: "📘",
    });
  }

  // النشاط 2: حسب النمط
  if (pattern === 0 || pattern === 2) {
    // مراجعة SRS
    activities.push({
      kind: "review",
      title: "مراجعة ذكية (SM-2)",
      sub: input.dueCards > 0 ? `${input.dueCards} بطاقة مستحقة — قبل أن تنساها` : "لا بطاقات مستحقة — راجع جمل SRS",
      href: "/sentence-review",
      minutes: 10,
      emoji: "🧠",
    });
  } else if (pattern === 1) {
    // بودكاست
    activities.push({
      kind: "podcast",
      title: "استمع: بودكاست اليوم",
      sub: `حلقة بمستوى ${input.level} — استمع ثم أجب`,
      href: "/podcasts",
      minutes: 12,
      emoji: "🎧",
    });
  } else {
    // قراءة
    activities.push({
      kind: "reading",
      title: "اقرأ: قصة أو نص متدرج",
      sub: `قراءة بمستوى ${input.level} — فهم ثم أسئلة`,
      href: "/stories",
      minutes: 12,
      emoji: "📖",
    });
  }

  // النشاط 3: حسب النمط أيضاً (تنويع)
  if (pattern === 0) {
    activities.push({
      kind: "story",
      title: "قصة تفاعلية",
      sub: `اقرأ قصة ${input.level} وأجب عن الفهم`,
      href: "/stories",
      minutes: 10,
      emoji: "🌟",
    });
  } else if (pattern === 1) {
    activities.push({
      kind: "practice",
      title: "تدريب النطق",
      sub: "سجّل نطقك واحصل على تقييم فوري",
      href: "/sound-check",
      minutes: 8,
      emoji: "🎤",
    });
  } else if (pattern === 2) {
    activities.push({
      kind: "test",
      title: "اختبار سريع",
      sub: "قس فهمك باختبار قصير",
      href: "/tests/weekly",
      minutes: 10,
      emoji: "✅",
    });
  } else {
    activities.push({
      kind: "mistakes",
      title: "راجع أخطاءك",
      sub: "أخطاؤك المتراكمة — أتقنها حتى تختفي",
      href: "/error-notebook",
      minutes: 8,
      emoji: "📕",
    });
  }

  const totalMinutes = activities.reduce((s, a) => s + a.minutes, 0);

  return {
    dateKey: todayKey(),
    pattern,
    patternName: ["أساسية: درس + مراجعة + قصة", "سمعية: درس + بودكاست + نطق", "تثبيت: درس + مراجعة + اختبار", "ترسيخ: مراجعة + قراءة + أخطاء"][pattern],
    teacherIntro: teacherIntro(weekday, pattern),
    activities,
    totalMinutes,
  };
}

/** هل أنجز المستخدم خطة اليوم؟ */
export function isPlanDone(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(`dp:plan-done:${todayKey()}`) === "1";
  } catch {
    return false;
  }
}

export function markPlanDone(): void {
  try {
    localStorage.setItem(`dp:plan-done:${todayKey()}`, "1");
  } catch {
    /* تجاهل */
  }
}

/** نشاطات المستوى — روابط جاهزة حسب المستوى */
export function levelContentHref(level: LevelCode): string {
  return `/level/${level.toLowerCase()}`;
}

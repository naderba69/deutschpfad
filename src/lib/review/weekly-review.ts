/**
 * المراجعة الأسبوعية التراكمية 📅
 * — تجمع نشاط آخر 7 أيام: الدروس المكتملة، التمارين، الأخطاء، الدقائق —
 * وتقترح جلسة مراجعة: أخطاؤك النشطة + البطاقات المستحقة + اختبار سريع من دروس الأسبوع.
 */

import type { AnalyticsEvent } from "@/types/analytics";

export interface WeekSummary {
  lessonsCompleted: string[];
  exercisesAnswered: number;
  exercisesCorrect: number;
  mistakesLogged: number;
  minutesStudied: number;
  daysActive: string[];
  pronunciationAvg: number | null;
  weekXp: number;
}

/** بداية الأسبوع الجاري (الإثنين) */
export function weekStartTs(): number {
  const now = new Date();
  const day = (now.getDay() + 6) % 7;
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  start.setHours(0, 0, 0, 0);
  return start.getTime();
}

/** تجميع ملخص الأسبوع من الأحداث */
export async function computeWeekSummary(): Promise<WeekSummary> {
  const { getRecentEvents } = await import("@/lib/analytics/events");
  const { XP_RULES } = await import("@/lib/gamification/xp");
  const events = await getRecentEvents(3000);
  const start = weekStartTs();

  const weekEvents = events.filter((e) => e.ts >= start);
  const lessons = new Set<string>();
  let exercisesAnswered = 0;
  let exercisesCorrect = 0;
  let minutes = 0;
  const days = new Set<string>();
  let pronSum = 0;
  let pronCount = 0;
  let weekXp = 0;

  for (const e of weekEvents) {
    const dayKey = new Date(e.ts).toISOString().slice(0, 10);
    days.add(dayKey);
    switch (e.type) {
      case "lesson-completed":
        lessons.add(e.lessonId);
        weekXp += XP_RULES.lessonCompleted;
        break;
      case "exercise-result":
        exercisesAnswered += 1;
        if (e.correct) exercisesCorrect += 1;
        weekXp += e.correct ? XP_RULES.exerciseCorrect : XP_RULES.exerciseWrong;
        break;
      case "pronunciation-score":
        pronSum += e.score;
        pronCount += 1;
        weekXp += XP_RULES.pronunciationScore(e.score);
        break;
      case "review":
        weekXp += XP_RULES.review;
        break;
      case "test-result":
        weekXp += e.result.passed ? XP_RULES.testPassed : XP_RULES.testCompleted;
        break;
      case "session-minute":
        minutes += e.minutes;
        break;
      default:
        break;
    }
  }

  return {
    lessonsCompleted: [...lessons],
    exercisesAnswered,
    exercisesCorrect,
    mistakesLogged: 0,
    minutesStudied: minutes,
    daysActive: [...days],
    pronunciationAvg: pronCount > 0 ? Math.round(pronSum / pronCount) : null,
    weekXp,
  };
}

/** أخطاء الأسبوع من دفتر الأخطاء (النشطة — لم تُتقن) */
export async function getActiveMistakes() {
  const { getNotebook } = await import("@/lib/storage/error-notebook");
  const rows = await getNotebook();
  return rows.filter((r) => !r.mastered).slice(0, 10);
}

/** بطاقات مستحقة للمراجعة */
export async function getDueCardsForReview() {
  const { getDueCards } = await import("@/lib/srs/flashcard-service");
  const cards = await getDueCards();
  return cards.slice(0, 10);
}

/** اختبار سريع: أسئلة من دروس الأسبوع المكتملة */
export async function getWeeklyQuizQuestions(lessonIds: string[], count = 5) {
  const { getLesson } = await import("@/data/lessons/index");
  const questions: { de: string; ar: string; options: { text: string; ar: string; correct: boolean }[] }[] = [];
  for (const id of lessonIds.slice(0, 4)) {
    try {
      const lesson = getLesson(id);
      if (!lesson) continue;
      const mcqs = lesson.miniTest.filter((q) => q.type === "multiple-choice");
      for (const q of mcqs.slice(0, 2)) {
        if (q.type !== "multiple-choice") continue;
        const opts = q.options.map((text, i) => ({
          text,
          ar: text,
          correct: i === q.correctIndex,
        }));
        if (opts.length < 2) continue;
        questions.push({ de: q.questionDe, ar: q.questionAr ?? q.questionDe, options: opts });
      }
    } catch {
      /* تجاهل */
    }
  }
  return questions.slice(0, count);
}

/** نص تشجيعي حسب نشاط الأسبوع */
export function weekEncouragement(s: WeekSummary): string {
  const days = s.daysActive.length;
  if (days === 0) return "لم تدرس هذا الأسبوع بعد — ابدأ بدرس واحد، الخطوة الأولى أهم خطوة. 🌱";
  if (s.lessonsCompleted.length === 0) return `درست ${days} ${days === 1 ? "يوماً" : "أيام"} هذا الأسبوع — أضف درساً واحداً لتختم أسبوعك بإنجاز. 💪`;
  return `أتممت ${s.lessonsCompleted.length} ${s.lessonsCompleted.length === 1 ? "درساً" : "دروس"} هذا الأسبوع في ${days} ${days === 1 ? "يوم" : "أيام"} — هذا تقدم حقيقي! 🎉`;
}

export type { AnalyticsEvent };

/** ─── ملخص شهري ─── */

/** بداية الشهر الجاري */
export function monthStartTs(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  return start.getTime();
}

/**
 * تجميع ملخص الشهر — بنية مطابقة تماماً لـ WeekSummary
 * (كانت سابقاً بمفاتيح مختلفة exercises/minutes/monthXp فينهار
 *  /review/monthly بخطأ undefined.length — أُصلح بالتوحيد)
 */
export async function computeMonthSummary(): Promise<WeekSummary> {
  const { getRecentEvents } = await import("@/lib/analytics/events");
  const { XP_RULES } = await import("@/lib/gamification/xp");
  const events = await getRecentEvents(5000);
  const start = monthStartTs();
  const monthEvents = events.filter((e) => e.ts >= start);
  const lessons = new Set<string>();
  let exercisesAnswered = 0;
  let exercisesCorrect = 0;
  let minutes = 0;
  const days = new Set<string>();
  let pronSum = 0;
  let pronCount = 0;
  let weekXp = 0;
  for (const e of monthEvents) {
    const dayKey = new Date(e.ts).toISOString().slice(0, 10);
    days.add(dayKey);
    switch (e.type) {
      case "lesson-completed":
        lessons.add(e.lessonId);
        weekXp += XP_RULES.lessonCompleted;
        break;
      case "exercise-result":
        exercisesAnswered += 1;
        if (e.correct) exercisesCorrect += 1;
        weekXp += e.correct ? XP_RULES.exerciseCorrect : XP_RULES.exerciseWrong;
        break;
      case "pronunciation-score":
        pronSum += e.score;
        pronCount += 1;
        weekXp += XP_RULES.pronunciationScore(e.score);
        break;
      case "review":
        weekXp += XP_RULES.review;
        break;
      case "test-result":
        weekXp += e.result.passed ? XP_RULES.testPassed : XP_RULES.testCompleted;
        break;
      case "session-minute":
        minutes += e.minutes;
        break;
      default:
        break;
    }
  }
  return {
    lessonsCompleted: [...lessons],
    exercisesAnswered,
    exercisesCorrect,
    mistakesLogged: 0,
    minutesStudied: minutes,
    daysActive: [...days],
    pronunciationAvg: pronCount > 0 ? Math.round(pronSum / pronCount) : null,
    weekXp,
  };
}

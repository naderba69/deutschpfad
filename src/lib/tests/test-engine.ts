import { evaluateWriting } from "@/lib/writing/goethe-local";
import type { LevelTestConfig, SkillResult, TestLevel, TestQuestion, TestResult, TestSkill } from "@/types/test";

/**
 * محرك الاختبارات — التصحيح والتقييم والمستوى المقدر والاقتراحات التكيفية
 */

/** تصحيح إجابة MCQ */
export function isMcqCorrect(q: TestQuestion, answer: number | null): boolean {
  return answer !== null && q.correctIndex !== undefined && answer === q.correctIndex;
}

/** تقييم إجابة كتابة (أفضل جهد: تطابق مع العينة أو كلمات مفتاحية) */
export async function scoreWriting(q: TestQuestion, answer: string): Promise<{ correct: boolean; pct: number }> {
  const norm = (s: string) => s.toLowerCase().trim().replace(/[.,!?;:]/g, "");
  const clean = norm(answer);
  if (!clean) return { correct: false, pct: 0 };
  if (!q.sampleAnswer) return { correct: clean.length > 3, pct: clean.length > 3 ? 100 : 0 };
  const sample = norm(q.sampleAnswer);
  if (clean === sample) return { correct: true, pct: 100 };

  // 1) تشابه الكلمات مع النموذج (هل غطيت الأفكار؟)
  const sWords = sample.split(" ").filter(Boolean);
  const aWords = clean.split(" ").filter(Boolean);
  const matched = sWords.filter((w) => aWords.includes(w)).length;
  const similarity = sWords.length === 0 ? 0 : Math.round((matched / sWords.length) * 100);

  // 2) مقيّم Goethe المحلي: طول + روابط + أخطاء آلية (قواعد/أدوات/ترتيب)
  const goethePct = (await evaluateWriting(answer, "Forumsbeitrag")).pct;

  // الوزن النهائي: تشابه الأفكار 40% + تقييم غوته 60%
  const pct = Math.round(similarity * 0.4 + goethePct * 0.6);
  return { correct: pct >= 60, pct };
}

/** حساب نتيجة مهارة من الأسئلة والإجابات */
export async function scoreSkill(
  skill: TestSkill,
  questions: TestQuestion[],
  answers: Map<string, TestQuestion["kind"] extends never ? never : string | number | null>,
): Promise<SkillResult> {
  let total = 0;
  let correct = 0;
  for (const q of questions) {
    if (q.skill !== skill) continue;

    // ═══ C-02 (تدقيق 2026-08-15): تفكيك الأسئلة المتداخلة في القراءة/الاستماع ═══
    // كانت الحاويات تُحتسب في المقام (total++) دون أن تكون قابلة للإجابة
    // → سقف النتيجة ~40%. الآن كل سؤال فرعي عنصر مستقل يُصحَّح بمفتاحه.
    if (q.kind === "reading" || q.kind === "listening") {
      const subs = q.questions ?? [];
      if (subs.length === 0) continue; // حاوية بلا أسئلة فرعية — لا تُحتسب أصلاً
      for (let i = 0; i < subs.length; i++) {
        total++;
        const ans = answers.get(`${q.id}:${i}`);
        if (typeof ans === "number" && ans === subs[i].correct) correct++;
      }
      continue;
    }

    total++;
    const ans = answers.get(q.id);
    if (q.kind === "mcq") {
      if (isMcqCorrect(q, typeof ans === "number" ? ans : null)) correct++;
    } else if (q.kind === "writing") {
      const s = await scoreWriting(q, typeof ans === "string" ? ans : "");
      if (s.correct) correct += s.pct >= 60 ? 1 : 0;
      else if (s.pct >= 40) correct += 0.5; // جزئي
    }
  }
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  return { skill, total, correct: Math.round(correct), pct, level: levelFromPct(pct) };
}

/** مستوى CEFR من نسبة مئوية (تدرج تكيفي) */
export function levelFromPct(pct: number): TestLevel {
  if (pct >= 85) return "B2";
  if (pct >= 70) return "B1";
  if (pct >= 50) return "A2";
  return "A1";
}

/** تجميع نتائج اختبار كامل */
export async function buildTestResult(input: {
  kind: TestResult["kind"];
  level: TestLevel;
  startedAt: number;
  finishedAt: number;
  questions: TestQuestion[];
  answers: Map<string, string | number | null>;
}): Promise<TestResult> {
  const skills: TestSkill[] = ["grammatik", "wortschatz", "lesen", "hören", "schreiben"];
  const skillResults = (await Promise.all(
    skills.map(async (s) => scoreSkill(s, input.questions, input.answers)),
  )).filter((r) => r.total > 0);

  const overallPct =
    skillResults.length === 0
      ? 0
      : Math.round(skillResults.reduce((sum, r) => sum + r.pct, 0) / skillResults.length);

  // المستوى المقدر: متوسط مستويات المهارات (بالنقاط)
  const lvPoints: Record<TestLevel, number> = { A1: 1, A2: 2, B1: 3, B2: 4 };
  const avg =
    skillResults.length === 0
      ? 1
      : skillResults.reduce((s, r) => s + lvPoints[r.level], 0) / skillResults.length;
  const estimatedLevel: TestLevel =
    avg >= 3.5 ? "B2" : avg >= 2.5 ? "B1" : avg >= 1.5 ? "A2" : "A1";

  const reinforcement = recommendReinforcement(skillResults, input.level);

  return {
    kind: input.kind,
    level: input.level,
    startedAt: input.startedAt,
    finishedAt: input.finishedAt,
    secondsUsed: Math.round((input.finishedAt - input.startedAt) / 1000),
    skillResults,
    overallPct,
    estimatedLevel,
    reinforcement,
    passed: overallPct >= 60,
  };
}

/** خريطة: مهارة ضعيفة ← درس تقوية */
const REINFORCEMENT_MAP: Record<TestSkill, { lessonId: string; reason: string }[]> = {
  grammatik: [{ lessonId: "a1-01", reason: "راجع قواعد الأساسيات: sein/heißen وترتيب الجملة" }],
  wortschatz: [{ lessonId: "a1-03", reason: "وسّع مفرداتك اليومية (طعام، بيت، مدينة)" }],
  lesen: [{ lessonId: "a1-00", reason: "قوِّ قراءتك: راجع الأبجدية والأصوات أولاً" }],
  hören: [{ lessonId: "a1-01", reason: "درّب أذنك: استمع لحوارات التعارف وأجب عن أسئلة" }],
  schreiben: [{ lessonId: "a1-01", reason: "تدرب على الكتابة: راجع تكوين الجمل الأساسية" }],
  sprechen: [{ lessonId: "a1-01", reason: "درّب نطقك: استخدم محاكاة الامتحان الشفهي" }],
};

/** اقتراحات تقوية تكيفية حسب المهارات الضعيفة */
export function recommendReinforcement(results: SkillResult[], testedLevel: TestLevel) {
  const suggestions: { lessonId: string; reason: string }[] = [];
  for (const r of results) {
    if (r.pct < 60) {
      const list = REINFORCEMENT_MAP[r.skill] ?? [];
      const pick = list[Math.min(testedLevel === "A1" ? 0 : testedLevel === "A2" ? 0 : 0, list.length - 1)];
      if (pick) suggestions.push({ ...pick, reason: `${r.skill} (${r.pct}%): ${pick.reason}` });
    }
  }
  return suggestions.slice(0, 3);
}

/** إعدادات اختبارات المستويات (توقيت حقيقي بصيغة Goethe) */
export const LEVEL_TEST_CONFIGS: Record<TestLevel, LevelTestConfig> = {
  A1: {
    level: "A1",
    sections: [
      { skill: "lesen", title: "القراءة", titleDe: "Lesen", minutes: 20, passPct: 60 },
      { skill: "hören", title: "الاستماع", titleDe: "Hören", minutes: 15, passPct: 60 },
      { skill: "grammatik", title: "القواعد والمفردات", titleDe: "Grammatik & Wortschatz", minutes: 15, passPct: 60 },
      { skill: "schreiben", title: "الكتابة", titleDe: "Schreiben", minutes: 15, passPct: 60 },
    ],
  },
  A2: {
    level: "A2",
    sections: [
      { skill: "lesen", title: "القراءة", titleDe: "Lesen", minutes: 25, passPct: 60 },
      { skill: "hören", title: "الاستماع", titleDe: "Hören", minutes: 20, passPct: 60 },
      { skill: "grammatik", title: "القواعد والمفردات", titleDe: "Grammatik & Wortschatz", minutes: 20, passPct: 60 },
      { skill: "schreiben", title: "الكتابة", titleDe: "Schreiben", minutes: 20, passPct: 60 },
    ],
  },
  B1: {
    level: "B1",
    sections: [
      { skill: "lesen", title: "القراءة", titleDe: "Lesen", minutes: 30, passPct: 60 },
      { skill: "hören", title: "الاستماع", titleDe: "Hören", minutes: 20, passPct: 60 },
      { skill: "grammatik", title: "القواعد والمفردات", titleDe: "Grammatik & Wortschatz", minutes: 25, passPct: 60 },
      { skill: "schreiben", title: "الكتابة", titleDe: "Schreiben", minutes: 25, passPct: 60 },
    ],
  },
  B2: {
    level: "B2",
    sections: [
      { skill: "lesen", title: "القراءة", titleDe: "Lesen", minutes: 35, passPct: 60 },
      { skill: "hören", title: "الاستماع", titleDe: "Hören", minutes: 25, passPct: 60 },
      { skill: "grammatik", title: "القواعد والمفردات", titleDe: "Grammatik & Wortschatz", minutes: 30, passPct: 60 },
      { skill: "schreiben", title: "الكتابة", titleDe: "Schreiben", minutes: 30, passPct: 60 },
    ],
  },
};

/** صيغة الوقت المتبقي mm:ss */
export function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

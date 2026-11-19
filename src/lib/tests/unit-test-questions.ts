/**
 * بناء أسئلة «اختبار الوحدة» — نسخة قابلة للتنفيذ على الخادم.
 *
 * لماذا انتقل البناء إلى الخادم؟
 * كان `UnitTest` يحمّل دروس الوحدة عبر `import()` داخل `useEffect` ثم يعرض
 * مربّع تحميل حتى يجهز. النتيجة: HTML الصفحة يصل بمربّع 170px، ثم يظهر
 * اختبار كامل بعده فيقفز ما تحته (تذييل الصفحة) — CLS مقيس 0.106–0.162 في
 * كل مسارات `/tests/unit/*`.
 *
 * الحل: الصفحة (Server Component) تحمّل دروس الوحدة وتبني الأسئلة هنا، ثم
 * تمرّر **الأسئلة العشرة فقط** إلى المكوّن التفاعلي. فيبقى HTML الخادم كاملاً
 * (لا انزياح)، وتبقى حزمة العميل صغيرة (لا تُرسل دروس المستوى كلها).
 *
 * الخلط حتمي ببذرة ثابتة (معرّف الوحدة + اليوم): الخادم والعميل يعرضان نفس
 * الترتيب، والتنويع يتجدّد يومياً.
 */
import { getUnitVocab } from "@/data/vocabulary/a1";
import { dailySeed, seededShuffle } from "@/lib/lesson/shuffle";
import type { Lesson, McqExercise } from "@/types/lesson";
import type { TestQuestion } from "@/types/test";

/** تحويل تمارين الدرس إلى أسئلة اختبار */
function exerciseToTestQuestion(
  ex: McqExercise,
  level: "A1" | "A2" | "B1" | "B2",
  prefix: string,
): TestQuestion {
  return {
    id: `${prefix}-${ex.id}`,
    skill: "grammatik",
    level,
    kind: "mcq",
    questionDe: ex.questionDe,
    questionAr: ex.questionAr,
    options: ex.options,
    correctIndex: ex.correctIndex,
    explanation:
      ex.explanation ?? ex.optionExplanations?.filter((x): x is string => Boolean(x)).join(" · "),
  };
}

export interface UnitTestSet {
  level: "A1" | "A2" | "B1" | "B2";
  questions: TestQuestion[];
}

/**
 * أسئلة اختبار الوحدة: 6 قواعد من دروس الوحدة + 4 مفردات من بنك الوحدة.
 * `lessons` تُحمَّل على الخادم عبر `loadLessonsByUnit` (تحميل مستوى واحد فقط).
 */
export function buildUnitTestQuestions(unitId: string, lessons: Lesson[]): UnitTestSet {
  const level = (lessons[0]?.level ?? "A1") as "A1" | "A2" | "B1" | "B2";
  const seed = dailySeed(`unit-test:${unitId}`);
  const vocab = getUnitVocab(unitId);

  const mcqFromLessons: McqExercise[] = lessons.flatMap((l) =>
    [...l.practiceBank, ...l.miniTest].filter(
      (e): e is McqExercise => e.type === "multiple-choice",
    ),
  );

  const questions: TestQuestion[] = [
    ...seededShuffle(mcqFromLessons, `${seed}:grammatik`)
      .slice(0, 6)
      .map((e, i) => exerciseToTestQuestion(e, level, `unit-g${i}`)),
    // مفردات الوحدة: كلمة ألمانية + معناها الصحيح + 3 مشتتات حقيقية من نفس الوحدة
    ...seededShuffle(vocab, `${seed}:vocab`)
      .slice(0, 4)
      .map((v, i) => {
        const distractors = seededShuffle(
          vocab.filter((x) => x.ar !== v.ar).map((x) => x.ar),
          `${seed}:distractors-${i}`,
        ).slice(0, 3);
        const options = seededShuffle([v.ar, ...distractors], `${seed}:options-${i}`);
        return {
          id: `unit-v${i}`,
          skill: "wortschatz" as const,
          level,
          kind: "mcq" as const,
          questionDe: v.de,
          options,
          correctIndex: options.indexOf(v.ar),
          explanation: `${v.de} = ${v.ar}`,
        };
      }),
  ].filter((q) => q.options && q.options.length >= 2);

  return { level, questions };
}

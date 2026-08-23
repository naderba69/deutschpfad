/**
 * حرّاس سلامة المحتوى — يمنعون عودة أعطال اكتُشفت في تدقيق 2026-08.
 *
 * كل اختبار هنا يقابل عطلاً حقيقياً وصل إلى المتعلّم:
 *  - W: عدد فراغات القالب (___) لا يساوي عدد الإجابات ⇒ قوائم منسدلة
 *       تُعرض أمام الجملة الخطأ، وجُمل بلا حقل إدخال إطلاقاً.
 *  - علامة الفراغ الناقصة (__ بدل ___) ⇒ لا يُقسَّم القالب أصلاً.
 *  - B: خيارات مكرّرة داخل السؤال الواحد.
 *  - ترتيب الفهرس: التنقّل «السابق/التالي» يتبع ترتيب المصفوفة.
 */

import { describe, expect, it } from "vitest";

import { LESSONS } from "@/data/lessons";
import { LESSON_META } from "@/data/lessons/meta";
import type { Exercise } from "@/types/lesson";

/** كل التمارين في كل الدروس، مع معرّف يسهل تتبّعه */
function allExercises(): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = [];
  for (const lesson of LESSONS) {
    // ملاحظة: lesson.writing و lesson.listening لهما أنواع خاصة بهما
    // (WritingExercise / ListeningQuestion) ولا تدخل في فحوص Exercise هنا.
    const buckets: (Exercise[] | undefined)[] = [
      lesson.practiceBank,
      lesson.miniTest,
      lesson.review,
    ];
    for (const bucket of buckets) {
      for (const ex of bucket ?? []) out.push({ key: `${lesson.id}:${ex.id}`, ex });
    }
  }
  return out;
}

describe("سلامة تمارين الفراغات", () => {
  const fillBlanks = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "fill-blank" }> } =>
      e.ex.type === "fill-blank",
  );

  it("يجد تمارين fill-blank فعلاً (حماية من فحص فارغ)", () => {
    expect(fillBlanks.length).toBeGreaterThan(50);
  });

  it("عدد فراغات القالب يساوي عدد الإجابات (العطل W)", () => {
    const bad = fillBlanks
      .filter(({ ex }) => ex.template.split("___").length - 1 !== ex.blanks.length)
      .map(({ key, ex }) => `${key}: ${ex.template.split("___").length - 1} فراغ / ${ex.blanks.length} إجابة`);
    expect(bad).toEqual([]);
  });

  it("علامة الفراغ ثلاث شرطات دائماً — لا __ ولا ____", () => {
    const bad = fillBlanks
      .filter(({ ex }) => /(?<!_)__(?!_)|____/.test(ex.template))
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("الإجابة الصحيحة موجودة ضمن الخيارات", () => {
    const bad = fillBlanks
      .flatMap(({ key, ex }) =>
        ex.blanks
          .map((b, i) => (b.options && !b.options.includes(b.correct) ? `${key}#${i}` : null))
          .filter(Boolean),
      );
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل الفراغ الواحد (العطل B)", () => {
    const bad = fillBlanks.flatMap(({ key, ex }) =>
      ex.blanks
        .map((b, i) => (b.options && new Set(b.options).size !== b.options.length ? `${key}#${i}` : null))
        .filter(Boolean),
    );
    expect(bad).toEqual([]);
  });
});

describe("سلامة تمارين الاختيار من متعدد", () => {
  const mcqs = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "multiple-choice" }> } => e.ex.type === "multiple-choice",
  );

  it("يجد تمارين mcq فعلاً (حماية من فحص فارغ)", () => {
    expect(mcqs.length).toBeGreaterThan(100);
  });

  it("correctIndex ضمن نطاق الخيارات", () => {
    const bad = mcqs
      .filter(({ ex }) => ex.correctIndex < 0 || ex.correctIndex >= ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل السؤال الواحد (العطل B)", () => {
    const bad = mcqs
      .filter(({ ex }) => new Set(ex.options).size !== ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });
});

describe("ترتيب فهرس الدروس", () => {
  it("مرتّب حسب المستوى ثم الوحدة ثم ترتيب الدرس (التنقّل يعتمد موضع المصفوفة)", () => {
    const rank = { A1: 0, A2: 1, B1: 2, B2: 3 } as const;
    const keys = LESSON_META.map((l) => [rank[l.level], l.unitId, l.order] as const);
    const sorted = [...keys].sort(
      (a, b) => a[0] - b[0] || a[1].localeCompare(b[1]) || a[2] - b[2],
    );
    expect(keys).toEqual(sorted);
  });

  it("كل درس في الفهرس له ملف محتوى فعلي", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const missing = LESSON_META.filter((m) => !ids.has(m.id)).map((m) => m.id);
    expect(missing).toEqual([]);
  });
});

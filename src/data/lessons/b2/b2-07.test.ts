import { describe, expect, it } from "vitest";

import { lessonB207 } from "@/data/lessons/b2/b2-07";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["werde", "wirst", "wird", "werden"], key: "werde" },
  r2: { options: ["gelesen", "lesen", "gelest", "liest"], key: "gelesen" },
  e1: { options: ["werde ... haben", "werde ... sein", "wird ... haben", "habe ... worden"], key: "werde ... haben" },
  e2: { options: ["... sein", "... haben", "... gehabt", "... worden"], key: "... sein" },
  e8: { options: ["خلاصةً/ختاماً", "أولاً", "علاوة على ذلك", "مع ذلك"], key: "خلاصةً/ختاماً" },
  e14: {
    options: ["لا بدّ أنه فاته القطار", "سيفوته القطار حتماً", "فوّت القطار أمامنا", "كان سيفوته القطار"],
    key: "لا بدّ أنه فاته القطار",
  },
  m1: { options: ["werde ... haben", "werde ... sein", "wird ... haben", "habe ... worden"], key: "werde ... haben" },
  m2: { options: ["... sein", "... haben", "... gehabt", "... worden"], key: "... sein" },
  q1: { options: ["Freiheit und Freundschaft", "nur Geld und ein großes Haus", "nur Arbeit und viel Pflicht", "nichts, das wirklich zählt"], key: "Freiheit und Freundschaft" },
  q2: { options: ["Sie schadet der Umwelt", "Sie ist schnell und bequem", "Sie ist billig im Unterhalt", "Sie hilft vielen Menschen"], key: "Sie schadet der Umwelt" },
  q3: {
    options: ["Wir brauchen nachhaltige Technik", "Wir brauchen keine Technik", "Technik ist nutzlos", "Wir brauchen mehr Geld"],
    key: "Wir brauchen nachhaltige Technik",
  },
  q4: { options: ["die Formen des Zusammenlebens", "die Grundfragen des Lebens", "die Bedeutung von Freundschaft", "die menschlichen Bedürfnisse"], key: "die Formen des Zusammenlebens" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["habe"], options: [["habe", "hat", "hätte"]] },
  e6: {
    correct: ["Meiner", "Einerseits"],
    options: [
      ["Meiner", "Meine", "Mein"],
      ["Einerseits", "Andererseits", "Außerdem"],
    ],
  },
  e12: {
    correct: ["werden", "haben"],
    options: [
      ["werden", "werdet", "wird"],
      ["haben", "haben werden", "hat"],
    ],
  },
  m5: {
    correct: ["Meiner", "Einerseits"],
    options: [
      ["Meiner", "Meine", "Mein"],
      ["Einerseits", "Andererseits", "Außerdem"],
    ],
  },
  w2: {
    correct: ["gelernt haben", "sein"],
    options: [
      ["gelernt haben", "gelernt sein", "gelernt"],
      ["sein", "haben", "gehabt"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "haben", correctWord: "sein", options: ["sein", "haben", "gehabt", "worden"] },
  e9: { wrongWord: "sein", correctWord: "haben", options: ["haben", "sein", "werden", "gehabt"] },
  e11: { wrongWord: "hat", correctWord: "haben", options: ["haben", "hat", "habe", "haben hat"] },
  m4: { wrongWord: "sein", correctWord: "haben", options: ["haben", "sein", "gehabt", "worden"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die These", right: "الأطروحة" },
    { left: "das Argument", right: "الحجة" },
    { left: "die Erörterung", right: "المقال الجدلي" },
    { left: "die Philosophie", right: "الفلسفة" },
  ],
};

const expectedTransformations: string[] = ["e7", "e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Meiner Meinung nach ist ein Gleichgewicht wichtig", "Meiner Meinung nach ist Balance wichtig"],
  e13: [
    "Bis 2050 wird sich die Zahl der Rentner verdoppelt haben.",
    "Bis 2050 wird sich die Zahl der Rentner verdoppelt haben",
  ],
  w1: ["Bis morgen werde ich das Buch beendet haben", "Bis morgen werde ich das Buch gelesen haben"],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Bis", "werde", "ich", "gelernt", "2030", "Deutsch", "haben", "."],
    correctSentence: "Bis 2030 werde ich Deutsch gelernt haben.",
  },
  m3: {
    tokens: ["Meiner", "nach", "ist", "Meinung", "das", "wichtig", "."],
    correctSentence: "Meiner Meinung nach ist das wichtig.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB207.review ?? []),
    ...lessonB207.practiceBank,
    ...lessonB207.miniTest,
    ...lessonB207.writing,
    ...(lessonB207.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-07 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB207.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-07 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-07 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB207.id,
    taskId,
  };
}

describe("B2-07 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB207).toMatchObject({
      id: "b2-07",
      unitId: "b2-07",
      level: "B2",
      order: 1,
      titleDe: "Philosophie und Gesellschaft",
      titleAr: "الفلسفة والمجتمع",
    });
    expect("duration" in lessonB207).toBe(false);
    expect(lessonB207.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-07");
    expect(meta).toMatchObject({ id: "b2-07", unitId: "b2-07", level: "B2", order: 1, estimatedMinutes: 55 });
    expect(meta?.summary).toBe(lessonB207.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB207.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e4", "e5", "m1", "m2", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e6", "e7", "m5"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q2", "q3"]);
    for (const item of lessonB207.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB207.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB207.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} taskIds`).toBe(evidence.exerciseIds?.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b2-07", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-07", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-07", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b2-07", "l2", "q3", true)).toBe("listening-transcript:b2-07:l2:q3");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l3:q4"]);
    expect(goal("z4").evidence?.taskIds).toEqual(["listening:l2:q2", "listening:l2:q3"]);
    const transcriptIds = lessonB207.lernziele.flatMap(
      (item) => item.evidence?.taskIds?.filter((taskId) => taskId.startsWith("listening-transcript:")) ?? [],
    );
    expect(transcriptIds, "كشف النصّ لا يُحتسب أداءً").toEqual([]);
  });

  it("enumerates every auditable task type so no new task escapes the guard", () => {
    const byType = (type: Exercise["type"]) =>
      allTasks()
        .filter((item) => item.type === type)
        .map(({ id }) => id)
        .sort();
    expect(byType("multiple-choice").filter((id) => id in expectedMultipleChoice), "MCQ مغطّاة").toEqual(
      byType("multiple-choice"),
    );
    expect(byType("fill-blank").filter((id) => id in expectedFillBlanks), "فراغات مغطّاة").toEqual(
      byType("fill-blank"),
    );
    expect(byType("error-correction").filter((id) => id in expectedErrorCorrections), "تصحيحات مغطّاة").toEqual(
      byType("error-correction"),
    );
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    expect(byType("transformation").filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      byType("transformation"),
    );
    expect(byType("word-ordering").filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(
      byType("word-ordering"),
    );
    expect(byType("dictation"), "إملاء").toEqual(["e10", "w3"]);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(
          index === exercise.correctIndex,
        );
      }
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank markers`).toBe(expected.correct.length);
      expect(exercise.template, `${id} markers`).not.toMatch(/_{4,}/);
      for (const [index, options] of expected.options.entries()) {
        for (const option of options) {
          const selected = expected.correct.map((value, position) => (position === index ? option : value));
          expect(evaluateExercise(exercise, selected).isCorrect, `${id} ${index} ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      }
    }
  });

  it("checks error-correction: one wrong span, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options, `${id} contains key`).toContain(expected.correctWord);
      expect(exercise.wrongSentence, `${id} contains wrongWord`).toContain(expected.wrongWord);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("corrects only the Futur II auxiliary, never the participle", () => {
    for (const id of ["e5", "e9", "m4"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} مساعد خاطئ`).toMatch(/^(haben|sein)$/);
      expect(exercise.correctWord, `${id} المساعد الصحيح`).toMatch(/^(haben|sein)$/);
      expect(exercise.wrongWord, `${id} لا تصحيح بلا تغيير`).not.toBe(exercise.correctWord);
    }
    const e5 = task("e5");
    const e9 = task("e9");
    const m4 = task("m4");
    for (const [exercise, expected] of [
      [e5, "Er wird gegangen sein."],
      [e9, "Ich werde das Buch beendet haben."],
      [m4, "Sie wird das Buch gelesen haben."],
    ] as const) {
      if (exercise.type !== "error-correction") throw new Error(`${exercise.id} is not error-correction`);
      const fixed = exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord);
      expect(fixed, `${exercise.id} الجملة المصحّحة`).toBe(expected);
    }
  });

  it("keeps Futur II formation: werden second, participle, then the auxiliary", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    const tokens = e4.tokens;
    expect(tokens.indexOf("werde"), "werden في المركز الثاني").toBe(1);
    expect(tokens.indexOf("gelernt"), "Partizip II قبل المساعد").toBeLessThan(tokens.indexOf("haben"));
    expect(tokens[tokens.length - 2], "المساعد في النهاية").toMatch(/^(haben|sein)$/);

    const e12 = task("e12");
    if (e12.type !== "fill-blank") throw new Error("e12 is not fill-blank");
    expect(e12.blanks.map(({ correct }) => correct), "جمع + مساعد").toEqual(["werden", "haben"]);
    expect(e12.blanks[1].options, "بديل المساعد").toContain("haben werden");

    const w2 = task("w2");
    if (w2.type !== "fill-blank") throw new Error("w2 is not fill-blank");
    expect(w2.blanks.map(({ correct }) => correct)).toEqual(["gelernt haben", "sein"]);
  });

  it("keeps the guessing function of Futur II separate from the future one", () => {
    const e14 = task("e14");
    if (e14.type !== "multiple-choice") throw new Error("e14 is not multiple-choice");
    expect(e14.questionDe, "جملة التخمين").toBe("„Er wird den Zug verpasst haben.“ bedeutet:");
    // العقد الأصلي كان يشترط كلمة «تخمين» **داخل نصّ الخيار**، أي أنه هو ما يفرض التسريب:
    // الحاشية تسمّي وظيفة الصيغة للمتعلم فتُغني عن الفهم، وتجعل الصحيحة الأطول بفارق 1.58×.
    // النيّة محفوظة بأدقّ مما كانت: المفتاح هو صيغة الترجيح نفسها («لا بدّ أنه …»)، ووظيفة
    // التخمين مُسمّاة في الشرح (مكانها الصحيح)، وقراءة المستقبل باقية مشتّتاً مرفوضاً.
    expect(e14.options[e14.correctIndex], "المفتاح = ترجيح عن الماضي").toBe("لا بدّ أنه فاته القطار");
    expect(e14.options[e14.correctIndex], "بلا حاشية تسرّب الوظيفة").not.toContain("(");
    expect(e14.explanation, "الشرح يسمّي وظيفة التخمين").toContain("التخمين");
    expect(e14.options, "قراءة المستقبل مشتّت لا مفتاح").toContain("سيفوته القطار حتماً");
    for (const option of e14.options.filter((value) => value !== e14.options[e14.correctIndex])) {
      expect(evaluateExercise(e14, option).isCorrect, `مشتّت مقبول: ${option}`).toBe(false);
    }
    const e13 = task("e13");
    if (e13.type !== "transformation") throw new Error("e13 is not transformation");
    expect(e13.prompt, "نقطة التشابه في المستقبل").toContain("Bis 2050");
    for (const answer of e13.acceptedAnswers ?? []) {
      expect(answer, "تركيب Futur II").toMatch(/wird sich .+ verdoppelt haben/);
    }
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "لا شيء مما سبق").isCorrect, `${id} مفتوح`).toBe(false);
    }
  });

  it("keeps every word-ordering item solvable with exactly the tokens of its sentence", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      const fromSentence = expected.correctSentence.match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...exercise.tokens].sort(), `${id} مجمّع التوكنات`).toEqual([...fromSentence].sort());
      expect(evaluateExercise(exercise, fromSentence).isCorrect, `${id} بالترتيب`).toBe(true);
      expect(evaluateExercise(exercise, [...fromSentence].reverse()).isCorrect, `${id} معكوس`).toBe(false);
    }
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs.map(({ left, right }) => ({ left, right })), `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} صحيح`).toBe(true);
      const [first, second, ...rest] = pairs;
      expect(
        evaluateExercise(exercise, [
          { ...first, right: second.right },
          { ...second, right: first.right },
          ...rest,
        ]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps dictation inside the Futur II and Erörterung register the lesson teaches", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Meiner Meinung nach ist ein Gleichgewicht wichtig.");
    expect(e10.audioText, "عبارة جدلية").toMatch(/^Meiner Meinung nach/);
    expect(e10.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Die Gesellschaft wird sich verändert haben.");
    expect(w3.audioText, "Futur II").toMatch(/wird sich .+ haben\.$/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB207.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB207.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB207.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB207.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB207.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB207.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      expect(block.whyAr?.trim().length ?? 0, `${block.id} whyAr`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic?.trim().length ?? 0, `${block.id} مقارنة`).toBeGreaterThanOrEqual(250);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB207.theory);
    for (const marker of ["Partizip II", "gegangen sein", "bis", "Erörterung", "Behauptung", "Begründung", "Sanduhr", "Schluss"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB207.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
      expect(card.level, `${card.id} level`).toBe("B2");
    }
    const corpus = JSON.stringify([
      lessonB207.reading?.paragraphs,
      lessonB207.reading?.glossary,
      lessonB207.theory,
      lessonB207.practiceBank,
      lessonB207.miniTest,
      lessonB207.writing,
      lessonB207.listening,
    ]).toLowerCase();
    for (const card of cards) {
      const words = card.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const anchored = words.length
        ? words.some((word) => corpus.includes(word.slice(0, Math.max(4, word.length - 3))))
        : true;
      expect(anchored, `بطاقة بلا مرساة ${card.de}`).toBe(true);
    }
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB207.reading;
    expect(reading?.id).toBe("read-b2-07");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Wer trägt die Verantwortung für die Zukunft?");
    expect(reading?.titleAr).toBe("مَن يحمل مسؤولية المستقبل؟");
    expect(reading?.paragraphs).toHaveLength(6);
    expect(reading?.paragraphsAr).toHaveLength(6);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length, "كلمات القراءة").toBeGreaterThanOrEqual(320);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const words = item.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const found = words.some((word) => text.includes(word.slice(0, Math.max(4, word.length - 3))));
      expect(found, `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
      expect(item.noteAr?.trim().length ?? 0, `${item.de} ملاحظة`).toBeGreaterThan(5);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(reading!.paragraphs.join(" ").includes(answer) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(
        false,
      );
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of [
      "die frage, ob wir für menschen verantwortlich sind, die noch nicht geboren wurden",
      "die künftigen generationen können keine forderungen stellen",
      "man kann einem menschen schaden, ohne ihm zu begegnen",
      "dagegen spricht ein einfacher vergleich",
      "dass wir aufpassen müssen, ihre möglichkeiten nicht zu verkleinern",
      "was unwiderruflich ist, muss man vermeiden",
      "bis zum jahr 2050 wird sich die menge dieses abfalls verdoppelt haben",
      "dass solche regeln den fortschritt bremsen",
      "dem möchte ich entgegenhalten",
      "begründung und verhältnismäßigkeit",
      "zusammenfassend lässt sich sagen",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["wird sich", "haben", "folglich", "zumal", "demnach", "these", "begründung", "fortschritt"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB207.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Für mich ist Glück weniger ein Ziel als ein Zustand. Es entsteht in Momenten der Verbundenheit und Dankbarkeit, nicht durch materiellen Besitz.",
      "Ja, früher dachte ich, Erfolg sei entscheidend. Heute weiß ich, dass Beziehungen und Gesundheit wichtiger sind, obwohl Erfolg auch seinen Wert hat.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB207.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-07-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-07");
    expect(meta?.titleAr).toBe(lessonB207.titleAr);
    expect(meta?.titleDe).toBe(lessonB207.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z3"), lessonB207.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB207.id, [goalEvent("z3", "e6")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB207.id, [goalEvent("z3", "e6"), goalEvent("z3", "e7"), goalEvent("z3", "m5")]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB207.id, [goalEvent("z3", "e6"), goalEvent("z3", "e7"), goalEvent("z3", "m5", false)]),
    ).toBe("pending");
  });
});

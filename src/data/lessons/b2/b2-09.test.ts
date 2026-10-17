import { describe, expect, it } from "vitest";

import { lessonB209 } from "@/data/lessons/b2/b2-09";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["stellen", "treffen", "sagen", "nehmen"], key: "stellen" },
  r2: { options: ["arbeitete", "arbeite", "gearbeitet", "arbeitest"], key: "arbeitete" },
  e1: { options: ["ziehe", "stelle", "lege", "mache"], key: "ziehe" },
  e2: { options: ["stelle", "ziehe", "lege", "gebe"], key: "stelle" },
  e8: { options: ["خطاب التقديم", "السيرة الذاتية", "الشهادة", "العقد"], key: "خطاب التقديم" },
  e14: { options: ["Anbei finden Sie ...", "Hier ist ...", "Ich gebe dir ...", "Das ist ..."], key: "Anbei finden Sie ..." },
  m1: { options: ["treffe", "mache", "nehme", "gebe"], key: "treffe" },
  m2: { options: ["lege", "stelle", "ziehe", "mache"], key: "lege" },
  q1: { options: ["auf Innovation", "auf viel Geld", "auf den Urlaub", "auf gutes Essen"], key: "auf Innovation" },
  q2: { options: ["seine Erfahrung", "sein Auto", "sein Büro", "seine Zeit nur"], key: "seine Erfahrung" },
  q3: { options: ["sofort", "nächste Woche", "im nächsten Monat", "nie"], key: "sofort" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["geschickt"], options: [["geschickt", "schickt", "schicken"]] },
  e6: {
    correct: ["spielt", "lege"],
    options: [
      ["spielt", "macht", "hat"],
      ["lege", "stelle", "ziehe"],
    ],
  },
  e12: {
    correct: ["üben", "legen"],
    options: [
      ["üben", "geben", "machen"],
      ["legen", "machen", "stellen"],
    ],
  },
  m5: {
    correct: ["finden", "spielt"],
    options: [
      ["finden", "sehen", "lesen"],
      ["spielt", "macht", "hat"],
    ],
  },
  w2: {
    correct: ["ziehe", "stelle"],
    options: [
      ["ziehe", "stelle", "lege"],
      ["ziehe", "stelle", "lege"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "nach", correctWord: "um", options: ["um", "nach", "auf", "an"] },
  e9: { wrongWord: "für", correctWord: "auf", options: ["auf", "für", "an", "über"] },
  e11: { wrongWord: "gemacht", correctWord: "getroffen", options: ["getroffen", "gemacht", "genommen", "gestellt"] },
  m4: { wrongWord: "zu", correctWord: "zur", options: ["zur", "zu", "zum", "zur Verfügung"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "in Betracht ziehen", right: "يأخذ بعين الاعتبار" },
    { left: "zur Verfügung stellen", right: "يضع تحت التصرف" },
    { left: "Wert legen auf", right: "يولي أهمية" },
    { left: "eine Rolle spielen", right: "يلعب دوراً" },
  ],
};

const expectedTransformations: string[] = ["e7", "e13", "w1", "w3"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: [
    "Ich möchte meine Motivation zum Ausdruck bringen und freue mich auf ein Gespräch",
    "Ich möchte meine Motivation zum Ausdruck bringen und freue mich auf ein Gespräch.",
  ],
  e13: [
    "in Betracht ziehen",
    "in Betracht ziehen.",
    "Wir müssen diese Option in Betracht ziehen.",
    "wir müssen diese option in betracht ziehen.",
  ],
  w1: ["Ich bewerbe mich um die Stelle als Projektmanager", "Ich bewerbe mich um die Stelle als Projektmanager."],
  w3: ["Ich möchte mich um die Stelle bewerben.", "Ich möchte mich um diese Stelle bewerben."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Ich", "mich", "Stelle", "um", "bewerbe", "die", "als", "Lehrer", "."],
    correctSentence: "Ich bewerbe mich um die Stelle als Lehrer.",
  },
  m3: {
    tokens: ["Ich", "mich", "um", "Stelle", "bewerbe", "die", "als", "Ingenieur", "."],
    correctSentence: "Ich bewerbe mich um die Stelle als Ingenieur.",
  },
};

/** العنصر الثابت داخل كل كتلة وظيفية: الفعل الوظيفي — يُحفظ معها ولا يُبدَّل */
const fixedVerb: Record<string, string> = {
  "in Betracht ziehen": "ziehen",
  "zur Verfügung stellen": "stellen",
  "Wert legen auf": "legen",
  "eine Rolle spielen": "spielen",
  "eine Entscheidung treffen": "treffen",
  "Kritik üben": "üben",
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB209.review ?? []),
    ...lessonB209.practiceBank,
    ...lessonB209.miniTest,
    ...lessonB209.writing,
    ...(lessonB209.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-09 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB209.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-09 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-09 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB209.id,
    taskId,
  };
}

describe("B2-09 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB209).toMatchObject({
      id: "b2-09",
      unitId: "b2-09",
      level: "B2",
      order: 1,
      titleDe: "Arbeitsmarkt und Bewerbung",
      titleAr: "سوق العمل والتقديم الوظيفي",
    });
    expect("duration" in lessonB209).toBe(false);
    expect(lessonB209.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-09");
    expect(meta).toMatchObject({ id: "b2-09", unitId: "b2-09", level: "B2", order: 1, estimatedMinutes: 55 });
    expect(meta?.summary).toBe(lessonB209.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB209.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["w1", "w3", "e7"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual([
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e9",
      "m1",
      "m2",
      "m4",
      "m5",
      "w2",
    ]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["q1", "q2", "q3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e8", "e10", "m4"]);
    for (const item of lessonB209.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB209.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB209.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-09", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-09", "l1", "q2", false)).toBe("listening:l1:q2");
    expect(getListeningQuestionTaskId("b2-09", "l2", "q3", true)).toBe("listening-transcript:b2-09:l2:q3");
    expect(goal("z3").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"]);
    const transcriptIds = lessonB209.lernziele.flatMap(
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
    expect(byType("dictation"), "إملاء").toEqual(["e10"]);
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

  it("keeps every Funktionsverbgefüge on its contractual verb", () => {
    const e3 = task("e3");
    if (e3.type !== "matching") throw new Error("e3 is not matching");
    for (const pair of e3.pairs) {
      expect(fixedVerb[pair.left], `التركيب ${pair.left} غير مسجَّل`).toBeTruthy();
    }
    const e11 = task("e11");
    if (e11.type !== "error-correction") throw new Error("e11 is not error-correction");
    expect(e11.wrongWord, "الفعل العام مرفوض").toBe("gemacht");
    expect(e11.correctWord, "الفعل المتعاقد عليه").toBe("getroffen");
    const e12 = task("e12");
    if (e12.type !== "fill-blank") throw new Error("e12 is not fill-blank");
    expect(e12.blanks.map(({ correct }) => correct), "Kritik üben · Wert legen auf").toEqual(["üben", "legen"]);
    expect(e12.blanks[0].options, "geben مرفوض").toContain("geben");
    const m4 = task("m4");
    if (m4.type !== "error-correction") throw new Error("m4 is not error-correction");
    expect(m4.correctWord, "الكتلة الثابتة zur Verfügung").toBe("zur");
    expect(m4.wrongSentence.replace(m4.wrongWord, m4.correctWord)).toContain("zur Verfügung.");
  });

  it("keeps the application letter formula for attachments intact", () => {
    const e14 = task("e14");
    if (e14.type !== "multiple-choice") throw new Error("e14 is not multiple-choice");
    expect(e14.options[e14.correctIndex], "قالب المرفقات").toBe("Anbei finden Sie ...");
    const m5 = task("m5");
    if (m5.type !== "fill-blank") throw new Error("m5 is not fill-blank");
    expect(m5.blanks[0].correct, "فعل القالب").toBe("finden");
    const firstBlankOptions = m5.blanks[0]?.options ?? [];
    expect(firstBlankOptions, "مفتاح واحد في البدائل").toContain("finden");
    expect(firstBlankOptions.filter((option) => option === "finden"), "مفتاح مكرّر").toHaveLength(1);
    const reading = lessonB209.reading;
    expect(reading?.redemittel?.some((item) => item.de.startsWith("Anbei finden Sie")), "القالب في Redemittel").toBe(
      true,
    );
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "٠٠٠ غير صحيح").isCorrect, `${id} مفتوح`).toBe(false);
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

  it("keeps dictation inside the formal letter register the lesson teaches", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Ich stelle meine Fähigkeiten gern zur Verfügung.");
    expect(e10.audioText, "الكتلة الوظيفية").toMatch(/zur Verfügung stellen|zur Verfügung\./);
    expect(e10.errorType).toBe("spelling");
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB209.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB209.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB209.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB209.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB209.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB209.theory) {
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
    const theoryText = JSON.stringify(lessonB209.theory);
    for (const marker of ["in Betracht ziehen", "zur Verfügung stellen", "Wert legen auf", "eine Rolle spielen", "sich bewerben um", "Entscheidung treffen", "Kritik üben", "Anbei finden Sie"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB209.flashcards;
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
      lessonB209.reading?.paragraphs,
      lessonB209.reading?.glossary,
      lessonB209.theory,
      lessonB209.practiceBank,
      lessonB209.miniTest,
      lessonB209.writing,
      lessonB209.listening,
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
    const reading = lessonB209.reading;
    expect(reading?.id).toBe("read-b2-09");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Von der Bewerbung zum ersten Arbeitstag");
    expect(reading?.titleAr).toBe("من طلب التوظيف إلى أول يوم عمل");
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
      "als sara sich um eine stelle als datenanalystin bewarb",
      "sie legte wert auf ein knappes anschreiben",
      "stellte auf anfrage gern arbeitsproben zur verfügung",
      "anbei finden sie, so begann jede ihrer bewerbungen",
      "wir treffen die entscheidung nicht im ersten gespräch",
      "wir ziehen alle kandidaten gleich in betracht",
      "dass ihre erfahrung nur eine kleine rolle spielte",
      "übte die personalabteilung offen kritik an einem vorschlag",
      "später wurde eine frist gesetzt",
      "in der ihre erfahrung besser zur geltung kam",
      "sara nahm das angebot in betracht",
      "am ersten arbeitstag wurde ihr ein pate zugeteilt",
      "auf diese weise übte sie kritik, ohne sie zu erleiden",
      "nach drei monaten legte sie wert darauf",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["in betracht", "zur verfügung", "wert leg", "rolle spiel", "kritik", "frist", "zusage"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB209.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Neben fachlichen Qualifikationen werden Soft Skills wie Kommunikation und Teamfähigkeit immer wichtiger. Außerdem sind digitale Kompetenzen unverzichtbar.",
      "Ich bin kommunikativ und teamfähig. Zudem beherrsche ich mehrere Sprachen, was in internationalen Unternehmen ein großer Vorteil ist.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB209.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-09-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-09");
    expect(meta?.titleAr).toBe(lessonB209.titleAr);
    expect(meta?.titleDe).toBe(lessonB209.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB209.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB209.id, [goalEvent("z1", "w1")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB209.id, [
        goalEvent("z1", "w1"),
        goalEvent("z1", "w3"),
        goalEvent("z1", "e7"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB209.id, [
        goalEvent("z1", "w1"),
        goalEvent("z1", "w3"),
        goalEvent("z1", "e7", false),
      ]),
    ).toBe("pending");
  });
});

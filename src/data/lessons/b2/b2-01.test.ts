import { describe, expect, it } from "vitest";

import { lessonB201 } from "@/data/lessons/b2/b2-01";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["hätte", "habe", "hatte", "haben"], key: "hätte" },
  r2: { options: ["wird", "wurde", "ist", "war"], key: "wird" },
  e1: { options: ["habe", "hat", "hätte", "haben"], key: "habe" },
  e2: { options: ["sei", "ist", "wäre", "seid"], key: "sei" },
  e8: { options: ["الاكتشاف", "التجربة", "الاختراع", "البحث"], key: "الاكتشاف" },
  m1: { options: ["habe", "hat", "hätte", "haben"], key: "habe" },
  m2: { options: ["werde", "wird", "würde", "worden"], key: "werde" },
  q1: {
    options: ["Sie seien sehr wichtig", "Sie seien schlecht", "Sie seien unbekannt", "Sie seien alt"],
    key: "Sie seien sehr wichtig",
  },
  q2: { options: ["die Medizin", "die Wirtschaft", "die Politik", "die Schule"], key: "die Medizin" },
  q3: {
    options: [
      "Die Forschung werde weitergehen",
      "Die Forschung sei fertig",
      "Die Forschung sei teuer",
      "Die Forschung sei langweilig",
    ],
    key: "Die Forschung werde weitergehen",
  },
  q4: { options: ["Die Studie habe zweihundert Personen einbezogen", "Die Studie habe hundertzwanzig Personen einbezogen", "Die Studie habe dreihundert Personen einbezogen", "Die Studie habe fünfhundert Personen einbezogen"], key: "Die Studie habe zweihundert Personen einbezogen" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["der"], options: [["der", "den", "dem"]] },
  e6: {
    correct: ["könne", "werde"],
    options: [
      ["könne", "kann", "könnte"],
      ["werde", "wird", "würde"],
    ],
  },
  e11: {
    correct: ["muss", "dürfte", "könnte"],
    options: [
      ["muss", "dürfte", "könnte", "kann"],
      ["dürfte", "muss", "könnte", "sollte"],
      ["könnte", "muss", "dürfte", "wollte"],
    ],
  },
  e14: {
    correct: ["muss", "dürfte"],
    options: [
      ["muss", "müsste", "dürfte", "könnte"],
      ["dürfte", "muss", "könnte", "musste"],
    ],
  },
  m5: {
    correct: ["habe", "könne"],
    options: [
      ["habe", "hat", "hätte"],
      ["könne", "kann", "könnte"],
    ],
  },
  w2: {
    correct: ["habe", "sei", "könne"],
    options: [
      ["habe", "hat", "hätte"],
      ["sei", "ist", "wäre"],
      ["könne", "kann", "könnte"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "hat", correctWord: "habe", options: ["habe", "hat", "hätte", "haben"] },
  e9: { wrongWord: "ist", correctWord: "seien", options: ["seien", "ist", "sind", "wären"] },
  e13: { wrongWord: "hätte", correctWord: "habe", options: ["habe", "hätte", "hat", "haben"] },
  m4: { wrongWord: "ist", correctWord: "sei", options: ["sei", "ist", "wäre", "seid"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Wissenschaft", right: "العلم" },
    { left: "die Forschung", right: "البحث" },
    { left: "das Experiment", right: "التجربة" },
    { left: "der Beweis", right: "البرهان" },
  ],
};

const expectedTransformations: string[] = ["e7", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Sie sagt, sie sei müde", "Sie sagt, sie sei müde."],
  w1: ["Er sagt, er habe Zeit", "Er sagt, er habe Zeit."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["sagt", "er", "habe", "Er", "Zeit", ",", "."],
    correctSentence: "Er sagt, er habe Zeit.",
  },
  e12: {
    tokens: ["Die", "Entdeckung", "dürfte", "die", "Forschung", "verändern", "."],
    correctSentence: "Die Entdeckung dürfte die Forschung verändern.",
  },
  m3: {
    tokens: ["sagt", "Die", "Professorin", "Ergebnisse", "die", "seien", "positiv", ",", "."],
    correctSentence: "Die Professorin sagt, die Ergebnisse seien positiv.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB201.review ?? []),
    ...lessonB201.practiceBank,
    ...lessonB201.miniTest,
    ...lessonB201.writing,
    ...lessonB201.listening.questions as Exercise[],
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-01 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB201.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-01 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-01 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB201.id,
    taskId,
  };
}

describe("B2-01 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB201).toMatchObject({
      id: "b2-01",
      unitId: "b2-01",
      level: "B2",
      order: 1,
      titleDe: "Wissenschaft und Forschung",
      titleAr: "العلوم والبحث",
    });
    expect("duration" in lessonB201).toBe(false);
    expect(lessonB201.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-01");
    expect(meta).toMatchObject({
      id: "b2-01",
      unitId: "b2-01",
      level: "B2",
      order: 1,
      estimatedMinutes: 60,
      summary: lessonB201.summary,
    });
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB201.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e5", "e6", "e7", "m1", "m2", "m4", "m5"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["w1", "w2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12"]);
    for (const item of lessonB201.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    const goalsText = JSON.stringify(lessonB201.lernziele);
    expect(goalsText).not.toMatch(/Goethe|CEFR/);
    expect(goalsText).not.toMatch(/عروض|Vortrag|Präsentation/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB201.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-01", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-01", "l2", "q3", false)).toBe("listening:l2:q3");
    expect(getListeningQuestionTaskId("b2-01", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b2-01", "l1", "q1", true)).toBe("listening-transcript:b2-01:l1:q1");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"]);
    const transcriptIds = lessonB201.lernziele.flatMap(
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
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(
      byType("matching"),
    );
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
        const result = evaluateExercise(exercise, option);
        expect(result.isCorrect, `${id}: ${option}`).toBe(index === exercise.correctIndex);
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

  it("rejects the present tense wherever the indirect speech demands Konjunktiv I", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(
        evaluateExercise(exercise, exercise.wrongWord).isCorrect,
        `${id} يقبل الخطأ`,
      ).toBe(false);
      expect(exercise.wrongSentence, `${id}`).not.toMatch(/habe|sei|seien|könne|werde/);
      expect(expected.correctWord, `${id} ليس خطأ`).not.toBe(expected.wrongWord);
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
    }
  });

  it("demands Konjunktiv I — not Konjunktiv II — in every indirect-speech transformation", () => {
    for (const id of expectedTransformations) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      for (const answer of exercise.acceptedAnswers ?? []) {
        expect(answer, `${id} صيغة النقل`).toMatch(/habe|sei/);
        expect(answer, `${id} لا تُقبل صيغة الشرط`).not.toMatch(/hätte|wäre/);
      }
      expect(
        evaluateExercise(exercise, "Sie sagt, sie wäre müde.").isCorrect,
        `${id} تقبل Konjunktiv II`,
      ).toBe(false);
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

  it("keeps dictation audio sentences in indirect speech with a spelled out finitum", () => {
    for (const id of ["e10", "w3"]) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText.trim().length, `${id} audioText`).toBeGreaterThan(20);
      expect(exercise.audioText, `${id} نقل`).toMatch(/seien|sei/);
      expect(exercise.errorType, `${id} errorType`).toBe("spelling");
    }
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB201.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB201.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB201.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
  });

  it("keeps the two theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB201.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB201.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB201.theory);
    for (const form of ["habe", "sei", "werde", "könne", "hätten", "dürfte", "müsste", "muss"]) {
      expect(theoryText, `صيغة مفقودة: ${form}`).toContain(form);
    }
  });

  it("does not mark a correct past-probability sentence as a mistake", () => {
    const t2 = lessonB201.theory.find((block) => block.id === "t2");
    const bad = (t2?.commonMistakes ?? []).map((mistake) => mistake.wrong);
    expect(bad).not.toContain("Das dürfte gestimmt haben. (خلط زمني بلا حاجة)");
    expect(bad).toContain("Das dürfte gestimmt sein.");
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB201.flashcards;
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
      lessonB201.reading?.paragraphs,
      lessonB201.reading?.glossary,
      lessonB201.theory,
      lessonB201.practiceBank,
      lessonB201.miniTest,
      lessonB201.writing,
      lessonB201.listening,
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
    const reading = lessonB201.reading;
    expect(reading?.id).toBe("read-b2-01");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Zwölf Wochen für ein Experiment");
    expect(reading?.titleAr).toBe("اثنا عشر أسبوعاً من أجل تجربة");
    expect(reading?.paragraphs).toHaveLength(5);
    expect(reading?.paragraphsAr).toHaveLength(5);
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
      "hätten zwölf wochen lang jeden abend zwanzig minuten geübt",
      "die ursache dafür sei noch nicht vollständig geklärt",
      "die öffentliche förderung solle verlängert werden",
      "die forscherin widerspricht dieser darstellung",
      "solle die veröffentlichte fassung lesen",
      "von anderen gruppen überprüft werden",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading);
    for (const form of ["habe", "habe", "hätten", "sei", "seien", "könne", "dürfte", "müsste", "sollen", "wolle"]) {
      expect(readingText, `نقل مفقود في القراءة: ${form}`).toContain(form);
    }
  });

  it("uses no invented probability percentages or unsourced statistics", () => {
    const text = JSON.stringify(lessonB201) + JSON.stringify(lessonMetaList.find((meta) => meta.id === "b2-01"));
    expect(text).not.toMatch(/\d+\s*%/);
    expect(text).not.toMatch(/~80|جائزة نوبل|مجانية تقريباً/);
    expect(text).not.toMatch(/Goethe|Prüfungsteil|نسبة النجاح|mock|امتحان B2/);
  });

  it("keeps the interaction best reply as one complete sentence", () => {
    const rounds = lessonB201.interaction?.[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Das stimmt zwar, aber gleichzeitig entstehen völlig neue Berufe, die mehr Qualifikation verlangen.",
      "Zum Beispiel im Bereich künstliche Intelligenz und Datenschutz. Je mehr Technologie, desto mehr Fachkräfte werden gebraucht.",
      "Meiner Ansicht nach sollte der Staat in Umschulungen investieren, obwohl das kurzfristig teuer ist. Langfristig lohnt es sich für die ganze Gesellschaft.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-01");
    expect(meta?.titleAr).toBe(lessonB201.titleAr);
    expect(meta?.titleDe).toBe(lessonB201.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB201.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB201.id, [goalEvent("z4", "e11")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB201.id, [goalEvent("z4", "e11"), goalEvent("z4", "e12")]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB201.id, [goalEvent("z4", "e11"), goalEvent("z4", "e12", false)]),
    ).toBe("pending");
  });
});

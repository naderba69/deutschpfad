import { describe, expect, it } from "vitest";

import { lessonB110 } from "@/data/lessons/b1/b1-10";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["des", "der", "dem", "den"], key: "des" },
  r2: { options: ["wäre", "bin", "war", "werde"], key: "wäre" },
  e1: { options: ["der", "den", "dem", "dessen"], key: "der" },
  e2: { options: ["hätte", "habe", "hatte", "haben"], key: "hätte" },
  e8: {
    options: ["تقدمت بالفعل", "سأقدم لاحقاً", "لم أتقدم بعد", "أريد أن أتقدم"],
    key: "تقدمت بالفعل",
  },
  e11: {
    options: [
      "Der Plan, den wir besprochen haben, wird nächste Woche umgesetzt, weil alle zustimmen.",
      "Der Plan, den wir besprochen haben, wird nächste Woche umgesetzt, weil alle stimmen zu.",
      "Der Plan, wir haben besprochen, wird nächste Woche umgesetzt, weil alle zustimmen.",
      "Der Plan, den wir haben besprochen, wird nächste Woche umgesetzt, weil alle zustimmen.",
    ],
    key: "Der Plan, den wir besprochen haben, wird nächste Woche umgesetzt, weil alle zustimmen.",
  },
  m1: { options: ["das", "der", "die", "dem"], key: "das" },
  m2: { options: ["studieren", "studiere", "studiert", "studiert haben"], key: "studieren" },
  q1: { options: ["in München", "in Berlin", "in Hamburg", "in Tunis"], key: "in München" },
  q2: {
    options: ["eine nicht zu teure Wohnung", "eine große Wohnung", "eine Wohnung am Strand", "ein Haus"],
    key: "eine nicht zu teure Wohnung",
  },
  q3: {
    options: ["eine Firma gründen", "ein Haus kaufen", "nach Deutschland gehen", "ein Buch schreiben"],
    key: "eine Firma gründen",
  },
  q4: { options: ["Mitte September vor Studienbeginn", "Anfang August in den Ferien", "Ende Oktober nach dem Start", "Erst im nächsten Frühjahr"], key: "Mitte September vor Studienbeginn" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["wurde"], options: [["wurde", "wird", "werde"]] },
  e6: {
    correct: ["das", "weil"],
    options: [
      ["das", "der", "die"],
      ["weil", "dass", "wenn"],
    ],
  },
  e12: {
    correct: ["hätte", "würde"],
    options: [
      ["hätte", "habe", "hatte"],
      ["würde", "werde", "wurde"],
    ],
  },
  m5: {
    correct: ["das", "weil"],
    options: [
      ["das", "der", "die"],
      ["weil", "dass", "wenn"],
    ],
  },
  w2: {
    correct: ["der", "hätte"],
    options: [
      ["der", "den", "dem"],
      ["hätte", "habe", "hatte"],
    ],
  },
};

const expectedErrorCorrections: Record<
  string,
  { wrongWord: string; correctWord: string; options: string[]; alreadyCorrect?: boolean }
> = {
  e5: { wrongWord: "den", correctWord: "der", options: ["der", "den", "dem", "dessen"] },
  e9: {
    wrongWord: "verstehe ich",
    correctWord: "verstehe ich",
    options: ["verstehe ich", "ich verstehe", "verstehen ich", "ich verstehen"],
    alreadyCorrect: true,
  },
  e13: { wrongWord: "muss lernen", correctWord: "lernen muss", options: ["lernen muss", "muss lernen", "lernen müsste", "lerne muss"] },
  m4: { wrongWord: "dem", correctWord: "der", options: ["der", "dem", "den", "dessen"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "Genitiv", right: "das Buch des Lehrers" },
    { left: "Passiv", right: "Das Haus wird gebaut" },
    { left: "Konjunktiv II", right: "Ich würde reisen" },
    { left: "Relativsatz", right: "Der Mann, der dort steht" },
  ],
};

const expectedTransformations: string[] = ["e7", "e14", "w1", "w3"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Ich kenne einen Mann, der Deutsch spricht", "Ich kenne einen Mann, der Deutsch spricht."],
  e14: [
    "Hätte ich das gewusst, hätte ich anders gehandelt",
    "Hätte ich das gewusst, hätte ich anders gehandelt.",
  ],
  w1: [
    "Ich werde in Deutschland studieren, weil ich die Kultur liebe",
    "Ich werde in Deutschland studieren, weil ich die Kultur liebe.",
  ],
  w3: ["Nächstes Jahr werde ich Deutsch lernen.", "Ich werde nächstes Jahr Deutsch lernen."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Der", "Student", ",", "der", "Deutsch", "lernt", ",", "möchte", "in", "Deutschland", "studieren", "."],
    correctSentence: "Der Student, der Deutsch lernt, möchte in Deutschland studieren.",
  },
  m3: {
    tokens: ["Wenn", "hätte", "ich", "Geld", "würde", "ich", "reisen", ","],
    correctSentence: "Wenn ich Geld hätte, würde ich reisen.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB110.review ?? []),
    ...lessonB110.practiceBank,
    ...lessonB110.miniTest,
    ...lessonB110.writing,
    ...lessonB110.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-10 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB110.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-10 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-10 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB110.id,
    taskId,
  };
}

describe("B1-10 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB110).toMatchObject({
      id: "b1-10",
      unitId: "b1-10",
      level: "B1",
      order: 1,
      titleDe: "Zukunft und Pläne",
      titleAr: "المستقبل والخطط",
    });
    expect("duration" in lessonB110).toBe(false);
    expect(lessonB110.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = LESSON_META.find((item) => item.id === "b1-10");
    expect(meta).toMatchObject({ id: "b1-10", unitId: "b1-10", level: "B1", order: 1, summary: lessonB110.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB110.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e4", "e6", "e7", "e11", "m1", "m5", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e2", "e10", "m3", "w2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["m2", "w1", "w3"]);
    for (const item of lessonB110.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB110.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB110.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    const listeningIds = lessonB110.listening.questions.map(({ id }) => id).sort();
    const evidenceIds = lessonB110.lernziele
      .flatMap((item) => item.evidence?.exerciseIds ?? [])
      .filter((id) => id.startsWith("q"))
      .sort();
    expect(evidenceIds).toEqual(listeningIds);
    expect(
      lessonB110.listening.questions.map(({ id, itemId }) =>
        getListeningQuestionTaskId("b1-10", itemId, id, false),
      ),
    ).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"]);
    expect(getListeningQuestionTaskId("b1-10", "l1", "q1", true)).toBe("listening-transcript:b1-10:l1:q1");
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
    const transformations = byType("transformation");
    expect(transformations.filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      transformations,
    );
    const wordOrder = byType("word-ordering");
    expect(wordOrder.filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(wordOrder);
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
      expect(exercise.isAlreadyCorrect ?? false, `${id} already-correct flag`).toBe(expected.alreadyCorrect ?? false);
      if (exercise.isAlreadyCorrect) continue;
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === exercise.correctWord,
        );
      }
    }
  });

  it("keeps e9 as an already-correct trap with no invented error", () => {
    const e9 = task("e9");
    if (e9.type !== "error-correction") throw new Error("e9 is not error-correction");
    expect(e9.isAlreadyCorrect).toBe(true);
    expect(e9.wrongSentence).toBe("Je mehr ich lerne, desto besser verstehe ich.");
    expect(e9.wrongWord).toBe(e9.correctWord);
    expect(e9.explanation).toContain("desto");
  });

  it("offers a correct word among the error-correction options (the no-error option is added by the interface)", () => {
    for (const exercise of allTasks()) {
      if (exercise.type !== "error-correction" || exercise.isAlreadyCorrect) continue;
      expect(exercise.options, `${exercise.id}`).toContain(exercise.correctWord);
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

  it("requires the wenn-free inversion in the e14 transformation", () => {
    const e14 = task("e14");
    if (e14.type !== "transformation") throw new Error("e14 is not transformation");
    expect(e14.acceptedAnswers?.every((answer) => answer.startsWith("Hätte ich das gewusst"))).toBe(true);
    expect(evaluateExercise(e14, "Wenn ich das gewusst hätte, hätte ich anders gehandelt.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      const inOrder = expected.correctSentence.split(" ");
      expect(evaluateExercise(exercise, inOrder).isCorrect, `${id} بالترتيب`).toBe(true);
      expect(evaluateExercise(exercise, [...inOrder].reverse()).isCorrect, `${id} معكوس`).toBe(false);
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
        evaluateExercise(exercise, [{ ...first, right: second.right }, { ...second, right: first.right }, ...rest]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps the review block anchored in B1 rules and the theory pairs with six examples each", () => {
    expect(lessonB110.review?.map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonB110.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB110.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB110.theory);
    for (const rule of ["genitiv", "relativsatz", "konjunktiv ii", "passiv", "weil"]) {
      expect(theoryText.toLowerCase(), `قاعدة مفقودة: ${rule}`).toContain(rule);
    }
  });

  it("checks the flashcards: count, unique German headwords, and corpus anchors", () => {
    const cards = lessonB110.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
    }
    const corpus = JSON.stringify([
      lessonB110.reading?.paragraphs,
      lessonB110.reading?.glossary,
      lessonB110.theory,
      lessonB110.practiceBank,
      lessonB110.miniTest,
      lessonB110.writing,
      lessonB110.listening,
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
    const reading = lessonB110.reading;
    expect(reading?.id).toBe("read-b1-10");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Fiktiver Übungsbericht: Ein Plan für die Zukunft");
    expect(reading?.titleAr).toBe("نص تدريبي خيالي: خطة للمستقبل");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das|sich)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text.includes(stem), `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
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

    for (const anchor of ["weiterbilden", "bewerbung", "ausbildung", "voraussetzung"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("qualifies Integrationskurs and naturalization requirements with official sources", () => {
    const note = lessonB110.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("A2 oder B1");
    expect(note).toContain("Leben in Deutschland");
    expect(note).toContain("§ 10 Abs. 4 StAG");
    expect(note).toContain("bamf.de");
    expect(note).toContain("gesetze-im-internet.de");
    expect(note).not.toContain("مقدسة");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z3"), lessonB110.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB110.id, [goalEvent("z3", "e2")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB110.id, [
        goalEvent("z3", "e2"),
        goalEvent("z3", "e10"),
        goalEvent("z3", "m3"),
        goalEvent("z3", "w2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB110.id, [
        goalEvent("z3", "e2"),
        goalEvent("z3", "e10", false),
        goalEvent("z3", "m3"),
        goalEvent("z3", "w2"),
      ]),
    ).toBe("pending");
  });
});

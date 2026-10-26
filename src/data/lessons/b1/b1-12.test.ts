import { describe, expect, it } from "vitest";

import { lessonB112 } from "@/data/lessons/b1/b1-12";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["weil", "denn ich", "wegen", "damit"], key: "weil" },
  r2: { options: ["Obwohl", "Weil", "Damit", "Trotz"], key: "Obwohl" },
  e1: { options: ["um … zu", "damit … zu", "weil … zu", "trotz … zu"], key: "um … zu" },
  e2: { options: ["damit", "um zu", "wegen", "während"], key: "damit" },
  e7: { options: ["einzukaufen", "zu einkaufen", "einkaufen zu", "zu kaufen ein"], key: "einzukaufen" },
  e9: {
    options: ["Wegen des Regens", "Weil des Regens", "Wegen es regnet", "Damit des Regens"],
    key: "Wegen des Regens",
  },
  e14: {
    options: [
      "Ich gehe früh, um pünktlich zu sein.",
      "Ich gehe früh, um ich pünktlich bin.",
      "Ich gehe früh, um zu pünktlich sein.",
      "Ich gehe früh, damit zu pünktlich sein.",
    ],
    key: "Ich gehe früh, um pünktlich zu sein.",
  },
  m1: { options: ["um … zu", "damit zu", "wegen zu", "trotz zu"], key: "um … zu" },
  m2: { options: ["damit", "um zu", "trotz", "aufgrund"], key: "damit" },
  q1: {
    options: ["Um als Ingenieur zu arbeiten", "Um zu studieren", "Wegen der Prüfung", "Damit seine Frau arbeitet"],
    key: "Um als Ingenieur zu arbeiten",
  },
  q2: {
    options: ["Damit die Kinder zweisprachig aufwachsen", "Um selbst noch zu studieren und zu lernen", "Wegen der Arbeit und des langen Weges", "Trotz der Kinder und der Schule"],
    key: "Damit die Kinder zweisprachig aufwachsen",
  },
  q3: {
    options: ["Während der Bauarbeiten", "Wegen des Regens", "Trotz des Verkehrs", "Um zu sparen"],
    key: "Während der Bauarbeiten",
  },
  q4: { options: ["Wegen seiner langen Arbeitszeiten", "Trotz seiner täglichen Pausen", "Damit sein Chef ihn unterstützt", "Um am Wochenende mehr zu reisen"], key: "Wegen seiner langen Arbeitszeiten" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["zu"], options: [["zu", "um", "für"]] },
  e3: {
    correct: ["Wegen", "des"],
    options: [
      ["Wegen", "Während", "Trotz"],
      ["des", "der", "dem"],
    ],
  },
  e6: {
    correct: ["der", "des"],
    options: [
      ["der", "des", "dem"],
      ["des", "der", "dem"],
    ],
  },
  e13: {
    correct: ["um", "zu"],
    options: [
      ["um", "damit", "wegen"],
      ["zu", "zum", "für"],
    ],
  },
  m3: { correct: ["der"], options: [["der", "des", "dem"]] },
  w2: {
    correct: ["damit", "um", "zu"],
    options: [
      ["damit", "um", "weil"],
      ["um", "damit", "trotz"],
      ["zu", "zum", "für"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "um", correctWord: "damit", options: ["damit", "um", "weil", "trotz"] },
  e8: { wrongWord: "der", correctWord: "des", options: ["des", "der", "dem", "den"] },
  e15: { wrongWord: "um", correctWord: "damit", options: ["damit", "um", "weil", "während"] },
  m5: { wrongWord: "der", correctWord: "des", options: ["des", "der", "dem", "den"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e12: [
    { left: "wegen", right: "بسبب" },
    { left: "trotz", right: "رغم" },
    { left: "während", right: "أثناء" },
    { left: "aufgrund", right: "نتيجةً لـ" },
  ],
};

const expectedTransformations: string[] = ["e11", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e11: [
    "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst",
    "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst.",
  ],
  w1: [
    "Ich lerne Deutsch, um in Deutschland zu studieren",
    "Ich lerne Deutsch, um in Deutschland zu studieren.",
  ],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Ich", "früh", "auf", "stehe", "um", "pünktlich", "zu", "sein", ",", "."],
    correctSentence: "Ich stehe früh auf, um pünktlich zu sein.",
  },
  e10: {
    tokens: ["Wir", "gehen", "los", "früh", "damit", "wir", "den", "Zug", "erreichen", ",", "."],
    correctSentence: "Wir gehen früh los, damit wir den Zug erreichen.",
  },
  m4: {
    tokens: ["Sie", "spart", "Geld", "um", "eine", "Reise", "zu", "machen", ",", "."],
    correctSentence: "Sie spart Geld, um eine Reise zu machen.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB112.review ?? []),
    ...lessonB112.practiceBank,
    ...lessonB112.miniTest,
    ...lessonB112.writing,
    ...lessonB112.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-12 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB112.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-12 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-12 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB112.id,
    taskId,
  };
}

describe("B1-12 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB112).toMatchObject({
      id: "b1-12",
      unitId: "b1-10",
      level: "B1",
      order: 2,
      titleDe: "Ziele, Gründe und Absichten",
      titleAr: "الأهداف والأسباب والنوايا",
    });
    expect("duration" in lessonB112).toBe(false);
    expect(lessonB112.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = LESSON_META.find((item) => item.id === "b1-12");
    expect(meta).toMatchObject({
      id: "b1-12",
      unitId: "b1-10",
      level: "B1",
      order: 2,
      summary: lessonB112.summary,
    });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB112.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["e1", "e4", "e7", "e14", "m1", "m4", "w1"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e2", "e5", "e10", "e11", "m2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e3", "e6", "e9", "e12", "m3", "w3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    for (const item of lessonB112.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB112.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB112.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} توازن الأدلة`).toBe(evidence.exerciseIds.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    const listeningIds = lessonB112.listening.questions.map(({ id }) => id).sort();
    const evidenceIds = lessonB112.lernziele
      .flatMap((item) => item.evidence?.exerciseIds ?? [])
      .filter((id) => id.startsWith("q"))
      .sort();
    expect(evidenceIds).toEqual(listeningIds);
    expect(
      lessonB112.listening.questions.map(({ id, itemId }) =>
        getListeningQuestionTaskId("b1-12", itemId, id, false),
      ),
    ).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"]);
    expect(getListeningQuestionTaskId("b1-12", "l1", "q1", true)).toBe("listening-transcript:b1-12:l1:q1");
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
      expect(exercise.wrongSentence, `${id} does not contain key`).not.toContain(expected.correctWord);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
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

  it("demands damit and a full clause in the e11 transformation", () => {
    const e11 = task("e11");
    if (e11.type !== "transformation") throw new Error("e11 is not transformation");
    expect(e11.acceptedAnswers?.every((answer) => answer.includes("damit du sie nicht vergisst"))).toBe(true);
    expect(evaluateExercise(e11, "Ich schreibe dir die Adresse auf, um du sie nicht zu vergessen.").isCorrect).toBe(
      false,
    );
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
        evaluateExercise(exercise, [{ ...first, right: second.right }, { ...second, right: first.right }, ...rest]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps the three theory blocks at six examples and three explained mistakes each", () => {
    expect(lessonB112.theory.map(({ id }) => id)).toEqual(["t1", "t2", "t3"]);
    expect(lessonB112.review?.map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    for (const block of lessonB112.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB112.theory);
    for (const rule of ["um … zu", "damit", "wegen", "trotz", "während", "aufgrund"]) {
      expect(theoryText, `قاعدة مفقودة: ${rule}`).toContain(rule);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB112.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
    }
    const corpus = JSON.stringify([
      lessonB112.reading?.paragraphs,
      lessonB112.reading?.glossary,
      lessonB112.theory,
      lessonB112.practiceBank,
      lessonB112.miniTest,
      lessonB112.writing,
      lessonB112.listening,
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
    const reading = lessonB112.reading;
    expect(reading?.id).toBe("read-b1-12");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toContain("Trotz Vollzeit: Deutsch am Abend");
    expect(reading?.titleDe.toLowerCase()).toContain("fiktiv");
    expect(reading?.titleAr).toContain("رغم العمل بدوام كامل: الألمانية في المساء");
    expect(reading?.titleAr).toContain("خيالي");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);
    expect(text).toContain("keine verlässliche auskunft zu prüfungsanforderungen");
    expect(JSON.stringify(lessonB112.theory)).toContain("Es ist wichtig, regelmäßig zu üben");
    expect(JSON.stringify(lessonB112.theory)).toContain("يمكن أن تأتي damit مع الفاعل نفسه أيضاً");
    expect(JSON.stringify(lessonB112.theory)).toContain("Ich trage einen Pullover, damit ich nicht friere");
    expect(lessonB112.mediation?.[0]?.taskAr.toLowerCase()).toContain("خيالي");
    expect(lessonB112.interaction?.[0]?.scenarioAr.toLowerCase()).toContain("خيالية");

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

    for (const anchor of ["wegen der arbeit", "trotz der müdigkeit", "damit ich sie sicher bestehe"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z2"), lessonB112.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB112.id, [goalEvent("z2", "e2")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB112.id, [
        goalEvent("z2", "e2"),
        goalEvent("z2", "e5"),
        goalEvent("z2", "e10"),
        goalEvent("z2", "e11"),
        goalEvent("z2", "m2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB112.id, [
        goalEvent("z2", "e2"),
        goalEvent("z2", "e5", false),
        goalEvent("z2", "e10"),
        goalEvent("z2", "e11"),
        goalEvent("z2", "m2"),
      ]),
    ).toBe("pending");
  });
});

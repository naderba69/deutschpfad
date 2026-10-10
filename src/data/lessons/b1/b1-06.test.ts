import { describe, expect, it } from "vitest";

import { lessonB106 } from "@/data/lessons/b1/b1-06";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["rot", "rote", "rotes", "roten"], key: "rot" },
  r2: { options: ["Das", "Der", "Die", "Ein"], key: "Das" },
  e1: { options: ["schönes", "schöne", "schönen", "schöner"], key: "schönes" },
  e2: { options: ["berühmte", "berühmtes", "berühmten", "berühmter"], key: "berühmte" },
  e8: { options: ["القرن", "العام", "العقد", "الألفية"], key: "القرن" },
  m1: { options: ["kleines", "kleine", "kleinen", "kleiner"], key: "kleines" },
  m2: { options: ["gute", "guter", "gutes", "guten"], key: "gute" },
  q1: {
    options: ["eine kleine Stadt am Fluss", "einen großen Berg", "ein berühmtes Schloss", "einen Wald"],
    key: "eine kleine Stadt am Fluss",
  },
  q2: { options: ["Couscous", "Schnitzel", "Käsespätzle", "Currywurst"], key: "Couscous" },
  q3: { options: ["gute Orchester", "gute Strände", "gute Wüsten", "gute Berge"], key: "gute Orchester" },
  q4: {
    options: ["der Kulturschock", "das Essen", "das Wetter", "die Musik"],
    key: "der Kulturschock",
  },
  q5: { options: ["ihre Heimat", "das Wetter", "die Arbeit", "das Essen"], key: "ihre Heimat" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["ist"], options: [["ist", "sein", "hat"]] },
  e6: {
    correct: ["interessanten", "kleinen"],
    options: [
      ["interessanten", "interessante", "interessantes"],
      ["kleinen", "kleine", "kleines"],
    ],
  },
  m5: {
    correct: ["berühmter", "gute"],
    options: [
      ["berühmter", "berühmte", "berühmtes"],
      ["gute", "guter", "guten"],
    ],
  },
  m6: {
    correct: ["guten", "frisches"],
    options: [
      ["guten", "guter", "gute"],
      ["frisches", "frische", "frischem"],
    ],
  },
  w2: {
    correct: ["guter", "gute", "gutes", "guten"],
    options: [
      ["guter", "gute", "gutes"],
      ["guter", "gute", "gutes"],
      ["guter", "gute", "gutes"],
      ["guten", "guter", "gutes"],
    ],
  },
  w4: {
    correct: ["leckeres", "gute"],
    options: [
      ["leckeres", "leckere", "leckerer"],
      ["gute", "guten", "guter"],
    ],
  },
  e13: { correct: ["habe"], options: [["habe", "bin", "ist"]] },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "gut", correctWord: "guter", options: ["guter", "gute", "gutes", "guten"] },
  e9: { wrongWord: "gute", correctWord: "guten", options: ["guten", "gute", "guter", "gutes"] },
  m4: { wrongWord: "berühmtes", correctWord: "berühmte", options: ["berühmte", "berühmtes", "berühmten", "berühmter"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Kunst", right: "الفن" },
    { left: "das Gemälde", right: "اللوحة" },
    { left: "der Maler", right: "الرسام" },
    { left: "das Museum", right: "المتحف" },
  ],
  e11: [
    { left: "die Heimat", right: "الوطن" },
    { left: "das Heimweh", right: "الحنين إلى الوطن" },
    { left: "der Kulturschock", right: "صدمة الثقافة" },
    { left: "die Integration", right: "الاندماج" },
    { left: "vermissen", right: "يشتاق إلى" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB106.review ?? []),
    ...lessonB106.practiceBank,
    ...lessonB106.miniTest,
    ...lessonB106.writing,
    ...lessonB106.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-06 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB106.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-06 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-06 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB106.id,
    taskId,
  };
}

describe("B1-06 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB106).toMatchObject({
      id: "b1-06",
      unitId: "b1-06",
      level: "B1",
      order: 1,
      titleDe: "Kultur und Kunst",
      titleAr: "الثقافة والفن",
    });
    expect("duration" in lessonB106).toBe(false);
    expect(lessonB106.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = LESSON_META.find((item) => item.id === "b1-06");
    expect(meta).toMatchObject({ id: "b1-06", unitId: "b1-06", level: "B1", order: 1, summary: lessonB106.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each with all-correct evidence", () => {
    expect(lessonB106.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["w1", "e7"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e6", "e9", "m2", "m4", "m6", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["q2", "q3", "w4"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q4", "q5", "e11", "e12", "e13"]);
    for (const item of lessonB106.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
    }
    expect(JSON.stringify(lessonB106.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|Heimweh\)/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB106.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").at(-1) ?? "";
        expect(evidence.exerciseIds, `${taskId} maps to a goal exercise`).toContain(exerciseId);
      }
    }
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, value] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(value.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(value.key);
      expect(new Set(exercise.options).size, `${id} unique`).toBe(exercise.options.length);
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, `${id} all keys`).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      });
    }
  });

  it("checks error-correction: one wrong span, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence.includes(exercise.wrongWord), `${id} span`).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correctWord).isCorrect, `${id} correct`).toBe(true);
      for (const option of expected.options.filter((item) => item !== expected.correctWord)) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} distractor ${option}`).toBe(false);
      }
    }
  });

  it("removes the false 'لا خطأ' promise from error-correction instructions", () => {
    for (const id of ["e5", "e9", "m4"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.instructionAr, `${id} instruction`).not.toContain("لا خطأ");
    }
  });

  it("checks transformation keys for ein + Adjektiv", () => {
    const w1 = task("w1");
    if (w1.type !== "transformation") throw new Error("w1 is not transformation");
    expect(evaluateExercise(w1, "Das ist ein schönes Bild.").isCorrect).toBe(true);
    expect(evaluateExercise(w1, "Das ist eine schöne Bild.").isCorrect).toBe(false);

    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(evaluateExercise(e7, "Das ist ein schönes Bild.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Das Bild ist schön.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(evaluateExercise(e4, ["Das", "ist", "ein", "wunderschönes", "Gemälde", "."]).isCorrect).toBe(true);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(false);

    const e12 = task("e12");
    if (e12.type !== "word-ordering") throw new Error("e12 is not word-ordering");
    expect(evaluateExercise(e12, ["Deutschland", "ist", "mein", "zweites", "Zuhause."]).isCorrect).toBe(true);
    expect(evaluateExercise(e12, ["Deutschland", "mein", "ist", "zweites", "Zuhause."]).isCorrect).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(
      evaluateExercise(m3, ["Mit", "einem", "guten", "Freund", "reist", "man", "gut", "."]).isCorrect,
    ).toBe(true);
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} correct pairs`).toBe(true);
      const swapped = [{ ...pairs[0], right: pairs[1].right }, { ...pairs[1], right: pairs[0].right }, ...pairs.slice(2)];
      expect(evaluateExercise(exercise, swapped).isCorrect, `${id} swapped`).toBe(false);
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b1-06", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b1-06", "l2", "q3", true)).toBe("listening-transcript:b1-06:l2:q3");
    expect(lessonB106.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1",
      "l2:q2",
      "l2:q3",
      "l3:q4",
      "l3:q5",
    ]);
  });

  it("keeps the culture note to a sourced fact and removes unsupported claims", () => {
    const note = lessonB106.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("UNESCO");
    expect(note).toContain("1999");
    expect(JSON.stringify(lessonB106)).not.toMatch(/Philharmonie|Kultur ist wichtig|مجاني أو مخفض/);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB106.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB106.id, [goalEvent("z1", "w1")])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB106.id, [goalEvent("z1", "w1"), goalEvent("z1", "e7")])).toBe(
      "evidenced",
    );
    expect(getGoalEvidenceStatus(goal("z1"), lessonB106.id, [goalEvent("z1", "w1", false), goalEvent("z1", "e7")])).toBe(
      "pending",
    );
    expect(getGoalEvidenceStatus(goal("z3"), lessonB106.id, [goalEvent("z3", "q2"), goalEvent("z3", "q3")])).toBe(
      "pending",
    );
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB106.id, [goalEvent("z3", "q2"), goalEvent("z3", "q3"), goalEvent("z3", "w4")]),
    ).toBe("evidenced");
  });
});

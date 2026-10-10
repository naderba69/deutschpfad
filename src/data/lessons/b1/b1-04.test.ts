import { describe, expect, it } from "vitest";

import { lessonB104 } from "@/data/lessons/b1/b1-04";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["werde", "wirst", "wird", "werden"], key: "werde" },
  r2: { options: ["wird", "wurde", "wirst", "werden"], key: "wird" },
  e1: { options: ["hätte", "habe", "hatte", "haben"], key: "hätte" },
  e2: { options: ["würde reisen", "werde reisen", "reise würde", "würde gereist"], key: "würde reisen" },
  e8: {
    options: ["هل يمكنكم التكرار؟ (تهذيب)", "هل تريدون التكرار؟", "لماذا تكررون؟", "متى تكررون؟"],
    key: "هل يمكنكم التكرار؟ (تهذيب)",
  },
  m1: { options: ["wäre", "bin", "war", "werde"], key: "wäre" },
  m2: {
    options: ["würde ... lesen", "werde ... lesen", "würde ... gelesen", "würde ... lese"],
    key: "würde ... lesen",
  },
  q1: {
    options: ["ein Haus kaufen und reisen", "eine Firma gründen", "ein Auto kaufen", "spenden"],
    key: "ein Haus kaufen und reisen",
  },
  q2: {
    options: ["eine Stiftung für Bildung", "eine Firma", "einen Verein", "eine Schule"],
    key: "eine Stiftung für Bildung",
  },
  q3: {
    options: ["ein Wochenende ohne Handy", "mehr arbeiten", "Urlaub machen", "sportlich werden"],
    key: "ein Wochenende ohne Handy",
  },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["ist"], options: [["ist", "sind", "bist"]] },
  e6: {
    correct: ["solltest", "Könnten", "wäre"],
    options: [
      ["solltest", "solltet", "sollte"],
      ["Könnten", "Könnt", "Kann"],
      ["wäre", "war", "wird"],
    ],
  },
  w2: {
    correct: ["hätte", "würde", "wäre", "würde"],
    options: [
      ["hätte", "wäre", "könnte"],
      ["würde", "wäre", "hätte"],
      ["wäre", "hätte", "könnte"],
      ["würde", "wäre", "war"],
    ],
  },
  m5: {
    correct: ["könnte", "wäre", "Könnten"],
    options: [
      ["könnte", "könnt", "könnten"],
      ["wäre", "war", "bin"],
      ["Könnten", "Könnt", "Kann"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "habe", correctWord: "hätte", options: ["hätte", "habe", "hatte", "hat"] },
  e9: { wrongWord: "gegangen", correctWord: "gehen", options: ["gehen", "gegangen", "geht", "ging"] },
  m4: { wrongWord: "getrunken", correctWord: "trinken", options: ["trinken", "getrunken", "trinkst", "trank"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "sein", right: "wäre" },
    { left: "haben", right: "hätte" },
    { left: "können", right: "könnte" },
    { left: "werden", right: "würde" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB104.review ?? []),
    ...lessonB104.practiceBank,
    ...lessonB104.miniTest,
    ...lessonB104.writing,
    ...lessonB104.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-04 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB104.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-04 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-04 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB104.id,
    taskId,
  };
}

describe("B1-04 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB104).toMatchObject({
      id: "b1-04",
      unitId: "b1-04",
      level: "B1",
      order: 1,
      titleDe: "Medien und Gesellschaft",
      titleAr: "الإعلام والمجتمع",
    });
    expect("duration" in lessonB104).toBe(false);
    expect(lessonB104.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = LESSON_META.find((item) => item.id === "b1-04");
    expect(meta).toMatchObject({ id: "b1-04", unitId: "b1-04", level: "B1", order: 1, summary: lessonB104.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, with no speaking claims", () => {
    expect(lessonB104.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["e1", "e5", "e7"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e2", "m2", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e3", "m1", "w2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q1", "q2", "q3"]);
    expect(goal("z4").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"]);
    expect(JSON.stringify(lessonB104.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|erzählen|Medien kritisch/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB104.lernziele) {
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

  it("checks error-correction: one wrong word, a correct option, and rejected distractors", () => {
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

  it("checks the transformation keys for würde and hätte", () => {
    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(evaluateExercise(e7, "Wenn ich Geld hätte, würde ich reisen.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Wenn ich Geld habe, würde ich reisen.").isCorrect).toBe(false);

    const w1 = task("w1");
    if (w1.type !== "transformation") throw new Error("w1 is not transformation");
    expect(evaluateExercise(w1, "Ich würde gern nach Deutschland reisen.").isCorrect).toBe(true);
    expect(evaluateExercise(w1, "Ich würde gern nach Deutschland gereist.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(evaluateExercise(e4, ["Ich", "würde", "gern", "nach", "Deutschland", "reisen", "."]).isCorrect).toBe(true);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(
      evaluateExercise(m3, ["Wenn", "ich", "Zeit", "hätte", ",", "würde", "ich", "lernen", "."]).isCorrect,
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
    expect(getListeningQuestionTaskId("b1-04", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b1-04", "l2", "q3", true)).toBe("listening-transcript:b1-04:l2:q3");
    expect(lessonB104.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1",
      "l1:q2",
      "l2:q3",
    ]);
  });

  it("keeps the polite-request culture note sourced and removes unsupported claims", () => {
    const text = JSON.stringify(lessonB104);
    expect(text).toContain("Könnten Sie mir helfen?");
    expect(text).not.toMatch(/تسعين بالمئة|أساس الأدب الألماني|في المطاعم|في المتاجر/);
    expect(text).not.toMatch(/كان ينبغي أن تشرب|كل أمنية تبدأ/);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB104.id, [])).toBe("pending");
    const z1Events = [goalEvent("z1", "e1"), goalEvent("z1", "e5"), goalEvent("z1", "e7")];
    expect(getGoalEvidenceStatus(goal("z1"), lessonB104.id, z1Events)).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB104.id, z1Events.slice(0, 2))).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB104.id, [goalEvent("z2", "e2", false)])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB104.id, [goalEvent("z2", "e2"), goalEvent("z2", "m2"), goalEvent("z2", "w1")]),
    ).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB104.id, [goalEvent("z4", "q1"), goalEvent("z4", "q2")])).toBe(
      "pending",
    );
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB104.id, [goalEvent("z4", "q1"), goalEvent("z4", "q2"), goalEvent("z4", "q3")]),
    ).toBe("evidenced");
  });
});

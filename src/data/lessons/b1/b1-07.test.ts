import { describe, expect, it } from "vitest";

import { lessonB107 } from "@/data/lessons/b1/b1-07";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["weil", "wenn", "ob", "dass"], key: "weil" },
  r2: { options: ["Wenn", "Weil", "Ob", "Dass"], key: "Wenn" },
  e1: { options: ["Als", "Wenn", "Während", "Bis"], key: "Als" },
  e2: { options: ["Wenn", "Als", "Während", "Bis"], key: "Wenn" },
  e8: { options: ["الانتخاب", "الحكومة", "القرار", "الرأي"], key: "الانتخاب" },
  m1: { options: ["Als", "Wenn", "Während", "Bis"], key: "Als" },
  m2: { options: ["Während", "Als", "Bis", "Nachdem"], key: "Während" },
  q1: {
    options: ["seitdem er in Deutschland wohnt", "seit der Mauerfall", "seit er zehn war", "seit kurzem"],
    key: "seitdem er in Deutschland wohnt",
  },
  q2: { options: ["die Programme lesen", "Werbung machen", "demonstrieren", "arbeiten"], key: "die Programme lesen" },
  q3: {
    options: ["nachdem sie die Programme gelesen hat", "vor der Wahl", "während des Wahlkampfs", "morgen"],
    key: "nachdem sie die Programme gelesen hat",
  },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["wird"], options: [["wird", "wurde", "wirst"]] },
  e6: {
    correct: ["Regierung", "Gesetz", "Wahl", "Bürger"],
    options: [
      ["Regierung", "Wahl", "Gesetz"],
      ["Regierung", "Wahl", "Gesetz"],
      ["Regierung", "Wahl", "Gesetz"],
      ["Bürger", "Politiker", "Gesetz"],
    ],
  },
  w2: {
    correct: ["Als", "Wenn", "Während"],
    options: [
      ["Als", "Nachdem", "Bevor"],
      ["Wenn", "Als", "Bevor"],
      ["Während", "Als", "Bevor"],
    ],
  },
  e11: {
    correct: ["Obwohl", "Trotzdem"],
    options: [
      ["Obwohl", "Trotzdem", "Weil", "Als"],
      ["Trotzdem", "Obwohl", "Deshalb", "Während"],
    ],
  },
  e13: { correct: ["weil"], options: [["weil", "wenn", "ob", "dass"]] },
  m5: {
    correct: ["Wenn", "Als", "Bevor"],
    options: [
      ["Wenn", "Als", "Bevor"],
      ["Wenn", "Als", "Bevor"],
      ["Wenn", "Als", "Bevor"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "Als", correctWord: "Wenn", options: ["Wenn", "Als", "Während", "Bis"] },
  e9: { wrongWord: "ich lese", correctWord: "lese ich", options: ["lese ich", "ich lese", "lesen ich", "ich lesen"] },
  m4: { wrongWord: "Wenn", correctWord: "Als", options: ["Als", "Wenn", "Während", "Bevor"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "während", right: "بينما" },
    { left: "bevor", right: "قبل أن" },
    { left: "nachdem", right: "بعد أن" },
    { left: "bis", right: "حتى" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB107.review ?? []),
    ...lessonB107.practiceBank,
    ...lessonB107.miniTest,
    ...lessonB107.writing,
    ...lessonB107.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-07 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB107.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-07 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-07 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB107.id,
    taskId,
  };
}

describe("B1-07 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB107).toMatchObject({
      id: "b1-07",
      unitId: "b1-07",
      level: "B1",
      order: 1,
      titleDe: "Politik und Gesellschaft",
      titleAr: "السياسة والمجتمع",
    });
    expect("duration" in lessonB107).toBe(false);
    expect(lessonB107.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = LESSON_META.find((item) => item.id === "b1-07");
    expect(meta).toMatchObject({ id: "b1-07", unitId: "b1-07", level: "B1", order: 1, summary: lessonB107.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB107.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l2:q2", "listening:l2:q3"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e7", "m1", "m3", "m5", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e13", "e14"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12", "w3"]);
    for (const item of lessonB107.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
    }
    expect(JSON.stringify(lessonB107.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB107.lernziele) {
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

  it("offers a correct word among the error-correction options (the no-error option is added by the interface)", () => {
    for (const id of ["e5", "e9", "m4"]) {
      const exercise = task(id) as unknown as { type: string; options: string[]; correctWord: string; isAlreadyCorrect?: boolean };
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      if (!exercise.isAlreadyCorrect) expect(exercise.options, id).toContain(exercise.correctWord);
    }
  });

  it("checks transformation keys for als, während, and obwohl", () => {
    const w1 = task("w1");
    if (w1.type !== "transformation") throw new Error("w1 is not transformation");
    expect(evaluateExercise(w1, "Als ich jung war, war alles anders.").isCorrect).toBe(true);
    expect(evaluateExercise(w1, "Als ich jung bin, war alles anders.").isCorrect).toBe(false);

    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(evaluateExercise(e7, "Während er arbeitet, koche ich.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Während er arbeitet, koche ich nicht.").isCorrect).toBe(false);

    const w3 = task("w3");
    if (w3.type !== "transformation") throw new Error("w3 is not transformation");
    expect(evaluateExercise(w3, "Obwohl es regnet, gehe ich spazieren.").isCorrect).toBe(true);
    expect(evaluateExercise(w3, "Obwohl es regnet, ich gehe spazieren.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(evaluateExercise(e4, ["Als", "ich", "jung", "war", ",", "lebte", "ich", "in", "Tunis", "."]).isCorrect).toBe(
      true,
    );

    const e12 = task("e12");
    if (e12.type !== "word-ordering") throw new Error("e12 is not word-ordering");
    expect(
      evaluateExercise(e12, ["Obwohl", "die", "Wahl", "wichtig", "ist,", "gehen", "viele", "nicht", "wählen."]).isCorrect,
    ).toBe(true);

    const e14 = task("e14");
    if (e14.type !== "word-ordering") throw new Error("e14 is not word-ordering");
    expect(evaluateExercise(e14, ["Da", "es", "regnet,", "bleiben", "wir", "zu", "Hause."]).isCorrect).toBe(true);
    expect(evaluateExercise(e14, ["Da", "regnet", "es,", "bleiben", "wir", "zu", "Hause."]).isCorrect).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(
      evaluateExercise(m3, ["Nachdem", "ich", "gegessen", "habe", ",", "gehe", "ich", "schlafen", "."]).isCorrect,
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
    expect(getListeningQuestionTaskId("b1-07", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b1-07", "l2", "q3", true)).toBe("listening-transcript:b1-07:l2:q3");
    expect(lessonB107.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1",
      "l2:q2",
      "l2:q3",
    ]);
  });

  it("keeps the culture note to a sourced fact and removes unsupported claims", () => {
    const note = lessonB107.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("Bundestag");
    expect(note).toContain("كل أربع سنوات");
    expect(JSON.stringify(lessonB107)).not.toMatch(/شعار شائع|يتعلمها الأطفال/);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z3"), lessonB107.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB107.id, [goalEvent("z3", "e13")])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB107.id, [goalEvent("z3", "e13"), goalEvent("z3", "e14")])).toBe(
      "evidenced",
    );
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB107.id, [
        goalEvent("z4", "e11"),
        goalEvent("z4", "e12", false),
        goalEvent("z4", "w3"),
      ]),
    ).toBe("pending");
  });
});

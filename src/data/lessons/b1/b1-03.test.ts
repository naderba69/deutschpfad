import { describe, expect, it } from "vitest";

import { lessonB103 } from "@/data/lessons/b1/b1-03";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<
  string,
  { options: string[]; key: string }
> = {
  e1: { options: ["wird", "wurde", "wirst", "werden"], key: "wird" },
  e2: { options: ["wurde", "wird", "wirst", "werden"], key: "wurde" },
  e8: {
    options: ["يقال أن...", "أقول أن...", "قالوا لي أن...", "يجب أن أقول..."],
    key: "يقال أن...",
  },
  m1: { options: ["wird", "wurde", "wirst", "werden"], key: "wird" },
  m2: { options: ["wurde", "wird", "wirst", "werden"], key: "wurde" },
  q1: {
    options: ["mehr Bäume", "mehr Blumen", "mehr Gemüse", "mehr Obst"],
    key: "mehr Bäume",
  },
  q2: {
    options: [
      "getrennt und recycelt",
      "verbrannt",
      "ins Meer geworfen",
      "vergraben",
    ],
    key: "getrennt und recycelt",
  },
  q3: {
    options: ["das Fahrrad", "das Flugzeug", "das Schiff", "der Zug"],
    key: "das Fahrrad",
  },
  q4: {
    options: [
      "weniger Plastik zu kaufen",
      "mehr Auto zu fahren",
      "weniger zu schlafen",
      "mehr Zucker zu essen",
    ],
    key: "weniger Plastik zu kaufen",
  },
};

const expectedFillBlanks: Record<
  string,
  { correct: string[]; options: string[][] }
> = {
  e6: {
    correct: ["Man", "wird"],
    options: [
      ["Man", "Wird", "Es"],
      ["wird", "wirst", "werden"],
    ],
  },
  w2: {
    correct: ["wird", "wurde"],
    options: [
      ["wird", "wurde"],
      ["wird", "wurde"],
    ],
  },
  m5: {
    correct: ["Man", "wird"],
    options: [
      ["Man", "Wird", "Der"],
      ["wird", "wirst", "man"],
    ],
  },
  e11: {
    correct: ["zu schützen"],
    options: [["zu schützen", "schützen", "schützten", "zu geschützt"]],
  },
};

const expectedErrorCorrections: Record<
  string,
  { wrongWord: string; correctWord: string; options: string[] }
> = {
  e5: {
    wrongWord: "bauen",
    correctWord: "gebaut",
    options: ["gebaut", "gebauen", "gebaute", "baut"],
  },
  e9: {
    wrongWord: "wird",
    correctWord: "werden",
    options: ["werden", "wird", "wurde", "wirst"],
  },
  m4: {
    wrongWord: "bauen",
    correctWord: "gebaut",
    options: ["gebaut", "bauen", "gebauten", "baut"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Umwelt", right: "البيئة" },
    { left: "der Müll", right: "النفايات" },
    { left: "recyceln", right: "يعيد التدوير" },
    { left: "der Klimawandel", right: "تغير المناخ" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB103.review ?? []),
    ...lessonB103.practiceBank,
    ...lessonB103.miniTest,
    ...lessonB103.writing,
    ...lessonB103.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-03 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB103.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-03 goal ${id} is missing`);
  return value;
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct = true,
): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!taskId)
    throw new Error(`B1-03 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB103.id,
    taskId,
  };
}

describe("B1-03 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB103).toMatchObject({
      id: "b1-03",
      unitId: "b1-03",
      level: "B1",
      order: 1,
      titleDe: "Umwelt und Klima",
      titleAr: "البيئة والمناخ",
    });
    expect("duration" in lessonB103).toBe(false);
    expect(lessonB103.summary).not.toMatch(
      /\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i,
    );

    const meta = LESSON_META.find((item) => item.id === "b1-03");
    expect(meta).toMatchObject({
      id: "b1-03",
      unitId: "b1-03",
      level: "B1",
      order: 1,
      summary: lessonB103.summary,
    });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("limits goals to evidenced performances and maps each goal to the intended exercises", () => {
    expect(lessonB103.lernziele.map(({ id }) => id)).toEqual([
      "z1",
      "z2",
      "z3",
      "z4",
    ]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3"]);
    expect(goal("z1").evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
    ]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e7", "m1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e6", "m5"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12"]);
    expect(goal("z4").evidence?.taskIds).toEqual([
      "practice:b1-03:e11",
      "practice:b1-03:e12",
    ]);
    expect(JSON.stringify(lessonB103.lernziele)).not.toMatch(
      /Goethe|CEFR|erzählen|berichten|sprechen/,
    );
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB103.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").at(-1) ?? "";
        expect(
          evidence.exerciseIds,
          `${taskId} maps to a goal exercise`,
        ).toContain(exerciseId);
      }
    }
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, value] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice")
        throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(value.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(
        value.key,
      );
      expect(new Set(exercise.options).size, `${id} unique`).toBe(
        exercise.options.length,
      );
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank")
        throw new Error(`${id} is not fill-blank`);
      expect(
        exercise.blanks.map(({ correct }) => correct),
        `${id} keys`,
      ).toEqual(expected.correct);
      expect(
        exercise.blanks.map(({ options }) => options),
        `${id} options`,
      ).toEqual(expected.options);
      expect(
        evaluateExercise(exercise, expected.correct).isCorrect,
        `${id} all keys`,
      ).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(
            evaluateExercise(exercise, answers).isCorrect,
            `${id} blank ${index + 1}: ${option}`,
          ).toBe(option === expected.correct[index]);
        }
      });
    }
  });

  it("checks error-correction: one wrong word, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction")
        throw new Error(`${id} is not error-correction`);
      expect(
        exercise.wrongSentence.includes(exercise.wrongWord),
        `${id} span`,
      ).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(
        expected.correctWord,
      );
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(
        evaluateExercise(exercise, expected.correctWord).isCorrect,
        `${id} correct`,
      ).toBe(true);
      for (const option of expected.options.filter(
        (item) => item !== expected.correctWord,
      )) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} distractor ${option}`,
        ).toBe(false);
      }
    }
  });

  it("does not offer a 'no error' option or stative ist/war/gebaut werden distractors", () => {
    for (const id of ["e5", "e9", "m4"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction")
        throw new Error(`${id} is not error-correction`);
      expect(exercise.instructionAr, `${id} instruction`).not.toContain(
        "لا خطأ",
      );
    }
    for (const id of ["e1", "e2", "m1", "m2", "e6", "m5", "e5", "e9", "m4"]) {
      const exercise = task(id);
      const options =
        exercise.type === "fill-blank"
          ? exercise.blanks.flatMap((b) => b.options ?? [])
          : exercise.type === "multiple-choice" ||
              exercise.type === "error-correction"
            ? exercise.options
            : [];
      expect(options, `${id} stative distractors`).not.toEqual(
        expect.arrayContaining(["ist", "war"]),
      );
      expect(options, `${id} gebaut werden`).not.toContain("gebaut werden");
    }
  });

  it("checks the Passiv forms and the 'von + Dativ' correction", () => {
    const e7 = task("e7");
    if (e7.type !== "transformation")
      throw new Error("e7 is not transformation");
    expect(
      evaluateExercise(e7, "Das Haus wird von den Arbeitern gebaut.").isCorrect,
    ).toBe(true);
    expect(evaluateExercise(e7, "Das Haus wird gebaut.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Das Haus baut die Arbeiter.").isCorrect).toBe(
      false,
    );

    const w1 = task("w1");
    if (w1.type !== "transformation")
      throw new Error("w1 is not transformation");
    expect(evaluateExercise(w1, "Das Haus wird gebaut.").isCorrect).toBe(true);
    expect(evaluateExercise(w1, "Das Haus wurde gebaut.").isCorrect).toBe(
      false,
    );

    expect(lessonB103.fehlerUndTipps.mistakes[0].right).toBe(
      "Das Haus wird gebaut.",
    );
    const passivTable = JSON.stringify(lessonB103);
    expect(passivTable).toContain("von die Arbeiter");
    expect(passivTable).toContain("Das Haus wird von den Arbeitern gebaut.");
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(
      evaluateExercise(e4, ["Der", "Müll", "wird", "recycelt", "."]).isCorrect,
    ).toBe(true);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(false);

    const e12 = task("e12");
    if (e12.type !== "word-ordering")
      throw new Error("e12 is not word-ordering");
    expect(
      evaluateExercise(e12, [
        "Ich",
        "versuche,",
        "das",
        "Fahrrad",
        "zu",
        "nehmen.",
      ]).isCorrect,
    ).toBe(true);
    expect(
      evaluateExercise(e12, [
        "Ich",
        "versuche,",
        "zu",
        "das",
        "Fahrrad",
        "nehmen.",
      ]).isCorrect,
    ).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(
      evaluateExercise(m3, ["Die", "Wälder", "werden", "zerstört", "."])
        .isCorrect,
    ).toBe(true);
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching")
        throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} pairs`).toEqual(pairs);
      expect(
        evaluateExercise(exercise, pairs).isCorrect,
        `${id} correct pairs`,
      ).toBe(true);
      const swapped = [
        { ...pairs[0], right: pairs[1].right },
        { ...pairs[1], right: pairs[0].right },
        ...pairs.slice(2),
      ];
      expect(
        evaluateExercise(exercise, swapped).isCorrect,
        `${id} swapped`,
      ).toBe(false);
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b1-03", "l1", "q1", false)).toBe(
      "listening:l1:q1",
    );
    expect(getListeningQuestionTaskId("b1-03", "l2", "q3", true)).toBe(
      "listening-transcript:b1-03:l2:q3",
    );
    expect(
      lessonB103.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`),
    ).toEqual(["l1:q1", "l1:q2", "l2:q3", "l3:q4"]);
  });

  it("removes the false table claim and the wrong pronunciation note", () => {
    const text = JSON.stringify(lessonB103);
    expect(text).not.toMatch(/الجدول التفاعلي|جدول الأفعال الشاذة/);
    expect(text).not.toContain("cy = سي");
    expect(text).toContain("مضارع: wird/werden");
    expect(text).toContain("ماضٍ مركب (Perfekt)");
    expect(text).toContain("Kreislaufwirtschaftsgesetz");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB103.id, [])).toBe(
      "pending",
    );
    const z1Events = [
      goalEvent("z1", "q1"),
      goalEvent("z1", "q2"),
      goalEvent("z1", "q3"),
    ];
    expect(getGoalEvidenceStatus(goal("z1"), lessonB103.id, z1Events)).toBe(
      "evidenced",
    );
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB103.id, z1Events.slice(0, 2)),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB103.id, [
        goalEvent("z2", "e1"),
        goalEvent("z2", "e7"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB103.id, [
        goalEvent("z2", "e1"),
        goalEvent("z2", "e7"),
        goalEvent("z2", "m1"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB103.id, [
        goalEvent("z3", "e6", false),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB103.id, [
        goalEvent("z3", "e6"),
        goalEvent("z3", "m5"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB103.id, [
        goalEvent("z4", "e11"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB103.id, [
        goalEvent("z4", "e11"),
        goalEvent("z4", "e12"),
      ]),
    ).toBe("evidenced");
  });
});

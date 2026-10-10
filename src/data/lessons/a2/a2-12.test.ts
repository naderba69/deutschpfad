import { describe, expect, it } from "vitest";

import { lessonA212 } from "@/data/lessons/a2/a2-12";
import { LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["weil", "dass", "wenn", "ob"], key: "weil" },
  r2: { options: ["mich", "dich", "sich", "uns"], key: "mich" },
  e1: { options: ["aber", "deshalb", "denn", "dann"], key: "aber" },
  e2: { options: ["deshalb", "aber", "und", "oder"], key: "deshalb" },
  e8: { options: ["أولاً أتعلم ثم أشاهد التلفاز", "أتعلم وأنا أشاهد التلفاز", "لا أتعلم بل أشاهد التلفاز", "أشاهد التلفاز ثم أتعلم"], key: "أولاً أتعلم ثم أشاهد التلفاز" },
  m1: { options: ["denn", "deshalb", "trotzdem", "aber"], key: "denn" },
  m2: { options: ["trotzdem", "deshalb", "und", "denn"], key: "trotzdem" },
  q1: { options: ["wegen der Prüfung", "wegen des Wetters", "wegen der Arbeit", "wegen des Verkehrs"], key: "wegen der Prüfung" },
  q2: { options: ["feiern", "lernen", "arbeiten", "schlafen"], key: "feiern" },
  q3: { options: ["Der Bus kam nicht", "Sie hat verschlafen", "Sie hatte einen Termin", "Sie war krank"], key: "Der Bus kam nicht" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["schneller"], options: [["schneller", "schnell", "am schnellsten"]] },
  e6: {
    correct: ["glücklich", "traurig", "gestresst"],
    options: [
      ["glücklich", "traurig", "gestresst"],
      ["glücklich", "traurig", "gestresst"],
      ["glücklich", "traurig", "gestresst"],
    ],
  },
  w2: {
    correct: ["aber", "deshalb", "trotzdem", "dann"],
    options: [
      ["aber", "deshalb", "dann"],
      ["deshalb", "trotzdem"],
      ["trotzdem", "dann"],
      ["dann", "deshalb"],
    ],
  },
  m5: {
    correct: ["deshalb", "trotzdem", "dann"],
    options: [
      ["deshalb", "trotzdem"],
      ["trotzdem", "deshalb"],
      ["dann", "deshalb", "trotzdem"],
    ],
  },
};

const expectedErrorCorrections: Record<
  string,
  { sentence: string; wrongWord: string; correctWord: string; options: string[]; alreadyCorrect: boolean }
> = {
  e5: {
    sentence: "Es regnet, deshalb ich bleibe zu Hause.",
    wrongWord: "ich bleibe",
    correctWord: "bleibe ich",
    options: ["bleibe ich", "ich bleibe", "bleiben ich", "ich bleiben"],
    alreadyCorrect: false,
  },
  m4: {
    sentence: "Es ist kalt, trotzdem ich gehe spazieren.",
    wrongWord: "ich gehe",
    correctWord: "gehe ich",
    options: ["gehe ich", "ich gehe", "gehen ich", "ich gehen"],
    alreadyCorrect: false,
  },
  e9: {
    sentence: "Ich bleibe zu Hause, denn es regnet.",
    wrongWord: "denn es regnet",
    correctWord: "denn es regnet",
    options: ["denn es regnet", "denn regnet es", "denn es regnet doch", "weil es regnet es"],
    alreadyCorrect: true,
  },
};

const expectedTransformations: Record<string, { acceptedAnswers: string[]; sampleAnswer: string }> = {
  w1: {
    acceptedAnswers: ["Es regnet, deshalb bleibe ich zu Hause", "Es regnet, deshalb bleibe ich zu Hause."],
    sampleAnswer: "Es regnet, deshalb bleibe ich zu Hause.",
  },
  e7: {
    acceptedAnswers: ["Es ist kalt, trotzdem gehe ich spazieren", "Es ist kalt, trotzdem gehe ich spazieren."],
    sampleAnswer: "Es ist kalt, trotzdem gehe ich spazieren.",
  },
  w4: {
    acceptedAnswers: ["Es tut mir leid, ich hatte einen anstrengenden Tag, deshalb habe ich dir nicht geschrieben."],
    sampleAnswer: "Es tut mir leid, ich hatte einen anstrengenden Tag, deshalb habe ich dir nicht geschrieben.",
  },
  w5: {
    acceptedAnswers: ["Die Idee ist gut, aber ich sehe das anders.", "Die Idee ist gut, aber ich sehe es anders."],
    sampleAnswer: "Die Idee ist gut, aber ich sehe das anders.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonA212.review ?? []),
    ...lessonA212.practiceBank,
    ...lessonA212.miniTest,
    ...lessonA212.writing,
    ...lessonA212.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-12 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonA212.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-12 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true, taskIdOverride?: string, lessonId = lessonA212.id): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-12 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-12 lesson content audit", () => {
  it("keeps identity/order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonA212).toMatchObject({
      id: "a2-12",
      unitId: "a2-12",
      level: "A2",
      order: 1,
      titleDe: "Zwischenmenschliches",
      titleAr: "العلاقات بين الناس",
    });
    expect("duration" in lessonA212).toBe(false);
    expect(lessonA212.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|خاتمة مستوى A2/i);
    expect(lessonA212.summary).toContain("A2-13");
    expect(lessonA212.reading).toBeUndefined();

    const meta = LESSON_META.find((item) => item.id === "a2-12");
    expect(meta).toMatchObject({
      id: "a2-12",
      unitId: "a2-12",
      level: "A2",
      order: 1,
      titleDe: "Zwischenmenschliches",
      titleAr: "العلاقات بين الناس",
      summary: lessonA212.summary,
      keyWords: ["das Gefühl", "glücklich", "gestresst", "der Streit", "aber"],
    });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("limits goals to evidenced, selection/writing performances and removes unsupported claims", () => {
    expect(lessonA212.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence).toMatchObject({
      exerciseIds: ["e6"],
      taskIds: ["practice:a2-12:e6"],
      completion: "all-correct",
    });
    expect(goal("z1").evidence?.labelAr).toMatch(/فتح الدرس أو عرض الكلمات وحده ليس دليلاً/);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "w1", "w2"]);
    expect(goal("z2").evidence?.taskIds).toEqual([
      "practice:a2-12:e1",
      "flow-practice:a2-12:e1",
      "practice:a2-12:e2",
      "flow-practice:a2-12:e2",
      "writing:a2-12:w1",
      "writing:a2-12:w2",
    ]);
    expect(goal("z3").evidence).toMatchObject({ exerciseIds: ["w4"], taskIds: ["writing:a2-12:w4"], completion: "all-correct" });
    expect(goal("z4").evidence).toMatchObject({ exerciseIds: ["w5"], taskIds: ["writing:a2-12:w5"], completion: "all-correct" });

    const mapped = lessonA212.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat();
    for (const forbidden of ["int-a2-12-1", "med-a2-12-1", "p1"]) {
      expect(mapped).not.toContain(forbidden);
    }
    expect(JSON.stringify(lessonA212)).not.toContain("sondern");
    expect(lessonA212.lernziele.every((goalItem) => !/Kompromiss|Konflikte höflich ansprechen/.test(goalItem.de))).toBe(true);
    expect(lessonA212.practiceBank.findIndex(({ id }) => id === "e6")).toBeGreaterThanOrEqual(4);
  });

  it("audits every multiple-choice key and each distractor", () => {
    const mcqIds = allTasks()
      .filter((item) => item.type === "multiple-choice")
      .map(({ id }) => id)
      .sort();
    expect(Object.keys(expectedMultipleChoice).sort()).toEqual(mcqIds);
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      expect(new Set(exercise.options).size, `${id} unique options`).toBe(exercise.options.length);
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    expect(Object.keys(expectedFillBlanks).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "fill-blank")
        .map(({ id }) => id)
        .sort(),
    );
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

  it("checks every error-correction span, distractor, and the no-error path", () => {
    expect(Object.keys(expectedErrorCorrections).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "error-correction")
        .map(({ id }) => id)
        .sort(),
    );
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} sentence`).toBe(expected.sentence);
      expect(exercise.wrongSentence.includes(exercise.wrongWord), `${id} highlight exists`).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect ?? false, `${id} already-correct flag`).toBe(expected.alreadyCorrect);

      const key = expected.alreadyCorrect ? NO_ERROR_OPTION : expected.correctWord;
      expect(evaluateExercise(exercise, key).isCorrect, `${id} key`).toBe(true);
      for (const option of exercise.options) {
        const isKey = !expected.alreadyCorrect && option === expected.correctWord;
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${option}`).toBe(isKey);
      }
      expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect, `${id} no-error`).toBe(expected.alreadyCorrect);
    }
  });

  it("checks the two word-order tasks against their unique target sentences", () => {
    const e4 = task("e4");
    const m3 = task("m3");
    if (e4.type !== "word-ordering" || m3.type !== "word-ordering") throw new Error("word-ordering expected");
    expect(e4.tokens).toEqual(["Es", "regnet", "deshalb", "bleibe", "ich", ","]);
    expect(e4.correctSentence).toBe("Es regnet, deshalb bleibe ich.");
    expect(m3.tokens).toEqual(["müde", "aber", "Ich", "bin", "glücklich", ","]);
    expect(m3.correctSentence).toBe("Ich bin müde, aber glücklich.");
    for (const exercise of [e4, m3]) {
      expect([...exercise.tokens].sort()).toEqual([...exercise.tokens].sort());
      expect(evaluateExercise(exercise, exercise.correctSentence.split(" ")).isCorrect, exercise.id).toBe(true);
      expect(evaluateExercise(exercise, [...exercise.correctSentence.split(" ")].reverse()).isCorrect, `${exercise.id} reversed`).toBe(false);
    }
  });

  it("validates the accepted answers of every transformation and rejects the wrong word order", () => {
    for (const [id, expected] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(expected.acceptedAnswers);
      expect(exercise.sampleAnswer, `${id} sample`).toBe(expected.sampleAnswer);
      expect(new Set(exercise.acceptedAnswers.map(normalizeText)).size, `${id} distinct after normalization`).toBe(
        id === "w1" || id === "e7" ? 1 : exercise.acceptedAnswers.length,
      );
      for (const answer of expected.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
    }
    expect(evaluateExercise(task("w4"), "Es tut mir leid, ich hatte einen anstrengenden Tag, deshalb ich habe dir nicht geschrieben.").isCorrect).toBe(false);
    expect(evaluateExercise(task("w5"), "Die Idee ist gut, aber sehe ich das anders.").isCorrect).toBe(false);
    expect(evaluateExercise(task("w1"), "Es regnet, deshalb ich bleibe zu Hause.").isCorrect).toBe(false);
  });

  it("checks dictation keys without treating them as speech assessment", () => {
    const w3 = task("w3");
    const e10 = task("e10");
    if (w3.type !== "dictation" || e10.type !== "dictation") throw new Error("dictation expected");
    expect(w3.audioText).toBe("Es regnet, trotzdem gehe ich spazieren.");
    expect(e10.audioText).toBe("Erst lerne ich, dann sehe ich fern.");
  });

  it("keeps the theory claims accurate: Vorfeld rule, obwohl as extension, no unsourced superlatives", () => {
    const t1 = lessonA212.theory[0]!;
    const t2 = lessonA212.theory[1]!;
    expect(t1.whyAr).toContain("Vorfeld");
    expect(t1.whyAr).not.toContain("معنى الجملة السابقة");
    expect(t1.commonMistakes.map((item) => item.right)).toContain("Ich bin müde, aber ich bin glücklich.");
    expect(t1.commonMistakes.map((item) => item.right)).toContain("Ich bleibe, denn es regnet.");
    expect(t2.whyAr).toContain("توسعة");
    expect(t2.whyAr).not.toContain("من أكثر أدوات الربط استخداماً في B1");
    expect(JSON.stringify(lessonA212.fehlerUndTipps)).not.toContain("كلاهما صحيح");
  });

  it("derives goal states only from exact correct task performances", () => {
    const idsByGoal: Record<string, string[]> = {
      z1: ["e6"],
      z2: ["e1", "e2", "w1", "w2"],
      z3: ["w4"],
      z4: ["w5"],
    };
    for (const [goalId, exerciseIds] of Object.entries(idsByGoal)) {
      const allCorrect = exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId));
      expect(getGoalEvidenceStatus(goal(goalId), lessonA212.id, allCorrect), `${goalId} all correct`).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal(goalId), lessonA212.id, allCorrect.slice(0, -1)), `${goalId} missing`).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA212.id, [
          ...allCorrect.slice(0, -1),
          goalEvent(goalId, exerciseIds[exerciseIds.length - 1]!, false),
        ]),
        `${goalId} last wrong`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA212.id, allCorrect.map((event) => ({ ...event, lessonId: "a2-11" }) as AnalyticsEvent)),
        `${goalId} wrong lesson`,
      ).toBe("pending");
    }
    // Opening/viewing the lesson produces no exercise-result event, so the goal stays pending.
    expect(getGoalEvidenceStatus(goal("z1"), lessonA212.id, [])).toBe("pending");
    // The practice-only task for e6 must not be satisfied by a flow-practice id.
    expect(getGoalEvidenceStatus(goal("z1"), lessonA212.id, [goalEvent("z1", "e6", true, "flow-practice:a2-12:e6")])).toBe("pending");
  });
});

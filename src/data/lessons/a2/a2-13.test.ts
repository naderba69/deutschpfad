import { describe, expect, it } from "vitest";

import { lessonA213 } from "@/data/lessons/a2/a2-13";
import { LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["bin", "habe", "war", "hatte"], key: "bin" },
  e1: { options: ["sind", "haben", "waren", "hatten"], key: "sind" },
  e3: { options: ["schneller", "schnell", "am schnellsten", "schnellere"], key: "schneller" },
  m1: { options: ["sind", "haben", "waren", "hatten"], key: "sind" },
  m3: { options: ["weil", "und", "deshalb", "obwohl"], key: "weil" },
  m5: { options: ["freuen", "freut", "freust", "freue"], key: "freuen" },
  q1: { options: ["Er ist krank und kommt nicht.", "Er kommt später.", "Er sucht Herrn Weber.", "Er will Urlaub nehmen."], key: "Er ist krank und kommt nicht." },
  q2: { options: ["drei Tage zu Hause bleiben", "sofort arbeiten", "am Freitag anrufen", "ins Büro kommen"], key: "drei Tage zu Hause bleiben" },
  q3: { options: ["der Dativ", "das Perfekt", "die Aussprache", "die Zahlen"], key: "der Dativ" },
  q4: { options: ["jeden Abend zwei Stunden", "einmal pro Woche", "nur am Wochenende", "drei Stunden am Morgen"], key: "jeden Abend zwei Stunden" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r2: {
    correct: ["dem", "der"],
    options: [
      ["dem", "den", "der", "des"],
      ["der", "die", "dem", "den"],
    ],
  },
  e2: {
    correct: ["dem", "die"],
    options: [
      ["dem", "den", "der", "das"],
      ["die", "der", "dem", "den"],
    ],
  },
  e5: {
    correct: ["war", "hatte"],
    options: [
      ["war", "warst", "waren", "wart"],
      ["hatte", "hattest", "hatten", "hattet"],
    ],
  },
  w2: {
    correct: ["war", "bin", "weil", "meinem"],
    options: [
      ["war", "bin", "habe", "hatte"],
      ["bin", "habe", "war", "wurde"],
      ["weil", "denn", "dass", "wenn"],
      ["meinem", "meinen", "mein", "meines"],
    ],
  },
  m2: {
    correct: ["mir", "der"],
    options: [
      ["mir", "mich", "ich", "meiner"],
      ["der", "die", "den", "das"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { sentence: string; wrongWord: string; correctWord: string; options: string[]; alreadyCorrect: boolean }> = {
  r3: {
    sentence: "Ich stelle die Flasche auf dem Tisch.",
    wrongWord: "dem",
    correctWord: "den",
    options: ["den", "dem", "der", "das"],
    alreadyCorrect: false,
  },
  e6: {
    sentence: "Ich habe gestern nach Berlin gefahren.",
    wrongWord: "habe",
    correctWord: "bin",
    options: ["bin", "habe", "war", "wurde"],
    alreadyCorrect: false,
  },
  e7: {
    sentence: "Ich helfe meinen Bruder bei den Hausaufgaben.",
    wrongWord: "meinen",
    correctWord: "meinem",
    options: ["meinem", "meinen", "meiner", "meines"],
    alreadyCorrect: false,
  },
  e8: {
    sentence: "Ich glaube, dass er kommt heute nicht.",
    wrongWord: "kommt heute nicht",
    correctWord: "heute nicht kommt",
    options: ["heute nicht kommt", "kommt heute nicht", "nicht heute kommt", "kommt nicht heute"],
    alreadyCorrect: false,
  },
  e9: {
    sentence: "Ich freue mich auf das Wochenende.",
    wrongWord: "freue mich",
    correctWord: "freue mich",
    options: ["freue mich", "freut mich", "freue mir", "freue"],
    alreadyCorrect: true,
  },
};

const expectedTransformations: Record<string, { acceptedAnswers: string[]; sampleAnswer: string }> = {
  w1: {
    acceptedAnswers: ["Gestern habe ich bis 18 Uhr gearbeitet.", "Gestern habe ich bis achtzehn Uhr gearbeitet."],
    sampleAnswer: "Gestern habe ich bis 18 Uhr gearbeitet.",
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e10: [
    { left: "Ich bin nach Köln geflogen.", right: "الماضي التام مع sein" },
    { left: "Ich helfe meinem Nachbarn.", right: "حالة الجر Dativ" },
    { left: "Ich lerne, weil ich die Prüfung brauche.", right: "جملة ثانوية بـ weil" },
    { left: "Der Zug ist schneller als der Bus.", right: "المقارنة بـ als" },
  ],
  e11: [
    { left: "Das Auto wird repariert.", right: "المبني للمجهول (Passiv)" },
    { left: "Das ist der Bruder meines Freundes.", right: "المضاف إليه بحالة الإضافة (Genitiv)" },
    { left: "Ich hätte gern einen Kaffee.", right: "تمنٍّ مهذّب (Konjunktiv II)" },
    { left: "Das ist mein Bruder, der in Bonn wohnt.", right: "جملة موصولة (Relativsatz)" },
    { left: "Ich arbeitete gestern lange.", right: "الماضي البسيط في الكتابة (Präteritum)" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonA213.review ?? []),
    ...lessonA213.practiceBank,
    ...lessonA213.miniTest,
    ...lessonA213.writing,
    ...lessonA213.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-13 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonA213.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-13 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true, taskIdOverride?: string, lessonId = lessonA213.id): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-13 ${goalId} has no taskId for ${exerciseId}`);
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

describe("A2-13 lesson content audit", () => {
  it("keeps identity/order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonA213).toMatchObject({
      id: "a2-13",
      unitId: "a2-13",
      level: "A2",
      order: 1,
      titleDe: "A2 kompakt — die Brücke nach B1",
      titleAr: "A2 الشاملة — الجسر إلى B1",
    });
    expect("duration" in lessonA213).toBe(false);
    expect(lessonA213.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);
    expect(lessonA213.reading).toBeUndefined();

    const meta = LESSON_META.find((item) => item.id === "a2-13");
    expect(meta).toMatchObject({
      id: "a2-13",
      unitId: "a2-13",
      level: "A2",
      order: 1,
      titleDe: "A2 kompakt — die Brücke nach B1",
      titleAr: "A2 الشاملة — الجسر إلى B1",
      summary: lessonA213.summary,
      keyWords: ["die Brücke", "zusammenfassen", "bestehen", "der Fortschritt", "die Stufe"],
    });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("limits goals to evidenced performances; z4 is recognition of B1 expansions, not readiness", () => {
    expect(lessonA213.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence).toMatchObject({ exerciseIds: ["w1", "w2"], completion: "all-correct" });
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e5", "e6"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e4", "e8", "m3"]);
    expect(goal("z3").evidence?.taskIds).toContain("mini-test:a2-13:m3");
    expect(goal("z4").evidence).toMatchObject({ exerciseIds: ["e11"], taskIds: ["practice:a2-13:e11"], completion: "all-correct" });
    expect(goal("z4").de).not.toMatch(/bereit/);
    expect(JSON.stringify(lessonA213.lernziele)).not.toMatch(/B1-Grammatik|bereit für/);

    const mapped = lessonA213.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat();
    for (const forbidden of ["int-a2-13-1", "med-a2-13-1", "p1"]) {
      expect(mapped).not.toContain(forbidden);
    }
    expect(lessonA213.practiceBank.findIndex(({ id }) => id === "e11")).toBeGreaterThanOrEqual(4);
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
      expect(new Set(exercise.options).size, `${id} unique`).toBe(exercise.options.length);
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
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(option === expected.correct[index]);
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
      expect(exercise.wrongSentence.includes(exercise.wrongWord), `${id} span`).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect ?? false, `${id} flag`).toBe(expected.alreadyCorrect);

      const key = expected.alreadyCorrect ? NO_ERROR_OPTION : expected.correctWord;
      expect(evaluateExercise(exercise, key).isCorrect, `${id} key`).toBe(true);
      for (const option of exercise.options) {
        const isKey = !expected.alreadyCorrect && option === expected.correctWord;
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${option}`).toBe(isKey);
      }
      expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect, `${id} no-error`).toBe(expected.alreadyCorrect);
    }
  });

  it("checks both word-order tasks against their unique target sentences", () => {
    const e4 = task("e4");
    const m4 = task("m4");
    if (e4.type !== "word-ordering" || m4.type !== "word-ordering") throw new Error("word-ordering expected");
    expect(e4.correctSentence).toBe("Ich bleibe zu Hause, weil ich Fieber habe.");
    expect(m4.correctSentence).toBe("Ich bin heute zum Arzt gegangen.");
    for (const exercise of [e4, m4]) {
      expect(evaluateExercise(exercise, exercise.correctSentence.split(" ")).isCorrect, exercise.id).toBe(true);
      expect(evaluateExercise(exercise, [...exercise.correctSentence.split(" ")].reverse()).isCorrect, `${exercise.id} reversed`).toBe(false);
    }
  });

  it("validates matching pairs exactly, including the new B1-expansion recognition task", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} pairs`).toEqual(pairs);
      expect(new Set(pairs.map(({ right }) => right)).size, `${id} unique right`).toBe(pairs.length);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} all`).toBe(true);
      const oneWrong = pairs.map((pair, index) => (index === 0 ? { ...pair, right: pairs[1]?.right ?? "" } : pair));
      expect(evaluateExercise(exercise, oneWrong).isCorrect, `${id} mismatch`).toBe(false);
    }
  });

  it("validates the accepted answer of the Perfekt transformation and rejects a misplaced verb", () => {
    for (const [id, expected] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers).toEqual(expected.acceptedAnswers);
      expect(exercise.sampleAnswer).toBe(expected.sampleAnswer);
      for (const answer of expected.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, answer).toBe(true);
      }
    }
    expect(evaluateExercise(task("w1"), "Gestern ich habe bis 18 Uhr gearbeitet.").isCorrect).toBe(false);
  });

  it("keeps theory claims sourced and narrow: §5 EntgFG, §30/§9 AufenthG, §10 StAG, no unsourced superlatives", () => {
    const t1 = lessonA213.theory[0]!;
    const t2 = lessonA213.theory[1]!;
    const t3 = lessonA213.theory[2]!;
    expect(JSON.stringify(t1.eselsbruecke)).not.toContain("PMW");
    expect(t1.explanationAr).toContain("أدوات الربط (وobwohl توسعةً)");
    expect(t2.relatedRuleComparison?.content).toContain("§ 5 EntgFG");
    expect(t2.relatedRuleComparison?.content).toContain("unverzüglich");
    expect(t2.relatedRuleComparison?.content).not.toMatch(/قبل بداية الدوام هاتفياً|بعض العقود تشترطها/);
    expect(t3.whyAr).not.toContain("يخفّض الحمل المعرفي");
    const culture = lessonA213.fehlerUndTipps.culturalNote.content;
    expect(culture).toContain("§ 30 AufenthG");
    expect(culture).toContain("§ 10 StAG");
    expect(culture).not.toMatch(/Goethe-Zertifikat A2|Start Deutsch 2/);
    expect(JSON.stringify(lessonA213)).not.toMatch(/أكبر فارق/);
  });

  it("removes the ambiguous m3 distractor and fixes the Prüfung transliteration", () => {
    const m3 = task("m3");
    if (m3.type !== "multiple-choice") throw new Error("m3 is not multiple-choice");
    expect(m3.options).not.toContain("denn ich");
    expect(lessonA213.pronunciation.items.find(({ de }) => de === "die Prüfung")?.note).not.toMatch(/بْرُوي/);
  });

  it("derives goal states only from exact correct task performances", () => {
    const idsByGoal: Record<string, string[]> = {
      z1: ["w1", "w2"],
      z2: ["e1", "e5", "e6"],
      z3: ["e4", "e8", "m3"],
      z4: ["e11"],
    };
    for (const [goalId, exerciseIds] of Object.entries(idsByGoal)) {
      const allCorrect = exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId));
      expect(getGoalEvidenceStatus(goal(goalId), lessonA213.id, allCorrect), `${goalId} all`).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal(goalId), lessonA213.id, allCorrect.slice(0, -1)), `${goalId} missing`).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA213.id, [...allCorrect.slice(0, -1), goalEvent(goalId, exerciseIds[exerciseIds.length - 1]!, false)]),
        `${goalId} last wrong`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA213.id, allCorrect.map((event) => ({ ...event, lessonId: "a2-12" }) as AnalyticsEvent)),
        `${goalId} wrong lesson`,
      ).toBe("pending");
    }
    // A mini-test id must not satisfy the practice-only evidence of z4.
    expect(getGoalEvidenceStatus(goal("z4"), lessonA213.id, [goalEvent("z4", "e11", true, "mini-test:a2-13:e11")])).toBe("pending");
    // z3 accepts the mini-test id for m3 only when it is the exact mini-test task.
    expect(getGoalEvidenceStatus(goal("z3"), lessonA213.id, [goalEvent("z3", "m3", true, "flow-mini-test:a2-13:m3")])).toBe("pending");
  });
});

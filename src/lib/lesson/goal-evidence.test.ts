import {describe, expect, it} from "vitest";

import {lessonA104} from "@/data/lessons/a1/a1-04";
import {lessonA105} from "@/data/lessons/a1/a1-05";
import {lessonA106} from "@/data/lessons/a1/a1-06";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {evaluateFillBlank, evaluateMatching, evaluateMcq, evaluateOrdering, evaluateTransformation} from "@/lib/lesson/exercise-engine";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Lernziel} from "@/types/lesson";

const goal: Lernziel = {
  id: "z1",
  de: "Ich kann Raumwörter zuordnen.",
  ar: "أطابق أسماء الغرف بمعانيها.",
  evidence: {
    exerciseIds: ["e3"],
    labelAr: "صل أسماء الغرف بمعانيها.",
    completion: "any-correct",
  },
};

function exerciseResult(
  exerciseId: string,
  correct: boolean,
  lessonId = "a1-04",
  taskId = `practice:${lessonId}:${exerciseId}`,
): AnalyticsEvent {
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: "matching",
    correct,
    points: correct ? 5 : 0,
    lessonId,
    taskId,
  };
}

describe("lesson goal evidence", () => {
  it("does not count opening or an incorrect attempt as evidence", () => {
    expect(getGoalEvidenceStatus(goal, "a1-04", [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal, "a1-04", [exerciseResult("e3", false)])).toBe("pending");
  });

  it("requires a correct result for a mapped task in the same lesson", () => {
    expect(getGoalEvidenceStatus(goal, "a1-04", [exerciseResult("e3", true, "a1-03")])).toBe("pending");
    expect(getGoalEvidenceStatus(goal, "a1-04", [exerciseResult("e3", true)])).toBe("evidenced");
  });

  it("accepts only listed taskIds when a goal specifies exact task contexts", () => {
    const taskScopedGoal: Lernziel = {
      ...goal,
      evidence: {
        exerciseIds: ["e3"],
        taskIds: ["practice:a1-04:e3", "flow-practice:a1-04:e3"],
        labelAr: "أكمل تمرين المطابقة في الدرس.",
        completion: "any-correct",
      },
    };

    expect(
      getGoalEvidenceStatus(taskScopedGoal, "a1-04", [
        exerciseResult("e3", true, "a1-04", "unrelated:a1-04:e3"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(taskScopedGoal, "a1-04", [
        exerciseResult("e3", true, "a1-04", "flow-practice:a1-04:e3"),
      ]),
    ).toBe("evidenced");
  });

  it("supports goals that require every listed task", () => {
    const combinedGoal: Lernziel = {
      ...goal,
      evidence: {
        exerciseIds: ["e3", "e4"],
        labelAr: "أكمل المهمتين.",
        completion: "all-correct",
      },
    };
    expect(
      getGoalEvidenceStatus(combinedGoal, "a1-04", [
        exerciseResult("e3", true),
        exerciseResult("e4", false),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(combinedGoal, "a1-04", [
        exerciseResult("e3", true),
        exerciseResult("e4", true),
      ]),
    ).toBe("evidenced");
  });

  it("reports an unmapped goal instead of treating it as complete", () => {
    const unmapped: Lernziel = {id: "z2", de: "...", ar: "..."};
    expect(getGoalEvidenceStatus(unmapped, "a1-04", [])).toBe("unmapped");
  });

  it("links every A1-04 goal to an existing task", () => {
    const taskIds = new Set([
      ...lessonA104.practiceBank.map((task) => task.id),
      ...lessonA104.miniTest.map((task) => task.id),
      ...lessonA104.writing.map((task) => task.id),
      ...(lessonA104.reading?.questions ?? []).map((task) => task.id),
      ...lessonA104.listening.questions.map((task) => task.id),
    ]);
    expect(lessonA104.lernziele.every((ziel) => (ziel.evidence?.exerciseIds.length ?? 0) > 0)).toBe(true);
    expect(lessonA104.lernziele.every((ziel) => Boolean(ziel.evidence?.labelAr.trim()))).toBe(true);
    for (const ziel of lessonA104.lernziele) {
      for (const exerciseId of ziel.evidence?.exerciseIds ?? []) {
        expect(taskIds.has(exerciseId), `${ziel.id} → ${exerciseId}`).toBe(true);
      }
    }
  });

  it("links every A1-05 goal to an existing recorded taskId", () => {
    const reading = lessonA105.reading;
    if (!reading) throw new Error("A1-05 reading passage is required");
    const exerciseIds = new Set([
      ...lessonA105.practiceBank.map((task) => task.id),
      ...lessonA105.writing.map((task) => task.id),
      ...reading.questions.map((task) => task.id),
      ...lessonA105.listening.questions.map((task) => task.id),
    ]);
    const taskIds = new Set([
      ...lessonA105.practiceBank.flatMap((task) => [
        `practice:${lessonA105.id}:${task.id}`,
        `flow-practice:${lessonA105.id}:${task.id}`,
      ]),
      ...lessonA105.writing.map((task) => `writing:${lessonA105.id}:${task.id}`),
      ...reading.questions.map((task) => `reading:${reading.id}:${task.id}`),
      ...lessonA105.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
    ]);

    expect(lessonA105.lernziele).toHaveLength(6);
    for (const ziel of lessonA105.lernziele) {
      expect(ziel.evidence?.exerciseIds.length, `${ziel.id} exerciseIds`).toBeGreaterThan(0);
      expect(ziel.evidence?.taskIds?.length, `${ziel.id} taskIds`).toBeGreaterThan(0);
      expect(ziel.evidence?.labelAr.trim(), `${ziel.id} evidence label`).toBeTruthy();
      for (const exerciseId of ziel.evidence?.exerciseIds ?? []) {
        expect(exerciseIds.has(exerciseId), `${ziel.id} → exercise:${exerciseId}`).toBe(true);
      }
      for (const taskId of ziel.evidence?.taskIds ?? []) {
        expect(taskIds.has(taskId), `${ziel.id} → ${taskId}`).toBe(true);
      }
    }
  });

  it("checks every A1-05 mapped task against its accepted correct answer", () => {
    const e1 = lessonA105.practiceBank.find((task) => task.id === "e1");
    const e2 = lessonA105.practiceBank.find((task) => task.id === "e2");
    const w1 = lessonA105.writing.find((task) => task.id === "w1");
    const w2 = lessonA105.writing.find((task) => task.id === "w2");
    const w4 = lessonA105.writing.find((task) => task.id === "w4");
    const w5 = lessonA105.writing.find((task) => task.id === "w5");
    if (!e1 || e1.type !== "multiple-choice") throw new Error("A1-05 e1 must be multiple-choice");
    if (!e2 || e2.type !== "multiple-choice") throw new Error("A1-05 e2 must be multiple-choice");
    if (!w1 || w1.type !== "transformation") throw new Error("A1-05 w1 must be transformation");
    if (!w2 || w2.type !== "fill-blank") throw new Error("A1-05 w2 must be fill-blank");
    if (!w4 || w4.type !== "fill-blank") throw new Error("A1-05 w4 must be fill-blank");
    if (!w5 || w5.type !== "fill-blank") throw new Error("A1-05 w5 must be fill-blank");

    expect(e1.options[e1.correctIndex]).toBe("stehe ... auf");
    expect(evaluateMcq(e1, e1.options[e1.correctIndex]).isCorrect).toBe(true);
    expect(evaluateMcq(e1, e1.options[(e1.correctIndex + 1) % e1.options.length]).isCorrect).toBe(false);
    expect(e2.options[e2.correctIndex]).toBe("8:30");
    expect(evaluateMcq(e2, e2.options[e2.correctIndex]).isCorrect).toBe(true);
    expect(evaluateTransformation(w1, "Ich stehe um sieben Uhr auf.").isCorrect).toBe(true);
    expect(evaluateTransformation(w1, "Ich aufstehe um sieben Uhr.").isCorrect).toBe(false);
    expect(evaluateFillBlank(w2, ["auf", "fern", "an", "ein"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w2, ["auf", "fern", "aus", "ein"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(w4, ["fünf", "zwanzig"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w4, ["fünf", "dreißig"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(w5, ["Am", "Am", "Am"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w5, ["Um", "Am", "Am"]).isCorrect).toBe(false);

    const readingAnswers: Record<string, string> = {
      r1: "Um 5:30 Uhr",
      r2: "Fast jeden Tag",
      r3: "Weil er dann immer zu müde ist",
      r4: "Weil die Zeitangabe auf Position 1 steht",
      r5: "Anstrengend, aber er mag seinen Beruf",
    };
    for (const [id, expectedAnswer] of Object.entries(readingAnswers)) {
      const question = lessonA105.reading?.questions.find((task) => task.id === id);
      if (!question || question.type !== "multiple-choice") throw new Error(`A1-05 reading ${id} is missing`);
      expect(question.options[question.correctIndex]).toBe(expectedAnswer);
      expect(evaluateMcq(question, expectedAnswer).isCorrect).toBe(true);
      expect(evaluateMcq(question, question.options[(question.correctIndex + 1) % question.options.length]).isCorrect).toBe(false);
    }
    const listeningAnswers: Record<string, string> = {
      q1: "um sechs Uhr",
      q2: "fernsehen oder lesen",
      q3: "um sieben Uhr",
    };
    for (const [id, expectedAnswer] of Object.entries(listeningAnswers)) {
      const question = lessonA105.listening.questions.find((task) => task.id === id);
      if (!question || question.type !== "multiple-choice") throw new Error(`A1-05 listening ${id} is missing`);
      expect(question.options[question.correctIndex]).toBe(expectedAnswer);
      expect(evaluateMcq(question, expectedAnswer).isCorrect).toBe(true);
      expect(evaluateMcq(question, question.options[(question.correctIndex + 1) % question.options.length]).isCorrect).toBe(false);
    }
  });

  it("requires all mapped A1-05 parts and ignores correct results from other taskIds", () => {
    const ziel = lessonA105.lernziele.find((candidate) => candidate.id === "z2");
    if (!ziel?.evidence) throw new Error("A1-05 z2 must have task evidence");

    expect(
      getGoalEvidenceStatus(ziel, lessonA105.id, [
        exerciseResult("e1", true, lessonA105.id, "flow-practice:a1-05:e1"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(ziel, lessonA105.id, [
        exerciseResult("e1", true, lessonA105.id, "flow-practice:a1-05:e1"),
        exerciseResult("w2", true, lessonA105.id, "writing:a1-05:w2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(ziel, lessonA105.id, [
        exerciseResult("e1", true, lessonA105.id, "unmapped:a1-05:e1"),
        exerciseResult("w2", true, lessonA105.id, "writing:a1-05:w2"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(ziel, lessonA105.id, [
        exerciseResult("e1", true, lessonA105.id, "writing:a1-05:w2"),
        exerciseResult("w2", true, lessonA105.id, "flow-practice:a1-05:e1"),
      ]),
    ).toBe("pending");
  });

  it("checks the mapped A1-04 answers against each task's accepted responses", () => {
    const matching = lessonA104.practiceBank.find((task) => task.id === "e3");
    const w1 = lessonA104.writing.find((task) => task.id === "w1");
    const w2 = lessonA104.writing.find((task) => task.id === "w2");
    const w4 = lessonA104.writing.find((task) => task.id === "w4");
    if (!matching || matching.type !== "matching") throw new Error("A1-04 e3 must be matching");
    if (!w1 || w1.type !== "transformation") throw new Error("A1-04 w1 must be transformation");
    if (!w2 || w2.type !== "fill-blank") throw new Error("A1-04 w2 must be fill-blank");
    if (!w4 || w4.type !== "transformation") throw new Error("A1-04 w4 must be transformation");

    expect(evaluateMatching(matching, matching.pairs).isCorrect).toBe(true);
    expect(evaluateMatching(matching, matching.pairs.slice(0, -1)).isCorrect).toBe(false);
    expect(evaluateTransformation(w1, "Die Küche ist hell.").isCorrect).toBe(true);
    expect(evaluateTransformation(w1, "Die Küche ist modern.").isCorrect).toBe(false);
    expect(evaluateFillBlank(w2, ["auf dem", "in der", "im"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w2, ["auf dem", "in der", "unter dem"]).isCorrect).toBe(false);
    expect(evaluateTransformation(w4, "Wo wohnst du? — Ich wohne in Tunis.").isCorrect).toBe(true);
  });

  it("links every A1-06 goal to an existing task that records results", () => {
    const reading = lessonA106.reading;
    if (!reading) throw new Error("A1-06 reading passage is required");
    const exerciseIds = new Set([
      ...lessonA106.practiceBank.map((task) => task.id),
      ...lessonA106.writing.map((task) => task.id),
      ...reading.questions.map((task) => task.id),
      ...lessonA106.listening.questions.map((task) => task.id),
    ]);
    const taskIds = new Set([
      ...lessonA106.practiceBank.flatMap((task) => [
        `practice:${lessonA106.id}:${task.id}`,
        `flow-practice:${lessonA106.id}:${task.id}`,
      ]),
      ...lessonA106.writing.map((task) => `writing:${lessonA106.id}:${task.id}`),
      ...reading.questions.map((task) => `reading:${reading.id}:${task.id}`),
      ...lessonA106.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
    ]);

    expect(lessonA106.lernziele.length).toBeGreaterThan(0);
    for (const ziel of lessonA106.lernziele) {
      expect(ziel.evidence?.exerciseIds.length, `${ziel.id} exerciseIds`).toBeGreaterThan(0);
      expect(ziel.evidence?.taskIds?.length, `${ziel.id} taskIds`).toBeGreaterThan(0);
      expect(ziel.evidence?.labelAr.trim(), `${ziel.id} evidence label`).toBeTruthy();
      for (const exerciseId of ziel.evidence?.exerciseIds ?? []) {
        expect(exerciseIds.has(exerciseId), `${ziel.id} → exercise:${exerciseId}`).toBe(true);
      }
      for (const taskId of ziel.evidence?.taskIds ?? []) {
        expect(taskIds.has(taskId), `${ziel.id} → ${taskId}`).toBe(true);
        expect(
          ziel.evidence?.exerciseIds.some((id) => taskId.endsWith(`:${id}`)),
          `${ziel.id} → task/exercise agreement for ${taskId}`,
        ).toBe(true);
      }
    }
  });

  it("checks accepted answers for each mapped A1-06 exercise", () => {
    const getPractice = (id: string) => lessonA106.practiceBank.find((task) => task.id === id);
    const getWriting = (id: string) => lessonA106.writing.find((task) => task.id === id);
    const e1 = getPractice("e1");
    const e3 = getPractice("e3");
    const e4 = getPractice("e4");
    const e6 = getPractice("e6");
    const e11 = getPractice("e11");
    const e12 = getPractice("e12");
    const e13 = getPractice("e13");
    const e16 = getPractice("e16");
    const e18 = getPractice("e18");
    const e19 = getPractice("e19");
    const e20 = getPractice("e20");
    const w1 = getWriting("w1");
    const w2 = getWriting("w2");
    const w4 = getWriting("w4");
    const w5 = getWriting("w5");
    if (!e1 || e1.type !== "multiple-choice") throw new Error("A1-06 e1 must be multiple-choice");
    if (!e3 || e3.type !== "matching") throw new Error("A1-06 e3 must be matching");
    if (!e4 || e4.type !== "word-ordering") throw new Error("A1-06 e4 must be word-ordering");
    if (!e6 || e6.type !== "fill-blank") throw new Error("A1-06 e6 must be fill-blank");
    if (!e11 || e11.type !== "fill-blank") throw new Error("A1-06 e11 must be fill-blank");
    if (!e12 || e12.type !== "fill-blank") throw new Error("A1-06 e12 must be fill-blank");
    if (!e13 || e13.type !== "fill-blank") throw new Error("A1-06 e13 must be fill-blank");
    if (!e16 || e16.type !== "word-ordering") throw new Error("A1-06 e16 must be word-ordering");
    if (!e18 || e18.type !== "transformation") throw new Error("A1-06 e18 must be transformation");
    if (!e19 || e19.type !== "multiple-choice") throw new Error("A1-06 e19 must be multiple-choice");
    if (!e20 || e20.type !== "fill-blank") throw new Error("A1-06 e20 must be fill-blank");
    if (!w1 || w1.type !== "transformation") throw new Error("A1-06 w1 must be transformation");
    if (!w2 || w2.type !== "fill-blank") throw new Error("A1-06 w2 must be fill-blank");
    if (!w4 || w4.type !== "fill-blank") throw new Error("A1-06 w4 must be fill-blank");
    if (!w5 || w5.type !== "fill-blank") throw new Error("A1-06 w5 must be fill-blank");

    expect(evaluateMcq(e1, e1.options[e1.correctIndex]).isCorrect).toBe(true);
    expect(evaluateMcq(e1, e1.options[(e1.correctIndex + 1) % e1.options.length]).isCorrect).toBe(false);
    expect(evaluateMatching(e3, e3.pairs).isCorrect).toBe(true);
    expect(evaluateMatching(e3, e3.pairs.slice(0, -1)).isCorrect).toBe(false);
    expect(evaluateOrdering(e4, ["Ich", "höre", "gern", "Musik", "."]).isCorrect).toBe(true);
    expect(evaluateOrdering(e4, ["Ich", "gern", "höre", "Musik", "."]).isCorrect).toBe(false);
    expect(evaluateFillBlank(e6, ["Steh auf", "Hör zu", "Komm mit"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(e6, ["Steht auf", "Hör zu", "Komm mit"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(e11, ["isst", "liest", "fährt"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(e11, ["esst", "lest", "fahrt"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(e12, ["kann", "Kannst", "möchte", "möchten"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(e12, ["kann", "Kann", "möchte", "möchten"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(e13, ["war", "warst", "waren", "hatte"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(e13, ["warst", "war", "waren", "hatte"]).isCorrect).toBe(false);
    expect(evaluateOrdering(e16, ["Wir", "möchten", "am", "Samstag", "Fußball", "spielen", "."]).isCorrect).toBe(true);
    expect(evaluateOrdering(e16, ["Wir", "möchten", "Fußball", "am", "Samstag", "spielen", "."]).isCorrect).toBe(false);
    expect(evaluateTransformation(e18, "Ich war im Kino und hatte viel Zeit.").isCorrect).toBe(true);
    expect(evaluateMcq(e19, e19.options[e19.correctIndex]).isCorrect).toBe(true);
    expect(evaluateMcq(e19, e19.options[(e19.correctIndex + 1) % e19.options.length]).isCorrect).toBe(false);
    expect(evaluateFillBlank(e20, ["auf", "zu"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(e20, ["für", "auf"]).isCorrect).toBe(false);
    expect(evaluateTransformation(w1, "Ich höre gern Musik.").isCorrect).toBe(true);
    expect(evaluateTransformation(w1, "Ich Musik gern höre.").isCorrect).toBe(false);
    expect(evaluateFillBlank(w2, ["Komm", "Kommt", "Kommen Sie"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w2, ["Komm", "Kommt", "Kommen"]).isCorrect).toBe(false);
    expect(evaluateFillBlank(w4, [
      "Ja, gern! Um wie viel Uhr?",
      "Leider habe ich keine Zeit. Vielleicht nächste Woche?",
      "Ja, gern! Nächste Woche passt es mir gut.",
    ]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w4, [
      "Ja, gern! Um wie viel Uhr?",
      "Ja, gern! Um wie viel Uhr?",
      "Ja, gern! Nächste Woche passt es mir gut.",
    ]).isCorrect).toBe(false);
    expect(evaluateFillBlank(w5, ["war", "war", "hatte"]).isCorrect).toBe(true);
    expect(evaluateFillBlank(w5, ["hatte", "war", "hatte"]).isCorrect).toBe(false);

    const readingAnswers: Record<string, string> = {
      r1: "Für Freunde kochen",
      r2: "Schwimmen",
      r3: "Im Museum",
      r4: "Am Satzende",
      r5: "Einen Tee",
    };
    for (const [id, expectedAnswer] of Object.entries(readingAnswers)) {
      const question = lessonA106.reading?.questions.find((task) => task.id === id);
      if (!question || question.type !== "multiple-choice") throw new Error(`A1-06 reading ${id} is missing`);
      expect(question.options[question.correctIndex]).toBe(expectedAnswer);
      expect(evaluateMcq(question, expectedAnswer).isCorrect).toBe(true);
      expect(evaluateMcq(question, question.options[(question.correctIndex + 1) % question.options.length]).isCorrect).toBe(false);
    }
    const listeningAnswers: Record<string, string> = {
      q1: "Fußball",
      q2: "um vier Uhr",
      q3: "tanzen und fotografieren",
    };
    for (const [id, expectedAnswer] of Object.entries(listeningAnswers)) {
      const question = lessonA106.listening.questions.find((task) => task.id === id);
      if (!question || question.type !== "multiple-choice") throw new Error(`A1-06 listening ${id} is missing`);
      expect(question.options[question.correctIndex]).toBe(expectedAnswer);
      expect(evaluateMcq(question, expectedAnswer).isCorrect).toBe(true);
      expect(evaluateMcq(question, question.options[(question.correctIndex + 1) % question.options.length]).isCorrect).toBe(false);
    }
  });

  it("marks A1-06 goals only after all linked tasks return correct results in this lesson", () => {
    const ziel = lessonA106.lernziele.find((candidate) => candidate.id === "z6");
    if (!ziel?.evidence) throw new Error("A1-06 z6 must have task evidence");

    expect(getGoalEvidenceStatus(ziel, lessonA106.id, [])).toBe("pending");
    expect(
      getGoalEvidenceStatus(ziel, lessonA106.id, [
        exerciseResult("e12", true, lessonA106.id, "practice:a1-06:e12"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(ziel, lessonA106.id, [
        exerciseResult("e12", true, lessonA106.id, "practice:a1-06:e12"),
        exerciseResult("e16", true, lessonA106.id, "flow-practice:a1-06:e16"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(ziel, lessonA106.id, [
        exerciseResult("e12", true, lessonA106.id, "practice:a1-06:e12"),
        exerciseResult("e16", true, "a1-05", "flow-practice:a1-06:e16"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(ziel, lessonA106.id, [
        exerciseResult("e12", true, lessonA106.id, "practice:a1-06:e12"),
        exerciseResult("e16", false, lessonA106.id, "flow-practice:a1-06:e16"),
      ]),
    ).toBe("pending");
  });

});

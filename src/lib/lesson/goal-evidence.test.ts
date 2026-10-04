import {describe, expect, it} from "vitest";

import {lessonA104} from "@/data/lessons/a1/a1-04";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {evaluateFillBlank, evaluateMatching, evaluateTransformation} from "@/lib/lesson/exercise-engine";
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
): AnalyticsEvent {
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: "matching",
    correct,
    points: correct ? 5 : 0,
    lessonId,
    taskId: `practice:${lessonId}:${exerciseId}`,
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
});

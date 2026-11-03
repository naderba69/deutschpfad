import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/analytics/events", () => ({
  getRecentEvents: vi.fn(async () => [
    { type: "pronunciation-score", score: 90 },
    { type: "exercise-result", exerciseType: "true-false", correct: true, errorType: "grammar" },
    { type: "exercise-result", exerciseType: "multiple-choice", correct: false, errorType: "grammar" },
    { type: "exercise-result", exerciseType: "matching", correct: true, errorType: "vocabulary" },
    { type: "review", quality: 4 },
    { type: "skill-result", skill: "الاستماع", correct: false },
  ]),
}));

import { getRecentEvents } from "@/lib/analytics/events";
import { computeActivityDomainStats, computeConceptPracticeStats } from "./competencies";

describe("practice indicators", () => {
  beforeEach(() => vi.clearAllMocks());

  it("reports logged activity outcomes without mapping percentages to CEFR", async () => {
    const stats = await computeActivityDomainStats();
    const pronunciation = stats.find(({ key }) => key === "النطق");
    const reading = stats.find(({ key }) => key === "القراءة");
    const listening = stats.find(({ key }) => key === "الاستماع");

    expect(pronunciation).toMatchObject({ total: 1, metCriterion: 1, pct: 100 });
    expect(reading).toMatchObject({ total: 1, metCriterion: 1, pct: 100 });
    expect(listening).toMatchObject({ total: 1, metCriterion: 0, pct: 0 });
    expect(pronunciation).not.toHaveProperty("cefr");
    expect(stats.some(({ key }) => key === "التحدث")).toBe(false);
    expect(getRecentEvents).toHaveBeenCalledWith(1500);
  });

  it("labels the 80% cutoff as a sample threshold, not mastery", async () => {
    const stats = await computeConceptPracticeStats();
    const grammar = stats.find(({ concept }) => concept === "القواعد العامة");
    const vocabulary = stats.find(({ concept }) => concept === "المفردات");

    expect(grammar).toMatchObject({ attempts: 2, correct: 1, pct: 50, thresholdReached: false });
    expect(vocabulary).toMatchObject({ attempts: 1, correct: 1, pct: 100, thresholdReached: true });
    expect(grammar).not.toHaveProperty("mastered");
    expect(getRecentEvents).toHaveBeenCalledWith(2000);
  });
});

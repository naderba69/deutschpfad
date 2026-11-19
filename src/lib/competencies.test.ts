import {describe, expect, it} from "vitest";

import {aggregateConceptMastery, aggregateSkillStats} from "@/lib/competencies";
import type {AnalyticsEvent} from "@/types/analytics";

describe("aggregateConceptMastery", () => {
  it("يتجاهل الإجابات غير الموسومة ويحتفظ بتصنيف الفهم منفصلاً عن القواعد", () => {
    const events: AnalyticsEvent[] = [
      {type: "exercise-result", ts: 1, exerciseId: "e1", exerciseType: "multiple-choice", correct: true, points: 1},
      {type: "exercise-result", ts: 2, exerciseId: "e2", exerciseType: "multiple-choice", correct: true, points: 1, errorType: "comprehension"},
      {type: "exercise-result", ts: 3, exerciseId: "e3", exerciseType: "multiple-choice", correct: false, points: 0, errorType: "article"},
    ];

    expect(aggregateConceptMastery(events)).toEqual([
      {concept: "أدوات التعريف", attempts: 1, correct: 0, pct: 0, aboveInternalThreshold: false},
      {concept: "الفهم القرائي/السمعي", attempts: 1, correct: 1, pct: 100, aboveInternalThreshold: true},
    ]);
  });
});

describe("aggregateSkillStats", () => {
  it("يحسب إجابات التمارين ولا يحول المراجعة أو النطق إلى إجابات صحيحة", () => {
    const events: AnalyticsEvent[] = [
      {type: "exercise-result", ts: 1, exerciseId: "e1", exerciseType: "multiple-choice", correct: true, points: 1},
      {type: "exercise-result", ts: 2, exerciseId: "e2", exerciseType: "multiple-choice", correct: false, points: 0},
      {type: "review", ts: 3, cardId: "c1", quality: 5},
      {type: "pronunciation-score", ts: 4, target: "Guten Tag", score: 100},
    ];

    const grammar = aggregateSkillStats(events).find((skill) => skill.key === "القواعد");
    const vocabulary = aggregateSkillStats(events).find((skill) => skill.key === "المفردات");
    const speaking = aggregateSkillStats(events).find((skill) => skill.key === "التحدث");

    expect(grammar).toMatchObject({total: 2, correct: 1, pct: 50});
    expect(vocabulary).toMatchObject({total: 0, correct: 0, pct: 0});
    expect(speaking).toMatchObject({total: 0, correct: 0, pct: 0});
  });

  it("يتجاهل اسم المهارة المجهول بدلاً من تصنيفه قواعد", () => {
    const events: AnalyticsEvent[] = [
      {type: "skill-result", ts: 1, skill: "غير معروفة", correct: true},
    ];

    expect(aggregateSkillStats(events).every((skill) => skill.total === 0)).toBe(true);
  });
});

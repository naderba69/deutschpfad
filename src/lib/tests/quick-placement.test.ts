import {describe, expect, it} from "vitest";

import {getQuickPlacementSuggestion} from "@/lib/tests/quick-placement";

describe("getQuickPlacementSuggestion", () => {
  it("returns a revisable starting-point suggestion for each score band", () => {
    expect(getQuickPlacementSuggestion(12, 15).level).toBe("B1");
    expect(getQuickPlacementSuggestion(9, 15).level).toBe("A2");
    expect(getQuickPlacementSuggestion(5, 15).level).toBe("A1");
    expect(getQuickPlacementSuggestion(0, 15).label).toContain("الأبجدية");
  });

  it("does not claim to determine the learner's real or official CEFR level", () => {
    for (const suggestion of [
      getQuickPlacementSuggestion(12, 15),
      getQuickPlacementSuggestion(7, 15),
      getQuickPlacementSuggestion(0, 15),
    ]) {
      expect(`${suggestion.label} ${suggestion.message}`).not.toMatch(/مستواك الحقيقي|مستواك [A-Z]|تصنيف CEFR رسمي/);
    }
  });

  it("handles an empty item sample conservatively", () => {
    expect(getQuickPlacementSuggestion(0, 0).level).toBe("A1");
  });
});

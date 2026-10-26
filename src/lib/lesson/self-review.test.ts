import {describe, expect, it} from "vitest";

import {summarizeSelfReview} from "@/lib/lesson/self-review";

describe("self-review summary", () => {
  it("counts self-selected responses without making a score", () => {
    expect(summarizeSelfReview(["yes", "partly", "not-yet", undefined])).toEqual({
      answered: 3,
      yes: 1,
      partly: 1,
      notYet: 1,
      unanswered: 1,
    });
  });

  it("handles an untouched review", () => {
    expect(summarizeSelfReview([undefined, undefined])).toEqual({
      answered: 0,
      yes: 0,
      partly: 0,
      notYet: 0,
      unanswered: 2,
    });
  });
});

import {describe, expect, it} from "vitest";
import {isSectionSolved} from "./solved";

describe("إتمام قسم التمارين", () => {
  it("قسم بلا تمارين لا يكتمل", () => {
    expect(isSectionSolved([], new Set())).toBe(false);
    expect(isSectionSolved([], new Set(["x"]))).toBe(false);
  });
  it("لا يكتمل إلا إذا أُجيب كل تمرين صحيحاً", () => {
    expect(isSectionSolved(["a", "b"], new Set(["a"]))).toBe(false);
    expect(isSectionSolved(["a", "b"], new Set(["a", "b"]))).toBe(true);
  });
  it("إجابات زائدة لا تُفسد الاكتمال", () => {
    expect(isSectionSolved(["a"], new Set(["a", "zz"]))).toBe(true);
  });
});

import { describe, expect, it } from "vitest";
import { MINIMAL_PAIR_GROUPS } from "./minimal-pairs-data";

describe("أزواج النطق للصفحة المستقلة", () => {
  it("كل مجموعة لها عنوان وشرح وزوجان على الأقل، وكل كلمتين مختلفتان", () => {
    expect(MINIMAL_PAIR_GROUPS.length).toBeGreaterThanOrEqual(6);
    for (const g of MINIMAL_PAIR_GROUPS) {
      expect(g.titleDe.length).toBeGreaterThan(0);
      expect(g.explanationAr.length).toBeGreaterThan(10);
      expect(g.pairs.length).toBeGreaterThanOrEqual(2);
      for (const p of g.pairs) {
        expect(p.a).not.toBe(p.b);
        expect(p.aAr.length).toBeGreaterThan(0);
        expect(p.bAr.length).toBeGreaterThan(0);
      }
    }
  });
});

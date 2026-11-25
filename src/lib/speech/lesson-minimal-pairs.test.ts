import { describe, expect, it } from "vitest";
import { LESSONS } from "@/data/lessons";

/** أزواج النطق الخاصة بالدروس (الدفعة: 12 زوجاً في 4 دروس A1) */
const TARGET = ["a1-02", "a1-05", "a1-08", "a1-09"];

describe("أزواج النطق المرتبطة بالدروس", () => {
  it("كل درس مستهدف له مجموعة واحدة على الأقل، والمجموع 12 زوجاً", () => {
    let total = 0;
    for (const id of TARGET) {
      const lesson = LESSONS.find((l) => l.id === id);
      expect(lesson, id).toBeDefined();
      const groups = lesson?.pronunciation?.minimalPairs ?? [];
      expect(groups.length, id).toBeGreaterThanOrEqual(1);
      total += groups.reduce((n, g) => n + g.pairs.length, 0);
    }
    expect(total).toBe(12);
  });

  it("كل زوج له كلمتان مختلفتان وترجمتان عربيتان، وكل مجموعة لها شرح", () => {
    for (const id of TARGET) {
      const groups = LESSONS.find((l) => l.id === id)?.pronunciation?.minimalPairs ?? [];
      for (const g of groups) {
        expect(g.explanationAr.length, g.id).toBeGreaterThan(10);
        for (const p of g.pairs) {
          expect(p.a, g.id).not.toBe(p.b);
          expect(p.aAr.trim().length, g.id).toBeGreaterThan(0);
          expect(p.bAr.trim().length, g.id).toBeGreaterThan(0);
          expect(p.note.trim().length, g.id).toBeGreaterThan(0);
        }
      }
    }
  });
});

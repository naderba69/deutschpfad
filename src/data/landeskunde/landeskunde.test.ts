import {describe, expect, it} from "vitest";

import {CULTURE_CARDS, getCardsByLevel} from "@/data/landeskunde";

describe("مكتبة الثقافة الألمانية (Landeskunde)", () => {
  it("تحتوي 16+ بطاقة موزعة على المستويات (توسعة 2026-08)", () => {
    expect(CULTURE_CARDS.length).toBeGreaterThanOrEqual(16);
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      expect(getCardsByLevel(lv).length).toBeGreaterThanOrEqual(4);
    }
  });

  it("كل بطاقة مكتملة: نص + ترجمة + 3 حقائق", () => {
    const ids = new Set<string>();
    for (const c of CULTURE_CARDS) {
      expect(ids.has(c.id)).toBe(false);
      ids.add(c.id);
      expect(c.de.length).toBeGreaterThan(40);
      expect(c.ar.length).toBeGreaterThan(20);
      expect(c.facts.length).toBeGreaterThanOrEqual(3);
      for (const f of c.facts) {
        expect(f.de.trim()).toBeTruthy();
        expect(f.ar.trim()).toBeTruthy();
      }
    }
  });
});

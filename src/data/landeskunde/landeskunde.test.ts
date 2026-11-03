import {describe, expect, it} from "vitest";

import {CULTURE_CARDS, getCardsByLevel} from "@/data/landeskunde";

describe("مكتبة الثقافة الألمانية (Landeskunde)", () => {
  it("يضع Guten Appetit قبل الوجبة لا بعدها", () => {
    const card = CULTURE_CARDS.find(({ id }) => id === "k-a1-hallo");
    expect(card?.de).toContain("Vor dem Essen sagt man oft");
    expect(card?.de).not.toMatch(/Nach dem Essen.{0,40}Guten Appetit/);
    expect(card?.ar).toContain("قبل الأكل");
  });

  it("ينقل وصف الكرنفال بوصفه تقليداً عريقاً ومركزه كولونيا", () => {
    const card = CULTURE_CARDS.find(({ id }) => id === "k-b2-karneval");

    expect(card?.de).toContain("eine große Tradition");
    expect(card?.de).toContain("Die Hochburg ist Köln");
    expect(card?.ar).toContain("الكرنفال تقليد عريق");
    expect(card?.ar).toContain("كولونيا هي مركزه الأبرز");
    expect(card?.ar).not.toContain("تقليد كبير");
  });

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

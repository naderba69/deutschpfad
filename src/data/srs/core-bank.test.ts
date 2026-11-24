import {describe, expect, it} from "vitest";

import {CORE_BANK} from "./core-bank";

describe("بنك البطاقات الأساسي", () => {
  it("80 بطاقة، 20 لكل مستوى", () => {
    expect(CORE_BANK).toHaveLength(80);
    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      expect(CORE_BANK.filter((c) => c.level === level)).toHaveLength(20);
    }
  });

  it("كل بطاقة لها كلمة ومعنى ومثال بالعربية والألمانية", () => {
    for (const c of CORE_BANK) {
      expect(c.de.trim().length).toBeGreaterThan(0);
      expect(c.ar.trim().length).toBeGreaterThan(0);
      expect(c.example?.trim().length ?? 0).toBeGreaterThan(0);
      expect(c.exampleAr?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });

  it("لا تكرار للكلمة داخل المستوى نفسه", () => {
    const keys = CORE_BANK.map((c) => `${c.level}|${c.de.toLowerCase()}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("كل اسم بأداة تعريف يتبعه اسم يبدأ بحرف كبير", () => {
    const withArticle = CORE_BANK.filter((c) => /^(der|die|das) /.test(c.de));
    expect(withArticle.length).toBeGreaterThan(0);
    for (const c of withArticle) expect(c.de).toMatch(/^(der|die|das) [A-ZÄÖÜ]/);
  });
});

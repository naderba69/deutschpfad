import {describe, expect, it} from "vitest";

import {
  OPEN_PRODUCTION_RUBRIC,
  RUBRIC_DISCLAIMER,
  RUBRIC_EXPECTATIONS,
  criterionLabel,
  expectationFor,
} from "./open-production";

const LEVELS = ["A1", "A2", "B1", "B2"] as const;

describe("السلّم الموحّد للكتابة والكلام المفتوح (G-06)", () => {
  it("يحوي أربعة معايير بالأسماء الألمانية الأصلية", () => {
    expect(OPEN_PRODUCTION_RUBRIC.map((c) => c.de)).toEqual(["Erfüllung", "Kohärenz", "Wortschatz", "Struktur"]);
  });

  it("لكل مستوى وكل معيار توقّع غير فارغ", () => {
    for (const level of LEVELS) {
      for (const c of OPEN_PRODUCTION_RUBRIC) {
        expect(RUBRIC_EXPECTATIONS[level][c.id].trim().length, `${level}/${c.id}`).toBeGreaterThan(10);
      }
    }
  });

  it("تُكتب أسماء المعايير كما كانت في المخرجات السابقة", () => {
    expect(criterionLabel(OPEN_PRODUCTION_RUBRIC[0])).toBe("Erfüllung — إنجاز المهمة");
    expect(criterionLabel(OPEN_PRODUCTION_RUBRIC[1])).toBe("Kohärenz — البنية والترابط");
    expect(criterionLabel(OPEN_PRODUCTION_RUBRIC[2])).toBe("Wortschatz — المفردات");
    expect(criterionLabel(OPEN_PRODUCTION_RUBRIC[3])).toBe("Struktur — القواعد");
  });

  it("يرجع التوقع للمستوى المعروف، ويرجع undefined لغيره", () => {
    expect(expectationFor("A2", "kohaerenz")).toBe(RUBRIC_EXPECTATIONS.A2.kohaerenz);
    expect(expectationFor("C1", "kohaerenz")).toBeUndefined();
  });

  it("يذكر أن السلّم داخلي وليس تصحيحاً رسمياً", () => {
    expect(RUBRIC_DISCLAIMER).toMatch(/ليست تصحيح Goethe الرسمي/);
  });
});

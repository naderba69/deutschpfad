import { describe, expect, it } from "vitest";

import { TITLE_MAX, TITLE_SUFFIX, fitTitle } from "./title";

const budget = TITLE_MAX - TITLE_SUFFIX.length;

describe("fitTitle", () => {
  it("يبقي العنوان القصير كما هو", () => {
    expect(fitTitle("Beim Arzt", "عند الطبيب")).toBe("Beim Arzt — عند الطبيب");
  });

  it("لا يتجاوز السقف بعد إضافة لاحقة الموقع", () => {
    const out = fitTitle("Die Globalisierung und ihre Folgen für Europa", "العولمة وعواقبها على أوروبا والعالَم");
    expect((out + TITLE_SUFFIX).length).toBeLessThanOrEqual(TITLE_MAX);
  });

  it("يستخدم الشرطة حين لا يوجد عنوان عربي", () => {
    expect(fitTitle("Wortschatz", "")).toBe("Wortschatz");
  });

  it("لا يقطع كلمة الألمانية إن كان بالإمكان الاستغناء عن العربية", () => {
    const de = "x".repeat(budget);
    expect(fitTitle(de, "عربي طويل جداً جداً جداً")).toBe(de);
  });

  it("يقصّر العنوان الألماني نفسه إن تجاوز السقف", () => {
    const out = fitTitle("a".repeat(120), "");
    expect(out.length).toBe(budget);
    expect(out.endsWith("…")).toBe(true);
  });
});

import { describe, expect, it } from "vitest";

import { B2_LESEN } from "@/data/exams/b2-lesen";

describe("دقة ترجمة بند النظافة في لائحة B2", () => {
  it("يفصل إعادة القاعة بعد كل استخدام عن واجب آخر مغادر", () => {
    const rules = B2_LESEN.find(({ teil }) => teil === 5);
    expect(rules?.text).toContain("Sauberkeit: Der Raum ist nach jeder Nutzung in den ursprünglichen Zustand zu versetzen.");
    expect(rules?.textAr).toContain("يجب إعادة القاعة إلى حالتها الأصلية بعد كل استخدام");
    expect(rules?.textAr).toContain("آخر من يغادرها إطفاء الأنوار والأجهزة وإغلاق الباب");
  });
});

import {describe, expect, it} from "vitest";

import {B2_READING_EXAM} from "@/data/reading/b2-exam-library";

describe("ترجمة العمل والشيخوخة السكانية في قراءة B2", () => {
  it("يحفظ المقارنة بين عدد العاملين والمتقاعدين ومعنى الطلب على الكوادر", () => {
    const reading = B2_READING_EXAM.find(({ id }) => id === "b2x-8");

    expect(reading?.text).toContain("immer weniger Erwerbstätige für immer mehr Rentner aufkommen");
    expect(reading?.text).toContain("Der Pflegebereich sucht dringend Fachkräfte");
    expect(reading?.textAr).toContain("يمول عدد أقل من العاملين عدداً أكبر من المتقاعدين");
    expect(reading?.textAr).toContain("يبحث قطاع الرعاية بشكل عاجل عن كوادر مؤهلة");
    expect(reading?.textAr).not.toContain("العاملين الأقل يغطون المتقاعدين الأكثر");
  });
});

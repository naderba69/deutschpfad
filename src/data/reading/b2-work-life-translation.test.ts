import {describe, expect, it} from "vitest";

import {B2_READING_EXAM} from "@/data/reading/b2-exam-library";

describe("ترجمة حدود العمل والحياة الخاصة في قراءة B2", () => {
  it("ينقل معنى اختفاء الحد بين العمل والحياة الخاصة وأساس التوفر التعاقدي", () => {
    const reading = B2_READING_EXAM.find(({ id }) => id === "b2x-3");

    expect(reading?.text).toContain("die Grenze zwischen Beruf und Privatleben verschwindet zunehmend");
    expect(reading?.text).toContain("ohne dies vertraglich festzuhalten");
    expect(reading?.textAr).toContain("الحد الفاصل بين العمل والحياة الخاصة");
    expect(reading?.textAr).toContain("دون تثبيت ذلك تعاقدياً");
    expect(reading?.textAr).not.toContain("بين المهنة والخاصة");
    expect(reading?.textAr).not.toContain("دون نص تشريعي");
  });
});

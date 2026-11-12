import { describe, expect, it } from "vitest";

import { readingB110 } from "./reading";

describe("B1-10 reading distractors", () => {
  it("translates Möbelhaus as a furniture store, not a furniture house", () => {
    expect(readingB110.paragraphsAr[0]).toContain("متجر للأثاث في دورتموند");
    expect(readingB110.paragraphsAr[2]).toContain("يبقى في متجر الأثاث");
    expect(readingB110.paragraphsAr[2]).not.toContain("بيت الأثاث");
  });

  it("keeps the Arabic translation fully in Arabic and preserves the earlier-time meaning", () => {
    expect(readingB110.paragraphs[1]).toContain("hätte ich früher angefangen");
    expect(readingB110.paragraphsAr[1]).toContain("لكنت بدأت في وقت أبكر");
    expect(readingB110.paragraphsAr[1]).not.toContain("זמן");
  });

  it("does not add funding claims absent from the German employment passage", () => {
    expect(readingB110.paragraphs[3]).toContain("eine wichtige Voraussetzung für eine mögliche Förderung");
    expect(readingB110.paragraphsAr[3]).toContain("من الشروط المهمة لاحتمال الحصول على دعم");
    expect(readingB110.paragraphsAr[3]).not.toContain("فمن يريد التأهيل في دورتموند");
    expect(readingB110.paragraphsAr[3]).not.toContain("يُدفع للكورس");
    expect(readingB110.paragraphsAr[3]).not.toContain("ملائماً لوظيفة محدّدة");
  });

  it("uses a grammatical, unambiguous alternative about stopping work", () => {
    const question = readingB110.questions.find(({ id }) => id === "rq1");
    expect(question?.correctIndex).toBe(1);
    expect(question?.options).toContain("Sie will künftig nicht mehr berufstätig sein und zu Hause bleiben.");
    expect(question?.options).not.toContain("Sie will künftig zu Hause Vollzeit Hausfrau werden.");
  });
});

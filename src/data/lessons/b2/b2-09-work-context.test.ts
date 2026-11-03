import {describe, expect, it} from "vitest";

import {readingB209} from "@/data/lessons/b2/b2-09/reading";

describe("مطابقة مفردات العمل في قراءة التوظيف B2-09", () => {
  it("يميز المهلة من الموعد، والقبول من عرض المنصب، وطريق العمل من مدته", () => {
    expect(readingB209.paragraphs[2]).toContain("Später wurde eine Frist gesetzt");
    expect(readingB209.paragraphsAr[2]).toContain("ثم حُدّدت مهلة");
    expect(readingB209.paragraphsAr[2]).not.toContain("ثم حُدّد موعد");

    expect(readingB209.paragraphs[3]).toContain("erhielt sie die Zusage");
    expect(readingB209.paragraphs[3]).toContain("verglich das Gehalt und den Arbeitsweg");
    expect(readingB209.paragraphsAr[3]).toContain("تلقت قبولاً، لكن ليس للوظيفة التي تقدمت إليها");
    expect(readingB209.paragraphsAr[3]).toContain("عرضت عليها الشركة منصباً آخر");
    expect(readingB209.paragraphsAr[3]).toContain("قارنت الراتب وطريق الوصول إلى العمل");
    expect(readingB209.paragraphsAr[3]).not.toContain("مدة التنقّل");
  });
});

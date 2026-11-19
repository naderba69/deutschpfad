import { describe, expect, it } from "vitest";

import { RAW_TEST_BANK } from "@/data/tests/question-banks";

describe("تعبير Weg zur Arbeit في قراءة B1", () => {
  it("يميّز طريق الوصول إلى العمل من طرق العمل نفسها", () => {
    const passage = RAW_TEST_BANK.find((item) => item.id === "b1-r4");
    const commuteQuestion = passage?.questions?.find((question) => question.q === "Was ist ein Nachteil laut dem Text?");

    expect(passage?.text).toContain("Der Weg zur Arbeit ist länger");
    expect(commuteQuestion?.options[0]).toBe("längere Wege zur Arbeit");
    expect(commuteQuestion?.explanation).toContain("طريق الوصول إلى العمل أطول");
    expect(passage?.textAr).toContain("وخيارات المتاجر والمدارس أقل");
  });
});

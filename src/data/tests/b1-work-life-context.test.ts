import { describe, expect, it } from "vitest";

import { RAW_TEST_BANK } from "@/data/tests/question-banks";

describe("ترجمة سياق العمل والحياة في قراءة B1 الإضافية", () => {
  it("يحفظ معنى عدم القدرة على فصل الذهن عن العمل بعد الدوام", () => {
    const passage = RAW_TEST_BANK.find((item) => item.id === "b1-r3");

    expect(passage).toBeDefined();
    expect(passage?.text).toContain("nach der Arbeit nicht abschalten kann");
    expect(passage?.textAr).toContain("لا يستطيعون فصل أذهانهم عن العمل بعد انتهاء الدوام");
    expect(passage?.questions?.[0].options[0]).toContain("nach der Arbeit nicht abschalten");
  });
});

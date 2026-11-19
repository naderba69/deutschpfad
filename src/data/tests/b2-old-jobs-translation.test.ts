import { describe, expect, it } from "vitest";

import { RAW_TEST_BANK } from "@/data/tests/question-banks";

describe("ترجمة صفة alt في سياق المهن", () => {
  it("ينقل معنى أن الرقمنة تجعل بعض المهن القديمة غير ضرورية", () => {
    const passage = RAW_TEST_BANK.find((item) => item.id === "b2-r1");

    expect(passage).toBeDefined();
    expect(passage?.text).toContain("macht sie viele alte überflüssig");
    expect(passage?.textAr).toContain("تجعل كثيراً من المهن القديمة غير ضرورية");
    expect(passage?.textAr).not.toContain("مهن قديمة زائدة");
  });
});

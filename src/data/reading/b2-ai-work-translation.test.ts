import {describe, expect, it} from "vitest";

import {READING_LIBRARY} from "@/data/reading/library";

describe("ترجمة تغيّر العمل بالذكاء الاصطناعي في قراءة B2", () => {
  it("ينقل معنى جعل المهام التقليدية غير ضرورية ولا يصفها بأنها زائدة", () => {
    const reading = READING_LIBRARY.find(({ id }) => id === "rd-b2-1");

    expect(reading?.text).toContain("macht sie viele traditionelle Tätigkeiten überflüssig");
    expect(reading?.textAr).toContain("يجعل كثيراً من المهام التقليدية غير ضرورية");
    expect(reading?.textAr).not.toContain("يجعل أنشطة تقليدية كثيرة زائدة");
    expect(reading?.textAr).toContain("يخلق مهناً جديدة");
    expect(reading?.textAr).toContain("التدريب المستمر");
  });
});

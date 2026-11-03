import { describe, expect, it } from "vitest";

import { lessonA202 } from "@/data/lessons/a2/a2-02";

describe("حراسة معنى arbeiten في قراءة المرض والعمل", () => {
  it("يطابق تعذر العمل والعودة إليه بعد التعافي", () => {
    const reading = lessonA202.reading;
    expect(reading).toBeDefined();
    if (!reading) throw new Error("A2-02 reading is required");
    expect(reading.paragraphs[1]).toContain("Wenn du nicht arbeiten kannst");
    expect(reading.paragraphsAr[1]).toContain("إذا لم تكن قادراً على العمل");
    expect(reading.paragraphs[5]).toContain("bin am Freitag wieder zur Arbeit gegangen");
    expect(reading.paragraphsAr[5]).toContain("عدت إلى العمل يوم الجمعة");
  });
});

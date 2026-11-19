import { describe, expect, it } from "vitest";

import { lessonA201 } from "@/data/lessons/a2/a2-01";
import { lessonA202 } from "@/data/lessons/a2/a2-02";

describe("تمييز aufwachen عن aufstehen في قراءة المرض", () => {
  it("يحفظ معنى الاستيقاظ أولاً ثم محاولة النهوض من الفراش", () => {
    const reading = lessonA202.reading;
    const german = reading?.paragraphs?.[0] ?? "";
    const arabic = reading?.paragraphsAr?.[0] ?? "";

    expect(german).toContain("bin ich aufgewacht");
    expect(german).toContain("versucht aufzustehen");
    expect(arabic).toContain("استيقظتُ");
    expect(arabic).toContain("حاولتُ رغم ذلك أن أنهض");
    expect(arabic).not.toContain("حاولتُ أن أستيقظ");
    expect(arabic.indexOf("استيقظتُ")).toBeLessThan(arabic.indexOf("حاولتُ رغم ذلك أن أنهض"));

    const travelReading = lessonA201.reading;
    expect(travelReading?.paragraphs?.[1]).toContain("sind wir um fünf Uhr aufgestanden");
    expect(travelReading?.paragraphsAr?.[1]).toContain("نهضنا في الخامسة");
  });
});

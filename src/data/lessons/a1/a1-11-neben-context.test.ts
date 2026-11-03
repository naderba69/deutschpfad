import { describe, expect, it } from "vitest";

import { lessonA111 } from "@/data/lessons/a1/a1-11";

describe("حراسة neben في اتجاهات المدينة A1-11", () => {
  it("يميّز مشتت الموقع الخاطئ عن موقع المدرسة المذكور ويطابق موقع المحطة", () => {
    const reading = lessonA111.reading;
    expect(reading?.paragraphs[3]).toContain("Die Sprachschule liegt gegenüber der Apotheke.");
    expect(reading?.paragraphsAr[3]).toContain("تقع مدرسة اللغة مقابل الصيدلية");
    const question = reading?.questions.find((item) => item.id === "rq3");
    expect(question?.options[question.correctIndex]).toBe("Gegenüber der Apotheke");
    expect(question?.optionExplanations?.[1]).toContain("neben dem Bahnhof");
    const listeningContent = JSON.stringify(lessonA111.listening);
    expect(listeningContent).toContain("Der Bahnhof ist neben dem Park.");
    expect(listeningContent).toContain("محطة القطار بجانب الحديقة");
  });
});

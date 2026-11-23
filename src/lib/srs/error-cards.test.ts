import {describe, expect, it} from "vitest";

import {errorCardId, errorCardInput, levelFromLessonId} from "./error-cards";

describe("مستوى البطاقة من معرّف الدرس", () => {
  it("يقرأ المستوى من البادئة", () => {
    expect(levelFromLessonId("a1-03")).toBe("A1");
    expect(levelFromLessonId("b2-11")).toBe("B2");
    expect(levelFromLessonId("B1-07")).toBe("B1");
  });
  it("الافتراضي A1 لغياب المعرّف أو صيغة غير معروفة", () => {
    expect(levelFromLessonId(undefined)).toBe("A1");
    expect(levelFromLessonId("writing-path")).toBe("A1");
  });
});

describe("تحويل الخطأ إلى بطاقة", () => {
  it("بلا إجابة صحيحة لا تُنشأ بطاقة", () => {
    expect(errorCardInput({id: "e1", explanation: "x"})).toBeNull();
    expect(errorCardInput({id: "e1", explanation: "x", correctAnswer: "   "})).toBeNull();
  });
  it("الإجابة الصحيحة تصبح مفتاح المراجعة، والشرح تلميحاً عربياً", () => {
    const card = errorCardInput({id: "a1-03:ex5", explanation: "المادة خطأ", correctAnswer: "die Katze", lessonId: "a1-03"});
    expect(card).toEqual({
      id: "err-a1-03:ex5",
      de: "die Katze",
      ar: "صحّح هذا الخطأ: المادة خطأ",
      level: "A1",
    });
  });
  it("معرّف البطاقة ثابت: الخطأ المتكرر يصل إلى البطاقة نفسها", () => {
    expect(errorCardId("k")).toBe(errorCardId("k"));
  });
});

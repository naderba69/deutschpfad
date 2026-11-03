import { describe, expect, it } from "vitest";

import { A2_MODEL2_SPRECHEN } from "@/data/exams/a2-model2-sprechen";

describe("فرق aufstehen وaufwachen في نموذج التحدث A2", () => {
  it("يترجم سؤال وعبارة النهوض بالمعنى المناسب للسياق", () => {
    const turn = A2_MODEL2_SPRECHEN[0]?.turns?.[0];
    expect(turn?.partnerDe).toContain("Wann stehst du auf?");
    expect(turn?.partnerAr).toBe("حدّثني عن يومك. متى تنهض من الفراش؟");
    expect(turn?.modelDe).toContain("Ich stehe um sechs Uhr auf");
    expect(turn?.modelAr).toBe("أنهض من الفراش في السادسة وأتناول الفطور في السادسة والنصف.");
  });
});

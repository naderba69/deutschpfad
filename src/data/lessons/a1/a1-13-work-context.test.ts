import { describe, expect, it } from "vitest";

describe("حراسة معنى arbeiten als في سياق المهنة", () => {
  it("يطابق مهنة ليلى ومكان عملها مع نص التدريب", async () => {
    const {practiceBank} = await import("@/data/lessons/a1/a1-13/practice");
    const exercise = practiceBank.find((item) => item.id === "e18");
    expect(exercise?.type).toBe("true-false");
    if (exercise?.type !== "true-false") throw new Error("تمرين e18 مفقود أو ليس صواباً/خطأ");
    expect(exercise.textDe).toContain("Ich arbeite als Krankenschwester im Krankenhaus.");
    expect(exercise.statements.find((item) => item.id === "s2")?.ar).toBe("ليلى تعمل في المستشفى.");
  });
});

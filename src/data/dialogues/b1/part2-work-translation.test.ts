import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES} from "@/data/dialogues";

describe("ترجمة العمل في حوار الإبلاغ عن المرض", () => {
  it("يطابق ضمير الخيار الألماني المؤنث وصياغة الحضور للعمل", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b1-08-krankmeldung");
    const answer = dialogue?.questions[0].options.find((option) => option.correct);

    expect(answer?.text).toBe("Sie ist krank und kommt nicht zur Arbeit");
    expect(answer?.ar).toBe("هي مريضة ولا تستطيع الحضور للعمل");
  });
});

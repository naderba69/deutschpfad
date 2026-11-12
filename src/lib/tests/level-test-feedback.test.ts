import { describe, expect, it } from "vitest";

import { getLevelTestFeedback } from "@/lib/tests/level-test-feedback";

describe("level-test feedback", () => {
  it("never infers real-exam readiness from a high score on this short test", () => {
    const feedback = getLevelTestFeedback(95, true);
    expect(feedback).toContain("هذا الاختبار السريع");
    expect(feedback).toContain("لا تكفي وحدها");
    expect(feedback).not.toContain("أنت جاهز");
  });

  it("describes the pass threshold as local to this test", () => {
    expect(getLevelTestFeedback(63, true)).toContain("في هذا الاختبار فقط");
    expect(getLevelTestFeedback(59, false)).toContain("في هذا الاختبار");
  });

  it("offers graduated practice guidance without claiming certification", () => {
    expect(getLevelTestFeedback(80, true)).toContain("واصل التدريب");
    expect(getLevelTestFeedback(80, true)).not.toMatch(/شهادة رسمية|معتمد من غوته|جاهز للامتحان/);
  });
});

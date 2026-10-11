import { describe, expect, it } from "vitest";
import { B1_HOEREN } from "./b1-hoeren";

describe("نموذج B1 التدريبي — الاستماع", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(B1_HOEREN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(B1_HOEREN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });
  it("كل إجابة صحيحة ضمن الخيارات، ولكل عبارة سبب بالعربية", () => {
    for (const t of B1_HOEREN) {
      if (t.kind === "rf") {
        for (const s of t.statements ?? []) expect(s.whyAr.length).toBeGreaterThan(5);
      } else {
        for (const q of t.questions ?? []) {
          expect(q.correct).toBeGreaterThanOrEqual(0);
          expect(q.correct).toBeLessThan(q.options.length);
        }
      }
    }
  });
});

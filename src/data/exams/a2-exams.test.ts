import { describe, expect, it } from "vitest";
import { A2_HOEREN } from "./a2-hoeren";
import { A2_LESEN } from "./a2-lesen";
import { A2_SCHREIBEN } from "./a2-schreiben";

describe("نموذج A2 التدريبي — الاستماع", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(A2_HOEREN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(A2_HOEREN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });
  it("كل إجابة صحيحة ضمن الخيارات، ولكل عبارة سبب بالعربية", () => {
    for (const t of A2_HOEREN) {
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

describe("نموذج A2 التدريبي — القراءة", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(A2_LESEN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(A2_LESEN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });
  it("كل إجابة صحيحة ضمن الخيارات، ولكل عبارة سبب بالعربية", () => {
    for (const t of A2_LESEN) {
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

describe("نموذج A2 التدريبي — الكتابة", () => {
  it("مهمتان مرقّمتان، ولكل مهمة حد أدنى للكلمات ونقاط مطلوبة", () => {
    expect(A2_SCHREIBEN.map((t) => t.teil)).toEqual([1, 2]);
    for (const t of A2_SCHREIBEN) {
      expect(t.minWords).toBeGreaterThan(0);
      expect(t.requires.length).toBeGreaterThanOrEqual(2);
    }
  });
});

import { describe, expect, it } from "vitest";
import { A1_HOEREN } from "./a1-hoeren";
import { A1_LESEN } from "./a1-lesen";
import { A1_SCHREIBEN } from "./a1-schreiben";

describe("نموذج A1 التدريبي — الاستماع", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(A1_HOEREN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(A1_HOEREN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });

  it("كل جزء يحمل نصاً صوتياً وعناصر صحيحة", () => {
    for (const t of A1_HOEREN) {
      expect(t.audioText.length).toBeGreaterThan(40);
      if (t.kind === "rf") {
        expect(t.statements?.length ?? 0).toBeGreaterThan(0);
        for (const s of t.statements ?? []) expect(s.whyAr.length).toBeGreaterThan(5);
      } else {
        expect(t.questions?.length ?? 0).toBeGreaterThan(0);
        for (const q of t.questions ?? []) {
          expect(q.correct).toBeGreaterThanOrEqual(0);
          expect(q.correct).toBeLessThan(q.options.length);
        }
      }
    }
  });
});

describe("نموذج A1 التدريبي — القراءة", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(A1_LESEN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(A1_LESEN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });

  it("كل إجابة صحيحة ضمن الخيارات، ولكل عبارة سبب بالعربية", () => {
    for (const t of A1_LESEN) {
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

describe("نموذج A1 التدريبي — الكتابة", () => {
  it("مهمتان مرقّمتان، ولكل مهمة حد أدنى للكلمات ونقاط مطلوبة", () => {
    expect(A1_SCHREIBEN.map((t) => t.teil)).toEqual([1, 2]);
    for (const t of A1_SCHREIBEN) {
      expect(t.minWords).toBeGreaterThan(0);
      expect(t.requires.length).toBeGreaterThanOrEqual(2);
      expect(t.aufgabeDe.length).toBeGreaterThan(40);
    }
  });
});

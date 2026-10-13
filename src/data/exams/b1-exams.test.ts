import { describe, expect, it } from "vitest";
import { B1_HOEREN } from "./b1-hoeren";
import { B1_LESEN } from "./b1-lesen";
import { B1_SCHREIBEN } from "./b1-schreiben";
import { B1_SPRECHEN } from "./b1-sprechen";

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

describe("نموذج B1 التدريبي — القراءة", () => {
  it("4 أجزاء مرقّمة 1..4 وفيها 14 بنداً", () => {
    expect(B1_LESEN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(B1_LESEN.length).toBe(4);
  });
  it("كل إجابة صحيحة ضمن الخيارات", () => {
    for (const t of B1_LESEN) {
      for (const q of t.questions ?? []) {
        expect(q.correct).toBeGreaterThanOrEqual(0);
        expect(q.correct).toBeLessThan(q.options.length);
      }
    }
  });
});

describe("نموذج B1 التدريبي — الكتابة", () => {
  it("مهمتان بحد أدنى 80 كلمة ومعايير مكتوبة بالعربية", () => {
    expect(B1_SCHREIBEN.map((t) => t.teil)).toEqual([1, 2]);
    for (const t of B1_SCHREIBEN) {
      expect(t.minWords).toBeGreaterThanOrEqual(80);
      expect(t.requires.length).toBeGreaterThanOrEqual(3);
      expect(t.aufgabeAr.length).toBeGreaterThan(10);
    }
  });
});

describe("نموذج B1 التدريبي — التحدث", () => {
  it("3 أجزاء، ولكل جزء أدوار وقائمة تحقق", () => {
    expect(B1_SPRECHEN.map((p) => p.teil)).toEqual([1, 2, 3]);
    for (const p of B1_SPRECHEN) {
      expect(p.turns.length).toBeGreaterThanOrEqual(1);
      expect(p.checklistAr.length).toBeGreaterThanOrEqual(2);
      for (const t of p.turns) {
        expect(t.partnerDe.length).toBeGreaterThan(3);
        expect(t.modelDe.length).toBeGreaterThan(3);
      }
    }
  });
});

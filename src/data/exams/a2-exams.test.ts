import { describe, expect, it } from "vitest";
import { A2_HOEREN } from "./a2-hoeren";
import { A2_LESEN } from "./a2-lesen";
import { A2_SCHREIBEN } from "./a2-schreiben";

describe("نموذج A2 التدريبي — الاستماع", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    expect(A2_HOEREN.map((t) => t.teil)).toEqual([1, 2, 3, 4]);
    expect(A2_HOEREN.reduce((s, t) => s + t.points, 0)).toBe(100);
  });
  it("يحفظ دلالة neben dem Ausgang Süd بوصفها مجاورة مكانية", () => {
    const part = A2_HOEREN.find((item) => item.teil === 1)!;
    const statement = part.statements?.find((item) => item.id === "a2h1-s3");
    expect(part.audioText).toContain("neben dem Ausgang Süd");
    expect(statement?.ar).toBe("مكتب المفقودات بجوار مخرج الجنوب.");
    expect(statement?.whyAr).toContain("neben dem Ausgang Süd");
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
  it("ينسب المصعد إلى المبنى لا إلى الشقة في إعلان السكن", () => {
    const part = A2_LESEN.find((item) => item.teil === 2)!;
    const statement = part.statements?.find((item) => item.id === "a2l2-s1");
    expect(statement?.de).toBe("Das Haus hat einen Aufzug.");
    expect(statement?.ar).toBe("في المبنى مصعد.");
    expect(statement?.isTrue).toBe(true);
  });

  it("يميّز warm في إعلان السكن عن الإيجار من دون التكاليف", () => {
    const part = A2_LESEN.find((item) => item.teil === 2)!;
    const statement = part.statements?.find((item) => item.id === "a2l2-s2");
    expect(part.text).toContain("780 Euro warm");
    expect(statement?.isTrue).toBe(false);
    expect(statement?.whyAr).toContain("التكاليف المشمولة عادةً");
    expect(statement?.whyAr).toContain("تفاصيل العرض");
    expect(statement?.whyAr).not.toContain("شامل التكاليف.");
  });

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

import { A2_SPRECHEN } from "./a2-sprechen";

describe("نموذج A2 التدريبي — التحدث", () => {
  it("ثلاثة أجزاء مرقّمة، ولكل جزء جمل للشريك وعبارات نموذجية وقائمة فحص", () => {
    expect(A2_SPRECHEN.map((t) => t.teil)).toEqual([1, 2, 3]);
    for (const part of A2_SPRECHEN) {
      expect(part.turns.length).toBeGreaterThan(0);
      expect(part.checklistAr.length).toBeGreaterThanOrEqual(2);
      for (const turn of part.turns) {
        expect(turn.partnerDe.length).toBeGreaterThan(3);
        expect(turn.modelDe.length).toBeGreaterThan(3);
      }
    }
  });
});

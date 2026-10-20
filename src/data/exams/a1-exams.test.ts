/**
 * حراسة نماذج A1 التدريبية — تمرّ على **كل** نماذج المستوى من السجلّ
 * (`level-models.ts`) لا على النموذج الأول وحده، فأي نموذج جديد يُختبر
 * تلقائياً بالمعايير نفسها.
 */
import { describe, expect, it } from "vitest";
import { LEVEL_MODELS } from "./level-models";
import type { ExamModel } from "./level-models";

const MODELS: ExamModel[] = LEVEL_MODELS.A1;

describe("نماذج A1 التدريبية — الاستماع", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    for (const model of MODELS) {
      expect(model.hoeren.map((t) => t.teil), model.id).toEqual([1, 2, 3, 4]);
      expect(model.hoeren.reduce((s, t) => s + t.points, 0), model.id).toBe(100);
    }
  });

  it("كل جزء يحمل نصاً صوتياً وعناصر صحيحة", () => {
    for (const model of MODELS) for (const t of model.hoeren) {
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

describe("نماذج A1 التدريبية — القراءة", () => {
  it("مجموع النقاط 100 والأجزاء مرقّمة 1..4", () => {
    for (const model of MODELS) {
      expect(model.lesen.map((t) => t.teil), model.id).toEqual([1, 2, 3, 4]);
      expect(model.lesen.reduce((s, t) => s + t.points, 0), model.id).toBe(100);
    }
  });

  it("كل إجابة صحيحة ضمن الخيارات، ولكل عبارة سبب بالعربية", () => {
    for (const model of MODELS) for (const t of model.lesen) {
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

describe("نماذج A1 التدريبية — الكتابة", () => {
  it("مهمتان مرقّمتان، ولكل مهمة حد أدنى للكلمات ونقاط مطلوبة", () => {
    for (const model of MODELS) {
      expect(model.schreiben.map((t) => t.teil), model.id).toEqual([1, 2]);
    }
    for (const model of MODELS) for (const t of model.schreiben) {
      expect(t.minWords).toBeGreaterThan(0);
      expect(t.requires.length).toBeGreaterThanOrEqual(2);
      expect(t.aufgabeDe.length).toBeGreaterThan(40);
    }
  });
});

describe("نماذج A1 التدريبية — التحدث", () => {
  it("ثلاثة أجزاء مرقّمة، ولكل جزء جمل للشريك وعبارات نموذجية وقائمة فحص", () => {
    for (const model of MODELS) {
      expect(model.sprechen.map((t) => t.teil), model.id).toEqual([1, 2, 3]);
    }
    for (const model of MODELS) for (const part of model.sprechen) {
      expect(part.turns.length).toBeGreaterThan(0);
      expect(part.checklistAr.length).toBeGreaterThanOrEqual(2);
      for (const turn of part.turns) {
        expect(turn.partnerDe.length).toBeGreaterThan(3);
        expect(turn.modelDe.length).toBeGreaterThan(3);
      }
    }
  });
});

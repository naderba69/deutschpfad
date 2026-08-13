/**
 * اختبارات وحدة — خوارزمية SM-2 (قلب نظام المراجعة)
 */
import {describe, expect, it} from "vitest";

import {applyReview, createCard, forgettingCoefficient, forgettingCoefficientLabel, standardInterval, updateEase} from "@/lib/srs/sm2";
import type { Sm2CardData } from "@/types/srs";

function makeCard(overrides: Partial<Sm2CardData> = {}): Sm2CardData {
  return {
    id: "c1",
    de: "laufen",
    ar: "يجري",
    example: "Ich laufe.",
    exampleAr: "أجري.",
    level: "A1",
    source: "manual",
    createdAt: Date.now(),
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    due: Date.now(),
    lastReview: null,
    lapses: 0,
    qualitySum: 0,
    qualityCount: 0,
    ...overrides,
  };
}

describe("createCard", () => {
  it("ينشئ بطاقة بقيم افتراضية سليمة", () => {
    const card = createCard({ id: "c-new", de: "das Haus", ar: "المنزل", level: "A1", source: "manual" });
    expect(card.ease).toBe(2.5);
    expect(card.interval).toBe(0);
    expect(card.repetitions).toBe(0);
    expect(card.due).toBeGreaterThan(0);
  });
});

describe("updateEase", () => {
  it("يقلل السهولة عند النسيان (q=1)", () => {
    expect(updateEase(2.5, 1)).toBeLessThan(2.5);
  });

  it("يزيد السهولة عند الإجابة السهلة (q=5)", () => {
    expect(updateEase(2.5, 5)).toBeGreaterThan(2.5);
  });

  it("لا ينزل تحت الحد الأدنى", () => {
    expect(updateEase(1.3, 1)).toBeGreaterThanOrEqual(1.3);
  });
});

describe("standardInterval — فترات SM-2", () => {
  it("فشل (q<3) → غداً (1 يوم)", () => {
    expect(standardInterval(makeCard(), 1)).toBe(1);
  });

  it("أول إجابة ناجحة → يوم واحد", () => {
    expect(standardInterval(makeCard(), 4)).toBe(1);
  });

  it("ثاني إجابة ناجحة → 6 أيام", () => {
    expect(standardInterval(makeCard({ repetitions: 1 }), 4)).toBe(6);
  });

  it("بعدها: فاصل × معامل السهولة", () => {
    expect(standardInterval(makeCard({ repetitions: 2, interval: 6, ease: 2.5 }), 4)).toBe(15);
  });

  it("الحد الأقصى 365 يوماً يُطبَّق في applyReview", () => {
    const card = makeCard({ repetitions: 10, interval: 300, ease: 3 });
    const next = applyReview(card, 5, 1.4);
    expect(next.interval).toBeLessThanOrEqual(365);
  });
});

describe("forgettingCoefficient — معامل النسيان", () => {
  it("0.8 + avg*0.12 ضمن النطاق", () => {
    expect(forgettingCoefficient(3, 10)).toBeCloseTo(0.8 + 3 * 0.12, 2);
  });

  it("محصور بين 0.7 و1.4", () => {
    expect(forgettingCoefficient(1, 10)).toBeGreaterThanOrEqual(0.7);
    expect(forgettingCoefficient(5, 10)).toBeLessThanOrEqual(1.4);
  });

  it("يتطلب 5 مراجعات على الأقل", () => {
    expect(forgettingCoefficient(4, 3)).toBe(1);
  });
});

describe("forgettingCoefficientLabel", () => {
  it("يعطي وصفاً لأي قيمة", () => {
    expect(typeof forgettingCoefficientLabel(1)).toBe("string");
    expect(typeof forgettingCoefficientLabel(1.2)).toBe("string");
    expect(typeof forgettingCoefficientLabel(0.8)).toBe("string");
  });
});

describe("applyReview", () => {
  it("إجابة حسنة ترفع التكرارات وتوسّع الفاصل", () => {
    const next = applyReview(makeCard(), 4, 1);
    expect(next.repetitions).toBe(1);
    expect(next.interval).toBe(1);
    expect(next.due).toBeGreaterThan(Date.now());
  });

  it("إجابة نسيت (q<3) تعيد التعلم: غداً + إعادة تعيين التكرارات", () => {
    const next = applyReview(makeCard({ repetitions: 5, interval: 30 }), 1, 1);
    expect(next.repetitions).toBe(0);
    expect(next.interval).toBe(1);
    expect(next.lapses).toBe(1);
    expect(next.due).toBeLessThanOrEqual(Date.now() + 24 * 60 * 60 * 1000 + 1000);
  });

  it("معامل النسيان يمدّد الفاصل", () => {
    const base = applyReview(makeCard({ repetitions: 2, interval: 10, ease: 2.5 }), 4, 1);
    const extended = applyReview(makeCard({ repetitions: 2, interval: 10, ease: 2.5 }), 4, 1.3);
    expect(extended.interval).toBeGreaterThan(base.interval);
  });
});

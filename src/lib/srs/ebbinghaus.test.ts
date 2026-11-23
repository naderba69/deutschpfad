/**
 * حارس نموذج إبنغهاوس: الصيغة، تقييم الكتابة وعقوبة المادة،
 * الفشل بإعادة جدولة خلال 10 دقائق، ووضع الامتحان (90% و3 أيام كحد أقصى).
 */
import {describe, expect, it} from "vitest";

import {
  ARTICLE_PENALTY,
  DAY_MS,
  EXAM_POLICY,
  LAPSE_RESCHEDULE_MS,
  MINUTE_MS,
  NORMAL_POLICY,
  applyEbbinghausReview,
  currentRetention,
  gradeTypedAnswer,
  intervalForRetention,
  retention,
  similarity,
  splitArticle,
  toEbbinghausCard,
} from "./ebbinghaus";
import {createCard} from "./sm2";
import type {Sm2CardData} from "@/types/srs";

const NOW = Date.UTC(2026, 9, 13, 12, 0, 0);

function card(over: Partial<Sm2CardData> = {}): Sm2CardData {
  return {...createCard({id: "c1", de: "die Zahl", ar: "الرقم", level: "A1", source: "lesson"}), ...over};
}

describe("معادلة الاحتفاظ R(t) = e^(ln(0.85)·t/S)", () => {
  it("عند t = S يكون الاحتفاظ 85% بالضبط", () => {
    expect(retention(5, 5)).toBeCloseTo(0.85, 10);
  });
  it("عند t = 0 يكون 100%", () => {
    expect(retention(0, 5)).toBe(1);
  });
  it("عند t = 2S يكون 0.85²", () => {
    expect(retention(10, 5)).toBeCloseTo(0.7225, 10);
  });
  it("الفاصل للوصول إلى 90% أقصر من S", () => {
    expect(intervalForRetention(10, 0.9)).toBeCloseTo(10 * (Math.log(0.9) / Math.log(0.85)), 8);
    expect(intervalForRetention(10, 0.9)).toBeLessThan(10);
  });
});

describe("تشابه الكتابة (مسافة ليفنشتاين)", () => {
  it("المتطابق = 1", () => {
    expect(similarity("Hallo", "hallo")).toBe(1);
  });
  it("حرف ناقص من خمسة = 0.8", () => {
    expect(similarity("Halo", "Hallo")).toBeCloseTo(0.8, 10);
  });
  it("فارغ مقابل نص = 0", () => {
    expect(similarity("", "Hallo")).toBe(0);
  });
});

describe("فصل المادة", () => {
  it("يفصل der/die/das", () => {
    expect(splitArticle("der Mann")).toEqual({article: "der", word: "Mann"});
    expect(splitArticle("Mann")).toEqual({word: "Mann"});
  });
});

describe("تقييم الإجابة المكتوبة وعقوبة المادة", () => {
  it("الصحيح بمادته = دقة 1", () => {
    expect(gradeTypedAnswer("die Zahl", "die Zahl")).toEqual({accuracy: 1, articleOk: true, lapse: false});
  });
  it("مادة خاطئة تُخصم وتصبح فشلاً", () => {
    const g = gradeTypedAnswer("der Zahl", "die Zahl");
    expect(g.articleOk).toBe(false);
    expect(g.accuracy).toBeCloseTo(1 - ARTICLE_PENALTY, 10);
    expect(g.lapse).toBe(true);
  });
  it("مادة ناقصة تُخصم", () => {
    const g = gradeTypedAnswer("Zahl", "die Zahl");
    expect(g.articleOk).toBe(false);
    expect(g.lapse).toBe(true);
  });
  it("إن لم تحمل البطاقة مادة لا عقوبة", () => {
    expect(gradeTypedAnswer("Zahl", "Zahl")).toEqual({accuracy: 1, articleOk: true, lapse: false});
  });
  it("الفارغ = صفر وفشل", () => {
    expect(gradeTypedAnswer("   ", "die Zahl")).toEqual({accuracy: 0, articleOk: false, lapse: true});
  });
});

describe("المراجعة: النجاح والفشل", () => {
  it("بطاقة جديدة ناجحة: موعدها بعد يوم في الوضع العادي", () => {
    const next = applyEbbinghausReview(card(), 1, NOW, NORMAL_POLICY);
    expect(next.due - NOW).toBe(DAY_MS);
    expect(next.srsModel).toBe("ebbinghaus-v1");
    expect(next.repetitions).toBe(1);
  });

  it("الفشل يعيد الجدولة خلال 10 دقائق بالضبط", () => {
    const next = applyEbbinghausReview(card({repetitions: 3, stability: 8, lastReview: NOW - DAY_MS}), 0.2, NOW, NORMAL_POLICY);
    expect(next.due - NOW).toBe(LAPSE_RESCHEDULE_MS);
    expect(LAPSE_RESCHEDULE_MS).toBe(10 * MINUTE_MS);
    expect(next.lapses).toBe(1);
    expect(next.repetitions).toBe(0);
  });

  it("الاستقرار يكبر مع النجاح ويهبط بعد الفشل", () => {
    const start = card({stability: 4, lastReview: NOW - 4 * DAY_MS, repetitions: 2});
    const ok = applyEbbinghausReview(start, 1, NOW, NORMAL_POLICY);
    const fail = applyEbbinghausReview(start, 0.1, NOW, NORMAL_POLICY);
    expect(ok.stability!).toBeGreaterThan(4);
    expect(fail.stability!).toBeLessThan(4);
  });

  it("الدقة المتوسطة (0.75) تبقى نجاحاً لا فشلاً", () => {
    const next = applyEbbinghausReview(card(), 0.75, NOW, NORMAL_POLICY);
    expect(next.repetitions).toBe(1);
  });

  it("السهولة لا تنزل تحت 1.3", () => {
    let c = card({ease: 1.3});
    c = applyEbbinghausReview(c, 0, NOW, NORMAL_POLICY);
    expect(c.ease).toBeGreaterThanOrEqual(1.3);
  });
});

describe("وضع الامتحان المكثّف", () => {
  it("لا يتجاوز الفاصل 3 أيام مهما كبر الاستقرار", () => {
    let c = card();
    for (let i = 0; i < 6; i++) {
      c = applyEbbinghausReview({...c, lastReview: NOW - DAY_MS * 30}, 1, NOW, EXAM_POLICY);
    }
    expect(c.interval).toBeLessThanOrEqual(3);
    expect(c.due - NOW).toBeLessThanOrEqual(3 * DAY_MS);
  });
  it("الهدف 90% أقصر من الهدف 85% للاستقرار نفسه", () => {
    expect(intervalForRetention(6, EXAM_POLICY.target)).toBeLessThan(intervalForRetention(6, NORMAL_POLICY.target));
  });
});

describe("التحويل من SM-2 دون تغيير الموعد", () => {
  it("يحفظ موعد البطاقة ويضيف الاستقرار من الفاصل القديم", () => {
    const old = card({repetitions: 4, interval: 15, lastReview: NOW - DAY_MS, due: NOW + 3 * DAY_MS});
    const migrated = toEbbinghausCard(old);
    expect(migrated.due).toBe(old.due);
    expect(migrated.stability).toBe(15);
    expect(migrated.srsModel).toBe("ebbinghaus-v1");
  });
  it("idempotent: التحويل مرتين لا يغيّر شيئاً", () => {
    const once = toEbbinghausCard(card({interval: 6, lastReview: NOW}));
    expect(toEbbinghausCard(once)).toBe(once);
  });
  it("الاحتفاظ الحالي = 100% لبطاقة لم تُراجَع بعد", () => {
    expect(currentRetention(card(), NOW)).toBe(1);
  });
});

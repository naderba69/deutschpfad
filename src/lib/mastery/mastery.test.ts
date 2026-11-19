import {describe, expect, it} from "vitest";
import {evaluateMastery, nextDayKey, reviewScheduleKeys, type Attempt} from "./mastery";

// أوقات الظهر لتفادي فروق المنطقة الزمنية
const D1 = new Date(2026, 9, 10, 12, 0).getTime();
const D1b = new Date(2026, 9, 10, 18, 0).getTime();
const D2 = new Date(2026, 9, 11, 12, 0).getTime();

const a = (ts: number, correct = true, hintUsed = false): Attempt => ({ts, correct, hintUsed});

describe("قاعدة الإتقان", () => {
  it("بلا محاولات: لم تبدأ", () => {
    expect(evaluateMastery([])).toEqual({status: "not-started", streak: 0});
  });

  it("إجابتان صحيحتان فقط: تعلّم جارٍ", () => {
    expect(evaluateMastery([a(D1), a(D2)]).status).toBe("learning");
  });

  it("3 صحيحة متتالية في يوم واحد: ليست إتقاناً بعد (لا اختبار مؤجَّل)", () => {
    const r = evaluateMastery([a(D1), a(D1b), a(D1b + 1000)]);
    expect(r).toEqual({status: "learning", streak: 3});
  });

  it("3 صحيحة متتالية بدون تلميح تمتد على يومين: إتقان", () => {
    expect(evaluateMastery([a(D1), a(D1b), a(D2)]).status).toBe("mastered");
  });

  it("التلميح يقطع السلسلة", () => {
    const r = evaluateMastery([a(D1), a(D1b), a(D2, true, true)]);
    expect(r.status).toBe("learning");
    expect(r.streak).toBe(0);
  });

  it("آخر إجابة خاطئة: تحتاج مراجعة حتى لو سبقتها صحيحات", () => {
    const r = evaluateMastery([a(D1), a(D1b), a(D2), a(D2 + 1000, false)]);
    expect(r.status).toBe("needs-review");
  });

  it("ترتيب المدخلات لا يغيّر النتيجة", () => {
    const ordered = [a(D1), a(D1b), a(D2)];
    const shuffled = [a(D2), a(D1), a(D1b)];
    expect(evaluateMastery(shuffled)).toEqual(evaluateMastery(ordered));
  });

  it("بعد الخطأ تكون المراجعة في اليوم التالي", () => {
    expect(nextDayKey(D1)).toBe("2026-10-11");
  });

  it("جدول المراجعة بعد الخطأ: بعد 1 و3 و7 أيام", () => {
    expect(reviewScheduleKeys(D1)).toEqual(["2026-10-11", "2026-10-13", "2026-10-17"]);
  });
});

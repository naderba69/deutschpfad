import {describe, expect, it} from "vitest";

import {addReview, currentStreak, EMPTY_REVIEW_LOG, REVIEW_LOG_KEEP_DAYS, reviewsOn} from "./review-log";

const at = (y: number, mo: number, d: number, h = 12) => new Date(y, mo - 1, d, h).getTime();

describe("سجل المراجعات", () => {
  it("يزيد الإجمالي وعدّ اليوم ولا يعدّل الأصل", () => {
    const a = addReview(EMPTY_REVIEW_LOG, at(2026, 10, 13));
    const b = addReview(a, at(2026, 10, 13, 18));
    expect(b).toEqual({total: 2, days: {"2026-10-13": 2}});
    expect(a.total).toBe(1);
  });

  it("الإجمالي لا ينقص بالتقليم، والأيام تُقلَّم فقط", () => {
    let log = EMPTY_REVIEW_LOG;
    for (let i = 0; i < REVIEW_LOG_KEEP_DAYS + 5; i++) {
      log = addReview(log, at(2024, 1, 1) + i * 24 * 3600 * 1000);
    }
    expect(log.total).toBe(REVIEW_LOG_KEEP_DAYS + 5);
    expect(Object.keys(log.days).length).toBe(REVIEW_LOG_KEEP_DAYS);
  });

  it("مراجعات اليوم", () => {
    const log = addReview(addReview(EMPTY_REVIEW_LOG, at(2026, 10, 13)), at(2026, 10, 12));
    expect(reviewsOn(log, at(2026, 10, 13, 20))).toBe(1);
    expect(reviewsOn(log, at(2026, 10, 14))).toBe(0);
  });
});

describe("السلسلة", () => {
  it("ثلاثة أيام متتالية تنتهي اليوم = 3", () => {
    let log = EMPTY_REVIEW_LOG;
    for (const d of [11, 12, 13]) log = addReview(log, at(2026, 10, d));
    expect(currentStreak(log, at(2026, 10, 13, 20))).toBe(3);
  });
  it("لم يراجع اليوم بعد: تبقى السلسلة من أمس", () => {
    let log = EMPTY_REVIEW_LOG;
    for (const d of [11, 12]) log = addReview(log, at(2026, 10, d));
    expect(currentStreak(log, at(2026, 10, 13, 9))).toBe(2);
  });
  it("فجوة تكسر السلسلة، وغياب يومين يصفّرها", () => {
    let log = EMPTY_REVIEW_LOG;
    for (const d of [10, 12]) log = addReview(log, at(2026, 10, d));
    expect(currentStreak(log, at(2026, 10, 13, 9))).toBe(1);
    expect(currentStreak(log, at(2026, 10, 15, 9))).toBe(0);
  });
});

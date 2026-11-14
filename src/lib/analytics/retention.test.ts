import { describe, expect, it } from "vitest";

import {
  computeRetention,
  dayKey,
  eventsPerActiveDay,
  startOfWeek,
} from "./retention";

/** بناء طابع زمني محلي الساعة 10:00 — يثبّت الاختبارات على «يوم» لا على ساعة */
const at = (year: number, month: number, day: number, hour = 10) =>
  new Date(year, month - 1, day, hour, 0, 0, 0).getTime();

const DAY = 86_400_000;

describe("retention — مفاتيح الأيام والأسابيع", () => {
  it("dayKey يستخدم اليوم المحلي لا UTC", () => {
    expect(dayKey(at(2026, 3, 7))).toBe("2026-03-07");
  });

  it("startOfWeek يعطي الاثنين لكل أيام الأسبوع", () => {
    // 2026-03-02 اثنين، 2026-03-08 أحد
    const monday = startOfWeek(at(2026, 3, 2));
    expect(new Date(monday).getDay()).toBe(1);
    for (const day of [3, 4, 5, 6, 7, 8]) {
      expect(startOfWeek(at(2026, 3, day)), `يوم ${day}`).toBe(monday);
    }
    expect(startOfWeek(at(2026, 3, 9))).toBe(monday + 7 * DAY);
  });
});

describe("retention — سجل فارغ", () => {
  it("يعيد كل المؤشرات صفراً/فارغاً دون ادعاء عدم عودة", () => {
    const summary = computeRetention([], at(2026, 3, 20));
    expect(summary).toEqual({
      activeDays: 0,
      firstDay: null,
      lastDay: null,
      spanDays: 0,
      density: 0,
      d1: null,
      d7: null,
      d30: null,
      returnedNextWeek: null,
      longestGapDays: 0,
      activeWeeks: 0,
    });
  });
});

describe("retention — النوافذ الزمنية", () => {
  it("يوم واحد نشاط: المؤشرات غير المكتملة null لا false", () => {
    const summary = computeRetention([{ ts: at(2026, 3, 10) }], at(2026, 3, 10, 12));
    expect(summary.activeDays).toBe(1);
    expect(summary.spanDays).toBe(1);
    expect(summary.d1).toBeNull();
    expect(summary.d7).toBeNull();
    expect(summary.d30).toBeNull();
    expect(summary.returnedNextWeek).toBeNull();
  });

  it("عودة في اليوم التالي تُحسب d1=true بعد اكتمال النافذة", () => {
    const events = [{ ts: at(2026, 3, 10) }, { ts: at(2026, 3, 11) }];
    const summary = computeRetention(events, at(2026, 3, 11, 20));
    expect(summary.d1).toBe(true);
    expect(summary.activeDays).toBe(2);
    expect(summary.spanDays).toBe(2);
    expect(summary.density).toBe(1);
  });

  it("غياب اليوم التالي بعد اكتمال النافذة يعني d1=false", () => {
    const events = [{ ts: at(2026, 3, 10) }, { ts: at(2026, 3, 14) }];
    const summary = computeRetention(events, at(2026, 3, 15));
    expect(summary.d1).toBe(false);
    // اليوم السابع من أول نشاط (17 مارس) لم يأتِ بعد — يجب ألّا يُدّعى false
    expect(summary.d7).toBeNull();
    expect(summary.activeDays).toBe(2);
  });

  it("d7=false عندما تمرّ النافذة دون نشاط في اليوم السابع", () => {
    const events = [{ ts: at(2026, 3, 10) }, { ts: at(2026, 3, 14) }];
    const summary = computeRetention(events, at(2026, 3, 20));
    expect(summary.d7).toBe(false);
    expect(summary.d30).toBeNull();
  });

  it("الاحداث في اليوم السابع تحديداً ترفع d7", () => {
    const events = [{ ts: at(2026, 3, 1) }, { ts: at(2026, 3, 8) }];
    const summary = computeRetention(events, at(2026, 3, 9));
    expect(summary.d7).toBe(true);
    expect(summary.d1).toBe(false);
  });

  it("d30 يحسم فقط بعد ثلاثين يوماً من أول نشاط", () => {
    const events = [{ ts: at(2026, 1, 1) }, { ts: at(2026, 1, 31) }];
    expect(computeRetention(events, at(2026, 1, 20)).d30).toBeNull();
    expect(computeRetention(events, at(2026, 2, 5)).d30).toBe(true);
  });

  it("لا تُحتسب الأحداث المستقبلية", () => {
    const events = [{ ts: at(2026, 3, 10) }, { ts: at(2026, 3, 12) }];
    const summary = computeRetention(events, at(2026, 3, 11));
    expect(summary.activeDays).toBe(1);
    expect(summary.lastDay).toBe("2026-03-10");
  });
});

describe("retention — الفجوات والأسابيع", () => {
  it("يحسب أطول فجوة بين يومين نشطين", () => {
    const events = [
      { ts: at(2026, 3, 1) },
      { ts: at(2026, 3, 2) },
      { ts: at(2026, 3, 10) },
    ];
    const summary = computeRetention(events, at(2026, 3, 11));
    expect(summary.longestGapDays).toBe(7);
  });

  it("لا فجوة عندما تكون الأيام متتالية", () => {
    const events = [{ ts: at(2026, 3, 1) }, { ts: at(2026, 3, 2) }, { ts: at(2026, 3, 3) }];
    expect(computeRetention(events, at(2026, 3, 3)).longestGapDays).toBe(0);
  });

  it("يعدّ الأسابيع النشطة ويكشف العودة في أسبوع لاحق", () => {
    const events = [{ ts: at(2026, 3, 3) }, { ts: at(2026, 3, 11) }];
    const summary = computeRetention(events, at(2026, 3, 15));
    expect(summary.activeWeeks).toBe(2);
    expect(summary.returnedNextWeek).toBe(true);
  });

  it("نشاط في الأسبوع نفسه لا يُعدّ عودة أسبوعية", () => {
    const events = [{ ts: at(2026, 3, 3) }, { ts: at(2026, 3, 5) }];
    // الآن في الأسبوع التالي (10 مارس) — النافذة مكتملة والحكم ممكن
    const summary = computeRetention(events, at(2026, 3, 10));
    expect(summary.activeWeeks).toBe(1);
    expect(summary.returnedNextWeek).toBe(false);
  });
});

describe("retention — كثافة الاستخدام", () => {
  it("يحسب كثافة الأيام النشطة من المدة", () => {
    // 3 أيام نشاط من 7 أيام
    const events = [{ ts: at(2026, 3, 1) }, { ts: at(2026, 3, 3) }, { ts: at(2026, 3, 7) }];
    const summary = computeRetention(events, at(2026, 3, 7));
    expect(summary.spanDays).toBe(7);
    expect(summary.activeDays).toBe(3);
    expect(summary.density).toBeCloseTo(3 / 7, 5);
  });

  it("eventsPerActiveDay يعيد null بلا أحداث", () => {
    expect(eventsPerActiveDay([], at(2026, 3, 1))).toBeNull();
  });

  it("eventsPerActiveDay يقسم على الأيام لا على الأحداث", () => {
    const events = [
      { ts: at(2026, 3, 1, 9) },
      { ts: at(2026, 3, 1, 11) },
      { ts: at(2026, 3, 1, 18) },
      { ts: at(2026, 3, 2, 10) },
    ];
    expect(eventsPerActiveDay(events, at(2026, 3, 3))).toBe(2);
  });
});

/**
 * حارس السلسلة اليومية على مفاتيح الأيام المحلية (YYYY-MM-DD).
 * تحويل الحدث إلى يوم محلي (dayKey) غير مغطّى باختبار مباشر هنا؛ الحارس يثبت حساب السلسلة.
 */
import {describe, expect, it} from "vitest";

import {computeStreak} from "./heatmap";

/** تاريخ محلي (لا UTC) حتى تبقى الاختبارات مستقلة عن منطقة الخادم */
const local = (y: number, mo: number, d: number, h = 12) => new Date(y, mo - 1, d, h).getTime();

describe("السلسلة اليومية بالأيام المحلية", () => {
  it("ثلاثة أيام متتالية تُعطي سلسلة 3 إذا كان اليوم مسجلاً", () => {
    const activity = new Map<string, number>([
      ["2026-10-11", 2],
      ["2026-10-12", 1],
      ["2026-10-13", 4],
    ]);
    expect(computeStreak(activity, local(2026, 10, 13, 20))).toBe(3);
  });

  it("إن لم يُسجَّل اليوم بعد تبقى السلسلة من أمس (حماية يوم واحد)", () => {
    const activity = new Map<string, number>([
      ["2026-10-11", 2],
      ["2026-10-12", 1],
    ]);
    expect(computeStreak(activity, local(2026, 10, 13, 9))).toBe(2);
  });

  it("فجوة تكسر السلسلة", () => {
    const activity = new Map<string, number>([
      ["2026-10-10", 1],
      ["2026-10-12", 1],
      ["2026-10-13", 1],
    ]);
    expect(computeStreak(activity, local(2026, 10, 13, 9))).toBe(2);
  });
});

/**
 * اختبارات وحدة — دوال إحصائيات الدراسة (منطق خالص)
 */
import { describe, expect, it } from "vitest";

import { formatMinutes } from "@/lib/analytics/session-format";

describe("formatMinutes — تنسيق الوقت", () => {
  it("أقل من ساعة → دقائق فقط", () => {
    expect(formatMinutes(45)).toBe("45 دقيقة");
  });

  it("ساعة فأكثر → ساعات ودقائق", () => {
    expect(formatMinutes(75)).toBe("1س 15د");
  });

  it("صفر → 0 دقيقة", () => {
    expect(formatMinutes(0)).toBe("0 دقيقة");
  });
});

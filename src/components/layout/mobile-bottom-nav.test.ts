import {describe, expect, it} from "vitest";

import {isMobileNavTabActive} from "@/lib/navigation/mobile-nav";

describe("حالة تبويب المسار السفلي", () => {
  it("يبقى نشطاً في صفحة المسار والدرس والمستوى", () => {
    expect(isMobileNavTabActive("/learning-path", "/learning-path")).toBe(true);
    expect(isMobileNavTabActive("/lesson/a1-01", "/learning-path")).toBe(true);
    expect(isMobileNavTabActive("/level/a1", "/learning-path")).toBe(true);
  });

  it("لا يفعّل الرئيسية على الصفحات الفرعية", () => {
    expect(isMobileNavTabActive("/", "/")).toBe(true);
    expect(isMobileNavTabActive("/lesson/a1-01", "/")).toBe(false);
  });
});

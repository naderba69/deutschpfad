/**
 * اختبارات وحدة — قاموس تصنيف الأخطاء
 */
import {describe, expect, it} from "vitest";

import {ERROR_TYPES, errorTypeDe, errorTypeLabel} from "@/lib/lesson/error-types";

describe("ERROR_TYPES", () => {
  it("يغطي الأنواع الأساسية الثلاثة عشر", () => {
    expect(Object.keys(ERROR_TYPES)).toHaveLength(13);
  });

  it("كل نوع له وصف عربي وألماني", () => {
    for (const info of Object.values(ERROR_TYPES)) {
      expect(info.ar.length).toBeGreaterThan(0);
      expect(info.de.length).toBeGreaterThan(0);
    }
  });
});

describe("errorTypeLabel", () => {
  it("يعيد التسمية الصحيحة", () => {
    expect(errorTypeLabel("grammar")).toBe("خطأ نحوي");
    expect(errorTypeLabel("case")).toBe("الحالة الإعرابية");
  });

  it("نوع غير معروف → رسالة عامة", () => {
    expect(errorTypeLabel("unknown" as never)).toBe("خطأ عام");
  });
});

describe("errorTypeDe", () => {
  it("يعيد المصطلح الألماني", () => {
    expect(errorTypeDe("conjugation")).toBe("Konjugation");
  });

  it("غير معروف → Fehler", () => {
    expect(errorTypeDe("x" as never)).toBe("Fehler");
  });
});

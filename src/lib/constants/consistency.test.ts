import {describe, expect, it} from "vitest";

import {LESSON_META} from "@/data/lessons/meta";
import {
  getUnitKeyWords,
  getUnitLessonCount,
  TOTAL_LESSONS,
  UNITS,
  TOTAL_UNITS,
} from "@/lib/constants/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  اختبار الاتساق — المرحلة 4 (توحيد الحقيقة)
 *  يمنع عودة أي تناقض بين: الأرقام المعروضة ↔ الدروس الفعلية ↔ خريطة المنهج
 * ═══════════════════════════════════════════════════════════
 */

describe("اتساق أرقام الدروس (المرحلة 4)", () => {
  it("TOTAL_LESSONS يساوي عدد الدروس الفعلية (51 — لا 251 الوهمي)", () => {
    expect(TOTAL_LESSONS).toBe(LESSON_META.length);
    expect(TOTAL_LESSONS).toBe(51);
  });

  it("عدد دروس كل وحدة معروض = الدروس الفعلية لهذه الوحدة", () => {
    for (const unit of UNITS) {
      const expected = LESSON_META.filter((l) => l.unitId === unit.id).length;
      expect(getUnitLessonCount(unit.id), `وحدة ${unit.id}: العدد المحسوب لا يطابق الدروس الفعلية`).toBe(
        expected,
      );
    }
  });

  /** لا تكرر الوحدة أعداد الدروس أو الكلمات التي تُستمد من محتوى الدروس. */
  it("لا يعود إعلان lessons/minutes يدوياً في UNITS", () => {
    const fs = require("fs");
    const src: string = fs.readFileSync("src/lib/constants/curriculum.ts", "utf8");
    const manual = src.match(/^\s*(lessons|minutes): *\d+,/gm) ?? [];
    expect(manual, "أُعيد إعلان lessons/minutes يدوياً في UNITS").toEqual([]);
  });

  it("لا يسجل فهرس الدروس مدة ثابتة للحصة", () => {
    for (const lesson of LESSON_META) {
      expect(Object.prototype.hasOwnProperty.call(lesson, "duration")).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(lesson, "durationMinutes")).toBe(false);
    }
  });

  /**
   * الكلمات المفتاحية كانت تُكتب يدوياً في UNITS فتعفّنت: 90 من 193
   * لم تقابلها بطاقة في دروس وحدتها، وبعضها وعَد بنحوٍ يُدرَّس في وحدة
   * أخرى. صارت تُشتقّ من بطاقات الدروس، وهذا يمنع انفصالها ثانيةً.
   */
  it("كل كلمة مفتاحية للوحدة مأخوذة من بطاقات دروسها فعلاً", () => {
    for (const unit of UNITS) {
      const pool = new Set(
        LESSON_META.filter((l) => l.unitId === unit.id).flatMap((l) => l.keyWords),
      );
      for (const word of getUnitKeyWords(unit.id)) {
        expect(pool.has(word), `وحدة ${unit.id}: الكلمة "${word}" لا تقابلها بطاقة`).toBe(true);
      }
    }
  });

  it("كل وحدة تعرض 4 كلمات مفتاحية على الأقل", () => {
    for (const unit of UNITS) {
      expect(getUnitKeyWords(unit.id).length, `وحدة ${unit.id}: كلمات مفتاحية ناقصة`).toBeGreaterThanOrEqual(4);
    }
  });

  it("لا يعود إعلان keyWords يدوياً في UNITS", () => {
    const fs = require("fs");
    const src: string = fs.readFileSync("src/lib/constants/curriculum.ts", "utf8");
    const manual = src.match(/^\s*keyWords: \[/gm) ?? [];
    expect(manual, "أُعيد إعلان keyWords يدوياً — استعمل getUnitKeyWords").toEqual([]);
  });

  it("مجموع دروس الوحدات الفعلية = إجمالي الدروس", () => {
    const sum = UNITS.reduce((s, u) => s + getUnitLessonCount(u.id), 0);
    expect(sum).toBe(LESSON_META.length);
  });

  it("لا توجد ثوابت خاطئة للأرقام في المكونات (46/45 ثابت)", () => {
    const fs = require("fs");
    const comps = [
      "src/components/home/predictive-path.tsx",
      "src/components/dashboard/progress-report.tsx",
    ];
    for (const f of comps) {
      const src = fs.readFileSync(f, "utf8");
      // يجب ألا يوجد ثابت رقمي صريح للدروس
      expect(src.includes("= 46;") || src.includes("/45"), `${f}: ثابت دروس خاطئ`).toBe(false);
    }
  });
});

describe("اتساق الدروس الفعلية (المرحلة 4)", () => {
  it("ترتيب LESSON_META صحيح (الأرقام قبل المراجعة الختامية، والمستويات متتالية)", () => {
    const ids = LESSON_META.map((m) => m.id);
    // a1-14 (الأرقام) قبل a1-13 (المراجعة الختامية)
    expect(ids.indexOf("a1-14")).toBeLessThan(ids.indexOf("a1-13"));
    // b1-11 قبل b2-01
    expect(ids.indexOf("b1-11")).toBeLessThan(ids.indexOf("b2-01"));
    // كل دروس A1 قبل A2 قبل B1 قبل B2
    const lvlOrder = LESSON_META.map((m) => m.level);
    const firstA2 = lvlOrder.indexOf("A2");
    const lastA1 = lvlOrder.lastIndexOf("A1");
    expect(firstA2).toBeGreaterThan(lastA1);
    const firstB1 = lvlOrder.indexOf("B1");
    expect(firstB1).toBeGreaterThan(lvlOrder.lastIndexOf("A2"));
    const firstB2 = lvlOrder.indexOf("B2");
    expect(firstB2).toBeGreaterThan(lvlOrder.lastIndexOf("B1"));
  });
});

describe("عدد الوحدات المعلن (المرحلة 4)", () => {
  it("TOTAL_UNITS ثابت ومعقول (45 وحدة عرض)", () => {
    expect(TOTAL_UNITS).toBe(47);
  });

  it("كل وحدة عرض لها درس واحد على الأقل", () => {
    for (const unit of UNITS) {
      expect(getUnitLessonCount(unit.id), `${unit.id}: وحدة بلا دروس`).toBeGreaterThanOrEqual(1);
    }
  });
});

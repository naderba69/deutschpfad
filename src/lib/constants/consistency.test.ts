import {describe, expect, it} from "vitest";

import {LESSON_META} from "@/data/lessons/meta";
import {getAllCurriculumUnits} from "@/data/curriculum/cefr-map";
import {
  getUnitKeyWords,
  getUnitLessonCount,
  getUnitMinutes,
  TOTAL_ESTIMATED_HOURS,
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
  it("TOTAL_LESSONS يساوي عدد الدروس الفعلية (48 — لا 251 الوهمي)", () => {
    expect(TOTAL_LESSONS).toBe(LESSON_META.length);
    expect(TOTAL_LESSONS).toBe(48);
  });

  it("عدد دروس كل وحدة معروض = الدروس الفعلية لهذه الوحدة", () => {
    for (const unit of UNITS) {
      const expected = LESSON_META.filter((l) => l.unitId === unit.id).length;
      expect(getUnitLessonCount(unit.id), `وحدة ${unit.id}: العدد المحسوب لا يطابق الدروس الفعلية`).toBe(
        expected,
      );
    }
  });

  /**
   * الحقلان lessons وminutes كانا يُكتبان يدوياً داخل UNITS فتعفّنا:
   * 44 وحدة من 46 تُعلن 5–6 دروس ولها درس واحد فعلي، و44 تُعلن زمناً
   * يزيد 15–25 دقيقة عن duration الدرس. حُذفا من النوع Unit، وهذا الحارس
   * يمنع إعادة إدخالهما بدل الدالتين المحسوبتين.
   */
  it("لا يعود إعلان lessons/minutes يدوياً في UNITS", () => {
    const fs = require("fs");
    const src: string = fs.readFileSync("src/lib/constants/curriculum.ts", "utf8");
    const manual = src.match(/^\s*(lessons|minutes): *\d+,/gm) ?? [];
    expect(manual, "أُعيد إعلان lessons/minutes يدوياً — استعمل getUnitLessonCount/getUnitMinutes").toEqual(
      [],
    );
  });

  it("الزمن المعروض للوحدة = مجموع duration دروسها الفعلية", () => {
    for (const unit of UNITS) {
      const expected = LESSON_META.filter((l) => l.unitId === unit.id).reduce((sum, l) => sum + l.duration, 0);
      expect(getUnitMinutes(unit.id), `وحدة ${unit.id}: الزمن المعروض لا يطابق دروسها`).toBe(expected);
      expect(getUnitMinutes(unit.id), `وحدة ${unit.id}: زمن صفري`).toBeGreaterThan(0);
    }
  });

  /**
   * كان TOTAL_ESTIMATED_HOURS مكتوباً يدوياً بـ 355 ساعة بلا مصدر:
   * مجموع الحقول اليدوية كان 40.7 ساعة، ومجموع الدروس الفعلية 28.5.
   * لا يجوز أن يَعِد الموقع بزمن لا يقابله محتوى.
   */
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

  it("إجمالي الساعات محسوب من الدروس لا مكتوباً يدوياً", () => {
    const real = Math.round(LESSON_META.reduce((sum, l) => sum + l.duration, 0) / 60);
    expect(TOTAL_ESTIMATED_HOURS).toBe(real);
    expect(TOTAL_ESTIMATED_HOURS).toBeLessThan(100);
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

describe("اتساق خريطة المنهج مع الدروس الفعلية (المرحلة 4)", () => {
  it("كل درس فعلي له وحدة مطابقة بالاسم والترتيب (لا أسماء قديمة)", () => {
    const mapById = new Map(getAllCurriculumUnits().map((u) => [u.id, u]));
    expect(mapById.size).toBe(LESSON_META.length);
    for (const m of LESSON_META) {
      const u = mapById.get(m.id);
      expect(u, `${m.id}: لا وحدة مطابقة في الخريطة`).toBeDefined();
      expect(u!.titleDe, `${m.id}: اسم الوحدة لا يطابق الدرس`).toBe(m.titleDe);
      expect(u!.level).toBe(m.level);
      // ترتيب الخريطة تسلسلي داخل المستوى (يُفحص في اختبار التسلسل)
    }
  });

  it("لا وحدات يتيمة في الخريطة (كل وحدة = درس فعلي)", () => {
    const lessonIds = new Set(LESSON_META.map((m) => m.id));
    const extra = getAllCurriculumUnits().filter((u) => !lessonIds.has(u.id));
    expect(extra.map((e) => e.id)).toEqual([]);
  });

  it("كل وحدة تحمل بيانات إثرائية حقيقية (أهداف، نقاط نحوية، وساطة، تفاعل)", () => {
    for (const u of getAllCurriculumUnits()) {
      expect(u.canDo.length, `${u.id}: بلا can-do`).toBeGreaterThanOrEqual(1);
      expect(u.grammar.length, `${u.id}: بلا نقاط نحوية`).toBeGreaterThanOrEqual(1);
      expect(u.mediationTask.length, `${u.id}: بلا وساطة`).toBeGreaterThan(10);
      expect(u.interactionTask.length, `${u.id}: بلا تفاعل`).toBeGreaterThan(10);
      expect(u.hours).toBeGreaterThan(0);
    }
  });

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
    expect(TOTAL_UNITS).toBe(46);
  });

  it("كل وحدة عرض لها درس واحد على الأقل", () => {
    for (const unit of UNITS) {
      expect(getUnitLessonCount(unit.id), `${unit.id}: وحدة بلا دروس`).toBeGreaterThanOrEqual(1);
    }
  });
});

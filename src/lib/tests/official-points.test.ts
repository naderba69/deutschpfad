/**
 * ═══════════════════════════════════════════════════════════
 *  حارس النقاط الرسمية — يثبّت المصادر ويربطها ببياناتنا الحقيقية
 *
 *  ثلاثة أنواع من الحماية:
 *   1) **أرقام رسمية مثبَّتة**: أي تعديل في `OFFICIAL_MODELS` يخالف المصادر
 *      (A1: 25/25/25/25 وقراءة/استماع 15 سؤالاً · A2: 20 سؤالاً × 1.25 مع
 *      عتبتي 45/75 و15/25 · B1/B2: 100 لكل مكوّن والنجاح 60) يُسقط الاختبار.
 *   2) **الرياضيات**: 15/15 → 25 وقيمة السؤال 1.67 · 20/20 → 25 و1.25 ·
 *      30/30 → 100 و3.33 · والناقص يُحوَّل تناسبيّاً **مع تنبيه**.
 *   3) **الربط بالبيانات الحقيقية**: نماذجنا الفعلية (A1/A2/B1 + أطقم B2)
 *      تُقاس: A1 استماعه 15 سؤالاً وB2 استماعه/قراءته 30 ⇒ التحويل الدقيق
 *      متاح لها؛ وما دون ذلك يُعلن تناسبيّاً — فلا ندّعي دقة غير قائمة.
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { B2_HOEREN_SETS, B2_LESEN_SETS } from "@/data/exams";
import { LEVEL_MODELS } from "@/data/exams/level-models";
import { gradeTeile } from "@/lib/tests/exam-scoring";
import { officialModulePoints, OFFICIAL_MODELS, type OfficialLevel } from "@/lib/tests/official-points";

describe("النقاط الرسمية — الأرقام المصرّح بها", () => {
  it("A1: 100 مجموع · نجاح 60 · كل مكوّن 25 · غير وحداتي", () => {
    const m = OFFICIAL_MODELS.A1;
    expect(m.modular).toBe(false);
    expect(m.total).toBe(100);
    expect(m.pass).toBe(60);
    expect(m.modules.hoeren).toMatchObject({ max: 25, itemsBased: true, officialItems: 15 });
    expect(m.modules.lesen).toMatchObject({ max: 25, itemsBased: true, officialItems: 15 });
    expect(m.modules.schreiben.max).toBe(25);
    expect(m.modules.sprechen.max).toBe(25);
    // كل جزء 25 ⇒ المجموع 100 (كتابي 75 + تحدث 25)
    const sum = Object.values(m.modules).reduce((n, s) => n + s.max, 0);
    expect(sum).toBe(100);
    expect(m.hurdlesAr.length).toBeGreaterThan(0); // «الأجزاء الأربعة تُقدَّم كلها»
  });

  it("A2: عتبتان إلزاميتان و20 سؤالاً × 1.25 في القراءة/الاستماع", () => {
    const m = OFFICIAL_MODELS.A2;
    expect(m.modular).toBe(false);
    expect(m.pass).toBe(60);
    expect(m.modules.hoeren).toMatchObject({ max: 25, officialItems: 20 });
    expect(m.modules.lesen).toMatchObject({ max: 25, officialItems: 20 });
    const hurdles = m.hurdlesAr.join(" | ");
    expect(hurdles).toContain("45 من 75");
    expect(hurdles).toContain("15 من 25");
  });

  it("B1/B2: وحداتي — 100 لكل مكوّن و60 للنجاح، وB2 بـ30 سؤالاً", () => {
    for (const level of ["B1", "B2"] as OfficialLevel[]) {
      const m = OFFICIAL_MODELS[level];
      expect(m.modular, level).toBe(true);
      expect(m.pass, level).toBe(60);
      for (const spec of Object.values(m.modules)) expect(spec.max, level).toBe(100);
      expect(m.passRuleAr, level).toContain("60 من 100");
    }
    expect(OFFICIAL_MODELS.B2.modules.hoeren.officialItems).toBe(30);
    expect(OFFICIAL_MODELS.B2.modules.lesen.officialItems).toBe(30);
    // B1: لا نجزم بعدد رسمي (المصادر تتفاوت 29–30) ⇒ لا ادّعاء دقة
    expect(OFFICIAL_MODELS.B1.modules.hoeren.officialItems).toBeUndefined();
    expect(OFFICIAL_MODELS.B1.modules.lesen.officialItems).toBeUndefined();
  });
});

describe("النقاط الرسمية — التحويل", () => {
  it("A1 استماع: تحويل دقيق بقيمة سؤال 1.67 (15 × 1.66 = 25)", () => {
    const all = officialModulePoints("A1", "hoeren", { correct: 15, total: 15 });
    expect(all).toMatchObject({ points: 25, max: 25, exact: true });
    expect(all?.perItem).toBe(1.67);
    expect(all?.noteAr).toBeUndefined();
    const half = officialModulePoints("A1", "hoeren", { correct: 9, total: 15 });
    expect(half?.points).toBe(15);
    expect(half?.exact).toBe(true);
  });

  it("A1 قراءة: أسئلتنا 12 مقابل 15 رسميًّا ⇒ تناسبي مع تنبيه", () => {
    const c = officialModulePoints("A1", "lesen", { correct: 12, total: 12 });
    expect(c).toMatchObject({ points: 25, max: 25, exact: false });
    expect(c?.noteAr).toContain("12");
    expect(c?.noteAr).toContain("15");
    expect(c?.perItem).toBeUndefined();
  });

  it("A2: التحويل الدقيق يكون عند 20 سؤالاً بقيمة 1.25", () => {
    const exact = officialModulePoints("A2", "hoeren", { correct: 20, total: 20 });
    expect(exact).toMatchObject({ points: 25, exact: true });
    expect(exact?.perItem).toBe(1.25);
    const ours = officialModulePoints("A2", "hoeren", { correct: 11, total: 15 });
    expect(ours).toMatchObject({ points: 18.3, exact: false }); // 25 × 11/15
    expect(ours?.noteAr).toContain("20");
  });

  it("B1: تناسبي دائماً (لا عدد رسمي مجزوم) وبسقف 100 للمكوّن", () => {
    const c = officialModulePoints("B1", "hoeren", { correct: 15, total: 15 });
    expect(c).toMatchObject({ points: 100, max: 100, exact: false });
    expect(c?.noteAr).toBeTruthy();
    const half = officialModulePoints("B1", "lesen", { correct: 7, total: 14 });
    expect(half?.points).toBe(50);
  });

  it("B2: تحويل دقيق بـ30 سؤالاً وقيمة 3.33", () => {
    const c = officialModulePoints("B2", "lesen", { correct: 30, total: 30 });
    expect(c).toMatchObject({ points: 100, max: 100, exact: true });
    expect(c?.perItem).toBe(3.33);
    const half = officialModulePoints("B2", "hoeren", { correct: 15, total: 30 });
    expect(half).toMatchObject({ points: 50, exact: true });
  });

  it("الكتابة والتحدث: لا نقطة رسمية (لا نقيسهما بأسئلة) والصفريُتجاهل", () => {
    expect(officialModulePoints("A1", "schreiben", { correct: 80, total: 100 })).toBeNull();
    expect(officialModulePoints("B2", "sprechen", { correct: 80, total: 100 })).toBeNull();
    expect(officialModulePoints("A1", "hoeren", { correct: 0, total: 0 })).toBeNull();
  });
});

describe("النقاط الرسمية — الربط ببياناتنا الحقيقية", () => {
  /** مجموع أسئلة مكوّن في نموذج عبر محرّك التصحيح نفسه */
  const totalOf = (teile: Parameters<typeof gradeTeile>[0]) => gradeTeile(teile, {}).total;

  it("A1: استماع النموذجين 15 سؤالاً ⇒ التحويل الدقيق قائم فعلاً", () => {
    for (const model of LEVEL_MODELS.A1) {
      const hTotal = totalOf(model.hoeren);
      expect(hTotal, model.id).toBe(15);
      const c = officialModulePoints("A1", "hoeren", { correct: 15, total: hTotal });
      expect(c?.exact, `${model.id}: يجب أن يكون التحويل دقيقاً`).toBe(true);
    }
  });

  it("A1: قراءة النموذجين 12 سؤالاً ⇒ تناسبي معلَن (لا ادّعاء دقة)", () => {
    for (const model of LEVEL_MODELS.A1) {
      const lTotal = totalOf(model.lesen);
      expect(lTotal, model.id).toBe(12);
      const c = officialModulePoints("A1", "lesen", { correct: lTotal, total: lTotal });
      expect(c?.exact, model.id).toBe(false);
      expect(c?.noteAr, model.id).toBeTruthy();
    }
  });

  it("A2/B1: أعداد أسئلتنا تختلف عن الرسمي ⇒ كل تحويلاتها تناسبية معلَنة", () => {
    for (const level of ["A2", "B1"] as const) {
      for (const model of LEVEL_MODELS[level]) {
        for (const key of ["hoeren", "lesen"] as const) {
          const total = totalOf(model[key]);
          const c = officialModulePoints(level, key, { correct: total, total });
          expect(c?.exact, `${model.id} ${key}`).toBe(false);
          expect(c?.noteAr, `${model.id} ${key}`).toBeTruthy();
        }
      }
    }
  });

  it("B2: الاستماع والقراءة 30 سؤالاً في كل طقم ⇒ تحويل دقيق", () => {
    for (const [i, set] of B2_HOEREN_SETS.entries()) {
      expect(totalOf(set), `طقم استماع ${i}`).toBe(30);
      expect(officialModulePoints("B2", "hoeren", { correct: 30, total: 30 })?.exact).toBe(true);
    }
    for (const [i, set] of B2_LESEN_SETS.entries()) {
      expect(totalOf(set), `طقم قراءة ${i}`).toBe(30);
      expect(officialModulePoints("B2", "lesen", { correct: 30, total: 30 })?.exact).toBe(true);
    }
  });
});

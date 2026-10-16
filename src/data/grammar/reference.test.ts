import { describe, expect, it } from "vitest";

import { GRAMMAR_CATEGORIES, GRAMMAR_REFERENCE } from "@/data/grammar/reference";
import { ERROR_TYPES } from "@/lib/lesson/error-types";

/**
 * حارس المرجع النحوي (Grammatik-Referenz):
 *  - سلامة البنية: معرّفات فريدة، عناوين عربية + ألمانية، شرح، «لماذا».
 *  - أمثلة بلا خلل: كل مثال بنصّ ألماني حقيقي + ترجمة عربية، بلا حروف عربية
 *    داخل النص الألماني.
 *  - الاتساق مع الواجهة والقاموس: كل فئة مُعلنة لها ≥1 موضوع (وإلا ظهرت
 *    قائمة فارغة للمتعلم)، وكل `mistakeLink` موجود فعلاً في `ERROR_TYPES`.
 *  - عدّادات غير هامشية (بوابة حراسة الحارس): المجموع والفئات.
 */

const ARABIC = /[\u0600-\u06FF]/;
const GERMAN = /[A-Za-zÄÖÜäöüß]{3,}/;

describe("GRAMMAR_REFERENCE — سلامة البنية", () => {
  it("عدد المواضيع معقول لكل المستويات وبمعرّفات فريدة وغير فارغة", () => {
    const ids = GRAMMAR_REFERENCE.map((t) => t.id);
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dup, `معرّفات مكرّرة: ${JSON.stringify(dup)}`).toEqual([]);
    ids.forEach((id) => expect(id.trim().length).toBeGreaterThan(2));

    expect(GRAMMAR_REFERENCE.length).toBeGreaterThanOrEqual(40);

    const perLevel: Record<string, number> = {};
    GRAMMAR_REFERENCE.forEach((t) => (perLevel[t.level] = (perLevel[t.level] ?? 0) + 1));
    for (const level of ["A1", "A2", "B1", "B2"]) {
      expect(perLevel[level] ?? 0, `مستوى ${level} بلا مواضيع`).toBeGreaterThanOrEqual(8);
    }
    expect(perLevel.A1 + perLevel.A2 + perLevel.B1 + perLevel.B2).toBe(GRAMMAR_REFERENCE.length);
  });

  it("كل موضوع له عنوانان (عربي/ألماني) وشرح غير فارغ", () => {
    const bad: string[] = [];
    GRAMMAR_REFERENCE.forEach((t) => {
      if (t.titleAr.trim().length < 3) bad.push(`${t.id}: titleAr`);
      if (!GERMAN.test(t.titleDe)) bad.push(`${t.id}: titleDe`);
      if (ARABIC.test(t.titleDe)) bad.push(`${t.id}: titleDe فيه عربي`);
      if (t.summary.trim().length < 20) bad.push(`${t.id}: summary قصير`);
    });
    expect(bad, bad.join(" · ")).toEqual([]);
  });

  it("كل موضوع له مثالان على الأقل، وكل مثال ألماني صحيح مع ترجمة عربية", () => {
    const bad: string[] = [];
    let examplesChecked = 0;
    GRAMMAR_REFERENCE.forEach((t) => {
      if (t.examples.length < 2) bad.push(`${t.id}: أمثلة=${t.examples.length}`);
      t.examples.forEach((e, i) => {
        examplesChecked += 1;
        if (!GERMAN.test(e.de)) bad.push(`${t.id}#${i + 1}: نص ألماني مفقود`);
        if (ARABIC.test(e.de)) bad.push(`${t.id}#${i + 1}: حرف عربي داخل الألماني`);
        if (!ARABIC.test(e.ar)) bad.push(`${t.id}#${i + 1}: ترجمة عربية مفقودة`);
      });
    });
    expect(bad, bad.join(" · ")).toEqual([]);
    expect(examplesChecked).toBeGreaterThan(80); // بوابة حراسة الحارس
  });

  it("كل موضوع له «لماذا؟» وجسر حفظ (Eselsbrücke)", () => {
    const missWhy = GRAMMAR_REFERENCE.filter((t) => (t.why ?? "").trim().length < 15).map((t) => t.id);
    const missEsels = GRAMMAR_REFERENCE.filter((t) => (t.eselsbruecke ?? "").trim().length < 10).map((t) => t.id);
    expect(missWhy, `بلا «لماذا»: ${missWhy.join(", ")}`).toEqual([]);
    expect(missEsels, `بلا جسر: ${missEsels.join(", ")}`).toEqual([]);
  });
});

describe("GRAMMAR_REFERENCE — الاتساق مع الواجهة والقاموس", () => {
  it("لا فئة مُعلنة بلا مواضيع ولا فئة مستعملة بدون تعريف (لا قائمة فارغة)", () => {
    const declared = Object.keys(GRAMMAR_CATEGORIES) as (keyof typeof GRAMMAR_CATEGORIES)[];
    const used = new Set(GRAMMAR_REFERENCE.map((t) => t.category));

    const emptyChips = declared.filter((c) => !used.has(c));
    expect(emptyChips, `فئات بلا مواضيع (قائمة فارغة في الواجهة): ${emptyChips.join(", ")}`).toEqual([]);

    const undeclared = GRAMMAR_REFERENCE.filter((t) => !declared.includes(t.category)).map((t) => t.id);
    expect(undeclared, `مواضيع بفئة غير مُعلنة: ${undeclared.join(", ")}`).toEqual([]);

    expect(Object.keys(GRAMMAR_CATEGORIES).length).toBeGreaterThanOrEqual(14);
    expect(used.size).toBe(Object.keys(GRAMMAR_CATEGORIES).length);
  });

  it("كل مثال نصيّ: لا تكرار للمعرّف مع فئة مختلفة، وكل mistakeLink موجود في قاموس الأخطاء", () => {
    const codes = new Set(Object.keys(ERROR_TYPES));
    const bad: string[] = [];
    let linked = 0;
    GRAMMAR_REFERENCE.forEach((t) => {
      if (!t.mistakeLink) return;
      linked += 1;
      if (!codes.has(t.mistakeLink)) bad.push(`${t.id} → ${t.mistakeLink} غير موجود`);
    });
    expect(bad, bad.join(" · ")).toEqual([]);
    expect(linked).toBe(GRAMMAR_REFERENCE.length); // كل موضوع مربوط بنوع خطأ
  });
});

import { describe, expect, it } from "vitest";

import { GRAMMAR_CATEGORIES, GRAMMAR_REFERENCE } from "@/data/grammar/reference";
import { ERROR_TYPES } from "@/lib/lesson/error-types";

/**
 * حارس المرجع النحوي (Grammatik-Referenz):
 *  - سلامة البنية: معرّفات فريدة، عناوين عربية + ألمانية، شرح، «لماذا».
 *  - اكتمال حقول الأمثلة فقط: نص ألماني وترجمة عربية غير فارغين، بلا حروف عربية
 *    داخل حقل الألمانية. هذا الحارس لا يثبت صحة الجملة نحوياً أو تداولياً.
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

  it("كل موضوع له مثالان على الأقل، ولكل مثال نص ألماني وترجمة عربية", () => {
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

describe("GRAMMAR_REFERENCE — دقة الحدود النحوية", () => {
  const topic = (id: string) => {
    const found = GRAMMAR_REFERENCE.find((item) => item.id === id);
    if (!found) throw new Error(`موضوع مفقود: ${id}`);
    return found;
  };

  it("لا يعمم أداة die على كل حالات الجمع ولا يخلط مثال أداة التعريف بغير المعدود", () => {
    expect(topic("a1-articles").examples.map((example) => example.de).join(" ")).not.toContain("eine Milch");
    expect(topic("a1-articles").summary).toMatch(/في الرفع/);
    expect(topic("a1-plural").summary).toMatch(/تتبدل بحسب الحالة/);
  });

  it("يفرق بين سؤال الفاعل، حركة المكان، أداتي الملكية، وظروف الربط", () => {
    expect(topic("a1-wfragen").summary).toContain("Wer kommt?");
    expect(topic("a2-wechsel").summary).toContain("ليست كل حركة داخل المكان");
    expect(topic("a2-possessiv").titleDe).toContain("Possessivartikel");
    expect(topic("a2-possessiv").summary).toContain("Possessivpronomen");
    expect(topic("a2-konnektoren").summary).toContain("ظروف ربط");
  });

  it("يحدد sein/haben كاتجاه شائع لا قاعدة مطلقة، ويذكر قيود تكوين Partizip II", () => {
    const summary = topic("a2-perfekt").summary;
    expect(summary).toContain("غالباً");
    expect(summary).toContain("-ieren");
    expect(summary).toContain("البادئات غير المنفصلة");
  });

  it("لا يساوي الحركات الانعكاسية حرفياً ولا يختزل تصريف جمع Dativ إلى den+n دائماً", () => {
    expect(topic("a2-reflexiv").why).toContain("لا تُترجم حرفياً");
    expect(topic("a2-reflexiv").summary).toContain("Ich wasche mir die Hände");
    expect(topic("a2-dativ").summary).toContain("إن لم ينتهِ أصلاً");
  });

  it("يميز صيغ الأمر والمودالات وحروف الربط بحسب حدّ القاعدة", () => {
    expect(topic("a1-imperativ").summary).toContain("Lies!");
    expect(topic("a2-modal").summary).toContain("du غالباً -st");
    expect(topic("a2-nebensaetze").summary).toContain("أدوات ربط تابعة");
    expect(topic("a2-esgibt").why).not.toContain("حرفياً");
  });

  it("يضبط حدود قواعد B1: V2 في الرئيسية، الاستعمال التداولي للأزمنة، ونهايات الصفات", () => {
    expect(topic("b1-word-order").summary).toContain("الموضع الثاني");
    expect(topic("b1-praeteritum").summary).toContain("الكلام اليومي");
    expect(topic("b1-adjektiv").summary).toContain("الجنس والعدد والحالة");
    expect(topic("b1-ndeklination").summary).toContain("ليست كل الأسماء المنتهية بـ -e");
  });

  it("يميز المعنى والسجل في Konjunktiv I والروابط والضمائر النسبية وModalpartikeln", () => {
    expect(topic("b2-konjunktiv1").summary).toContain("لا يعني وحده أن القول كاذب");
    expect(topic("b2-zustandspassiv").summary).toContain("ليس كل sein + Partizip II مجهولاً");
    expect(topic("b2-relativ-adv").summary).toContain("أقل رسمية في بعض السياقات");
    expect(topic("b2-partizipial").summary).toContain("تختلفان بحسب الفعل");
    expect(topic("b2-modalpartikeln").summary).toContain("لا تقابلها ترجمة عربية ثابتة");
  });

  it("يفصل عمليات الاشتقاق ودلالة Futur II ومجالات الادعاء الأكاديمي", () => {
    expect(topic("b2-nominalisierung").summary).toContain("لا تمثل وحدها مثالاً واضحاً");
    expect(topic("b2-futur2").summary).toContain("استنتاج عن حدث ماضٍ");
    expect(topic("b2-akademisch").summary).toContain("لا تستخدم صيغة الجزم");
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


describe("حراسة معنى aufstehen", () => {
  it("يترجم مثال الفعل المنفصل بمعنى النهوض", () => {
    const topic = GRAMMAR_REFERENCE.find((item) => item.id === "a1-trennbare");
    expect(topic?.examples.find((example) => example.de === "Ich stehe um sieben auf.")?.ar).toBe("أنهض في السابعة.");
  });
});

/**
 * a2-09 — النظرية بعمقها المحدود وأمثلةُ المقارنة وتحذيراتُها · التغذية الراجعة الآلية للنطق بـIPA (جزء من تدقيق الدرس)
 * فُصل من a2-09.test.ts في الدفعة 103 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { expectedPronunciationIpa } from "./fixtures";

describe("A2-09 lesson audit", () => {
  it("checks that theory depth, examples, comparison, and warnings match the limited scope", () => {
    expect(lessonA209.theory.map((block) => block.id)).toEqual(["t1", "t2"]);
    const expectedExamples = {
      t1: [
        "Ich helfe dem Vater beim Aufräumen.",
        "Das Fotoalbum gefällt Frau Yilmaz.",
        "Die Blumen gefallen der Nachbarin.",
        "Das Fahrrad gehört meinem Bruder.",
        "Wir gratulieren unserer Nachbarin zum Geburtstag.",
        "Ich danke den Kindern für die Hilfe.",
        "Kannst du mir helfen?",
        "Das Geschenk gefällt ihr.",
      ],
      t2: [
        "Wir feiern im Innenhof.",
        "Sie lädt die Nachbarn in den Innenhof ein.",
        "Ich komme mit meiner Schwester.",
        "Frau Yilmaz hilft beim Dekorieren.",
        "Die Blumen sind von den Gästen.",
        "Wir gratulieren ihr zum Geburtstag.",
        "Nach dem Essen räumen wir zusammen auf.",
        "Die Kinder stellen die Stühle an die Wand.",
        "Die Stühle stehen an der Wand.",
        "Sie bedankt sich bei den Kindern für die Hilfe.",
      ],
    } as const;
    const expectedArabicExamples = {
      t1: [
        "أساعد الأب في ترتيب المكان.",
        "ألبوم الصور يعجب السيدة يلماز.",
        "الزهور تعجب الجارة.",
        "الدراجة ملك لأخي.",
        "نهنئ جارتنا بعيد ميلادها.",
        "أشكر الأطفال على المساعدة.",
        "هل يمكنك مساعدتي؟",
        "تعجبها الهدية.",
      ],
      t2: [
        "نحتفل في الساحة الداخلية للمبنى.",
        "تدعو الجيران إلى الساحة الداخلية للمبنى.",
        "آتي مع أختي.",
        "تساعد السيدة يلماز في التزيين.",
        "الزهور مقدّمة من الضيوف.",
        "نهنئها بعيد ميلادها.",
        "بعد الطعام نرتب المكان معاً.",
        "يضع الأطفال الكراسي ملاصقةً للجدار.",
        "توجد الكراسي بمحاذاة الجدار.",
        "تشكر الأطفال على المساعدة.",
      ],
    } as const;

    for (const block of lessonA209.theory) {
      const paragraphs = block.explanationAr.split("\n").filter((paragraph) => paragraph.trim());
      expect(block.explanationAr.length, `${block.id} explanation length`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation max`).toBeLessThanOrEqual(2800);
      expect(paragraphs.length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      expect(block.whyAr.length, `${block.id} why`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length, `${block.id} Arabic comparison`).toBeGreaterThanOrEqual(250);
      expect(block.examples.map((example) => example.de), `${block.id} examples`).toEqual(
        expectedExamples[block.id as keyof typeof expectedExamples],
      );
      expect(block.examples.map((example) => example.ar), `${block.id} Arabic examples`).toEqual(
        expectedArabicExamples[block.id as keyof typeof expectedArabicExamples],
      );
      expect(block.examples.every((example) => example.ar.trim().length > 4)).toBe(true);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(3);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.length, `${block.id}: ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThanOrEqual(100);
      expect(block.eselsbruecke.length).toBeGreaterThan(30);
    }
    expect(lessonA209.theory[0]?.table?.rows.map(({ label, cells }) => [label, cells])).toEqual([
      ["مذكر", ["der Vater", "dem Vater", "Ich helfe dem Vater."]],
      ["مؤنث", ["die Mutter", "der Mutter", "Das gehört der Mutter."]],
      ["محايد", ["das Kind", "dem Kind", "Ich danke dem Kind."]],
      ["جمع", ["die Kinder", "den Kindern", "Ich helfe den Kindern."]],
      ["ضمائر المفرد", ["ich / du / er / sie / es", "mir / dir / ihm / ihr / ihm", "Das gefällt mir."]],
      ["ضمائر الجمع والصيغة الرسمية", ["wir / ihr / sie / Sie", "uns / euch / ihnen / Ihnen", "Ich danke Ihnen."]],
    ]);
    expect(lessonA209.theory[1]?.table?.rows.map(({ label, cells }) => [label, cells])).toEqual([
      ["رفقة", ["mit + Dativ", "mit meiner Schwester", "مع أختي"]],
      ["مكان/عند", ["bei + Dativ", "bei den Nachbarn", "عند الجيران"]],
      ["مصدر", ["von + Dativ", "von den Gästen", "من الضيوف"]],
      ["اتجاه بـ zu", ["zu + Dativ", "zur Feier", "إلى المناسبة"]],
      ["مكان مع in", ["in + Dativ", "im Innenhof", "في الساحة الداخلية"]],
      ["وجهة مع in", ["in + Akkusativ", "in den Innenhof", "إلى الساحة الداخلية"]],
      ["شيء نشكر عليه", ["für + Akkusativ", "für die Blumen", "على الزهور"]],
    ]);
    expect(lessonA209.summary).not.toContain("Dativ الكاملة");
    expect(lessonA209.theory[0]?.explanationAr).toContain("لا يعني ذلك أن كل كلمة تعبّر عن شخص تأتي في Dativ");
    expect(lessonA209.theory[1]?.explanationAr).toContain("لا تجعل «وجود حركة جسدية» وحده قاعدة");
  });

  it("documents automated pronunciation feedback without claiming a speaking outcome", () => {
    expect(lessonA209.pronunciation.items).toHaveLength(6);
    expect(lessonA209.pronunciation.items.map((item) => [item.de, item.ar])).toEqual([
      ["das Geschenk", "الهدية"],
      ["feiern", "يحتفل"],
      ["die Torte", "التورتة"],
      ["gratulieren", "يهنئ"],
      ["die Einladung", "الدعوة"],
      ["der Glückwunsch", "التهنئة"],
    ]);
    expect(
      Object.fromEntries(
        lessonA209.pronunciation.items.map((item) => [
          item.de,
          item.note.match(/\[[^\]]+\]/)?.[0],
        ]),
      ),
    ).toEqual(expectedPronunciationIpa);
    expect(lessonA209.pronunciation.items.every((item) => item.note.length > 20)).toBe(true);
    expect(lessonA209.pronunciation.shadowing?.map((item) => [item.de, item.ar])).toEqual([
      ["Herzlichen Glückwunsch zum Geburtstag!", "أطيب التهاني بعيد ميلادك!"],
      ["Ich lade dich herzlich ein.", "أدعوك بكل سرور."],
      ["Das Geschenk gefällt mir.", "تعجبني الهدية."],
      ["Ich helfe dir gern.", "أساعدك بسرور."],
    ]);
    const helfeShadowing = lessonA209.pronunciation.shadowing?.find((item) => item.de === "Ich helfe dir gern.");
    expect(helfeShadowing?.tip).toContain("المقطع الأول من helfe /ɛ/");
    expect(helfeShadowing?.tip).toContain("النهاية -e إلى /ə/");
    expect(lessonA209.pronunciation.tip).toContain("تقييم النطق هنا آلي");
    expect(lessonA209.pronunciation.tip).toContain("لا يعد حكماً بشرياً");
    expect(lessonA209.pronunciation.tip).toContain("لا يثبت وحده الإتقان");
    expect(lessonA209.lernziele.some((goal) => /Sprechen|التحدث|كلاماً مقوّماً/i.test(`${goal.de} ${goal.ar}`))).toBe(
      false,
    );

    for (const round of lessonA209.interaction?.[0]?.rounds ?? []) {
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      for (const option of round.options) {
        expect(option.de.trim().length).toBeGreaterThan(15);
        expect(option.ar.trim().length).toBeGreaterThan(10);
        expect(option.replyDe.trim().length).toBeGreaterThan(10);
        expect(option.replyAr.trim().length).toBeGreaterThan(10);
      }
    }
    expect(lessonA209.interaction?.[0]?.rounds[0]?.options.every((option) => option.best)).toBe(true);
    expect(lessonA209.interaction?.[0]?.rounds[1]?.options.every((option) => option.best)).toBe(true);
  });
});

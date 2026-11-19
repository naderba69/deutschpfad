import { describe, expect, it } from "vitest";

import { getLevelVocab } from "@/data/vocabulary";
import { B1_EXTRA2_VOCAB_1 } from "@/data/vocabulary/b1-extra2/part1";
import { B1_EXTRA2_VOCAB_2 } from "@/data/vocabulary/b1-extra2/part2";
import { B2_EXTRA2_PART1 } from "@/data/vocabulary/b2-extra2/part1";
import { B1_EXTRA2_VOCAB_3 } from "@/data/vocabulary/b1-extra2/part3";
import type { VocabEntry } from "@/data/vocabulary/a1";

function allEntries(): { level: string; entry: VocabEntry }[] {
  const out: { level: string; entry: VocabEntry }[] = [];
  for (const lvl of ["A1", "A2", "B1", "B2"] as const) {
    const vocab = getLevelVocab(lvl) as unknown as VocabEntry[];
    for (const entry of vocab) out.push({ level: lvl, entry });
  }
  return out;
}

describe("جرد المفردات — حقل النوع g (الدفعة 127: يُعرض في كل موضع)", () => {
  const KINDS = new Set(["der", "die", "das", "v", "adj", "adv", "pron", "poss", "det", "plural", "other"]);

  it("كل بند يحمل نوعاً مدعوماً وغير فارغ", () => {
    const bad: string[] = [];
    for (const { level, entry } of allEntries()) {
      if (!entry.g || !KINDS.has(entry.g)) bad.push(`${level}: «${entry.de}» g=${entry.g}`);
    }
    expect(bad, "أنواع خارج المفردات أو فارغة").toEqual([]);
  });
});


describe("مطابقة مركّبات Haus في مفردات الصحة والاقتصاد", () => {
  it("يحفظ معنى Krankenhausaufenthalt وجنسه، وميزانية الدولة في Staatshaushalt", () => {
    const hospitalStay = B1_EXTRA2_VOCAB_1.find(({ de }) => de === "der Krankenhausaufenthalt");
    const stateBudget = B2_EXTRA2_PART1.find(({ de }) => de === "der Staatshaushalt");
    expect(hospitalStay?.ar).toBe("الإقامة في المستشفى");
    expect(hospitalStay?.g).toBe("der");
    expect(stateBudget?.ar).toBe("ميزانية الدولة");
    expect(stateBudget?.g).toBe("der");
  });
});

describe("دفعة مفردات B1 #356–405 — المعاني والتراكيب", () => {
  const entries = B1_EXTRA2_VOCAB_2;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت الترجمة السياقية لكل مدخل في الدفعة المتتابعة", () => {
    expect(find("der Klempner")?.ar).toBe("سبّاك/فنّي صفائح معدنية");
    expect(find("renovieren")?.ar).toBe("يجدد");
    expect(find("streichen")?.ar).toBe("يدهن");
    expect(find("tapezieren")?.ar).toBe("يلصق ورق الجدران");
    expect(find("einziehen")?.ar).toBe("ينتقل للسكن في مسكن");
    expect(find("ausziehen")?.ar).toBe("يخلي المسكن/ينتقل منه");
    expect(find("annehmen")?.ar).toBe("يقبل/يفترض");
    expect(find("ablehnen")?.ar).toBe("يرفض");
    expect(find("die Ablehnung")?.ar).toBe("الرفض");
    expect(find("akzeptieren")?.ar).toBe("يقبل");
    expect(find("die Akzeptanz")?.ar).toBe("القبول");
    expect(find("die Zustimmung")?.ar).toBe("الموافقة");
    expect(find("verweigern")?.ar).toBe("يرفض");
    expect(find("erlauben")?.ar).toBe("يسمح");
    expect(find("die Erlaubnis")?.ar).toBe("الإذن");
    expect(find("verbieten")?.ar).toBe("يمنع");
    expect(find("das Verbot")?.ar).toBe("المنع");
    expect(find("erfüllen")?.ar).toBe("يحقق/يلبي");
    expect(find("die Bedingung erfüllen")?.ar).toBe("يحقق الشرط");
    expect(find("verlangen")?.ar).toBe("يطلب/يطالب");
    expect(find("die Forderung")?.ar).toBe("المطلب");
    expect(find("fordern")?.ar).toBe("يطالب");
    expect(find("jemanden um + Akk. bitten")?.ar).toBe("يطلب من شخص شيئاً/يلتمس منه");
    expect(find("die Bitte")?.ar).toBe("الرجاء");
    expect(find("jemandem (+ Dat.) antworten")?.ar).toBe("يجيب شخصاً/يرد عليه");
    expect(find("die Antwort")?.ar).toBe("الجواب");
    expect(find("fragen nach + Dat.")?.ar).toBe("يسأل عن");
    expect(find("die Frage")?.ar).toBe("السؤال");
    expect(find("die Erklärung")?.ar).toBe("الشرح/التصريح");
    expect(find("begreifen")?.ar).toBe("يستوعب");
    expect(find("die Begründung")?.ar).toBe("التعليل");
    expect(find("begründen")?.ar).toBe("يعلل");
    expect(find("überzeugend")?.ar).toBe("مقنع");
    expect(find("warnen vor + Dat.")?.ar).toBe("يحذر من");
    expect(find("die Warnung")?.ar).toBe("التحذير");
    expect(find("erinnern an + Akk.")?.ar).toBe("يذكّر بـ");
    expect(find("die Erinnerung")?.ar).toBe("الذاكرة/الذكرى");
    expect(find("vergessen")?.ar).toBe("ينسى");
    expect(find("bemerken")?.ar).toBe("يلاحظ");
    expect(find("die Bemerkung")?.ar).toBe("تعليق/ملاحظة");
    expect(find("merken")?.ar).toBe("يلحظ/يدرك");
    expect(find("erkennen")?.ar).toBe("يتعرف على/يدرك");
    expect(find("die Erkenntnis")?.ar).toBe("معرفة مستخلصة/استبصار");
    expect(find("feststellen")?.ar).toBe("يتبين");
    expect(find("die Feststellung")?.ar).toBe("المعاينة/التقرير");
    expect(find("zeigen")?.ar).toBe("يُظهر/يدلّ على");
    expect(find("beweisen")?.ar).toBe("يثبت");
    expect(find("der Beweis")?.ar).toBe("البرهان");
    expect(find("behaupten")?.ar).toBe("يدّعي/يصرّح مؤكداً");
    expect(find("die Behauptung")?.ar).toBe("الادعاء");
  });
});


describe("إغلاق مفردات B1-extra2/part2 — المداخل الأربعة الأخيرة", () => {
  const entries = B1_EXTRA2_VOCAB_2;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت ترجمة كل مدخل أخير في القائمة", () => {
    expect(find("bestätigen")?.ar).toBe("يؤكد");
    expect(find("die Bestätigung")?.ar).toBe("التأكيد/شهادة تأكيد");
    expect(find("der Zweifel")?.ar).toBe("الشك");
    expect(find("zweifellos")?.ar).toBe("بلا شك");
  });
});


describe("دفعة مفردات B1-extra2/part3 #410–459 — مراجعة مصدرية متتابعة", () => {
  const entries = B1_EXTRA2_VOCAB_3;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت معنى كل واحد من المداخل الخمسين المتتابعة", () => {
    const expected: [string, string][] = [
      ["die Begeisterung", "الحماس"], ["begeistert", "متحمس"],
      ["begeistern", "يثير الحماس"], ["die Enttäuschung", "خيبة الأمل"],
      ["enttäuschen", "يخيب الأمل"], ["die Überraschung", "المفاجأة"],
      ["überraschen", "يفاجئ"], ["der Stolz", "الفخر"],
      ["stolz sein auf + Akk.", "فخور بـ/يفتخر بـ"], ["die Scham", "الخجل/العار"],
      ["sich schämen", "يخجل"], ["der Mut", "الشجاعة"], ["mutig", "شجاع"],
      ["Angst haben vor + Dat.", "يخاف من"], ["ängstlich", "خائف"],
      ["die Ruhe", "الهدوء"], ["ruhig bleiben", "يبقى هادئاً"],
      ["die Nervosität", "التوتر/الارتباك"], ["nervös", "متوتر/عصبي"],
      ["die Unsicherheit", "عدم اليقين/انعدام الثقة"],
      ["sich sicher fühlen", "يشعر بالأمان/الثقة"],
      ["das Selbstbewusstsein", "الثقة بالنفس"], ["selbstbewusst", "واثق بنفسه"],
      ["die Zufriedenheit", "الرضا"], ["zufrieden mit + Dat.", "راضٍ عن"],
      ["die Unzufriedenheit", "عدم الرضا"], ["unzufrieden", "غير راضٍ"],
      ["das Bedürfnis", "الحاجة/الرغبة"], ["die Notwendigkeit", "الضرورة"],
      ["notwendig", "ضروري"], ["die Vermeidung", "التجنب"],
      ["trotzdem", "رغم ذلك"], ["obgleich", "مع أن"],
      ["während", "بينما/أثناء"], ["nachdem", "بعد أن"], ["bevor", "قبل أن"],
      ["sobald", "حالما"], ["solange", "ما دام/طالما"], ["bis", "حتى"],
      ["als", "عندما (ماضٍ)"], ["wenn", "عندما/إذا"], ["falls", "في حال"],
      ["damit", "لكي"], ["um ... zu", "من أجل أن"], ["ohne ... zu", "دون أن"],
      ["statt ... zu", "بدل أن"],
      ["indem", "من خلال أن/وذلك بأن (أداة ربط)"],
      ["dadurch, dass", "وذلك بأن/من خلال أن"], ["deshalb", "لذلك"],
      ["darum", "لهذا"],
    ];
    expect(expected).toHaveLength(50);
    for (const [de, ar] of expected) {
      expect(find(de)?.ar, `translation for ${de}`).toBe(ar);
    }
  });

  it("يثبت حالات الجر والتركيب في التراكيب التي دُققت", () => {
    expect(find("Angst haben vor + Dat.")?.de).toContain("Dat.");
    expect(find("stolz sein auf + Akk.")?.de).toContain("Akk.");
    expect(find("zufrieden mit + Dat.")?.de).toContain("Dat.");
    expect(find("sich sicher fühlen")?.g).toBe("v");
  });
});


describe("دفعة مفردات B1-extra2/part3 #460–509 — مراجعة مصدرية متتابعة", () => {
  const entries = B1_EXTRA2_VOCAB_3;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت معنى كل واحد من المداخل الخمسين المتتابعة", () => {
    const expected: [string, string][] = [
      ["daher", "لذلك/ومن ثم (سبباً أو نتيجةً)"], ["folglich", "وبالتالي"],
      ["darüber hinaus", "بالإضافة إلى"], ["zudem", "إضافة إلى"],
      ["ebenso", "كذلك/بالقدر نفسه"], ["genauso", "بالطريقة نفسها/بالقدر نفسه"],
      ["einerseits ... andererseits", "من ناحية ... ومن ناحية أخرى"],
      ["zum einen ... zum anderen", "من جهة ... ومن جهة أخرى"],
      ["im Gegensatz zu + Dat.", "على النقيض من"],
      ["außer (+ Dat.; Akk. bei manchen Bewegungsverben)", "باستثناء/عدا؛ يحكم Dativ غالباً، ويأتي Akkusativ في بعض الاستعمالات"],
      ["ausgenommen", "باستثناء/إلا"], ["inklusive", "بما في ذلك/شاملاً"],
      ["exklusive", "باستثناء/من دون (غير شامل)"], ["ungefähr", "تقريباً"],
      ["etwa", "حوالي"], ["circa", "نحو"], ["mindestens", "على الأقل"],
      ["höchstens", "على الأكثر"], ["zumindest", "على الأقل"], ["völlig", "كلياً"],
      ["teilweise", "جزئياً"], ["überwiegend", "في الغالب"],
      ["hauptsächlich", "أساساً/في المقام الأول"], ["besonders", "خصوصاً"],
      ["insbesondere", "بشكل خاص"], ["vor allem", "خصوصاً/قبل كل شيء"],
      ["tatsächlich", "فعلاً"], ["wirklich", "حقاً"], ["jedoch", "ومع ذلك"],
      ["dennoch", "رغم ذلك"], ["sonst", "وإلا/في غير ذلك"], ["sogar", "حتى"],
      ["sowieso", "على كل حال"], ["ohnehin", "في كل الأحوال"],
      ["immerhin", "على الأقل/ومع ذلك"], ["endlich", "أخيراً"],
      ["plötzlich", "فجأة"],
      ["inzwischen", "في هذه الأثناء/بحلول الآن بحسب السياق"],
      ["mittlerweile", "في هذه الأثناء/بحلول الآن بحسب السياق"],
      ["kürzlich", "مؤخراً"], ["neulich", "مؤخراً"], ["damals", "آنذاك"],
      ["früher", "سابقاً"], ["früher oder später", "عاجلاً أم آجلاً"],
      ["bald", "قريباً"], ["demnächst", "قريباً/في وقت قريب"],
      ["künftig", "مستقبلاً"], ["bisher", "حتى الآن"],
      ["bereits", "بالفعل"], ["schon", "بالفعل/مسبقاً"],
    ];
    expect(expected).toHaveLength(50);
    for (const [de, ar] of expected) {
      expect(find(de)?.ar, `translation for ${de}`).toBe(ar);
    }
  });
});

describe("دفعة مفردات B1-extra2/part3 #510–559 — مراجعة مصدرية متتابعة", () => {
  const entries = B1_EXTRA2_VOCAB_3;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت وجود المداخل الخمسين المتتابعة بعد التدقيق المرجعي", () => {
    const expected = [
      "noch nicht", "nicht mehr", "nichts mehr", "niemand mehr",
      "das Beispiel", "zum Beispiel", "die Gelegenheit", "die Möglichkeit", "die Gefahr",
      "gefährlich", "das Risiko", "riskieren", "die Seite", "der Aspekt", "der Punkt",
      "das Thema", "das Problem", "die Schwierigkeit", "das Hindernis", "die Herausforderung",
      "planen", "die Idee", "der Gedanke", "denken an + Akk.", "nachdenken über + Akk.",
      "träumen von + Dat.", "sich entscheiden für + Akk.", "das Ergebnis", "der Grund dafür",
      "die Aufregung", "die Trauer", "die Wut", "der Trost", "die Zuneigung", "das Mitleid",
      "der Neid", "die Eifersucht", "die Sehnsucht", "die Besorgnis", "der Zufall", "die Neugier",
      "die Ausnahme", "die Ausgabe", "die Lehre", "der Berufsabschluss", "die Anstellung",
      "der Anschluss", "die Verpflegung", "die Arbeitserlaubnis", "der Anhang",
    ];
    expect(expected).toHaveLength(50);
    for (const de of expected) expect(find(de), `reviewed entry ${de}`).toBeDefined();
    expect(entries.slice(100, 150).map(({ de }) => de)).toEqual(expected);
  });

  it("يحفظ التحسينات الترجمية المثبتة بالمراجع", () => {
    expect(find("die Möglichkeit")?.ar).toContain("الاحتمال");
    expect(find("der Punkt")?.ar).toContain("المسألة");
    expect(find("der Gedanke")?.ar).toBe("الفكرة/الخاطرة");
    expect(find("der Berufsabschluss")?.ar).toContain("مؤهل");
    expect(find("der Anschluss")?.ar).toContain("المواصلة");
  });
});

describe("دفعة إغلاق B1-extra2/part3 #560–579 — مراجعة مصدرية متتابعة", () => {
  const entries = B1_EXTRA2_VOCAB_3;
  const find = (de: string) => entries.find((entry) => entry.de === de);

  it("يثبت ترجمة كل مدخل من العشرين الأخيرة وترتيبها المتتابع", () => {
    const expected: [string, string][] = [
      ["der Absender", "المرسل"], ["der Empfänger", "المستلم"],
      ["die Postleitzahl", "الرمز البريدي"], ["der Briefkasten", "صندوق البريد"],
      ["die Konkurrenz", "المنافسة"],
      ["der Betrieb", "المؤسسة/مكان العمل أو المصنع بحسب السياق"],
      ["die Tätigkeit", "النشاط/العمل"],
      ["der Verdienst", "الدخل/الأجر"], ["die Zulage", "العلاوة"],
      ["der Urlaubstag", "يوم العطلة"],
      ["der Krankenstand", "عدد العاملين المرضى في مؤسسة؛ وفي النمسا: الغياب عن العمل بسبب المرض"],
      ["die Veranstaltung", "الفعالية"], ["die Meinungsverschiedenheit", "اختلاف الرأي"],
      ["das Erlebnis", "تجربة/حدث شخصي عاشه المرء"], ["die Begegnung", "اللقاء"],
      ["sich einigen", "يتفق"], ["sich beschweren", "يقدم شكوى"],
      ["befürchten", "يخشى"], ["vereinbaren", "يحدد موعداً/يتفق على"],
      ["einreichen", "يقدم/يسلّم (وثائق)"],
    ];
    expect(expected).toHaveLength(20);
    for (const [de, ar] of expected) expect(find(de)?.ar, `translation for ${de}`).toBe(ar);
    expect(entries.slice(150, 170).map(({ de }) => de)).toEqual(expected.map(([de]) => de));
  });
});

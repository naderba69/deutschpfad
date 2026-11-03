import {describe, expect, it} from "vitest";

import {getLevelVocab} from "@/data/vocabulary";
import {B1_EXTRA2_VOCAB_1} from "@/data/vocabulary/b1-extra2/part1";
import {B1_EXTRA2_VOCAB_2} from "@/data/vocabulary/b1-extra2/part2";
import {B1_EXTRA2_VOCAB_3} from "@/data/vocabulary/b1-extra2/part3";
import {B2_EXTRA2_PART1} from "@/data/vocabulary/b2-extra2/part1";
import {B2_EXTRA2_PART3} from "@/data/vocabulary/b2-extra2/part3";
import type { VocabEntry } from "@/data/vocabulary/a1";

/**
 * فحوص جرد المفردات (التدقيق الأكاديمي §15 — بند 8 و9):
 * 1) كل اسم مفرد بأداة (der/die/das) يبدأ بالأداة المطابقة لحقل الجنس.
 *    (باستثناءات مدققة: أعياد تُستخدم بلا أداة، chunks صفة+اسم)
 * 2) لا مدخل «أداة + اسم + مصدر» (تراكيب الحالة الخاطئة مثل der Müll trennen).
 */

/** استثناءات مدققة: أعياد/مناسبات تُستخدم عادةً بلا أداة مكتوبة */
const NO_ARTICLE_EXCEPTIONS = new Set([
  "Weihnachten", "Ostern", "Silvester", "Pfingsten", "Neujahr",
]);

function allEntries(): { level: string; entry: VocabEntry }[] {
  const out: { level: string; entry: VocabEntry }[] = [];
  for (const lvl of ["A1", "A2", "B1", "B2"] as const) {
    const vocab = getLevelVocab(lvl) as unknown as VocabEntry[];
    for (const entry of vocab) out.push({ level: lvl, entry });
  }
  return out;
}

describe("جرد المفردات — اتساق الجنس (تدقيق §15)", () => {
  const entries = allEntries();

  it("كل اسم يبدأ بـ der/die/das يطابق حقل الجنس", () => {
    const mismatches: string[] = [];
    for (const { level, entry } of entries) {
      if (entry.g !== "der" && entry.g !== "die" && entry.g !== "das") continue;
      const first = entry.de.split(/\s+/)[0] ?? "";
      if (first === entry.g) continue; // مطابق
      // استثناءات مدققة
      if (NO_ARTICLE_EXCEPTIONS.has(first)) continue; // عيد بلا أداة مكتوبة
      if (first !== "der" && first !== "die" && first !== "das") {
        // chunk يبدأ بصفة/كلمة أخرى (مثل demokratische Werte) — استثناء مقبول
        continue;
      }
      mismatches.push(`${level}: «${entry.de}» بحقل ${entry.g} (يبدأ بـ ${first})`);
    }
    expect(mismatches, `عدم تطابق جنس: ${mismatches.slice(0, 10).join(" | ")}`).toEqual([]);
  });

  it("لا مدخل يبدأ بـ der وينتهي بمصدر (النصب den — مثل der Müll trennen خطأ)", () => {
    // ملاحظة: «das Zimmer reservieren» و«die E-Mail schreiben» تراكيب فعلية صحيحة
    // (das/die لا تتغير في النصب). الخطأ الحقيقي فقط مع der ← den.
    const bad: string[] = [];
    const VERB_ENDINGS = ["en", "eln", "ern"];
    for (const { level, entry } of entries) {
      const words = entry.de.split(/\s+/);
      if (words.length < 3) continue;
      // مدخل صيغ متعددة (مثل der Student / den Studenten) — نموذج تصريف مقصود
      if (entry.de.includes("/")) continue;
      if (words[0] === "der") {
        const last = words[words.length - 1].toLowerCase();
        if (VERB_ENDINGS.some((e) => last.endsWith(e))) {
          bad.push(`${level}: «${entry.de}» (الصحيح: den ${entry.de.slice(4)})`);
        }
      }
    }
    expect(bad, `تراكيب حالة خاطئة: ${bad.slice(0, 10).join(" | ")}`).toEqual([]);
  });
});

describe("مراجعة ترجمات مصطلحات القواعد في المفردات", () => {
  const findEntry = (level: "A1" | "A2" | "B1" | "B2", de: string) =>
    (getLevelVocab(level) as unknown as VocabEntry[]).find((entry) => entry.de === de);

  it("يميز معنى alt بحسب الموصوف وتركيب العمر", () => {
    expect(findEntry("A1", "alt")?.ar).toBe(
      "قديم (للشيء) / كبير السن (للشخص)؛ وفي العمر: عمره ...",
    );
  });

  it("يحافظ على التمييز الصرفي والدلالي بين Liebe وlieben", () => {
    expect(findEntry("A1", "die Liebe")?.ar).toBe("الحب");
    expect(findEntry("A1", "lieben")?.ar).toBe("يحب");
    expect(findEntry("A1", "lieben")?.ex).toBe("Ich liebe meine Familie.");
  });

  it("يوضح وجوه ihr/ihre الملكية ويميزها من الضمير الشخصي", () => {
    expect(findEntry("A1", "ihr / ihre")?.ar).toBe(
      "أداة ملكية للغائبة أو للجمع؛ وتُكتب Ihr/Ihre للمخاطب الرسمي",
    );
    expect(findEntry("A1", "ihr / ihre")?.g).toBe("poss");
  });

  it("لا يترجم Partizip إلى معنى المشارك ولا يصنف تراكيب القواعد أفعالاً معجمية", () => {
    expect(findEntry("B2", "das Partizip I")?.ar).toContain("صيغة الفعل الوصفية الأولى");
    expect(findEntry("B2", "das Partizip II")?.ar).toContain("صيغة الفعل الوصفية الثانية");
    expect(findEntry("B2", "sich lösen lassen")?.ar).toContain("يمكن حلّه");
    expect(findEntry("B2", "sich lösen lassen")?.g).toBe("other");
    expect(findEntry("B1", "hätte/wäre + Partizip II")?.g).toBe("other");
    expect(findEntry("B1", "man")?.ar).not.toContain("بديل مجهول");
  });
});

describe("دفعة مفردات A1 — صيغ المدخلات والتمييز الصرفي", () => {
  const a1 = getLevelVocab("A1") as unknown as VocabEntry[];
  const find = (de: string) => a1.find((entry) => entry.de === de);

  it("يميز صيغة الاسم المفرد عن صيغة الجمع، ولا يخلط الجنس النحوي بعلامة الجمع", () => {
    expect(find("der Schuh (Pl.: Schuhe)")?.g).toBe("der");
    expect(find("die Socke (Pl.: Socken)")?.g).toBe("die");
    expect(find("das Bonbon (Pl.: Bonbons)")?.g).toBe("das");
    expect(find("der Handschuh (Pl.: Handschuhe)")?.g).toBe("der");
    expect(find("die Eltern")?.g).toBe("plural");
    expect(find("die Geschwister")?.g).toBe("plural");
  });

  it("يصنف صيغ الملكية والنفي وأداة النكرة، ويثبت تهجئة wolkig واكتمال أسماء الأشهر", () => {
    for (const word of ["mein / meine", "dein / deine", "sein / seine", "ihr / ihre"])
      expect(find(word)?.g, word).toBe("poss");
    expect(find("ein / eine")?.g).toBe("det");
    expect(find("kein / keine")?.g).toBe("det");
    expect(find("wolkig")?.ar).toBe("غائم");
    expect(find("wolki")).toBeUndefined();
    for (const month of ["der Januar", "der Februar", "der März", "der April", "der Mai", "der Juni / Juli", "der August", "der September", "der Oktober", "der November / Dezember"])
      expect(find(month), month).toBeDefined();
  });
});

describe("تمييز modernisieren من modern", () => {
  it("يترجم فعل modernisieren بالتحديث أو التجديد لا بـيحدث", () => {
    const entry = B2_EXTRA2_PART3.find((candidate) => candidate.de === "modernisieren");
    expect(entry?.ar).toBe("يحدّث/يجدّد");
    expect(entry?.ar).not.toBe("يحدث");
  });
});

describe("دفعة مفردات A2 — الأعداد والتصنيفات والمعاني السياقية", () => {
  const a2 = getLevelVocab("A2") as unknown as VocabEntry[];
  const find = (de: string) => a2.find((entry) => entry.de === de);

  it("يميز الجمع الحقيقي عن الجنس، ويحفظ صيغة المفرد والجمع للأسماء المعدودة", () => {
    expect(find("die Nebenkosten")?.g).toBe("plural");
    expect(find("der Kopfschmerz (Pl.: Kopfschmerzen)")?.g).toBe("der");
    expect(find("der Halsschmerz (Pl.: Halsschmerzen)")?.g).toBe("der");
    expect(find("das Möbel (Pl.: Möbel)")?.g).toBe("das");
    expect(find("die Ferien")?.g).toBe("plural");
    expect(find("der Fahrgast (Pl.: Fahrgäste)")?.g).toBe("der");
    expect(find("die Hausaufgabe (Pl.: Hausaufgaben)")?.g).toBe("die");
    expect(find("die Nachricht (Pl.: Nachrichten)")?.g).toBe("die");
  });

  it("يحفظ دقة المعاني النحوية والسياقية المصححة", () => {
    expect(find("das Perfekt")?.ar).toContain("يُبنى بـ haben/sein + Partizip II");
    expect(find("das Partizip")?.ar).toContain("Partizip I أو Partizip II");
    expect(find("das Gleis")?.ar).toContain("المسار/السكة");
    expect(find("die Warmmiete / die Kaltmiete")?.g).toBe("die");
    expect(find("die Warmmiete / die Kaltmiete")?.ar).toContain("التكاليف المشمولة عادةً");
    expect(find("die einfache Fahrt")?.g).toBe("die");
    expect(find("ob")?.ar).toContain("السؤال غير المباشر");
  });
});

describe("دفعة مفردات B1 — صيغ التصريف والتراكيب الدلالية", () => {
  const b1 = getLevelVocab("B1") as unknown as VocabEntry[];
  const find = (de: string) => b1.find((entry) => entry.de === de);
  const findPart1 = (de: string) => B1_EXTRA2_VOCAB_1.find((entry) => entry.de === de);
  const findPart2 = (de: string) => B1_EXTRA2_VOCAB_2.find((entry) => entry.de === de);

  it("يوضح تعدد معنى Arbeitsstelle ودقة ترجمة Arbeitszeit وفق Duden", () => {
    expect(find("die Arbeitsstelle")?.ar).toContain("مكان العمل/وظيفة");
    expect(find("die Arbeitszeit")?.ar).toContain("وقت/ساعات العمل");
  });

  it("يحافظ على صيغ العمل الموثقة ومعانيها المهنية الدقيقة", () => {
    expect(find("der Feierabend")?.ar).toContain("وقت الفراغ بعده");
    expect(find("krankgeschrieben werden")?.ar).toContain("يُثبَت طبياً");
    expect(find("der Krankenurlaub")).toBeUndefined();
    expect(find("der Lohnzettel")?.ar).toContain("بيان الأجر السنوي");
    expect(find("die Beförderung")?.ar).toContain("الترقية الوظيفية");
    expect(find("der Betriebsrat")?.ar).toContain("تمثيل العاملين");
    expect(find("die Gewerkschaft")?.ar).toBe("نقابة العمال");
    expect(find("der Tarifvertrag")?.ar).toContain("للأجور وشروط العمل");
    expect(find("der Mindestlohn")?.ar).toContain("القانوني");
    expect(find("der Vorgesetzte")?.ar).toContain("المسؤول الأعلى");
    expect(find("der Auszubildende")?.ar).toBe("المتدرب مهنياً");
    expect(find("die Berufsschule")?.ar).toContain("موازية للتدريب العملي في المؤسسة");
    expect(find("der Meister")?.ar).toContain("شهادة Meister المهنية");
    expect(find("der Fachmann (Pl.: Fachleute)")?.ar).toContain("الخبير المختص");
    expect(find("die Kompetenz")?.ar).toContain("الاختصاص المخوّل");
    expect(find("der Fachmann")).toBeUndefined();
    expect(find("sorgfältig")?.ar).toBe("حريص/يؤدي عمله بعناية");
    expect(find("sich ein Ziel setzen")?.ar).toBe("يضع هدفاً لنفسه");
    expect(find("die Zusammenarbeit")?.ar).toBe("التعاون");
    expect(find("der Kontakt")?.ar).toBe("تواصل/صلة");
    expect(find("den Termin vereinbaren")?.ar).toBe("يتفق على موعد");
    expect(find("die Realschule")?.ar).toContain("الشهادة المتوسطة");
    expect(find("die Gesamtschule")?.ar).toContain("Hauptschule وRealschule وGymnasium");
    expect(find("die Hausarbeit")?.ar).toBe("عمل كتابي يُنجزه الطالب في المنزل (واجب/بحث دراسي)");
    expect(find("der Professor")?.ar).toContain("لقب أكاديمي");
    expect(find("der Studienplatz")?.ar).toBe("مقعد جامعي");
    expect(find("die Einschreibung")?.ar).toContain("القيد الجامعي");
    expect(find("sich einschreiben")?.ar).toContain("جامعة/مؤسسة تعليم عالٍ");
    expect(find("die Bildung")?.ar).toContain("الثقافة المعرفية");
    expect(find("auswendig lernen")?.ar).toBe("يحفظ عن ظهر قلب");
    expect(find("die Gesundheitsvorsorge")?.ar).toContain("الحفاظ على الصحة والوقاية من المرض");
    expect(find("die Vorsorgeuntersuchung")?.ar).toContain("فحص وقائي دوري للكشف المبكر عن الأمراض");
    expect(find("die Wechselwirkung")?.ar).toContain("تأثير متبادل");
    expect(find("der Facharzt")?.ar).toBe("طبيب اختصاصي (بتدريب معتمد في تخصص طبي)");
    expect(find("der Hautarzt")?.ar).toBe("طبيب الجلدية");
    expect(find("operieren")?.ar).toBe("يجري عملية جراحية");
    expect(find("die Narkose")?.ar).toBe("التخدير العام");
    expect(find("den Zucker reduzieren")?.ar).toBe("يقلل استهلاك السكر");
    expect(find("das Fitnessstudio")?.g).toBe("das");
    expect(find("der Muskel")?.g).toBe("der");
    expect(find("die Kondition")?.g).toBe("die");
    expect(find("das Übergewicht")?.g).toBe("das");
    expect(find("sich gesund ernähren")?.g).toBe("v");
    expect(find("rauchen")?.g).toBe("v");
    expect(find("der Raucher")?.ar).toBe("المدخن");
    expect(find("das Rauchen aufgeben")?.g).toBe("v");
    expect(find("der Alkohol")?.g).toBe("der");
    expect(find("die Entspannung")?.g).toBe("die");
    expect(find("den Stress abbauen")?.g).toBe("v");
    expect(find("die Work-Life-Balance")?.ar).toBe("التوازن بين متطلبات العمل والحياة الشخصية");
    expect(find("der Umweltschützer")?.ar).toBe("المدافع عن البيئة");
    expect(find("die Umweltverschmutzung")?.g).toBe("die");
    expect(find("der Treibhauseffekt")?.g).toBe("der");
    expect(find("das Kohlendioxid")?.g).toBe("das");
    expect(find("der CO2-Ausstoß")?.g).toBe("der");
    expect(find("die Windenergie")?.g).toBe("die");
    expect(find("die Wasserkraft")?.g).toBe("die");
    expect(find("das Atomkraftwerk")?.g).toBe("das");
    expect(find("die Strahlung")?.g).toBe("die");
    expect(find("der Atommüll")?.ar).toBe("النفايات النووية");
    expect(find("der Kompost")?.g).toBe("der");
    expect(find("das Altkleid (Pl.: Altkleider)")?.g).toBe("das");
    expect(find("der Secondhandladen")?.ar).toBe("متجر للسلع المستعملة");
    expect(find("der Second-Hand-Laden")).toBeUndefined();
    expect(find("die Mehrwegflasche")?.ar).toBe("زجاجة قابلة للإرجاع وإعادة الاستخدام");
    expect(find("die Plastiktüte")?.g).toBe("die");
    expect(find("der Plastikmüll")?.g).toBe("der");
    expect(find("die Müllvermeidung")?.ar).toBe("منع توليد النفايات");
    expect(find("nachhaltig leben")?.ar).toBe("يعيش باستدامة");
    expect(find("der ökologische Fußabdruck")?.ar).toBe("البصمة البيئية");
    expect(find("die Tierwelt")?.ar).toBe("عالم الحيوان");
    expect(find("die Pflanzenwelt")?.ar).toBe("عالم النبات");
    expect(find("die Artenvielfalt")?.ar).toBe("التنوع البيولوجي");
    expect(find("das Tier schützen")?.ar).toBe("يحمي الحيوان");
    expect(find("der Nationalpark")?.ar).toBe("الحديقة الوطنية");
    expect(find("das Naturschutzgebiet")?.ar).toBe("محمية طبيعية");
    expect(find("der Fluss")?.ar).toBe("النهر");
    expect(findPart1("der See")?.ar).toBe("البحيرة");
    expect(findPart1("das Meer")?.g).toBe("das");
    expect(findPart1("die Küste")?.g).toBe("die");
    expect(findPart1("die Insel")?.g).toBe("die");
    expect(findPart1("der Berg")?.g).toBe("der");
    expect(findPart1("das Tal")?.g).toBe("das");
    expect(findPart1("die Wiese")?.g).toBe("die");
    expect(findPart1("das Feld")?.g).toBe("das");
    expect(findPart1("der Bauernhof")?.g).toBe("der");
    expect(findPart1("der Landwirt")?.g).toBe("der");
    expect(findPart1("die Landwirtschaft")?.g).toBe("die");
    expect(findPart1("die Landwirtschaft")?.ar).toBe("الزراعة وتربية الماشية");
    expect(findPart1("biologisch")?.g).toBe("adj");
    expect(findPart1("der Bioladen")?.g).toBe("der");
    expect(findPart1("der Bio-Laden")).toBeUndefined();
    expect(findPart1("saisonal")?.g).toBe("adj");
    expect(findPart1("regional")?.ar).toBe("محلي/إقليمي");
    expect(findPart1("digital")?.g).toBe("adj");
    expect(findPart1("der Scanner")?.ar).toBe("الماسح الضوئي");
    expect(findPart1("das Kabel")?.g).toBe("das");
    expect(findPart1("der Akku")?.ar).toBe("بطارية قابلة لإعادة الشحن");
    expect(findPart1("das Ladegerät")?.g).toBe("das");
    expect(findPart1("der WLAN-Router")?.g).toBe("der");
    expect(findPart1("die App herunterladen")?.ar).toBe("يحمّل تطبيقاً");
    expect(findPart1("das Passwort ändern")?.g).toBe("v");
    expect(findPart1("die Privatsphäre")?.g).toBe("die");
    expect(findPart1("die Sicherheitseinstellung")?.g).toBe("die");
    expect(findPart1("das Update")?.g).toBe("das");
    expect(findPart1("aktualisieren")?.ar).toBe("يحدّث");
    expect(findPart1("der Virus")?.g).toBe("der");
    expect(findPart1("Computer abstürzen")?.ar).toBe("يتعطل الحاسوب فجأة");
    expect(findPart1("die Datei speichern")?.g).toBe("v");
    expect(findPart1("den Ordner öffnen")?.g).toBe("v");
    expect(findPart1("der E-Mail-Anhang")?.g).toBe("der");
    expect(findPart1("der E-Mail-Anhang")?.ar).toBe("مرفق البريد الإلكتروني");
    expect(findPart1("das soziale Netzwerk")?.ar).toBe("شبكة تواصل اجتماعي");
    expect(findPart1("der Beitrag")?.ar).toBe("منشور");
    expect(findPart1("der Kommentar")?.g).toBe("der");
    expect(findPart1("kommentieren")?.ar).toBe("يعلّق على منشور/موضوع");
    expect(findPart1("teilen")?.ar).toBe("يشارك (ينشر)");
    expect(findPart1("jemandem/etwas (+ Dat.) folgen")?.ar).toContain("يتابع حساباً في شبكة اجتماعية");
    expect(findPart1("der Follower")?.g).toBe("der");
    expect(findPart1("das Profil")?.g).toBe("das");
    expect(findPart1("die Nachricht senden")?.ar).toBe("يرسل رسالة");
    expect(findPart1("das Video hochladen")?.g).toBe("v");
    expect(findPart1("die Online-Bestellung")?.g).toBe("die");
    expect(findPart1("das Onlinebanking")?.ar).toBe("الخدمات المصرفية عبر الإنترنت");
    expect(findPart1("das Online-Banking")).toBeUndefined();
    expect(findPart1("der Einkauf im Internet")?.g).toBe("der");
    expect(findPart1("die Lieferung")?.g).toBe("die");
    expect(findPart1("die Bewertung")?.g).toBe("die");
    expect(findPart1("bewerten")?.g).toBe("v");
    expect(findPart1("der Erfahrungsbericht")?.ar).toBe("تقرير عن تجربة");
    expect(findPart2("die Ansicht")?.g).toBe("die");
    expect(findPart2("die Einstellung")?.ar).toBe("التوجّه/الموقف");
    expect(findPart2("die Haltung")?.g).toBe("die");
    expect(findPart2("der Konflikt")?.ar).toBe("النزاع");
    expect(findPart2("der Misserfolg")?.ar).toBe("الفشل");
    expect(findPart2("scheitern")?.ar).toBe("يفشل");
    expect(findPart2("die Erwartung")?.g).toBe("die");
    expect(findPart2("wünschen")?.ar).toBe("يتمنى");
    expect(findPart2("glauben")?.ar).toBe("يعتقد");
    expect(findPart2("meinen")?.ar).toBe("يرى (رأياً)");
    expect(findPart2("etwas finden (Meinung)")?.ar).toBe("يرى/يقيّم شيئاً (لإبداء الرأي)");
    expect(findPart2("viel/wenig von jemandem/etwas halten (+ Dat.)")?.g).toBe("v");
    expect(findPart2("beurteilen")?.ar).toBe("يحكم على");
    expect(findPart2("die Kritik")?.g).toBe("die");
    expect(findPart2("kritisieren")?.ar).toBe("ينتقد");
    expect(findPart2("loben")?.ar).toBe("يمدح");
    expect(findPart2("das Lob")?.g).toBe("das");
    expect(findPart2("übernehmen")?.ar).toBe("يتولى/يتسلّم");
    expect(findPart2("die Reise buchen")?.ar).toBe("يحجز رحلة");
    expect(findPart2("die Pauschalreise")?.ar).toBe("رحلة سياحية شاملة التكاليف");
    expect(findPart2("die Städtereise")?.ar).toBe("رحلة إلى مدينة أو مدن");
    expect(findPart2("die Rundreise")?.ar).toBe("رحلة تجوال");
    expect(findPart2("die Kreuzfahrt")?.ar).toBe("رحلة سياحية بحرية");
    expect(findPart2("das Visum beantragen")?.ar).toBe("يتقدم بطلب للحصول على تأشيرة");
    expect(findPart2("die Botschaft")?.ar).toBe("السفارة");
    expect(findPart2("das Konsulat")?.g).toBe("das");
    expect(findPart2("die Einreise")?.ar).toBe("دخول البلاد");
    expect(findPart2("die Ausreise")?.ar).toBe("مغادرة البلاد");
    expect(findPart2("der Aufenthalt")?.g).toBe("der");
    expect(findPart2("die Aufenthaltserlaubnis")?.ar).toBe("تصريح الإقامة");
    expect(findPart2("das Arbeitsvisum")?.ar).toBe("تأشيرة العمل");
    expect(findPart2("das Studentenvisum")?.ar).toBe("تأشيرة طالب");
    expect(findPart2("der Campingplatz")?.ar).toBe("موقع تخييم مُجهّز");
    expect(findPart2("das Ferienhaus")?.ar).toBe("بيت العطلة");
    expect(findPart2("die Ferienwohnung")?.g).toBe("die");
    expect(findPart2("das Hotelzimmer")?.ar).toBe("غرفة الفندق");
    expect(findPart2("das Frühstück inklusive")?.ar).toBe("فطور مشمول");
    expect(findPart2("die Gruppe")?.g).toBe("die");
    expect(findPart2("einen Ausflug machen")?.ar).toBe("يقوم برحلة/نزهة");
    expect(findPart2("die Wanderung")?.ar).toBe("نزهة/رحلة مشي طويلة في الطبيعة");
    expect(findPart2("der Strandurlaub")?.ar).toBe("عطلة على الشاطئ");
    expect(findPart2("der Skiurlaub")?.g).toBe("der");
    expect(findPart2("den Koffer packen")?.ar).toBe("يحزم الحقيبة");
    expect(findPart2("der Reisepass")?.g).toBe("der");
    expect(findPart2("lösen")?.ar).toBe("يحل");
    expect(findPart2("die Lösung")?.ar).toBe("الحل");
    expect(findPart2("der Vorschlag")?.ar).toBe("الاقتراح");
    expect(findPart2("vorschlagen")?.ar).toBe("يقترح");
    expect(findPart2("beraten")?.ar).toBe("يقدّم المشورة/يتشاور");
    expect(findPart2("die Beratung")?.ar).toBe("الاستشارة/المشاورة");
    expect(findPart2("der Grund")?.ar).toBe("السبب");
    expect(findPart2("erfolgreich")?.ar).toBe("ناجح");
    expect(findPart2("auspacken")?.ar).toBe("يفرغ الحقيبة/يفك التغليف");
    expect(findPart2("das Souvenir")?.ar).toBe("التذكار");
    expect(findPart2("die Postkarte")?.ar).toBe("البطاقة البريدية");
    expect(findPart2("der Sonnenbrand")?.ar).toBe("حرق/احمرار الجلد بسبب الشمس");
    expect(findPart2("der Sonnenschutz")?.ar).toBe("وسيلة للوقاية من الشمس");
    expect(findPart2("die Reiseapotheke")?.ar).toBe("حقيبة أدوية وإسعافات للسفر");
    expect(findPart2("die Nachrichtensendung")?.ar).toBe("نشرة الأخبار");
    expect(findPart2("die Tagesschau")?.ar).toBe("نشرة «تاغسشاو» الإخبارية الألمانية");
    expect(findPart2("der Wetterbericht")?.ar).toBe("نشرة الطقس");
    expect(findPart2("der Sportbericht")?.ar).toBe("التقرير الرياضي");
    expect(findPart2("die Zeitung lesen")?.ar).toBe("يقرأ الصحيفة");
    expect(findPart2("das Magazin")?.ar).toBe("المجلة");
    expect(findPart2("der Redakteur")?.ar).toBe("المحرر الصحفي");
    expect(findPart2("der Reporter")?.ar).toBe("المراسل الصحفي");
    expect(findPart2("das Interview")?.ar).toBe("المقابلة");
    expect(findPart2("die Umfrage")?.ar).toBe("الاستطلاع");
    expect(findPart2("die Statistik")?.ar).toBe("الإحصاء");
    expect(findPart2("die Zahl")?.ar).toBe("العدد/القيمة العددية");
    expect(findPart2("das Prozent")?.ar).toBe("النسبة المئوية");
    expect(findPart2("die Hälfte")?.ar).toBe("النصف");
    expect(findPart2("das Drittel")?.ar).toBe("الثلث");
    expect(findPart2("das Viertel")?.ar).toBe("الربع");
    expect(findPart2("der Durchschnitt")?.ar).toBe("المتوسط");
    expect(findPart2("die Tendenz")?.ar).toBe("الاتجاه");
    expect(findPart2("steigen")?.ar).toBe("يرتفع");
    expect(findPart2("im Vergleich zu + Dat.")?.ar).toBe("مقارنةً بـ");
    expect(findPart2("die Ähnlichkeit")?.ar).toBe("التشابه");
    expect(findPart2("sich entwickeln")?.ar).toBe("يتطور");
    expect(findPart2("die Veränderung")?.ar).toBe("التغيير");
    expect(findPart2("sich verändern")?.ar).toBe("يتغير");
    expect(findPart2("die Verbesserung")?.ar).toBe("التحسين");
    expect(findPart2("die Verschlechterung")?.ar).toBe("التدهور");
    expect(findPart2("sich verschlechtern")?.ar).toBe("يتدهور");
    expect(findPart2("sich verabschieden")?.ar).toBe("يودع");
    expect(findPart2("begrüßen")?.ar).toBe("يرحّب بـ/يستحسن");
    expect(findPart2("die Begrüßung")?.ar).toBe("الترحيب");
    expect(findPart2("sich vorstellen")?.ar).toBe("يعرّف بنفسه");
    expect(findPart2("die Vorstellung")?.ar).toBe("التعريف");
    expect(findPart2("zu Besuch kommen")?.ar).toBe("يأتي في زيارة");
    expect(findPart2("der Gast")?.ar).toBe("الضيف");
    expect(findPart2("sich bedanken")?.ar).toBe("يشكر");
    expect(findPart2("der Dank")?.ar).toBe("الشكر");
    expect(findPart2("einen Streit schlichten")?.ar).toBe("يفضّ النزاع");
    expect(findPart2("sich vertragen")?.ar).toBe("ينسجم مع شخص ويعيش معه بلا خلاف");
    expect(findPart2("sich versöhnen")?.ar).toBe("يتصالح بعد خلاف/يستعيد الود");
    expect(findPart2("helfen bei + Dat.")?.ar).toBe("يساعد في");
    expect(findPart2("die Hilfe")?.ar).toBe("المساعدة");
    expect(findPart2("die Unterstützung")?.ar).toBe("الدعم");
    expect(findPart2("sich sorgen um + Akk.")?.ar).toBe("يقلق على");
    expect(findPart2("die Sorge")?.ar).toBe("القلق");
    expect(findPart2("die Höflichkeit")?.ar).toBe("اللباقة/حسن السلوك");
    expect(findPart2("höflich")?.ar).toBe("مهذب");
    expect(findPart2("unhöflich")?.ar).toBe("غير مهذب");
    expect(findPart2("freundlich")?.ar).toBe("ودود/لطيف");
    expect(findPart2("unfreundlich")?.ar).toBe("غير ودود/غير لطيف");
    expect(findPart2("geduldig")?.ar).toBe("صبور");
    expect(findPart2("die Geduld")?.ar).toBe("الصبر");
    expect(findPart2("ungeduldig")?.ar).toBe("غير صبور/نافد الصبر");
    expect(findPart2("ehrlich")?.ar).toBe("صادق");
    expect(findPart2("die Ehrlichkeit")?.ar).toBe("الصدق");
    expect(findPart2("offen")?.ar).toBe("منفتح");
    expect(findPart2("die Offenheit")?.ar).toBe("الانفتاح");
    expect(findPart2("tolerant")?.ar).toBe("متسامح");
    expect(findPart2("verständnisvoll")?.ar).toBe("متفهم");
    expect(findPart2("die wirtschaftliche Lage")?.ar).toBe("الوضع الاقتصادي");
    expect(findPart2("der Arbeitsmarkt")?.ar).toBe("سوق العمل");
    expect(findPart2("Angebot und Nachfrage")?.ar).toBe("العرض والطلب");
    expect(findPart2("die Preiserhöhung")?.ar).toBe("زيادة الأسعار");
    expect(findPart2("die Rechnung")?.ar).toBe("الفاتورة");
    expect(findPart2("die Kasse")?.ar).toBe("صندوق النقود/مكان الدفع");
    expect(findPart2("der Betrag")?.ar).toBe("المبلغ");
    expect(findPart2("die Summe")?.ar).toBe("المجموع");
    expect(findPart2("die Ausgabe (Pl.: Ausgaben)")?.ar).toBe("نفقة/مصروف؛ ويُستعمل الجمع غالباً بمعنى النفقات");
    expect(findPart2("die Einnahme (Pl.: Einnahmen)")?.ar).toBe("إيراد/دخل؛ ويُستعمل الجمع كثيراً");
    expect(findPart2("das Budget")?.ar).toBe("الميزانية");
    expect(findPart2("sparen für + Akk.")?.ar).toBe("يدخر من أجل");
    expect(findPart2("den Kredit aufnehmen")?.ar).toBe("يقترض/يحصل على قرض");
    expect(findPart2("abbezahlen")?.ar).toBe("يسدد ديناً/ثمناً على أقساط");
    expect(findPart2("die Rate")?.ar).toBe("القسط");
    expect(findPart2("die Versicherung abschließen")?.ar).toBe("يبرم عقد تأمين");
    expect(findPart2("den Vertrag unterschreiben")?.ar).toBe("يوقع العقد");
    expect(findPart2("die Wohnung mieten")?.ar).toBe("يستأجر شقة");
    expect(findPart2("die Wohnung kaufen")?.ar).toBe("يشتري شقة");
    expect(findPart2("das Haus bauen")?.ar).toBe("يبني بيتاً");
    expect(findPart2("die Eigentumswohnung")?.ar).toBe("شقة تمليك");
    expect(findPart2("das Reihenhaus")?.ar).toBe("منزل ضمن صف منازل متلاصقة");
    expect(findPart2("das Einfamilienhaus")?.ar).toBe("منزل لأسرة واحدة");
    expect(findPart2("der Stock")?.ar).toBe("الطابق");
    expect(findPart2("das Erdgeschoss")?.ar).toBe("الطابق الأرضي");
    expect(findPart2("der Keller")?.ar).toBe("القبو");
    expect(findPart2("der Dachboden")?.ar).toBe("العلية");
    expect(findPart2("das Dach")?.ar).toBe("السقف/سطح المبنى");
    expect(findPart2("die Wand")?.ar).toBe("الجدار");
    expect(findPart2("der Boden")?.ar).toBe("الأرضية");
    expect(findPart2("die Decke")?.ar).toBe("السقف الداخلي");
    expect(findPart2("das Fenster putzen")?.ar).toBe("ينظف النوافذ");
    expect(findPart2("die Reparatur")?.ar).toBe("الإصلاح");
    expect(findPart2("reparieren lassen")?.ar).toBe("يعهد بإصلاحه إلى فني/مختص");
    expect(findPart2("der Handwerker")?.ar).toBe("الحرفي");
    expect(findPart2("der Elektriker")?.ar).toBe("فني كهرباء");
    expect(find("das Ziel setzen")).toBeUndefined();
  });

  it("يحفظ الجنس في المفرد، ويميّز الجمع المحض عن المفرد الشائع الجمع", () => {
    expect(find("die Überstunde (Pl.: Überstunden)")?.g).toBe("die");
    expect(find("die Sprachkenntnisse")?.g).toBe("plural");
    expect(find("die Semesterferien")?.g).toBe("plural");
    expect(find("die Süßigkeit (Pl.: Süßigkeiten)")?.g).toBe("die");
    expect(find("das Altkleid (Pl.: Altkleider)")?.g).toBe("das");
    expect(find("die Ausgabe (Pl.: Ausgaben)")?.g).toBe("die");
    expect(find("die Einnahme (Pl.: Einnahmen)")?.g).toBe("die");
    expect(find("die Kosten")?.g).toBe("plural");
  });

  it("يلتقط تراكيب B1 المصححة ويمنع عودة الصيغة الإعرابية/الترجمة الخاطئة", () => {
    expect(find("den Kunden betreuen")?.de).toBe("den Kunden betreuen");
    expect(find("den Kunde betreuen")).toBeUndefined();
    expect(find("Angebot und Nachfrage")?.g).toBe("other");
    expect(find("sich einigen (auf + Akk.)")?.g).toBe("v");
    expect(find("Energie sparen")?.g).toBe("v");
    expect(find("die Energie sparen")).toBeUndefined();
    expect(find("Der Preis steigt")?.g).toBe("v");
    expect(find("Preis steigen")).toBeUndefined();
    expect(find("trotz + Gen.")?.ar).toContain("الأصل Genitiv");
    expect(find("wegen / trotz / während / statt (meist + Gen.)")?.ar).toContain("Dativ في استعمالات محددة");
    expect(find("beraten")?.ar).toContain("يقدّم المشورة");
    expect(find("indem")?.ar).toContain("من خلال أن");
    expect(find("dadurch, dass")?.ar).toContain("وذلك بأن");
    expect(find("der Krankenstand")?.ar).toContain("وفي النمسا");
    expect(find("ungeduldig")?.ar).toContain("غير صبور");
    expect(find("der Mutterschutz")?.ar).toContain("حماية الأم العاملة");
    expect(find("die Semesterferien")?.ar).toContain("الخالية من المحاضرات");
    expect(find("die Hauptschule")?.ar).toContain("الصفوف 5–9");
    expect(find("das Gymnasium")?.ar).toContain("Hochschulreife");
    expect(find("gewissenhaft")?.ar).toContain("بعناية وضمير");
    expect(find("gründlich")?.ar).toContain("متأنٍ");
    expect(find("selbstständig")?.ar).toContain("يعمل لحسابه");
    expect(find("wissen")?.ar).toContain("معلومة أو حقيقة");
    expect(find("kennen")?.ar).toContain("شخصاً أو شيئاً");
    expect(find("demnächst")?.ar).toBe("قريباً/في وقت قريب");
    expect(find("sowohl... als auch")?.ar).toContain("كلٌّ من");
    expect(find("zum einen ... zum anderen")?.ar).toContain("من جهة");
    expect(find("viel/wenig von jemandem/etwas halten (+ Dat.)")).toBeDefined();
    expect(find("einen Ausflug machen")).toBeDefined();
    expect(find("den Ausflug machen")).toBeUndefined();
    expect(find("das Rathaus")?.ar).toContain("مبنى");
    expect(find("die Abmeldung")?.ar).toContain("بحسب السياق");
    expect(find("sich kümmern um + Akk.")?.ar).toContain("يعتني");
    expect(find("sich interessieren für + Akk.")?.ar).toContain("يكون مهتماً");
    expect(find("verantwortlich sein für + Akk.")?.g).toBe("adj");
    expect(find("stolz sein auf + Akk.")?.g).toBe("adj");
    expect(find("süchtig (nach + Dat.) sein")?.g).toBe("adj");
  });

  it("يوضح تعدية وحالة تراكيب الجر التي روجعت مرجعياً", () => {
    const cases: [string, string][] = [
      ["sich kümmern um + Akk.", "Akk."],
      ["sich interessieren für + Akk.", "Akk."],
      ["sich gewöhnen an + Akk.", "Akk."],
      ["sich ärgern über + Akk.", "Akk."],
      ["sich freuen auf + Akk.", "Akk."],
      ["sich freuen über + Akk.", "Akk."],
      ["sich beschweren über + Akk.", "Akk."],
      ["sich erkundigen nach + Dat.", "Dat."],
      ["helfen bei + Dat.", "Dat."],
      ["sich sorgen um + Akk.", "Akk."],
      ["Angst haben vor + Dat.", "Dat."],
      ["stolz sein auf + Akk.", "Akk."],
      ["zufrieden mit + Dat.", "Dat."],
      ["im Gegensatz zu + Dat.", "Dat."],
      ["denken an + Akk.", "Akk."],
      ["nachdenken über + Akk.", "Akk."],
      ["träumen von + Dat.", "Dat."],
      ["sich entscheiden für + Akk.", "Akk."],
      ["fragen nach + Dat.", "Dat."],
      ["warnen vor + Dat.", "Dat."],
      ["erinnern an + Akk.", "Akk."],
      ["verantwortlich sein für + Akk.", "Akk."],
      ["verzichten auf + Akk.", "Akk."],
      ["bestehen (mit + Dat.; Angabe der Note)", "Dat."],
      ["lernen durch + Akk.", "Akk."],
      ["viel/wenig von jemandem/etwas halten (+ Dat.)", "Dat."],
      ["im Vergleich zu + Dat.", "Dat."],
      ["sparen für + Akk.", "Akk."],
      ["jemanden um + Akk. bitten", "Akk."],
      ["jemanden von + Dat. überzeugen", "Dat."],
      ["sich bei + Dat. für + Akk. entschuldigen", "Dat."],
      ["jemandem etwas verzeihen (+ Dat. + Akk.)", "Dat."],
      ["jemandem zu + Dat. raten", "Dat."],
      ["jemandem etwas empfehlen (+ Dat. + Akk.)", "Akk."],
      ["jemanden zu + Dat. einladen", "Dat."],
      ["sich mit + Dat. verabreden", "Dat."],
      ["sich mit + Dat. treffen", "Dat."],
      ["zustimmen (+ Dat.)", "Dat."],
      ["mit + Dat. über + Akk. diskutieren", "Dat."],
      ["mit + Dat. über + Akk. diskutieren", "Akk."],
      ["sich mit + Dat. (um + Akk.) streiten; über + Akk. streiten", "Dat."],
      ["sich mit + Dat. (um + Akk.) streiten; über + Akk. streiten", "Akk."],
      ["auf + Akk. hoffen", "Akk."],
      ["etwas (+ Akk.) bezweifeln", "Akk."],
      ["an + Dat. zweifeln", "Dat."],
      ["jemandem (+ Dat.) / auf + Akk. vertrauen", "Dat."],
      ["jemandem (+ Dat.) / auf + Akk. vertrauen", "Akk."],
      ["jemandem/etwas (+ Dat.) folgen", "Dat."],
      ["jemandem (+ Dat.) antworten", "Dat."],
    ];
    for (const [de, grammaticalCase] of cases) {
      expect(find(de)?.de, `missing valency label: ${de}`).toContain(grammaticalCase);
    }
    expect(find("außer (+ Dat.; Akk. bei manchen Bewegungsverben)")?.ar).toContain("Dativ غالباً");
  });
});

describe("ترجمة مركب Hausratversicherung", () => {
  it("يحدد أن التأمين على محتويات المنزل لا على محتويات مبهمة", () => {
    expect(B2_EXTRA2_PART1.find(({ de }) => de === "die Hausratversicherung")?.ar)
      .toBe("تأمين محتويات المنزل");
  });

  it("يعرف BIC بوصفه رمز تعريف للمؤسسة لا رمزاً للبنك الدولي", () => {
    expect(B2_EXTRA2_PART1.find(({ de }) => de === "der BIC")?.ar)
      .toBe("رمز تعريف المؤسسة (BIC)");
  });
});

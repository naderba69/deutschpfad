/**
 * a2-08 — تفاصيلُ الحوار والنطق والجدول والتفاعل والبطاقات محفوظةٌ فردياً (جزء من تدقيق الدرس)
 * فُصل من a2-08.test.ts في الدفعة 108 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA208 } from "@/data/lessons/a2/a2-08";
import { ids } from "./fixtures";

describe("A2-08 reviewed lesson", () => {
  it("preserves the individual dialogue, pronunciation, table, interaction, and card details", () => {
    expect(lessonA208.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA208.listening.items[0].lines).toEqual([
      { speaker: "Sami", de: "Guten Tag! Ich hätte gern eine Fahrkarte nach München.", ar: "مرحباً! أودّ تذكرة إلى ميونخ." },
      { speaker: "Mitarbeiterin", de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاب وعودة؟" },
      { speaker: "Sami", de: "Hin und zurück, bitte. Wie viel kostet die Fahrkarte?", ar: "ذهاب وعودة من فضلك. بكم التذكرة؟" },
      { speaker: "Mitarbeiterin", de: "Achtundvierzig Euro.", ar: "ثمانية وأربعون يورو." },
      { speaker: "Sami", de: "Wann fährt der nächste Zug ab?", ar: "متى ينطلق القطار التالي؟" },
      { speaker: "Mitarbeiterin", de: "Um zehn Uhr fünfundzwanzig, von Gleis drei.", ar: "في العاشرة وخمس وعشرين دقيقة، من المسار/الرصيف الثالث." },
    ]);
    expect(lessonA208.listening.items[1].lines).toEqual([
      { speaker: "Anna", de: "Wie kommst du zur Arbeit?", ar: "كيف تذهب إلى العمل؟" },
      { speaker: "Karim", de: "Mit der U-Bahn. Auf meiner Strecke ist sie schneller als der Bus.", ar: "بالمترو. في طريقي، هو أسرع من الحافلة." },
      { speaker: "Anna", de: "Und ich fahre mit dem Fahrrad. Ich finde Radfahren gesünder.", ar: "وأنا أذهب بالدراجة. أرى أن ركوبها أفضل للصحة." },
      { speaker: "Karim", de: "In diesem Vergleich ist das Motorrad am schnellsten.", ar: "في هذه المقارنة، الدراجة النارية هي الأسرع." },
    ]);
    expect(lessonA208.listening.questions.map((question) => question.itemId)).toEqual([
      "l1",
      "l1",
      "l2",
    ]);

    expect(lessonA208.pronunciation.items.map((item) => item.de)).toEqual([
      "der Zug",
      "die Fahrkarte",
      "umsteigen",
      "die Straßenbahn",
      "das Fahrrad",
      "der Schalter",
    ]);
    expect(lessonA208.pronunciation.items[0].note).toContain("[ˈʦuːk]");
    expect(lessonA208.pronunciation.items[1].note).toContain("[ˈfaːɐ̯kaʁtə]");
    expect(lessonA208.pronunciation.items[2].note).toContain("Duden");
    expect(lessonA208.pronunciation.items[3].note).toContain("[ˈʃtʀaːsn̩ˌbaːn]");
    expect(lessonA208.pronunciation.items[5].note).toContain("[ˈʃaltɐ]");
    const shadowing = lessonA208.pronunciation.shadowing ?? [];
    expect(shadowing).toHaveLength(5);
    expect(shadowing.every((item) => item.de && item.ar && item.tip)).toBe(true);

    const theoryById = Object.fromEntries(lessonA208.theory.map((block) => [block.id, block]));
    expect(theoryById.t1.examples.length).toBeGreaterThanOrEqual(8);
    expect(theoryById.t1.examples).toContainEqual({
      de: "Zug C ist im Übungsfahrplan am schnellsten (2 Std. 20 Min.).",
      ar: "في جدول التدريب، القطار C هو الأسرع (الرحلة ساعتان و20 دقيقة).",
    });
    expect(theoryById.t2.examples.length).toBeGreaterThanOrEqual(8);
    expect(theoryById.t2.table?.rows).toEqual([
      { label: "Zug A", cells: ["08:00 Uhr", "10:30 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
      { label: "Bus B", cells: ["08:15 Uhr", "11:00 Uhr; direkt (مباشرةً)"] },
      { label: "Zug C", cells: ["09:00 Uhr", "11:20 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
    ]);
    expect(theoryById.t2.table?.title).toContain("خيالي");
    for (const block of lessonA208.theory) {
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(5);
      for (const mistake of block.commonMistakes) {
        expect(mistake.classification).toMatch(
          /^(error|contextual-alternative|pedagogical-simplification|unverified-claim)$/,
        );
        expect(mistake.whyAr.length).toBeGreaterThan(80);
      }
    }
    expect(theoryById.t1.commonMistakes[0].classification).toBe("contextual-alternative");
    expect(theoryById.t2.commonMistakes[0].classification).toBe("contextual-alternative");

    const mediation = lessonA208.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).toContain("Fiktiver Übungsfahrplan");
    expect(mediation[0].keyPointsAr).toHaveLength(4);
    const interaction = lessonA208.interaction ?? [];
    expect(interaction).toHaveLength(1);
    expect(interaction[0].rounds).toHaveLength(2);
    expect(interaction[0].rounds[1].options[1].replyDe).toBe(
      "Im fiktiven Beispiel fährt der Übungszug von Gleis 3 ab. Folgen Sie den Schildern zu Gleis 3.",
    );
    for (const round of interaction[0].rounds) {
      expect(round.speakerDe).toBeTruthy();
      expect(round.speakerAr).toBeTruthy();
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      expect(round.options.every((option) => option.best && option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(lessonA208.fehlerUndTipps.culturalNote.content).toContain("خيالية");
    expect(lessonA208.fehlerUndTipps.culturalNote.content).not.toMatch(/دقيق جداً|دائماً أرخص/i);

    expect(ids(lessonA208.flashcards)).toEqual([
      "fc1", "fc2", "fc3", "fc4", "fc5", "fc6", "fc7", "fc8", "fc9", "fc10", "fc11", "fc12",
    ].sort());
    expect(lessonA208.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(true);
    expect(lessonA208.flashcards.find((card) => card.id === "fc4")).toMatchObject({
      de: "der Hauptbahnhof",
      ar: "المحطة الرئيسية",
      example: "Die Reise beginnt am Hauptbahnhof.",
    });
  });
});

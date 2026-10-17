import {describe, expect, it} from "vitest";

import {getLevelVocab} from "@/data/vocabulary";
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

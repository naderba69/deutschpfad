/**
 * اختبار سلامة الأجناس — يمنع تكرار أخطاء der/die/das
 * يفحص كل الأسماء المفردة في بنوك المفردات ضد قاموس الأجناس الموثوق
 * (`src/data/vocabulary/genders/` — نُقل إليه القاموس في المرحلة 4).
 */
import { describe, expect, it } from "vitest";

import { A1_VOCAB } from "@/data/vocabulary/a1";
import { A2_VOCAB } from "@/data/vocabulary/a2";
import { B1_VOCAB } from "@/data/vocabulary/b1";
import { B2_VOCAB } from "@/data/vocabulary/b2";
import { A1_EXTRA_VOCAB } from "@/data/vocabulary/a1-extra";
import { A2_EXTRA_VOCAB } from "@/data/vocabulary/a2-extra";
import { B1_EXTRA_VOCAB } from "@/data/vocabulary/b1-extra";
import { B2_EXTRA_VOCAB } from "@/data/vocabulary/b2-extra";
import { A1_EXTRA2_VOCAB } from "@/data/vocabulary/a1-extra2";
import { A2_EXTRA2_VOCAB } from "@/data/vocabulary/a2-extra2";
import { B1_EXTRA2_VOCAB } from "@/data/vocabulary/b1-extra2";
import { B2_EXTRA2_VOCAB } from "@/data/vocabulary/b2-extra2";
import { B2_TOPIC_ALL } from "@/data/vocabulary/b2-topics";
import { LESSONS } from "@/data/lessons";
import { GENDERS } from "@/data/vocabulary/genders";


/** كل بنوك المفردات معاً */
const ALL = [
  ...Object.values(A1_VOCAB).flat(),
  ...Object.values(A2_VOCAB).flat(),
  ...Object.values(B1_VOCAB).flat(),
  ...Object.values(B2_VOCAB).flat(),
  ...A1_EXTRA_VOCAB,
  ...A2_EXTRA_VOCAB,
  ...B1_EXTRA_VOCAB,
  ...B2_EXTRA_VOCAB,
  ...A1_EXTRA2_VOCAB,
  ...A2_EXTRA2_VOCAB,
  ...B1_EXTRA2_VOCAB,
  ...B2_EXTRA2_VOCAB,
  ...B2_TOPIC_ALL,
];

describe("سلامة أجناس الأسماء (يمنع تكرار الأخطاء)", () => {
  it("لا اسم مفرد معروف بجنس خاطئ في أي بنك", () => {
    const errors: string[] = [];
    for (const w of ALL) {
      const de = w.de.trim();
      // فقط أسماء مفردة (أداة + كلمة واحدة)
      const m = de.match(/^(der|die|das)\s+([A-ZÄÖÜ][a-zäöüß]+)$/);
      if (!m) continue;
      const g = m[1];
      const word = m[2];
      if (word in GENDERS && GENDERS[word] !== g) {
        errors.push(`«${word}» مكتوبة ${g} والصحيح ${GENDERS[word]} (${de})`);
      }
    }
    expect(errors).toEqual([]);
  });
it("لا اسم مفرد معروف بجنس خاطئ في بطاقات دروس المنصة (المكونات العشرة)", () => {
    const errors: string[] = [];
    for (const lesson of LESSONS) {
      for (const card of lesson.flashcards) {
        const de = card.de.trim();
        const m = de.match(/^(der|die|das)\s+([A-ZÄÖÜ][a-zäöüß]+)$/);
        if (!m) continue;
        const g = m[1];
        const word = m[2];
        if (word in GENDERS && GENDERS[word] !== g) {
          errors.push(`«${word}» في درس ${lesson.id} مكتوبة ${g} والصحيح ${GENDERS[word]} (${de})`);
        }
      }
    }
    expect(errors).toEqual([]);
  });

});

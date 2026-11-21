/**
 * حارس أمثلة بنوك الدروس الأربعة الأساسية (A1–B2) — التي يقرأها قسم المفردات في الدرس.
 *  - كل مثال ألماني (`ex`) له ترجمة عربية (`exAr`).
 *  - عدد المدخلات بلا مثال لا يزيد عن خط الأساس (ratchet): كلما أُضيف مثال يُخفَّض الرقم.
 */
import {describe, expect, it} from "vitest";
import {A1_VOCAB} from "@/data/vocabulary/a1";
import {A2_VOCAB} from "@/data/vocabulary/a2";
import {B1_VOCAB} from "@/data/vocabulary/b1";
import {B2_VOCAB} from "@/data/vocabulary/b2";

/** الرقم الحالي للمدخلات بلا مثال في البنوك الأربعة. لا يُرفع أبداً. */
const MAX_WITHOUT_EXAMPLE = 766;

type Entry = {de: string; ar: string; ex?: string; exAr?: string};
const BANKS: Record<string, Record<string, Entry[]>> = {a1: A1_VOCAB, a2: A2_VOCAB, b1: B1_VOCAB, b2: B2_VOCAB};

function allEntries() {
  return Object.entries(BANKS).flatMap(([lvl, bank]) =>
    Object.entries(bank).flatMap(([lessonId, list]) => list.map((e) => ({lvl, lessonId, e}))),
  );
}

describe("أمثلة بنوك المفردات", () => {
  it("كل مثال ألماني له ترجمة عربية", () => {
    const missing = allEntries()
      .filter(({e}) => e.ex && !e.exAr?.trim())
      .map(({lessonId, e}) => `${lessonId}: ${e.de}`);
    expect(missing).toEqual([]);
  });

  it("عدد المدخلات بلا مثال لا يزيد عن خط الأساس", () => {
    const without = allEntries().filter(({e}) => !e.ex).length;
    expect(without, "أضِف أمثلة وخفّض MAX_WITHOUT_EXAMPLE إلى الرقم الجديد").toBeLessThanOrEqual(MAX_WITHOUT_EXAMPLE);
  });
});

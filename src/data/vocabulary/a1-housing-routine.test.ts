import { describe, expect, it } from "vitest";

import { getLevelVocab } from "@/data/vocabulary";
import type { VocabEntry } from "@/data/vocabulary/a1";

const a1 = getLevelVocab("A1") as unknown as VocabEntry[];
const a2 = getLevelVocab("A2") as unknown as VocabEntry[];

const find = (entries: VocabEntry[], de: string) => entries.find((entry) => entry.de === de);

describe("دفعة مفردات A1 #91–100 — السكن والروتين", () => {
  it("يحفظ معاني حروف المكان والصفات ومفردات الإيجار والروتين", () => {
    const expected = [
      ["unter", "تحت؛ وبين/ضمن بحسب التركيب", "other"],
      ["neben", "بجانب/إلى جانب (مكانياً أو بمعنى بالإضافة إلى، بحسب السياق)", "other"],
      ["groß / klein", "كبير / صغير", "adj"],
      ["neu / alt", "جديد / قديم", "adj"],
      ["modern", "حديث", "adj"],
      ["sauber", "نظيف", "adj"],
      ["die Miete", "الإيجار", "die"],
      ["aufstehen", "ينهض/يقوم من السرير", "v"],
      ["frühstücken", "يتناول الفطور", "v"],
      ["arbeiten", "يعمل", "v"],
    ] as const;
    for (const [de, ar, gender] of expected) {
      expect(find(a1, de)?.ar, de).toBe(ar);
      expect(find(a1, de)?.g, de).toBe(gender);
    }
  });

  it("يحفظ معنى unter بين/ضمن إلى جانب المعنى المكاني في مدخل A2", () => {
    expect(find(a2, "unter")?.ar).toBe(
      "تحت أو بين/ضمن بحسب التركيب (في الاستعمال المكاني: Dativ للموقع وAkkusativ للاتجاه)",
    );
  });

  it("يميّز Dativ neben الإضافية عن Akkusativ الوجهة المكانية في A2", () => {
    expect(find(a2, "neben")?.ar).toBe(
      "بجانب/إلى جانب (مكانياً أو بمعنى بالإضافة إلى؛ Dativ للموقع والإضافة وAkkusativ للوجهة المكانية)",
    );
  });
});

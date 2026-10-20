import { describe, expect, it } from "vitest";

import { buildHighlightSegments } from "@/lib/lesson/error-correction-highlight";

/** يعيد بناء الجملة من المقاطع للتأكد من عدم فقدان أو تكرار أي حرف */
const rebuild = (segs: { text: string }[]) => segs.map((s) => s.text).join("");
/** النص المميَّز (المشطوب) فقط */
const marked = (segs: { text: string; isTarget: boolean }[]) =>
  segs.filter((s) => s.isTarget).map((s) => s.text.trim()).join(" ");

describe("تمييز الخطأ في تمرين تصحيح الخطأ", () => {
  it("يميّز كلمة مفردة", () => {
    const segs = buildHighlightSegments("Ich bin nach Hause gegangen.", "bin");
    expect(marked(segs)).toBe("bin");
    expect(rebuild(segs)).toBe("Ich bin nach Hause gegangen.");
  });

  it("يميّز عبارة متعددة الكلمات (جوهر العطب H)", () => {
    const segs = buildHighlightSegments("Der Zug fährt ab um zehn Uhr.", "ab um zehn");
    expect(marked(segs)).toBe("ab um zehn");
    expect(rebuild(segs)).toBe("Der Zug fährt ab um zehn Uhr.");
  });

  it("يميّز جزأين متباعدين بصيغة النقاط الثلاث", () => {
    const segs = buildHighlightSegments("Ich habe nach Berlin gefliegen.", "habe ... gefliegen");
    const hits = segs.filter((s) => s.isTarget).map((s) => s.text.trim());
    expect(hits).toEqual(["habe", "gefliegen."]);
    expect(rebuild(segs)).toBe("Ich habe nach Berlin gefliegen.");
  });

  it("يتجاهل علامات الترقيم الملاصقة", () => {
    const segs = buildHighlightSegments("Wie du heißt?", "du heißt");
    expect(marked(segs)).toBe("du heißt?");
  });

  it("لا يميّز شيئاً إذا تعذّرت المطابقة، ويُبقي الجملة سليمة", () => {
    const segs = buildHighlightSegments("Ich komme morgen.", "völlig anderes");
    expect(segs.some((s) => s.isTarget)).toBe(false);
    expect(rebuild(segs)).toBe("Ich komme morgen.");
  });

  it("يطابق أول ورود فقط عند تكرار الكلمة", () => {
    const segs = buildHighlightSegments("Ich bin bin müde.", "bin");
    expect(segs.filter((s) => s.isTarget)).toHaveLength(1);
    expect(rebuild(segs)).toBe("Ich bin bin müde.");
  });

  it("يحافظ على النص الأصلي حرفياً في كل الحالات", () => {
    const cases: [string, string][] = [
      ["Ich habe gestern in der Stadt gegangen.", "habe ... gegangen"],
      ["Wir haben nach Tunis gefahren.", "haben ... gefahren"],
      ["Ich freue auf das Wochenende.", "freue"],
    ];
    for (const [sentence, wrong] of cases) {
      expect(rebuild(buildHighlightSegments(sentence, wrong))).toBe(sentence);
    }
  });
});

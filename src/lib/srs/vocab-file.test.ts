import {describe, expect, it} from "vitest";

import type {Sm2CardData} from "@/types/srs";

import {
  buildVocabFile,
  importedCardId,
  MAX_VOCAB_ITEMS,
  parseVocabFile,
  parseVocabItem,
  vocabKey,
} from "./vocab-file";

const card = (over: Partial<Sm2CardData>): Sm2CardData =>
  ({
    id: "x",
    de: "der Apfel",
    ar: "التفاحة",
    level: "A1",
    source: "manual",
    createdAt: 0,
    repetitions: 0,
    interval: 0,
    ease: 2.5,
    due: 0,
    lastReview: null,
    lapses: 0,
    qualitySum: 0,
    qualityCount: 0,
    ...over,
  }) as Sm2CardData;

describe("تصدير المفردات", () => {
  it("يصدّر البطاقات اليدوية فقط", () => {
    const f = buildVocabFile(
      [card({de: "der Apfel"}), card({de: "die Birne", source: "lesson"}), card({de: "x", source: "error"})],
      new Date("2026-10-13T00:00:00Z"),
    );
    expect(f.items.map((i) => i.de)).toEqual(["der Apfel"]);
    expect(f.format).toBe("deutschpfad-vocab");
    expect(f.version).toBe(1);
    expect(f.exportedAt).toBe("2026-10-13T00:00:00.000Z");
  });

  it("لا يصدّر حقول SRS الداخلية", () => {
    const f = buildVocabFile([card({example: "Der Apfel ist rot."})]);
    expect(Object.keys(f.items[0]).sort()).toEqual(["ar", "de", "example", "level"]);
  });
});

describe("التحقق من الاستيراد", () => {
  it("يقبل عنصراً سليماً ويقصّ المسافات", () => {
    expect(parseVocabItem({de: "  der   Apfel ", ar: " التفاحة ", level: "A1"})).toEqual({
      de: "der Apfel",
      ar: "التفاحة",
      level: "A1",
    });
  });

  it("يرفض مستوى غير معروف أو نصاً فارغاً أو حقولاً ناقصة", () => {
    expect(parseVocabItem({de: "a", ar: "b", level: "C2"})).toBeNull();
    expect(parseVocabItem({de: "   ", ar: "b", level: "A1"})).toBeNull();
    expect(parseVocabItem({de: "a", level: "A1"})).toBeNull();
    expect(parseVocabItem(null)).toBeNull();
  });

  it("يتخطى السطر الخاطئ ويعد المتخطّى", () => {
    const text = JSON.stringify({
      format: "deutschpfad-vocab",
      version: 1,
      items: [{de: "der Apfel", ar: "تفاحة", level: "A1"}, {de: "", ar: "x", level: "A1"}],
    });
    const r = parseVocabFile(text);
    expect(r).toEqual({ok: true, items: [{de: "der Apfel", ar: "تفاحة", level: "A1"}], skipped: 1});
  });

  it("يرفض الملف كله إن كانت الصيغة أو الإصدار خاطئاً", () => {
    expect(parseVocabFile("{not json").ok).toBe(false);
    expect(parseVocabFile(JSON.stringify({format: "other", version: 1, items: []})).ok).toBe(false);
    expect(parseVocabFile(JSON.stringify({format: "deutschpfad-vocab", version: 9, items: []})).ok).toBe(false);
    expect(parseVocabFile(JSON.stringify({format: "deutschpfad-vocab", version: 1})).ok).toBe(false);
  });

  it("يرفض الملف الذي يتجاوز حد العناصر", () => {
    const items = Array.from({length: MAX_VOCAB_ITEMS + 1}, () => ({de: "a", ar: "b", level: "A1"}));
    const r = parseVocabFile(JSON.stringify({format: "deutschpfad-vocab", version: 1, items}));
    expect(r.ok).toBe(false);
  });

  it("تصدير ثم استيراد يعيد العناصر نفسها", () => {
    const f = buildVocabFile([card({de: "das Brot", ar: "الخبز", level: "A2", example: "Ich kaufe Brot."})]);
    const r = parseVocabFile(JSON.stringify(f));
    expect(r).toEqual({ok: true, items: f.items, skipped: 0});
  });
});

describe("مفتاح الكلمة والمعرّف الثابت", () => {
  it("يتجاهل حالة الأحرف والمسافات الزائدة", () => {
    expect(vocabKey("A1", "  Der  Apfel ")).toBe(vocabKey("A1", "der apfel"));
  });

  it("المعرّف ثابت للكلمة نفسها ومختلف بين المستويات", () => {
    const a = importedCardId("vocab", {de: "der Apfel", level: "A1"});
    expect(a).toBe(importedCardId("vocab", {de: "DER APFEL", level: "A1"}));
    expect(a).not.toBe(importedCardId("vocab", {de: "der Apfel", level: "A2"}));
    expect(a.startsWith("vocab-")).toBe(true);
  });
});

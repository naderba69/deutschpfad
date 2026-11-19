/**
 * اختبارات وحدة — لعبة تركيب الجمل
 */
import { describe, expect, it } from "vitest";

import { SATZBAU_LEVELS, SATZBAU_PUZZLES, TOTAL_SATZBAU, getPuzzlesByLevel } from "@/data/satzbau";

describe("SATZBAU — بنك الألغاز", () => {
  it("ترجمة مثال البناء تحفظ علاقة الفاعل بالمفعول بصياغة عربية سليمة", () => {
    const puzzle = SATZBAU_PUZZLES.find((item) => item.id === "sb-b1-3");
    expect(puzzle?.ar).toBe("صمّم المهندس البيت.");
  });

  it("كل مستوى له ألغاز", () => {
    for (const lv of SATZBAU_LEVELS) {
      expect(getPuzzlesByLevel(lv).length).toBeGreaterThanOrEqual(2);
    }
  });

  it("الترتيب الصحيح يساوي مجموعة الكلمات (إعادة بناء ممكنة)", () => {
    for (const p of SATZBAU_PUZZLES) {
      const norm = (s: string) => s.replace(/[.,!?]/g, "").toLowerCase().trim();
      // تقسيم الوحدات المركبة (مثل "Am Montag") إلى كلمات مفردة للمقارنة
      const wordsSorted = p.words.map(norm).flatMap((w) => w.split(" ")).filter(Boolean).sort().join(" ");
      const correctSorted = p.correct.map(norm).flatMap((w) => w.split(" ")).filter(Boolean).sort().join(" ");
      expect(wordsSorted).toBe(correctSorted);
    }
  });

  it("كل لغز له ترجمة وتلميح قاعدة", () => {
    for (const p of SATZBAU_PUZZLES) {
      expect(p.ar.length).toBeGreaterThan(0);
      expect(p.tip.length).toBeGreaterThan(0);
    }
  });

  it("المعرفات فريدة", () => {
    expect(new Set(SATZBAU_PUZZLES.map((p) => p.id)).size).toBe(SATZBAU_PUZZLES.length);
  });

  it("العدد مطابق للعداد", () => {
    expect(TOTAL_SATZBAU).toBe(SATZBAU_PUZZLES.length);
  });
});

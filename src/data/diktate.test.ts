/**
 * اختبارات وحدة — بنك الإملاء
 */
import { describe, expect, it } from "vitest";

import { DIKTATE, DIKTAT_LEVELS, TOTAL_DIKTATE, getDiktateByLevel } from "@/data/diktate";

describe("DIKTATE — بنك الإملاء", () => {
  it("يوضح طريقة كتابة ß عند غياب الحرف من لوحة المفاتيح", () => {
    const dictation = DIKTATE.find(({ id }) => id === "dk-a1-1");
    expect(dictation?.note).toContain("الحرف ß");
    expect(dictation?.note).toContain("يُستبدل بـ ss");
    expect(dictation?.note).not.toContain("الهملة");
  });

  it("يميز بين schmecken والتقييم الإيجابي الذي تحمله gut", () => {
    const dictation = DIKTATE.find(({ id }) => id === "dk-a2-5");
    expect(dictation?.text).toBe("Der Kaffee schmeckt mir sehr gut, aber er ist heiß.");
    expect(dictation?.ar).toBe("مذاق القهوة طيب جداً بالنسبة إليّ، لكنها ساخنة.");
  });
  it("كل مستوى له جمل إملاء", () => {
    for (const lv of DIKTAT_LEVELS) {
      expect(getDiktateByLevel(lv).length).toBeGreaterThanOrEqual(3);
    }
  });

  it("كل جملة لها ترجمة وكلمات تركيز وملاحظة", () => {
    for (const d of DIKTATE) {
      expect(d.text.length).toBeGreaterThan(0);
      expect(d.ar.length).toBeGreaterThan(0);
      expect(d.focusWords.length).toBeGreaterThan(0);
      expect(d.note.length).toBeGreaterThan(0);
    }
  });

  it("المعرفات فريدة", () => {
    expect(new Set(DIKTATE.map((d) => d.id)).size).toBe(DIKTATE.length);
  });

  it("المستويات صالحة فقط", () => {
    for (const d of DIKTATE) {
      expect(["A1", "A2", "B1", "B2"]).toContain(d.level);
    }
  });

  it("العدد مطابق للعداد", () => {
    expect(TOTAL_DIKTATE).toBe(DIKTATE.length);
  });
});

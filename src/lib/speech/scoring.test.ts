import {describe, expect, it} from "vitest";

import {charDiff, scoreLabel, scorePronunciation, wordSimilarity} from "@/lib/speech/scoring";

describe("مقارنة التفريغ النصي بالهدف (ليست قياساً صوتياً)", () => {
  it("تفريغ مطابق تماماً = 100", () => {
    expect(scorePronunciation("Hallo", "Hallo").score).toBe(100);
  });

  it("اختلاف تهجئة بسيط لا يُعطى 100 — بل أقل", () => {
    // Halo بدل Hallo — قريب لكن ليس مطابقاً
    expect(scorePronunciation("Hallo", "Halo").score).toBeLessThan(100);
  });

  it("كلمة مختلفة تماماً = 0", () => {
    expect(scorePronunciation("Hallo", "guten").score).toBe(0);
  });

  it("تفريغ جملة كاملة مطابق = 100", () => {
    expect(scorePronunciation("Ich heiße Sami", "Ich heiße Sami").score).toBe(100);
  });

  it("لا تفريغ نصياً (فارغ) = 0", () => {
    const r = scorePronunciation("Hallo", "");
    expect(r.score).toBe(0);
    expect(r.empty).toBe(true);
  });

  it("تشابه كلمات: hallo/halo قريب لكن ليس 1", () => {
    expect(wordSimilarity("hallo", "halo")).toBeGreaterThan(0.5);
    expect(wordSimilarity("hallo", "halo")).toBeLessThan(1);
  });

  it("charDiff يميّز المقاطع النصية المتطابقة من المختلفة", () => {
    const segs = charDiff("Hallo", "Halo");
    const matched = segs.filter((s) => s.matched).map((s) => s.text).join("");
    const diff = segs.filter((s) => !s.matched).map((s) => s.text).join("");
    // الحروف المشتركة Ha + o تُعد مطابقة، والحرف الناقص l يظهر كاختلاف
    expect(matched).toContain("H");
    expect(matched).toContain("a");
    expect(diff.length).toBeGreaterThan(0);
  });

  it("charDiff عند تطابق نصي كامل: لا يوجد اختلاف", () => {
    const segs = charDiff("Hallo", "Hallo");
    expect(segs.every((s) => s.matched)).toBe(true);
  });

  it("تصف التسميات المطابقة النصية ولا تدّعي قياس النطق", () => {
    expect(scoreLabel(100).label).toContain("مطابقة نصية");
    expect(scoreLabel(40).label).toContain("التفريغ يختلف");
    expect(scoreLabel(100).label).not.toMatch(/نطق ممتاز|صحيحاً|إتقان/);
  });
});

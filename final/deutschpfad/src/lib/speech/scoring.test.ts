import {describe, expect, it} from "vitest";

import {scorePronunciation, wordSimilarity} from "@/lib/speech/scoring";

describe("تقييم النطق (دقة التمييز بين الصحيح والخاطئ)", () => {
  it("نطق مطابق تماماً = 100", () => {
    expect(scorePronunciation("Hallo", "Hallo").score).toBe(100);
  });

  it("خطأ بسيط (حذف حرف) لا يُعطى 100 — بل أقل", () => {
    // Halo بدل Hallo — قريب لكن ليس مطابقاً
    expect(scorePronunciation("Hallo", "Halo").score).toBeLessThan(100);
  });

  it("كلمة مختلفة تماماً = 0", () => {
    expect(scorePronunciation("Hallo", "guten").score).toBe(0);
  });

  it("جملة كاملة مطابقة = 100", () => {
    expect(scorePronunciation("Ich heiße Sami", "Ich heiße Sami").score).toBe(100);
  });

  it("لا كلام مسجّل (فارغ) = 0", () => {
    const r = scorePronunciation("Hallo", "");
    expect(r.score).toBe(0);
    expect(r.empty).toBe(true);
  });

  it("تشابه كلمات: hallo/halo قريب لكن ليس 1", () => {
    expect(wordSimilarity("hallo", "halo")).toBeGreaterThan(0.5);
    expect(wordSimilarity("hallo", "halo")).toBeLessThan(1);
  });
});

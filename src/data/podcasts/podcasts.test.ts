import {describe, expect, it} from "vitest";

import {PODCASTS, getPodcastsByLevel} from "@/data/podcasts";

describe("مكتبة البودكاست التعليمي", () => {
  it("تحتوي 12+ حلقة لكل مستوى مع نص وأسئلة سليمة (توسعة 2026-08)", () => {
    expect(PODCASTS.length).toBeGreaterThanOrEqual(12);
    for (const p of PODCASTS) {
      expect(p.script.length).toBeGreaterThan(30);
      expect(p.scriptAr.length).toBeGreaterThan(10);
      expect(p.questions.length).toBeGreaterThanOrEqual(2);
      for (const q of p.questions) {
        const correct = q.options.filter((o) => o.correct).length;
        expect(correct).toBe(1);
        // شرح لكل خيار
        for (const opt of q.options) {
          expect(opt.explanation?.trim(), `حلقة ${p.id}: خيار بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("كل مستوى لديه على الأقل حلقة واحدة", () => {
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      expect(getPodcastsByLevel(lv).length).toBeGreaterThanOrEqual(1);
    }
  });
});

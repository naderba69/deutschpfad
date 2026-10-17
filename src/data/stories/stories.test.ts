import {describe, expect, it} from "vitest";

import {INTERACTIVE_STORIES, getStoriesByLevel} from "@/data/stories";

describe("مكتبة القصص التفاعلية — سلامة البنية لكل المستويات", () => {
  it("تحتوي على 48 قصة موزعة على المستويات الأربعة", () => {
    expect(INTERACTIVE_STORIES.length).toBe(60);
    expect(getStoriesByLevel("A1").length).toBe(15);
    expect(getStoriesByLevel("A2").length).toBe(15);
    expect(getStoriesByLevel("B1").length).toBe(15);
    expect(getStoriesByLevel("B2").length).toBe(15);
  });

  it("كل قصة لها معرّف فريد وبنية مكتملة", () => {
    const ids = new Set<string>();
    for (const s of INTERACTIVE_STORIES) {
      expect(s.id).toBeTruthy();
      expect(ids.has(s.id)).toBe(false);
      ids.add(s.id);
      expect(s.title).toBeTruthy();
      expect(s.titleAr).toBeTruthy();
      expect(s.grammar).toBeTruthy();
      expect(s.segments.length).toBeGreaterThanOrEqual(3);
      // المقاطع مرقمة بشكل متسلسل يبدأ من 1
      s.segments.forEach((seg, i) => {
        expect(seg.id).toBe(i + 1);
        expect(seg.de).toBeTruthy();
        expect(seg.ar).toBeTruthy();
      });
    }
  });

  it("كل سؤال فهم له إجابة صحيحة واحدة فقط", () => {
    for (const s of INTERACTIVE_STORIES) {
      for (const seg of s.segments) {
        if (seg.question) {
          const correct = seg.question.options.filter((o) => o.correct);
          expect(correct.length, `قصة ${s.id}: يجب أن يكون صحيح واحد بالضبط`).toBe(1);
          expect(seg.question.options.length).toBeGreaterThanOrEqual(2);
        }
      }
    }
  });

  it("كل قصة لها سؤالا فهم على الأقل + شرح لكل خيار (إثراء 2026-08)", () => {
    for (const s of INTERACTIVE_STORIES) {
      const qs = s.segments.filter((seg) => seg.question);
      expect(qs.length, `قصة ${s.id} «${s.titleAr}» تحتاج سؤالين على الأقل`).toBeGreaterThanOrEqual(2);
      for (const q of qs) {
        for (const opt of q.question?.options ?? []) {
          expect(opt.explanation?.trim(), `قصة ${s.id}: خيار «${opt.text}» بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("كل اختيار يشير إلى مقطع موجود داخل القصة نفسها", () => {
    for (const s of INTERACTIVE_STORIES) {
      const ids = new Set(s.segments.map((seg) => seg.id));
      for (const seg of s.segments) {
        for (const c of seg.choices ?? []) {
          expect(ids.has(c.next), `قصة ${s.id}: اختيار يشير لمقطع غير موجود`).toBe(true);
          expect(c.text).toBeTruthy();
          expect(c.ar).toBeTruthy();
        }
      }
    }
  });

  it("محتوى A1 بسيط: لا يستخدم Konjunktiv ولا جمل ثانوية معقدة", () => {
    const a1 = getStoriesByLevel("A1");
    const complex = ["würde", "hätte", "wäre", "weil", "dass ", "obwohl", "Passiv"];
    for (const s of a1) {
      for (const seg of s.segments) {
        for (const word of complex) {
          expect(seg.de.toLowerCase().includes(word), `A1 «${s.id}» يحتوي كلمة متقدمة: ${word}`).toBe(false);
        }
      }
    }
  });

  it("محتوى B2 يستخدم لغة متقدمة (نقل كلام/أسلوب رسمي)", () => {
    const b2 = getStoriesByLevel("B2");
    for (const s of b2) {
      expect(s.grammar).toMatch(/Konjunktiv|رسمي|أكاديمية|اشتقاق|ثقافة|gewöhnen|متقدمة|تأقلم|نقل|نقد|أعمال|تحليل|خبراء|الهوية|الهجر|المستقبل/);
    }
  });
});

import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES, DIALOGUE_LEVEL_COUNTS, getDialoguesByLevel} from "@/data/dialogues";

describe("مكتبة حوارات الحياة اليومية — 60 حواراً (تفوق Menschen)", () => {
  it("تحتوي 60 حواراً موزعة 15 لكل مستوى", () => {
    expect(DAILY_DIALOGUES.length).toBe(60);
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      expect(getDialoguesByLevel(lv).length).toBe(15);
      expect(DIALOGUE_LEVEL_COUNTS[lv]).toBe(15);
    }
  });

  it("كل حوار مكتمل: جولات + أسئلة + مفردات", () => {
    const ids = new Set<string>();
    for (const d of DAILY_DIALOGUES) {
      expect(ids.has(d.id)).toBe(false);
      ids.add(d.id);
      expect(d.turns.length).toBeGreaterThanOrEqual(5);
      expect(d.questions.length).toBeGreaterThanOrEqual(2);
      expect(d.keyVocab.length).toBeGreaterThanOrEqual(4);
      // جولات متناوبة a/b (لوضع «دورك»)
      const roles = d.turns.map((t) => t.role);
      expect(roles.includes("a") && roles.includes("b")).toBe(true);
      // كل جولة: ألمانية + عربية + متحدث
      for (const t of d.turns) {
        expect(t.de.trim()).toBeTruthy();
        expect(t.ar.trim()).toBeTruthy();
        expect(t.speaker.trim()).toBeTruthy();
      }
      // أسئلة بخيار صحيح واحد
      for (const q of d.questions) {
        const correct = q.options.filter((o) => o.correct).length;
        expect(correct).toBe(1);
        for (const opt of q.options) {
          expect(opt.explanation?.trim(), `حوار ${d.id}: خيار بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("تغطي مواقف الطوارئ (Notfall) و B2 المتقدم", () => {
    const b2 = getDialoguesByLevel("B2");
    const b2Titles = b2.map((d) => d.title);
    expect(b2Titles.some((t) => t.includes("الطوارئ"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("مفاوضة"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("صراع"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("جواز"))).toBe(true);
  });
});

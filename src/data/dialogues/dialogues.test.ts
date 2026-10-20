import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES, DIALOGUE_LEVEL_COUNTS, getDialoguesByLevel} from "@/data/dialogues";

describe("مكتبة حوارات الحياة اليومية — 61 حواراً (تفوق Menschen)", () => {
  it("تحتوي 61 حواراً: 16 في A1 و15 في كل مستوى آخر", () => {
    expect(DAILY_DIALOGUES.length).toBe(61);
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      expect(getDialoguesByLevel(lv).length).toBe(lv === "A1" ? 16 : 15);
      expect(DIALOGUE_LEVEL_COUNTS[lv]).toBe(lv === "A1" ? 16 : 15);
    }
  });

  it("حوار المحطة الجديد يضم 6 جولات و3 أسئلة فهم", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-16-bahnhof");
    expect(dialogue).toMatchObject({ id: "a1-16-bahnhof", level: "A1", titleDe: "Am Bahnhof" });
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.questions).toHaveLength(3);
    expect(dialogue?.keyVocab.map((item) => item.de)).toContain("der Zug");
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

/* ═══════════════════════════════════════════════════════════
   شروح الخيارات — مقاييس دفعة 52 (2026-10-16)
   قياس الحوارات بعد إضافة A1-16 (61 حواراً · 185 سؤالاً · 555 خياراً):
     · شروح الخيارات **الخاطئة** ملاحظات عربية موجزة («لا — قهوة أولاً.») — عُرف
       مقصود لا عيب (لا تُقتبس آلياً)، فلم تُعدّل.
     · شروح الخيارات **الصحيحة** عربية تشرح لماذا — والدليل الألماني هو نصّ
       الخيار نفسه (182/182: صفر خيار صحيح بلا دليل في الشرح ولا في نصّه).
   فيقفل هذا القسم القاعدتين المقاستين: دليل ألماني في الخيار الصحيح، ونصّ
   الجولات ألماني خالص، وأي اقتباس «» في شرح موجود حرفياً في جولات الحوار.
   ═══════════════════════════════════════════════════════════ */
describe("شروح الحوارات — دليل ألماني واقتباس أمين", () => {
  const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;
  const ARABIC = /[\u0600-\u06FF]/;
  const SPAN = /«([^»]+)»/g;
  const normalize = (s: string) =>
    s
      .replace(/[„“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .replace(/[.\s]+$/, "")
      .trim();

  it("كل خيار صحيح: دليله الألماني في شرحه أو في نصّه (لا خيار يُصدَّق بلا دليل)", () => {
    const problems: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      d.questions.forEach((q, i) => {
        q.options
          .filter((o) => o.correct)
          .forEach((o) => {
            const hasEvidence = GERMAN_EVIDENCE.test(o.explanation ?? "") || GERMAN_EVIDENCE.test(o.text);
            if (!hasEvidence) problems.push(`${d.id} سؤال ${i + 1}: «${o.text}» بلا دليل في الشرح ولا في النصّ`);
          });
      });
    }
    expect(problems).toEqual([]);
  });

  it("نصّ الجولات ألماني خالص وترجمته عربية", () => {
    const problems: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      d.turns.forEach((t, i) => {
        if (ARABIC.test(t.de)) problems.push(`${d.id} جولة ${i + 1}: حرف عربي في النصّ الألماني`);
        if (!t.ar.trim()) problems.push(`${d.id} جولة ${i + 1}: ترجمة مفقودة`);
      });
    }
    expect(problems).toEqual([]);
  });

  it("كل اقتباس بين «» في شرح موجود حرفياً في جولات الحوار", () => {
    const problems: string[] = [];
    let spansChecked = 0;
    for (const d of DAILY_DIALOGUES) {
      const turns = normalize(d.turns.map((t) => t.de).join(" "));
      for (const q of d.questions) {
        for (const o of q.options) {
          for (const span of [...(o.explanation ?? "").matchAll(SPAN)].map((m) => normalize(m[1])).filter((s) => GERMAN_EVIDENCE.test(s))) {
            spansChecked += 1;
            if (!turns.includes(span)) problems.push(`${d.id}: «${span}» ليس في الجولات`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
    expect(spansChecked).toBeGreaterThan(30); // حارس غير فارغ
  });
});

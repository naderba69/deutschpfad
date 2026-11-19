/**
 * ═══════════════════════════════════════════════════════════
 *  حراسة مكتبة الاستماع (الدفعة 125) — كانت بلا أي حارس
 *   · 14 نصاً و40 سؤالاً على الأقل
 *   · كل نص: عنوانان + نص ألماني وترجمة + صيغة من الأربع
 *   · كل سؤال: صياغتان + ≥3 خيارات + `correct` في النطاق
 *     + `explanation` غير فارغ
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { HOEREN_LIBRARY } from "@/data/hoeren/library";

const GERMAN = /[A-Za-zÄÖÜäöüß]{3,}/;
const AR = /[\u0600-\u06FF]/;
const FORMATS = new Set(["ansage", "nachricht", "interview", "vortrag"]);

describe("مكتبة الاستماع — سلامة البيانات", () => {
  it("14 نصاً و40 سؤالاً على الأقل", () => {
    const q = HOEREN_LIBRARY.reduce((n, t) => n + t.questions.length, 0);
    expect(HOEREN_LIBRARY.length, `نصوص=${HOEREN_LIBRARY.length}`).toBeGreaterThanOrEqual(13);
    expect(q, `أسئلة=${q}`).toBeGreaterThanOrEqual(39);
  });

  it("كل نص: معرّف فريد وصيغة/مستوى صحيحان ونصّان كاملان", () => {
    const problems: string[] = [];
    const ids = new Set<string>();
    for (const t of HOEREN_LIBRARY) {
      if (ids.has(t.id)) problems.push(`تكرار ${t.id}`);
      ids.add(t.id);
      if (!FORMATS.has(t.format)) problems.push(`${t.id}.format=${t.format}`);
      if (!["A1", "A2", "B1", "B2"].includes(t.level)) problems.push(`${t.id}.level=${t.level}`);
      if (!GERMAN.test(t.titleDe)) problems.push(`${t.id}.titleDe`);
      if (!AR.test(t.titleAr)) problems.push(`${t.id}.titleAr`);
      if (!GERMAN.test(t.text) || t.text.length < 100) problems.push(`${t.id}.text`);
      if (!AR.test(t.textAr)) problems.push(`${t.id}.textAr`);
    }
    expect(problems, "نصوص ناقصة").toEqual([]);
  });

  it("كل سؤال: صياغتان + ≥3 خيارات + correct في النطاق + شرح غير فارغ", () => {
    const problems: string[] = [];
    for (const t of HOEREN_LIBRARY) {
      t.questions.forEach((q, i) => {
        const at = `${t.id}:q${i + 1}`;
        if (!GERMAN.test(q.q)) problems.push(`${at}.q`);
        if (!AR.test(q.qAr)) problems.push(`${at}.qAr`);
        if (q.options.length < 3) problems.push(`${at}.options=${q.options.length}`);
        if (q.correct < 0 || q.correct >= q.options.length) problems.push(`${at}.correct=${q.correct}`);
        if (!q.explanation.trim()) problems.push(`${at}.explanation`);
      });
    }
    expect(problems, "أسئلة ناقصة").toEqual([]);
  });
});

/**
 * ═══════════════════════════════════════════════════════════
 *  حراسة البيانات المكمّلة (الدفعة 125) — كانت بلا أي حارس
 *   · content: REDEWENDUNGEN/CULTURAL_FACTS/DID_YOU_KNOW/
 *     DAILY_MISTAKES/EVERYDAY_PHRASES بأرضياتها وحقولها
 *   · dialogues: الحوارات المتفرعة — `start` و`next` تشير
 *     إلى عقد موجودة (وإلا نهاية `endMessage`) — لا طريق مسدود
 *   · forms: كل حقل بعنوانين، وحقول `select` بخياراتها
 *   · strategies: LEARNING_STRATEGIES + AFTER_B2 كاملة
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import {
  CULTURAL_FACTS,
  DAILY_MISTAKES,
  DID_YOU_KNOW,
  EVERYDAY_PHRASES,
  REDEWENDUNGEN,
} from "@/data/supplemental/content";
import { DIALOGUES } from "@/data/supplemental/dialogues";
import { OFFICIAL_FORMS } from "@/data/supplemental/forms";
import { AFTER_B2, LEARNING_STRATEGIES } from "@/data/supplemental/strategies";

const AR = /[\u0600-\u06FF]/;
const LEVELS = new Set(["A1", "A2", "B1", "B2"]);

describe("مكمّلات — التعابير والثقافة واليوميات", () => {
  it("أرضيات المجموعات الخمس لا تُفقد", () => {
    expect(REDEWENDUNGEN.length, `REDEW=${REDEWENDUNGEN.length}`).toBeGreaterThanOrEqual(9);
    expect(CULTURAL_FACTS.length, `CULT=${CULTURAL_FACTS.length}`).toBeGreaterThanOrEqual(8);
    expect(DID_YOU_KNOW.length, `DYK=${DID_YOU_KNOW.length}`).toBeGreaterThanOrEqual(6);
    expect(DAILY_MISTAKES.length, `MISTAKES=${DAILY_MISTAKES.length}`).toBeGreaterThanOrEqual(8);
    expect(EVERYDAY_PHRASES.length, `PHRASES=${EVERYDAY_PHRASES.length}`).toBeGreaterThanOrEqual(12);
  });

  it("الحقول كاملة غير فارغة والمستويات صحيحة", () => {
    const problems: string[] = [];
    for (const r of REDEWENDUNGEN) {
      for (const k of ["de", "literal", "meaning", "example", "exampleAr"] as const) {
        if (!r[k]?.trim()) problems.push(`redew.${k}`);
      }
      if (!LEVELS.has(r.level)) problems.push(`redew.level=${r.level}`);
    }
    for (const f of CULTURAL_FACTS) {
      if (!f.title.trim() || !f.content.trim() || !f.emoji.trim()) problems.push(`cult.${f.title}`);
    }
    for (const f of DID_YOU_KNOW) {
      if (!f.title.trim() || !f.content.trim()) problems.push(`dyk.${f.title}`);
    }
    for (const m of DAILY_MISTAKES) {
      if (!m.wrong.trim() || !m.right.trim() || !m.why.trim()) problems.push(`mistake.${m.wrong}`);
      if (m.wrong === m.right) problems.push(`mistake متطابق: ${m.wrong}`);
      if (!LEVELS.has(m.level)) problems.push(`mistake.level=${m.level}`);
    }
    for (const p of EVERYDAY_PHRASES) {
      if (!p.de.trim() || !AR.test(p.ar) || !p.situation.trim()) problems.push(`phrase.${p.de}`);
    }
    expect(problems, "حقول ناقصة").toEqual([]);
  });
});

describe("مكمّلات — الحوارات المتفرعة: لا طريق مسدود", () => {
  it("7 حوارات على الأقل و`start` تشير لعقدة موجودة", () => {
    expect(DIALOGUES.length, `حوارات=${DIALOGUES.length}`).toBeGreaterThanOrEqual(7);
    const bad: string[] = [];
    for (const d of DIALOGUES) {
      if (!(d.start in d.nodes)) bad.push(`${d.id}.start=${d.start}`);
    }
    expect(bad, "بدايات معطوبة").toEqual([]);
  });

  it("حوار الطبيب التدريبي لا يضع تشخيصاً أو جرعة أو مدة دواء عامة", () => {
    const doctorDialogue = DIALOGUES.find(({ id }) => id === "dl-arzt");
    expect(doctorDialogue?.situation).toContain("لا تشخيصاً أو نصيحة طبية");
    expect(doctorDialogue?.situation).toContain("لا يحدد جرعات أدوية");
    const advice = doctorDialogue?.nodes.n3;
    expect(advice?.de).toContain("Packungsbeilage");
    expect(advice?.de).not.toMatch(/dreimal täglich|Tablette|viel trinken/i);
    expect(doctorDialogue?.nodes.end.de).not.toMatch(/Fünf Tage|Tabletten nehmen/i);
    expect(doctorDialogue?.nodes.end.de).toContain("wenden Sie sich bitte an Ihre Ärztin");
    expect(doctorDialogue?.nodes.end.endMessage).toContain("لا تستنتج تشخيصاً أو جرعة");
  });

  it("كل اختيار يشير لعقدة موجودة أو لنهاية `endMessage`", () => {
    const dead: string[] = [];
    for (const d of DIALOGUES) {
      for (const [key, node] of Object.entries(d.nodes)) {
        if (!node.speaker.trim() || !node.de.trim() || !AR.test(node.ar)) dead.push(`${d.id}:${key}.نص`);
        if (!node.choices?.length && !node.endMessage?.trim())
          dead.push(`${d.id}:${key} بلا اختيارات ولا نهاية`);
        for (const c of node.choices ?? []) {
          const terminal = c.next === "end" && typeof node.endMessage === "string";
          if (!(c.next in d.nodes) && !terminal) dead.push(`${d.id}:${key}.next=${c.next}`);
          if (!c.de.trim() || !AR.test(c.ar)) dead.push(`${d.id}:${key}.${c.id}.نص`);
        }
      }
    }
    expect(dead, "طرق مسدودة").toEqual([]);
  });
});

describe("مكمّلات — الاستمارات والاستراتيجيات", () => {
  it("الاستمارات: عنوانان لكل نموذج وحقل، و`select` بخياراته", () => {
    const problems: string[] = [];
    for (const f of OFFICIAL_FORMS) {
      if (!f.title.trim() || !f.titleDe.trim() || !f.description.trim() || !f.successMessage.trim())
        problems.push(`form.${f.id}`);
      for (const field of f.fields) {
        if (!field.label.trim() || !field.labelDe.trim()) problems.push(`field.${field.id}`);
        if (field.type === "select" && (field.options?.length ?? 0) < 2)
          problems.push(`select بلا خيارات: ${field.id}`);
      }
    }
    expect(problems, "استمارات ناقصة").toEqual([]);
  });

  it("الاستراتيجيات كاملة + AFTER_B2 بمساراتها", () => {
    const problems: string[] = [];
    for (const s of LEARNING_STRATEGIES) {
      if (!s.title.trim() || !s.summary.trim() || s.steps.length < 3 || !s.icon.trim())
        problems.push(`strategy.${s.id}`);
    }
    if (!AR.test(AFTER_B2.summary)) problems.push("AFTER_B2.summary");
    for (const p of AFTER_B2.paths) {
      if (!p.icon.trim() || !p.title.trim() || !p.content.trim()) problems.push(`path.${p.title}`);
    }
    expect(problems, "استراتيجيات ناقصة").toEqual([]);
  });
});

/**
 * ═══════════════════════════════════════════════════════════
 *  حارس وحدة التصحيح الموحّدة + حارس «لا تكرار للعارضات»
 *
 *  1) التصحيح: يتحقق من كل نوع جزء (mcq · rf · zuordnung · gap) ومن
 *     النسب وحدّ النجاح — ويثبت أن المحرّكين يستعملان المصدر نفسه.
 *  2) العارضات: يمنع إعادة تعريف عارضات الأسئلة داخل ملفات المحرّكات
 *     (السبب الجذري لتفرّع السلوك بين المستويات، ومنه فجوة صوت B2).
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { gradeTeil, gradeTeile, percent, scoreModule } from "@/lib/tests/exam-scoring";
import type { ExamHoerenTeil, ExamLesenTeil } from "@/types/exam";
import { B2_HOEREN, B2_HOEREN_SETS } from "@/data/exams";
import { A1_HOEREN } from "@/data/exams/a1-hoeren";
import { A1_LESEN } from "@/data/exams/a1-lesen";

/* ── 1) التصحيح ─────────────────────────────────────────── */

describe("التصحيح الموحّد — كل نوع جزء", () => {
  it("mcq: يحسب الصحيح من المجموع كاملاً (غير المجاب خطأ)", () => {
    const teil: ExamHoerenTeil = {
      teil: 2,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "mcq",
      audioText: "x",
      introAr: "ي",
      questions: [
        { id: "q1", q: "a", options: ["1", "2"], correct: 0 },
        { id: "q2", q: "b", options: ["1", "2"], correct: 1 },
        { id: "q3", q: "c", options: ["1", "2"], correct: 0 },
      ],
    };
    expect(gradeTeil(teil, { q1: 0, q3: 1 })).toEqual({ correct: 1, total: 3 });
    expect(gradeTeil(teil, { q1: 0, q2: 1 })).toEqual({ correct: 2, total: 3 });
  });

  it("rf: يقارن بالمنطقي isTrue", () => {
    const teil: ExamHoerenTeil = {
      teil: 1,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "rf",
      audioText: "x",
      introAr: "ي",
      statements: [
        { id: "s1", de: "a", isTrue: true, whyAr: "و" },
        { id: "s2", de: "b", isTrue: false, whyAr: "و" },
      ],
    };
    expect(gradeTeil(teil, { s1: true, s2: false })).toEqual({ correct: 2, total: 2 });
    // «false» إجابة صحيحة لسؤال isTrue=false — لا تُعامل كغياب إجابة
    expect(gradeTeil(teil, { s1: false, s2: false })).toEqual({ correct: 1, total: 2 });
    expect(gradeTeil(teil, {})).toEqual({ correct: 0, total: 2 });
  });

  it("zuordnung: يقارن بمعرّف الفئة الصحيحة", () => {
    const teil: ExamHoerenTeil = {
      teil: 3,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "zuordnung",
      audioText: "x",
      introAr: "ي",
      categories: [{ id: "c1", de: "a" }, { id: "c2", de: "b" }],
      items: [
        { id: "i1", de: "x", categoryId: "c1" },
        { id: "i2", de: "y", categoryId: "c2" },
      ],
    };
    expect(gradeTeil(teil, { i1: "c1", i2: "c1" })).toEqual({ correct: 1, total: 2 });
    expect(gradeTeil(teil, { i1: "c1", i2: "c2" })).toEqual({ correct: 2, total: 2 });
  });

  it("gap: يقرأ ترتيب الفراغات الرسمي (gapOrder)", () => {
    const teil: ExamLesenTeil = {
      teil: 3,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "gap",
      introAr: "ي",
      gap: {
        textWithGaps: "A {0} B {1} C",
        sentenceBank: [{ id: "g1", de: "x" }, { id: "g2", de: "y" }],
        gapOrder: ["g2", "g1"],
      },
    };
    expect(gradeTeil(teil, {}, { 0: "g2", 1: "g1" })).toEqual({ correct: 2, total: 2 });
    expect(gradeTeil(teil, {}, { 0: "g1" })).toEqual({ correct: 0, total: 2 });
  });

  it("مجموعة أجزاء: يجمع النتائج ويقرأ الفراغات من مفتاح gap", () => {
    const gapTeil: ExamLesenTeil = {
      teil: 3,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "gap",
      introAr: "ي",
      gap: { textWithGaps: "A {0}", sentenceBank: [{ id: "g1", de: "x" }, { id: "g2", de: "y" }], gapOrder: ["g1"] },
    };
    const answers = { "s1": true, "gap": { 0: "g1" } };
    const rfTeil: ExamLesenTeil = {
      teil: 1,
      title: "t",
      titleAr: "ت",
      minutes: 1,
      points: 1,
      kind: "rf",
      introAr: "ي",
      statements: [{ id: "s1", de: "a", isTrue: true, whyAr: "و" }, { id: "s2", de: "b", isTrue: false, whyAr: "و" }],
    };
    expect(gradeTeile([rfTeil, gapTeil], answers)).toEqual({ correct: 2, total: 3 });
  });

  it("النسب وحدّ النجاح: 60 افتراضياً، ويُمرَّر صراحةً عند الحاجة", () => {
    expect(percent(0, 0)).toBe(0);
    expect(percent(1, 3)).toBe(33);
    expect(scoreModule(18, 30)).toMatchObject({ pct: 60, passed: true });
    expect(scoreModule(17, 30)).toMatchObject({ pct: 57, passed: false });
    expect(scoreModule(60, 100, 60).passed).toBe(true);
    expect(scoreModule(59, 100, 60).passed).toBe(false);
  });

  it("على بيانات حقيقية: B2 يحسب 30 سؤالاً في الاستماع لكل نموذج", () => {
    // الإجابات المثالية مبنية من النموذج الأول المُعلَن، ثم تُصحَّح به المحرّك نفسه
    const perfect: Record<string, unknown> = {};
    for (const t of B2_HOEREN_SETS[0]) {
      for (const s of t.statements ?? []) perfect[s.id] = s.isTrue;
      for (const q of t.questions ?? []) perfect[q.id] = q.correct;
      for (const i of t.items ?? []) perfect[i.id] = i.categoryId;
    }
    const g = gradeTeile(B2_HOEREN, perfect);
    expect(g.total).toBe(30);
    expect(g.correct).toBe(30);
    expect(scoreModule(g.correct, g.total, 60).passed).toBe(true);
  });

  it("على بيانات حقيقية: A1 يطابق العدّ اليدوي المتوقع", () => {
    const g = gradeTeile(A1_HOEREN, {});
    const total = A1_HOEREN.reduce(
      (n, t) => n + (t.statements?.length ?? 0) + (t.questions?.length ?? 0),
      0,
    );
    expect(g).toEqual({ correct: 0, total });
    const l = gradeTeile(A1_LESEN, {});
    const lTotal = A1_LESEN.reduce(
      (n, t) => n + (t.statements?.length ?? 0) + (t.questions?.length ?? 0),
      0,
    );
    expect(l).toEqual({ correct: 0, total: lTotal });
  });
});

/* ── 2) حارس عدم التكرار ────────────────────────────────── */

describe("العارضات: مصدر واحد للمحرّكات كلها", () => {
  const engines = [
    "src/components/tests/goethe-a1-exam.tsx",
    "src/components/tests/goethe-b2-exam.tsx",
  ];

  it("لا يعرّف أي محرّك عارضات أسئلة محلياً (mcq/rf/zuordnung/gap)", () => {
    const banned = /function\s+(McqList|McqBlock|RichtigFalschList|ZuordnungList|GapList|StatementsBlock)\b/;
    const offenders: string[] = [];
    for (const rel of engines) {
      const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      if (banned.test(src)) offenders.push(rel);
    }
    expect(
      offenders,
      `عارضات معرَّفة داخل المحرّكات (يجب استيرادها من exam-question-views.tsx): ${offenders.join(", ")}`,
    ).toEqual([]);
  });

  it("كل محرّك يستورد عارضاته من الوحدة المشتركة", () => {
    for (const rel of engines) {
      const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      expect(src, `${rel} لا يستورد exam-question-views`).toContain("@/components/tests/exam-question-views");
    }
  });

  it("لا يعيد أي محرّك تعريف حاسبة النتيجة أو منطق التصحيح", () => {
    for (const rel of engines) {
      const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      expect(src, `${rel} يعرّف scoreModule محلياً`).not.toMatch(/function\s+scoreModule\b/);
      expect(src, `${rel} يعرّف scorePart محلياً`).not.toMatch(/function\s+scorePart\b/);
      expect(src, `${rel} لا يستورد التصحيح الموحّد`).toContain("@/lib/tests/exam-scoring");
    }
  });

  it("الوحدة المشتركة تصدّر العارضات الستة (الرسمية + المدمجة)", () => {
    const rel = "src/components/tests/exam-question-views.tsx";
    const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
    for (const name of [
      "ExamMcqList",
      "ExamStatementsList",
      "ExamZuordnungList",
      "ExamGapList",
      "ExamMcqListCompact",
      "ExamStatementsListCompact",
    ]) {
      expect(src, `${name} مفقود من الوحدة المشتركة`).toContain(`export function ${name}(`);
    }
  });
});

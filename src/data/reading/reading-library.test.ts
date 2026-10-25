/**
 * ═══════════════════════════════════════════════════════════
 *  حارس مكتبة القراءة (`src/data/reading/`)
 *
 *  الدافع (دفعة 52 — 2026-10-16): مقاييس التغطية أظهرت أن مكتبة القراءة
 *  (15 نصاً + 12 نصّ امتحاني B2) **بلا أي اختبار**، وأن **36 شرحاً** فيها كان
 *  عربياً صرفاً («طباخ.» · «في السادسة.») لا يقتبس من النصّ — فأُثريت الـ36
 *  كلها بمقتبس حرفي. هذا الحارس يقفل الحالات الثلاث:
 *   1) بنية كل نصّ وسؤال (عنوان · ترجمة · خيارات · فهرس صحيح · شرح).
 *   2) **دليل ألماني في كل شرح** (وإلا فالمتعلم لا يتحقق من الجواب).
 *   3) **كل اقتباس بين «» موجود حرفياً في النصّ** — قاعدة مانعة للاقتباس
 *      المُفبرك أو الدائري (قياس ما قبل الحارس: 0 مخالفة بعد إثراء الـ36).
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { B2_READING_EXAM } from "@/data/reading/b2-exam-library";
import { READING_LIBRARY } from "@/data/reading/library";

/** دليل ألماني: كلمة لاتينية من ثلاثة أحرف على الأقل */
const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;
/** نصّ ألماني خالص: لا حروف عربية */
const ARABIC = /[\u0600-\u06FF]/;
/** اقتباس بين علامتي تنصيص عربيتين */
const SPAN = /«([^»]+)»/g;

/** تطبيع للمقارنة: توحيد علامات التنصيص والشُرَط والمسافات وحذف ترقيم الطرف */
function normalize(text: string): string {
  return text
    .replace(/[„“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[.\s]+$/, "")
    .trim();
}

/** اقتباسات ألمانية داخل شرح */
function germanSpans(explanation: string): string[] {
  return [...explanation.matchAll(SPAN)].map((m) => normalize(m[1])).filter((s) => GERMAN_EVIDENCE.test(s));
}

describe("مكتبة القراءة المتدرجة (قراءة حرة)", () => {
  it("15 نصاً موزّعة على المستويات الأربعة بمعرّفات فريدة", () => {
    expect(READING_LIBRARY).toHaveLength(15);
    const ids = READING_LIBRARY.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      expect(READING_LIBRARY.some((r) => r.level === level), `مستوى غائب: ${level}`).toBe(true);
    }
  });

  it("كل نصّ: ألماني خالص + ترجمة عربية + عنوانان", () => {
    const problems: string[] = [];
    for (const r of READING_LIBRARY) {
      if (!r.text?.trim()) problems.push(`${r.id}: نصّ مفقود`);
      else if (ARABIC.test(r.text)) problems.push(`${r.id}: حرف عربي في النصّ الألماني`);
      if (!r.textAr?.trim()) problems.push(`${r.id}: ترجمة النصّ مفقودة`);
      if (!r.title?.trim() || !r.titleDe?.trim()) problems.push(`${r.id}: عنوان ناقص`);
      if (!r.category?.trim()) problems.push(`${r.id}: تصنيف مفقود`);
    }
    expect(problems).toEqual([]);
  });

  it("كل سؤال: خيارات سليمة وفهرس صحيح وشرح بدليل ألماني", () => {
    const problems: string[] = [];
    for (const r of READING_LIBRARY) {
      const questions = r.questions ?? [];
      if (questions.length < 2) problems.push(`${r.id}: أقل من سؤالين`);
      questions.forEach((q, i) => {
        const at = `${r.id} سؤال ${i + 1}`;
        if (!q.q?.trim()) problems.push(`${at}: صيغة السؤال مفقودة`);
        if (!q.qAr?.trim()) problems.push(`${at}: ترجمة السؤال مفقودة`);
        if (q.options.length < 2) problems.push(`${at}: أقل من خيارين`);
        if (q.options.some((o) => !o.trim())) problems.push(`${at}: خيار فارغ`);
        const normalized = q.options.map((o) => o.trim().toLowerCase());
        if (new Set(normalized).size !== normalized.length) problems.push(`${at}: خيار مكرّر`);
        if (typeof q.correct !== "number" || q.correct < 0 || q.correct >= q.options.length) {
          problems.push(`${at}: فهرس الإجابة خارج الحدود`);
        }
        if (!q.explanation?.trim()) problems.push(`${at}: شرح مفقود`);
        else if (!GERMAN_EVIDENCE.test(q.explanation)) problems.push(`${at}: شرح بلا دليل ألماني «${q.explanation}»`);
      });
    }
    expect(problems).toEqual([]);
  });

  it("كل اقتباس بين «» في شروح المكتبة موجود حرفياً في نصّه", () => {
    const problems: string[] = [];
    let spansChecked = 0;
    for (const r of READING_LIBRARY) {
      const text = normalize(r.text ?? "");
      for (const [i, q] of (r.questions ?? []).entries()) {
        for (const span of germanSpans(q.explanation ?? "")) {
          spansChecked += 1;
          if (!text.includes(span)) problems.push(`${r.id} سؤال ${i + 1}: «${span}» ليس في النصّ`);
        }
      }
    }
    expect(problems).toEqual([]);
    // حارس غير فارغ: يوجد اقتباسات مُتحقَّق منها فعلاً
    expect(spansChecked).toBeGreaterThan(20);
  });
});

describe("مكتبة قراءة امتحان B2", () => {
  it("12 نصاً امتحانياً بأسئلة وأسباب عربية بدليل ألماني", () => {
    const problems: string[] = [];
    expect(B2_READING_EXAM.length).toBeGreaterThanOrEqual(12);
    const ids = B2_READING_EXAM.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const r of B2_READING_EXAM) {
      if (!r.text?.trim()) problems.push(`${r.id}: نصّ مفقود`);
      if (!r.textAr?.trim()) problems.push(`${r.id}: ترجمة النصّ مفقودة`);
      const questions = r.questions ?? [];
      if (questions.length < 2) problems.push(`${r.id}: أقل من سؤالين`);
      questions.forEach((q, i) => {
        const at = `${r.id} سؤال ${i + 1}`;
        if (q.options.length < 2) problems.push(`${at}: أقل من خيارين`);
        if (q.options.some((o) => !o.trim())) problems.push(`${at}: خيار فارغ`);
        if (typeof q.correct !== "number" || q.correct < 0 || q.correct >= q.options.length) {
          problems.push(`${at}: فهرس الإجابة خارج الحدود`);
        }
        if (!q.whyAr?.trim()) problems.push(`${at}: سبب مفقود`);
        else if (!GERMAN_EVIDENCE.test(q.whyAr)) problems.push(`${at}: سبب بلا دليل ألماني «${q.whyAr}»`);
      });
    }
    expect(problems).toEqual([]);
  });

  it("كل اقتباس «» في الأسباب موجود حرفياً في نصّه", () => {
    const problems: string[] = [];
    for (const r of B2_READING_EXAM) {
      const text = normalize(r.text ?? "");
      for (const [i, q] of (r.questions ?? []).entries()) {
        for (const span of germanSpans(q.whyAr ?? "")) {
          if (!text.includes(span)) problems.push(`${r.id} سؤال ${i + 1}: «${span}» ليس في النصّ`);
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

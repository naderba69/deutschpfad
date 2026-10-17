/**
 * ═══════════════════════════════════════════════════════════
 *  حارس نظافة النصوص الألمانية — يمنع عيوباً وقعت فعلاً
 *
 *  ستة أصناف من العيوب ظهرت في مراجعات سابقة، فيقفلها هذا الحارس في كل
 *  بيانات الامتحانات (A1–B1 بنماذجها الثلاثة، وB2 بأطقمه + بنك قواعده):
 *   1) **كلمة إنجليزية في نصّ ألماني**: وقعت فعلاً — «über die B eight fahren»
 *      في A2-3 T3 (رقم منطوق بالإنجليزية داخل نصّ يُنطق) — فصار النصّ
 *      «Bundesstraße acht». القائمة أدناه كلمات لا توجد في الألمانية أصلاً
 *      (استُثنيت المتشابهات: was · will · man · so · in · an · am · bis …).
 *   2) **ترقيم ملتصق بحرف**: وقعت فعلاً — «…für die Zukunft?» متّصلة بـ
 *      «Frau Reuter:» بلا مسافة في B1-3 T3، فلا يقرؤها المتعلم مفصولة.
 *   3) **مسافة مزدوجة أو مسافة في الطرف**: عيب عرض ينشأ من وصل الجُمل.
 *   4) **حرف عربي داخل نصّ ألماني خالص** (خطأ نسخ/لصق) — باستثناء `struktur`
 *      في الكتابة (عُرفُه مختلط: تسمية عربية تقود جملة ألمانية).
 *   5) **سبب تصحيح عربي بلا دليل ألماني**: وُجد فعلاً في 21 موضعاً عبر A1–B2 —
 *      الشرح كان مفهوماً لكنه لا يقتبس من النصّ الألماني، فلا يتحقّق منه
 *      المتعلّم. أُضيف الاقتباس في المواضع الـ21 كلها، وقفل الحارس القاعدة.
 *   6) **سؤال اختيار معطوب**: أقل من خيارين، أو خيار فارغ، أو خيار مكرّر داخله.
 *
 *  ويجمع الحارس كل `whyAr` (عبارات rf وأسئلة الاختيار وبنك قواعد B2) لا
 *  النصوص وحدها — فلا تمرّ قاعدة على جزء من الداتا.
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { B2_HOEREN_SETS, B2_LESEN_SETS, B2_SCHREIBEN_SETS, B2_SPRECHEN_SETS } from "@/data/exams";
import { B2_GRAMMATIK } from "@/data/exams/b2-grammatik";
import { LEVEL_MODELS } from "@/data/exams/level-models";
import type { ExamHoerenTeil, ExamLesenTeil, ExamSchreibaufgabe, ExamSprechen } from "@/types/exam";

/** كلمات إنجليزية خالصة (لا وجود لها في الألمانية) — تُمسك أخطاء النسخ والوصل */
const ENGLISH_TRAPS = [
  "the", "and", "with", "from", "you", "they", "this", "there", "when", "why",
  "how", "are", "were", "does", "did", "could", "should", "would", "is", "be",
  "of", "for", "but", "not", "eight", "nine", "seven", "twenty", "thirty",
  "fifty", "hundred", "thousand",
];

interface McqOptions {
  where: string;
  options: string[];
}

/** سبب تصحيح عربي يجب أن يحمل دليلاً ألمانياً من النصّ */
interface Reason {
  where: string;
  why: string;
}

interface GermanText {
  where: string;
  text: string;
  /** حقل مختلط عُرفاً (تسمية عربية + جملة ألمانية مثل `struktur`) — لا يُفحَص للعربية */
  mixed?: boolean;
}

function fromHoerenTeil(prefix: string, part: ExamHoerenTeil, out: GermanText[], mcqs: McqOptions[], reasons: Reason[]) {
  const at = `${prefix} استماع ${part.teil}`;
  out.push({ where: `${at} audioText`, text: part.audioText });
  (part.audioSegments ?? []).forEach((s, i) => out.push({ where: `${at} مقطع ${i + 1}`, text: s }));
  (part.statements ?? []).forEach((s, i) => {
    out.push({ where: `${at} عبارة ${i + 1}`, text: s.de });
    reasons.push({ where: `${at} عبارة ${i + 1} (${s.id}) سبب`, why: s.whyAr });
  });
  (part.questions ?? []).forEach((q, i) => {
    out.push({ where: `${at} سؤال ${i + 1}`, text: q.q });
    q.options.forEach((o, j) => out.push({ where: `${at} سؤال ${i + 1} خيار ${j + 1}`, text: o }));
    mcqs.push({ where: `${at} سؤال ${i + 1} (${q.id})`, options: q.options });
    reasons.push({ where: `${at} سؤال ${i + 1} (${q.id}) سبب`, why: q.whyAr ?? "" });
  });
  (part.items ?? []).forEach((it, i) => out.push({ where: `${at} عنصر ${i + 1}`, text: it.de }));
  (part.categories ?? []).forEach((c, i) => out.push({ where: `${at} فئة ${i + 1}`, text: c.de }));
}

function fromLesenTeil(prefix: string, part: ExamLesenTeil, out: GermanText[], mcqs: McqOptions[], reasons: Reason[]) {
  const at = `${prefix} قراءة ${part.teil}`;
  if (part.text) out.push({ where: `${at} نص`, text: part.text });
  if (part.gap) {
    out.push({ where: `${at} نص الفجوات`, text: part.gap.textWithGaps });
    part.gap.sentenceBank.forEach((s, i) => out.push({ where: `${at} بنك ${i + 1}`, text: s.de }));
  }
  (part.statements ?? []).forEach((s, i) => out.push({ where: `${at} عبارة ${i + 1}`, text: s.de }));
  (part.questions ?? []).forEach((q, i) => {
    out.push({ where: `${at} سؤال ${i + 1}`, text: q.q });
    q.options.forEach((o, j) => out.push({ where: `${at} سؤال ${i + 1} خيار ${j + 1}`, text: o }));
    mcqs.push({ where: `${at} سؤال ${i + 1} (${q.id})`, options: q.options });
    reasons.push({ where: `${at} سؤال ${i + 1} (${q.id}) سبب`, why: q.whyAr ?? "" });
  });
  (part.items ?? []).forEach((it, i) => out.push({ where: `${at} عنصر ${i + 1}`, text: it.de }));
  (part.categories ?? []).forEach((c, i) => out.push({ where: `${at} فئة ${i + 1}`, text: c.de }));
}

function fromSchreiben(prefix: string, parts: ExamSchreibaufgabe[], out: GermanText[]) {
  parts.forEach((p, i) => {
    const at = `${prefix} كتابة ${i + 1}`;
    out.push({ where: `${at} المهمة`, text: p.aufgabeDe });
    // `struktur` عُرفُه مختلط: تسمية عربية تقود جملة ألمانية (إرشاد للمتعلم)
    p.struktur.forEach((s, j) => out.push({ where: `${at} بنية ${j + 1}`, text: s, mixed: true }));
    p.redemittel.forEach((s, j) => out.push({ where: `${at} عبارة ${j + 1}`, text: s }));
    p.requires.forEach((r, j) => out.push({ where: `${at} مطلوب ${j + 1}`, text: r.de }));
  });
}

function fromSprechen(prefix: string, parts: { turns: { partnerDe: string; modelDe: string }[] }[], out: GermanText[]) {
  parts.forEach((p, i) => {
    p.turns.forEach((t, j) => {
      out.push({ where: `${prefix} تحدث ${i + 1} دور ${j + 1} شريك`, text: t.partnerDe });
      out.push({ where: `${prefix} تحدث ${i + 1} دور ${j + 1} نموذج`, text: t.modelDe });
    });
  });
}

function fromB2Sprechen(prefix: string, sp: ExamSprechen, out: GermanText[]) {
  sp.vortrag.forEach((v, i) => {
    out.push({ where: `${prefix} عرض ${i + 1}`, text: v.topicDe });
    v.leitfragen.forEach((q, j) => out.push({ where: `${prefix} عرض ${i + 1} سؤال ${j + 1}`, text: q }));
  });
  sp.diskussion.forEach((d, i) => {
    out.push({ where: `${prefix} مناقشة ${i + 1}`, text: d.themaDe });
    d.pro.forEach((s, j) => out.push({ where: `${prefix} مناقشة ${i + 1} مؤيد ${j + 1}`, text: s }));
    d.kontra.forEach((s, j) => out.push({ where: `${prefix} مناقشة ${i + 1} معارض ${j + 1}`, text: s }));
  });
}

/** كل النصوص الألمانية وكل أسئلة الاختيار في كل بيانات الامتحانات */
function collectAll(): { texts: GermanText[]; mcqs: McqOptions[]; reasons: Reason[] } {
  const out: GermanText[] = [];
  const mcqs: McqOptions[] = [];
  const reasons: Reason[] = [];
  for (const level of ["A1", "A2", "B1"] as const) {
    for (const model of LEVEL_MODELS[level]) {
      model.hoeren.forEach((p) => fromHoerenTeil(`${model.id}`, p, out, mcqs, reasons));
      model.lesen.forEach((p) => fromLesenTeil(`${model.id}`, p, out, mcqs, reasons));
      fromSchreiben(`${model.id}`, model.schreiben, out);
      fromSprechen(`${model.id}`, model.sprechen, out);
    }
  }
  B2_HOEREN_SETS.forEach((set, i) => set.forEach((p) => fromHoerenTeil(`B2-طقم${i + 1}`, p, out, mcqs, reasons)));
  B2_LESEN_SETS.forEach((set, i) => set.forEach((p) => fromLesenTeil(`B2-طقم${i + 1}`, p, out, mcqs, reasons)));
  B2_SCHREIBEN_SETS.forEach((set, i) => fromSchreiben(`B2-طقم${i + 1}`, set, out));
  B2_SPRECHEN_SETS.forEach((sp, i) => fromB2Sprechen(`B2-طقم${i + 1}`, sp, out));
  B2_GRAMMATIK.forEach((m) => reasons.push({ where: `B2 قواعد (${m.id}) سبب`, why: m.whyAr }));
  return { texts: out, mcqs, reasons };
}

const { texts, mcqs, reasons } = collectAll();

describe("نظافة النصوص الألمانية", () => {
  it("جُمعت نصوص فعلية من كل المستويات (حارس غير فارغ)", () => {
    expect(texts.length).toBeGreaterThan(400);
    // كل مستوى ممثَّل — فلا يمرّ الحارس إن انكسر الجمع صامتاً
    for (const tag of ["A1-1", "A2-3", "B1-2", "B2-طقم1"]) {
      expect(texts.some((t) => t.where.includes(tag)), tag).toBe(true);
    }
    // الأسباب مجموعة من كل المصادر أيضاً (لا يكفي نصوص الأسئلة وحدها)
    expect(reasons.length).toBeGreaterThan(300);
    for (const tag of ["A1-1", "B1-3", "B2-طقم1", "B2 قواعد"]) {
      expect(reasons.some((r) => r.where.includes(tag)), tag).toBe(true);
    }
  });

  it("لا كلمة إنجليزية خالصة في نصّ ألماني", () => {
    const problems: string[] = [];
    for (const { where, text } of texts) {
      for (const word of ENGLISH_TRAPS) {
        if (new RegExp(`\\b${word}\\b`, "i").test(text)) problems.push(`${where}: «${word}»`);
      }
    }
    expect(problems).toEqual([]);
  });

  it("لا ترقيم ملتصق بحرف (نقطة/استفهام/تعجب بلا مسافة بعدها)", () => {
    const problems: string[] = [];
    for (const { where, text } of texts) {
      // البريد والنطاقات والأعداد العشرية ليست التصاقاً: «nora@post.de» و«goethe.de» و«1.5»
      const masked = text
        .replace(/[A-Za-z0-9_+-]+@[A-Za-z0-9._-]+/g, "«بريد»")
        .replace(/\b[A-Za-z0-9-]+\.(?:de|com|org|net|at|ch|eu)\b/g, "«نطاق»")
        .replace(/\d+\.\d+/g, "«عدد»");
      const m = masked.match(/[.?!][A-Za-zÄÖÜäöüß]/g);
      if (m) problems.push(`${where}: «${m.join(" · ")}»`);
    }
    expect(problems).toEqual([]);
  });

  it("لا مسافة مزدوجة ولا مسافة في الطرف", () => {
    const problems: string[] = [];
    for (const { where, text } of texts) {
      if (/ {2,}/.test(text)) problems.push(`${where}: مسافة مزدوجة`);
      if (text !== text.trim()) problems.push(`${where}: مسافة في الطرف`);
    }
    expect(problems).toEqual([]);
  });

  it("كل سؤال اختيار: خيارات غير فارغة وبلا تكرار داخله", () => {
    const problems: string[] = [];
    for (const { where, options } of mcqs) {
      expect(options.length, `${where}: عدد الخيارات`).toBeGreaterThanOrEqual(2);
      options.forEach((o, i) => {
        if (o.trim().length === 0) problems.push(`${where}: خيار ${i + 1} فارغ`);
      });
      const normalized = options.map((o) => o.trim().toLowerCase());
      if (new Set(normalized).size !== normalized.length) {
        problems.push(`${where}: خيار مكرّر داخل السؤال`);
      }
    }
    expect(problems).toEqual([]);
  });

  it("كل سبب تصحيح يحمل دليلاً ألمانياً من النصّ (لا شرح عربي صرف)", () => {
    const problems: string[] = [];
    for (const { where, why } of reasons) {
      if (why.trim().length === 0) {
        problems.push(`${where}: سبب مفقود`);
        continue;
      }
      // الدليل = كلمة ألمانية من ثلاثة أحرف على الأقل (لا أرقام ولا نصّ عربي صرف)
      if (!/[A-Za-zÄÖÜäöüß]{3,}/.test(why)) problems.push(`${where}: «${why}»`);
    }
    expect(problems).toEqual([]);
  });

  it("لا حرف عربي داخل نصّ ألماني خالص (خطأ نسخ/لصق)", () => {
    const problems: string[] = [];
    for (const { where, text, mixed } of texts) {
      if (mixed) continue;
      if (/[\u0600-\u06FF]/.test(text)) problems.push(`${where}`);
    }
    expect(problems).toEqual([]);
  });
});

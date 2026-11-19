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
  it("ينقل kleine Regel بمعنى قاعدة بسيطة لا قاعدة صغيرة حجماً", () => {
    const reading = READING_LIBRARY.find((item) => item.id === "rd-b2-6");
    const question = reading?.questions?.find((item) => item.q.startsWith("Wer hat nur eine kleine Regel"));
    expect(question?.qAr).toBe("من لديه قاعدة بسيطة واحدة فقط: لا هاتف أثناء تناول الطعام؟");
  });

  it("تصوغ أيام العمل من المنزل في نموذج هجين بعربية طبيعية", () => {
    const reading = READING_LIBRARY.find((item) => item.id === "rd-b2-4");
    const question = reading?.questions?.find((item) => item.q.includes("drei Tage Büro"));
    expect(question?.qAr).toBe("تخطط الشركة لنموذج هجين: ثلاثة أيام في المكتب ويومان من المنزل.");
  });

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
  it("يحفظ المقارنة في ختام نص الحياة الحضرية", () => {
    const text = B2_READING_EXAM.find((reading) => reading.id === "b2x-6");
    expect(text?.text).toContain("Die Zukunft der Stadt entscheidet sich weniger in den Hochhäusern als auf der Straße.");
    expect(text?.textAr).toContain("مستقبل المدينة لا يُحسم في ناطحات السحاب بقدر ما يُحسم في الشارع.");
    expect(text?.textAr).not.toContain("في الشوارع لا في ناطحات السحاب");
    expect(text?.text).toContain("Nachbarschaftszentren");
    expect(text?.textAr).toContain("المراكز المجتمعية في الأحياء");
    expect(text?.textAr).not.toContain("مراكز جوار");
    expect(text?.textAr).toContain("يعتمد مخططو المدن بشكل متزايد على مفاهيم مستدامة");
    expect(text?.textAr).toContain("مراكز المدن الخالية من السيارات");
    expect(text?.textAr).toContain("مساكن ميسورة التكلفة");
    expect(text?.textAr).toContain("المدن الصالحة للعيش تحتاج إلى أكثر من البنية التحتية");
    expect(text?.textAr).not.toContain("يعتمد مخططو المدن بشكل متزايد مفاهيم");
    expect(text?.text).toContain("Wohnraum wird knapp und teuer");
    expect(text?.textAr).toContain("تقلّ المساكن المتاحة وترتفع تكلفتها");
    expect(text?.text).toContain("der Verkehr nimmt zu");
    expect(text?.textAr).toContain("وتزداد حركة المرور");
    expect(text?.textAr).not.toContain("الازدحام المروري");
    expect(text?.text).toContain("Schattenseiten");
    expect(text?.textAr).toContain("جوانب سلبية");
    expect(text?.textAr).not.toContain("جوانب مظلمة");
    expect(text?.text).toContain("Klimaschutzpläne");
    expect(text?.textAr).toContain("تستقطب المدن الكبرى الناس من أنحاء العالم بما توفره من فرص عمل");
    expect(text?.textAr).toContain("وضعت مدن كثيرة خططاً خاصة لحماية المناخ، وتدعم مشاريع للسكن المشترك");
  });

  it("يصوغ jeder dritte عربياً بوصفه واحداً من كل ثلاثة", () => {
    const text = B2_READING_EXAM.find((reading) => reading.id === "b2x-8");
    expect(text?.questions[0]?.qAr).toBe(
      "كم سيبلغ عمر واحد من كل ثلاثة من سكان ألمانيا بحلول عام 2030؟",
    );
  });

  it("يستخدم تركيباً سليماً في خاتمة نص الشيخوخة عن التعامل معها", () => {
    const text = B2_READING_EXAM.find((reading) => reading.id === "b2x-8");
    expect(text?.text).toContain(
      "Die Frage ist nicht, wie wir das Altern verhindern, sondern wie wir damit umgehen.",
    );
    expect(text?.text).not.toContain("wie wir mit ihr gestalten");
  });

  it("يحسم مرجع الضمير في جملة الجيل 60+", () => {
    const text = B2_READING_EXAM.find((reading) => reading.id === "b2x-8");
    expect(text?.text).toContain(
      "wenn die Generation 60+ als aktive Ressource gesehen wird",
    );
    expect(text?.text).not.toContain("wenn sie als aktive Ressource gesehen wird");
  });

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


describe("حراسة ترجمة aufstehen في القراءة", () => {
  it("يوحّد النص والسؤال على معنى النهوض", () => {
    const reading = READING_LIBRARY.find((item) => item.id === "rd-a1-2");
    expect(reading?.textAr).toMatch(/^أنهض في السادسة/);
    expect(reading?.questions?.find((item) => item.q === "Wann steht er auf?")?.qAr).toBe("متى ينهض؟");
  });
});

describe("حراسة ترجمة Warmmiete في إعلان السكن", () => {
  it("تحفظ دلالة warm دون افتراض أن التدفئة هي التكلفة الوحيدة", () => {
    const reading = READING_LIBRARY.find((item) => item.id === "rd-a2-2");
    expect(reading?.text).toContain("650 Euro warm");
    expect(reading?.textAr).toContain("650 يورو شاملة التكاليف المذكورة في الإعلان");
    expect(reading?.textAr).not.toContain("شاملة التدفئة");
  });
});

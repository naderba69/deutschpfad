import { describe, expect, it } from "vitest";

import { LESSONS } from "./index";
import type { Lesson, ReadingText, TheoryBlock } from "@/types/lesson";

/**
 * حرّاس العمق الأكاديمي.
 *
 * الحرّاس في integrity.test.ts يضمنون أن المحتوى *صحيح ومتماسك*.
 * هذا الملف يضمن شيئاً آخر تماماً: أن يكون المحتوى *مُدرَّساً*.
 *
 * الدافع: مسحٌ للكوربوس أظهر متوسط شرح نظري = 282 حرفاً، و97 كتلة من 123
 * محشورة بين 200 و400 حرف، وبلا فقرات. بذلك القِصَر تكون الكتلة تذكيراً
 * لمن يعرف القاعدة أصلاً، لا تعليماً لمن يجهلها — وهو الفرق بين ملخّص
 * ومعهد لغة. الحرّاس هنا يُطبَّق على الدروس المُرقّاة فقط (عبر قائمة
 * صريحة) كي تبقى الترقية تدريجية ولا تُكسَر الحُزمة، على أن تكبر القائمة
 * درساً بعد درس حتى تشمل الكوربوس كلّه.
 */

/** الدروس التي رُقّيت إلى المعيار الأكاديمي — تكبر هذه القائمة مع كل ترقية. */
export const ACADEMIC_LESSONS: string[] = ["a1-00", "a1-01", "a1-02", "a1-03", "a1-04", "a1-05", "a1-06", "a1-07", "a1-08", "a1-09", "a1-10", "a1-11"];

const MIN_EXPLANATION = 900;
const MIN_WHY = 250;
const MIN_COMPARISON = 250;
const MIN_PARAGRAPHS_IN_EXPLANATION = 2;

function academic(): Lesson[] {
  return LESSONS.filter((l) => ACADEMIC_LESSONS.includes(l.id));
}

describe("العمق الأكاديمي — الشرح النظري", () => {
  it("قائمة الدروس المُرقّاة تشير إلى دروس موجودة فعلاً", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const ghosts = ACADEMIC_LESSONS.filter((id) => !ids.has(id));
    expect(ghosts).toEqual([]);
  });

  it(`كل شرح نظري ≥ ${MIN_EXPLANATION} حرف — الشرح يُدرِّس ولا يُلخِّص`, () => {
    const thin: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if (t.explanationAr.length < MIN_EXPLANATION) {
          thin.push(`${lesson.id}:${t.id} = ${t.explanationAr.length}`);
        }
      }
    }
    expect(thin).toEqual([]);
  });

  it(`كل شرح مُقسَّم إلى ${MIN_PARAGRAPHS_IN_EXPLANATION}+ فقرات — الكتلة المصمتة لا تُقرأ`, () => {
    const walls: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        const paras = t.explanationAr.split("\n").filter((p) => p.trim().length > 0);
        if (paras.length < MIN_PARAGRAPHS_IN_EXPLANATION) {
          walls.push(`${lesson.id}:${t.id} = ${paras.length} فقرة`);
        }
      }
    }
    expect(walls).toEqual([]);
  });

  it(`whyAr ≥ ${MIN_WHY} حرف — «لماذا» هي ما يُفرّق الأستاذ عن الجدول`, () => {
    const thin: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if ((t.whyAr ?? "").length < MIN_WHY) thin.push(`${lesson.id}:${t.id} = ${t.whyAr?.length ?? 0}`);
      }
    }
    expect(thin).toEqual([]);
  });

  it(`المقارنة بالعربية ≥ ${MIN_COMPARISON} حرف — التحليل التقابلي هو ميزة هذا المنهج`, () => {
    const thin: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if (t.comparisonWithArabic.length < MIN_COMPARISON) {
          thin.push(`${lesson.id}:${t.id} = ${t.comparisonWithArabic.length}`);
        }
      }
    }
    expect(thin).toEqual([]);
  });

  it("كل كتلة تحمل مقارنة بقاعدة مشابهة — القواعد شبكة لا جزر", () => {
    const missing: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if (!t.relatedRuleComparison?.content) missing.push(`${lesson.id}:${t.id}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("≥3 أخطاء شائعة لكل كتلة، ولكلٍّ تفسيرٌ لا تصحيحٌ فقط", () => {
    const weak: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if (t.commonMistakes.length < 3) weak.push(`${lesson.id}:${t.id} = ${t.commonMistakes.length} أخطاء`);
        for (const m of t.commonMistakes) {
          if (m.whyAr.length < 60) weak.push(`${lesson.id}:${t.id} تفسير قصير: "${m.whyAr}"`);
        }
      }
    }
    expect(weak).toEqual([]);
  });

  it("≥6 أمثلة لكل كتلة — القاعدة تُستنتج من الكثرة لا من المثالين", () => {
    const few: string[] = [];
    for (const lesson of academic()) {
      for (const t of lesson.theory) {
        if (t.examples.length < 6) few.push(`${lesson.id}:${t.id} = ${t.examples.length}`);
      }
    }
    expect(few).toEqual([]);
  });
});

const MIN_WORDS_BY_LEVEL: Record<string, number> = { A1: 90, A2: 150, B1: 250, B2: 320 };

function words(r: ReadingText): number {
  return r.paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
}

describe("العمق الأكاديمي — نصّ القراءة", () => {
  it("كل درس مُرقّى يحمل نصّ قراءة ممتدّاً", () => {
    const missing = academic().filter((l) => !l.reading).map((l) => l.id);
    expect(missing).toEqual([]);
  });

  it("طول النصّ يناسب المستوى", () => {
    const short: string[] = [];
    for (const lesson of academic()) {
      if (!lesson.reading) continue;
      const n = words(lesson.reading);
      const min = MIN_WORDS_BY_LEVEL[lesson.level] ?? 150;
      if (n < min) short.push(`${lesson.id} = ${n} كلمة (المطلوب ${min})`);
    }
    expect(short).toEqual([]);
  });

  it("لكل فقرة ألمانية ترجمةٌ مقابلة", () => {
    const bad: string[] = [];
    for (const lesson of academic()) {
      const r = lesson.reading;
      if (!r) continue;
      if (r.paragraphs.length !== r.paragraphsAr.length) {
        bad.push(`${lesson.id}: ${r.paragraphs.length} ألمانية مقابل ${r.paragraphsAr.length} عربية`);
      }
      if (r.paragraphs.length < 3) bad.push(`${lesson.id}: ${r.paragraphs.length} فقرات فقط`);
    }
    expect(bad).toEqual([]);
  });

  it("≥8 مفردات مشروحة، وكلّها واردة في النصّ فعلاً", () => {
    const bad: string[] = [];
    for (const lesson of academic()) {
      const r = lesson.reading;
      if (!r) continue;
      if (r.glossary.length < 8) bad.push(`${lesson.id}: ${r.glossary.length} مفردة`);
      const text = r.paragraphs.join(" ").toLowerCase();
      for (const g of r.glossary) {
        // الكلمة قد ترد مصرَّفة، فنكتفي بجذعٍ من الحروف الأولى.
        const head = g.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
        const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
        if (stem.length >= 3 && !text.includes(stem)) {
          bad.push(`${lesson.id}: «${g.de}» ليست في النصّ`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("≥4 أسئلة فهم بمؤشّرات خيارات سليمة", () => {
    const bad: string[] = [];
    for (const lesson of academic()) {
      const r = lesson.reading;
      if (!r) continue;
      if (r.questions.length < 4) bad.push(`${lesson.id}: ${r.questions.length} أسئلة`);
      for (const q of r.questions) {
        if (q.options.length < 3) bad.push(`${lesson.id}:${q.id} خيارات قليلة`);
        if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
          bad.push(`${lesson.id}:${q.id} مؤشّر خارج المدى`);
        }
        if (!q.explanation || q.explanation.length < 20) {
          bad.push(`${lesson.id}:${q.id} بلا تفسير`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("لا يُجاب عن سؤال الفهم بنسخ جملة من النصّ حرفياً", () => {
    // سؤال جوابه مقتطعٌ حرفيّاً من النصّ يقيس البحث البصري لا الفهم.
    const lazy: string[] = [];
    for (const lesson of academic()) {
      const r = lesson.reading;
      if (!r) continue;
      const text = r.paragraphs.join(" ");
      for (const q of r.questions) {
        const answer = q.options[q.correctIndex];
        if (answer.length > 45 && text.includes(answer)) {
          lazy.push(`${lesson.id}:${q.id}`);
        }
      }
    }
    expect(lazy).toEqual([]);
  });

  it("النصّ يحمل عبارات جاهزة وسؤال نقاش", () => {
    const bad: string[] = [];
    for (const lesson of academic()) {
      const r = lesson.reading;
      if (!r) continue;
      if (!r.redemittel || r.redemittel.length < 4) bad.push(`${lesson.id}: Redemittel ناقصة`);
      if (!r.discussionAr || r.discussionAr.length < 40) bad.push(`${lesson.id}: سؤال النقاش ناقص`);
    }
    expect(bad).toEqual([]);
  });
});

describe("العمق الأكاديمي — كثافة التدريب", () => {
  it("≥14 تدريباً في بنك التمارين", () => {
    const thin = academic()
      .filter((l) => l.practiceBank.length < 14)
      .map((l) => `${l.id} = ${l.practiceBank.length}`);
    expect(thin).toEqual([]);
  });

  it("≥5 أنواع تدريب مختلفة — التنويع يمنع حفظ شكل السؤال", () => {
    const thin: string[] = [];
    for (const lesson of academic()) {
      const types = new Set(lesson.practiceBank.map((e) => e.type));
      if (types.size < 5) thin.push(`${lesson.id} = ${types.size} أنواع`);
    }
    expect(thin).toEqual([]);
  });

  it("≥12 بطاقة مراجعة", () => {
    const thin = academic()
      .filter((l) => l.flashcards.length < 12)
      .map((l) => `${l.id} = ${l.flashcards.length}`);
    expect(thin).toEqual([]);
  });
});

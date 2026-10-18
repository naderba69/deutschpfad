/**
 * ═══════════════════════════════════════════════════════════
 *  حارس «تعليل الخطأ» — شرح كل مشتّت، وشرح يستشهد بالألمانية
 * ═══════════════════════════════════════════════════════════
 *
 * لماذا هذا الحارس: المتعلم الذاتي لا يكتفي بمعرفة **أن** خياره خطأ؛ قيمة
 * المنصة في أن يعرف **لماذا**. قياس 2026-10-17 عبر 1231 سؤال اختيار:
 *
 *   التغطية (كل مشتّت له شرح)         الدليل الألماني (الشرح يقتبس نصاً)
 *   · دروس A1  144/278  = 52%          · دروس A1  432/432  = 100%
 *   · دروس A2  230/230  = 100%         · دروس A2 690/690  = 100%
 *   · دروس B1  129/180  = 72%          · دروس B1  364/378  = 96%
 *   · دروس B2  132/176  = 75%          · دروس B2  390/396  = 98%
 *   · حوارات   182/182  = 100%         · حوارات     5/364  =  1%
 *   · بودكاست   40/40   = 100%         · بودكاست   50/80   = 63%
 *
 * الدفعة 81 (2026-10-17): **دليل A1 مكتمل 432/432 (100%)** — أُعطي شاهدٌ ألماني لكلّ
 * شرحٍ من 105 شروح قديمة كانت بلا ≥3 أحرف لاتينية (a1-00 · 01 · 02 · 03 · 04 · 05 ·
 * 06 · 07 · 09 · 10 · 11). التعديل في الأسطر القائمة نفسها فلا ينمو حجم أي ملف ولا
 * يتحرك دَين الراتشيت. رُفعت أرضية الدليل A1 من 327 إلى 432 (= كل الشروح).
 * الدفعة 80 (2026-10-17): a1-10/a1-11/a1-12 (50 سؤالاً، 150 شرحاً) — والأرضيتان
 * A1 تغطية 94 → 144 ودليل 177 → 327. وكشفت الدفعة أن بعض أجزاء A1 تكتب المفاتيح
 * مقتبسة (`"options":` ، `"correctIndex":`) وأخرى بلا اقتباس، وأن النمط المقتبس يخلو
 * من الفاصلة الختامية بعد آخر خاصية؛ فالرقاعة تكتشف النمط وتضيف الفاصلة عند الحاجة
 * (وإلا سقط `tsc` بـ TS1005). وثبتت المحاذاة بمطابقة 150/150 «نصّ خيار ← شرحه» في
 * الشجرة المُصدَّرة بعد تدوير `balanceChoiceTree`.
 * الدفعة 79 (2026-10-17): أول دفعة في A1 — a1-01/a1-05/a1-08 (36 سؤالاً، 108 شروح).
 * رُفعت أرضية A1 من 58 إلى 94 سؤالاً ومن 69 إلى 177 شرحاً بدليل. والشروح كُتبت
 * **مفهرسة بنصّ الخيار لا بموضعه** لأن `LESSONS = RAW_LESSONS.map(balanceChoiceTree)`
 * تدوّر الخيارات عند التصدير (و`balance-options.ts` يدوّر الشروح معها)؛ وثبتت المحاذاة
 * بمطابقة 108/108 «نصّ خيار ← شرحه» في الشجرة المُصدَّرة بعد التدوير.
 * الدفعة 78 (2026-10-17): **A2 مكتملة 230/230 (100%)** و690 شرحاً بدليل ألماني —
 * أرضية التغطية صارت تساوي عدد الأسئلة كله، فأي مشتّتٍ يُحذف تعليله يُسقط الحارس.
 * الدفعة 77 (2026-10-17): رُفعت أرضية A2 من 147 إلى 164 سؤالاً ومن 441 إلى 492 شرحاً
 * بتعليل كل مشتّت في a2-05 (17 سؤالاً) — Präteritum والمراسلة الرسمية.
 * الدفعة 75 (2026-10-17): رُفعت أرضية A2 من 127 إلى 147 سؤالاً ومن 381 إلى 441 شرحاً
 * بتعليل كل مشتّت في a2-04 (20 سؤالاً) بعد تقسيمه في الدفعة 74.
 * الدفعة 73 (2026-10-17): رُفعت أرضية A2 من 47 إلى 126 سؤالاً ومن 141 إلى 380 شرحاً
 * بدليل ألماني (100%) — بتعليل كل مشتّت في a2-03 وa2-10 وa2-11 وa2-12 وa2-13 (80 سؤالاً).
 * الدفعة 72 (2026-10-17): رُفعت أرضية A2 من 1 إلى 47 سؤالاً ومن 3 إلى 141 شرحاً
 * بدليل ألماني (100%) — بتعليل كل مشتّت في a2-01 (25 سؤالاً) وa2-02 (21 سؤالاً).
 *
 * فالمحوران مستقلان: الدروس المتقدمة تعلّل الخطأ لكنها في A1 تعلّله بالعربية
 * بلا شاهد ألماني، والحوارات تعلّل كل مشتّت لكنها لا تقتبس النصّ الألماني الذي
 * يُكذّب الخيار («لا — سارة هي الفتاة.» بدل «لا — الحوار يقول: «Ich heiße Thomas»»).
 *
 * السقّاطات **أرضية لا سقف**: لا يجوز أن ينقص العدد (حذف شرح أو إضعافه يفشل فوراً)،
 * وكل دفعة إنتاج ترفعها. وما اكتمل (حوارات/بودكاست تغطية) صار **صفراً صارماً**.
 */
import { describe, expect, it } from "vitest";

import { LESSONS } from "@/data/lessons";
import { DAILY_DIALOGUES, getDialoguesByLevel } from "@/data/dialogues";
import { PODCASTS } from "@/data/podcasts";

/** دليل ألماني في الشرح: كلمة من ثلاثة أحرف لاتينية على الأقل (على منوال حارس البنك) */
const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;

interface Coverage {
  /** عدد أسئلة الاختيار */
  questions: number;
  /** أسئلة كل مشتّتاتها مشروحة */
  fullyExplained: number;
  /** عدد شروح المشتّتات المكتوبة */
  distractorExplanations: number;
  /** ما فيها دليل ألماني */
  withGermanEvidence: number;
  /** شروح فارغة/بيضاء */
  empty: number;
}

function emptyCoverage(): Coverage {
  return { questions: 0, fullyExplained: 0, distractorExplanations: 0, withGermanEvidence: 0, empty: 0 };
}

/**
 * يقيس شجرة بيانات بالشكلين الموجودين:
 *  · دروس: `options: string[]` + `correctIndex` + `optionExplanations` مرتبطة بالمواضع
 *    (تُدار بالتزامن مع الموازنة — الدفعة 70 — فالقياس يبقى صادقاً بعدها).
 *  · حوارات/بودكاست: `options: {text, correct, explanation?}[]` — الشرح يسافر مع خياره.
 */
export function measureExplanationCoverage(node: unknown, out: Coverage = emptyCoverage(), depth = 0): Coverage {
  if (!node || depth > 12) return out;
  if (Array.isArray(node)) {
    for (const item of node) measureExplanationCoverage(item, out, depth + 1);
    return out;
  }
  if (typeof node !== "object") return out;
  const o = node as Record<string, unknown>;
  const options = o.options;
  if (Array.isArray(options) && options.length >= 2) {
    const index =
      typeof o.correctIndex === "number" ? o.correctIndex : typeof o.correct === "number" ? o.correct : null;
    const stringShape = index !== null && options.every((x) => typeof x === "string");
    const objectShape = options.every(
      (x) => !!x && typeof x === "object" && typeof (x as Record<string, unknown>).correct === "boolean",
    );

    if (stringShape) {
      const explanations = Array.isArray(o.optionExplanations) ? (o.optionExplanations as (string | undefined)[]) : [];
      const distractors = options.map((_, i) => i).filter((i) => i !== index);
      let covered = distractors.length > 0;
      for (const i of distractors) {
        const text = explanations[i];
        if (typeof text !== "string") { covered = false; continue; }
        if (text.trim().length === 0) { out.empty += 1; covered = false; continue; }
        out.distractorExplanations += 1;
        if (GERMAN_EVIDENCE.test(text)) out.withGermanEvidence += 1;
      }
      out.questions += 1;
      if (covered) out.fullyExplained += 1;
    } else if (objectShape) {
      const items = options as { correct?: boolean; explanation?: string }[];
      const distractors = items.filter((x) => x.correct !== true);
      let covered = distractors.length > 0;
      for (const item of distractors) {
        const text = item.explanation;
        if (typeof text !== "string") { covered = false; continue; }
        if (text.trim().length === 0) { out.empty += 1; covered = false; continue; }
        out.distractorExplanations += 1;
        if (GERMAN_EVIDENCE.test(text)) out.withGermanEvidence += 1;
      }
      out.questions += 1;
      if (covered) out.fullyExplained += 1;
    }
  }
  for (const value of Object.values(o)) measureExplanationCoverage(value, out, depth + 1);
  return out;
}

const LESSON_LEVELS = ["A1", "A2", "B1", "B2"] as const;
const lessonStats = (level: string) => measureExplanationCoverage(LESSONS.filter((l) => String(l.level) === level));

/** أرضية التغطية: أسئلة كل مشتّتاتها مشروحة (قياس 2026-10-17) */
const COVERAGE_FLOORS: Record<string, number> = { A1: 155, A2: 230, B1: 129, B2: 132 };

/** أرضية الدليل الألماني في شروح المشتّتات المكتوبة (قياس 2026-10-17) */
// الدفعة 87: دروس B1 (378/378) وB2 (396/396) مكتملتا الدليل ⇒ كل مستويات الدروس 100%.
// الدفعة 88: a1-03 قُسِّم إلى خمسة أجزاء + مُجمِّع (سُدِّد دينه في الراتشيت) وأُضيفت
//          شروح 11 سؤالاً ⇒ تغطية A1 144 → 155 ودليله 432 → 464 (كل شرح).
const EVIDENCE_FLOORS: Record<string, number> = { A1: 464, A2: 690, B1: 378, B2: 396 };

/** الحوارات: التغطية مكتملة (صفر صارم)، والدليل الألماني 5 شروح فقط — أرضية تُرفع */
// الدفعة 82: حوارات A1 مكتملة الدليل (94/94) فارتفع المجموع 5 → 97.
// الدفعة 83: حوارات A2 أيضاً (90/90) ⇒ 97 → 184 (50.5% من 364).
// الدفعة 84: حوارات B1 أيضاً (90/90) ⇒ 184 → 274 (75.3% من 364).
// الدفعة 85: حوارات B2 أيضاً (90/90) ⇒ 274 → 364 = كل شرح في الحوارات (100%).
const DIALOGUE_EVIDENCE_FLOOR = 364;
/** البودكاست: التغطية مكتملة، والدليل الألماني 50 شرحاً */
// الدفعة 86: أسئلة البودكاست مكتملة الدليل (80/80) فارتفعت الأرضية 50 → 80.
const PODCAST_EVIDENCE_FLOOR = 80;

describe("تعليل الخطأ — بوابة حراسة الحارس", () => {
  it("كل كوربوس يُقاس فعلاً (عدّادات غير هامشية ضد الصفر الصامت)", () => {
    const minimums: Record<string, number> = { A1: 278, A2: 230, B1: 180, B2: 176 };
    for (const level of LESSON_LEVELS) {
      expect(lessonStats(level).questions, `دروس ${level}: عدد الأسئلة`).toBeGreaterThanOrEqual(minimums[level]);
    }
    expect(measureExplanationCoverage(DAILY_DIALOGUES).questions, "الحوارات").toBeGreaterThanOrEqual(182);
    expect(measureExplanationCoverage(PODCASTS).questions, "البودكاست").toBeGreaterThanOrEqual(40);
  });
});

describe("تعليل الخطأ — تغطية شرح المشتّتات", () => {
  it("دروس كل مستوى ≥ أرضيتها (كانت A2 صفراً عملياً: 1/230)", () => {
    for (const level of LESSON_LEVELS) {
      const stats = lessonStats(level);
      expect(
        stats.fullyExplained,
        `دروس ${level}: ${stats.fullyExplained}/${stats.questions} سؤالاً كل مشتّتاته مشروحة (الأرضية ${COVERAGE_FLOORS[level]})`,
      ).toBeGreaterThanOrEqual(COVERAGE_FLOORS[level]);
    }
  });

  it("الحوارات والبودكاست: تغطية 100% — مكتملة فلا تنقص (صفر صارم)", () => {
    for (const level of LESSON_LEVELS) {
      const stats = measureExplanationCoverage(getDialoguesByLevel(level));
      expect(stats.fullyExplained, `حوارات ${level}: مشتّت بلا شرح`).toBe(stats.questions);
    }
    const podcasts = measureExplanationCoverage(PODCASTS);
    expect(podcasts.fullyExplained, "بودكاست: مشتّت بلا شرح").toBe(podcasts.questions);
  });

  it("لا شرح فارغاً أو أبيض في أي كوربوس", () => {
    const empties: string[] = [];
    for (const level of LESSON_LEVELS) {
      const lessons = measureExplanationCoverage(LESSONS.filter((l) => String(l.level) === level));
      if (lessons.empty > 0) empties.push(`دروس ${level}: ${lessons.empty}`);
    }
    const dialogues = measureExplanationCoverage(DAILY_DIALOGUES);
    if (dialogues.empty > 0) empties.push(`حوارات: ${dialogues.empty}`);
    const podcasts = measureExplanationCoverage(PODCASTS);
    if (podcasts.empty > 0) empties.push(`بودكاست: ${podcasts.empty}`);
    expect(empties, `شروح فارغة: ${empties.join(" · ")}`).toEqual([]);
  });
});

describe("تعليل الخطأ — الشرح يستشهد بالألمانية لا يترجم وحسب", () => {
  it("دروس كل مستوى ≥ أرضيتها (A1 كان 40% فقط)", () => {
    for (const level of LESSON_LEVELS) {
      const stats = lessonStats(level);
      expect(
        stats.withGermanEvidence,
        `دروس ${level}: ${stats.withGermanEvidence}/${stats.distractorExplanations} شرحاً بدليل ألماني (الأرضية ${EVIDENCE_FLOORS[level]})`,
      ).toBeGreaterThanOrEqual(EVIDENCE_FLOORS[level]);
    }
  });

  it("الحوارات والبودكاست ≥ أرضيتهما (الدفعة 86: كلاهما مكتمل 364/364 و 80/80)", () => {
    const dialogues = measureExplanationCoverage(DAILY_DIALOGUES);
    expect(
      dialogues.withGermanEvidence,
      `حوارات: ${dialogues.withGermanEvidence}/${dialogues.distractorExplanations} شرحاً بدليل ألماني`,
    ).toBeGreaterThanOrEqual(DIALOGUE_EVIDENCE_FLOOR);
    const podcasts = measureExplanationCoverage(PODCASTS);
    expect(
      podcasts.withGermanEvidence,
      `بودكاست: ${podcasts.withGermanEvidence}/${podcasts.distractorExplanations} شرحاً بدليل ألماني`,
    ).toBeGreaterThanOrEqual(PODCAST_EVIDENCE_FLOOR);
  });
});

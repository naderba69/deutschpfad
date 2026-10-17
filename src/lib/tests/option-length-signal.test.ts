import { describe, expect, it } from "vitest";

import {
  collectChoiceQuestions,
  describeOffender,
  GAP_LIMIT,
  isUniqueLongest,
  isUniqueShortest,
  lengthSignalOffenders,
  longestGap,
  MAX_UNIQUE_LONGEST_PCT,
  optionLengths,
  shortestGap,
  uniqueLongestPct,
  type ChoiceQuestion,
} from "@/lib/tests/option-length-signal";
import { LEVEL_MODELS } from "@/data/exams/level-models";
import { B2_HOEREN } from "@/data/exams/b2-hoeren";
import { B2_HOEREN_B } from "@/data/exams/b2-hoeren-b";
import { B2_HOEREN_C } from "@/data/exams/b2-hoeren-c";
import { B2_LESEN } from "@/data/exams/b2-lesen";
import { B2_LESEN_B } from "@/data/exams/b2-lesen-b";
import { B2_LESEN_C } from "@/data/exams/b2-lesen-c";
import { RAW_TEST_BANK } from "@/data/tests/question-banks";

/**
 * ═══════════════════════════════════════════════════════════
 *  حارس «تسرّب الإجابة بطول الخيار» — لكل بنوك الأسئلة
 * ═══════════════════════════════════════════════════════════
 *
 * القياس الذي أنتج هذا الحارس (2026-10-16):
 *   · B2: **70%** من الإجابات الصحيحة هي «الخيار الأطول وحيداً» (العادل 25–33%)،
 *     وفي Teil 2 استماع **87%**، وفي Teil 5 قراءة **100%** — فحلّ بالسؤال بلا سماع.
 *   · A1/A2/B1: 42% مجمّعاً، و35 سؤالاً بفارق ≥1.3×، و5 بفارق «الأقصر» المعاكس.
 * أُصلح ذلك كله (63 + 35 + 5 + 13 سؤالاً) بإطالة **المشتّتات** فقط — بلا تغيير
 * مفتاح إجابة واحد ولا `whyAr` ولا نصّ منطوق. النتيجة: صفر مخالفات في الامتحانات.
 *
 * ملاحظتان منهجيتان دفعهما ثمنٌ:
 *  1) الحارس يقرأ **مصادر البيانات** (`b2-hoeren*.ts`، `RAW_TEST_BANK`) لا النسخ
 *     المُوازَنة (`B2_*_SETS`، `TEST_BANK`) — لأن `balanceTeile`/`balanceTestBank`
 *     تعيد ترتيب الخيارات فتُعمي أي قياس سطحي. نسخة أولى من هذا الحارس قرأت
 *     المُوازَن ومرّت على عيب قائم.
 *  2) القاعدة لكل سؤال (فارق ≥ 1.3×) **و** مجمّعة (≤ 60%): الأولى لا تتأثر بصغر
 *     الجزء (3 أسئلة تكفي)، والثانية تمنع تراكم فروق صغيرة في اتجاه واحد.
 */

/**
 * سقّاطة بنك الأسئلة: 46 مخالفة قائمة (2026-10-16)، معظمها مفردات/ترجمات يكون فيها
 * الترجمة الصحيحة أطول بطبيعتها («بسرور/يحب أن» مقابل «غاضب»). إصلاحها يتطلب تحرير
 * الترجمات نفسها (لا حشو المشتّتات) — عمل لغوي دقيق مؤجَّل للدفعة القادمة.
 * **القاعدة: هذا الرقم لا يزيد أبداً، وينقص كلما أُصلح.**
 */
const BANK_LENGTH_SIGNAL_RATCHET = 46;

/** امتحانات المستويات: 9 نماذج (A1/A2/B1 × 3) — المصدر لا المُوازَن */
const LEVEL_CORPORA: [string, unknown][] = (["A1", "A2", "B1"] as const).flatMap((lvl) =>
  LEVEL_MODELS[lvl].map((m) => [m.id, m] as [string, unknown]),
);

/** أطقم B2 الستة: 3 استماع + 3 قراءة — من ملفاتها المصدرية */
const B2_CORPORA: [string, unknown][] = [
  ["B2 hören 1", B2_HOEREN],
  ["B2 hören 2", B2_HOEREN_B],
  ["B2 hören 3", B2_HOEREN_C],
  ["B2 lesen 1", B2_LESEN],
  ["B2 lesen 2", B2_LESEN_B],
  ["B2 lesen 3", B2_LESEN_C],
];

const EXAM_CORPORA = [...LEVEL_CORPORA, ...B2_CORPORA];

describe("وحدة قياس إشارة الطول — سلوك الدوال نفسها", () => {
  const q = (options: string[], correct: number): ChoiceQuestion => ({ id: "t", options, correct });

  it("«الأطول وحيداً» تصحّ فقط عندما تكون الصحيحة وحدها الأطول", () => {
    expect(isUniqueLongest(q(["kurz", "ein sehr langer Satz", "mittel"] as string[], 1))).toBe(true);
    expect(isUniqueLongest(q(["kurz", "ein sehr langer Satz", "mittel"], 0))).toBe(false);
    // تعادل في الطول ⇒ ليست «وحدها» الأطول
    expect(isUniqueLongest(q(["abc", "xyz", "k"], 0))).toBe(false);
  });

  it("«الأقصر وحيداً» تلتقط الإشارة المعاكسة", () => {
    expect(isUniqueShortest(q(["ein sehr langer Satz", "mittel", "kurz"], 2))).toBe(true);
    expect(isUniqueShortest(q(["ein sehr langer Satz", "mittel", "kurz"], 1))).toBe(false);
  });

  it("الفارق = نسبة طول الصحيحة إلى أقرب منافس (0 إن لم تكن وحيدة الطرف)", () => {
    expect(longestGap(q(["aaaaaa", "ab", "abc"], 0))).toBeCloseTo(2, 5); // 6 ÷ 3 (أطول المشتّتات)
    expect(longestGap(q(["ab", "aaaaaa", "abc"], 0))).toBe(0); // ليست الأطول
    expect(shortestGap(q(["ab", "aaaaaa", "abc"], 0))).toBeCloseTo(1.5, 5); // 3 ÷ 2
    expect(shortestGap(q(["aaaaaa", "ab", "abc"], 0))).toBe(0);
  });

  it("قائمة المخالفات تطبّق حدّ الفارق في الاتجاهين", () => {
    const rows = [
      q(["aaaaaa", "ab", "abc"], 0), // 3.0× ⇒ مخالفة
      q(["aaaaa", "abcd", "abc"], 0), // 1.25× ⇒ تحت الحد
      q(["ab", "aaaaaa", "abc"], 0), // الأقصر 3.0× ⇒ مخالفة
    ];
    expect(lengthSignalOffenders(rows)).toHaveLength(2);
    expect(GAP_LIMIT).toBe(1.3);
    expect(describeOffender(rows[0], "X")).toContain("الأطول");
    expect(describeOffender(rows[2], "X")).toContain("الأقصر");
  });

  it("optionLengths تقيس ما يراه المتعلم (بلا مسافات زائدة)", () => {
    expect(optionLengths(q(["  ab  ", "abc"], 0))).toEqual([2, 3]);
    expect(uniqueLongestPct([])).toBe(0);
    expect(uniqueLongestPct([q(["ab", "abcd"], 1), q(["abcd", "ab"], 0)])).toBe(100);
  });
});

describe("امتحانات A1/A2/B1/B2 — صفر تسرّب بطول الخيار", () => {
  const all = EXAM_CORPORA.flatMap(([name, data]) =>
    collectChoiceQuestions(data).map((question) => ({ where: name, question })),
  );

  it("بوابة حراسة الحارس: المسح يجمع الأسئلة فعلاً من كل الكوربورات", () => {
    // 228 سؤالاً قياساً (2026-10-16): 159 في نماذج A1/A2/B1 + 69 في أطقم B2.
    // لولاه لمرّ الحارس صامتاً على بنية لم تُجمع (وهو عيب وقع فعلاً مرتين).
    expect(all.length).toBeGreaterThan(200);
    for (const [name, data] of EXAM_CORPORA) {
      expect(collectChoiceQuestions(data).length, `${name}: لم يُجمع أي سؤال`).toBeGreaterThan(0);
    }
  });

  it("لا سؤال تكون إجابته وحدها الأطول/الأقصر بفارق ≥ 1.3×", () => {
    const offenders = all
      .filter(({ question }) => longestGap(question) >= GAP_LIMIT || shortestGap(question) >= GAP_LIMIT)
      .map(({ where, question }) => describeOffender(question, where));
    expect(offenders, `تسرّب بطول الخيار: ${offenders.slice(0, 8).join(" · ")}`).toEqual([]);
  });

  it(`لا نموذج/طقم تتجاوز فيه نسبة «الأطول وحيداً» ${MAX_UNIQUE_LONGEST_PCT}%`, () => {
    const over: string[] = [];
    for (const [name, data] of EXAM_CORPORA) {
      const qs = collectChoiceQuestions(data);
      if (qs.length < 4) continue;
      const pctv = uniqueLongestPct(qs);
      if (pctv > MAX_UNIQUE_LONGEST_PCT) over.push(`${name}: ${pctv}%`);
    }
    expect(over, `نسب مرتفعة: ${over.join(" · ")}`).toEqual([]);
  });

  it("الإصلاح لم يقلب الإشارة: «الأقصر وحيداً» ليست أعلى من «الأطول وحيداً»", () => {
    // خطر منهجي حقيقي: إطالة المشتّتات في كل سؤال تجعل الصحيحة **وحدها الأقصر**
    // فتنتقل الإشارة ولا تختفي. القياس بعد الإصلاح: 36% أطول / 16% أقصر.
    const qs = all.map(({ question }) => question);
    const longestPct = uniqueLongestPct(qs);
    const shortestPct = Math.round((qs.filter(isUniqueShortest).length / qs.length) * 100);
    expect(shortestPct, `الأطول ${longestPct}% مقابل الأقصر ${shortestPct}%`).toBeLessThanOrEqual(longestPct);
    expect(shortestPct).toBeLessThanOrEqual(MAX_UNIQUE_LONGEST_PCT);
  });
});

describe("بنك الأسئلة — سقّاطة إشارة الطول (لا تزيد، وتنقص كلما أُصلح)", () => {
  const qs = collectChoiceQuestions(RAW_TEST_BANK);

  it("بوابة: البنك يُجمع فعلاً (≥ 150 سؤالاً)", () => {
    expect(qs.length).toBeGreaterThan(150);
  });

  it(`المخالفات ≤ ${BANK_LENGTH_SIGNAL_RATCHET} (قياس 2026-10-16: 46/171)`, () => {
    const offenders = lengthSignalOffenders(qs);
    expect(
      offenders.length,
      `زادت مخالفات الطول في البنك: ${offenders.length}. أصلحها أو — إن كان التأجيل واعياً — ارفع السقّاطة مع سبب مكتوب. أمثلة: ${offenders
        .slice(0, 5)
        .map((q) => describeOffender(q, "bank"))
        .join(" · ")}`,
    ).toBeLessThanOrEqual(BANK_LENGTH_SIGNAL_RATCHET);
  });

  it("نسبة «الأطول وحيداً» في البنك لا تتجاوز 50% (قياس: 46%)", () => {
    expect(uniqueLongestPct(qs)).toBeLessThanOrEqual(50);
  });
});

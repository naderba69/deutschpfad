import { describe, expect, it } from "vitest";

import {
  collectChoiceQuestions,
  describeOffender,
  GAP_LIMIT,
  isUniqueLongest,
  isMeasurable,
  isUniqueShortest,
  lengthSignalOffenders,
  longestGap,
  MAX_UNIQUE_LONGEST_PCT,
  MIN_SIGNAL_LENGTH,
  resolveChoice,
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
import { PODCASTS } from "@/data/podcasts";
import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSONS } from "@/data/lessons";

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
 * سقّاطة بنك الأسئلة — **صفر**.
 *
 * تاريخها: 46 (القياس الأول) → 41 (بعد إخراج الكلمات الوظيفية القصيرة من نطاق
 * القياس بـ `MIN_SIGNAL_LENGTH`) → **0** (بعد إصلاح 41 سؤالاً: 9 مفردات بتطبيع
 * المترادف المزدوج «بسرور/يحب أن» ← «بسرور»، و32 سؤال فهم مقروء/مسموع كانت
 * مشتّتاتها كلماتاً مفردة وصحيحتها جملة كاملة ← مشتّتات جمليّة متكافئة).
 *
 * الإصلاح كان دائماً في **المشتّتات أو في صياغة الصحيحة** — لم يتغيّر مفتاح إجابة
 * واحد ولا نصّ ولا تفسير. ونسبة «الأطول وحيداً» في البنك نزلت 46% ← 30%، أي
 * **أدنى من خطّ الصدفة** (33% لأربعة خيارات) فلا إشارة في أي اتجاه.
 *
 * الصفر هنا ليس رقماً بل **حظر على العودة**: أي سؤال جديد بمشتّتات أقصر من
 * جملته الصحيحة يُسقط هذا الحارس فوراً برسالة فيها مساره (`bank/a2-r4/q3`).
 */
const BANK_LENGTH_SIGNAL_RATCHET = 0;

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
    // العبارات ≥ 9 أحرف كي تكون داخل نطاق القياس (`MIN_SIGNAL_LENGTH`)
    const rows = [
      q(["aaaaaaaaaaaa", "abcd", "abcdef"], 0), // 12 ÷ 6 = 2.0× ⇒ مخالفة
      q(["aaaaaaaaaa", "abcdefgh", "abcdefg"], 0), // 10 ÷ 8 = 1.25× ⇒ تحت الحد
      q(["ab", "aaaaaaaaaaaa", "abcdef"], 0), // الأقصر: 6 ÷ 2 = 3.0× ⇒ مخالفة
    ];
    expect(lengthSignalOffenders(rows)).toHaveLength(2);
    expect(GAP_LIMIT).toBe(1.3);
    expect(describeOffender(rows[0], "X")).toContain("الأطول");
    expect(describeOffender(rows[2], "X")).toContain("الأقصر");
  });

  it("الكلمات الوظيفية القصيرة خارج نطاق القياس (الفارق صرفي لا إسهابي)", () => {
    // «ist» لا تُطال، و«deshalb / aber / und» فروقها حرف أو حرفان من الصرف نفسه.
    expect(isMeasurable(q(["ist", "wird", "kann"], 0))).toBe(false); // أطول = 4
    expect(isMeasurable(q(["deshalb", "aber", "und"], 0))).toBe(false); // أطول = 7
    expect(isMeasurable(q(["Die Rechnung", "Das Formular", "Der Termin"], 0))).toBe(true); // أطول = 12
    expect(MIN_SIGNAL_LENGTH).toBe(9);
    // ⇒ لا تُحتسب مخالفة وإن كان الفارق كبيراً
    expect(lengthSignalOffenders([q(["ist", "wurde", "kann"], 0)])).toHaveLength(0);
  });

  it("أسئلة الأجزاء المتداخلة ترث معرّف سلفها (لا «?» بلا عنوان)", () => {
    const nested = {
      id: "a1-l2",
      questions: [
        { id: "q3", options: ["a very long correct answer here", "kurz", "auch kurz"], correct: 0 },
        { options: ["ein sehr langer Satz hier", "mittel", "und kurz"], correct: 0 },
      ],
    };
    const qs = collectChoiceQuestions(nested);
    expect(qs.map((x) => x.id)).toEqual(["a1-l2/q3", "a1-l2"]);
    // المخالفة تُسمّى بمسار قابل للإصلاح
    expect(describeOffender(qs[1], "bank")).toContain("a1-l2");
  });

  it("resolveChoice يفهم شكليّ الخيارات: فهرس رقمي ووسم بوليني", () => {
    // الشكل 1 — امتحانات وبنك الأسئلة
    expect(resolveChoice(["a", "bb", "ccc"], { correct: 2 })).toEqual({ options: ["a", "bb", "ccc"], correct: 2 });
    expect(resolveChoice(["a", "bb"], { correctIndex: 0 })?.correct).toBe(0);
    // الشكل 2 — حوارات وبودكاست: الوسم داخل الخيار
    const flagged = [
      { text: "Thomas", correct: false },
      { text: "Berlin", correct: true },
    ];
    expect(resolveChoice(flagged)).toEqual({ options: ["Thomas", "Berlin"], correct: 1 });
    // أشكال غير صالحة ⇒ null (لا تخمين)
    expect(resolveChoice(["a"], { correct: 0 })).toBeNull(); // خيار واحد
    expect(resolveChoice(["a", "b"], {})).toBeNull(); // لا مفتاح
    expect(resolveChoice(["a", ""], { correct: 0 })).toBeNull(); // خيار فارغ
    expect(resolveChoice([{ de: "x" }, { de: "y" }], { correct: 1 })?.options).toEqual(["x", "y"]);
  });

  it("الماشي يجمع الشكل البوليني المتداخل (كان خارج القياس تماماً)", () => {
    const corpus = [
      { id: "dlg-1", questions: [{ de: "Woher kommt Sara?", options: [
        { text: "Aus Tunesien", correct: true }, { text: "Aus Frankreich", correct: false },
      ] }] },
    ];
    const qs = collectChoiceQuestions(corpus);
    expect(qs).toHaveLength(1);
    expect(qs[0].id).toBe("dlg-1");
    expect(qs[0].correct).toBe(0);
    // «Aus Frankreich» (المشتّتة) أطول ⇒ الصحيحة وحدها **الأقصر** — الإشارة المعاكسة
    expect(isUniqueLongest(qs[0])).toBe(false);
    expect(isUniqueShortest(qs[0])).toBe(true);
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
      .filter(({ question }) => lengthSignalOffenders([question]).length > 0)
      .map(({ where, question }) => describeOffender(question, where));
    void longestGap;
    void shortestGap;
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

/**
 * سقّاطات الحوارات لكل مستوى — **صفر للجميع** (2026-10-17).
 *
 * تاريخها: A1 9 · A2 16 · B1 24 · B2 16 = 65 مخالفة، أُصلحت كلها في 60 سؤالاً
 * (كل سؤال = تحرير مشتّتاته لتقارب طول الصحيحة، أو تطبيع الصحيحة نفسها عندما كان
 * قصرها هو الإشارة). نسبة «الأطول وحيداً» نزلت: A2 52%→31% · B1 73%→43% ·
 * B2 49% · A1 37% — فالإشارة صارت عند خطّ الصدفة أو دونه في كل مستوى.
 *
 * الصفر هنا **حظر على العودة**: أي مشتّتة جديدة أقصر من جملة الصحيحة تُسقط الحارس
 * برسالة فيها مسار السؤال (`B1/b1-12-geld`) وفارق الطول.
 */
const DIALOGUE_RATCHETS: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0 };

describe("حوارات وبودكاست — الشكل البوليني داخل القياس", () => {
  const dialogueLevels = ["A1", "A2", "B1", "B2"] as const;

  it("بوابة حراسة الحارس: كل كوربوس يُجمع فعلاً (لا صفر صامت)", () => {
    // درس هذه الدفعة: مسبار استورد `DIALOGUES_A1` (اسم غير موجود) فأبلغ
    // «0 سؤالاً · 0 مخالفة» ومرّ — صفرٌ صامت على 182 سؤالاً. لذلك يُشترط
    // عدد غير صفري لكل كوربوس ولكل مستوى.
    expect(PODCASTS.length).toBeGreaterThanOrEqual(20);
    expect(collectChoiceQuestions(PODCASTS).length).toBeGreaterThanOrEqual(40);
    expect(DAILY_DIALOGUES.length).toBeGreaterThanOrEqual(60);
    for (const lvl of dialogueLevels) {
      const ds = DAILY_DIALOGUES.filter((d) => String(d.level) === lvl);
      expect(ds.length, `حوارات ${lvl}`).toBeGreaterThanOrEqual(15);
      expect(collectChoiceQuestions(ds).length, `أسئلة حوارات ${lvl}`).toBeGreaterThanOrEqual(40);
    }
  });

  it("البودكاست: صفر مخالفات (كان 21/40 و74% «الأطول وحيداً»)", () => {
    const qs = collectChoiceQuestions(PODCASTS);
    const offenders = lengthSignalOffenders(qs).map((q) => describeOffender(q, "podcasts"));
    expect(offenders, `تسرّب في أسئلة البودكاست: ${offenders.slice(0, 6).join(" · ")}`).toEqual([]);
    expect(uniqueLongestPct(qs.filter(isMeasurable))).toBeLessThanOrEqual(55);
  });

  it("لا خيار فيه علامة استفهام، ولا خيار يحوي خياراً آخر", () => {
    /**
     * عيبان كشفهما هذا التدقيق في `a1-04-familie`: خيار «Ärztin? Nein, Köchin» —
     * تعليق يحمل السؤال وجوابين معاً (يسرّب الصحيحة ويكسر شكل القائمة).
     *
     * قاعدتان، والثانية **بحرفية وحدود كلمة** عن قصد: المطابقة غير الحرفية
     * (case-insensitive) أعطت إيجابية كاذبة — «Keinen Bruder» «يحوي» «einen Bruder»
     * بالصرف الألماني لا بالتسريب. حدود الكلمة تمنع ذلك وتُبقي العيب الحقيقي.
     */
    const nested = (texts: string[]): string[] => {
      const bad: string[] = [];
      texts.forEach((outer, i) => {
        if (!outer) return;
        if (/[?؟]/.test(outer)) bad.push(`«${outer}» فيه علامة استفهام`);
        texts.forEach((inner, j) => {
          if (i === j || !inner) return;
          const re = new RegExp(`(^|\\W)${inner.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\W|$)`);
          if (re.test(outer)) bad.push(`«${outer}» يحوي «${inner}»`);
        });
      });
      return bad;
    };

    const bad: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      for (const q of (d.questions ?? []) as { options?: { text?: string }[] }[]) {
        nested((q.options ?? []).map((o) => o.text ?? "")).forEach((m) => bad.push(`${d.id}: ${m}`));
      }
    }
    for (const ep of PODCASTS) {
      for (const q of ep.questions) {
        nested(q.options.map((o) => o.text)).forEach((m) => bad.push(`${ep.id}: ${m}`));
      }
    }
    expect(bad, `خيارات معيبة: ${bad.slice(0, 6).join(" · ")}`).toEqual([]);
  });

  it(`مخالفات الحوارات لكل مستوى ≤ سقّاطتها ${JSON.stringify(DIALOGUE_RATCHETS)}`, () => {
    for (const lvl of dialogueLevels) {
      const ds = DAILY_DIALOGUES.filter((d) => String(d.level) === lvl);
      const qs = collectChoiceQuestions(ds);
      const offenders = lengthSignalOffenders(qs);
      expect(
        offenders.length,
        `${lvl}: زادت مخالفات الطول إلى ${offenders.length} (السقف ${DIALOGUE_RATCHETS[lvl]}) — أمثلة: ${offenders
          .slice(0, 4)
          .map((q) => describeOffender(q, lvl))
          .join(" · ")}`,
      ).toBeLessThanOrEqual(DIALOGUE_RATCHETS[lvl]);
    }
  });
});

/**
 * سقّاطات **دروس المنهج** لكل مستوى (قياس 2026-10-17):
 * 864 سؤال اختيار (579 داخل نطاق القياس) · 159 مخالفة · A1 37 · A2 33 · B1 48 · B2 41.
 *
 * هذا أكبر كوربوس في المنصة وكان **خارج كل قياس** — وهو الصنف الثالث من ثغرة
 * «الحارس يقيس ما يسهل لا ما يهم»: الامتحانات قِيست أولاً (228 سؤالاً) لأنها الأقرب
 * للذهن، والدروس (864) تُركت. القاعدة: **لا تزيد هذه الأرقام أبداً**، وتنقص مع كل دفعة
 * إصلاح، وكل خفض يُسجَّل هنا بتاريخه.
 */
const LESSON_RATCHETS: Record<string, number> = { A1: 0, A2: 0, B1: 48, B2: 41 };

/**
 * استثناءات **جوهرية** في دروس A1 — مُسمّاة بمسار السؤال وبسببها، لا رقماً مجمّعاً.
 *
 * معيار الاستثناء: الفارق في الطول ناتج عن **الصرف أو طبيعة المفردة** لا عن إسهاب
 * المؤلِّف، و«إصلاحه» يعني تشويه المحتوى:
 *  · اسم علم/مهنة/حرف جر/فعل مفرد — الطول صفة الكلمة لا إشارة مؤلَّفَة.
 *  · سؤال «أيّ صيغة صحيحة؟» — الخطأ النحوي مُطنب بطبعه والصحيح موجز.
 *  · شرح من شقين — الصحيحة تحتاج شقين وكل مشتّتة ادعاء واحد.
 *
 * والحارس يفحص الاتجاهين: لا مخالفة خارج الاستثناءات، **ولا استثناء تقادم**
 * (إن أُصلح السؤال وجب حذف استثنائه — وإلا تحوّلت القائمة إلى مكبّ نفايات).
 */
const LESSON_LENGTH_SIGNAL_EXCEPTIONS: Record<string, string> = {
  "a1-01/q3": "أسماء أعلام: «Leila Mansour» أطول من «Anna» بطبيعة الاسم لا بإسهاب المؤلّف",
  "a1-03/r1": "صيغ التعريف بالنفس: الصحيح «Ich heiße Sami.» موجز والمشتّتات أخطاء مركّبة أطول بطبعها",
  "a1-03/read-a1-03/r5": "شرح من شقين (مذكر ← einen · مؤنث ← die) مقابل مشتّتات بادّعاء واحد خاطئ",
  "a1-04/m1": "حروف جرّ مندمجة: «im» أقصر من «unter dem» بالصرف",
  "a1-06/m2": "صيغ الأمر: «Kommen Sie» أطول من «Komm» بحكم الصيغة الرسمية",
  "a1-07/e13": "الصحيح «zwei Kilo» موجز والمشتّتات تراكيب خاطئة أطول بطبعها",
  "a1-10/q1": "مهن بلا أداة: «Ärztin» أقصر من «Verkäuferin» بطول المفردة، وإضافة أداة تُفسد الجواب («von Beruf ist sie Ärztin»)",
  "a1-10/e16": "أفعال الكون والعمل: «bin» مقابل «arbeite ein» — الفارق صرفي",
  "a1-14/mt-a1-14-3": "أفعال مفردة: «reparieren» أطول من «kaufen» بطول المفردة",
  "a1-06/read-a1-06/r4": "نصّ الصحيحة («Am Satzende») مثبَّت في عقد `goal-evidence.test.ts` لإجابات A1-06 المقبولة — إطالتها لكسر الإشارة تُعدّل عقداً مقاساً، والصحيحة موجزة بطبعها مقابل مشتّتات جمل كاملة (جُرب الإصلاح فسقط العقد)",
  /* ── A2 (الدفعة 65): 33 → 0 مُصلَحة + 4 جوهرية ── */
  "a2-01/read-a2-01/rq4": "شرح من شقين (Präteritum + Perfekt مع مثال من النصّ) مقابل مشتّتات بادّعاء واحد؛ تطويلها إلى 69+ حرفاً يجعل الادّعاء الخاطئ مُطنباً بلا قيمة تعليمية",
  "a2-01/e9": "الصنف نفسه بالعربية: الصحيحة قاعدة + مثال (schwimmen مع sein/haben) والمشتّتات أحكام مفردة",
  "a2-08/e2": "درجات المقارنة: «am schnellsten / schneller / schnell / schnellste» — الأطوال من الصرف لا من الإسهاب",
  "a2-08/m2": "درجات المقارنة: «am besten / besser / gut / beste» — الصنف نفسه",
};

describe("دروس المنهج — أكبر كوربوس داخل القياس", () => {
  const levels = ["A1", "A2", "B1", "B2"] as const;
  const byLevel = (lvl: string) => LESSONS.filter((l) => String(l.level) === lvl);

  it("بوابة حراسة الحارس: 52 درساً و≥800 سؤال اختيار تُجمع فعلاً", () => {
    expect(LESSONS.length).toBeGreaterThanOrEqual(52);
    expect(collectChoiceQuestions(LESSONS).length).toBeGreaterThanOrEqual(800);
    for (const lvl of levels) {
      expect(byLevel(lvl).length, `دروس ${lvl}`).toBeGreaterThanOrEqual(10);
      expect(collectChoiceQuestions(byLevel(lvl)).length, `أسئلة دروس ${lvl}`).toBeGreaterThanOrEqual(150);
    }
  });

  it(`مخالفات دروس كل مستوى ≤ سقّاطتها (خارج الاستثناءات المُسمّاة)`, () => {
    for (const lvl of levels) {
      const qs = collectChoiceQuestions(byLevel(lvl));
      const offenders = lengthSignalOffenders(qs).filter((q) => !LESSON_LENGTH_SIGNAL_EXCEPTIONS[q.id]);
      expect(
        offenders.length,
        `${lvl}: مخالفات الطول ${offenders.length} (السقف ${LESSON_RATCHETS[lvl]}) — أمثلة: ${offenders
          .slice(0, 4)
          .map((q) => describeOffender(q, `درس ${lvl}`))
          .join(" · ")}`,
      ).toBeLessThanOrEqual(LESSON_RATCHETS[lvl]);
    }
  });

  it("لا استثناء تقادم: كل اسم في القائمة ما زال مخالفة فعلاً", () => {
    const offenders = new Set(lengthSignalOffenders(collectChoiceQuestions(LESSONS)).map((q) => q.id));
    const stale = Object.keys(LESSON_LENGTH_SIGNAL_EXCEPTIONS).filter((id) => !offenders.has(id));
    expect(
      stale,
      `استثناءات لم تعد تنطبق — احذفها: ${stale.join(" · ")}`,
    ).toEqual([]);
    expect(Object.keys(LESSON_LENGTH_SIGNAL_EXCEPTIONS).length).toBe(14); // عدّاد غير هامشي
  });

  it("نسبة «الأطول وحيداً» في الدروس ≤ 55% (قياس: 50%)", () => {
    const qs = collectChoiceQuestions(LESSONS).filter(isMeasurable);
    expect(uniqueLongestPct(qs)).toBeLessThanOrEqual(55);
  });
});

describe("بنك الأسئلة — سقّاطة إشارة الطول (لا تزيد، وتنقص كلما أُصلح)", () => {
  const qs = collectChoiceQuestions(RAW_TEST_BANK);

  it("بوابة: البنك يُجمع فعلاً (≥ 150 سؤالاً)", () => {
    expect(qs.length).toBeGreaterThan(150);
  });

  it(`المخالفات ≤ ${BANK_LENGTH_SIGNAL_RATCHET} (صفر — 171 سؤالاً، قياس 2026-10-16)`, () => {
    const offenders = lengthSignalOffenders(qs);
    expect(
      offenders.length,
      `زادت مخالفات الطول في البنك: ${offenders.length}. أصلحها أو — إن كان التأجيل واعياً — ارفع السقّاطة مع سبب مكتوب. أمثلة: ${offenders
        .slice(0, 5)
        .map((q) => describeOffender(q, "bank"))
        .join(" · ")}`,
    ).toBeLessThanOrEqual(BANK_LENGTH_SIGNAL_RATCHET);
  });

  it("نسبة «الأطول وحيداً» في البنك ≤ 40% (قياس بعد الإصلاح: 30% — أدنى من خطّ الصدفة 33%)", () => {
    const pctv = uniqueLongestPct(qs);
    expect(pctv, `نسبة الأطول وحيداً ${pctv}%`).toBeLessThanOrEqual(40);
  });
});

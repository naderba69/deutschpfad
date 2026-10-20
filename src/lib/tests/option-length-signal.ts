/**
 * ═══════════════════════════════════════════════════════════
 *  قياس «تسرّب الإجابة بطول الخيار» — وحدة مشتركة لكل بنوك الأسئلة
 * ═══════════════════════════════════════════════════════════
 *
 * لماذا: في اختيار من 3 أو 4، إذا كانت الإجابة الصحيحة **وحدها الأطول** (أو وحدها
 * الأقصر) بفارق كبير، فيستطيع المتعلم الحلّ بالنظر إلى طول الخيار بلا فهم ولا سماع —
 * إشارة سطحية تُفسد قيمة الامتحان التدريبي.
 *
 * القياس (2026-10-16) قبل الإصلاح: 70% من إجابات B2 الصحيحة هي «الأطول وحيداً»
 * (الاحتمال العادل 25–33%)، وفي جزء الاستماع الثاني 87%، وفي T5 قراءة 100%.
 *
 * القاعدتان المطبَّقتان في الاختبارات:
 *  1) **لكل سؤال**: لا تكون الصحيحة وحدها الأطول (أو وحدها الأقصر) بفارق ≥ `GAP_LIMIT`.
 *     هذه القاعدة لكل سؤال فلا تتأثر بصغر حجم الجزء (3 أسئلة تكفي لكشفها).
 *  2) **مجمّعاً**: نسبة «الأطول وحيداً» لا تتجاوز `MAX_UNIQUE_LONGEST_PCT` لكل
 *     نموذج/جزء — تمنع تراكم فروق صغيرة (كلٌّ منها تحت الحد) في اتجاه واحد.
 *
 * ملاحظة منهجية: إطالة **المشتّتات** هي وسيلة الإصلاح (لا تقصير الإجابة الصحيحة ولا
 * تبديلها)، فيبقى مفتاح التصحيح و`whyAr` والنصّ المنطوق كما هي — القياس يقيس
 * السطح، لا يصحّح المحتوى.
 */

/** حدّ الفارق: نسبة طول الصحيحة إلى أقرب منافس (أو العكس للأقصر) */
export const GAP_LIMIT = 1.3;

/** أقصى نسبة «الأطول وحيداً» مسموحة في نموذج/جزء */
export const MAX_UNIQUE_LONGEST_PCT = 60;

/**
 * أدنى طول لأطول خيار كي يُقاس السؤال أصلاً.
 *
 * لماذا: إشارة الطول تستغلّ **الإطناب** (جملة كاملة مقابل كلمة). أما في أسئلة
 * الكلمات الوظيفية القصيرة — «ist / wird / kann / wurde» أو «deshalb / aber / und» —
 * فالفارق حرف أو حرفان ناتج عن الصرف نفسه، لا عن الإسهاب، ولا يمكن إطالة خيار منها
 * بلا تغيير معناه («ist» لا تُطال). قياس 2026-10-16: 12 مخالفة من هذا النوع في بنك
 * الأسئلة، أطول خيار فيها ≤ 8 أحرف. الحدّ 9 يُخرجها من القياس ويُبقى كل جملة/عبارة.
 */
export const MIN_SIGNAL_LENGTH = 9;

export interface ChoiceQuestion {
  /** معرّف السؤال إن وُجد (لتسمية المخالفة) */
  id: string;
  /** نصّ الخيارات كما يراه المتعلم */
  options: string[];
  /** فهرس الإجابة الصحيحة */
  correct: number;
}

/**
 * يجمع كل كائنات الاختيار من بنية بيانات امتحان — **بلا افتراض شكل محدد**:
 * يمشي الشجرة عودياً ويلتقط أي كائن فيه `options` + (`correct` أو `correctIndex`).
 * هذا مقصود: بنوك A1/A2/B1/B2 وبنك الأسئلة لها أشكال مختلفة (أسطر مفردة،
 * `teile`/`questions`، `statements`…)، والحارس الذي يفترض شكلاً واحداً يمرّ صامتاً
 * على الباقي (وهو ما حدث فعلاً في أول محاولة قياس).
 */
export function collectChoiceQuestions(node: unknown, depth = 0): ChoiceQuestion[] {
  const out: ChoiceQuestion[] = [];
  walk(node, out, depth, []);
  return out;
}

function walk(node: unknown, out: ChoiceQuestion[], depth: number, ancestors: string[]): void {
  if (!node || depth > 9) return;
  if (Array.isArray(node)) {
    for (const child of node) walk(child, out, depth + 1, ancestors);
    return;
  }
  if (typeof node !== "object") return;
  const o = node as Record<string, unknown>;
  /**
   * مسار المعرّفات: أسئلة الأجزاء المتداخلة (بداخل مهام قراءة/استماع/كتابة) كثيراً ما
   * بلا `id` خاص، فتظهر المخالفة «bank/?» بلا عنوان ولا يمكن إصلاحها. لذلك يرث
   * السؤال معرّفات أسلافه — فتصير «a1-l2/q3» بدل «?».
   */
  const path = typeof o.id === "string" && o.id ? [...ancestors, o.id] : ancestors;
  if (Array.isArray(o.options) && o.options.length >= 2) {
    const resolved = resolveChoice(o.options, o);
    if (resolved) {
      out.push({ id: path.length ? path.join("/") : "?", options: resolved.options, correct: resolved.correct });
    }
  }
  for (const value of Object.values(o)) walk(value, out, depth + 1, path);
}

/**
 * يحلّ **شكليّ الخيارات** المستعملين في المستودع:
 *  1) فهرس رقمي على السؤال: `options: string[]` + `correct`/`correctIndex`.
 *  2) وسم داخل الخيار: `options: {text|de, correct: boolean}[]` (الحوارات والبودكاست).
 *
 * الشكل الثاني كان **خارج القياس تماماً** — ماشٍ يعتمد الفهرس الرقمي وحده يتخطّاه
 * بصمت، فيمرّ تدقيق «تسرّب الطول» على 4 مستويات حوارات و20 حلقة بودكاست (40 سؤالاً)
 * بلا سؤال واحد مقيس. أي حارس يقرأ شكلاً واحداً يخدع نفسه بعدد ما يقيسه.
 */
export function resolveChoice(
  options: unknown[],
  question?: Record<string, unknown>,
): { options: string[]; correct: number } | null {
  if (options.length < 2) return null; // «اختيار» بخيار واحد ليس اختياراً
  const texts = options.map((x) =>
    typeof x === "string" ? x : String(((x as { text?: string; de?: string })?.text ?? (x as { de?: string })?.de ?? "") || ""),
  );
  if (texts.some((t) => !t)) return null;

  // الشكل 2: وسم `correct: true` داخل الخيار نفسه
  const flagged = options.findIndex(
    (x) => typeof x === "object" && x !== null && (x as { correct?: unknown }).correct === true,
  );
  if (flagged >= 0) return { options: texts, correct: flagged };

  // الشكل 1: فهرس رقمي على السؤال
  const ci = question
    ? typeof question.correct === "number"
      ? question.correct
      : typeof question.correctIndex === "number"
        ? question.correctIndex
        : -1
    : -1;
  if (ci >= 0 && ci < texts.length) return { options: texts, correct: ci };
  return null;
}

/** أطوال الخيارات بعد trim (الطول الظاهر للمتعلم) */
export function optionLengths(q: ChoiceQuestion): number[] {
  return q.options.map((t) => t.trim().length);
}

/** الصحيحة وحدها الأطول؟ */
export function isUniqueLongest(q: ChoiceQuestion): boolean {
  const l = optionLengths(q);
  const max = Math.max(...l);
  return l[q.correct] === max && l.filter((x) => x === max).length === 1;
}

/** الصحيحة وحدها الأقصر؟ (الإشارة المعاكسة — تُصلَح بالقدر نفسه) */
export function isUniqueShortest(q: ChoiceQuestion): boolean {
  const l = optionLengths(q);
  const min = Math.min(...l);
  return l[q.correct] === min && l.filter((x) => x === min).length === 1;
}

/**
 * فارق «الأطول»: طول الصحيحة ÷ أطول المشتّتات (0 إن لم تكن وحدها الأطول).
 * القيمة ≥ `GAP_LIMIT` تعني إشارة قابلة للاستغلال.
 */
export function longestGap(q: ChoiceQuestion): number {
  if (!isUniqueLongest(q)) return 0;
  const l = optionLengths(q);
  const others = l.filter((_, i) => i !== q.correct);
  if (!others.length) return 0;
  const maxOther = Math.max(...others);
  return maxOther > 0 ? Math.max(...l) / maxOther : 0;
}

/** فارق «الأقصر»: أقصر المشتّتات ÷ طول الصحيحة (0 إن لم تكن وحدها الأقصر) */
export function shortestGap(q: ChoiceQuestion): number {
  if (!isUniqueShortest(q)) return 0;
  const l = optionLengths(q);
  const others = l.filter((_, i) => i !== q.correct);
  if (!others.length || l[q.correct] <= 0) return 0;
  return Math.min(...others) / Math.min(...l);
}

/**
 * هل السؤال داخل نطاق القياس؟ (أطول خيار ≥ `MIN_SIGNAL_LENGTH`)
 * خارج النطاق = كل الخيارات كلمات قصيرة فالفارق صرفي لا إسهابي.
 */
export function isMeasurable(q: ChoiceQuestion): boolean {
  return Math.max(...optionLengths(q)) >= MIN_SIGNAL_LENGTH;
}

/** الأسئلة التي فيها إشارة طول قابلة للاستغلال (بالأطول أو بالأقصر) */
export function lengthSignalOffenders(qs: ChoiceQuestion[]): ChoiceQuestion[] {
  return qs.filter((q) => isMeasurable(q) && (longestGap(q) >= GAP_LIMIT || shortestGap(q) >= GAP_LIMIT));
}

/** وصف مخالفة واحد للقراءة في رسالة الاختبار */
export function describeOffender(q: ChoiceQuestion, where: string): string {
  const l = optionLengths(q);
  const dir = longestGap(q) >= GAP_LIMIT ? "الأطول" : "الأقصر";
  const gap = Math.max(longestGap(q), shortestGap(q)).toFixed(2);
  return `${where}/${q.id}: الصحيحة ${dir} بفارق ${gap}× — أطوال ${JSON.stringify(l)}`;
}

/** نسبة «الأطول وحيداً» في مجموعة (0 إن كانت فارغة) */
export function uniqueLongestPct(qs: ChoiceQuestion[]): number {
  if (!qs.length) return 0;
  return Math.round((qs.filter(isUniqueLongest).length / qs.length) * 100);
}

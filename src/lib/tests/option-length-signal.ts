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
  walk(node, out, depth);
  return out;
}

function walk(node: unknown, out: ChoiceQuestion[], depth: number): void {
  if (!node || depth > 9) return;
  if (Array.isArray(node)) {
    for (const child of node) walk(child, out, depth + 1);
    return;
  }
  if (typeof node !== "object") return;
  const o = node as Record<string, unknown>;
  const ci =
    typeof o.correct === "number" ? o.correct : typeof o.correctIndex === "number" ? o.correctIndex : -1;
  if (Array.isArray(o.options) && o.options.length >= 2 && ci >= 0 && ci < o.options.length) {
    out.push({
      id: String(o.id ?? "?"),
      options: (o.options as Array<string | { text?: string; de?: string }>).map((x) =>
        typeof x === "string" ? x : (x.text ?? x.de ?? ""),
      ),
      correct: ci,
    });
  }
  for (const value of Object.values(o)) walk(value, out, depth + 1);
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

/** الأسئلة التي فيها إشارة طول قابلة للاستغلال (بالأطول أو بالأقصر) */
export function lengthSignalOffenders(qs: ChoiceQuestion[]): ChoiceQuestion[] {
  return qs.filter((q) => longestGap(q) >= GAP_LIMIT || shortestGap(q) >= GAP_LIMIT);
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

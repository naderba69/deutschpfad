/**
 * ═══════════════════════════════════════════════════════════
 *  مطابقة الإملاء بعدّاد التكرار (Multiset)
 *
 *  الفحص السطحي «الكلمة موجودة في الإجابة؟» يقبل `der Mann` عن `der der Mann`
 *  لأن `der` موجودة مرة. هنا كل كلمة تُحسب بعددها: الكلمة المكررة في الهدف
 *  تحتاج نسخاً بالعدد نفسه، فيظهر النقص بدقة.
 * ═══════════════════════════════════════════════════════════
 */

export interface MultisetMatch {
  /** عدد كلمات الهدف التي قابلتها الإجابة */
  matched: number;
  /** كلمات الهدف المتطابقة بترتيب الهدف */
  matchedWords: string[];
  /** كلمات الهدف الناقصة في الإجابة، بترتيب الهدف */
  missing: string[];
  /** كلمات زائدة في الإجابة لا يقابلها شيء في الهدف */
  extra: string[];
  /** نسبة التطابق 0..1 = المتطابق ÷ الأطول (النقص والزيادة يُعاقَبان معاً) */
  ratio: number;
}

export function multisetMatch(target: readonly string[], answer: readonly string[]): MultisetMatch {
  const remaining = new Map<string, number>();
  for (const w of answer) remaining.set(w, (remaining.get(w) ?? 0) + 1);

  const missing: string[] = [];
  const matchedWords: string[] = [];
  for (const w of target) {
    const left = remaining.get(w) ?? 0;
    if (left > 0) {
      remaining.set(w, left - 1);
      matchedWords.push(w);
    } else {
      missing.push(w);
    }
  }
  const matched = matchedWords.length;

  // الزيادة: ما بقي في العدّاد بعد المطابقة هو عدد النسخ الزائدة لكل كلمة
  const extra: string[] = [];
  const leftover = new Map(remaining);
  for (const w of answer) {
    const left = leftover.get(w) ?? 0;
    if (left > 0) {
      extra.push(w);
      leftover.set(w, left - 1);
    }
  }

  const longest = Math.max(target.length, answer.length);
  return {matched, matchedWords, missing, extra, ratio: longest === 0 ? 0 : matched / longest};
}

/**
 * تمييز الجزء الخاطئ داخل جملة تصحيح الخطأ.
 *
 * المقارنة القديمة كانت تفحص كل كلمة على حدة مقابل `wrongWord` كاملاً، فإذا
 * كان `wrongWord` عبارةً من كلمتين فأكثر («ab um zehn») لم تُطابق أي كلمة
 * مفردة أبداً، فيسقط التمييز صامتاً — أي أن المتعلّم يرى جملة بلا أي إشارة
 * إلى موضع الخطأ، فيفقد التمرين وظيفته التشخيصية.
 *
 * الحل: مطابقة مقطع متّصل من الكلمات (contiguous span) بدل كلمة واحدة.
 */

/** الحروف التي تُعدّ جزءاً من الكلمة الألمانية (بما فيها الأرقام والشرطة) */
const WORD_CHARS = /[^0-9a-zA-ZäöüßÄÖÜ-]/g;

const normalizeToken = (token: string) => token.replace(WORD_CHARS, "");

export interface HighlightSegment {
  /** النص كما يظهر (مع مسافاته الأصلية) */
  text: string;
  /** هل هذا الجزء من الكلمة/العبارة الخاطئة؟ */
  isTarget: boolean;
}

/**
 * يقسّم الجملة إلى مقاطع، ويضع `isTarget: true` على المقطع المطابق لـ
 * `wrongWord` — سواء كان كلمة واحدة أو عبارة متعددة الكلمات.
 *
 * يعيد الجملة كمقطع واحد غير مميَّز إذا تعذّرت المطابقة، فلا ينكسر العرض.
 */
export function buildHighlightSegments(
  wrongSentence: string,
  wrongWord: string,
): HighlightSegment[] {
  // نحتفظ بالفواصل البيضاء ليبقى النص الأصلي سليماً حرفياً
  const parts = wrongSentence.split(/(\s+)/);
  /** فهارس الأجزاء التي تحمل كلمات فعلية (لا مسافات ولا علامات فقط) */
  const wordIndexes: number[] = [];
  parts.forEach((part, i) => {
    if (normalizeToken(part).length > 0) wordIndexes.push(i);
  });

  // اصطلاح التأليف: «habe ... gefliegen» يعني جزأين متباعدين في الجملة
  // (الفعل المساعد والتصريف الثالث)، فنميّز كلّ جزء على حدة.
  const gapParts = wrongWord
    .split(/\s*(?:\.{3}|…)\s*/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  if (gapParts.length > 1) {
    const merged: HighlightSegment[] = [];
    let rest = wrongSentence;
    let consumed = 0;
    for (const part of gapParts) {
      const sub = buildHighlightSegments(rest, part);
      const hit = sub.findIndex((s) => s.isTarget);
      if (hit === -1) continue;
      const before = sub.slice(0, hit).map((s) => s.text).join("");
      if (before) merged.push({ text: before, isTarget: false });
      merged.push(sub[hit]);
      rest = sub.slice(hit + 1).map((s) => s.text).join("");
      consumed += 1;
    }
    if (consumed > 0) {
      if (rest) merged.push({ text: rest, isTarget: false });
      return merged;
    }
    return [{ text: wrongSentence, isTarget: false }];
  }

  const needle = wrongWord
    .split(/\s+/)
    .map(normalizeToken)
    .filter((w) => w.length > 0);

  if (needle.length === 0 || wordIndexes.length === 0) {
    return [{ text: wrongSentence, isTarget: false }];
  }

  /** يبحث عن أول مقطع متّصل يطابق `needle`؛ `fold` يتحكم بحساسية حالة الأحرف */
  const findSpan = (fold: (s: string) => string): [number, number] | null => {
    for (let start = 0; start + needle.length <= wordIndexes.length; start += 1) {
      let matched = true;
      for (let k = 0; k < needle.length; k += 1) {
        const token = normalizeToken(parts[wordIndexes[start + k]]);
        if (fold(token) !== fold(needle[k])) {
          matched = false;
          break;
        }
      }
      if (matched) return [wordIndexes[start], wordIndexes[start + needle.length - 1]];
    }
    return null;
  };

  // نطابق أولاً بحالة الأحرف (مهمة في الألمانية)، ثم نتساهل عند الفشل
  const span = findSpan((s) => s) ?? findSpan((s) => s.toLowerCase());
  if (!span) return [{ text: wrongSentence, isTarget: false }];

  const [from, to] = span;
  const segments: HighlightSegment[] = [];
  const before = parts.slice(0, from).join("");
  const target = parts.slice(from, to + 1).join("");
  const after = parts.slice(to + 1).join("");

  if (before) segments.push({ text: before, isTarget: false });
  segments.push({ text: target, isTarget: true });
  if (after) segments.push({ text: after, isTarget: false });
  return segments;
}

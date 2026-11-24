/**
 * ═══════════════════════════════════════════════════════════
 *  فحوص الكتابة الآلية (دوال نقية، بلا شبكة)
 *
 *  1) du/Sie: هل النص يخاطب الشخص بصيغة واحدة؟ نعدّ الضمائر والملكيات فقط:
 *     - du: du, dir, dich, dein…, euch, euer…
 *     - Sie: Sie (وسط الجملة)، Ihnen، Ihr… (بحرف كبير وسط الجملة)
 *     لا نعدّ «Sie» في بداية الجملة (قد تعني sie = هي/هم)، ولا «ihr» الصغيرة.
 *
 *  2) الطول: يُقارن بالحد الخاص بالمهمة (minWords)، لا بحد عام للمستوى.
 *     الأرقام الرسمية في ./official-writing.ts كمرجع فقط.
 * ═══════════════════════════════════════════════════════════
 */

export type Address = "du" | "sie" | "none";

export interface FormalityResult {
  duCount: number;
  sieCount: number;
  /** الصيغة الغالبة، أو none إن لم يُوجد ضمير مخاطَب */
  dominant: Address;
  /** true إن ظهرت الصيغتان معاً */
  mixed: boolean;
}

const DU_WORDS = new Set(["du", "dir", "dich", "dein", "deine", "deinen", "deinem", "deiner", "deines", "euch", "euer", "eure", "eurem", "euren", "eurer", "eures"]);
const SIE_MID_WORDS = new Set(["Sie", "Ihnen", "Ihr", "Ihre", "Ihren", "Ihrem", "Ihrer", "Ihres"]);

/** يقسّم النص إلى كلمات مع معرفة هل الكلمة في بداية جملة */
function tokens(text: string): {word: string; sentenceStart: boolean}[] {
  const out: {word: string; sentenceStart: boolean}[] = [];
  let start = true;
  for (const m of text.matchAll(/[\p{L}]+|[.!?]/gu)) {
    const w = m[0];
    if (w === "." || w === "!" || w === "?") {
      start = true;
      continue;
    }
    out.push({word: w, sentenceStart: start});
    start = false;
  }
  return out;
}

export function checkFormality(text: string): FormalityResult {
  let du = 0;
  let sie = 0;
  for (const {word, sentenceStart} of tokens(text)) {
    if (DU_WORDS.has(word)) du++;
    else if (SIE_MID_WORDS.has(word) && !sentenceStart) sie++;
  }
  const dominant: Address = du === 0 && sie === 0 ? "none" : du >= sie ? "du" : "sie";
  return {duCount: du, sieCount: sie, dominant, mixed: du > 0 && sie > 0};
}

/** عدد الكلمات: كلمات ألمانية/عربية، بلا أرقام ولا رموز */
export function countWords(text: string): number {
  return (text.match(/[\p{L}]+(?:['’-][\p{L}]+)*/gu) ?? []).length;
}

export interface LengthResult {
  words: number;
  min: number;
  reached: boolean;
}

/** هل بلغ النص الحد الأدنى للمهمة؟ (الحد الأعلى لا يُحسب خطأً) */
export function checkLength(text: string, minWords: number): LengthResult {
  const words = countWords(text);
  return {words, min: minWords, reached: words >= minWords};
}

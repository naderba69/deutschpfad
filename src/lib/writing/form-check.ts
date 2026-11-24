/**
 * ═══════════════════════════════════════════════════════════
 *  فحوص الكتابة الآلية (دوال نقية، بلا شبكة)
 *
 *  1) du/Sie: هل النص يخاطب الشخص بصيغة واحدة؟ الخلط بين du و Sie
 *     خطأ شائع في الرسائل الرسمية. نعدّ الضمائر والملكيات فقط:
 *     - du: du, dir, dich, dein…, euch, euer…
 *     - Sie: Sie (وسط الجملة)، Ihnen، Ihr… (بحرف كبير وسط الجملة)
 *     لا نعدّ «Sie» في بداية الجملة (قد تعني sie = هي/هم)، ولا «ihr/Ihr» الصغيرة.
 *
 *  2) الطول حسب المستوى: حدود الكلمات المستخرجة من ملفات الامتحانات
 *     في src/data/exams (أدنى وأعلى minWords لكل مستوى). هذه أرقام المنصة
 *     نفسها، وليست أرقاماً رسمية من Goethe/telc بعد.
 * ═══════════════════════════════════════════════════════════
 */
import type {LevelCode} from "@/types/curriculum";

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
    else if (word === "Sie" && sentenceStart) {
      /* لا نعدّها: قد تكون sie = هي/هم */
    }
  }
  const dominant: Address = du === 0 && sie === 0 ? "none" : du >= sie ? "du" : "sie";
  return {duCount: du, sieCount: sie, dominant, mixed: du > 0 && sie > 0};
}

/**
 * حدود عدد الكلمات لكل مستوى كما في ملفات الامتحانات:
 * A1 ⇐ 20–30، A2 ⇐ 30–60، B1 = 80، B2 ⇐ 100–150.
 */
export const LEVEL_WORD_TARGET: Record<LevelCode, {min: number; max: number}> = {
  A1: {min: 20, max: 30},
  A2: {min: 30, max: 60},
  B1: {min: 80, max: 80},
  B2: {min: 100, max: 150},
};

export type LengthVerdict = "short" | "ok";

export interface LengthResult {
  words: number;
  target: {min: number; max: number};
  verdict: LengthVerdict;
}

/** عدد الكلمات: كلمات ألمانية/عربية، بلا أرقام ولا رموز */
export function countWords(text: string): number {
  return (text.match(/[\p{L}]+(?:['’-][\p{L}]+)*/gu) ?? []).length;
}

/** هل بلغ النص الحد الأدنى للمستوى؟ (الحد الأعلى يُعرض فقط ولا يُحسب خطأً) */
export function checkLengthForLevel(text: string, level: LevelCode): LengthResult {
  const words = countWords(text);
  const target = LEVEL_WORD_TARGET[level];
  return {words, target, verdict: words >= target.min ? "ok" : "short"};
}

/**
 * تقييم النطق — مقارنة النص المعترف به (من SpeechRecognition)
 * مع النص المستهدف، باستخدام تشابه الكلمات (Levenshtein)
 * — ينتج درجة + الكلمات المطابقة/المفقودة/الخاطئة + ملاحظات —
 */

export interface PronunciationScore {
  /** الدرجة من 0 إلى 100 */
  score: number;
  /** النص الذي تعرّف عليه المتصفح */
  recognizedText: string;
  /** كلمات الهدف التي أُدركت بشكل صحيح */
  matchedWords: string[];
  /** كلمات الهدف التي لم تُدرك */
  missedWords: string[];
  /** كلمات أُدركت لكنها ليست في الهدف (زائدة/بديلة) */
  wrongWords: string[];
  /** هل سُجّل أي كلام؟ */
  empty: boolean;
}

/** تطبيع النص الألماني للمقارنة (أحرف صغيرة + إزالة علامات + مسافات) */
export function normalizeGermanText(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:«»„“”()"'،؟؛\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** مسافة ليفنشتاين بين سلسلتين */
export function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[n];
}

/** تشابه كلمتين كنسبة 0..1 (1 = تطابق تام) */
export function wordSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length, 1);
  return 1 - dist / maxLen;
}

/** عتبة اعتبار الكلمة "مُطابقة" */
const MATCH_THRESHOLD = 0.66;

/** تقييم النطق الكامل */
export function scorePronunciation(target: string, recognized: string): PronunciationScore {
  const targetWords = normalizeGermanText(target)
    .split(" ")
    .filter(Boolean);
  const recognizedWords = normalizeGermanText(recognized)
    .split(" ")
    .filter(Boolean);

  if (recognizedWords.length === 0) {
    return {
      score: 0,
      recognizedText: recognized,
      matchedWords: [],
      missedWords: targetWords,
      wrongWords: [],
      empty: true,
    };
  }

  const matchedWords: string[] = [];
  const missedWords: string[] = [];
  const usedRecognized = new Set<number>();

  for (const targetWord of targetWords) {
    let bestIdx = -1;
    let bestSim = 0;
    for (let j = 0; j < recognizedWords.length; j++) {
      if (usedRecognized.has(j)) continue;
      const sim = wordSimilarity(targetWord, recognizedWords[j]);
      if (sim > bestSim) {
        bestSim = sim;
        bestIdx = j;
      }
    }
    if (bestIdx !== -1 && bestSim >= MATCH_THRESHOLD) {
      matchedWords.push(targetWord);
      usedRecognized.add(bestIdx);
    } else {
      missedWords.push(targetWord);
    }
  }

  const wrongWords = recognizedWords.filter((_, j) => !usedRecognized.has(j));

  const score = Math.round((matchedWords.length / targetWords.length) * 100);

  return {
    score,
    recognizedText: recognized,
    matchedWords,
    missedWords,
    wrongWords,
    empty: false,
  };
}

/** وصف لفظي للدرجة بالعربية */
export function scoreLabel(score: number): { label: string; emoji: string; tone: "great" | "good" | "ok" | "weak" } {
  if (score >= 90) return { label: "ممتاز! نطق شبه كامل 👏", emoji: "🏆", tone: "great" };
  if (score >= 75) return { label: "جيد جداً — قليل من التحسين", emoji: "👍", tone: "good" };
  if (score >= 55) return { label: "جيد — أعد الاستماع وكرر", emoji: "🙂", tone: "ok" };
  return { label: "حاول مجدداً ببطء — الممارسة تصنع الفرق", emoji: "💪", tone: "weak" };
}

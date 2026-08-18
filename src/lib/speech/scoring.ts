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
  const similarities: number[] = [];

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
      similarities.push(bestSim);
    } else {
      missedWords.push(targetWord);
    }
  }

  const wrongWords = recognizedWords.filter((_, j) => !usedRecognized.has(j));

  // الدرجة = متوسط التشابه الفعلي (يعكس جودة النطق لا مجرد مطابقة/عدم)
  // · الكلمات الناقصة تُحتسب 0
  // · الكلمات المطابقة تُحتسب بنسبة تشابهها (Hallo→Halo = 80% وليس 100%)
  let score: number;
  if (targetWords.length === 0) {
    score = 0;
  } else {
    const totalSim = similarities.reduce((s, x) => s + x, 0) + missedWords.length * 0;
    score = Math.round((totalSim / targetWords.length) * 100);
  }

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

/** مقاطع النص مع علامة مطابقة (لإظهار أين اختلف النطق حرفياً) */
export interface CharDiffSegment {
  text: string;
  matched: boolean;
}

/**
 * مقارنة حرفية بين النص المعترف به والهدف، وإرجاع مقاطع مميزة:
 * المطابقة خضراء، والاختلافات حمراء — فيرى المتعلم بالضبط أي جزء أخطأ فيه.
 * (محاذاة بسيطة: مقارنة غير حساسة لحالة الأحرف + إزاحة متدرجة — تحافظ على الأحرف الأصلية)
 */
export function charDiff(target: string, recognized: string): CharDiffSegment[] {
  const a = target.replace(/[.,!?;:«»„“”()"'،؟؛\-]/g, " ").replace(/\s+/g, " ").trim();
  const b = recognized.replace(/[.,!?;:«»„“”()"'،؟؛\-]/g, " ").replace(/\s+/g, " ").trim();
  if (!a || !b) return [{ text: a || b, matched: false }];

  const segments: CharDiffSegment[] = [];
  let i = 0;
  let j = 0;
  const la = a.length;
  const lb = b.length;

  while (i < la && j < lb) {
    if (a[i].toLowerCase() === b[j].toLowerCase()) {
      // تجميع الحروف المطابقة المتتالية
      let t = "";
      while (i < la && j < lb && a[i].toLowerCase() === b[j].toLowerCase()) {
        t += a[i];
        i++;
        j++;
      }
      segments.push({ text: t, matched: true });
    } else {
      // اختلاف — نأخذ حرفاً من جهة ونحاول إعادة المحاذاة
      let t = a[i];
      i++;
      j++;
      segments.push({ text: t, matched: false });
    }
  }
  // بقية الهدف (حروف لم تُنطق)
  if (i < la) segments.push({ text: a.slice(i), matched: false });
  return segments;
}

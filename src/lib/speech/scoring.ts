/**
 * مقارنة نصية تقريبية بين التفريغ المعترف به (SpeechRecognition)
 * والنص المستهدف باستخدام تشابه الكلمات (Levenshtein).
 * لا تحلل الموجة الصوتية، ولا تقيس مخارج الحروف أو النبر أو جودة النطق.
 */

export interface PronunciationScore {
  /** نسبة تقريبية لتشابه التفريغ النصي، وليست قياساً صوتياً من 0 إلى 100 */
  score: number;
  /** النص الذي أعاده التعرف على الكلام */
  recognizedText: string;
  /** كلمات الهدف التي طابقها التفريغ وفق تشابه التهجئة */
  matchedWords: string[];
  /** كلمات الهدف التي لم يطابقها التفريغ */
  missedWords: string[];
  /** كلمات زائدة أو بديلة في التفريغ مقارنة بالهدف */
  wrongWords: string[];
  /** هل كان التفريغ فارغاً؟ */
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

/** تشابه تهجئة كلمتين كنسبة 0..1 (1 = تطابق نصي تام) */
export function wordSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length, 1);
  return 1 - dist / maxLen;
}

/** عتبة اعتبار تهجئة الكلمة مطابقة تقريبياً */
const MATCH_THRESHOLD = 0.66;

/** حساب تشابه نص التفريغ مع النص المستهدف */
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

  // الدرجة = متوسط تشابه سلاسل الكلمات، ولا تمثل جودة النطق الصوتية.
  // · الكلمات غير المطابقة تُحتسب 0
  // · التشابه التهجئي لا يثبت صحة المخارج أو النبر أو الإيقاع.
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

/** وصف لفظي لمقدار تشابه التفريغ النصي، لا لحكم على النطق */
export function scoreLabel(score: number): { label: string; emoji: string; tone: "great" | "good" | "ok" | "weak" } {
  if (score >= 90) return { label: "مطابقة نصية عالية للتفريغ", emoji: "🏆", tone: "great" };
  if (score >= 75) return { label: "مطابقة نصية جيدة", emoji: "👍", tone: "good" };
  if (score >= 55) return { label: "مطابقة نصية جزئية — قارن النصين", emoji: "🙂", tone: "ok" };
  return { label: "التفريغ يختلف عن الهدف — تحقق من التعرف", emoji: "💪", tone: "weak" };
}

/** مقاطع مقارنة نصية لتمييز مواضع اختلاف التفريغ عن الهدف */
export interface CharDiffSegment {
  text: string;
  matched: boolean;
}

/**
 * مقارنة حرفية تقريبية بين التفريغ والهدف، لا بين الصوتين.
 * تُميّز المقاطع النصية المتطابقة والمختلفة، ولا تحدد موضع خطأ نطقي بعينه.
 * (محاذاة بسيطة غير حساسة لحالة الأحرف — تحافظ على الأحرف الأصلية)
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

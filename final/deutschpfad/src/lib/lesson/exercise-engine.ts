import type {
  ErrorCorrectionExercise,
  Exercise,
  FeedbackResult,
  FillBlankExercise,
  MatchingExercise,
  McqExercise,
  OrderingExercise,
  TransformationExercise,
  DictationExercise,
} from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════
 *  محرك التصحيح الفوري — يقيّم أي تمرين ويعيد:
 *  • هل الإجابة صحيحة؟
 *  • شرح «لماذا» بالعربية
 *  • تصنيف نوع الخطأ
 *  • الإجابة الصحيحة للعرض
 * ═══════════════════════════════════════════════════════
 */

/** تطبيع النص للمقارنة: أحرف صغيرة + إزالة علامات الترقيم + مسافات متعددة */
export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:«»„“”()"'،؟؛]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** مجموع نقاط تمرين */
export function exercisePoints(exercise: Exercise): number {
  return exercise.points ?? 10;
}

export function evaluateMcq(exercise: McqExercise, selected: string): FeedbackResult {
  const isCorrect = normalizeText(selected) === normalizeText(exercise.options[exercise.correctIndex]);
  const selectedOptionExplanation =
    !isCorrect && exercise.optionExplanations
      ? exercise.optionExplanations[exercise.options.indexOf(selected)]
      : undefined;

  return {
    isCorrect,
    pointsEarned: isCorrect ? exercisePoints(exercise) : 0,
    explanation:
      isCorrect
        ? exercise.explanation
        : selectedOptionExplanation ?? exercise.explanation,
    errorType: exercise.errorType,
    correctAnswer: exercise.options[exercise.correctIndex],
  };
}

export function evaluateOrdering(exercise: OrderingExercise, answerTokens: string[]): FeedbackResult {
  const joined = answerTokens.join(" ").trim();
  const isCorrect = normalizeText(joined) === normalizeText(exercise.correctSentence);

  // حالة جزئية: نفس الكلمات لكن بترتيب خاطئ
  const sameWords =
    !isCorrect &&
    normalizeText(joined).split(" ").sort().join(" ") ===
      normalizeText(exercise.correctSentence).split(" ").sort().join(" ");

  return {
    isCorrect,
    partial: sameWords,
    pointsEarned: isCorrect ? exercisePoints(exercise) : 0,
    explanation: sameWords
      ? "الكلمات صحيحة لكن الترتيب خاطئ! تذكّر القاعدة: الفعل في المركز الثاني (V2)."
      : exercise.explanation,
    errorType: sameWords ? "word-order" : exercise.errorType,
    correctAnswer: exercise.correctSentence,
  };
}

export function evaluateFillBlank(exercise: FillBlankExercise, answers: string[]): FeedbackResult {
  const allCorrect = exercise.blanks.every(
    (blank, i) => normalizeText(answers[i] ?? "") === normalizeText(blank.correct),
  );
  const filledCount = answers.filter((a) => a.trim() !== "").length;
  const isComplete = filledCount === exercise.blanks.length;

  let explanation = exercise.explanation;
  if (!allCorrect) {
    const wrongIndices = exercise.blanks
      .map((blank, i) => ({ blank, i }))
      .filter(({ blank, i }) => normalizeText(answers[i] ?? "") !== normalizeText(blank.correct));
    if (wrongIndices.length > 0) {
      const first = wrongIndices[0];
      explanation = `الفراغ رقم ${first.i + 1}: الصواب «${first.blank.correct}» — ${exercise.explanation}`;
    }
  }

  return {
    isCorrect: allCorrect,
    partial: !allCorrect && isComplete,
    pointsEarned: allCorrect ? exercisePoints(exercise) : 0,
    explanation,
    errorType: exercise.errorType,
    correctAnswer: exercise.blanks.map((b) => b.correct).join(" · "),
  };
}

export function evaluateMatching(
  exercise: MatchingExercise,
  selectedPairs: { left: string; right: string }[],
): FeedbackResult {
  const correctPairs = new Set(
    exercise.pairs.map((p) => `${normalizeText(p.left)}|${normalizeText(p.right)}`),
  );
  const matched = selectedPairs.filter((p) =>
    correctPairs.has(`${normalizeText(p.left)}|${normalizeText(p.right)}`),
  ).length;
  const allCorrect = matched === exercise.pairs.length;

  return {
    isCorrect: allCorrect,
    partial: !allCorrect && matched > 0,
    pointsEarned: allCorrect ? exercisePoints(exercise) : 0,
    explanation: allCorrect
      ? exercise.explanation
      : `وصلت ${matched} من ${exercise.pairs.length} بشكل صحيح. ${exercise.explanation}`,
    errorType: exercise.errorType,
    correctAnswer: exercise.pairs.map((p) => `${p.left} = ${p.right}`).join("؛ "),
  };
}

export function evaluateErrorCorrection(
  exercise: ErrorCorrectionExercise,
  selected: string,
): FeedbackResult {
  const isCorrect = normalizeText(selected) === normalizeText(exercise.correctWord);
  return {
    isCorrect,
    pointsEarned: isCorrect ? exercisePoints(exercise) : 0,
    explanation: isCorrect ? exercise.explanation : exercise.explanation,
    errorType: exercise.errorType,
    correctAnswer: exercise.correctWord,
  };
}

export function evaluateTransformation(
  exercise: TransformationExercise,
  answer: string,
): FeedbackResult {
  const normalized = normalizeText(answer);
  const accepted = exercise.acceptedAnswers.map(normalizeText);
  const isCorrect = accepted.includes(normalized);

  return {
    isCorrect,
    pointsEarned: isCorrect ? exercisePoints(exercise) : 0,
    explanation: isCorrect ? exercise.explanation : exercise.explanation,
    errorType: exercise.errorType,
    correctAnswer: exercise.sampleAnswer,
  };
}

export function evaluateDictation(exercise: DictationExercise, answer: string): FeedbackResult {
  const normalizedAnswer = normalizeText(answer);
  const variants = [exercise.audioText, ...(exercise.acceptedVariants ?? [])].map(normalizeText);
  const isCorrect = variants.includes(normalizedAnswer);

  // تحليل الخطأ: هل الكلمات نفسها لكن بترتيب مختلف؟
  const answerWords = normalizedAnswer.split(" ").filter(Boolean).sort();
  const audioWords = normalizeText(exercise.audioText).split(" ").filter(Boolean).sort();
  const sameWordsDifferentOrder =
    !isCorrect && answerWords.length === audioWords.length &&
    answerWords.join(" ") === audioWords.join(" ");

  return {
    isCorrect,
    partial: sameWordsDifferentOrder,
    pointsEarned: isCorrect ? exercisePoints(exercise) : 0,
    explanation: sameWordsDifferentOrder
      ? "سمعت الكلمات صحيحة لكن الترتيب مختلف! استمع مرة أخرى ببطء ورتب الجملة كما تُلفظ."
      : isCorrect
        ? exercise.explanation
        : "انتبه: قد يكون الخطأ في التهجئة (ß بدل ss مثلاً) أو في نهايات الكلمات. استمع ببطء وحاول مجدداً.",
    errorType: sameWordsDifferentOrder ? "word-order" : isCorrect ? exercise.errorType : "spelling",
    correctAnswer: exercise.audioText,
  };
}

/** الدالة الرئيسية — توزّع التمرين على مقيّمه */
export function evaluateExercise(exercise: Exercise, answer: unknown): FeedbackResult {
  switch (exercise.type) {
    case "multiple-choice":
      return evaluateMcq(exercise, answer as string);
    case "word-ordering":
      return evaluateOrdering(exercise, answer as string[]);
    case "fill-blank":
      return evaluateFillBlank(exercise, answer as string[]);
    case "matching":
      return evaluateMatching(exercise, answer as { left: string; right: string }[]);
    case "error-correction":
      return evaluateErrorCorrection(exercise, answer as string);
    case "transformation":
      return evaluateTransformation(exercise, answer as string);
    case "dictation":
      return evaluateDictation(exercise, answer as string);
    default:
      return {
        isCorrect: false,
        pointsEarned: 0,
        explanation: "نوع التمرين غير مدعوم بعد.",
        errorType: "grammar",
      };
  }
}

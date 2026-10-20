"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {recordMistake} from "@/lib/storage/error-notebook";
import {DictationExerciseView} from "@/components/lesson/exercises/dictation";
import {ErrorCorrectionExerciseView} from "@/components/lesson/exercises/error-correction";
import {FillBlankExerciseView} from "@/components/lesson/exercises/fill-blank";
import {MatchingExerciseView} from "@/components/lesson/exercises/matching";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {SentenceGapExerciseView} from "@/components/lesson/exercises/sentence-gap";
import {TransformationExerciseView} from "@/components/lesson/exercises/transformation";
import {TrueFalseExerciseView} from "@/components/lesson/exercises/true-false";
import {WordOrderingExercise} from "@/components/lesson/exercises/word-ordering";
import {ZuordnungExerciseView} from "@/components/lesson/exercises/zuordnung";
import type { Exercise, FeedbackResult } from "@/types/lesson";

const TYPE_LABELS: Record<Exercise["type"], string> = {
  "multiple-choice": "اختيار من متعدد",
  "word-ordering": "ترتيب الكلمات",
  "fill-blank": "إكمال الفراغات",
  matching: "وصل",
  "error-correction": "تصحيح الخطأ",
  transformation: "تحويل الجمل",
  dictation: "إملاء صوتي",
  "true-false": "Richtig / Falsch — صحيح أم خطأ",
  "sentence-gap": "Lückentext — أكمل بالجمل",
  zuordnung: "Zuordnung — المطابقة",
};

interface ExerciseRendererProps {
  exercise: Exercise;
  /** يُستدعى عند كل نتيجة تصحيح (للتقييم الختامي وجلسات التدريب) */
  onResult?: (result: FeedbackResult) => void;
}

/**
 * الموجّه العام للتمارين — يعرض أي تمرين حسب نوعه داخل بطاقة موحدة
 */
export function ExerciseRenderer({ exercise, onResult }: ExerciseRendererProps) {
  const handleResult = (result: FeedbackResult) => {
    onResult?.(result);
    // تسجيل الخطأ في دفتر الأخطاء التراكمي (كل الجلسات)
    if (!result.isCorrect) {
      void recordMistake({
        id: exercise.id,
        errorType: result.errorType,
        explanation: result.explanation,
        correctAnswer: result.correctAnswer,
      });
    }
    try {
      window.dispatchEvent(
        new CustomEvent(result.isCorrect ? "dp:exercise-solved" : "dp:exercise-wrong", {
          detail: { exerciseId: exercise.id, errorType: result.errorType, explanation: result.explanation },
        }),
      );
    } catch {
      /* تجاهل */
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0 border-b bg-muted/20 px-5 py-3.5">
        <CardTitle className="text-sm font-bold text-muted-foreground">
          {TYPE_LABELS[exercise.type]}
        </CardTitle>
        {exercise.tags?.includes("mini-test") && (
          <Badge variant="gold" className="text-[11px]">
            سؤال التقييم
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-5">
        {exercise.type === "multiple-choice" && (
          <MultipleChoiceExercise exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "word-ordering" && (
          <WordOrderingExercise exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "fill-blank" && (
          <FillBlankExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "matching" && (
          <MatchingExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "error-correction" && (
          <ErrorCorrectionExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "transformation" && (
          <TransformationExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "dictation" && (
          <DictationExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "true-false" && (
          <TrueFalseExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "sentence-gap" && (
          <SentenceGapExerciseView exercise={exercise} onResult={handleResult} />
        )}
        {exercise.type === "zuordnung" && (
          <ZuordnungExerciseView exercise={exercise} onResult={handleResult} />
        )}
      </CardContent>
    </Card>
  );
}

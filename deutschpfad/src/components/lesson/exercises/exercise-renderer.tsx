"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {DictationExerciseView} from "@/components/lesson/exercises/dictation";
import {ErrorCorrectionExerciseView} from "@/components/lesson/exercises/error-correction";
import {FillBlankExerciseView} from "@/components/lesson/exercises/fill-blank";
import {MatchingExerciseView} from "@/components/lesson/exercises/matching";
import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {TransformationExerciseView} from "@/components/lesson/exercises/transformation";
import {WordOrderingExercise} from "@/components/lesson/exercises/word-ordering";
import type { Exercise, FeedbackResult } from "@/types/lesson";

const TYPE_LABELS: Record<Exercise["type"], string> = {
  "multiple-choice": "اختيار من متعدد",
  "word-ordering": "ترتيب الكلمات",
  "fill-blank": "إكمال الفراغات",
  matching: "وصل",
  "error-correction": "تصحيح الخطأ",
  transformation: "تحويل الجمل",
  dictation: "إملاء صوتي",
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
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0 border-b bg-muted/20 px-5 py-3.5">
        <CardTitle className="text-sm font-bold text-muted-foreground">
          {TYPE_LABELS[exercise.type]}
        </CardTitle>
        {exercise.tags?.includes("mini-test") && (
          <Badge variant="gold" className="text-[10px]">
            سؤال التقييم
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-5">
        {exercise.type === "multiple-choice" && (
          <MultipleChoiceExercise exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "word-ordering" && (
          <WordOrderingExercise exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "fill-blank" && (
          <FillBlankExerciseView exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "matching" && (
          <MatchingExerciseView exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "error-correction" && (
          <ErrorCorrectionExerciseView exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "transformation" && (
          <TransformationExerciseView exercise={exercise} onResult={onResult} />
        )}
        {exercise.type === "dictation" && (
          <DictationExerciseView exercise={exercise} onResult={onResult} />
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import {PenLine} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {FreeWritingTrainer} from "@/components/lesson/sections/free-writing-trainer";
import {recordEvent} from "@/lib/analytics/events";
import {useExerciseSectionCompletion} from "@/components/session/use-exercise-section-completion";
import type { Lesson, WritingExercise } from "@/types/lesson";

/**
 * 6) الكتابة (Schreiben) — إنشاء جمل، إكمال فراغات، إملاء، ومسودة للمراجعة الذاتية
 */
export function SchreibenSection({ exercises, lesson }: { exercises: WritingExercise[]; lesson: Lesson }) {
  const report = useExerciseSectionCompletion(lesson.id, "schreiben", exercises.map((e) => e.id));
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <PenLine className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm">التمارين المحددة تُصحح فورياً؛ أما المسودة الحرة فهي للتدريب والمراجعة الذاتية ولا تُقيّم آلياً.</p>
      </div>

      {/* مسودة كتابة حرة غير مقيّمة؛ مهام الكتابة المحددة أدناه هي التي تسجل نتائج */}
      <FreeWritingTrainer lesson={lesson} />

      {exercises.map((exercise) => (
        <ExerciseRenderer
          key={exercise.id}
          exercise={exercise}
          sourceId={lesson.id}
          lessonId={lesson.id}
          onResult={(result) => {
            report(exercise.id, result.isCorrect);
            void recordEvent({
              type: "exercise-result",
              exerciseId: exercise.id,
              exerciseType: exercise.type,
              correct: result.isCorrect,
              points: result.pointsEarned,
              errorType: result.errorType,
              skill: "الكتابة",
              lessonId: lesson.id,
              taskId: `writing:${lesson.id}:${exercise.id}`,
            });
          }}
        />
      ))}
    </div>
  );
}

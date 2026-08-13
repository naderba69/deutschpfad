"use client";

import {PenLine} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import type { WritingExercise } from "@/types/lesson";

/**
 * 6) الكتابة (Schreiben) — إنشاء جمل، ترجمة، إكمال فراغات، إملاء
 */
export function SchreibenSection({ exercises }: { exercises: WritingExercise[] }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <PenLine className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm">تمارين الكتابة — ستكتب جملة كاملة أو تكمل فراغاً. التصحيح فوري.</p>
      </div>
      {exercises.map((exercise) => (
        <ExerciseRenderer key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

"use client";

import {PenLine} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {FreeWritingTrainer} from "@/components/lesson/sections/free-writing-trainer";
import type { Lesson, WritingExercise } from "@/types/lesson";

/**
 * 6) الكتابة (Schreiben) — إنشاء جمل، ترجمة، إكمال فراغات، إملاء
 * + مهمة الكتابة الحرة المقيّمة (تدريب Schreiben — 25% من الامتحان)
 */
export function SchreibenSection({ exercises, lesson }: { exercises: WritingExercise[]; lesson: Lesson }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <PenLine className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm">تمارين الكتابة — ستكتب جملة كاملة أو تكمل فراغاً. التصحيح فوري.</p>
      </div>

      {/* مهمة الكتابة الحرة المقيّمة (المهارة الأهم في الامتحان) */}
      <FreeWritingTrainer lesson={lesson} />

      {exercises.map((exercise) => (
        <ExerciseRenderer key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

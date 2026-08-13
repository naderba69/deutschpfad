"use client";

import * as React from "react";
import {Repeat} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type { Exercise } from "@/types/lesson";

/**
 * المراجعة التراكمية (Interleaving)
 * — 3 أسئلة من المستوى السابق في بداية كل درس —
 * تعيد تنشيط المعرفة القديمة وتخلط المواضيع (مبدأ التكرار المتداخل)
 */
export function InterleavingReview({
  review,
  levelLabel,
}: {
  review: Exercise[];
  levelLabel: string;
}) {
  if (review.length === 0) return null;

  return (
    <Card className="overflow-hidden border-indigo-300/40">
      <CardHeader className="border-b bg-indigo-500/5 py-3.5">
        <CardTitle className="flex items-center gap-2 text-base">
          <Repeat className="h-4 w-4 text-indigo-500" aria-hidden="true" />
          مراجعة تراكمية من {levelLabel} — قبل أن نبدأ
          <span className="ms-auto rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:text-indigo-300">
            Interleaving
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        <p className="text-sm text-muted-foreground">
          أجب عن هذه الأسئلة السريعة لتستعيد ما تعلمته سابقاً — ثم انطلق في درس اليوم بثقة.
        </p>
        {review.map((exercise) => (
          <ExerciseRenderer key={exercise.id} exercise={exercise} />
        ))}
      </CardContent>
    </Card>
  );
}

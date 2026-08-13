"use client";

import * as React from "react";
import {CheckCircle2, Dices, ListChecks} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {recordEvent} from "@/lib/analytics/events";
import {sample} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { Exercise, FeedbackResult } from "@/types/lesson";

const BATCH_SIZE = 5;

/**
 * 7) التدريبات التفاعلية — بنك أسئلة عشوائي واسع
 * — في كل جلسة تُسحب 5 تمارين عشوائية من البنك (Varied Practice) —
 */
export function InteraktiveUebungenSection({ bank }: { bank: Exercise[] }) {
  const [batch, setBatch] = React.useState<Exercise[]>(() => sample(bank, BATCH_SIZE));
  const [index, setIndex] = React.useState(0);
  const [solved, setSolved] = React.useState<Record<string, boolean>>({});
  const [regenerateKey, setRegenerateKey] = React.useState(0);

  const current = batch[index];

  const handleResult = (result: FeedbackResult, exercise: Exercise) => {
    if (result.isCorrect) {
      setSolved((prev) => (prev[exercise.id] ? prev : { ...prev, [exercise.id]: true }));
    }
    void recordEvent({
      type: "exercise-result",
      exerciseId: exercise.id,
      exerciseType: exercise.type,
      correct: result.isCorrect,
      points: result.pointsEarned,
      errorType: result.errorType,
    });
  };

  const nextExercise = () => {
    setIndex((i) => (i + 1) % batch.length);
  };

  const newBatch = () => {
    setBatch(sample(bank, BATCH_SIZE));
    setIndex(0);
    setSolved({});
    setRegenerateKey((k) => k + 1);
  };

  const solvedCount = batch.filter((e) => solved[e.id]).length;

  return (
    <div className="space-y-5">
      <div className="rounded-xl border bg-muted/30 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <ListChecks className="h-4 w-4 text-primary" aria-hidden="true" />
            جلسة تدريب — {BATCH_SIZE} تمارين عشوائية من البنك
          </p>
          <Button variant="outline" size="sm" onClick={newBatch} className="gap-1.5">
            <Dices className="h-4 w-4" aria-hidden="true" />
            تمرين جديد عشوائياً
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={(solvedCount / batch.length) * 100} aria-label="التقدم في الجلسة" />
          <span className="font-de shrink-0 text-sm font-bold text-primary">
            {solvedCount}/{batch.length}
          </span>
        </div>
      </div>

      {current && (
        <div key={`${current.id}-${index}-${regenerateKey}`}>
          <ExerciseRenderer exercise={current} onResult={(r) => handleResult(r, current)} />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {batch.map((e, i) => (
            <button
              key={`${e.id}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`التمرين ${i + 1}`}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-colors",
                i === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : solved[e.id]
                    ? "border-success/50 bg-success/10 text-success"
                    : "bg-background text-muted-foreground hover:border-primary/50",
              )}
            >
              {solved[e.id] ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
            </button>
          ))}
        </div>
        <Button variant="outline" onClick={nextExercise}>
          التمرين التالي ←
        </Button>
      </div>
    </div>
  );
}

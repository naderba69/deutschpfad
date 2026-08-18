"use client";

import * as React from "react";
import {Check, GripVertical, X} from "lucide-react";

import {FeedbackPanel} from "@/components/lesson/exercises/feedback-panel";
import {useExerciseState} from "@/components/lesson/exercises/use-exercise-state";
import {Button} from "@/components/ui/button";
import {evaluateOrdering} from "@/lib/lesson/exercise-engine";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { OrderingExercise, FeedbackResult } from "@/types/lesson";

/**
 * تمرين ترتيب الكلمات (سحب وإفلات + نقرة للموبايل)
 * — اسحب الكلمات إلى منطقة الإجابة، أو انقر عليها لإضافتها —
 */
export function WordOrderingExercise({
  exercise,
  onResult,
}: {
  exercise: OrderingExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [bank, setBank] = React.useState<string[]>(() => shuffle(exercise.tokens));
  const [answer, setAnswer] = React.useState<string[]>([]);
  const [dragIndex, setDragIndex] = React.useState<number | null>(null);
  const state = useExerciseState(exercise);

  const locked = state.result?.isCorrect === true || state.revealedSolution;

  const addWord = (word: string) => {
    if (locked) return;
    setBank((prev) => prev.filter((w) => w !== word));
    setAnswer((prev) => [...prev, word]);
  };

  const removeWord = (word: string) => {
    if (locked) return;
    setAnswer((prev) => prev.filter((w) => w !== word));
    setBank((prev) => [...prev, word]);
  };

  /** إسقاط كلمة من البنك في منطقة الإجابة */
  const handleDrop = (e: React.DragEvent, target: "answer" | "bank", index?: number) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text/plain");
    if (!word || locked) return;
    if (target === "answer") {
      setBank((prev) => prev.filter((w) => w !== word));
      setAnswer((prev) => [...prev, word]);
    } else if (target === "bank") {
      // إعادة كلمة من الإجابة إلى البنك
      setAnswer((prev) => prev.filter((w) => w !== word));
      setBank((prev) => [...prev, word]);
    }
    setDragIndex(null);
  };

  const handleCheck = () => {
    if (answer.length === 0) return;
    const feedback = evaluateOrdering(exercise, answer);
    state.submit(feedback);
    onResult?.(feedback);
  };

  const handleRetry = () => {
    setBank(shuffle(exercise.tokens));
    setAnswer([]);
    state.retry();
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-muted-foreground">{exercise.instructionAr}</p>

      {/* منطقة الإجابة */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "answer")}
        className={cn(
          "flex min-h-16 flex-wrap items-center gap-2 rounded-xl border-2 border-dashed p-3 transition-colors",
          answer.length > 0 ? "border-primary/50 bg-primary/5" : "border-muted",
          locked && "border-success/50 bg-success/5",
        )}
        aria-label="منطقة الإجابة"
      >
        {answer.length === 0 && (
          <span className="text-sm text-muted-foreground/70">
            {state.revealedSolution || locked
              ? "الجملة الصحيحة ↓"
              : "انقر الكلمات بالترتيب، أو اسحبها إلى هنا…"}
          </span>
        )}
        {answer.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-flex items-center">
            {i > 0 && <span className="mx-0.5 text-muted-foreground">·</span>}
            {locked || state.revealedSolution ? (
              <span className="rounded-lg bg-success/15 px-2.5 py-1.5 font-de font-semibold" dir="ltr" lang="de">
                {word}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => removeWord(word)}
                title="إزالة الكلمة (انقر عليها)"
                className="group flex items-center gap-1 rounded-lg border bg-background px-2.5 py-1.5 font-de font-semibold transition-colors hover:border-destructive/50 hover:bg-destructive/10"
                dir="ltr"
                lang="de"
              >
                {word}
                <X className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </button>
            )}
          </span>
        ))}
      </div>

      {/* بنك الكلمات */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "bank")}
        className="flex flex-wrap items-center gap-2 rounded-xl border bg-muted/30 p-3"
        aria-label="بنك الكلمات"
      >
        {bank.length === 0 && <span className="text-sm text-muted-foreground/70">كل الكلمات استُخدمت ✓</span>}
        {bank.map((word, i) => (
          <button
            key={`${word}-${i}`}
            type="button"
            draggable={!locked}
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", word);
              setDragIndex(i);
            }}
            onDragEnd={() => setDragIndex(null)}
            onClick={() => addWord(word)}
            disabled={locked}
            className={cn(
              "inline-flex items-center gap-1 rounded-lg border bg-background px-3 py-2 font-de font-semibold shadow-sm transition-all",
              "hover:border-primary/60 hover:bg-primary/5 active:scale-95",
              dragIndex === i && "opacity-40",
              locked && "opacity-50",
            )}
            dir="ltr"
            lang="de"
          >
            <GripVertical className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
            {word}
          </button>
        ))}
      </div>

      {/* أزرار التحقق */}
      {!locked && !state.revealedSolution && (
        <div className="flex gap-2">
          <Button onClick={handleCheck} disabled={answer.length === 0} className="gap-1.5">
            <Check className="h-4 w-4" aria-hidden="true" />
            تحقق من الإجابة
          </Button>
          {answer.length > 0 && (
            <Button variant="ghost" onClick={handleRetry}>
              إعادة ترتيب
            </Button>
          )}
        </div>
      )}

      <FeedbackPanel
        result={state.result}
        frustrated={state.frustrated}
        revealed={state.revealedSolution}
        solution={exercise.correctSentence}
        hint={exercise.hint}
        onRetry={handleRetry}
        onRevealSolution={state.revealSolution}
      />
    </div>
  );
}

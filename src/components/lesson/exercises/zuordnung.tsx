"use client";

import * as React from "react";
import {CheckCircle2} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import type { FeedbackResult, ZuordnungExercise } from "@/types/lesson";
import {cn} from "@/lib/utils";

/**
 * Zuordnung — صيغة Goethe الرسمية (Lesen Teil 1/4 + Hören Teil 3)
 * نصوص يسار تُنسب لعناوين/فئات يمين. الفئة قد تُستخدم أكثر من مرة (allowRepeat)
 * أو مرة واحدة (عندها تُقفل الفئة بعد اختيارها).
 */
export function ZuordnungExerciseView({
  exercise,
  onResult,
}: {
  exercise: ZuordnungExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [selected, setSelected] = React.useState<Record<string, string>>({}); // itemId ← categoryId
  const [checked, setChecked] = React.useState(false);

  const items = exercise.items;
  const categories = exercise.categories;
  const filled = Object.keys(selected).length;
  const allFilled = filled === items.length;

  const usedCategories = new Set(Object.values(selected));

  const choose = (itemId: string, catId: string) => {
    if (checked) return;
    if (!exercise.allowRepeat && usedCategories.has(catId) && selected[itemId] !== catId) {
      return; // الفئة مستخدمة بالفعل
    }
    setSelected((prev) => ({ ...prev, [itemId]: catId }));
  };

  const submit = () => {
    let correct = 0;
    for (const it of items) {
      if (selected[it.id] === exercise.correctMap[it.id]) correct++;
    }
    const isCorrect = correct === items.length;
    onResult?.({
      isCorrect,
      partial: !isCorrect && correct > 0,
      pointsEarned: isCorrect ? exercise.points ?? 1 : 0,
      explanation: `طابقت ${correct} من ${items.length} — في الامتحان: كل Zuordnung = نقطة مستقلة.`,
      correctAnswer: items.map((it) => exercise.correctMap[it.id]).join("، "),
      errorType: exercise.errorType,
    });
    setChecked(true);
  };

  return (
    <div className="space-y-4">
      {exercise.instructionAr && (
        <p className="text-sm font-semibold text-muted-foreground">{exercise.instructionAr}</p>
      )}

      {/* الفئات (العناوين) */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const used = usedCategories.has(c.id);
          return (
            <span
              key={c.id}
              className={cn(
                "rounded-lg border px-2.5 py-1 text-xs font-bold",
                used && !exercise.allowRepeat ? "border-primary/40 bg-primary/10 text-primary" : "border-muted bg-muted/30",
              )}
            >
              <LangDe>{c.de}</LangDe>
              {c.ar && <span className="ms-1 text-muted-foreground">{c.ar}</span>}
            </span>
          );
        })}
      </div>

      {/* النصوص مع اختيار الفئة */}
      <div className="space-y-2">
        {items.map((it, i) => {
          const catId = selected[it.id];
          const right = checked && catId === exercise.correctMap[it.id];
          const wrong = checked && catId !== exercise.correctMap[it.id];
          return (
            <div key={it.id} className={cn("rounded-xl border p-3", wrong && "border-destructive/50 bg-destructive/5")}>
              <p className="text-sm">
                <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[11px] font-bold">
                  {i + 1}
                </span>
                <LangDe>{it.de}</LangDe>
              </p>
              {it.ar && <p className="mt-0.5 text-xs text-muted-foreground">{it.ar}</p>}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {categories.map((c) => {
                  const isSel = selected[it.id] === c.id;
                  const blocked = !exercise.allowRepeat && usedCategories.has(c.id) && !isSel && !checked;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      disabled={blocked || checked}
                      onClick={() => choose(it.id, c.id)}
                      className={cn(
                        "rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
                        isSel ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background hover:border-primary/50",
                        blocked && "opacity-30",
                        checked && right && "border-success bg-success/15 text-success",
                        checked && wrong && "border-destructive bg-destructive/10 text-destructive",
                      )}
                    >
                      <LangDe>{c.de}</LangDe>
                    </button>
                  );
                })}
                {checked && (
                  <span className={cn("inline-flex items-center gap-1 text-xs font-bold", right ? "text-success" : "text-destructive")}>
                    {right ? "✓" : `✗ ${categories.find((c) => c.id === exercise.correctMap[it.id])?.de}`}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!checked && (
        <Button onClick={submit} disabled={!allFilled} className="w-full">
          تحقق ({filled}/{items.length})
        </Button>
      )}
      {checked && (
        <p className="flex items-center justify-center gap-1 text-center text-sm font-bold text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
          في الامتحان: اقرأ كل العناوين أولاً، ثم انسب النصوص — وكن حذراً من العناوين المتشابهة.
        </p>
      )}
    </div>
  );
}

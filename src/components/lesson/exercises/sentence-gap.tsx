"use client";

import * as React from "react";
import {CheckCircle2} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import type { FeedbackResult, SentenceGapExercise } from "@/types/lesson";
import {cn} from "@/lib/utils";

/**
 * Lückentext بجمل كاملة — صيغة Goethe الرسمية (Lesen Teil 3)
 * نص به فراغات {0}{1}... تُملأ بجمل من بنك معروض (فيه جمل زائدة لا تناسب).
 * التصحيح: كل فتحة على حدة (نقطة مستقلة) كما في الامتحان.
 */
export function SentenceGapExerciseView({
  exercise,
  onResult,
}: {
  exercise: SentenceGapExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [selected, setSelected] = React.useState<Record<number, string>>({}); // فتحة ← sentence id
  const [checked, setChecked] = React.useState(false);
  // البنك المخلوط (ثابت بعد أول رندر)
  const [bank] = React.useState(() =>
    [...exercise.sentenceBank].sort(() => Math.random() - 0.5),
  );

  const gapCount = exercise.gapOrder.length;
  const filled = Object.keys(selected).length;
  const allFilled = filled === gapCount;

  // تقسيم النص على الفتحات
  const parts = exercise.textWithGaps.split(/(\{(\d+)\})/g);

  const submit = () => {
    let correct = 0;
    const right: string[] = [];
    for (let i = 0; i < gapCount; i++) {
      const correctId = exercise.gapOrder[i];
      const chosen = selected[i];
      right.push(bank.find((b) => b.id === correctId)?.de ?? "");
      if (chosen === correctId) correct++;
    }
    const isCorrect = correct === gapCount;
    onResult?.({
      isCorrect,
      partial: !isCorrect && correct > 0,
      pointsEarned: isCorrect ? exercise.points ?? 1 : 0,
      explanation: `أدخلت ${correct} من ${gapCount} جملة صحيحة — في الامتحان: كل فراغ = نقطة مستقلة.`,
      correctAnswer: right.join(" | "),
      errorType: exercise.errorType,
    });
    setChecked(true);
  };

  const renderGap = (idx: number) => {
    const chosenId = selected[idx];
    const chosen = bank.find((b) => b.id === chosenId);
    const isRight = checked && chosenId === exercise.gapOrder[idx];
    return (
      <span
        className={cn(
          "mx-0.5 inline-block min-w-32 rounded-md border-2 px-2 py-0.5 text-sm align-baseline",
          !chosen && "border-dashed border-muted-foreground/50 bg-muted/30 text-muted-foreground",
          chosen && !checked && "border-primary bg-primary/10 text-primary",
          checked && isRight && "border-success bg-success/10 text-success",
          checked && !isRight && "border-destructive bg-destructive/10 text-destructive",
        )}
        role="button"
        tabIndex={0}
        onClick={() => {
          if (checked) return;
          const next = { ...selected };
          delete next[idx];
          setSelected(next);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!checked) {
              const next = { ...selected };
              delete next[idx];
              setSelected(next);
            }
          }
        }}
        title="اضغط لإزالة الجملة المختارة"
      >
        {chosen ? chosen.de : `…[${idx + 1}]`}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {exercise.instructionAr && (
        <p className="text-sm font-semibold text-muted-foreground">{exercise.instructionAr}</p>
      )}

      {/* النص مع الفتحات */}
      <div className="rounded-xl border bg-muted/30 p-4 leading-loose">
        {exercise.title && <p className="mb-2 text-xs font-bold text-muted-foreground">{exercise.title}</p>}
        <p className="text-[15px] leading-loose" dir="ltr" lang="de">
          {parts.map((part, i) => {
            if (part.startsWith("{") && part.endsWith("}")) {
              const idx = Number(part.slice(1, -1));
              return <React.Fragment key={i}>{renderGap(idx)}</React.Fragment>;
            }
            return <React.Fragment key={i}>{part}</React.Fragment>;
          })}
        </p>
        {exercise.textAr && (
          <p className="mt-2 border-t pt-2 text-sm text-muted-foreground" dir="rtl">
            {exercise.textAr}
          </p>
        )}
      </div>

      {/* بنك الجمل */}
      <div>
        <p className="mb-2 text-xs font-bold text-muted-foreground">
          بنك الجمل — اختر جملة لكل فراغ (هناك جمل زائدة لا تناسب):
        </p>
        <div className="flex flex-wrap gap-2">
          {bank.map((s) => {
            const used = Object.values(selected).includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                disabled={checked}
                onClick={() => {
                  // اختر أول فتحة فارغة
                  const firstEmpty = [...Array(gapCount).keys()].find((i) => !selected[i]);
                  if (firstEmpty === undefined) return;
                  setSelected((prev) => ({ ...prev, [firstEmpty]: s.id }));
                }}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                  used ? "border-success/50 bg-success/10 text-success" : "border-muted bg-background hover:border-primary/50",
                )}
              >
                <LangDe>{s.de}</LangDe>
                {used && <CheckCircle2 className="ms-1 inline h-3.5 w-3.5" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>

      {!checked && (
        <Button onClick={submit} disabled={!allFilled} className="w-full">
          تحقق ({filled}/{gapCount} فتحة)
        </Button>
      )}
      {checked && (
        <p className="text-center text-sm font-bold text-muted-foreground">
          في الامتحان: جملتان زائدتان لا تناسبان — انتبه للروابط (deshalb, außerdem, während…)
        </p>
      )}
    </div>
  );
}

"use client";

import * as React from "react";
import {CheckCircle2, XCircle} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {TextDe} from "@/components/shared/text-de";
import {Button} from "@/components/ui/button";
import type { FeedbackResult, TrueFalseExercise } from "@/types/lesson";
import {cn} from "@/lib/utils";

/**
 * Richtig/Falsch — صيغة Goethe الرسمية (Hören Teil 1 + Lesen Teil 4)
 * التصحيح: العبارة «صحيحة» إذا طابقت المعنى لا اللفظ (أهم مهارة امتحان)
 */
export function TrueFalseExerciseView({
  exercise,
  onResult,
}: {
  exercise: TrueFalseExercise;
  onResult?: (r: FeedbackResult) => void;
}) {
  const [answers, setAnswers] = React.useState<Record<string, boolean>>({});
  const [checked, setChecked] = React.useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === exercise.statements.length;

  const submit = () => {
    let correct = 0;
    for (const s of exercise.statements) {
      if ((answers[s.id] ?? null) === s.isTrue) correct++;
    }
    const isCorrect = correct === exercise.statements.length;
    const pct = correct / exercise.statements.length;
    onResult?.({
      isCorrect,
      partial: !isCorrect && pct > 0,
      pointsEarned: isCorrect ? exercise.points ?? 1 : 0,
      explanation: `أجبت صحيحاً على ${correct} من ${exercise.statements.length} — في الامتحان تُحتسب كل عبارة على حدة.`,
      correctAnswer: exercise.statements.map((s) => (s.isTrue ? "Richtig" : "Falsch")).join("، "),
      errorType: exercise.errorType,
    });
    setChecked(true);
  };

  return (
    <div className="space-y-4">
      {exercise.instructionAr && (
        <p className="text-sm font-semibold text-muted-foreground">{exercise.instructionAr}</p>
      )}

      {/* النص */}
      <div className="rounded-xl border bg-muted/30 p-4">
        {exercise.title && (
          <p className="mb-2 text-xs font-bold text-muted-foreground">{exercise.title}</p>
        )}
        <TextDe text={exercise.textDe} />
        {exercise.textAr && (
          <p className="mt-2 text-sm text-muted-foreground" dir="rtl">
            {exercise.textAr}
          </p>
        )}
      </div>

      {/* العبارات */}
      <div className="space-y-2">
        {exercise.statements.map((s, i) => {
          const chosen = answers[s.id];
          const show = checked;
          const ok = show && chosen === s.isTrue;
          const bad = show && chosen !== s.isTrue;
          return (
            <div key={s.id} className={cn("rounded-xl border p-3", bad && "border-destructive/50 bg-destructive/5")}>
              <p className="text-sm font-semibold">
                <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[11px] font-bold">
                  {i + 1}
                </span>
                <LangDe>{s.de}</LangDe>
              </p>
              {s.ar && <p className="mt-0.5 text-xs text-muted-foreground">{s.ar}</p>}

              <div className="mt-2 flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={chosen === true ? "default" : "outline"}
                  onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: true }))}
                  className={cn(show && ok && "border-success bg-success/15 text-success hover:bg-success/15")}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Richtig
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={chosen === false ? "default" : "outline"}
                  onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: false }))}
                  className={cn(show && ok && "border-success bg-success/15 text-success hover:bg-success/15")}
                >
                  <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Falsch
                </Button>
                {show && (
                  <span className={cn("inline-flex items-center gap-1 text-xs font-bold", ok ? "text-success" : "text-destructive")}>
                    {ok ? "✓ صحيح" : `✗ الصحيح: ${s.isTrue ? "Richtig" : "Falsch"}`}
                  </span>
                )}
              </div>
              {show && !ok && <p className="mt-1.5 text-xs leading-relaxed text-destructive">{s.whyAr}</p>}
            </div>
          );
        })}
      </div>

      {/* زر التحقق */}
      {!checked && (
        <Button onClick={submit} disabled={!allAnswered} className="w-full">
          تحقق من إجاباتي ({answeredCount}/{exercise.statements.length})
        </Button>
      )}
      {checked && (
        <p className="text-center text-sm font-bold text-muted-foreground">
          في الامتحان: كل عبارة = 0.5–1 نقطة — «Richtig» تعني مطابقة المعنى وليس الكلمة نفسها.
        </p>
      )}
    </div>
  );
}

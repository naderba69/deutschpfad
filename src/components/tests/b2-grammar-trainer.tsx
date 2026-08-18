"use client";

import * as React from "react";
import {BrainCircuit, CheckCircle2, RotateCcw, XCircle} from "lucide-react";

import {B2_GRAMMATIK} from "@/data/exams/b2-grammatik";
import {useCountdown} from "@/lib/tests/use-countdown";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";

/**
 * تدريب القواعد والمفردات B2 — 60 سؤالاً MCQ موقوتاً
 * (30 قواعد + 30 مفردات بصيغ الامتحان مع شرح لكل سؤال)
 */
export function B2GrammarTrainer() {
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [checked, setChecked] = React.useState(false);
  const [result, setResult] = React.useState<{ correct: number; total: number } | null>(null);
  const [runKey, setRunKey] = React.useState(0);

  // 60 دقيقة = دقيقة لكل سؤال (توصية تدريبية)
  const totalSeconds = B2_GRAMMATIK.length * 60;
  const remaining = useCountdown(totalSeconds, () => finish());

  const current = B2_GRAMMATIK[idx];
  const chosen = answers[current.id];
  const answeredCount = Object.keys(answers).length;

  const pick = (i: number) => {
    if (checked) return;
    setAnswers((a) => ({ ...a, [current.id]: i }));
  };

  const next = () => {
    setChecked(false);
    if (idx + 1 < B2_GRAMMATIK.length) {
      setIdx((i) => i + 1);
    } else {
      finish();
    }
  };

  const prev = () => {
    setChecked(false);
    setIdx((i) => Math.max(0, i - 1));
  };

  const finish = () => {
    let correct = 0;
    for (const q of B2_GRAMMATIK) {
      if (answers[q.id] === q.correct) correct++;
    }
    setResult({ correct, total: B2_GRAMMATIK.length });
  };

  const restart = () => {
    setIdx(0);
    setAnswers({});
    setChecked(false);
    setResult(null);
    setRunKey((k) => k + 1);
  };

  if (result) {
    const pct = Math.round((result.correct / result.total) * 100);
    const passed = pct >= 60;
    return (
      <Card className="overflow-hidden border-primary/30">
        <CardContent className="space-y-4 p-6 text-center">
          <CheckCircle2 className={cn("mx-auto h-12 w-12", passed ? "text-success" : "text-destructive")} aria-hidden="true" />
          <p className="font-de text-4xl font-extrabold text-primary">{pct}%</p>
          <p className="font-bold">
            {passed ? "أساس B2 القواعدي متين — واصل التدريب على القراءة والاستماع" : "تحتاج تقوية — راجع دروس B2 ثم أعد المحاولة"}
          </p>
          <p className="text-sm text-muted-foreground">
            أجبت صحيحاً على {result.correct} من {result.total} سؤالاً.
          </p>
          <Progress value={pct} className="mx-auto h-3 max-w-sm" aria-label={`النتيجة ${pct}%`} />
          <div className="flex justify-center gap-2">
            <Button onClick={restart} className="gap-2">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              إعادة التدريب
            </Button>
            <Button asChild variant="outline">
              <a href="/tests/b2">محرك الامتحان الكامل</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div key={`g-${runKey}`} className="space-y-4">
      {/* الشريط العلوي */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
        <span className="inline-flex items-center gap-1.5 text-sm font-bold">
          <BrainCircuit className="h-4 w-4 text-primary" aria-hidden="true" />
          قواعد ومفردات B2 — {idx + 1}/{B2_GRAMMATIK.length}
        </span>
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
          {current.skill === "grammatik" ? "🧩 قواعد" : "💬 مفردات"}
        </span>
        <span className="font-de ms-auto text-sm font-extrabold text-primary tabular-nums">
          ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
        </span>
      </div>

      {/* السؤال */}
      <Card>
        <CardContent className="space-y-3 p-5">
          <p className="text-sm font-bold">
            <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{idx + 1}</span>
            <span dir="ltr" lang="de">{current.q}</span>
          </p>
          <p className="text-xs text-muted-foreground">{current.qAr}</p>
          <div className="grid gap-1.5 sm:grid-cols-2">
            {current.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => pick(i)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                  chosen === i ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background hover:border-primary/40",
                  checked && i === current.correct && "border-success bg-success/10 text-success",
                  checked && chosen === i && i !== current.correct && "border-destructive bg-destructive/10 text-destructive",
                )}
              >
                <span className="font-de ms-1 inline-block w-4 text-xs font-bold opacity-60">{String.fromCharCode(65 + i)}</span>
                <span dir="ltr" lang="de">{opt}</span>
              </button>
            ))}
          </div>
          {checked && (
            <div className={cn("rounded-lg border p-3 text-sm", chosen === current.correct ? "border-success/40 bg-success/10 text-success" : "border-destructive/40 bg-destructive/10 text-destructive")}>
              <p className="font-bold">{chosen === current.correct ? "✓ إجابة صحيحة" : `✗ الصحيح: ${current.options[current.correct]}`}</p>
              <p className="mt-1 text-xs leading-relaxed">{current.whyAr}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* التنقل */}
      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Button variant="outline" onClick={prev} disabled={idx === 0}>
          السابق
        </Button>
        <span className="text-xs font-bold text-muted-foreground">
          أجبت على {answeredCount} من {B2_GRAMMATIK.length}
        </span>
        {!checked ? (
          <Button onClick={() => setChecked(true)} disabled={chosen === undefined}>
            تحقق
          </Button>
        ) : idx < B2_GRAMMATIK.length - 1 ? (
          <Button onClick={next}>التالي</Button>
        ) : (
          <Button variant="gold" onClick={finish}>إنهاء التدريب</Button>
        )}
      </div>
    </div>
  );
}

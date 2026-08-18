"use client";

import * as React from "react";
import {PlayCircle, RotateCcw, Volume2} from "lucide-react";

import {FALLSTRICKE} from "@/data/exams/fallstricke";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {cn} from "@/lib/utils";

/** نطق نص ألماني (لتمارين الاستماع) */
function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}

/**
 * فخاخ الامتحان — تدريب تفاعلي على أشهر أخطاء القراءة والاستماع
 * كل تمرين يعرض «المصيدة» ويشرح لماذا يخدع بها المصممون.
 */
export function FallstrickeTrainer() {
  const [idx, setIdx] = React.useState(0);
  const [chosen, setChosen] = React.useState<number | null>(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [runKey, setRunKey] = React.useState(0);

  const ex = FALLSTRICKE[idx];
  const answered = chosen !== null;
  const isRight = answered && chosen === ex.correct;

  const pick = (i: number) => {
    if (answered) return;
    setChosen(i);
    if (i === ex.correct) setScore((s) => s + 1);
  };

  const next = () => {
    setChosen(null);
    if (idx + 1 < FALLSTRICKE.length) {
      setIdx((i) => i + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setDone(false);
    setRunKey((k) => k + 1);
  };

  if (done) {
    const pct = Math.round((score / FALLSTRICKE.length) * 100);
    return (
      <div className="rounded-xl border border-primary/30 bg-card p-6 text-center">
        <p className="font-de text-5xl font-extrabold text-primary">{pct}%</p>
        <p className="mt-2 font-bold">
          {score} من {FALLSTRICKE.length} فخاً اكتشفته
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {pct >= 80
            ? "ممتاز! أنت تعرف فخاخ الامتحان — طبّق هذه العين في محرك الامتحان الكامل."
            : pct >= 50
              ? "جيد — أعد التدريب وركّز على شرح «لماذا المصيدة» لكل تمرين."
              : "لا بأس — هذا بالضبط سبب التدريب. أعد المحاولة وسترى الفرق."}
        </p>
        <Progress value={pct} className="mx-auto mt-3 h-3 max-w-sm" aria-label={`النتيجة ${pct}%`} />
        <div className="mt-4 flex justify-center gap-2">
          <Button onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            إعادة التدريب
          </Button>
          <Button asChild variant="outline">
            <a href="/tests/b2">محرك الامتحان الكامل</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div key={`f-${runKey}`} className="space-y-4">
      {/* الشريط */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
        <span className="text-sm font-bold">
          فخ {idx + 1}/{FALLSTRICKE.length}
        </span>
        <span className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-[11px] font-bold text-destructive">
          ⚠️ {ex.trapName}
        </span>
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground">
          {ex.skill === "lesen" ? "📖 قراءة" : "🎧 استماع"}
        </span>
        <span className="font-de ms-auto text-sm font-extrabold text-primary">{score} ✓</span>
      </div>

      {/* النص */}
      <div className="rounded-xl border bg-card p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-bold text-muted-foreground">
            {ex.skill === "lesen" ? "اقرأ النص" : "استمع إلى النص (أو اقرأه)"}
          </p>
          {ex.skill === "hören" && (
            <Button size="sm" variant="outline" className="gap-1.5" onClick={() => speak(ex.text)}>
              <Volume2 className="h-4 w-4" aria-hidden="true" />
              اسمع
            </Button>
          )}
        </div>
        <p className="font-de mt-2 text-sm leading-relaxed" dir="ltr" lang="de">{ex.text}</p>
        <p className="mt-2 border-t pt-2 text-xs leading-relaxed text-muted-foreground" dir="rtl">{ex.textAr}</p>
      </div>

      {/* السؤال */}
      <div className="rounded-xl border bg-card p-4">
        <p className="text-sm font-bold">
          <span dir="ltr" lang="de">{ex.question}</span>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{ex.questionAr}</p>
        <div className="mt-3 grid gap-1.5">
          {ex.options.map((opt, i) => {
            const isTrap = i === ex.trap;
            return (
              <button
                key={i}
                type="button"
                onClick={() => pick(i)}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-start text-sm transition-colors",
                  chosen === i ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background hover:border-primary/40",
                  answered && i === ex.correct && "border-success bg-success/10 text-success",
                  answered && chosen === i && i !== ex.correct && "border-destructive bg-destructive/10 text-destructive",
                )}
              >
                <span className="font-de ms-1 inline-block w-4 text-xs font-bold opacity-60">{String.fromCharCode(65 + i)}</span>
                <span dir="ltr" lang="de">{opt}</span>
                {answered && isTrap && i !== ex.correct && (
                  <span className="ms-2 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-700">هذه هي المصيدة 🪤</span>
                )}
              </button>
            );
          })}
        </div>

        {/* الشرح */}
        {answered && (
          <div className="mt-3 space-y-2">
            <div className={cn("rounded-lg border p-3 text-sm", isRight ? "border-success/40 bg-success/10 text-success" : "border-destructive/40 bg-destructive/10 text-destructive")}>
              <p className="font-bold">{isRight ? "✓ اكتشفت الفخ!" : "✗ وقعت في الفخ"}</p>
              <p className="mt-1 text-xs leading-relaxed">{isRight ? ex.whyCorrect : ex.whyTrap}</p>
            </div>
            {!isRight && (
              <div className="rounded-lg border border-success/40 bg-success/5 p-3 text-sm">
                <p className="font-bold text-success">لماذا الصحيح صحيح؟</p>
                <p className="mt-1 text-xs leading-relaxed">{ex.whyCorrect}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* التنقل */}
      <div className="flex justify-end border-t pt-4">
        {!answered ? (
          <p className="text-xs font-bold text-muted-foreground">اختر إجابة لترى الشرح…</p>
        ) : (
          <Button onClick={next}>{idx < FALLSTRICKE.length - 1 ? "الفخ التالي" : "عرض النتيجة"}</Button>
        )}
      </div>
    </div>
  );
}

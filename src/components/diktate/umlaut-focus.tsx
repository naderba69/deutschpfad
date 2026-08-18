"use client";

import * as React from "react";
import {CheckCircle2, Headphones, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {shuffled, UMLAUT_ITEMS} from "@/data/umlauts";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  تركيز الهملات — ä ö ü ß (أصعب أصوات الألمانية للعرب)
 *  اسمع الكلمة (نطق ألماني حقيقي) ثم اختر الكتابة الصحيحة
 *  من خيارات متشابهة — تدريب سمعي-كتابي مكثّف.
 * ═══════════════════════════════════════════════════════════
 */
export function UmlautFocus() {
  const [order, setOrder] = React.useState<number[]>([]);
  const [idx, setIdx] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [picked, setPicked] = React.useState<number | null>(null);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setOrder(shuffled(UMLAUT_ITEMS.map((_, i) => i)));
  }, []);

  React.useEffect(() => {
    return () => stopSpeaking();
  }, []);

  if (order.length === 0) return null;

  if (done) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-6 text-center">
        <span className="text-3xl" aria-hidden="true">🎉</span>
        <p className="mt-2 text-base font-extrabold">أتممت تمرين الهملات!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          أجبت صحيحاً عن {correctCount} من {UMLAUT_ITEMS.length} كلمة.
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            setOrder(shuffled(UMLAUT_ITEMS.map((_, i) => i)));
            setIdx(0);
            setCorrectCount(0);
            setAnswered(false);
            setPicked(null);
            setDone(false);
          }}
        >
          إعادة التمرين
        </Button>
      </div>
    );
  }

  const item = UMLAUT_ITEMS[order[idx]];
  const progress = (idx / UMLAUT_ITEMS.length) * 100;

  const listen = () => {
    stopSpeaking();
    speakGerman(item.de, { rate: 0.7 });
  };

  const pick = (i: number) => {
    if (answered) return;
    setPicked(i);
    setAnswered(true);
    if (i === item.correct) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (idx + 1 >= UMLAUT_ITEMS.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setAnswered(false);
      setPicked(null);
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-extrabold text-primary">🔤 الهملات الألمانية: ä ö ü ß</p>
        <span className="font-de text-[11px] font-bold text-muted-foreground">
          {idx + 1}/{UMLAUT_ITEMS.length}
        </span>
      </div>
      <Progress value={progress} className="mb-4 h-2" aria-label="التقدم في تمرين الهملات" />

      <div className="text-center">
        <p className="text-xs text-muted-foreground">استمع ثم اختر الكتابة الصحيحة:</p>
        <Button size="lg" variant="outline" className="mt-2 gap-2" onClick={listen}>
          <Headphones className="h-4 w-4" aria-hidden="true" />
          استمع للكلمة
        </Button>
        <p className="mt-1 text-[11px] text-muted-foreground">⟵ المعنى: {item.ar}</p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {item.options.map((opt, i) => {
          const isCorrect = i === item.correct;
          const isPicked = picked === i;
          return (
            <button
              key={opt}
              type="button"
              disabled={answered}
              onClick={() => pick(i)}
              className={cn(
                "font-de rounded-xl border px-3 py-2.5 text-center text-sm font-extrabold transition-colors",
                !answered && "border-muted bg-muted/20 hover:border-primary/50 hover:bg-primary/5",
                answered && isCorrect && "border-success bg-success/10 text-success",
                answered && isPicked && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                answered && !isPicked && !isCorrect && "border-muted bg-muted/30 text-muted-foreground opacity-60",
              )}
              dir="ltr"
            >
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <p className={cn("flex items-center gap-1.5 text-xs font-extrabold", picked === item.correct ? "text-success" : "text-destructive")}>
            {picked === item.correct ? (
              <>
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> صحيح! «{item.de}» تكتب هكذا.
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4" aria-hidden="true" />
                الصواب: «{item.de}» — استمع مجدداً وستعتاد أذنك على الفرق.
              </>
            )}
          </p>
          <Button size="sm" onClick={next}>
            التالي
          </Button>
        </div>
      )}
    </div>
  );
}

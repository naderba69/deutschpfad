"use client";

import * as React from "react";
import {Eye, EyeOff, Play, Repeat2, Users} from "lucide-react";

import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {speakRepeated} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import type { ListeningItem, ListeningQuestion } from "@/types/lesson";

const SPEED_OPTIONS = [
  { value: 0.75, label: "بطيء 0.75×" },
  { value: 1, label: "عادي 1×" },
  { value: 1.25, label: "سريع 1.25×" },
] as const;

/** تشغيل حوار كامل بالتسلسل (SpeechSynthesis تُصطف تلقائياً) */
function playDialogue(lines: { de: string }[], rate: number) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  lines.forEach((line) => {
    const u = new SpeechSynthesisUtterance(line.de);
    u.lang = "de-DE";
    u.rate = rate;
    window.speechSynthesis.speak(u);
  });
}

/**
 * 4) الاستماع (Hörverstehen) — المرحلة 3 المحسّنة:
 * — تدرج السرعة (0.75/1/1.25) — تشغيل حلقي — إخفاء النص للاستماع النشط —
 */
export function HoerverstehenSection({
  items,
  questions,
}: {
  items: ListeningItem[];
  questions: ListeningQuestion[];
}) {
  const [rate, setRate] = React.useState<number>(1);
  const [showText, setShowText] = React.useState(true);

  return (
    <div className="space-y-6">
      {/* عناصر التحكم */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
        <p className="text-sm font-semibold">سرعة الاستماع:</p>
        <div className="flex gap-2" role="group" aria-label="تدرج سرعة الاستماع">
          {SPEED_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setRate(opt.value)}
              aria-pressed={rate === opt.value}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                rate === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background hover:border-primary/50",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* الحوارات */}
      {items.map((item) => {
        const fullText = item.lines.map((l) => l.de).join(" ");
        return (
          <Card key={item.id}>
            <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 space-y-0 border-b bg-muted/20 py-3.5">
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                {item.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-1.5">
                <Button variant="outline" size="sm" onClick={() => playDialogue(item.lines, rate)}>
                  <Play className="h-4 w-4" aria-hidden="true" />
                  استمع للكل
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => speakRepeated(fullText, 2, { rate })}
                  title="تشغيل الحوار مرتين متتاليتين"
                >
                  <Repeat2 className="h-4 w-4" aria-hidden="true" />
                  ×2
                </Button>
                <Button
                  variant={showText ? "ghost" : "secondary"}
                  size="sm"
                  onClick={() => setShowText((v) => !v)}
                  title="إظهار أو إخفاء نص الحوار (استماع نشط)"
                  aria-pressed={showText}
                >
                  {showText ? (
                    <>
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                      إخفاء النص
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      إظهار النص
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 p-5">
              {item.lines.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-start justify-between gap-3 rounded-xl bg-muted/20 p-3 transition-opacity",
                    !showText && "opacity-40 select-none",
                  )}
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-primary">{line.speaker}</p>
                    <p className="font-de mt-0.5 font-semibold" dir="ltr" lang="de">
                      {showText ? line.de : "•••••••••••"}
                    </p>
                    {showText && (
                      <p className="mt-0.5 text-sm text-muted-foreground">{line.ar}</p>
                    )}
                  </div>
                  <SpeakButton text={line.de} rate={rate} />
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })}

      {/* أسئلة الفهم */}
      <div>
        <h3 className="mb-3 text-lg font-bold">أسئلة الفهم 🎧</h3>
        <div className="space-y-5">
          {questions.map((q) => (
            <MultipleChoiceExercise key={q.id} exercise={q} />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {Check, ChevronLeft, ChevronRight, Mic, Repeat} from "lucide-react";

import {PronunciationPractice} from "@/components/lesson/speech/pronunciation-practice";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import type { ShadowingLine } from "@/types/lesson";

interface ShadowingTrainerProps {
  lines: ShadowingLine[];
}

/**
 * مدرب الظل (Shadowing) — أسلوب محاكاة المعلّم:
 * 1) استمع للسطر 2) كرّره بصوت عالٍ 3) سجّل وقارن 4) انتقل للتالي
 */
export function ShadowingTrainer({ lines }: ShadowingTrainerProps) {
  const [index, setIndex] = React.useState(0);
  const [attempts, setAttempts] = React.useState<number[]>(() => lines.map(() => 0));
  const [bestScores, setBestScores] = React.useState<number[]>(() => lines.map(() => 0));
  const [practiceKey, setPracticeKey] = React.useState(0);

  if (lines.length === 0) return null;

  const line = lines[index];
  const progressPct = Math.round((index / lines.length) * 100);

  const handleScored = (score: number) => {
    setBestScores((prev) => {
      const next = [...prev];
      next[index] = Math.max(prev[index], score);
      return next;
    });
    setAttempts((prev) => {
      const next = [...prev];
      next[index] += 1;
      return next;
    });
    // جولة جديدة في ممارسة النطق بعد كل تقييم
    setPracticeKey((k) => k + 1);
  };

  return (
    <div className="space-y-4">
      {/* تقدم السطور */}
      <div className="flex items-center gap-3">
        <Progress value={progressPct} aria-label="التقدم في تدريب الظل" />
        <span className="font-de shrink-0 text-xs font-bold text-muted-foreground">
          سطر {index + 1}/{lines.length}
        </span>
      </div>

      {/* السطر الحالي */}
      <div className="rounded-xl border bg-muted/20 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-de text-lg font-bold" dir="ltr" lang="de">
              {line.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{line.ar}</p>
            {line.tip && (
              <p className="mt-2 rounded-lg bg-gold/10 px-2.5 py-1.5 text-xs text-muted-foreground">
                💡 {line.tip}
              </p>
            )}
          </div>
          <SpeakButton text={line.de} rate={0.75} variant="outline" label="بطيء" />
        </div>
      </div>

      {/* سجل نطقك */}
      <PronunciationPractice
        key={`${index}-${practiceKey}`}
        target={line.de}
        targetAr={line.ar}
        onScored={handleScored}
      />

      {/* ملخص السطر */}
      {attempts[index] > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-success">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            أفضل تقييم: {bestScores[index]}%
          </span>
          <span className="text-xs text-muted-foreground">
            (<Mic className="inline h-3 w-3" aria-hidden="true" /> {attempts[index]} محاولة)
          </span>
        </div>
      )}

      {/* التنقل */}
      <div className="flex items-center justify-between gap-2 border-t pt-3">
        <Button
          variant="ghost"
          size="sm"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="gap-1"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          السابق
        </Button>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Repeat className="h-3.5 w-3.5" aria-hidden="true" />
          كرر المحاكاة حتى تصل 90%+
        </span>
        <Button
          variant={index === lines.length - 1 ? "gold" : "outline"}
          size="sm"
          disabled={index === lines.length - 1}
          onClick={() => setIndex((i) => i + 1)}
          className="gap-1"
        >
          التالي
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

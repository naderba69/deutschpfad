"use client";

import * as React from "react";
import {CalendarDays} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {getA1VocabAll, type VocabEntry} from "@/data/vocabulary/a1";
import {cn} from "@/lib/utils";

/** اختيار كلمة ثابتة لليوم (حسب رقم اليوم في السنة — لا تتغير خلال اليوم) */
function dailyWord(): VocabEntry {
  const all = getA1VocabAll();
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return all[dayOfYear % all.length];
}

/**
 * «كلمة اليوم» — كلمة حقيقية من بنك مفردات A1
 * (تتغير يومياً تلقائياً — امتدت في المرحلة 15 ببطاقة اليوم الكاملة في اللوحة)
 */
export function DailyWord() {
  const [word, setWord] = React.useState<VocabEntry | null>(null);

  React.useEffect(() => {
    setWord(dailyWord());
  }, []);

  if (!word) return null;

  const article = word.g === "der" || word.g === "die" || word.g === "das" ? word.g : null;

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border bg-background/80 px-4 py-3">
      <div className="min-w-0">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          كلمة اليوم
        </p>
        <p className="mt-0.5 truncate text-sm">
          <span className={cn("font-de font-semibold", article && "text-primary")} dir="ltr" lang="de">
            {article ? `${article} ` : ""}
            {word.de}
          </span>
          <span className="ms-2 text-muted-foreground">= {word.ar}</span>
        </p>
      </div>
      <SpeakButton text={word.de} variant="outline" size="sm" className="shrink-0" />
    </div>
  );
}

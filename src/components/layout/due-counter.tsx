"use client";

import * as React from "react";
import Link from "next/link";
import {Layers} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {getDueCards} from "@/lib/srs/flashcard-service";

/**
 * عدّاد البطاقات المستحقة اليوم في الهيدر
 * — يُحدَّث كل دقيقة وعند عودة التبويب للنشاط —
 */
export function DueCounter() {
  const [due, setDue] = React.useState<number | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const cards = await getDueCards();
        if (!cancelled) setDue(cards.length);
      } catch {
        if (!cancelled) setDue(0);
      }
    };
    void load();
    const interval = setInterval(load, 60_000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelled = true;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (due === null || due === 0) return null;

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/flashcards" aria-label="بطاقات مستحقة للمراجعة اليوم">
            <Badge variant="destructive" className="gap-1 px-2.5 py-1 font-de font-semibold">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              {due}
            </Badge>
          </Link>
        </TooltipTrigger>
        <TooltipContent>بطاقات مستحقة للمراجعة اليوم (SM-2) — اضغط للمراجعة</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

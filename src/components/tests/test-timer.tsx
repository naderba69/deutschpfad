"use client";

import {AlertTriangle} from "lucide-react";

import {cn} from "@/lib/utils";
import {formatTime} from "@/lib/tests/test-engine";

/**
 * عرض المؤقت التنازلي — يتحول للأحمر عند قرب النفاد
 */
export function TestTimer({ seconds, total }: { seconds: number; total: number }) {
  const ratio = seconds / Math.max(total, 1);
  const danger = ratio <= 0.1;
  const warn = ratio <= 0.25;

  return (
    <span
      className={cn(
        "font-de inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-bold tabular-nums",
        danger
          ? "border-destructive/50 bg-destructive/10 text-destructive animate-pulse"
          : warn
            ? "border-gold/50 bg-gold/10 text-gold-foreground"
            : "border-primary/30 bg-primary/5 text-primary",
      )}
      role="timer"
      aria-live="polite"
    >
      <AlertTriangle className="h-4 w-4" aria-hidden="true" />
      {formatTime(seconds)}
    </span>
  );
}

"use client";

import * as React from "react";
import {CheckCircle2, ListOrdered, RotateCcw, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { ListeningItem } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  ترتيب الحوار — مهارة ترتيب الخطاب (تُختبر في Goethe):
 *  أسطر الحوار مبعثرة، يضغط المتعلم عليها بالترتيب الصحيح.
 *  تصحيح فوري: أخضر للصحيح، أحمر للخطأ (ويُعاد).
 * ═══════════════════════════════════════════════════════════
 */
export function DialogueOrdering({ item }: { item: ListeningItem }) {
  const [ordered, setOrdered] = React.useState<string[]>([]);
  const [remaining, setRemaining] = React.useState<string[]>(() => shuffle(item.lines.map((l) => l.de)));
  const [lastWrong, setLastWrong] = React.useState(false);
  const [finished, setFinished] = React.useState(false);

  const correct = item.lines.map((l) => l.de);

  const pick = (line: string) => {
    if (finished) return;
    const nextIdx = ordered.length;
    if (line === correct[nextIdx]) {
      setOrdered((prev) => [...prev, line]);
      setRemaining((prev) => prev.filter((l) => l !== line));
      setLastWrong(false);
      if (nextIdx + 1 === correct.length) setFinished(true);
    } else {
      setLastWrong(true);
    }
  };

  const reset = () => {
    setOrdered([]);
    setRemaining(shuffle(item.lines.map((l) => l.de)));
    setLastWrong(false);
    setFinished(false);
  };

  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-sm font-extrabold">
          <ListOrdered className="h-4 w-4 text-primary" aria-hidden="true" />
          رتّب الحوار بالترتيب الصحيح
        </p>
        <Button variant="ghost" size="sm" onClick={reset} className="gap-1 text-xs">
          <RotateCcw className="h-3 w-3" aria-hidden="true" />
          إعادة
        </Button>
      </div>

      {/* الترتيب الحالي */}
      <div className="mb-3 min-h-16 space-y-1.5 rounded-xl border border-dashed bg-background p-3">
        {ordered.length === 0 ? (
          <p className="text-center text-xs text-muted-foreground">
            اضغط الأسطر أدناه بالترتيب الذي سمعته في الحوار.
          </p>
        ) : (
          ordered.map((line, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-success/10 px-3 py-1.5 text-sm">
              <span className="font-de shrink-0 text-xs font-extrabold text-success">{i + 1}</span>
              <span className="font-de" dir="ltr">{line}</span>
            </div>
          ))
        )}
      </div>

      {/* الأسطر المبعثرة */}
      {!finished ? (
        <div className="flex flex-wrap gap-2">
          {remaining.map((line) => (
            <button
              key={line}
              type="button"
              onClick={() => pick(line)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                "bg-background hover:border-primary/50 hover:bg-primary/5",
              )}
            >
              <span className="font-de" dir="ltr">{line}</span>
            </button>
          ))}
        </div>
      ) : (
        <p className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          أحسنت! رتّبت الحوار كاملاً بالترتيب الصحيح.
        </p>
      )}

      {lastWrong && !finished && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-destructive">
          <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
          ليس هذا الترتيب — استمع للحوار مرة أخرى وحاول.
        </p>
      )}
    </div>
  );
}

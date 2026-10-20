import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * شارة نوع الكلمة للمفردات (الدفعة 127) — عرض موحّد لحقل `g`:
 * أداة (der/die/das) بحبة ملوّنة، أو نوع الكلمة (فعل/صفة/ظرف/ضمير/أخرى)
 * بحبة محايدة. كان حقل النوع (نصف القيم!) لا يُعرض في أي موضع.
 */
const KIND_AR: Record<string, string> = {
  v: "فعل",
  adj: "صفة",
  adv: "ظرف",
  pron: "ضمير",
  other: "أخرى",
};

const ARTICLE_PILL: Record<string, string> = {
  der: "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300",
  die: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300",
  das: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
};

export function VocabKindBadge({ g, className }: { g?: string; className?: string }) {
  if (!g) return null;
  if (g === "der" || g === "die" || g === "das") {
    return (
      <span
        data-testid="vocab-kind-article"
        className={cn("rounded px-1 py-0.5 text-[11px] font-bold", ARTICLE_PILL[g], className)}
        dir="ltr"
      >
        {g}
      </span>
    );
  }
  const label = KIND_AR[g];
  if (!label) return null;
  return (
    <span
      data-testid="vocab-kind-type"
      className={cn(
        "rounded px-1 py-0.5 text-[10px] font-semibold text-muted-foreground ring-1 ring-inset ring-border",
        className,
      )}
    >
      {label}
    </span>
  );
}

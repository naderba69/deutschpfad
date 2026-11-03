import type { LevelCode } from "@/types/curriculum";

/** ألوان مستويات ذات تباين كافٍ في السمات الفاتحة والداكنة. */
export const LEVEL_BADGE_CLASSES: Record<LevelCode, string> = {
  A1: "border-sky-700/40 text-sky-700 dark:border-sky-300/50 dark:text-sky-300",
  A2: "border-emerald-700/40 text-emerald-700 dark:border-emerald-300/50 dark:text-emerald-300",
  B1: "border-amber-700/40 text-amber-700 dark:border-amber-300/50 dark:text-amber-300",
  B2: "border-violet-700/40 text-violet-700 dark:border-violet-300/50 dark:text-violet-300",
};

export const LEVEL_NUMBER_CLASSES: Record<LevelCode, string> = {
  A1: "bg-primary/10 text-primary",
  A2: "bg-gold/15 text-gold-strong",
  B1: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  B2: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

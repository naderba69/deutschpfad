"use client";

import * as React from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { useFavorites } from "@/lib/storage/use-favorites";
import type { FavoriteKind } from "@/lib/storage/favorites";

interface FavoriteButtonProps {
  kind: FavoriteKind;
  id: string;
  label?: string;
  /** نص مخصص لزر الإضافة/الإزالة لقارئ الشاشة */
  className?: string;
  size?: "sm" | "md";
}

/**
 * زر نجمة المفضلة — يبدّل حفظ العنصر (درس أو كلمة).
 * يعرض نجمة ممتلئة عند الحفظ، وشفافة عند عدم الحفظ.
 */
export function FavoriteButton({ kind, id, label, className, size = "md" }: FavoriteButtonProps) {
  const { toggle, check } = useFavorites();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(check(kind, id));
  }, [kind, id, check]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowActive = toggle(kind, id, label);
    setActive(nowActive);
  };

  const text = kind === "lesson" ? "الدرس" : "الكلمة";
  const ariaLabel = active ? `إزالة ${text} من المفضلة` : `حفظ ${text} في المفضلة`;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      title={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        size === "sm" ? "h-7 w-7" : "h-9 w-9",
        active
          ? "border-amber-300 bg-amber-50 text-amber-500 dark:border-amber-700 dark:bg-amber-950/40"
          : "border-border bg-background text-muted-foreground hover:border-amber-300 hover:text-amber-500",
        className,
      )}
    >
      <Star
        className={cn(size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4", active && "fill-current")}
        aria-hidden="true"
      />
    </button>
  );
}

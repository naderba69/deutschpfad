"use client";

import * as React from "react";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  نظام التبويبات التفصيلية — طريقة ظهور وتلقي احترافية
 *  يعرض المحتوى الأكاديمي الكامل عبر تبويبات منظمة:
 *  · كل تفصيلة بتبويب مستقل → تُرى بتركيز كامل
 *  · لا سكرول طويل ممل — تنقّل بضغطة بين الأجزاء
 *  · كل التفاصيل محفوظة 100% (لا حذف — فقط تنظيم)
 * ═══════════════════════════════════════════════════════════
 */
export function DetailTabs({
  tabs,
  className,
}: {
  tabs: { id: string; label: string; icon?: React.ReactNode; content: React.ReactNode }[];
  className?: string;
}) {
  const [active, setActive] = React.useState(0);
  const [visited, setVisited] = React.useState<Set<number>>(new Set([0]));

  const goTo = (i: number) => {
    setActive(i);
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border", className)}>
      {/* شريط التبويبات — قابل للسكرول الأفقي على الجوال */}
      <div className="flex gap-1 overflow-x-auto border-b bg-muted/20 p-1.5" role="tablist" aria-label="تفاصيل الشرح">
        {tabs.map((t, i) => {
          const isActive = i === active;
          const isVisited = visited.has(i);
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => goTo(i)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : isVisited
                    ? "bg-background text-primary hover:bg-primary/10"
                    : "bg-transparent text-muted-foreground hover:bg-background",
              )}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>

      {/* محتوى التبويب النشط — كل تفصيلة بتركيز كامل */}
      <div className="p-4" role="tabpanel">
        {tabs[active]?.content}
      </div>
    </div>
  );
}

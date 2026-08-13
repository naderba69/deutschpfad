"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Flame} from "lucide-react";
import {type HeatCell} from "@/lib/analytics/heatmap";
import {cn} from "@/lib/utils";

const DAY_LABELS = ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];
const MONTHS = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

/**
 * الخريطة الحرارية — شبيهة بـ GitHub (آخر 52 أسبوعاً)
 */
export function HeatmapChart({ cells, streak }: { cells: HeatCell[][]; streak: number }) {
  if (cells.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-sm text-muted-foreground">
          لا نشاط مسجل بعد — أكمل درساً أو تمريناً لتبدأ خريطتك!
        </CardContent>
      </Card>
    );
  }

  // أشهر الأعمدة للعرض
  const monthLabels: { index: number; label: string }[] = [];
  cells.forEach((col, i) => {
    const first = col.find((c) => c.level > 0);
    const date = first?.date ?? col[0].date;
    if (date.getDate() <= 7) {
      monthLabels.push({ index: i, label: MONTHS[date.getMonth()] });
    }
  });

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Flame className="h-5 w-5 text-orange-500" aria-hidden="true" />
          خريطة نشاطك — آخر 52 أسبوعاً
          <span className="font-de ms-auto rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
            🔥 {streak} يوم متتالي
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="overflow-x-auto">
          <div className="inline-block">
            {/* أسماء الأشهر */}
            <div className="flex gap-[3px] pb-1 ps-7">
              {monthLabels.map((m, i) => (
                <span key={i} className="w-[13px] text-[8px] text-muted-foreground">
                  {m.label}
                </span>
              ))}
            </div>
            <div className="flex gap-[3px]">
              {/* أيام الأسبوع */}
              <div className="flex w-6 flex-col gap-[3px] text-[8px] text-muted-foreground">
                {DAY_LABELS.map((d, i) => (
                  <span key={d} className="h-[13px] leading-[13px]">
                    {i % 2 === 0 ? d : ""}
                  </span>
                ))}
              </div>
              {/* الأعمدة */}
              {cells.map((col, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {col.map((cell, j) => (
                    <span
                      key={j}
                      title={`${cell.date.toLocaleDateString("ar-TN")}: ${cell.count} نشاط`}
                      className={cn(
                        "h-[13px] w-[13px] rounded-[3px]",
                        cell.level === 0 && "bg-muted/40",
                        cell.level === 1 && "bg-sky-300/50",
                        cell.level === 2 && "bg-sky-400/70",
                        cell.level === 3 && "bg-sky-500",
                        cell.level === 4 && "bg-indigo-600",
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1 ps-7 text-[9px] text-muted-foreground">
              أقل
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span key={lvl} className={cn("h-3 w-3 rounded-[3px]", lvl === 0 ? "bg-muted/40" : lvl === 1 ? "bg-sky-300/50" : lvl === 2 ? "bg-sky-400/70" : lvl === 3 ? "bg-sky-500" : "bg-indigo-600")} />
              ))}
              أكثر
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

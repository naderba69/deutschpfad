"use client";

import * as React from "react";
import {BarChart3} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getAllEventsResult} from "@/lib/analytics/events";
import {cn} from "@/lib/utils";

interface DayData {
  label: string;
  answered: number;
  correct: number;
  pct: number;
}

const DAY_LABELS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

/**
 * رسم نشاط آخر 7 أيام — أعمدة يومية بعدد التمارين + نسبة الدقة
 * يُبنى من أحداث exercise-result في IndexedDB.
 */
export function WeeklyActivityChart() {
  const [days, setDays] = React.useState<DayData[] | null>(null);
  const [readError, setReadError] = React.useState(false);

  React.useEffect(() => {
    void getAllEventsResult().then((res) => {
      if (!res.ok) {
        setReadError(true);
        return;
      }
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const buckets: DayData[] = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date(startOfToday);
        d.setDate(d.getDate() - i);
        buckets.push({
          label: DAY_LABELS[d.getDay()],
          answered: 0,
          correct: 0,
          pct: 0,
        });
      }
      for (const ev of res.events) {
        if (ev.type !== "exercise-result") continue;
        const evDate = new Date(ev.ts);
        const evStart = new Date(evDate.getFullYear(), evDate.getMonth(), evDate.getDate());
        const diffDays = Math.round((startOfToday.getTime() - evStart.getTime()) / 86400000);
        if (diffDays < 0 || diffDays > 6) continue;
        const idx = 6 - diffDays;
        buckets[idx].answered++;
        if (ev.correct) buckets[idx].correct++;
      }
      for (const b of buckets) {
        b.pct = b.answered > 0 ? Math.round((b.correct / b.answered) * 100) : 0;
      }
      setDays(buckets);
    });
  }, []);

  const maxAnswered = days ? Math.max(1, ...days.map((d) => d.answered)) : 1;
  const totalAnswered = days ? days.reduce((s, d) => s + d.answered, 0) : 0;
  const totalCorrect = days ? days.reduce((s, d) => s + d.correct, 0) : 0;
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="h-5 w-5 text-primary" aria-hidden="true" />
          نشاط آخر 7 أيام
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        {readError ? (
          <p role="alert" className="text-sm text-destructive">
            تعذرت قراءة سجل النشاط؛ لم نعرض رسماً فارغاً كأنه نتيجة مؤكدة.
          </p>
        ) : days === null ? (
          <p className="text-sm text-muted-foreground">جارٍ تحميل النشاط…</p>
        ) : totalAnswered === 0 ? (
          <p className="text-sm text-muted-foreground">
            لا نشاط مسجل في آخر 7 أيام. أجب عن بعض التمارين ليظهر رسم نشاطك هنا.
          </p>
        ) : (
          <>
            <div className="flex items-end justify-between gap-1.5" role="img" aria-label={`رسم نشاط 7 أيام: ${totalAnswered} تمريناً بدقة ${overallPct}%`}>
              {days.map((d, i) => {
                const h = Math.max(4, Math.round((d.answered / maxAnswered) * 100));
                const isToday = i === days.length - 1;
                return (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <span className="font-de text-[11px] font-bold text-muted-foreground">{d.answered}</span>
                    <div
                      className={cn(
                        "w-full rounded-t-md transition-all",
                        isToday ? "bg-primary" : "bg-primary/50",
                        d.answered === 0 && "bg-muted",
                      )}
                      style={{ height: `${h * 0.8}px` }}
                      title={`${d.label}: ${d.answered} تمريناً، دقة ${d.pct}%`}
                    />
                    <span className={cn("text-[11px]", isToday ? "font-bold text-primary" : "text-muted-foreground")}>
                      {d.label.slice(0, 3)}
                    </span>
                    {d.answered > 0 && (
                      <span className="font-de text-[11px] font-bold text-success">{d.pct}%</span>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {totalAnswered} تمريناً في 7 أيام · دقة إجمالية {overallPct}%
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}

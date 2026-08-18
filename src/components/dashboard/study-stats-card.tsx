"use client";

/**
 * بطاقة إحصائيات الدراسة — إجمالي الوقت + متوسط يومي + توزيع الأخطاء
 * (البيانات من أحداث session-minute + exercise-result)
 */
import * as React from "react";
import { AlarmClock, BarChart3, CalendarCheck2, Timer } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getStudyStats, type StudyStats } from "@/lib/analytics/session";
import { errorTypeLabel } from "@/lib/lesson/error-types";
import { formatMinutes } from "@/lib/analytics/session-format";

const ERROR_COLORS: Record<string, string> = {
  grammar: "bg-sky-500",
  conjugation: "bg-indigo-500",
  case: "bg-amber-500",
  article: "bg-rose-500",
  "word-order": "bg-violet-500",
  vocabulary: "bg-emerald-500",
  spelling: "bg-orange-500",
  preposition: "bg-cyan-500",
  negation: "bg-lime-500",
};

export function StudyStatsCard() {
  const [stats, setStats] = React.useState<StudyStats | null>(null);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      const s = await getStudyStats();
      if (mounted) setStats(s);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!stats) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="h-24 animate-pulse rounded-xl bg-muted/40" aria-hidden="true" />
        </CardContent>
      </Card>
    );
  }

  const topErrors = Object.entries(stats.errorDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);
  const maxError = topErrors[0]?.[1] ?? 0;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Timer className="h-5 w-5 text-primary" aria-hidden="true" />
          إحصائيات زمن الدراسة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border bg-background p-3">
            <AlarmClock className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
            <p className="font-de mt-1 text-lg font-extrabold text-primary">{formatMinutes(stats.totalMinutes)}</p>
            <p className="text-[11px] text-muted-foreground">إجمالي الدراسة</p>
          </div>
          <div className="rounded-xl border bg-background p-3">
            <CalendarCheck2 className="mx-auto h-5 w-5 text-gold-strong" aria-hidden="true" />
            <p className="font-de mt-1 text-lg font-extrabold">{stats.dailyAvg}د</p>
            <p className="text-[11px] text-muted-foreground">متوسط يومي (14 يوم)</p>
          </div>
          <div className="rounded-xl border bg-background p-3">
            <BarChart3 className="mx-auto h-5 w-5 text-success" aria-hidden="true" />
            <p className="font-de mt-1 text-lg font-extrabold">{stats.activeDays}</p>
            <p className="text-[11px] text-muted-foreground">يوم نشاط</p>
          </div>
        </div>

        {/* توزيع الأخطاء */}
        {topErrors.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs font-bold text-muted-foreground">أكثر أنواع أخطائك تكراراً:</p>
            {topErrors.map(([type, count]) => (
              <div key={type} className="flex items-center gap-2 text-xs">
                <span className="w-20 shrink-0 truncate font-semibold">{errorTypeLabel(type as never)}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${ERROR_COLORS[type] ?? "bg-primary"}`}
                    style={{ width: `${maxError > 0 ? (count / maxError) * 100 : 0}%` }}
                    aria-hidden="true"
                  />
                </div>
                <span className="font-de w-8 shrink-0 text-end font-bold">{count}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            ابدأ حل التمارين لتظهر لك خريطة أخطائك هنا (تُغذّي قاموس الأخطاء والمرجع).
          </p>
        )}

        <Progress value={Math.min(100, Math.round((stats.dailyAvg / 30) * 100))} aria-label="نسبة الهدف اليومي (30 د)" />
        <p className="text-[11px] text-muted-foreground">
          🎯 الهدف اليومي المقترح: 30 دقيقة — الوصول إلى {stats.dailyAvg}د حالياً.
        </p>
      </CardContent>
    </Card>
  );
}

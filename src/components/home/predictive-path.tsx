"use client";

import * as React from "react";
import {CalendarClock, TrendingUp} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {useProgress} from "@/components/providers/progress-provider";
import {LESSON_META} from "@/data/lessons/meta";

/**
 * ═══════════════════════════════════════════════════════════
 *  المسار التنبؤي — «ستصل إلى B2 في X شهر»
 *  يحسب من وتيرتك الفعلية: عدد الدروس المكتملة ÷ أيام النشاط
 *  — محفّز واقعي مبني على سلوكك لا على وعود فارغة —
 * ═══════════════════════════════════════════════════════════
 */

const TOTAL_LESSONS = LESSON_META.length;

export function PredictivePath() {
  const { completedLessonsSet, isHydrated } = useProgress();
  const [daysActive, setDaysActive] = React.useState(0);
  const [activityAvailable, setActivityAvailable] = React.useState(false);
  const [activityReadError, setActivityReadError] = React.useState(false);

  React.useEffect(() => {
    void (async () => {
      try {
        const {getActivityMapResult} = await import("@/lib/analytics/heatmap");
        const result = await getActivityMapResult();
        if (!result.ok) {
          setActivityReadError(true);
          return;
        }
        // عدد الأيام المختلفة في السجل، وليس استنتاجاً عن المستوى اللغوي.
        setDaysActive(result.activity.size);
        setActivityAvailable(true);
      } catch {
        setActivityReadError(true);
      }
    })();
  }, []);

  const done = isHydrated ? completedLessonsSet.size : 0;
  const remaining = Math.max(0, TOTAL_LESSONS - done);

  // الوتيرة: دروس في اليوم (أيام نشاط لا أيام تقويم)
  const pace = done / daysActive;
  const monthsToGoal = pace > 0 ? Math.ceil(remaining / (pace * 30)) : null;
  const canEstimate = activityAvailable && !activityReadError && done > 0 && daysActive > 0 && monthsToGoal !== null;


  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-l from-primary/[0.05] via-card to-gold/[0.05]">
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">مسارك التنبؤي</h3>
            <p className="text-[11px] text-muted-foreground">مبني على وتيرتك الفعلية — يتحدث مع كل جلسة</p>
          </div>
        </div>

        <div className="flex items-end gap-2 rounded-xl border bg-card/70 px-4 py-3">
          <CalendarClock className="mb-1 h-5 w-5 text-gold-strong" aria-hidden="true" />
          <p className="text-lg font-extrabold text-primary">
            {canEstimate ? `~${monthsToGoal} ${monthsToGoal === 1 ? "شهر" : "أشهر"}` : activityReadError ? "التقدير غير متاح" : "بانتظار بيانات كافية"}
          </p>
          <p className="pb-0.5 text-xs text-muted-foreground">
            {remaining} درساً متبقياً لإكمال المسار التعليمي المتاح
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>الوتيرة الحالية: {canEstimate ? `${pace.toFixed(1)} درس/يوم نشاط` : "لا تتوفر بيانات كافية بعد"}</span>
          <span className="font-bold text-primary">{done}/{TOTAL_LESSONS} دروس</span>
        </div>
        {activityReadError && <p role="alert" className="text-xs text-destructive">تعذرت قراءة سجل النشاط؛ لم نعرض تقديراً زمنياً مضللاً.</p>}
        <p className="text-[10px] leading-relaxed text-muted-foreground">تقدير إكمال المسار مبني على وتيرة الدروس السابقة فقط؛ لا يثبت مستوى CEFR ولا الجاهزية لامتحان رسمي.</p>
      </CardContent>
    </Card>
  );
}

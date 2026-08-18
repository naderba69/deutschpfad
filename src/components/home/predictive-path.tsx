"use client";

import * as React from "react";
import {CalendarClock, TrendingUp} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {useProgress} from "@/components/providers/progress-provider";
import {getEventStats} from "@/lib/analytics/events";
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
  const [daysActive, setDaysActive] = React.useState(1);

  React.useEffect(() => {
    void (async () => {
      try {
        const {getActivityMap, computeStreak} = await import("@/lib/analytics/heatmap");
        const activity = await getActivityMap();
        // أيام النشاط = عدد الأيام المختلفة في الخريطة (منذ أول نشاط)
        setDaysActive(Math.max(1, activity.size));
        void getEventStats();
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  const done = isHydrated ? completedLessonsSet.size : 0;
  const remaining = Math.max(0, TOTAL_LESSONS - done);

  // الوتيرة: دروس في اليوم (أيام نشاط لا أيام تقويم)
  const pace = done / daysActive;
  const monthsToGoal = pace > 0 ? Math.ceil(remaining / (pace * 30)) : 12;

  // مستوى الهدف المتبقي
  const goalLevel =
    done < 14 ? "A2" : done < 26 ? "B1" : done < 36 ? "B2" : "إتقان B2";

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
            ~{monthsToGoal} {monthsToGoal === 1 ? "شهر" : "أشهر"}
          </p>
          <p className="pb-0.5 text-xs text-muted-foreground">
            حتى تصل {goalLevel} ({remaining} درساً متبقياً)
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>الوتيرة الحالية: {pace > 0 ? `${pace.toFixed(1)} درس/يوم نشاط` : "ابدأ بدرس لتفعيل التوقع"}</span>
          <span className="font-bold text-primary">{done}/{TOTAL_LESSONS} دروس</span>
        </div>
      </CardContent>
    </Card>
  );
}

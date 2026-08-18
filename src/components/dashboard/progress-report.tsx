"use client";

/**
 * تقرير التقدم القابل للطباعة (PDF) — شهادة إنجاز شاملة
 * تُطبع عبر نافذة الطباعة (حفظ كـ PDF) بأنماط نظيفة.
 */
import * as React from "react";
import {Award, Printer} from "lucide-react";
import {TOTAL_LESSONS} from "@/lib/constants/curriculum";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProgress } from "@/components/providers/progress-provider";
import { getEventStats } from "@/lib/analytics/events";
import { getStudyStats } from "@/lib/analytics/session";
import { getCardStats } from "@/lib/srs/flashcard-service";
import { getOverallProgress } from "@/lib/progress-selectors";
import { LEVELS } from "@/lib/constants/curriculum";
import { getLevelCompletion } from "@/lib/progress-selectors";

export function ProgressReport() {
  const { completedUnits, sealedLevels, isHydrated } = useProgress();
  const [stats, setStats] = React.useState<{
    xp: number;
    accuracy: number;
    answered: number;
    reviews: number;
    lessons: number;
    studyMinutes: number;
    cards: { total: number; due: number };
  } | null>(null);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      const [s, ss, cs] = await Promise.all([getEventStats(), getStudyStats(), getCardStats()]);
      if (mounted)
        setStats({
          xp: s.xp,
          accuracy: s.accuracyPct,
          answered: s.exercisesAnswered,
          reviews: s.reviewsCount,
          lessons: s.lessonsCompleted,
          studyMinutes: ss.totalMinutes,
          cards: { total: cs.total, due: cs.due },
        });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const overall = isHydrated ? getOverallProgress(completedUnits) : 0;
  const date = new Date().toLocaleDateString("ar-TN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-5">
      {/* زر الطباعة (يُخفى عند الطباعة) */}
      <div className="flex justify-end print:hidden">
        <Button onClick={() => window.print()} className="gap-1.5">
          <Printer className="h-4 w-4" aria-hidden="true" />
          حفظ التقرير PDF / طباعة
        </Button>
      </div>

      {/* التقرير */}
      <div className="space-y-4 rounded-2xl border bg-background p-6">
        {/* الترويسة */}
        <div className="border-b pb-4 text-center">
          <p className="font-de text-3xl font-extrabold text-primary">DeutschPfad</p>
          <h1 className="mt-1 text-2xl font-extrabold">تقرير تقدمي — درب الألمانية</h1>
          {/* suppressHydrationWarning: التاريخ يختلف بين الخادم والعميل حسب المنطقة الزمنية */}
          <p className="mt-1 text-sm text-muted-foreground" suppressHydrationWarning>تاريخ التقرير: {date}</p>
        </div>

        {/* الخلاصة */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "التقدم الكلي", value: `${overall}%` },
            { label: "الدروس المكتملة", value: `${stats?.lessons ?? 0}/${TOTAL_LESSONS}` },
            { label: "نقاط الخبرة (XP)", value: `${stats?.xp ?? 0}` },
            { label: "دقة التمارين", value: `${stats?.accuracy ?? 0}%` },
            { label: "تمارين محلولة", value: `${stats?.answered ?? 0}` },
            { label: "مراجعات البطاقات", value: `${stats?.reviews ?? 0}` },
            { label: "زمن الدراسة", value: stats ? `${Math.floor(stats.studyMinutes / 60)}س ${stats.studyMinutes % 60}د` : "—" },
            { label: "بطاقات (كلي/مستحقة)", value: stats ? `${stats.cards.total}/${stats.cards.due}` : "—" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border bg-muted/20 p-3 text-center">
              <p className="font-de text-xl font-extrabold text-primary">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* المستويات */}
        <div className="space-y-2">
          <p className="text-sm font-bold">حالة المستويات:</p>
          {LEVELS.map((lvl) => {
            const comp = getLevelCompletion(completedUnits, lvl.code);
            const sealed = sealedLevels?.includes(lvl.code) || comp.pct === 100;
            return (
              <div key={lvl.code} className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm">
                <span className="font-de w-10 font-extrabold text-primary">{lvl.code}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${comp.pct}%` }} aria-hidden="true" />
                </div>
                <span className="font-de w-12 text-end font-bold">{comp.pct}%</span>
                <span className="w-20 text-end text-xs font-bold text-success">
                  {sealed ? "✅ مختوم" : comp.pct >= 80 ? "🎓 جاهز للختم" : "قيد التقدم"}
                </span>
              </div>
            );
          })}
        </div>

        {/* الخاتمة */}
        <div className="border-t pt-4 text-center text-xs text-muted-foreground">
          <Award className="mx-auto h-6 w-6 text-gold-strong" aria-hidden="true" />
          <p className="mt-1">تقرير تلقائي من منصة درب الألمانية — تقدمك يُحفظ محلياً على جهازك.</p>
          <p>المنصة تغطي المنهج الكامل A1→B2 وفق معايير Goethe-Zertifikat.</p>
        </div>
      </div>
    </div>
  );
}

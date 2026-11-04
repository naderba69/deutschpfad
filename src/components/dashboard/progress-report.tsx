"use client";

/**
 * تقرير متابعة قابل للطباعة (PDF) — لا يمثل شهادة أو تقييماً معيارياً
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
            { label: "الدروس المكتملة", value: stats ? `${stats.lessons}/${TOTAL_LESSONS}` : `—/${TOTAL_LESSONS}` },
            { label: "نقاط الخبرة (XP)", value: stats ? `${stats.xp}` : "—" },
            { label: "دقة التمارين", value: stats ? `${stats.accuracy}%` : "—" },
            { label: "تمارين محلولة", value: stats ? `${stats.answered}` : "—" },
            { label: "مراجعات البطاقات", value: stats ? `${stats.reviews}` : "—" },
            { label: "زمن الدراسة", value: stats ? `${Math.floor(stats.studyMinutes / 60)}س ${stats.studyMinutes % 60}د` : "—" },
            { label: "البطاقات (الإجمالي / المستحقة للمراجعة)", value: stats ? `${stats.cards.total} / ${stats.cards.due}` : "—" },
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
            const sealed = sealedLevels?.includes(lvl.code) ?? false;
            return (
              <div key={lvl.code} className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm">
                <span className="font-de w-10 font-extrabold text-primary">{lvl.code}</span>
                <div
                  className="h-2 flex-1 overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-label={`إكمال وحدات ${lvl.code}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={comp.pct}
                >
                  <div className="h-full rounded-full bg-primary" style={{ width: `${comp.pct}%` }} aria-hidden="true" />
                </div>
                <span className="font-de w-12 text-end font-bold">{comp.pct}%</span>
                <span className="w-20 text-end text-xs font-bold text-success">
                  {sealed ? "بوابة داخلية مكتملة" : comp.pct >= 80 ? "اختبار التقدم متاح" : "قيد التقدم"}
                </span>
              </div>
            );
          })}
        </div>

        {/* الخاتمة */}
        <div className="border-t pt-4 text-center text-xs text-muted-foreground">
          <Award className="mx-auto h-6 w-6 text-gold-strong" aria-hidden="true" />
          <p className="mt-1">تقرير متابعة تلقائي من منصة درب الألمانية. قد تختلف البيانات بحسب ما سُجل على هذا الجهاز.</p>
          <p>إكمال الوحدات أو فتح بوابة التقدم الداخلية لا يثبت مستوى CEFR أو الجاهزية لامتحان خارجي، وهذا التقرير ليس شهادة رسمية.</p>
        </div>
      </div>
    </div>
  );
}

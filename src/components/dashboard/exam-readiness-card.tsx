"use client";

/**
 * مؤشر جاهزية الامتحان (Exam Readiness) — اقتراح المرحلة النهائية
 * نسبة مركبة من ثلاثة مكونات:
 * 1) أداء الاختبارات (نتائج مستوى/أسبوعي — بنسبة 50%)
 * 2) تقدم المنهج (الوحدات المكتملة — 30%)
 * 3) انتظام المراجعة (البطاقات/المراجعات — 20%)
 */
import * as React from "react";
import {Award, BookOpenCheck, GraduationCap, Headphones, Mic, PenLine} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getRecentTestResults} from "@/lib/storage/test-results-store";
import {cn} from "@/lib/utils";

interface Props {
  completedUnits: number;
  totalUnits: number;
  reviewsCount: number;
  /** العتبة المطلوبة للوحدة/المستوى الجديد */
  goalLevel?: "A1" | "A2" | "B1" | "B2";
}

const SKILL_META: { key: string; label: string; icon: React.ReactNode }[] = [
  { key: "lesen", label: "قراءة", icon: <BookOpenCheck className="h-4 w-4" aria-hidden="true" /> },
  { key: "hören", label: "استماع", icon: <Headphones className="h-4 w-4" aria-hidden="true" /> },
  { key: "grammatik", label: "قواعد", icon: <GraduationCap className="h-4 w-4" aria-hidden="true" /> },
  { key: "schreiben", label: "كتابة", icon: <PenLine className="h-4 w-4" aria-hidden="true" /> },
  { key: "sprechen", label: "تحدث", icon: <Mic className="h-4 w-4" aria-hidden="true" /> },
];

export function ExamReadinessCard({ completedUnits, totalUnits, reviewsCount, goalLevel = "B2" }: Props) {
  const [readiness, setReadiness] = React.useState<{ pct: number; skills: Record<string, number>; hasData: boolean } | null>(null);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      const results = await getRecentTestResults(8);
      if (!mounted) return;

      // 1) أداء الاختبارات: متوسط النسب (مع إعطاء وزن أعلى للأحدث)
      let testScore = 0;
      let weightSum = 0;
      const skills: Record<string, number> = {};
      results.forEach((r, i) => {
        const w = 1 / (i + 1);
        testScore += r.overallPct * w;
        weightSum += w;
        r.skillResults?.forEach((s) => {
          if (!(s.skill in skills)) skills[s.skill] = 0;
          skills[s.skill] = Math.max(skills[s.skill], s.pct);
        });
      });
      const avgTest = weightSum > 0 ? testScore / weightSum : 0;

      // 2) تقدم المنهج
      const progress = totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0;

      // 3) انتظام المراجعة (افتراض: 30 مراجعة ≈ 100%)
      const reviewScore = Math.min(100, (reviewsCount / 30) * 100);

      const pct = Math.round(avgTest * 0.5 + progress * 0.3 + reviewScore * 0.2);
      setReadiness({ pct, skills, hasData: results.length > 0 });
    })();
    return () => {
      mounted = false;
    };
  }, [completedUnits, totalUnits, reviewsCount]);

  if (!readiness) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="h-24 animate-pulse rounded-xl bg-muted/40" aria-hidden="true" />
        </CardContent>
      </Card>
    );
  }

  const verdict =
    readiness.pct >= 85
      ? `جاهز لامتحان ${goalLevel}! 🎯 احجز موعدك بثقة`
      : readiness.pct >= 65
        ? `قريب جداً من ${goalLevel} — استمر أسبوعين آخرين`
        : readiness.pct >= 45
          ? `في منتصف الطريق نحو ${goalLevel} — واصل يومياً`
          : `تحتاج مزيداً من العمل قبل ${goalLevel} — اتبع خطة اللوحة`;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          مؤشر جاهزية الامتحان ({goalLevel})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-4">
          <p className="font-de text-5xl font-extrabold text-primary">{readiness.pct}%</p>
          <div className="min-w-0 flex-1">
            <Progress value={readiness.pct} className="h-3" aria-label={`الجاهزية ${readiness.pct}%`} />
            <p className="mt-2 text-sm font-bold">{verdict}</p>
            {!readiness.hasData && (
              <p className="mt-1 text-xs text-muted-foreground">
                لم تُجرِ اختباراً بعد — أجرِ اختبار مستوى لتفعيل الدقة الكاملة للمؤشر.
              </p>
            )}
          </div>
        </div>

        {/* تفصيل المهارات */}
        {Object.keys(readiness.skills).length > 0 && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SKILL_META.filter((s) => s.key in readiness.skills).map((s) => {
              const pct = readiness.skills[s.key];
              return (
                <div key={s.key} className="flex items-center gap-2 rounded-xl border bg-muted/20 px-3 py-2">
                  <span className="text-primary">{s.icon}</span>
                  <span className="flex-1 text-xs font-bold">{s.label}</span>
                  <Progress value={pct} className="h-1.5 w-16" />
                  <span className={cn("font-de text-xs font-extrabold", pct >= 60 ? "text-success" : "text-destructive")}>
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="outline">
            <a href="/tests/level/b2">اختبر B2 الآن</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="/tests/sprechen">الامتحان الشفهي</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="/dashboard/report">📄 تقرير PDF</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

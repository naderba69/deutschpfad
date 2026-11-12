"use client";

/**
 * ملخص مستقل لنشاط التدريب المسجل. لا يدمج أنواعاً مختلفة في درجة مركبة،
 * ولا يفسر النتائج على أنها مستوى CEFR أو جاهزية لامتحان خارجي.
 */
import * as React from "react";
import {Award, BookOpenCheck, GraduationCap, Headphones} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getRecentTestResultsResult} from "@/lib/storage/test-results-store";
import type {TestResult} from "@/types/test";

interface Props {
  completedUnits: number;
  totalUnits: number;
  reviewsCount: number | null;
  goalLevel?: "A1" | "A2" | "B1" | "B2";
}

const SKILL_LABELS: Record<string, string> = {
  lesen: "القراءة",
  hören: "الاستماع",
  grammatik: "القواعد",
  wortschatz: "المفردات",
};

export function ExamReadinessCard({completedUnits, totalUnits, reviewsCount, goalLevel = "B2"}: Props) {
  const [latest, setLatest] = React.useState<TestResult | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const [loadError, setLoadError] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    void getRecentTestResultsResult(1).then((result) => {
      if (!mounted) return;
      setLatest(result.ok ? result.value[0] ?? null : null);
      setLoadError(!result.ok);
      setLoaded(true);
    });
    return () => { mounted = false; };
  }, []);

  const unitPct = totalUnits > 0
    ? Math.min(100, Math.round((completedUnits / totalUnits) * 100))
    : 0;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          نشاطك التدريبي ({goalLevel})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <p className="text-sm text-muted-foreground">
          ملخص لمؤشرات منفصلة؛ لا تُجمع في درجة واحدة ولا تثبت مستوى CEFR أو الجاهزية لامتحان رسمي.
        </p>

        <section aria-label="تقدم الوحدات" className="space-y-2">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 font-semibold"><BookOpenCheck className="h-4 w-4" aria-hidden="true" />الوحدات المكتملة</span>
            <span dir="ltr" className="font-de tabular-nums">{completedUnits} / {totalUnits}</span>
          </div>
          <Progress value={unitPct} aria-label={`الوحدات المكتملة ${unitPct}%`} />
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-muted/20 p-3">
            <p className="flex items-center gap-2 text-xs text-muted-foreground"><GraduationCap className="h-4 w-4" aria-hidden="true" />المراجعات المسجلة</p>
            {reviewsCount === null ? (
              <p role="status" className="mt-1 text-xs text-amber-700 dark:text-amber-300">تعذر قراءة سجل المراجعات.</p>
            ) : (
              <p className="mt-1 font-de text-2xl font-bold" dir="ltr">{reviewsCount}</p>
            )}
          </div>
          <div className="rounded-xl border bg-muted/20 p-3">
            <p className="flex items-center gap-2 text-xs text-muted-foreground"><Headphones className="h-4 w-4" aria-hidden="true" />آخر اختبار محفوظ</p>
            {!loaded ? <p className="mt-1 text-sm">جارٍ التحميل…</p> : loadError ? <p role="status" className="mt-1 text-xs text-amber-700 dark:text-amber-300">تعذر قراءة نتائج الاختبارات المحفوظة.</p> : latest?.skillResults?.some((skill) => skill.skill === "schreiben") ? (
              <p className="mt-1 text-xs text-muted-foreground">المحاولة محفوظة وفق آلية تصحيح سابقة؛ أخفينا نسبتها لعدم قابليتها للمقارنة.</p>
            ) : latest ? (
              <>
                <p className="mt-1 font-de text-2xl font-bold" dir="ltr">{latest.overallPct}%</p>
                <p className="text-xs text-muted-foreground">نتيجة هذه العينة التدريبية فقط</p>
              </>
            ) : <p className="mt-1 text-sm">لا توجد نتيجة محفوظة بعد</p>}
          </div>
        </div>

        {latest?.skillResults?.some((skill) => SKILL_LABELS[skill.skill]) && (
          <section aria-label="تفصيل المهارات في آخر اختبار" className="space-y-2">
            <h3 className="text-sm font-bold">تفصيل المهارات في آخر اختبار</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {latest.skillResults.filter((skill) => SKILL_LABELS[skill.skill]).map((skill) => (
                <div key={skill.skill} className="flex items-center gap-2 rounded-xl border bg-muted/20 px-3 py-2">
                  <span className="flex-1 text-xs font-bold">{SKILL_LABELS[skill.skill]}</span>
                  <Progress value={skill.pct} className="h-1.5 w-16" aria-label={`${SKILL_LABELS[skill.skill]} ${skill.pct}%`} />
                  <span className="font-de text-xs font-extrabold" dir="ltr">{skill.pct}%</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="outline"><Link href="/tests/level/b2">تدرّب على اختبار B2</Link></Button>
          <Button asChild size="sm" variant="outline"><Link href="/tests/sprechen">تدريب شفهي</Link></Button>
          <Button asChild size="sm" variant="outline"><Link href="/dashboard/report">📄 تقرير PDF</Link></Button>
        </div>
      </CardContent>
    </Card>
  );
}

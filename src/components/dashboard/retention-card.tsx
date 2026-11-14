"use client";

/**
 * بطاقة عودية الاستخدام (Retention) — مؤشر سلوكي من سجل الأحداث المحلي.
 *
 * ما تقيسه: هل عاد المتعلم إلى التطبيق بعد يوم/أسبوع/شهر من أول نشاط؟
 * ما لا تقيسه: إتقان اللغة أو مستوى CEFR أو جاهزية امتحان. الفارق مذكور
 * داخل البطاقة نفسها حتى لا يُقرأ الرقم كدليل كفاءة لغوية.
 */
import * as React from "react";
import { CalendarClock, Info } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { computeRetention, type RetentionSummary } from "@/lib/analytics/retention";
import { getDb } from "@/lib/storage/db";

type Summaries = {
  summary: RetentionSummary;
  /** عدد الأحداث الكلي المستخدم في الحساب */
  events: number;
};

export function RetentionCard() {
  const [data, setData] = React.useState<Summaries | null>(null);
  const [readError, setReadError] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      try {
        const db = await getDb();
        const rows = await db.getAll("events");
        if (!mounted) return;
        const events = (rows as { ts?: unknown }[])
          .filter((row) => typeof row.ts === "number")
          .map((row) => ({ ts: row.ts as number }));
        setData({ summary: computeRetention(events, Date.now()), events: events.length });
      } catch {
        if (mounted) setReadError(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (readError) {
    return (
      <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
        تعذّرت قراءة سجل النشاط؛ أُخفيت مؤشرات العودية بدل عرض أرقام غير مؤكدة.
      </div>
    );
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="h-24 animate-pulse rounded-xl bg-muted/40" aria-hidden="true" />
        </CardContent>
      </Card>
    );
  }

  const { summary, events } = data;

  /** عرض ثلاثي: محقق / غير محقق / لم تكتمل النافذة — لا نظير لـ«لا» في الغياب */
  const label = (value: boolean | null, done: string, missed: string) =>
    value === null ? "لم تكتمل النافذة" : value ? done : missed;

  const rows = [
    {
      key: "d1",
      title: "اليوم التالي",
      value: label(summary.d1, "عاد", "لم يعد"),
    },
    {
      key: "d7",
      title: "اليوم السابع",
      value: label(summary.d7, "عاد", "لم يعد"),
    },
    {
      key: "d30",
      title: "اليوم الثلاثون",
      value: label(summary.d30, "عاد", "لم يعد"),
    },
    {
      key: "week",
      title: "الأسبوع التالي",
      value: label(summary.returnedNextWeek, "نشط", "لم ينشط"),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <CalendarClock className="h-5 w-5 text-indigo-500" aria-hidden="true" />
          عودية الاستخدام
        </CardTitle>
        <CardDescription>
          {summary.activeDays > 0
            ? `${summary.activeDays} يوماً نشطاً · ${summary.activeWeeks} أسبوعاً · أطول فجوة ${summary.longestGapDays} يوماً`
            : "لا نشاط مسجّل بعد — تُبنى المؤشرات من أول يوم تدرّب فيه."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {rows.map((row) => (
            <div key={row.key} className="rounded-lg border border-border/60 bg-muted/20 p-3">
              <dt className="text-xs text-muted-foreground">{row.title}</dt>
              <dd className="mt-1 text-sm font-semibold">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex items-start gap-2 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            هذا مؤشر <strong>سلوكي</strong> من سجل نشاطك على هذا الجهاز ({events} حدثاً)، وليس قياساً
            لاحتفاظ لغوي ولا دليلاً على مستوى CEFR أو جاهزية امتحان. «لم تكتمل النافذة» تعني أن
            المدة اللازمة للحكم لم تمرّ بعد، لا أنك لم تعد.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import * as React from "react";
import {CalendarRange, Loader2, Sparkles} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getEventStats} from "@/lib/analytics/events";
import {weeklyReportPrompt} from "@/lib/llm/prompts";
import {buildLocalWeeklyReport, motivationalMessage} from "@/lib/reports/weekly-report-local";
import {getRecord, putRecord} from "@/lib/storage/db";

const LAST_REPORT_KEY = "weekly-report:last-generated";
const WEEK_MS = 7 * 24 * 3600 * 1000;

/**
 * التقرير الأسبوعي — محلي دائماً + ذكي (LLM) عند توفره
 * + جدولة: يظهر تلقائياً بعد 7 أيام من آخر تقرير (اقتراح المرحلة 11)
 */
export function WeeklyReportCard() {
  const { isConfigured, callLLM } = useLLM();
  const [report, setReport] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [due, setDue] = React.useState(false);

  React.useEffect(() => {
    void getRecord<number>("settings", LAST_REPORT_KEY).then((last) => {
      if (!last || Date.now() - last >= WEEK_MS) setDue(true);
    });
  }, []);

  const generate = async () => {
    setLoading(true);
    const stats = await getEventStats();

    let content: string;
    if (isConfigured) {
      const p = weeklyReportPrompt(
        [
          `تمارين: ${stats.exercisesAnswered} (دقة ${stats.accuracyPct}%)`,
          `نطق: ${stats.pronunciationScores.length} (متوسط ${stats.pronunciationAvg ?? "—"}%)`,
          `مراجعات: ${stats.reviewsCount}`,
          `دروس: ${stats.lessonsCompleted}`,
          `أخطاء: ${Object.entries(stats.errorTypeCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k}(${v})`).join(", ")}`,
        ].join("\n"),
      );
      const r = await callLLM({
        messages: [
          { role: "system", content: p.system },
          { role: "user", content: p.user },
        ],
        purpose: "weekly-report",
      });
      content = r.ok && r.content ? r.content : buildLocalWeeklyReport(stats);
    } else {
      content = buildLocalWeeklyReport(stats);
    }

    content = `💛 ${motivationalMessage(stats)}\n\n` + content;
    setReport(content);
    setDue(false);
    await putRecord("settings", LAST_REPORT_KEY, Date.now());
    setLoading(false);
  };

  return (
    <Card className={due ? "border-gold/50" : undefined}>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarRange className="h-5 w-5 text-primary" aria-hidden="true" />
          تقريرك الأسبوعي
          {due && (
            <span className="ms-auto rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-gold-foreground animate-pulse">
              تقرير جديد جاهز ✨
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-5">
        <p className="text-sm text-muted-foreground">
          {isConfigured
            ? "التقرير الذكي يحلل نشاطك بعمق عبر المعلّم الافتراضي (أو المحلي عند نفاد الحصة)."
            : "تقرير محلي فوري من إحصائياتك — يتجدد تلقائياً كل 7 أيام."}
        </p>
        <button
          type="button"
          onClick={() => void generate()}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Sparkles className="h-4 w-4" aria-hidden="true" />}
          {loading ? "جارٍ توليد التقرير…" : due ? "ولّد تقرير أسبوعك الجديد" : "توليد/تحديث التقرير"}
        </button>

        {report && (
          <div className="whitespace-pre-wrap rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">
            {report}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

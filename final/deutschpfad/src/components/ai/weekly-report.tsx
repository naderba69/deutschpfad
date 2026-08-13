"use client";

import * as React from "react";
import {CalendarRange, Sparkles} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {Button} from "@/components/ui/button";
import {getEventStats} from "@/lib/analytics/events";
import {weeklyReportPrompt} from "@/lib/llm/prompts";

/**
 * التقرير الأسبوعي الذكي — يحلل نمط أخطاء المستخدم من الأحداث المخزنة
 */
export function AiWeeklyReport() {
  const { callLLM } = useLLM();
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const stats = await getEventStats();
    const summary = [
      `تمارين محلولة: ${stats.exercisesAnswered} (صحيحة: ${stats.exercisesCorrect} — دقة ${stats.accuracyPct}%)`,
      `تقييمات نطق: ${stats.pronunciationScores.length} (متوسط ${stats.pronunciationAvg ?? "—"}%)`,
      `مراجعات بطاقات: ${stats.reviewsCount}`,
      `دروس مكتملة: ${stats.lessonsCompleted}`,
      `نقاط XP: ${stats.xp}`,
      `أكثر الأخطاء تكراراً: ${
        Object.entries(stats.errorTypeCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([k, v]) => `${k} (${v})`)
          .join("، ") || "لا توجد"
      }`,
    ].join("\n");

    const p = weeklyReportPrompt(summary);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "weekly-report",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر توليد التقرير — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="التقرير الأسبوعي الذكي"
      description="يحلل المعلّم نشاطك ونمط أخطائك من بياناتك المحفوظة ويقترح خطة الأسبوع القادم."
      icon={<CalendarRange className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun
      buttonLabel="ولّد تقريري الأسبوعي"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <Button onClick={() => void run()} className="gap-1.5">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          ولّد تقريري الأسبوعي
        </Button>
      )}
    </AiToolShell>
  );
}

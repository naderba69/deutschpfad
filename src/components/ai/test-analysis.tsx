"use client";

import * as React from "react";
import {ClipboardList, Sparkles} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {Button} from "@/components/ui/button";
import {testAnalysisPrompt} from "@/lib/llm/prompts";
import {getLastTestResult} from "@/lib/storage/test-results-store";

const SKILL_AR: Record<string, string> = {
  grammatik: "القواعد",
  wortschatz: "المفردات",
  lesen: "القراءة",
  hören: "الاستماع",
  schreiben: "الكتابة",
  sprechen: "التحدث",
};

/**
 * «حلّل أخطائي في آخر اختبار» — اقتراح المرحلة 10:
 * المعلّم الافتراضي يحلل آخر نتيجة اختبار مخزنة ويشرحها بالسياق
 */
export function AiTestAnalysis() {
  const { callLLM } = useLLM();
  const [result, setResult] = React.useState("");
  const [hasResult, setHasResult] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    void getLastTestResult().then((r) => setHasResult(r !== null));
  }, []);

  const generate = async () => {
    const last = await getLastTestResult();
    if (!last) {
      setResult("⚠️ لا توجد نتائج اختبار محفوظة بعد — أجرِ أي اختبار أولاً ثم عد هنا لتحليل أخطائك.");
      return;
    }
    const skills = last.skillResults
      .map((s) => `${SKILL_AR[s.skill] ?? s.skill}: ${s.pct}% (مستوى ${s.level})`)
      .join("\n");
    const p = testAnalysisPrompt(last.level, skills);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "test-analysis",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر التحليل — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="حلّل أخطائي في آخر اختبار"
      description="المعلّم الافتراضي يقرأ آخر نتيجة اختبار محفوظة ويشرح أضعف مهاراتك مع خطة تقوية مخصصة."
      icon={<ClipboardList className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun
      buttonLabel="حلّل نتائجي"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => void run()} className="gap-1.5">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            حلّل آخر اختبار لي
          </Button>
          {hasResult === false && (
            <span className="text-xs text-muted-foreground">
              لا توجد نتائج بعد — أجرِ اختباراً من مركز الاختبارات أولاً.
            </span>
          )}
        </div>
      )}
    </AiToolShell>
  );
}

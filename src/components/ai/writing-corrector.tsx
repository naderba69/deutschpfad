"use client";

import * as React from "react";
import {PenLine} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
;
import {writingCorrectorPrompt} from "@/lib/llm/prompts";

const LEVELS = ["A1", "A2", "B1", "B2"];

/**
 * مصحح الكتابة الذكي — يحلل فقرة المستخدم ويشرح كل خطأ بالعربية
 */
export function AiWritingCorrector() {
  const { callLLM } = useLLM();
  const [text, setText] = React.useState("");
  const [level, setLevel] = React.useState("A2");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = writingCorrectorPrompt(text, level);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "writing-corrector",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else if (r.status === "not-configured") setResult("🔧 أضف مفاتيح LLM أولاً.");
  };

  return (
    <AiToolShell
      title="مصحح الكتابة الذكي"
      description="الصق فقرة ألمانية كتبتها — سيصححها المعلّم ويشرح كل خطأ بالعربية مع تصنيف النوع واقتراح درس للمراجعة."
      icon={<PenLine className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={text.trim().length > 10}
      buttonLabel="صحّح فقرتي"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="مستوى المتعلم">
            {LEVELS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={
                  level === l
                    ? "font-de rounded-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
                    : "font-de rounded-lg border px-3 py-1 text-xs font-bold text-muted-foreground hover:border-primary/50"
                }
              >
                {l}
              </button>
            ))}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اكتب فقرتك بالألمانية هنا… (مثال: Ich bin gestern nach Berlin gefahren und habe viel gesehen. Das Stadt ist sehr schön.)"
            dir="ltr"
            lang="de"
            rows={5}
            className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void run()}
              disabled={text.trim().length <= 10}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              صحّح فقرتي
            </button>
            <span className="text-xs text-muted-foreground">10 أحرف على الأقل</span>
          </div>
        </div>
      )}
    </AiToolShell>
  );
}

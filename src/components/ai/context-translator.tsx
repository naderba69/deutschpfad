"use client";

import * as React from "react";
import {Languages} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {contextTranslatorPrompt} from "@/lib/llm/prompts";

/**
 * المترجم الذكي السياقي — يشرح «لماذا» الترجمة الدقيقة تختلف عن الحرفية
 */
export function AiContextTranslator() {
  const { callLLM } = useLLM();
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = contextTranslatorPrompt(text.trim());
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "context-translator",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر الترجمة — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="المترجم الذكي السياقي"
      description="ترجمة دقيقة تفهم السياق — مع شرح «لماذا» تختلف عن الترجمة الحرفية وبدائل لكل سياق."
      icon={<Languages className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={text.trim().length > 2}
      buttonLabel="ترجم بذكاء"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="الصق النص الألماني هنا…"
            dir="ltr"
            lang="de"
            rows={3}
            className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={() => void run()}
            disabled={text.trim().length <= 2}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            ترجم واشرح
          </button>
        </div>
      )}
    </AiToolShell>
  );
}

"use client";

import * as React from "react";
import {ListOrdered} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {sentenceGeneratorPrompt} from "@/lib/llm/prompts";

const LEVELS = ["A1", "A2", "B1", "B2"];

/**
 * مولّد الجمل السياقية — أدخل كلمة → 5 جمل متدرجة الصعوبة
 */
export function AiSentenceGenerator() {
  const { callLLM } = useLLM();
  const [word, setWord] = React.useState("");
  const [level, setLevel] = React.useState("A2");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = sentenceGeneratorPrompt(word.trim(), level);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "sentence-generator",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر التوليد — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="مولّد الجمل السياقية"
      description="أدخل أي كلمة ألمانية — ستحصل على 5 جمل متدرجة الصعوبة (A1→B2) مع الترجمة وشرح السياق."
      icon={<ListOrdered className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={word.trim().length > 1}
      buttonLabel="ولّد الجمل"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="أدخل كلمة ألمانية… (مثال: die Freundschaft)"
              dir="ltr"
              lang="de"
              className="font-de w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
            <button
              type="button"
              onClick={() => void run()}
              disabled={word.trim().length <= 1}
              className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              توليد
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="المستوى">
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
        </div>
      )}
    </AiToolShell>
  );
}

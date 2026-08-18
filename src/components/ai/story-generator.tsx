"use client";

import * as React from "react";
import {BookHeart} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {storyGeneratorPrompt} from "@/lib/llm/prompts";

const LEVELS = ["A1", "A2", "B1", "B2"];
const LENGTHS = [
  { id: "قصيرة (5-7 جمل)", label: "قصيرة" },
  { id: "متوسطة (8-12 جملة)", label: "متوسطة" },
];

/**
 * مولّد القصص — قصص بمفردات المستوى الحالي فقط (Comprehensible Input)
 */
export function AiStoryGenerator() {
  const { callLLM } = useLLM();
  const [level, setLevel] = React.useState("A2");
  const [length, setLength] = React.useState(LENGTHS[0].id);
  const [theme, setTheme] = React.useState("رحلة إلى برلين");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const words = ["der Freund", "die Stadt", "das Café", "lernen", "gehen"].slice(0, 3 + level.length);
    const p = storyGeneratorPrompt(level, words, length);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: `${p.user}\nالموضوع/السياق: ${theme}` },
      ],
      purpose: "story-generator",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر التوليد — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="مولّد القصص المخصصة"
      description="قصة ألمانية قصيرة بمفردات مستواك فقط — اقرأها وفهمها ثم أضف مفرداتها لبطاقاتك."
      icon={<BookHeart className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun
      buttonLabel="ولّد قصة"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
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
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="موضوع القصة (رحلة، عائلة، مدينة...)"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="الطول">
            {LENGTHS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLength(l.id)}
                className={
                  length === l.id
                    ? "rounded-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
                    : "rounded-lg border px-3 py-1 text-xs font-bold text-muted-foreground hover:border-primary/50"
                }
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => void run()}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            📖 ولّد قصتي
          </button>
        </div>
      )}
    </AiToolShell>
  );
}

"use client";

import * as React from "react";
import {Dumbbell} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {exerciseGeneratorPrompt} from "@/lib/llm/prompts";

const LEVELS = ["A1", "A2", "B1", "B2"];
const TYPES = [
  { id: "اختيار من متعدد", label: "اختيار من متعدد" },
  { id: "إكمال فراغات", label: "إكمال فراغات" },
  { id: "ترتيب كلمات", label: "ترتيب كلمات" },
  { id: "تحويل جمل", label: "تحويل جمل" },
];

const TOPICS = [
  "الأفعال sein/haben/werden",
  "أدوات التعريف والنصب",
  "حروف الجر المكانية",
  "الماضي التام Perfekt",
  "الجمل الثانوية weil/dass",
  "Konjunktiv II",
  "المبني للمجهول Passiv",
  "الجمل النسبية",
  "تصريف الصفات",
  "الروابط المزدوجة",
];

/**
 * مولّد التمارين اللامنتهي — تمرين جديد كامل بمستوى وموضوع محددين
 */
export function AiExerciseGenerator() {
  const { callLLM } = useLLM();
  const [level, setLevel] = React.useState("A2");
  const [topic, setTopic] = React.useState(TOPICS[1]);
  const [type, setType] = React.useState(TYPES[0].id);
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = exerciseGeneratorPrompt(topic, level, type);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "exercise-generator",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر التوليد — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="مولّد التمارين اللامنتهي"
      description="اختر المستوى والقاعدة ونوع التمرين — سيولّد لك تمريناً جديداً كاملاً بالحل والشرح."
      icon={<Dumbbell className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun
      buttonLabel="ولّد تمريناً جديداً"
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
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            aria-label="القاعدة النحوية"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
          >
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="نوع التمرين">
            {TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                className={
                  type === t.id
                    ? "rounded-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
                    : "rounded-lg border px-3 py-1 text-xs font-bold text-muted-foreground hover:border-primary/50"
                }
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => void run()}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            🎲 ولّد تمريناً جديداً
          </button>
        </div>
      )}
    </AiToolShell>
  );
}

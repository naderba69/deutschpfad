"use client";

import * as React from "react";
import {GraduationCap, MessageCircleQuestion} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {askTeacherPrompt, cefrAssessmentPrompt} from "@/lib/llm/prompts";

const LEVELS = ["A1", "A2", "B1", "B2"];

/**
 * اسأل المعلّم — سؤال حر عن أي شيء بالألمانية
 */
export function AiAskTeacher() {
  const { callLLM } = useLLM();
  const [question, setQuestion] = React.useState("");
  const [level, setLevel] = React.useState("A2");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = askTeacherPrompt(question.trim(), level);
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "ask-teacher",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر الإجابة — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="اسأل المعلّم"
      description="أي سؤال عن الألمانية: قاعدة، كلمة، تعبير، نطق، ثقافة — أجب بالعربية مع أمثلة ألمانية."
      icon={<MessageCircleQuestion className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={question.trim().length > 2}
      buttonLabel="اسأل"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="اكتب سؤالك… (مثال: ما الفرق بين weil وdenn؟ متى أستخدم Konjunktiv II؟)"
            rows={2}
            className="w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1" role="radiogroup" aria-label="المستوى">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLevel(l)}
                  className={
                    level === l
                      ? "font-de rounded-lg bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground"
                      : "font-de rounded-lg border px-2.5 py-1 text-xs font-bold text-muted-foreground hover:border-primary/50"
                  }
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => void run()}
              disabled={question.trim().length <= 2}
              className="ms-auto rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              اسأل المعلّم
            </button>
          </div>
        </div>
      )}
    </AiToolShell>
  );
}

/**
 * تقييم مستوى الكتابة الحرة (CEFR) — فقرة → مستوى مقدر + معايير
 */
export function AiCefrAssessment() {
  const { callLLM } = useLLM();
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

  const generate = async () => {
    const p = cefrAssessmentPrompt(text.trim());
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "cefr-assessment",
    });
    if (r.ok && r.content) setResult(r.content);
    else if (r.status === "limit") setResult("⚠️ استنفدت حصتك اليومية — تعود غداً.");
    else setResult("⚠️ تعذّر التقييم — حاول مرة أخرى.");
  };

  return (
    <AiToolShell
      title="تقييم مستوى كتابتك (CEFR)"
      description="اكتب فقرة حرة بالألمانية — سيقدّر المعلّم مستواك وفق CEFR مع المعايير وخطة التقدم."
      icon={<GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={text.trim().length > 20}
      buttonLabel="قيّم مستواي"
      result={result}
      onClear={() => setResult("")}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اكتب فقرة حرة بالألمانية (5 جمل على الأقل)…"
            dir="ltr"
            lang="de"
            rows={5}
            className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={() => void run()}
            disabled={text.trim().length <= 20}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            قيّم مستواي
          </button>
        </div>
      )}
    </AiToolShell>
  );
}

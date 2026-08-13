"use client";

/**
 * مصحح الكتابة بمعايير Goethe الرسمية (Schreiben-Bewertung)
 * — المعايير الأربعة الرسمية: Erfüllung / Kohärenz / Wortschatz / Struktur —
 * كل معيار من 1-5 + نسبة مئوية + حكم (Bestanden/Gut/Sehr gut)
 * + قائمة أخطاء + توصية — كما يقيس المصححون الحقيقيون.
 */
import * as React from "react";
import {Award, BookOpenCheck, Link2, PenLine, Sparkles, Type} from "lucide-react";

import {AiToolShell} from "@/components/ai/ai-tool-shell";
import {useLLM} from "@/components/providers/llm-provider";
import {SCHREIB_MODELLE} from "@/data/schreibmodelle";
import {goetheWritingPrompt} from "@/lib/llm/prompts";
import {Progress} from "@/components/ui/progress";
import {cn} from "@/lib/utils";

const LEVELS = ["A2", "B1", "B2"];

const TASK_TYPES = [
  { id: "Forumsbeitrag", label: "Teil 1 — Forumsbeitrag (مشاركة منتدى)" },
  { id: "formelle E-Mail", label: "Teil 2 — formelle E-Mail (رسالة رسمية)" },
  { id: "Erörterung", label: "Erörterung (مقال جدلي)" },
];

const CRITERIA_KEYS = ["معيار1", "معيار2", "معيار3", "معيار4"];

interface Parsed {
  scores: { name: string; score: number; note: string }[];
  pct: number | null;
  verdict: string;
  errors: string;
  recommendation: string;
}

function parseResult(raw: string): Parsed {
  const out: Parsed = {
    scores: [],
    pct: null,
    verdict: "",
    errors: "",
    recommendation: "",
  };
  const lines = raw.split("\n");
  for (const line of lines) {
    const t = line.trim();
    for (let i = 0; i < 4; i++) {
      const key = CRITERIA_KEYS[i];
      if (t.startsWith(`###${key}:`)) {
        const body = t.slice(`###${key}:`.length).trim();
        const m = body.match(/^(.*?)\s*[—-]\s*(\d+)\s*\/\s*5$/);
        if (m) out.scores.push({ name: m[1].trim(), score: Math.min(5, Math.max(1, Number(m[2]))), note: "" });
      }
      if (t.startsWith(`###ملاحظة${i + 1}:`)) {
        const note = t.slice(`###ملاحظة${i + 1}:`.length).trim();
        if (out.scores[i]) out.scores[i].note = note;
      }
    }
    if (t.startsWith("###النسبة:")) {
      const m = t.match(/(\d+)\s*%/);
      if (m) out.pct = Math.min(100, Math.max(0, Number(m[1])));
    }
    if (t.startsWith("###الحكم:")) out.verdict = t.slice("###الحكم:".length).trim();
    if (t.startsWith("###أخطاء:")) out.errors = t.slice("###أخطاء:".length).trim();
    if (t.startsWith("###توصية:")) out.recommendation = t.slice("###توصية:".length).trim();
  }
  return out;
}

export function AiGoetheWriter() {
  const { callLLM } = useLLM();
  const [text, setText] = React.useState("");
  const [level, setLevel] = React.useState("B1");
  const [taskType, setTaskType] = React.useState("Forumsbeitrag");
  const [taskDesc, setTaskDesc] = React.useState("");
  const [raw, setRaw] = React.useState("");
  const [parsed, setParsed] = React.useState<Parsed | null>(null);

  const generate = async () => {
    const desc = taskDesc.trim() || "Schreiben Sie Ihre Meinung zu einem aktuellen Thema. Nennen Sie Gründe und ein Beispiel.";
    const p = goetheWritingPrompt({ text, level, taskType, taskDescription: desc });
    const r = await callLLM({
      messages: [
        { role: "system", content: p.system },
        { role: "user", content: p.user },
      ],
      purpose: "goethe-writer",
    });
    if (r.ok && r.content) {
      setRaw(r.content);
      setParsed(parseResult(r.content));
    } else if (r.status === "limit") {
      setRaw("⚠️ استنفدت حصتك اليومية — تعود غداً.");
      setParsed(null);
    } else if (r.status === "not-configured") {
      setRaw("🔧 أضف مفاتيح LLM أولاً من الإعدادات لتفعيل هذا المقيّم.");
      setParsed(null);
    }
  };

  // تعبئة وصف المهمة من النماذج المحفوظة
  const fillFromModel = (id: string) => {
    const m = SCHREIB_MODELLE.find((x) => x.id === id);
    if (m) {
      setTaskDesc(m.aufgabe);
      setTaskType(m.aufgabe.includes("E-Mail") || m.aufgabe.includes("formelle") ? "formelle E-Mail" : "Forumsbeitrag");
    }
  };

  return (
    <AiToolShell
      title="مقيّم الكتابة بمعايير Goethe الرسمية"
      description="اكتب Forumsbeitrag أو رسالة رسمية أو مقالاً — يحلّله المعلّم بالمعايير الأربعة الرسمية للامتحان (إنجاز المهمة، الترابط، المفردات، القواعد) مع درجة تقريبية وحكم نهائي كما يفعل المصححون."
      icon={<Award className="h-5 w-5 text-primary" aria-hidden="true" />}
      canRun={text.trim().length > 20}
      buttonLabel="قيّم كتابتي"
      result={raw}
      onClear={() => {
        setRaw("");
        setParsed(null);
      }}
      onGenerate={generate}
    >
      {(run) => (
        <div className="space-y-3">
          {/* المستوى */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-muted-foreground">المستوى المستهدف:</span>
            {LEVELS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={cn(
                  "font-de rounded-lg border px-3 py-1 text-xs font-bold transition-colors",
                  level === l ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground hover:border-primary/50",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* نوع المهمة */}
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="نوع المهمة">
            {TASK_TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTaskType(t.id)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
                  taskType === t.id ? "border-primary bg-primary/10 text-primary" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* مهمة نموذجية جاهزة */}
          <details className="rounded-xl border bg-muted/20 p-3 text-xs">
            <summary className="cursor-pointer font-bold text-primary">📋 اختر مهمة امتحانية جاهزة (من نماذج B2)</summary>
            <div className="mt-2 grid gap-1.5">
              {SCHREIB_MODELLE.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => fillFromModel(m.id)}
                  className="rounded-lg border bg-background p-2 text-start hover:border-primary/40"
                >
                  <span className="font-de font-bold" dir="ltr" lang="de">{m.topicDe}</span>
                </button>
              ))}
            </div>
          </details>

          {/* وصف المهمة */}
          <div>
            <label htmlFor="task-desc" className="mb-1 block text-xs font-bold text-muted-foreground">
              وصف المهمة (كما في الامتحان) — اختياري:
            </label>
            <textarea
              id="task-desc"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              placeholder="مثال: Sie schreiben in einem Forum: „Sollten Handys in der Schule verboten werden?“ Äußern Sie Ihre Meinung."
              dir="ltr"
              lang="de"
              rows={2}
              className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* نص المتعلم */}
          <div>
            <label htmlFor="learner-text" className="mb-1 block text-xs font-bold text-muted-foreground">
              كتابتك (بالألمانية):
            </label>
            <textarea
              id="learner-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="الصق أو اكتب مقالك/رسالتك بالألمانية هنا… (أكثر من 20 حرفاً)"
              dir="ltr"
              lang="de"
              rows={7}
              className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void run()}
              disabled={text.trim().length <= 20}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              قيّم كتابتي
            </button>
            <span className="text-xs text-muted-foreground">20 حرفاً على الأقل</span>
          </div>

          {/* لوحة الدرجات */}
          {parsed && (
            <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 font-bold text-primary">
                  <Award className="h-5 w-5" aria-hidden="true" />
                  تقييم بمعايير Goethe الرسمية
                </p>
                {parsed.pct !== null && (
                  <span className="font-de text-3xl font-extrabold text-primary">{parsed.pct}%</span>
                )}
              </div>

              {/* أشرطة المعايير الأربعة */}
              <div className="space-y-3">
                {parsed.scores.map((s, i) => (
                  <div key={i} className="rounded-xl border bg-background p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold">
                        {i === 0 && <BookOpenCheck className="inline h-4 w-4 text-primary" aria-hidden="true" />}
                        {i === 1 && <Link2 className="inline h-4 w-4 text-primary" aria-hidden="true" />}
                        {i === 2 && <Type className="inline h-4 w-4 text-primary" aria-hidden="true" />}
                        {i === 3 && <PenLine className="inline h-4 w-4 text-primary" aria-hidden="true" />}{" "}
                        <span className="font-de" dir="ltr" lang="de">{s.name}</span>
                      </p>
                      <span className="font-de text-sm font-extrabold text-primary">{s.score}/5</span>
                    </div>
                    <Progress value={(s.score / 5) * 100} className="mt-1.5 h-1.5" aria-label={`${s.name}: ${s.score}/5`} />
                    {s.note && <p className="mt-1.5 text-xs text-muted-foreground">{s.note}</p>}
                  </div>
                ))}
              </div>

              {/* الحكم */}
              {parsed.verdict && (
                <p className="rounded-xl border bg-muted/30 p-3 text-sm">
                  <span className="font-bold">الحكم: </span>
                  <span className="font-de font-bold text-primary" dir="ltr" lang="de">{parsed.verdict}</span>
                </p>
              )}

              {/* الأخطاء */}
              {parsed.errors && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <p className="font-bold text-destructive">الأخطاء:</p>
                  <p className="mt-1 whitespace-pre-line text-muted-foreground">{parsed.errors}</p>
                </div>
              )}

              {/* التوصية */}
              {parsed.recommendation && (
                <p className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
                  <span>
                    <span className="font-bold">توصية المعلّم: </span>
                    <span className="text-muted-foreground">{parsed.recommendation}</span>
                  </span>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </AiToolShell>
  );
}

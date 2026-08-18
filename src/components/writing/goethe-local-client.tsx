"use client";

/**
 * مقيّم الكتابة المحلي (بمعايير غوته) — يعمل بلا مفاتيح LLM
 * يعرض الدرجات الأربع + الأخطاء الآلية + التوصية فورياً.
 */
import * as React from "react";
import {Award, CheckCircle2, PenLine, Sparkles, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Progress} from "@/components/ui/progress";
import {evaluateWriting} from "@/lib/writing/goethe-local";
import {cn} from "@/lib/utils";

const TASK_TYPES = [
  { id: "Forumsbeitrag", label: "Teil 1 — Forumsbeitrag" },
  { id: "formelle E-Mail", label: "Teil 2 — formelle E-Mail" },
  { id: "Erörterung", label: "Erörterung (مقال)" },
];

export function GoetheLocalClient() {
  const [text, setText] = React.useState("");
  const [taskType, setTaskType] = React.useState("Forumsbeitrag");
  const [result, setResult] = React.useState<Awaited<ReturnType<typeof evaluateWriting>> | null>(null);

  const run = () => void evaluateWriting(text, taskType).then(setResult);

  return (
    <div className="space-y-5">
      {/* اختيار نوع المهمة */}
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="نوع المهمة">
        {TASK_TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTaskType(t.id)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
              taskType === t.id ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* منطقة الكتابة */}
      <div>
        <label htmlFor="goethe-text" className="mb-1 block text-xs font-bold text-muted-foreground">
          اكتب ردك بالألمانية (120-150 كلمة مثالية لـ B2):
        </label>
        <textarea
          id="goethe-text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (result) setResult(null);
          }}
          placeholder="Meiner Meinung nach ... Einerseits ... andererseits ... Zusammenfassend lässt sich sagen ..."
          dir="ltr"
          lang="de"
          rows={8}
          className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={run}
          disabled={text.trim().length < 20}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          <Award className="h-4 w-4" aria-hidden="true" />
          قيّم كتابتي الآن
        </button>
        {text.trim().length >= 20 && (
          <span className="text-xs text-muted-foreground">
            {text.trim().split(/\s+/).length} كلمة
          </span>
        )}
      </div>

      {text.trim().length < 20 && (
        <p className="text-xs text-muted-foreground">اكتب 20 حرفاً على الأقل ثم قيّم.</p>
      )}

      {/* النتائج */}
      {result && (
        <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/[0.03] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-2 font-bold text-primary">
                <Award className="h-5 w-5" aria-hidden="true" />
                مؤشرات شكلية آلية (غير تشخيصية)
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {result.words} كلمة · {result.paragraphs} فقرة · روابط: {result.connectorsFound.length}
              </p>
            </div>
            <div className="text-center">
              <p className="font-de text-4xl font-extrabold text-primary">{result.pct}%</p>
              <p className="font-de text-xs font-bold text-muted-foreground" dir="ltr" lang="de">
                {result.verdict}
              </p>
            </div>
          </div>

          {/* المعايير الأربعة */}
          <div className="space-y-3">
            {result.scores.map((s, i) => (
              <div key={i} className="rounded-xl border bg-background p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold">
                    <span className="font-de" dir="ltr" lang="de">{s.name}</span>
                  </p>
                  <span className="font-de text-sm font-extrabold text-primary">{s.score}/5</span>
                </div>
                <Progress value={(s.score / 5) * 100} className="mt-1.5 h-1.5" aria-label={`${s.name}: ${s.score}/5`} />
                <p className="mt-1.5 text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>

          {/* الأخطاء */}
          {result.errors.length > 0 ? (
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
              <p className="text-sm font-bold text-destructive">أخطاء شائعة رصدها المقيّم:</p>
              <ul className="mt-2 space-y-2">
                {result.errors.map((e: { wrong: string; right: string; note: string }, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    <span>
                      <span className="font-bold text-destructive">{e.wrong}</span>
                      {" ← "}
                      <span className="font-bold text-success">{e.right}</span>
                      <span className="block text-xs text-muted-foreground">{e.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/5 p-3 text-sm text-success">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              لا أخطاء شائعة آلية مكتشفة — ممتاز!
            </p>
          )}

          {/* التوصية */}
          <p className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
            <span>
              <span className="font-bold">توصية المعلّم: </span>
              <span className="text-muted-foreground">{result.recommendation}</span>
            </span>
          </p>

          {/* استماع للنص */}
          <div className="flex items-center gap-2 rounded-xl bg-muted/30 p-3 text-xs text-muted-foreground">
            <PenLine className="h-4 w-4" aria-hidden="true" />
            استمع لكتابتك لتسمع أخطاء الإيقاع:
            <SpeakButton text={text} variant="outline" size="sm" label="استمع لكتابتك" />
          </div>
        </div>
      )}
    </div>
  );
}

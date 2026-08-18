"use client";

import * as React from "react";
import {Award, PenLine, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {evaluateWriting} from "@/lib/writing/goethe-local";
import {cn} from "@/lib/utils";
import type { Lesson } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  الكتابة الحرة المقيّمة — مهمة كتابة لكل درس بمستواه:
 *  يكتب المتعلم 2-4 جمل حول موضوع الدرس → تقييم فوري
 *  بمعايير Goethe (Erfüllung/Kohärenz/Wortschatz/Struktur)
 *  — بلا LLM (مقيّم محلي) — يغذي مهارة Schreiben (25% من الامتحان).
 * ═══════════════════════════════════════════════════════════
 */
export function FreeWritingTrainer({ lesson }: { lesson: Lesson }) {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<Awaited<ReturnType<typeof evaluateWriting>> | null>(null);
  const [evaluating, setEvaluating] = React.useState(false);

  // مهمة الكتابة حسب مستوى الدرس
  const task = React.useMemo(() => {
    const verbs: Record<string, string> = {
      A1: "اكتب 2-3 جمل قصيرة",
      A2: "اكتب 3-4 جمل",
      B1: "اكتب فقرة من 4-5 جمل",
      B2: "اكتب فقرة من 5-6 جمل بأسلوب رسمي",
    };
    return `${verbs[lesson.level] ?? "اكتب 3 جمل"} عن: «${lesson.titleAr}». استخدم ما تعلمته في هذا الدرس (الكلمات والقواعد).`;
  }, [lesson]);

  const evaluate = () => {
    if (text.trim().length < 10) return;
    setEvaluating(true);
    // محاكاة توقيت قصير لسلاسة UI
    setTimeout(() => {
      void evaluateWriting(text.trim(), "free").then(setResult);
      setEvaluating(false);
    }, 300);
  };

  const verdictColor =
    result?.verdict === "Sehr gut"
      ? "text-success border-success/40 bg-success/5"
      : result?.verdict === "Gut"
        ? "text-gold-strong border-gold/40 bg-gold/10"
        : result?.verdict === "Bestanden"
          ? "text-primary border-primary/40 bg-primary/5"
          : "text-destructive border-destructive/30 bg-destructive/5";

  return (
    <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <PenLine className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-sm font-extrabold">✍️ مهمة الكتابة — كما في الامتحان</h4>
          <p className="mt-1 text-sm text-muted-foreground">{task}</p>
        </div>
      </div>

      <AutoGrowTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب هنا بالألمانية…"
        dir="ltr"
        aria-label="مهمة الكتابة"
        minHeight={112}
        maxHeight={240}
        className="text-sm"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          <Sparkles className="me-1 inline h-3 w-3" aria-hidden="true" />
          مؤشرات شكلية آلية (طول، روابط، مفردات، أنماط أخطاء) — لا تصدر حكماً رسمياً.
        </p>
        <Button onClick={evaluate} disabled={text.trim().length < 10 || evaluating} className="gap-1.5">
          <Award className="h-4 w-4" aria-hidden="true" />
          {evaluating ? "جارٍ التقييم…" : "قيّم كتابتي"}
        </Button>
      </div>

      {text.trim().length > 0 && text.trim().length < 10 && (
        <p className="text-xs text-muted-foreground">اكتب 10 أحرف على الأقل ليُقيَّم نصك.</p>
      )}

      {result && (
        <div className={cn("rounded-xl border p-4", verdictColor)}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-lg font-extrabold">
              المؤشر: <span className="font-de">{result.pct}%</span>
            </p>
            <p className="font-bold">الحكم: {result.verdict}</p>
          </div>
          {/* ═══ C-03: تحذير صادق — مؤشرات شكلية لا تمثل تصحيح Goethe رسمياً ═══ */}
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            ⚠️ هذه مؤشرات شكلية آلية (طول، روابط، مفردات، أنماط أخطاء) — لا تمثل تصحيحاً
            رسمياً بمعايير Goethe، ولا تصدر حكماً على مستوى CEFR. راجع نصك بنفسك واستشر معلّماً
            عند الحاجة.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
            {result.scores.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-1.5">
                <span className="text-muted-foreground">{s.name}</span>
                <span className="font-de font-bold">{s.score}/5</span>
              </div>
            ))}
          </div>

          {result.errors.length > 0 && (
            <ul className="mt-3 space-y-1 text-xs">
              {result.errors.slice(0, 4).map((err, i) => (
                <li key={i} className="text-muted-foreground">
                  {typeof err === "string" ? (
                    <>• {err}</>
                  ) : (
                    <>
                      • <span className="font-de line-through opacity-70">{err.wrong}</span>{" "}
                      ← <span className="font-de font-bold">{err.right}</span>{" "}
                      <span className="text-muted-foreground">({err.note})</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
          {result.recommendation && (
            <p className="mt-2 rounded-lg bg-background/60 px-3 py-2 text-xs font-semibold">
              💡 {result.recommendation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

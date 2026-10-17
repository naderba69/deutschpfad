"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  مراحل التطبيق الإنتاجي — مُستخرَجة من lesson-flow.tsx (المرحلة 4)
 *  الإنتاج اللغوي (كتابة جملة أصلية وتقييمها) + المحادثة المحاكاة.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import * as React from "react";
import {CheckCircle2, Headphones, PenLine, Sparkles} from "lucide-react";

import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {SpeakButton} from "@/components/shared/speak-button";
import {TextDe} from "@/components/shared/text-de";
import {Button} from "@/components/ui/button";
import type { Lesson } from "@/types/lesson";

/* ═══ مرحلة الإنتاج اللغوي (بند 11-12): يكتب جملة أصلية ويقيّمها ═══ */
export function ProductionStage({ lesson }: { lesson: Lesson }) {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<{ pct: number; verdict: string } | null>(null);
  const [evaluated, setEvaluated] = React.useState(false);

  const evaluate = () => {
    if (text.trim().length < 10) return;
    void import("@/lib/writing/goethe-local").then(async ({evaluateWriting}) => {
      const r = await evaluateWriting(text.trim(), "free");
      setResult({ pct: r.pct, verdict: r.verdict });
      setEvaluated(true);
      // إشارة أن المستخدم أنتج (يفتح التالي)
      try {
        window.dispatchEvent(new CustomEvent("dp:production-done"));
      } catch {}
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <PenLine className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-extrabold">✍️ أنتج بنفسك — اكتب جملة</h3>
          <p className="text-xs text-muted-foreground">
            هذا هو مفتاح الإتقان: اكتب 2-3 جمل أصلية عن «{lesson.titleAr}» مستخدماً ما تعلمته.
          </p>
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب هنا بالألمانية…"
        dir="rtl"
        rows={4}
        className="min-h-24 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="جملتك الأصلية"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          <Sparkles className="me-1 inline h-3 w-3" aria-hidden="true" />
          تقييم فوري بمعايير Goethe — يعمل دون إنترنت.
        </p>
        <Button onClick={evaluate} disabled={text.trim().length < 10 || evaluated} className="gap-1.5">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {evaluated ? "تم التقييم ✓" : "قيّم كتابتي"}
        </Button>
      </div>

      {evaluated && result && (
        <div className={`rounded-xl border p-4 ${
          result.pct >= 60 ? "border-success/40 bg-success/5" : "border-gold/40 bg-gold/10"
        }`}>
          <p className="text-lg font-extrabold">
            النسبة: <span className="font-de">{result.pct}%</span> · الحكم: {result.verdict}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {result.pct >= 60
              ? "أحسنت! أنتجت جملاً صحيحة — هذا هو الإتقان الحقيقي. 🎉"
              : "بداية جيدة! عدّل جملتك ثم قيّمها مجدداً."}
          </p>
        </div>
      )}
    </div>
  );
}

/* ═══ مرحلة المحادثة المحاكاة (بند 14) — رد على أسئلة بجمل من الدرس ═══ */
export function DialogueSimStage({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);

  // جمل من الدرس (من أمثلة القواعد أو الاستماع) — نبني حواراً بسيطاً
  const phrases = React.useMemo(() => {
    const fromTheory = lesson.theory.flatMap((t) => t.examples ?? []).slice(0, 3);
    return fromTheory.length > 0
      ? fromTheory.map((ex) => ({ de: ex.de, ar: ex.ar }))
      : [{ de: "Guten Tag!", ar: "طاب يومك!" }];
  }, [lesson]);

  const botReply = (i: number) =>
    i < phrases.length - 1 ? phrases[i + 1].de : "Sehr gut! Danke. 😊";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
          <Headphones className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-extrabold">💬 تحدّث معي — محادثة مصغّرة</h3>
          <p className="text-xs text-muted-foreground">
            رد على الجملة بأي رد منطقي بالألمانية — ثم اضغط «الرد التالي».
          </p>
        </div>
      </div>

      {/* فقاعة الرد */}
      <div className="space-y-2 rounded-xl border border-muted bg-muted/20 p-4">
        {step > 0 && (
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/10 px-3 py-2 text-sm">
              <TextDe text={botReply(step - 1)} />
            </div>
          </div>
        )}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-success/10 px-3 py-2 text-sm">
            <TextDe text={phrases[step].de} />
            <p className="mt-0.5 text-xs text-muted-foreground">{phrases[step].ar}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          ردّ بصوت أو كتابة — ثم تابع.
        </p>
        <div className="flex gap-2">
          <SpeakButton text={phrases[step].de} />
          <Button
            size="sm"
            onClick={() => {
              if (step < phrases.length - 1) setStep((s) => s + 1);
              else setAnswered(true);
            }}
            disabled={answered}
          >
            {answered ? "أنهيت المحادثة ✓" : step < phrases.length - 1 ? "الرد التالي" : "أنهِ المحادثة"}
          </Button>
        </div>
      </div>

      {answered && (
        <p className="rounded-lg bg-success/10 px-3 py-2 text-sm font-bold text-success">
          🎉 أتممت المحادثة — جرّبت التحدث فعلياً بهذه الجمل!
        </p>
      )}
    </div>
  );
}

"use client";

import * as React from "react";
import {Lightbulb, Loader2, Sparkles} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface ExplainAgainProps {
  lessonId: string;
  blockId: string;
  titleAr: string;
  titleDe?: string;
  explanationAr: string;
}

/**
 * زر «لم أفهم — اشرح لي بطريقة أخرى»
 * — يولّد شرحاً بديلاً مبسّطاً عبر LLM (يُخفى تلقائياً عند غياب المفاتيح) —
 * — النتيجة تُخزَّن مؤقتاً (نفس القاعدة لا تستهلك طلباً جديداً) —
 */
export function ExplainAgain({
  lessonId,
  blockId,
  titleAr,
  titleDe,
  explanationAr,
}: ExplainAgainProps) {
  const { isConfigured, callLLM } = useLLM();
  const [loading, setLoading] = React.useState(false);
  const [answer, setAnswer] = React.useState<string | null>(null);

  if (!isConfigured) return null;

  const explain = async () => {
    setLoading(true);
    setAnswer(null);
    try {
      const result = await callLLM({
        purpose: "alt-explanation",
        cacheKey: `alt-expl:${lessonId}:${blockId}`,
        messages: [
          {
            role: "system",
            content:
              "أنت معلّم ألمانية محترف للمتعلمين العرب (A1). اشرح القاعدة التالية بأسلوب مختلف وأبسط من الشرح الأصلي: استخدم تشبيهاً من الحياة اليومية، ومثالاً ألمانياً واحداً بترجمته، و«نصيحة حفظ» قصيرة. لا تتجاوز 120 كلمة. اللغة الأساسية للشرح: العربية.",
          },
          {
            role: "user",
            content: `القاعدة: ${titleAr}${titleDe ? ` (${titleDe})` : ""}\n\nالشرح الأصلي:\n${explanationAr.slice(0, 500)}`,
          },
        ],
      });
      if (result.ok && result.content) {
        setAnswer(result.content);
      } else if (result.status === "limit") {
        setAnswer(
          "⚠️ استنفدت حصتك اليومية من طلبات الذكاء الاصطناعي. غداً ستعود الحصة — أو أعد قراءة «تريك الحفظ» أعلاه (Eselsbrücke) الذي يلخص الفكرة بجملة واحدة.",
        );
      } else {
        setAnswer("⚠️ تعذّر الحصول على شرح بديل حالياً — جرّب بعد قليل.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t pt-3">
      <Button variant="ghost" size="sm" onClick={() => void explain()} disabled={loading} className="gap-1.5 text-muted-foreground hover:text-primary">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "المعلّم يفكر…" : "لم أفهم — اشرح لي بطريقة أخرى"}
      </Button>

      {answer && (
        <div
          className={cn(
            "mt-2 rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm leading-relaxed",
          )}
          role="status"
        >
          <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            شرح بديل من معلّمك الافتراضي:
          </p>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}

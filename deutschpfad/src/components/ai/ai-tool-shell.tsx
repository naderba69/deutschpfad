"use client";

import * as React from "react";
import {Loader2, Sparkles} from "lucide-react";

import {useLLM} from "@/components/providers/llm-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";

interface AiToolShellProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  /** أطفال: واجهة الإدخال + زر التشغيل */
  children: (run: () => Promise<void>) => React.ReactNode;
  onGenerate: () => Promise<void>;
  result?: string;
  /** هل هناك إدخال صالح؟ */
  canRun?: boolean;
  /** معاينة الزر */
  buttonLabel?: string;
  /** مفتاح التخزين المؤقت */
  cacheKey?: string;
  /** إعادة ضبط النتيجة */
  onClear?: () => void;
}

/**
 * غلاف موحد لأدوات الذكاء الاصطناعي:
 * زر تشغيل + حالة تحميل + عرض النتيجة + احترام الحصة اليومية
 */
export function AiToolShell({
  title,
  description,
  icon,
  children,
  onGenerate,
  result,
  canRun = true,
  buttonLabel = "توليد",
  onClear,
}: AiToolShellProps) {
  const { remaining } = useLLM();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const run = async () => {
    if (loading || !canRun) return;
    setLoading(true);
    setError(null);
    try {
      await onGenerate();
    } catch {
      setError("تعذّر التوليد — حاول لاحقاً");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
          {remaining <= 5 && remaining > 0 && (
            <span className="font-de ms-auto rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-gold-foreground">
              {remaining} طلب متبقٍ اليوم
            </span>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        {children(run)}

        {loading && (
          <div className="flex items-center gap-2 rounded-xl border bg-muted/20 p-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
            المعلّم الذكي يكتب…
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {result && (
          <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              النتيجة:
            </p>
            <div className={cn("whitespace-pre-wrap text-sm leading-relaxed")}>{result}</div>
            {onClear && (
              <button
                type="button"
                onClick={onClear}
                className="mt-3 text-xs font-semibold text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
              >
                مسح النتيجة
              </button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/** زر تشغيل موحد */
export function AiRunButton({ loading, label, disabled }: { loading: boolean; label: string; disabled?: boolean }) {
  return (
    <Button type="button" disabled={disabled || loading} className="gap-1.5">
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Sparkles className="h-4 w-4" aria-hidden="true" />}
      {loading ? "جارٍ التوليد…" : label}
    </Button>
  );
}

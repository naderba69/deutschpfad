"use client";

import {CheckCircle2, Lightbulb, RotateCcw, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {errorTypeDe, errorTypeLabel} from "@/lib/lesson/error-types";
import {cn} from "@/lib/utils";
import type { FeedbackResult } from "@/types/lesson";

interface FeedbackPanelProps {
  result: FeedbackResult | null;
  /** وضع عدم الإحباط (3 أخطاء متتالية) */
  frustrated?: boolean;
  /** هل عرض الحل؟ */
  revealed?: boolean;
  solution?: string;
  /** تلميح إضافي */
  hint?: string;
  onRetry?: () => void;
  onRevealSolution?: () => void;
  className?: string;
}

/**
 * لوحة التصحيح الفوري — تعرض:
 * — صح/خطأ مع نقاط
 * — شرح «لماذا» بالعربية
 * — تصنيف نوع الخطأ (عربي + ألماني)
 * — وضع عدم الإحباط بعد 3 أخطاء
 */
export function FeedbackPanel({
  result,
  frustrated,
  revealed,
  solution,
  hint,
  onRetry,
  onRevealSolution,
  className,
}: FeedbackPanelProps) {
  // وضع «عدم الإحباط»: شرح مبسط بديل بعد 3 أخطاء متتالية
  if (frustrated && !result?.isCorrect) {
    return (
      <div className={cn("rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-sm dark:border-amber-500/40 dark:bg-amber-500/10", className)} role="status">
        <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          لا تقلق — «وضع عدم الإحباط» مفعّل
        </div>
        <p className="mt-2 leading-relaxed text-amber-800/90 dark:text-amber-200/90">
          {hint ?? "أعد قراءة الشرح أعلاه، ثم جرّب مرة أخرى بثقة — الخطأ جزء طبيعي من التعلم!"}
        </p>
        {solution && (
          <p className="mt-2">
            الحل:{" "}
            <span className="font-de font-semibold" dir="ltr" lang="de">
              {solution}
            </span>
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {onRetry && (
            <Button size="sm" onClick={onRetry} variant="outline">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              جرّب مجدداً
            </Button>
          )}
          {onRevealSolution && (
            <Button size="sm" onClick={onRevealSolution} variant="ghost">
              أرني الحل
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (revealed) {
    return (
      <div className={cn("rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm", className)} role="status">
        <p className="font-bold text-primary">الحل الصحيح</p>
        {solution && (
          <p className="mt-2">
            <span className="font-de text-base font-semibold" dir="ltr" lang="de">
              {solution}
            </span>
          </p>
        )}
        {onRetry && (
          <Button size="sm" variant="outline" className="mt-3" onClick={onRetry}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            حل آخر
          </Button>
        )}
      </div>
    );
  }

  if (!result) return null;

  const isCorrect = result.isCorrect;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 text-sm transition-colors",
        isCorrect
          ? "border-success/40 bg-success/10"
          : "border-destructive/40 bg-destructive/10",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 font-bold",
            isCorrect ? "text-success" : "text-destructive",
          )}
        >
          {isCorrect ? (
            <>
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              إجابة صحيحة! 🎉
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" aria-hidden="true" />
              إجابة خاطئة — لا بأس، حاول مرة أخرى
            </>
          )}
        </span>
        {!isCorrect && (
          <Badge variant={result.errorType === "word-order" ? "gold" : "destructive"}>
            نوع الخطأ: {errorTypeLabel(result.errorType)}{" "}
            <span className="font-de ms-1" dir="ltr" lang="de">
              ({errorTypeDe(result.errorType)})
            </span>
          </Badge>
        )}
      </div>

      {/* شرح «لماذا» */}
      <p className="mt-2 leading-relaxed text-muted-foreground">
        <span className="font-bold text-foreground">لماذا؟ </span>
        {result.explanation}
      </p>

      {/* الإجابة الصحيحة عند الخطأ */}
      {!isCorrect && result.correctAnswer && (
        <p className="mt-2">
          الإجابة الصحيحة:{" "}
          <span className="font-de font-semibold" dir="ltr" lang="de">
            {result.correctAnswer}
          </span>
          {typeof window !== "undefined" && "speechSynthesis" in window && (
            <SpeakButton text={result.correctAnswer} size="sm" className="ms-1 align-middle" />
          )}
        </p>
      )}

      {!isCorrect && (
        <div className="mt-3 flex flex-wrap gap-2">
          {onRetry && (
            <Button size="sm" variant="outline" onClick={onRetry}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              حاول مجدداً
            </Button>
          )}
          {onRevealSolution && (
            <Button size="sm" variant="ghost" onClick={onRevealSolution}>
              أرني الحل
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

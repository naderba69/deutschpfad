"use client";

import * as React from "react";
import {AlertTriangle} from "lucide-react";

import {cn} from "@/lib/utils";
import {formatTime} from "@/lib/tests/test-engine";

/**
 * عرض المؤقت التنازلي — يتحول للأحمر عند قرب النفاد.
 *
 * ═══ الجولة الحادية عشرة (الوقت والتحديث التلقائي) ═══
 * كان العنصر `role="timer"` + `aria-live="polite"`، والنص يتغيّر كل ثانية.
 * النتيجة مع قارئ الشاشة: إعلان «34:59، 34:58، 34:57…» كل ثانية أثناء قراءة
 * السؤال — الصفحة تصير غير قابلة للاستخدام. `role="timer"` دور خامل
 * (`aria-live="off"` ضمنياً) ويُقرأ عند الطلب، لا يُقاطِع.
 *
 * بديل الإعلان: منطقة `role="status"` مخفية تُعلن **عند العتبات فقط**
 * (10 دقائق · 5 · دقيقة · 30 ثانية) وعند الانتهاء مرة واحدة.
 * ويحمل المؤقت اسماً مفهومًا («الوقت المتبقي: 34:58») لأن «34:58» وحدها
 * تُعلَن رقماً بلا معنى.
 */
const WARNING_THRESHOLDS = [600, 300, 60, 30] as const;

export function TestTimer({
  seconds,
  total,
  label = "الوقت المتبقي",
}: {
  seconds: number;
  total: number;
  label?: string;
}) {
  const ratio = seconds / Math.max(total, 1);
  const danger = ratio <= 0.1;
  const warn = ratio <= 0.25;

  const [notice, setNotice] = React.useState("");
  const announcedRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (seconds <= 0) {
      if (announcedRef.current !== 0) {
        announcedRef.current = 0;
        setNotice("انتهى الوقت المخصص لهذا القسم.");
      }
      return;
    }
    const crossed = WARNING_THRESHOLDS.find((t) => seconds === t);
    if (crossed && announcedRef.current !== crossed) {
      announcedRef.current = crossed;
      setNotice(
        crossed >= 60
          ? `بقيت ${Math.round(crossed / 60)} دقيقة على انتهاء الوقت.`
          : `بقيت ${crossed} ثانية على انتهاء الوقت.`,
      );
    }
  }, [seconds]);

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          "font-de inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-bold tabular-nums",
          danger
            ? "border-destructive/50 bg-destructive/10 text-destructive motion-safe:animate-pulse"
            : warn
              ? "border-gold/50 bg-gold/10 text-gold-foreground"
              : "border-primary/30 bg-primary/5 text-primary",
        )}
        role="timer"
        aria-label={`${label}: ${formatTime(seconds)}`}
      >
        <AlertTriangle className="h-4 w-4" aria-hidden="true" />
        {formatTime(seconds)}
      </span>
      {/* إعلان العتبات فقط — لا كل ثانية */}
      <span className="sr-only" role="status" aria-live="polite">
        {notice}
      </span>
    </span>
  );
}

"use client";

import * as React from "react";

import {cn} from "@/lib/utils";

interface AutoGrowTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** أقصى ارتفاع بالبكسل قبل ظهور شريط التمرير الداخلي */
  maxHeight?: number;
  /** أقل ارتفاع بالبكسل (مفيد لصناديق الكتابة الطويلة) */
  minHeight?: number;
  /** أقل عدد أسطر */
  minRows?: number;
  /** يُستدعى عند الضغط Enter (مع Ctrl/Shift للسماح بسطر جديد) */
  onEnter?: () => void;
}

/**
 * ═══════════════════════════════════════════════════════════
 *  صندوق نص يتمدد تلقائياً — إصلاح «النص المقطوع» على الجوال
 *
 *  ▸ المشكلة القديمة: <input type="text"> بسطر واحد — عند كتابة
 *    جملة ألمانية طويلة على الهاتف يتمرر النص أفقياً فيظهر
 *    «مقطوعاً وناقصاً» بلا قدرة على رؤية ما كُتب.
 *  ▸ الحل: textarea تتمدد مع المحتوى (حتى maxHeight) — النص
 *    يلتفّ ويظهر كاملاً، مع:
 *    · حجم خط 16px (يمنع التكبير التلقائي في iOS Safari)
 *    · اتجاه LTR للنصوص الألمانية داخل واجهة RTL
 *    · دعم Enter للإرسال (مع Ctrl/Shift لإدخال سطر جديد)
 * ═══════════════════════════════════════════════════════════
 */
export function AutoGrowTextarea({
  maxHeight = 160,
  minHeight = 44,
  minRows = 1,
  onEnter,
  className,
  onChange,
  value,
  dir = "ltr",
  ...rest
}: AutoGrowTextareaProps) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  // ═══ إعادة ضبط الارتفاع تلقائياً مع كل تغيير في النص ═══
  const autoResize = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "0px";
    const scrollH = el.scrollHeight;
    el.style.height = `${Math.min(Math.max(scrollH, minHeight), maxHeight)}px`;
    el.style.overflowY = scrollH > maxHeight ? "auto" : "hidden";
  }, [maxHeight, minHeight]);

  React.useLayoutEffect(() => {
    autoResize();
  }, [autoResize, value]);

  return (
    <textarea
      ref={ref}
      value={value}
      dir={dir}
      rows={minRows}
      onChange={(e) => {
        onChange?.(e);
        autoResize();
      }}
      onKeyDown={(e) => {
        if (onEnter && e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          onEnter();
          return;
        }
        rest.onKeyDown?.(e);
      }}
      className={cn(
        // 16px يمنع التكبير التلقائي في iOS — w-full يلتفّ النص بدل القصّ
        "w-full resize-none overflow-y-hidden rounded-xl border border-input bg-background px-3 py-2.5 text-base leading-relaxed outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring",
        className,
      )}
      {...rest}
    />
  );
}

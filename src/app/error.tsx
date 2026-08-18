"use client";

import * as React from "react";
import {AlertTriangle, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";

/**
 * حدود الأخطاء العامة — تلتقط أي خطأ وقت التشغيل في الصفحات
 * بدل شاشة Next الافتراضية/البيضاء، وتعرض رسالة ودية + إعادة محاولة.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // سجّل الخطأ للمطوّر فقط
    try {
      console.error("DeutschPfad runtime error:", error);
    } catch {
      /* تجاهل */
    }
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-background p-6">
          <div className="w-full max-w-md rounded-3xl border bg-card p-8 text-center shadow-soft">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertTriangle className="h-8 w-8" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-extrabold">حدث خطأ غير متوقع</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              عذراً، حدث خلل مؤقت في هذه الصفحة. تقدمك محفوظ بأمان على جهازك —
              أعد المحاولة أو عد للرئيسية.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              <Button onClick={reset} className="gap-2">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                أعد المحاولة
              </Button>
              <Button variant="outline" asChild>
                <a href="/">الرئيسية</a>
              </Button>
            </div>
            {process.env.NODE_ENV !== "production" && (
              <p className="mt-4 rounded-lg bg-muted/30 px-3 py-2 text-start font-mono text-[11px] leading-relaxed text-muted-foreground" dir="ltr">
                {error.message}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

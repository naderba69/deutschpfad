"use client";

import {WifiOff} from "lucide-react";


import {Button} from "@/components/ui/button";

/**
 * صفحة الانقطاع عن الإنترنت (يستخدمها الـ Service Worker)
 */
export default function OfflinePage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center">
      <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <WifiOff className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-2xl font-bold sm:text-3xl">أنت غير متصل بالإنترنت</h1>
      <p className="mt-3 max-w-md text-balance text-muted-foreground">
        لا تقلق! الدروس التي زرتها من قبل محفوظة على جهازك وتعمل دون اتصال.
        أعد الاتصال للمتابعة واستكشاف محتوى جديد.
      </p>
      <Button
        size="lg"
        className="mt-8"
        onClick={() => (typeof window !== "undefined" ? window.location.reload() : undefined)}
      >
        إعادة المحاولة
      </Button>
    </div>
  );
}

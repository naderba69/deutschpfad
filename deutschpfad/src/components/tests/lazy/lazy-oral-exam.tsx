"use client";

/**
 * تحميل كسول لمكوّن تفاعلي ثقيل — يُحمَّل عند الحاجة فقط
 * (كل مكوّن في ملف مستقل ليتمكن webpack من عزل بياناته)
 */
import dynamic from "next/dynamic";

import {Skeleton} from "@/components/ui/skeleton";

export function TestLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 rounded-2xl border bg-muted/20 p-12"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-primary border-t-transparent"
        aria-hidden="true"
      />
      <p className="text-sm text-muted-foreground">جارٍ تحميل الاختبار…</p>
    </div>
  );
}

export function PanelLoading() {
  return (
    <div className="space-y-4" aria-live="polite">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-64 w-full rounded-2xl" />
    </div>
  );
}

export const LazyOralExam = dynamic(
  () => import("@/components/tests/oral-exam").then((m) => m.OralExam),
  { loading: TestLoading, ssr: false },
);

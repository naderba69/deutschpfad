"use client";

/**
 * تحميل كسول لمحاكاة الامتحان الكامل — تُحمَّل عند فتح الصفحة فقط
 */
import dynamic from "next/dynamic";

import {Skeleton} from "@/components/ui/skeleton";

export const LazyVollPruefung = dynamic(
  () => import("@/components/tests/voll-pruefung-client").then((m) => m.VollPruefungClient),
  {
    loading: () => (
      <div className="space-y-4" aria-live="polite">
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    ),
    ssr: false,
  },
);

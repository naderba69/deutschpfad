"use client";

/**
 * تحميل كسول لامتحان الختم — يُحمَّل عند فتح الصفحة فقط
 */
import dynamic from "next/dynamic";

import {Skeleton} from "@/components/ui/skeleton";

interface LazySealProps {
  levelParam: string;
  quick?: boolean;
}

export const LazySealExam = dynamic(
  () => import("@/components/tests/seal-exam").then((m) => m.SealExam),
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

"use client";

/**
 * الامتحان الكامل بالترتيب: A1 ← A2 ← B1 ← B2.
 * هذه الصفحة هي نقطة البداية؛ كل مرحلة لها صفحتها وتعيد استخدام مكوّن الامتحان الخاص بمستواها.
 */
import Link from "next/link";
import * as React from "react";
import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  canStart,
  loadVollProgress,
  VOLL_STAGES,
  type VollStage,
} from "@/lib/tests/vollpruefung-progress";

const STAGE_INFO: Record<VollStage, string> = {
  A1: "الاستماع والقراءة مصحّحان آلياً. الكتابة والتحدث تقييم ذاتي بمعايير الممتحن.",
  A2: "الاستماع والقراءة مصحّحان آلياً. الكتابة والتحدث تقييم ذاتي بمعايير الممتحن.",
  B1: "الاستماع والقراءة مصحّحان آلياً. الكتابة والتحدث تقييم ذاتي بمعايير الممتحن.",
  B2: "قراءة وكتابة واستماع وتحدث بالمدد المرجعية (65/40/75/15 دقيقة). النتائج تقديرية للتدريب.",
};

export function VollPruefungClient() {
  // null = لم تُقرأ الحالة بعد
  const [done, setDone] = React.useState<VollStage[] | null>(null);

  React.useEffect(() => {
    setDone(loadVollProgress());
  }, []);

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="space-y-3 p-5">
          <p className="font-bold text-primary">📋 ترتيب الامتحان الكامل:</p>
          <p className="text-sm text-muted-foreground">
            أكمل المستويات بالترتيب: A1 ثم A2 ثم B1 ثم B2. تُفتح كل مرحلة بعد إكمال التي قبلها.
            يُحفظ التقدم في هذا المتصفح فقط.
          </p>
        </CardContent>
      </Card>

      <ol className="space-y-3">
        {VOLL_STAGES.map((stage, i) => {
          const isDone = done?.includes(stage) ?? false;
          const open = done !== null && canStart(stage, done);
          const status = done === null ? "" : isDone ? "مكتملة" : open ? "متاحة الآن" : "مقفلة";
          const Icon = isDone ? CheckCircle2 : open ? PlayCircle : Lock;
          return (
            <li key={stage} className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">
                  المرحلة {i + 1}: <span className="font-de">{stage}</span>
                  {status && (
                    <span className="ms-2 rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                      {status}
                    </span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{STAGE_INFO[stage]}</p>
              </div>
              {open || isDone ? (
                <Button asChild className="h-auto min-h-10 whitespace-normal">
                  <Link href={`/tests/vollpruefung/${stage}`}>{isDone ? "إعادة المرحلة" : "ابدأ المرحلة"}</Link>
                </Button>
              ) : (
                <span className="text-xs text-muted-foreground">أكمل المرحلة السابقة أولاً</span>
              )}
            </li>
          );
        })}
      </ol>

      <p className="rounded-xl border border-amber-400/50 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
        هذا تدريب داخلي وليس امتحان Goethe رسمياً، ولا تعني نتائجه نجاحاً أو شهادة. قد تختلف المدد
        والصيغ عن نسخة الجهة المنظمة، فراجع تفاصيلها لديهم قبل الامتحان.
      </p>
    </div>
  );
}

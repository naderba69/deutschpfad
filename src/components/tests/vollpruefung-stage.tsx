"use client";

/**
 * مرحلة واحدة من الامتحان الكامل (A1 ← A2 ← B1 ← B2).
 * تعيد استخدام مكوّن الامتحان نفسه لكل مستوى، وتسجّل الإكمال عند عرض النتيجة.
 */
import Link from "next/link";
import * as React from "react";

import { GoetheA1Exam } from "@/components/tests/goethe-a1-exam";
import { GoetheB2Exam } from "@/components/tests/goethe-b2-exam";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  canStart,
  loadVollProgress,
  markDone,
  saveVollProgress,
  VOLL_STAGES,
  type VollStage,
} from "@/lib/tests/vollpruefung-progress";

export function VollStageRunner({ stage }: { stage: VollStage }) {
  // null = لم تُقرأ حالة التقدم بعد (تجنّب اختلاف الخادم والمتصفح)
  const [done, setDone] = React.useState<VollStage[] | null>(null);

  React.useEffect(() => {
    setDone(loadVollProgress());
  }, []);

  React.useEffect(() => {
    if (done !== null) saveVollProgress(done);
  }, [done]);

  const onFinish = React.useCallback(() => {
    setDone((prev) => markDone(prev ?? [], stage));
  }, [stage]);

  if (done === null) {
    return <p className="text-sm text-muted-foreground">جارٍ تحميل تقدمك…</p>;
  }

  if (!canStart(stage, done)) {
    const blocker = VOLL_STAGES.find((s) => !done.includes(s)) ?? VOLL_STAGES[0];
    return (
      <Card>
        <CardContent className="space-y-3 p-5">
          <p className="font-bold">هذه المرحلة مقفلة</p>
          <p className="text-sm text-muted-foreground">
            الترتيب إلزامي: أكمل مستوى <span className="font-de font-bold">{blocker}</span> أولاً، ثم تُفتح هذه المرحلة.
          </p>
          <Button asChild>
            <Link href={`/tests/vollpruefung/${blocker}`}>الذهاب إلى {blocker}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const index = VOLL_STAGES.indexOf(stage);
  const next = VOLL_STAGES[index + 1];
  const isDone = done.includes(stage);

  return (
    <div className="space-y-6">
      {isDone && (
        <Card>
          <CardContent className="space-y-2 p-4 text-sm">
            <p className="font-bold">أكملت هذه المرحلة سابقاً.</p>
            <p className="text-muted-foreground">يمكنك إعادة التدريب، لكن الترتيب لا يتغير.</p>
          </CardContent>
        </Card>
      )}

      {stage === "B2" ? (
        <GoetheB2Exam onFinish={onFinish} />
      ) : (
        <GoetheA1Exam level={stage} onFinish={onFinish} />
      )}

      {isDone && (
        <Card>
          <CardContent className="space-y-3 p-5">
            {next ? (
              <>
                <p className="text-sm text-muted-foreground">
                  أحسنت، المرحلة التالية هي <span className="font-de font-bold">{next}</span>.
                </p>
                <Button asChild>
                  <Link href={`/tests/vollpruefung/${next}`}>المرحلة التالية: {next}</Link>
                </Button>
              </>
            ) : (
              <p className="text-sm font-bold">أكملت المستويات الأربعة بالترتيب.</p>
            )}
            <Button asChild variant="outline">
              <Link href="/tests/vollpruefung">العودة إلى صفحة الامتحان الكامل</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

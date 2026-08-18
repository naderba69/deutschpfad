"use client";

/**
 * امتحان الختم (Seal Exam) — بوابة الانتقال بين المستويات
 * لا يُفتح المستوى التالي إلا باجتياز هذا الامتحان (60% فأكثر).
 * — الأهلية: إكمال 80% من وحدات المستوى —
 */
import * as React from "react";
import {Award, Lock, PartyPopper, RotateCcw, ShieldCheck} from "lucide-react";

import {LevelTest} from "@/components/tests/level-test";
import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {LEVELS} from "@/lib/constants/curriculum";
import {canTakeSealExam, getLevelCompletion, isLevelSealed} from "@/lib/progress-selectors";
import type { TestLevel } from "@/types/test";

const LEVEL_CODE: Record<string, TestLevel> = { a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export function SealExam({ levelParam, quick = false }: { levelParam: string; quick?: boolean }) {
  const level = LEVEL_CODE[levelParam.toLowerCase()] ?? "A1";
  const meta = LEVELS.find((l) => l.code === level);

  const { completedUnits, sealedLevels, sealLevel } = useProgress();
  const [sealed, setSealed] = React.useState(false);
  const [failed, setFailed] = React.useState<number | null>(null);

  const eligible = canTakeSealExam(completedUnits, level);
  const alreadySealed = isLevelSealed(completedUnits, level, sealedLevels ?? []) || sealed;
  const completion = getLevelCompletion(completedUnits, level);

  const handleComplete = React.useCallback(
    (result: { passed: boolean; overallPct: number }) => {
      if (result.passed) {
        sealLevel(level);
        setSealed(true);
        setFailed(null);
      } else {
        setFailed(result.overallPct);
      }
    },
    [level, sealLevel],
  );

  /* ── غير مؤهل بعد ── */
  if (!eligible && !alreadySealed) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-8 text-center">
          <Lock className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-extrabold">امتحان ختم {level} غير متاح بعد</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            تحتاج إكمال <span className="font-bold">{meta?.unlockThreshold}%</span> من وحدات
            المستوى قبل التمكن من الامتحان. تقدمك الحالي:{" "}
            <span className="font-bold text-primary">{completion.pct}%</span>.
          </p>
          <Progress value={completion.pct} className="mx-auto mt-4 max-w-sm" aria-label={`تقدم مستوى ${level}`} />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="/learning-path">العودة إلى مسار التعلم</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ── مختوم بنجاح ── */
  if (alreadySealed) {
    return (
      <Card className="overflow-hidden border-success/40 bg-success/5">
        <CardContent className="p-8 text-center">
          <PartyPopper className="mx-auto h-14 w-14 text-success" aria-hidden="true" />
          <h3 className="mt-4 text-2xl font-extrabold text-success">
            🏅 مستوى {level} مختوم!
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            اجتزت امتحان الختم — المستوى التالي مفتوح الآن. يمكنك إعادة الامتحان في أي وقت
            لتحسين نتيجتك أو مراجعة مهاراتك.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="/learning-path">متابعة التعلم</a>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setSealed(false);
                setFailed(null);
              }}
              className="gap-1.5"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              إعادة الامتحان
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ── فشل سابق ── */
  if (failed !== null) {
    return (
      <Card className="overflow-hidden border-destructive/40 bg-destructive/5">
        <CardContent className="p-8 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-destructive" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-extrabold text-destructive">
            نتيجتك {failed}% — تحتاج 60% للختم
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            لا بأس — هذه هي طبيعة الامتحانات. راجع المهارات الأضعف من لوحة النتائج، ثم أعد
            المحاولة. يمكنك أيضاً مراجعة الدروس والقواعد المرتبطة.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={() => setFailed(null)} className="gap-1.5">
              <Award className="h-4 w-4" aria-hidden="true" />
              إعادة محاولة الامتحان
            </Button>
            <Button variant="outline" asChild>
              <a href="/dashboard/review">المراجعة أولاً</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* ── الامتحان ── */
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <p className="font-bold text-gold-foreground">🏅 امتحان ختم مستوى {level}</p>
        <p className="mt-1 text-muted-foreground">
          تدريب تجريبي مستوحى من بنية Goethe-Zertifikat {level} (ليس امتحاناً رسمياً): قراءة + استماع + قواعد + كتابة بتوقيت حقيقي.
          <span className="font-bold"> النجاح من 60%</span> — عند النجاح يُختَم المستوى ويُفتح
          التالي تلقائياً. لديك محاولة واحدة في كل مرة؛ إن فشلت، راجع وعد.
        </p>
      </div>
      <LevelTest level={level} onComplete={handleComplete} quick={quick} />
    </div>
  );
}

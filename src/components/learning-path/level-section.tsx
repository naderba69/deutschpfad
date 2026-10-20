"use client";

import * as React from "react";
import {ChevronDown, Layers} from "lucide-react";

import {UnitRow} from "@/components/learning-path/unit-row";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {canTakeSealExam, getUnitStatus, isLevelSealed} from "@/lib/progress-selectors";
import type { LevelCode, LevelCompletion, LevelMeta, Unit } from "@/types/curriculum";
import {cn} from "@/lib/utils";

interface LevelSectionProps {
  level: LevelMeta;
  completion: LevelCompletion;
  units: Unit[];
  /** مجموعة الوحدات المكتملة (لحساب حالة كل وحدة) */
  completed: string[];
  /** المستويات المختومة بامتحان الختم */
  sealed?: LevelCode[];
  /** هل المستوى هو المستوى النشط حالياً؟ */
  isActive: boolean;
  onToggleUnit: (unitId: string) => void;
}

/**
 * بطاقة مستوى داخل خارطة الطريق — قابلة للطي تعرض وحدات المستوى
 * + حالة امتحان الختم (لا انتقال للمستوى التالي إلا باجتيازه)
 */
export function LevelSection({
  level,
  completion,
  units,
  completed,
  sealed = [],
  isActive,
  onToggleUnit,
}: LevelSectionProps) {
  const [expanded, setExpanded] = React.useState(isActive);
  const pct = completion.pct;
  const levelSealed = isLevelSealed(completed, level.code, sealed);
  const sealReady = canTakeSealExam(completed, level.code);

  return (
    <Card
      id={level.code.toLowerCase()}
      className="scroll-mt-24 overflow-hidden transition-shadow hover:shadow-soft"
    >
      {/* شريط علوي بلون المستوى */}
      <div className={`h-1.5 w-full bg-gradient-to-l ${level.gradient}`} aria-hidden="true" />

      <CardContent className="p-0">
        {/* رأس البطاقة */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start transition-colors hover:bg-muted/40"
        >
          <div className="flex min-w-0 items-center gap-4">
            <span className="text-3xl" aria-hidden="true">
              {level.emoji}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="font-de font-bold"
                  style={{ color: level.accent, borderColor: `${level.accent}66` }}
                >
                  {level.code}
                </Badge>
                <LangDe className="text-lg font-bold">{level.titleDe}</LangDe>
                <span className="text-sm font-medium text-muted-foreground">
                  — {level.titleAr}
                </span>
                {isActive && (
                  <Badge variant="gold" className="text-[11px]">
                    مستواك الحالي
                  </Badge>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  {level.units} وحدات · {level.words}+ كلمة
                </span>
                <span className="font-de">
                  {completion.completed}/{completion.total} مكتملة
                </span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden w-36 sm:block">
              <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
                <span>التقدم</span>
                <span className="font-de font-semibold">{pct}%</span>
              </div>
              <Progress value={pct} aria-label={`تقدم مستوى ${level.code}: ${pct}%`} />
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-muted-foreground transition-transform duration-300",
                expanded && "rotate-180",
              )}
              aria-hidden="true"
            />
          </div>
        </button>

        {/* شريط امتحان الختم — بوابة الانتقال للمستوى التالي */}
        <div className="border-t bg-muted/10 px-6 py-3">
          {levelSealed ? (
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-success">
                ✅ مستوى مختوم
              </span>
              <span className="text-muted-foreground">
                اجتزت امتحان ختم {level.code} — يمكنك الانتقال إلى المستوى التالي.
              </span>
            </p>
          ) : isActive && sealReady ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                🎓 أكملت <span className="font-bold">{pct}%</span> من وحدات {level.code} — أنت
                جاهز لامتحان الختم! اجتزه لفتح المستوى التالي.
              </p>
              <a
                href={`/tests/seal/${level.code.toLowerCase()}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
              >
                🏅 امتحان ختم {level.code}
              </a>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              🔒 <span className="font-bold">امتحان الختم:</span> أكمل{" "}
              <span className="font-bold">{level.unlockThreshold}%</span> من وحدات {level.code} ثم
              اجتز الامتحان لفتح المستوى التالي (التقدم الحالي: {pct}%).
            </p>
          )}
        </div>

        {/* قائمة الوحدات */}
        {expanded && (
          <div className="space-y-2 border-t bg-muted/20 px-4 py-4 sm:px-6">
            {units.map((unit) => (
              <UnitRow
                key={unit.id}
                unit={unit}
                status={getUnitStatus(completed, unit, sealed)}
                onToggle={onToggleUnit}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

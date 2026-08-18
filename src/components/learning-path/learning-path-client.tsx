"use client";

import * as React from "react";
import {Eraser, Flag, Info, Rocket, Sparkles} from "lucide-react";

import {LevelSection} from "@/components/learning-path/level-section";
import {SequentialPath} from "@/components/learning-path/sequential-path";
import {WindingPath} from "@/components/learning-path/winding-path";
import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Skeleton} from "@/components/ui/skeleton";
import {LEVELS, TOTAL_UNITS, getUnitsByLevel} from "@/lib/constants/curriculum";
import {cn} from "@/lib/utils";
import type { LevelCode } from "@/types/curriculum";
import {getActiveLevel, getLevelCompletion, getOverallProgress} from "@/lib/progress-selectors";

/**
 * عميل خارطة الطريق — يحمل كل المنطق التفاعلي
 * (التقدم من مخزن LocalStorage عبر ProgressProvider)
 */
export function LearningPathClient() {
  const { completedUnits, sealedLevels, isHydrated, toggleUnit, completeUnit, uncompleteUnit, resetProgress, completedLessonsSet } =
    useProgress();

  const overallPct = isHydrated ? getOverallProgress(completedUnits) : 0;
  const activeLevel = isHydrated ? getActiveLevel(completedUnits, sealedLevels) : "A1";
  // مستوى الخريطة المتعرجة المحدد (يبدأ من مستوى المستخدم النشط)
  const [mapLevel, setMapLevel] = React.useState<LevelCode>(activeLevel);
  React.useEffect(() => {
    if (isHydrated) setMapLevel(activeLevel as LevelCode);
  }, [isHydrated, activeLevel]);

  const handleToggle = (unitId: string) => toggleUnit(unitId);

  /** تجربة سريعة: إكمال أول وحدة من كل مستوى مفتوح */
  const completeFirstUnits = () => {
    for (const level of LEVELS) {
      const first = getUnitsByLevel(level.code)[0];
      if (first && getUnitUnlockedForDemo(first)) completeUnit(first.id);
    }
  };

  /** هل الوحدة مفتوحة؟ (نسخة مبسطة لزر التجربة) */
  function getUnitUnlockedForDemo(unit: { level: string; number: number }): boolean {
    const active = getActiveLevel(completedUnits, sealedLevels);
    const levelIdx = LEVELS.findIndex((l) => l.code === unit.level);
    const activeIdx = LEVELS.findIndex((l) => l.code === active);
    return levelIdx <= activeIdx;
  }

  const confirmReset = () => {
    if (typeof window !== "undefined" && window.confirm("هل تريد مسح كل تقدمك المحفوظ على هذا الجهاز؟")) {
      resetProgress();
    }
  };

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-40 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* ملخص التقدم */}
      <Card className="overflow-hidden">
        <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-bold">تقدمك في المنهج</h2>
            </div>
            <div className="flex items-center gap-4">
              <Progress
                value={overallPct}
                className="h-3"
                aria-label={`التقدم الإجمالي: ${overallPct}%`}
              />
              <span className="font-de shrink-0 text-xl font-extrabold text-primary">
                {overallPct}%
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              أكملت{" "}
              <span className="font-de font-semibold text-foreground">
                {completedUnits.length}
              </span>{" "}
              من أصل{" "}
              <span className="font-de font-semibold text-foreground">{TOTAL_UNITS}</span> وحدة.
              مستواك الحالي:{" "}
              <span className="font-de font-semibold text-primary">{activeLevel}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={completeFirstUnits}
              className="justify-start"
            >
              <Rocket className="h-4 w-4 text-primary" aria-hidden="true" />
              تجربة سريعة: افتح أول وحدة بكل مستوى
            </Button>
            <Button variant="ghost" size="sm" onClick={confirmReset} className="justify-start text-destructive hover:text-destructive">
              <Eraser className="h-4 w-4" aria-hidden="true" />
              إعادة تعيين التقدم
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ═══ الخريطة المتعرجة (Path) — رؤية Duolingo للمسار ═══ */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-1.5 text-sm font-extrabold">
            🗺️ خريطة المسار المتعرجة — درساً بدرس
          </h2>
          <div className="flex gap-1 rounded-full border bg-muted/40 p-0.5">
            {LEVELS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setMapLevel(l.code)}
                className={cn(
                  "font-de rounded-full px-3 py-1.5 text-xs font-extrabold transition-colors",
                  mapLevel === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary",
                )}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
        <WindingPath level={mapLevel} completedLessons={completedLessonsSet} />
      </div>

      {/* ═══ المسار الكامل درساً بدرس (المنهجية المرتبة) ═══ */}
      <SequentialPath />

      {/* قائمة المستويات (نظرة عامة على الوحدات) */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="text-sm font-bold text-muted-foreground">
            نظرة عامة على الوحدات (مع تقدمك وامتحان الختم)
          </h2>
        </div>
        <div className="space-y-5">
          {LEVELS.map((level) => (
            <LevelSection
              key={level.code}
              level={level}
              completion={getLevelCompletion(completedUnits, level.code)}
              sealed={sealedLevels ?? []}
              units={getUnitsByLevel(level.code)}
              completed={completedUnits}
              isActive={level.code === activeLevel}
              onToggleUnit={handleToggle}
            />
          ))}
        </div>
      </div>

      {/* ملاحظة الحفظ المحلي */}
      <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-gold-strong" aria-hidden="true" />
        تقدمك يُحفظ تلقائياً في متصفحك (LocalStorage) — ويعمل دون اتصال بالإنترنت.
      </p>
    </div>
  );
}

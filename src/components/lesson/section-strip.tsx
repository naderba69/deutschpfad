"use client";

/**
 * شريط أقسام الدرس — مستقل عن `lesson-client` لأن له سلوكاً خاصاً على الجوال:
 * ستة عشر قسماً لا تتسع لها شاشة 390px، والشريط أفقي بلا مؤشر تمرير ظاهر.
 *
 * العيب الذي أصلحه هذا الملف (أُمسك بلقطة شاشة حقيقية بمتصفح Chromium):
 * كان الشريط يبقى على أوله دائماً، فيصل المتعلّم إلى القسم العاشر وزرّه خارج
 * الشاشة بلا أي إشارة — أي أنه يرى «8/16» ولا يرى مكانه في الشريط.
 */
import * as React from "react";

import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { LESSON_PHASES, lessonPhaseOfSection } from "@/lib/session/lesson-phases";

export type SectionDef = {
  id: string;
  short: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
};

interface Props {
  sectionDefs: SectionDef[];
  currentSection: number;
  visited: Set<string>;
  stepMode: boolean;
  /** لاصق في وضع «عرض الكل» فقط، كي لا يتكدس فوق شريط التقدم في وضع الخطوات */
  sticky: boolean;
  onSelect: (index: number) => void;
}

/**
 * يُبقي القسم النشط مرئياً (في وسط الشريط) بعد كل انتقال.
 *
 * الحساب **نسبي بالبكسل** لا مطلق: في RTL يكون `scrollLeft` سالباً، وأي حساب
 * يعتمد على `offsetLeft` يثبّت الشريط على الصفر (وهو ما حدث في المحاولة الأولى).
 */
function useCenterActiveSection(
  stripRef: React.RefObject<HTMLDivElement | null>,
  activeRef: React.RefObject<HTMLButtonElement | null>,
  currentSection: number,
) {
  React.useEffect(() => {
    const strip = stripRef.current;
    const active = activeRef.current;
    if (!strip || !active) return;
    if (strip.scrollWidth <= strip.clientWidth) return; // لا تمرير مطلوب (سطح مكتب)
    const stripBox = strip.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    const delta = activeBox.left + activeBox.width / 2 - (stripBox.left + stripBox.width / 2);
    if (Math.abs(delta) < 1) return;
    strip.scrollBy({ left: delta, behavior: "smooth" });
  }, [stripRef, activeRef, currentSection]);
}

export function SectionStrip({ sectionDefs, currentSection, visited, stepMode, sticky, onSelect }: Props) {
  const stripRef = React.useRef<HTMLDivElement | null>(null);
  const activeRef = React.useRef<HTMLButtonElement | null>(null);
  useCenterActiveSection(stripRef, activeRef, currentSection);

  const currentPhaseId = sectionDefs[currentSection] ? lessonPhaseOfSection(sectionDefs[currentSection].id)?.id : undefined;
  const phaseRows = LESSON_PHASES.map((phase) => {
    const items = sectionDefs.filter((d) => lessonPhaseOfSection(d.id)?.id === phase.id);
    return { phase, total: items.length, done: items.filter((d) => visited.has(d.id)).length };
  }).filter((row) => row.total > 0);

  return (
    <div
      className={cn(
        "-mx-4 mb-6 border-y bg-background/90 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border",
        sticky && "sticky top-16 z-30",
      )}
    >
      {/* مراحل الدرس الأربع: تجميع للعرض فقط، دون تغيير في الفتح أو الترتيب */}
      <ol className="mb-2 grid gap-1 text-center text-[11px]" style={{ gridTemplateColumns: `repeat(${phaseRows.length}, minmax(0, 1fr))` }} aria-label="مراحل الدرس">
        {phaseRows.map(({ phase, total, done }) => {
          const isCurrent = phase.id === currentPhaseId;
          return (
            <li
              key={phase.id}
              aria-current={isCurrent ? "step" : undefined}
              className={cn(
                "rounded-md border px-1.5 py-1 font-bold",
                isCurrent ? "border-primary/60 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground",
              )}
            >
              {phase.labelAr}
              <span className="ms-1 font-normal tabular-nums">{done}/{total}</span>
            </li>
          );
        })}
      </ol>
      <div
        ref={stripRef}
        className="flex snap-x snap-mandatory gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:snap-none"
        role="tablist"
        aria-label="أقسام الدرس"
      >
        {sectionDefs.map((def, i) => {
          const isVisited = visited.has(def.id);
          const isCurrent = i === currentSection;
          const startsPhase = i > 0 && lessonPhaseOfSection(def.id)?.id !== lessonPhaseOfSection(sectionDefs[i - 1].id)?.id;
          return (
            <button
              key={def.id}
              ref={isCurrent ? activeRef : undefined}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              aria-current={isCurrent ? "step" : undefined}
              onClick={() => onSelect(i)}
              disabled={stepMode && !isVisited && !isCurrent}
              title={
                stepMode && !isVisited && !isCurrent
                  ? "أتمّ القسم الحالي لفتح هذا القسم — لا تخطي في المسار"
                  : undefined
              }
              className={cn(
                "flex shrink-0 snap-start items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors",
                startsPhase && "ms-3",
                isCurrent
                  ? "border-primary bg-primary text-primary-foreground"
                  : isVisited
                    ? "border-success/40 bg-success/10 text-success hover:border-success/60"
                    : stepMode
                      ? "cursor-not-allowed bg-muted/20 text-muted-foreground/50"
                      : "bg-muted/40 text-muted-foreground hover:border-primary/40",
              )}
            >
              <def.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {def.short}
              {isVisited && !isCurrent && <CheckCircle2 className="h-3 w-3" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

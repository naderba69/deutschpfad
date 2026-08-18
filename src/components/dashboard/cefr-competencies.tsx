"use client";

import * as React from "react";
import Link from "next/link";
import {BarChart3, BookCheck, Info, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {computeConceptMastery, computeSkillStats, CONCEPTS_BY_LEVEL, CONCEPT_TO_LESSON, SKILLS, type ConceptMastery, type SkillStat} from "@/lib/competencies";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  كفايات CEFR + مؤشر الإتقان النحوي
 *  1) ست مهارات مع «أنت هنا» بمستوى CEFR (A1→B2) من أدائك الفعلي
 *  2) إتقان المفاهيم النحوية (نسبة + «أتقنته» عند 80%+)
 *  — قياس حقيقي يثبت التقدم لا مجرد شارات —
 * ═══════════════════════════════════════════════════════════
 */
export function CefrCompetencies() {
  const [skills, setSkills] = React.useState<SkillStat[]>([]);
  const [concepts, setConcepts] = React.useState<ConceptMastery[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [s, c] = await Promise.all([computeSkillStats(), computeConceptMastery()]);
      if (cancelled) return;
      setSkills(s);
      setConcepts(c);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="h-64 animate-pulse rounded-2xl border bg-muted/30" />;

  const hasData = skills.some((s) => s.total > 0);
  const masteredCount = concepts.filter((c) => c.mastered).length;

  return (
    <div className="space-y-4">
      {/* المهارات الست */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
          <p className="text-sm font-extrabold">كفاياتك حسب معايير CEFR</p>
          <span className="ms-auto text-[11px] font-bold text-muted-foreground">من أدائك الفعلي في التمارين</span>
        </div>

        {!hasData ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد بيانات بعد — أكمل دروسك وتمارينك وستظهر كفاياتك هنا تلقائياً.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {skills.map((s) => {
              const color = SKILLS.find((k) => k.key === s.key)?.color ?? "#10b981";
              return (
                <div key={s.key} className="rounded-xl border bg-muted/10 px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold">{SKILLS.find((k) => k.key === s.key)?.emoji} {s.key}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-de text-[11px] font-extrabold text-primary">
                      {s.cefr}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: color }} />
                    </div>
                    <span className="font-de text-xs font-extrabold" style={{ color }}>{s.pct}%</span>
                  </div>
                  <p className="mt-1 text-[9px] font-bold text-muted-foreground">
                    {s.total === 0 ? "لم يُمارس بعد" : `${s.correct}/${s.total} إجابات صحيحة`}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* الإتقان النحوي */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-1 flex items-center gap-2">
          <BookCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          <p className="text-sm font-extrabold">مؤشر الإتقان النحوي</p>
          {concepts.length > 0 && (
            <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-bold text-success">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              {masteredCount} مفهوم أتقنته
            </span>
          )}
        </div>
        <p className="mb-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Info className="h-3 w-3" aria-hidden="true" />
          الإتقان = 80%+ إجابات صحيحة في التمارين المتعلقة بالمفهوم. الخطأ المتكرر يخفض النسبة — راجعه من دفتر أخطائك.
        </p>

        {concepts.length === 0 ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد بيانات إتقان بعد — المفاهيم التي ستمارسها ستظهر هنا.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {concepts.map((c) => (
              <div key={c.concept} className="rounded-xl border bg-muted/10 px-3 py-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold">{c.concept}</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[9px] font-extrabold",
                        c.mastered ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive",
                      )}
                    >
                      {c.mastered ? "أتقنته ✓" : "قيد التدريب"}
                    </span>
                    {CONCEPT_TO_LESSON[c.concept] && !c.mastered && (
                      <Link
                        href={`/lesson/${CONCEPT_TO_LESSON[c.concept]}`}
                        className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-extrabold text-primary transition-colors hover:bg-primary/20"
                      >
                        راجع المفهوم ←
                      </Link>
                    )}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <Progress value={c.pct} className={cn("h-2", c.mastered && "progress-gradient")} />
                  <span className="font-de text-[11px] font-extrabold">{c.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* المفاهيم المقررة لكل مستوى */}
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-4">
          {Object.entries(CONCEPTS_BY_LEVEL).map(([level, list]) => (
            <div key={level} className="rounded-xl border border-muted bg-muted/20 px-2.5 py-2">
              <p className="font-de text-[11px] font-extrabold text-primary">{level}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{list.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

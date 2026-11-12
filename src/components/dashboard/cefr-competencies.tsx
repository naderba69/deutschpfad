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
 *  مؤشرات إجابات التمارين المسجلة حسب نوعها وتصنيف الخطأ.
 *  النسب مبنية على الأحداث المحفوظة وعتبات داخلية فقط؛ لا تمثل
 *  مستوى CEFR أو دليلاً على إتقان مهارة/مفهوم.
 * ═══════════════════════════════════════════════════════════
 */
export function CefrCompetencies() {
  const [skills, setSkills] = React.useState<SkillStat[]>([]);
  const [concepts, setConcepts] = React.useState<ConceptMastery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [readError, setReadError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [s, c] = await Promise.all([computeSkillStats(), computeConceptMastery()]);
        if (cancelled) return;
        setSkills(s);
        setConcepts(c);
      } catch {
        if (!cancelled) setReadError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="h-64 animate-pulse rounded-2xl border bg-muted/30" />;
  if (readError) return <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm">تعذرت قراءة سجل إجابات التمارين؛ أُخفيت المؤشرات بدلاً من عرضها كبيانات فارغة.</div>;

  const activeSkills = skills.filter((skill) => skill.total > 0);
  const hasData = activeSkills.length > 0;
  const aboveThresholdCount = concepts.filter((c) => c.aboveInternalThreshold).length;

  return (
    <div className="space-y-4">
      {/* المهارات الست */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
          <p className="text-sm font-extrabold">معدلات الإجابة حسب نوع التمرين</p>
          <span className="ms-auto text-[11px] font-bold text-muted-foreground">من الأحداث المسجلة فقط</span>
        </div>

        <p className="mb-3 text-[11px] text-muted-foreground">
          هذه نسب إجابات صحيحة في عينة التمارين المسجلة؛ تتأثر بنوع الأسئلة وعدد المحاولات، ولا تحدد مستوى CEFR أو الكفاءة العامة.
        </p>
        {!hasData ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد إجابات مصححة مسجلة بعد. ستظهر هنا أنواع التمارين التي تُسجّل إجاباتها.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {activeSkills.map((s) => {
              const color = SKILLS.find((k) => k.key === s.key)?.color ?? "#10b981";
              return (
                <div key={s.key} className="rounded-xl border bg-muted/10 px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold">{SKILLS.find((k) => k.key === s.key)?.emoji} {s.key}</span>
                    <span className="text-[10px] text-muted-foreground">{s.total} محاولات</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div
                      className="h-2 flex-1 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-label={`${s.key}: ${s.correct} من ${s.total} إجابات صحيحة`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={s.pct}
                    >
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: color }} aria-hidden="true" />
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
          <p className="text-sm font-extrabold">معدلات الإجابة حسب تصنيف الخطأ</p>
          {concepts.length > 0 && (
            <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              {aboveThresholdCount} فئات فوق العتبة الداخلية
            </span>
          )}
        </div>
        <p className="mb-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Info className="h-3 w-3" aria-hidden="true" />
          العتبة المعروضة داخلية (80% من الإجابات المسجلة في الفئة) وليست مقياساً للإتقان. حجم العينة وأنواع التمارين قد يحدّان من دلالتها.
        </p>

        {concepts.length === 0 ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد إجابات مسجلة ضمن تصنيفات الأخطاء بعد.
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
                        c.aboveInternalThreshold ? "bg-success/15 text-success" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {c.aboveInternalThreshold ? "فوق العتبة" : "دون العتبة"}
                    </span>
                    {CONCEPT_TO_LESSON[c.concept] && !c.aboveInternalThreshold && (
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
                  <Progress value={c.pct} className={cn("h-2", c.aboveInternalThreshold && "progress-gradient")} />
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

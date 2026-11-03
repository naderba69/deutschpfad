"use client";

import * as React from "react";
import Link from "next/link";
import {BarChart3, BookCheck, Info, Sparkles} from "lucide-react";

import {Progress} from "@/components/ui/progress";
import {ACTIVITY_DOMAINS, computeActivityDomainStats, computeConceptPracticeStats, CONCEPTS_BY_LEVEL, CONCEPT_TO_LESSON, type ActivityDomainStat, type ConceptPracticeStat} from "@/lib/competencies";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  مؤشرات وصفية لنتائج الأنشطة والمفاهيم، وليست تقديراً لمستوى CEFR
 *  1) نسب نتائج الأنشطة المسجلة حسب مجالها
 *  2) نتائج تمارين المفاهيم مع إظهار عتبة 80% دون ادعاء الإتقان
 * ═══════════════════════════════════════════════════════════
 */
export function PracticeIndicators() {
  const [domains, setDomains] = React.useState<ActivityDomainStat[]>([]);
  const [concepts, setConcepts] = React.useState<ConceptPracticeStat[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [domainStats, conceptStats] = await Promise.all([computeActivityDomainStats(), computeConceptPracticeStats()]);
      if (cancelled) return;
      setDomains(domainStats);
      setConcepts(conceptStats);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="h-64 animate-pulse rounded-2xl border bg-muted/30" />;

  const hasData = domains.some((domain) => domain.total > 0);
  const thresholdCount = concepts.filter((c) => c.thresholdReached).length;

  return (
    <div className="space-y-4">
      {/* نتائج الأنشطة حسب المجال */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
          <p className="text-sm font-extrabold">نتائج الأنشطة حسب المجال</p>
          <span className="ms-auto text-[11px] font-bold text-muted-foreground">معايير النشاط تختلف؛ ليست تقديراً لـCEFR</span>
        </div>

        {!hasData ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد نتائج أنشطة مسجلة بعد؛ ستظهر هنا عند توفرها.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {domains.map((domain) => {
              const color = ACTIVITY_DOMAINS.find((item) => item.key === domain.key)?.color ?? "#10b981";
              return (
                <div key={domain.key} className="rounded-xl border bg-muted/10 px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold">{ACTIVITY_DOMAINS.find((item) => item.key === domain.key)?.emoji} {domain.key}</span>

                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full" style={{ width: `${domain.pct}%`, backgroundColor: color }} />
                    </div>
                    <span className="font-de text-xs font-extrabold" style={{ color }}>{domain.pct}%</span>
                  </div>
                  <p className="mt-1 text-[11px] font-bold text-muted-foreground">
                    {domain.total === 0 ? "لا توجد محاولات مسجلة" : `${domain.metCriterion}/${domain.total} محاولات حققت معيار النشاط`}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* نتائج التمارين حسب المفهوم */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-1 flex items-center gap-2">
          <BookCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          <p className="text-sm font-extrabold">نتائج التدريبات حسب المفهوم</p>
          {concepts.length > 0 && (
            <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-bold text-success">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              نتائج {thresholdCount} مفاهيم بلغت 80%+ في العينة
            </span>
          )}
        </div>
        <p className="mb-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Info className="h-3 w-3" aria-hidden="true" />
          النسبة تلخص نتائج التمارين المسجلة المرتبطة بالمفهوم؛ لا تثبت إتقانه الشامل، وتتأثر بعدد المحاولات ونوعها.
        </p>

        {concepts.length === 0 ? (
          <div className="rounded-xl border border-dashed bg-muted/20 p-4 text-center text-xs text-muted-foreground">
            لا توجد نتائج تمارين حسب المفهوم مسجلة بعد.
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
                        "rounded-full px-2 py-0.5 text-[11px] font-extrabold",
                        c.thresholdReached ? "bg-success/15 text-success" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {c.thresholdReached ? "80%+ من العينة" : "أقل من 80% في العينة"}
                    </span>
                    {CONCEPT_TO_LESSON[c.concept] && !c.thresholdReached && (
                      <Link
                        href={`/lesson/${CONCEPT_TO_LESSON[c.concept]}`}
                        className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary transition-colors hover:bg-primary/20"
                      >
                        راجع المفهوم ←
                      </Link>
                    )}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <Progress
                    value={c.pct}
                    aria-label={`نتائج تمارين ${c.concept}: ${c.pct}%`}
                    className={cn("h-2", c.thresholdReached && "progress-gradient")}
                  />
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

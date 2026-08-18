"use client";

import * as React from "react";
import {Award, CheckCircle2, Headphones, MessageCircle, Mic, PenLine, BookOpen} from "lucide-react";

import {Progress} from "@/components/ui/progress";
import {cn} from "@/lib/utils";
import {
  ALL_SKILLS,
  CAN_DO_BY_LEVEL,
  getCanDoRating,
  getLevelCanDoStats,
  setCanDoRating,
  type CanDoRating,
  type CanDoItem,
} from "@/lib/cando/statements";
import type { LevelCode } from "@/types/curriculum";

const SKILL_ICON: Record<string, React.ElementType> = {
  "الاستماع": Headphones,
  "القراءة": BookOpen,
  "التحدث": Mic,
  "الكتابة": PenLine,
  "التفاعل": MessageCircle,
};

/**
 * ═══════════════════════════════════════════════════════════
 *  شهادة الإتقان — لغة مكتسبة لا مُلقّنة
 *  قيّم نفسك بصدق على وظائف CEFR الحقيقية (Can-Do):
 *  «هل أستطيع فعل هذا فعلاً في ألمانيا؟»
 *  الإتقان = 100% وظائف + نجاح في امتحان الختم.
 *  لا توجد دروس «تُلقَّن» — توجد قدرات «تُكتسب».
 * ═══════════════════════════════════════════════════════════
 */
export function MasteryCertificate({ level }: { level: LevelCode }) {
  const items = React.useMemo(() => CAN_DO_BY_LEVEL[level] ?? [], [level]);
  const [ratings, setRatings] = React.useState<Record<string, CanDoRating>>({});
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const rec: Record<string, CanDoRating> = {};
    for (const it of items) rec[it.id] = getCanDoRating(level, it.id);
    setRatings(rec);
    setLoaded(true);
  }, [level, items]);

  if (!loaded) return <div className="h-32 animate-pulse rounded-2xl border bg-muted/30" />;

  const stats = getLevelCanDoStats(level);
  const masteredCount = items.filter((it) => getCanDoRating(level, it.id) === 1).length;
  const partialCount = items.filter((it) => getCanDoRating(level, it.id) === 0.5).length;

  const rate = (id: string, r: CanDoRating) => {
    setCanDoRating(level, id, r);
    setRatings((prev) => ({ ...prev, [id]: r }));
  };

  // تجميع حسب المهارة
  const bySkill = ALL_SKILLS.map((skill) => ({
    skill,
    items: items.filter((it) => it.skill === skill),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="space-y-4">
      {/* الترويسة + المؤشر */}
      <div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-bl from-gold/10 via-card to-primary/5 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-strong">
            <Award className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-extrabold">شهادة إتقان {level} — وظائف حقيقية</h2>
            <p className="text-xs text-muted-foreground">
              قيّم نفسك بصدق: هل تستطيع فعل هذا فعلاً؟ الإتقان = قدرة مكتسبة لا دروس منهية.
            </p>
          </div>
          <span className="font-de rounded-full bg-gold/15 px-3 py-1 text-sm font-extrabold text-gold-strong">
            {stats.pct}%
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={stats.pct} className="h-2.5 flex-1" />
          <span className="shrink-0 text-[11px] font-bold text-muted-foreground">
            {masteredCount} أتقنتها ✓ · {partialCount} جزئياً
          </span>
        </div>
        {stats.pct >= 100 ? (
          <p className="mt-2 flex items-center gap-1.5 rounded-lg bg-success/15 px-3 py-2 text-xs font-extrabold text-success">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            أتقنت كل وظائف {level}! الآن اجتز امتحان الختم لإصدار الشهادة.
          </p>
        ) : stats.pct >= 70 ? (
          <p className="mt-2 rounded-lg bg-gold/10 px-3 py-2 text-xs font-bold text-gold-strong">
            قريب جداً — ركّز على الوظائف المتبقية لبلوغ الإتقان الكامل.
          </p>
        ) : (
          <p className="mt-2 rounded-lg bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
            كلما تدربت على المهارة، عُد وقيّم نفسك بصدق — ستلاحظ النمو الحقيقي.
          </p>
        )}
      </div>

      {/* الوظائف حسب المهارة */}
      <div className="space-y-4">
        {bySkill.map((group) => {
          const Icon = SKILL_ICON[group.skill] ?? BookOpen;
          return (
            <div key={group.skill} className="rounded-2xl border bg-card p-4">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-extrabold text-primary">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {group.skill}
              </p>
              <div className="space-y-2">
                {group.items.map((it) => {
                  const r = ratings[it.id] ?? 0;
                  return (
                    <div key={it.id} className="flex flex-col gap-1.5 rounded-xl border border-muted bg-muted/10 p-2.5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <p className="font-de text-xs font-bold leading-snug" dir="ltr">{it.de}</p>
                        <p className="text-xs text-muted-foreground">{it.ar}</p>
                      </div>
                      <div className="flex shrink-0 flex-wrap items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => rate(it.id, 1)}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-[11px] font-extrabold transition-colors",
                            r === 1 ? "bg-success text-white" : "bg-muted text-muted-foreground hover:bg-success/20",
                          )}
                        >
                          ✓ أستطيع
                        </button>
                        <button
                          type="button"
                          onClick={() => rate(it.id, 0.5)}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-[11px] font-extrabold transition-colors",
                            r === 0.5 ? "bg-gold text-white" : "bg-muted text-muted-foreground hover:bg-gold/20",
                          )}
                        >
                          ~ جزئياً
                        </button>
                        <button
                          type="button"
                          onClick={() => rate(it.id, 0)}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-[11px] font-extrabold transition-colors",
                            r === 0 ? "bg-destructive/15 text-destructive" : "bg-muted text-muted-foreground hover:bg-destructive/15",
                          )}
                        >
                          ✗ بعد
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {CheckCircle2, Flame, ListChecks, Mic, Repeat, Target} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {addGemsResult, GEM_REWARDS} from "@/lib/gamification/gems";
import {claimQuestReward} from "@/lib/gamification/daily-quest-reward";
import {getRecentEventsResult} from "@/lib/analytics/events";
import {getDueCardsForReview} from "@/lib/review/weekly-review";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  التحديات اليومية المتجددة — 4 مهام تُحدَّث يومياً
 *  كل مهمة تُحتسب من نشاطك الفعلي:
 *  · حل 10 تمارين · راجع 5 بطاقات · أكمل قصة · تحدث (نطق)
 *  عند إتمام مهمة تُمنح جواهر 💎 تلقائياً
 * ═══════════════════════════════════════════════════════════
 */

interface Quest {
  id: string;
  label: string;
  icon: React.ElementType;
  target: number;
  current: number;
  reward: number;
}

export function DailyQuests() {
  const [quests, setQuests] = React.useState<Quest[]>([]);
  const [claimed, setClaimed] = React.useState<Record<string, boolean>>({});
  const [storageNotice, setStorageNotice] = React.useState("");

  React.useEffect(() => {
    void (async () => {
      const eventsResult = await getRecentEventsResult(3000);
      if (!eventsResult.ok) {
        setStorageNotice("تعذر قراءة نشاط اليوم؛ لم نعرض التحديات أو نمنح مكافآت بناءً على بيانات ناقصة.");
        return;
      }
      const events = eventsResult.events;
      const today = new Date().toISOString().slice(0, 10);
      const todayEvents = events.filter((e) => new Date(e.ts).toISOString().slice(0, 10) === today);

      const exercises = todayEvents.filter((e) => e.type === "exercise-result").length;
      const reviews = todayEvents.filter((e) => e.type === "review").length;
      const stories = todayEvents.filter((e) => e.type === "skill-result" && e.skill === "القراءة").length;
      const pronunciation = todayEvents.filter((e) => e.type === "pronunciation-score").length;

      const qs: Quest[] = [
        { id: "exercises", label: "حل 10 تمارين اليوم", icon: ListChecks, target: 10, current: Math.min(10, exercises), reward: 5 },
        { id: "reviews", label: "راجع 5 بطاقات", icon: Repeat, target: 5, current: Math.min(5, reviews), reward: 4 },
        { id: "story", label: "اقرأ قصة كاملة", icon: Target, target: 1, current: Math.min(1, stories), reward: 4 },
        { id: "speak", label: "درّب نطقك 3 مرات", icon: Mic, target: 3, current: Math.min(3, pronunciation), reward: 4 },
      ];
      setQuests(qs);

      // لا نعلّم المهمة مستلمة إذا تعذر تسجيل مكافأتها.
      const claimedKey = `dp:quests-claimed:${today}`;
      let prev: Record<string, boolean>;
      try {
        const raw = localStorage.getItem(claimedKey);
        const parsed: unknown = raw === null ? {} : JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed) ||
            Object.values(parsed).some((value) => typeof value !== "boolean")) {
          throw new Error("Invalid claimed quests data");
        }
        prev = parsed as Record<string, boolean>;
      } catch {
        setStorageNotice("تعذر قراءة سجل مكافآت التحديات؛ لم نغيّر السجل لتجنب تكرار المكافآت.");
        return;
      }
      setClaimed(prev);
      for (const q of qs) {
        if (q.current < q.target || prev[q.id]) continue;
        const result = claimQuestReward(q.id, q.reward, prev, (next) => {
          try {
            // حجز الاستلام قبل إضافة الرصيد لتقليل احتمال تكرار المكافأة.
            localStorage.setItem(claimedKey, JSON.stringify(next));
            return true;
          } catch {
            return false;
          }
        }, addGemsResult);
        if (result.status === "claim-storage-error") {
          setStorageNotice("تعذر حفظ سجل استلام التحدي؛ لم نضف المكافأة.");
          break;
        }
        if (result.status === "reward-error") {
          setStorageNotice("تعذر حفظ الجواهر؛ تحقّق من سجل التحدي قبل إعادة المحاولة.");
          break;
        }
        prev = result.claimed;
        setClaimed(prev);
      }
    })();
  }, []);

  if (quests.length === 0) {
    return storageNotice ? (
      <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive" role="alert">
        {storageNotice}
      </p>
    ) : null;
  }

  const doneCount = quests.filter((q) => q.current >= q.target).length;

  return (
    <Card className="overflow-hidden border-primary/20">
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Flame className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">تحديات اليوم</h3>
            <p className="text-[11px] text-muted-foreground">أنجز {doneCount}/4 تحدياً — تُمنح الجواهر تلقائياً 💎</p>
          </div>
        </div>

        {storageNotice && <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive" role="status">{storageNotice}</p>}

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {quests.map((q) => {
            const done = q.current >= q.target;
            const Icon = q.icon;
            const pct = Math.min(100, Math.round((q.current / q.target) * 100));
            return (
              <div
                key={q.id}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-2.5 transition-colors",
                  done ? "border-success/40 bg-success/5" : "border-muted bg-muted/10",
                )}
              >
                <span className={cn("inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", done ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={cn("text-xs font-bold", done && "text-success")}>{q.label}</p>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className={cn("h-full rounded-full", done ? "bg-success" : "bg-primary")} style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-muted-foreground">
                  {done ? (
                    <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                  ) : (
                    <>
                      {q.current}/{q.target}
                    </>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

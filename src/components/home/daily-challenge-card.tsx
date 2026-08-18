"use client";

import * as React from "react";
import {Flame, Trophy} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {LESSON_META} from "@/data/lessons/meta";

/**
 * ═══════════════════════════════════════════════════════════
 *  التحدي اليومي — 5 أسئلة سريعة من دروسك المكتملة
 *  (يُسحب بنك الاختبارات ويُرشّح حسب المستوى) — بعد إتمام درس.
 * ═══════════════════════════════════════════════════════════
 */
export function DailyChallengeCard() {
  const { completedLessonsSet } = useProgress();
  const [doneToday, setDoneToday] = React.useState(false);

  React.useEffect(() => {
    void (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(1000);
        const today = new Date().toDateString();
        setDoneToday(events.some((e) => e.type === "lesson-completed" && new Date(e.ts).toDateString() === today));
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  if (completedLessonsSet.size < 1) return null;

  const level = LESSON_META.find((l) => completedLessonsSet.has(l.id))?.level ?? "A1";

  return (
    <Card className="overflow-hidden border-gold/30 bg-gradient-to-bl from-gold/10 via-card to-gold/5">
      <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold-strong">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h4 className="text-sm font-extrabold">تحدي اليوم 🔥</h4>
            <p className="text-xs text-muted-foreground">
              5 أسئلة سريعة من مستواك — نقاط وسلسلة. {doneToday ? "أتممت تحدياً اليوم ✓" : "جاهز؟"}
            </p>
          </div>
        </div>
        <Button asChild variant="gold" size="sm" className="gap-1.5">
          <a href="/tests/placement?mode=quick">
            <Trophy className="h-4 w-4" aria-hidden="true" />
            ابدأ التحدي
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

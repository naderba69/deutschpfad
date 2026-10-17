"use client";

import * as React from "react";
import {CalendarClock, Clock3, Flame, Target} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {saveLearnerProfile, type LearnerProfile} from "@/lib/storage/learner";

/**
 * ═══════════════════════════════════════════════════════════
 *  خطة الدراسة — يحدد المتعلم ساعة الدراسة اليومية وهدفه
 *  ويعرض «هل حان وقت دراستك الآن؟» + شريط الهدف اليومي.
 * ═══════════════════════════════════════════════════════════
 */
export function StudyPlan({ profile, onSaved }: { profile: LearnerProfile; onSaved: (p: LearnerProfile) => void }) {
  const [hour, setHour] = React.useState(profile.studyHour ?? 20);
  const [goal, setGoal] = React.useState(profile.dailyGoalMinutes ?? 20);
  const [saving, setSaving] = React.useState(false);
  const [todayMinutes, setTodayMinutes] = React.useState(0);

  // دقائق اليوم (من أحداث session-minute)
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(2000);
        const today = new Date().toDateString();
        let mins = 0;
        for (const e of events) {
          if (e.type === "session-minute" && new Date(e.ts).toDateString() === today) {
            mins += e.minutes;
          }
        }
        if (!cancelled) setTodayMinutes(mins);
      } catch {
        /* تجاهل */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const updated = await saveLearnerProfile({ studyHour: hour, dailyGoalMinutes: goal });
    onSaved(updated);
    setSaving(false);
  };

  const now = new Date().getHours();
  const isStudyTime = now === hour;
  const pct = goal > 0 ? Math.min(100, Math.round((todayMinutes / goal) * 100)) : 0;

  return (
    <Card className="overflow-hidden border-muted">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold-strong">
            <CalendarClock className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">خطة دراستك اليومية</h3>
            <p className="text-xs text-muted-foreground">
              حدّد وقتاً ثابتاً وهدفاً يومياً — وتصبح عادة.
            </p>
          </div>
        </div>

        <form onSubmit={save} className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div className="space-y-1.5">
            <Label htmlFor="study-hour" className="flex items-center gap-1.5 text-xs font-bold">
              <Clock3 className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              ساعة الدراسة المفضلة
            </Label>
            <Input
              id="study-hour"
              type="time"
              value={`${String(hour).padStart(2, "0")}:00`}
              onChange={(e) => setHour(Number(e.target.value.split(":")[0]))}
              aria-label="ساعة الدراسة المفضلة"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="daily-goal" className="flex items-center gap-1.5 text-xs font-bold">
              <Target className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              الهدف اليومي (دقيقة)
            </Label>
            <Input
              id="daily-goal"
              type="number"
              min={5}
              max={180}
              step={5}
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value) || 20)}
              aria-label="الهدف اليومي بالدقائق"
            />
          </div>
          <Button type="submit" size="sm" disabled={saving}>
            {saving ? "حفظ…" : "احفظ"}
          </Button>
        </form>

        {/* الحالة الآن */}
        <div className="rounded-xl border border-muted bg-muted/20 px-4 py-3">
          {isStudyTime ? (
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              <Flame className="h-4 w-4" aria-hidden="true" />
              إنه وقت دراستك الآن — افتح درسك التالي!
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              ساعة دراستك: <span className="font-de font-bold text-foreground">{String(hour).padStart(2, "0")}:00</span>{" "}
              (الآن الساعة <span className="font-de font-bold">{String(now).padStart(2, "0")}:00</span>)
            </p>
          )}
          <div className="mt-2 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-l from-gold to-success" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-de shrink-0 text-xs font-extrabold text-primary">
              {todayMinutes}/{goal} د
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {pct >= 100 ? "أنجزت هدف اليوم — رائع! 🎉" : `تقدمك نحو هدف اليوم: ${pct}%`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

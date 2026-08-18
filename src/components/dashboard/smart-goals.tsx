"use client";

import * as React from "react";
import {CheckCircle2, PlusCircle, Target, Trash2} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {getRecord, putRecord} from "@/lib/storage/db";
import {getPreferences} from "@/lib/storage/preferences";
;
import {cn} from "@/lib/utils";

interface SmartGoal {
  id: string;
  text: string;
  /** معيار قابل للقياس */
  metric: string;
  done: boolean;
  createdAt: number;
}

const KEY = "smart-goals:v1";

const SUGGESTIONS = [
  "أكمل درساً واحداً وتمريناته هذا الأسبوع",
  "راجع 5 بطاقات SM-2 يومياً لمدة 7 أيام",
  "احفظ 10 كلمات جديدة من القاموس هذا الأسبوع",
  "درّب نطقك 3 مرات (سجّل وقارن)",
  "أنجز اختبار تحديد مستوى أو اختبار وحدة",
];

/**
 * أهداف SMART مع خطة يومية مقترحة
 * (اقتراح المرحلة 12: أهداف محددة قابلة للقياس + خطة يومية من التفضيلات)
 */
export function SmartGoalsCard() {
  const [goals, setGoals] = React.useState<SmartGoal[]>([]);
  const [suggested, setSuggested] = React.useState("");
  const [dailyPlan, setDailyPlan] = React.useState("");

  React.useEffect(() => {
    void (async () => {
      const stored = await getRecord<SmartGoal[]>("settings", KEY);
      if (Array.isArray(stored)) setGoals(stored);
      // خطة يومية مقترحة من التفضيلات
      const prefs = await getPreferences();
      const plan =
        prefs.pace === "intensive"
          ? "45-60 دقيقة اليوم: درس جديد + تمارين + مراجعة بطاقات"
          : prefs.pace === "medium"
            ? "20-30 دقيقة اليوم: درس أو مراجعة بطاقات + 3 تمارين"
            : "10-15 دقيقة اليوم: كبسولة 5 دقائق + مراجعة بطاقتين";
      setDailyPlan(plan);
    })();
  }, []);

  const persist = (next: SmartGoal[]) => {
    setGoals(next);
    void putRecord("settings", KEY, next);
  };

  const addGoal = (text: string) => {
    if (!text.trim()) return;
    const g: SmartGoal = {
      id: `goal-${Date.now()}`,
      text: text.trim(),
      metric: "قابل للقياس ✓",
      done: false,
      createdAt: Date.now(),
    };
    persist([...goals, g]);
    setSuggested("");
  };

  const toggle = (id: string) => {
    persist(goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g)));
  };

  const remove = (id: string) => {
    persist(goals.filter((g) => g.id !== id));
  };

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-primary" aria-hidden="true" />
          أهدافي الذكية (SMART)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        {/* الخطة اليومية المقترحة */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm">
          <span className="font-bold">خطتك اليومية المقترحة: </span>
          {dailyPlan}
        </div>

        {/* قائمة الأهداف */}
        {goals.length > 0 && (
          <ul className="space-y-2">
            {goals.map((g) => (
              <li key={g.id} className="flex items-center justify-between gap-3 rounded-xl border bg-card p-3">
                <div className="flex items-start gap-2">
                  <button
                    type="button"
                    onClick={() => toggle(g.id)}
                    aria-pressed={g.done}
                    className={cn(
                      "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      g.done ? "border-success bg-success text-success-foreground" : "border-muted-foreground/40",
                    )}
                  >
                    {g.done && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
                  </button>
                  <div>
                    <p className={cn("text-sm font-semibold", g.done && "text-muted-foreground line-through")}>
                      {g.text}
                    </p>
                    <p className="text-xs text-muted-foreground">{g.metric}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => remove(g.id)}
                  className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                  aria-label="حذف الهدف"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* إضافة هدف */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={suggested}
              onChange={(e) => setSuggested(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addGoal(suggested);
                }
              }}
              placeholder="اكتب هدفك… (مثال: أكمل 3 دروس هذا الأسبوع)"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
            <Button size="sm" onClick={() => addGoal(suggested)} className="shrink-0 gap-1.5">
              <PlusCircle className="h-4 w-4" aria-hidden="true" />
              إضافة
            </Button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => addGoal(s)}
                className="rounded-full border bg-background px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          SMART: محدّد (Specific) + قابل للقياس (Measurable) + واقعي — راجع أهدافك نهاية كل
          أسبوع واحتفل بالإنجاز! 🎉
        </p>
      </CardContent>
    </Card>
  );
}

"use client";

import * as React from "react";
import {Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {CARDS_CHANGED_EVENT, getAllCards} from "@/lib/srs/flashcard-service";
import {countByLevel, countCategories, LEVELS} from "@/lib/srs/mastery";
import type {LevelCode} from "@/types/curriculum";
import type {Sm2CardData} from "@/types/srs";

const COLORS = {
  mastered: "hsl(var(--success))",
  due: "hsl(var(--gold))",
  scheduled: "hsl(var(--primary))",
} as const;

const LABELS = {mastered: "متقنة", due: "مستحقة", scheduled: "مجدولة"} as const;

type LevelFilter = "all" | LevelCode;

/**
 * رسوم البطاقات: دائري (متقنة / مستحقة / مجدولة) قابل للتصفية بالمستوى،
 * وشريطي مكدّس لكل مستوى A1–B2. يتحدث فوراً عند أي مراجعة أو إضافة.
 */
export function SrsChartsCard() {
  const [cards, setCards] = React.useState<Sm2CardData[] | null>(null);
  const [level, setLevel] = React.useState<LevelFilter>("all");
  const [now, setNow] = React.useState(() => Date.now());

  const load = React.useCallback(async () => {
    setCards(await getAllCards());
    setNow(Date.now());
  }, []);

  React.useEffect(() => {
    void load();
    window.addEventListener(CARDS_CHANGED_EVENT, load);
    return () => window.removeEventListener(CARDS_CHANGED_EVENT, load);
  }, [load]);

  if (cards === null) {
    return <div className="h-64 animate-pulse rounded-2xl bg-muted/40" aria-hidden="true" />;
  }

  const scoped = level === "all" ? cards : cards.filter((c) => c.level === level);
  const counts = countCategories(scoped, now);
  const donut = (["mastered", "due", "scheduled"] as const)
    .map((k) => ({key: k, name: LABELS[k], value: counts[k]}));
  const bars = countByLevel(cards, now);

  return (
    <Card>
      <CardHeader>
        <CardTitle>تقدم البطاقات</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* فلتر المستوى */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="تصفية حسب المستوى">
          {(["all", ...LEVELS] as LevelFilter[]).map((l) => (
            <Button
              key={l}
              size="sm"
              variant={level === l ? "default" : "outline"}
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
            >
              {l === "all" ? "الكل" : l}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* الدائري */}
          <div className="h-64" aria-label={`متقنة ${counts.mastered}، مستحقة ${counts.due}، مجدولة ${counts.scheduled}`}>
            {counts.total === 0 ? (
              <p className="flex h-full items-center justify-center text-sm text-muted-foreground">
                لا توجد بطاقات بعد — أضف بطاقات من الدروس
              </p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={donut} dataKey="value" nameKey="name" innerRadius="55%" outerRadius="85%" isAnimationActive={false}>
                    {donut.map((d) => (
                      <Cell key={d.key} fill={COLORS[d.key]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* الشريطي المكدّس */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars} margin={{top: 8, right: 8, bottom: 0, left: 0}}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="level" />
                <YAxis allowDecimals={false} width={28} />
                <Tooltip />
                <Legend />
                <Bar dataKey="mastered" name={LABELS.mastered} stackId="a" fill={COLORS.mastered} isAnimationActive={false} />
                <Bar dataKey="due" name={LABELS.due} stackId="a" fill={COLORS.due} isAnimationActive={false} />
                <Bar dataKey="scheduled" name={LABELS.scheduled} stackId="a" fill={COLORS.scheduled} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          الإتقان: 3 إجابات متتالية صحيحة على يومين مختلفين على الأقل. المستحقة: حان موعدها الآن.
        </p>
      </CardContent>
    </Card>
  );
}

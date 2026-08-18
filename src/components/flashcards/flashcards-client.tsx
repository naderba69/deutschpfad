"use client";

import * as React from "react";
import Link from "next/link";
import {CalendarClock, DatabaseBackup, Layers, PlusCircle, Shuffle} from "lucide-react";

import {AddCardForm} from "@/components/flashcards/add-card-form";
import {CardList} from "@/components/flashcards/card-list";
import {ReviewSession} from "@/components/flashcards/review-session";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getCardStats, computeForgettingCoefficient, getAllCards} from "@/lib/srs/flashcard-service";
import {forgettingCoefficientLabel} from "@/lib/srs/sm2";
import type { Sm2CardData } from "@/types/srs";

/**
 * عميل صفحة البطاقات — المراجعة الذكية (SM-2) + الإدارة + الإحصاء
 * — المراجعة اليومية تخلط بطاقات كل المستويات (اقتراح: Interleaving عبر SM-2) —
 */
export function FlashcardsClient() {
  const [stats, setStats] = React.useState({ total: 0, due: 0, newCards: 0, learning: 0, mature: 0 });
  const [coefficient, setCoefficient] = React.useState(1);
  const [levelDist, setLevelDist] = React.useState<{ level: string; count: number }[]>([]);
  const [refreshKey, setRefreshKey] = React.useState(0);

  const reload = React.useCallback(async () => {
    const [s, fc, all] = await Promise.all([getCardStats(), computeForgettingCoefficient(), getAllCards()]);
    setStats(s);
    setCoefficient(fc);
    // توزيع البطاقات حسب المستوى (خلط كل المستويات في المراجعة)
    const dist = new Map<string, number>();
    for (const c of all) dist.set(c.level, (dist.get(c.level) ?? 0) + 1);
    setLevelDist([...dist.entries()].map(([level, count]) => ({ level, count })).sort((a, b) => a.level.localeCompare(b.level)));
  }, []);

  React.useEffect(() => {
    void reload();
  }, [reload, refreshKey]);

  const bump = () => setRefreshKey((k) => k + 1);

  return (
    <div className="space-y-8">
      {/* الإحصاء السريع */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {[
          { label: "مستحق اليوم", value: stats.due, color: "text-destructive" },
          { label: "جديدة", value: stats.newCards, color: "text-primary" },
          { label: "قيد التعلم", value: stats.learning, color: "text-gold-strong" },
          { label: "راسخة", value: stats.mature, color: "text-success" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl border bg-card p-4 text-center">
            <p className={`font-de text-3xl font-extrabold ${color}`}>{value}</p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* معامل النسيان الشخصي */}
      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
        <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <span className="font-bold">معامل النسيان الشخصي: </span>
          <span className="font-de font-bold text-primary">{coefficient.toFixed(2)}</span>
          {" — "}
          {forgettingCoefficientLabel(coefficient)}. يُحسب من متوسط جودة تقييماتك ويضبط
          تلقائياً فترات المراجعة لكل بطاقة.
        </p>
      </div>

      {/* المراجعة */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
            مراجعة اليوم — خوارزمية SM-2
            <span className="font-de ms-auto rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
              {stats.due} بطاقة
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-5">
          {/* خلط المستويات */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border bg-muted/20 p-3 text-sm">
            <Shuffle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-semibold">تخلط المراجعة بطاقات كل المستويات:</span>
            {levelDist.map((d) => (
              <span key={d.level} className="font-de rounded-full bg-background px-2.5 py-0.5 text-xs font-bold" dir="ltr">
                {d.level} × {d.count}
              </span>
            ))}
            <span className="text-xs text-muted-foreground">— التكرار المتداخل (Interleaving) يقوي الذاكرة</span>
          </div>
          <ReviewSession refreshKey={refreshKey} />
        </CardContent>
      </Card>

      {/* كل البطاقات */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
            كل البطاقات ({stats.total})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <CardList refreshKey={refreshKey} />
        </CardContent>
      </Card>

      {/* إضافة بطاقة */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <PlusCircle className="h-5 w-5 text-primary" aria-hidden="true" />
            أضف بطاقة يدوياً
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <AddCardForm onAdded={bump} />
        </CardContent>
      </Card>

      {/* رابط البيانات */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/20 p-4">
        <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <DatabaseBackup className="h-4 w-4 text-primary" aria-hidden="true" />
          بياناتك محفوظة محلياً — صدّرها أو استوردها أو استعد نسخة احتياطية من صفحة الإعدادات.
        </p>
        <Button asChild variant="outline" size="sm">
          <Link href="/settings">الإعدادات والبيانات</Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {AlertCircle, CalendarDays, Landmark, Lightbulb} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CULTURAL_FACTS, DAILY_MISTAKES, DID_YOU_KNOW} from "@/data/supplemental/content";
import {getA1VocabAll, type VocabEntry} from "@/data/vocabulary/a1";

/** اختيار ثابت حسب يوم السنة */
function byDay<T>(arr: T[]): T {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return arr[day % arr.length];
}

/**
 * «كبسولة اليوم» في لوحة التحكم (اقتراح المرحلة 14):
 * كلمة اليوم + خطأ اليوم + هل تعلم؟ + لقطة ثقافية
 */
export function DailyDashboard() {
  const [word, setWord] = React.useState<VocabEntry | null>(null);

  React.useEffect(() => {
    setWord(byDay(getA1VocabAll()));
  }, []);

  const mistake = byDay(DAILY_MISTAKES);
  const fact = byDay(DID_YOU_KNOW);
  const culture = byDay(CULTURAL_FACTS);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* كلمة اليوم */}
      <Card>
        <CardHeader className="border-b bg-muted/20 py-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            كلمة اليوم
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {word && (
            <div className="flex items-center justify-between gap-3">
              <div>
                {word.g === "der" || word.g === "die" || word.g === "das" ? (
                  <span className="font-de text-xs font-bold text-primary">{word.g} </span>
                ) : null}
                <span className="font-de text-xl font-bold" dir="ltr" lang="de">
                  {word.de}
                </span>
                <p className="text-sm text-muted-foreground">= {word.ar}</p>
                {word.ex && (
                  <p className="font-de mt-1 text-xs text-muted-foreground" dir="ltr" lang="de">
                    {word.ex}
                  </p>
                )}
              </div>
              <SpeakButton text={word.de} variant="outline" size="sm" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* خطأ اليوم */}
      <Card>
        <CardHeader className="border-b bg-muted/20 py-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
            خطأ اليوم — تجنبه
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm">
            <span className="rounded bg-destructive/10 px-1.5 py-0.5 font-de line-through decoration-2" dir="ltr" lang="de">
              {mistake.wrong}
            </span>{" "}
            ←{" "}
            <span className="rounded bg-success/10 px-1.5 py-0.5 font-de font-semibold" dir="ltr" lang="de">
              {mistake.right}
            </span>
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{mistake.why}</p>
          <Badge variant="outline" className="font-de mt-2 text-[11px]">
            {mistake.level}
          </Badge>
        </CardContent>
      </Card>

      {/* هل تعلم؟ */}
      <Card>
        <CardHeader className="border-b bg-muted/20 py-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Lightbulb className="h-4 w-4 text-gold-strong" aria-hidden="true" />
            هل تعلم؟
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm font-bold">{fact.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{fact.content}</p>
        </CardContent>
      </Card>

      {/* لقطة ثقافية */}
      <Card>
        <CardHeader className="border-b bg-muted/20 py-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Landmark className="h-4 w-4 text-primary" aria-hidden="true" />
            لقطة ثقافية
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm font-bold">
            {culture.emoji} {culture.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{culture.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}

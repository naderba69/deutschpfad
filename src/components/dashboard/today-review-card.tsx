"use client";

import * as React from "react";
import Link from "next/link";
import {Layers, ArrowLeft} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getDueCards} from "@/lib/srs/flashcard-service";

/**
 * بطاقة «مراجعة اليوم» — تعرض عدد البطاقات المستحقة اليوم (SRS)
 * مع زر بدء فوري للمراجعة. لا تظهر إن لم توجد بطاقات مستحقة.
 */
export function TodayReviewCard() {
  const [dueCount, setDueCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    getDueCards()
      .then((cards) => {
        if (!cancelled) setDueCount(cards.length);
      })
      .catch(() => {
        if (!cancelled) setDueCount(0);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // لا تعرض البطاقة أثناء التحميل أو عند عدم وجود مستحقات
  if (dueCount === null || dueCount === 0) return null;

  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
          مراجعة اليوم
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          لديك <span className="font-de font-bold text-foreground">{dueCount}</span>{" "}
          {dueCount === 1 ? "بطاقة" : "بطاقات"} مستحقة للمراجعة اليوم حسب خوارزمية التكرار المتباعد.
        </p>
        <Button asChild className="mt-3" size="sm">
          <Link href="/flashcards">
            ابدأ المراجعة الآن
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

import type { Metadata } from "next";

import {WeeklyReviewClient} from "@/components/review/weekly-review-client";

export const metadata: Metadata = {
  title: "المراجعة الشهرية — DeutschPfad",
  description:
    "مراجعة تراكمية شهرية تجمع كل ما تعلمته: أخطاؤك، بطاقاتك المستحقة، وأسئلة من دروسك — لترسيخ ما تعلمته خلال الشهر.",
};

export default function MonthlyReviewPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📆 المراجعة الشهرية
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          مراجعة تراكمية أوسع: كل ما تعلمته هذا الشهر (دروس، أخطاء، بطاقات، أسئلة)
          في جلسة واحدة — التكرار المتباعد على المدى الطويل يبني الإتقان الحقيقي.
        </p>
      </div>
      <WeeklyReviewClient range="monthly" />
    </div>
  );
}

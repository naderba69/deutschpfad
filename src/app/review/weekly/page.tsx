import type { Metadata } from "next";

import {WeeklyReviewClient} from "@/components/review/weekly-review-client";

export const metadata: Metadata = {
  title: "المراجعة الأسبوعية — DeutschPfad",
  description:
    "راجع أسبوعك التراكمي: ملخص نشاطك، أخطاؤك النشطة، بطاقاتك المستحقة، وأسئلة من دروسك — في جلسة واحدة تعيد تثبيت ما تعلمته.",
};

export default function WeeklyReviewPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📅 المراجعة الأسبوعية
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          كل أسبوع تجمع لك جلسة مراجعة تراكمية: أخطاء دفترك، بطاقات SM-2 المستحقة،
          وأسئلة من دروسك — لأن التكرار المتباعد هو الذي يحوّل التعلم إلى إتقان.
        </p>
      </div>
      <WeeklyReviewClient />
    </div>
  );
}

import type { Metadata } from "next";

import {ReviewDaily} from "@/components/dashboard/review-daily";

export const metadata: Metadata = {
  title: "المراجعة اليومية",
  description:
    "مراجعتك اليومية التلقائية: بطاقات SM-2 المستحقة + تمارين قواعد سريعة من مستويات مختلفة.",
};

export default function ReviewPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المراجعة اليومية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          بنيت تلقائياً من خوارزمية SM-2: راجع بطاقاتك المستحقة لحظة اقتراب نسيانها، ثم
          ثلاثة أسئلة قواعد سريعة لتنشيط ذاكرتك.
        </p>
      </div>
      <ReviewDaily />
    </div>
  );
}

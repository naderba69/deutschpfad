import type { Metadata } from "next";

import {FlashcardsClient} from "@/components/flashcards/flashcards-client";

export const metadata: Metadata = {
  title: "بطاقات المراجعة — المراجعة الذكية (SM-2)",
  description:
    "نظام البطاقات الذكي (SRS) في درب الألمانية: خوارزمية SM-2 للمراجعة المتباعدة مع معامل نسيان شخصي، ومراجعة يومية للبطاقات المستحقة.",
};

export default function FlashcardsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          بطاقات المراجعة الذكية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          خوارزمية SM-2 تُذكّرك بكل بطاقة <span className="font-bold">لحظة اقتراب نسيانها</span> —
          لا مراجعة مكررة مملة ولا نسيان. تقييمك الذاتي (نسيت/صعب/حسن/سهل) يضبط الفواصل تلقائياً.
        </p>
      </div>
      <FlashcardsClient />
    </div>
  );
}

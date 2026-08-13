import type { Metadata } from "next";

import {DailyDashboard} from "@/components/daily/daily-dashboard";

export const metadata: Metadata = {
  title: "كبسولة اليوم — كلمة وخطأ وثقافة",
  description:
    "كلمة اليوم + خطأ اليوم + هل تعلم؟ + لقطة ثقافية — جرعة يومية صغيرة تبقيك متصلاً بالألمانية.",
};

export default function TageskapselPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          كبسولة اليوم 🧃
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          أربع جرعات يومية صغيرة تتجدد تلقائياً كل يوم: كلمة جديدة، خطأ لتتجنبه، حقيقة
          لغوية، ولقطة ثقافية.
        </p>
      </div>
      <DailyDashboard />
    </div>
  );
}

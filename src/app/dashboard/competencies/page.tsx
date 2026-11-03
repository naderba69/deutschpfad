import type { Metadata } from "next";

import {PracticeIndicators} from "@/components/dashboard/cefr-competencies";

export const metadata: Metadata = {
  title: "مؤشرات التدريب — DeutschPfad",
  description:
    "ملخص وصفي لنتائج الأنشطة المسجلة والتدريبات حسب المجال والمفهوم؛ لا يقدّر مستوى CEFR ولا يثبت إتقان المهارات.",
};

export default function CompetenciesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📊 مؤشرات التدريب
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          ملخص لنتائج الأنشطة التي تسجلها المنصة بحسب المجال والمفهوم. يعرض نسب المحاولات المسجلة فقط؛
          ولا يقدّر مستوى CEFR أو يقيس المهارة كاملة أو يثبت إتقانها.
        </p>
      </div>
      <PracticeIndicators />
    </div>
  );
}

import type { Metadata } from "next";

import {CefrCompetencies} from "@/components/dashboard/cefr-competencies";

export const metadata: Metadata = {
  title: "مؤشرات التمرين والمراجعة — DeutschPfad",
  description:
    "تابع نسب الإجابات الصحيحة في أنواع التمارين المسجلة وفئات الأخطاء. هذه المؤشرات داخلية ولا تحدد مستوى CEFR أو الإتقان.",
};

export default function CompetenciesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📊 مؤشرات التمرين والمراجعة
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          تعرض الصفحة معدلات إجاباتك في الأحداث المسجلة، مصنفة بحسب نوع التمرين وبعض أنواع الأخطاء. إنها مؤشرات متابعة داخلية، وليست قياساً لمستوى CEFR أو حكماً على إتقان مهارة.
        </p>
      </div>
      <CefrCompetencies />
    </div>
  );
}

import type { Metadata } from "next";

import {LazyWeeklyTest} from "@/components/tests/lazy/lazy-weekly-test";

export const metadata: Metadata = {
  title: "الاختبار الأسبوعي التجميعي",
  description:
    "اختبار أسبوعي يخلط المستويات الأربعة مع تركيز متجدد أسبوعياً — يقيس تقدمك التراكمي.",
};

export default function WeeklyTestPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الاختبار الأسبوعي التجميعي
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          مزيج ذكي من المستويات الأربعة مع مستوى تركيز يتغير كل أسبوع — مثالي لقياس تقدمك
          التراكمي ومراجعة ما تعلمته.
        </p>
      </div>
      <LazyWeeklyTest />
    </div>
  );
}

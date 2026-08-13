import type { Metadata } from "next";

import { ProgressReport } from "@/components/dashboard/progress-report";

export const metadata: Metadata = {
  title: "تقرير التقدم — PDF",
  description: "تقرير شامل لتقدمك في درب الألمانية — اطبع أو احفظ كـ PDF.",
};

export default function ReportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6 print:hidden">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">تقرير التقدم</h1>
        <p className="mt-2 text-muted-foreground">
          اضغط «حفظ التقرير PDF» ثم اختر «حفظ كـ PDF» من نافذة الطباعة — لتحصل على شهادة
          إنجازك بتنسيق نظيف.
        </p>
      </div>
      <ProgressReport />
    </div>
  );
}

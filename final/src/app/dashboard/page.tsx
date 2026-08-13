import type { Metadata } from "next";

import {DashboardClient} from "@/components/dashboard/dashboard-client";

export const metadata: Metadata = {
  title: "لوحة التحكم — تقدمك الشخصي",
  description:
    "لوحة تحكمك: التقدم، الدقة، الخريطة الحرارية، نقاط الضعف (قاموس الأخطاء)، مقارنة قبل وبعد، منحنى النسيان، والتقرير الأسبوعي.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          لوحة التحكم
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          كل ما يخص رحلتك في مكان واحد: تقدمك، نقاط قوتك وضعفك، نشاطك اليومي، وتوصياتك
          الشخصية — مبنية على بياناتك المحفوظة محلياً.
        </p>
      </div>
      <DashboardClient />
    </div>
  );
}

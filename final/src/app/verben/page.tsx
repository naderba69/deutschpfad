import type { Metadata } from "next";

import {VerbDrill} from "@/components/verbs/verb-drill";
import {StarkeVerbenTable} from "@/components/verbs/starke-verben-table";

export const metadata: Metadata = {
  title: "جدول الأفعال الشاذة — مرجع وتدريب تفاعلي",
  description:
    "الجدول التفاعلي الكامل للأفعال الشاذة الألمانية + مدرب تصريف يومي: اختر الفعل والزمن وصرّف — مع تصحيح فوري وتصنيف الخطأ.",
};

export default function VerbenPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          جدول الأفعال الشاذة
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          كل فعل شاذ تحتاجه من A1 إلى B2: المصدر، المضارع (مع er/sie/es)، الماضي
          (Präteritum)، والتصريف الثالث (Partizip II) — مع الفعل المساعد في Perfekt
          والترجمة العربية. ابحث أو فلتر بالمستوى، واستمع للنطق — ثم اختبر نفسك في
          المدرب التفاعلي أدناه.
        </p>
      </div>

      {/* مدرب التصريف */}
      <div className="mb-10">
        <VerbDrill />
      </div>

      <StarkeVerbenTable />
    </div>
  );
}

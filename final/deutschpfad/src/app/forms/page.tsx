import type { Metadata } from "next";

import {OfficialFormsPlayer} from "@/components/forms/official-forms-player";
import {OFFICIAL_FORMS} from "@/data/supplemental/forms";

export const metadata: Metadata = {
  title: "محاكي الاستمارات الرسمية",
  description:
    "تدرب على ملء الاستمارات الألمانية الحقيقية: Anmeldung (تسجيل العنوان)، طلب التأشيرة، وبيانات التقديم الوظيفي.",
};

export default function FormsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          محاكي الاستمارات الرسمية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          أملأ استمارات حقيقية كما في ألمانيا — تعرّف على المصطلحات الرسمية قبل أن
          تحتاجها فعلاً (تسجيل عنوان، تأشيرة، توظيف).
        </p>
      </div>
      <div className="space-y-6">
        {OFFICIAL_FORMS.map((form) => (
          <OfficialFormsPlayer key={form.id} formId={form.id} />
        ))}
      </div>
    </div>
  );
}

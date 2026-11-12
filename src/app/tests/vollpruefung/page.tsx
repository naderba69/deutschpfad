import type { Metadata } from "next";

import {LazyVollPruefung} from "@/components/tests/lazy/lazy-vollpruefung";

export const metadata: Metadata = {
  title: "تدريب B2 وبنية امتحان Goethe",
  description:
    "نظرة عامة على أقسام Goethe B2 وعينة تدريب داخلية قصيرة. ليست هذه الصفحة محاكاة كاملة أو تقييماً للجاهزية؛ تحقق من تفاصيل الامتحان لدى الجهة المنظمة.",
};

export default function VollPruefungPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب B2 وبنية امتحان Goethe
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تعرّف إلى نظرة عامة على أقسام الامتحان، ثم جرّب اختبار مستوى كتابياً سريعاً. العينة لا تحاكي Goethe B2 كاملاً ولا تثبت الجاهزية أو تمنح نتيجة رسمية؛ أما /tests/b2 فيقدم تدريباً مستوحى من بعض أنماطه وليس محاكاة كاملة.
        </p>
      </div>
      <LazyVollPruefung />
    </div>
  );
}

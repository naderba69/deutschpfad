import type { Metadata } from "next";

import {MündlichePrüfung} from "@/components/speaking/muendliche-pruefung";

export const metadata: Metadata = {
  title: "تدريب التحدث بالألمانية (Mündliche Prüfung)",
  description:
    "تدريبات تفاعلية للتحدث بالألمانية في مواقف وعروض ونقاشات، مع تسجيل أو كتابة الإجابة ومراجعتها ذاتياً. ليست محاكاة رسمية أو تقييماً من ممتحن."
};

export default function SprechenPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب التحدث بالألمانية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تمارين تفاعلية على عرض موضوع ومناقشته، مع تسجيل أو كتابة الإجابة ثم مراجعتها. هذه مادة تدريبية من إعداد المنصة وليست محاكاة رسمية لامتحان.
        </p>
      </div>
      <MündlichePrüfung />
    </div>
  );
}

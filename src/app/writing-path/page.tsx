import type { Metadata } from "next";

import {WritingPathClient} from "@/components/writing/writing-path-client";

export const metadata: Metadata = {
  title: "مسار الكتابة المتدرج — DeutschPfad",
  description:
    "تدريبات كتابة ألمانية متدرجة من الجملة إلى المقال. يقدم فاحص محلي مؤشرات آلية محدودة للطول والروابط وبعض الأنماط، ولا يمثل تصحيح Goethe أو تقييماً معيارياً للجودة.",
};

export default function WritingPathPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          ✍️ مسار الكتابة المتدرج
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تدريبات متدرجة من الجملة إلى المقال. بعد كل إجابة يعرض الفاحص المحلي مؤشرات آلية محدودة للطول والروابط وبعض الأنماط؛ لا يقيّم جودة الكتابة كاملةً ولا يحاكي مصحح Goethe.
        </p>
      </div>
      <WritingPathClient />
    </div>
  );
}

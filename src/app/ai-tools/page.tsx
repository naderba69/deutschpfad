import type { Metadata } from "next";

import {LazyAiToolsClient} from "@/components/tests/lazy/lazy-ai-tools";

export const metadata: Metadata = {
  title: "الأدوات الذكية — معلّمك الافتراضي الكامل",
  description:
    "معلّم محادثة، مصحح كتابة يشرح كل خطأ، مولّد تمارين وقصص وجمل، مترجم سياقي، تقرير أسبوعي، وتحليل نتائج الاختبارات — كلها بالذكاء الاصطناعي.",
};

export default function AiToolsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الأدوات الذكية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تسع أدوات مدعومة بالذكاء الاصطناعي تكمّل تعلمك: صحّح، ولّد، ترجم، حلّل — كلها
          تخضع لسقفك اليومي (50 طلباً) والتخزين المؤقت.
        </p>
      </div>
      <LazyAiToolsClient />
    </div>
  );
}

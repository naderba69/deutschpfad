import type { Metadata } from "next";

import {LazyOralExam} from "@/components/tests/lazy/lazy-oral-exam";
import {VortragModelle} from "@/components/tests/vortrag-modelle";

export const metadata: Metadata = {
  title: "تدريب التحدث الألماني — B1/B2",
  description:
    "تدريبات تفاعلية للتحدث وعرض موضوع ومناقشته، مع مؤقت وتسجيل/تعرف على الكلام وتقييم ذاتي. ليست محاكاة رسمية لامتحان Goethe ولا تقييماً من ممتحن.",
};

export default function OralTestPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الامتحان الشفهي (Mündliche Prüfung)
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          اختر تدريباً على عرض موضوع ومناقشته أو على مواقف محادثة أخرى. يمكنك تسجيل إجاباتك أو استخدام التعرف على الكلام ثم تقييمها ذاتياً؛ هذا التدريب لا يحاكي امتحان Goethe كاملاً ولا يصدر تقييماً رسمياً.
        </p>
      </div>
      <LazyOralExam />

      {/* قوالب العرض التقديمي الكاملة (اقتراح المرحلة النهائية) */}
      <div className="mt-10">
        <VortragModelle />
      </div>
    </div>
  );
}

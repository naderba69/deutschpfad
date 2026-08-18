import type { Metadata } from "next";

import {WritingPathClient} from "@/components/writing/writing-path-client";

export const metadata: Metadata = {
  title: "مسار الكتابة المتدرج — DeutschPfad",
  description:
    "من الجملة إلى المقال: 4 مراحل تصاعدية (جملة ← فقرة ← رسالة رسمية ← مقال) كل مرحلة تُقيَّم آلياً بقواعد Goethe.",
};

export default function WritingPathPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          ✍️ مسار الكتابة المتدرج
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          الكتابة تُبنى خطوة بخطوة: جملة ← فقرة ← رسالة رسمية ← مقال. أكمل كل مرحلة
          بالترتيب، واحصل على تقييم فوري بقواعد Goethe: الطول، الروابط، التنوع،
          والعلامات الإملائية.
        </p>
      </div>
      <WritingPathClient />
    </div>
  );
}

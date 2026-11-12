import type { Metadata } from "next";

import {HoerenClient} from "@/components/hoeren/hoeren-client";
import {TOTAL_HOEREN} from "@/data/hoeren/library";

export const metadata: Metadata = {
  title: "مكتبة الاستماع الألماني — تدريبات B1/B2",
  description:
    "نصوص وتمارين استماع ألمانية مع إخفاء النص وإمكان تكرار التشغيل. تصنيف الأنشطة من إعداد المنصة ولا يمثل بنكاً رسمياً أو محاكاة لامتحان Goethe.",
};

export default function HoerenPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مكتبة الاستماع (Hörverstehen)
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {TOTAL_HOEREN} مادة استماع تدريبية من إعداد المنصة. استمع والنص مخفي، ثم أجب واكشف النص للمراجعة؛ يمكنك تكرار الاستماع وتعديل السرعة. هذه المواد ليست محاكاة رسمية لامتحان.
        </p>
      </div>
      <HoerenClient />
    </div>
  );
}

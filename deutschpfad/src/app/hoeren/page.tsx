import type { Metadata } from "next";

import {HoerenClient} from "@/components/hoeren/hoeren-client";
import {TOTAL_HOEREN} from "@/data/hoeren/library";

export const metadata: Metadata = {
  title: "مكتبة الاستماع — بأسلوب Goethe B2",
  description:
    "تدريب الاستماع بأنواع غوته الرسمية الأربعة: إعلان إذاعي، رسالة هاتفية، مقابلة، ومحاضرة — استمع والنص مخفي ثم أجب كما في الامتحان.",
};

export default function HoerenPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مكتبة الاستماع (Hörverstehen)
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {TOTAL_HOEREN} نصوصاً سمعية بأسلوب امتحان Goethe B2 — منهجية مثل الامتحان تماماً:
          <span className="font-bold"> استمع والنص مخفي، ثم أجب، ثم كشف النص.</span> يمكنك
          الاستماع مرتين وبسرعتين.
        </p>
      </div>
      <HoerenClient />
    </div>
  );
}

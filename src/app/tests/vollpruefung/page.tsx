import type { Metadata } from "next";

import {LazyVollPruefung} from "@/components/tests/lazy/lazy-vollpruefung";

export const metadata: Metadata = {
  title: "محاكاة امتحان Goethe B2 الكامل",
  description:
    "محاكاة كاملة لامتحان Goethe-Zertifikat B2: القراءة والاستماع والقواعد والكتابة بتوقيت حقيقي + الخطوة الشفهية (عرض ومناقشة) + نتيجة نهائية بمعايير غوته.",
};

export default function VollPruefungPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          محاكاة امتحان Goethe B2 الكامل
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          جلسة واحدة تحاكي الامتحان الحقيقي: أربعة أقسام مكتوبة بتوقيت حقيقي، ثم الخطوة
          الشفهية، ونتيجة نهائية بمعايير غوته (نجاح 60%، جيد 75%، ممتاز 90%). ركّز
          وأكملها حتى النهاية — هذه أقرب محاكاة للشهادة.
        </p>
      </div>
      <LazyVollPruefung />
    </div>
  );
}

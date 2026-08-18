import type { Metadata } from "next";

import {FallstrickeTrainer} from "@/components/tests/fallstricke-trainer";

export const metadata: Metadata = {
  title: "فخاخ الامتحان — تدريب القراءة والاستماع B2",
  description:
    "تدريب تفاعلي على أشهر 12 فخاً في امتحان Goethe-B2: مطابقة اللفظ، النفي الخفي، الأرقام المتشابهة، التعميم الزائد… مع شرح «لماذا» يخدعك المصممون.",
};

export default function FallstrickePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          فخاخ الامتحان
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          المصممون يضعون خيارات «مصيدة» تجذب من يطابق الكلمات دون المعنى. تدرّب على
          أشهر 12 فخاً في القراءة والاستماع — وسيدفعك هذا التدريب مباشرة نحو درجات أعلى
          في محرك الامتحان الكامل.
        </p>
      </div>
      <FallstrickeTrainer />
    </div>
  );
}

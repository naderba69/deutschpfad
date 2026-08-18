import type { Metadata } from "next";

import {FunktionsverbgefuegeTrainer} from "@/components/grammar/funktionsverbgefuege-trainer";

export const metadata: Metadata = {
  title: "Funktionsverbgefüge — الأسلوب الرسمي B2",
  description:
    "الغوص العميق في Funktionsverbgefüge (FVG): الجدول الأشهر، تدريبات تفاعلية، ونصائح لاستخدامها في امتحان Goethe-B2 (الكتابة والقراءة).",
};

export default function FunktionsverbgefuegePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Funktionsverbgefüge — الفعل الوظيفي
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          الأسلوب الرسمي للأخبار والاقتصاد والرسائل الأكاديمية: بدل «ausdrücken» نقول
          «zum Ausdruck bringen». تعلم الـ 14 الأشهر، وتدرب عليها، وارفع درجة «Struktur»
          في كتابتك. (مكمّل لدرس b2-05 — الاقتصاد وعالم العمل)
        </p>
      </div>
      <FunktionsverbgefuegeTrainer />
    </div>
  );
}

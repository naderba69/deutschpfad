import type { Metadata } from "next";

import {RedemittelClient} from "@/components/redemittel/redemittel-client";
import {TOTAL_REDEMITTEL} from "@/data/redemittel";

export const metadata: Metadata = {
  title: "بنك العبارات الامتحانية (Redemittel)",
  description:
    "أكثر من 80 عبارة ألمانية جاهزة لامتحانات Goethe: إبداء الرأي، الموافقة، الاعتراض، الاقتراح، العرض، المناقشة، الرسالة الرسمية، ومشاركة المنتدى — مع النطق والسياق.",
};

export default function RedemittelPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          بنك العبارات الامتحانية (Redemittel)
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {TOTAL_REDEMITTEL} عبارة جاهزة موزعة على {14} وظيفة تواصلية — هذه هي «الأدوات»
          التي يبحث عنها المصحح في امتحانات Goethe (Schreiben + Sprechen). ابحث، صفِّ،
          واستمع لنطق كل عبارة.
        </p>
      </div>
      <RedemittelClient />
    </div>
  );
}

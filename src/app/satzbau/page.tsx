import type { Metadata } from "next";

import {SatzbauGame} from "@/components/satzbau/satzbau-game";
import {TOTAL_SATZBAU} from "@/data/satzbau";

export const metadata: Metadata = {
  title: "لعبة تركيب الجمل (Satzbau) — A1 إلى B2",
  description:
    "لعبة تفاعلية: رتّب الكلمات المبعثرة في جمل صحيحة وتعلم قاعدة ترتيب الكلمات الألمانية (الفعل في المركز الثاني، الجمل الثانوية) باللعب.",
};

export default function SatzbauPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          لعبة تركيب الجمل (Satzbau) 🧩
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {TOTAL_SATZBAU} لغزاً من A1 إلى B2 — انقر الكلمات بالترتيب الصحيح وتعلم قاعدة
          ترتيب الكلمات الألمانية (الفعل في المركز الثاني، obwohl، Konjunktiv II، النقل
          بالمجاز...). الأصعب: كل ما تحتاجه للامتحان.
        </p>
      </div>
      <SatzbauGame />
    </div>
  );
}

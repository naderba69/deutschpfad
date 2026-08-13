import type { Metadata } from "next";

import {UmschreibungenClient} from "@/components/umschreiben/umschreibungen-client";
import {TOTAL_UMSCHREIB, UMSCHREIB_TYPEN} from "@/data/umschreibungen";

export const metadata: Metadata = {
  title: "تدريب تحويل الجمل (Umschreibungen) — أسلوب Goethe B2",
  description:
    "تدرّب على تحويل الجمل بالأنواع العشرة الرسمية لامتحان Goethe B2: نشط/مجهول، اشتقاق اسمي، مشاركات، نقل كلام، wegen، sich lassen، um...zu، Konjunktiv II — مع تصحيح فوري.",
};

export default function UmschreibungenPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب تحويل الجمل (Umschreibungen)
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          {TOTAL_UMSCHREIB} تمريناً على {UMSCHREIB_TYPEN.length} أنواع التحويل الرسمية في
          امتحان Goethe B2 (Grammatik). لكل نوع: شرح ومثال أولاً، ثم حوّل بنفسك مع تصحيح
          فوري وإجابة نموذجية. هذه التمارين تظهر حرفياً في الامتحان — أتقنها بالتكرار.
        </p>
      </div>
      <UmschreibungenClient />
    </div>
  );
}

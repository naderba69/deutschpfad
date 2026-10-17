import type { Metadata } from "next";

import {CefrCompetencies} from "@/components/dashboard/cefr-competencies";

export const metadata: Metadata = {
  title: "كفاياتك CEFR — DeutschPfad",
  description:
    "مستوى كل مهارة لديك (استماع، قراءة، كتابة، تحدث، قواعد، مفردات) حسب معايير CEFR من أدائك الفعلي، مع مؤشر الإتقان النحوي.",
};

export default function CompetenciesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📊 كفاياتك حسب CEFR
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          هذا ليس اختباراً ولا شارات — هذه قراءة حقيقية لأدائك الفعلي في كل مهارة،
          ومؤشر إتقان كل مفهوم نحوي. «أنت هنا» تحديثها تلقائي مع كل تمرين تحله.
        </p>
      </div>
      <CefrCompetencies />
    </div>
  );
}

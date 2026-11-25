import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VollStageRunner } from "@/components/tests/vollpruefung-stage";
import { isVollStage, VOLL_STAGES } from "@/lib/tests/vollpruefung-progress";

export const dynamicParams = false;

export function generateStaticParams() {
  return VOLL_STAGES.map((stage) => ({ stage }));
}

type Props = { params: Promise<{ stage: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stage } = await params;
  if (!isVollStage(stage)) return { title: "الصفحة غير موجودة" };
  return {
    title: `الامتحان الكامل — المرحلة ${stage}`,
    description: `مرحلة ${stage} من الامتحان الكامل بالترتيب (A1 ثم A2 ثم B1 ثم B2). تدريب داخلي وليس امتحاناً رسمياً.`,
  };
}

export default async function VollStagePage({ params }: Props) {
  const { stage } = await params;
  if (!isVollStage(stage)) notFound();
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المرحلة <span className="font-de">{stage}</span> من الامتحان الكامل
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          أكمل الأقسام بالترتيب. عند عرض النتيجة تُسجَّل المرحلة مكتملة في هذا المتصفح، وتُفتح المرحلة التالية.
          التدريب داخلي وليس امتحاناً رسمياً ولا يمنح شهادة.
        </p>
      </div>
      <VollStageRunner stage={stage} />
    </div>
  );
}

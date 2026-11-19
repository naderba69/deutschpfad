import type { Metadata } from "next";
import {notFound} from "next/navigation";

import {LazyUnitTest} from "@/components/tests/lazy/lazy-unit-test";
import {getLessonCountForUnit} from "@/data/lessons/meta";
import {loadLessonsByUnit} from "@/data/lessons/level-loaders";
import {buildUnitTestQuestions} from "@/lib/tests/unit-test-questions";

interface Props {
  params: Promise<{ unitId: string }>;
}

export function generateStaticParams() {
  // توليد لكل وحدة لها دروس — سنستورد القائمة ديناميكياً
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { unitId } = await params;
  return {
    title: `اختبار الوحدة ${unitId}`,
    description: "اختبار قصير لنهاية الوحدة: قواعد ومفردات من دروس الوحدة نفسها.",
  };
}

export default async function UnitTestPage({ params }: Props) {
  const { unitId } = await params;
  if (getLessonCountForUnit(unitId) === 0) notFound();

  // الأسئلة تُبنى على الخادم كي يصل HTML كاملاً (بلا انزياح تخطيط)،
  // ويُمرَّر إلى العميل الأسئلة العشرة فقط لا دروس المستوى.
  const lessons = await loadLessonsByUnit(unitId);
  const {level, questions} = buildUnitTestQuestions(unitId, lessons);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          اختبار الوحدة {unitId}
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          اختبار قصير (10 دقائق) من دروس الوحدة نفسها: قواعد ومفردات — أجب ثم راجع نتيجتك
          واقتراحات التقوية.
        </p>
      </div>
      <LazyUnitTest unitId={unitId} level={level} questions={questions} />
    </div>
  );
}

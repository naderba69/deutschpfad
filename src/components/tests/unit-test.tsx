"use client";

import * as React from "react";

import {TestRunner} from "@/components/tests/test-runner";
import type { TestQuestion } from "@/types/test";

/**
 * اختبار نهاية الوحدة — أسئلة من دروس الوحدة نفسها
 * (قواعد من التدريبات + مفردات من بنك الوحدة)
 *
 * الأسئلة تُبنى على الخادم في `buildUnitTestQuestions` وتُمرَّر جاهزة:
 * كان المكوّن يحمّل دروس الوحدة في `useEffect` ويعرض مربّع تحميل، فيقفز
 * المحتوى بعد الهيدرشن (CLS 0.106–0.162 في /tests/unit/*). كذلك صارت حزمة
 * العميل أصغر لأن بيانات المستوى لم تعد تُرسل إليه.
 */
export function UnitTest({
  unitId,
  level,
  questions,
}: {
  unitId: string;
  level: "A1" | "A2" | "B1" | "B2";
  questions: TestQuestion[];
}) {
  return (
    <TestRunner
      kind="unit"
      level={level}
      sections={[
        { skill: "grammatik", title: "قواعد ومفردات الوحدة", titleDe: "Grammatik & Wortschatz", minutes: 10 },
        { skill: "schreiben", title: "كتابة قصيرة", titleDe: "Schreiben", minutes: 5 },
      ]}
      questions={questions}
      title={`اختبار الوحدة ${unitId}`}
    />
  );
}

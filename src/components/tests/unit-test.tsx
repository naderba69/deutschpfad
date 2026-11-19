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
      /* الجولة الحادية عشرة: كان القسم الثاني «كتابة قصيرة / schreiben» ولا
         يوجد سؤال واحد بهذا المهارة أبداً (`buildUnitTestQuestions` يبني
         `grammatik` و`wortschatz` فقط) — فينتهي كل اختبار وحدة إلى شاشة
         «لا توجد أسئلة». وكانت أسئلة المفردات الأربعة تُبنى ثم تُهمَل لأن
         «القسم الأول» لا يعرض إلا `grammatik`. صار القسمان يطابقان المهارتين
         الموجودتين فعلاً، ومجموع الوقت ما زال 10 دقائق. */
      sections={[
        { skill: "grammatik", title: "قواعد الوحدة", titleDe: "Grammatik", minutes: 6 },
        { skill: "wortschatz", title: "مفردات الوحدة", titleDe: "Wortschatz", minutes: 4 },
      ]}
      questions={questions}
      title={`اختبار الوحدة ${unitId}`}
    />
  );
}

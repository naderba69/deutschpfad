import type { Metadata } from "next";

import {B2ReadingExamLibrary} from "@/components/tests/b2-reading-library";

export const metadata: Metadata = {
  title: "مكتبة القراءة B2 — نصوص صحفية بأسئلة امتحانية",
  description:
    "نصوص ألمانية أصيلة بمستوى B2 (مقالات، تعليقات، تقارير، أدلة) مع أسئلة بصيغة امتحان Goethe — تدريب مكثف على القراءة والفهم.",
};

export default function LesenB2Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مكتبة القراءة B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          نصوص صحفية وتقريرية أصيلة بمستوى B2، كل نص بأسئلة اختيار بصيغة الامتحان مع شرح
          لكل إجابة — اقرأ، أجب، تحقق، وتعلم «لماذا».
        </p>
      </div>
      <B2ReadingExamLibrary />
    </div>
  );
}

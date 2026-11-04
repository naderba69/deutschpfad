import type { Metadata } from "next";

import {B2Top500} from "@/components/tests/b2-top500";

export const metadata: Metadata = {
  title: "500 كلمة وتعبير للمراجعة — نطاق B2",
  description:
    "قائمة تدريبية من 500 كلمة وتعبير صنفتها المنصة حسب موضوعات وأولوية مراجعة داخلية؛ ليست قائمة رسمية أو مرتبة وفق بيانات تواتر Goethe.",
};

export default function Top500Page() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          500 كلمة وتعبير للمراجعة
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          {`${"500"} `}كلمة وتعبير للمراجعة في نطاق B2، مصنفة حسب موضوعات تدريبية وأولوية داخلية تقريبية. هذه القائمة ليست مستخرجة حصراً من أسئلة Goethe ولا تحدد ما يجب حفظه للامتحان؛ استخدم الفلاتر لاختيار ما تريد مراجعته.
        </p>
      </div>
      <B2Top500 />
    </div>
  );
}

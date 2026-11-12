import type { Metadata } from "next";

import {FallstrickeTrainer} from "@/components/tests/fallstricke-trainer";

export const metadata: Metadata = {
  title: "فخاخ الامتحان — تدريب القراءة والاستماع B2",
  description:
    "تدريب تفاعلي على أنماط شائعة من الالتباس في القراءة والاستماع بالألمانية، مع شرح لكل إجابة. إعداد المنصة، وليس بنك أسئلة رسمياً أو دليلاً على استراتيجية امتحانية مضمونة.",
};

export default function FallstrickePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          فخاخ الامتحان
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تدرّب على أمثلة من إعداد المنصة لبعض الالتباسات المحتملة في القراءة والاستماع. الشرح يساعدك على التفكير في السياق، لكنه لا يضمن رفع درجة امتحان أو يمثل جميع أنواع الأسئلة.
        </p>
      </div>
      <FallstrickeTrainer />
    </div>
  );
}

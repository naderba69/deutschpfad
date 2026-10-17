import type { Metadata } from "next";

import {DiktatTrainer} from "@/components/diktate/diktat-trainer";
import {UmlautFocus} from "@/components/diktate/umlaut-focus";
import {TOTAL_DIKTATE} from "@/data/diktate";

export const metadata: Metadata = {
  title: "تدريب الإملاء (Diktate) — A1 إلى B2",
  description:
    "تمارين إملاء صوتي لكل مستوى: استمع واكتب ثم صحّح فوراً مع تلميحات الكلمات الصعبة وملاحظات تربوية.",
};

export default function DiktatePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب الإملاء (Diktate) ✍️
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {TOTAL_DIKTATE} جملة إملاء موزعة على المستويات الأربعة — استمع ثم اكتب ثم صحّح
          فوراً. الإملاء يقوّي الرابط بين الصوت والكتابة (أهم مهارة في التهجئة الألمانية:
          ß، الهملات، الحروف الكبيرة).
        </p>
      </div>
      <div className="mb-8">
        <UmlautFocus />
      </div>
      <DiktatTrainer />
    </div>
  );
}

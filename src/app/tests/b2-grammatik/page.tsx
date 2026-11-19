import type { Metadata } from "next";

import {B2GrammarTrainer} from "@/components/tests/b2-grammar-trainer";

export const metadata: Metadata = {
  title: "تدريب قواعد ومفردات B2 — 60 سؤالاً موقوتاً",
  description:
    "تدريب داخلي على قواعد ومفردات B2: 60 سؤالاً (30 قواعد + 30 مفردات) مع شرح لكل سؤال ومؤقت اختياري. ليس قسماً من امتحان Goethe B2 ولا يقيّم الجاهزية.",
};

export default function B2GrammatikPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب القواعد والمفردات B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          60 سؤالاً (30 قواعد + 30 مفردات) للتدريب الداخلي مع شرح لكل سؤال. هذه عينة مراجعة وليست قسماً في امتحان Goethe B2 أو محاكاة له.
        </p>
      </div>
      <B2GrammarTrainer />
    </div>
  );
}

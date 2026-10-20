import type { Metadata } from "next";

import {B2GrammarTrainer} from "@/components/tests/b2-grammar-trainer";

export const metadata: Metadata = {
  title: "تدريب قواعد ومفردات B2 — 60 سؤالاً موقوتاً",
  description:
    "تدريب مكثف على قواعد ومفردات مستوى B2: 60 سؤالاً (30 قواعد + 30 مفردات) بصيغ الامتحان مع شرح لكل سؤال — موقوت 60 دقيقة.",
};

export default function B2GrammatikPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب القواعد والمفردات B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          60 سؤالاً (30 قواعد + 30 مفردات) بصيغ الامتحان، مع شرح تعليمي لكل سؤال —
          مثالي لتقوية نقاط الضعف قبل دخول محرك الامتحان الكامل.
        </p>
      </div>
      <B2GrammarTrainer />
    </div>
  );
}

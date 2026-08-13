import type { Metadata } from "next";

import {GrammarReferenceClient} from "@/components/grammar/grammar-reference-client";
import {GrammarMindMap} from "@/components/grammar/mind-map";
import {GRAMMAR_REFERENCE} from "@/data/grammar/reference";

export const metadata: Metadata = {
  title: "المرجع النحوي الشامل (Grammatik-Referenz)",
  description:
    "كل قواعد الألمانية من A1 إلى B2: شرح بالعربية + لماذا + أمثلة + تريكات حفظ — مع بحث وفلترة وخريطة ذهنية.",
};

export default function GrammatikPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المرجع النحوي الشامل
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {GRAMMAR_REFERENCE.length} قاعدة كاملة من A1 إلى B2 — كل قاعدة بشرح عربي واضح
          و«لماذا» وأمثلة مسموعة وتريك حفظ. ابحث أو فلتر أو استخدم الخريطة الذهنية.
        </p>
      </div>
      <GrammarMindMap />
      <div className="mt-6">
        <GrammarReferenceClient />
      </div>
    </div>
  );
}

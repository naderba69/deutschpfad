import type { Metadata } from "next";

import {GlossarClient} from "@/components/glossar/glossar-client";

export const metadata: Metadata = {
  title: "القاموس الشامل (Glossar)",
  description:
    "قاموس شامل قابل للبحث: ~950 كلمة منظمة حسب المستوى والوحدة مع النطق والأمثلة السياقية.",
};

export default function GlossarPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          القاموس الشامل
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          كل مفردات المنصة في مكان واحد: ~950 كلمة من A1 إلى B2، منظمة حسب المستوى والوحدة،
          مع النطق والمثال السياقي.
        </p>
      </div>
      <GlossarClient />
    </div>
  );
}

import type { Metadata } from "next";

import {ErrorNotebook} from "@/components/errors/error-notebook";

export const metadata: Metadata = {
  title: "دفتر أخطائك — DeutschPfad",
  description:
    "كل خطأ ترتكبه في أي درس يُسجَّل تلقائياً مع الشرح والإجابة الصحيحة. راجع نقاط ضعفك حتى تتقنها — هذه هي طريق الإتقان.",
};

export default function ErrorNotebookPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📖 دفتر أخطائك
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          كل خطأ ترتكبه عبر كل الدروس والجلسات يُسجَّل هنا تلقائياً: نوعه، شرحه، وإجابته
          الصحيحة. الخطأ المتكرر هو نقطة ضعفك الحقيقية — أعد مراجعته حتى يُعلَّم
          «أتقنته» وتختفي نقطة الضعف من دفترك.
        </p>
      </div>
      <ErrorNotebook />
    </div>
  );
}

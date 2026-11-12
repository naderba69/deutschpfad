import type { Metadata } from "next";

import {ErrorNotebook} from "@/components/errors/error-notebook";

export const metadata: Metadata = {
  title: "دفتر أخطائك — DeutschPfad",
  description:
    "راجع الأخطاء التي تسجلها بعض تمارين المنصة مع الشروح والإجابات المتاحة. دفتر الأخطاء أداة مراجعة جزئية؛ وخلوّه لا يعني إتقان المادة أو بلوغ مستوى CEFR.",
};

export default function ErrorNotebookPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          📖 دفتر أخطائك
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          يجمع الدفتر بعض الإجابات غير الصحيحة التي تسجلها تمارين الدروس المدعومة، مع الشرح والإجابة
          المتاحة. راجع هذه الملاحظات، لكن تذكّر أن السجل جزئي ولا يقيس مستواك؛ وتعليم عنصر بأنه
          «أتقنته» اختيار ذاتي لا يثبت الإتقان.
        </p>
      </div>
      <ErrorNotebook />
    </div>
  );
}

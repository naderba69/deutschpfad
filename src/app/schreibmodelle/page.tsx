import type { Metadata } from "next";

import {SchreibmodelleClient} from "@/components/schreiben/schreibmodelle-client";
import {SCHREIB_MODELLE} from "@/data/schreibmodelle";

export const metadata: Metadata = {
  title: "نماذج الكتابة B2 — Goethe-Zertifikat",
  description:
    "نماذج إجابات كاملة لامتحان الكتابة B2: Forumsbeitrag + رسالة رسمية بمستويين (جيد/ممتاز) مع شرح بنية كل فقرة — تعلّم الهيكل قبل المحتوى.",
};

export default function SchreibmodellePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          نماذج الكتابة B2 (Schreibmodelle)
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {SCHREIB_MODELLE.length} موضوعاً امتحانياً ببنية غوته الكاملة: المهمة 1
          (Forumsbeitrag) والمهمة 2 (رسالة رسمية) — كل واحدة بمستويين (جيد / ممتاز)
          مع شرح ملاحظة تربوية لكل فقرة. ادرس الهيكل، استمع للنموذج، ثم اكتب نسختك.
        </p>
      </div>
      <SchreibmodelleClient />
    </div>
  );
}

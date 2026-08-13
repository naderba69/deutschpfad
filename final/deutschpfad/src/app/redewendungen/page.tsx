import type { Metadata } from "next";

import {RedewendungenList} from "@/components/redewendungen/redewendungen-list";
import {REDEWENDUNGEN} from "@/data/supplemental/content";

export const metadata: Metadata = {
  title: "التعابير الاصطلاحية والأمثال",
  description:
    "تعابير وأمثال ألمانية شائعة مع ترجمتها الحرفية ومعناها الحقيقي وأمثلة مسموعة — لتتحدث كالألمان.",
};

export default function RedewendungenPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          التعابير الاصطلاحية والأمثال
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {REDEWENDUNGEN.length} تعبيراً ومثلاً ألمانياً شائعاً — الترجمة الحرفية مضحكة
          أحياناً، لكن المعنى الحقيقي سيفاجئك!
        </p>
      </div>
      <RedewendungenList />
    </div>
  );
}

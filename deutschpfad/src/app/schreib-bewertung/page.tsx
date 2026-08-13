import type { Metadata } from "next";

import {GoetheLocalClient} from "@/components/writing/goethe-local-client";

export const metadata: Metadata = {
  title: "مقيّم الكتابة بمعايير Goethe — درّب كتابتك للامتحان",
  description:
    "اكتب Forumsbeitrag أو رسالة رسمية أو مقالاً — يقيمه المقيّم فورياً بالمعايير الرسمية الأربعة لامتحان Goethe (إنجاز المهمة، الترابط، المفردات، القواعد) مع درجة تقريبية وأخطاء شائعة وتوصية. يعمل دون أي مفاتيح.",
};

export default function SchreibBewertungPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مقيّم الكتابة بمعايير Goethe
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          درّب كتابتك للامتحان: اكتب (Forumsbeitrag أو رسالة رسمية أو مقالاً) واحصل فوراً على
          تقييم بالمعايير الأربعة الرسمية — إنجاز المهمة، الترابط، المفردات، القواعد — مع
          درجة تقريبية وأخطاء شائعة وتوصية مخصصة. <span className="font-bold">يعمل فوراً دون أي مفاتيح.</span>{" "}
          ولتقييم أعمق بالذكاء الاصطناعي، استخدم «مقيّم الكتابة بمعايير غوته» في{" "}
          <a href="/ai-tools" className="font-bold text-primary underline underline-offset-2">الأدوات الذكية</a>.
        </p>
      </div>
      <GoetheLocalClient />
    </div>
  );
}

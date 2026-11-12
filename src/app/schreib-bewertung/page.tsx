import Link from "next/link";
import type { Metadata } from "next";

import {GoetheLocalClient} from "@/components/writing/goethe-local-client";

export const metadata: Metadata = {
  title: "ملاحظات آلية على الكتابة الألمانية — DeutschPfad",
  description:
    "اكتب نصاً بالألمانية للحصول على ملاحظات آلية إرشادية حول إنجاز المهمة والترابط والمفردات والقواعد. لا تمثل الملاحظات تصحيح Goethe رسمياً أو درجة CEFR، وقد تحتاج إلى مراجعة بشرية.",
};

export default function SchreibBewertungPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          فحص آلي محلي للكتابة الألمانية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اكتب نصاً بالألمانية لتظهر مؤشرات محلية محدودة للطول وبعض الروابط والأخطاء الشائعة. لا يتحقق الفاحص من المعنى أو جودة الكتابة كاملةً ولا يصدر درجة امتحانية. للملاحظات التوليدية، يمكن تجربة أدوات الذكاء الاصطناعي مع الانتباه إلى أنها قد تخطئ أيضاً: {" "}
          <Link href="/ai-tools" className="font-bold text-primary underline underline-offset-2">الأدوات الذكية</Link>.
        </p>
      </div>
      <GoetheLocalClient />
    </div>
  );
}

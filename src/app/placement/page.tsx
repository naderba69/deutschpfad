import type { Metadata } from "next";
import Link from "next/link";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Zap, Target} from "lucide-react";

export const metadata: Metadata = {
  title: "اختبار تحديد المستوى",
  description:
    "أدوات تدريب لتقدير نقطة بداية مبدئية في الألمانية عبر أسئلة قصيرة؛ النتائج غير معيارية ولا تمثل اختبار CEFR رسمياً.",
};

/** صفحة تحديد المستوى الموحّدة — تقدم الخيارين (سريع/تشخيصي) وتربط للتشخيصي الكامل */
export default function PlacementPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          اختبار تحديد المستوى
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اختر أداة تدريب تساعدك على تحديد نقطة بداية مبدئية. النتائج تقديرية وليست اختبار تحديد مستوى معيارياً.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* السريع */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-gold-strong" aria-hidden="true" />
              اختبار سريع (15 سؤالاً)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              15 سؤالاً (5 من A1 + 5 من A2 + 5 من B1) تعطيك نقطة بداية تقريبية — أسئلة
              عشوائية في كل مرة.
            </p>
            <Link
              href="/tests/placement?mode=quick"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              ابدأ الاختبار السريع
            </Link>
          </CardContent>
        </Card>

        {/* التشخيصي الكامل */}
        <Card className="border-primary/30 bg-primary/[0.03] transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" aria-hidden="true" />
              تدريب تشخيصي لكل مهارة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              أسئلة محدودة في القواعد والمفردات والقراءة والاستماع والكتابة تتدرج داخلياً. التقدير لكل مهارة تقريبي، وإجابة الكتابة لا تُقيّم من حيث الدقة والجودة؛ لا يُعد ذلك مستوى CEFR رسمياً.
            </p>
            <Link
              href="/tests/placement"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              ابدأ التدريب التشخيصي
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

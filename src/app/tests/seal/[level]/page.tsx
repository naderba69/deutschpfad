import type { Metadata } from "next";
import Link from "next/link";

import { LazySealExam } from "@/components/tests/lazy/lazy-seal-exam";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "امتحان الختم — بوابة الانتقال بين المستويات",
  description:
    "امتحان ختم المستوى بصيغة Goethe-Zertifikat: لا تنتقل للمستوى التالي إلا باجتيازه (60% فأكثر). نسخة كاملة أو سريعة (20 سؤالاً).",
};

export function generateStaticParams() {
  return ["a1", "a2", "b1", "b2"].map((level) => ({ level }));
}

interface Props {
  params: { level: string };
  searchParams: { mode?: string };
}

export default function SealExamPage({ params, searchParams }: Props) {
  const level = params.level.toUpperCase();
  const quick = searchParams?.mode === "quick";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🏅 امتحان ختم مستوى {level}
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          هذا هو «بوابة» المستوى التالي: أكمل 80% من وحدات المستوى، ثم اجتز الامتحان
          (60% فأكثر) ليُختَم المستوى ويُفتح الذي يليه. الأهلية تُحسب تلقائياً من تقدمك.
        </p>
      </div>

      {/* اختيار النسخة */}
      {!quick && (
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Card className="border-primary/40 bg-primary/[0.04]">
            <CardContent className="flex items-start gap-3 p-4">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-bold">الامتحان الكامل</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  بصيغة Goethe الكاملة (27 سؤالاً: قراءة + استماع + قواعد + مفردات + كتابة)
                  بتوقيت حقيقي — أقرب محاكاة للامتحان الرسمي.
                </p>
                <span className="mt-2 inline-block rounded-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  مُحدد حالياً
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all hover:-translate-y-0.5 hover:shadow-soft">
            <CardContent className="flex items-start gap-3 p-4">
              <Zap className="mt-0.5 h-6 w-6 shrink-0 text-gold-strong" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-bold">الختم السريع ⚡</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  20 سؤالاً متوازناً (6 قواعد + 6 مفردات + 3 قراءة + 3 استماع + 2 كتابة)
                  بوقت أقصر — لمن يريد تجاوز المستوى بسرعة.
                </p>
                <Link
                  href={`/tests/seal/${params.level}?mode=quick`}
                  className="mt-2 inline-block rounded-lg bg-gold px-3 py-1 text-xs font-bold text-gold-foreground transition-colors hover:bg-gold/90"
                >
                  اختر الختم السريع
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {quick && (
        <p className="mb-4 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
          ⚡ <span className="font-bold">الوضع السريع:</span> 20 سؤالاً بوقت مخفّض — النجاح
          من 60% يختم المستوى كما في النسخة الكاملة.{" "}
          <Link href={`/tests/seal/${params.level}`} className="font-bold text-primary underline underline-offset-2">
            عُد للنسخة الكاملة
          </Link>
        </p>
      )}

      <LazySealExam levelParam={level} quick={quick} />
    </div>
  );
}

import Link from "next/link";
import {ArrowLeft, Gift, WifiOff, Zap} from "lucide-react";

import {Button} from "@/components/ui/button";

/**
 * القسم الختامي — دعوة قوية لبدء التعلم
 */
export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 px-6 py-14 text-center text-primary-foreground shadow-soft sm:px-12">
        {/* زخارف */}
        <div
          className="absolute -start-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-14 -end-8 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <Gift className="h-4 w-4" aria-hidden="true" />
            مجاناً بالكامل · بدون تسجيل
          </span>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
            ابدأ التحدث بالألمانية اليوم
          </h2>
          <p className="text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            أول درس جاهز في أقل من دقيقة — ستتعلم النطق الصحيح من اليوم الأول،
            ولن تحتاج لأي خبرة سابقة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="gold" className="text-base">
              <Link href="/learning-path">
                ابدأ رحلتك الآن
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
            >
              <Link href="/learning-path#a1">استكشف مستوى A1</Link>
            </Button>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <li className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4" aria-hidden="true" />
              تعلم في 5 دقائق يومياً
            </li>
            <li className="inline-flex items-center gap-1.5">
              <WifiOff className="h-4 w-4" aria-hidden="true" />
              يعمل دون إنترنت
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

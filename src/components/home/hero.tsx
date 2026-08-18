import Link from "next/link";
import {ArrowLeft, Flame, Sparkles, Volume2} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {DailyWord} from "@/components/home/daily-word";
import {TRUST_ITEMS} from "@/lib/constants/site-content";

/**
 * القسم الافتتاحي (Hero) — عنوان + دعوة + بطاقة معاينة تعليمية
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -start-24 top-10 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute -end-16 top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />
      <div className="absolute bottom-0 start-1/3 h-64 w-64 rounded-full bg-teal-400/15 blur-3xl animate-blob animation-delay-4000" aria-hidden="true" />

      <div className="relative mx-auto grid grid-cols-1 w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* النص */}
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <Badge variant="gold" className="gap-2 px-3 py-1.5 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-current" />
            بمنهجية معهد غوته ومعايير CEFR
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            رحلتك الكاملة لإتقان الألمانية
            <span className="mt-2 block text-gradient">
              من الصفر حتى الاحتراف
            </span>
          </h1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            دروس عربية واضحة، نطق صوتي ألماني حقيقي، تمارين تفاعلية بتصحيح فوري
            يشرح «لماذا»، مراجعة ذكية مبنية على خوارزمية SM-2، ومعلّم افتراضي
            مدعوم بالذكاء الاصطناعي — كل ذلك مجاناً 100%.
          </p>

          {/* مسار واضح بثلاث خطوات — لا تكديس خيارات يسبب الحيرة:
              ① ابدأ من المسار (الخطوة الأولى دائماً) · ② حدّد مستواك إن لم تعرفه ·
              ③ جرّب درساً قبل الالتزام */}
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="gold" className="btn-glow gap-2 text-base">
              <Link href="/learning-path">
                ابدأ رحلتك الآن
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="/tests/placement">حدّد مستواك أولاً</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-base">
              <Link href="/lesson/a1-01">جرّب درساً تجريبياً</Link>
            </Button>
          </div>

          {/* شارات الثقة */}
          <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* البطاقة المرئية */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up animation-delay-2000" aria-hidden="true">
          <div className="glass rounded-3xl border p-6 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold">درس اليوم</span>
              <Badge className="font-de font-bold">A1</Badge>
            </div>

            <div className="rounded-2xl border bg-background/80 p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <LangDe className="text-lg font-semibold">
                  Guten Morgen! Wie geht es dir?
                </LangDe>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Volume2 className="h-4 w-4" />
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                صباح الخير! كيف حالك؟
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>تقدم الدرس</span>
                <span className="font-de font-semibold">65%</span>
              </div>
              <Progress value={65} />
            </div>

            <div className="mt-4">
              <DailyWord />
            </div>
          </div>

          {/* بطاقات عائمة */}
          <div className="absolute -end-4 -top-6 rounded-2xl border bg-background/95 px-4 py-3 shadow-soft animate-float">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Flame className="h-4 w-4 fill-orange-400 text-orange-400" />
              سلسلة أيامك
            </p>
            <p className="font-de mt-0.5 text-xl font-bold">7 أيام 🔥</p>
          </div>
          <div className="absolute -start-4 -bottom-6 rounded-2xl border bg-background/95 px-4 py-3 shadow-soft animate-float animation-delay-2000">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-amber-500" />
              المعلّم الذكي
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">جاهز للإجابة عن أسئلتك</p>
          </div>
        </div>
      </div>
    </section>
  );
}

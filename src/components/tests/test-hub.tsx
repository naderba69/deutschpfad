"use client";

import Link from "next/link";
import {AlertTriangle, Award, BookOpenCheck, BrainCircuit, CalendarDays, ClipboardCheck, GraduationCap, Lock, Mic, Target} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {LEVELS} from "@/lib/constants/curriculum";

/**
 * مركز الاختبارات — بوابة كل أنواع الاختبارات
 */
export function TestHub() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مركز الاختبارات
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          أربعة أنواع اختبارات: تشخيصي لكل مهارة، نهاية وحدة، نهاية مستوى بصيغة
          تدريب تجريبي مستوحى من بنية Goethe-Zertifikat بتوقيت حقيقي — ليس امتحاناً رسمياً.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* محرك امتحان Goethe-B2 الرسمي (صيغة 2019+) */}
        <Card className="sm:col-span-2 border-2 border-success/50 bg-gradient-to-l from-success/10 to-transparent shadow-soft">
          <CardHeader className="border-b bg-success/10">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-success" aria-hidden="true" />
              🏆 محرك امتحان Goethe-B2 الرسمي — نسخة 2019+ المطابقة للهيكل الحقيقي
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-success">الأقرب للامتحان الحقيقي على المنصة:</span>{" "}
              القراءة 65 دقيقة (5 أجزاء · 30 سؤالاً بأنواع المهام الرسمية: مطابقة، مقال،
              فقرات ناقصة، مواقف، لائحة) + الاستماع 40 دقيقة (4 أجزاء · 30 سؤالاً) +
              الكتابة 75 دقيقة (منتدى ≥150 + رسمية ≥100) + التحدث 15 دقيقة (Vortrag + Diskussion).
              النتيجة: <span className="font-bold">100 نقطة لكل مكوّن · نجاح ≥ 60 لكل مكوّن على حدة</span> — كما في الامتحان.
            </p>
            <Link
              href="/tests/b2"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-success-foreground transition-colors hover:bg-success/90"
            >
              <Award className="h-4 w-4" aria-hidden="true" />
              ابدأ محرك الامتحان الرسمي (المدة الكاملة ≈ 3 ساعات)
            </Link>
          </CardContent>
        </Card>

        {/* تدريبات الاثراء: قراءة B2 + قواعد B2 */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpenCheck className="h-5 w-5 text-sky-500" aria-hidden="true" />
              مكتبة القراءة B2
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              نصوص صحفية أصيلة بمستوى B2 (مقالات، تعليقات، تقارير، أدلة) بأسئلة بصيغة
              الامتحان مع شرح لكل إجابة — توسيع مستمر للوصول إلى 50+ نصاً.
            </p>
            <Link
              href="/tests/lesen-b2"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
              اقرأ وتدرب
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BrainCircuit className="h-5 w-5 text-violet-500" aria-hidden="true" />
              تدريب القواعد والمفردات B2
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              60 سؤالاً (30 قواعد + 30 مفردات) بصيغ الامتحان مع شرح لكل سؤال — موقوت
              60 دقيقة. مثالي لتقوية نقاط الضعف قبل المحاكاة الكاملة.
            </p>
            <Link
              href="/tests/b2-grammatik"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              <BrainCircuit className="h-4 w-4" aria-hidden="true" />
              ابدأ التدريب
            </Link>
          </CardContent>
        </Card>

        {/* استراتيجيات + خطة 12 شهراً */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" aria-hidden="true" />
              استراتيجيات الامتحان — دليل كل Teil
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              خطوات عملية لكل جزء من امتحان B2، الفخاخ العشرة الذهبية، وجدول إدارة
              الوقت الرسمي (65 دقيقة للقراءة).
            </p>
            <Link
              href="/tests/strategien"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Target className="h-4 w-4" aria-hidden="true" />
              اقرأ الدليل
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-success" aria-hidden="true" />
              خطة 12 شهراً → B2
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              خطة واقعية من 90 دقيقة يومياً بست مراحل، كل مرحلة بأهدافها وأدوات المنصة
              وروتينها اليومي — طريقك المنظم للشهادة.
            </p>
            <Link
              href="/tests/plan-b2"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-success-foreground transition-colors hover:bg-success/90"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              خطط رحلتك
            </Link>
          </CardContent>
        </Card>

        {/* فخاخ الامتحان */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
              فخاخ الامتحان — تدريب المصايد
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              أشهر 12 فخاً في القراءة والاستماع (مطابقة اللفظ، النفي الخفي، الأرقام
              المتشابهة…) مع شرح «لماذا» يخدعك المصممون — تدريب تفاعلي يرفع درجتك فوراً.
            </p>
            <Link
              href="/tests/fallstricke"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-destructive/90"
            >
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              تدرب على الفخاخ
            </Link>
          </CardContent>
        </Card>

        {/* محاكاة B2 بالأقسام والمدد الفعلية */}
        <Card className="sm:col-span-2 border-primary/50 bg-gradient-to-l from-primary/10 to-transparent transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-primary/10">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-primary" aria-hidden="true" />
              🎓 محاكاة Goethe-B2 بالأقسام والمدد الفعلية
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lesen (65د) + Hören (40د) + Schreiben (75د) + Sprechen (15د) — بالمدد الفعلية
              لامتحان Goethe-Zertifikat B2، مع Rubric صريحة للكتابة والتحدث للمراجعة الذاتية.
              <span className="font-bold"> تدريب تجريبي — ليس امتحاناً رسمياً.</span>
            </p>
            <Link
              href="/tests/b2-simulation"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Award className="h-4 w-4" aria-hidden="true" />
              ابدأ محاكاة B2 (الأقسام الأربعة)
            </Link>
          </CardContent>
        </Card>

        {/* الامتحان الكامل B2 */}
        <Card className="sm:col-span-2 border-gold/50 bg-gradient-to-l from-gold/10 to-transparent transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-gold/10">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-gold-strong" aria-hidden="true" />
              محاكاة امتحان Goethe B2 الكامل 🎯
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              جلسة واحدة تحاكي الامتحان الحقيقي بالكامل: Lesen + Hören + Grammatik + Schreiben
              بتوقيت حقيقي، ثم الخطوة الشفهية (عرض + مناقشة)، ونتيجة نهائية بمعايير غوته
              (نجاح 60% / جيد 75% / ممتاز 90%). <span className="font-bold">هذه أقرب محاكاة لشهادة B2.</span>
            </p>
            <Link
              href="/tests/vollpruefung"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              <Award className="h-4 w-4" aria-hidden="true" />
              ابدأ الامتحان الكامل (≈ 2 ساعة)
            </Link>
          </CardContent>
        </Card>

        {/* التشخيصي */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" aria-hidden="true" />
              تحديد المستوى التشخيصي
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              اختبار تكيفي لكل مهارة على حدة (قواعد، مفردات، قراءة، استماع، كتابة) — يبدأ
              من A1 ويتقدم تلقائياً حسب إجاباتك.
            </p>
            <Link
              href="/tests/placement"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              ابدأ التشخيص (10-15 دقيقة)
            </Link>
          </CardContent>
        </Card>

        {/* الشفهي */}
        <Card className="transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mic className="h-5 w-5 text-primary" aria-hidden="true" />
              الامتحان الشفهي (Mündliche Prüfung)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              ثلاثة أجزاء بنمط Goethe بمؤقت حقيقي: تقديم النفس، حديث عن موضوع، حل مشكلة —
              مع تسجيل صوتي وتقييم ذاتي بمعايير الممتحن.
            </p>
            <Link
              href="/tests/sprechen"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              <Mic className="h-4 w-4" aria-hidden="true" />
              ابدأ المحاكاة الشفهية (10 دقائق)
            </Link>
          </CardContent>
        </Card>

        {/* اختبارات المستويات */}
        <Card className="sm:col-span-2 transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-muted/20">
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              اختبارات نهاية المستويات — تدريب تجريبي مستوحى من Goethe
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              أقسام حقيقية بتوقيت فعلي: Lesen (قراءة) + Hören (استماع) + Grammatik & Wortschatz
              + Schreiben (كتابة) — يُسلَّم كل قسم تلقائياً عند انتهاء وقته.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {LEVELS.map((lvl) => (
                <Link
                  key={lvl.code}
                  href={`/tests/level/${lvl.code}`}
                  className="group rounded-xl border p-3 text-center transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className={`font-de block text-2xl font-extrabold bg-gradient-to-l ${lvl.gradient} bg-clip-text text-transparent`}>
                    {lvl.code}
                  </span>
                  <span className="text-xs text-muted-foreground">{lvl.titleAr}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

        {/* امتحانات الختم — بوابة المستويات */}
        <Card className="sm:col-span-2 border-primary/30 bg-primary/[0.03] transition-all hover:-translate-y-1 hover:shadow-soft">
          <CardHeader className="border-b bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
              امتحانات الختم — بوابة الانتقال بين المستويات 🏅
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              لا تنتقل من مستوى إلى التالي إلا باجتياز امتحان الختم (60% فأكثر) — بعد إكمال
              80% من وحدات المستوى. كل امتحان تدريب تجريبي (ليس امتحان Goethe الرسمي).
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {LEVELS.map((lvl) => (
                <Link
                  key={lvl.code}
                  href={`/tests/seal/${lvl.code.toLowerCase()}`}
                  className="group flex items-center justify-between rounded-xl border p-3 text-center transition-all hover:border-gold/50 hover:bg-gold/5"
                >
                  <span className="font-de text-2xl font-extrabold">{lvl.code}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-strong">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    امتحان الختم
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* الأسبوعي التجميعي */}
      <Card className="mt-5 border-gold/40 bg-gold/5 transition-all hover:-translate-y-1 hover:shadow-soft">
        <CardHeader className="border-b bg-gold/10">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalendarDays className="h-5 w-5 text-gold-foreground" aria-hidden="true" />
            الاختبار الأسبوعي التجميعي
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            مزيج من المستويات الأربعة مع مستوى تركيز يتجدد كل أسبوع — قس تقدمك التراكمي
            بأسئلة عشوائية مختلفة كل مرة.
          </p>
          <Link
            href="/tests/weekly"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            ابدأ الاختبار الأسبوعي (50 دقيقة)
          </Link>
        </CardContent>
      </Card>

      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
        <BookOpenCheck className="inline h-4 w-4 text-primary" aria-hidden="true" />
        {" "}
        <span className="font-semibold text-foreground">نصيحة:</span> ابدأ باختبار تحديد
        المستوى، ثم انتقل لاختبار نهاية مستواك. اختبارات نهاية الوحدات متاحة من خارطة
        الطريق مباشرة (زر «اختبار الوحدة»).
      </div>
    </div>
  );
}

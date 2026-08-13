"use client";

import Link from "next/link";
import {Award, BookOpenCheck, CalendarDays, ClipboardCheck, GraduationCap, Lock, Mic, Target} from "lucide-react";

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
          Goethe-Zertifikat بتوقيت حقيقي، ومحاكاة الامتحان الشفهي.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
              اختبارات نهاية المستويات — بصيغة Goethe-Zertifikat
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              أقسام حقيقية بتوقيت فعلي: Lesen (قراءة) + Hören (استماع) + Grammatik & Wortschatz
              + Schreiben (كتابة) — يُسلَّم كل قسم تلقائياً عند انتهاء وقته.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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
              80% من وحدات المستوى. كل امتحان بصيغة Goethe-Zertifikat الكاملة.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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

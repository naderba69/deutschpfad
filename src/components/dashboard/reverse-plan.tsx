"use client";

/**
 * الخطة الدراسية العكسية (Reverse Plan) — اقتراح المرحلة النهائية
 * تختار موعد امتحان B2 → تحسب المنصة الأسابيع المتبقية وخطة أسبوعية واقعية
 * عكسياً من الهدف: ما الذي يجب أن تنجزه كل أسبوع للوصول؟
 */
import * as React from "react";
import {CalendarClock, Flag, Lightbulb, Target} from "lucide-react";

import {LESSON_META} from "@/data/lessons/meta"; // مصدر خفيف (بيانات وصفية فقط) — لا يسحب الدروس الكاملة
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {useProgress} from "@/components/providers/progress-provider";
import {getOverallProgress} from "@/lib/progress-selectors";

interface Plan {
  weeks: number;
  lessonsPerWeek: number;
  reviewsPerDay: number;
  testsCount: number;
  weeklyTest: number;
}

function buildPlan(weeks: number): Plan {
  // العدد الحقيقي للدروس (يُشتق من المكتبة) + المراجعات
  const lessonsPerWeek = Math.max(1, Math.ceil(LESSON_META.length / Math.max(1, weeks)));
  const reviewsPerDay = Math.min(30, Math.max(5, Math.round(weeks <= 8 ? 25 : weeks <= 16 ? 15 : 10)));
  const testsCount = Math.max(1, Math.round(weeks / 2)); // اختبار شامل كل أسبوعين
  const weeklyTest = Math.ceil(weeks / 4); // الاختبار الأسبوعي
  return { weeks, lessonsPerWeek, reviewsPerDay, testsCount, weeklyTest };
}

const DEFAULT_DATE = () => {
  const d = new Date();
  d.setMonth(d.getMonth() + 6);
  return d.toISOString().slice(0, 10);
};

export function ReversePlanCard() {
  const { completedUnits, isHydrated } = useProgress();
  const [targetDate, setTargetDate] = React.useState(DEFAULT_DATE);
  const [plan, setPlan] = React.useState<Plan | null>(null);
  const [countdown, setCountdown] = React.useState<{ weeks: number; days: number } | null>(null);

  const progressPct = isHydrated ? getOverallProgress(completedUnits) : 0;

  const generate = () => {
    const target = new Date(targetDate);
    const now = new Date();
    const diffMs = target.getTime() - now.getTime();
    const weeks = Math.max(1, Math.round(diffMs / (7 * 24 * 3600 * 1000)));
    const days = Math.max(0, Math.floor(diffMs / (24 * 3600 * 1000)));
    setCountdown({ weeks, days });
    setPlan(buildPlan(weeks));
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
          الخطة الدراسية العكسية — من موعد الامتحان
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <p className="text-sm text-muted-foreground">
          عكسياً من الهدف: اختر موعد امتحان B2 وتحسب المنصة ما يجب إنجازه كل أسبوع —
          بدل «أتمنى أن أصل»، لديك خطة.
        </p>

        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-40 flex-1">
            <label htmlFor="exam-date" className="mb-1 block text-xs font-bold text-muted-foreground">
              موعد امتحان B2 المستهدف
            </label>
            <Input
              id="exam-date"
              aria-label="موعد امتحان B2 المستهدف"
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>
          <Button onClick={generate} className="gap-1.5">
            <Flag className="h-4 w-4" aria-hidden="true" />
            احسب خطتي
          </Button>
        </div>

        {plan && countdown && (
          <div className="space-y-4 rounded-xl border bg-primary/[0.03] p-4">
            <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-background p-3">
                <p className="font-de text-2xl font-extrabold text-primary">{countdown.weeks}</p>
                <p className="text-[11px] text-muted-foreground">أسبوعاً متبقياً</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <p className="font-de text-2xl font-extrabold text-primary">{plan.lessonsPerWeek}</p>
                <p className="text-[11px] text-muted-foreground">درساً جديداً أسبوعياً</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <p className="font-de text-2xl font-extrabold text-primary">{plan.reviewsPerDay}</p>
                <p className="text-[11px] text-muted-foreground">مراجعة بطاقات يومياً</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <p className="font-de text-2xl font-extrabold text-primary">{plan.testsCount}</p>
                <p className="text-[11px] text-muted-foreground">امتحاناً شاملاً قبل الموعد</p>
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                <span>تقدمك الحالي في المنهج</span>
                <span className="font-de font-bold">{progressPct}%</span>
              </div>
              <Progress value={progressPct} aria-label={`التقدم ${progressPct}%`} />
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-gold/10 p-3 text-sm">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
              <p className="text-muted-foreground">
                <span className="font-bold">إيقاعك الأسبوعي:</span> {plan.lessonsPerWeek} دروس +
                اختبار ختم عند إكمال كل مستوى + {plan.weeklyTest} اختبار أسبوعي تجميعي +
                محاكاة شفهي B2 مرة أسبوعياً. قبل الموعد بأسبوعين: محاكاة امتحان كاملة في
                <span className="font-bold"> /tests/vollpruefung</span>.
              </p>
            </div>

            {/* جدول المهام الأسبوعي اليومي */}
            <div className="rounded-xl border bg-card p-3">
              <p className="mb-2 text-sm font-bold text-primary">🗓️ خطة أسبوعك القادم (يومياً):</p>
              <div className="space-y-1.5 text-xs">
                {[
                  { day: "السبت", tasks: `درس جديد (${plan.lessonsPerWeek} دروس أسبوعياً) + 20 دقيقة مفردات` },
                  { day: "الأحد", tasks: "مراجعة بطاقات SM-2 (" + plan.reviewsPerDay + " بطاقة) + درس جديد" },
                  { day: "الاثنين", tasks: "درس جديد + تمرين كتابة أو إملاء (10 دقائق)" },
                  { day: "الثلاثاء", tasks: "مراجعة بطاقات + استماع (نص واحد من /hoeren)" },
                  { day: "الأربعاء", tasks: "درس جديد + لعبة تركيب جمل (5 دقائق)" },
                  { day: "الخميس", tasks: "مراجعة بطاقات + قراءة (نص من /reading)" },
                  { day: "الجمعة", tasks: "اختبار أسبوعي تجميعي أو محاكاة شفهي B2" },
                ].map((row) => (
                  <div key={row.day} className="flex gap-2 rounded-lg bg-muted/20 px-2.5 py-1.5">
                    <span className="w-14 shrink-0 font-bold text-primary">{row.day}</span>
                    <span className="text-muted-foreground">{row.tasks}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!plan && (
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Target className="h-4 w-4" aria-hidden="true" />
            نصيحة: امنح نفسك 4–6 أشهر من الصفر إلى B2 بوتيرة 5 أيام أسبوعياً.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

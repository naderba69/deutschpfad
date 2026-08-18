import type { Metadata } from "next";

import {Badge} from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "خطة 12 شهراً — من A1 إلى Goethe-B2",
  description:
    "خطة زمنية واقعية للوصول إلى Goethe-Zertifikat B2 في 12 شهراً (90 دقيقة يومياً): مراحل، أهداف أسبوعية، وأدوات المنصة لكل مرحلة.",
};

/** بنية الخطة: 6 مراحل × شهران */
const PLAN = [
  {
    months: "الشهران 1-2",
    level: "A1",
    focus: "الأساس: الأبجدية، النطق، الجمل البسيطة",
    tools: ["دروس A1 (15 درساً)", "مفردات A1 (500+ كلمة)", "بطاقات SM-2 يومياً", "قصص A1"],
    goal: "إكمال A1: التحية، التعريف، التسوق، المواعيد — اختبار مستوى A1 ≥ 60%",
    daily: "درس واحد (45د) + 20 بطاقة (15د) + استماع خارجي (30د)",
  },
  {
    months: "الشهران 3-4",
    level: "A2",
    focus: "التوسع: السفر، الصحة، السكن، الماضي (Perfekt)",
    tools: ["دروس A2 (12 درساً)", "مفردات A2 (500+ كلمة)", "الحوارات اليومية", "مكتبة القراءة A2"],
    goal: "إكمال A2: وصف الماضي، المواعيد، الشكوى — اختبار مستوى A2 ≥ 60%",
    daily: "درس واحد (45د) + 25 بطاقة (15د) + حوار تفاعلي (15د)",
  },
  {
    months: "الشهران 5-6",
    level: "B1",
    focus: "الاستقلالية: Konjunktiv II، Passiv، الجمل الثانوية",
    tools: ["دروس B1 (11 درساً)", "مفردات B1 (900+ كلمة)", "البودكاست (20 حلقة)", "الكتابة: فقرة ← رسالة"],
    goal: "إكمال B1: إبداء الرأي، الحجج البسيطة — اختبار مستوى B1 ≥ 60%",
    daily: "درس واحد (50د) + 30 بطاقة (15د) + بودكاست (25د)",
  },
  {
    months: "الشهران 7-8",
    level: "B1+",
    focus: "تعميق B1: المراجعة التراكمية، امتحان ختم B1",
    tools: ["مراجعة B1 الكاملة", "امتحان ختم B1", "الكتابة: Forumsbeitrag", "الشفهي: Vortrag قصير"],
    goal: "إتقان B1: جمل مركبة بطلاقة — امتحان ختم B1 ناجح",
    daily: "مراجعة (45د) + كتابة يومية (20د) + تحدث (25د)",
  },
  {
    months: "الشهران 9-10",
    level: "B2",
    focus: "النحو المتقدم: Konjunktiv I، Passiv بكل الأزمنة، Nominalisierung",
    tools: ["دروس B2 (10 دروس)", "مفردات B2 (أعلى 1000 تكراراً)", "مكتبة القراءة B2 (نصوص صحفية)", "تدريب القواعد B2 (60 سؤالاً)"],
    goal: "إتقان قواعد B2: النقل غير المباشر، المجهول، الاشتقاق — تدريب B2 ≥ 60%",
    daily: "درس B2 (50د) + قراءة مقال (20د) + مفردات (20د)",
  },
  {
    months: "الشهران 11-12",
    level: "B2 امتحان",
    focus: "التدريب على صيغة الامتحان الحقيقي",
    tools: ["محرك امتحان B2 (3 نماذج × 30+30 سؤالاً)", "استراتيجيات كل Teil", "الكتابة بمحرك الامتحان + مقارنة النماذج", "الشفهي: Vortrag + Diskussion أسبوعياً"],
    goal: "3 محاكاة كاملة: القراءة ≥ 60%، الاستماع ≥ 60%، الكتابة ≥ 60%، التحدث ≥ 60%",
    daily: "Teil واحد من محاكاة (40د) + تصحيح الأخطاء (30د) + مراجعة (20د)",
  },
];

export default function PlanB2Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          خطة 12 شهراً → Goethe-Zertifikat B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          خطة واقعية من 90 دقيقة يومياً (الدروس ~355 ساعة + المراجعة والامتحانات = ~550 ساعة
          فعلية — ضمن النطاق الموصى به من Goethe للدراسة الذاتية). كل مرحلة بشهرين، وأدوات
          المنصة لكل هدف.
        </p>
      </div>

      {/* شريط الإحصاء */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: "12", l: "شهراً" },
          { n: "~90", l: "دقيقة يومياً" },
          { n: "48", l: "درساً" },
          { n: "3", l: "محاكاة B2 كاملة" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border bg-card p-3 text-center">
            <p className="font-de text-2xl font-extrabold text-primary">{s.n}</p>
            <p className="text-xs font-bold text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      {/* المراحل */}
      <div className="space-y-4">
        {PLAN.map((phase, i) => (
          <div key={i} className="overflow-hidden rounded-xl border bg-card">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/20 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-de text-sm font-extrabold text-primary">{i + 1}</span>
                <div>
                  <p className="text-sm font-extrabold">{phase.months}</p>
                  <p className="text-xs text-muted-foreground">{phase.focus}</p>
                </div>
              </div>
              <Badge variant="gold" className="font-de font-bold">{phase.level}</Badge>
            </div>
            <div className="space-y-3 p-4">
              <div>
                <p className="mb-1 text-xs font-extrabold text-muted-foreground">🎯 الهدف:</p>
                <p className="text-sm">{phase.goal}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold text-muted-foreground">🧰 أدوات المنصة:</p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.tools.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-success/30 bg-success/5 p-2.5 text-xs text-muted-foreground">
                📅 <b>الروتين اليومي:</b> {phase.daily}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ملاحظات النجاح */}
      <div className="mt-6 space-y-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <p className="font-extrabold text-gold-strong">📌 قواعد النجاح (من تجربة آلاف الناجحين في Goethe):</p>
        <ul className="space-y-1.5 text-muted-foreground">
          <li>• <b>الاستمرارية أهم من الكثافة:</b> 90 دقيقة يومياً أفضل من 6 ساعات أسبوعياً دفعة واحدة.</li>
          <li>• <b>الاستماع الخارجي إلزامي:</b> بودكاست، مسلسلات، يوتيوب ألماني — الأذن تتعود على الإيقاع.</li>
          <li>• <b>الكتابة أسبوعياً منذ الشهر 3:</b> كل ما تكتبه يحسن تركيب جملتك.</li>
          <li>• <b>لا تنتقل للمستوى التالي قبل اجتياز امتحان ختم المستوى الحالي.</b></li>
          <li>• <b>الشهر 11-12: محاكاة أسبوعية كاملة</b> بتوقيت حقيقي — وليس فقط عند الشعور بالجاهزية.</li>
          <li>• <b>حلل أخطاء المحاكاة:</b> أي Teil أقل من 60% = أعد تدريبه من الدروس قبل المحاولة التالية.</li>
        </ul>
      </div>
    </div>
  );
}

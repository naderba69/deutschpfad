import type { Metadata } from "next";

import {Badge} from "@/components/ui/badge";
import {getLevelLessonCount, TOTAL_LESSONS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "خطة تدريب مقترحة A1–B2",
  description:
    "جدول تدريبي افتراضي يمكن تعديله حسب وقتك وخبرتك. لا يضمن الوصول إلى B2 أو اجتياز امتحان شهادة خلال مدة محددة.",
};

/** بنية الخطة: 6 مراحل × شهران */
const PLAN = [
  {
    months: "الشهران 1-2",
    level: "A1",
    focus: "الأساس: الأبجدية، النطق، الجمل البسيطة",
    tools: [`دروس A1 (${getLevelLessonCount("A1")} درساً)`, "مفردات موضوعية A1", "بطاقات SM-2 يومياً", "قصص A1"],
    goal: "تدريب على التحية والتعريف والتسوق والمواعيد؛ وراجع عينة اختبار A1 التدريبية.",
    daily: "درس واحد + 20 بطاقة (15د) + استماع خارجي (30د)",
  },
  {
    months: "الشهران 3-4",
    level: "A2",
    focus: "التوسع: السفر، الصحة، السكن، الماضي (Perfekt)",
    tools: [`دروس A2 (${getLevelLessonCount("A2")} درساً)`, "مفردات موضوعية A2", "الحوارات اليومية", "مكتبة القراءة A2"],
    goal: "تدريب على وصف الماضي والمواعيد والشكوى، مع مراجعة عينة A2.",
    daily: "درس واحد + 25 بطاقة (15د) + حوار تفاعلي (15د)",
  },
  {
    months: "الشهران 5-6",
    level: "B1",
    focus: "الاستقلالية: Konjunktiv II، Passiv، الجمل الثانوية",
    tools: [`دروس B1 (${getLevelLessonCount("B1")} درساً)`, "مفردات موضوعية B1", "البودكاست (20 حلقة)", "الكتابة: فقرة ← رسالة"],
    goal: "التدرب على إبداء الرأي وبناء الحجج البسيطة، ثم مراجعة عينة B1.",
    daily: "درس واحد + 30 بطاقة (15د) + بودكاست (25د)",
  },
  {
    months: "الشهران 7-8",
    level: "B1+",
    focus: "تعميق B1: المراجعة التراكمية، امتحان ختم B1",
    tools: ["مراجعة B1 الكاملة", "امتحان ختم B1", "الكتابة: Forumsbeitrag", "الشفهي: Vortrag قصير"],
    goal: "مراجعة الجمل المركبة والتدرب على مهام B1.",
    daily: "مراجعة (45د) + كتابة يومية (20د) + تحدث (25د)",
  },
  {
    months: "الشهران 9-10",
    level: "B2",
    focus: "النحو المتقدم: Konjunktiv I، Passiv بكل الأزمنة، Nominalisierung",
    tools: [`دروس B2 (${getLevelLessonCount("B2")} درساً)`, "مفردات B2 موضوعية", "مكتبة القراءة B2 (نصوص صحفية)", "تدريب القواعد B2 (60 سؤالاً)"],
    goal: "راجع النقل غير المباشر والمبني للمجهول والاشتقاق، ثم جرّب مهام تدريب B2.",
    daily: "درس B2 + قراءة مقال (20د) + مفردات (20د)",
  },
  {
    months: "الشهران 11-12",
    level: "B2 — مراجعة",
    focus: "ممارسة مهام تدريبية متنوعة استعداداً لمراجعة مستقلة",
    tools: ["جلسات تدريب B2 متعددة الأقسام", "استراتيجيات كل Teil", "الكتابة بمحرك الامتحان + مقارنة النماذج", "الشفهي: Vortrag + Diskussion أسبوعياً"],
    goal: "جرّب مهام القراءة والاستماع والكتابة والتحدث وراجع أداءك؛ النتائج داخل التطبيق تدريبية وغير معيارية.",
    daily: "Teil واحد من محاكاة (40د) + تصحيح الأخطاء (30د) + مراجعة (20د)",
  },
];

export default function PlanB2Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مثال لخطة تدريب A1–B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          هذا جدول توضيحي يقترح ميزانية تدريب يومية تقارب 90 دقيقة ومراحل من شهرين؛ الأرقام للأنشطة فقط ولا تحدد مدة ثابتة للدرس، ولا تتنبأ بسرعة التعلم أو تضمن الوصول إلى B2. اضبط الجدول بحسب خبرتك ووقتك، واطلب تقييماً مستقلاً قبل أي امتحان.
        </p>
      </div>

      {/* شريط الإحصاء */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: "12", l: "شهراً" },
          { n: "~90", l: "دقيقة يومياً" },
          { n: String(TOTAL_LESSONS), l: "درساً" },
          { n: "3", l: "مراحل تدريب مقترحة" },
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
        <p className="font-extrabold text-gold-strong">📌 اقتراحات لتنظيم الدراسة (ليست ضماناً للنتيجة):</p>
        <ul className="space-y-1.5 text-muted-foreground">
          <li>• <b>اختر وتيرة قابلة للاستمرار:</b> وزّع التدريب وفق وقتك وقدرتك على التركيز.</li>
          <li>• <b>نوّع مواد الاستماع:</b> جرّب بودكاستاً أو فيديو أو حواراً يناسب مستواك.</li>
          <li>• <b>مارس الكتابة بانتظام:</b> واطلب ملاحظات على المعنى واللغة من شخص مؤهل.</li>
          <li>• <b>استخدم اختبار الوحدة بوصفه نقطة مراجعة داخلية، لا دليلاً على إتقان المستوى.</b></li>
          <li>• <b>خصص وقتاً للممارسة والاسترجاع</b> واطلب تقييماً خارجياً قبل التقدم لامتحان رسمي.</li>
          <li>• <b>حلل ملاحظاتك:</b> راجع المهام التي لم تكتمل، واطلب تغذية راجعة بشرية على الكتابة والكلام.</li>
        </ul>
      </div>
    </div>
  );
}

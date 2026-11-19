import type { Metadata } from "next";

import {BookOpen, Heart, Lock, Sparkles, Target, Users} from "lucide-react";

import {TOTAL_LESSONS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "عن المنصة — DeutschPfad",
  description:
    "قصة DeutschPfad: منصة عربية لتعلّم الألمانية عبر مواد تدريبية تستلهم موضوعات من CEFR وGoethe، دون ادعاء اعتماد أو مطابقة رسمية.",
};

const VALUES = [
  { icon: Heart, title: "متاحة دون اشتراك مدفوع حالياً", desc: "يمكن استخدام التدريبات الأساسية حالياً دون اشتراك مدفوع؛ لا يمثل ذلك وعداً دائماً بتوافر الخدمة دون تغيير." },
  { icon: Target, title: "نطاقات تدريبية A1–B2", desc: `${TOTAL_LESSONS} درساً ومواد تستلهم بعض الموضوعات والمهارات من CEFR وGoethe؛ ولا تمثل اعتماداً أو مطابقة رسمية.` },
  { icon: Lock, title: "خصوصية أولاً", desc: "تقدمك يبقى على جهازك — بلا حسابات، ولا أدوات تتبع في شفرة الموقع (ما قد تضيفه خدمة الاستضافة أو المتصفح خارج نطاق المشروع). وتسجيل نطقك للمقارنة الذاتية يُعالج داخل متصفحك، وأما التعرف على الكلام فيخضع لمعالجة المتصفح أو مزوّده (راجع صفحة الخصوصية)." },
  { icon: Sparkles, title: "ممارسة نشطة", desc: "تمارين إنتاج وتفكير لغوي تساعدك على الممارسة؛ تقدّمك يحتاج إلى جهد وتغذية راجعة ولا تضمن هذه الأنشطة إتقان اللغة." },
  { icon: Users, title: "للمجتمع العربي", desc: "صُممت خصيصاً لأخطاء المتعلم العربي: الأجناس، والأصوات الألمانية الخاصة ä ö ü ß، والنطق." },
  { icon: BookOpen, title: "مواد متنوعة", desc: `${TOTAL_LESSONS} درساً + قصص وبودكاست وثقافة ألمانية + اختبارات تدريبية داخلية تستلهم بعض أنماط المهام، وليست محاكاة رسمية لـGoethe.` },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          عن <span dir="ltr">DeutschPfad</span> — درب الألمانية
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-muted-foreground">
          انطلقنا من سؤال بسيط: لماذا يجد المتعلم العربي صعوبة في الألمانية رغم جودة
          المنصات العالمية؟ لأنها لا تشرح بالعربية، ولا تعالج أخطاءه الخاصة. فبنينا
          منصة عربية تجمع منهجية العالم وتفاصيل المتعلم العربي.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <v.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-3 text-base font-extrabold">{v.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
        <h2 className="text-lg font-extrabold">🚀 كيف بدأنا</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          DeutschPfad مشروع تدريبي عربي يضم دروساً وتمارين وأنشطة لممارسة الألمانية. صُممت
          بعض مواده مع مراعاة احتياجات متعلمي العربية، وتعمل بيانات التقدم محلياً على جهازك؛
          أما بعض الميزات المتصلة فقد تعتمد على المتصفح أو مزود الخدمة، كما توضح صفحة الخصوصية.
          تتاح حالياً التدريبات الأساسية دون اشتراك مدفوع.
        </p>
        <p className="mt-4 text-xs font-bold text-muted-foreground">
          DeutschPfad — موارد تدريبية قابلة للتطوير والمراجعة.
        </p>
      </div>
    </div>
  );
}

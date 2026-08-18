import type { Metadata } from "next";

import {BookOpen, Heart, Lock, Sparkles, Target, Users} from "lucide-react";

export const metadata: Metadata = {
  title: "عن المنصة — DeutschPfad",
  description:
    "قصة DeutschPfad: منصة عربية مجانية 100% لتعليم الألمانية بمنهجية معهد غوته ومعايير CEFR — لماذا نؤمن بأن إتقان اللغة حق للجميع.",
};

const VALUES = [
  { icon: Heart, title: "مجانية 100%", desc: "بلا اشتراكات ولا إعلانات ولا مدفوعات — مدى الحياة. التعليم الجيد ليس سلعة." },
  { icon: Target, title: "منهجية Goethe/CEFR", desc: "48 درساً متسلسلاً من A1 حتى B2 وفق منهجية معهد غوته والإطار الأوروبي المرجعي." },
  { icon: Lock, title: "خصوصية كاملة", desc: "تقدمك يبقى على جهازك فقط — بلا حسابات ولا تتبع. حتى صوتك لا يغادر متصفحك." },
  { icon: Sparkles, title: "إتقان لا تلقين", desc: "تمارين إنتاج وتفكير لغوي لا حفظ — تخرج تتقن اللغة لا تحفظها." },
  { icon: Users, title: "للمجتمع العربي", desc: "صُممت خصيصاً لأخطاء المتعلم العربي: الأجناس، الهملات ä ö ü ß، والنطق." },
  { icon: BookOpen, title: "محتوى غني", desc: "48 درساً + 60 قصة + 20 بودكاست + ثقافة ألمانية + اختبارات محاكاة Goethe." },
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
          DeutschPfad وُلد من رحلة تعلم شخصية. بعد تجربة المنصات العالمية، أدركنا أن
          العربية بحاجة إلى منصة تجمع: منهجية Goethe الصارمة، أخطاء المتعلم العربي
          المحددة، واللعب الذي يحفز الاستمرار — وكل ذلك مجاناً تماماً. المنصة تعمل
          بالكامل في متصفحك: سريعة، خاصة، ومتاحة للجميع.
        </p>
        <p className="mt-4 text-xs font-bold text-muted-foreground">
          DeutschPfad — مجانية للأبد، لأن إتقان لغة جديدة حقٌّ لا امتياز.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخصوصية والشفافية — DeutschPfad",
  description:
    "معلومات عن تخزين بيانات التعلم محلياً ومعالجة الصوت والاتصال بالإنترنت في DeutschPfad.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-balance text-3xl font-extrabold tracking-tight">
        🔒 الخصوصية والشفافية
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        DeutschPfad منصة مجانية 100% — والخصوصية جزء من تصميمها الأساسي.
      </p>

      <div className="mt-8 space-y-5">
        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">1. تقدمك يبقى على جهازك فقط</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            لا توجد حسابات ولا خوادم تخزن تقدمك. كل بياناتك (دروس مكتملة، نقاط، جواهر،
            بطاقات، أخطاء، قصص) تُحفظ محلياً في متصفحك عبر LocalStorage وIndexedDB.
            حتى لو شاركت الموقع مع صديقك، فلكل منكما تقدمه المستقل على متصفحه.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">2. التعرف على الكلام والتسجيل الذاتي</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            تستخدم المقارنة الآلية واجهة التعرف على الكلام التي يوفرها المتصفح. بحسب المتصفح
            ونظام التشغيل وإعداداتهما، قد تتم معالجة الصوت على الجهاز أو إرساله عبر الإنترنت
            إلى خدمة التعرف؛ لا يتحكم DeutschPfad في ذلك، لذا راجع سياسة الخصوصية والإعدادات.
            النتيجة تقارن التفريغ النصي بالهدف ولا تقيس مخارج الحروف أو النبر. أما وضع
            «سجّل واستمع لنفسك» فيبني التسجيل ويشغّله داخل المتصفح، ولا يرفع التطبيق ملفه إلى
            خادم.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">3. ماذا يحدث عند حذف المتصفح؟</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            مسح بيانات المتصفح (أو فتح نافذة خاصة) يمسح تقدمك. ننصحك بتصدير نسخة
            احتياطية بانتظام من صفحة الإعدادات ← «النسخ الاحتياطي» واستيرادها بعد
            أي مسح.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">4. الإعلانات وأدوات التتبع</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            لا نعرض إعلانات، ولم نعثر في الشفرة الحالية التي راجعناها على تكامل مباشر مع أداة
            تتبع خارجية. هذه ملاحظة عن شفرة الموقع في المستودع، وليست تحققاً مستقلاً من أدوات
            قد تضيفها خدمة الاستضافة أو المتصفح. يظل التعرف على الكلام خاضعاً لمعالجة المتصفح
            أو مزوّده كما هو موضح أعلاه؛ أما التسجيل الذاتي فيقارن محلياً ولا يرفع التطبيق ملف
            الصوت. المنصة مجانية بلا مقابل مالي.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">5. متى يُستخدم الإنترنت؟</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            الموقع يعمل كتطبيق PWA: بعد أول زيارة يمكن تثبيته واستخدام كثير من ميزاته دون اتصال.
            قد تحتاج الصفحات الجديدة وأدوات الذكاء الاصطناعي الاختيارية (المتصلة بمزوّد خدمة خارجي
            بمفاتيحك) أو التعرف على الكلام إلى الإنترنت؛ يعتمد ذلك على الميزة والمتصفح ومزوّده.
          </p>
        </section>

        <p className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs leading-relaxed text-muted-foreground">
          آخر تحديث: 2026-08-14 · لأي استفسار حول الخصوصية، راسلنا عبر صفحة الأسئلة
          الشائعة أو من خلال صفحة المشروع على GitHub.
        </p>
      </div>
    </div>
  );
}

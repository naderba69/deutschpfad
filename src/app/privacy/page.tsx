import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخصوصية والشفافية — DeutschPfad",
  description:
    "كيف نتعامل مع بياناتك في DeutschPfad: خصوصية كاملة، بلا حسابات، بلا إعلانات، تقدمك يبقى على جهازك.",
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
          <h2 className="text-lg font-extrabold">2. صوتك لا يُرسل لأي خادم</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            تقييم النطق يعمل بالكامل داخل متصفحك (Web Speech API). تسجيلاتك الصوتية
            في وضع «سجّل واستمع لنفسك» لا تغادر جهازك إطلاقاً.
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
          <h2 className="text-lg font-extrabold">4. لا إعلانات ولا تتبع</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            لا نعرض إعلانات، ولا نستخدم أدوات تتبع خارجية، ولا نشارك بياناتك مع أي
            طرف ثالث. المنصة مجانية بالكامل بلا أي مقابل مالي.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">5. متى يُستخدم الإنترنت؟</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            الموقع يعمل كتطبيق PWA: بعد أول زيارة يمكن تثبيته والعمل عليه دون اتصال
            لمعظم الميزات. الإنترنت مطلوب فقط لتحميل الصفحات الجديدة أو عند تفعيل
            أدوات الذكاء الاصطناعي الاختيارية (تتصل بمزود خدمة خارجي بمفاتيحك أنت).
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

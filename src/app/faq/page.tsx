import type { Metadata } from "next";

import { FAQ_ITEMS } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة — تعلم الألمانية وشهادة B2",
  description:
    "إجابات على أكثر الأسئلة شيوعاً عن تعلم الألمانية عبر درب الألمانية: مدة الوصول لـ B2، مطابقة امتحانات Goethe، امتحان الختم، العمل دون إنترنت، وخصوصية البيانات.",
};

/** بيانات منظمة FAQPage للبحث */
export const dynamic = "force-static";

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          }),
        }}
      />
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الأسئلة الشائعة
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          كل ما تحتاج معرفته عن المنهج، امتحانات Goethe، الختم، والعمل دون إنترنت — بوضوح
          ودقة.
        </p>
      </div>

      <div className="space-y-6">
        {[...new Set(FAQ_ITEMS.map((i) => i.category))].map((cat) => (
          <section key={cat} aria-label={cat}>
            <h2 className="mb-3 text-lg font-extrabold text-primary">{cat}</h2>
            <div className="space-y-3">
              {FAQ_ITEMS.filter((i) => i.category === cat).map((item, idx) => (
                <details key={idx} className="group rounded-xl border bg-card open:border-primary/40">
                  <summary className="cursor-pointer list-none px-4 py-3 font-bold transition-colors hover:text-primary">
                    <span className="me-2 text-primary">❓</span>
                    {item.q}
                  </summary>
                  <div className="border-t bg-muted/20 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        لم تجد إجابتك؟ اسأل المعلّم الافتراضي في{" "}
        <a href="/assistant" className="font-bold text-primary underline underline-offset-2">
          /assistant
        </a>{" "}
        — {siteConfig.name} جاهز دائماً.
      </p>
    </div>
  );
}

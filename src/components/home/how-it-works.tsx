import {SectionHeading} from "@/components/shared/section-heading";
import {STEPS} from "@/lib/constants/site-content";

/**
 * آلية العمل — 4 خطوات بيداغوجية
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y bg-muted/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="كيف تعمل المنصة؟"
          title="منهجية تعلم مثبتة في 4 خطوات"
          description="مسار بيداغوجي منظم: قياس → تعلم → مراجعة → شهادة، بنفس منطق الدورات المكثفة في معهد غوته."
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative flex flex-col items-start gap-4">
              {/* خط الوصل بين الخطوات (ديسكتوب) */}
              {index < STEPS.length - 1 && (
                <span
                  className="absolute end-[-2.25rem] top-7 hidden h-px w-14 bg-gradient-to-l from-primary/40 to-transparent md:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-primary-foreground shadow-soft">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="absolute -end-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-gold font-de text-xs font-bold text-gold-foreground">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

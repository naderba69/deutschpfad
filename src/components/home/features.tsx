import {SectionHeading} from "@/components/shared/section-heading";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {FEATURES} from "@/lib/constants/site-content";

/**
 * شبكة المميزات الرئيسية للمنصة
 */
export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="لماذا درب الألمانية؟"
        title="كل ما يحتاجه متعلم الألمانية في مكان واحد"
        description="بنينا المنصة لتكون بديلاً كاملاً عن الأستاذ الخصوصي — محتوى أكاديمي صارم مع تقنية تجعل التعلم ممتعاً وفعالاً."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
          >
            <CardHeader>
              <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

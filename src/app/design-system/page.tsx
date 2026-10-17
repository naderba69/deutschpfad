import type { Metadata } from "next";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import {Skeleton} from "@/components/ui/skeleton";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {LangDe} from "@/components/shared/lang-de";
import {SectionHeading} from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "نظام التصميم (Design System)",
  description: "دليل التصميم الحي للمنصة: الألوان، الخطوط، المكونات، واتجاهات RTL/LTR.",
};

/** لوحة ألوان مرجعية من المتغيرات */
const COLOR_TOKENS: { name: string; variable: string; isText?: boolean }[] = [
  { name: "الخلفية", variable: "background" },
  { name: "النص الأساسي", variable: "foreground", isText: true },
  { name: "البطاقة", variable: "card" },
  { name: "أساسي (Primary)", variable: "primary" },
  { name: "ثانوي (Secondary)", variable: "secondary" },
  { name: "خافت (Muted)", variable: "muted" },
  { name: "تمييز (Accent)", variable: "accent" },
  { name: "خطأ (Destructive)", variable: "destructive" },
  { name: "نجاح (Success)", variable: "success" },
  { name: "ذهبي (Gold)", variable: "gold" },
  { name: "الحدود", variable: "border" },
  { name: "التوهج (Ring)", variable: "ring" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
      <Separator className="!mt-8" />
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-12">
        <SectionHeading
          align="start"
          as="h1"
          eyebrow="Design System"
          title="نظام التصميم الموحد"
          description="مرجع حي لجميع المكونات والأنماط المستخدمة في المنصة. جرّب زر تبديل المظهر (فاتح/داكن) أعلاه لترى الفرق."
        />
      </div>

      {/* الألوان */}
      <Section title="الألوان (Design Tokens)">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {COLOR_TOKENS.map((token) => (
            <div key={token.variable} className="rounded-xl border p-3">
              <div
                className="h-16 rounded-lg border border-black/5"
                style={{
                  background: token.isText
                    ? "hsl(var(--foreground))"
                    : `hsl(var(--${token.variable}))`,
                }}
              />
              <p className="mt-2 text-sm font-semibold">{token.name}</p>
              <p className="font-de text-[11px] text-muted-foreground" dir="ltr">
                hsl(var(--{token.variable}))
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          الألوان معرّفة بمتغيرات CSS وتتبدل تلقائياً بين الوضعين الفاتح والداكن.
        </p>
      </Section>

      {/* الخطوط */}
      <Section title="الخطوط (Typography)">
        <Card>
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">العربية — Tajawal</p>
              <p className="text-2xl font-bold">مرحباً بكم في رحلة تعلم اللغة الألمانية 🌍</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                الألمانية — Inter (عبر مكوّن LangDe)
              </p>
              <p className="font-de text-2xl font-bold" dir="ltr" lang="de">
                Herzlich willkommen zum Deutschkurs!
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground">مزج العربية والألمانية</p>
              <p className="text-lg">
                في ألمانيا تقول <LangDe className="font-semibold">Guten Morgen</LangDe> عند
                الصباح، و<LangDe className="font-semibold">Gute Nacht</LangDe> عند النوم.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* الأزرار */}
      <Section title="الأزرار (Buttons)">
        <div className="flex flex-wrap items-center gap-3">
          <Button>أساسي</Button>
          <Button variant="secondary">ثانوي</Button>
          <Button variant="outline">محدد</Button>
          <Button variant="ghost">شفاف</Button>
          <Button variant="destructive">حذف</Button>
          <Button variant="gold">ذهبي (CTA)</Button>
          <Button variant="link">رابط</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">صغير</Button>
          <Button size="default">متوسط</Button>
          <Button size="lg">كبير</Button>
          <Button size="icon" aria-label="زر أيقونة">
            ⭐
          </Button>
          <Button disabled>معطّل</Button>
        </div>
      </Section>

      {/* الشارات */}
      <Section title="الشارات (Badges)">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>أساسي</Badge>
          <Badge variant="secondary">ثانوي</Badge>
          <Badge variant="outline">محدد</Badge>
          <Badge variant="destructive">خطأ</Badge>
          <Badge variant="success">مكتمل</Badge>
          <Badge variant="gold">مستواك الحالي</Badge>
          <Badge variant="outline" className="font-de font-bold">
            A1
          </Badge>
        </div>
      </Section>

      {/* التقدم */}
      <Section title="أشرطة التقدم (Progress)">
        <div className="space-y-4">
          <Progress value={25} aria-label="تقدم 25%" />
          <Progress value={65} aria-label="تقدم 65%" />
          <Progress value={100} aria-label="تقدم 100%" />
        </div>
        <p className="text-sm text-muted-foreground">
          الأشرطة تدعم RTL/LTR: تبدأ من اليمين في الواجهة العربية تلقائياً.
        </p>
      </Section>

      {/* البطاقات */}
      <Section title="البطاقات (Cards)">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>بطاقة درس</CardTitle>
              <CardDescription>وصف مختصر للدرس يظهر تحت العنوان.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                محتوى البطاقة — مفردات وقواعد ونشاطات.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle>بطاقة مميزة</CardTitle>
              <CardDescription>مثال: الدرس الحالي في المسار.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">محتوى مميز بلون أساسي خفيف.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <LangDe className="font-bold">Grundwortschatz</LangDe>
              </CardTitle>
              <CardDescription>مزج اللغتين داخل البطاقة.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                مفردات أساسية: <LangDe>das Haus</LangDe>، <LangDe>die Schule</LangDe>،{" "}
                <LangDe>der Freund</LangDe>.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* تلميحات + أكورديون + هيكل */}
      <Section title="تلميحات، أكورديون وهياكل">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>تلميح (Tooltip)</CardTitle>
              <CardDescription>مرر المؤشر فوق الزر</CardDescription>
            </CardHeader>
            <CardContent>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">مرّر فوقي 👆</Button>
                  </TooltipTrigger>
                  <TooltipContent>هذا تلميح توضيحي أنيق</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>هيكل تحميل (Skeleton)</CardTitle>
              <CardDescription>عرض أثناء التحميل</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="a">
                <AccordionTrigger>ما الأكورديون؟</AccordionTrigger>
                <AccordionContent>
                  مكوّن قائم على Radix UI — يُستخدم في الأسئلة الشائعة وأقسام الدروس.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>
                  <LangDe className="font-semibold">Warum Deutsch?</LangDe>
                </AccordionTrigger>
                <AccordionContent>
                  الألمانية اللغة الأكثر تحدثاً في الاتحاد الأوروبي، وبوابة للدراسة والعمل في
                  ألمانيا والنمسا وسويسرا.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </Section>

      {/* الزوايا والمسافات */}
      <Section title="الزوايا (Border Radius)">
        <div className="flex flex-wrap items-end gap-6">
          {[
            { label: "sm", cls: "rounded-sm" },
            { label: "md", cls: "rounded-md" },
            { label: "lg", cls: "rounded-lg" },
            { label: "xl (بطاقات)", cls: "rounded-xl" },
            { label: "2xl", cls: "rounded-2xl" },
            { label: "3xl", cls: "rounded-3xl" },
          ].map(({ label, cls }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`h-14 w-14 border-2 border-primary/40 bg-primary/10 ${cls}`} />
              <span className="font-de text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* RTL / LTR */}
      <Section title="RTL / LTR">
        <Card>
          <CardContent className="space-y-3 p-6">
            <p>
              الواجهة عربية بالكامل (اتجاه <code className="font-de">rtl</code>) — جرّب أن
              تمسح هذا النص من اليمين إلى اليسار.
            </p>
            <p>
              المحتوى الألماني يُعرض دائماً باتجاه <code className="font-de">ltr</code> عبر
              مكوّن <code className="font-de">&lt;LangDe&gt;</code>:{" "}
              <LangDe className="font-semibold">Ich lerne Deutsch mit Freude!</LangDe>
            </p>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}

import {SectionHeading} from "@/components/shared/section-heading";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Card, CardContent} from "@/components/ui/card";
import {FAQS} from "@/lib/constants/site-content";

/**
 * الأسئلة الشائعة
 */
export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="أسئلة شائعة"
        title="كل ما تريد معرفته قبل البدء"
        description="إجابات مختصرة على أكثر الأسئلة تكراراً من المتعلمين العرب."
      />

      <Card className="mt-10">
        <CardContent className="p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}

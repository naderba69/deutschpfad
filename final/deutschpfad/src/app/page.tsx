import {Faq} from "@/components/home/faq";
import {Features} from "@/components/home/features";
import {FinalCta} from "@/components/home/final-cta";
import {Hero} from "@/components/home/hero";
import {HowItWorks} from "@/components/home/how-it-works";
import {LearnerJourney} from "@/components/home/learner-journey";
import {LevelsPreview} from "@/components/home/levels-preview";
import {StatsBar} from "@/components/home/stats-bar";

/**
 * الصفحة الرئيسية — ترتيب الأقسام البيداغوجية
 * (لوحة الرحلة تتصدر الصفحة: ترحيب + استئناف + نقطة البداية)
 */
export default function HomePage() {
  return (
    <>
      <LearnerJourney />
      <Hero />
      <StatsBar />
      <Features />
      <LevelsPreview />
      <HowItWorks />
      <Faq />
      <FinalCta />
    </>
  );
}

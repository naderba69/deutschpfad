import type { Metadata } from "next";

import {HomeContent} from "@/components/home/home-content";
import {TOTAL_LESSONS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "درب الألمانية — DeutschPfad: تعلّم الألمانية من الصفر حتى الاحتراف (A1→B2)",
  description: `منصة عربية مجانية 100% لتعليم الألمانية ضمن مسار تدريبي من A1 إلى B2: ${TOTAL_LESSONS} درساً تفاعلياً، تدريب نطق ذاتي، قصص، بودكاست، ومحاكاة امتحانات Goethe. ليست اعتماداً رسمياً أو تقييماً كاملاً لمستوى CEFR.`,
};

/**
 * الصفحة الرئيسية الذكية:
 * — مسجّل: يرى مساره مباشرة (لوحة الرحلة + نقاط الاستئناف)
 * — زائر: يرى الترويج ثم يبدأ
 */
export default function HomePage() {
  return <HomeContent />;
}

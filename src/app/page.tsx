import type { Metadata } from "next";

import {HomeContent} from "@/components/home/home-content";
import {TOTAL_LESSONS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "درب الألمانية — DeutschPfad: تعلّم الألمانية من الصفر حتى B2 بثقة (A1→B2)",
  description: `منصة عربية لتعلّم الألمانية عبر ${TOTAL_LESSONS} درساً تفاعلياً ومواد تدريبية في نطاقات A1–B2 تستلهم موضوعات من CEFR وGoethe، دون ادعاء اعتماد أو مطابقة رسمية. تتضمن نطقاً وتمارين وقصصاً وبودكاست.`,
};

/**
 * الصفحة الرئيسية الذكية:
 * — مسجّل: يرى مساره مباشرة (لوحة الرحلة + نقاط الاستئناف)
 * — زائر: يرى الترويج ثم يبدأ
 */
export default function HomePage() {
  return <HomeContent />;
}

import type { Metadata } from "next";

import {HomeContent} from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "درب الألمانية — DeutschPfad: تعلّم الألمانية من الصفر حتى الاحتراف (A1→B2)",
  description:
    "منصة عربية مجانية 100% لتعليم الألمانية بمنهجية معهد غوته ومعايير CEFR: 48 درساً تفاعلياً، نطق مقيَّم، قصص، بودكاست، واختبارات محاكاة Goethe — من A1 حتى B2.",
};

/**
 * الصفحة الرئيسية الذكية:
 * — مسجّل: يرى مساره مباشرة (لوحة الرحلة + نقاط الاستئناف)
 * — زائر: يرى الترويج ثم يبدأ
 */
export default function HomePage() {
  return <HomeContent />;
}

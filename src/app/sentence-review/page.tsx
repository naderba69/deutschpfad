import type { Metadata } from "next";

import {SentenceReview} from "@/components/flashcards/sentence-review";

export const metadata: Metadata = {
  title: "مراجعة الجمل (SRS) — DeutschPfad",
  description:
    "راجع الجمل الكاملة من دروسك المكتملة بتكرار متباعد (SM-2): اعرض، استمع، اكشف الترجمة، وقيّم — الجمل لا الكلمات المنعزلة تبني الطلاقة.",
};

export default function SentenceReviewPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          🧠 مراجعة الجمل
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          كل جملة من دروسك المكتملة تُضاف تلقائياً إلى نظام التكرار المتباعد (SM-2).
          النظام يذكّرك بكل جملة في اللحظة المثالية قبل نسيانها — وهذا ما يبني الطلاقة
          الحقيقية: جمل كاملة في سياق، لا كلمات منعزلة.
        </p>
      </div>
      <SentenceReview />
    </div>
  );
}

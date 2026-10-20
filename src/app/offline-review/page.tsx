import type { Metadata } from "next";

import {OfflineReviewClient} from "@/components/offline/offline-review-client";

export const metadata: Metadata = {
  title: "المراجعة دون إنترنت — مفرداتك في جيبك",
  description:
    "راجع المفردات والنطق دون إنترنت: البيانات محفوظة في جهازك والنطق محلي (TTS). مثالية للطيران والمناطق بلا شبكة.",
};

export default function OfflineReviewPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المراجعة دون إنترنت 📴
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          كل مفرداتك (A1→B2) محفوظة في جهازك والنطق محلي — راجع في الطائرة، في المترو، أو
          في أي مكان بلا شبكة. جرّب: فعّل وضع الطيران وافتح هذه الصفحة!
        </p>
      </div>
      <OfflineReviewClient />
    </div>
  );
}

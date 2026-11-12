import type { Metadata } from "next";

import {FavoritesClient} from "@/components/favorites/favorites-client";

export const metadata: Metadata = {
  title: "المفضلة — دروسك وكلماتك المحفوظة",
  description:
    "عناصر حفظتها للوصول السريع والمراجعة في درب الألمانية: دروس وكلمات مفضلة في مكان واحد. تُحفظ محلياً في متصفحك فقط.",
};

export default function FavoritesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المفضلة
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          الدروس والكلمات التي حفظتها للوصول السريع والمراجعة.
          اضغط النجمة بجانب أي درس أو كلمة لحفظها هنا.
          تُحفظ في متصفحك فقط ولا تُزامَن بين الأجهزة.
        </p>
      </div>
      <FavoritesClient />
    </div>
  );
}

import type { Metadata } from "next";

import {FiveMinutes} from "@/components/dashboard/five-minutes";

export const metadata: Metadata = {
  title: "وضع 5 دقائق — الكبسولة اليومية",
  description:
    "كبسولة يومية سريعة: كلمة اليوم + 3 تمارين + درس مقترح — كلها في 5 دقائق للأيام المزدحمة.",
};

export default function FiveMinutesPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          وضع 5 دقائق ⚡
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          يوم مزدحم؟ لا مشكلة — كبسولة مركزة تبقيك على اتصال باللغة: كلمة اليوم، ثلاثة
          تمارين سريعة، ودرس مقترح من مستواك الحالي.
        </p>
      </div>
      <FiveMinutes />
    </div>
  );
}

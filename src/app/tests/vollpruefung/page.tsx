import type { Metadata } from "next";

import {LazyVollPruefung} from "@/components/tests/lazy/lazy-vollpruefung";

export const metadata: Metadata = {
  title: "الامتحان الكامل: A1 ثم A2 ثم B1 ثم B2",
  description:
    "امتحان تدريبي كامل بالترتيب: A1 ثم A2 ثم B1 ثم B2، بالأقسام نفسها في كل مستوى. تدريب داخلي وليس امتحاناً رسمياً ولا يعطي نتيجة Goethe.",
};

export default function VollPruefungPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الامتحان الكامل بالترتيب
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          أكمل المستويات A1 ثم A2 ثم B1 ثم B2 بالترتيب. كل مرحلة تعرض أقسام الامتحان نفسها في مستواها.
        </p>
      </div>
      <LazyVollPruefung />
    </div>
  );
}

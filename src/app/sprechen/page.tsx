import type { Metadata } from "next";

import {MündlichePrüfung} from "@/components/speaking/muendliche-pruefung";

export const metadata: Metadata = {
  title: "محاكاة الامتحان الشفهي (Mündliche Prüfung)",
  description:
    "تدرب على الامتحان الشفهي بنمط Goethe-Zertifikat: تقديم النفس، حديث عن موضوع، وحل مشكلة — مع تسجيل صوتي لإجاباتك.",
};

export default function SprechenPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          محاكاة الامتحان الشفهي
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          ثلاثة أجزاء بنمط Goethe-Zertifikat: قدّم نفسك، تحدث عن موضوع، وحل مشكلة — سجّل
          إجاباتك (أو اكتبها) ثم راجعها.
        </p>
      </div>
      <MündlichePrüfung />
    </div>
  );
}

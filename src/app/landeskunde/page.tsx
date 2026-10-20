import type { Metadata } from "next";

import {LandeskundeClient} from "@/components/landeskunde/landeskunde-client";

export const metadata: Metadata = {
  title: "الثقافة الألمانية (Landeskunde) — DeutschPfad",
  description:
    "بطاقات ثقافية متدرجة A1→B2: الأعياد، العادات، المدن، التاريخ، والاقتصاد — لأن فهم الثقافة جزء أساسي من إتقان اللغة وامتحان Goethe.",
};

export default function LandeskundePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🏰 الثقافة الألمانية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اللغة ليست كلمات فقط — إنها ثقافة. بطاقات متدرجة حسب مستواك: اقرأ بالألمانية،
          افهم بالعربية، واحفظ الحقائق المهمة التي تظهر في امتحانات Goethe.
        </p>
      </div>
      <LandeskundeClient />
    </div>
  );
}

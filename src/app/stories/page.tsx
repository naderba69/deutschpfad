import type { Metadata } from "next";

import {StoriesLibrary} from "@/components/stories/stories-library";

export const metadata: Metadata = {
  title: "القصص التفاعلية — DeutschPfad",
  description:
    "قصص قصيرة تفاعلية متدرجة A1→B2: اقرأ بالألمانية، استمع للنطق، أجب عن أسئلة الفهم، واختر مسار القصة — القراءة المتدرجة أقوى طريقة لبناء الطلاقة.",
};

export default function StoriesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          📖 القصص التفاعلية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          قصص قصيرة مصممة لكل مستوى بأسلوب Duolingo Stories: اقرأ، استمع، فهم، واختر
          كيف تتطور الحكاية. كل قصة تركّز على مفردات وقواعد محددة — تعلّم اللغة في
          سياق حقيقي، لا في جمل معزولة.
        </p>
      </div>
      <StoriesLibrary />
    </div>
  );
}

import type { Metadata } from "next";

import {DialoguePlayer} from "@/components/dialogues/dialogue-player";
import {DIALOGUES} from "@/data/supplemental/dialogues";

export const metadata: Metadata = {
  title: "سيناريوهات المحادثة المتفرعة",
  description:
    "مواقف تفاعلية تتفرع حسب اختياراتك: في المقهى، عند الطبيب، مقابلة عمل — تدرب على ردودك الفعلية.",
};

export default function DialoguesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          سيناريوهات المحادثة المتفرعة
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اختر ردك في كل موقف — يتفرع الحوار حسب قرارك، ويرشدك المعلّم للردود الأفضل
          بملاحظات فورية. كل سيناريو له نهايات متعددة!
        </p>
      </div>
      <div className="space-y-6">
        {DIALOGUES.map((d) => (
          <DialoguePlayer key={d.id} dialogueId={d.id} />
        ))}
      </div>
    </div>
  );
}

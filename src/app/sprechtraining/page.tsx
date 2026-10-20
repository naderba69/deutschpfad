import type { Metadata } from "next";

import {AiVoiceTeacher} from "@/components/ai/voice-teacher";

export const metadata: Metadata = {
  title: "تدريب التحدث الصوتي — تحدث ألمانياً بصوتك",
  description:
    "تدرّب على المحادثة الألمانية صوتياً: وضع موجه (أسئلة جاهزة بلا مفاتيح — استمع وأجب وقارن بالنموذج) ووضع محادثة حرة ذكية ترد عليك صوتاً (يتطلب مفاتيح LLM).",
};

export default function SprechTrainingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب التحدث الصوتي 🎤
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          تحدث بالألمانية بصوتك وتلقَّ رداً فورياً:
          <span className="font-bold"> الوضع الموجه</span> (يعمل الآن بلا أي مفاتيح — استمع
          للسؤال، أجب بالميكروفون، قارن بالنموذج) و<span className="font-bold">المحادثة
          الحرة</span> (شريك ذكي يرد عليك نطقاً — عند إضافة مفاتيح LLM من الإعدادات).
        </p>
      </div>
      <AiVoiceTeacher />
    </div>
  );
}

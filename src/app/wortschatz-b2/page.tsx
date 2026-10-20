import type { Metadata } from "next";

import {B2TopicsClient} from "@/components/glossar/b2-topics-client";
import {B2_EXAM_TOPICS, TOTAL_B2_TOPIC_WORDS} from "@/data/vocabulary/b2-topics";

export const metadata: Metadata = {
  title: "مفردات B2 — المواضيع الـ18 الرسمية لامتحان Goethe",
  description:
    "بنك مفردات B2 منظم حسب المواضيع الـ18 الرسمية لامتحان Goethe-Zertifikat: عمل، تعليم، صحة، بيئة، اقتصاد، علوم... مع نطق وإضافة مباشرة لبطاقات المراجعة الذكية.",
};

export default function WortschatzB2Page() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مفردات B2 — المواضيع الـ18 الرسمية
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          {TOTAL_B2_TOPIC_WORDS} كلمة وتركيباً موزعة على مواضيع امتحان Goethe B2 الرسمية
          الـ18 ({B2_EXAM_TOPICS.length} موضوعاً) — اضغط أي موضوع لتصفية مفرداته، ابحث،
          استمع للنطق، وأضف ما تحتاجه إلى بطاقات المراجعة الذكية (SM-2).
        </p>
        {/* بوابة Top 500 للامتحان */}
        <a
          href="/wortschatz-b2/top500"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-extrabold text-gold-strong transition-all hover:-translate-y-0.5 hover:shadow-soft"
        >
          🔥 أهم 500 كلمة في الامتحان (Top 500) — مرتبة بالتواتر والموضوع ←
        </a>
      </div>
      <B2TopicsClient />
    </div>
  );
}

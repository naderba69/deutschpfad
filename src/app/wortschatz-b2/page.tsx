import type { Metadata } from "next";

import {B2TopicsClient} from "@/components/glossar/b2-topics-client";
import {B2_EXAM_TOPICS, TOTAL_B2_TOPIC_WORDS} from "@/data/vocabulary/b2-topics";

export const metadata: Metadata = {
  title: "مفردات وتعبيرات للتدرب على موضوعات B2",
  description:
    "بنك مفردات ألمانية مقسم إلى 18 موضوعاً تدريبياً من إعداد المنصة، مع نطق وإضافة إلى بطاقات المراجعة. لا تمثل القائمة منهجاً رسمياً أو قائمة Goethe معتمدة.",
};

export default function WortschatzB2Page() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مفردات B2 — 18 موضوعاً تدريبياً
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          {TOTAL_B2_TOPIC_WORDS} كلمة وتركيباً موزعة على {B2_EXAM_TOPICS.length} موضوعاً تدريبياً اختيرت لتنظيم مفردات B2. تصنيف المنصة ليس قائمة رسمية أو شاملة لموضوعات Goethe. اضغط موضوعاً للتصفية، وابحث واستمع للنطق وأضف كلمات إلى بطاقات المراجعة (SM-2).
        </p>
        {/* قائمة مراجعة إضافية */}
        <a
          href="/wortschatz-b2/top500"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-extrabold text-gold-strong transition-all hover:-translate-y-0.5 hover:shadow-soft"
        >
          🔥 500 كلمة وتعبير للمراجعة — مرتبة بأولوية تدريبية ←
        </a>
      </div>
      <B2TopicsClient />
    </div>
  );
}

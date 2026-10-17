"use client";

/**
 * مفردات B2 حسب المواضيع الـ18 الرسمية لامتحان Goethe
 * — فلترة بالموضوع + بحث + نطق + إضافة للبطاقات (SM-2) —
 */
import * as React from "react";
import {BookMarked, Check, Search} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {B2_EXAM_TOPICS, B2_TOPIC_VOCAB, getB2TopicWords, type B2ExamTopic} from "@/data/vocabulary/b2-topics";
import type { VocabEntry } from "@/data/vocabulary/a1";
import {addManualCard} from "@/lib/srs/flashcard-service";
import {cn} from "@/lib/utils";

export function B2TopicsClient() {
  const [topic, setTopic] = React.useState<B2ExamTopic | null>(null);
  const [query, setQuery] = React.useState("");
  const [added, setAdded] = React.useState<Set<string>>(new Set());

  const words = topic ? getB2TopicWords(topic.id) : Object.values(B2_TOPIC_VOCAB).flat();
  const filtered = words.filter(
    (w) =>
      !query.trim() ||
      w.de.toLowerCase().includes(query.toLowerCase()) ||
      w.ar.includes(query.trim()),
  );

  const addCard = async (w: VocabEntry) => {
    try {
      await addManualCard({ de: w.de, ar: w.ar, example: w.ex, level: "B2" });
      setAdded((prev) => new Set(prev).add(w.de));
    } catch {
      /* تجاهل */
    }
  };

  return (
    <div className="space-y-6">
      {/* شريط الموضوعات الـ18 */}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
        {B2_EXAM_TOPICS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setTopic(topic?.id === t.id ? null : t);
              setQuery("");
            }}
            className={cn(
              "rounded-xl border p-2 text-center text-xs font-bold transition-colors",
              topic?.id === t.id
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
            title={t.titleDe}
          >
            <span className="block text-lg">{t.icon}</span>
            <span className="mt-0.5 block leading-tight">{t.titleAr}</span>
          </button>
        ))}
      </div>

      {/* البحث */}
      <div className="relative">
        <Search
          className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث: «Wirtschaft»، «التأمين»..."
          className="ps-9"
          aria-label="ابحث في مفردات B2"
        />
      </div>

      {/* العنوان */}
      <div className="flex flex-wrap items-center gap-2">
        <BookMarked className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-lg font-extrabold">
          {topic ? `${topic.icon} ${topic.titleAr} (${topic.titleDe})` : "كل مواضيع B2 الـ18"}
        </h2>
        <Badge variant="outline" className="font-de">
          {filtered.length} كلمة
        </Badge>
        {topic && (
          <Badge variant="secondary" className="font-de">
            موضوع {topic.num}/18
          </Badge>
        )}
      </div>

      {/* الكلمات */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {filtered.map((w) => (
          <Card key={w.de} className="overflow-hidden">
            <CardContent className="flex items-center justify-between gap-2 p-3">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-1.5">
                  <span className="font-de text-sm font-bold" dir="ltr" lang="de">
                    {w.de}
                  </span>
                  {w.g && (w.g === "der" || w.g === "die" || w.g === "das") && (
                    <span
                      className={cn(
                        "rounded px-1 py-0.5 text-[11px] font-bold",
                        w.g === "der"
                          ? "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
                          : w.g === "die"
                            ? "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
                      )}
                      dir="ltr"
                    >
                      {w.g}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-primary">{w.ar}</p>
                {w.ex && (
                  <p className="font-de mt-1 truncate text-xs text-muted-foreground" dir="ltr" lang="de">
                    {w.ex}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <SpeakButton text={w.de} variant="ghost" size="sm" />
                <button
                  type="button"
                  onClick={() => void addCard(w)}
                  disabled={added.has(w.de)}
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold transition-colors",
                    added.has(w.de)
                      ? "border-success bg-success/10 text-success"
                      : "text-muted-foreground hover:border-primary/40 hover:text-primary",
                  )}
                  title={added.has(w.de) ? "أُضيفت للبطاقات ✓" : "أضف إلى بطاقات المراجعة (SM-2)"}
                >
                  {added.has(w.de) ? <Check className="h-4 w-4" aria-hidden="true" /> : "+"}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
            لا نتائج — جرّب كلمة أخرى.
          </p>
        )}
      </div>

      {/* نصيحة */}
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <p className="font-bold text-gold-foreground">💡 لماذا المواضيع الـ18؟</p>
        <p className="mt-1 text-muted-foreground">
          امتحان Goethe B2 يبنى على هذه المواضيع الـ18 حصراً — في القراءة والاستماع والكتابة
          والمحادثة. إتقان مفردات كل موضوع يضمن لك فهم أي نص وتكوين أي رد. أضف الكلمات
          الجديدة لبطاقاتك (+ زر) وستُراجعها تلقائياً بخوارزمية SM-2.
        </p>
      </div>
    </div>
  );
}

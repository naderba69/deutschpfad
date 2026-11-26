"use client";

import * as React from "react";
import {Lightbulb, Link2, MessageSquareText, Search, Volume2} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {REDEMITTEL, REDEMITTEL_CATEGORIES, searchRedemittel} from "@/data/redemittel";
import {KOLLOKATIONEN} from "@/data/kollokationen";
import {cn} from "@/lib/utils";

/**
 * بنك العبارات الامتحانية (Redemittel) — بحث + تصفية وظيفية + استماع
 *
 * العرض: قائمة واحدة مقسّمة بفواصل بدل بطاقة لكل عبارة. البطاقات المتكررة كانت
 * تُطيل الصفحة كثيراً (81 عبارة) وتُثقل النظر دون أن تضيف معلومة.
 */
export function RedemittelClient() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);
  const [tab, setTab] = React.useState<"redemittel" | "kollokationen">("redemittel");

  const results = React.useMemo(() => {
    const searched = searchRedemittel(query);
    return category ? searched.filter((r) => r.category === category) : searched;
  }, [query, category]);

  return (
    <div className="space-y-6">
      {/* تبويبات */}
      <div className="flex gap-2" role="group" aria-label="نوع المحتوى">
        <button
          type="button"
          aria-pressed={tab === "redemittel"}
          onClick={() => setTab("redemittel")}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-colors",
            tab === "redemittel" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 hover:border-primary/40",
          )}
        >
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          عبارات امتحانية ({REDEMITTEL.length})
        </button>
        <button
          type="button"
          aria-pressed={tab === "kollokationen"}
          onClick={() => setTab("kollokationen")}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-colors",
            tab === "kollokationen" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 hover:border-primary/40",
          )}
        >
          <Link2 className="h-4 w-4" aria-hidden="true" />
          كولوكيشنات B2 ({KOLLOKATIONEN.length})
        </button>
      </div>

      {tab === "redemittel" && (
        <>
          {/* البحث */}
          <div className="relative">
            <Search
              className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن عبارة: «رأي»، «Meiner Meinung»، «شكوى»..."
              className="ps-9"
              aria-label="ابحث في بنك العبارات"
            />
          </div>

          {/* تصفية الوظائف — مجموعة مسماة: 15 زراً بلا سياق جماعي تُعلَن متفرقة */}
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="تصفية بالوظيفة">
            <button
              type="button"
              aria-pressed={category === null}
              onClick={() => setCategory(null)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
                category === null
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-muted/40 text-muted-foreground hover:border-primary/40",
              )}
            >
              الكل ({REDEMITTEL.length})
            </button>
            {REDEMITTEL_CATEGORIES.map((cat) => {
              const count = REDEMITTEL.filter((r) => r.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                  title={`${cat.examSection}`}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
                    category === cat.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "bg-muted/40 text-muted-foreground hover:border-primary/40",
                  )}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* النتيجة */}
          <p className="text-sm text-muted-foreground" role="status">
            {results.length} عبارة — موزعة على {REDEMITTEL_CATEGORIES.length} وظيفة تواصلية.
          </p>

          {results.length === 0 ? (
            <p className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
              لا نتائج مطابقة — جرّب كلمة أخرى أو أزل الفلتر.
            </p>
          ) : (
            <ul className="divide-y rounded-xl border bg-card">
              {results.map((r) => (
                <li key={r.id} className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-de text-base font-bold" dir="ltr" lang="de">
                        {r.de}
                      </span>
                      <Badge variant={r.level === "B2" ? "default" : r.level === "B1" ? "secondary" : "outline"} className="font-de text-[11px]">
                        {r.level}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-primary">{r.ar}</p>
                    <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                      <Volume2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{r.usage}</span>
                    </p>
                  </div>
                  <SpeakButton text={r.de} variant="outline" size="sm" />
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* عرض الكولوكيشنات */}
      {tab === "kollokationen" && (
        <ul className="divide-y rounded-xl border bg-card">
          {KOLLOKATIONEN.map((k) => (
            <li key={k.id} className="flex items-start justify-between gap-3 p-4">
              <div className="min-w-0">
                <p className="font-de text-base font-bold" dir="ltr" lang="de">{k.de}</p>
                <p className="mt-1 text-sm font-semibold text-primary">{k.ar}</p>
                <p className="font-de mt-1.5 rounded-lg bg-muted/20 p-2.5 text-sm" dir="ltr" lang="de">{k.example}</p>
                <p className="mt-1 text-xs text-muted-foreground">{k.exampleAr}</p>
                {k.note && (
                  <p className="mt-1.5 flex items-start gap-1.5 text-xs text-gold-strong">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{k.note}</span>
                  </p>
                )}
              </div>
              <SpeakButton text={k.example} variant="outline" size="sm" />
            </li>
          ))}
        </ul>
      )}

      {/* نصيحة */}
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <p className="inline-flex items-center gap-1.5 font-bold text-gold-strong">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          نصيحة المعلم للامتحان:
        </p>
        <p className="mt-1 text-muted-foreground">
          لا تحفظ العبارات منفردة — احفظها في جمل كاملة وردّدها بصوتك. في امتحان B2،
          استخدم 3-4 عبارات متنوعة (رأي + تعليل + مثال + تحفظ) في كل رد. المصحح يبحث عن
          «تنوع وظيفي» لا عن كلام صحيح نحوي فقط.
        </p>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {Search, Table} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {STARK_VERBEN} from "@/data/verbs/starke-verben";
import {cn} from "@/lib/utils";

/**
 * جدول الأفعال الشاذة التفاعلي — بحث + فلترة + نطق
 * (النسخة المدمجة للمرحلة 8 — تُوسَّع في المرحلة 13)
 */
export function StarkeVerbenTable({ compact }: { compact?: boolean }) {
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<"all" | "A1" | "A2" | "B1" | "B2">("all");

  const filtered = STARK_VERBEN.filter((v) => {
    const matchesLevel = level === "all" || v.level === level;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      v.infinitiv.toLowerCase().includes(q) ||
      v.ar.includes(query.trim()) ||
      v.partizip2.toLowerCase().includes(q);
    return matchesLevel && matchesQuery;
  });

  const unique = filtered.filter(
    (v, i, arr) => arr.findIndex((x) => x.infinitiv === v.infinitiv) === i,
  );

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-48 flex-1">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن فعل (lernen، رأى، gegangen...) أو تصريف"
            className="ps-9 font-de"
            dir="auto"
            aria-label="البحث في الأفعال الشاذة"
          />
        </div>
        <div className="flex gap-1" role="group" aria-label="الفلترة بالمستوى">
          {(["all", "A1", "A2", "B1", "B2"] as const).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevel(lvl)}
              aria-pressed={level === lvl}
              className={cn(
                "rounded-lg border px-2.5 py-1.5 font-de text-xs font-bold transition-colors",
                level === lvl
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background hover:border-primary/50",
              )}
            >
              {lvl === "all" ? "الكل" : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* dir="ltr" يجعل الجدول يبدأ بعمود الفعل الألماني على الجوال
          (بدل البدء بالعربية بسبب RTL ثم التمرير لليمين) */}
      <div className="overflow-x-auto rounded-xl border" dir="ltr">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-3 py-2.5 text-start font-bold">الفعل</th>
              <th className="px-3 py-2.5 text-start font-bold">Präsens (er)</th>
              <th className="px-3 py-2.5 text-start font-bold">Präteritum</th>
              <th className="px-3 py-2.5 text-start font-bold">Partizip II</th>
              <th className="px-3 py-2.5 text-start font-bold">العربية</th>
              <th className="px-3 py-2.5 text-start font-bold">مع</th>
            </tr>
          </thead>
          <tbody>
            {unique.map((v) => (
              <tr key={`${v.infinitiv}-${v.level}`} className="border-b last:border-0 hover:bg-muted/20">
                <td className="px-3 py-2">
                  <span className="flex items-center gap-1.5">
                    <SpeakButton text={v.infinitiv} size="sm" className="h-7 w-7" />
                    <span className="font-de font-bold" dir="ltr" lang="de">
                      {v.infinitiv}
                    </span>
                    <Badge variant="outline" className="font-de text-[9px] px-1.5">
                      {v.level}
                    </Badge>
                  </span>
                </td>
                <td className="font-de px-3 py-2" dir="ltr" lang="de">{v.präsens3}</td>
                <td className="font-de px-3 py-2 font-semibold" dir="ltr" lang="de">{v.präteritum}</td>
                <td className="font-de px-3 py-2 font-semibold text-primary" dir="ltr" lang="de">{v.partizip2}</td>
                <td className="px-3 py-2">{v.ar}</td>
                <td className="font-de px-3 py-2 text-xs text-muted-foreground" dir="ltr">
                  {v.hilfsverb}
                </td>
              </tr>
            ))}
            {unique.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-muted-foreground">
                  لا نتائج مطابقة — جرّب كلمة أخرى
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Table className="h-3.5 w-3.5" aria-hidden="true" />
        {unique.length} فعل (فريد) من أصل {STARK_VERBEN.length} إدخال — الجدول الكامل التفاعلي
        قادم في المرحلة 13 (المرجع النحوي).
      </p>
    </div>
  );
}

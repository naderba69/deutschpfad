"use client";

/**
 * تدريب النطق المستقل — كل المجموعات في مكان واحد، خارج الدروس.
 * (1) لعبة الأزواج الصوتية لكل مجموعة (استماع واختيار).
 * (2) تسجيل صوتك ومقارنته بالنطق لكل كلمة. لا يُحفظ أي تسجيل؛ يبقى على جهازك وقتياً.
 */

import * as React from "react";

import {MinimalPairsGame} from "@/components/lesson/speech/minimal-pairs-game";
import {RecordAndCompare} from "@/components/lesson/speech/record-and-compare";
import {Button} from "@/components/ui/button";
import {MINIMAL_PAIR_GROUPS} from "@/lib/speech/minimal-pairs-data";

export function AussprachePractice() {
  const [index, setIndex] = React.useState(0);
  const [mode, setMode] = React.useState<"game" | "record">("game");
  const group = MINIMAL_PAIR_GROUPS[index];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-10 sm:px-6" dir="rtl">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">تدريب النطق بالأزواج المتشابهة</h1>
        <p className="text-sm text-muted-foreground">
          استمع إلى الكلمتين، ثم ميّز الكلمة المنطوقة. بعدها سجّل صوتك وقارنه بالنطق. لا يُرسل تسجيلك إلى أي خادم.
        </p>
      </header>

      <nav className="flex flex-wrap gap-2" aria-label="مجموعات النطق">
        {MINIMAL_PAIR_GROUPS.map((g, i) => (
          <Button
            key={g.id}
            size="sm"
            variant={i === index ? "default" : "outline"}
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
          >
            {g.title}
          </Button>
        ))}
      </nav>

      {group && (
        <section className="space-y-4 rounded-2xl border bg-card p-5">
          <div className="space-y-1">
            <h2 className="font-extrabold" lang="de" dir="ltr">{group.titleDe}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{group.explanationAr}</p>
          </div>

          <div className="flex gap-2" role="tablist" aria-label="نوع التدريب">
            <Button size="sm" variant={mode === "game" ? "default" : "outline"} onClick={() => setMode("game")} role="tab" aria-selected={mode === "game"}>
              الاستماع والتمييز
            </Button>
            <Button size="sm" variant={mode === "record" ? "default" : "outline"} onClick={() => setMode("record")} role="tab" aria-selected={mode === "record"}>
              تسجيل صوتي
            </Button>
          </div>

          {mode === "game" && <MinimalPairsGame key={group.id} groups={[group]} />}

          {mode === "record" && (
            <ul className="space-y-4">
              {group.pairs.map((p) =>
                [
                  { word: p.a, ar: p.aAr },
                  { word: p.b, ar: p.bAr },
                ].map((w) => (
                  <li key={`${p.a}-${w.word}`} className="space-y-2 rounded-xl border p-3">
                    <p className="text-sm">
                      <span className="font-bold" lang="de" dir="ltr">{w.word}</span>
                      <span className="text-muted-foreground"> — {w.ar}</span>
                    </p>
                    <RecordAndCompare target={w.word} targetAr={w.ar} />
                  </li>
                )),
              )}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}

"use client";

/**
 * نموذج تدريبي A1 (استماع · قراءة · كتابة) — ليس امتحاناً رسمياً.
 * الاستماع: مقاطع صوتية مسجّلة (public/audio/exam-a1). الجزآن 1 و3 يُشغَّلان مرتين،
 * وباقي الأجزاء مرة واحدة. القراءة والاستماع يُصحَّحان آلياً.
 * الكتابة تُقيَّم ذاتياً بمعايير الاختبار، ولا تُحتسب في نتيجة آلية.
 */

import * as React from "react";

import { Button } from "@/components/ui/button";
import { A1_HOEREN } from "@/data/exams/a1-hoeren";
import { A1_LESEN } from "@/data/exams/a1-lesen";
import { A1_SCHREIBEN } from "@/data/exams/a1-schreiben";
import { A1_SPRECHEN, type A1SpeakingPart } from "@/data/exams/a1-sprechen";
import { A2_HOEREN } from "@/data/exams/a2-hoeren";
import { A2_LESEN } from "@/data/exams/a2-lesen";
import { A2_SCHREIBEN } from "@/data/exams/a2-schreiben";
import { A2_SPRECHEN } from "@/data/exams/a2-sprechen";
import { B1_HOEREN } from "@/data/exams/b1-hoeren";
import { B1_LESEN } from "@/data/exams/b1-lesen";
import { B1_SCHREIBEN } from "@/data/exams/b1-schreiben";
import { B1_SPRECHEN } from "@/data/exams/b1-sprechen";
import { GoetheA1Speaking } from "@/components/tests/goethe-a1-speaking";
import { ExamAudioPlayer } from "@/components/tests/exam-audio-player";
import { ExamMcqListCompact, ExamStatementsListCompact } from "@/components/tests/exam-question-views";
import { gradeTeile, scoreModule } from "@/lib/tests/exam-scoring";
import { LEVEL_AUDIO } from "@/data/exams/level-audio";
import type { ExamHoerenTeil, ExamLesenTeil } from "@/types/exam";

export type ExamLevel = "A1" | "A2" | "B1";

/** بيانات كل مستوى (مجلد الصوت في src/data/exams/level-audio.ts — مصدر واحد) */
const EXAM_DATA: Record<ExamLevel, {
  hoeren: ExamHoerenTeil[];
  lesen: ExamLesenTeil[];
  schreiben: typeof A1_SCHREIBEN;
  sprechen: A1SpeakingPart[];
}> = {
  A1: { hoeren: A1_HOEREN, lesen: A1_LESEN, schreiben: A1_SCHREIBEN, sprechen: A1_SPRECHEN },
  A2: { hoeren: A2_HOEREN, lesen: A2_LESEN, schreiben: A2_SCHREIBEN, sprechen: A2_SPRECHEN },
  B1: { hoeren: B1_HOEREN, lesen: B1_LESEN, schreiben: B1_SCHREIBEN, sprechen: B1_SPRECHEN },
};

type Phase = "intro" | "hoeren" | "lesen" | "schreiben" | "sprechen" | "result";


export function GoetheA1Exam({ level = "A1" }: { level?: ExamLevel } = {}) {
  const data = EXAM_DATA[level];
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [hAns, setHAns] = React.useState<Record<string, boolean | number>>({});
  const [lAns, setLAns] = React.useState<Record<string, boolean | number>>({});
  const [writing, setWriting] = React.useState<string[]>(["", ""]);
  const [heard, setHeard] = React.useState<Record<number, boolean>>({});

  // التصحيح من الوحدة الموحّدة (src/lib/tests/exam-scoring.ts) — لا نسخة محلية
  const hRes = gradeTeile(data.hoeren, hAns);
  const lRes = gradeTeile(data.lesen, lAns);

  const reset = () => {
    setHAns({});
    setLAns({});
    setWriting(["", ""]);
    setHeard({});
    setPhase("intro");
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-10 sm:px-6" dir="rtl">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">نموذج تدريبي — {level} (بنية {({ A1: "Start Deutsch 1", A2: "Goethe A2", B1: "Goethe B1" } as const)[level]})</h1>
        <p className="text-sm text-muted-foreground">
          هذا نموذج تدريبي من إعداد المنصة، وليس امتحاناً رسمياً من Goethe-Institut.
        </p>
        <nav className="flex flex-wrap gap-2 text-sm">
          {(["intro", "hoeren", "lesen", "schreiben", "sprechen", "result"] as Phase[]).map((p) => (
            <span
              key={p}
              className={`rounded-full border px-3 py-1 ${phase === p ? "border-primary font-bold" : ""}`}
            >
              {{ intro: "المقدمة", hoeren: "الاستماع", lesen: "القراءة", schreiben: "الكتابة", sprechen: "التحدث", result: "النتيجة" }[p]}
            </span>
          ))}
        </nav>
      </header>

      {phase === "intro" && (
        <section className="space-y-3 rounded-2xl border bg-card p-5">
          <p>الاستماع: 4 أجزاء. القراءة: 4 أجزاء. الكتابة: مهمتان تقيّمهما بنفسك بالمعايير.</p>
          <p className="text-sm text-muted-foreground">
            الجزآن 1 و3 من الاستماع يُشغَّلان مرتين، والباقي مرة واحدة. لا يمكنك الرجوع بعد إنهاء كل قسم.
          </p>
          <Button onClick={() => setPhase("hoeren")}>ابدأ الاستماع</Button>
        </section>
      )}

      {phase === "hoeren" && (
        <section className="space-y-6">
          {data.hoeren.map((t) => (
            <div key={t.teil} className="space-y-3 rounded-2xl border bg-card p-5">
              <h2 className="font-extrabold">{t.titleAr}</h2>
              <p className="text-sm text-muted-foreground">{t.introAr}</p>
              <ExamAudioPlayer
                track={LEVEL_AUDIO[level][t.teil - 1]}
                label={null}
                onPlayed={() => setHeard((h) => ({ ...h, [t.teil]: true }))}
              />
              {t.kind === "rf" ? (
                <ExamStatementsListCompact
                  statements={t.statements ?? []}
                  answers={hAns as Record<string, boolean>}
                  onPick={(id, v) => setHAns((a) => ({ ...a, [id]: v }))}
                  disabled={!heard[t.teil]}
                />
              ) : (
                <ExamMcqListCompact
                  questions={t.questions ?? []}
                  answers={hAns as Record<string, number>}
                  onPick={(id, idx) => setHAns((a) => ({ ...a, [id]: idx }))}
                  disabled={!heard[t.teil]}
                />
              )}
            </div>
          ))}
          <Button onClick={() => setPhase("lesen")}>إلى القراءة</Button>
        </section>
      )}

      {phase === "lesen" && (
        <section className="space-y-6">
          {data.lesen.map((t) => (
            <div key={t.teil} className="space-y-3 rounded-2xl border bg-card p-5">
              <h2 className="font-extrabold">{t.titleAr}</h2>
              <p className="text-sm text-muted-foreground">{t.introAr}</p>
              {t.text && (
                <pre className="whitespace-pre-wrap rounded-xl bg-muted p-3 font-de text-sm leading-relaxed" dir="ltr" lang="de">
                  {t.text}
                </pre>
              )}
              {t.kind === "rf" ? (
                <ExamStatementsListCompact
                  statements={t.statements ?? []}
                  answers={lAns as Record<string, boolean>}
                  onPick={(id, v) => setLAns((a) => ({ ...a, [id]: v }))}
                />
              ) : (
                <ExamMcqListCompact
                  questions={t.questions ?? []}
                  answers={lAns as Record<string, number>}
                  onPick={(id, idx) => setLAns((a) => ({ ...a, [id]: idx }))}
                />
              )}
            </div>
          ))}
          <Button onClick={() => setPhase("schreiben")}>إلى الكتابة</Button>
        </section>
      )}

      {phase === "schreiben" && (
        <section className="space-y-6">
          {data.schreiben.map((t, i) => {
            const words = writing[i].trim() ? writing[i].trim().split(/\s+/).length : 0;
            return (
              <div key={t.teil} className="space-y-3 rounded-2xl border bg-card p-5">
                <h2 className="font-extrabold">{t.titleAr}</h2>
                <p className="font-de text-sm" dir="ltr" lang="de">{t.aufgabeDe}</p>
                <p className="text-sm text-muted-foreground">{t.aufgabeAr}</p>
                <p className="text-xs text-muted-foreground">الحد الأدنى: {t.minWords} كلمة · كتبت: {words}</p>
                <textarea
                  value={writing[i]}
                  onChange={(e) => setWriting((w) => w.map((x, j) => (j === i ? e.target.value : x)))}
                  rows={5}
                  className="w-full rounded-xl border bg-background p-3 font-de text-sm"
                  dir="ltr"
                  lang="de"
                />
                <div className="rounded-lg bg-muted p-3 text-xs">
                  <p className="font-bold">راجع نصك بهذه النقاط:</p>
                  <ul className="list-disc ps-5">
                    {t.requires.map((r) => (
                      <li key={r.de}>{r.ar}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <Button onClick={() => setPhase("sprechen")}>إلى التحدث</Button>
        </section>
      )}

      {phase === "sprechen" && (
        <section className="space-y-6">
          <GoetheA1Speaking parts={data.sprechen} audioBase={`/audio/speaking-${level.toLowerCase()}`} onDone={() => setPhase("result")} />
        </section>
      )}

      {phase === "result" && (
        <section className="space-y-4 rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">النتيجة</h2>
          {(() => {
            const h = scoreModule(hRes.correct, hRes.total);
            const l = scoreModule(lRes.correct, lRes.total);
            return (
              <ul className="space-y-1 text-sm">
                <li>الاستماع: {h.correct} من {h.total} ({h.pct}%)</li>
                <li>القراءة: {l.correct} من {l.total} ({l.pct}%)</li>
                <li>الكتابة والتحدث: تقيّمهما بنفسك بالنقاط المذكورة أعلاه.</li>
              </ul>
            );
          })()}
          <p className="text-xs text-muted-foreground">
            هذه نسب تدريبية وليست درجة رسمية. الهدف معرفة نقاط الضعف قبل الامتحان الحقيقي.
          </p>
          <Button variant="outline" onClick={reset}>إعادة النموذج</Button>
        </section>
      )}
    </div>
  );
}

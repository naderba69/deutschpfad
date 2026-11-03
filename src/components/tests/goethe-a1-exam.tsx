"use client";

/**
 * نماذج تدريبية A1/A2/B1 (استماع · قراءة · كتابة · تحدث) — ليست امتحانات رسمية.
 * البيانات والنماذج من `src/data/exams/level-models.ts` (مصدر واحد)، والصوت من
 * مشغّل واحد يعلن حالته: مقاطع مسجّلة أو نطق آلي عند غيابها. الجزآن 1 و3 من
 * الاستماع يُشغَّلان مرتين، والباقي مرة واحدة. القراءة والاستماع يُصحَّحان آلياً،
 * والكتابة والتحدث يُقيَّمان ذاتياً بمعايير الاختبار ولا يُحتسبان في نتيجة آلية.
 */

import * as React from "react";

import { Button } from "@/components/ui/button";
import { FilterChip } from "@/components/ui/filter-chip";
import { GoetheA1Speaking } from "@/components/tests/goethe-a1-speaking";
import { ExamAudioPlayer } from "@/components/tests/exam-audio-player";
import { ExamMcqListCompact, ExamStatementsListCompact, ExamReviewList } from "@/components/tests/exam-question-views";
import { ExamOfficialSummary } from "@/components/tests/exam-official-summary";
import { gradeTeile } from "@/lib/tests/exam-scoring";
import { LEVEL_MODELS, examModel } from "@/data/exams/level-models";

export type ExamLevel = "A1" | "A2" | "B1";

type Phase = "intro" | "hoeren" | "lesen" | "schreiben" | "sprechen" | "result";


export function GoetheA1Exam({ level = "A1" }: { level?: ExamLevel } = {}) {
  const models = LEVEL_MODELS[level];
  const [modelId, setModelId] = React.useState(models[0].id);
  const model = examModel(level, modelId);
  const data = model;
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

  /** تبديل النموذج يصفّر كل الإجابات (لا تختلط إجابات نموذجين) */
  const pickModel = (id: string) => {
    setModelId(id);
    reset();
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-10 sm:px-6" dir="rtl">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">نموذج تدريبي — {level} (بنية {({ A1: "Start Deutsch 1", A2: "Goethe A2", B1: "Goethe B1" } as const)[level]})</h1>
        <p className="text-sm text-muted-foreground">
          هذا نموذج تدريبي من إعداد المنصة، وليس امتحاناً رسمياً من Goethe-Institut.
          {models.length > 1 ? ` النموذج الحالي: ${model.label}.` : ""}
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
          {models.length > 1 && (
            <div className="space-y-1.5">
              <p className="text-sm font-bold">اختر النموذج:</p>
              <div className="flex flex-wrap gap-2">
                {models.map((m) => (
                  <FilterChip key={m.id} tone="soft" active={m.id === model.id} onClick={() => pickModel(m.id)}>
                    {m.label}
                  </FilterChip>
                ))}
              </div>
            </div>
          )}
          <p>الاستماع: 4 أجزاء. القراءة: 4 أجزاء. الكتابة: مهمتان تقيّمهما بنفسك بالمعايير.</p>
          <p className="text-sm text-muted-foreground" data-testid="exam-audio-note">
            {model.audioNoteAr} لا يمكنك الرجوع بعد إنهاء كل قسم.
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
                track={model.audio[t.teil - 1]}
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
                  aria-label={`إجابة الكتابة: ${t.titleAr}`}
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
          <GoetheA1Speaking parts={model.sprechen} audioBase={model.speakingAudioBase} onDone={() => setPhase("result")} />
        </section>
      )}

      {phase === "result" && (
        <section className="space-y-4 rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">النتيجة</h2>
          <ExamOfficialSummary
            level={level}
            rows={[
              { key: "hoeren", label: "الاستماع (Hören)", correct: hRes.correct, total: hRes.total },
              { key: "lesen", label: "القراءة (Lesen)", correct: lRes.correct, total: lRes.total },
            ]}
            subjectiveAr="الكتابة (Schreiben) والتحدث (Sprechen): تقييمهما ذاتي بمعايير الاختبار المذكورة أعلاه — ولا يدخلان في التحويل الآلي."
          />
          {/* مراجعة الأدلة (الدفعة 117): لكل سؤالٍ جوابُك والصحيح وشاهدُه الألماني */}
          <div className="space-y-3" data-testid="exam-review">
            <h3 className="text-base font-extrabold">مراجعة الأدلة — لماذا هذا الجواب</h3>
            <p className="text-xs text-muted-foreground">
              لكل سؤالٍ في الاستماع والقراءة: جوابُك، والإجابةُ الصحيحة، والشاهدُ الألماني من نصّ الجزء.
            </p>
            <ExamReviewList teile={data.hoeren} answers={hAns} label="hoeren" />
            <ExamReviewList teile={data.lesen} answers={lAns} label="lesen" />
          </div>
          <Button variant="outline" onClick={reset}>إعادة النموذج</Button>
        </section>
      )}
    </div>
  );
}

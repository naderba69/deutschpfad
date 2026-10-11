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
import type { ExamHoerenTeil, ExamLesenTeil, ExamMcq, ExamStatement } from "@/types/exam";

type Phase = "intro" | "hoeren" | "lesen" | "schreiben" | "result";

const AUDIO_BASE = "/audio/exam-a1";

/** ملفات الصوت لكل جزء بالترتيب. الجزء 2 والجزء 4 سطراً بسطر، كل سطر بصوته. */
const AUDIO_FILES: Record<number, string[]> = {
  1: ["hoeren-t1.mp3"],
  2: [
    "hoeren-t2-g1-a.mp3", "hoeren-t2-g1-b.mp3",
    "hoeren-t2-g2-a.mp3", "hoeren-t2-g2-b.mp3",
    "hoeren-t2-g3-a.mp3", "hoeren-t2-g3-b.mp3",
    "hoeren-t2-g4-a.mp3", "hoeren-t2-g4-b.mp3",
  ],
  3: ["hoeren-t3.mp3"],
  4: ["hoeren-t4-a.mp3", "hoeren-t4-b.mp3", "hoeren-t4-c.mp3", "hoeren-t4-d.mp3"],
};

/** عدد مرات التشغيل المسموح بها لكل جزء */
const MAX_PLAYS = (teil: number) => (teil === 1 || teil === 3 ? 2 : 1);

/** تشغيل قائمة ملفات بالتسلسل */
function playSequence(files: string[], onDone: () => void) {
  let i = 0;
  const next = () => {
    if (i >= files.length) return onDone();
    const audio = new Audio(`${AUDIO_BASE}/${files[i]}`);
    i += 1;
    audio.onended = next;
    audio.onerror = next;
    void audio.play().catch(next);
  };
  next();
}

function AudioPart({ part, onPlayed }: { part: ExamHoerenTeil; onPlayed?: () => void }) {
  const [plays, setPlays] = React.useState(0);
  const [busy, setBusy] = React.useState(false);
  const max = MAX_PLAYS(part.teil);
  const left = max - plays;

  const play = () => {
    if (left <= 0 || busy) return;
    setBusy(true);
    setPlays((p) => p + 1);
    playSequence(AUDIO_FILES[part.teil] ?? [], () => {
      setBusy(false);
      onPlayed?.();
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card p-3">
      <Button onClick={play} disabled={left <= 0 || busy}>
        {busy ? "جارٍ التشغيل…" : "▶ استمع"}
      </Button>
      <span className="text-sm text-muted-foreground">
        المتبقي من التشغيل: {left} {max === 2 ? "من 2" : "من 1"}
      </span>
    </div>
  );
}

function StatementsBlock({
  statements,
  answers,
  onPick,
  disabled,
}: {
  statements: ExamStatement[];
  answers: Record<string, boolean>;
  onPick: (id: string, v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      {statements.map((s) => (
        <div key={s.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3">
          <span className="font-de text-sm" dir="ltr" lang="de">{s.de}</span>
          <div className="flex gap-2">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                type="button"
                disabled={disabled}
                onClick={() => onPick(s.id, v)}
                className={`rounded-md border px-3 py-1 text-sm font-semibold ${
                  answers[s.id] === v ? "border-primary bg-primary text-primary-foreground" : "bg-background"
                }`}
              >
                {v ? "Richtig / صحيح" : "Falsch / خطأ"}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function McqBlock({
  questions,
  answers,
  onPick,
  disabled,
}: {
  questions: ExamMcq[];
  answers: Record<string, number>;
  onPick: (id: string, idx: number) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-3">
      {questions.map((q) => (
        <div key={q.id} className="rounded-lg border p-3">
          <p className="font-de text-sm font-semibold" dir="ltr" lang="de">{q.q}</p>
          {q.qAr && <p className="mt-0.5 text-xs text-muted-foreground">{q.qAr}</p>}
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                disabled={disabled}
                onClick={() => onPick(q.id, idx)}
                className={`rounded-md border px-3 py-2 text-start font-de text-sm ${
                  answers[q.id] === idx ? "border-primary bg-primary/10 font-bold" : "bg-background"
                }`}
                dir="ltr"
                lang="de"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function scorePart(correct: number, total: number) {
  return { correct, total, pct: total ? Math.round((correct / total) * 100) : 0 };
}

export function GoetheA1Exam() {
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [hAns, setHAns] = React.useState<Record<string, boolean | number>>({});
  const [lAns, setLAns] = React.useState<Record<string, boolean | number>>({});
  const [writing, setWriting] = React.useState<string[]>(["", ""]);
  const [heard, setHeard] = React.useState<Record<number, boolean>>({});

  type Item = { id: string; correct: boolean | number };
  const toItems = (t: ExamHoerenTeil | ExamLesenTeil): Item[] =>
    t.kind === "rf"
      ? (t.statements ?? []).map((s) => ({ id: s.id, correct: s.isTrue }))
      : (t.questions ?? []).map((q) => ({ id: q.id, correct: q.correct }));
  const hoerenItems: Item[] = A1_HOEREN.flatMap(toItems);
  const lesenItems: Item[] = A1_LESEN.flatMap(toItems);

  const grade = (items: Item[], ans: Record<string, boolean | number>) =>
    items.filter((it) => ans[it.id] !== undefined && ans[it.id] === it.correct).length;

  const hCorrect = grade(hoerenItems, hAns);
  const lCorrect = grade(lesenItems, lAns);

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
        <h1 className="text-2xl font-extrabold">نموذج تدريبي — A1 (بنية Start Deutsch 1)</h1>
        <p className="text-sm text-muted-foreground">
          هذا نموذج تدريبي من إعداد المنصة، وليس امتحاناً رسمياً من Goethe-Institut.
        </p>
        <nav className="flex flex-wrap gap-2 text-sm">
          {(["intro", "hoeren", "lesen", "schreiben", "result"] as Phase[]).map((p) => (
            <span
              key={p}
              className={`rounded-full border px-3 py-1 ${phase === p ? "border-primary font-bold" : ""}`}
            >
              {{ intro: "المقدمة", hoeren: "الاستماع", lesen: "القراءة", schreiben: "الكتابة", result: "النتيجة" }[p]}
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
          {A1_HOEREN.map((t) => (
            <div key={t.teil} className="space-y-3 rounded-2xl border bg-card p-5">
              <h2 className="font-extrabold">{t.titleAr}</h2>
              <p className="text-sm text-muted-foreground">{t.introAr}</p>
              <AudioPart part={t} onPlayed={() => setHeard((h) => ({ ...h, [t.teil]: true }))} />
              {t.kind === "rf" ? (
                <StatementsBlock
                  statements={t.statements ?? []}
                  answers={hAns as Record<string, boolean>}
                  onPick={(id, v) => setHAns((a) => ({ ...a, [id]: v }))}
                  disabled={!heard[t.teil]}
                />
              ) : (
                <McqBlock
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
          {A1_LESEN.map((t) => (
            <div key={t.teil} className="space-y-3 rounded-2xl border bg-card p-5">
              <h2 className="font-extrabold">{t.titleAr}</h2>
              <p className="text-sm text-muted-foreground">{t.introAr}</p>
              {t.text && (
                <pre className="whitespace-pre-wrap rounded-xl bg-muted p-3 font-de text-sm leading-relaxed" dir="ltr" lang="de">
                  {t.text}
                </pre>
              )}
              {t.kind === "rf" ? (
                <StatementsBlock
                  statements={t.statements ?? []}
                  answers={lAns as Record<string, boolean>}
                  onPick={(id, v) => setLAns((a) => ({ ...a, [id]: v }))}
                />
              ) : (
                <McqBlock
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
          {A1_SCHREIBEN.map((t, i) => {
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
          <Button onClick={() => setPhase("result")}>عرض النتيجة</Button>
        </section>
      )}

      {phase === "result" && (
        <section className="space-y-4 rounded-2xl border bg-card p-5">
          <h2 className="text-lg font-extrabold">النتيجة</h2>
          {(() => {
            const h = scorePart(hCorrect, hoerenItems.length);
            const l = scorePart(lCorrect, lesenItems.length);
            return (
              <ul className="space-y-1 text-sm">
                <li>الاستماع: {h.correct} من {h.total} ({h.pct}%)</li>
                <li>القراءة: {l.correct} من {l.total} ({l.pct}%)</li>
                <li>الكتابة: تقيّمها بنفسك بالنقاط المذكورة أعلاه.</li>
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

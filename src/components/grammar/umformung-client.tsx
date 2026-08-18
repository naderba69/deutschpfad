"use client";

import * as React from "react";
import {CheckCircle2, Dices, Lightbulb, Send, XCircle} from "lucide-react";

import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {recordEvent} from "@/lib/analytics/events";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {normalizeGermanText} from "@/lib/speech/scoring";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  تحويل الأزمنة (Umformung) — مهارة جوهرية في Goethe B1/B2
 *  تمرين تفاعلي: حوّل الجملة من زمن إلى آخر (مضارع ← ماضٍ،
 *  ماضٍ ← مضارع تام…) مع تصحيح ذكي يقبل الصيغ الصحيحة
 *  المتعددة (تطبيع + تشابه). بلا خادم، Vercel مجاني.
 * ═══════════════════════════════════════════════════════════
 */

interface UmformungTask {
  de: string;
  ar: string;
  /** الزمن المطلوب للتحويل */
  to: string;
  /** الإجابات الصحيحة المقبولة (صيغ متعددة) */
  answers: string[];
  /** تلميح */
  hint: string;
  level: "A2" | "B1" | "B2";
}

const TASKS: UmformungTask[] = [
  {
    de: "Ich lerne jeden Tag Deutsch.",
    ar: "أتعلم الألمانية كل يوم.",
    to: "Präteritum (الماضي البسيط)",
    answers: ["Ich lernte jeden Tag Deutsch.", "Ich lernte jeden Tag Deutsch"],
    hint: "«lernen» فعل منتظم — الماضي البسيط: lernte (ich lernte).",
    level: "A2",
  },
  {
    de: "Er trinkt einen Kaffee.",
    ar: "هو يشرب قهوة.",
    to: "Perfekt (المضارع التام)",
    answers: ["Er hat einen Kaffee getrunken.", "Er hat einen Kaffee getrunken."],
    hint: "«trinken» فعل شاذ — Partizip II: getrunken، مع haben.",
    level: "A2",
  },
  {
    de: "Wir gehen heute ins Kino.",
    ar: "نذهب اليوم إلى السينما.",
    to: "Präteritum",
    answers: ["Wir gingen heute ins Kino.", "Wir gingen heute ins Kino."],
    hint: "«gehen» شاذ — الماضي البسيط: gingen (wir gingen).",
    level: "A2",
  },
  {
    de: "Sie kommt morgen zu mir.",
    ar: "هي تأتي غداً إليّ.",
    to: "Futur I (المستقبل)",
    answers: ["Sie wird morgen zu mir kommen.", "Sie wird morgen zu mir kommen."],
    hint: "المستقبل: werden + المصدر في نهاية الجملة (wird … kommen).",
    level: "B1",
  },
  {
    de: "Ich habe das Buch gelesen.",
    ar: "قرأت الكتاب (مضارع تام).",
    to: "Präteritum",
    answers: ["Ich las das Buch.", "Ich las das Buch."],
    hint: "«lesen» شاذ: ich las (وليس leste).",
    level: "B1",
  },
  {
    de: "Als ich kam, hatte er schon gegessen.",
    ar: "عندما وصلت، كان قد أكل بالفعل.",
    to: "Plusquamperfekt → Präteritum + „nachdem“",
    answers: [
      "Nachdem er gegessen hatte, kam ich.",
      "Nachdem er gegessen hatte, kam ich.",
      "Nachdem er gegessen hatte, kam ich.",
    ],
    hint: "«nachdem» + Plusquamperfekt في الجملة الثانوية، والماضي البسيط في الرئيسية.",
    level: "B2",
  },
  {
    de: "Die Schüler lernen die Wörter.",
    ar: "التلاميذ يتعلمون الكلمات.",
    to: "Passiv (المبني للمجهول)",
    answers: ["Die Wörter werden von den Schülern gelernt.", "Die Wörter werden gelernt.", "Die Wörter werden von den Schülern gelernt."],
    hint: "المبني للمجهول: werden + Partizip II (werden … gelernt).",
    level: "B1",
  },
  {
    de: "Er fuhr nach Berlin.",
    ar: "سافر إلى برلين.",
    to: "Perfekt",
    answers: ["Er ist nach Berlin gefahren.", "Er ist nach Berlin gefahren."],
    hint: "«fahren» مع sein (حركة): ist … gefahren.",
    level: "A2",
  },
];

function isCorrect(user: string, answers: string[]): boolean {
  const norm = (s: string) => normalizeGermanText(s).toLowerCase();
  const u = norm(user);
  if (!u) return false;
  for (const a of answers) {
    const t = norm(a);
    // تطابق تام أو تطابق كلمة-بكلمة مع تجاهل علامات الترقيم النهائية
    if (u === t) return true;
    const uWords = u.split(" ").filter(Boolean);
    const tWords = t.split(" ").filter(Boolean);
    if (uWords.length === tWords.length && uWords.every((w, i) => w === tWords[i])) return true;
  }
  return false;
}

export function UmformungClient() {
  const [idx, setIdx] = React.useState(0);
  const [answer, setAnswer] = React.useState("");
  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = React.useState(0);
  const [attempts, setAttempts] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  // ═══ إصلاح hydration: الترتيب العشوائي في أول رندر يكسر التطابق —
  // أُجّل إلى useEffect (يظهر بعد التحميل على العميل فقط) ═══
  const [shuffled, setShuffled] = React.useState<UmformungTask[]>([]);

  React.useEffect(() => {
    setShuffled([...TASKS].sort(() => Math.random() - 0.5));
  }, []);

  const task = shuffled[idx];

  const check = () => {
    if (feedback) return;
    setAttempts((a) => a + 1);
    if (isCorrect(answer, task.answers)) {
      setFeedback("correct");
      setScore((s) => s + 1);
      playCorrect();
      void recordEvent({ type: "umformung-correct", level: task.level } as never);
      addGems(2);
    } else {
      setFeedback("wrong");
      playWrong();
      void recordEvent({ type: "umformung-wrong", level: task.level } as never);
    }
  };

  const next = () => {
    if (idx + 1 >= shuffled.length) {
      setFinished(true);
      return;
    }
    setIdx((i) => i + 1);
    setAnswer("");
    setFeedback(null);
  };

  const retry = () => {
    setAnswer("");
    setFeedback(null);
  };

  const progress = (idx / shuffled.length) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🔄 تحويل الأزمنة (Umformung)
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          مهارة جوهرية في Goethe B1/B2: حوّل الجملة إلى الزمن المطلوب. يقبل التصحيح الصيغ
          الصحيحة المتعددة — يعمل كلياً على جهازك (بلا خادم).
        </p>
      </div>

      {!task ? (
        <div className="py-10 text-center text-sm text-muted-foreground">جارٍ تحضير التمارين…</div>
      ) : finished ? (
        <div className="rounded-2xl border border-success/40 bg-success/10 p-6 text-center">
          <p className="text-3xl" aria-hidden="true">🏆</p>
          <h2 className="mt-2 text-lg font-extrabold">أتممت جلسة التحويل!</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            أجبت صحيحاً عن <span className="font-de font-extrabold">{score}/{shuffled.length}</span> — بمحاولات {attempts}
          </p>
          <Button
            className="mt-4 gap-2"
            onClick={() => {
              setShuffled([...TASKS].sort(() => Math.random() - 0.5));
              setIdx(0);
              setAnswer("");
              setFeedback(null);
              setScore(0);
              setAttempts(0);
              setFinished(false);
            }}
          >
            <Dices className="h-4 w-4" aria-hidden="true" />
            جلسة جديدة
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Progress value={progress} className="h-2 flex-1" />
            <span className="font-de shrink-0 text-xs font-bold text-primary">{idx + 1}/{shuffled.length}</span>
          </div>

          <div className="rounded-2xl border bg-muted/20 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary">
                {task.level}
              </span>
              <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-extrabold text-gold-strong">
                ← {task.to}
              </span>
            </div>
            <p className="font-de mt-3 text-xl font-extrabold" dir="ltr" lang="de">
              {task.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{task.ar}</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (feedback === "correct") next();
              else if (feedback === "wrong") retry();
              else check();
            }}
            className="space-y-3"
          >
            <div className="flex items-end gap-2">
              <AutoGrowTextarea
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (feedback === "wrong") setFeedback(null);
                }}
                onEnter={() => {
                  if (feedback === "correct") next();
                  else if (feedback === "wrong") retry();
                  else check();
                }}
                placeholder="اكتب الجملة محوّلة…"
                dir="ltr"
                lang="de"
                aria-label="جملتك المحوّلة"
                className="font-de flex-1"
              />
              <Button type="submit" disabled={answer.trim() === ""} className="shrink-0 gap-1.5">
                <Send className="h-4 w-4" aria-hidden="true" />
                {feedback === "correct" ? "التالي" : "تحقق"}
              </Button>
            </div>
          </form>

          {feedback === "correct" && (
            <div className="flex items-start gap-2 rounded-xl border border-success/40 bg-success/10 p-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              <div>
                <p className="font-bold text-success">أحسنت! الصياغة صحيحة.</p>
                <p className="font-de mt-1 text-muted-foreground" dir="ltr">✅ {task.answers[0]}</p>
              </div>
            </div>
          )}

          {feedback === "wrong" && (
            <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-bold text-destructive">ليست الصيغة الصحيحة — حاول مجدداً.</p>
                <p className="mt-1 flex items-start gap-1.5 text-xs text-muted-foreground">
                  <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-strong" aria-hidden="true" />
                  {task.hint}
                </p>
              </div>
            </div>
          )}

          <p className="flex items-center gap-1.5 rounded-lg bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <Lightbulb className="h-3.5 w-3.5 text-gold-strong" aria-hidden="true" />
            تلميح: {task.hint}
          </p>
        </div>
      )}
    </div>
  );
}

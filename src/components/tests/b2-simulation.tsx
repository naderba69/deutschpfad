"use client";

import * as React from "react";
import {BookOpen, CheckCircle2, Headphones, Mic, PenLine, Timer, XCircle} from "lucide-react";

import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {useCountdown} from "@/lib/tests/use-countdown";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {shuffleChoiceItems} from "@/lib/tests/shuffle-questions";
import {cn} from "@/lib/utils";
import {ExamReviewList, type ExamReviewTeil} from "@/components/tests/exam-question-views";
import {LISTENING, READING} from "@/data/exams/b2-simulation-data";

/**
 * ═══════════════════════════════════════════════════════════
 *  محاكاة Goethe-Zertifikat B2 الكاملة — بأقسام ومدد فعلية
 *  (تدريب تجريبي — ليس امتحاناً رسمياً)
 *
 *  · Lesen (القراءة): 5 نصوص · 65 دقيقة
 *  · Hören (الاستماع): 4 نصوص · ~40 دقيقة
 *  · Schreiben (الكتابة): رسالة رسمية/منتدى · 75 دقيقة
 *  · Sprechen (التحدث): تقديم + نقاش · 15 دقيقة تحضير + 15 محادثة
 *
 *  بنكا القراءة والاستماع في `@/data/exams/b2-simulation-data` (بشاهد
 *  `whyAr` لكل سؤال — الدفعة 119)، والمراجعة في شاشة النتيجة.
 *  مع Rubric صريحة للكتابة والتحدث للمراجعة الذاتية،
 *  ونتيجة إجمالية تشمل الأقسام الأربعة.
 * ═══════════════════════════════════════════════════════════
 */

/** Rubric الكتابة B2 */
const WRITING_RUBRIC = [
  { name: "Erfüllung", desc: "هل أنجزت المهمة كاملة (الغرض، الجوانب المطلوبة)؟", max: 5 },
  { name: "Kohärenz", desc: "هل النص مترابط بروابط منطقية (Einerseits, Außerdem, Zusammenfassend)؟", max: 5 },
  { name: "Wortschatz", desc: "هل المفردات متنوعة ومناسبة للمستوى B2؟", max: 5 },
  { name: "Struktur", desc: "هل القواعد والأزمنة والتراكيب صحيحة؟", max: 5 },
];

/** مهام الكتابة B2 */
const WRITING_TASKS = [
  {
    id: "w1",
    title: "Forumsbeitrag: Homeoffice",
    promptDe: "In einem Internetforum diskutieren die Leute über Homeoffice. Schreiben Sie einen Beitrag (ca. 120-150 Wörter): Vorteile und Nachteile von Homeoffice, Ihre Meinung und ein Beispiel.",
    promptAr: "في منتدى إنترنت يناقش الناس العمل عن بُعد. اكتب مشاركة (حوالي 120-150 كلمة): إيجابيات وسلبيات العمل عن بُعد، رأيك، ومثال.",
    tip: "استخدم: Einerseits...andererseits، Meiner Meinung nach، Zum Beispiel، Zusammenfassend.",
  },
  {
    id: "w2",
    title: "Formelle E-Mail: Beschwerde",
    promptDe: "Sie haben ein Produkt online bestellt, aber es ist beschädigt angekommen. Schreiben Sie eine formelle E-Mail an den Kundenservice (ca. 120-150 Wörter).",
    promptAr: "طلبت منتجاً عبر الإنترنت ووصل تالفاً. اكتب بريداً رسمياً لخدمة العملاء (حوالي 120-150 كلمة).",
    tip: "استخدم: Sehr geehrte Damen und Herren، Ich schreibe Ihnen، Mit freundlichen Grüßen.",
  },
];

/** أدوار التحدث B2 */
const SPEAKING_TOPICS = [
  { id: "s1", topic: "Sollte Homeoffice zur Regel werden?", ar: "هل يجب أن يصبح العمل عن بُعد قاعدة؟", points: ["Pro-Argumente", "Kontra-Argumente", "Ihre Meinung"] },
  { id: "s2", topic: "Ist Umweltschutz eine individuelle oder staatliche Aufgabe?", ar: "هل حماية البيئة مسؤولية فردية أم حكومية؟", points: ["Individuelle Verantwortung", "Staatliche Maßnahmen", "Ihre Meinung"] },
];

const SPEAKING_RUBRIC = [
  { name: "Aussprache", desc: "نطق واضح ومفهوم", max: 5 },
  { name: "Wortschatz", desc: "مفردات متنوعة مناسبة للموضوع", max: 5 },
  { name: "Flüssigkeit", desc: "طلاقة وتدفق بلا توقفات طويلة", max: 5 },
  { name: "Interaktion", desc: "الرد على الأسئلة وتفاعل حقيقي", max: 5 },
];

type Phase = "intro" | "lesen" | "hören" | "schreiben" | "sprechen" | "result";

/** مقيم ذاتي مع rubric */
function RubricSelf({ rubric, onTotal }: { rubric: typeof WRITING_RUBRIC; onTotal: (t: number) => void }) {
  const [scores, setScores] = React.useState<Record<number, number>>({});
  React.useEffect(() => {
    const total = rubric.reduce((s, _, i) => s + (scores[i] ?? 0), 0);
    onTotal(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scores]);
  return (
    <div className="space-y-2">
      {rubric.map((r, i) => (
        <div key={r.name} className="rounded-lg border bg-muted/10 p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold">{r.name}</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setScores((s) => ({ ...s, [i]: v }))}
                  className={cn(
                    "h-6 w-6 rounded-full text-[11px] font-bold",
                    scores[i] === v ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">{r.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function B2SimulationClient() {
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [readingIdx, setReadingIdx] = React.useState(0);
  const [readingAnswers, setReadingAnswers] = React.useState<Record<string, number>>({});
  const [listeningIdx, setListeningIdx] = React.useState(0);
  const [listeningAnswers, setListeningAnswers] = React.useState<Record<string, number>>({});
  const [writingText, setWritingText] = React.useState("");
  const [writingTask, setWritingTask] = React.useState(WRITING_TASKS[0]);
  const [speakingTopic, setSpeakingTopic] = React.useState(SPEAKING_TOPICS[0]);
  const [scores, setScores] = React.useState({ lesen: 0, hören: 0, schreiben: 0, sprechen: 0 });
  const [rubricTotal, setRubricTotal] = React.useState(0);

  // مؤقتات الأقسام (بالدقائق الفعلية)
  const secs = phase === "lesen" ? 65 * 60 : phase === "hören" ? 40 * 60 : phase === "schreiben" ? 75 * 60 : phase === "sprechen" ? 15 * 60 : 0;
  const remaining = useCountdown(secs, () => setPhase("result"));

  // خلط الخيارات لكل جلسة — كل الأسئلة مكتوبة بالإجابة الصحيحة في الموضع 0
  const readingTasks = React.useMemo(
    () => READING.map((task) => ({ ...task, questions: shuffleChoiceItems(task.questions) })),
    [],
  );
  const listeningTasks = React.useMemo(
    () => LISTENING.map((task) => ({ ...task, questions: shuffleChoiceItems(task.questions) })),
    [],
  );

  const reading = readingTasks[readingIdx];
  const listening = listeningTasks[listeningIdx];

  const readingScore = () => {
    let c = 0, t = 0;
    for (const task of readingTasks) for (const q of task.questions) { t++; if (readingAnswers[q.id] === q.correct) c++; }
    return t ? Math.round((c / t) * 100) : 0;
  };
  const listeningScore = () => {
    let c = 0, t = 0;
    for (const task of listeningTasks) for (const q of task.questions) { t++; if (listeningAnswers[q.id] === q.correct) c++; }
    return t ? Math.round((c / t) * 100) : 0;
  };

  const goNext = () => {
    if (phase === "lesen") { setScores((s) => ({ ...s, lesen: readingScore() })); setPhase("hören"); }
    else if (phase === "hören") { setScores((s) => ({ ...s, hören: listeningScore() })); setPhase("schreiben"); }
    else if (phase === "schreiben") { setScores((s) => ({ ...s, schreiben: writingText.length > 50 ? 70 : 30 })); setPhase("sprechen"); }
    else if (phase === "sprechen") { setScores((s) => ({ ...s, sprechen: rubricTotal })); setPhase("result"); }
  };

  const overall = Math.round((scores.lesen + scores.hören + scores.schreiben + (scores.sprechen / 20) * 100) / 4);

  // مراجعة الأدلة (الدفعة 119): بنكا المحاكاة على صيغة ExamReviewTeil — شاهد whyAr لكل سؤال
  const readingReview: ExamReviewTeil[] = readingTasks.map((t) => ({ teil: t.id, titleAr: t.title, kind: "mcq", questions: t.questions }));
  const listeningReview: ExamReviewTeil[] = listeningTasks.map((t) => ({ teil: t.id, titleAr: t.title, kind: "mcq", questions: t.questions }));

  if (phase === "intro") {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-extrabold">🎓 محاكاة Goethe-B2 الكاملة</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          تدريب تجريبي ببنية امتحان Goethe-Zertifikat B2 — ليس امتحاناً رسمياً.
          الأقسام الأربعة بالمدد الفعلية.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-muted/20 p-4">
            <p className="font-bold">📖 Lesen · 65 دقيقة</p>
            <p className="text-xs text-muted-foreground">5 نصوص + 10 أسئلة فهم</p>
          </div>
          <div className="rounded-xl border bg-muted/20 p-4">
            <p className="font-bold">🎧 Hören · ~40 دقيقة</p>
            <p className="text-xs text-muted-foreground">4 نصوص استماع + 8 أسئلة</p>
          </div>
          <div className="rounded-xl border bg-muted/20 p-4">
            <p className="font-bold">✍️ Schreiben · 75 دقيقة</p>
            <p className="text-xs text-muted-foreground">رسالة رسمية/منتدى + rubric ذاتي</p>
          </div>
          <div className="rounded-xl border bg-muted/20 p-4">
            <p className="font-bold">🗣️ Sprechen · 15+15 دقيقة</p>
            <p className="text-xs text-muted-foreground">تقديم + نقاش + rubric</p>
          </div>
        </div>
        <Button size="lg" className="mt-6" onClick={() => setPhase("lesen")}>
          ابدأ الامتحان التجريبي →
        </Button>
      </div>
    );
  }

  if (phase === "lesen") {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-bold">📖 القراءة ({readingIdx + 1}/5)</p>
          <p className="flex items-center gap-1 text-sm font-bold text-primary">
            <Timer className="h-4 w-4" /> {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </p>
        </div>
        <Progress value={(readingIdx / 5) * 100} className="mt-2 h-2" />
        <div className="mt-4 rounded-xl border bg-card p-5">
          <h2 className="font-de font-bold" dir="ltr">{reading.title}</h2>
          <p className="font-de mt-3 text-sm leading-relaxed" dir="ltr" lang="de">{reading.text}</p>
          <p className="mt-2 text-xs text-muted-foreground">{reading.textAr}</p>
        </div>
        <div className="mt-4 space-y-4">
          {reading.questions.map((q, qi) => (
            <div key={qi} className="rounded-xl border bg-muted/10 p-4">
              <p className="font-de text-sm font-bold" dir="ltr">{q.q}</p>
              <p className="text-xs text-muted-foreground">{q.qAr}</p>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setReadingAnswers((a) => ({ ...a, [q.id]: oi }))}
                    className={cn(
                      "rounded-lg border bg-background px-3 py-2 text-start text-xs transition-colors",
                      readingAnswers[q.id] === oi ? "border-primary bg-primary/10" : "hover:border-primary/40",
                    )}
                  >
                    <span className="font-de" dir="ltr">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between">
          <Button variant="outline" disabled={readingIdx === 0} onClick={() => setReadingIdx((i) => i - 1)}>السابق</Button>
          {readingIdx < READING.length - 1 ? (
            <Button onClick={() => setReadingIdx((i) => i + 1)}>التالي ←</Button>
          ) : (
            <Button onClick={goNext} variant="gold">إنهاء القراءة ←</Button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "hören") {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-bold">🎧 الاستماع ({listeningIdx + 1}/4)</p>
          <p className="flex items-center gap-1 text-sm font-bold text-primary">
            <Timer className="h-4 w-4" /> {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </p>
        </div>
        <Progress value={(listeningIdx / 4) * 100} className="mt-2 h-2" />
        <div className="mt-4 rounded-xl border bg-card p-5">
          <h2 className="font-de font-bold" dir="ltr">{listening.title}</h2>
          <p className="mt-2 text-xs text-muted-foreground">اقرأ الأسئلة أولاً ثم استمع (نصياً هنا للتدريب) — في الامتحان يُشغَّل الصوت.</p>
          <div className="mt-3 space-y-2 rounded-lg bg-muted/30 p-3">
            {listening.lines.map((l, i) => (
              <div key={i}>
                <p className="text-xs font-bold text-primary">{l.speaker}</p>
                <p className="font-de text-sm" dir="ltr" lang="de">{l.de}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {listening.questions.map((q, qi) => (
            <div key={qi} className="rounded-xl border bg-muted/10 p-4">
              <p className="font-de text-sm font-bold" dir="ltr">{q.q}</p>
              <p className="text-xs text-muted-foreground">{q.qAr}</p>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setListeningAnswers((a) => ({ ...a, [q.id]: oi }))}
                    className={cn(
                      "rounded-lg border bg-background px-3 py-2 text-start text-xs transition-colors",
                      listeningAnswers[q.id] === oi ? "border-primary bg-primary/10" : "hover:border-primary/40",
                    )}
                  >
                    <span className="font-de" dir="ltr">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between">
          <Button variant="outline" disabled={listeningIdx === 0} onClick={() => setListeningIdx((i) => i - 1)}>السابق</Button>
          {listeningIdx < LISTENING.length - 1 ? (
            <Button onClick={() => setListeningIdx((i) => i + 1)}>التالي ←</Button>
          ) : (
            <Button onClick={goNext} variant="gold">إنهاء الاستماع ←</Button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "schreiben") {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-bold">✍️ الكتابة</p>
          <p className="flex items-center gap-1 text-sm font-bold text-primary">
            <Timer className="h-4 w-4" /> {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {WRITING_TASKS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setWritingTask(t)}
              className={cn(
                "w-full rounded-xl border p-3 text-start text-sm transition-colors",
                writingTask.id === t.id ? "border-primary bg-primary/5" : "bg-card hover:border-primary/40",
              )}
            >
              <span className="font-bold">{t.title}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-xl border bg-card p-4">
          <p className="font-de text-sm font-bold" dir="ltr">{writingTask.promptDe}</p>
          <p className="mt-1 text-xs text-muted-foreground">{writingTask.promptAr}</p>
          <p className="mt-2 text-xs text-gold-strong">💡 {writingTask.tip}</p>
        </div>
        <AutoGrowTextarea
          value={writingText}
          onChange={(e) => setWritingText(e.target.value)}
          placeholder="اكتب إجابتك بالألمانية هنا..."
          dir="ltr"
          lang="de"
          minHeight={160}
          maxHeight={320}
          className="font-de mt-3 text-sm"
          aria-label="إجابتك الكتابية"
        />
        <p className="mt-2 text-xs text-muted-foreground">عدد الكلمات: {writingText.trim() ? writingText.trim().split(/\s+/).length : 0}</p>
        <div className="mt-4">
          <p className="mb-2 text-sm font-bold">📋 Rubric المراجعة الذاتية (قيّم نفسك 1-5):</p>
          <RubricSelf rubric={WRITING_RUBRIC} onTotal={setRubricTotal} />
        </div>
        <div className="mt-5 flex justify-end">
          <Button onClick={goNext} variant="gold">إنهاء الكتابة ←</Button>
        </div>
      </div>
    );
  }

  if (phase === "sprechen") {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-bold">🗣️ التحدث</p>
          <p className="flex items-center gap-1 text-sm font-bold text-primary">
            <Timer className="h-4 w-4" /> {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {SPEAKING_TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSpeakingTopic(t)}
              className={cn(
                "w-full rounded-xl border p-3 text-start text-sm transition-colors",
                speakingTopic.id === t.id ? "border-primary bg-primary/5" : "bg-card hover:border-primary/40",
              )}
            >
              <span className="font-de font-bold" dir="ltr">{t.topic}</span>
              <span className="block text-xs text-muted-foreground">{t.ar}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-xl border bg-muted/20 p-4">
          <p className="text-xs font-bold text-muted-foreground">بنية العرض (2-3 دقائق):</p>
          <ul className="mt-2 space-y-1 text-sm">
            {speakingTopic.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> <span className="font-de" dir="ltr">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            تحدث بصوت عالٍ عن النقاط الثلاث، ثم تخيل أسئلة من المحاور وأجب عنها. سجّل صوتك إن أمكن واستمع لنفسك.
          </p>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-sm font-bold">📋 Rubric التحدث (قيّم نفسك 1-5):</p>
          <RubricSelf rubric={SPEAKING_RUBRIC} onTotal={setRubricTotal} />
        </div>
        <div className="mt-5 flex justify-end">
          <Button onClick={goNext} variant="gold">عرض النتيجة ←</Button>
        </div>
      </div>
    );
  }

  // النتيجة
  const sprechenPct = Math.round((scores.sprechen / 20) * 100);
  const passed = overall >= 60;
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className={cn("rounded-2xl border p-6 text-center", passed ? "border-success/40 bg-success/5" : "border-gold/40 bg-gold/5")}>
        <p className="text-4xl">{passed ? "🎉" : "💪"}</p>
        <h2 className="mt-2 text-2xl font-extrabold">{passed ? "نتيجة ممتازة!" : "قريب — واصل التدريب"}</h2>
        <p className="font-de mt-1 text-5xl font-extrabold text-primary">{overall}%</p>
        <p className="mt-2 text-sm text-muted-foreground">
          هذا تدريب تجريبي — النتيجة مؤشر وليست شهادة Goethe رسمية.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Lesen", val: scores.lesen, icon: BookOpen },
          { label: "Hören", val: scores.hören, icon: Headphones },
          { label: "Schreiben", val: scores.schreiben, icon: PenLine },
          { label: "Sprechen", val: sprechenPct, icon: Mic },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-3 text-center">
            <s.icon className="mx-auto h-5 w-5 text-primary" />
            <p className="font-de mt-1 font-bold">{s.label}</p>
            <p className="font-de text-xl font-extrabold">{s.val}%</p>
          </div>
        ))}
      </div>
      {/* مراجعة الأدلة — لماذا هذا الجواب (الدفعة 119) */}
      <div className="mt-6 space-y-3" data-testid="exam-review">
        <h3 className="text-lg font-extrabold">مراجعة الأدلة — لماذا هذا الجواب</h3>
        <ExamReviewList teile={readingReview} answers={readingAnswers} label="lesen" />
        <ExamReviewList teile={listeningReview} answers={listeningAnswers} label="hoeren" />
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={() => { setPhase("intro"); setReadingIdx(0); setListeningIdx(0); setWritingText(""); setScores({ lesen: 0, hören: 0, schreiben: 0, sprechen: 0 }); }}>
          إعادة المحاكاة
        </Button>
        <Button asChild variant="outline">
          <a href="/tests">كل الاختبارات</a>
        </Button>
      </div>
    </div>
  );
}

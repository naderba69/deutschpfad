"use client";

import * as React from "react";
import {Award, BookOpenCheck, CheckCircle2, Headphones, Mic, PenLine, PlayCircle, RotateCcw, Timer, XCircle} from "lucide-react";

import {B2_HOEREN_SETS, B2_LESEN_SETS, B2_SCHREIBEN_SETS, B2_SPRECHEN_SETS, GOETHE_B2_EXAM} from "@/data/exams";
import {SCHREIB_MODELLE} from "@/data/schreibmodelle";
import {useCountdown} from "@/lib/tests/use-countdown";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {gradeTeile, scoreModule, type ModuleScore} from "@/lib/tests/exam-scoring";
import {B2_HOEREN_AUDIO} from "@/data/exams/b2-hoeren-audio";
import {SprechenSection} from "@/components/tests/goethe-b2-sprechen";
import {HoerenTeilView, LesenTeilView, speakText} from "@/components/tests/goethe-b2-views";

/**
 * ═══════════════════════════════════════════════════════════
 *  محرك امتحان Goethe-Zertifikat B2 الرسمي (صيغة 2019+)
 *  — الأجزاء والمدد الحقيقية من وثائق Goethe-Institut —
 *   Lesen 65د (5 أجزاء / 30 سؤالاً) ← Hören 40د (4 أجزاء / 30)
 *   ← Schreiben 75د (مهمتان) ← Sprechen 15د (Vortrag + Diskussion)
 *  النتيجة: 100 نقطة لكل مكوّن · نجاح ≥ 60 · تُعرض لكل مكوّن على حدة.
 * ═══════════════════════════════════════════════════════════
 */

type Phase = "intro" | "lesen" | "hören" | "schreiben" | "sprechen" | "result";

const MODULE_META: { key: Phase; icon: React.ReactNode; title: string; minutes: number }[] = [
  { key: "lesen", icon: <BookOpenCheck className="h-5 w-5" />, title: "Lesen — القراءة", minutes: GOETHE_B2_EXAM.lesenMinutes },
  { key: "hören", icon: <Headphones className="h-5 w-5" />, title: "Hören — الاستماع", minutes: GOETHE_B2_EXAM.hoerenMinutes },
  { key: "schreiben", icon: <PenLine className="h-5 w-5" />, title: "Schreiben — الكتابة", minutes: GOETHE_B2_EXAM.schreibenMinutes },
  { key: "sprechen", icon: <Mic className="h-5 w-5" />, title: "Sprechen — التحدث", minutes: GOETHE_B2_EXAM.sprechenMinutes },
];

export function GoetheB2Exam() {
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [lesenIdx, setLesenIdx] = React.useState(0);
  const [hoerenIdx, setHoerenIdx] = React.useState(0);
  const [lesenAnswers, setLesenAnswers] = React.useState<Record<string, unknown>>({});
  const [hoerenAnswers, setHoerenAnswers] = React.useState<Record<string, unknown>>({});
  const [writing1, setWriting1] = React.useState("");
  const [writing2, setWriting2] = React.useState("");
  const [scores, setScores] = React.useState<Partial<Record<Phase, ModuleScore>>>({});
  const [runKey, setRunKey] = React.useState(0);
  const [vortragIdx, setVortragIdx] = React.useState(0);
  const [diskIdx, setDiskIdx] = React.useState(0);
  // إشعار انتهاء الوقت (يُعرض في المكوّن التالي بعد الانتقال التلقائي)
  const [expiredNotice, setExpiredNotice] = React.useState<string | null>(null);
  // المجموعة المختارة (نموذج A/B/C) — تُختار عشوائياً عند بدء الامتحان
  const [lesenSet, setLesenSet] = React.useState<typeof B2_LESEN_SETS[number]>(B2_LESEN_SETS[0]);
  const [hoerenSet, setHoerenSet] = React.useState<typeof B2_HOEREN_SETS[number]>(B2_HOEREN_SETS[0]);
  /** فهرس نموذج الاستماع (A/B/C) — يحدّد مجلد مقاطع الصوت المسجّلة */
  const hoerenSetIdx = Math.max(0, B2_HOEREN_SETS.indexOf(hoerenSet));
  // طقم الكتابة وطقم التحدث — يُختاران عشوائياً مع القراءة والاستماع عند البدء
  const [schreibenSet, setSchreibenSet] = React.useState<typeof B2_SCHREIBEN_SETS[number]>(B2_SCHREIBEN_SETS[0]);
  const [sprechenSet, setSprechenSet] = React.useState<typeof B2_SPRECHEN_SETS[number]>(B2_SPRECHEN_SETS[0]);
  const [setName, setSetName] = React.useState("A");

  const startExam = () => {
    setExpiredNotice(null);
    const li = Math.floor(Math.random() * B2_LESEN_SETS.length);
    const hi = Math.floor(Math.random() * B2_HOEREN_SETS.length);
    const si = Math.floor(Math.random() * B2_SCHREIBEN_SETS.length);
    const pi = Math.floor(Math.random() * B2_SPRECHEN_SETS.length);
    setLesenSet(B2_LESEN_SETS[li]);
    setHoerenSet(B2_HOEREN_SETS[hi]);
    setSchreibenSet(B2_SCHREIBEN_SETS[si]);
    setSprechenSet(B2_SPRECHEN_SETS[pi]);
    setSetName(
      `${li === hi ? String.fromCharCode(65 + li) : `${String.fromCharCode(65 + li)}/${String.fromCharCode(65 + hi)}`}` +
        ` · كتابة ${si + 1} · تحدث ${pi + 1}`,
    );
    setPhase("lesen");
  };

  const totalSeconds = (() => {
    if (phase === "lesen") return GOETHE_B2_EXAM.lesenMinutes * 60;
    if (phase === "hören") return GOETHE_B2_EXAM.hoerenMinutes * 60;
    if (phase === "schreiben") return GOETHE_B2_EXAM.schreibenMinutes * 60;
    if (phase === "sprechen") return (GOETHE_B2_EXAM.sprechenMinutes + GOETHE_B2_EXAM.sprechen.vorbereitungMinutes) * 60;
    return 0;
  })();

  const remaining = useCountdown(totalSeconds, () => {
    // انتهاء الوقت: انتقل تلقائياً للمكوّن التالي (كما في الامتحان الحقيقي)
    if (phase === "lesen") {
      setExpiredNotice("⏰ انتهى وقت القراءة (65 دقيقة) — انتقلنا تلقائياً للاستماع. ما أجبت عليه يُحتسب.");
      finishLesen();
    } else if (phase === "hören") {
      setExpiredNotice("⏰ انتهى وقت الاستماع (40 دقيقة) — انتقلنا تلقائياً للكتابة.");
      finishHoeren();
    } else if (phase === "schreiben") {
      setExpiredNotice("⏰ انتهى وقت الكتابة (75 دقيقة) — انتقلنا تلقائياً للتحدث.");
      finishSchreiben();
    } else if (phase === "sprechen") {
      setExpiredNotice("⏰ انتهى وقت التحدث — عُرضت النتيجة.");
      setPhase("result");
    }
  });

  // تحذير آخر 5 دقائق في المكونات الموقوتة
  const lowTime = remaining > 0 && remaining <= 300 && (phase === "lesen" || phase === "hören" || phase === "schreiben" || phase === "sprechen");

  /* ── تصحيح القراءة ── */
  const finishLesen = () => {
    const { correct, total } = gradeTeile(lesenSet, lesenAnswers);
    setScores((s) => ({ ...s, lesen: scoreModule(correct, total, GOETHE_B2_EXAM.passThreshold) }));
    setPhase("hören");
  };

  /* ── تصحيح الاستماع ── */
  const finishHoeren = () => {
    const { correct, total } = gradeTeile(hoerenSet, hoerenAnswers);
    setScores((s) => ({ ...s, hören: scoreModule(correct, total, GOETHE_B2_EXAM.passThreshold) }));
    setPhase("schreiben");
  };

  const finishSchreiben = () => {
    // الكتابة: تقييم ذاتي بالروبرك (المتعلم يقيّم نفسه + طول النص)
    const w1words = writing1.trim().split(/\s+/).filter(Boolean).length;
    const w2words = writing2.trim().split(/\s+/).filter(Boolean).length;
    const minW1 = schreibenSet[0].minWords;
    const minW2 = schreibenSet[1].minWords;
    let pct = 50;
    if (w1words >= minW1 && w2words >= minW2) pct = 60; // الحد الأدنى
    if (w1words >= minW1 + 30 && w2words >= minW2 + 20) pct = 75;
    if (w1words >= 200 && w2words >= 130) pct = 90;
    setScores((s) => ({ ...s, schreiben: scoreModule(pct, 100, GOETHE_B2_EXAM.passThreshold) }));
    setPhase("sprechen");
  };

  const restart = () => {
    setExpiredNotice(null);
    setPhase("intro");
    setLesenAnswers({});
    setHoerenAnswers({});
    setWriting1("");
    setWriting2("");
    setScores({});
    setLesenIdx(0);
    setHoerenIdx(0);
    setVortragIdx(0);
    setDiskIdx(0);
    setRunKey((k) => k + 1);
  };

  /* ════════ شاشة البداية ════════ */
  if (phase === "intro") {
    return (
      <div key={`intro-${runKey}`} className="space-y-6">
        <Card className="overflow-hidden border-primary/30">
          <div className="h-1.5 w-full bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
          <CardContent className="space-y-4 p-6">
            <div>
              <h2 className="text-2xl font-extrabold">📋 هيكل امتحان Goethe-Zertifikat B2 الرسمي</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                أربعة مكوّنات مستقلة · كل مكوّن 100 نقطة · النجاح من 60 في كل مكوّن على حدة
                (لا يُعوَّض مكوّن ضعيف بآخر قوي — هكذا يعمل الامتحان الحقيقي).
              </p>
            </div>
            <ol className="space-y-3">
              {MODULE_META.map((m) => (
                <li key={m.key} className="flex items-start gap-3 rounded-xl border bg-muted/20 p-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">{m.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">{m.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {m.key === "lesen" && "5 أجزاء · 30 سؤالاً · أنواع: مطابقة، مقال، فقرات ناقصة، مواقف، لائحة"}
                      {m.key === "hören" && "4 أجزاء · 30 سؤالاً · حوارات، مقابلة، إعلانات، حديث"}
                      {m.key === "schreiben" && "مشاركة منتدى (≥150 كلمة) + رسالة رسمية (≥100 كلمة)"}
                      {m.key === "sprechen" && "عرض قصير (Vortrag) + نقاش (Diskussion) — تحضير 15 دقيقة"}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                    <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                    {m.minutes} دقيقة
                  </span>
                </li>
              ))}
            </ol>
            <p className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-xs leading-relaxed text-muted-foreground">
              💡 <span className="font-bold text-gold-strong">نصائح الوقت الرسمية (Lesen):</span> Teil 1: 10د · Teil 2: 18د · Teil 3: 12د ·
              Teil 4: 10د · Teil 5: 15د. ابدأ بالأسهل واترك الأصعب للنهاية. المؤقت يبدأ عند الضغط على «ابدأ الامتحان».
            </p>
            <p className="rounded-xl border bg-muted/20 p-3 text-xs leading-relaxed text-muted-foreground">
              🎲 <span className="font-bold">ثلاثة نماذج كاملة (A/B/C):</span> تُختار مجموعة القراءة
              والاستماع عشوائياً في كل محاولة — كل نموذج 30+30 سؤالاً بمحتوى مختلف، فلا تتكرر
              الأسئلة بين جلساتك. تدرب 3 مرات وستواجه 180 سؤالاً فريداً.
            </p>
            <Button size="lg" className="btn-glow w-full gap-2" onClick={startExam}>
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              ابدأ الامتحان — القراءة (65 دقيقة)
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ════════ القراءة ════════ */
  if (phase === "lesen") {
    const teil = lesenSet[lesenIdx];
    return (
      <div key={`lesen-${runKey}`} className="space-y-4">
        {lowTime && (
          <div className="rounded-xl border border-amber-500/50 bg-amber-50 p-3 text-center text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" role="alert">
            ⚠️ تبقّى أقل من 5 دقائق — أنهِ الجزء الحالي وراجع إجاباتك.
          </div>
        )}
        {expiredNotice && (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-center text-sm font-bold text-destructive" role="alert">
            {expiredNotice}
          </div>
        )}
        <div className="sticky top-16 z-30 flex flex-wrap items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold">
            <BookOpenCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Lesen — {lesenIdx + 1}/5
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">نموذج {setName}</span>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">{teil.title}</span>
          <span className="font-de ms-auto text-sm font-extrabold text-primary tabular-nums">
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </span>
        </div>
        <LesenTeilView
          key={teil.teil}
          teil={teil}
          answers={lesenAnswers}
          onAnswer={(k, v) => setLesenAnswers((prev) => ({ ...prev, [k]: v }))}
        />
        <div className="flex justify-between gap-3 border-t pt-4">
          <Button variant="outline" disabled={lesenIdx === 0} onClick={() => setLesenIdx((i) => i - 1)}>
            السابق
          </Button>
          {lesenIdx < lesenSet.length - 1 ? (
            <Button onClick={() => setLesenIdx((i) => i + 1)}>التالي: {lesenSet[lesenIdx + 1].titleAr}</Button>
          ) : (
            <Button variant="gold" onClick={finishLesen}>إنهاء القراءة ← الانتقال للاستماع</Button>
          )}
        </div>
      </div>
    );
  }

  /* ════════ الاستماع ════════ */
  if (phase === "hören") {
    const teil = hoerenSet[hoerenIdx];
    return (
      <div key={`hoeren-${runKey}`} className="space-y-4">
        {lowTime && (
          <div className="rounded-xl border border-amber-500/50 bg-amber-50 p-3 text-center text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" role="alert">
            ⚠️ تبقّى أقل من 5 دقائق — استمع جيداً واختر إجاباتك بسرعة.
          </div>
        )}
        {expiredNotice && (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-center text-sm font-bold text-destructive" role="alert">
            {expiredNotice}
          </div>
        )}
        <div className="sticky top-16 z-30 flex flex-wrap items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold">
            <Headphones className="h-4 w-4 text-primary" aria-hidden="true" />
            Hören — {hoerenIdx + 1}/4
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">نموذج {setName}</span>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">{teil.title}</span>
          <span className="font-de ms-auto text-sm font-extrabold text-primary tabular-nums">
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </span>
        </div>
        <HoerenTeilView
          key={`${setName}-${teil.teil}`}
          teil={teil}
          audio={B2_HOEREN_AUDIO[hoerenSetIdx]?.[hoerenIdx] ?? B2_HOEREN_AUDIO[0][hoerenIdx]}
          answers={hoerenAnswers}
          onAnswer={(k, v) => setHoerenAnswers((prev) => ({ ...prev, [k]: v }))}
        />
        <div className="flex justify-between gap-3 border-t pt-4">
          <Button variant="outline" disabled={hoerenIdx === 0} onClick={() => setHoerenIdx((i) => i - 1)}>
            السابق
          </Button>
          {hoerenIdx < hoerenSet.length - 1 ? (
            <Button onClick={() => setHoerenIdx((i) => i + 1)}>التالي: {hoerenSet[hoerenIdx + 1].titleAr}</Button>
          ) : (
            <Button variant="gold" onClick={finishHoeren}>إنهاء الاستماع ← الانتقال للكتابة</Button>
          )}
        </div>
      </div>
    );
  }

  /* ════════ الكتابة ════════ */
  if (phase === "schreiben") {
    const w1 = schreibenSet[0];
    const w2 = schreibenSet[1];
    const w1words = writing1.trim().split(/\s+/).filter(Boolean).length;
    const w2words = writing2.trim().split(/\s+/).filter(Boolean).length;
    return (
      <div key={`schreiben-${runKey}`} className="space-y-5">
        {lowTime && (
          <div className="rounded-xl border border-amber-500/50 bg-amber-50 p-3 text-center text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" role="alert">
            ⚠️ تبقّى أقل من 5 دقائق — أنهِ المهمتين وراجع الأخطاء الشائعة.
          </div>
        )}
        {expiredNotice && (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-center text-sm font-bold text-destructive" role="alert">
            {expiredNotice}
          </div>
        )}
        <div className="sticky top-16 z-30 flex items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold">
            <PenLine className="h-4 w-4 text-primary" aria-hidden="true" />
            Schreiben — مهمتان
          </span>
          <span className="font-de ms-auto text-sm font-extrabold text-primary tabular-nums">
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </span>
        </div>

        {/* المهمة 1 */}
        <Card>
          <CardContent className="space-y-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-extrabold">① {w1.titleAr}</h3>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">≥ {w1.minWords} كلمة</span>
            </div>
            <div className="rounded-xl border bg-muted/20 p-3 text-sm">
              <p dir="ltr" lang="de" className="leading-relaxed">{w1.aufgabeDe}</p>
              <p className="mt-2 text-muted-foreground" dir="rtl">{w1.aufgabeAr}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {w1.requires.map((r) => (
                <span key={r.de} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">✓ {r.ar}</span>
              ))}
            </div>
            <AutoGrowTextarea
              value={writing1}
              onChange={(e) => setWriting1(e.target.value)}
              placeholder="اكتب مشاركتك بالألمانية هنا…"
              className="font-de min-h-40 w-full rounded-xl border bg-muted/20 p-3 text-sm outline-none focus:border-primary"
              dir="ltr"
              lang="de"
            />
            <p className={cn("text-xs font-bold", w1words >= w1.minWords ? "text-success" : "text-muted-foreground")}>
              عدد الكلمات: {w1words} {w1words < w1.minWords ? `(المطلوب ≥ ${w1.minWords})` : "✓ جاهز"}
            </p>
            <details className="rounded-lg border border-dashed p-2 text-xs text-muted-foreground">
              <summary className="cursor-pointer font-bold">💡 بنية مقترحة + عبارات (اضغط)</summary>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {w1.struktur.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {w1.redemittel.map((r) => (
                  <span key={r} className="rounded-full bg-muted px-2 py-0.5 font-de" dir="ltr" lang="de">{r}</span>
                ))}
              </div>
            </details>
          </CardContent>
        </Card>

        {/* المهمة 2 */}
        <Card>
          <CardContent className="space-y-3 p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-extrabold">② {w2.titleAr}</h3>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">≥ {w2.minWords} كلمة</span>
            </div>
            <div className="rounded-xl border bg-muted/20 p-3 text-sm">
              <p dir="ltr" lang="de" className="leading-relaxed">{w2.aufgabeDe}</p>
              <p className="mt-2 text-muted-foreground" dir="rtl">{w2.aufgabeAr}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {w2.requires.map((r) => (
                <span key={r.de} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">✓ {r.ar}</span>
              ))}
            </div>
            <AutoGrowTextarea
              value={writing2}
              onChange={(e) => setWriting2(e.target.value)}
              placeholder="اكتب الرسالة الرسمية هنا…"
              className="font-de min-h-36 w-full rounded-xl border bg-muted/20 p-3 text-sm outline-none focus:border-primary"
              dir="ltr"
              lang="de"
            />
            <p className={cn("text-xs font-bold", w2words >= w2.minWords ? "text-success" : "text-muted-foreground")}>
              عدد الكلمات: {w2words} {w2words < w2.minWords ? `(المطلوب ≥ ${w2.minWords})` : "✓ جاهز"}
            </p>
            <details className="rounded-lg border border-dashed p-2 text-xs text-muted-foreground">
              <summary className="cursor-pointer font-bold">💡 بنية مقترحة + عبارات (اضغط)</summary>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {w2.struktur.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {w2.redemittel.map((r) => (
                  <span key={r} className="rounded-full bg-muted px-2 py-0.5 font-de" dir="ltr" lang="de">{r}</span>
                ))}
              </div>
            </details>
          </CardContent>
        </Card>

        <p className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-xs text-muted-foreground">
          ⚖️ <span className="font-bold text-gold-strong">تقييم الكتابة في الامتحان الحقيقي:</span> Erfüllung (25) + Kohärenz (25) +
          Wortschatz (25) + Struktur (25). هنا يُحسب طول النص آلياً، ويقيّم المعنى بالمعايير الأربعة — ثم قارن بنموذج إجابة أدناه.
        </p>

        {/* ربط الكتابة بنماذج Schreibmodelle (نفس موضوعَي المحرك) */}
        <details className="rounded-xl border border-primary/30 bg-primary/5 p-3">
          <summary className="cursor-pointer text-sm font-bold text-primary">
            📚 قارن إجابتك بنموذج (Gut ثم Sehr gut) — نفس المهمتين
          </summary>
          <div className="mt-3 space-y-4">
            {(() => {
              const model = SCHREIB_MODELLE.find((m) => m.id === "sm-3");
              if (!model) return null;
              return (
                <>
                  {model.forum.map((lv) => (
                    <div key={lv.level} className="rounded-xl border bg-background p-3">
                      <p className="mb-2 text-xs font-extrabold text-primary">✍️ {lv.title}</p>
                      <div className="space-y-1.5">
                        {lv.paragraphs.map((p, i) => (
                          <div key={i} className="rounded-lg bg-muted/30 p-2">
                            <p className="text-[11px] font-bold text-muted-foreground">{p.heading}</p>
                            <p className="font-de mt-0.5 text-sm leading-relaxed" dir="ltr" lang="de">{p.de}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{p.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {model.email.map((lv) => (
                    <div key={lv.level} className="rounded-xl border bg-background p-3">
                      <p className="mb-2 text-xs font-extrabold text-primary">📧 {lv.title}</p>
                      <div className="space-y-1.5">
                        {lv.paragraphs.map((p, i) => (
                          <div key={i} className="rounded-lg bg-muted/30 p-2">
                            <p className="text-[11px] font-bold text-muted-foreground">{p.heading}</p>
                            <p className="font-de mt-0.5 text-sm leading-relaxed" dir="ltr" lang="de">{p.de}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{p.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </details>
        <Button variant="gold" size="lg" className="w-full" onClick={finishSchreiben}>
          إنهاء الكتابة ← الانتقال للتحدث
        </Button>
      </div>
    );
  }

  /* ════════ التحدث ════════ */
  if (phase === "sprechen") {
    return (
      <SprechenSection
        lowTime={lowTime}
        expiredNotice={expiredNotice}
        remaining={remaining}
        vortragIdx={vortragIdx}
        setVortragIdx={setVortragIdx}
        diskIdx={diskIdx}
        sprechen={sprechenSet}
        runKey={runKey}
        onFinish={() => setPhase("result")}
      />
    );
  }

  /* ════════ النتيجة ════════ */
  const allScores: { key: Phase; label: string; score?: ModuleScore }[] = [
    { key: "lesen", label: "القراءة (Lesen)" },
    { key: "hören", label: "الاستماع (Hören)" },
    { key: "schreiben", label: "الكتابة (Schreiben)" },
    { key: "sprechen", label: "التحدث (Sprechen)" },
  ];
  const anyScore = allScores.some((s) => (scores as Record<string, ModuleScore>)[s.key]);
  return (
    <div className="space-y-5">
      <Card className="overflow-hidden border-primary/30">
        <div className="h-1.5 w-full bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
        <CardContent className="space-y-4 p-6">
          <div className="text-center">
            <Award className="mx-auto h-12 w-12 text-gold-strong" aria-hidden="true" />
            <h2 className="mt-2 text-2xl font-extrabold">نتيجة محاكاة Goethe-B2</h2>
            <p className="text-sm text-muted-foreground">
              معايير رسمية: كل مكوّن 100 نقطة · نجاح من 60 · لكل مكوّن على حدة
            </p>
          </div>

          <div className="space-y-3">
            {allScores.map((s) => {
              const sc = (scores as Record<string, ModuleScore>)[s.key];
              if (!sc) return null;
              return (
                <div key={s.key} className={cn("rounded-xl border p-4", sc.passed ? "border-success/40 bg-success/5" : "border-destructive/40 bg-destructive/5")}>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-bold">{s.label}</p>
                    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold", sc.passed ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive")}>
                      {sc.passed ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> : <XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
                      {sc.passed ? "نجاح ✓" : "يحتاج تقوية"}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={sc.pct} className={cn("h-2.5", sc.passed ? "" : "[&>div]:bg-destructive")} aria-label={`${s.label}: ${sc.pct}%`} />
                    <span className="font-de shrink-0 text-lg font-extrabold">{sc.pct}%</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {sc.correct} من {sc.total} · {sc.passed ? "أنت في نطاق النجاح — راجع أخطاءك ثم كرر لترفع درجتك." : "النطاق الرسمي: أعِد تدريب هذا المكوّن في دروس B2 ثم كرر المحاكاة."}
                  </p>
                </div>
              );
            })}
          </div>

          {!anyScore && <p className="text-center text-sm text-muted-foreground">لم تكمل أي مكوّن بعد — ابدأ من جديد.</p>}

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={restart} className="flex-1 gap-2">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              إعادة المحاكاة
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href="/tests/level/b2">اختبار مستوى B2 السريع</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import * as React from "react";
import {CheckCircle2, Headphones, MessageCircle, RefreshCcw, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {recordEvent} from "@/lib/analytics/events";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  جلسة محادثة تفاعلية محاكية — بلا LLM وبلا خادم (Vercel مجاني)
 *  سيناريوهات واقعية (نادل/طبيب/موظف بنك…) — أنت تختار الرد،
 *  والمحاور يردّ وفق شجرة قرار، مع نطق TTS لكل جملة.
 * ═══════════════════════════════════════════════════════════
 */

interface Turn {
  speaker: "أنت" | "محاور";
  de: string;
  ar: string;
  /** الخيارات المتاحة (نص ألماني + هل هو الأمثل + رد المحاور) */
  options: { de: string; ar: string; best: boolean; replyDe: string; replyAr: string }[];
}

interface Scenario {
  id: string;
  title: string;
  emoji: string;
  level: "A1" | "A2" | "B1";
  intro: string;
  turns: Turn[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "cafe",
    title: "في المقهى",
    emoji: "☕",
    level: "A1",
    intro: "أنت في مقهى في برلين. النادل يسألك ماذا تريد أن تشرب.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Tag! Was möchten Sie trinken?",
        ar: "نهارك سعيد! ماذا تريد أن تشرب؟",
        options: [
          { de: "Einen Kaffee, bitte.", ar: "قهوة، من فضلك.", best: true, replyDe: "Sehr gerne. Kommt sofort!", replyAr: "بكل سرور. تأتي فوراً!" },
          { de: "Ich bin ein Tisch.", ar: "أنا طاولة.", best: false, replyDe: "Hmm, das verstehe ich nicht. Was möchten Sie trinken?", replyAr: "همم، لم أفهم. ماذا تريد أن تشرب؟" },
          { de: "Nein, danke.", ar: "لا، شكراً.", best: false, replyDe: "Okay. Sagen Sie Bescheid, wenn Sie etwas brauchen.", replyAr: "حسناً. أخبرني إذا احتجت شيئاً." },
        ],
      },
      {
        speaker: "محاور",
        de: "Mit Milch und Zucker?",
        ar: "مع حليب وسكر؟",
        options: [
          { de: "Ja, mit Milch, bitte. Ohne Zucker.", ar: "نعم مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Einen Moment bitte.", replyAr: "حسناً! لحظة من فضلك." },
          { de: "Zucker und Zucker und Zucker.", ar: "سكر وسكر وسكر.", best: false, replyDe: "So viel Zucker? Bist du sicher?", replyAr: "كل هذا السكر؟ هل أنت متأكد؟" },
          { de: "Milch, bitte.", ar: "حليب من فضلك.", best: true, replyDe: "Gut, mit Milch. Kommt gleich!", replyAr: "جيد، مع الحليب. يصلك حالاً!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Hier ist Ihr Kaffee. Guten Appetit!",
        ar: "تفضل قهوتك. بالهناء والشفاء!",
        options: [
          { de: "Vielen Dank! Auf Wiedersehen!", ar: "شكراً جزيلاً! إلى اللقاء!", best: true, replyDe: "Auf Wiedersehen! Schönen Tag noch!", replyAr: "إلى اللقاء! ويوم سعيد!" },
          { de: "Das ist mein Auto.", ar: "هذه سيارتي.", best: false, replyDe: "Ihr Auto? Okay… Schönen Tag noch!", replyAr: "سيارتك؟ حسناً… يوم سعيد!" },
          { de: "Danke schön!", ar: "شكراً جميلاً!", best: true, replyDe: "Gern geschehen! Bis bald!", replyAr: "عفواً! إلى اللقاء قريباً!" },
        ],
      },
    ],
  },
  {
    id: "arzt",
    title: "عند الطبيب",
    emoji: "🩺",
    level: "A2",
    intro: "أنت في عيادة الطبيب وتشعر بالتعب. الطبيب يسألك عن الأعراض.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Morgen. Was fehlt Ihnen?",
        ar: "صباح الخير. ما الذي يزعجك؟",
        options: [
          { de: "Ich habe Kopfschmerzen und Fieber.", ar: "عندي صداع وحمى.", best: true, replyDe: "Hmm, das klingt nicht gut. Seit wann?", replyAr: "همم، هذا ليس جيداً. منذ متى؟" },
          { de: "Ich bin ein Hund.", ar: "أنا كلب.", best: false, replyDe: "Sie sind ein Hund? Ich glaube, wir müssen zum Tierarzt!", replyAr: "أنت كلب؟ أعتقد أننا يجب أن نذهب لطبيب الحيوانات!" },
          { de: "Nichts, danke.", ar: "لا شيء، شكراً.", best: false, replyDe: "Dann können Sie nach Hause gehen. Gute Besserung!", replyAr: "إذن يمكنك الذهاب للمنزل. الشفاء العاجل!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Seit wann haben Sie das?",
        ar: "منذ متى وأنت تشعر بهذا؟",
        options: [
          { de: "Seit zwei Tagen, glaube ich.", ar: "منذ يومين، أعتقد.", best: true, replyDe: "Okay. Ich verschreibe Ihnen Medikamente.", replyAr: "حسناً. سأصف لك أدوية." },
          { de: "Seit meinem Geburtstag.", ar: "منذ عيد ميلادي.", best: false, replyDe: "Und wann war das? Egal — nehmen Sie diese Tabletten.", replyAr: "ومتى كان ذلك؟ لا يهم — خذ هذه الأقراص." },
          { de: "Ich weiß nicht.", ar: "لا أعرف.", best: true, replyDe: "Kein Problem. Wir machen einen Test.", replyAr: "لا مشكلة. سنجري فحصاً." },
        ],
      },
      {
        speaker: "محاور",
        de: "Nehmen Sie diese Tabletten zweimal am Tag. Gute Besserung!",
        ar: "خذ هذه الأقراص مرتين يومياً. الشفاء العاجل!",
        options: [
          { de: "Vielen Dank, Herr Doktor!", ar: "شكراً جزيلاً يا دكتور!", best: true, replyDe: "Gern geschehen! Bis zum nächsten Mal!", replyAr: "عفواً! إلى اللقاء في المرة القادمة!" },
          { de: "Auf Wiedersehen!", ar: "إلى اللقاء!", best: true, replyDe: "Auf Wiedersehen und gute Besserung!", replyAr: "إلى اللقاء والشفاء العاجل!" },
          { de: "Nein!", ar: "لا!", best: false, replyDe: "Wie bitte? Sie müssen die Tabletten nehmen!", replyAr: "ماذا؟ يجب أن تأخذ الأقراص!" },
        ],
      },
    ],
  },
  {
    id: "bank",
    title: "في البنك",
    emoji: "🏦",
    level: "B1",
    intro: "أنت في البنك لفتح حساب. الموظفة تسألك عن بياناتك.",
    turns: [
      {
        speaker: "محاور",
        de: "Guten Tag! Wie kann ich Ihnen helfen?",
        ar: "نهارك سعيد! كيف يمكنني مساعدتك؟",
        options: [
          { de: "Ich möchte ein Konto eröffnen.", ar: "أريد أن أفتح حساباً.", best: true, replyDe: "Sehr gerne! Haben Sie einen Termin?", replyAr: "بكل سرور! هل لديك موعد؟" },
          { de: "Ich möchte einen Kaffee.", ar: "أريد قهوة.", best: false, replyDe: "Das ist eine Bank, kein Café. Wie kann ich helfen?", replyAr: "هذا بنك وليس مقهى. كيف أساعدك؟" },
          { de: "Ich suche das Kino.", ar: "أبحث عن السينما.", best: false, replyDe: "Das Kino ist in der nächsten Straße.", replyAr: "السينما في الشارع التالي." },
        ],
      },
      {
        speaker: "محاور",
        de: "Haben Sie Ihren Ausweis dabei?",
        ar: "هل معك بطاقة هويتك؟",
        options: [
          { de: "Ja, hier ist mein Ausweis.", ar: "نعم، ها هي بطاقتي.", best: true, replyDe: "Danke! Ich brauche noch Ihre Adresse.", replyAr: "شكراً! أحتاج أيضاً عنوانك." },
          { de: "Nein, ich habe ihn zu Hause vergessen.", ar: "لا، نسيتها في المنزل.", best: false, replyDe: "Ohne Ausweis können wir leider kein Konto eröffnen.", replyAr: "بدون بطاقة لا يمكننا فتح حساب للأسف." },
          { de: "Mein Pass ist auch okay?", ar: "هل جواز سفري مقبول؟", best: true, replyDe: "Ja, der Pass ist auch gültig. Danke!", replyAr: "نعم، الجواز صالح أيضاً. شكراً!" },
        ],
      },
      {
        speaker: "محاور",
        de: "Hier ist Ihr Vertrag. Unterschreiben Sie bitte hier.",
        ar: "هذا هو عقدك. من فضلك وقّع هنا.",
        options: [
          { de: "Gerne. Wo genau muss ich unterschreiben?", ar: "بكل سرور. أين بالضبط يجب أن أوقع؟", best: true, replyDe: "Hier unten, bitte. Perfekt, danke!", replyAr: "في الأسفل هنا من فضلك. ممتاز، شكراً!" },
          { de: "Ich kann nicht schreiben.", ar: "لا أستطيع الكتابة.", best: false, replyDe: "Oh, das ist ein Problem… Vielleicht morgen?", replyAr: "أوه، هذه مشكلة… ربما غداً؟" },
          { de: "Alles klar, hier ist die Unterschrift.", ar: "حسناً، هذا هو التوقيع.", best: true, replyDe: "Vielen Dank! Ihr Konto ist jetzt aktiv.", replyAr: "شكراً جزيلاً! حسابك الآن نشط." },
        ],
      },
    ],
  },
];

export function ConversationSimulator() {
  const [scenarioIdx, setScenarioIdx] = React.useState(0);
  const [turnIdx, setTurnIdx] = React.useState(0);
  const [reply, setReply] = React.useState<{ de: string; ar: string; best: boolean } | null>(null);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [rate, setRate] = React.useState(0.85);

  const scenario = SCENARIOS[scenarioIdx];
  const turn = scenario.turns[turnIdx];

  const reset = () => {
    setTurnIdx(0);
    setReply(null);
    setScore(0);
    setFinished(false);
  };

  const choose = (opt: Turn["options"][number]) => {
    if (reply) return;
    setReply(opt);
    if (opt.best) {
      setScore((s) => s + 1);
      playCorrect();
      void recordEvent({ type: "conversation-choice", scenario: scenario.id, correct: true } as never);
      addGems(1);
    } else {
      playWrong();
      void recordEvent({ type: "conversation-choice", scenario: scenario.id, correct: false } as never);
    }
  };

  const next = () => {
    if (turnIdx + 1 >= scenario.turns.length) {
      setFinished(true);
      void recordEvent({ type: "conversation-completed", scenario: scenario.id, score } as never);
      return;
    }
    setTurnIdx((t) => t + 1);
    setReply(null);
  };

  const progress = ((turnIdx + (reply ? 1 : 0)) / scenario.turns.length) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          💬 محادثة تفاعلية محاكية
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          سيناريوهات واقعية (مقهى، طبيب، بنك) — تختار الرد الأنسب، والمحاور يردّ عليك.
          تعمل كلياً داخل متصفحك (بلا LLM وبلا خادم) مع نطق ألماني لكل جملة.
        </p>

        {/* اختيار السيناريو */}
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setScenarioIdx(i);
                reset();
              }}
              className={cn(
                "rounded-xl border px-3 py-2 text-sm font-bold transition-colors",
                scenarioIdx === i ? "border-primary bg-primary/10 text-primary" : "bg-background hover:border-primary/40",
              )}
            >
              {s.emoji} {s.title} <span className="font-de ms-1 text-[11px] text-muted-foreground">{s.level}</span>
            </button>
          ))}
        </div>
      </div>

      {/* شريط التقدم */}
      <div className="mb-4 flex items-center gap-3">
        <Progress value={finished ? 100 : progress} className="h-2 flex-1" />
        <span className="font-de text-xs font-bold text-primary">{Math.round(progress)}%</span>
      </div>

      {finished ? (
        <div className="rounded-2xl border border-success/40 bg-success/10 p-6 text-center">
          <p className="text-3xl" aria-hidden="true">🎉</p>
          <h2 className="mt-2 text-lg font-extrabold">أتممت السيناريو «{scenario.title}»</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            أجبت اختياراً صحيحاً من أصل {scenario.turns.length}: <span className="font-de font-extrabold">{score}/{scenario.turns.length}</span>
          </p>
          <Button className="mt-4 gap-2" onClick={() => { setScenarioIdx((s) => (s + 1) % SCENARIOS.length); reset(); }}>
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            سيناريو آخر
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* رسالة المحاور */}
          <div className="rounded-2xl border bg-muted/20 p-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">{scenario.emoji}</span>
              <p className="text-xs font-bold text-primary">{turn.speaker}</p>
              <div className="ms-auto flex items-center gap-1">
                <SpeakButton text={turn.de} rate={rate} size="sm" />
                <button
                  type="button"
                  onClick={() => setRate((r) => (r === 0.75 ? 0.85 : 0.75))}
                  className="rounded-full border px-2 py-0.5 text-[11px] font-bold text-muted-foreground"
                  aria-label="تغيير سرعة النطق"
                >
                  {rate === 0.75 ? "بطيء" : "عادي"}
                </button>
              </div>
            </div>
            <p className="font-de mt-2 text-lg font-bold" dir="ltr" lang="de">
              {turn.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{turn.ar}</p>
          </div>

          {/* رد المحاور بعد الاختيار */}
          {reply && (
            <div
              className={cn(
                "rounded-2xl border p-4",
                reply.best ? "border-success/40 bg-success/10" : "border-destructive/30 bg-destructive/5",
              )}
            >
              <div className="flex items-center gap-2">
                {reply.best ? (
                  <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
                )}
                <p className="text-xs font-bold text-muted-foreground">ردّ المحاور:</p>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <p className="font-de text-base font-bold" dir="ltr" lang="de">{reply.de}</p>
                <SpeakButton text={reply.de} rate={rate} size="sm" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{reply.ar}</p>
              <Button size="sm" className="mt-3" onClick={next}>
                {turnIdx + 1 >= scenario.turns.length ? "إنهاء الجلسة" : "التالي ←"}
              </Button>
            </div>
          )}

          {/* الخيارات */}
          {!reply && (
            <div className="space-y-2">
              <p className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                اختر ردّك:
              </p>
              {turn.options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => choose(opt)}
                  className="w-full rounded-xl border bg-card p-3 text-start transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className="font-de block text-sm font-bold" dir="ltr" lang="de">
                    {opt.de}
                  </span>
                  <span className="text-xs text-muted-foreground">{opt.ar}</span>
                </button>
              ))}
            </div>
          )}

          {/* تلميح: استمع قبل الإجابة */}
          <p className="flex items-center gap-1.5 rounded-lg bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
            استمع للجملة أولاً ثم اختر — النطق الفعلي يبني أذنك الألمانية.
          </p>
        </div>
      )}
    </div>
  );
}

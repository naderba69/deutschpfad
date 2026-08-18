"use client";

/**
 * المعلم الصوتي — محادثة ألمانية صوتية
 * وضعان:
 * 1) محادثة حرة (LLM) — شريك ذكي يرد عليك صوتاً (يتطلب مفاتيح)
 * 2) تدريب موجه (محلي 100%) — أسئلة جاهزة بلا مفاتيح: استمع، أجب بالميكروفون، قيّم نفسك
 */
import * as React from "react";
import {Headphones, MessageCircle, Mic, Send, Sparkles, Square, Wand2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {useLLM} from "@/components/providers/llm-provider";
import {voiceTeacherSystemPrompt} from "@/lib/llm/prompts";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {createRecognitionEngine, isRecognitionSupported, unsupportedRecognitionNote, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {cn} from "@/lib/utils";

const LEVELS = ["A1", "A2", "B1", "B2"] as const;

const TOPICS = [
  { id: "Alltag", label: "الحياة اليومية", de: "deinen Alltag" },
  { id: "Reisen", label: "السفر", de: "eine Reise" },
  { id: "Arbeit", label: "العمل", de: "deinen Beruf" },
  { id: "Umwelt", label: "البيئة", de: "den Umweltschutz" },
  { id: "Essen", label: "الطعام", de: "dein Lieblingsessen" },
  { id: "Freizeit", label: "الفراغ", de: "deine Freizeit" },
  { id: "Wohnen", label: "السكن", de: "deine Wohnung" },
  { id: "Gesundheit", label: "الصحة", de: "Gesundheit und Sport" },
];

interface Msg {
  role: "user" | "assistant";
  text: string;
  correction?: string;
}

/* ── بنك التدريب الموجه (يعمل بلا مفاتيح) ── */
const GUIDED_BANK: Record<string, { q: string; qAr: string; model: string; modelAr: string; tip: string }[]> = {
  A1: [
    { q: "Wie heißt du und woher kommst du?", qAr: "ما اسمك ومن أين أنت؟", model: "Ich heiße Sami und ich komme aus Tunesien.", modelAr: "اسمي سامي وأنا من تونس.", tip: "ابدأ بـ Ich heiße… ثم Ich komme aus…" },
    { q: "Was machst du gern in deiner Freizeit?", qAr: "ماذا تحب أن تفعل في فراغك؟", model: "Ich spiele gern Fußball und höre Musik.", modelAr: "أحب لعب كرة القدم والاستماع للموسيقى.", tip: "استخدم gern: Ich … gern (أحب أن…)." },
    { q: "Wie ist dein Tag? Wann stehst du auf?", qAr: "كيف يومك؟ متى تستيقظ؟", model: "Ich stehe um sieben Uhr auf. Dann frühstücke ich.", modelAr: "أستيقظ السابعة ثم أتناول الفطور.", tip: "الفعل المنفصل: Ich stehe … auf (أستيقظ)." },
  ],
  A2: [
    { q: "Was hast du am Wochenende gemacht?", qAr: "ماذا فعلت في نهاية الأسبوع؟", model: "Am Wochenende bin ich in die Stadt gefahren und habe Freunde getroffen.", modelAr: "في نهاية الأسبوع ذهبت إلى المدينة والتقيت أصدقاء.", tip: "الماضي: bin gefahren (حركة) + habe getroffen (haben)." },
    { q: "Was isst du gern? Was schmeckt dir?", qAr: "ماذا تأكل بسرور؟ ما الذي يعجبك طعمه؟", model: "Ich esse gern Couscous, es schmeckt mir sehr gut.", modelAr: "أحب الكسكس، طعمه يعجبني كثيراً.", tip: "schmecken + Dativ: es schmeckt mir (يعجبني)." },
    { q: "Wohin möchtest du reisen und warum?", qAr: "إلى أين تريد السفر ولماذا؟", model: "Ich möchte nach Deutschland reisen, weil ich die Sprache lernen will.", modelAr: "أريد السفر إلى ألمانيا لأنني أريد تعلم اللغة.", tip: "möchte + weil: السبب في النهاية بالفعل." },
  ],
  B1: [
    { q: "Wie findest du das Leben in der Stadt im Vergleich zum Land?", qAr: "كيف تجد الحياة في المدينة مقارنة بالريف؟", model: "Ich finde das Leben in der Stadt praktischer, weil alles näher ist. Aber auf dem Land ist es ruhiger.", modelAr: "أجد الحياة في المدينة أسهل لأن كل شيء قريب. لكن الريف أكثر هدوءاً.", tip: "قارن: praktischer + weil… ثم لكن (aber)." },
    { q: "Was würdest du ändern, wenn du mehr Zeit hättest?", qAr: "ماذا كنت ستغيّر لو كان عندك وقت أكثر؟", model: "Wenn ich mehr Zeit hätte, würde ich mehr Sport treiben und meine Familie besuchen.", modelAr: "لو كان عندي وقت أكثر لمارست رياضة أكثر وزاررت عائلتي.", tip: "Konjunktiv II: hätte + würde… machen." },
    { q: "Sollte man im Ausland arbeiten? Warum?", qAr: "هل ينبغي العمل في الخارج؟ ولماذا؟", model: "Meiner Meinung nach lohnt es sich, weil man neue Erfahrungen sammelt. Aber man sollte die Sprache gut lernen.", modelAr: "في رأيي الأمر يستحق لأنك تكتسب خبرات جديدة. لكن ينبغي تعلم اللغة جيداً.", tip: "أبدِ رأيك: Meiner Meinung nach… + سبب weil." },
  ],
  B2: [
    { q: "Wie kann man den Umweltschutz im Alltag verbessern?", qAr: "كيف يمكن تحسين حماية البيئة في الحياة اليومية؟", model: "Man könnte mehr Fahrrad fahren und weniger Fleisch essen. Außerdem sollte man auf Plastik verzichten.", modelAr: "يمكن ركوب الدراجة أكثر وتقليل اللحوم. كما ينبغي الاستغناء عن البلاستيك.", tip: "Man könnte + sollte — اقتراحات عامة B2." },
    { q: "Welche Rolle spielt die Digitalisierung in Ihrem Beruf?", qAr: "ما دور الرقمنة في مهنتك؟", model: "Die Digitalisierung spielt eine große Rolle: Wir arbeiten viel mit Online-Tools, und die Kommunikation ist schneller geworden.", modelAr: "للرقمنة دور كبير: نعمل كثيراً بالأدوات الإلكترونية وأصبح التواصل أسرع.", tip: "كولوكيشن: eine Rolle spielen (يلعب دوراً)." },
    { q: "Diskutieren Sie: Sollte Handy in der Schule verboten werden?", qAr: "ناقش: هل يجب منع الهاتف في المدرسة؟", model: "Einerseits können Handys im Unterricht ablenken. Andererseits sind sie für die Recherche nützlich. Meiner Ansicht nach brauchen wir klare Regeln.", modelAr: "من ناحية تشتت الهواتف في الدرس. ومن ناحية أخرى مفيدة للبحث. في رأيي نحتاج قواعد واضحة.", tip: "Einerseits… andererseits… + رأيك في النهاية." },
  ],
};

export function AiVoiceTeacher() {
  const { callLLM, isConfigured } = useLLM();
  const [mode, setMode] = React.useState<"free" | "guided">(isConfigured ? "free" : "guided");
  const [level, setLevel] = React.useState<(typeof LEVELS)[number]>("A2");
  const [topic, setTopic] = React.useState(TOPICS[0]);
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [listening, setListening] = React.useState(false);
  const [interim, setInterim] = React.useState("");
  const [recognition, setRecognition] = React.useState<RecognitionEngine | null>(null);
  const [supported, setSupported] = React.useState(true);
  const [thinking, setThinking] = React.useState(false);
  const [speaking, setSpeaking] = React.useState(false);

  /* حالة التدريب الموجه */
  const [gIdx, setGIdx] = React.useState(0);
  const [gAnswered, setGAnswered] = React.useState(false);
  const [gRevealed, setGRevealed] = React.useState(false);

  const guidedQs = GUIDED_BANK[level];
  const gQ = guidedQs[gIdx % guidedQs.length];

  React.useEffect(() => {
    if (!isRecognitionSupported()) {
      setSupported(false);
      return;
    }
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        if (isFinal) {
          setInput((prev) => `${prev} ${text}`.trim());
          setInterim("");
        } else {
          setInterim(text);
        }
      },
      onStart: () => setListening(true),
      onEnd: () => setListening(false),
      onError: () => setListening(false),
    });
    setRecognition(engine);
    return () => {
      engine?.destroy();
      stopSpeaking();
    };
  }, []);

  const toggleMic = () => {
    if (!recognition) return;
    if (recognition.isListening) recognition.stop();
    else {
      stopSpeaking();
      recognition.start("de-DE");
    }
  };

  const speak = (text: string, rate = 0.95) => {
    setSpeaking(true);
    speakGerman(text, { rate, onEnd: () => setSpeaking(false), onError: () => setSpeaking(false) });
  };

  /* ── المحادثة الحرة ── */
  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || thinking) return;
    if (recognition?.isListening) recognition.stop();

    const updated: Msg[] = [...messages, { role: "user", text: content }];
    setMessages(updated);
    setInput("");
    setThinking(true);

    const p = voiceTeacherSystemPrompt(level, topic.de);
    const history = updated.map((m) => ({ role: m.role as "user" | "assistant", content: m.text }));
    const r = await callLLM({ messages: [{ role: "system", content: p.system }, ...history], purpose: "voice-teacher" });
    setThinking(false);

    if (r.ok && r.content) {
      let reply = r.content;
      let correction: string | undefined;
      const idx = reply.indexOf("###تصحيح:");
      if (idx !== -1) {
        correction = reply.slice(idx + "###تصحيح:".length).trim();
        reply = reply.slice(0, idx).trim();
      }
      setMessages((prev) => [...prev, { role: "assistant", text: reply, correction }]);
      speak(reply.replace(/\*\*/g, ""), level === "A1" || level === "A2" ? 0.9 : 0.95);
    } else if (r.status === "limit") {
      setMessages((prev) => [...prev, { role: "assistant", text: "⚠️ استنفدت حصتك اليومية — تعود غداً." }]);
    } else if (r.status === "not-configured") {
      setMessages((prev) => [...prev, { role: "assistant", text: "🔧 أضف مفاتيح LLM أولاً من الإعدادات، أو استخدم «تدريب موجه»." }]);
    }
  };

  const reset = () => {
    stopSpeaking();
    setMessages([]);
    setInput("");
    setInterim("");
  };

  /* ── التدريب الموجه ── */
  const nextGuided = () => {
    setGIdx((i) => (i + 1) % guidedQs.length);
    setGAnswered(false);
    setGRevealed(false);
    setInput("");
    setInterim("");
  };

  return (
    <div className="space-y-4">
      {/* التبويبات */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode("free")}
          disabled={!isConfigured}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
            mode === "free" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            !isConfigured && "cursor-not-allowed opacity-60",
          )}
          title={!isConfigured ? "يتطلب مفاتيح LLM" : undefined}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          محادثة حرة (ذكية)
        </button>
        <button
          type="button"
          onClick={() => setMode("guided")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
            mode === "guided" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
          )}
        >
          <Wand2 className="h-3.5 w-3.5" aria-hidden="true" />
          تدريب موجه (بدون مفاتيح)
        </button>
      </div>

      {/* شريط المستوى */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-muted-foreground">المستوى:</span>
        {LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLevel(l)}
            className={cn(
              "font-de rounded-lg border px-3 py-1 text-xs font-bold transition-colors",
              level === l ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground hover:border-primary/50",
            )}
          >
            {l}
          </button>
        ))}
        {mode === "free" && (
          <>
            <span className="ms-2 text-xs font-bold text-muted-foreground">الموضوع:</span>
            <select
              value={topic.id}
              onChange={(e) => setTopic(TOPICS.find((t) => t.id === e.target.value) ?? TOPICS[0])}
              className="rounded-lg border bg-background px-2 py-1 text-xs font-bold outline-none focus:border-primary"
              aria-label="موضوع المحادثة"
            >
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {mode === "guided" ? (
        /* ══ التدريب الموجه ══ */
        <div className="space-y-4">
          <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
            <p className="text-xs font-bold text-primary">🎯 السؤال {gIdx + 1} من {guidedQs.length} — استمع ثم أجب بصوتك:</p>
            <p className="font-de mt-2 text-lg font-bold" dir="ltr" lang="de">{gQ.q}</p>
            <p className="mt-1 text-sm text-muted-foreground">{gQ.qAr}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => speak(gQ.q, 0.85)} className="gap-1.5">
                <Headphones className="h-4 w-4" aria-hidden="true" />
                استمع للسؤال (بطيء)
              </Button>
              <Button size="sm" variant="outline" onClick={toggleMic} disabled={!supported} className="gap-1.5">
                {recognition?.isListening ? <Square className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
                {recognition?.isListening ? "إيقاف التسجيل" : "سجّل إجابتك"}
              </Button>
              {!gAnswered && input.trim() && (
                <Button size="sm" onClick={() => setGAnswered(true)}>
                  تمت الإجابة
                </Button>
              )}
            </div>
          </div>

          {interim && <p className="rounded-lg bg-muted/40 p-2 text-sm italic text-muted-foreground">{interim}</p>}
          {input && (
            <p className="font-de rounded-xl border bg-card p-3 text-sm" dir="ltr" lang="de">
              🎤 إجابتك: {input}
            </p>
          )}

          {gAnswered && (
            <div className="space-y-3">
              <div className="rounded-xl border bg-card p-3">
                <p className="text-xs font-bold text-muted-foreground">✍️ نموذج إجابة:</p>
                <p className="font-de mt-1 text-sm" dir="ltr" lang="de">{gQ.model}</p>
                <p className="mt-1 text-xs text-muted-foreground">{gQ.modelAr}</p>
                <button
                  type="button"
                  onClick={() => speak(gQ.model, 0.8)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
                  استمع للنموذج
                </button>
              </div>
              <div className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
                <p className="font-bold text-gold-foreground">💡 {gQ.tip}</p>
              </div>
              <Button onClick={nextGuided}>السؤال التالي ←</Button>
            </div>
          )}
          {!gAnswered && !input && (
            <p className="text-xs text-muted-foreground">
              أجب بصوتك أو اكتب إجابتك ثم اضغط «تمت الإجابة» لمقارنتها بالنموذج.
            </p>
          )}
        </div>
      ) : (
        /* ══ المحادثة الحرة ══ */
        <>
          {messages.length === 0 && (
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm">
              <p className="font-bold text-primary">👋 مرحباً! أنا شريكك الألماني.</p>
              <p className="mt-1 text-muted-foreground">
                اضغط الميكروفون وتحدث بالألمانية (أو اكتب)، وسأرد عليك صوتاً بالمستوى{" "}
                <span className="font-de font-bold">{level}</span> حول «{topic.label}». الأخطاء
                تُصحَّح بلطف داخل الرد.
              </p>
            </div>
          )}

          <div className="max-h-96 space-y-3 overflow-y-auto rounded-2xl border bg-muted/20 p-3">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                    m.role === "user" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm border bg-card",
                  )}
                >
                  <p className="font-de whitespace-pre-line" dir="ltr" lang="de">{m.text}</p>
                  {m.role === "assistant" && m.correction && (
                    <p className="mt-1.5 rounded-lg bg-gold/10 px-2 py-1 text-xs text-gold-strong">✍️ تصحيح: {m.correction}</p>
                  )}
                  {m.role === "assistant" && (
                    <button
                      type="button"
                      onClick={() => speak(m.text, 0.85)}
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline"
                    >
                      <Headphones className="h-3 w-3" aria-hidden="true" />
                      استمع مجدداً (بطيء)
                    </button>
                  )}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border bg-card px-4 py-2.5 text-sm text-muted-foreground">يفكّر…</div>
              </div>
            )}
            {interim && (
              <div className="flex justify-end opacity-60">
                <div className="rounded-2xl rounded-br-sm bg-primary/20 px-4 py-2 text-sm italic">{interim}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-xl border bg-background px-3 focus-within:border-primary">
              <MessageCircle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && void send()}
                placeholder={supported ? "تحدث بالميكروفون أو اكتب بالألمانية…" : "الميكروفون غير مدعوم — اكتب بالألمانية…"}
                dir="ltr"
                lang="de"
                className="font-de w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              {recognition?.isListening && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-destructive">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" aria-hidden="true" />
                  يستمع…
                </span>
              )}
            </div>
            <Button onClick={toggleMic} variant={recognition?.isListening ? "destructive" : "outline"} disabled={!supported} aria-label={listening ? "إيقاف التسجيل" : "سجّل صوتك"}>
              {recognition?.isListening ? <Square className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
            </Button>
            <Button onClick={() => void send()} disabled={!input.trim() || thinking} className="gap-1.5">
              <Send className="h-4 w-4" aria-hidden="true" />
              إرسال
            </Button>
            {speaking && (
              <Button variant="ghost" size="sm" onClick={stopSpeaking}>⏹ إيقاف النطق</Button>
            )}
          </div>
        </>
      )}

      {!supported && <p className="text-xs text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground">
          {mode === "guided"
            ? "تدرّب يومياً: استمع، أجب بصوتك، قارن بالنموذج — المفتاح هو التكرار الصوتي."
            : "ابدأ بـ «Hallo!» ثم أجب على أسئلتي. الأخطاء تُصحَّح بلطف داخل الرد."}
        </p>
        {messages.length > 0 && mode === "free" && (
          <Button variant="ghost" size="sm" onClick={reset}>🗑 محادثة جديدة</Button>
        )}
      </div>
    </div>
  );
}

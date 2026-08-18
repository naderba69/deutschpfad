"use client";

import * as React from "react";
import {Award, Mic, MicOff, RotateCcw, Star, Users} from "lucide-react";

import {TestTimer} from "@/components/tests/test-timer";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {useCountdown} from "@/lib/tests/use-countdown";
import {createRecognitionEngine, isRecognitionSupported, unsupportedRecognitionNote, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {cn} from "@/lib/utils";

const PARTS = [
  {
    title: "الجزء 1 — تقديم النفس",
    minutes: 3,
    questions: [
      { de: "Wie heißen Sie und woher kommen Sie?", ar: "ما اسمك ومن أين أنت؟" },
      { de: "Was machen Sie beruflich?", ar: "ماذا تعمل؟" },
      { de: "Warum lernen Sie Deutsch?", ar: "لماذا تتعلم الألمانية؟" },
    ],
  },
  {
    title: "الجزء 2 — حديث عن موضوع",
    minutes: 4,
    questions: [
      { de: "Welche Rolle spielt Technik in unserem Leben?", ar: "ما دور التقنية في حياتنا؟" },
      { de: "Wie kann man die Umwelt besser schützen?", ar: "كيف يمكن حماية البيئة أفضل؟" },
      { de: "Ist es wichtig, Fremdsprachen zu lernen?", ar: "هل تعلم اللغات الأجنبية مهم؟" },
    ],
  },
  {
    title: "الجزء 3 — حل مشكلة",
    minutes: 3,
    questions: [
      { de: "Ein Freund ist immer gestresst. Was schlagen Sie vor?", ar: "صديقك متوتر دائماً. ماذا تقترح؟" },
      { de: "In Ihrer Stadt gibt es zu viel Verkehr. Was kann man tun?", ar: "في مدينتك ازدحام. ماذا يمكن أن يُفعل؟" },
    ],
  },
];

/**
 * صيغة Goethe B2 الشفهي الحقيقية (2019+):
 * Teil 1 = Vortrag (عرض تقديمي لموضوع مع أسئلة إرشادية ~3 دقائق)
 * Teil 2 = Diskussion (مناقشة مع رد على آراء شريك ~4 دقائق)
 */
const B2_PRESENTATION_TOPICS = [
  {
    topicDe: "Gesundes Leben in der modernen Gesellschaft",
    topicAr: "الحياة الصحية في المجتمع الحديث",
    leitfragen: [
      { de: "Warum ist Gesundheit heute ein großes Thema?", ar: "لماذا الصحة اليوم موضوع كبير؟" },
      { de: "Welche Rolle spielen Ernährung und Bewegung?", ar: "ما دور التغذية والحركة؟" },
      { de: "Wie kann der Staat die Gesundheit fördern?", ar: "كيف يمكن للدولة تعزيز الصحة؟" },
    ],
  },
  {
    topicDe: "Arbeiten im Ausland: Chancen und Risiken",
    topicAr: "العمل في الخارج: الفرص والمخاطر",
    leitfragen: [
      { de: "Welche Vorteile hat ein Job im Ausland?", ar: "ما مزايا العمل في الخارج؟" },
      { de: "Welche Schwierigkeiten können entstehen?", ar: "ما الصعوبات التي قد تظهر؟" },
      { de: "Würden Sie selbst im Ausland arbeiten? Warum (nicht)?", ar: "هل ستعمل أنت في الخارج؟ ولماذا؟" },
    ],
  },
  {
    topicDe: "Soziale Medien: Fluch oder Segen?",
    topicAr: "وسائل التواصل الاجتماعي: نقمة أم نعمة؟",
    leitfragen: [
      { de: "Wie verändern soziale Medien unseren Alltag?", ar: "كيف تغيّر وسائل التواصل حياتنا اليومية؟" },
      { de: "Welche Gefahren gibt es für Jugendliche?", ar: "ما الأخطار على الشباب؟" },
      { de: "Wie kann man verantwortungsvoll damit umgehen?", ar: "كيف نتعامل معها بمسؤولية؟" },
    ],
  },
  {
    topicDe: "Umweltschutz im Alltag",
    topicAr: "حماية البيئة في الحياة اليومية",
    leitfragen: [
      { de: "Welche Umweltprobleme sind am dringendsten?", ar: "ما المشاكل البيئية الأكثر إلحاحاً؟" },
      { de: "Was kann jeder Einzelne konkret tun?", ar: "ماذا يستطيع كل فرد أن يفعل عملياً؟" },
      { de: "Sollte Umweltschutz Pflicht sein?", ar: "هل يجب أن تكون حماية البيئة إلزامية؟" },
    ],
  },
  {
    topicDe: "Digitales Lernen: die Zukunft der Bildung",
    topicAr: "التعلم الرقمي: مستقبل التعليم",
    leitfragen: [
      { de: "Welche Vorteile hat digitales Lernen?", ar: "ما مزايا التعلم الرقمي؟" },
      { de: "Welche Nachteile muss man bedenken?", ar: "ما العيوب التي يجب مراعاتها؟" },
      { de: "Wie sollte die Schule der Zukunft aussehen?", ar: "كيف ينبغي أن تكون مدرسة المستقبل؟" },
    ],
  },
  {
    topicDe: "Mehrsprachigkeit und Integration",
    topicAr: "تعدد اللغات والاندماج",
    leitfragen: [
      { de: "Welche Vorteile hat es, mehrere Sprachen zu sprechen?", ar: "ما مزايا تعدد اللغات؟" },
      { de: "Wie hilft Sprache bei der Integration?", ar: "كيف تساعد اللغة على الاندماج؟" },
      { de: "Sollten alle Einwanderer Deutsch lernen müssen?", ar: "هل يجب أن يتعلم كل المهاجرين الألمانية؟" },
    ],
  },
  {
    topicDe: "Freizeitgestaltung in der Stadt",
    topicAr: "تنظيم أوقات الفراغ في المدينة",
    leitfragen: [
      { de: "Welche Freizeitmöglichkeiten sind wichtig?", ar: "ما أهم فرص أوقات الفراغ؟" },
      { de: "Wie beeinflusst die Stadtplanung die Freizeit?", ar: "كيف يؤثر تخطيط المدينة على الفراغ؟" },
      { de: "Was fehlt in Ihrer Stadt?", ar: "ما الذي ينقص مدينتك؟" },
    ],
  },
  {
    topicDe: "Künstliche Intelligenz im Berufsleben",
    topicAr: "الذكاء الاصطناعي في الحياة المهنية",
    leitfragen: [
      { de: "Welche Aufgaben kann KI besser übernehmen?", ar: "ما المهام التي يستطيع الذكاء الاصطناعي القيام بها أفضل؟" },
      { de: "Welche Berufe sind besonders betroffen?", ar: "ما المهن الأكثر تأثراً؟" },
      { de: "Wie sollten wir uns darauf vorbereiten?", ar: "كيف نستعد لذلك؟" },
    ],
  },
];

const B2_DISKUSSION_STATEMENTS = [
  { de: "Ich finde, dass Handys in der Schule verboten werden sollten.", ar: "أجد أن الهواتف يجب أن تُمنع في المدرسة." },
  { de: "Arbeiten im Homeoffice ist besser als im Büro.", ar: "العمل من المنزل أفضل من المكتب." },
  { de: "Man sollte nur noch Elektroautos kaufen dürfen.", ar: "ينبغي السماح بشراء السيارات الكهربائية فقط." },
  { de: "Studium im Ausland ist der beste Weg, eine Sprache zu lernen.", ar: "الدراسة في الخارج أفضل طريق لتعلم لغة." },
  { de: "Soziale Medien machen die Menschen einsamer.", ar: "وسائل التواصل تجعل الناس أكثر عزلة." },
  { de: "Kleine Läden sind besser als große Supermärkte.", ar: "المحلات الصغيرة أفضل من المتاجر الكبرى." },
  { de: "Umweltschutz sollte wichtiger sein als Wirtschaftswachstum.", ar: "حماية البيئة أهم من النمو الاقتصادي." },
  { de: "Jeder sollte mindestens eine Fremdsprache sprechen.", ar: "يجب على الجميع التحدث بلغة أجنبية واحدة على الأقل." },
];

const B2_DISKUSSION_STRATEGY = [
  { de: "Meiner Meinung nach ...", ar: "في رأيي ..." },
  { de: "Da stimme ich Ihnen zu, weil ...", ar: "أوافقك هنا لأن ..." },
  { de: "Da muss ich Ihnen widersprechen, denn ...", ar: "يجب أن أعترض هنا لأن ..." },
  { de: "Können Sie das genauer erklären?", ar: "هل يمكنك توضيح ذلك أكثر؟" },
  { de: "Einerseits ... andererseits ...", ar: "من ناحية ... ومن ناحية أخرى ..." },
];

interface OralPart {
  title: string;
  minutes: number;
  questions: { de: string; ar: string }[];
}

/** بناء أجزاء امتحان B2 من الموضوع والعبارة المختارَين */
function buildB2Parts(
  topic: (typeof B2_PRESENTATION_TOPICS)[number],
  statement: (typeof B2_DISKUSSION_STATEMENTS)[number],
): OralPart[] {
  return [
    {
      title: "Teil 1 — Vortrag (عرض تقديمي)",
      minutes: 3,
      questions: topic.leitfragen,
    },
    {
      title: "Teil 2 — Diskussion (مناقشة)",
      minutes: 4,
      questions: [
        { de: statement.de, ar: statement.ar },
        { de: "Begründen Sie Ihre Meinung und geben Sie ein Beispiel.", ar: "علّل رأيك وأعط مثالاً." },
        { de: "Was würden Sie dem Gesprächspartner antworten, wenn er widerspricht?", ar: "ماذا ترد إذا اعترض شريكك؟" },
      ],
    },
  ];
}

const RUBRIC = [
  { key: "pronunciation", label: "النطق", hint: "واضح ومفهوم" },
  { key: "fluency", label: "السلاسة", hint: "بدون توقف طويل" },
  { key: "grammar", label: "القواعد", hint: "جمل مركبة صحيحة" },
  { key: "vocabulary", label: "المفردات", hint: "متنوعة ومناسبة" },
];

/**
 * الامتحان الشفهي — بنمط Goethe (B1 أو B2) مع مؤقت حقيقي وتقييم ذاتي بمعايير
 * B2 = عرض تقديمي (Vortrag) + مناقشة (Diskussion) — الصيغة الحقيقية للامتحان.
 */
export function OralExam() {
  const [mode, setMode] = React.useState<"b1" | "b2">("b2");
  const [partIdx, setPartIdx] = React.useState(0);
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [phase, setPhase] = React.useState<"intro" | "running" | "scoring" | "done">("intro");
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = React.useState("");
  const [recognition, setRecognition] = React.useState<RecognitionEngine | null>(null);
  const [supported, setSupported] = React.useState(true);
  const [scores, setScores] = React.useState<Record<string, number>>({});
  const [round, setRound] = React.useState(0);
  const [b2TopicIdx, setB2TopicIdx] = React.useState(0);
  const [b2StatementIdx, setB2StatementIdx] = React.useState(0);
  const currentAnswerRef = React.useRef(currentAnswer);
  currentAnswerRef.current = currentAnswer;
  const partIdxRef = React.useRef(partIdx);
  partIdxRef.current = partIdx;

  const b2Topic = B2_PRESENTATION_TOPICS[b2TopicIdx % B2_PRESENTATION_TOPICS.length];
  const b2Statement = B2_DISKUSSION_STATEMENTS[b2StatementIdx % B2_DISKUSSION_STATEMENTS.length];
  const parts = mode === "b2" ? buildB2Parts(b2Topic, b2Statement) : PARTS;
  const part = parts[partIdx];
  const question = part.questions[questionIdx];
  const totalSeconds = part.minutes * 60;
  const remaining = useCountdown(phase === "running" ? totalSeconds : 0, () => {
    // انتهاء وقت الجزء → تسجيل الإجابة الحالية والانتقال
    setAnswers((prev) => [...prev, currentAnswerRef.current || "(لم يُجب)"]);
    setCurrentAnswer("");
    if (partIdxRef.current < parts.length - 1) {
      setPartIdx((i) => i + 1);
      setQuestionIdx(0);
    } else {
      setPhase("scoring");
    }
  });

  React.useEffect(() => {
    if (!isRecognitionSupported()) {
      setSupported(false);
      return;
    }
    const engine = createRecognitionEngine({
      onResult: (text) => setCurrentAnswer((prev) => `${prev} ${text}`.trim()),
      onStart: () => {},
      onEnd: () => {},
      onError: () => {},
    });
    setRecognition(engine);
    return () => engine?.destroy();
  }, []);

  const toggleMic = () => {
    if (!recognition) return;
    if (recognition.isListening) recognition.stop();
    else recognition.start("de-DE");
  };

  const start = () => {
    // اختيار عشوائي لموضوع وعبارة جديدة في كل جولة B2
    if (mode === "b2") {
      setB2TopicIdx((i) => (i + 1) % B2_PRESENTATION_TOPICS.length);
      setB2StatementIdx((i) => (i + 3) % B2_DISKUSSION_STATEMENTS.length);
    }
    setPhase("running");
    setAnswers([]);
    setPartIdx(0);
    setQuestionIdx(0);
    setCurrentAnswer("");
  };

  const nextQuestion = () => {
    setAnswers((prev) => [...prev, currentAnswer || "(لم يُجب)"]);
    setCurrentAnswer("");
    if (questionIdx + 1 < part.questions.length) {
      setQuestionIdx((i) => i + 1);
    } else if (partIdx < parts.length - 1) {
      setPartIdx((i) => i + 1);
      setQuestionIdx(0);
    } else {
      setPhase("scoring");
    }
  };

  const finishScoring = () => {
    setPhase("done");
  };

  const totalScore = Object.values(scores).reduce((s, v) => s + v, 0);
  const maxScore = RUBRIC.length * 5;

  /* ── مقدمة ── */
  if (phase === "intro") {
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <Users className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-extrabold">الامتحان الشفهي بنمط Goethe</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          اختر الصيغة التي تتدرب عليها: B1 (تقديم النفس + حديث + حل مشكلة) أو B2 (عرض
          تقديمي + مناقشة — الصيغة الحقيقية لشهادة B2). سجّل إجاباتك ثم قيّم نفسك بمعايير
          الممتحنين (النطق، السلاسة، القواعد، المفردات).
        </p>

        {/* اختيار الصيغة */}
        <div className="mx-auto mt-6 grid grid-cols-1 max-w-lg gap-3 sm:grid-cols-2" role="radiogroup" aria-label="صيغة الامتحان">
          <button
            type="button"
            role="radio"
            aria-checked={mode === "b2"}
            onClick={() => setMode("b2")}
            className={cn(
              "rounded-2xl border-2 p-4 text-start transition-colors",
              mode === "b2" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40",
            )}
          >
            <p className="font-de text-lg font-extrabold text-primary">B2</p>
            <p className="mt-1 text-sm font-bold">Vortrag + Diskussion</p>
            <p className="mt-1 text-xs text-muted-foreground">
              عرض تقديمي لموضوع (3د) مع أسئلة إرشادية + مناقشة (4د) — على غرار بنية الجزء الشفهي من Goethe-Zertifikat B2 (تدريب تجريبي).
            </p>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === "b1"}
            onClick={() => setMode("b1")}
            className={cn(
              "rounded-2xl border-2 p-4 text-start transition-colors",
              mode === "b1" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40",
            )}
          >
            <p className="font-de text-lg font-extrabold text-primary">B1</p>
            <p className="mt-1 text-sm font-bold">Sich vorstellen + Thema + Planung</p>
            <p className="mt-1 text-xs text-muted-foreground">
              تقديم النفس (3د) + حديث عن موضوع (4د) + حل مشكلة (3د) — كما في Zertifikat B1.
            </p>
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={start} className="gap-1.5">
            <Mic className="h-4 w-4" aria-hidden="true" />
            ابدأ الامتحان
          </Button>
        </div>
        {!supported && <p className="mt-4 text-sm text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>}
      </div>
    );
  }

  /* ── التقييم الذاتي ── */
  if (phase === "scoring") {
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-extrabold">قيّم أداءك (مثل الممتحن)</h3>
        <div className="space-y-4">
          {RUBRIC.map((r) => (
            <div key={r.key} className="rounded-xl border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">{r.label}</p>
                <span className="text-xs text-muted-foreground">{r.hint}</span>
              </div>
              <div className="mt-2 flex gap-1.5" role="radiogroup" aria-label={r.label}>
                {[1, 2, 3, 4, 5].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setScores((prev) => ({ ...prev, [r.key]: v }))}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold transition-colors",
                      scores[r.key] === v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "bg-background hover:border-primary/50",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button size="lg" onClick={finishScoring} className="w-full gap-1.5" disabled={Object.keys(scores).length < RUBRIC.length}>
          <Award className="h-4 w-4" aria-hidden="true" />
          عرض النتيجة
        </Button>
      </div>
    );
  }

  /* ── النتيجة ── */
  if (phase === "done") {
    const pct = Math.round((totalScore / maxScore) * 100);
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <Star className="h-8 w-8 text-gold-strong" aria-hidden="true" />
        </span>
        <p className="font-de mt-4 text-4xl font-extrabold text-primary">
          {totalScore}/{maxScore}
        </p>
        <p className="mt-1 font-bold">{pct >= 80 ? "مستوى ممتاز للامتحان! 🎉" : pct >= 60 ? "جيد — واصل التدريب اليومي" : "تحتاج مزيداً من التدريب — استخدم محاكاة التحدث يومياً"}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          تذكّر: في الامتحان الحقيقي تُقيَّم هذه المعايير الأربعة نفسها. تدرب يومياً بالأسئلة
          العشوائية وستتحسن بسرعة.
        </p>
        <Button className="mt-6" onClick={() => { setRound((r) => r + 1); start(); }}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          إعادة المحاكاة
        </Button>
      </div>
    );
  }

  /* ── الجري ── */
  return (
    <div key={round} className="space-y-4">
      {/* شريط الأجزاء */}
      <div className="flex flex-wrap gap-1.5">
        {parts.map((p, i) => (
          <span
            key={p.title}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-semibold",
              i === partIdx ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground",
            )}
          >
            {p.title}
          </span>
        ))}
        <TestTimer seconds={remaining} total={totalSeconds} />
      </div>

      {/* بطاقة موضوع B2 — في Teil 1 (العرض) */}
      {mode === "b2" && partIdx === 0 && (
        <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
          <p className="text-xs font-bold text-gold-foreground">🎤 Themenkarte — بطاقة الموضوع (كما في الامتحان)</p>
          <p className="font-de mt-1 text-lg font-extrabold" dir="ltr" lang="de">
            {b2Topic.topicDe}
          </p>
          <p className="text-sm text-muted-foreground">{b2Topic.topicAr}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            💡 قدّم الموضوع منظمّاً: مقدمة ← الوضع الحالي ← أسباب/مشاكل ← حلول ← رأيك. استخدم
            عبارات الهيكلة من بنك العبارات.
          </p>
        </div>
      )}

      {/* السؤال */}
      <div className="rounded-xl border bg-card p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-muted-foreground">
              سؤال {questionIdx + 1}/{part.questions.length} — {part.title}
            </p>
            <p className="font-de mt-2 text-lg font-bold" dir="ltr" lang="de">
              {question.de}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{question.ar}</p>
          </div>
          <SpeakButton text={question.de} variant="outline" />
        </div>
      </div>

      {/* استراتيجيات المناقشة — في Teil 2 (B2) */}
      {mode === "b2" && partIdx === 1 && (
        <div className="rounded-xl border bg-muted/30 p-3">
          <p className="mb-2 text-xs font-bold text-muted-foreground">🗣️ عبارات المناقشة الجاهزة:</p>
          <div className="flex flex-wrap gap-1.5">
            {B2_DISKUSSION_STRATEGY.map((s) => (
              <span key={s.de} className="inline-flex items-center gap-1 rounded-full border bg-background px-2.5 py-1 text-xs">
                <span className="font-de" dir="ltr" lang="de">{s.de}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* التحكم */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant={recognition?.isListening ? "destructive" : "default"} onClick={toggleMic} className="gap-1.5">
          {recognition?.isListening ? <MicOff className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
          {recognition?.isListening ? "إيقاف التسجيل" : "سجّل إجابتك"}
        </Button>
        <Button variant="outline" onClick={nextQuestion} className="gap-1.5">
          {partIdx === parts.length - 1 && questionIdx === part.questions.length - 1 ? "إنهاء → التقييم" : "السؤال التالي"}
        </Button>
      </div>

      {/* الإجابة الحالية */}
      {currentAnswer && (
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-3">
          <p className="text-xs font-bold text-primary">إجابتك المسجلة:</p>
          <p className="font-de mt-1 text-sm" dir="ltr" lang="de">
            {currentAnswer}
          </p>
        </div>
      )}

      {/* شريط التقدم */}
      <Progress
        value={((partIdx * 3 + questionIdx + 1) / (parts.length * 3)) * 100}
        aria-label="التقدم في الامتحان"
      />
      <p className="text-center text-xs text-muted-foreground">
        ⏱ عند انتهاء وقت الجزء يُسلَّم تلقائياً — تكلم بثقة واستخدم جمل مركبة!
      </p>
    </div>
  );
}

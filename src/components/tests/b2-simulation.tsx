"use client";

import * as React from "react";
import {BookOpen, CheckCircle2, Headphones, Mic, PenLine, Timer, XCircle} from "lucide-react";

import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {useCountdown} from "@/lib/tests/use-countdown";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {cn} from "@/lib/utils";

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
 *  مع Rubric صريحة للكتابة والتحدث للمراجعة الذاتية،
 *  ونتيجة إجمالية تشمل الأقسام الأربعة.
 * ═══════════════════════════════════════════════════════════
 */

interface B2ReadingTask {
  id: string;
  title: string;
  text: string;
  textAr: string;
  questions: { q: string; qAr: string; options: string[]; correct: number }[];
}

interface B2ListeningTask {
  id: string;
  title: string;
  lines: { speaker: string; de: string; ar: string }[];
  questions: { q: string; qAr: string; options: string[]; correct: number }[];
}

/** بنك القراءة B2 (نماذج تدريبية بأسلوب Goethe) */
const READING: B2ReadingTask[] = [
  {
    id: "r1",
    title: "Arbeitszeit und Flexibilität",
    text: "Immer mehr Unternehmen bieten flexible Arbeitszeiten an. Während ältere Arbeitnehmer feste Zeiten bevorzugen, schätzen jüngere Kollegen die Freiheit. Allerdings zeigt eine Studie, dass die Produktivität sinkt, wenn es keine festen Kernzeiten gibt. Experten empfehlen daher eine Mischung aus Flexibilität und verbindlichen Besprechungen.",
    textAr: "المزيد من الشركات تقدم ساعات عمل مرنة. بينما يفضل الموظفون الأكبر سناً الأوقات الثابتة، يقدر الزملاء الأصغر الحرية. لكن دراسة تظهر أن الإنتاجية تنخفض عندما لا توجد أوقات أساسية ثابتة. لذلك يوصي الخبراء بمزيج من المرونة والاجتماعات الملزمة.",
    questions: [
      { q: "Was empfehlen Experten?", qAr: "ماذا يوصي الخبراء؟", options: ["Eine Mischung aus Flexibilität und festen Zeiten", "Nur feste Arbeitszeiten", "Nur flexible Zeiten"], correct: 0 },
      { q: "Wer bevorzugt feste Zeiten?", qAr: "من يفضل الأوقات الثابتة؟", options: ["Ältere Arbeitnehmer", "Jüngere Kollegen", "Alle Mitarbeiter"], correct: 0 },
    ],
  },
  {
    id: "r2",
    title: "Digitalisierung im Alltag",
    text: "Die Digitalisierung hat den Alltag grundlegend verändert. Einerseits erleichtern Online-Dienste viele Aufgaben, andererseits steigt die Sorge um den Datenschutz. Besonders ältere Menschen fühlen sich oft überfordert. Politiker fordern daher mehr digitale Bildung und klare Regeln für den Umgang mit persönlichen Daten.",
    textAr: "الرقمنة غيرت الحياة اليومية جذرياً. من ناحية تسهل الخدمات عبر الإنترنت مهاماً كثيرة، ومن ناحية أخرى تزداد المخاوف بشأن حماية البيانات. خصوصاً كبار السن يشعرون أحياناً بالإرباك. لذلك يطالب السياسيون بمزيد من التعليم الرقمي وقواعد واضحة للتعامل مع البيانات الشخصية.",
    questions: [
      { q: "Was fordern Politiker?", qAr: "ماذا يطالب السياسيون؟", options: ["Mehr digitale Bildung und klare Regeln", "Ein Verbot von Online-Diensten", "Mehr Daten sammeln"], correct: 0 },
      { q: "Wer fühlt sich oft überfordert?", qAr: "من يشعر غالباً بالإرباك؟", options: ["Ältere Menschen", "Kinder", "Politiker"], correct: 0 },
    ],
  },
  {
    id: "r3",
    title: "Umweltschutz im Alltag",
    text: "Umweltbewusstes Handeln beginnt im Alltag: weniger Plastik, mehr öffentliche Verkehrsmittel, regionale Produkte kaufen. Viele Menschen glauben jedoch, dass ihr persönlicher Beitrag keine Wirkung hat. Umweltorganisationen betonen dagegen, dass kollektives Handeln erst durch viele kleine Beiträge entsteht.",
    textAr: "السلوك البيئي يبدأ في الحياة اليومية: بلاستيك أقل، وسائل نقل عام أكثر، شراء منتجات محلية. لكن كثيرين يعتقدون أن مساهمتهم الشخصية بلا تأثير. تؤكد المنظمات البيئية أن العمل الجماعي ينشأ أولاً من مساهمات صغيرة كثيرة.",
    questions: [
      { q: "Was glauben viele Menschen?", qAr: "ماذا يعتقد كثيرون؟", options: ["Ihr Beitrag hat keine Wirkung", "Ihr Beitrag ist sehr wichtig", "Umweltschutz ist teuer"], correct: 0 },
      { q: "Was betonen Umweltorganisationen?", qAr: "ماذا تؤكد المنظمات البيئية؟", options: ["Kollektives Handeln entsteht durch kleine Beiträge", "Man kann nichts tun", "Nur große Firmen helfen"], correct: 0 },
    ],
  },
  {
    id: "r4",
    title: "Sprachen lernen im digitalen Zeitalter",
    text: "Dank Apps und Online-Kursen ist Sprachenlernen heute einfacher als je zuvor. Trotzdem zeigen Studien, dass Lerner ohne echte Gespräche mit Muttersprachlern langsamer Fortschritte machen. Die Kombination aus digitalen Übungen und realer Kommunikation scheint am effektivsten zu sein.",
    textAr: "بفضل التطبيقات والدورات عبر الإنترنت أصبح تعلم اللغات أسهل من أي وقت مضى. رغم ذلك تظهر الدراسات أن المتعلمين بلا محادثات حقيقية مع الناطقين يتقدمون أبطأ. يبدو أن الجمع بين التمارين الرقمية والتواصل الحقيقي هو الأكثر فعالية.",
    questions: [
      { q: "Was ist am effektivsten?", qAr: "ما الأكثر فعالية؟", options: ["Digitale Übungen + echte Kommunikation", "Nur Apps", "Nur Bücher"], correct: 0 },
      { q: "Wer macht langsamere Fortschritte?", qAr: "من يتقدم ببطء أكبر؟", options: ["Lerner ohne echte Gespräche", "Lerner mit Muttersprachlern", "Kinder"], correct: 0 },
    ],
  },
  {
    id: "r5",
    title: "Gesundheit und Stress",
    text: "Stress am Arbeitsplatz ist ein wachsendes Problem. Betroffene klagen über Schlafstörungen und Erschöpfung. Experten raten zu regelmäßigen Pausen, Bewegung und einer klaren Trennung zwischen Arbeit und Freizeit. Unternehmen tragen Verantwortung, ein gesundes Arbeitsklima zu schaffen.",
    textAr: "الإجهاد في العمل مشكلة متنامية. يشكو المصابون من اضطرابات النوم والإرهاق. ينصح الخبراء بفواصل منتظمة وحركة وفصل واضح بين العمل والراحة. وتتحمل الشركات مسؤولية خلق مناخ عمل صحي.",
    questions: [
      { q: "Was raten Experten?", qAr: "بماذا ينصح الخبراء؟", options: ["Pausen, Bewegung und klare Trennung", "Mehr Kaffee", "Weniger Schlaf"], correct: 0 },
      { q: "Worüber klagen Betroffene?", qAr: "بماذا يشكو المصابون؟", options: ["Schlafstörungen und Erschöpfung", "Zu viel Freizeit", "Zu wenig Arbeit"], correct: 0 },
    ],
  },
];

/** بنك الاستماع B2 */
const LISTENING: B2ListeningTask[] = [
  {
    id: "h1",
    title: "Radiobeitrag: Homeoffice",
    lines: [
      { speaker: "Moderatorin", de: "Viele Unternehmen führen Homeoffice-Regelungen ein. Eine Umfrage zeigt, dass 60 Prozent der Angestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten.", ar: "العديد من الشركات تقدم قواعد العمل عن بُعد. يُظهر استطلاع أن 60% من الموظفين يريدون العمل من المنزل يومين أسبوعياً على الأقل." },
      { speaker: "Expertin", de: "Die Vorteile sind klar: weniger Fahrtzeit, mehr Flexibilität. Aber soziale Kontakte fehlen. Wichtig ist eine gute Kommunikationskultur.", ar: "المزايا واضحة: وقت تنقل أقل، مرونة أكثر. لكن التواصل الاجتماعي ينقص. المهم ثقافة تواصل جيدة." },
    ],
    questions: [
      { q: "Wie viele Prozent möchten zwei Tage Homeoffice?", qAr: "كم بالمئة يريدون يومين عمل عن بُعد؟", options: ["60 Prozent", "40 Prozent", "80 Prozent"], correct: 0 },
      { q: "Was fehlt laut Expertin?", qAr: "ماذا ينقص حسب الخبيرة؟", options: ["Soziale Kontakte", "Zeit", "Geld"], correct: 0 },
    ],
  },
  {
    id: "h2",
    title: "Nachrichten: Umweltschutz",
    lines: [
      { speaker: "Sprecher", de: "Die Stadt Berlin plant, bis 2030 die Hälfte aller Autofahrten auf Fahrrad und öffentliche Verkehrsmittel zu verlagern. Kritiker warnen vor langen Bauzeiten.", ar: "تخطط مدينة برلين لنقل نصف رحلات السيارات إلى الدراجات والنقل العام بحلول 2030. يحذر النقاد من فترات بناء طويلة." },
    ],
    questions: [
      { q: "Was plant Berlin bis 2030?", qAr: "ماذا تخطط برلين حتى 2030؟", options: ["Hälfte der Autofahrten verlagern", "Alle Autos verbieten", "Nur Fahrräder"], correct: 0 },
      { q: "Was kritisieren Kritiker?", qAr: "بماذا يحذر النقاد؟", options: ["Lange Bauzeiten", "Zu wenig Geld", "Zu viele Fahrräder"], correct: 0 },
    ],
  },
  {
    id: "h3",
    title: "Interview: Studium im Ausland",
    lines: [
      { speaker: "Reporter", de: "Immer mehr Studierende verbringen ein Semester im Ausland. Der Student Karim berichtet: Die Sprachkenntnisse verbessern sich schnell, und man lernt eine neue Kultur kennen.", ar: "المزيد من الطلاب يقضون فصلاً في الخارج. الطالب كريم يقول: تتحسن مهارات اللغة بسرعة ويتعرف المرء على ثقافة جديدة." },
      { speaker: "Karim", de: "Am Anfang war es schwierig, aber nach drei Monaten habe ich mich eingelebt. Ich empfehle jedem diese Erfahrung.", ar: "كان صعباً في البداية، لكن بعد ثلاثة أشهر تأقلمت. أنصح الجميع بهذه التجربة." },
    ],
    questions: [
      { q: "Was verbessert sich laut Karim schnell?", qAr: "ماذا يتحسن سريعاً حسب كريم؟", options: ["Die Sprachkenntnisse", "Das Gehalt", "Die Prüfungen"], correct: 0 },
      { q: "Was empfiehlt Karim?", qAr: "بماذا ينصح كريم؟", options: ["Diese Erfahrung zu machen", "Im Ausland zu bleiben", "Nicht zu reisen"], correct: 0 },
    ],
  },
  {
    id: "h4",
    title: "Tipps: Bewerbungsgespräch",
    lines: [
      { speaker: "Beraterin", de: "Für ein erfolgreiches Bewerbungsgespräch sollten Sie sich gut vorbereiten: Informieren Sie sich über die Firma, bereiten Sie Beispiele für Ihre Stärken vor und stellen Sie eigene Fragen. Pünktlichkeit ist selbstverständlich.", ar: "لمقابلة عمل ناجحة يجب التحضير جيداً: تعرف على الشركة، جهّز أمثلة على نقاط قوتك، واطرح أسئلتك الخاصة. الالتزام بالمواعيد بديهي." },
    ],
    questions: [
      { q: "Was sollte man über die Firma tun?", qAr: "ماذا يجب فعله حول الشركة؟", options: ["Sich informieren", "Nichts", "Vergessen"], correct: 0 },
      { q: "Was ist selbstverständlich?", qAr: "ما البديهي؟", options: ["Pünktlichkeit", "Verspätung", "Fragen stellen"], correct: 0 },
    ],
  },
];

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

  const reading = READING[readingIdx];
  const listening = LISTENING[listeningIdx];

  const readingScore = () => {
    let c = 0, t = 0;
    for (const task of READING) for (const q of task.questions) { t++; if (readingAnswers[`${task.id}:${q.q}`] === q.correct) c++; }
    return t ? Math.round((c / t) * 100) : 0;
  };
  const listeningScore = () => {
    let c = 0, t = 0;
    for (const task of LISTENING) for (const q of task.questions) { t++; if (listeningAnswers[`${task.id}:${q.q}`] === q.correct) c++; }
    return t ? Math.round((c / t) * 100) : 0;
  };

  const goNext = () => {
    if (phase === "lesen") { setScores((s) => ({ ...s, lesen: readingScore() })); setPhase("hören"); }
    else if (phase === "hören") { setScores((s) => ({ ...s, hören: listeningScore() })); setPhase("schreiben"); }
    else if (phase === "schreiben") { setScores((s) => ({ ...s, schreiben: writingText.length > 50 ? 70 : 30 })); setPhase("sprechen"); }
    else if (phase === "sprechen") { setScores((s) => ({ ...s, sprechen: rubricTotal })); setPhase("result"); }
  };

  const overall = Math.round((scores.lesen + scores.hören + scores.schreiben + (scores.sprechen / 20) * 100) / 4);

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
                    onClick={() => setReadingAnswers((a) => ({ ...a, [`${reading.id}:${q.q}`]: oi }))}
                    className={cn(
                      "rounded-lg border bg-background px-3 py-2 text-start text-xs transition-colors",
                      readingAnswers[`${reading.id}:${q.q}`] === oi ? "border-primary bg-primary/10" : "hover:border-primary/40",
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
                    onClick={() => setListeningAnswers((a) => ({ ...a, [`${listening.id}:${q.q}`]: oi }))}
                    className={cn(
                      "rounded-lg border bg-background px-3 py-2 text-start text-xs transition-colors",
                      listeningAnswers[`${listening.id}:${q.q}`] === oi ? "border-primary bg-primary/10" : "hover:border-primary/40",
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

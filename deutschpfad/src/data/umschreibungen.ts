/**
 * ═══════════════════════════════════════════════════════════
 *  تدريب تحويل الجمل (Umschreibungen) — بأساليب Goethe B2
 *  الأنواع العشرة الرسمية في امتحان غوته B2 (Grammatik):
 *  1) Aktiv → Passiv        6) Direkte → Indirekte Rede
 *  2) Passiv → Aktiv        7) weil → wegen (اسمي)
 *  3) Satz → Nominalisierung 8) Passiv → sich lassen
 *  4) Nominalisierung → Satz 9) damit → um...zu
 *  5) Relativsatz → Partizip 10) Konjunktiv II (تمنيات)
 *  — أضيفت ضمن اقتراحات المرحلة النهائية —
 * ═══════════════════════════════════════════════════════════
 */

export interface UmschreibTyp {
  id: string;
  num: number;
  titleAr: string;
  titleDe: string;
  desc: string;
  /** مثال يوضح التحويل */
  beispielDe: string;
  beispielAr: string;
  level: "B1" | "B2";
}

export interface UmschreibExercise {
  id: string;
  /** نوع التحويل (مفتاح في UMSCHREIB_TYPEN) */
  typ: string;
  level: "B1" | "B2";
  /** الجملة الأصلية المطلوب تحويلها */
  prompt: string;
  promptAr: string;
  /** الإجابات المقبولة (التسامح في الصياغة) */
  acceptedAnswers: string[];
  /** الإجابة النموذجية */
  sampleAnswer: string;
  /** الشرح بالعربية */
  explanation: string;
}

/** الأنواع العشرة الرسمية */
export const UMSCHREIB_TYPEN: UmschreibTyp[] = [
  {
    id: "aktiv-passiv",
    num: 1,
    titleAr: "نشط ← مجهول",
    titleDe: "Aktiv → Passiv",
    desc: "حول الجملة من المعلوم إلى المجهول (werden + Partizip II)",
    beispielDe: "Man baut das Haus. → Das Haus wird gebaut.",
    beispielAr: "يبني الناس البيت. ← يُبنى البيت.",
    level: "B1",
  },
  {
    id: "passiv-aktiv",
    num: 2,
    titleAr: "مجهول ← نشط",
    titleDe: "Passiv → Aktiv",
    desc: "حول من المجهول إلى المعلوم (ابحث عن الفاعل مع von/durch)",
    beispielDe: "Der Brief wird vom Chef geschrieben. → Der Chef schreibt den Brief.",
    beispielAr: "تُكتب الرسالة من المدير. ← يكتب المدير الرسالة.",
    level: "B1",
  },
  {
    id: "satz-nominal",
    num: 3,
    titleAr: "جملة ← اشتقاق اسمي",
    titleDe: "Satz → Nominalisierung",
    desc: "حول الجملة إلى اسم (الاشتقاق الاسمي — علامة B2)",
    beispielDe: "Wir diskutieren über die Umwelt. → Die Diskussion über die Umwelt.",
    beispielAr: "نناقش البيئة. ← النقاش حول البيئة.",
    level: "B2",
  },
  {
    id: "nominal-satz",
    num: 4,
    titleAr: "اشتقاق ← جملة",
    titleDe: "Nominalisierung → Satz",
    desc: "حول الاسم المشتق إلى جملة كاملة",
    beispielDe: "Die Lösung des Problems → Man löst das Problem.",
    beispielAr: "حل المشكلة ← يحل المرء المشكلة.",
    level: "B2",
  },
  {
    id: "relativ-partizip",
    num: 5,
    titleAr: "نسبية ← مشاركة",
    titleDe: "Relativsatz → Partizipialattribut",
    desc: "حول الجملة النسبية إلى صفة مشاركة (علامة B2 متقدمة)",
    beispielDe: "Der Mann, der lacht → der lachende Mann",
    beispielAr: "الرجل الذي يضحك ← الرجل الضاحك.",
    level: "B2",
  },
  {
    id: "indirekte-rede",
    num: 6,
    titleAr: "مباشر ← غير مباشر",
    titleDe: "Direkte → Indirekte Rede (Konjunktiv I)",
    desc: "حول القول المباشر إلى منقول (Konjunktiv I)",
    beispielDe: "Er sagt: „Ich habe keine Zeit.“ → Er sagt, er habe keine Zeit.",
    beispielAr: "يقول: «لا وقت عندي» ← يقول إنه لا وقت عنده.",
    level: "B2",
  },
  {
    id: "weil-wegen",
    num: 7,
    titleAr: "سبب ← اسم",
    titleDe: "weil → wegen + Genitiv",
    desc: "حول جملة السبب إلى اسم (wegen + Genitiv)",
    beispielDe: "Weil er krank ist → wegen seiner Krankheit",
    beispielAr: "لأنه مريض ← بسبب مرضه.",
    level: "B1",
  },
  {
    id: "passiv-lassen",
    num: 8,
    titleAr: "مجهول ← sich lassen",
    titleDe: "Passiv → sich lassen",
    desc: "حول المجهول إلى «sich lassen» (بديل المجهول — علامة B2)",
    beispielDe: "Das Problem kann gelöst werden. → Das Problem lässt sich lösen.",
    beispielAr: "يمكن حل المشكلة ← المشكلة تحل نفسها/قابلة للحل.",
    level: "B2",
  },
  {
    id: "damit-umzu",
    num: 9,
    titleAr: "هدف ← um...zu",
    titleDe: "damit → um...zu",
    desc: "حول جملة الهدف إلى um...zu (عند تطابق الفاعل)",
    beispielDe: "Ich lerne, damit ich besser werde. → Ich lerne, um besser zu werden.",
    beispielAr: "أتعلم لكي أتحسن. (فاعل واحد → um...zu)",
    level: "B1",
  },
  {
    id: "konjunktiv2",
    num: 10,
    titleAr: "Konjunktiv II",
    titleDe: "Konjunktiv II (Wünsche)",
    desc: "حول التمني/الشرط إلى Konjunktiv II",
    beispielDe: "Ich habe kein Geld. (تمني) → Wenn ich doch Geld hätte!",
    beispielAr: "لا أملك مالاً. (تمني) ← لو كان عندي مال!",
    level: "B2",
  },
];

/** بنك التمارين — نوعان على الأقل لكل تحويل */
export const UMSCHREIB_EXERCISES: UmschreibExercise[] = [
  /* ── 1) Aktiv → Passiv ── */
  {
    id: "u-ap-1",
    typ: "aktiv-passiv",
    level: "B1",
    prompt: "Man baut in der Stadt viele neue Häuser.",
    promptAr: "يبني الناس في المدينة بيوتاً جديدة كثيرة.",
    acceptedAnswers: [
      "In der Stadt werden viele neue Häuser gebaut.",
      "Viele neue Häuser werden in der Stadt gebaut.",
    ],
    sampleAnswer: "In der Stadt werden viele neue Häuser gebaut.",
    explanation: "المجهول: werden (بصيغة الجمع) + Partizip II (gebaut). مع «man» يُحذف الفاعل.",
  },
  {
    id: "u-ap-2",
    typ: "aktiv-passiv",
    level: "B1",
    prompt: "Der Lehrer korrigiert die Prüfungen.",
    promptAr: "يصحح المعلم الامتحانات.",
    acceptedAnswers: ["Die Prüfungen werden vom Lehrer korrigiert."],
    sampleAnswer: "Die Prüfungen werden vom Lehrer korrigiert.",
    explanation: "الفاعل يصبح von + Dativ: vom Lehrer. الفعل: werden + korrigiert.",
  },
  /* ── 2) Passiv → Aktiv ── */
  {
    id: "u-pa-1",
    typ: "passiv-aktiv",
    level: "B1",
    prompt: "Das Auto wird von meinem Vater repariert.",
    promptAr: "تُصلح السيارة من أبي.",
    acceptedAnswers: ["Mein Vater repariert das Auto."],
    sampleAnswer: "Mein Vater repariert das Auto.",
    explanation: "von meinem Vater → الفاعل mein Vater. الفعل بالمضارع: repariert.",
  },
  {
    id: "u-pa-2",
    typ: "passiv-aktiv",
    level: "B1",
    prompt: "Die Tür wurde durch den Wind geöffnet.",
    promptAr: "فُتح الباب بفعل الريح.",
    acceptedAnswers: ["Der Wind öffnete die Tür."],
    sampleAnswer: "Der Wind öffnete die Tür.",
    explanation: "durch den Wind = الفاعل (سبب). الماضي: wurde → öffnete (Präteritum).",
  },
  /* ── 3) Satz → Nominalisierung ── */
  {
    id: "u-sn-1",
    typ: "satz-nominal",
    level: "B2",
    prompt: "Dass die Preise steigen, ist ein großes Problem.",
    promptAr: "أن الأسعار ترتفع مشكلة كبيرة.",
    acceptedAnswers: ["Der Anstieg der Preise ist ein großes Problem.", "Die Preissteigerung ist ein großes Problem."],
    sampleAnswer: "Der Anstieg der Preise ist ein großes Problem.",
    explanation: "steigen → der Anstieg (الارتفاع). الجملة الموصولة تصبح مضاف إليه: der Preise.",
  },
  {
    id: "u-sn-2",
    typ: "satz-nominal",
    level: "B2",
    prompt: "Wir fordern, dass man die Umwelt schützt.",
    promptAr: "نطالب بحماية البيئة.",
    acceptedAnswers: ["Wir fordern den Schutz der Umwelt."],
    sampleAnswer: "Wir fordern den Schutz der Umwelt.",
    explanation: "dass man schützt → der Schutz + Genitiv (der Umwelt).",
  },
  /* ── 4) Nominalisierung → Satz ── */
  {
    id: "u-ns-1",
    typ: "nominal-satz",
    level: "B2",
    prompt: "Die Verbesserung der Lage ist dringend.",
    promptAr: "تحسين الوضع أمر ملحّ.",
    acceptedAnswers: ["Dass man die Lage verbessert, ist dringend.", "Man muss die Lage verbessern.", "Die Lage muss verbessert werden."],
    sampleAnswer: "Dass man die Lage verbessert, ist dringend.",
    explanation: "die Verbesserung → verbessern. أعد الجملة: dass man ... verbessert.",
  },
  {
    id: "u-ns-2",
    typ: "nominal-satz",
    level: "B2",
    prompt: "Die Zusammenarbeit mit den Kollegen funktioniert gut.",
    promptAr: "التعاون مع الزملاء يسير جيداً.",
    acceptedAnswers: ["Dass wir mit den Kollegen zusammenarbeiten, funktioniert gut.", "Man arbeitet gut mit den Kollegen zusammen."],
    sampleAnswer: "Dass wir mit den Kollegen zusammenarbeiten, funktioniert gut.",
    explanation: "die Zusammenarbeit → zusammenarbeiten (فعل منفصل).",
  },
  /* ── 5) Relativsatz → Partizipialattribut ── */
  {
    id: "u-rp-1",
    typ: "relativ-partizip",
    level: "B2",
    prompt: "Die Frau, die neben mir sitzt, ist Ärztin.",
    promptAr: "المرأة الجالسة بجانبي طبيبة.",
    acceptedAnswers: ["Die neben mir sitzende Frau ist Ärztin.", "Die sitzende Frau neben mir ist Ärztin."],
    sampleAnswer: "Die neben mir sitzende Frau ist Ärztin.",
    explanation: "نسبية فعل مضارع (sitzt) → Partizip I (sitzend) + تنوين حسب الجنس: die sitzende Frau.",
  },
  {
    id: "u-rp-2",
    typ: "relativ-partizip",
    level: "B2",
    prompt: "Der Brief, der gestern geschrieben wurde, ist wichtig.",
    promptAr: "الرسالة التي كُتبت أمس مهمة.",
    acceptedAnswers: ["Der gestern geschriebene Brief ist wichtig."],
    sampleAnswer: "Der gestern geschriebene Brief ist wichtig.",
    explanation: "مجهول في النسبية (geschrieben wurde) → Partizip II (geschrieben) + تنوين: der geschriebene Brief.",
  },
  /* ── 6) Direkte → Indirekte Rede ── */
  {
    id: "u-ir-1",
    typ: "indirekte-rede",
    level: "B2",
    prompt: "Sie sagt: „Ich habe morgen keine Zeit.“",
    promptAr: "تقول: «لا وقت عندي غداً».",
    acceptedAnswers: ["Sie sagt, sie habe morgen keine Zeit."],
    sampleAnswer: "Sie sagt, sie habe morgen keine Zeit.",
    explanation: "Konjunktiv I: haben → habe. الضمير ich → sie.",
  },
  {
    id: "u-ir-2",
    typ: "indirekte-rede",
    level: "B2",
    prompt: "Er fragt: „Kommst du mit?“",
    promptAr: "يسأل: «هل تأتي معنا؟»",
    acceptedAnswers: ["Er fragt, ob ich mitkomme."],
    sampleAnswer: "Er fragt, ob ich mitkomme.",
    explanation: "سؤال نعم/لا → ob + الفعل في النهاية (mitkomme — Konjunktiv I).",
  },
  /* ── 7) weil → wegen ── */
  {
    id: "u-ww-1",
    typ: "weil-wegen",
    level: "B1",
    prompt: "Weil er krank war, konnte er nicht kommen.",
    promptAr: "لأنه كان مريضاً لم يستطع المجيء.",
    acceptedAnswers: ["Wegen seiner Krankheit konnte er nicht kommen.", "Wegen seiner Krankheit konnte er nicht kommen."],
    sampleAnswer: "Wegen seiner Krankheit konnte er nicht kommen.",
    explanation: "weil + جملة → wegen + Genitiv: seine Krankheit → seiner Krankheit.",
  },
  {
    id: "u-ww-2",
    typ: "weil-wegen",
    level: "B1",
    prompt: "Weil es regnet, bleiben wir zu Hause.",
    promptAr: "لأنها تمطر نبقى في البيت.",
    acceptedAnswers: ["Wegen des Regens bleiben wir zu Hause."],
    sampleAnswer: "Wegen des Regens bleiben wir zu Hause.",
    explanation: "es regnet → der Regen (اسم). wegen + Genitiv: wegen des Regens.",
  },
  /* ── 8) Passiv → sich lassen ── */
  {
    id: "u-pl-1",
    typ: "passiv-lassen",
    level: "B2",
    prompt: "Das Problem kann leicht gelöst werden.",
    promptAr: "يمكن حل المشكلة بسهولة.",
    acceptedAnswers: ["Das Problem lässt sich leicht lösen."],
    sampleAnswer: "Das Problem lässt sich leicht lösen.",
    explanation: "kann ... gelöst werden → lässt sich ... lösen (بديل المجهول — علامة B2).",
  },
  {
    id: "u-pl-2",
    typ: "passiv-lassen",
    level: "B2",
    prompt: "Der Text kann nicht übersetzt werden.",
    promptAr: "لا يمكن ترجمة النص.",
    acceptedAnswers: ["Der Text lässt sich nicht übersetzen."],
    sampleAnswer: "Der Text lässt sich nicht übersetzen.",
    explanation: "sich lassen + مصدر: Der Text lässt sich nicht übersetzen.",
  },
  /* ── 9) damit → um...zu ── */
  {
    id: "u-du-1",
    typ: "damit-umzu",
    level: "B1",
    prompt: "Ich spare Geld, damit ich reisen kann.",
    promptAr: "أدخر المال لكي أستطيع السفر.",
    acceptedAnswers: ["Ich spare Geld, um reisen zu können.", "Ich spare Geld, um zu reisen."],
    sampleAnswer: "Ich spare Geld, um reisen zu können.",
    explanation: "فاعل واحد (ich) → um...zu + مصدر. kann → zu können.",
  },
  {
    id: "u-du-2",
    typ: "damit-umzu",
    level: "B1",
    prompt: "Sie lernt fleißig, damit sie die Prüfung besteht.",
    promptAr: "تدرس بجد لكي تنجح في الامتحان.",
    acceptedAnswers: ["Sie lernt fleißig, um die Prüfung zu bestehen."],
    sampleAnswer: "Sie lernt fleißig, um die Prüfung zu bestehen.",
    explanation: "فاعل واحد (sie) → um...zu + مصدر: die Prüfung zu bestehen.",
  },
  /* ── 10) Konjunktiv II ── */
  {
    id: "u-k2-1",
    typ: "konjunktiv2",
    level: "B2",
    prompt: "Ich bin nicht reich. (تمني: لو كنت غنياً...)",
    promptAr: "لست غنياً. (تمني)",
    acceptedAnswers: ["Wenn ich doch reich wäre!", "Wäre ich doch reich!"],
    sampleAnswer: "Wenn ich doch reich wäre!",
    explanation: "التمني: Wenn + Konjunktiv II (wäre من sein) + doch/doch nur.",
  },
  {
    id: "u-k2-2",
    typ: "konjunktiv2",
    level: "B2",
    prompt: "Er hat keine Zeit. (تمني)",
    promptAr: "لا وقت لديه. (تمني)",
    acceptedAnswers: ["Wenn er doch Zeit hätte!", "Hätte er doch Zeit!"],
    sampleAnswer: "Wenn er doch Zeit hätte!",
    explanation: "haben → hätte (Konjunktiv II). Wenn + doch = لو كان فقط!",
  },
  {
    id: "u-k2-3",
    typ: "konjunktiv2",
    level: "B2",
    prompt: "Wir können nicht in Urlaub fahren. (تمني)",
    promptAr: "لا نستطيع السفر في العطلة. (تمني)",
    acceptedAnswers: ["Wenn wir doch in Urlaub fahren könnten!", "Könnten wir doch in Urlaub fahren!"],
    sampleAnswer: "Wenn wir doch in Urlaub fahren könnten!",
    explanation: "können → könnten (Konjunktiv II). صيغة التمني الكاملة.",
  },
];

/** تمارين نوع معين */
export function getUmschreibByTyp(typ: string): UmschreibExercise[] {
  return UMSCHREIB_EXERCISES.filter((e) => e.typ === typ);
}

/** كل التمارين لمستوى معين */
export function getUmschreibByLevel(level: "B1" | "B2"): UmschreibExercise[] {
  return UMSCHREIB_EXERCISES.filter((e) => e.level === level);
}

export const TOTAL_UMSCHREIB = UMSCHREIB_EXERCISES.length;

/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — تحدث B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Sprechen: 3 أجزاء · ~15 دقيقة · مستوى B1 (Vortrag · Auswahl · Planung).
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const B1_MODEL3_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — عرض قصير (Vortrag): العمل التطوعي",
    instructionAr:
      "قدّم عرضاً قصيراً (دقيقتان) عن «العمل التطوعي»: عرّف بالموضوع، اذكر تجربة أو مثالاً تعرفه، اعرض ميزة وعيباً، ثم اختم بخلاصتك. استخدم روابط العرض.",
    turns: [
      {
        partnerDe: "Bitte beginnen Sie Ihren Vortrag. Was ist Ihr Thema?",
        partnerAr: "ابدأ عرضك من فضلك. ما موضوعك؟",
        modelDe: "Mein Thema heute ist „Freiwilligenarbeit“. Zuerst erzähle ich von einem Beispiel aus meiner Nachbarschaft …",
        modelAr: "موضوعي اليوم هو «العمل التطوعي». أولاً أحكي عن مثال من حيّي …",
      },
      {
        partnerDe: "Welche Vorteile hat Freiwilligenarbeit?",
        partnerAr: "ما مزايا العمل التطوعي؟",
        modelDe: "Ein großer Vorteil ist, dass man neue Menschen kennenlernt und gleichzeitig etwas Nützliches tut. Außerdem verbessert man seine Sprachkenntnisse, wenn man im Team arbeitet.",
        modelAr: "من أكبر المزايا التعرّف على أشخاص جدد مع فعل شيء نافع. كما تُحسَّن اللغات عند العمل ضمن فريق.",
      },
      {
        partnerDe: "Und welche Nachteile sehen Sie?",
        partnerAr: "وما العيوب التي تراها؟",
        modelDe: "Andererseits kostet ein freiwilliger Einsatz Zeit, und manchmal passt er schlecht zum Arbeitsplan. Zusammenfassend finde ich jedoch, dass sich der Einsatz lohnt, wenn man feste Zeiten vereinbart.",
        modelAr: "من ناحية أخرى يستهلك العمل التطوعي وقتاً، وأحياناً لا يناسب خطة العمل. خلاصةً أرى أنه يستحق إذا اتُّفق على أوقات ثابتة.",
      },
    ],
    checklistAr: [
      "قدّمت الموضوع في جملة واحدة واضحة",
      "استخدمت روابط عرض (Zuerst · Außerdem · Andererseits · Zusammenfassend)",
      "ذكرت ميزة وعيباً وخلاصة",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — مقارنة وانتقاء من بدائل",
    instructionAr:
      "لديك ثلاثة عروض لتعلم الألمانية في الصيف (دورة مكثفة في برلين · دورة عبر الإنترنت · عمل تطوعي في مزرعة ألمانية). قارن بينها بحسب الوقت والتكلفة والفائدة، ثم اختر واحداً وبرّر اختيارك.",
    turns: [
      {
        partnerDe: "Welche Möglichkeit würden Sie wählen und warum?",
        partnerAr: "أي خيار تختار ولماذا؟",
        modelDe: "Ich würde die Intensivdose in Berlin wählen — die Intensivkurse dort dauern vier Wochen und ich lerne am schnellsten, wenn ich ständig Deutsch höre.",
        modelAr: "سأختار الدورة المكثفة في برلين — مدتها أربعة أسابيع وأتعلّم أسرع حين أسمع الألمانية باستمرار.",
      },
      {
        partnerDe: "Der Kurs in Berlin ist aber sehr teuer.",
        partnerAr: "لكن دورة برلين غالية جداً.",
        modelDe: "Das stimmt, allerdings sind Fahrkarte und Wohnheim im Preis enthalten, deshalb bleiben die Gesamtkosten überschaubar.",
        modelAr: "هذا صحيح، لكن تذكرة السفر والسكن مشمولان بالسعر، لذا تبقى التكلفة الإجمالية معقولة.",
      },
      {
        partnerDe: "Und was halten Sie vom Onlinekurs?",
        partnerAr: "وما رأيك في الدورة الإلكترونية؟",
        modelDe: "Der Onlinekurs ist günstig und flexibel, aber mir fehlt dabei der Kontakt zu anderen Lernenden. Deshalb ist er für mich nur die zweite Wahl.",
        modelAr: "الدورة الإلكترونية رخيصة ومرنة، لكنه يغيب فيها التواصل مع المتعلمين. لذلك هي الخيار الثاني لدي.",
      },
    ],
    checklistAr: [
      "قارنت البدائل الثلاثة (وقت · تكلفة · فائدة)",
      "استخدمت أسلوب المقارنة (allerdings · deshalb · teurer als)",
      "اخترت واحداً وبرّرت اختيارك بجمل واضحة",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نخطط معاً (حفل وداع في العمل)",
    instructionAr:
      "مع زميلتك تخططان لحفل وداع لزميل ينتقل إلى مدينة أخرى. اتفقا على المكان والوقت وعلى توزيع المهام والتكلفة.",
    turns: [
      {
        partnerDe: "Wo feiern wir Ayas Abschied?",
        partnerAr: "أين نحتفل بوداع آية؟",
        modelDe: "Wie wäre es, wenn wir im kleinen Saal neben dem Büro feiern? Dann müssen wir nicht weit fahren.",
        modelAr: "ما رأيك أن نحتفل في القاعة الصغيرة بجوار المكتب؟ حينها لا نحتاج السفر بعيداً.",
      },
      {
        partnerDe: "Gute Idee. Und wann passt es allen?",
        partnerAr: "فكرة جيدة. ومتى يناسب الجميع؟",
        modelDe: "Am Freitag nach der Arbeit, sagen wir ab achtzehn Uhr. Ich frage vorher per E-Mail alle Kollegen.",
        modelAr: "الجمعة بعد العمل، لنقل من الساعة 18. سأسأل كل الزملاء مسبقاً بالبريد.",
      },
      {
        partnerDe: "Wer kümmert sich um das Essen?",
        partnerAr: "من يهتم بالطعام؟",
        modelDe: "Ich bringe etwas Süßes mit, und du könntest die Getränke übernehmen. Die Kosten teilen wir durch alle.",
        modelAr: "سأحضر شيئاً حلواً، ويمكنك تولّي المشروبات. ونقسم التكلفة على الجميع.",
      },
    ],
    checklistAr: [
      "اقترحت مكاناً بعبارة مثل: Wie wäre es, wenn …?",
      "حدّدت وقتاً واضحاً",
      "وزّعت المهام على الطرفين واتفقت على تقسيم التكلفة",
    ],
  },
];

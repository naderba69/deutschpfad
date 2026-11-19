/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — تحدث B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Sprechen: 3 أجزاء · ~15 دقيقة · مستوى B1 (Vortrag · Diskussion · Planung).
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const B1_MODEL2_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — عرض قصير (Vortrag): العمل عن بُعد",
    instructionAr:
      "قدّم عرضاً قصيراً (دقيقتان) عن «العمل من المنزل»: عرّف بالموضوع، اذكر تجربتك أو رأي أسرتك، اعرض ميزة وعيباً، ثم اختم بخلاصتك. استخدم روابط العرض.",
    turns: [
      {
        partnerDe: "Bitte beginnen Sie Ihren Vortrag. Was ist Ihr Thema?",
        partnerAr: "ابدأ عرضك من فضلك. ما موضوعك؟",
        modelDe: "Mein Thema heute ist „Arbeiten von zu Hause“. Zuerst erzähle ich von meiner Erfahrung …",
        modelAr: "موضوعي اليوم هو «العمل من المنزل». أولاً أحكي عن تجربتي …",
      },
      {
        partnerDe: "Welche Vorteile sehen Sie?",
        partnerAr: "ما المزايا التي تراها؟",
        modelDe: "Ein großer Vorteil ist, dass man sich den Arbeitsweg spart. Außerdem kann man konzentrierter arbeiten, wenn zu Hause ein ruhiger Platz vorhanden ist.",
        modelAr: "من أكبر المزايا توفير وقت الطريق. كما يمكن العمل بتركيز أكبر إذا توفر مكان هادئ في البيت.",
      },
      {
        partnerDe: "Und welche Nachteile gibt es?",
        partnerAr: "وما العيوب؟",
        modelDe: "Andererseits fehlt der Kontakt zu den Kollegen, und meiner Meinung nach vermischt man leicht Arbeit und Freizeit. Zusammenfassend sollte man meiner Ansicht nach einen Mix aus Büro und Homeoffice wählen.",
        modelAr: "من ناحية أخرى يغيب التواصل مع الزملاء، وفي رأيي يختلط العمل بالوقت الحر بسهولة. خلاصةً أرى أن الأفضل مزيج بين المكتب والعمل من المنزل.",
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
      "لديك ثلاث بدائل (دورة مسائية · دورة في العطلة · تطبيق تعليمي). قارن بينها بحسب الوقت والتكلفة والفائدة، ثم اختر واحداً وبرّر اختيارك.",
    turns: [
      {
        partnerDe: "Welche Möglichkeit würden Sie wählen und warum?",
        partnerAr: "أي خيار تختار ولماذا؟",
        modelDe: "Ich würde den Abendkurs wählen, weil ich tagsüber arbeite und am Wochenende nicht lernen möchte.",
        modelAr: "سأختار الدورة المسائية، لأنني أعمل في النهار ولا أرغب في الدراسة في نهاية الأسبوع.",
      },
      {
        partnerDe: "Der Abendkurs ist aber teurer als die App.",
        partnerAr: "لكن الدورة المسائية أغلى من التطبيق.",
        modelDe: "Das stimmt, allerdings bietet der Kurs mehr Sprechpraxis und einen Lehrer, der korrigiert.",
        modelAr: "هذا صحيح، لكن الدورة توفر تدريباً أكثر على المحادثة ومعلماً يصحّح.",
      },
      {
        partnerDe: "Und was ist mit dem Kurs in den Ferien?",
        partnerAr: "وماذا عن دورة العطلة؟",
        modelDe: "Der ist sinnvoll, wenn man sehr schnell Fortschritte machen will, aber für mich wäre er zu intensiv.",
        modelAr: "هي مناسبة لمن يريد تقدماً سريعاً جداً، لكنها ستكون مكثفة جداً بالنسبة لي.",
      },
    ],
    checklistAr: [
      "قارنت البدائل في نقطتين على الأقل (الوقت · التكلفة · الفائدة)",
      "اخترت بديلاً واحداً وبرّرت بلغة السبب",
      "رددت على اعتراض الشريك بـ allerdings / das stimmt, aber",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نخطط معاً (رحلة عمل)",
    instructionAr:
      "أنت وزميلك تنظّمان رحلة عمل قصيرة لفريق من أربعة أشخاص. اتفقا على الوسيلة والمكان والبرنامج، ووزّعا المهام، وتعاملا مع مشكلة (زيادة التكلفة).",
    turns: [
      {
        partnerDe: "Wie reisen wir — mit dem Zug oder mit dem Auto?",
        partnerAr: "كيف نسافر — بالقطار أم بالسيارة؟",
        modelDe: "Ich wäre für den Zug, weil wir dann während der Fahrt arbeiten können.",
        modelAr: "أفضّل القطار، لأننا نستطيع العمل أثناء الرحلة.",
      },
      {
        partnerDe: "Die Hotels in der Innenstadt sind aber teurer geworden.",
        partnerAr: "لكن فنادق وسط المدينة صارت أغلى.",
        modelDe: "Dann nehmen wir ein Hotel am Stadtrand und fahren mit der Straßenbahn. Das spart etwa hundert Euro.",
        modelAr: "إذن نأخذ فندقاً على أطراف المدينة ونستخدم الترام. هذا يوفر نحو مئة يورو.",
      },
      {
        partnerDe: "Wer kümmert sich um die Reservierungen?",
        partnerAr: "من يتولى الحجوزات؟",
        modelDe: "Wenn du die Hotelzimmer buchst, übernehme ich die Fahrkarten und den Terminplan.",
        modelAr: "إذا حجزت أنت الغرف، أتولى أنا التذاكر وجدول المواعيد.",
      },
    ],
    checklistAr: [
      "اقترحت حلاً لمشكلة التكلفة بدل تجاهلها",
      "وزّعت المهام بجملة شرطية (Wenn du … , dann …)",
      "استخدمت صيغة مهذبة للاتفاق (Ich wäre für … · Wie wäre es, wenn …?)",
    ],
  },
];

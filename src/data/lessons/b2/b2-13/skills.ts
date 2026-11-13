/**
 * b2-13 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * وحدة «التكنولوجيا والذكاء الاصطناعي»: استماع عن النظام التقني،
 * نطق المصطلحات، وكتابة استدراكية.
 * ملاحظة: لا توجد ملفات MP3 لهذا الدرس؛ كل المقاطع تُقرأ بـTTS المتصفح.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
  items: [
    {
      id: "l1",
      title: "تقديم نظام جديد",
      audioNoteAr: "الصوت مولّد آلياً (TTS) في المتصفح، وليس تسجيلاً بشرياً؛ وقد يختلف حسب الجهاز.",
      lines: [
        { speaker: "Leiterin", de: "Ab morgen unterstützt ein KI-System unsere Beratung.", ar: "من الغد يساعد نظام ذكاء اصطناعي خدمة الاستشارة لدينا." },
        { speaker: "Sami", de: "Werden dadurch Stellen abgebaut?", ar: "هل ستُلغى وظائف بذلك؟" },
        { speaker: "Leiterin", de: "Nein, die Automatisierung übernimmt nur einfache Anfragen.", ar: "لا، الأتمتة تتولى الأسئلة البسيطة فقط." },
        { speaker: "Sami", de: "Und wer prüft die Antworten?", ar: "ومن يفحص الإجابات؟" },
        { speaker: "Leiterin", de: "Jede Antwort wird von einer Fachkraft geprüft.", ar: "كل إجابة يفحصها مختص." },
      ],
    },
    {
      id: "l2",
      title: "نقاش عن حماية البيانات",
      audioNoteAr: "الصوت مولّد آلياً (TTS) في المتصفح، وليس تسجيلاً بشرياً؛ وقد يختلف حسب الجهاز.",
      lines: [
        { speaker: "Anna", de: "Werden unsere Daten verschlüsselt gespeichert?", ar: "هل تُخزَّن بياناتنا مشفّرة؟" },
        { speaker: "Karim", de: "Ja, und sie werden nur so lange gespeichert, wie es nötig ist.", ar: "نعم، وتُخزَّن فقط بقدر ما تدعو الحاجة." },
        { speaker: "Anna", de: "Kann ich die Auswertung selbst prüfen?", ar: "هل أستطيع فحص التقييم بنفسي؟" },
        { speaker: "Karim", de: "Das ist leider nicht immer nachvollziehbar.", ar: "للأسف ليس ذلك قابلاً للتحقق دائماً." },
      ],
    },
    {
      id: "l3",
      title: "قرار ومسؤولية",
      audioNoteAr: "الصوت مولّد آلياً (TTS) في المتصفح، وليس تسجيلاً بشرياً؛ وقد يختلف حسب الجهاز.",
      lines: [
        { speaker: "Sami", de: "Das System schlägt eine Entscheidung vor.", ar: "النظام يقترح قراراً." },
        { speaker: "Leiterin", de: "Obwohl es Vorschläge macht, entscheidet immer ein Mensch.", ar: "رغم أنه يقدم مقترحات، يقرر إنسان دائماً." },
        { speaker: "Sami", de: "Das bremst die Geschwindigkeit.", ar: "هذا يكبح السرعة." },
        { speaker: "Leiterin", de: "Dennoch bleibt die Entscheidung verantwortbar.", ar: "ومع ذلك يبقى القرار قابلاً لتحمل المسؤولية." },
        { speaker: "Sami", de: "Zwar ist das langsam, aber es ist sicher.", ar: "صحيح أن هذا بطيء، لكنه آمن." },
        { speaker: "Leiterin", de: "Genau. Deshalb bleibt diese Regel bestehen.", ar: "بالضبط. لذلك تبقى هذه القاعدة قائمة." },
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      itemId: "l1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Was übernimmt die Automatisierung?",
      questionAr: "ماذا تتولى الأتمتة؟",
      options: ["nur einfache Anfragen", "alle Entscheidungen", "die Weiterbildung", "die Personalplanung"],
      correctIndex: 0,
      explanation: "قالت المديرة: Die Automatisierung übernimmt nur einfache Anfragen.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«alle Entscheidungen» تناقض ما قالته المديرة؛ فالنظام لا يقرر.",
        "«die Weiterbildung» لم تقل المديرة إن الأتمتة تتولاها.",
        "«die Personalplanung» لم تُذكر في المقطع.",
      ],
    },
    {
      id: "q2",
      itemId: "l2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wie lange werden die Daten gespeichert?",
      questionAr: "إلى متى تُخزَّن البيانات؟",
      options: ["nur so lange wie nötig", "für immer", "zehn Jahre lang", "bis zum Jahresende"],
      correctIndex: 0,
      explanation: "قال كريم: sie werden nur so lange gespeichert, wie es nötig ist.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«für immer» يعاكس مبدأ التخزين المحدود الذي ذكره كريم.",
        "«zehn Jahre lang» لم تُذكر مدة محددة في المقطع.",
        "«bis zum Jahresende» لم تُذكر نهاية سنة كحدّ للتخزين.",
      ],
    },
    {
      id: "q3",
      itemId: "l2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Was kann Anna nicht immer selbst machen?",
      questionAr: "ما الذي لا تستطيع آنا فعله بنفسها دائماً؟",
      options: ["die Auswertung prüfen", "die Daten löschen", "den Vertrag lesen", "die Kurse bezahlen"],
      correctIndex: 0,
      explanation: "قال كريم: Das ist leider nicht immer nachvollziehbar — أي فحص التقييم.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«die Daten löschen» لم يُذكر في المقطع.",
        "«den Vertrag lesen» لم يُذكر في المقطع.",
        "«die Kurse bezahlen» لم يُذكر في المقطع.",
      ],
    },
    {
      id: "q4",
      itemId: "l3",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Wer entscheidet endgültig?",
      questionAr: "من يقرر نهائياً؟",
      options: ["immer ein Mensch", "das System allein", "niemand", "die Softwarefirma"],
      correctIndex: 0,
      explanation: "قالت المديرة: Obwohl es Vorschläge macht, entscheidet immer ein Mensch.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«das System allein» يناقض القاعدة التي أكدتها المديرة.",
        "«niemand» ينفي وجود من يقرر، وهذا خلاف النصّ.",
        "«die Softwarefirma» لم تُذكر جهة قرار في المقطع.",
      ],
    },
  ],
};

export const pronunciation: Lesson["pronunciation"] = {
  id: "p1",
  title: "أصوات التقنية: -ung، -keit، وch",
  items: [
    { de: "die Digitalisierung", ar: "الرقمنة", note: "ung = أونغ: ديغي-تالي-زيرونغ" },
    { de: "die Automatisierung", ar: "الأتمتة", note: "au = آو: آو-توماتي-زيرونغ" },
    { de: "die Cybersicherheit", ar: "الأمن السيبراني", note: "y = ü: تسايبر-زيشرهايت" },
    { de: "der Datenschutz", ar: "حماية البيانات", note: "sch = ش: داتن-شوتس" },
    { de: "nachvollziehbar", ar: "قابل للتتبع", note: "ch = خ: ناخ-فولتسيبار" },
    { de: "die Abhängigkeit", ar: "التبعية", note: "ä = إه: آب-هينغيكهايت" },
  ],
  tip: "Digitalisierung = ديغي-تالي-زيرونغ — النبرة على «زير»، وung في النهاية واضحة. Cybersicherheit = تسايبر-زيشرهايت — y تُنطق ü.",
  shadowing: [
    { de: "Obwohl das System schnell ist, prüft eine Fachkraft jede Antwort.", ar: "رغم أن النظام سريع، يفحص مختص كل إجابة.", tip: "obwohl — الفعل في النهاية" },
    { de: "Zwar bietet KI Chancen, aber sie birgt auch Risiken.", ar: "صحيح أن الذكاء الاصطناعي يقدم فرصاً، لكنه ينطوي على مخاطر.", tip: "zwar ... aber" },
    { de: "Die Daten werden verschlüsselt gespeichert.", ar: "تُخزَّن البيانات مشفّرة.", tip: "verschlüsselt — Partizip II" },
    { de: "Die Ergebnisse müssen nachvollziehbar sein.", ar: "يجب أن تكون النتائج قابلة للتحقق.", tip: "nachvollziehbar — -bar" },
  ],
};

export const writing: NonNullable<Lesson["writing"]> = [
  {
    id: "w1",
    type: "transformation",
    instructionAr: "حوّل الفعل إلى اسم عملية باللاحقة المناسبة:",
    prompt: "digitalisieren → (اسم عملية)",
    acceptedAnswers: ["die Digitalisierung", "Die Digitalisierung", "die Digitalisierung."],
    sampleAnswer: "die Digitalisierung",
    explanation: "الاشتقاق التقني: فعل + -ung = اسم عملية مؤنث.",
    errorType: "grammar",
  },
  {
    id: "w2",
    type: "fill-blank",
    instructionAr: "أكمل بأداة الاستدراك المناسبة (انتبه لموضع الفعل):",
    template: "___ das System schnell ist, prüft eine Fachkraft jede Antwort. · Das System ist schnell. ___ prüft eine Fachkraft jede Antwort.",
    blanks: [
      { correct: "Obwohl", options: ["Obwohl", "Trotzdem", "Weil"] },
      { correct: "Trotzdem", options: ["Trotzdem", "Obwohl", "Damit"] },
    ],
    explanation: "obwohl تُدخل جملة ثانوية بفعل في النهاية، وtrotzdem ظرف رابط يليه الفعل مباشرة.",
    errorType: "grammar",
  },
  {
    id: "w3",
    type: "dictation",
    instructionAr: "استمع واكتب الجملة:",
    audioText: "Die Daten werden verschlüsselt gespeichert.",
    explanation: "تُخزَّن البيانات مشفّرة — verschlüsselt (Partizip II) في المجهول.",
    errorType: "spelling",
  },
];

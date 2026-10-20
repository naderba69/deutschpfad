/**
 * b1-02 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Präteritum:",
      questionDe: "Er ___ gestern spät.",
      options: ["kam", "kommt", "gekommen", "komme"],
      correctIndex: 0,
      explanation: "kommen → kam.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«kommt» مضارع، والسياق يطلب الماضي البسيط kam.",
        "«gekommen» Partizip II، ويحتاج إلى مساعد.",
        "«komme» مضارع مع ich، والسياق ماضٍ.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Plusquamperfekt:",
      questionDe: "Bevor ich kam, ___ er schon ___.",
      options: ["hatte ... gegessen", "hat ... gegessen", "hatte ... geessen", "war ... gegessen"],
      correctIndex: 0,
      explanation: "Plusquamperfekt: hatte + gegessen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«hat ... gegessen» صيغة مضارع للمساعد، والجملة تحتاج الماضي التام hatte.",
        "«war ... gegessen» تستعمل sein، ولا يناسب essen الذي يأخذ haben.",
        "«hatte ... geessen» صيغة Partizip II خاطئة؛ الصحيح gegessen.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["arbeitete", "Ich", "Jahre", "fünf", "in", "Firma", "einer", "."],
      correctSentence: "Ich arbeitete fünf Jahre in einer Firma.",
      explanation: "عملت خمس سنوات في شركة — Präteritum.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى Präteritum:",
      prompt: "Sie hat den Film gesehen. → (Präteritum)",
      acceptedAnswers: ["Sie sah den Film.", "Sie sah den Film"],
      sampleAnswer: "Sie sah den Film.",
      explanation: "Präteritum: sehen → sah. في السرد الكتابي يُستعمل Präteritum غالباً.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي الصحيح:",
      template: "Ich ___ (arbeiten) gestern. Er ___ (gehen) nach Hause. Wir ___ (haben) Zeit.",
      blanks: [
        { correct: "arbeitete", options: ["arbeitete", "arbeitet", "gearbeitet"] },
        { correct: "ging", options: ["ging", "geht", "gegangen"] },
        { correct: "hatten", options: ["hatten", "haben", "hatte"] },
      ],
      explanation: "arbeitete (منتظم)، ging (شاذ)، hatten (مساعد جمع).",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Bewerbung", ar: "طلب الوظيفة", example: "Die Bewerbung ist fertig.", exampleAr: "طلب الوظيفة جاهز.", level: "B1" },
    { id: "fc2", de: "der Lebenslauf", ar: "السيرة الذاتية", example: "Mein Lebenslauf ist aktuell.", exampleAr: "سيرتي الذاتية محدثة.", level: "B1" },
    { id: "fc3", de: "das Vorstellungsgespräch", ar: "مقابلة العمل", example: "Ich habe morgen ein Vorstellungsgespräch.", exampleAr: "عندي غداً مقابلة عمل.", level: "B1" },
    { id: "fc4", de: "die Erfahrung", ar: "الخبرة", example: "Ich habe viel Erfahrung.", exampleAr: "لدي خبرة كبيرة.", level: "B1" },
    { id: "fc5", de: "das Präteritum", ar: "الماضي البسيط", example: "arbeitete, ging, kam", exampleAr: "عمل، ذهب، جاء", level: "B1" },
    { id: "fc6", de: "das Plusquamperfekt", ar: "الماضي التام المركب", example: "hatte gearbeitet", exampleAr: "كان قد عمل", level: "B1" },
    { id: "fc7", de: "bevor / nachdem / als", ar: "قبل أن / بعد أن / عندما", example: "Bevor ich kam, ...", exampleAr: "قبل أن آتي...", level: "B1" },
    { id: "fc8", de: "der Arbeitgeber / -nehmer", ar: "صاحب العمل / الموظف", example: "Der Arbeitgeber zahlt das Gehalt.", exampleAr: "صاحب العمل يدفع الراتب.", level: "B1" },
    { id: "fc9", de: "der Ablauf", ar: "مجرى العمل", example: "Sie lernte die Abläufe im Lager.", exampleAr: "تعلّمت مجرى العمل في المستودع.", level: "B1" },
    { id: "fc10", de: "das Zeugnis", ar: "شهادة الخبرة", example: "Ihr Chef hatte ihr ein Zeugnis geschrieben.", exampleAr: "كتب لها رئيسها شهادة خبرة.", level: "B1" },
    { id: "fc11", de: "die Schicht", ar: "الوردية، الدوام", example: "Am ersten Tag begann die Schicht um sechs Uhr.", exampleAr: "في اليوم الأول بدأ الدوام في السادسة.", level: "B1" },
    { id: "fc12", de: "zuständig sein für", ar: "يكون مسؤولاً عن", example: "Sie ist für die Einweisung zuständig.", exampleAr: "هي مسؤولة عن التدريب.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b1-02-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات مقابلة عمل ألمانية بالعربية لصديق",
      sourceDe: "Bitte kommen Sie pünktlich zum Vorstellungsgespräch. Bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Das Gespräch dauert etwa 30 Minuten.",
      taskAr: "أخبر صديقك بالعربية بموعد المقابلة وكل ما يجب إحضاره ومدتها، بدقة كاملة.",
      modelAnswerAr: "«المقابلة — كن في الموعد. أحضر سيرتك الذاتية وشهاداتك. المقابلة تستغرق حوالي 30 دقيقة.»",
      keyPointsAr: ["نقلت شرط الحضور في الموعد", "ذكرت إحضار السيرة والشهادات", "نقلت المدة (30 دقيقة)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-02-1",
      scenarioAr: "مقابلة عمل لوظيفة في شركة ألمانية.",
      scenarioDe: "Ein Vorstellungsgespräch bei einer deutschen Firma.",
      strategyAr: "الاستراتيجية: وصف الخبرات بالماضي (Perfekt في الكلام، وPlusquamperfekt للحدث الأقدم) والرد بثقة مهنية.",
      rounds: [
        {
          speakerDe: "Erzählen Sie etwas über Ihre Berufserfahrung.",
          speakerAr: "حدثنا عن خبرتك المهنية.",
          options: [
            { de: "Bevor ich hierher kam, arbeitete ich in einer Bank. Ich hatte dort drei Jahre gearbeitet.", ar: "قبل أن آتي إلى هنا، عملت في بنك. كنت قد عملت هناك ثلاث سنوات.", best: true, replyDe: "Sehr interessant. Was waren Ihre Aufgaben?", replyAr: "مثير جداً للاهتمام. ما كانت مهامك؟" },
            { de: "Ich habe keine Erfahrung.", ar: "لا أملك خبرة.", best: false, replyDe: "Oh, das ist schade. Was haben Sie studiert?", replyAr: "أوه، هذا مؤسف. ماذا درست؟" },
          ],
        },
        {
          speakerDe: "Was waren Ihre Hauptaufgaben?",
          speakerAr: "ما كانت مهامك الرئيسية؟",
          options: [
            { de: "Ich habe Kunden beraten und Termine koordiniert. Außerdem habe ich Berichte geschrieben.", ar: "كنت أستشير العملاء وأنسق المواعيد. وكتبت التقارير أيضاً.", best: true, replyDe: "Das klingt genau, was wir suchen. Wann können Sie anfangen?", replyAr: "هذا يبدو بالضبط ما نبحث عنه. متى تستطيع البدء؟" },
            { de: "Ich habe nichts Wichtiges gemacht.", ar: "لم أفعل شيئاً مهماً.", best: false, replyDe: "Wirklich? Dann sollten wir über andere Qualifikationen sprechen.", replyAr: "حقاً؟ إذن علينا التحدث عن مؤهلات أخرى." },
          ],
        },
        {
          speakerDe: "Wann können Sie bei uns anfangen?",
          speakerAr: "متى تستطيع البدء معنا؟",
          options: [
            { de: "Ich könnte nächste Woche anfangen. Ich muss nur meine aktuelle Stelle kündigen.", ar: "أستطيع البدء الأسبوع القادم. يجب فقط إنهاء عقدي الحالي.", best: true, replyDe: "Sehr gut! Wir melden uns bis Freitag bei Ihnen.", replyAr: "ممتاز! سنخبرك بنتيجة القرار بحلول الجمعة." },
            { de: "Ich weiß nicht, wann ich anfangen kann.", ar: "لا أعرف متى أستطيع البدء.", best: false, replyDe: "Hmm, das ist nicht sehr professionell. Denken Sie nochmal nach.", replyAr: "همم، هذا ليس احترافياً جداً. فكر في الأمر مجدداً." },
          ],
        },
      ],
    },
  ];

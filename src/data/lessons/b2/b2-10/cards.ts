/**
 * b2-10 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التأكيد:",
      questionDe: "___ die Frist verlängert wurde. (ثبت أن)",
      options: ["Es ist erwiesen, dass", "Es könnte sein, dass", "Unter bestimmten Umständen", "In einem gewissen Maße"],
      correctIndex: 0,
      explanation: "التأكيد: es ist erwiesen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Es könnte sein, dass» تعني ربما، ولا تعني ثبت أن.",
        "«Unter bestimmten Umständen» تعني في ظروف معينة، ولا تعني ثبت أن.",
        "«In einem gewissen Maße» تعني إلى حد ما، ولا تعني ثبت أن.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التلطيف:",
      questionDe: "___ ist das möglich. (ربما)",
      options: ["Möglicherweise", "Zweifellos", "Eindeutig", "Es ist erwiesen"],
      correctIndex: 0,
      explanation: "التلطيف: möglicherweise.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Zweifellos» تعني بلا شك، ولا تعني ربما.",
        "«Eindeutig» تعني بوضوح، ولا تعني ربما.",
        "«Es ist erwiesen» تعني ثبت أن، ولا تعني ربما.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Meiner", "nach", "ist", "Ansicht", "das", "wichtig", "."],
      correctSentence: "Meiner Ansicht nach ist das wichtig.",
      explanation: "في رأيي هذا مهم — عبارة أكاديمية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Bis 2030 werde ich alle Übungen gemacht haben.",
      wrongWord: "werde ... gemacht haben",
      correctWord: "werde ... gemacht haben",
      isAlreadyCorrect: true,
      options: ["werde ... gemacht haben", "habe ... gemacht werden", "werde ... gemacht haben gehabt", "mache ... gemacht haben"],
      explanation: "Futur II: werde + PII + haben — صحيحة!",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Es ist ___, dass... (ثابت) Meiner ___ nach... (رأي) Zusammenfassend lässt sich ___... (قول)",
      blanks: [
        { correct: "erwiesen", options: ["erwiesen", "bewiesen", "gesehen"] },
        { correct: "Ansicht", options: ["Ansicht", "Meinung", "Sicht"] },
        { correct: "sagen", options: ["sagen", "sprechen", "reden"] },
      ],
      explanation: "erwiesen + Ansicht nach + lässt sich sagen.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "الاختبار الختامي — نقل الكلام (الوحدة 1):",
      questionDe: "Die Hochschule teilte mit, das Auswahlverfahren ___ im Mai.",
      options: ["beginne", "beginnt", "begänne", "begann"],
      correctIndex: 0,
      explanation:
        "وفق الصياغة المستهدفة في هذا التمرين نختار Konjunktiv I: beginnen ← es beginne. قد تختلف الصياغة في الاستعمال بحسب السياق، لكن هذا الشكل علامة شائعة على النقل؛ أما begänne فـKonjunktiv II وbegann ماضٍ.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«beginnt» مضارع Indicativ، لكنه ليس علامة النقل المستهدفة في هذا السؤال.",
        "«begänne» صيغة Konjunktiv II وقد تُستعمل في النقل عند الحاجة؛ لكن هذا السؤال يطلب Konjunktiv I صراحةً.",
        "«begann» ماضٍ، ويغيّر الإطار الزمني عن الصياغة المستهدفة.",
      ],
    },
    {
      id: "m7",
      type: "multiple-choice",
      instructionAr: "الاختبار الختامي — بدائل المجهول (الوحدة 3):",
      questionDe: "Die Zulassungsbedingungen ___ sich online nachlesen.",
      options: ["lassen", "können", "werden", "sind"],
      correctIndex: 0,
      explanation:
        "lassen + sich + مصدر = بديل المجهول بمعنى «يمكن أن يُقرأ». وkönnen وحده لا يكوّن هذا البديل، وwerden يقتضي Partizip II (werden nachgelesen)، وsein يقتضي zu + مصدر.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«können» فعل مودال يدل على الإمكان، لكنه يحتاج هنا إلى بناء مختلف، مثل: Die Bedingungen können online nachgelesen werden.",
        "«werden» تستعمل مع المبني للمجهول، ولا تناسب الجملة.",
        "«sind» تستعمل مع حالة الفعل، ولا تناسب lassen sich.",
      ],
    },
    {
      id: "m8",
      type: "fill-blank",
      instructionAr: "الاختبار الختامي — الأسلوب الاسمي وحروف الجر (الوحدتان 8 و10):",
      template:
        "___ der Verspätung des Zuges kam sie zu spät. (بسبب) — Ich warte ___ die Zulassung. (على) — ___ der Ankunft bekommen Sie Ihren Ausweis. (عند)",
      blanks: [
        { correct: "Wegen", options: ["Wegen", "Weil", "Denn"], errorType: "preposition" },
        { correct: "auf", options: ["auf", "für", "um"], errorType: "preposition" },
        { correct: "Bei", options: ["Bei", "Wenn", "Als"], errorType: "preposition" },
      ],
      explanation:
        "wegen يتبعه اسم، وغالباً Genitiv في السجل الرسمي؛ وwarten auf + Akkusativ تركيب ثابت في هذا المعنى. أما bei + Dativ فإعادة صياغة ممكنة عندما يكون المقصود «عند الوصول»، لا مقابلاً آلياً لكل استعمال لـwenn.",
      errorType: "preposition",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Studium", ar: "الدراسة الجامعية", example: "Das Studium beginnt im Oktober.", exampleAr: "تبدأ الدراسة في أكتوبر.", level: "B2" },
    { id: "fc2", de: "die Hausarbeit", ar: "البحث الجامعي", example: "Die Hausarbeit ist fertig.", exampleAr: "البحث جاهز.", level: "B2" },
    { id: "fc3", de: "das Seminar", ar: "الندوة", example: "Das Seminar ist interessant.", exampleAr: "الندوة ممتعة.", level: "B2" },
    { id: "fc4", de: "die Fachsprache", ar: "لغة التخصص", example: "Die Fachsprache ist präzise.", exampleAr: "لغة التخصص دقيقة.", level: "B2" },
    { id: "fc5", de: "es ist erwiesen, dass", ar: "ثابت أن", example: "Es ist erwiesen, dass...", exampleAr: "ثابت أن...", level: "B2" },
    { id: "fc6", de: "meiner Ansicht nach", ar: "في رأيي", example: "Meiner Ansicht nach ist das gut.", exampleAr: "في رأيي هذا جيد.", level: "B2" },
    { id: "fc7", de: "möglicherweise", ar: "ربما", example: "Möglicherweise stimmt das.", exampleAr: "ربما هذا صحيح.", level: "B2" },
    { id: "fc8", de: "zusammenfassend", ar: "خلاصةً", example: "Zusammenfassend lässt sich sagen...", exampleAr: "خلاصةً يمكن القول...", level: "B2" },
    { id: "fc9", de: "die Zulassung", ar: "القبول الجامعي", example: "Als Leila ihre Zulassung erhielt, war die wichtigste Hürde genommen.", exampleAr: "عندما تلقّت ليلى قبولها الجامعي كانت أهم عقبة قد زالت.", level: "B2" },
    { id: "fc10", de: "der Semesterbeitrag", ar: "المساهمة الفصلية", example: "Der Semesterbeitrag ist in diesem Beispiel keine allgemeine Studiengebühr.", exampleAr: "المساهمة الفصلية في هذا المثال ليست رسوماً دراسية عامة.", level: "B2" },
    { id: "fc11", de: "die Gliederung", ar: "البنية، تقسيم العرض", example: "Die Gliederung sollte im Referat sichtbar sein.", exampleAr: "ينبغي أن تكون البنية ظاهرة في العرض.", level: "B2" },
    { id: "fc12", de: "die Einschränkung", ar: "التحفظ، تحديد النطاق", example: "Eine Einschränkung schützt vor falschen Verallgemeinerungen.", exampleAr: "التحفظ يحمي من التعميمات الخاطئة.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b2-10-1",
      type: "merge-info",
      titleAr: "ادمج معلومات عن الدراسة في ألمانيا في تلخيص عربي",
      sourceDe: "Vereinfachte Übungstexte, keine wörtlichen Zitate: Text 1: Viele staatliche Hochschulen erheben für zahlreiche Studiengänge keine allgemeinen Studiengebühren; Ausnahmen und Semesterbeiträge gibt es je nach Ort, Hochschule, Programm und Status. Text 2: Zulassungsvoraussetzungen unterscheiden sich. Je nach Programm kann ein anerkannter Sprachnachweis verlangt werden; weitere Unterlagen richten sich nach Hochschule und Studiengang.",
      taskAr: "ادمج المعلومتين في تلخيص متماسك، مع إبقاء اختلاف الرسوم وشروط القبول واضحاً وعدم تعميمهما على كل الطلاب.",
      modelAnswerAr: "«لا تفرض جامعات حكومية كثيرة رسوماً دراسية عامة على برامج عديدة، لكن توجد استثناءات وتختلف المساهمة الفصلية بحسب المكان والجامعة والبرنامج ووضع الطالب. كما تختلف شروط القبول؛ فقد يُطلب إثبات لغة، وتحدد الجامعة والبرنامج الوثائق الأخرى اللازمة.»",
      keyPointsAr: ["دمجت المعلومتين معاً", "ذكرت القاعدة مع الاستثناءات والمساهمة الفصلية", "أشرت إلى اختلاف شروط القبول وإثبات اللغة بحسب البرنامج"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-10-1",
      scenarioAr: "محاكاة مناقشة بمستوى B2 عن الدراسة بالخارج.",
      scenarioDe: "Simulation einer B2-Diskussion über Auslandsstudium.",
      strategyAr: "الاستراتيجية: حجاج منظم (أطروحة، نقيض، تركيب) بأسلوب مناقشة واضح.",
      rounds: [
        {
          speakerDe: "Lohnt sich ein Studium im Ausland trotz der Herausforderungen?",
          speakerAr: "هل يستحق الدراسة في الخارج رغم التحديات؟",
          options: [
            { de: "Obwohl ein Auslandsstudium mit Sprachbarrieren und Heimweh verbunden sein kann, bietet es fachliche Erfahrungen und neue Perspektiven. Ob diese Vorteile überwiegen, hängt meiner Ansicht nach von den persönlichen Zielen und Bedingungen ab.", ar: "رغم أن الدراسة في الخارج قد تصاحبها حواجز لغوية وحنين إلى الوطن، فإنها تتيح خبرات تخصصية وآفاقاً جديدة. وفي رأيي، يتوقف رجحان هذه المزايا على الأهداف والظروف الشخصية.", best: true, replyDe: "Das ist eine abgewogene Einschätzung. Können Sie ein Beispiel oder einen Beleg nennen?", replyAr: "هذا تقدير متوازن. هل يمكنك ذكر مثال أو دليل؟" },
            { de: "Ein Auslandsstudium ist immer reine Zeitverschwendung.", ar: "الدراسة بالخارج مضيعة للوقت دائماً.", best: false, replyDe: "Das ist eine pauschale Aussage. Worauf stützen Sie Ihre Einschätzung?", replyAr: "هذا تعميم واسع. على أي أساس تستند في تقديرك؟" },
          ],
        },
        {
          speakerDe: "Wie würden Sie mit dem Heimweh umgehen?",
          speakerAr: "كيف تتعامل مع الحنين للوطن؟",
          options: [
            { de: "Ich würde regelmäßigen Kontakt mit der Familie halten und neue soziale Kreise aufbauen.", ar: "سأحافظ على تواصل منتظم مع العائلة وأبني دوائر اجتماعية جديدة.", best: true, replyDe: "Eine reife Strategie. Viel Erfolg!", replyAr: "استراتيجية ناضجة. بالتوفيق!" },
            { de: "Ich würde einfach zurückfliegen, sobald es schwer wird.", ar: "سأعود ببساطة بمجرد أن يصعب الأمر.", best: false, replyDe: "Das kann eine Option sein. Vielleicht möchten Sie zunächst Unterstützung suchen und Ihre nächsten Schritte abwägen.", replyAr: "قد يكون ذلك خياراً. وربما تود أولاً طلب الدعم وموازنة خطواتك التالية." },
          ],
        },
      ],
    },
  ];

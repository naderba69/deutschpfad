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
      questionDe: "___ ist das bewiesen. (ثابت)",
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
        "النقل الرسمي المكتوب يلزم Konjunktiv I: beginnen ← es beginne. وbeginnt إخبار ينسب الكلام للكاتب، وbegänne صيغة Konjunktiv II، وbegann ماضٍ.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«beginnt» صيغة المضارع، ولا تناسب الكلام غير المباشر.",
        "«begänne» صيغة الشرط، ولا تناسب الكلام غير المباشر.",
        "«begann» صيغة الماضي، ولا تناسب الكلام غير المباشر.",
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
        "«können» فعل مودال، ولا يعطي معنى الإمكانية هنا.",
        "«werden» تستعمل مع المبني للمجهول، ولا تناسب الجملة.",
        "«sind» تستعمل مع حالة الفعل، ولا تناسب lassen sich.",
      ],
    },
    {
      id: "m8",
      type: "fill-blank",
      instructionAr: "الاختبار الختامي — الأسلوب الاسمي وحروف الجر (الوحدتان 8 و10):",
      template:
        "___ der Verspätung des Zuges kam sie zu spät. (بسبب) — Ich bewerbe mich ___ einen Studienplatz. (على) — ___ der Ankunft bekommen Sie Ihren Ausweis. (عند)",
      blanks: [
        { correct: "Wegen", options: ["Wegen", "Weil", "Denn"], errorType: "preposition" },
        { correct: "um", options: ["um", "für", "auf"], errorType: "preposition" },
        { correct: "Bei", options: ["Bei", "Wenn", "Als"], errorType: "preposition" },
      ],
      explanation:
        "wegen حرف جر + Genitiv (وweil/denn أدوات جملة)، وsich bewerben يلزمه um + منصوب لا für، وbei + Dativ يقابل wenn في الأسلوب الاسمي.",
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
    { id: "fc10", de: "der Semesterbeitrag", ar: "المساهمة الفصلية", example: "Der Semesterbeitrag ist keine Studiengebühr.", exampleAr: "المساهمة الفصلية ليست رسوماً دراسية.", level: "B2" },
    { id: "fc11", de: "die Gliederung", ar: "البنية، تقسيم العرض", example: "Die Gliederung sollte im Referat sichtbar sein.", exampleAr: "ينبغي أن تكون البنية ظاهرة في العرض.", level: "B2" },
    { id: "fc12", de: "die Einschränkung", ar: "التحفظ، تحديد النطاق", example: "Eine Einschränkung schützt vor falschen Verallgemeinerungen.", exampleAr: "التحفظ يحمي من التعميمات الخاطئة.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b2-10-1",
      type: "merge-info",
      titleAr: "ادمج معلومات عن الدراسة في ألمانيا في تلخيص عربي",
      sourceDe: "Text 1: Die meisten staatlichen Universitäten erheben keine Studiengebühren. Text 2: Allerdings benötigen internationale Studierende einen Sprachnachweis und ausreichende finanzielle Mittel.",
      taskAr: "ادمج المعلومتين في تلخيص متماسك: مجانية الدراسة + الشروط (اللغة والتمويل).",
      modelAnswerAr: "«معظم الجامعات الحكومية لا تفرض رسوماً دراسية، لكن الطلاب الدوليين يحتاجون شهادة لغة وإثبات موارد مالية كافية.»",
      keyPointsAr: ["دمجت المعلومتين معاً", "نقلت مجانية الدراسة", "نقلت شرطي اللغة والتمويل"],
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
            { de: "Obwohl ein Auslandsstudium mit Sprachbarrieren und Heimweh verbunden ist, überwiegen meiner Meinung nach die Vorteile.", ar: "رغم أن الدراسة بالخارج ترتبط بحواجز اللغة والحنين للوطن، أرى أن المزايا تفوق.", best: true, replyDe: "Ein starkes Argument. Wie würden Sie mit dem Heimweh umgehen?", replyAr: "حجة قوية. كيف تتعامل مع الحنين للوطن؟" },
            { de: "Ein Auslandsstudium ist reine Zeitverschwendung.", ar: "الدراسة بالخارج مضيعة للوقت تماماً.", best: false, replyDe: "Das widerspricht den Erfahrungen vieler erfolgreicher Absolventen.", replyAr: "هذا يتعارض مع تجارب خريجين ناجحين كثيرين." },
          ],
        },
        {
          speakerDe: "Wie würden Sie mit dem Heimweh umgehen?",
          speakerAr: "كيف تتعامل مع الحنين للوطن؟",
          options: [
            { de: "Ich würde regelmäßigen Kontakt mit der Familie halten und neue soziale Kreise aufbauen.", ar: "سأحافظ على تواصل منتظم مع العائلة وأبني دوائر اجتماعية جديدة.", best: true, replyDe: "Eine reife Strategie. Viel Erfolg!", replyAr: "استراتيجية ناضجة. بالتوفيق!" },
            { de: "Ich würde einfach zurückfliegen, sobald es schwer wird.", ar: "سأعود ببساطة بمجرد أن يصعب الأمر.", best: false, replyDe: "Herausforderungen gehören zum Wachstum.", replyAr: "التحديات جزء من النمو." },
          ],
        },
      ],
    },
  ];

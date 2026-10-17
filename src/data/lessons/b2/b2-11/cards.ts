/**
 * b2-11 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي الصحيح:",
      questionDe: "Das ist die Kollegin, ___ Vortrag wir gehört haben.",
      options: ["deren", "dessen", "die", "der"],
      correctIndex: 0,
      explanation: "die Kollegin مؤنّثة ⇒ deren.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«dessen» مذكر أو محايد، ولا تناسب المالكة Kollegin المؤنثة.",
        "«die» لا تعبّر عن الملكية هنا.",
        "«der» لا تعبّر عن الملكية هنا.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Er ___ die Prüfung leider wiederholen ___ .",
      options: ["hat … müssen", "ist … müssen", "hat … gemusst", "hat … zu müssen"],
      correctIndex: 0,
      explanation: "مصدر مزدوج مع haben.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«ist … müssen» خطأ؛ الفعل المساعد haben وليس sein.",
        "«hat … gemusst» خطأ؛ تُستعمل صيغة müssen مع Ersatzinfinitiv.",
        "«hat … zu müssen» خطأ؛ لا يُستعمل zu مع müssen هنا.",
      ],
    },
    {
      id: "m3",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي المناسب:",
      template: "Die Nachbarn, ___ Hund immer bellt, sind umgezogen.",
      blanks: [{ correct: "deren", options: ["deren", "dessen", "die"] }],
      explanation: "die Nachbarn جمع ⇒ deren.",
      errorType: "case",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Ich habe mein Fahrrad reparieren gelassen.",
      wrongWord: "gelassen",
      correctWord: "lassen",
      options: ["lassen", "gelassen", "lässt", "ließ"],
      explanation: "مع فعل تالٍ يبقى lassen مصدراً.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Ich", "kenne", "den", "Arzt", ",", "mit", "dessen", "Hilfe", "du", "einen", "Termin", "bekommst", "."],
      correctSentence: "Ich kenne den Arzt, mit dessen Hilfe du einen Termin bekommst.",
      explanation: "حرف الجر يسبق dessen، والاسم بعدها بلا أداة تعريف.",
      errorType: "word-order",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "dessen", ar: "الذي (مِلكية، مذكّر/محايد)", example: "Der Autor, dessen Roman ich lese.", exampleAr: "الكاتب الذي أقرأ روايته.", level: "B2" },
    { id: "fc2", de: "deren", ar: "التي/الذين (مِلكية، مؤنّث/جمع)", example: "Die Frau, deren Auto dort steht.", exampleAr: "المرأة التي سيارتها هناك.", level: "B2" },
    { id: "fc3", de: "arbeiten müssen", ar: "يضطرّ إلى العمل", example: "Ich habe lange arbeiten müssen.", exampleAr: "اضطررت إلى العمل طويلاً.", level: "B2" },
    { id: "fc4", de: "reparieren lassen", ar: "يكلّف غيره بالإصلاح", example: "Ich habe das Auto reparieren lassen.", exampleAr: "أعطيت السيارة لتُصلَّح.", level: "B2" },
    { id: "fc5", de: "der Schriftsteller", ar: "الأديب", example: "Der Schriftsteller wohnt in Wien.", exampleAr: "الأديب يسكن في فيينا.", level: "B2" },
    { id: "fc6", de: "der Vortrag", ar: "المحاضرة", example: "Ihr Vortrag war spannend.", exampleAr: "كانت محاضرتها مشوّقة.", level: "B2" },
    { id: "fc7", de: "die Werkstatt", ar: "الورشة", example: "Die Werkstatt ist am Bahnhof.", exampleAr: "الورشة قرب المحطة.", level: "B2" },
    { id: "fc8", de: "verschieben", ar: "يؤجّل", example: "Wir haben den Termin verschoben.", exampleAr: "أجّلنا الموعد.", level: "B2" },
    { id: "fc9", de: "absagen", ar: "يعتذر عن/يلغي", example: "Sie hat kurzfristig abgesagt.", exampleAr: "اعتذرت في اللحظة الأخيرة.", level: "B2" },
    { id: "fc10", de: "das Stipendium", ar: "المنحة الدراسية", example: "Er bekommt ein Stipendium.", exampleAr: "يحصل على منحة دراسية.", level: "B2" },
    { id: "fc11", de: "kurzfristig", ar: "في وقت قصير/على عجل", example: "Der Termin wurde kurzfristig geändert.", exampleAr: "غُيّر الموعد على عجل.", level: "B2" },
    { id: "fc12", de: "die Zugehörigkeit", ar: "الانتماء/التبعية", example: "Die Zugehörigkeit zur Gruppe ist wichtig.", exampleAr: "الانتماء إلى المجموعة مهمّ.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b2-11-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً تدريبياً عن زيارة أديب بالعربية",
      sourceDe:
        "Der Schriftsteller, dessen Romane in zwölf Sprachen übersetzt wurden, kommt im Mai nach Tunis. Die Veranstalter haben den Termin einmal verschieben müssen, weil die Übersetzerin, deren Beitrag zentral ist, kurzfristig absagen musste.",
      taskAr: "لخّص لصديق: من الضيف، ولماذا تغيّر الموعد، ومن السبب.",
      modelAnswerAr:
        "«الأديب الذي تُرجمت رواياته إلى اثنتي عشرة لغة سيأتي إلى تونس في مايو. اضطرّ المنظّمون إلى تأجيل الموعد مرّة واحدة، لأنّ المترجمة التي مساهمتها أساسية اعتذرت في اللحظة الأخيرة.»",
      keyPointsAr: [
        "عرّفت الضيف ونقلت عدد لغات الترجمة (اثنتا عشرة)",
        "ذكرت سبب التأجيل (اعتذار المترجمة)",
        "أوضحت أهمية دور المترجمة في الفعالية",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-11-1",
      scenarioAr: "في ورشة تصليح: تشرح ما حدث لسيارتك ولماذا تأخّرت.",
      scenarioDe: "Gespräch in einer Autowerkstatt.",
      strategyAr: "الاستراتيجية: افصل بوضوح بين ما فعلته بنفسك وما كلّفت به غيرك، واربط التفاصيل بجملة نسبية بدل جمل قصيرة متقطّعة.",
      rounds: [
        {
          speakerDe: "Guten Tag. Was ist mit Ihrem Wagen passiert?",
          speakerAr: "مرحباً. ماذا حدث لسيارتك؟",
          options: [
            {
              de: "Die Bremsen machen Geräusche. Ich habe sie letztes Jahr bei einem Kollegen prüfen lassen, dessen Werkstatt jetzt geschlossen ist.",
              ar: "الفرامل تصدر أصواتاً. فحصتها العام الماضي عند زميل ورشته مغلقة الآن.",
              best: true,
              replyDe: "Verstehe. Dann schauen wir uns die Bremsen zuerst an.",
              replyAr: "فهمت. إذن سنفحص الفرامل أولاً.",
            },
            {
              de: "Ich habe die Bremsen geprüft. Der Kollege. Die Werkstatt zu.",
              ar: "فحصت الفرامل. الزميل. الورشة مغلقة.",
              best: false,
              replyDe: "Entschuldigung, haben Sie selbst geprüft oder jemand anderes?",
              replyAr: "عذراً، هل فحصتها بنفسك أم شخص آخر؟",
            },
          ],
        },
        {
          speakerDe: "Warum sind Sie erst heute gekommen?",
          speakerAr: "لماذا أتيت اليوم فقط؟",
          options: [
            {
              de: "Ich habe die ganze Woche arbeiten müssen. Erst heute habe ich einen Termin bekommen.",
              ar: "اضطررت إلى العمل طوال الأسبوع. اليوم فقط حصلت على موعد.",
              best: true,
              replyDe: "Kein Problem. Wir können den Wagen heute noch prüfen.",
              replyAr: "لا مشكلة. يمكننا فحص السيارة اليوم.",
            },
            {
              de: "Ich bin arbeiten gemusst die ganze Woche.",
              ar: "كنت مضطراً للعمل طوال الأسبوع (بصياغة خاطئة).",
              best: false,
              replyDe: "Sie meinen sicher „Ich habe arbeiten müssen“. Kein Problem.",
              replyAr: "تقصد «Ich habe arbeiten müssen». لا مشكلة.",
            },
          ],
        },
      ],
    },
  ];

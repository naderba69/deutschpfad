/**
 * a2-01 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-01.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Film ___.",
      options: [
        "habe ... gesehen",
        "bin ... gesehen",
        "habe ... geseht",
        "bin ... geseht",
      ],
      correctIndex: 0,
      explanation: "sehen فعل قوي: sehen – sah – gesehen؛ وفي معنى مشاهدة فيلم مع مفعول، Perfekt هنا: habe gesehen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Mona ___ nach Hause ___.",
      options: [
        "ist ... gegangen",
        "hat ... gegangen",
        "ist ... gegeht",
        "hat ... gegeht",
      ],
      correctIndex: 0,
      explanation: "gehen حركة → ist gegangen.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ein", "Hast", "Souvenir", "du", "gekauft", "?"],
      correctSentence: "Hast du ein Souvenir gekauft?",
      explanation: "سؤال Perfekt: الفعل المساعد أولاً + التصريف في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر الكلمة التي تصلح الخلل في الجملة المعروضة:",
      wrongSentence: "Wir haben nach Tunis gefahren.",
      wrongWord: "haben",
      correctWord: "sind",
      options: ["sind", "haben", "waren", "hatten"],
      explanation:
        "في معنى السفر إلى Tunis دون مفعول منقول، الصيغة هي: Wir sind nach Tunis gefahren. قد يختلف المساعد في استعمالات متعدية أخرى لـfahren.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف الفعل في Perfekt:",
      template: "Er ___ (sein) gestern in Berlin. Ich ___ (haben) Hunger.",
      blanks: [
        {
          correct: "ist gewesen",
          options: ["ist gewesen", "hat gehabt", "ist gehabt"],
        },
        {
          correct: "habe gehabt",
          options: ["ist gewesen", "habe gehabt", "habe gewesen"],
        },
      ],
      explanation: "sein → ist gewesen. haben → habe gehabt.",
      errorType: "grammar",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "der Urlaub",
      ar: "الإجازة",
      example: "Ich mache Urlaub.",
      exampleAr: "آخذ إجازة.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Reise",
      ar: "الرحلة",
      example: "Die Reise war schön.",
      exampleAr: "كانت الرحلة جميلة.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "fliegen",
      ar: "يطير",
      example: "Ich bin nach Berlin geflogen.",
      exampleAr: "طرت إلى برلين.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "das Flugzeug",
      ar: "الطائرة",
      example: "Das Flugzeug ist groß.",
      exampleAr: "الطائرة كبيرة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "das Perfekt",
      ar: "زمن Perfekt الألماني (صيغة ماضٍ مركبة)",
      example: "Ich habe gegessen.",
      exampleAr: "أكلت.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "das Partizip II",
      ar: "صيغة Partizip II الألمانية",
      example: "gesehen, gegessen, gekauft",
      exampleAr: "صيغ Partizip II من sehen وessen وkaufen",
      level: "A2",
    },
    {
      id: "fc7",
      de: "das Souvenir",
      ar: "التذكار",
      example: "Ich habe ein Souvenir gekauft.",
      exampleAr: "اشتريت تذكاراً.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "schwimmen",
      ar: "يسبح",
      example: "Wir haben im Meer geschwommen.",
      exampleAr: "سبحنا في البحر (نشاطاً).",
      level: "A2",
    },
    {
      id: "fc9",
      de: "buchen (hat gebucht)",
      ar: "يحجز",
      example: "Ich habe ein Zimmer gebucht.",
      exampleAr: "حجزتُ غرفة.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "abfahren (ist abgefahren)",
      ar: "ينطلق (قطار أو حافلة)",
      example: "Der Zug ist pünktlich abgefahren.",
      exampleAr: "انطلق القطار في موعده.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "ankommen (ist angekommen)",
      ar: "يصل",
      example: "Wir sind um acht angekommen.",
      exampleAr: "وصلنا في الثامنة.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "umsteigen (ist umgestiegen)",
      ar: "يبدّل وسيلة النقل",
      example: "In Dresden mussten wir umsteigen.",
      exampleAr: "في درسدن كان علينا التبديل.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "die Verspätung",
      ar: "التأخير",
      example: "Der Zug hat zwei Stunden Verspätung.",
      exampleAr: "القطار متأخّر ساعتين.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "hin und zurück",
      ar: "ذهاباً وإياباً (مقابل einfach)",
      example: "Einmal nach Hamburg, hin und zurück.",
      exampleAr: "تذكرة إلى هامبورغ ذهاباً وإياباً.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "abholen (hat abgeholt)",
      ar: "يستلم، يأخذ",
      example: "Wir haben den Rucksack abgeholt.",
      exampleAr: "استلمنا حقيبة الظهر.",
      level: "A2",
    },
    {
      id: "fc16",
      de: "vergessen (hat vergessen)",
      ar: "ينسى",
      example: "Sie hat ihren Rucksack im Zug vergessen.",
      exampleAr: "نسيت حقيبتها في القطار.",
      level: "A2",
    },
    {
      id: "fc17",
      de: "die Überraschung",
      ar: "المفاجأة",
      example: "Das war eine schöne Überraschung.",
      exampleAr: "كانت مفاجأةً جميلة.",
      level: "A2",
    },
    {
      id: "fc18",
      de: "leider",
      ar: "للأسف (كلمة تلطيف الشكوى)",
      example: "Das Zimmer ist leider nicht sauber.",
      exampleAr: "الغرفة للأسف ليست نظيفة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "die Rezeption",
      ar: "مكتب الاستقبال",
      example: "Die Frau an der Rezeption hat uns geholfen.",
      exampleAr: "ساعدتنا الموظّفة في الاستقبال.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "die Durchsage",
      ar: "إعلانٌ صوتيّ (في محطّة أو مطار)",
      example: "Am Bahnhof gab es eine Durchsage.",
      exampleAr: "كان في المحطّة إعلان.",
      level: "A2",
    },
  ];



  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديق عن عطلته بالعربية",
      sourceDe:
        "Letzten Sommer bin ich nach Deutschland geflogen. Ich habe Berlin besucht und viele Museen gesehen. Am Ende habe ich ein Souvenir gekauft.",
      taskAr:
        "انقل الرسالة بالعربية إلى صديق لا يفهم الألمانية، محافظاً على زمن الماضي (ماذا حدث).",
      modelAnswerAr:
        "«الصيف الماضي سافرت إلى ألمانيا بالطائرة. زرت برلين وشاهدت متاحف كثيرة. وفي النهاية اشتريت تذكاراً.»",
      keyPointsAr: [
        "نقلت فعل السفر بالطائرة",
        "ذكرت زيارة برلين والمتاحف",
        "ذكرت شراء التذكار",
        "حافظت على زمن الماضي",
      ],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-01-1",
      scenarioAr: "صديق ألماني يسألك عن عطلتك الأخيرة.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem letzten Urlaub.",
      strategyAr:
        "الاستراتيجية: سرد أحداث ماضية بأسلوب Perfekt والرد على أسئلة المتابعة.",
      rounds: [
        {
          speakerDe: "Was hast du im Urlaub gemacht?",
          speakerAr: "ماذا فعلت في العطلة؟",
          options: [
            {
              de: "Ich bin nach Deutschland geflogen und habe Berlin besucht.",
              ar: "طرت إلى ألمانيا وزرت برلين.",
              best: true,
              replyDe: "Toll! Was hast du dort gesehen?",
              replyAr: "رائع! ماذا شاهدت هناك؟",
            },
            {
              de: "Ich fahre morgen nach Deutschland.",
              ar: "سأسافر غداً إلى ألمانيا.",
              best: false,
              replyDe: "Ach, du sprichst von deiner nächsten Reise?",
              replyAr: "آه، تقصد رحلتك القادمة؟",
            },
          ],
        },
        {
          speakerDe: "Was hast du dort gesehen?",
          speakerAr: "ماذا شاهدت هناك؟",
          options: [
            {
              de: "Ich habe das Brandenburger Tor und viele Museen gesehen.",
              ar: "شاهدت بوابة براندنبورغ ومتاحف كثيرة.",
              best: true,
              replyDe: "Sehr schön! Hast du auch gegessen?",
              replyAr: "جميل جداً! هل أكلت أيضاً؟",
            },
            {
              de: "Ich habe gut geschlafen.",
              ar: "نمت جيداً.",
              best: false,
              replyDe: "Und was hast du dir dort angesehen?",
              replyAr: "وماذا شاهدت هناك؟",
            },
          ],
        },
        {
          speakerDe: "Hast du typisch deutsches Essen probiert?",
          speakerAr: "هل جرّبت أكلاً ألمانياً تقليدياً؟",
          options: [
            {
              de: "Ja, ich habe Currywurst und Brezeln gegessen.",
              ar: "نعم، أكلت كاري فورست وخبز برتزل.",
              best: true,
              replyDe: "Lecker! Ich liebe Currywurst auch!",
              replyAr: "لذيذ! أنا أحب كاري فورست أيضاً!",
            },
            {
              de: "Ich bin gestern nach Berlin gefahren.",
              ar: "سافرت أمس إلى برلين.",
              best: false,
              replyDe: "Und welches Essen hast du dort probiert?",
              replyAr: "وأي طعام جرّبت هناك؟",
            },
          ],
        },
      ],
    },
  ];

/**
 * a2-12 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann passende Gefühlswörter in vorgegebenen Sätzen auswählen.",
      ar: "أن أختار كلمة الشعور المناسبة (سعيد، حزين، متوتر) في جمل موجّهة؛ هذا اختيار مفردة لا تعبير حر عن مشاعري.",
      evidence: {
        exerciseIds: ["e6"],
        taskIds: ["practice:a2-12:e6"],
        labelAr: "أجب صحيحاً عن التمرين e6 (ثلاث جمل بفراغات) عندما يظهر في جلسة التدريب العشوائية؛ وهو ليس ضمن أول أربعة تمارين في مسار التدفق. فتح الدرس أو عرض الكلمات وحده ليس دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Konnektoren aber, deshalb, trotzdem und dann in vorgegebenen Sätzen richtig verwenden.",
      ar: "أن أستعمل أدوات الربط aber وdeshalb وtrotzdem وdann في جمل موجّهة، مع الترتيب الصحيح للفعل والفاعل؛ وهذا اختيار وترتيب موجّهان لا إنتاج حر.",
      evidence: {
        exerciseIds: ["e1", "e2", "w1", "w2"],
        taskIds: [
          "practice:a2-12:e1",
          "flow-practice:a2-12:e1",
          "practice:a2-12:e2",
          "flow-practice:a2-12:e2",
          "writing:a2-12:w1",
          "writing:a2-12:w2",
        ],
        labelAr: "أجب صحيحاً عن e1 وe2 (يظهر كلاهما ضمن أول أربعة تمارين في مسار التدفق، وفي جلسة التدريب العشوائية)، ثم أكمل w1 (جملة deshalb مقلوبة) وw2 (أربعة فراغات). هذه مهام اختيار موجّه وترتيب، لا كتابة حرة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann eine vorgegebene Entschuldigung mit Grund schriftlich formulieren.",
      ar: "أن أكتب اعتذاراً مهذباً مع ذكر السبب بـ deshalb عند إعطاء المعنى والعبارة المطلوبة؛ وهذا لا يقيس حواراً حراً لحل الخلاف.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a2-12:w4"],
        labelAr: "اكتب الاعتذار المحدد في w4 بالألمانية. لا يُحتسب اختيار الرد في محاكاة التفاعل أداءً مكتوباً أو شفهياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann einen höflichen Einwand mit aber in einem vorgegebenen Satz schriftlich formulieren.",
      ar: "أن أكتب اعتراضاً مهذباً بـ aber عند إعطاء المعنى والجملة المطلوبة؛ لا يُقيَّم هنا الاعتراض الشفهي ولا اقتراح حل وسط مفتوح.",
      evidence: {
        exerciseIds: ["w5"],
        taskIds: ["writing:a2-12:w5"],
        labelAr: "اكتب الاعتراض المحدد في w5 بالألمانية. الاختيار في محاكاة التفاعل لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "الربط في العربية: «لكن» و«لذلك» و«بالرغم من ذلك». الألمانية تملك أدوات مشابهة لكن بقاعدة ذهبية: بعضها لا يغير الترتيب (und, aber, oder, denn) وبعضها يقلب الفعل (deshalb, trotzdem, dann). وهي من أهم قواعد هذا المستوى قبل المراجعة الختامية في A2-13.",
    motivatingQuestionDe: "Wie geht es dir heute?",
    contextAr:
      "نتناول موضوع العلاقات: مشاعر، وآراء، وخلافات صغيرة. ومعها «أدوات الربط» التي تجعل كلامك متصلاً ومتماسكاً، ثم تأتي المراجعة الختامية في A2-13.",
    contextDe: "Ich bin müde, aber ich bin glücklich.",
    connectionToPreviousAr: "تذكرت dass وweil (الجمل الثانوية). اليوم: أدوات الربط الرئيسية — أربع عادية (und، aber، oder، denn) لا تغيّر الترتيب، وثلاث مقلوبة (deshalb، trotzdem، dann) يأتي الفعل بعدها مباشرة.",
    activateVocabulary: [
      { de: "das Gefühl", ar: "الشعور" },
      { de: "glücklich", ar: "سعيد" },
      { de: "traurig", ar: "حزين" },
      { de: "der Streit", ar: "الخلاف" },
      { de: "deshalb", ar: "لذلك" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط:",
      questionDe: "Ich lerne Deutsch, ___ ich will.",
      options: ["weil", "dass", "wenn", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-11 — الخدمات والمعاملات): اختر الضمير الانعكاسي:",
      questionDe: "Ich freue ___.",
      options: ["mich", "dich", "sich", "uns"],
      correctIndex: 0,
      explanation: "مع ich: mich (درس الخدمات).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-08 — المواصلات والتنقل): أكمل صيغة المقارنة:",
      template: "Der Zug ist ___ als das Auto. (schnell)",
      blanks: [
        { correct: "schneller", options: ["schneller", "schnell", "am schnellsten"] },
      ],
      explanation: "المقارنة: schnell → schneller + als (درس المواصلات).",
      errorType: "grammar",
    },
  ];

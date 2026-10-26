/**
 * b2-11 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Relativsätze mit „dessen“ und „deren“ bilden.",
      ar: "أن أبني جملة نسبية تعبّر عن المِلكية بـ dessen وderen.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "m1", "m3", "m5", "w1", "w3", "q4"],
        taskIds: [
          "practice:b2-11:e1", "practice:b2-11:e2", "practice:b2-11:e3", "practice:b2-11:e4",
          "practice:b2-11:e5", "practice:b2-11:e6", "practice:b2-11:e7",
          "mini-test:b2-11:m1", "mini-test:b2-11:m3", "mini-test:b2-11:m5",
          "writing:b2-11:w1", "writing:b2-11:w3", "listening:l3:q4",
        ],
        labelAr: "أختار dessen أو deren وأصحح الخطأ فيهما وأرتب جملة نسبية (e1 إلى e7 وm1 وm3 وm5 وw1 وw3)، وأفهم الإسناد بـ dessen في q4، دون كشف الحل.",
      },
    },
    {
      id: "z2",
      de: "Ich kann den doppelten Infinitiv im Perfekt verwenden.",
      ar: "أن أستعمل الصيغة المصدرية المزدوجة في الماضي التام.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e8", "e9", "e10", "e14", "m2"],
        taskIds: ["practice:b2-11:e8", "practice:b2-11:e9", "practice:b2-11:e10", "practice:b2-11:e14", "mini-test:b2-11:m2"],
        labelAr: "أختار الصيغة الصحيحة وأصحح الخطأ وأحوّل جملة إلى المصدر المزدوج (e8 وe9 وe10 وe14 وm2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann „lassen“, „sehen“ und „hören“ im Perfekt korrekt einsetzen.",
      ar: "أن أصرّف lassen وsehen وhören في الماضي بصيغة المصدر المزدوج.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12", "e13", "m4", "w2", "q3"],
        taskIds: [
          "practice:b2-11:e11", "practice:b2-11:e12", "practice:b2-11:e13",
          "mini-test:b2-11:m4", "writing:b2-11:w2", "listening:l2:q3",
        ],
        labelAr: "أكمل جملة بـ lassen بالمصدر، وأختار التركيب الذي يعني التكليف، وأرتب جملة بـ hören (e11 إلى e13 وm4 وw2 وq3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann in Gesprächen Angaben zu Besitz und Aufgaben verstehen.",
      ar: "أن أفهم في الحوار ما يخص الملكية والمهام.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
        ],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 في q1 وq2، دون كشف النص.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "كيف تقول بالألمانية «الكاتب الذي رواياته مترجمة إلى العربية»؟ العربية تربطها بضمير صغير («رواياته»)، والألمانية تحتاج كلمة واحدة دقيقة: dessen. وكيف تقول «اضطررت أن أعمل»؟ ليس gemusst بل: Ich habe arbeiten müssen. بابان صغيران يفصلان نصّ B1 عن نصّ B2.",
    contextAr:
      "في المقال الصحفي والنصّ الأدبي وتقرير العمل تتراكم المعلومات داخل الجملة الواحدة. بدل ثلاث جمل قصيرة يكتب الألماني جملة واحدة محكمة: Der Autor, dessen Romane ins Arabische übersetzt wurden, lebt in Berlin. ويظهر هذا التكثيف في نصوص مستوى B2 عادةً.",
    activateVocabulary: [
      { de: "der Autor", ar: "الكاتب" },
      { de: "der Roman", ar: "الرواية" },
      { de: "übersetzen", ar: "يترجم" },
      { de: "die Kollegin", ar: "الزميلة" },
      { de: "der Nachbar", ar: "الجار" },
      { de: "reparieren", ar: "يُصلح" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — الجمل النسبية والمضاف إليه): اختر الضمير النسبي:",
      questionDe: "Das ist der Mann, ___ ich gestern getroffen habe.",
      options: ["den", "der", "dem", "das"],
      correctIndex: 0,
      explanation: "treffen يأخذ مفعولاً به مباشراً ⇒ Akkusativ مذكّر = den.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«der» مؤنث أو جمع، ولا تناسب مفعول الفعل treffen للمذكر.",
        "«dem» حالة جر، ولا تناسب مفعول الفعل treffen.",
        "«das» محايد، ولا يناسب المذكر Mann.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B2 (درس b2-03 — الجمل النسبية مع حروف الجر): اختر التركيب الصحيح:",
      questionDe: "Der Kollege, ___ ich warte, kommt gleich.",
      options: ["auf den", "den auf", "auf der", "für den"],
      correctIndex: 0,
      explanation: "warten auf + Akkusativ، وحرف الجر يسبق الضمير النسبي: auf den.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«den auf» ترتيب خاطئ؛ حرف الجر يسبق الضمير الموصول دائماً.",
        "«auf der» مؤنث، ولا يناسب المذكر Kollege.",
        "«für den» حرف الجر خطأ؛ الفعل warten يطلب auf.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-02 — الماضي البسيط والماضي التام): أكمل الفعل المساعد:",
      template: "Ich ___ gestern lange gearbeitet.",
      blanks: [{ correct: "habe", options: ["habe", "bin", "war"] }],
      explanation: "arbeiten فعل غير حركي ⇒ Perfekt مع haben.",
      errorType: "conjugation",
    },
  ];

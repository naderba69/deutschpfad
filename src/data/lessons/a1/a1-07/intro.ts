/**
 * a1-07 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-07.ts في الدفعة 92 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Zahlen bis 1000 als Zahlwörter schreiben und einfache Preise verstehen.",
      ar: "أكتب أعداداً مختارة حتى 1000 بالحروف، وأفهم كتابة السعر وقراءته.",
      evidence: {
        exerciseIds: ["e1", "e19", "e22", "e26", "w1"],
        taskIds: [
          "practice:a1-07:e1",
          "practice:a1-07:e19",
          "practice:a1-07:e22",
          "practice:a1-07:e26",
          "writing:a1-07:w1",
        ],
        labelAr:
          "اختر كتابة 21 في e1 و365 في e19، واكتب 1000 بالحروف في e22، واقرأ 23 يورو في e26، ثم اكتب 15 يورو بالحروف في w1.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann häufige Pluralformen von Einkaufswörtern erkennen und die Verbform an den Numerus anpassen.",
      ar: "أميّز جموعاً شائعة لمفردات التسوّق، وأطابق صيغة الفعل مع المفرد أو الجمع.",
      evidence: {
        exerciseIds: ["e2", "e3", "e5", "e6", "e9", "e11", "e14"],
        taskIds: [
          "practice:a1-07:e2",
          "practice:a1-07:e3",
          "practice:a1-07:e5",
          "practice:a1-07:e6",
          "practice:a1-07:e9",
          "practice:a1-07:e11",
          "practice:a1-07:e14",
        ],
        labelAr:
          "أكمل مفردات الجمع في e2–e3 وe14، وصحّح أو اختر توافق الفعل مع المفرد والجمع في e5–e6 وe9 وe11.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Preisfragen und Bestellungen mit Mengenangaben schriftlich bilden.",
      ar: "أصوغ كتابةً سؤالاً بسيطاً عن السعر وطلب شراء يتضمن كمية.",
      evidence: {
        exerciseIds: ["e4", "e7", "e10", "e13", "e15", "e16", "e18"],
        taskIds: [
          "practice:a1-07:e4",
          "practice:a1-07:e7",
          "practice:a1-07:e10",
          "practice:a1-07:e13",
          "practice:a1-07:e15",
          "practice:a1-07:e16",
          "practice:a1-07:e18",
        ],
        labelAr:
          "رتّب سؤال السعر في e4 وe7، واكتب/أكمل عبارات الطلب والكمية في e10 وe13 وe15 وe16 وe18؛ يجب أن تكون كل النتائج صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann einem kurzen Lesetext über einen Einkauf wichtige Produkt-, Preis- und Mengenangaben entnehmen.",
      ar: "أستخرج معلومات أساسية عن المنتجات وأسعارها وكمياتها من نص قصير عن التسوّق.",
      evidence: {
        exerciseIds: ["rd1", "rd2", "rd3", "rd4"],
        taskIds: [
          "reading:read-a1-07:rd1", "reading:read-a1-07:rd2",
          "reading:read-a1-07:rd3", "reading:read-a1-07:rd4",
        ],
        labelAr:
          "أجب عن أسئلة فهم النص rd1–rd4 كلها إجابة صحيحة؛ لا يُحتسب فتح القراءة وحده.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann in kurzen Gesprächen Preise und Mengen verstehen, eine Ziffernfolge heraushören und eine einfache Rückfrage erkennen.",
      ar: "أفهم السعر والكمية في حوارات قصيرة، وألتقط تسلسلاً رقمياً وأتعرف على طلب استيضاح بسيط.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: [
          "listening:listen-a1-07-market:q1", "listening:listen-a1-07-market:q2",
          "listening:listen-a1-07-phone:q3", "listening:listen-a1-07-phone:q4",
        ],
        labelAr:
          "أجب إجابة صحيحة عن أسئلة الاستماع الأربعة q1–q4، بما فيها رقم الهاتف والسعر.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann einen kurzen Einkaufswunsch mit zwei Produkten und passenden Mengenangaben schreiben.",
      ar: "أكتب طلب شراء قصيراً يتضمن منتجين وكميتين مناسبتين.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a1-07:w4"],
        labelAr:
          "حوّل المطلوب في w4 إلى جملة شراء كاملة تتضمن 200 غرام من الجبن وقارورة ماء واحدة.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann in einem modellierten Einkaufsgespräch eine passende Bestellformulierung auswählen.",
      ar: "أختار صيغة طلب مناسبة في حوار شراء مكتوب نموذجي.",
      evidence: {
        exerciseIds: ["e20", "e29"],
        taskIds: [
          "practice:a1-07:e20",
          "practice:a1-07:e29",
        ],
        labelAr:
          "افهم الحوار المكتوب في e20 واختر صيغة الطلب المناسبة في e29. هذا يقيس الفهم والاختيار الكتابي، لا نطقك الشفهي.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann einfache Adress- und Telefonnummern nach einem vorgegebenen Muster ordnen oder notieren und passende Rückfragen dazu formulieren.",
      ar: "أرتّب أو أدوّن بيانات عنوان ورقم هاتف بسيطة وفق نموذج معطى، وأصوغ سؤال استيضاح مناسباً عنها.",
      evidence: {
        exerciseIds: ["e21", "e23", "e24", "e25", "e27", "e28"],
        taskIds: [
          "practice:a1-07:e21",
          "practice:a1-07:e23",
          "practice:a1-07:e24",
          "practice:a1-07:e25",
          "practice:a1-07:e27",
          "practice:a1-07:e28",
        ],
        labelAr:
          "اختر ترتيب العنوان في e21، وصحّح جملة الشارع في e23، واختر طلب التهجئة في e24، ورتّب سؤال الهاتف في e25، ثم أجب عن الرمز البريدي وبداية الرقم في e27–e28.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "إذا رأيت السعر 2,40 €، فكيف تسأل عنه وتطلب كيلوغراماً واحداً؟ وكيف تكتب رقماً سمعته؟",
    motivatingQuestionDe:
      "Wie fragst du nach dem Preis und bestellst ein Kilo?",
    contextAr:
      "تدخل لينا السوق ومعها قائمة قصيرة. تقرأ الأسعار، وتسأل البائع عمّا تريد شراءه. وفي جزء تطبيقي أخير، تستخدم الأرقام في حقول عنوان ورقم هاتف بسيطة.",
    contextDe:
      "Lina geht auf den Markt. Sie liest die Preise, fragt nach Produkten und bestellt eine bestimmte Menge.",
    connectionToPreviousAr:
      "في A1-06 تعلّمت الحديث عن أوقات الفراغ والهوايات؛ هنا نستخدم أعداداً وعبارات قصيرة في موقف يومي مختلف: التسوّق.",
    activateVocabulary: [
      {de: "der Apfel", ar: "التفاحة"},
      {de: "kosten", ar: "يكلّف"},
      {de: "der Preis", ar: "السعر"},
      {de: "Ich hätte gern …", ar: "أودّ …"},
      {de: "das Kilo", ar: "الكيلوغرام"},
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة A1 من الدرس a1-06 (الهوايات): اختر الفعل المناسب.",
      questionDe: "Ich ___ gern Musik.",
      options: ["höre", "sehe", "trinke"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Musik sehen» لا تستقيم دلالياً؛ والفعل المعتاد مع الموسيقى «hören»: «Ich höre gern Musik».", "لا — «trinken» يحتاج شراباً مفعولاً به؛ و«Musik» تُسمع لا تُشرب: «Ich höre gern Musik»."],
      explanation: "الفعل الطبيعي مع Musik هو hören: «Ich höre gern Musik.»",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "word-ordering",
      instructionAr: "مراجعة A1 من الدرس a1-06 (الهوايات): رتّب الكلمات في جملة خبرية.",
      tokens: ["gut", "Ich", "schwimmen", ".", "kann"],
      correctSentence: "Ich kann gut schwimmen .",
      explanation: "مع الفعل الناقص können يأتي الفعل المصرف في الموقع الثاني، ويبقى المصدر schwimmen في آخر الجملة.",
      errorType: "word-order",
    },
    {
      id: "r3",
      type: "multiple-choice",
      instructionAr: "مراجعة A1 من الدرس a1-06 (الهوايات): اختر تصريف الفعل المناسب مع ich.",
      questionDe: "Am Samstag ___ ich gern Fußball.",
      options: ["spiele", "spielst", "spielen"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «spielst» صيغة المخاطب «du spielst»؛ والفاعل هنا «ich» فيلزم «spiele».", "لا — «spielen» صيغة الجمع أو المصدر؛ ومع «ich» يلزم «Am Samstag spiele ich gern Fußball»."],
      explanation: "مع ich نقول spiele: «Am Samstag spiele ich gern Fußball.»",
      errorType: "conjugation",
    },
  ];

/**
 * a1-12 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-12.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann zentrale Wetterwörter ihren Bedeutungen zuordnen.",
      ar: "أن أصل مفردات الطقس الأساسية بمعانيها.",
      evidence: {
        exerciseIds: ["e3", "e8"],
        taskIds: [
          "practice:a1-12:e3",
          "practice:a1-12:e8",
        ],
        labelAr: "مطابقة أربعة أسماء للطقس بمعانيها، وتمييز معنى جملة قصيرة عن الثلج.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann einfache Wettersätze in den geübten Mustern vervollständigen und ordnen.",
      ar: "أن أختار أو أرتب جمل طقس قصيرة بالأنماط المتدرّب عليها.",
      evidence: {
        exerciseIds: ["e1", "e4"],
        taskIds: [
          "practice:a1-12:e1",
          "practice:a1-12:e4",
        ],
        labelAr: "اختيار es في وصف الطقس، وترتيب جملة regnen؛ ولا يُحتسب فتح التمرين دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann die geübten Präsensformen von „werden“ in kurzen Sätzen einsetzen.",
      ar: "أن أضع تصريف werden المناسب في جمل قصيرة من المضارع.",
      evidence: {
        exerciseIds: ["e2", "e18", "m2", "m5", "w2"],
        taskIds: [
          "practice:a1-12:e2",
          "practice:a1-12:e18",
          "mini-test:a1-12:m2",
          "mini-test:a1-12:m5",
          "writing:a1-12:w2",
        ],
        labelAr: "إكمال وتصحيح تصريفات werden في أمثلة محددة، ومنها ich وdu وer/es وwir وihr.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann im Wetterkontext zwischen einer Lage und einer Veränderung unterscheiden.",
      ar: "أن أميّز في وصف الطقس بين حالة قائمة وتحوّل أو توقّع باستخدام ist/wird.",
      evidence: {
        exerciseIds: ["e6", "e7", "e24"],
        taskIds: [
          "practice:a1-12:e6",
          "practice:a1-12:e7",
          "practice:a1-12:e24",
        ],
        labelAr: "اختيار ist للحالة القائمة وwird للتحوّل في e6، ثم صياغة التحوّل المقصود في e7 وe24.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann die geübten Zeitangaben in kurzen Wettersätzen passend verwenden.",
      ar: "أن أختار التعبير الزمني المتدرّب عليه في جمل قصيرة عن الطقس.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13", "e15", "e21", "e22", "e26"],
        taskIds: [
          "practice:a1-12:e11",
          "practice:a1-12:e12",
          "practice:a1-12:e13",
          "practice:a1-12:e15",
          "practice:a1-12:e21",
          "practice:a1-12:e22",
          "practice:a1-12:e26",
        ],
        labelAr: "إكمال واختيار صيغ محددة مع الفصول والأيام والساعة وmorgen وin der Nacht وseit/in.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann und, aber, oder und denn den geübten Beziehungen zuordnen und die Wortstellung in den Beispielen beachten.",
      ar: "أن أربط und وaber وoder وdenn بالعلاقة المقصودة، وأراعي ترتيب الجملة في أمثلة الدرس.",
      evidence: {
        exerciseIds: ["e19", "e20", "e23"],
        taskIds: [
          "practice:a1-12:e19",
          "practice:a1-12:e20",
          "practice:a1-12:e23",
        ],
        labelAr: "تعيين الإضافة والتضاد والاختيار والسبب في e19، ومراجعة ترتيب جملتين مستقلتين بعد aber وdenn في e20 وe23.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann ausdrücklich genannte Angaben in einem Wettertext finden.",
      ar: "أن أستخرج معلومات مصرحاً بها من تدوينة عن الطقس.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: [
          "reading:read-a1-12:rq1",
          "reading:read-a1-12:rq2",
          "reading:read-a1-12:rq3",
          "reading:read-a1-12:rq4",
          "reading:read-a1-12:rq5",
        ],
        labelAr: "الإجابة الصحيحة عن أسئلة التفاصيل الخمسة المرتبطة بفقرات النص المقروء.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann ausdrücklich genannte Angaben aus zwei geübten Wetter-Hörtexten heraushören.",
      ar: "أن أستخرج معلومات مصرحاً بها من نصّي استماع قصيرين عن الطقس قبل كشف أيٍّ منهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "الإجابة الصحيحة عن الأسئلة الثلاثة قبل كشف أيٍّ من نصّي الاستماع؛ لا يثبت ذلك إتقان الاستماع العام.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einen vorgegebenen Wetterhinweis als vollständigen Satz schreiben.",
      ar: "أن أكتب جملة ألمانية كاملة اعتماداً على معطيات طقس محددة.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-12:w1"],
        labelAr: "كتابة جملة واحدة كاملة عن معطيات الطقس الواردة في مهمة w1 المحددة.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "تعلّمنا صيغاً للطقس والحالة. كيف تقول بالألمانية إن الجو يصير بارداً؟ في هذا الدرس نتمرّن على werden بوصفه فعلاً يعبّر عن تغيّر الحالة.",
    motivatingQuestionDe: "Wie ist das Wetter heute?",
    contextAr:
      "نستخدم وصف الطقس لنتدرّب على es ist، وأفعال الطقس، وربط الحالة بالتغيّر عبر werden، مع أمثلة زمنية وروابط بسيطة.",
    contextDe: "Im Winter wird es kalt.",
    connectionToPreviousAr:
      "سبق أن تعلّمنا sein وhaben في دروس سابقة. نراجع بعض استعمالاتهما هنا إلى جانب werden؛ هذه أفعال مساعدة شائعة وليست قائمة حصرية بكل الأفعال المساعدة في الألمانية.",
    activateVocabulary: [
      { de: "das Wetter", ar: "الطقس" },
      { de: "die Sonne", ar: "الشمس" },
      { de: "der Regen", ar: "المطر" },
      { de: "kalt / warm", ar: "بارد / دافئ" },
      { de: "der Schnee", ar: "الثلج" },
    ],
  };



  /* مراجعة تراكمية مختارة (Interleaving): من الدروس a1-07 وa1-10 وa1-11 */
export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-07 — التسوق): كم الثمن؟",
      questionDe: "Was kostet das Brot?",
      questionAr: "كم ثمن الخبز؟",
      options: [
        "Zwei Euro fünfzig.",
        "Es ist zwei Euro.",
        "Ich bin zwei Euro.",
        "Das macht zwei Uhr.",
      ],
      correctIndex: 0,
      explanation: "السعر: Es kostet / Das macht + مبلغ — من درس a1-07.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "الثمن يُجاب بـ«Es kostet …» أو «Das macht …»، لا بـ«Es ist zwei Euro».",
        "«Ich bin» إسنادٌ لشخص؛ والثمن لا يُقال بهذه الصيغة.",
        "«Das macht» صحيحة لكن المكمّل وقتٌ «zwei Uhr» لا مبلغ.",
      ],
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-10 — العمل والمهن): أكمل النفي المحايد، من دون مقابلة المهنة بمهنة أخرى:",
      template: "Ich ___ Lehrer. (لست معلماً) · Ich habe ___ Auto. (لا سيارة)",
      blanks: [
        {
          correct: "bin kein",
          options: ["bin kein", "bin nicht", "habe kein", "werde kein"],
        },
        { correct: "kein", options: ["kein", "nicht", "keine", "keinen"] },
      ],
      hint:
        "في هذا المثال المحايد نقول Ich bin kein Lehrer. لا تعمم أن nicht لا يرد مع الأسماء؛ يتغير التركيز والتركيب بحسب السياق.",
      explanation:
        "في المعنى المحايد المقصود هنا نقول Ich bin kein Lehrer، وkein Auto؛ لا يعني ذلك أن nicht يمتنع مطلقاً مع الأسماء، إذ يختلف التركيز والبناء في سياقات أخرى — من درس a1-10.",
      errorType: "negation",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-11 — التنقل في المدينة، الاتجاه): استبدل التعبير المحدد بالصيغة المنقبضة المتدرّب عليها مع Bahnhof:",
      wrongSentence: "Ich gehe nach der Bahnhof.",
      wrongWord: "nach der Bahnhof",
      correctWord: "zum Bahnhof",
      options: [
        "zum Bahnhof",
        "nach der Bahnhof",
        "in der Bahnhof",
        "zu die Bahnhof",
      ],
      explanation:
        "في هذا المثال نقول zu + dem = zum Bahnhof. احفظ التركيب مع الوجهة؛ لا تستنتج أن كل مكان مغلق يفرض حرف جر واحداً.",
      errorType: "preposition",
    },
  ];

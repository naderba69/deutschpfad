/**
 * a1-10 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-10.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المؤنث الصحيح:",
      questionDe: "der Verkäufer → die ___",
      options: ["Verkäuferin", "Verkäufer", "Verkäufin", "Verkäuferine"],
      correctIndex: 0,
      explanation: "Verkäufer → Verkäuferin (إضافة -in).",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«Verkäufer» صيغة المذكّر؛ والمطلوب المؤنث بإضافة «-in».",
        "لا يُحذف حرف «e» من الجذر «Verkäufer» قبل اللاحقة ⇒ «Verkäuferin».",
        "اللاحقة «-in» لا تُمدّ بـ«e»؛ فلا وجود لكلمة «Verkäuferine».",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر النفي الصحيح:",
      questionDe: "Das ist ___ teuer.",
      questionAr: "هذا ليس غالياً.",
      options: ["nicht", "kein", "keine", "keinen"],
      correctIndex: 0,
      explanation: "في مثال الصفة Das ist nicht teuer نستخدم nicht قبل teuer.",
      errorType: "negation",
      optionExplanations: [
        undefined,
        "«kein» تنفي اسماً بنكرة؛ والمنفيّ هنا الصفة «teuer» ⇒ «nicht».",
        "«keine» لمؤنث أو جمع؛ والمنفيّ صفةٌ لا اسم.",
        "«keinen» منصوب مذكر؛ ولا اسم منصوب في «Das ist … teuer».",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["als", "Ich", "arbeite", "Verkäufer", "."],
      correctSentence: "Ich arbeite als Verkäufer.",
      explanation: "أعمل بائعاً: Ich + arbeite + als Verkäufer.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "في النفي المحايد لامتلاك سيارة، اختر التصحيح المناسب للجملة:",
      wrongSentence: "Wir haben nicht Auto.",
      wrongWord: "nicht Auto",
      correctWord: "kein Auto",
      options: ["kein Auto", "keine Auto", "keinen Auto", "nicht ein Auto"],
      explanation:
        "في النفي المحايد نقول Wir haben kein Auto. قد يظهر nicht ein في نفي تقابلي خاص مع سياق يوضح المقابلة، لكنه ليس النمط المستهدف هنا.",
      errorType: "negation",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل أداة النفي المناسبة في كل جملة:",
      template:
        "Sie arbeitet ___ am Sonntag. Er hat ___ Geschwister. Ich trinke ___ Kaffee.",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
        { correct: "keine", options: ["nicht", "kein", "keine"] },
        { correct: "keinen", options: ["nicht", "kein", "keinen"] },
      ],
      explanation:
        "في هذه الجمل: nicht مع نفي العمل يوم الأحد، keine مع الاسم الجمع Geschwister، وkeinen مع Kaffee المذكر في المفعول به.",
      errorType: "negation",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "der Beruf",
      ar: "المهنة",
      example: "Was bist du von Beruf?",
      exampleAr: "ما مهنتك؟",
      level: "A1",
    },
    {
      id: "fc2",
      de: "arbeiten",
      ar: "يعمل",
      example: "Ich arbeite in einer Firma.",
      exampleAr: "أعمل في شركة.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Lehrer / die Lehrerin",
      ar: "المعلم / المعلمة",
      example: "Meine Mutter ist Lehrerin.",
      exampleAr: "أمي معلمة.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "der Arzt / die Ärztin",
      ar: "الطبيب / الطبيبة",
      example: "Ich gehe zum Arzt.",
      exampleAr: "أذهب إلى الطبيب.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "arbeiten als",
      ar: "يعمل كـ",
      example: "Er arbeitet als Koch.",
      exampleAr: "يعمل طباخاً.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "nicht",
      ar: "أداة نفي؛ الاستعمال والموضع بحسب السياق",
      example: "Das Büro ist nicht groß.",
      exampleAr: "المكتب ليس كبيراً.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "kein / keine",
      ar: "أشكال من kein لنفي اسم بحسب الاسم والحالة",
      example: "Ich habe keine Zeit.",
      exampleAr: "ليس لدي وقت.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "die Firma",
      ar: "الشركة",
      example: "Die Firma ist groß.",
      exampleAr: "الشركة كبيرة.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "in einer Firma arbeiten",
      ar: "يعمل في مؤسسة/شركة؛ يتحدد المقصود بالسياق",
      example: "Ich arbeite in einer Firma.",
      exampleAr: "أعمل في شركة (وقد يقصد بالمؤسسة أو بالموقع بحسب السياق).",
      level: "A1",
    },
    {
      id: "fc10",
      de: "bei einem Arzt arbeiten",
      ar: "يعمل عند طبيب",
      example: "Er arbeitet bei einem Arzt.",
      exampleAr: "يعمل عند طبيب.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "unser / unsere",
      ar: "لنا (أداة ملكية)",
      example: "Unsere Firma ist klein.",
      exampleAr: "شركتنا صغيرة.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "euer / eure",
      ar: "لكم (ملكية غير رسمية للجمع)",
      example: "Ist das eure Abteilung?",
      exampleAr: "هل هذا قسمكم؟ والصيغة الشائعة هنا eure، وتوجد euere أيضاً.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "Ihr / Ihre (formell)",
      ar: "للمخاطبة الرسمية مفرداً أو جمعاً (بحرف كبير)",
      example: "Herr Meier, ist das Ihr Büro?",
      exampleAr: "سيّد ماير، هل هذا مكتب حضرتك؟",
      level: "A1",
    },
    {
      id: "fc14",
      de: "das Praktikum",
      ar: "تدريب عمليّ",
      example: "Ich mache ein Praktikum bei einer Firma.",
      exampleAr: "أؤدي تدريباً عملياً لدى شركة.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "die Abteilung",
      ar: "القسم (في شركة)",
      example: "Unsere Abteilung ist klein.",
      exampleAr: "قسمنا صغير.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "der Chef / die Chefin",
      ar: "المدير / المديرة",
      example: "Meine Chefin ist sehr nett.",
      exampleAr: "مديرتي لطيفة جداً.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "arbeitslos",
      ar: "عاطل عن العمل",
      example: "Mein Bruder ist zurzeit arbeitslos.",
      exampleAr: "أخي عاطل عن العمل حالياً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "selbstständig",
      ar: "يعمل لحسابه الخاصّ",
      example: "Unsere Kollegin ist selbstständig.",
      exampleAr: "زميلتنا تعمل لحسابها الخاصّ.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "Was sind Sie von Beruf?",
      ar: "ما مهنتك؟ (صيغة رسمية للمفرد أو الجمع)",
      example: "Was sind Sie von Beruf? — Ich bin Ingenieur.",
      exampleAr: "ما مهنتك؟ — أنا مهندس.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "der Ingenieur",
      ar: "المهندس",
      example: "Er ist Ingenieur von Beruf.",
      exampleAr: "هو مهندس بالمهنة.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "das Büro",
      ar: "المكتب",
      example: "Mein Büro ist im dritten Stock.",
      exampleAr: "مكتبي في الطابق الثالث.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "der Computer",
      ar: "الحاسوب",
      example: "Auf dem Tisch steht ein Computer.",
      exampleAr: "على الطاولة حاسوب.",
      level: "A1",
    },
    {
      id: "fc23",
      de: "seit",
      ar: "منذ",
      example: "Ich wohne seit zwei Jahren hier.",
      exampleAr: "أسكن هنا منذ سنتين.",
      level: "A1",
    },
    {
      id: "fc24",
      de: "der Moment",
      ar: "لحظة / برهة",
      example: "Einen Moment, bitte!",
      exampleAr: "لحظة من فضلك!",
      level: "A1",
    },
  ];



  /* ═══ أنشطة الوساطة والتفاعل؛ لا تمثل اعتماداً أو تقييماً معيارياً ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-10-1",
      type: "summarize-de-to-ar",
      titleAr: "انقل أهم معلومات رسالة مهنية بالعربية",
      sourceDe:
        "Sehr geehrte Frau Müller, wir treffen uns am Freitag um 14 Uhr im Büro. Bitte bringen Sie den Vertrag mit.",
      taskAr: "انقل الرسالة بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.",
      modelAnswerAr:
        "«موعدنا يوم الجمعة الساعة 14:00 (الثانية بعد الظهر) في المكتب. يُرجى إحضار العقد.»",
      keyPointsAr: [
        "نقلت الموعد بدقة: الجمعة الساعة 14:00 (الثانية بعد الظهر)",
        "ذكرت المكان (المكتب)",
        "نقلت طلب إحضار العقد",
      ],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-10-1",
      scenarioAr:
        "تستقبل مكالمة من السيد شميت في وقت تكون فيه السيدة بن علي موجودة في المكتب ومتاحة لتحويل المكالمة.",
      scenarioDe:
        "Frau Ben Ali ist im Büro und kann den Anruf annehmen. Herr Schmidt ruft an.",
      strategyAr:
        "أجب باختصار، وحوّل المكالمة إلى الشخص المطلوب، ثم أعد اليوم والوقت لتأكيدهما. هذه محاكاة اختيارية؛ اختيار ردّ من الواجهة لا يثبت أداءً شفهياً.",
      rounds: [
        {
          speakerDe:
            "Hallo, hier ist Herr Schmidt. Kann ich Frau Ben Ali sprechen?",
          speakerAr:
            "مرحباً، أنا السيد شميت. هل يمكنني التحدث مع السيدة بن علي؟",
          options: [
            {
              de: "Einen Moment, bitte. Ich stelle Sie zu Frau Ben Ali durch.",
              ar: "لحظة من فضلك. سأحوّلك إلى السيدة بن علي.",
              best: true,
              replyDe: "Danke schön!",
              replyAr: "شكراً جزيلاً!",
            },
            {
              de: "Frau Ben Ali ist heute nicht im Büro. Kann ich eine Nachricht aufnehmen?",
              ar: "السيدة بن علي ليست في المكتب اليوم. هل يمكنني تدوين رسالة؟",
              best: false,
              replyDe: "Aber ich sehe sie gerade im Büro. Können Sie mich bitte verbinden?",
              replyAr: "لكنني أراها الآن في المكتب. هل يمكنك تحويلي إليها من فضلك؟",
            },
          ],
        },
        {
          speakerDe:
            "Können Sie ihr sagen, dass unser Termin am Freitag um 14 Uhr stattfindet?",
          speakerAr:
            "هل يمكنك إخبارها بأن موعدنا سيكون يوم الجمعة الساعة 14:00؟",
          options: [
            {
              de: "Ja, natürlich. Ich notiere: Freitag um 14 Uhr.",
              ar: "نعم، بالتأكيد. سأدوّن: الجمعة الساعة 14:00.",
              best: true,
              replyDe: "Genau. Vielen Dank!",
              replyAr: "صحيح. شكراً جزيلاً!",
            },
            {
              de: "Ja, natürlich. Ich notiere: Donnerstag um 14 Uhr.",
              ar: "نعم، بالتأكيد. سأدوّن: الخميس الساعة 14:00.",
              best: false,
              replyDe: "Nein, am Freitag um 14 Uhr. Vielen Dank!",
              replyAr: "لا، يوم الجمعة الساعة 14:00. شكراً جزيلاً!",
            },
          ],
        },
      ],
    },
  ];

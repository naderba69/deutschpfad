/**
 * b1-02 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "مقابلة عمل تدريبية (مثال خيالي)",
        lines: [
          { speaker: "Interviewer", de: "Erzählen Sie mir von Ihrer Erfahrung.", ar: "حدثني عن خبرتك." },
          { speaker: "Sami", de: "Ich arbeitete drei Jahre als Programmierer in Tunis.", ar: "عملت ثلاث سنوات مبرمجاً في تونس." },
          { speaker: "Interviewer", de: "Was machten Sie genau?", ar: "ماذا كنت تفعل بالضبط؟" },
          { speaker: "Sami", de: "Ich entwickelte Webseiten und half dem Team.", ar: "كنت أطور مواقع ويب وأساعد الفريق." },
          { speaker: "Interviewer", de: "Warum wollen Sie nach Deutschland?", ar: "لماذا تريد الذهاب إلى ألمانيا؟" },
          { speaker: "Sami", de: "Bevor ich mich bewarb, hatte ich viel recherchiert. Deutschland bietet gute Möglichkeiten.", ar: "قبل أن أتقدم، كنت قد بحثت كثيراً. ألمانيا تقدم فرصاً جيدة." },
        ],
      },
      {
        id: "l2",
        title: "سرد قصة عمل (مثال تدريبي خيالي)",
        lines: [
          { speaker: "Anna", de: "Als ich anfing, hatte ich keine Erfahrung.", ar: "عندما بدأت، لم يكن لدي خبرة." },
          { speaker: "Karim", de: "Und was machtest du zuerst?", ar: "وماذا فعلت أولاً؟" },
          { speaker: "Anna", de: "Ich lernte von meinen Kollegen und machte Fehler.", ar: "تعلمت من زملائي وارتكبت أخطاء." },
          { speaker: "Karim", de: "Ich glaube, jeder beginnt so.", ar: "أعتقد أن الجميع يبدأ هكذا." },
          { speaker: "Anna", de: "Ja, aber nachdem ich ein Jahr gearbeitet hatte, wurde ich sicherer.", ar: "نعم، لكن بعد أن عملت سنة، أصبحت أكثر ثقة." },
        ],
      },
      {
        id: "l3",
        title: "أول يوم عمل في الفندق",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Nina", de: "Wie war dein erster Arbeitstag im Hotel?", ar: "كيف كان أول يوم عمل لك في الفندق؟", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-1.mp3" },
          { speaker: "Karim", de: "Am Anfang war ich nervös, aber mein Team war freundlich.", ar: "كنت متوتراً في البداية، لكن فريقي كان ودوداً.", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-2.mp3" },
          { speaker: "Nina", de: "Was hattest du gemacht, bevor du dort anfingst?", ar: "ماذا كنت قد فعلت قبل أن تبدأ هناك؟", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-3.mp3" },
          { speaker: "Karim", de: "Ich hatte einen Deutschkurs besucht und ein Praktikum gemacht.", ar: "كنت قد حضرت دورة ألمانية وأتممت تدريباً عملياً.", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-4.mp3" },
          { speaker: "Nina", de: "Und was lernst du jetzt bei der Arbeit?", ar: "وماذا تتعلم الآن في العمل؟", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-5.mp3" },
          { speaker: "Karim", de: "Ich lerne, mit Gästen zu sprechen und Probleme ruhig zu lösen.", ar: "أتعلم التحدث مع الضيوف وحل المشكلات بهدوء.", audioSrc: "/audio/lessons/b1-02/ls-b1-02-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was arbeitete Sami in Tunis?",
        questionAr: "ماذا عمل سامي في تونس؟",
        options: ["Programmierer", "Lehrer", "Verkäufer im Supermarkt", "Ingenieur für Maschinen"],
        correctIndex: 0,
        explanation: "قال: Ich arbeitete drei Jahre als Programmierer.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Lehrer» معلّم، وهو عمل لم يذكره النص عن سامي.",
          "«Verkäufer» بائع، وليس عمل سامي في الحوار.",
          "«Ingenieur» مهندس، وهو ليس العمل الذي ذكره النص.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was hatte Sami vor der Bewerbung gemacht?",
        questionAr: "ماذا كان سامي قد فعل قبل التقديم؟",
        options: ["viel recherchiert", "Deutsch gelernt", "ein Buch geschrieben", "ein Praktikum gemacht"],
        correctIndex: 0,
        explanation: "قال: Bevor ich mich bewarb, hatte ich viel recherchiert.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Deutsch gelernt» ليس ما قام به سامي قبل التقديم في النص.",
          "«ein Buch geschrieben» لم يرد في النص عن سامي.",
          "«ein Praktikum gemacht» ليس ما ورد قبل التقديم في النص.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was passierte nach einem Jahr Arbeit?",
        questionAr: "ماذا حدث بعد سنة عمل؟",
        options: ["Sie wurde sicherer", "Sie hörte auf", "Sie wechselte die Firma", "Sie ging in Rente"],
        correctIndex: 0,
        explanation: "قالت آنا: Nachdem ich ein Jahr gearbeitet hatte, wurde ich sicherer.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Sie hörte auf» تعني توقفت، وهو ما لم يحدث بعد سنة العمل.",
          "«Sie wechselte die Firma» لم يذكره النص.",
          "«Sie ging in Rente» تعني تقاعدت، ولم يحدث ذلك في النص.",
        ],
      },
      {
        id: "q4", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع إلى الحوار الثالث:",
        questionDe: "Wie war Karims erster Arbeitstag?", questionAr: "كيف كان أول يوم عمل لكريم؟",
        options: ["Zunächst nervös, aber das Team war freundlich", "Von Anfang an gelangweilt, weil die Aufgaben einfach waren", "Sehr ärgerlich, denn niemand half ihm bei der Arbeit", "Unsicher, weil er das Hotel nicht finden konnte"], correctIndex: 0,
        explanation: "يقول كريم إنه كان متوتراً في البداية، لكن فريقه كان ودوداً.", errorType: "comprehension",
      },
      {
        id: "q5", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was hatte Karim vor seinem Arbeitsbeginn gemacht?", questionAr: "ماذا كان كريم قد فعل قبل بدء العمل؟",
        options: ["Einen Deutschkurs besucht und ein Praktikum gemacht", "Ein Studium abgeschlossen und im Büro gearbeitet", "Eine Prüfung bestanden und Urlaub genommen", "Ein Hotel gesucht und eine Bewerbung geschrieben"], correctIndex: 0,
        explanation: "يذكر كريم أنه حضر دورة ألمانية وأتم تدريباً عملياً قبل بدء العمل.", errorType: "comprehension",
      },
      {
        id: "q6", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was lernt Karim jetzt bei der Arbeit?", questionAr: "ماذا يتعلم كريم الآن في العمل؟",
        options: ["Mit Gästen sprechen und Probleme ruhig lösen", "Briefe schreiben und neue Zimmer reservieren", "Deutsch lernen und Prüfungen vorbereiten", "Das Hotel leiten und das Team organisieren"], correctIndex: 0,
        explanation: "يقول كريم إنه يتعلم التحدث مع الضيوف وحل المشكلات بهدوء.", errorType: "comprehension",
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات العمل: ei، au، وw",
    items: [
      { de: "die Erfahrung", ar: "الخبرة", note: "a طويلة، وh صامتة بعدها: إرفااروڠ" },
      { de: "der Arbeitgeber", ar: "صاحب العمل", note: "ei = آي: أربايت-غيبر" },
      { de: "das Vorstellungsgespräch", ar: "مقابلة العمل", note: "كلمة طويلة: فورش-تيلونغس-غِشپريش" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "au = آو: ليبِنْس-لاوف" },
      { de: "die Bewerbung", ar: "طلب الوظيفة", note: "w = ڤ؛ b في بداية المقطع تبقى ب: بِڤِربونغ" },
      { de: "der Kollege", ar: "الزميل", note: "o مفتوحة + g: كولِغِه" },
    ],
    tip: "Vorstellungsgespräch = فورش-تيلونغس-غِشپريش — أطول كلمة اليوم. قسّمها: Vorstellung (تقديم) + Gespräch (حديث).",
    shadowing: [
      { de: "Ich arbeitete drei Jahre in Tunis.", ar: "عملت ثلاث سنوات في تونس.", tip: "arbeitete = أربايتِتِه (Präteritum)" },
      { de: "Bevor ich studierte, hatte ich gearbeitet.", ar: "قبل أن أدرس كنت قد عملت.", tip: "hatte ich gearbeitet — التركيب" },
      { de: "Ich entwickelte Webseiten.", ar: "كنت أطور مواقع ويب.", tip: "entwickelte = إنت-ڤيكِلْتِه" },
      { de: "Er kam um acht und begann.", ar: "جاء في الثامنة وبدأ.", tip: "kam / begann (شواذ)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن خبرتك الماضية:",
      prompt: "اكتب: «عملت ثلاث سنوات في شركة» (Präteritum)",
      acceptedAnswers: ["Ich arbeitete drei Jahre in einer Firma", "Ich arbeitete drei Jahre in einer Firma."],
      sampleAnswer: "Ich arbeitete drei Jahre in einer Firma.",
      explanation: "المنتظم: arbeitete (Präteritum).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Präteritum:",
      template: "Ich ___ (arbeiten) gestern. Er ___ (gehen) nach Hause. Sie ___ (kommen) um acht.",
      blanks: [
        { correct: "arbeitete", options: ["arbeitete", "arbeitet", "gearbeitet"] },
        { correct: "ging", options: ["ging", "geht", "gegangen"] },
        { correct: "kam", options: ["kam", "kommt", "gekommen"] },
      ],
      explanation: "منتظم: arbeitete. شواذ: ging, kam.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل الجملة إلى الماضي البسيط (Präteritum):",
      instructionDe: "Schreibe im Präteritum:",
      prompt: "Heute arbeite ich im Büro. → Gestern ...",
      acceptedAnswers: ["Gestern arbeitete ich im Büro.", "Gestern arbeitete ich im Büro"],
      sampleAnswer: "Gestern arbeitete ich im Büro.",
      explanation: "في الكتابة والسيرة الذاتية: Präteritum (arbeitete). في المحادثة: Perfekt (habe gearbeitet).",
      errorType: "grammar",
    },
  ];

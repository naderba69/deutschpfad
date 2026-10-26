/**
 * b1-01 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "اختيار التخصص",
        audioNoteAr: "الصوت يُنشأ عبر TTS في المتصفح، وليس تسجيلاً بشرياً؛ وقد يختلف بحسب الجهاز والصوت المختار. والحوار محاكاة تدريبية خيالية.",
        lines: [
          { speaker: "Beraterin", de: "Welches Fach möchtest du studieren?", ar: "أي تخصص تريد أن تدرس؟" },
          { speaker: "Sami", de: "Ich interessiere mich für Informatik. Den Beruf des Programmierers finde ich spannend.", ar: "أهتم بالمعلوماتية. أجد مهنة المبرمج شيقة." },
          { speaker: "Beraterin", de: "Eine Universität, an der du Informatik studieren kannst, liegt zum Beispiel in München.", ar: "إحدى الجامعات التي يمكنك دراسة المعلوماتية فيها تقع مثلاً في ميونخ." },
          { speaker: "Sami", de: "Und die Kosten des Studiums?", ar: "وتكاليف الدراسة؟" },
          { speaker: "Beraterin", de: "Bei vielen staatlichen Universitäten gibt es keine allgemeinen Studiengebühren. Studierende zahlen aber einen Semesterbeitrag. Je nach Bundesland, Hochschule, Studiengang und persönlicher Situation können weitere Gebühren anfallen.", ar: "في كثير من الجامعات الحكومية لا توجد رسوم دراسية عامة، لكن الطلاب يدفعون مساهمة فصلية. وقد تُفرض رسوم إضافية بحسب الولاية والجامعة والتخصص والوضع الشخصي." },
          { speaker: "Sami", de: "Das klingt interessant. Ein Student, der Informatik studiert, kann sich auf verschiedene Stellen bewerben.", ar: "يبدو ذلك مثيراً للاهتمام. يستطيع الطالب الذي يدرس المعلوماتية التقدم إلى وظائف مختلفة." },
        ],
      },
      {
        id: "l2",
        title: "مقارنة الأنظمة",
        audioNoteAr: "الصوت يُنشأ عبر TTS في المتصفح، وليس تسجيلاً بشرياً؛ وقد يختلف بحسب الجهاز والصوت المختار. والحوار محاكاة تدريبية خيالية.",
        lines: [
          { speaker: "Lehrer", de: "Wie ist das Schulsystem in Tunesien?", ar: "كيف النظام المدرسي في تونس؟" },
          { speaker: "Mona", de: "Die Grundschule dauert sechs Jahre, die Mittelschule drei Jahre. Danach können die Schüler eine vierjährige Sekundarschule besuchen, die mit dem Baccalauréat endet. Damit können sie sich um einen Studienplatz bewerben; je nach Fach gelten weitere Bedingungen.", ar: "تستغرق المرحلة الابتدائية ست سنوات، والمتوسطة ثلاثاً. وبعدها يمكن للتلاميذ الالتحاق بمرحلة ثانوية مدتها أربع سنوات وتنتهي بالبكالوريا. وبها يمكنهم التقدم إلى مقعد جامعي، مع شروط إضافية تختلف حسب التخصص." },
          { speaker: "Lehrer", de: "Was bedeutet das Baccalauréat für ein Studium?", ar: "ماذا تعني البكالوريا بالنسبة إلى الدراسة الجامعية؟" },
          { speaker: "Mona", de: "Damit kann man sich um einen Studienplatz bewerben. Je nach Fach gelten weitere Bedingungen.", ar: "تتيح البكالوريا التقدم إلى مقعد جامعي، وتختلف الشروط الإضافية بحسب التخصص." },
        ],
      },
      {
        id: "l3",
        title: "خطة ياسمين لبداية B1",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Lena", de: "Die A2-Prüfung ist vorbei. Wie fühlst du dich?", ar: "انتهى امتحان A2. كيف تشعرين؟", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-1.mp3" },
          { speaker: "Yasmin", de: "Erleichtert, aber ich weiß noch nicht, ob ich bestanden habe.", ar: "أشعر بالارتياح، لكنني لا أعرف بعد إن كنت قد اجتزت الامتحان.", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-2.mp3" },
          { speaker: "Lena", de: "Was möchtest du in B1 verbessern?", ar: "ما الذي تريدين تحسينه في B1؟", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-3.mp3" },
          { speaker: "Yasmin", de: "Ich will jede Woche einen kurzen Text schreiben.", ar: "أريد أن أكتب نصاً قصيراً كل أسبوع.", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-4.mp3" },
          { speaker: "Lena", de: "Mit wem übst du dann das Sprechen?", ar: "مع من ستتدربين على التحدث حينها؟", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-5.mp3" },
          { speaker: "Yasmin", de: "Mit meiner Nachbarin. So mache ich kleine Schritte.", ar: "مع جارتي. هكذا أحرز خطوات صغيرة.", audioSrc: "/audio/lessons/b1-01/ls-b1-01-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami studieren?",
        questionAr: "ماذا يريد سامي أن يدرس؟",
        options: ["Informatik", "Medizin", "Germanistik", "Jura"],
        correctIndex: 0,
        explanation: "قال سامي: Ich interessiere mich für Informatik.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Medizin» هو الطب، وليس ما ذكره سامي.",
          "«Germanistik» دراسة الألمانية وآدابها، وليس ما ذكره سامي.",
          "«Jura» هو القانون، وليس ما ذكره سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo liegt die Universität, die die Beraterin nennt?",
        questionAr: "أين تقع الجامعة التي تذكرها المستشارة؟",
        options: ["in München", "in Berlin", "in Hamburg", "in Köln"],
        correctIndex: 0,
        explanation: "ذكرت المستشارة جامعة في ميونخ يمكن دراسة المعلوماتية فيها.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«in Berlin» ليست المدينة المذكورة للجامعة في الحوار.",
          "«in Hamburg» ليست المدينة المذكورة للجامعة في الحوار.",
          "«in Köln» ليست المدينة المذكورة للجامعة في الحوار.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was machen die Schüler am Ende der Sekundarschule?",
        questionAr: "ماذا يفعل التلاميذ في نهاية المرحلة الثانوية؟",
        options: ["Sie machen das Baccalauréat", "Sie beginnen die Grundschule", "Sie machen eine Sprachprüfung in Deutsch", "Sie erhalten automatisch einen Studienplatz"],
        correctIndex: 0,
        explanation: "يذكر الحوار أن المرحلة الثانوية تنتهي بامتحان البكالوريا، وبعدها يمكن التقدم لمقعد جامعي؛ ولا يحصل الطالب عليه تلقائياً.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لا — يوضح الحوار: «Danach können die Schüler eine vierjährige Sekundarschule besuchen»؛ فالابتدائية تسبقها.",
          "لا — يذكر الحوار أن الثانوية «mit dem Baccalauréat endet»؛ لا امتحان لغة ألمانية.",
          "لا — تقول منى: «Damit können sie sich um einen Studienplatz bewerben»؛ أي يمكنهم التقدّم، لا الحصول تلقائياً على مقعد.",
        ],
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sagt die Beraterin über die Kosten des Studiums?",
        questionAr: "ماذا تقول المستشارة عن تكاليف الدراسة؟",
        options: [
          "Viele staatliche Unis ohne Studiengebühren, aber mit Semesterbeitrag.",
          "An allen Universitäten sind die Kosten immer sehr hoch.",
          "Das Studium ist überall ganz ohne jeden Beitrag.",
          "Studiengebühren gibt es ausschließlich in Berlin.",
        ],
        correctIndex: 0,
        explanation: "في كثير من الجامعات الحكومية لا توجد رسوم دراسية عامة، لكن يوجد غالباً Semesterbeitrag، وقد تختلف الرسوم الإضافية حسب الولاية والجامعة والبرنامج والحالة.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لا — توضح المستشارة: «Bei vielen staatlichen Universitäten gibt es keine allgemeinen Studiengebühren»؛ فلا تقول إن التكاليف دائماً مرتفعة.",
          "لا — بعد ذلك مباشرةً تقول المستشارة: «Studierende zahlen aber einen Semesterbeitrag»؛ لذلك ليست الدراسة بلا أي مساهمة.",
          "لا — تذكر المستشارة أن الرسوم قد تختلف: «Je nach Bundesland, Hochschule, Studiengang und persönlicher Situation»؛ ولا تحصرها في Berlin.",
        ],
      },
      {
        id: "q5", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع إلى الحوار الثالث:",
        questionDe: "Wie fühlt sich Yasmin, und was weiß sie noch nicht?", questionAr: "كيف تشعر ياسمين، وما الذي لا تعرفه بعد؟",
        options: ["Sie ist erleichtert, kennt das Ergebnis aber noch nicht.", "Sie ist sehr enttäuscht, weil sie die Prüfung nicht bestanden hat.", "Sie ist krank und wartet auf den nächsten Prüfungstermin.", "Sie ist nervös, denn sie hat die Prüfung noch nicht gemacht."], correctIndex: 0,
        explanation: "تقول ياسمين إنها مرتاحة، لكنها لا تعرف بعد إن كانت قد اجتازت الامتحان.", errorType: "comprehension",
      },
      {
        id: "q6", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was möchte Yasmin jede Woche machen?", questionAr: "ماذا تريد ياسمين أن تفعل كل أسبوع؟",
        options: ["Einen kurzen Text schreiben", "Zwei Stunden lang Deutsch lernen", "Fünf Sätze zum Dativ schreiben", "Eine Geschichte für Lena schreiben"], correctIndex: 0,
        explanation: "تريد ياسمين كتابة نص قصير كل أسبوع كخطة للمرحلة التالية.", errorType: "comprehension",
      },
      {
        id: "q7", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Mit wem möchte Yasmin das Sprechen üben?", questionAr: "مع من تريد ياسمين أن تتدرب على التحدث؟",
        options: ["Mit ihrer Nachbarin", "Mit ihrer Lehrerin", "Allein zu Hause", "Mit Lena am Telefon"], correctIndex: 0,
        explanation: "تقول ياسمين إنها ستتدرب على التحدث مع جارتها.", errorType: "comprehension",
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات B1: ch، وst",
    items: [
      { de: "das Studium", ar: "الدراسة الجامعية", note: "St في بداية الكلمة = شت: شتوديوم" },
      { de: "der Lehrer", ar: "المعلم", note: "e الأولى طويلة (ليه)، و-er في النهاية خفيفة: ليهر" },
      { de: "der Unterricht", ar: "الحصة", note: "ch بعد i = ناعمة: أونترريخت" },
      { de: "die Universität", ar: "الجامعة", note: "-tät تُنطق «تيت» (ä طويلة): أونيڤيرزيتيت" },
      { de: "das Fach", ar: "التخصص", note: "ch بعد a = خ: فاخ" },
      { de: "der Student", ar: "الطالب", note: "st في البداية = شت: شتودِنت" },
    ],
    tip: "الكتابة بالحروف العربية تقريبية ولا تطابق أصوات الألمانية بدقة. Universität كلمة طويلة — قسّمها للتدريب إلى مقاطع، وكرّر كل مقطع ثم ادمجها.",
    shadowing: [
      { de: "Das Buch des Lehrers ist neu.", ar: "كتاب المعلّم جديد.", tip: "des Lehrers = دِس ليرِرْس (Genitiv)" },
      { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك معلّمي.", tip: "der dort steht — الفعل في النهاية" },
      { de: "Ich studiere Informatik.", ar: "أدرس المعلوماتية.", tip: "Informatik = إنفور-ماتيك" },
      { de: "Wegen des Regens bleiben wir.", ar: "بسبب المطر نبقى.", tip: "wegen = ڤيغن (w = ڤ)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة Genitiv:",
      prompt: "اكتب: «كتاب المعلّم» بالألمانية (بجملة كاملة)",
      acceptedAnswers: ["Das ist das Buch des Lehrers", "Das Buch des Lehrers ist neu"],
      sampleAnswer: "Das ist das Buch des Lehrers.",
      explanation: "الملكية: des Lehrers (مذكر + s).",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بأداة Genitiv الصحيحة:",
      template: "das Buch ___ Lehrers (مذكر) · das Haus ___ Mutter (مؤنث) · die Meinung ___ Studenten (جمع)",
      blanks: [
        { correct: "des", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "den"] },
      ],
      explanation: "مذكر/محايد → des. مؤنث وجمع → der.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wegen des Regens bleiben wir zu Hause.",
      explanation: "بسبب المطر نبقى في البيت — wegen + Genitiv.",
      errorType: "spelling",
    },
  ];

/**
 * b2-01 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "مؤتمر علمي",
        lines: [
          { speaker: "Professorin", de: "Die Forschung zeigt, dass das Experiment erfolgreich war.", ar: "يبين البحث أن التجربة كانت ناجحة." },
          { speaker: "Reporter", de: "Die Professorin sagt, die Ergebnisse seien sehr wichtig.", ar: "تقول الأستاذة إن النتائج مهمة جداً." },
          { speaker: "Reporter", de: "Sie behauptet, die Entdeckung könne die Medizin verändern.", ar: "تزعم أن الاكتشاف قد يغير الطب." },
          { speaker: "Professorin", de: "Wir haben noch viel zu tun, aber die Zukunft sei vielversprechend.", ar: "لا يزال أمامنا الكثير، لكن المستقبل واعد." },
        ],
      },
      {
        id: "l2",
        title: "حوار بعد المؤتمر",
        lines: [
          { speaker: "Sami", de: "Was hat die Professorin gesagt?", ar: "ماذا قالت الأستاذة؟" },
          { speaker: "Anna", de: "Sie sagte, die Ergebnisse seien positiv.", ar: "قالت إن النتائج إيجابية." },
          { speaker: "Sami", de: "Und über die Zukunft?", ar: "وعن المستقبل؟" },
          { speaker: "Anna", de: "Sie meinte, die Forschung werde weitergehen.", ar: "رأت أن البحث سيستمر." },
        ],
      },
      {
        id: "l3",
        title: "نتائج دراسة طبية أولية",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Reporter", de: "Wie viele Personen haben an der Studie teilgenommen?", ar: "كم شخصاً شارك في الدراسة؟", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-1.mp3" },
          { speaker: "Professorin", de: "Die Studie habe zweihundert Personen einbezogen, erklärt das Forschungsteam.", ar: "أوضح فريق البحث أن الدراسة شملت مئتي شخص.", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-2.mp3" },
          { speaker: "Reporter", de: "Und was zeigen die ersten Ergebnisse?", ar: "وماذا تظهر النتائج الأولية؟", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-3.mp3" },
          { speaker: "Professorin", de: "Die Behandlung könne die Beschwerden deutlich verringern.", ar: "قد يقلل العلاج الأعراض بوضوح.", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-4.mp3" },
          { speaker: "Reporter", de: "Ist die Methode schon vollständig geprüft?", ar: "هل اختُبرت الطريقة بالكامل بالفعل؟", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-5.mp3" },
          { speaker: "Professorin", de: "Nein, weitere Untersuchungen seien nötig, bevor man eine Empfehlung geben könne.", ar: "لا، قالت إن هناك حاجة إلى مزيد من الأبحاث قبل تقديم توصية.", audioSrc: "/audio/lessons/b2-01/ls-b2-01-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sagt die Professorin über die Ergebnisse?",
        questionAr: "ماذا تقول الأستاذة عن النتائج؟",
        options: ["Sie seien sehr wichtig", "Sie seien schlecht", "Sie seien unbekannt", "Sie seien alt"],
        correctIndex: 0,
        explanation: "قال المراسل: Die Professorin sagt, die Ergebnisse seien sehr wichtig.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Sie seien schlecht» تعني أنها سيئة، وهذا عكس ما قالته الأستاذة.",
          "«Sie seien unbekannt» لم تقلها الأستاذة في الحوار.",
          "«Sie seien alt» لم تقلها الأستاذة؛ قالت إنها مهمة.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann die Entdeckung verändern?",
        questionAr: "ماذا يمكن أن يغير الاكتشاف؟",
        options: ["die Medizin", "die Wirtschaft", "die Politik", "die Schule"],
        correctIndex: 0,
        explanation: "قال المراسل: Die Entdeckung könne die Medizin verändern.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«die Wirtschaft» لم تذكرها الأستاذة كمجال للتغيير.",
          "«die Politik» لم تذكرها الأستاذة كمجال للتغيير.",
          "«die Schule» لم تذكرها الأستاذة كمجال للتغيير.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was meinte die Professorin über die Zukunft?",
        questionAr: "ماذا رأت الأستاذة عن المستقبل؟",
        options: ["Die Forschung werde weitergehen", "Die Forschung sei fertig", "Die Forschung sei teuer", "Die Forschung sei langweilig"],
        correctIndex: 0,
        explanation: "قالت آنا: Sie meinte, die Forschung werde weitergehen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Die Forschung sei fertig» تعني أن البحث انتهى، وهذا عكس ما قالته الأستاذة.",
          "«Die Forschung sei teuer» لم تقلها الأستاذة.",
          "«Die Forschung sei langweilig» لم تقلها الأستاذة.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Personen hat die Studie einbezogen?",
        questionAr: "كم شخصاً شملت الدراسة؟",
        options: ["Die Studie habe zweihundert Personen einbezogen", "Die Studie habe hundertzwanzig Personen einbezogen", "Die Studie habe dreihundert Personen einbezogen", "Die Studie habe fünfhundert Personen einbezogen"],
        correctIndex: 0,
        explanation: "قالت الأستاذة: Die Studie habe zweihundert Personen einbezogen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يرد في التصريح أن عدد المشاركين مئة وعشرون؛ العدد المذكور مئتان.",
          "لم يرد أن الدراسة شملت ثلاثمئة شخص؛ العدد المسموع مئتان.",
          "لم يرد أن الدراسة شملت خمسمئة شخص؛ العدد المسموع مئتان.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات العلوم: tion، sch، وck",
    items: [
      { de: "die Wissenschaft", ar: "العلم", note: "sch = ش: ڤيسن-شافَت" },
      { de: "die Forschung", ar: "البحث", note: "or: فورشونغ" },
      { de: "das Experiment", ar: "التجربة", note: "x = كس: إكسبيريمِنت" },
      { de: "die Entdeckung", ar: "الاكتشاف", note: "ck = ك بعد الحركة القصيرة: إنت-دِكونغ" },
      { de: "die Revolution", ar: "الثورة", note: "tion = تسيون: رِڤولوتسيون" },
      { de: "das Genie", ar: "العبقري", note: "g = ج: جيني" },
    ],
    tip: "النهاية -tion تُنطق «تسيون» دائماً — انتبه في الكلمات العلمية: Revolution, Information, Nation.",
    shadowing: [
      { de: "Er sagt, er habe Zeit.", ar: "يقول إنه وقت عنده.", tip: "habe — Konjunktiv I" },
      { de: "Sie sagt, sie sei müde.", ar: "تقول إنها متعبة.", tip: "sei — Konjunktiv I" },
      { de: "Er behauptet, er habe den Beweis.", ar: "يزعم أنه وجد البرهان.", tip: "behauptet = بِهاوبتِت (au=آو)" },
      { de: "Man sagt, die Forschung werde wichtiger.", ar: "يقال إن البحث سيصبح أهم.", tip: "werde — Konjunktiv I" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "انقل كلاماً غير مباشر:",
      prompt: "«Ich habe Zeit» → (هو يقول إنه وقت عنده)",
      acceptedAnswers: ["Er sagt, er habe Zeit", "Er sagt, er habe Zeit."],
      sampleAnswer: "Er sagt, er habe Zeit.",
      explanation: "النقل: habe (Konjunktiv I).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Konjunktiv I:",
      template: "Er sagt, er ___ (haben) Zeit. Sie sagt, sie ___ (sein) müde. Er behauptet, er ___ (können) helfen.",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
        { correct: "sei", options: ["sei", "ist", "wäre"] },
        { correct: "könne", options: ["könne", "kann", "könnte"] },
      ],
      explanation: "Konjunktiv I: habe، sei، könne.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Der Forscher sagt, die Entdeckung sei revolutionär.",
      explanation: "يقول الباحث إن الاكتشاف ثوري — Konjunktiv I (sei).",
      errorType: "spelling",
    },
  ];

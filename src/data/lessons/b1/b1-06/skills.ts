/**
 * b1-06 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "زيارة المتحف",
        lines: [
          { speaker: "Guide", de: "Willkommen im berühmten Museum! Hier sehen Sie eine große Sammlung.", ar: "مرحباً في المتحف الشهير! هنا ترون مجموعة كبيرة." },
          { speaker: "Sami", de: "Das Gemälde da ist wunderschön! Wer hat es gemalt?", ar: "تلك اللوحة رائعة! من رسمها؟" },
          { speaker: "Guide", de: "Das ist ein berühmter Maler aus dem 19. Jahrhundert.", ar: "هذا رسام مشهور من القرن التاسع عشر." },
          { speaker: "Sami", de: "Ich finde, das ist ein interessantes Werk.", ar: "أجد أنها عمل مثير." },
          { speaker: "Guide", de: "Ja, es zeigt eine kleine Stadt am Fluss.", ar: "نعم، تعرض مدينة صغيرة على النهر." },
        ],
      },
      {
        id: "l2",
        title: "مقارنة ثقافات",
        lines: [
          { speaker: "Mona", de: "In Tunesien ist die Musik sehr wichtig.", ar: "في تونس الموسيقى مهمة جداً." },
          { speaker: "Anna", de: "In Deutschland auch! Wir haben viele gute Orchester.", ar: "في ألمانيا أيضاً! لدينا فرق أوركسترا جيدة كثيرة." },
          { speaker: "Mona", de: "Und das Essen? In Tunesien gibt es ein leckeres Gericht: Couscous.", ar: "والطعام؟ في تونس يوجد طبق لذيذ: الكسكس." },
          { speaker: "Anna", de: "Ich kenne das! Ein interessantes Gericht.", ar: "أعرفه! طبق مثير." },
        ],
      },
      {
        id: "l3",
        title: "الوطن والهجرة",
        lines: [
          { speaker: "Mona", de: "Ich vermisse meine Heimat manchmal sehr.", ar: "أشتاق إلى وطني أحياناً كثيراً." },
          { speaker: "Karim", de: "Ich auch. Am Anfang war der Kulturschock schwer.", ar: "وأنا أيضاً. في البداية كانت صدمة الثقافة صعبة." },
          { speaker: "Mona", de: "Was war am schwierigsten für dich?", ar: "ما كان الأصعب بالنسبة لك؟" },
          { speaker: "Karim", de: "Die Sprache und die Bürokratie. Aber jetzt ist Deutschland mein zweites Zuhause.", ar: "اللغة والبيروقراطية. لكن الآن ألمانيا هي بيتي الثاني." },
          { speaker: "Mona", de: "Meine Familie ist in Tunesien, aber ich habe hier neue Freunde gefunden.", ar: "عائلتي في تونس، لكنني وجدت هنا أصدقاء جدداً." },
          { speaker: "Karim", de: "Genau. Integration braucht Zeit und Offenheit.", ar: "بالضبط. الاندماج يحتاج وقتاً وانفتاحاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was zeigt das Gemälde?",
        questionAr: "ماذا تعرض اللوحة؟",
        options: ["eine kleine Stadt am Fluss", "einen großen Berg", "ein berühmtes Schloss", "einen Wald"],
        correctIndex: 0,
        explanation: "قال الدليل: Es zeigt eine kleine Stadt am Fluss.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«einen großen Berg» لم تذكر الدليل جبلاً في وصف اللوحة.",
          "«ein berühmtes Schloss» لم يُذكر قصر في وصف اللوحة.",
          "«einen Wald» لم يُذكر غابة في وصف اللوحة.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist das tunesische Gericht?",
        questionAr: "ما الطبق التونسي؟",
        options: ["Couscous", "Schnitzel", "Käsespätzle", "Currywurst"],
        correctIndex: 0,
        explanation: "قالت منى: Couscous — طبق تونسي لذيذ.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Schnitzel» طبق ألماني، وليس تونسياً.",
          "«Käsespätzle» طبق ألماني من المعكرونة والجبن، وليس تونسياً.",
          "«Currywurst» وجبة ألمانية، وليست الطبق التونسي.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was haben die Deutschen?",
        questionAr: "ماذا لدى الألمان؟",
        options: ["gute Orchester", "gute Strände", "gute Wüsten", "gute Berge"],
        correctIndex: 0,
        explanation: "قالت آنا: Wir haben viele gute Orchester.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«gute Strände» لم تذكرها آنا في الحوار.",
          "«gute Wüsten» لم تذكرها آنا في الحوار.",
          "«gute Berge» لم تذكرها آنا في الحوار.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was war am Anfang schwer für Karim?",
        questionAr: "ماذا كان صعباً في البداية على كريم؟",
        options: ["der Kulturschock", "das Essen im Land", "das Wetter im Herbst", "die Musik der Stadt"],
        correctIndex: 0,
        explanation: "قال كريم: Am Anfang war der Kulturschock schwer — صدمة الثقافة كانت صعبة.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Essen» لم يذكره كريم كأصعب شيء في البداية.",
          "«das Wetter» لم يذكره كريم كأصعب شيء في البداية.",
          "«die Musik» لم يذكرها كريم كأصعب شيء في البداية.",
        ],
      },
      {
        id: "q5",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was vermisst Mona manchmal?",
        questionAr: "ماذا تشتاق إليه منى أحياناً؟",
        options: ["ihre Heimat", "das Wetter", "die Arbeit", "das Essen"],
        correctIndex: 0,
        explanation: "قالت منى: Ich vermisse meine Heimat manchmal sehr.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Wetter» لم تذكره منى بالاشتياق في الحوار.",
          "«die Arbeit» لم تذكرها منى بالاشتياق في الحوار.",
          "«das Essen» لم تذكره منى بالاشتياق في الحوار.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الثقافة: ä، ö، وsch",
    items: [
      { de: "das Gemälde", ar: "اللوحة", note: "ä = «ـيـ» ممدودة (مثل e في bed): غِيمِلْدِه" },
      { de: "der Maler", ar: "الرسام", note: "a مفتوح: مالِر" },
      { de: "das Museum", ar: "المتحف", note: "e ممدودة ثم u قصيرة: مُوزِيوم" },
      { de: "wunderschön", ar: "رائع الجمال", note: "sch + ö: ڤوندر-شون" },
      { de: "die Kultur", ar: "الثقافة", note: "u + r: كولتور" },
      { de: "das Jahrhundert", ar: "القرن", note: "J = ي: يارهوندرت" },
    ],
    tip: "wunderschön = ڤوندر-شون — W ألمانية ڤ + sch + ö. ثلاث صعوبات في كلمة واحدة!",
    shadowing: [
      { de: "Das ist ein schönes Bild.", ar: "هذه صورة جميلة.", tip: "ein schönes Bild — نهاية الصفة" },
      { de: "Wir besuchen das berühmte Museum.", ar: "نزور المتحف الشهير.", tip: "das berühmte Museum — -e بعد das" },
      { de: "Er ist ein berühmter Maler.", ar: "هو رسام مشهور.", tip: "ein berühmter Maler — -er بعد ein" },
      { de: "Mit einem guten Freund.", ar: "مع صديق جيد.", tip: "einem guten — -en في Dativ" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف شيئاً بنعت:",
      prompt: "اكتب: «هذه لوحة جميلة» (ein + صفة + اسم)",
      acceptedAnswers: ["Das ist ein schönes Bild", "Das ist ein schönes Bild.", "Das ist ein schönes Gemälde", "Das ist ein schönes Gemälde."],
      sampleAnswer: "Das ist ein schönes Bild.",
      explanation: "das Bild محايد، ومع ein تأخذ الصفة النهاية القوية ‑es: ein schönes Bild. والأمر نفسه في das Gemälde ← ein schönes Gemälde (وليس «eine schöne»، فالكلمة ليست مؤنثة).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بنهاية الصفة:",
      template: "ein ___ (gut) Mann · eine ___ (gut) Frau · ein ___ (gut) Kind · mit einem ___ (gut) Freund",
      blanks: [
        { correct: "guter", options: ["guter", "gute", "gutes"] },
        { correct: "gute", options: ["guter", "gute", "gutes"] },
        { correct: "gutes", options: ["guter", "gute", "gutes"] },
        { correct: "guten", options: ["guten", "guter", "gutes"] },
      ],
      explanation: "الرفع مع ein: مذكر -er، مؤنث -e، محايد -es. النصب المذكر والجر: -en.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir besuchen das berühmte Museum.",
      explanation: "نزور المتحف الشهير — das + berühmte (-e).",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل جملة المقارنة بالنهاية الصحيحة:",
      template: "In Tunesien gibt es ein ___ (lecker) Gericht: Couscous. In Deutschland gibt es viele ___ (gut) Orchester.",
      blanks: [
        { correct: "leckeres", options: ["leckeres", "leckere", "leckerer"] },
        { correct: "gute", options: ["gute", "guten", "guter"] },
      ],
      explanation: "ein + محايد نصب: -es (ein leckeres Gericht). viele + جمع بلا أداة: -e (viele gute Orchester).",
      errorType: "grammar",
    },
  ];

/**
 * b1-11 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "ls-b1-11-1",
        title: "رسالة هاتفية من مكتب العمل",
        lines: [
          { speaker: "الموظف", de: "Guten Tag, Frau Ben Ali. Hier ist das Arbeitsamt.", ar: "طاب يومك سيدة بن علي. هنا مكتب العمل." },
          { speaker: "الموظف", de: "Ihr Termin für das Beratungsgespräch wurde auf Donnerstag, den 15., um 14 Uhr verschoben.", ar: "موعد جلسة الاستشارة أُجل إلى الخميس 15 الساعة 14." },
          { speaker: "الموظف", de: "Bitte bringen Sie Ihren Lebenslauf und die Zeugnisse mit. Wir sehen uns dann!", ar: "يرجى إحضار سيرتك الذاتية والشهادات. نراك حينها!" },
        ],
      },
    ],
    questions: [
      {
        type: "multiple-choice",
        id: "lsq-b1-11-1",
        instructionAr: "استمع واختر",
        itemId: "ls-b1-11-1",
        questionDe: "Wann ist der neue Termin?",
        questionAr: "متى الموعد الجديد؟",
        options: ["Am Donnerstag, den 15., um 14 Uhr", "Am Freitag schon um 9 Uhr früh", "Am Montag um dieselbe Zeit"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "الموظف قال: Donnerstag, den 15., um 14 Uhr.",
        optionExplanations: [
          undefined,
          "«Am Freitag um 9 Uhr» ليس الموعد الجديد؛ الموعد أُجل إلى الخميس الساعة 14.",
          "«Am Montag» لا تذكر الموعد الجديد في الرسالة.",
        ],
      },
      {
        type: "multiple-choice",
        id: "lsq-b1-11-2",
        instructionAr: "استمع واختر",
        itemId: "ls-b1-11-1",
        questionDe: "Was soll Frau Ben Ali mitbringen?",
        questionAr: "ماذا يجب أن تحضر السيدة بن علي؟",
        options: ["Den Lebenslauf und die Zeugnisse", "Ein kleines Geschenk für den Chef", "Nichts, er braucht gar keine Unterlagen"],
        correctIndex: 0,
        errorType: "vocabulary",
        explanation: "bringen Sie Ihren Lebenslauf und die Zeugnisse mit.",
        optionExplanations: [
          undefined,
          "«Ein Geschenk» لم تطلب الرسالة إحضار هدية.",
          "«Nichts» تنفي ما طُلب، والرسالة تطلب إحضار أوراق.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "pron-b1-11",
    title: "نبرة الجملة في النقاش — التنغيم التصاعدي والتنازلي",
    items: [
      { de: "Meiner Meinung nach ist das richtig.", ar: "في رأيي هذا صحيح.", note: "نبرة مستقرة على المعلومة." },
      { de: "Findest du das wirklich?", ar: "هل تجد ذلك حقاً؟", note: "نبرة تصاعدية في نهاية السؤال." },
      { de: "Einerseits stimmt das, andererseits …", ar: "من ناحية هذا صحيح، ومن ناحية أخرى…", note: "توقف ونبرة معلّقة بعد andererseits." },
      { de: "Ich bin überzeugt, dass …", ar: "أنا مقتنع بأن…", note: "تركيز على überzeugt." },
      { de: "Das sehe ich anders.", ar: "أرى ذلك بشكل مختلف.", note: "نبرة حازمة تنازلية." },
      { de: "Darf ich etwas dazu sagen?", ar: "هل أستطيع أن أضيف شيئاً؟", note: "نبرة مهذبة تصاعدية." },
    ],
    tip: "في النقاش: السؤال يرتفع في النهاية، والجملة الحازمة تهبط. التدرج الصوتي يعطي انطباع الطلاقة أكثر من الكلمات نفسها.",
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "wr-b1-11-1",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى المبني للمجهول (Passiv)",
      prompt: "Man baut das neue Krankenhaus in unserer Stadt.",
      acceptedAnswers: ["Das neue Krankenhaus wird in unserer Stadt gebaut."],
      sampleAnswer: "Das neue Krankenhaus wird in unserer Stadt gebaut.",
      hint: "Passiv = werden + Partizip II. المفعول يصبح فاعلاً.",
      explanation: "Man baut → wird gebaut. «Man» يحذف في المجهول.",
      errorType: "grammar",
    },
    {
      id: "wr-b1-11-2",
      type: "transformation",
      instructionAr: "حوّل إلى جملة ثانوية مع nachdem",
      prompt: "Ich habe gegessen. Dann bin ich spazieren gegangen.",
      acceptedAnswers: ["Nachdem ich gegessen hatte, bin ich spazieren gegangen."],
      sampleAnswer: "Nachdem ich gegessen hatte, bin ich spazieren gegangen.",
      hint: "nachdem + Plusquamperfekt في الثانوية، والماضي البسيط في الرئيسية.",
      explanation: "الحدث الأسبق = Plusquamperfekt (hatte gegessen).",
      errorType: "word-order",
    },
  ];

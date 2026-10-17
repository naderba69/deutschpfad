/**
 * b2-07 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش فلسفي",
        lines: [
          { speaker: "Moderator", de: "Was bedeutet ein gutes Leben?", ar: "ماذا يعني حياة جيدة؟" },
          { speaker: "Sami", de: "Ich glaube, man braucht Freiheit und Freundschaft. Meiner Meinung nach ist Glück wichtig.", ar: "أعتقد أن المرء يحتاج الحرية والصداقة. في رأيي السعادة مهمة." },
          { speaker: "Anna", de: "Einerseits ja, andererseits braucht man auch Sicherheit.", ar: "من ناحية نعم، ومن ناحية أخرى يحتاج المرء الأمان أيضاً." },
          { speaker: "Moderator", de: "Bis 2050 wird sich unsere Gesellschaft verändert haben. Was denkt ihr?", ar: "بحلول 2050 سيكون مجتمعنا قد تغير. ما رأيكما؟" },
          { speaker: "Anna", de: "Die Werte werden sich verändert haben, aber die Grundfragen bleiben.", ar: "ستتغير القيم لكن الأسئلة الأساسية ستبقى." },
        ],
      },
      {
        id: "l2",
        title: "تحضير مقال",
        lines: [
          { speaker: "Lehrer", de: "Für die Erörterung braucht ihr Pro- und Contra-Argumente.", ar: "للمقال الجدلي تحتاجون حججاً مؤيدة ومعارضة." },
          { speaker: "Karim", de: "Einerseits bringt Technik Fortschritt. Andererseits schadet sie der Umwelt.", ar: "من ناحية تجلب التقنية التقدم. ومن ناحية أخرى تضر البيئة." },
          { speaker: "Lehrer", de: "Sehr gut! Und die Schlussfolgerung?", ar: "جيد جداً! والاستنتاج؟" },
          { speaker: "Karim", de: "Meiner Meinung nach brauchen wir nachhaltige Technik.", ar: "في رأيي نحتاج تقنية مستدامة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was braucht man für ein gutes Leben?",
        questionAr: "ماذا يحتاج المرء لحياة جيدة؟",
        options: ["Freiheit und Freundschaft", "nur Geld und ein großes Haus", "nur Arbeit und viel Pflicht", "nichts, das wirklich zählt"],
        correctIndex: 0,
        explanation: "قال سامي: Man braucht Freiheit und Freundschaft.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«nur Geld und ein großes Haus» لم يقل سامي إن الحاجة إلى المال وحده.",
          "«nur Arbeit und viel Pflicht» لم يقل سامي إن الحاجة إلى العمل وحده.",
          "«nichts, das wirklich zählt» تنفي ما قاله سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist ein Contra-Argument gegen Technik?",
        questionAr: "ما الحجة المعارضة للتقنية؟",
        options: ["Sie schadet der Umwelt", "Sie ist schnell und bequem", "Sie ist billig im Unterhalt", "Sie hilft vielen Menschen"],
        correctIndex: 0,
        explanation: "قال كريم: Andererseits schadet sie der Umwelt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Sie ist schnell und bequem» صفة إيجابية، ولا تمثل حجة ضد التقنية.",
          "«Sie ist billig im Unterhalt» صفة إيجابية، ولا تمثل حجة ضد التقنية.",
          "«Sie hilft vielen Menschen» حجة مع التقنية، وليست حجة ضدها.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Karims Schlussfolgerung?",
        questionAr: "ما استنتاج كريم؟",
        options: ["Wir brauchen nachhaltige Technik", "Wir brauchen keine Technik", "Technik ist nutzlos", "Wir brauchen mehr Geld"],
        correctIndex: 0,
        explanation: "قال كريم: Meiner Meinung nach brauchen wir nachhaltige Technik.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Wir brauchen keine Technik» تنفي ما قاله كريم.",
          "«Technik ist nutzlos» تنفي ما قاله كريم.",
          "«Wir brauchen mehr Geld» لم يقلها كريم.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الفلسفة: sch، ö، وth",
    items: [
      { de: "die Philosophie", ar: "الفلسفة", note: "ph = ف: فيلوزوفي" },
      { de: "die These", ar: "الأطروحة", note: "th = ت: تيزِه" },
      { de: "argumentieren", ar: "يبني حجة", note: "g شديدة (قريبة من ج): أرجومنتيرن" },
      { de: "das Argument", ar: "الحجة", note: "g شديدة: أرجومِنت" },
      { de: "die Erörterung", ar: "المقال الجدلي", note: "ö + r: إر-أُورتِرونغ" },
      { de: "die Gesellschaft", ar: "المجتمع", note: "g شديدة، وsch = ش: جِزِلشافت" },
    ],
    tip: "Philosophie = فيلوزوفي — ph تُنطق ف (من أصل يوناني). وThese = تيزِه — th تُنطق ت.",
    shadowing: [
      { de: "Bis 2030 werde ich Deutsch gelernt haben.", ar: "بحلول 2030 سأكون قد تعلمت الألمانية.", tip: "Futur II: werde ... gelernt haben" },
      { de: "Er wird gegangen sein.", ar: "سيكون قد ذهب.", tip: "Futur II حركة: sein" },
      { de: "Meiner Meinung nach ist das wichtig.", ar: "في رأيي هذا مهم.", tip: "Meiner Meinung nach" },
      { de: "Einerseits..., andererseits...", ar: "من ناحية... ومن ناحية أخرى...", tip: "الروابط الجدلية" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة Futur II:",
      prompt: "«بحلول غدٍ سأكون قد أنهيت الكتاب» (Futur II)",
      acceptedAnswers: ["Bis morgen werde ich das Buch beendet haben", "Bis morgen werde ich das Buch gelesen haben"],
      sampleAnswer: "Bis morgen werde ich das Buch beendet haben.",
      explanation: "Futur II: werde + PII + haben في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Futur II:",
      template: "Bis 2030 werde ich Deutsch ___. Er wird gegangen ___.",
      blanks: [
        { correct: "gelernt haben", options: ["gelernt haben", "gelernt sein", "gelernt"] },
        { correct: "sein", options: ["sein", "haben", "gehabt"] },
      ],
      explanation: "فعل عادي → haben. حركة → sein.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Gesellschaft wird sich verändert haben.",
      explanation: "سيكون المجتمع قد تغير — Futur II.",
      errorType: "spelling",
    },
  ];

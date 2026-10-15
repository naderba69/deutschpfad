/**
 * b2-09 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "مقابلة عمل",
        lines: [
          { speaker: "Interviewerin", de: "Warum möchten Sie bei uns arbeiten?", ar: "لماذا تريد العمل عندنا؟" },
          { speaker: "Sami", de: "Ich lege großen Wert auf Innovation. Und ich ziehe diese Stelle sehr in Betracht.", ar: "أولي أهمية كبيرة للابتكار. وآخذ هذا المنصب بعين الاعتبار." },
          { speaker: "Interviewerin", de: "Welche Rolle spielt Teamarbeit für Sie?", ar: "ما دور العمل الجماعي لديك؟" },
          { speaker: "Sami", de: "Teamarbeit spielt eine große Rolle. Ich stelle meine Erfahrung gern zur Verfügung.", ar: "يلعب العمل الجماعي دوراً كبيراً. أضع خبرتي بكل سرور تحت التصرف." },
        ],
      },
      {
        id: "l2",
        title: "قبول الوظيفة",
        lines: [
          { speaker: "HR", de: "Wir möchten Ihnen die Stelle anbieten.", ar: "نريد أن نعرض عليك المنصب." },
          { speaker: "Mona", de: "Das freut mich sehr! Ich bringe meine Motivation zum Ausdruck.", ar: "يسعدني جداً! أعبر عن حماسي." },
          { speaker: "HR", de: "Wann können Sie anfangen?", ar: "متى تستطيع البدء؟" },
          { speaker: "Mona", de: "Ich stehe sofort zur Verfügung!", ar: "أنا تحت تصرفكم فوراً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Worauf legt Sami großen Wert?",
        questionAr: "على ماذا يولي سامي أهمية كبيرة؟",
        options: ["auf Innovation", "auf Geld", "auf Urlaub", "auf Essen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich lege großen Wert auf Innovation.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Geld» لم يقل سامي إنه يولي أهمية للمال.",
          "«Urlaub» لم يقل سامي إنه يولي أهمية للإجازة.",
          "«Essen» لم يقل سامي إنه يولي أهمية للطعام.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was stellt Sami zur Verfügung?",
        questionAr: "ماذا يضع سامي تحت التصرف؟",
        options: ["seine Erfahrung", "sein Auto", "sein Büro", "seine Zeit nur"],
        correctIndex: 0,
        explanation: "قال سامي: Ich stelle meine Erfahrung gern zur Verfügung.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«sein Auto» لم يقل سامي إنه يضع سيارته تحت التصرف.",
          "«sein Büro» لم يقل سامي إنه يضع مكتبه تحت التصرف.",
          "«seine Zeit nur» لم يقل سامي ذلك؛ قال إنه يضع خبرته تحت التصرف.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann kann Mona anfangen?",
        questionAr: "متى تستطيع منى البدء؟",
        options: ["sofort", "nächste Woche", "im nächsten Monat", "nie"],
        correctIndex: 0,
        explanation: "قالت منى: Ich stehe sofort zur Verfügung!",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«nächste Woche» لم تقل منى إنها تبدأ الأسبوع القادم.",
          "«im nächsten Monat» لم تقل منى إنها تبدأ الشهر القادم.",
          "«nie» تنفي البدء، وهذا عكس ما قالته منى.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات التقديم: sch، au، وst",
    items: [
      { de: "die Bewerbung", ar: "التقديم", note: "w = ڤ (صوت v): بِڤِربونغ" },
      { de: "das Anschreiben", ar: "خطاب التقديم", note: "sch = ش: آن-شرايبِن" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "au = آو: ليبِنْس-لاوف" },
      { de: "die Stelle", ar: "المنصب", note: "st = شت: شتِلِّه" },
      { de: "die Erfahrung", ar: "الخبرة", note: "f + a: إرفارونغ" },
      { de: "die Fähigkeit", ar: "المهارة", note: "h = تطويل: فيه-يغكايت" },
    ],
    tip: "Anschreiben = آن-شرايبِن — sch ثم ei. وLebenslauf = ليبِنْس-لاوف — au = آو.",
    shadowing: [
      { de: "Ich bewerbe mich um die Stelle.", ar: "أتقدم للمنصب.", tip: "sich bewerben um" },
      { de: "Anbei finden Sie meinen Lebenslauf.", ar: "مرفقاً سيرتي الذاتية.", tip: "Anbei finden Sie" },
      { de: "Ich lege Wert auf Pünktlichkeit.", ar: "أولي أهمية للالتزام بالمواعيد.", tip: "Wert legen auf" },
      { de: "Ich stehe zur Verfügung.", ar: "أنا تحت التصرف.", tip: "zur Verfügung stehen" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب بداية خطاب تقديم:",
      prompt: "«أتقدم لمنصب مدير مشاريع»",
      acceptedAnswers: ["Ich bewerbe mich um die Stelle als Projektmanager", "Ich bewerbe mich um die Stelle als Projektmanager."],
      sampleAnswer: "Ich bewerbe mich um die Stelle als Projektmanager.",
      explanation: "sich bewerben um + die Stelle als + منصب.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالوصلة:",
      template: "Ich ___ die Stelle in Betracht. (يأخذ بعين الاعتبار) Ich ___ meine Erfahrung zur Verfügung. (يضع)",
      blanks: [
        { correct: "ziehe", options: ["ziehe", "stelle", "lege"] },
        { correct: "stelle", options: ["ziehe", "stelle", "lege"] },
      ],
      explanation: "in Betracht ziehen + zur Verfügung stellen.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل إلى صيغة رسمية مهذبة:",
      instructionDe: "Schreibe formell:",
      prompt: "Ich will den Job. → (صياغة رسمية كاملة)",
      acceptedAnswers: ["Ich möchte mich um die Stelle bewerben.", "Ich möchte mich um diese Stelle bewerben."],
      sampleAnswer: "Ich möchte mich um die Stelle bewerben.",
      explanation: "الرسمية: möchte + sich bewerben um — بدل will المباشرة في خطاب التقديم.",
      errorType: "vocabulary",
    },
  ];

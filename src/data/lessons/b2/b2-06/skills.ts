/**
 * b2-06 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش عن المسار المهني",
        lines: [
          { speaker: "Beraterin", de: "Die Verbesserung Ihrer Qualifikationen ist der erste Schritt.", ar: "تحسين مؤهلاتك هو الخطوة الأولى." },
          { speaker: "Sami", de: "Beim Lernen habe ich manchmal Probleme.", ar: "أواجه أحياناً مشاكل في التعلم." },
          { speaker: "Beraterin", de: "Zum Lernen braucht man Geduld. Und die Zusammenarbeit hilft.", ar: "للتعلم يحتاج المرء صبراً. والتعاون يساعد." },
          { speaker: "Sami", de: "Die Entscheidung für einen Beruf ist schwer.", ar: "اختيار المهنة صعب." },
          { speaker: "Beraterin", de: "Die Beobachtung Ihrer Interessen hilft bei der Entscheidung.", ar: "مراقبة اهتماماتك تساعد في القرار." },
        ],
      },
      {
        id: "l2",
        title: "التفاوض على الراتب",
        lines: [
          { speaker: "Karim", de: "Ich möchte über das Gehalt sprechen.", ar: "أريد التحدث عن الراتب." },
          { speaker: "Chefin", de: "Die Erhöhung ist nach der Probezeit möglich.", ar: "الزيادة ممكنة بعد فترة التجربة." },
          { speaker: "Karim", de: "Und die Arbeitszeiten? Die Flexibilität ist mir wichtig.", ar: "وأوقات العمل؟ المرونة مهمة لي." },
          { speaker: "Chefin", de: "Das kann verhandelt werden. Die Vereinbarung schreiben wir schriftlich.", ar: "يمكن التفاوض. الاتفاق نكتبه كتابياً." },
        ],
      },
      {
        id: "l3",
        title: "العمل عن بعد",
        lines: [
          { speaker: "Sami", de: "Seit einem Jahr arbeite ich im Homeoffice.", ar: "منذ سنة أعمل من المنزل." },
          { speaker: "Anna", de: "Wie findest du das Arbeiten zu Hause?", ar: "كيف تجد العمل في المنزل؟" },
          { speaker: "Sami", de: "Das Sparen von Fahrzeit ist super. Aber die Trennung von Arbeit und Freizeit ist schwer.", ar: "توفير وقت التنقل رائع. لكن الفصل بين العمل والترفيه صعب." },
          { speaker: "Anna", de: "Ja, die Grenze verschwimmt. Wir haben Gleitzeit, das hilft.", ar: "نعم، الحدود تختلط. لدينا وقت عمل مرن، وهذا يساعد." },
          { speaker: "Sami", de: "Und die Videokonferenzen? Manche sind effizient, manche dauern zu lang.", ar: "ومؤتمرات الفيديو؟ بعضها فعال، وبعضها يطول." },
          { speaker: "Anna", de: "Stimmt. Wichtig ist eine klare Vereinbarung mit dem Arbeitgeber.", ar: "صحيح. المهم اتفاق واضح مع صاحب العمل." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was ist der erste Schritt?",
        questionAr: "ما الخطوة الأولى؟",
        options: ["die Verbesserung der Qualifikationen", "die Entscheidung der Personalabteilung", "die Bewerbung um eine neue Stelle", "die Arbeit im bisherigen Team"],
        correctIndex: 0,
        explanation: "قالت المستشارة: Die Verbesserung Ihrer Qualifikationen ist der erste Schritt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«die Entscheidung der Personalabteilung» ليست الخطوة الأولى التي ذكرتها المستشارة.",
          "«die Bewerbung um eine neue Stelle» ليست الخطوة الأولى التي ذكرتها المستشارة.",
          "«die Arbeit im bisherigen Team» ليست الخطوة الأولى التي ذكرتها المستشارة.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann ist die Erhöhung möglich?",
        questionAr: "متى تكون الزيادة ممكنة؟",
        options: ["nach der Probezeit", "sofort", "nie", "im nächsten Jahr"],
        correctIndex: 0,
        explanation: "قالت المديرة: Die Erhöhung ist nach der Probezeit möglich.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«sofort» تعني فوراً، وهذا عكس ما قالته المديرة.",
          "«nie» تنفي الإمكانية، وهذا عكس ما قالته المديرة.",
          "«im nächsten Jahr» لم تذكرها المديرة كموعد للزيادة.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Karim wichtig?",
        questionAr: "ما المهم لكريم؟",
        options: ["die Flexibilität", "das Büro zu Hause", "die neuen Kollegen", "der Urlaub im Sommer"],
        correctIndex: 0,
        explanation: "قال كريم: Die Flexibilität ist mir wichtig.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Büro zu Hause» لم يقل كريم إنه مهم له.",
          "«die neuen Kollegen» لم يقل كريم إنهم مهمون له.",
          "«der Urlaub im Sommer» لم يقل كريم إنه مهم له.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was ist im Homeoffice schwer?",
        questionAr: "ما الصعب في العمل عن بعد؟",
        options: ["die Trennung von Arbeit und Freizeit", "das Sparen von Zeit", "die Videokonferenzen am Morgen", "die Gleitzeit"],
        correctIndex: 0,
        explanation: "قال سامي: Die Trennung von Arbeit und Freizeit ist schwer — الفصل بين العمل والترفيه صعب.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Sparen von Zeit» ذكره سامي كشيء رائع، لا كشيء صعب.",
          "«die Videokonferenzen am Morgen» لم يقل سامي إنها صعبة في الصباح.",
          "«die Gleitzeit» ذكرتها آنا كشيء يساعد، لا كشيء صعب.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات المهنة: sch، ei، وss",
    items: [
      { de: "die Karriere", ar: "المسار المهني", note: "كلمة فرنسية: كارييرِه" },
      { de: "verhandeln", ar: "يتفاوض", note: "v = ف: فِر-هاندلن" },
      { de: "die Führungskraft", ar: "القائد", note: "ü + r: فيرونغس-كرافت" },
      { de: "die Verbesserung", ar: "التحسين", note: "ss: فِر-بِسّرونغ" },
      { de: "die Entscheidung", ar: "القرار", note: "sch = ش: إنت-شايدونغ" },
      { de: "die Probezeit", ar: "فترة التجربة", note: "ei = آي: پروبِه-تسايت" },
    ],
    tip: "Verbesserung = فِر-بِسّرونغ — ss مهموسة (س، لا ز). وEntscheidung = إنت-شايدونغ — sch ثم ei.",
    shadowing: [
      { de: "Beim Lesen lernt man.", ar: "بالقراءة يتعلم المرء.", tip: "beim Lesen — اسم كبير" },
      { de: "Die Verbesserung der Bedingungen ist wichtig.", ar: "تحسين الظروف مهم.", tip: "die Verbesserung — اسم" },
      { de: "Zum Nachdenken braucht man Ruhe.", ar: "للتفكير يحتاج المرء هدوءاً.", tip: "zum Nachdenken" },
      { de: "Die Zusammenarbeit hilft.", ar: "التعاون يساعد.", tip: "Zusammenarbeit — مركب" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الفعل إلى اسم:",
      prompt: "lesen → (الاسم)",
      acceptedAnswers: ["das Lesen", "das Lesen."],
      sampleAnswer: "das Lesen.",
      explanation: "الاشتقاق: das + مصدر.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالاسم المشتق:",
      template: "verbessern → die ___ · arbeiten → die ___ · schreiben → das ___",
      blanks: [
        { correct: "Verbesserung", options: ["Verbesserung", "Verbesser", "Besserung"] },
        { correct: "Arbeit", options: ["Arbeit", "Arbeiten", "Arbeiter"] },
        { correct: "Schreiben", options: ["Schreiben", "Schreiber", "Schreibung"] },
      ],
      explanation: "Verbesserung، Arbeit، das Schreiben.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Beim Lesen erweitert man den Wortschatz.",
      explanation: "بالقراءة يوسع المرء مفرداته — beim + اسم.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل بالاشتقاق الاسمي (جُمل عن العمل عن بعد):",
      template: "Das ___ (arbeiten) im Homeoffice spart Zeit. · Die ___ (konzentrieren) zu Hause ist oft besser.",
      blanks: [
        { correct: "Arbeiten", options: ["Arbeiten", "Arbeit", "Arbeiter"] },
        { correct: "Konzentration", options: ["Konzentration", "Konzentrieren", "Konzentrat"] },
      ],
      explanation: "Das Arbeiten (العمل — من الفعل arbeiten) وdie Konzentration (التركيز) — اشتقاق اسمي بأسلوب رسمي.",
      errorType: "grammar",
      points: 2,
    },
  ];

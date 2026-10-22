/**
 * b1-12 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "لماذا الألمانية؟",
        lines: [
          { speaker: "Beraterin", de: "Warum möchten Sie Deutsch lernen?", ar: "لماذا تريد تعلّم الألمانية؟" },
          { speaker: "Yusuf", de: "Ich lerne Deutsch, um hier als Ingenieur zu arbeiten.", ar: "أتعلّم الألمانية لكي أعمل هنا مهندساً." },
          { speaker: "Beraterin", de: "Und Ihre Familie?", ar: "وعائلتك؟" },
          { speaker: "Yusuf", de: "Meine Frau lernt auch, damit unsere Kinder zweisprachig aufwachsen.", ar: "زوجتي تتعلّم أيضاً لكي ينشأ أطفالنا بلغتين." },
          { speaker: "Beraterin", de: "Trotz der Arbeit finden Sie also Zeit?", ar: "إذن رغم العمل تجدان وقتاً؟" },
          { speaker: "Yusuf", de: "Ja, wegen der Kinder ist uns das sehr wichtig.", ar: "نعم، من أجل الأطفال هذا مهم جداً لنا." },
        ],
      },
      {
        id: "l2",
        title: "تأجيل رحلة",
        lines: [
          { speaker: "Lena", de: "Wir müssen früher losfahren, damit wir den Zug nicht verpassen.", ar: "علينا الانطلاق أبكر لكي لا يفوتنا القطار." },
          { speaker: "Tarek", de: "Wegen des Verkehrs? Es ist doch Sonntag.", ar: "بسبب الازدحام؟ لكنه يوم أحد." },
          { speaker: "Lena", de: "Während der Bauarbeiten ist die Strecke gesperrt.", ar: "أثناء أعمال البناء الطريق مغلق." },
          { speaker: "Tarek", de: "Gut, dann packe ich jetzt, um pünktlich fertig zu sein.", ar: "حسناً، إذن أحزم الآن لكي أكون جاهزاً في الموعد." },
        ],
      },
      {
        id: "l3",
        title: "دورة مسائية للتحضير للامتحان",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Lena", de: "Du hast dich für den Abendkurs angemeldet. Was ist dein Ziel?", ar: "سجلت في الدورة المسائية. ما هدفك؟", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-1.mp3" },
          { speaker: "Tarek", de: "Ich möchte die B2-Prüfung im Juni bestehen.", ar: "أريد اجتياز امتحان B2 في يونيو.", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-2.mp3" },
          { speaker: "Lena", de: "Warum hast du den Onlinekurs gewählt?", ar: "لماذا اخترت الدورة عبر الإنترنت؟", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-3.mp3" },
          { speaker: "Tarek", de: "Wegen meiner langen Arbeitszeiten kann ich tagsüber nicht teilnehmen.", ar: "بسبب ساعات عملي الطويلة، لا أستطيع المشاركة نهاراً.", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-4.mp3" },
          { speaker: "Lena", de: "Und wie organisierst du das Lernen neben der Arbeit?", ar: "وكيف تنظم الدراسة إلى جانب العمل؟", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-5.mp3" },
          { speaker: "Tarek", de: "Ich plane jede Woche drei Abende ein, um genug zu üben.", ar: "أخصص ثلاثة أمسيات كل أسبوع لكي أتدرب بما يكفي.", audioSrc: "/audio/lessons/b1-12/ls-b1-12-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum lernt Yusuf Deutsch?",
        questionAr: "لماذا يتعلّم يوسف الألمانية؟",
        options: ["Um als Ingenieur zu arbeiten", "Um zu studieren", "Wegen der Prüfung", "Damit seine Frau arbeitet"],
        correctIndex: 0,
        explanation: "قال: Ich lerne Deutsch, um hier als Ingenieur zu arbeiten.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Um zu studieren» لم يذكرها يوسف؛ قال إنه يتعلم ليعمل مهندساً.",
          "«Wegen der Prüfung» لم يذكرها يوسف كسبب لتعلم الألمانية.",
          "«Damit seine Frau arbeitet» لم يقلها يوسف؛ قال إن زوجته تتعلم لأجل الأطفال.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum lernt seine Frau Deutsch?",
        questionAr: "لماذا تتعلّم زوجته الألمانية؟",
        options: [
          "Damit die Kinder zweisprachig aufwachsen",
          "Um selbst noch zu studieren und zu lernen",
          "Wegen der Arbeit und des langen Weges",
          "Trotz der Kinder und der Schule",
        ],
        correctIndex: 0,
        explanation: "الفاعل مختلف (هي تتعلّم، الأطفال ينشأون) ⇒ damit.",
        errorType: "grammar",
        optionExplanations: [
          undefined,
          "«Um selbst zu studieren» لم تذكرها زوجته كسبب لتعلم الألمانية.",
          "«Wegen der Arbeit» لم يذكرها يوسف كسبب لتعلم زوجته.",
          "«Trotz der Kinder» تعني رغم الأطفال، وهذا عكس ما قاله يوسف.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum ist die Strecke gesperrt?",
        questionAr: "لماذا الطريق مغلق؟",
        options: ["Während der Bauarbeiten", "Wegen des Regens", "Trotz des Verkehrs", "Um zu sparen"],
        correctIndex: 0,
        explanation: "قالت لينا: Während der Bauarbeiten ist die Strecke gesperrt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Wegen des Regens» لم تذكر لينا المطر كسبب للإغلاق.",
          "«Trotz des Verkehrs» لم تذكر لينا ذلك كسبب.",
          "«Um zu sparen» لم تذكرها لينا كسبب للإغلاق.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum hat Tarek den Onlinekurs gewählt?",
        questionAr: "لماذا اختار طارق الدورة عبر الإنترنت؟",
        options: ["Wegen seiner langen Arbeitszeiten", "Trotz seiner täglichen Pausen", "Damit sein Chef ihn unterstützt", "Um am Wochenende mehr zu reisen"],
        correctIndex: 0,
        explanation: "قال طارق: Wegen meiner langen Arbeitszeiten kann ich tagsüber nicht teilnehmen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يذكر طارق فترات الاستراحة؛ أشار إلى طول ساعات عمله.",
          "لم يقل إن مديره يدعمه أو أن ذلك سبب اختياره للدورة.",
          "لم يذكر السفر في عطلة نهاية الأسبوع؛ بل تحدث عن العمل نهاراً.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الغرض والسبب: w وz وtz والحرف g في النهاية",
    items: [
      { de: "wegen", ar: "بسبب", note: "w = ڤ، وe الأولى طويلة، وg بين حركتين تبقى غ خفيفة: ڤيغِن" },
      { de: "trotz", ar: "رغم", note: "tz = تس حادّة في النهاية: تروتس" },
      { de: "während", ar: "أثناء", note: "ä الطويلة = إيه ممدودة، وd في النهاية تُنطق ت: ڤيهرِنت" },
      { de: "der Zweck", ar: "الغرض", note: "z في البداية = تس، وck = ك مشدّدة: تسڤيك" },
      { de: "die Absicht", ar: "النية", note: "ch بعد i = ناعمة، وt تلحقها: أبزيشت" },
      { de: "aufgrund", ar: "نتيجةً لـ", note: "au = آو، وd في النهاية تُنطق ت: آوفغرونت" },
    ],
    tip: "قاعدة الحرف الأخير الصامت: d وg وb في نهاية الكلمة تُنطق t وk وp. لذلك während = ڤيهرِنت وaufgrund = آوفغرونت.",
    shadowing: [
      { de: "Ich lerne Deutsch, um hier zu arbeiten.", ar: "أتعلّم الألمانية لكي أعمل هنا.", tip: "um … zu — فاعل واحد" },
      { de: "Ich spreche langsam, damit du mich verstehst.", ar: "أتكلّم ببطء لكي تفهمني.", tip: "damit — فاعلان" },
      { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت.", tip: "wegen + Genitiv" },
      { de: "Trotz der Arbeit finde ich Zeit.", ar: "رغم العمل أجد وقتاً.", tip: "trotz + Genitiv" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى جملة غرض بـ um … zu:",
      prompt: "Ich lerne Deutsch. Ich möchte in Deutschland studieren. (ادمجهما)",
      acceptedAnswers: [
        "Ich lerne Deutsch, um in Deutschland zu studieren",
        "Ich lerne Deutsch, um in Deutschland zu studieren.",
      ],
      sampleAnswer: "Ich lerne Deutsch, um in Deutschland zu studieren.",
      explanation: "الفاعل واحد ⇒ um … zu، ويُحذف الفاعل والفعل المودالي.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الغرض المناسبة حسب الفاعل:",
      template: "Ich wiederhole die Regel, ___ alle sie verstehen. Ich wiederhole die Regel, ___ sie besser ___ behalten.",
      blanks: [
        { correct: "damit", options: ["damit", "um", "weil"] },
        { correct: "um", options: ["um", "damit", "trotz"] },
        { correct: "zu", options: ["zu", "zum", "für"] },
      ],
      explanation: "الأولى فاعلها مختلف (alle) ⇒ damit. الثانية الفاعل نفسه ⇒ um … zu.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Trotz des schlechten Wetters gehen wir spazieren.",
      explanation: "trotz + Genitiv: des schlechten Wetters (مذكّر/محايد ⇒ des + s).",
      errorType: "spelling",
    },
  ];

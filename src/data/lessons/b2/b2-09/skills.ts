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
        audioNoteAr: "يستخدم الاستماع في هذا المشهد صوت النطق الاصطناعي الذي يوفره المتصفح؛ ليس تسجيلاً بشرياً ولا ملف MP3 مستقلاً، وقد يختلف توفر الصوت وأداؤه بين الأجهزة.",
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
        audioNoteAr: "يستخدم الاستماع في هذا المشهد صوت النطق الاصطناعي الذي يوفره المتصفح؛ ليس تسجيلاً بشرياً ولا ملف MP3 مستقلاً، وقد يختلف توفر الصوت وأداؤه بين الأجهزة.",
        lines: [
          { speaker: "HR", de: "Wir möchten Ihnen die Stelle anbieten.", ar: "نريد أن نعرض عليك المنصب." },
          { speaker: "Mona", de: "Das freut mich sehr! Ich bringe meine Motivation zum Ausdruck.", ar: "يسعدني جداً! أعبر عن حماسي." },
          { speaker: "HR", de: "Wann können Sie anfangen?", ar: "متى تستطيع البدء؟" },
          { speaker: "Mona", de: "Ich stehe sofort zur Verfügung!", ar: "أنا تحت تصرفكم فوراً!" },
        ],
      },
      {
        id: "l3",
        title: "مقابلة حول العمل الجماعي",
        audioNoteAr: "هذه المقاطع TTS مولّدة من النصوص الحالية وليست تسجيلات بشرية. طابق تفريغ ASR محلي أولي النص في المقاطع الستة؛ لم يُجر استماع بشري أو تقييم لوضوح الصوت وطبيعيته، ولا يقيس هذا نطق المتعلم.",
        lines: [
          { speaker: "Interviewerin", de: "Welche Aufgaben würden Sie in unserem Team übernehmen?", ar: "ما المهام التي ستتولاها في فريقنا؟", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-1.mp3" },
          { speaker: "Sami", de: "Ich würde meine Erfahrung im Projektmanagement zur Verfügung stellen und Verantwortung übernehmen.", ar: "سأضع خبرتي في إدارة المشاريع تحت التصرف وأتحمل المسؤولية.", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-2.mp3" },
          { speaker: "Interviewerin", de: "Was ist Ihnen bei der Zusammenarbeit besonders wichtig?", ar: "ما المهم بالنسبة إليك خصوصاً في التعاون؟", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-3.mp3" },
          { speaker: "Sami", de: "Ich lege großen Wert auf klare Kommunikation. Teamarbeit spielt für mich eine große Rolle.", ar: "أولي أهمية كبيرة للتواصل الواضح. والعمل الجماعي مهم جداً بالنسبة إليّ.", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-4.mp3" },
          { speaker: "Interviewerin", de: "Wo sehen Sie sich in drei Jahren?", ar: "أين ترى نفسك بعد ثلاث سنوات؟", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-5.mp3" },
          { speaker: "Sami", de: "Ich möchte mich fachlich weiterentwickeln und mehr Verantwortung übernehmen. Ich bin davon überzeugt, dass ich mich bei Ihnen beruflich weiterentwickeln kann.", ar: "أود أن أتطور مهنياً وأن أتحمل مسؤولية أكبر. وأنا مقتنع بأنني أستطيع مواصلة التطور المهني لديكم.", audioSrc: "/audio/lessons/b2-09/ls-b2-09-3-6.mp3" },
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
        options: ["auf Innovation", "auf viel Geld", "auf den Urlaub", "auf gutes Essen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich lege großen Wert auf Innovation.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«auf viel Geld» لم يقل سامي إنه يولي أهمية للمال.",
          "«auf den Urlaub» لم يقل سامي إنه يولي أهمية للإجازة.",
          "«auf gutes Essen» لم يقل سامي إنه يولي أهمية للطعام.",
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
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Worauf legt Sami bei der Zusammenarbeit großen Wert?",
        questionAr: "على ماذا يولي سامي أهمية كبيرة في التعاون؟",
        options: ["auf klare Kommunikation", "auf kurze Arbeitstage", "auf ein eigenes Büro", "auf häufige Dienstreisen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich lege großen Wert auf klare Kommunikation.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يذكر سامي قِصر أيام العمل بوصفه مهماً في التعاون.",
          "لم يذكر سامي المكتب الخاص.",
          "لم يذكر سامي كثرة رحلات العمل.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "النطق والرموز الصوتية (IPA)",
    items: [
      { de: "die Bewerbung", ar: "طلب التوظيف", note: "[bəˈvɛʁbʊŋ] — موضع النبر على المقطع الثاني؛ w تمثل /v/." },
      { de: "das Anschreiben", ar: "رسالة التقديم", note: "[ˈanʃʁaɪ̯bn̩] — sch تمثل /ʃ/، وei تمثل /aɪ̯/." },
      { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "[ˈleːbənsˌlaʊ̯f] — au تمثل /aʊ̯/، مع نبر رئيسي ثم ثانوي." },
      { de: "die Stelle", ar: "الوظيفة", note: "[ˈʃtɛlə] — بداية st هنا تمثل /ʃt/." },
      { de: "die Erfahrung", ar: "الخبرة", note: "[ɛɐ̯ˈfaːʁʊŋ] — النبر على مقطع fa؛ قيمة /ʁ/ تختلف إقليمياً." },
      { de: "die Fähigkeit", ar: "المهارة", note: "[ˈfɛːɪçkaɪ̯t] — h يطيل /ɛː/، وch هنا تمثل /ç/." },
    ],
    tip: "النطق مكتوب برموز IPA تقريبية للكلمات الألمانية القياسية؛ تختلف بعض تحققات /ʁ/ إقليمياً. لا تمثل الرموز حكماً على أداء ملف صوتي بعينه.",
    shadowing: [
      { de: "Ich bewerbe mich um die Stelle.", ar: "أتقدم للمنصب.", tip: "sich bewerben um" },
      { de: "Anbei finden Sie meinen Lebenslauf.", ar: "تجدون سيرتي الذاتية مرفقة.", tip: "Anbei finden Sie" },
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

/**
 * b1-08 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش تدريبي خيالي عن التقنية",
        audioNoteAr: "آراء الشخصيات في هذا الحوار التدريبي خيالية، وليست توقعات موثقة عن سوق العمل أو أثر التقنية.",
        lines: [
          { speaker: "Moderator", de: "Wie könnte die Technik die Zukunft verändern?", ar: "كيف يمكن أن تغيّر التقنية المستقبل؟" },
          { speaker: "Sami", de: "Vielleicht werden technische Systeme manche Aufgaben verändern.", ar: "ربما تغيّر الأنظمة التقنية بعض المهام." },
          { speaker: "Anna", de: "Ich hoffe, sie wird nicht nur Aufgaben verändern, sondern auch neue Möglichkeiten schaffen.", ar: "آمل ألا تقتصر على تغيير المهام، بل أن تتيح فرصاً جديدة أيضاً." },
          { speaker: "Moderator", de: "Und welche Risiken gibt es?", ar: "وما المخاطر المحتملة؟" },
          { speaker: "Sami", de: "Je abhängiger wir von einem System sind, desto größere Folgen kann ein Ausfall haben.", ar: "كلما زاد اعتمادنا على نظام، قد تترتب على تعطّله عواقب أكبر." },
        ],
      },
      {
        id: "l2",
        title: "قرار تقني",
        lines: [
          { speaker: "Karim", de: "Entweder ich kaufe ein neues Handy, oder ich warte noch ein Jahr.", ar: "إما أن أشتري هاتفاً جديداً أو أنتظر سنة أخرى." },
          { speaker: "Mona", de: "Warte! Dein Handy funktioniert doch.", ar: "انتظر! هاتفك يعمل." },
          { speaker: "Karim", de: "Ja, aber die Kamera ist nicht gut. Sowohl die Fotos als auch die Videos sind schlecht.", ar: "نعم، لكن الكاميرا ليست جيدة. الصور والفيديوهات سيئة." },
          { speaker: "Mona", de: "Dann kauf! Du wirst es nicht bereuen.", ar: "إذن اشترِ! لن تندم." },
        ],
      },
      {
        id: "l3",
        title: "حماية البيانات الشخصية",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً. الحوار التدريبي خيالي؛ تختلف إعدادات الخصوصية والأذونات بحسب التطبيق والجهاز، فلا يُعدّ إرشاداً قانونياً أو دليلاً عملياً كاملاً.",
        lines: [
          { speaker: "Mona", de: "Ich nutze eine App, die meine Schritte zählt. Aber ich frage mich, welche Daten sie speichert.", ar: "أستخدم تطبيقاً يحصي خطواتي، لكنني أتساءل عن البيانات التي يخزنها.", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-1.mp3" },
          { speaker: "Karim", de: "Lies zuerst die Datenschutzhinweise. Manche Apps geben Informationen an andere Firmen weiter.", ar: "اقرئي أولاً سياسة الخصوصية. بعض التطبيقات تنقل المعلومات إلى شركات أخرى.", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-2.mp3" },
          { speaker: "Mona", de: "Das wusste ich nicht. Kann ich selbst entscheiden, welche Daten die App bekommt?", ar: "لم أكن أعرف ذلك. هل أستطيع أن أقرر بنفسي البيانات التي يحصل عليها التطبيق؟", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-3.mp3" },
          { speaker: "Karim", de: "Oft kannst du den Zugriff auf Standort und Kontakte in den Einstellungen begrenzen.", ar: "غالباً يمكنك تقييد الوصول إلى الموقع وجهات الاتصال من الإعدادات.", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-4.mp3" },
          { speaker: "Mona", de: "Dann prüfe ich die Berechtigungen. Die App braucht meine Kontakte nicht.", ar: "سأراجع إذن الوصول إذاً. التطبيق لا يحتاج إلى جهات اتصالي.", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-5.mp3" },
          { speaker: "Karim", de: "Genau. Je weniger persönliche Daten du teilst, desto besser kannst du deine Privatsphäre schützen.", ar: "بالضبط. كلما شاركت بيانات شخصية أقل، استطعت حماية خصوصيتك بصورة أفضل.", audioSrc: "/audio/lessons/b1-08/ls-b1-08-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was meint Sami über technische Systeme?",
        questionAr: "ما رأي سامي في الأنظمة التقنية؟",
        options: ["Sie könnten manche Aufgaben verändern.", "Sie werden alle Berufe abschaffen.", "Sie haben keinen Einfluss auf Aufgaben.", "Sie können nicht ausfallen."],
        correctIndex: 0,
        explanation: "قال سامي إن الأنظمة التقنية قد تغيّر بعض المهام: Vielleicht werden technische Systeme manche Aufgaben verändern.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يقل سامي إن التقنية ستنهي جميع المهن؛ بل تحدث عن احتمال تغيّر بعض المهام.",
          "هذا يعاكس رأيه بأن بعض المهام قد تتغير.",
          "ذكر سامي احتمال تعطل النظام عند زيادة الاعتماد عليه.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann laut Sami bei größerer Abhängigkeit passieren?",
        questionAr: "ما الذي قد يحدث بحسب سامي عند زيادة الاعتماد؟",
        options: ["Ein Ausfall kann dann stärkere Folgen haben.", "Ein System kann nie ausfallen.", "Alle Aufgaben werden einfacher.", "Technik verändert keine Aufgaben."],
        correctIndex: 0,
        explanation: "يرى سامي أنه كلما زاد اعتمادنا على نظام، قد تترتب على تعطّله عواقب أكبر.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "نفى سامي احتمال التعطّل، بينما يتحدث عن أثره عند زيادة الاعتماد.",
          "لم يقل إن جميع المهام ستصبح أسهل؛ فحديثه عن احتمال التعطّل.",
          "هذا يناقض قوله إن بعض المهام قد تتغير.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum will Karim ein neues Handy?",
        questionAr: "لماذا يريد كريم هاتفاً جديداً؟",
        options: ["Die Kamera ist schlecht", "Das Handy ist kaputt", "Es ist zu alt", "Er hat es verloren"],
        correctIndex: 0,
        explanation: "قال كريم: Die Kamera ist nicht gut. Sowohl Fotos als auch Videos sind schlecht.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Das Handy ist kaputt» عكس ما قالته منى، فالهاتف يعمل.",
          "«Es ist zu alt» لم يذكرها كريم كسبب للشراء.",
          "«Er hat es verloren» لم يذكرها كريم.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was kann Mona in den Einstellungen begrenzen?",
        questionAr: "ما الذي تستطيع مونا تقييده من الإعدادات؟",
        options: ["den Zugriff auf Standort und Kontakte", "die Speicherung von Fotos vollständig", "die Weitergabe der Daten an Firmen", "die Benachrichtigungen für die App"],
        correctIndex: 0,
        explanation: "نصحها كريم بأن تقيّد الوصول إلى الموقع وجهات الاتصال من الإعدادات.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يتحدث الحوار عن تخزين الصور؛ ذُكر تقييد الوصول إلى الموقع وجهات الاتصال.",
          "ذُكر أن بعض التطبيقات تشارك البيانات، لكن نصيحة كريم كانت تقييد أذونات الوصول.",
          "لم يتحدث الحوار عن إيقاف الإشعارات.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات التقنية: ch، z، وw",
    items: [
      { de: "die Technik", ar: "التقنية", note: "IPA: [ˈtɛçnɪk]؛ ch هنا الصوت [ç]، لا صوت الشين العربية." },
      { de: "der Computer", ar: "الحاسوب", note: "IPA تقريبي: [kɔmˈpjuːtɐ]؛ النبر على المقطع الثاني." },
      { de: "digital", ar: "رقمي", note: "IPA: [dɪɡiˈtaːl]؛ g صوت [ɡ] المجهور، وليس k." },
      { de: "die Entwicklung", ar: "التطور", note: "IPA تقريبي: [ɛntˈvɪklʊŋ]؛ w يلفظ [v]، وng في النهاية [ŋ]." },
      { de: "die Intelligenz", ar: "الذكاء", note: "IPA تقريبي: [ɪntɛliˈɡɛnts]؛ z يلفظ [ts]، وg يظل [ɡ]." },
      { de: "die Zukunft", ar: "المستقبل", note: "IPA: [ˈtsuːkʊnft]؛ z يلفظ [ts]، والمقطع الأول منبور وطويل." },
    ],
    tip: "هذه رموز IPA معيارية تقريبية للنطق الألماني، وليست تهجئة عربية. انتبه إلى [ç] في Technik و[ts] في Zukunft و[Intelligenz].",
    shadowing: [
      { de: "Ich werde morgen lernen.", ar: "سأتعلم غداً.", tip: "werde lernen — المستقبل" },
      { de: "Die Technik wird sich ändern.", ar: "ستتغير التقنية.", tip: "wird sich ändern" },
      { de: "Je mehr du übst, desto besser.", ar: "كلما تدربت أكثر كان أفضل.", tip: "je... desto" },
      { de: "Entweder du lernst, oder du verlierst.", ar: "إما أن تتعلم أو تخسر.", tip: "entweder... oder" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب توقعاً بالمستقبل:",
      prompt: "اكتب: «سأتعلم الألمانية غداً» (Futur I)",
      acceptedAnswers: ["Ich werde morgen Deutsch lernen", "Ich werde morgen Deutsch lernen."],
      sampleAnswer: "Ich werde morgen Deutsch lernen.",
      explanation: "Futur: werde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط المزدوج:",
      template: "Er spricht ___ Deutsch ___ Englisch. (ليس فقط بل أيضاً) Ich habe ___ Zeit ___ Geld. (لا ولا)",
      blanks: [
        { correct: "nicht nur", options: ["nicht nur", "weder", "entweder"] },
        { correct: "sondern auch", options: ["sondern auch", "noch", "oder"] },
        { correct: "weder", options: ["weder", "nicht nur", "entweder"] },
        { correct: "noch", options: ["noch", "sondern auch", "oder"] },
      ],
      explanation: "ليس فقط بل أيضاً / لا ولا.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Je mehr du übst, desto besser wirst du.",
      explanation: "كلما تدربت أكثر أصبحت أفضل — je... desto.",
      errorType: "spelling",
    },
  ];

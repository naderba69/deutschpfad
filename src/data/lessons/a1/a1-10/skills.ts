/**
 * a1-10 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a1-10.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a1-10",
    titleDe: "Ein neuer Job im Büro",
    titleAr: "بداية جديدة في المكتب",
    textType: "erzaehlung",
    paragraphs: [
      "Karim kommt aus Tunesien und wohnt seit zwei Jahren in Köln. Er ist Ingenieur von Beruf. Zurzeit macht er ein Praktikum bei einer kleinen Firma für Solartechnik.",
      "Heute ist sein erster Tag. Um acht Uhr kommt er ins Büro. Eine Frau steht am Kopierer. Karim sagt: „Guten Morgen! Ich bin Karim Ben Salah, der neue Praktikant.“ Frau Grün antwortet: „Herzlich willkommen! Ich bin Frau Grün. Ich bin hier die Chefin.“",
      "Frau Grün zeigt ihm alles. „Das hier ist unser Büro. Ihr Platz ist am Fenster. Der Computer dort ist für Sie. Hier ist Ihre Telefonnummer.“ Die Abteilung ist klein. Wir sind fünf Personen.",
      "Dann kommt Tom. Er ist Techniker in der Firma. Tom fragt seine Kolleginnen und Kollegen: „Wo ist eure Kollegin Lena?“ Eine Kollegin antwortet: „Lena ist heute nicht im Büro. Sie ist krank, aber morgen kommt sie wieder.“",
      "Karim hat viele Fragen. Er fragt Frau Grün: „Arbeiten wir auch am Samstag?“ Sie antwortet: „Nein, am Samstag arbeiten wir nicht. Wir arbeiten von Montag bis Freitag, von neun bis siebzehn Uhr. Wir haben keine Kantine, aber neben der Firma gibt es ein Restaurant.“",
      "Am Abend ruft Karim seine Mutter an. Sie fragt: „Wie war dein erster Tag?“ Karim antwortet: „Sehr gut! Unsere Firma ist klein, und meine Chefin ist sehr nett. Von Beruf bin ich Ingenieur, aber hier mache ich ein Praktikum. Das ist kein Problem. Ich lerne jeden Tag Deutsch.“",
    ],
    paragraphsAr: [
      "كريم من تونس ويسكن في كولونيا منذ سنتين. مهنته مهندس. ويؤدي حالياً تدريباً عملياً لدى شركة صغيرة متخصصة في تقنية الطاقة الشمسية.",
      "اليوم يومه الأول. يصل إلى المكتب في الساعة الثامنة. تقف امرأة عند آلة النسخ. يقول كريم: «صباح الخير! أنا كريم بن صالح، المتدرّب الجديد». تجيب السيدة غرون: «أهلاً وسهلاً! أنا السيدة غرون. أنا المديرة هنا».",
      "تُريه السيدة غرون كل شيء. «هذا مكتبنا. مكان حضرتك عند النافذة. الحاسوب هناك مخصص لك. وهذا رقم هاتف حضرتك». القسم صغير. نحن خمسة أشخاص.",
      "ثم يأتي توم. هو فنيّ في الشركة. يسأل توم زميلاته وزملاءه: «أين زميلتكم لينا؟» تجيب إحدى الزميلات: «لينا ليست في المكتب اليوم. إنها مريضة، لكنها تعود غداً».",
      "لدى كريم أسئلة كثيرة. يسأل السيدة غرون: «هل نعمل يوم السبت أيضاً؟» تجيب: «لا، لا نعمل يوم السبت. نعمل من الاثنين إلى الجمعة، من التاسعة صباحاً إلى الخامسة مساءً. ليس لدينا مقصف، لكن يوجد مطعم بجانب الشركة».",
      "في المساء يتصل كريم بأمه. تسأله: «كيف كان يومك الأول؟» يجيب كريم: «جيد جداً! شركتنا صغيرة، ومديرتي لطيفة جداً. أنا مهندس بالمهنة، لكنني أؤدي تدريباً عملياً هنا. لا مشكلة في ذلك. أتعلم الألمانية كل يوم».",
    ],
    glossary: [
      {
        de: "der Praktikant / die Praktikantin",
        ar: "متدرّب / متدرّبة",
        noteAr: "من أمثلة الصياغة بـ-in؛ لا تتحول كل أسماء المهن بإضافة اللاحقة وحدها.",
      },
      {
        de: "das Praktikum",
        ar: "تدريب عملي",
        noteAr: "من التعبيرات: ein Praktikum machen.",
      },
      {
        de: "die Solartechnik",
        ar: "تقنية الطاقة الشمسية",
        noteAr: "اسم مجال يرد في وصف الشركة في هذا النص.",
      },
      {
        de: "die Chefin",
        ar: "المديرة",
        noteAr: "صيغة مؤنثة من Chef.",
      },
      {
        de: "die Abteilung",
        ar: "القسم",
        noteAr: "قسم في شركة أو مؤسسة.",
      },
      {
        de: "der Techniker",
        ar: "الفنيّ",
        noteAr: "وجمعها في هذا الاستعمال die Techniker.",
      },
      {
        de: "die Kollegin",
        ar: "الزميلة",
        noteAr: "المذكر: der Kollege.",
      },
      {
        de: "unsere Firma",
        ar: "شركتنا",
        noteAr: "في الرفع: unsere Firma؛ تتغير النهاية بحسب الاسم والحالة.",
      },
      {
        de: "eure Kollegin",
        ar: "زميلتكم (غير رسمي، للجمع)",
        noteAr: "eure هي الصيغة الشائعة هنا؛ وتوجد أيضاً الصيغة euere.",
      },
      {
        de: "Ihr Platz / Ihre Telefonnummer",
        ar: "مكان حضرتك / رقم هاتف حضرتك",
        noteAr: "Ihr بحرف كبير في المخاطبة الرسمية؛ والسياق يحدد المفرد أو الجمع.",
      },
      {
        de: "die Kantine",
        ar: "مقصف الشركة",
        noteAr: "مطعم أو مكان للطعام في مقر العمل.",
      },
      {
        de: "ruft … an (anrufen)",
        ar: "يتصل هاتفياً بـ…",
        noteAr: "فعل منفصل: Karim ruft seine Mutter an.",
      },
      {
        de: "krank",
        ar: "مريض / مريضة",
        noteAr: "Lena ist krank.",
      },
      {
        de: "der Kopierer",
        ar: "آلة النسخ",
        noteAr: "Eine Frau steht am Kopierer.",
      },
      {
        de: "von Beruf",
        ar: "من حيث المهنة / بالمهنة",
        noteAr: "Ich bin Ingenieur von Beruf؛ واسم المهنة اسم خبري لا صفة.",
      },
      {
        de: "Wie war dein erster Tag?",
        ar: "كيف كان يومك الأول؟",
        noteAr: "سؤال عن يوم مضى؛ war هي صيغة Präteritum من sein التي سبق التدرب عليها.",
      },
      {
        de: "neben der Firma",
        ar: "بجانب الشركة",
        noteAr: "neben يصف الموقع في هذا السياق.",
      },
      {
        de: "kein Problem",
        ar: "لا مشكلة",
        noteAr: "صيغة نفي مع الاسم في هذا التعبير.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "أجب بحسب المعلومة الواردة في النص:",
        questionDe: "Was ist Karim von Beruf?",
        errorType: "vocabulary",
        options: ["Ingenieur", "Techniker", "Lehrer", "Arzt"],
        correctIndex: 0,
        paragraph: 0,
        explanation:
          "يذكر النص أن Karim Ingenieur von Beruf ist؛ ويذكر في الوقت نفسه أنه يؤدي حالياً تدريباً عملياً.",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "أجب بحسب المعلومة الواردة في النص:",
        questionDe: "Wo macht Karim sein Praktikum?",
        errorType: "preposition",
        options: [
          "Bei einer kleinen Firma für Solartechnik",
          "In einem Krankenhaus",
          "Bei einem Anwalt",
          "In einer Schule",
        ],
        correctIndex: 0,
        paragraph: 0,
        explanation:
          "يقول النص إنه يؤدي تدريباً لدى شركة صغيرة لتقنية الطاقة الشمسية: bei einer kleinen Firma für Solartechnik.",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "أجب بحسب المعلومة الواردة في النص:",
        questionDe: "Warum ist Lena heute nicht im Büro?",
        errorType: "vocabulary",
        options: [
          "Sie ist krank.",
          "Sie hat Urlaub.",
          "Sie arbeitet zu Hause.",
          "Sie ist die Chefin.",
        ],
        correctIndex: 0,
        paragraph: 3,
        explanation: "تقول زميلتها إن Lena مريضة اليوم وإنها ستعود غداً.",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "أجب بحسب رد السيدة غرون في النص:",
        questionDe: "Arbeitet das Team am Samstag?",
        errorType: "negation",
        options: [
          "Nein, am Samstag arbeitet das Team nicht.",
          "Ja, das Team arbeitet jeden Samstag.",
          "Nein, das Team arbeitet nur am Wochenende.",
          "Ja, am Samstag gibt es eine Kantine.",
        ],
        correctIndex: 0,
        paragraph: 4,
        explanation:
          "تجيب السيدة غرون: Nein, am Samstag arbeiten wir nicht؛ ثم تحدد أيام العمل من الاثنين إلى الجمعة.",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        instructionAr: "أجب بحسب المعلومة الواردة في النص:",
        questionDe: "Wie findet Karim seinen ersten Tag?",
        errorType: "vocabulary",
        options: ["Sehr gut", "Sehr schwer", "Langweilig", "Zu lang"],
        correctIndex: 0,
        paragraph: 5,
        explanation:
          "يصف كريم يومه بأنه Sehr gut، ويقول إن مديرته لطيفة وإن التدريب ليس مشكلة.",
      },
    ],
    redemittel: [
      {
        de: "Was sind Sie von Beruf?",
        ar: "ما مهنتك؟ (بصيغة رسمية، للمفرد أو الجمع)",
      },
      {
        de: "Ich bin Ingenieur. / Ich mache ein Praktikum.",
        ar: "أنا مهندس بالمهنة. / أؤدي تدريباً عملياً.",
      },
      {
        de: "Ich mache ein Praktikum bei …",
        ar: "أؤدي تدريباً عملياً لدى …",
      },
      {
        de: "Wo arbeiten Sie? — In einem Büro / bei einer Firma.",
        ar: "أين تعمل/تعملون؟ — في مكتب / لدى شركة، بحسب المقصود.",
      },
      {
        de: "Unsere Abteilung ist klein.",
        ar: "قسمنا صغير.",
      },
      {
        de: "Ist das Ihr Platz?",
        ar: "هل هذا مكان حضرتك؟ (خطاب رسمي)",
      },
      {
        de: "Wir arbeiten von Montag bis Freitag.",
        ar: "نعمل من الاثنين إلى الجمعة.",
      },
      {
        de: "Das ist kein Problem.",
        ar: "لا مشكلة في ذلك.",
      },
      {
        de: "Einen Moment, bitte!",
        ar: "لحظة من فضلك! (عبارة مهذبة للرد على طلب أو مكالمة)",
      },
    ],
    discussionAr:
      "تدرّب شفهياً مع زميل: اذكر مهنة شخص تختاره، واسأل عن جهة عمله أو موقعها، ثم اذكر يوماً لا يعمل فيه. جرّب sein وarbeiten als، واختر بين bei وin وفق المقصود، واستعمل unser وnicht وkein. هذا تدريب مفتوح؛ لا يسجل النظام دليلاً على أداء الكلام ما لم توجد آلية تقييم مستقلة.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "Berufe und Arbeitszeiten",
        lines: [
          {
            speaker: "Moderator",
            de: "Hallo! Was sind Sie von Beruf?",
            ar: "مرحباً! ما مهنتكم؟",
          },
          {
            speaker: "Frau Mansour",
            de: "Ich bin Ärztin. Ich arbeite in einem Krankenhaus.",
            ar: "أنا طبيبة. أعمل في مستشفى.",
          },
          {
            speaker: "Moderator",
            de: "Und Sie, Herr Ben Ali?",
            ar: "وأنت يا سيد بن علي؟",
          },
          {
            speaker: "Herr Ben Ali",
            de: "Ich bin Ingenieur und arbeite bei einer Firma.",
            ar: "أنا مهندس وأعمل لدى شركة.",
          },
          {
            speaker: "Moderator",
            de: "Arbeiten Sie am Wochenende, Frau Mansour?",
            ar: "هل تعملين في نهاية الأسبوع يا سيدة منصور؟",
          },
          {
            speaker: "Frau Mansour",
            de: "Nein, am Wochenende arbeite ich nicht.",
            ar: "لا، لا أعمل في نهاية الأسبوع.",
          },
        ],
      },
      {
        id: "l2",
        title: "Berufe in der Familie",
        lines: [
          {
            speaker: "Karim",
            de: "Mein Vater ist Koch. Meine Mutter ist Lehrerin.",
            ar: "أبي طباخ. أمي معلمة.",
          },
          {
            speaker: "Anna",
            de: "Mein Vater ist Arzt. Meine Mutter ist Ärztin. Mein Bruder ist Student.",
            ar: "أبي طبيب. أمي طبيبة. أخي طالب.",
          },
          {
            speaker: "Karim",
            de: "Was macht dein Bruder beruflich?",
            ar: "ماذا يعمل أخوك؟",
          },
          {
            speaker: "Anna",
            de: "Er studiert an der Universität. Meine Schwester ist auch Studentin.",
            ar: "يدرس في الجامعة. أختي طالبة أيضاً.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة:",
        questionDe: "Was ist Frau Mansour von Beruf?",
        questionAr: "ما مهنة السيدة منصور؟",
        options: ["Ärztin", "Lehrerin", "Ingenieurin", "Verkäuferin"],
        correctIndex: 0,
        explanation: "تقول السيدة منصور: Ich bin Ärztin.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة:",
        questionDe: "Arbeitet Frau Mansour am Wochenende?",
        questionAr: "هل تعمل السيدة منصور في نهاية الأسبوع؟",
        options: [
          "Nein, sie arbeitet am Wochenende nicht.",
          "Ja, sie arbeitet jedes Wochenende.",
          "Nur am Samstag.",
          "Vielleicht.",
        ],
        correctIndex: 0,
        explanation: "تقول السيدة منصور إنها لا تعمل في نهاية الأسبوع.",
        errorType: "grammar",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار ثم اختر الإجابة:",
        questionDe: "Was macht Annas Bruder beruflich?",
        questionAr: "ماذا يعمل أخو آنا؟",
        options: ["Er ist Student.", "Er ist Arzt.", "Er ist Koch.", "Er ist Lehrer."],
        correctIndex: 0,
        explanation: "تقول آنا إن أخاها طالب، ثم تضيف أنه يدرس في الجامعة.",
        errorType: "vocabulary",
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات المهن: ch",
    items: [
      {
        de: "der Arzt",
        ar: "الطبيب",
        note: "يسجل DWDS صورتين صوتيتين: [aʁʦt] و[aːɐ̯ʦt]. لا نفرض إحداهما على كل متحدث؛ والكتابة العربية تقريب لا يمثل التجميع الصوتي بدقة.",
      },
      {
        de: "die Ärztin",
        ar: "الطبيبة",
        note: "يعرض DWDS صورتين: [ˈɛʁʦtɪn] و[ˈɛːɐ̯ʦtɪn]. لا ننسب الفرق إلى منطقة بعينها من دون دليل؛ ورموز الصوائت لا يقابلها تمثيل عربي حرفي.",
      },
      {
        de: "der Koch",
        ar: "الطباخ",
        note: "IPA: [kɔx]. ch هنا /x/ بعد الصائت الخلفي /ɔ/؛ وكتابة «خ» تقريب تعليمي فقط.",
      },
      {
        de: "die Köchin",
        ar: "الطباخة",
        note: "IPA: [ˈkœçɪn]. يختلف ch هنا إلى /ç/ بعد الصائت الأمامي المستدير /œ/؛ لا يقابله صوت عربي مطابق.",
      },
      {
        de: "der Ingenieur",
        ar: "المهندس",
        note: "يورد Duden [ɪnʒəˈni̯øːɐ̯] و[ɪnʒeˈni̯øːɐ̯]؛ موضع /ə/ أو /e/ والنبر مهمان، فلا تختزله إلى تهجئة عربية واحدة.",
      },
      {
        de: "der Kellner",
        ar: "النادل",
        note: "IPA: [ˈkɛlnɐ]. يبيّن النبر على المقطع الأول و/ɐ/ النهائية في المدخل المعجمي.",
      },
      {
        de: "der Lehrer",
        ar: "المعلّم",
        note: "يورد DWDS [ˈleːʀɐ]: صائت /eː/ طويل، ثم /ʀ/ و/ɐ/. هذه كتابة صوتية معجمية؛ لا تساوِ الحرف العربي «ر» بتحقيق ألماني واحد.",
      },
    ],
    tip:
      "قارن الصوتين في Koch [kɔx] وKöchin [ˈkœçɪn]: يتغير نطق ch في هذين المثالين، ويتغير معه الصائت أيضاً. [œ] لا مقابل مطابقاً له في العربية. استخدم رموز IPA والتسجيل المعجمي مرجعاً؛ أي تقريب بالحروف العربية وسيلة تذكّر فقط، وليس نسخاً صوتياً أو تقييماً للنطق.",
    shadowing: [
      {
        de: "Ich bin Lehrer von Beruf.",
        ar: "أنا معلّم بالمهنة.",
        tip: "Lehrer [ˈleːʁɐ]: انتبه إلى طول /eː/ والنبر الأول؛ تقريب الكتابة العربية غير دقيق للصوت.",
      },
      {
        de: "Meine Mutter ist Ärztin.",
        ar: "أمي طبيبة.",
        tip: "تدرّب على إحدى الصورتين المعجميتين [ˈɛʁʦtɪn] أو [ˈɛːɐ̯ʦtɪn]؛ يذكر DWDS كلتيهما. انتبه إلى التجمع /t͡st/ ولا تُحوّل اختلاف النقل إلى قاعدة إقليمية بلا دليل.",
      },
      {
        de: "Er ist Koch. Sie ist Köchin.",
        ar: "هو طباخ. هي طباخة.",
        tip: "استمع إلى Koch [kɔx] وKöchin [ˈkœçɪn] وقارن /x/ بـ/ç/؛ لا تكتفِ بالتشابه الكتابي.",
      },
      {
        de: "Ich arbeite als Ingenieur.",
        ar: "أعمل مهندساً.",
        tip: "راجع نطق Ingenieur في Duden؛ يذكر المدخل صورتين صوتيتين مقبولتين، فلا تُفرض صورة واحدة على كل متحدث.",
      },
      {
        de: "Am Wochenende arbeite ich nicht.",
        ar: "لا أعمل في نهاية الأسبوع.",
        tip: "اقرأ الجملة كاملة بصوت مسموع. هذا تدريب ذاتي على الترديد، ولا يسجل النظام هنا تقييماً موثوقاً للكلام أو للنطق.",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة نموذجية كاملة مع مراعاة الحرف الكبير في اسم المهنة؛ لا يلزم أن تصف معلوماتك الشخصية.",
      prompt: "Was bist du von Beruf? Schreibe: Ich bin + Berufsbezeichnung.",
      caseSensitive: true,
      acceptedAnswers: [
        "Ich bin Lehrer.",
        "Ich bin Lehrerin.",
        "Ich bin Student.",
        "Ich bin Studentin.",
        "Ich bin Arzt.",
        "Ich bin Ärztin.",
        "Ich bin Ingenieur.",
        "Ich bin Ingenieurin.",
        "Ich bin Koch.",
        "Ich bin Köchin.",
        "Ich bin Verkäufer.",
        "Ich bin Verkäuferin.",
        "Ich bin Praktikant.",
        "Ich bin Praktikantin.",
        "Ich bin Lehrer von Beruf.",
        "Ich bin Lehrerin von Beruf.",
        "Ich bin Student von Beruf.",
        "Ich bin Studentin von Beruf.",
        "Ich bin Ingenieur von Beruf.",
        "Ich bin Ingenieurin von Beruf.",
        "Ich bin Arzt von Beruf.",
        "Ich bin Ärztin von Beruf.",
        "Ich bin Koch von Beruf.",
        "Ich bin Köchin von Beruf.",
        "Ich bin Verkäufer von Beruf.",
        "Ich bin Verkäuferin von Beruf.",
        "Ich bin Praktikant von Beruf.",
        "Ich bin Praktikantin von Beruf.",
      ],
      sampleAnswer: "Ich bin Ingenieur.",
      explanation:
        "النمط المستهدف هنا هو Ich bin + اسم المهنة بلا أداة في التعريف المحايد؛ وvon Beruf إضافة اختيارية في أمثلة التعريف. قبول النظام محصور في قائمة صيغ محددة، وليس تصحيحاً مفتوحاً لكل جملة مهنية ممكنة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل كل فراغ بأداة النفي المناسبة في هذا المثال:",
      template:
        "Ich arbeite ___ (لا أعمل). Ich habe ___ Bruder (ليس لدي أخ). Das ist ___ teuer (هذا ليس غالياً).",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
        { correct: "keinen", options: ["nicht", "keinen", "keine"] },
        { correct: "nicht", options: ["nicht", "kein", "keine"] },
      ],
      explanation:
        "في هذه الأمثلة: نفي الجملة الفعلية بـnicht، وصيغة keinen مع Bruder في المفعول به، وnicht قبل الصفة teuer. يتحدد اختيار النفي وموضعه بالسياق وبنية الجملة.",
      errorType: "negation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة الألمانية مع كتابة الأسماء بحرف كبير:",
      caseSensitive: true,
      audioText: "Meine Schwester arbeitet als Lehrerin.",
      explanation:
        "إملاء جملة قصيرة: Meine Schwester arbeitet als Lehrerin. يختبر هذا النشاط كتابة الجملة بعد سماعها، لا مهارة التحدث.",
      errorType: "spelling",
    },
  ];

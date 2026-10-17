/**
 * a1-05 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a1-05.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a1-05",
    titleDe: "Ein ganz normaler Dienstag",
    titleAr: "ثلاثاء عادي جداً",
    textType: "blog",
    paragraphs: [
      "Mein Name ist Tarek und ich arbeite als Krankenpfleger in einem Krankenhaus in Hamburg. Mein Tag beginnt sehr früh. Ich stehe immer um halb sechs auf, denn meine Schicht fängt um sieben Uhr an. Ich dusche schnell und ziehe mich an.",
      "Um Viertel vor sechs frühstücke ich. Meistens esse ich nur ein Brötchen mit Käse und trinke einen starken Kaffee. Manchmal habe ich keine Zeit und nehme das Brötchen einfach mit. Dann fahre ich mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
      "Im Krankenhaus ist immer viel los. Von sieben bis zwölf arbeite ich auf der Station. Um halb eins mache ich Mittagspause. Dann esse ich in der Kantine und rufe kurz meine Mutter an. Sie wohnt in Tunis und wir telefonieren fast jeden Tag.",
      "Am Nachmittag habe ich oft Besprechungen. Um sechzehn Uhr ist meine Schicht zu Ende. Ich kaufe schnell im Supermarkt ein und fahre nach Hause. Zweimal pro Woche gehe ich noch ins Fitnessstudio, aber montags bin ich immer zu müde.",
      "Am Abend koche ich und sehe ein bisschen fern. Um zehn Uhr räume ich die Küche auf und lese noch zwanzig Minuten. Ich gehe selten nach Mitternacht ins Bett, denn morgen früh klingelt der Wecker wieder um halb sechs. So ist mein Leben: anstrengend, aber ich mag meinen Beruf.",
    ],
    paragraphsAr: [
      "اسمي طارق وأعمل ممرّضاً في مستشفى بهامبورغ. يبدأ يومي باكراً جداً. أنهض دائماً في الخامسة والنصف، لأنّ نوبتي تبدأ في السابعة. أستحمّ سريعاً وأرتدي ملابسي.",
      "أفطر في السادسة إلا ربعاً. غالباً آكل خبزةً صغيرة مع الجبن وأشرب قهوةً قوية. وأحياناً لا يكون عندي وقت، فأخذ الخبزة معي. ثم أذهب إلى العمل بقطار الأنفاق. تستغرق الرحلة عشرين دقيقة.",
      "في المستشفى الحركة دائمة. أعمل في القسم من السابعة إلى الثانية عشرة. وفي الثانية عشرة والنصف آخذ استراحة الغداء. حينها آكل في المقصف وأتّصل بأمّي قليلاً. هي تسكن في تونس ونتحدّث هاتفياً كلّ يوم تقريباً.",
      "بعد الظهر عندي اجتماعات كثيرة. وفي الرابعة عصراً تنتهي نوبتي. أتسوّق سريعاً من السوبرماركت وأعود إلى البيت. وأذهب إلى النادي مرّتين أسبوعياً، لكنّني يوم الاثنين أكون متعباً جداً دائماً.",
      "في المساء أطبخ وأشاهد التلفاز قليلاً. وفي العاشرة أرتّب المطبخ وأقرأ عشرين دقيقة أخرى. نادراً ما أذهب إلى الفراش بعد منتصف الليل، لأنّ المنبّه سيرنّ غداً صباحاً في الخامسة والنصف من جديد. هكذا هي حياتي: متعبة، لكنّني أحبّ مهنتي.",
    ],
    glossary: [
      {
        de: "der Krankenpfleger",
        ar: "الممرّض",
        noteAr:
          "مركّب من krank (مريض) + Pfleger (راعٍ). والمؤنّث die Krankenpflegerin. ويُقال أيضاً die Pflegefachkraft بصيغة محايدة رسمياً.",
      },
      {
        de: "die Schicht",
        ar: "نوبة العمل",
        noteAr:
          "مؤنّثة. ومنها Frühschicht (نوبة صباحية) و Spätschicht (مسائية) و Nachtschicht (ليلية) — ومهنة التمريض قائمة عليها.",
      },
      {
        de: "das Brötchen",
        ar: "خبزة صغيرة",
        noteAr:
          "تعني قطعة خبز صغيرة لا كعكة. وهي محايدة بسبب اللاحقة ‑chen، ويبقى شكل الجمع Brötchen نفسه.",
      },
      {
        de: "die U-Bahn",
        ar: "المترو / قطار الأنفاق",
        noteAr:
          "اختصار Untergrundbahn، ومؤنّثة لأنّ die Bahn مؤنّثة. ويصحبها mit + Dativ: mit der U-Bahn fahren.",
      },
      {
        de: "die Fahrt dauert …",
        ar: "تستغرق الرحلة…",
        noteAr:
          "يصف مدّة الرحلة أو الحدث: Die Fahrt dauert 20 Minuten. ولذكر الوقت الذي يحتاجه شخص، نقول غالباً: Ich brauche 20 Minuten.",
      },
      {
        de: "Es ist viel los.",
        ar: "الحركة كثيرة / المكان مزدحم",
        noteAr:
          "تعبير ثابت شديد الشيوع. ويُسأل به أيضاً: Was ist los? = ما الأمر؟ ما الخطب؟",
      },
      {
        de: "die Mittagspause",
        ar: "استراحة الغداء",
        noteAr:
          "مؤنّثة. من التركيبات الشائعة: eine Pause machen أو eine Pause einlegen؛ لا تنقل التعبير الإنجليزي take a break حرفياً إلى nehmen.",
      },
      {
        de: "die Kantine",
        ar: "المقصف / مطعم المؤسّسة",
        noteAr:
          "تعني مطعم المؤسسة أو المقصف؛ ولا تدل الكلمة وحدها على أن الطعام مدعوم السعر.",
      },
      {
        de: "die Besprechung",
        ar: "الاجتماع",
        noteAr:
          "مؤنّثة بـ‑ung كعادة كلّ ما ينتهي بها. ومرادفها das Meeting و die Sitzung (أكثر رسمية).",
      },
      {
        de: "zu Ende sein",
        ar: "ينتهي",
        noteAr:
          "تعبير ثابت: Die Schicht ist zu Ende. ومرادفه الفعل enden أو aufhören (وهو منفصل: Es hört auf).",
      },
      {
        de: "der Wecker",
        ar: "المنبّه",
        noteAr:
          "مذكّر، من الفعل wecken (يوقظ). والفعل المصاحب: Der Wecker klingelt (يرنّ المنبّه).",
      },
      {
        de: "anstrengend",
        ar: "متعِب / مرهِق",
        noteAr:
          "صفة من الفعل sich anstrengen (يجهد نفسه). وضدّها entspannend (مريح).",
      },
    ],
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "الفقرة الأولى — دقّق في الساعة:",
        questionDe: "Wann steht Tarek auf?",
        questionAr: "متى ينهض طارق؟",
        options: ["Um 6:30 Uhr", "Um 5:30 Uhr", "Um 7:00 Uhr", "Um 5:45 Uhr"],
        correctIndex: 1,
        explanation:
          "النصّ يقول Ich stehe … um halb sechs auf: اسم halb هو الساعة التالية، لذلك halb sechs تعني الخامسة والنصف (5:30).",
        optionExplanations: [
          "هذا خطأ halb الشهير: العدّ نحو الأمام لا الخلف.",
          undefined,
          "السابعة موعد بدء النوبة لا الاستيقاظ.",
          "الخامسة والنصف لا ٥:٤٥؛ و٥:٤٥ هو موعد الفطور.",
        ],
        errorType: "vocabulary",
        paragraph: 0,
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "الفقرة الثالثة — التواصل مع العائلة:",
        questionDe: "Wie oft telefoniert Tarek mit seiner Mutter?",
        questionAr: "كم مرّة يتّصل طارق بأمّه؟",
        options: [
          "Einmal pro Woche",
          "Fast jeden Tag",
          "Nie",
          "Zweimal im Monat",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «wir telefonieren fast jeden Tag». وكلمة fast (تقريباً) تخفّف المطلق، فليست كلّ يوم حرفياً بل قريباً من ذلك.",
        optionExplanations: [
          "مرّتان أسبوعياً تخصّان النادي الرياضي لا المكالمات.",
          undefined,
          "بل يتّصل يومياً تقريباً.",
          "لم يُذكر شيء شهري.",
        ],
        errorType: "vocabulary",
        paragraph: 2,
      },
      {
        id: "r3",
        type: "multiple-choice",
        instructionAr: "الفقرة الرابعة — انتبه للاستثناء:",
        questionDe: "Warum geht Tarek montags nicht ins Fitnessstudio?",
        questionAr: "لماذا لا يذهب طارق إلى النادي يوم الاثنين؟",
        options: [
          "Weil das Studio geschlossen ist",
          "Weil er dann immer zu müde ist",
          "Weil er montags arbeitet",
          "Weil er kein Geld hat",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «aber montags bin ich immer zu müde». ولاحظ الصيغة montags بحرفٍ صغير و‑s: تعني «كلّ اثنين» عادةً، لا «الاثنين القادم» الذي يُقال له am Montag.",
        optionExplanations: [
          "لم يُذكر إغلاق.",
          undefined,
          "لا يذكر النص أن العمل يوم الاثنين هو السبب؛ بل يذكر أن طارق متعب يوم الاثنين.",
          "المال لم يُذكر إطلاقاً.",
        ],
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "r4",
        type: "multiple-choice",
        instructionAr: "انظر في بناء الجمل عبر النصّ:",
        questionDe: "Warum heißt es «Um Viertel vor sechs frühstücke ich»?",
        questionAr: "لماذا جاء الفاعل ich بعد الفعل في هذه الجملة؟",
        options: [
          "Weil frühstücken trennbar ist",
          "Weil die Zeitangabe auf Position 1 steht",
          "Weil es eine Frage ist",
          "Weil das Subjekt im Plural steht",
        ],
        correctIndex: 1,
        explanation:
          "بدأت الجملة بعبارة الزمن Um Viertel vor sechs، ثم جاء الفعل المصرف frühstücke؛ وهذه قاعدة V2 في الجملة الرئيسية الخبرية.",
        optionExplanations: [
          "frühstücken فعل غير منفصل أصلاً.",
          undefined,
          "الجملة خبرية لا استفهامية.",
          "ich مفرد، لذلك لا يطابق وصف الخيار للفاعل الجمع.",
        ],
        errorType: "word-order",
        paragraph: 1,
      },
      {
        id: "r5",
        type: "multiple-choice",
        instructionAr: "الفقرة الخامسة — كيف يقيّم طارق حياته؟",
        questionDe: "Wie findet Tarek sein Leben?",
        questionAr: "كيف يرى طارق حياته؟",
        options: [
          "Langweilig und viel zu einfach",
          "Anstrengend, aber er mag seinen Beruf",
          "Er möchte bald den Beruf wechseln",
          "Er hat viel zu wenig Freizeit",
        ],
        correctIndex: 1,
        explanation:
          "الجملة الأخيرة: «anstrengend, aber ich mag meinen Beruf». والرابط aber يقيم توازناً بين الجهد والرضا — وهو نمطٌ تعبيري مفيد لوصف أيّ عمل.",
        optionExplanations: [
          "وصفها بالمتعبة لا المملّة.",
          undefined,
          "لم يذكر رغبةً في التغيير بل حبّاً للمهنة.",
          "يومه مزدحم من ٥:٣٠ إلى ما بعد العاشرة.",
        ],
        errorType: "vocabulary",
        paragraph: 4,
      },
    ],
    redemittel: [
      {
        de: "Mein Tag beginnt um halb sechs. Ich stehe immer früh auf.",
        ar: "يبدأ يومي في الخامسة والنصف. أنهض دائماً باكراً.",
      },
      {
        de: "Meine Schicht fängt um sieben Uhr an und ist um sechzehn Uhr zu Ende.",
        ar: "تبدأ نوبتي في السابعة وتنتهي في الرابعة.",
      },
      {
        de: "Ich fahre mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
        ar: "أذهب إلى العمل بالمترو. تستغرق الرحلة عشرين دقيقة.",
      },
      {
        de: "Meistens frühstücke ich, aber manchmal habe ich keine Zeit.",
        ar: "غالباً أفطر، لكن أحياناً لا وقت لديّ.",
      },
      {
        de: "Zweimal pro Woche gehe ich ins Fitnessstudio.",
        ar: "أذهب إلى النادي مرّتين أسبوعياً.",
      },
      {
        de: "Am Abend sehe ich fern und gehe selten nach Mitternacht ins Bett.",
        ar: "في المساء أشاهد التلفاز ونادراً ما أذهب إلى الفراش بعد منتصف الليل.",
      },
    ],
    discussionAr:
      "اكتب أو قل ثلاثاً أو أربع جمل قصيرة عن يوم عادي: اذكر نشاطاً صباحاً وآخر مساءً، واستعمل فعلاً منفصلاً ووقتاً أو ظرف تكرار. يمكنك اختيار الأوقات والأنشطة التي تناسبك.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "يوم سامي",
        lines: [
          {
            speaker: "Sami",
            de: "Ich stehe am Morgen um sechs Uhr auf.",
            ar: "أنهض صباحاً في السادسة.",
          },
          {
            speaker: "Sami",
            de: "Dann frühstücke ich um halb sieben.",
            ar: "ثم أتناول الفطور في السادسة والنصف.",
          },
          {
            speaker: "Sami",
            de: "Um acht Uhr fange ich mit der Arbeit an.",
            ar: "في الثامنة أبدأ العمل.",
          },
          {
            speaker: "Sami",
            de: "Um zwölf Uhr esse ich zu Mittag.",
            ar: "أتناول الغداء في الثانية عشرة.",
          },
          {
            speaker: "Sami",
            de: "Am Abend sehe ich fern oder lese ein Buch.",
            ar: "مساءً أشاهد التلفاز أو أقرأ كتاباً.",
          },
        ],
      },
      {
        id: "l2",
        title: "أسئلة عن اليوم",
        lines: [
          { speaker: "Mona", de: "Wann stehst du auf?", ar: "متى تنهض؟" },
          {
            speaker: "Karim",
            de: "Ich stehe um sieben Uhr auf.",
            ar: "أنهض في السابعة.",
          },
          {
            speaker: "Mona",
            de: "Und was machst du am Abend?",
            ar: "وماذا تفعل مساءً؟",
          },
          {
            speaker: "Karim",
            de: "Ich räume das Zimmer auf und sehe fern.",
            ar: "أرتّب الغرفة وأشاهد التلفاز.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann steht Sami auf?",
        questionAr: "متى ينهض سامي؟",
        options: [
          "um sechs Uhr",
          "um sieben Uhr",
          "um acht Uhr",
          "um zwölf Uhr",
        ],
        correctIndex: 0,
        explanation:
          "قال: Ich stehe am Morgen um sechs Uhr auf — السادسة صباحاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Sami am Abend?",
        questionAr: "ماذا يفعل سامي مساءً؟",
        options: [
          "fernsehen oder lesen",
          "arbeiten",
          "frühstücken",
          "schlafen bis zum Mittag",
        ],
        correctIndex: 0,
        explanation: "قال: Am Abend sehe ich fern oder lese ein Buch.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann steht Karim auf?",
        questionAr: "متى ينهض كريم؟",
        options: [
          "um sieben Uhr",
          "um sechs Uhr",
          "um neun Uhr",
          "um halb acht",
        ],
        correctIndex: 0,
        explanation: "قال كريم: Ich stehe um sieben Uhr auf.",
        errorType: "vocabulary",
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات اليوم: st، ch، وü",
    items: [
      {
        de: "aufstehen",
        ar: "ينهض من الفراش",
        note: "في بداية المقطع stehen يُنطق st في الألمانية القياسية /ʃt/ تقريباً «شت»",
      },
      {
        de: "frühstücken",
        ar: "يتناول الفطور",
        note: "ü في früh طويلة /yː/، وفي Stück قصيرة /ʏ/؛ وst في بداية Stück يُنطق /ʃt/ في الألمانية القياسية",
      },
      { de: "die Nacht", ar: "الليل", note: "ch بعد a صوت احتكاكي خلفي /x/، قريب من خ العربية" },
      { de: "der Morgen", ar: "الصباح", note: "في نطق شائع [ˈmɔʁɡn̩]؛ تختلف أصوات r باختلاف اللهجة" },
      {
        de: "fernsehen",
        ar: "يشاهد التلفاز",
        note: "في بداية المقطع في sehen يُنطق s غالباً /z/ في الألمانية القياسية؛ ليس السبب وقوعه بين حرفَي علة",
      },
      {
        de: "das Frühstück",
        ar: "الفطور",
        note: "في Frühstück، ü الأولى طويلة /yː/ والثانية قصيرة /ʏ/؛ انتبه إلى فرق طول الحركة",
      },
    ],
    tip: "Morgen اسم بمعنى الصباح فيُكتب بحرف كبير؛ أما morgen فظرف بمعنى غداً ويُكتب بحرف صغير.",
    shadowing: [
      {
        de: "Ich stehe um sechs Uhr auf.",
        ar: "أنهض في السادسة.",
        tip: "auf في نهاية الجملة — هذا هو «الذيل»!",
      },
      {
        de: "Wir sehen am Abend fern.",
        ar: "نشاهد التلفاز مساءً.",
        tip: "fern في النهاية أيضاً",
      },
      {
        de: "Ich räume das Zimmer auf.",
        ar: "أرتّب الغرفة.",
        tip: "äu في räume تُنطق /ɔʏ̯/ تقريباً؛ استمع إلى الحركة المركبة في النموذج",
      },
      {
        de: "Der Kurs fängt um neun an.",
        ar: "الدورة تبدأ في التاسعة.",
        tip: "ä في fängt حركة قصيرة قريبة من /ɛ/؛ وتأتي البادئة an في نهاية الجملة",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اختر ساعة من الخيارات واكتب جملة كاملة عن وقت نهوضك:",
      prompt: "Wann stehst du auf? (Wähle: 6, 7 oder 8 Uhr. / اختر: 6 أو 7 أو 8)",
      acceptedAnswers: [
        "Ich stehe um sieben Uhr auf",
        "Ich stehe um sechs Uhr auf",
        "Ich stehe um acht Uhr auf",
        "Ich stehe um 6 Uhr auf",
        "Ich stehe um 7 Uhr auf",
        "Ich stehe um 8 Uhr auf",
      ],
      sampleAnswer: "Ich stehe um sieben Uhr auf.",
      explanation:
        "البنية: Ich stehe (فعل متصرف) + um + ساعة + auf (البادئة في النهاية).",
      errorType: "word-order",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالبادئة الصحيحة (auf/fern/an/ein):",
      template:
        "Ich stehe um 7 ___. Wir sehen abends ___. Der Kurs fängt um 9 ___. Sie kauft heute ___.",
      blanks: [
        { correct: "auf", options: ["auf", "fern", "an", "ein"] },
        { correct: "fern", options: ["auf", "fern", "an", "ein"] },
        { correct: "an", options: ["auf", "fern", "an", "ein"] },
        { correct: "ein", options: ["auf", "fern", "an", "ein"] },
      ],
      explanation:
        "aufstehen (استيقظ) + fernsehen (تلفاز) + anfangen (يبدأ) + einkaufen (تسوق).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stehe am Morgen um halb sieben auf.",
      explanation: "أنهض صباحاً في السادسة والنصف — halb sieben تعني 6:30.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل الدقائق بالألمانية وفق الوقت بين القوسين:",
      template: "Es ist ___ nach acht. (8:05) · Es ist ___ vor neun. (8:40).",
      blanks: [
        { correct: "fünf", options: ["fünf", "zehn", "zwanzig"] },
        { correct: "zwanzig", options: ["fünf", "zwanzig", "vierzig"] },
      ],
      explanation: "fünf nach acht = 8:05، وzwanzig vor neun = 8:40.",
      errorType: "vocabulary",
    },
    {
      id: "w5",
      type: "fill-blank",
      instructionAr: "أكمل كل وقت من أوقات اليوم بحرف الجر المناسب:",
      template: "___ Morgen stehe ich auf. ___ Nachmittag lerne ich Deutsch. ___ Abend sehe ich fern.",
      blanks: [
        { correct: "Am", options: ["Am", "Um", "Im"] },
        { correct: "Am", options: ["Am", "Um", "Im"] },
        { correct: "Am", options: ["Am", "Um", "Im"] },
      ],
      explanation: "في هذه التعابير نقول am Morgen، am Nachmittag، am Abend.",
      errorType: "preposition",
    },
  ];

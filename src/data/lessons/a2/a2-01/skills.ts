/**
 * a2-01 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-01.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-01",
    titleDe: "Eine Reise, die anders lief",
    titleAr: "رحلةٌ سارت على غير ما خُطّط لها",
    textType: "bericht",
    paragraphs: ["Letzten Sommer wollten meine Schwester und ich eine Woche in Prag verbringen. Wir haben alles genau geplant: Wir haben die Zugtickets schon im Mai gebucht, ein kleines Hotel in der Altstadt reserviert und eine lange Liste mit Museen und Cafés geschrieben. Ich war noch nie in Tschechien, und ich habe mich sehr auf die Reise gefreut.", "Am Abfahrtstag sind wir um fünf Uhr aufgestanden. Der Zug sollte um sieben abfahren. Aber am Bahnhof gab es eine Durchsage: „Der Zug nach Prag hat heute zwei Stunden Verspätung.“ Wir konnten nichts machen und haben erst einmal einen Kaffee getrunken. Nach zwei Stunden sind wir endlich abgefahren.", "In Dresden mussten wir umsteigen. Dort ist etwas passiert, was ich nie vergessen werde: Meine Schwester hat ihren Rucksack im ersten Zug vergessen — mit ihrem Pass und ihrem Geld. Wir sind sofort zum Informationsschalter am Bahnhof gegangen. Der Mitarbeiter war sehr freundlich. Er hat telefoniert, gesucht und nach zwanzig Minuten gesagt: „Der Rucksack ist da. Sie können ihn morgen in Prag abholen.“", "Unterwegs gab es weitere Verspätungen. Am Ende sind wir um Mitternacht angekommen — acht Stunden später als geplant. Das gebuchte Hotel war schon geschlossen. So standen wir nachts in einer fremden Stadt ohne Zimmer und ohne Pass.", "Zum Glück gab es eine schöne Überraschung: Die Rezeption eines anderen Hotels zwei Straßen weiter war noch geöffnet. Die Mitarbeiterin dort hat ein Zimmer für uns gefunden. Das Hotel war sogar billiger und schöner. Am nächsten Morgen haben wir den Rucksack abgeholt, und danach war die Woche wirklich wunderbar.", "Heute erzähle ich diese Geschichte gern. An die perfekten Reisen erinnere ich mich kaum. Aber ich erinnere mich an jede Minute dieses Tages."],
    paragraphsAr: ["الصيف الماضي أردنا أنا وأختي أن نقضي أسبوعاً في براغ. خططنا لكل شيء بدقة: حجزنا تذاكر القطار في مايو، وحجزنا فندقاً صغيراً في المدينة القديمة، وكتبنا قائمة طويلة بالمتاحف والمقاهي. لم أزر التشيك من قبل، وقد تحمست كثيراً للرحلة.", "يوم السفر نهضنا في الخامسة. كان من المقرر أن ينطلق القطار في السابعة. لكن في المحطة جاء إعلان: «قطار براغ متأخر اليوم ساعتين». لم نستطع فعل شيء فشربنا قهوة أولاً. وبعد ساعتين انطلقنا أخيراً.", "في درسدن كان علينا تبديل القطار. وهناك حدث شيء لن أنساه أبداً: نسيت أختي حقيبة ظهرها في القطار الأول — وفيها جواز سفرها ونقودها. ذهبنا فوراً إلى مكتب الاستعلامات في المحطة. كان الموظف لطيفاً جداً. اتصل وبحث وقال بعد عشرين دقيقة: «الحقيبة موجودة. يمكنكم أخذها غداً في براغ».", "وتأخر القطار مرة أخرى في الطريق. وفي النهاية وصلنا عند منتصف الليل، أي متأخرين ثماني ساعات عن الموعد المخطط. كان الفندق الذي حجزناه مغلقاً. فوجدنا أنفسنا ليلاً في مدينة غريبة بلا غرفة وبلا جواز.", "ولحسن الحظ كانت هناك مفاجأة جميلة: كان مكتب استقبال فندق آخر على بُعد شارعين مفتوحاً. وجدت لنا الموظفة هناك غرفة. وكان الفندق أرخص وأجمل. وفي صباح اليوم التالي استلمنا الحقيبة، وبعدها كان الأسبوع رائعاً حقاً.", "واليوم أحكي هذه القصة بسرور. لا أكاد أذكر من الرحلات المثالية شيئاً، لكنني أذكر كل دقيقة من هذا اليوم."],
    glossary: [
      {
        de: "verbringen",
        ar: "يقضي (وقتاً)",
        noteAr: "eine Woche in Prag verbringen",
      },
      {
        de: "gebucht (buchen)",
        ar: "حجزوا",
        noteAr: "Partizip II في Perfekt داخل التقرير الشخصي",
      },
      {
        de: "die Altstadt",
        ar: "المدينة القديمة",
      },
      {
        de: "die Durchsage",
        ar: "إعلانٌ صوتيّ (في محطّة أو مطار)",
      },
      {
        de: "die Verspätung",
        ar: "التأخير",
        noteAr: "zwei Stunden Verspätung haben",
      },
      {
        de: "abgefahren (abfahren)",
        ar: "انطلق",
        noteAr: "في معنى انطلاق القطار: ist abgefahren؛ والبادئة المنفصلة تحدد موضع ge-",
      },
      {
        de: "umsteigen",
        ar: "يبدّل وسيلة النقل",
        noteAr: "ist umgestiegen",
      },
      {
        de: "vergessen",
        ar: "ينسى",
        noteAr: "قويّ: vergaß – vergessen، وPartizip بلا ge- (بادئة ver-)",
      },
      {
        de: "der Rucksack",
        ar: "حقيبة الظهر",
      },
      {
        de: "der Mitarbeiter",
        ar: "الموظّف، العامل",
      },
      {
        de: "abholen",
        ar: "يأخذ، يستلم (شيئاً أو شخصاً)",
        noteAr: "hat abgeholt — منفصل",
      },
      {
        de: "die Überraschung",
        ar: "المفاجأة",
      },
      {
        de: "die Rezeption",
        ar: "مكتب الاستقبال",
      },
      {
        de: "erinnere mich an (sich erinnern)",
        ar: "أتذكّر",
        noteAr: "+ Akkusativ: Ich erinnere mich an jede Minute dieses Tages",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Wie haben die Geschwister die Reise vorbereitet?",
        instructionAr: "اقرأ الفقرة الأولى: كيف استعدّا للرحلة؟",
        options: [
          "Sie haben Tickets und Hotel im Voraus gebucht",
          "Sie sind ganz ohne Plan losgefahren",
          "Sie haben erst am Bahnhof alles gebucht",
          "Sie sind mit dem Auto nach Italien gefahren",
        ],
        correctIndex: 0,
        explanation:
          "«Wir haben die Zugtickets schon im Mai gebucht, ein kleines Hotel … reserviert» — حجزٌ مسبق في مايو.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«ganz ohne Plan losgefahren» يناقض النصّ: «Wir haben die Zugtickets schon im Mai gebucht».",
          "«erst am Bahnhof alles gebucht» يناقض «schon im Mai» — الحجز قبل الرحلة لا في المحطة.",
          "«mit dem Auto nach Italien gefahren» يبدّل الوسيلة؛ النصّ يقول «Zugtickets».",
        ],
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Warum sind sie nicht um sieben abgefahren?",
        instructionAr: "اقرأ الفقرة الثانية: لماذا لم ينطلقا في السابعة؟",
        options: [
          "Der Zug hatte zwei Stunden Verspätung",
          "Sie haben verschlafen",
          "Der Zug ist ausgefallen",
          "Sie haben das Ticket verloren",
        ],
        correctIndex: 0,
        explanation:
          "الإعلان قال: «Der Zug nach Prag hat heute zwei Stunden Verspätung».",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«verschlafen» لم يُذكر؛ سبب التأخّر القطارُ لا المسافران.",
          "«Der Zug ist ausgefallen» (إلغاء) أشدّ مما قاله الإعلان: «hat heute zwei Stunden Verspätung».",
          "«das Ticket verloren» لا ذكر له؛ الضائع كان «Rucksack» في Dresden.",
        ],
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Was ist in Dresden passiert?",
        instructionAr: "اقرأ الفقرة الثالثة: ماذا حدث في درسدن؟",
        options: [
          "Die Schwester hat ihren Rucksack im Zug vergessen",
          "Sie haben den Anschlusszug in München verpasst",
          "Sie haben sich in der Stadt verlaufen",
          "Der Zug ist gar nicht gekommen",
        ],
        correctIndex: 0,
        explanation:
          "«Meine Schwester hat ihren Rucksack im ersten Zug vergessen — mit ihrem Pass und ihrem Geld.»",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«den Anschlusszug in München verpasst» يبدّل المدينة والحدث؛ النصّ: «ihren Rucksack im ersten Zug vergessen».",
          "«sich in der Stadt verlaufen» لم يرد في النصّ إطلاقاً.",
          "«Der Zug ist gar nicht gekommen» يناقض وصولهم بعد تأخّر ساعتين.",
        ],
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Welche Aussage zu „wollten“ und „haben … gebucht“ im ersten Absatz trifft zu?",
        instructionAr: "سؤال قواعد: قارن صيغ Präteritum وPerfekt الواردة في الفقرة الأولى.",
        options: [
          "wollten steht im Präteritum, haben … gebucht im Perfekt; der Text verwendet beide Formen.",
          "Beide Formen stehen im Präteritum.",
          "Beide Formen stehen im Perfekt.",
          "Im Bericht muss jedes Verb im Präteritum stehen.",
        ],
        correctIndex: 0,
        explanation:
          "النص يجمع wollten في Präteritum وhaben … gebucht في Perfekt. وجود الصيغتين هنا مثال سياقي، لا قاعدة تلزم كل نص سردي بزمن واحد.",
        errorType: "grammar",
        optionExplanations: [
          undefined,
          "«Beide Formen stehen im Präteritum» — لكن «haben … gebucht» مركّبة من Hilfsverb وPartizip II فهي Perfekt.",
          "«Beide Formen stehen im Perfekt» — «wollten» ماضٍ بسيط (Präteritum من wollen) بلا مساعد.",
          "«jedes Verb muss im Präteritum stehen» قاعدة غير صحيحة؛ النصّ نفسه يجمع الزمنين.",
        ],
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Welches Hilfsverb steht im Satz „Nach drei Stunden sind wir endlich abgefahren“?",
        instructionAr: "سؤال قواعد: اختر المساعد في استعمال abfahren الوارد في القصة.",
        options: [
          "sein — im intransitiven Sinn «der Zug fährt ab»",
          "haben — weil jedes trennbare Verb haben nimmt",
          "sein — weil jedes Bewegungsverb immer sein nimmt",
          "haben — weil abfahren ein starkes Verb ist",
        ],
        correctIndex: 0,
        explanation:
          "في معنى انطلاق القطار اللازم، يرد Perfekt مع sein: sind abgefahren. البادئة المنفصلة تحدد موضع ge-، ولا تحدد المساعد وحدها؛ وتختلف استعمالات أفعال أخرى بحسب المعنى.",
        errorType: "grammar",
        optionExplanations: [
          undefined,
          "«weil jedes trennbare Verb haben nimmt» — البادئة المنفصلة تحدّد موضع ge- لا اختيار المساعد.",
          "«weil jedes Bewegungsverb immer sein nimmt» تعميمٌ زائد؛ «Ich habe das Auto gefahren» مع haben.",
          "«weil abfahren ein starkes Verb ist» — القوة الصرفية تحدّد شكل «abgefahren» لا المساعد.",
        ],
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 5,
        questionDe: "Wie endete die Geschichte?",
        instructionAr: "اقرأ الفقرة الخامسة: كيف انتهت القصّة؟",
        options: [
          "Sie fanden ein anderes Hotel, das billiger und schöner war.",
          "Sie fuhren am selben Abend enttäuscht wieder nach Hause zurück",
          "Sie schliefen die ganze Nacht lang am Bahnhof",
          "Sie fanden den Rucksack auch später niemals wieder",
        ],
        correctIndex: 0,
        explanation:
          "«Die Rezeption eines anderen Hotels zwei Straßen weiter war noch geöffnet. Die Mitarbeiterin dort hat ein Zimmer für uns gefunden. Das Hotel war sogar billiger und schöner.»",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«enttäuscht wieder nach Hause zurück» يناقض «Die Rezeption eines anderen Hotels … war noch geöffnet».",
          "«die ganze Nacht am Bahnhof geschlafen» لم يحدث؛ وُجدت غرفة في فندق آخر.",
          "«den Rucksack niemals wieder gefunden» لا ذكر له في نهاية النصّ.",
        ],
      },
    ],
    redemittel: [
      {
        de: "Wir haben alles genau geplant.",
        ar: "خططنا لكلّ شيءٍ بدقّة",
      },
      {
        de: "Der Zug hat zwei Stunden Verspätung.",
        ar: "القطار متأخّر ساعتين",
      },
      {
        de: "In … mussten wir umsteigen.",
        ar: "في … كان علينا تبديل القطار",
      },
      {
        de: "Ich habe mich sehr auf die Reise gefreut.",
        ar: "تحمّست كثيراً للرحلة",
      },
      {
        de: "Am Ende sind wir um … angekommen.",
        ar: "وفي النهاية وصلنا في …",
      },
      {
        de: "Ich erinnere mich an jede Minute dieses Tages.",
        ar: "أتذكّر كلّ دقيقة من ذلك اليوم",
      },
    ],
    discussionAr:
      "اكتب أو احكِ مسودةً ذاتية المراجعة في عدة جمل عن رحلة سابقة، واستعمل بعض Perfekt وبعض صيغ Präteritum التي تناسب السياق مثل war وhatte وkonnte وmusste. أدرج فعلين من أفعال السفر المنفصلة، ثم راجع موضع Partizip II. هذه مسودة اختيارية لا تُصحح آلياً ولا تُحتسب دليلاً على هدف سردٍ حر.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "عطلة في برلين",
        lines: [
          {
            speaker: "Sami",
            de: "Ich habe letzte Woche Urlaub gemacht.",
            ar: "أخذت إجازة الأسبوع الماضي.",
          },
          {
            speaker: "Anna",
            de: "Schön! Was hast du gemacht?",
            ar: "جميل! ماذا فعلت؟",
          },
          {
            speaker: "Sami",
            de: "Ich bin nach Berlin geflogen und habe viele Museen besucht.",
            ar: "طرت إلى برلين وزرت متاحف كثيرة.",
          },
          {
            speaker: "Anna",
            de: "Hast du die Berliner Mauer gesehen?",
            ar: "هل رأيت سور برلين؟",
          },
          {
            speaker: "Sami",
            de: "Ja, natürlich! Und ich habe typisches Essen probiert.",
            ar: "نعم طبعاً! وجربت طعاماً تقليدياً.",
          },
        ],
      },
      {
        id: "l2",
        title: "عطلة على الشاطئ",
        lines: [
          {
            speaker: "Mona",
            de: "Wir sind nach Sousse gefahren.",
            ar: "ذهبنا إلى سوسة.",
          },
          { speaker: "Karim", de: "Wie war das Hotel?", ar: "كيف كان الفندق؟" },
          {
            speaker: "Mona",
            de: "Das Hotel war super! Wir haben im Meer geschwommen und am Strand in der Sonne gelegen.",
            ar: "كان الفندق رائعاً! سبحنا في البحر واستلقينا على الشاطئ في الشمس.",
          },
          {
            speaker: "Karim",
            de: "Habt ihr Fotos gemacht?",
            ar: "هل التقطتم صوراً؟",
          },
          {
            speaker: "Mona",
            de: "Ja, viele! Ich zeige sie dir später.",
            ar: "نعم، كثيراً! سأريكها لاحقاً.",
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
        questionDe: "Was hat Sami in Berlin gemacht?",
        questionAr: "ماذا فعل سامي في برلين؟",
        options: ["Museen besucht", "geschwommen", "gearbeitet", "eingekauft"],
        correctIndex: 0,
        explanation: "قال: habe viele Museen besucht — زار متاحف كثيرة.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«geschwommen» لم يقله سامي؛ قوله «habe viele Museen besucht».",
          "«gearbeitet» يبدّل النشاط: زيارة سياحية لا عمل.",
          "«eingekauft» غير مذكور في كلام سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "بعد الاستماع، اختر الإجابة الصحيحة:",
        questionDe: "Wohin sind Mona und Karim gefahren?",
        questionAr: "إلى أين ذهب منى وكريم؟",
        options: ["nach Sousse", "nach Berlin", "nach München", "nach Hamburg"],
        correctIndex: 0,
        explanation: "قالت منى: Wir sind nach Sousse gefahren.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«nach Berlin» مدينة سامي، لا وجهة منى وكريم.",
          "«nach München» لم تُذكر وجهةً لهما في الحوار.",
          "«nach Hamburg» غير مذكورة في الحوار.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "بعد الاستماع، اختر الإجابة الصحيحة:",
        questionDe: "Wie war das Hotel?",
        questionAr: "كيف كان الفندق؟",
        options: ["super", "schlecht", "teuer", "klein"],
        correctIndex: 0,
        explanation: "قالت: Das Hotel war super! — كان رائعاً.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«schlecht» نقيض قولها «Das Hotel war super!».",
          "«teuer» حكمٌ على السعر ولم تذكر منى السعر.",
          "«klein» حكمٌ على الحجم ولم تذكر الحجم.",
        ],
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami in Berlin probiert?",
        questionAr: "ماذا جرب سامي في برلين؟",
        options: ["typisches Essen", "typisches Bier", "nur Kaffee", "nichts"],
        correctIndex: 0,
        explanation:
          "قال سامي: Ich habe typisches Essen probiert — جربت طعاماً تقليدياً.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«typisches Bier» يبدّل ما جُرّب؛ قوله «typisches Essen probiert».",
          "«nur Kaffee» حصرٌ لم يقله سامي.",
          "«nichts» ينفي التجربة المذكورة صراحةً في الحوار.",
        ],
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات السفر: ei، eu، وsch",
    items: [
      {
        de: "die Reise",
        ar: "الرحلة",
        note: "ei = آي + s بين علة = ز: رايْزِه",
      },
      { de: "fliegen", ar: "يطير", note: "ie = إي: فليغِن" },
      { de: "der Urlaub", ar: "الإجازة", note: "au = آو: أورلاوب" },
      {
        de: "das Flugzeug",
        ar: "الطائرة",
        note: "eu = /ɔʏ̯/ تقريباً، وz = /ts/، وg في Flugzeug يُنطق /k/ هنا: Flugzeug",
      },
      {
        de: "geschwommen",
        ar: "سبح (تصريف)",
        note: "sch = /ʃ/ تقريباً، وo قصيرة قبل mm: geschwommen",
      },
      { de: "der Strand", ar: "الشاطئ", note: "st في البداية = شت: شترانت" },
    ],
    tip: "يورد Duden أن Flugzeug صيغ على غرار Fahrzeug؛ لا تحلّل الكلمة على أنها fliegen + Zeug. استمع إلى /ɔʏ̯/ في المقطع الأخير.",
    shadowing: [
      {
        de: "Ich bin nach Berlin geflogen.",
        ar: "طرت إلى برلين.",
        tip: "geflogen = غِفلوغِن (o)",
      },
      {
        de: "Wir haben im Meer geschwommen.",
        ar: "سبحنا في البحر.",
        tip: "في نشاط السباحة قد يرد haben أو sein؛ أما السباحة إلى وجهة فتأخذ sein: Wir sind zur Insel geschwommen.",
      },
      {
        de: "Hast du ein Souvenir gekauft?",
        ar: "هل اشتريت تذكاراً؟",
        tip: "gekauft = غِكاوفت (au=آو)",
      },
      {
        de: "Ich habe viel gesehen.",
        ar: "رأيت الكثير.",
        tip: "gesehen = غِزيهِن (s=ز)",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة الموجّهة إلى Perfekt، مع الحفاظ على الوجهة والفعلين:",
      prompt: "Präsens: Ich fahre nach Sousse und besuche ein Museum. → Perfekt",
      acceptedAnswers: [
        "Ich bin nach Sousse gefahren und habe ein Museum besucht.",
        "Ich bin nach Sousse gefahren und habe ein Museum besucht",
      ],
      sampleAnswer: "Ich bin nach Sousse gefahren und habe ein Museum besucht.",
      explanation:
        "في هذا المعنى يأخذ السفر إلى وجهة sein، ويأخذ besuchen مع المفعول ein Museum haben. هذا تحويل محدد؛ لا يقرر مساعد كل استعمال لأفعال السفر.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ haben/sein + التصريف:",
      template:
        "Ich ___ nach Berlin ___ (fliegen). Wir ___ Pizza ___ (essen). Mona ___ ein Buch ___ (kaufen).",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "hat"] },
        { correct: "geflogen", options: ["geflogen", "gefliegen", "geflogt"] },
        { correct: "haben", options: ["haben", "sind", "hat"] },
        { correct: "gegessen", options: ["gegessen", "geessen", "gegesst"] },
        { correct: "hat", options: ["hat", "ist", "haben"] },
        { correct: "gekauft", options: ["gekauft", "gekaufen", "gekaufte"] },
      ],
      explanation:
        "في هذا المثال يسافر fliegen إلى وجهة فيأخذ sein؛ ويأتي essen وkaufen مع haben في هذين الاستعمالين. اختيار المساعد مرتبط بالفعل ومعناه، لا بقاعدة «الحركة» وحدها.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich bin gestern nach Hause gegangen.",
      explanation: "ذهبت إلى المنزل أمس — gehen حركة → bin gegangen.",
      errorType: "spelling",
    },
  ];

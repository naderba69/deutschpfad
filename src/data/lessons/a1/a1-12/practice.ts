/**
 * a1-12 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a1-12.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr:
        "في جواب كامل عن حالة الطقس، اختر الصيغة المناسبة للنمط المتدرّب عليه:",
      questionDe: "Wie ist das Wetter? — ___ ist kalt.",
      options: ["Es", "Ich", "Er", "Sie"],
      correctIndex: 0,
      explanation:
        "في هذا الجواب عن الطقس نستخدم Es ist kalt. هنا es صوريّ في المثال، وليس اسماً لشخص؛ لا يعني ذلك أن كل ظهور لـes له الوظيفة نفسها.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Ich ist» خطأٌ في التصريف والإسناد؛ والجواب عن الجو «Es ist kalt».",
        "«Er ist kalt» عن شخصٍ أو شيء مذكر؛ والسؤال عن الطقس ⇒ «Es».",
        "«Sie ist kalt» لمؤنث؛ والطقس يُوصف بـ«Es ist kalt».",
      ],
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر التصريف الصحيح:",
      questionDe: "Es ___ kalt.",
      questionAr: "يصبح الجو بارداً.",
      options: ["wird", "werde", "wirst", "werden"],
      correctIndex: 0,
      explanation:
        "في جملة التغيّر Es wird kalt نستخدم صيغة المضارع الإخباري wird مع es.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«werde» للمتكلّم «Ich werde»؛ والفاعل «Es».",
        "«wirst» للمخاطب المفرد «du wirst».",
        "«werden» للجمع أو المصدر؛ و«Es» مفرد ⇒ «wird».",
      ],
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الطقس بمعناها:",
      pairs: [
        { left: "die Sonne", right: "الشمس" },
        { left: "der Regen", right: "المطر" },
        { left: "der Schnee", right: "الثلج" },
        { left: "der Wind", right: "الريح" },
      ],
      explanation: "أربعة أسماء مختارة من مفردات الطقس.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Es", "heute", "regnet", "."],
      correctSentence: "Es regnet heute.",
      acceptedSentences: ["Heute regnet es."],
      explanation:
        "كلا الترتيبين صحيح في هذا المثال: Es regnet heute وHeute regnet es. عند تقديم اليوم يبقى الفعل المصرف في الموضع الثاني.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "multiple-choice",
      instructionAr:
        "حسب السياق، اختر العبارة الألمانية المحايدة للتعبير عن إحساس المتكلم بالبرد الآن:",
      questionDe: "Brr! Ich friere. ___ kalt. Hast du eine Jacke?",
      questionAr: "المتحدث يصرّح بأنه يشعر بالبرد؛ ما العبارة المناسبة؟",
      options: ["Mir ist", "Ich bin", "Es ist", "Mich ist"],
      correctIndex: 0,
      explanation:
        "Mir ist kalt تعبير ألماني مألوف عن الإحساس بالبرد. Ich bin kalt ليست خطأً نحوياً مطلقاً، لكن السياق هنا يطلب العبارة المحايدة للإحساس؛ أما Es ist kalt فيصف الجو.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«Ich bin kalt» تصف الجسد بارداً؛ والإحساس بالبرد «Mir ist kalt».",
        "«Es ist kalt» وصفٌ للجو؛ والجملة عن إحساس المتكلم بعد «Ich friere».",
        "«Mich» منصوب؛ والفعل «sein» هنا يطلب Dativ ⇒ «Mir ist kalt».",
      ],
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr:
        "أكمل بـ ist أو wird: يصف الفراغ الأول حالةً قائمة، ويعبّر الثاني تحديداً عن بدء تحوّل متوقّع من الدفء إلى البرودة؛ لا تختَر werden لمجرد أن العبارة مستقبلية.",
      template:
        "Am Morgen ___ es kalt. Am Nachmittag ist es warm, aber laut Wettervorhersage ___ es am Abend wieder kalt.",
      blanks: [
        { correct: "ist", options: ["ist", "wird"] },
        { correct: "wird", options: ["ist", "wird"] },
      ],
      explanation:
        "الجملة الأولى تصف حالة الصباح: Am Morgen ist es kalt. وفي الثانية الجو دافئ بعد الظهر، لكن النشرة تتوقع عودته إلى البرودة مساءً؛ لذلك يناسبه wird. ليست قاعدة أن كل خبر مستقبلي يتطلب werden.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr:
        "استخدم werden للتعبير عن تحوّل الطقس في السياق المعطى؛ ليست المهمة اختباراً لصيغة Futur:",
      prompt: "Es ist kühl. Im Sommer → (warm)",
      acceptedAnswers: [
        "Im Sommer wird es warm.",
        "Es wird im Sommer warm",
        "Es wird warm im Sommer",
      ],
      sampleAnswer: "Im Sommer wird es warm.",
      caseSensitive: true,
      explanation:
        "في سياق التحوّل المعطى يمكن استعمال werden مع الصفة الخبرية: Im Sommer wird es warm. وتقبل المهمة مواضع زمنية أخرى صحيحة؛ لا تسمّيها هنا تمريناً على Futur I.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Es schneit.",
      questionAr: "ما معنى الجملة؟",
      options: ["تثلج", "تمطر", "تهب الرياح", "تشرق الشمس"],
      correctIndex: 0,
      explanation: "schneien = تثلج. (regnen = تمطر).",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "المطر «Es regnet»؛ و«schneien» تساقط الثلج.",
        "الريح «Es ist windig» أو «Der Wind weht».",
        "الشمس «Die Sonne scheint»، لا «Es schneit».",
      ],
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "استبدل أداة التعريف المحددة بما يناسب الاسم المفرد في هذه الجملة:",
      wrongSentence: "Der Wetter ist schön.",
      wrongWord: "Der",
      correctWord: "Das",
      options: ["Das", "Der", "Die", "Den"],
      explanation:
        "في هذه الجملة الخبرية المفردة نقول das Wetter؛ جنس الاسم محفوظ في الألمانية ولا يستنتج من المقابل العربي.",
      errorType: "gender",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Sonne scheint und der Wind weht.",
      caseSensitive: true,
      explanation: "تشرق الشمس وتهب الرياح — اسم + فعل لكل عنصر.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الزمني الصحيح:",
      template:
        "___ Winter ist es kalt. ___ Montag regnet es. ___ acht Uhr ist es noch dunkel.",
      blanks: [
        { correct: "Im", options: ["Im", "Am", "Um"] },
        { correct: "Am", options: ["Am", "Im", "Um"] },
        { correct: "Um", options: ["Um", "Am", "Im"] },
      ],
      explanation:
        "في أمثلة الدرس: im Winter، am Montag، um acht Uhr. احفظ كل تركيب مع نوع التعبير الزمني الوارد معه.",
      errorType: "preposition",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr:
        "استبدل حرف الجر المحدد بالتعبير المناسب مع اسم اليوم:",
      wrongSentence: "In Montag scheint die Sonne.",
      wrongWord: "In",
      correctWord: "Am",
      options: ["Am", "In", "Um", "Im"],
      explanation:
        "في التعبير المحدد عن يوم الأسبوع هنا نقول am Montag؛ تعلّم المثال دون تعميمه على كل تركيب زمني ألماني.",
      errorType: "preposition",
    },
    {
      id: "e13",
      type: "transformation",
      instructionAr:
        "اكتب جملةً تعني «ستمطر غداً»؛ اقبل تقديم morgen أو es ما دامت الصياغة صحيحة:",
      prompt: "morgen + es regnen (جملة خبرية)",
      acceptedAnswers: ["Morgen regnet es.", "Es regnet morgen."],
      sampleAnswer: "Morgen regnet es.",
      caseSensitive: true,
      explanation:
        "كلتا الصيغتين صحيحة في هذا السياق: Morgen regnet es وEs regnet morgen. أما am Morgen فتعني في الصباح، لا غداً.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة عن طقس الفصل:",
      tokens: ["Im", "Sommer", "ist", "es", "sehr", "heiß", "."],
      correctSentence: "Im Sommer ist es sehr heiß.",
      acceptedSentences: [
        "Es ist im Sommer sehr heiß.",
        "Es ist sehr heiß im Sommer.",
      ],
      explanation:
        "Im Sommer ist es sehr heiß وEs ist im Sommer sehr heiß ترتيبان صحيحان هنا؛ يظل الفعل المصرف في موضعه الثاني.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أجب عن السؤال بالمعطيات المذكورة.",
      prompt: "Wann ist es in Deutschland kalt? (der Winter)",
      acceptedAnswers: [
        "Im Winter ist es kalt.",
        "Im Winter.",
        "Es ist im Winter kalt.",
        "Im Winter ist es in Deutschland kalt.",
        "Es ist in Deutschland im Winter kalt.",
        "In Deutschland ist es im Winter kalt.",
        "Im Winter ist es kalt in Deutschland.",
      ],
      sampleAnswer: "Im Winter ist es in Deutschland kalt.",
      caseSensitive: true,
      explanation:
        "في المثال نقول im Winter. يقبل السؤال إجابة مختصرة عن wann وجملاً كاملة صحيحة، ويجب أن تشمل acceptedAnswers صيغة sampleAnswer.",
      errorType: "preposition",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr:
        "بعد الجري يشعر المتكلم بالدفء؛ اختر العبارة الألمانية المألوفة عن إحساسه، لا عن حرارة الجو:",
      questionDe: "Ich bin gerade gelaufen. ___ warm. Ich brauche keine Jacke.",
      options: ["Mir ist", "Ich bin", "Es ist", "Mich ist"],
      correctIndex: 0,
      errorType: "case",
      explanation:
        "Mir ist warm تعبير مألوف عن إحساس الشخص بالدفء. Ich bin warm ليست العبارة المحايدة المقصودة هنا، وEs ist warm يصف الجو؛ لا نحكم على هذه الصيغ خارج السياق نفسه.",
      optionExplanations: [
        undefined,
        "«Ich bin warm» ليست العبارة المحايدة للإحساس؛ والمألوف «Mir ist warm».",
        "«Es ist warm» وصفٌ للجو؛ والجملة عن إحساس المتكلم بعد الجري.",
        "«Mich» منصوب؛ والمطلوب Dativ ⇒ «Mir ist warm».",
      ],
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح تصريف فعل الطقس:",
      wrongSentence: "Es regnen seit zwei Stunden.",
      wrongWord: "regnen",
      correctWord: "regnet",
      options: ["regnet", "regne", "regnest", "geregnet"],
      errorType: "conjugation",
      explanation:
        "es ضمير مفرد للغائب فيلزمه regnet. وregnen مصدر لا يصلح فعلاً مصرَّفاً في المركز الثاني.",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح تصريف werden:",
      wrongSentence: "Du wird bald müde. (Indikativ Präsens)",
      wrongWord: "wird",
      correctWord: "wirst",
      options: ["wirst", "wird", "werde", "werdet"],
      errorType: "conjugation",
      explanation:
        "في المضارع الإخباري مع du نكتب wirst. أما werdest فصيغة صحيحة لـKonjunktiv I في سياقها، لذلك لم نستخدمها هنا كمشتتٍ خاطئ بلا تحديد النمط.",
    },
    {
      id: "e19",
      type: "fill-blank",
      instructionAr:
        "اختر أداة الربط التي تطابق العلاقة العربية المبيّنة قبل كل جملة:",
      errorType: "grammar",
      template:
        "(تضاد) Es ist kalt, ___ die Sonne scheint. (سبب) Ich bleibe zu Hause, ___ es regnet. (اختيار) Gehen wir spazieren ___ bleiben wir zu Hause? (إضافة) Die Sonne scheint ___ der Himmel ist blau.",
      hint:
        "العلاقات المطلوبة بالترتيب: تضاد، سبب، اختيار، إضافة. اختر الرابط وفق المعنى المقصود في كل جملة.",
      blanks: [
        {
          correct: "aber",
          options: ["aber", "denn", "oder", "und"],
          errorType: "grammar",
        },
        {
          correct: "denn",
          options: ["denn", "aber", "oder", "und"],
          errorType: "grammar",
        },
        {
          correct: "oder",
          options: ["oder", "aber", "denn", "und"],
          errorType: "grammar",
        },
        {
          correct: "und",
          options: ["und", "aber", "oder", "denn"],
          errorType: "grammar",
        },
      ],
      explanation:
        "العلاقات المطلوبة بالترتيب هي التضاد (aber)، والسبب (denn)، والاختيار في السؤال البديل (oder)، والإضافة (und). قد تكون أداة أخرى سليمة في سياق بمعنى مختلف؛ يقيس هذا البند اختيار العلاقة المحددة لا حكماً بأن سائر الروابط خاطئة نحوياً.",
    },
    {
      id: "e20",
      type: "error-correction",
      instructionAr: "صحّح ترتيب الجملة بعد أداة الربط:",
      wrongSentence: "Es ist kalt, aber scheint die Sonne.",
      wrongWord: "scheint die Sonne",
      correctWord: "die Sonne scheint",
      options: [
        "die Sonne scheint",
        "scheint die Sonne",
        "die Sonne scheinen",
        "scheint sie die Sonne",
      ],
      errorType: "word-order",
      explanation:
        "في الجملة الخبرية المستقلة المعروضة تبدأ الجملة التالية بالفاعل die Sonne ثم يأتي الفعل scheint في موضعه الثاني. هذا وصف للمثال، لا قاعدة لكل الاستعمالات.",
    },
    {
      id: "e21",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الزمنيّ الصحيح:",
      questionDe: "___ Winter ist es kalt, aber ___ Montag scheint die Sonne.",
      options: ["Im … am", "Am … im", "In … an", "Um … am"],
      correctIndex: 0,
      errorType: "preposition",
      explanation:
        "في هذه الأمثلة نقول im Winter وam Montag؛ أما um فتظهر مع الساعة، مثل um acht Uhr. احفظ التراكيب المحددة دون تعليلها بسُلّم لحجم الوقت.",
      optionExplanations: [
        undefined,
        "معكوس: الفصول «im Winter» والأيام «am Montag».",
        "«in» و«an» بلا إدغام مع الأداة؛ والصحيح «im» = in + dem و«am» = an + dem.",
        "«um» للساعة («um acht Uhr»)، لا للفصول.",
      ],
    },
    {
      id: "e22",
      type: "error-correction",
      instructionAr: "صحّح حرف الجرّ الزمنيّ:",
      wrongSentence: "Am der Nacht sind es fünf Grad.",
      wrongWord: "Am",
      correctWord: "In",
      options: ["In", "Um", "Im", "An"],
      errorType: "preposition",
      explanation:
        "التعبير الشائع هنا هو in der Nacht. احفظ المثال كما هو؛ لا نعمّم أن كل أجزاء اليوم تأخذ am، ولا نعلّل العبارة بمزج an + der.",
    },
    {
      id: "e23",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة بأداة ربط:",
      tokens: [
        "Ich",
        "nehme",
        "den",
        "Schirm",
        "mit",
        ",",
        "denn",
        "es",
        "regnet",
        ".",
      ],
      correctSentence: "Ich nehme den Schirm mit, denn es regnet.",
      acceptedSentences: ["Den Schirm nehme ich mit, denn es regnet."],
      errorType: "word-order",
      explanation:
        "يأتي mit في نهاية الجملة الأولى، ثم تربط denn جملةً رئيسية تذكر السبب. تطابق التمرين ترتيب الكلمات؛ لا يختبر وحده إتقان الفواصل.",
    },
    {
      id: "e24",
      type: "transformation",
      instructionAr: "حوّل الجملة من وصف حالة قائمة إلى وصف بدء التحوّل:",
      prompt: "Es ist kalt. (المقصود: يبدأ الجوّ بالتحوّل إلى البرودة)",
      errorType: "grammar",
      acceptedAnswers: ["Es wird kalt.", "Es wird kalt"],
      sampleAnswer: "Es wird kalt.",
      caseSensitive: true,
      explanation:
        "في السياق المقصود يصف Es ist kalt حالةً قائمة، ويعرض Es wird kalt تحوّلاً نحو البرودة. الصفة الخبرية بعد sein أو werden في المثال بلا نهاية.",
    },
    {
      id: "e25",
      type: "matching",
      instructionAr: "صِل كلّ بنية بمثالها الصحيح:",
      errorType: "grammar",
      pairs: [
        { left: "es ist + صفة", right: "Es ist neblig." },
        { left: "فعل طقس مع es صوريّ", right: "Es schneit." },
        { left: "اسم + فعل", right: "Der Wind weht." },
        { left: "إحساس شخصيّ", right: "Mir ist kalt." },
        { left: "تحوّل", right: "Es wird kälter." },
      ],
      explanation:
        "مطابقة أمثلة مختارة: صفة مع es، وفعل طقس مع es صوريّ، واسم مع فعل، وتعبير عن إحساس، وتحوّل بالحالة.",
    },
    {
      id: "e26",
      type: "fill-blank",
      instructionAr:
        "أكمل: صف مدة المطر المستمرة حتى الآن، ثم حدّد موعد التوقف المحسوب من لحظة الكلام:",
      errorType: "preposition",
      template:
        "Es regnet ___ drei Stunden, aber laut Vorhersage hört es ___ einer Stunde auf.",
      blanks: [
        {
          correct: "seit",
          options: ["seit", "in", "ab", "für"],
          errorType: "preposition",
        },
        {
          correct: "in",
          options: ["in", "seit", "vor", "ab"],
          errorType: "preposition",
        },
      ],
      explanation:
        "يصف seit drei Stunden مطراً مستمراً إلى لحظة الكلام. وفي الفراغ الثاني نقطة المرجع محددة بأنها الآن، لذا تعني in einer Stunde موعداً بعد ساعة من الآن. قد تستعمل nach einer Stunde عند ربط المدة بحدث أو نقطة مرجعية أخرى؛ لذلك لا نعرضها هنا مشتتاً على أنها خطأ عام أو مرادف آلي لـin.",
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich bin kalt. (إذا كان المقصود وصف الجو أو التعبير المحايد عن الإحساس)",
        right: "Es ist kalt. / Mir ist kalt.",
        whyAr:
          "Es ist kalt تصف الجو في المثال، وMir ist kalt تعبير ألماني مألوف عن إحساس الشخص. Ich bin kalt جملة ممكنة في سياقات أخرى، فلا تُصنّف خطأً مطلقاً من دون سياق.",
        classification: "contextual-alternative",
      },
      {
        wrong: "Es ist regnen (خلط الصيغ)",
        right: "Es regnet.",
        whyAr:
          "في الجملة الكاملة المعروضة نستخدم صيغة regnet المصرفة، لا المصدر regnen بعد ist.",
        classification: "error",
      },
      {
        wrong: "Wir wird alt.",
        right: "Wir werden alt.",
        whyAr:
          "werden فعل غير منتظم في المضارع؛ احفظ التصريفات المعروضة، ولا تعمم صيغة واحدة على جميع الضمائر.",
        classification: "error",
      },
    ],
    eselsbruecken: [
      "احفظ أمثلة الطقس كما وردت: Es regnet heute / Heute regnet es؛ وes في فعل الطقس المعروض صوريّ، لا ترجمة حرفية لكلمة «الجو» في كل موضع.",
      "للتغيّر: Es wird kalt. واحفظ تصريف المضارع كما هو: werde، wirst، wird، werden، werdet، werden.",
    ],
    culturalNote: {
      title: "سؤال وجواب في سياق الطقس",
      content:
        "Wie ist das Wetter heute? سؤال ممكن عن الطقس، وتُظهر أمثلة الدرس طرائق للإجابة عنه. لا تثبت هذه الأمثلة تفضيلاً ثقافياً عاماً أو أن الحديث عن الطقس مقدمة شائعة لدى مجموعة كاملة؛ يتغير اختيار العبارة بحسب الشخص والمكان والسياق. أما درجات الحرارة وتوقعات الطقس في نصوص أمين ونشرة الوساطة فهي سيناريوهات تعليمية وليست بيانات أرصاد فعلية، ولا تنطبق على كل تونس أو ألمانيا؛ فالطقس يختلف بحسب المدينة والتاريخ.",
    },
  };

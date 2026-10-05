import type { Lesson } from "@/types/lesson";

/**
 * A1-08 — Kleidung und Farben.
 * Lernzielstatus beruht auf korrekten Ergebnissen der verknüpften Aufgaben, nicht auf dem Öffnen eines Abschnitts.
 */
export const lessonA108: Lesson = {
  id: "a1-08",
  unitId: "a1-08",
  level: "A1",
  order: 1,
  titleDe: "Kleidung und Farben",
  titleAr: "الملابس والألوان",
  summary:
    "ملابس وألوان؛ وصف خبرِيّ بسيط بعد sein، وتصريف tragen، والسؤال عن الرأي، وصيغ مختارة من welcher-/dieser- وأفعال gefallen/passen/stehen.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann ausgewählte Kleidungsstücke und Farben benennen.",
      ar: "أسمّي مفردات أساسية للملابس والألوان مع أداة الاسم الألماني.",
      evidence: {
        exerciseIds: ["e3", "e26"],
        taskIds: ["practice:a1-08:e3", "flow-practice:a1-08:e3", "practice:a1-08:e26", "flow-practice:a1-08:e26"],
        labelAr: "صِل الألوان في e3 وقطع الملابس في e26 بمعانيها؛ يلزم إكمال المهمتين بإجابات صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ein Kleidungsstück mit sein und einem prädikativen Adjektiv einfach beschreiben.",
      ar: "أكتب وصفاً بسيطاً لقطعة ملابس باستعمال sein وصفة خبرية بلا نهاية، مثل: Das Hemd ist rot.",
      evidence: {
        exerciseIds: ["e1", "e4", "e9", "w1"],
        taskIds: ["practice:a1-08:e1", "flow-practice:a1-08:e1", "practice:a1-08:e4", "flow-practice:a1-08:e4", "practice:a1-08:e9", "flow-practice:a1-08:e9", "writing:a1-08:w1"],
        labelAr: "اختر الصفة الخبرية الصحيحة في e1 وe9، رتّب جملة الوصف في e4، ثم اكتب الجملتين في w1؛ يجب أن تصحّ كل النتائج.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann tragen im Präsens an das Subjekt anpassen.",
      ar: "أصرّف tragen في المضارع مع الفاعل في أمثلة مختارة.",
      evidence: {
        exerciseIds: ["e2", "e6", "m2"],
        taskIds: ["practice:a1-08:e2", "flow-practice:a1-08:e2", "practice:a1-08:e6", "flow-practice:a1-08:e6", "mini-test:a1-08:m2"],
        labelAr: "أجب عن تصريف du في e2، وصيغ الفاعل في e6، ثم أعده في سؤال الاختبار m2؛ يلزم الصواب في المهمات الثلاث.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann die Frage „Wie findest du …?“ schriftlich bilden.",
      ar: "أصوغ كتابةً سؤالاً بسيطاً عن الرأي باستعمال Wie findest du …?",
      evidence: {
        exerciseIds: ["e7"],
        taskIds: ["practice:a1-08:e7", "flow-practice:a1-08:e7"],
        labelAr: "حوّل العبارة إلى سؤال رأي في e7 واكتب صيغة مقبولة كاملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann ausgewählte Formen von welcher- und dieser- im Nominativ und Akkusativ verwenden.",
      ar: "أستعمل صيغاً مختارة من welcher- وdieser- مع أسماء الملابس في الرفع والنصب.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13", "e14", "e15"],
        taskIds: ["practice:a1-08:e11", "flow-practice:a1-08:e11", "practice:a1-08:e12", "flow-practice:a1-08:e12", "practice:a1-08:e13", "flow-practice:a1-08:e13", "practice:a1-08:e14", "flow-practice:a1-08:e14", "practice:a1-08:e15", "flow-practice:a1-08:e15"],
        labelAr: "أكمل صيغ الإشارة والسؤال في e11–e14، وطابق اسم القطعة مع dies- في e15؛ يلزم الصواب في كل مهمة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann einfache Sätze mit gefallen und einem Dativpronomen bilden.",
      ar: "أبني جملاً بسيطة بـ gefallen، وأختار ضمير الداتيف وأطابق الفعل مع فاعله.",
      evidence: {
        exerciseIds: ["e16", "e18", "e19", "e20", "e22", "e23", "e25"],
        taskIds: ["practice:a1-08:e16", "flow-practice:a1-08:e16", "practice:a1-08:e18", "flow-practice:a1-08:e18", "practice:a1-08:e19", "flow-practice:a1-08:e19", "practice:a1-08:e20", "flow-practice:a1-08:e20", "practice:a1-08:e22", "flow-practice:a1-08:e22", "practice:a1-08:e23", "flow-practice:a1-08:e23", "practice:a1-08:e25", "flow-practice:a1-08:e25"],
        labelAr: "أجب عن توافق الفعل والضمير في e16 وe19 وe20 وe23، وصحّح/حوّل الجملة في e18 وe22، ثم اختر الرد المناسب في e25؛ كل النتائج مطلوبة.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann passen (Größe) und stehen (jemandem gut stehen) im Kleidungskontext unterscheiden.",
      ar: "أميّز في أمثلة الملابس بين ملاءمة المقاس بـpassen وملاءمة المظهر بـstehen.",
      evidence: {
        exerciseIds: ["e17", "e24", "e25"],
        taskIds: ["practice:a1-08:e17", "flow-practice:a1-08:e17", "practice:a1-08:e24", "flow-practice:a1-08:e24", "practice:a1-08:e25", "flow-practice:a1-08:e25"],
        labelAr: "اختر فعل المقاس في سياقه في e17، وطابق الأفعال بمعانيها في e24، ثم اختر جواباً يفصل المقاس عن الإعجاب في e25.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann eine positive Antwort auf eine verneinte Ja/Nein-Frage mit „doch“ markieren.",
      ar: "أختار doch عندما أرفض مضمون سؤال منفي وأجيب بالإيجاب في الأمثلة المعطاة.",
      evidence: {
        exerciseIds: ["e27", "rq3"],
        taskIds: ["practice:a1-08:e27", "flow-practice:a1-08:e27", "reading:r1:rq3"],
        labelAr: "أكمل جواب السؤال المنفي في e27، ثم حدّد سبب جواب أميرة بـDoch في سؤال فهم القراءة rq3؛ يلزم الصواب في كليهما.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einem kurzen Lesetext wichtige Informationen zu Kleidungsstücken, Größen und Preisen entnehmen.",
      ar: "أستخرج معلومات محددة عن الملابس والمقاسات والأسعار من نص قصير.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: ["reading:r1:rq1", "reading:r1:rq2", "reading:r1:rq3", "reading:r1:rq4", "reading:r1:rq5"],
        labelAr: "أجب عن أسئلة فهم القراءة rq1–rq5 كلها إجابة صحيحة؛ فتح النص وحده لا يُسجّل دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z10",
      de: "Ich kann in kurzen Einkaufsdialogen Kleidungsstück, Farbe und Preis heraushören.",
      ar: "ألتقط اسم قطعة الملابس واللون والسعر من حوارين قصيرين.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب عن أسئلة الاستماع الثلاثة q1–q3 كلها إجابة صحيحة، بما فيها السعر والقطعة التي ترتديها آنا.",
        completion: "all-correct",
      },
    },
    {
      id: "z11",
      de: "Ich kann zwei kurze Sätze über Kleidung und Farbe schriftlich formulieren.",
      ar: "أكتب جملتين قصيرتين عن قطعة ملابس ولونها باستعمال tragen وsein.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-08:w1"],
        labelAr: "اكتب المطلوب في w1 بجملتين كاملتين، مع تصريف tragen ووصف اللون بعد sein.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "كيف تصف لون قميص بالألمانية بجملة كاملة؟ لاحظ الفرق بين: Das Hemd ist rot وDie Jacke ist blau.",
    motivatingQuestionDe: "Wie findest du meine Jacke?",
    contextAr:
      "نتدرّب في موقف متجر ملابس على تسمية قطع وألوان مختارة، ووصف اللون بجملة خبرية، والسؤال عن الرأي والمقاس. هذه أمثلة تدريبية وليست قائمة بكل ما يقال في المتجر.",
    contextDe: "Diese Hose ist sehr schön!",
    connectionToPreviousAr:
      "تعلمت في الدرس السابق الأرقام والأسعار. هنا نضيف مفردات الملابس والألوان وبعض الأسئلة المناسبة للموقف.",
    activateVocabulary: [
      { de: "die Kleidung", ar: "الملابس" },
      { de: "das Hemd", ar: "القميص" },
      { de: "die Hose", ar: "البنطال" },
      { de: "die Farbe", ar: "اللون" },
      { de: "tragen", ar: "يرتدي" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "الملابس والألوان + الصفات الخبرية",
      titleDe: "Kleidung, Farben und prädikative Adjektive",
      explanationAr:
        "احفظ اسم قطعة الملابس مع أداته:\n• مذكّر: **der** Pullover · **der** Mantel · **der** Rock · **der** Schuh\n• مؤنّث: **die** Hose · **die** Jacke · **die** Mütze · **die** Bluse · **die** Socke\n• محايد: **das** Hemd · **das** Kleid · **das** T-Shirt\nجنس الاسم خاصية معجمية؛ لا توجد حيلة واحدة مضمونة تستنتجه من شكل القطعة.\n\n**انتبه إلى المفرد والجمع:** المفرد **der Schuh** وجمعه **die Schuhe**؛ والمفرد **die Socke** وجمعها **die Socken**. أمّا **die Jeans** فتُستعمل للمفرد وللجمع بالصورة نفسها، ويبيّن السياق العدد. وللإشارة إلى زوج من الأحذية نقول **ein Paar Schuhe**.\n\n**ألوان في صيغتها الوصفية:** rot · blau · grün · gelb · schwarz · weiß · braun · grau · orange · rosa · lila. تُكتب الصفة بحرف صغير حين تصف اسماً: **Die Jacke ist rot.** وإذا استُعمل اسم اللون اسماً مستقلاً كُتب بحرف كبير: **Rot ist meine Lieblingsfarbe.**\n\n**الصفة الخبرية بعد sein:** في **Das Hemd ist rot** و**Die Schuhe sind rot** تبقى الصفة في صورتها الأساسية؛ الذي يتغير هنا هو فعل sein مع الفاعل: **ist/sind**. لا تأخذ الصفة في هذا الموقع نهايةً لمطابقة الاسم.\n\nنركّز في هذا الدرس على جمل وصفية من نوع **Das Kleid ist rosa/orange/lila**. لا نعمّم منها قاعدة على الصفة قبل الاسم؛ فالصفة النعتية تتأثر بالحالة والجنس والعدد ونوع الأداة، وهذا نطاق مؤجل إلى كتلة لاحقة. وألوان مثل rosa وlila وorange لها استعمالات كتابية مختلفة قبل الاسم؛ لذلك لا نقرر لها قاعدة استثنائية عامة هنا.",
      whyAr:
        "اختيرت الصفة الخبرية لتكوين جمل وصفية قصيرة من دون تقديم جدول نهايات الصفة قبل الاسم؛ هذا تحديدٌ لنطاق الدرس، لا ادعاءٌ بأن الوصف يقتصر على هذه الصيغة أو أن النهايات تخص مستوى امتحان بعينه.\n\nاخترنا الملابس لأنها سياق مناسب لمفردات القطع والألوان والمقاسات. ويتضمن نموذج Goethe الرسمي لـA1 موضوع **Einkaufen** في مهمة شفهية لطلب المعلومات، ومن بطاقاته مثال عن **Schuhe**؛ وهذا يبرر التدريب على السياق، لكنه لا يعني أن كل امتحان يطرح الموضوع أو هذه الأفعال بعينها.\n\nتُراجع أداة الاسم بوصفها جزءاً من المفردة. لا نعتمد على ربط جنس الاسم بشكل القطعة أو طول الكلمة؛ احفظ مثلاً **der Schuh** و**das Hemd** كما هما.",
      table: {
        title: "الملابس والألوان",
        columns: ["القطعة", "العربية", "لون", "العربية"],
        rows: [
          { label: "das Hemd", cells: ["القميص", "rot", "أحمر"] },
          { label: "die Hose", cells: ["البنطال", "blau", "أزرق"] },
          { label: "die Jacke", cells: ["السترة", "grün", "أخضر"] },
          { label: "das Kleid", cells: ["الفستان", "gelb", "أصفر"] },
          { label: "der Pullover", cells: ["الكنزة", "schwarz", "أسود"] },
          { label: "die Schuhe (جمع)", cells: ["الأحذية", "weiß", "أبيض"] },
          { label: "die Socken", cells: ["الجوارب", "braun", "بني"] },
          { label: "die Mütze", cells: ["القبعة", "grau", "رمادي"] },
        ],
      },
      examples: [
        { de: "Das Hemd ist rot.", ar: "القميص أحمر." },
        { de: "Meine Jacke ist blau.", ar: "سترتي زرقاء." },
        { de: "Die Schuhe sind schwarz.", ar: "الأحذية سوداء. (فاعل جمع ⇐ sind)" },
        { de: "Das Kleid ist sehr schön.", ar: "الفستان جميل جداً." },
        { de: "Der Pullover ist warm.", ar: "الكنزة دافئة." },
        {
          de: "Die Schuhe sind schwarz und die Socken sind weiß.",
          ar: "الأحذية سوداء والجوارب بيضاء. (الصفتان بعد sein بلا نهاية)",
        },
        {
          de: "Meine Mütze ist grau, nicht braun.",
          ar: "قبّعتي رمادية لا بنّية.",
        },
        {
          de: "Ist die Bluse rosa? — Ja, sie ist rosa.",
          ar: "هل البلوزة زهرية؟ — نعم، هي زهرية. (rosa لا تتغيّر)",
        },
      ],
      comparisonWithArabic:
        "في العربية نقول «القميص أحمر» وقد لا نذكر فعلاً رابطاً في المضارع؛ كما تتبدل الصفة بحسب جنس الاسم: **القميص أحمر، السترة حمراء**. أمّا الألمانية فتضع **sein** في الجملة الخبرية: **Das Hemd ist rot. Die Jacke ist rot.** وتبقى الصفة الخبرية بلا نهاية في المثالين.\n\nإذن لا تنقل نهاية التأنيث العربية إلى الصفة الألمانية بعد **sein**: **Die Jacke ist rot** لا **Die Jacke ist rote**. كذلك يتغير الفعل مع الفاعل: **Die Schuhe sind schwarz**. لا تُسقط رابط **ist/sind** من الجملة الألمانية.",
      eselsbruecke:
        "**بعد sein تبقى الصفة الخبرية في صورتها الأساسية:** Das Hemd ist rot · Die Schuhe sind rot. واحفظ أداة كل اسم معه: der Schuh، die Socke، das Hemd.",
      commonMistakes: [
        {
          wrong: "Das Hemd rot.",
          right: "Das Hemd ist rot.",
          whyAr:
            "في هذه الجملة الخبرية الكاملة نحتاج صيغة الفعل sein مع الفاعل؛ لذلك نقول ist مع das Hemd: Das Hemd ist rot.",
          classification: "error",
        },
        {
          wrong: "Die Schuhe ist neu.",
          right: "Die Schuhe sind neu.",
          whyAr:
            "في الجملة die Schuhe جمع der Schuh، لذا يطابقه الفعل الجمع sind. للمفرد نقول der Schuh ist neu.",
          classification: "error",
        },
        {
          wrong: "Die Jacke ist rote.",
          right: "Die Jacke ist rot.",
          whyAr:
            "بعد sein تأتي الصفة الخبرية بلا نهاية: Die Jacke ist rot. لا نضيف نهاية التأنيث إلى الصفة في هذا التركيب.",
          classification: "error",
        },
        {
          wrong: "Die Bluse ist rosane.",
          right: "Die Bluse ist rosa.",
          whyAr:
            "في هذا المثال جاءت الصفة بعد sein، فتُستعمل في صورتها الأساسية: rosa. أمّا الصيغ قبل الاسم فلها استعمالات مختلفة ولا تُحسم بقاعدة واحدة لجميع الألوان.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "الصفة الخبرية أم النعتية؟",
        content:
          "في هذا الدرس نستعمل الصفة خبرية بعد sein: Das Hemd ist rot. أمّا إذا سبقت الصفة الاسم فتدخل في نظام تصريف يتأثر بالحالة والجنس والعدد ونوع الأداة؛ هذا النظام الكامل خارج نطاق هذه الكتلة. استخدم الجمل الخبرية في التدريبات ولا تخلط بين الموقعين.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل tragen + السؤال عن الرأي (Wie findest du...?)",
      titleDe: "Das Verb „tragen“ und „Wie findest du...?“",
      explanationAr:
        "**أولاً: tragen.** معناه «يرتدي» أو «يحمل» بحسب المفعول والسياق. في المضارع يتغير حرف الجذر في صيغتي **du** و**er/sie/es**: **ich trage · du trägst · er/sie/es trägt · wir tragen · ihr tragt · sie/Sie tragen**. احفظ هاتين الصيغتين مع الفعل؛ فليست كل الأفعال التي فيها a تتبع هذا النمط. تشبهه في هذا التصريف أفعال مثل **fahren: du fährst** و**schlafen: du schläfst**.\n\n**ثانياً: السؤال عن الرأي بـfinden.** في هذا السياق تعني **finden** «ما رأيك في/أجد»، لا «أعثر على»: **Wie findest du meine Jacke? — Ich finde sie schön.** يأتي الشيء مفعولاً به، ويمكن أن تليه صفة تصف رأيك: **Ich finde das Kleid schön.** صيغ الفعل هنا: **ich finde · du findest · er/sie/es findet**.\n\n**ثالثاً: doch مع السؤال المنفي.** إذا كان السؤال يحتوي على نفي وأردت أن ترفض النفي وتجيب بالإيجاب، فاستعمل **doch**: **Gefällt dir die Jacke nicht? — Doch, sie gefällt mir.** أما **Nein** فيقدّم جواباً سلبياً يؤكد النفي: **Nein, sie gefällt mir nicht.** هذا وصف لجواب هذا النوع من الأسئلة، لا قاعدة عن كل استعمالات الكلمة.\n\nللمقارنة مع العربية، يمكن تذكّر **بلى** مع **doch** في هذا المثال تحديداً، لكن لا تترجم الكلمتين آلياً في كل سياق.",
      whyAr:
        "يُحفظ تصريف **tragen** في المفرد الثاني والثالث، حيث تظهر **ä**: **trägst/trägt**؛ أما **wir tragen** و**ihr tragt** فبلا Umlaut. لا نستنتج التغيير من حرف a وحده في كل الأفعال.\n\nتُقدَّم **finden** هنا في سؤال رأي مع أمثلة قصيرة: **Wie findest du …?** و**Ich finde … schön**. ويدرب سؤال منفي واحد على فرق عملي: في السياق المحدد **doch** يرفض النفي، و**nein** يوافقه. اخترنا حواراً تسوقياً للتدريب، ولا ندّعي أن **doch** بندٌ مضمون في اختبار Goethe A1.",
      table: {
        title: "تصريف tragen",
        columns: ["الضمير", "trage/trägst/trägt", "مثال"],
        rows: [
          { label: "ich", cells: ["trage", "Ich trage ein Hemd."] },
          { label: "du", cells: ["trägst", "Was trägst du?"] },
          { label: "er/sie/es", cells: ["trägt", "Sie trägt ein Kleid."] },
          { label: "wir", cells: ["tragen", "Wir tragen Jacken."] },
          { label: "ihr", cells: ["tragt", "Was tragt ihr?"] },
          { label: "sie/Sie", cells: ["tragen", "Sie tragen Schuhe."] },
        ],
      },
      examples: [
        { de: "Ich trage heute ein Hemd.", ar: "أرتدي اليوم قميصاً." },
        { de: "Wie findest du meine Jacke?", ar: "ما رأيك في سترتي؟" },
        {
          de: "Ich finde das Kleid sehr schön.",
          ar: "أجد الفستان جميلاً جداً.",
        },
        {
          de: "Was trägst du morgen? — Ich trage einen Mantel.",
          ar: "ماذا سترتدي غداً؟ — سأرتدي معطفاً. (du ⇐ trägst)",
        },
        {
          de: "Wir tragen alle Jeans.",
          ar: "كلّنا نرتدي جينزاً. (جمع ⇐ الجذر يعود a)",
        },
        {
          de: "Wie findest du diese Schuhe? — Ich finde sie zu teuer.",
          ar: "ما رأيك في هذه الأحذية؟ — أجدها غالية جداً.",
        },
        {
          de: "Gefällt dir die Mütze nicht? — Doch, sie ist super!",
          ar: "ألا تعجبك القبّعة؟ — بلى، إنّها رائعة! (سؤال منفيّ ⇐ doch)",
        },
        {
          de: "Trägst du keine Brille? — Doch, ich trage eine Brille.",
          ar: "ألا ترتدي نظّارة؟ — بلى، أرتدي نظّارة.",
        },
      ],
      comparisonWithArabic:
        "**١. السؤال عن الرأي:** العربية تقول «ما رأيك في السترة؟»، وفي هذا الموقف الألمانية تستعمل الصيغة **Wie findest du …?**. تعلّم القالب الألماني مع مفعوله بدلاً من نقل ترتيب العربية حرفياً.\n\n**٢. تصريف tragen:** احفظ الصيغ الألمانية كما هي؛ لا تفترض أن تغيّر الجذر أو ثباته في العربية والألمانية يتطابق.\n\n**٣. doch:** في جواب السؤال المنفي، **بلى** تذكير عربي مفيد لـ**doch** عندما يكون الرد إيجابياً ومخالفاً للنفي. هذه مقابلة وظيفية في هذا السياق فقط، لا ترجمة ثابتة للكلمة في جميع استعمالاتها.",
      eselsbruecke:
        "**trägst / trägt**: راقب النقطتين فوق ä في صيغتي المخاطب والغائب المفرد؛ وتذكّر أن **wir tragen / ihr tragt** بلا Umlaut.\n**doch**: سؤال منفي + رد إيجابي يناقض النفي ← **Doch, …**؛ تأكيد النفي ← **Nein, …**. أضف الجملة بعد كلمة الجواب لتوضيح المقصود.",
      commonMistakes: [
        {
          wrong: "Du tragst ein Hemd.",
          right: "Du trägst ein Hemd.",
          whyAr:
            "في تصريف هذا الفعل نقول du trägst وer/sie/es trägt؛ لا ننقل صيغة ich trage إلى du.",
          classification: "error",
        },
        {
          wrong: "Wir trägen Jacken.",
          right: "Wir tragen Jacken.",
          whyAr:
            "في صيغ الجمع الواردة هنا لا يظهر Umlaut: wir/sie tragen وihr tragt.",
          classification: "error",
        },
        {
          wrong: "Wie finden du das Kleid?",
          right: "Wie findest du das Kleid?",
          whyAr:
            "مع الفاعل du نقول findest؛ ومع er/sie/es نقول findet، لأن صيغة الفعل تتغير مع الضمير.",
          classification: "error",
        },
        {
          wrong: "Gefällt dir das Hemd nicht? — Ja, es gefällt mir.",
          right: "Gefällt dir das Hemd nicht? — Doch, es gefällt mir.",
          whyAr:
            "المقصود هنا تأكيد أن القميص يعجب المتكلم، أي رفض النفي في السؤال؛ لذلك تكون صيغة الرد الواضحة Doch. وقد تُفهم ja على أنها موافقة على النفي، فلا نعرضها هنا جواباً مكافئاً.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "tragen أم anziehen؟",
        content:
          "**tragen** يصف ارتداء الشيء أو حمله: **Ich trage einen Mantel.** أما **anziehen** فيعني وضع قطعة الملابس/ارتداءها بوصفه فعلاً: **Ich ziehe den Mantel an.** وهو فعل ذو بادئة منفصلة: **Ich ziehe … an.** يختلف اختيار الفعل بحسب ما تريد قوله؛ ليسا بديلين متطابقين في كل سياق.",
      },
    },
    {
      id: "t3",
      titleAr: "أيّ قميص؟ هذا القميص — dieser وwelcher",
      titleDe: "Welcher Pullover? Dieser Pullover!",
      explanationAr:
        "في متجر الملابس نحتاج إلى السؤال «أيّ؟» والإشارة إلى قطعة. نستعمل **welcher-/welche-/welches-** للسؤال، و**dieser/diese/dieses** للإشارة. في أمثلة الرفع:\n**der Pullover → welcher Pullover? → dieser Pullover**\n**die Hose → welche Hose? → diese Hose**\n**das Hemd → welches Hemd? → dieses Hemd**\n**die Schuhe (جمع) → welche Schuhe? → diese Schuhe**\n\nمع مفعول مذكر في النصب نقول **diesen Mantel** و**welchen Mantel**: **Ich nehme diesen Mantel. Welchen Mantel möchten Sie?** في الأمثلة المؤنثة والمحايدة والجمع الواردة هنا تبقى هذه الصيغ كما هي بين الرفع والنصب: **diese Hose / dieses Hemd / diese Schuhe**.\n\nويمكن استعمال **dieses** وحدها إذا كان الاسم مفهوماً: **Welches Hemd möchten Sie? — Dieses, bitte.** أما **dieser-** فيشير إلى شيء في السياق؛ و**der/die/das** أداة تعريف في هذه التراكيب، ويتوقف معنى الإشارة أيضاً على التركيب والنبر. لا نعمّم هنا على جميع الحالات الإعرابية؛ نتدرّب على أمثلة الرفع والنصب الواردة فقط.",
      whyAr:
        "هذه الصيغ نافعة في سؤال اختيار قطعة أو الإشارة إليها في حوار تمثيلي. ويعرض نموذج Goethe A1 الرسمي موضوع التسوق مثالاً في مهمة السؤال عن المعلومات، لكنه لا يفرض هذه الكلمات أو القاعدة بعينها في كل امتحان.\n\nابدأ بالأشكال الظاهرة في الجدول: أداة الاسم تساعد على تذكّر welcher/dieser، ثم لاحظ صيغة النصب المذكر **welchen/diesen**. لا نقول إن كل الحالات متطابقة؛ لهذا حُدّدت أمثلة الدرس بالرفع والنصب.",
      table: {
        title: "صيغ مختارة للسؤال والإشارة",
        columns: ["الأداة", "welch- (أيّ؟)", "dies- (هذا)"],
        rows: [
          {
            label: "der Pullover",
            cells: ["welcher Pullover?", "dieser Pullover"],
          },
          { label: "die Hose", cells: ["welche Hose?", "diese Hose"] },
          { label: "das Hemd", cells: ["welches Hemd?", "dieses Hemd"] },
          {
            label: "die Schuhe (ج)",
            cells: ["welche Schuhe?", "diese Schuhe"],
          },
          {
            label: "مع Akkusativ المذكّر",
            cells: ["welchen Mantel?", "diesen Mantel"],
          },
        ],
      },
      examples: [
        { de: "Welcher Pullover gefällt dir?", ar: "أيّ كنزة تعجبك؟" },
        { de: "Dieses Hemd ist zu klein.", ar: "هذا القميص صغير جداً." },
        { de: "Welche Größe haben Sie?", ar: "ما مقاسك؟" },
        {
          de: "Ich nehme diesen Mantel.",
          ar: "آخذ هذا المعطف. (مفعول به مذكّر ⇐ -en)",
        },
        { de: "Diese Schuhe sind sehr bequem.", ar: "هذه الأحذية مريحة جداً." },
        {
          de: "Welches Hemd möchten Sie? — Dieses, bitte.",
          ar: "أيّ قميص تريد؟ — هذا، من فضلك. (بلا اسم)",
        },
        {
          de: "Welche Jacke nimmst du? — Diese Jacke.",
          ar: "أيّ سترة ستأخذ؟ — هذه السترة.",
        },
      ],
      comparisonWithArabic:
        "للعربية والألمانية صيغ إشارة تتأثر بالجنس والعدد، لكن لا تتطابق أجزاؤها كلمةً بكلمة. في الألمانية تتغير صيغة **dieser-** و**welcher-** أيضاً مع الحالة في بعض المواضع: **dieser Mantel** في الرفع، و**diesen Mantel** مفعولاً به. تعلّم الاسم مع أداته والصيغة في المثال، ولا تفترض أن هذا/هذه العربية يقابل دائماً نهاية ألمانية واحدة.",
      eselsbruecke:
        "لأمثلة هذا الدرس: **der → dieser/welcher** · **die → diese/welche** · **das → dieses/welches** · **الجمع → diese/welche**. وإذا كان المفعول مذكراً في النصب: **diesen/welchen**.",
      commonMistakes: [
        {
          wrong: "Welche Pullover möchten Sie?",
          right: "Welchen Pullover möchten Sie?",
          whyAr:
            "Pullover مفعول به بعد möchten في هذا السؤال، وهو مذكر؛ صيغة النصب هنا welchen.",
          classification: "error",
        },
        {
          wrong: "Dieses Hose ist schön.",
          right: "Diese Hose ist schön.",
          whyAr:
            "Hose مؤنث؛ لذلك نقول في الرفع diese Hose لا dieses Hose، فصيغة الإشارة توافق جنس الاسم.",
          classification: "error",
        },
        {
          wrong: "Ich nehme dieser Mantel.",
          right: "Ich nehme diesen Mantel.",
          whyAr:
            "Mantel مفعول به مذكر في النصب بعد nehmen؛ الصيغة هنا diesen.",
          classification: "error",
        },
        {
          wrong: "Welche ist dein Größe?",
          right: "Welche Größe haben Sie?",
          whyAr:
            "في التعبير المقصود تأتي welche قبل الاسم المؤنث Größe، وتُصاغ الجملة بالسؤال الشائع Welche Größe haben Sie?.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "عائلة تكبر لاحقاً",
        content:
          "هنا نراجع صيغ الرفع والنصب المختارة من **welcher-** و**dieser-**. تظهر الصيغ في حالات أخرى أيضاً، لكن هذا الدرس لا يشرح تصريفهما كاملاً.",
      },
    },
    {
      id: "t4",
      titleAr: "يعجبني هذا! — أفعال الدّاتيف gefallen وpassen وstehen",
      titleDe: "Das gefällt mir: Dativ-Verben beim Einkaufen",
      explanationAr:
        "**النمط الذي ندرّب عليه:** الشيء هو الفاعل النحوي، والشخص يأتي في الداتيف مع الأفعال الثلاثة في هذه المعاني:\n• **Das Hemd gefällt mir.** — القميص يعجبني.\n• **Die Hose passt mir.** — البنطال يناسبني من حيث المقاس.\n• **Das Kleid steht dir gut.** — الفستان يليق بك.\n\nفي هذه الأمثلة نقول **mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen** للشخص. احفظ الفعل مع البنية والضمير في الجملة؛ وليس معنى ذلك أن الداتيف له مقابل واحد في كل استعمالات الألمانية.\n\nمع **gefallen** يطابق الفعل الفاعل: **Der Pullover gefällt mir** (مفرد)، و**Die Schuhe gefallen mir** (جمع). الضمير **mir** لا يغيّر تصريف الفعل.\n\nللتفريق في سياق الملابس: **gefallen** يعبّر عن الإعجاب أو الانطباع؛ **passen** قد يصف ملاءمة المقاس للشخص (**Die Hose passt mir**)؛ و**stehen** يصف كيف تبدو قطعة أو لون على شخص (**Blau steht dir gut**). ولـ**passen** استعمال آخر مع **zu** بمعنى الانسجام مع شيء: **Die Farbe passt zur Hose**. هذه فروق مفيدة في الأمثلة، لا تقسيم حصري لكل استعمالات الأفعال.\n\nيمكن تقديم الداتيف في أول الجملة: **Mir gefällt der Pullover.** يبقى الفعل **gefällt** موافقاً للفاعل **der Pullover**، لا للضمير **mir**. كما يمكن قول **Wie gefällt Ihnen das?** في المخاطبة الرسمية.",
      whyAr:
        "يصف IDS Grammis بناء **gefallen** في هذا المعنى بفاعل في الرفع ومتمّم في الداتيف، ويورد أمثلة مثل **Gefällt dir …?**. وتعرض مداخل الأفعال لدى Grammis وDuden استعمال **stehen** مع شخص في الداتيف لبيان ما يليق به، و**passen** للمقاس أو للملاءمة بحسب السياق. لذلك نعرض البنى في جمل قصيرة، ونبيّن المعنى المقصود في المثال بدلاً من وصفها بأنها «كل لغة المتجر».\n\nقد يصادف المتعلم تراكيب داتيف أخرى في دروس سابقة أو لاحقة؛ لا نزعم أن هذا أول لقاء له بالحالة. وفي هذا القسم نركز على أفعال وجمل بعينها، ولا ندّعي أن كل الأفعال التي تأخذ الداتيف تتبع معنى أو ترتيباً واحداً.",
      table: {
        title: "من يفعل ومن يتأثّر",
        columns: [
          "المعنى",
          "الجملة الألمانية",
          "الفاعل (Nominativ)",
          "المستقبِل (Dativ)",
        ],
        rows: [
          {
            label: "يعجبني",
            cells: ["Das Hemd gefällt mir.", "das Hemd", "mir"],
          },
          {
            label: "يعجبني (جمع)",
            cells: ["Die Schuhe gefallen mir.", "die Schuhe", "mir"],
          },
          {
            label: "يناسبك",
            cells: ["Die Hose passt dir.", "die Hose", "dir"],
          },
          {
            label: "لا يناسبني",
            cells: ["Der Mantel passt mir nicht.", "der Mantel", "mir"],
          },
          {
            label: "يليق بك",
            cells: ["Das Kleid steht dir gut.", "das Kleid", "dir"],
          },
          {
            label: "سؤال البائع",
            cells: ["Wie gefällt Ihnen das?", "das", "Ihnen"],
          },
          {
            label: "بتقديم الدّاتيف",
            cells: ["Mir gefällt der Pullover.", "der Pullover", "mir"],
          },
        ],
      },
      examples: [
        {
          de: "Das Hemd gefällt mir sehr.",
          ar: "القميص يعجبني كثيراً. (فاعل مفرد ⇐ gefällt)",
        },
        {
          de: "Die Schuhe gefallen mir nicht.",
          ar: "الأحذية لا تعجبني. (فاعل جمع ⇐ gefallen)",
        },
        {
          de: "Die Hose passt mir nicht. Haben Sie Größe 42?",
          ar: "البنطال لا يناسبني. هل عندكم مقاس 42؟",
        },
        {
          de: "Das Kleid steht dir wirklich gut!",
          ar: "الفستان يليق بك حقّاً!",
        },
        {
          de: "Wie gefällt Ihnen dieser Mantel?",
          ar: "كيف يعجبك هذا المعطف؟ (Ihnen للمخاطبة المهذّبة)",
        },
        {
          de: "Mir gefällt die Jacke, aber sie ist zu teuer.",
          ar: "السترة تعجبني، لكنّها غالية جداً. (تقديم mir لإبراز الرأي)",
        },
        {
          de: "Das Hemd gefällt mir, aber es passt mir nicht.",
          ar: "القميص يعجبني لكنّه لا يناسب مقاسي. (الفرق بين الفعلين)",
        },
      ],
      comparisonWithArabic:
        "لا تنقل ترتيب الفاعل والمتمّم من ترجمة حرفية؛ احفظ المثال الألماني مع بنيته: **Das Hemd (فاعل) gefällt mir (داتيف)**. وفي الجمع يطابق الفعل الفاعل: **Die Schuhe gefallen mir**.\n\nالعربية تستطيع أن تعبّر عن المعنى بتركيب مختلف، مثل «يعجبني القميص». لا يلزم أن تتطابق علامات الحالة أو مواضع العناصر بين اللغتين. كذلك فإن ترجمة «يعجبني» لا تكفي وحدها لاختيار فعل ألماني: اسأل هل المقصود الإعجاب، ملاءمة المقاس، أم كون القطعة لائقة بالشخص.",
      eselsbruecke:
        "**من يفعل؟** في **Der Pullover gefällt mir** الفاعل هو der Pullover، والشخص في الداتيف.\n**كم قطعة؟** مفرد **gefällt**، جمع **gefallen**.\n**أي معنى؟** المقاس **passen**؛ كيف تبدو عليك **stehen**؛ الانطباع/الإعجاب **gefallen**.",
      commonMistakes: [
        {
          wrong: "Ich gefalle das Hemd.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "هذه الصيغة لا تبني المعنى المقصود مع gefallen: الشيء الذي يعجبك هو الفاعل، والشخص يأتي في الداتيف: Das Hemd gefällt mir.",
          classification: "error",
        },
        {
          wrong: "Die Schuhe gefällt mir.",
          right: "Die Schuhe gefallen mir.",
          whyAr:
            "الفاعل die Schuhe جمع؛ لذلك نقول gefallen. الضمير mir في الداتيف ولا يحدد صيغة الفعل.",
          classification: "error",
        },
        {
          wrong: "Das Hemd gefällt mich.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "في المعنى المقصود من gefallen يأتي الشخص في الداتيف: mir، لا ضمير النصب mich.",
          classification: "error",
        },
        {
          wrong: "Das Hemd gefällt mir, Größe 44 bitte.",
          right: "Das Hemd passt mir nicht, haben Sie Größe 44?",
          whyAr:
            "الجملة الأولى قد تعبّر عن إعجابك بالقميص، لكنها لا تشرح وحدها مشكلة المقاس؛ فهي ليست خطأً نحوياً. عند طلب مقاس آخر، أضف جملة بـpassen أو سؤالاً واضحاً عن المقاس.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Wie gefällt Sie das?",
          right: "Wie gefällt Ihnen das?",
          whyAr:
            "das هو الفاعل؛ والمخاطب يأتي في الداتيف مع gefallen، لذا نقول Ihnen.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "gefallen أم mögen أم finden؟",
        content:
          "هذه الأفعال الثلاثة قد تُترجم أحياناً بكلمة «يعجب» أو «يناسب»، لكن بُنى الجملة ومعانيها تختلف:\n• **gefallen**: الشيء فاعل والشخص في الداتيف: **Der Pullover gefällt mir.**\n• **mögen**: الشخص فاعل والشيء مفعول به: **Ich mag den Pullover.** ويمكن استعماله مع شيء محدد أو مع تفضيل عام بحسب السياق.\n• **finden + Akkusativ + Adjektiv**: يقدّم المتكلم تقييماً: **Ich finde den Pullover schön.**\nهذه صيغ متقاربة في بعض المواقف وليست معانيها متطابقة أو محصورة في تقسيم جامد؛ اختر التركيب الذي يطابق ما تريد قوله.",
      },
    },
  ],

  reading: {
    id: "r1",
    titleDe: "Ein Nachmittag im Kaufhaus",
    titleAr: "عصرٌ في المتجر الكبير",
    textType: "erzaehlung",
    paragraphs: [
      "Es ist Samstagnachmittag. Amira und ihre Freundin Lena gehen zusammen ins Kaufhaus. Amira sucht eine Jacke für den Herbst. Lena braucht nichts, aber sie kommt gern mit. Das Kaufhaus ist groß und voll. Im ersten Stock ist die Damenabteilung.",
      "Amira sieht eine Jacke. Sie ist blau. Die Jacke ist schön, aber sie ist teuer: 89 Euro. „Wie findest du diese Jacke?“, fragt Amira. „Die Farbe gefällt mir sehr“, sagt Lena. „Blau steht dir gut.“",
      "Amira probiert die Jacke an. Leider ist sie zu klein. „Die Jacke passt mir nicht“, sagt Amira traurig. Eine Verkäuferin kommt und fragt: „Welche Größe haben Sie?“ — „Größe 40“, antwortet Amira. Die Verkäuferin bringt die Jacke noch einmal, jetzt in Größe 40.",
      "Jetzt passt die Jacke perfekt. Aber der Preis ist immer noch hoch. „Gefällt dir die Jacke nicht?“, fragt Lena. „Doch, sie gefällt mir sehr“, sagt Amira. „Aber 89 Euro sind zu viel für mich.“",
      "Da sieht Lena einen Mantel. Er ist grau. Der Mantel kostet nur 45 Euro. „Dieser Mantel ist warm und nicht teuer“, sagt sie. Amira probiert den Mantel an. Er passt ihr gut und gefällt ihr auch. Die Farbe ist grau, nicht blau; Grau gefällt Amira auch.",
      "Amira nimmt den Mantel. An der Kasse bezahlt sie fünfzig Euro und bekommt fünf Euro zurück. Draußen ist es kalt. Amira trägt ihren Mantel und lacht: „Der Mantel gefällt mir wirklich. Und ich habe noch Geld für einen Kaffee!“",
    ],
    paragraphsAr: [
      "إنّه بعد ظهر السبت. تذهب أميرة وصديقتها لينا معاً إلى المتجر الكبير. أميرة تبحث عن سترة للخريف. لينا لا تحتاج شيئاً، لكنّها تأتي معها بسرور. المتجر كبير ومزدحم. في الطابق الأوّل قسم النساء.",
      "ترى أميرة سترة. لونها أزرق. السترة جميلة لكنّها غالية: 89 يورو. «ما رأيك في هذه السترة؟» تسأل أميرة. «اللون يعجبني كثيراً» تقول لينا. «الأزرق يليق بك.»",
      "تُجرّب أميرة السترة. للأسف هي صغيرة جداً. «السترة لا تناسب مقاسي» تقول أميرة حزينة. تأتي بائعة وتسأل: «ما مقاسك؟» — «مقاس 40» تجيب أميرة. تُحضِر البائعة السترة مرة أخرى، هذه المرة بمقاس 40.",
      "الآن تناسبها السترة تماماً. لكنّ السعر ما يزال مرتفعاً. «ألا تعجبك السترة؟» تسأل لينا. «بلى، تعجبني كثيراً» تقول أميرة. «لكن المبلغ أكبر مما أستطيع دفعه.»",
      "عندئذٍ ترى لينا معطفاً. لونه رماديّ. يكلّف المعطف 45 يورو فقط. «هذا المعطف دافئ وغير غالٍ» تقول. تُجرّب أميرة المعطف. يناسبها ويعجبها أيضاً. اللون رماديّ لا أزرق؛ والرماديّ يعجب أميرة أيضاً.",
      "تأخذ أميرة المعطف. عند الصندوق تدفع خمسين يورو وتستلم خمسة يوروهات. في الخارج الجوّ بارد. ترتدي أميرة معطفها وتضحك: «المعطف يعجبني حقاً. وما زال معي مالٌ لفنجان قهوة!»",
    ],
    glossary: [
      {
        de: "das Kaufhaus",
        ar: "المتجر الكبير (متعدّد الأقسام)",
        noteAr: "مركّب من kaufen (يشتري) + Haus (بيت).",
      },
      {
        de: "die Damenabteilung",
        ar: "قسم النساء",
        noteAr: "Damen (سيّدات) + Abteilung (قسم) — كلمة تراها على اللافتات.",
      },
      {
        de: "probiert … an (anprobieren)",
        ar: "يُجرّب (ملابس)",
        noteAr: "فعل منفصل: sie probiert die Jacke an.",
      },
      {
        de: "die Verkäuferin",
        ar: "البائعة",
        noteAr: "المذكّر der Verkäufer؛ اللاحقة -in تصنع المؤنّث.",
      },
      {
        de: "die Größe",
        ar: "المقاس",
        noteAr: "Welche Größe haben Sie? طريقة مهذبة شائعة للسؤال عن المقاس.",
      },
      {
        de: "passt (passen)",
        ar: "يناسب (مقاساً)",
        noteAr: "مع الدّاتيف: Die Jacke passt mir.",
      },
      {
        de: "gefällt (gefallen)",
        ar: "يعجب",
        noteAr: "مع الدّاتيف: Der Mantel gefällt mir.",
      },
      {
        de: "steht (stehen)",
        ar: "يليق بـ",
        noteAr: "Blau steht dir gut — ليس معناه هنا «يقف».",
      },
      {
        de: "der Preis",
        ar: "السعر",
        noteAr: "Der Preis ist hoch — نقول عن السعر hoch وعن السلعة teuer.",
      },
      {
        de: "die Kasse",
        ar: "الصندوق (مكان الدفع)",
        noteAr: "an der Kasse bezahlen — يدفع عند الصندوق.",
      },
      {
        de: "bekommt … zurück (zurückbekommen)",
        ar: "يستلم الباقي",
        noteAr: "فعل منفصل: sie bekommt fünf Euro zurück.",
      },
      {
        de: "doch",
        ar: "بلى",
        noteAr: "تُستعمل هنا لرفض النفي والإجابة بالإيجاب؛ أما nein فيؤكد النفي.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "لماذا لا تشتري أميرة السترة؟",
        questionDe: "Warum kauft Amira die Jacke nicht?",
        options: [
          "Sie ist zu teuer.",
          "Sie gefällt ihr nicht.",
          "Die Farbe ist hässlich.",
          "Es gibt keine Größe 40.",
        ],
        correctIndex: 0,
        explanation:
          "أعجبتها السترة وناسبها مقاسها بعد التبديل، لكن المبلغ أكبر مما تستطيع دفعه: Aber 89 Euro sind zu viel für mich.",
        errorType: "vocabulary",
        paragraph: 4,
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "ما مشكلة السترة أوّل مرّة؟",
        questionDe: "Was ist das Problem mit der ersten Jacke?",
        options: [
          "Sie ist zu klein.",
          "Sie ist zu groß.",
          "Sie ist schmutzig.",
          "Sie ist grau.",
        ],
        correctIndex: 0,
        explanation:
          "Leider ist sie zu klein ثمّ Die Jacke passt mir nicht — مشكلة مقاس لا ذوق.",
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "لماذا أجابت أميرة بـ Doch؟",
        questionDe: "Warum antwortet Amira mit Doch?",
        options: [
          "Weil die Frage negativ war und die Jacke ihr gefällt.",
          "Weil sie die Jacke nicht mag.",
          "Weil sie kein Geld hat.",
          "Weil Lena die Jacke kauft.",
        ],
        correctIndex: 0,
        explanation:
          "في هذا السياق يرفض Doch النفي في السؤال ويؤكد أن السترة تعجب أميرة؛ لا نعمّم هذا التمييز على كل سؤال منفي أو على كل استعمال لـja.",
        errorType: "grammar",
        paragraph: 4,
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "كم استلمت أميرة عند الصندوق؟",
        questionDe: "Wie viel Geld bekommt Amira an der Kasse zurück?",
        options: ["Fünf Euro", "Fünfzig Euro", "Vierzig Euro", "Nichts"],
        correctIndex: 0,
        explanation: "bekommt fünf Euro zurück — دفعت خمسين وثمن المعطف 45.",
        errorType: "vocabulary",
        paragraph: 6,
      },
      {
        id: "rq5",
        type: "multiple-choice",
        instructionAr: "أيّ فعل استعملته أميرة للحديث عن المقاس؟",
        questionDe: "Welches Verb benutzt Amira für die Größe?",
        options: ["passen", "gefallen", "stehen", "tragen"],
        correctIndex: 0,
        explanation:
          "Die Jacke passt mir nicht — passen للمقاس، وgefallen للذوق، وstehen للّياقة.",
        errorType: "vocabulary",
        paragraph: 3,
      },
    ],
    redemittel: [
      {
        de: "Wie findest du …? / Wie gefällt Ihnen …?",
        ar: "ما رأيك في …؟ / كيف يعجبك …؟",
      },
      {
        de: "Das gefällt mir (nicht).",
        ar: "هذا يعجبني / لا يعجبني.",
      },
      {
        de: "Es passt mir nicht. Haben Sie Größe …?",
        ar: "لا يناسب مقاسي. هل عندكم مقاس …؟",
      },
      {
        de: "Welche Größe haben Sie?",
        ar: "ما مقاسك؟ (سؤال البائع بأدب)",
      },
      {
        de: "Das ist zu teuer.",
        ar: "هذا غالٍ جداً.",
      },
      {
        de: "Ich nehme diesen Mantel.",
        ar: "آخذ هذا المعطف.",
      },
      {
        de: "Kann ich das anprobieren?",
        ar: "هل يمكنني تجريب هذا؟",
      },
      {
        de: "Doch, … (auf eine negative Frage)",
        ar: "بلى، … (جواباً على سؤال منفيّ)",
      },
    ],
    discussionAr:
      "لو كنتَ مكان أميرة، اكتب أو جرّب أن تقول جملتين: الأولى تعبّر عن الإعجاب بـgefallen، والثانية عن المقاس بـpassen أو السعر. هذا السؤال مفتوح للتدريب ولا يُسجَّل دليلاً على أداء شفهي أو نطق.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "في متجر الملابس",
        lines: [
          {
            speaker: "Verkäuferin",
            de: "Guten Tag! Kann ich Ihnen helfen?",
            ar: "نهارك سعيد! هل أستطيع مساعدتك؟",
          },
          {
            speaker: "Mona",
            de: "Ja, ich suche eine Jacke.",
            ar: "نعم، أبحث عن سترة.",
          },
          {
            speaker: "Verkäuferin",
            de: "Welche Farbe möchten Sie?",
            ar: "أي لون تريدين؟",
          },
          {
            speaker: "Mona",
            de: "Blau, bitte.",
            ar: "باللون الأزرق، من فضلك.",
          },
          {
            speaker: "Verkäuferin",
            de: "Hier ist eine Jacke in Blau. Wie finden Sie sie?",
            ar: "هذه سترة باللون الأزرق. ما رأيك بها؟",
          },
          {
            speaker: "Mona",
            de: "Ich finde sie sehr schön! Was kostet sie?",
            ar: "أجدها جميلة جداً! بكم؟",
          },
          {
            speaker: "Verkäuferin",
            de: "Neununddreißig Euro.",
            ar: "تسعة وثلاثون يورو.",
          },
        ],
      },
      {
        id: "l2",
        title: "وصف ما يرتديه الأصدقاء",
        lines: [
          {
            speaker: "Karim",
            de: "Schau mal! Ich habe ein Hemd.",
            ar: "انظر! لدي قميص.",
          },
          {
            speaker: "Anna",
            de: "Oh, sehr schön! Es ist rot, oder?",
            ar: "أوه، جميل جداً! إنه أحمر، صحيح؟",
          },
          {
            speaker: "Karim",
            de: "Ja, Rot ist meine Lieblingsfarbe.",
            ar: "نعم، الأحمر لوني المفضل.",
          },
          {
            speaker: "Anna",
            de: "Und ich trage heute ein Kleid. Das Kleid ist blau.",
            ar: "وأنا أرتدي اليوم فستاناً. الفستان أزرق.",
          },
          {
            speaker: "Karim",
            de: "Das Kleid finde ich sehr elegant!",
            ar: "أجد الفستان أنيقاً جداً!",
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
        questionDe: "Was sucht Mona?",
        questionAr: "ماذا تبحث منى؟",
        options: [
          "eine Jacke in Blau",
          "ein Hemd",
          "ein Kleid",
          "Schuhe",
        ],
        correctIndex: 0,
        explanation: "أجابت Mona: Blau, bitte، ثم عرضت البائعة eine Jacke in Blau.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet die Jacke?",
        questionAr: "بكم السترة؟",
        options: ["39 Euro", "30 Euro", "33 Euro", "90 Euro"],
        correctIndex: 0,
        explanation: "قالت البائعة: Neununddreißig Euro = 39.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was trägt Anna?",
        questionAr: "ماذا ترتدي آنا؟",
        options: [
          "ein Kleid",
          "ein Hemd",
          "eine Jacke",
          "eine Mütze",
        ],
        correctIndex: 0,
        explanation: "قالت آنا: Ich trage heute ein Kleid. Das Kleid ist blau.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "نطق الألوان والملابس: ei، au، ü، sch وطول الصوت",
    items: [
      { de: "weiß", ar: "أبيض", note: "تقريباً /vaɪ̯s/: ei مثل /aɪ̯/، وß صوت /s/ واحد، لا سّ مشددة؛ ڤايس تقريب كتابي." },
      { de: "blau", ar: "أزرق", note: "au يقترب من /aʊ̯/؛ «بلاو» تقريب كتابي للصوت." },
      { de: "grün", ar: "أخضر", note: "ü هو /yː/: اجعل اللسان قريباً من وضع /i/ مع تدوير الشفتين كما في /u/؛ لا يطابق ياءً عربية تماماً." },
      { de: "gelb", ar: "أصفر", note: "g في البداية /g/ (گ)، لا غ؛ e قصيرة، وb في آخر الكلمة تُنطق قريباً من p." },
      { de: "schwarz", ar: "أسود", note: "sch = /ʃ/ (ش)، w = /v/ (ڤ)، وz = /t͡s/؛ «شڤارتس» تقريب كتابي." },
      { de: "die Schuhe", ar: "الأحذية", note: "Schuh: /ʃuː/؛ h لا يُنطق ويشير هنا إلى طول u، وe الأخيرة في Schuhe صوت ضعيف /ə/." },
    ],
    tip: "تدرّب على فروق واضحة: ei في weiß، au في blau، ü في grün، وsch/w/z في schwarz. التقريب العربي غير مطابق للصوت؛ استمع إلى التسجيل ولا تعتمد عليه وحده.",
    shadowing: [
      {
        de: "Das Hemd ist rot.",
        ar: "القميص أحمر.",
        tip: "rot = /roːt/: o طويلة، لا قصيرة.",
      },
      {
        de: "Meine Jacke ist blau.",
        ar: "سترتي زرقاء.",
        tip: "blau = بلاو (au = آو)",
      },
      {
        de: "Wie findest du das Kleid?",
        ar: "ما رأيك في الفستان؟",
        tip: "Kleid = كلايت (ei = آي)",
      },
      {
        de: "Die Schuhe sind schwarz.",
        ar: "الأحذية سوداء.",
        tip: "schwarz = /ʃvaʁt͡s/؛ sch=/ʃ/، w=/v/، z=/t͡s/.",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "ترجم إلى الألمانية بجملتين كاملتين:",
      prompt: "أرتدي سترة. السترة زرقاء.",
      acceptedAnswers: [
        "Ich trage eine Jacke. Die Jacke ist blau.",
        "Ich trage eine Jacke. Sie ist blau.",
      ],
      sampleAnswer: "Ich trage eine Jacke. Die Jacke ist blau.",
      explanation:
        "اكتب جملة عن اللباس بـIch trage، ثم جملة خبرية عن اللون بـsein. الصفة الخبرية بعد sein تبقى بلا نهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالألوان الصحيحة (rot/blau/grün):",
      template:
        "Der Himmel ist ___ (أزرق). Das Gras ist ___ (أخضر). Blut ist ___ (أحمر).",
      blanks: [
        { correct: "blau", options: ["blau", "grün", "rot"] },
        { correct: "grün", options: ["blau", "grün", "rot"] },
        { correct: "rot", options: ["blau", "grün", "rot"] },
      ],
      explanation: "السماء زرقاء (blau)، العشب أخضر (grün)، الدم أحمر (rot).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich finde das Kleid sehr schön.",
      explanation: "أجد الفستان جميلاً جداً — Ich finde + الاسم + صفة الرأي.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das Hemd ist ___.",
      questionAr: "القميص أحمر.",
      options: ["rot", "rote", "rotes", "roten"],
      correctIndex: 0,
      explanation: "الصفة الخبرية بعد sein لا تتغير: ist rot.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du? — Ich trage eine Jacke.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "مع du: trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل اللون بمعناه:",
      pairs: [
        { left: "weiß", right: "أبيض" },
        { left: "schwarz", right: "أسود" },
        { left: "gelb", right: "أصفر" },
        { left: "braun", right: "بني" },
      ],
      explanation: "أربعة ألوان أساسية — أضفها للألوان التي تعرفها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "Die", "Jacke", "blau", "."],
      correctSentence: "Die Jacke ist blau.",
      explanation: "السترة زرقاء: Die Jacke + ist + blau.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح فعل sein في الجملة:",
      wrongSentence: "Die Schuhe ist schwarz.",
      wrongWord: "ist",
      correctWord: "sind",
      options: ["sind", "sein", "bist", "seid"],
      explanation: "die Schuhe جمع → sind.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ tragen بتصريف صحيح:",
      template: "Ich ___ eine Brille. Du ___ ein Hemd. Anna ___ ein Kleid.",
      blanks: [
        { correct: "trage", options: ["trage", "trägst", "trägt"] },
        { correct: "trägst", options: ["trage", "trägst", "trägt"] },
        { correct: "trägt", options: ["trage", "trägst", "trägt"] },
      ],
      explanation: "ich trage، du trägst، sie trägt — تغيّر a→ä في du/er/sie.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال عن الرأي:",
      prompt: "Meine Jacke. → (اسأل عن رأي شخص آخر في سترتي)",
      acceptedAnswers: [
        "Wie findest du meine Jacke",
        "Wie findest du meine Jacke?",
      ],
      sampleAnswer: "Wie findest du meine Jacke?",
      explanation:
        "في هذا السؤال يأتي الشيء بعد finden: Wie findest du meine Jacke?",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich trage eine Brille.",
      questionAr: "ما معنى الجملة؟",
      options: [
        "أرتدي نظارة",
        "أبحث عن نظارة",
        "أشتري نظارة",
        "أحمل نظارة فقط",
      ],
      correctIndex: 0,
      explanation: "tragen هنا بمعنى ارتداء النظارة على الجسم، لا البحث عنها أو شرائها أو حملها باليد فقط.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الصفة الخبرية بعد sein:",
      wrongSentence: "Das Kleid ist sehr schöne.",
      wrongWord: "schöne",
      correctWord: "schön",
      options: ["schön", "schöne", "schönen", "schönes"],
      explanation: "الصفة الخبرية بعد sein بلا نهاية: ist schön.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Meine Mütze ist rot.",
      explanation:
        "اكتب Meine Mütze ist rot. الصفة rot خبرية بعد sein، وتُكتب بلا نهاية.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالصيغة الصحيحة من dies-:",
      template:
        "___ Hemd ist zu klein. ___ Hose gefällt mir. ___ Pullover ist warm.",
      blanks: [
        { correct: "Dieses", options: ["Dieses", "Diese", "Dieser"] },
        { correct: "Diese", options: ["Diese", "Dieses", "Dieser"] },
        { correct: "Dieser", options: ["Dieser", "Diese", "Dieses"] },
      ],
      explanation:
        "das Hemd ⇒ dieses · die Hose ⇒ diese · der Pullover ⇒ dieser. النهاية نهاية الأداة.",
      errorType: "article",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "صحّح صيغة الإشارة قبل اسم مؤنث:",
      wrongSentence: "Dieses Hose ist sehr teuer.",
      wrongWord: "Dieses",
      correctWord: "Diese",
      options: ["Diese", "Dieses", "Dieser", "Diesen"],
      explanation: "die Hose مؤنّثة ⇒ diese Hose.",
      errorType: "gender",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "أنت في المتجر وتسأل عن المعطف. أيّ صيغة صحيحة؟",
      questionDe: "___ Mantel möchten Sie kaufen?",
      questionAr: "أيّ معطف تودّ أن تشتري؟",
      options: ["Welchen", "Welcher", "Welches", "Welche"],
      correctIndex: 0,
      explanation:
        "der Mantel مذكّر، وهو مفعول به بعد kaufen ⇒ Akkusativ ⇒ welchen.",
      optionExplanations: [
        undefined,
        "welcher للفاعل المذكّر لا للمفعول به.",
        "welches للمحايد (das).",
        "welche للمؤنّث والجمع.",
      ],
      errorType: "case",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال البائع:",
      tokens: ["Welche", "Größe", "haben", "Sie", "?"],
      correctSentence: "Welche Größe haben Sie?",
      explanation:
        "die Größe مؤنّثة ⇒ welche. وكلمة السؤال تتصدّر والفعل يليها.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "matching",
      instructionAr: "صِل كل كلمة بصيغة الإشارة الصحيحة:",
      pairs: [
        { left: "der Rock", right: "dieser Rock" },
        { left: "die Jacke", right: "diese Jacke" },
        { left: "das Kleid", right: "dieses Kleid" },
        { left: "die Socken (ج)", right: "diese Socken" },
      ],
      explanation:
        "dies- تأخذ نهاية الأداة: der→dieser · die→diese · das→dieses · الجمع→diese.",
      errorType: "article",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة للفعل:",
      questionDe: "Die Schuhe ___ mir sehr gut.",
      options: ["gefallen", "gefällt", "gefalle", "gefällst"],
      correctIndex: 0,
      explanation:
        "die Schuhe جمع، والفعل يتبع الملبوس لا الشخص ⇒ gefallen. وmir لا تتغيّر.",
      errorType: "conjugation",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "أيّ فعل يناسب المعنى؟ (الحديث عن المقاس لا الذوق)",
      questionDe: "Das Hemd ist zu klein. Es ___ mir nicht.",
      options: ["passt", "gefällt", "steht", "trägt"],
      correctIndex: 0,
      explanation: "السؤال يقيّد المعنى بالمقاس، لذا الإجابة المقصودة passen. ويمكن أن تكون gefallen صحيحة في جملة أخرى إذا كان المقصود الإعجاب؛ فهي لا تصف المقاس هنا.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح بنية الجملة:",
      wrongSentence: "Ich gefalle das Hemd.",
      wrongWord: "Ich gefalle",
      correctWord: "Das Hemd gefällt mir",
      options: [
        "Das Hemd gefällt mir",
        "Ich gefällt das Hemd",
        "Mich gefällt das Hemd",
        "Das Hemd gefällt mich",
      ],
      explanation:
        "في هذا المعنى من gefallen، القطعة هي الفاعل ويأتي الشخص في الداتيف: Das Hemd gefällt mir.",
      errorType: "case",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح ضمير الدّاتيف:",
      wrongSentence: "Der Pullover gefällt mich sehr.",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "meiner", "meine"],
      explanation: "الشخص يأتي في الداتيف مع gefallen في هذا المعنى: gefällt mir، لا gefällt mich.",
      errorType: "pronoun",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل gefallen في صيغته الصحيحة:",
      template: "Der Mantel ___ mir gut. Die Socken ___ mir nicht.",
      blanks: [
        { correct: "gefällt", options: ["gefällt", "gefallen"] },
        { correct: "gefallen", options: ["gefällt", "gefallen"] },
      ],
      explanation: "der Mantel مفرد ⇒ gefällt · die Socken جمع ⇒ gefallen.",
      errorType: "conjugation",
    },
    {
      id: "e21",
      type: "word-ordering",
      instructionAr: "رتّب سؤال البائع:",
      tokens: ["Wie", "gefällt", "Ihnen", "dieser", "Mantel", "?"],
      correctSentence: "Wie gefällt Ihnen dieser Mantel?",
      explanation:
        "أداة الاستفهام ثمّ الفعل ثمّ الدّاتيف المهذّب Ihnen ثمّ الفاعل.",
      errorType: "word-order",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "حوّل إلى بنية gefallen:",
      prompt: "Ich finde die Jacke schön. → (بالفعل gefallen)",
      acceptedAnswers: [
        "Die Jacke gefällt mir",
        "Die Jacke gefällt mir.",
        "Mir gefällt die Jacke",
        "Mir gefällt die Jacke.",
      ],
      sampleAnswer: "Die Jacke gefällt mir.",
      explanation:
        "finden يجعلك فاعلاً، وgefallen يجعل الملبوس فاعلاً وأنت مستقبِل في الدّاتيف.",
      errorType: "case",
    },
    {
      id: "e23",
      type: "error-correction",
      instructionAr: "صحّح صيغة المخاطبة المهذّبة:",
      wrongSentence: "Wie gefällt Sie das Kleid?",
      wrongWord: "Sie",
      correctWord: "Ihnen",
      options: ["Ihnen", "Sie", "Ihre", "Ihr"],
      explanation: "das Kleid هو الفاعل؛ الشخص يأتي في الداتيف: Ihnen.",
      errorType: "pronoun",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كل فعل بمجاله:",
      pairs: [
        { left: "gefallen", right: "الذوق: شكله جميل" },
        { left: "passen", right: "المقاس: يناسبني" },
        { left: "stehen", right: "اللياقة: يليق بك" },
        { left: "anziehen", right: "الارتداء: ألبسه الآن" },
      ],
      explanation: "في هذه الأمثلة تختلف معاني الأفعال؛ وقد يتغير معنى الفعل بحسب التركيب والسياق.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "multiple-choice",
      instructionAr: "اختر الجواب السليم على سؤال البائع:",
      questionDe: "Verkäufer: Wie gefällt Ihnen die Hose? — Sie: ___",
      options: [
        "Sie gefällt mir, aber sie passt mir nicht.",
        "Ich gefalle die Hose gut.",
        "Die Hose gefällt mich sehr.",
        "Mich gefällt die Hose nicht passt.",
      ],
      correctIndex: 0,
      explanation:
        "الجواب يعبّر عن الإعجاب بـgefallen وعن المقاس بـpassen؛ في المعنيين المعروضين يأتي الشخص في الداتيف.",
      errorType: "grammar",
    },
    {
      id: "e26",
      type: "matching",
      instructionAr: "صِل اسم كل قطعة بترجمتها، وانتبه إلى المفرد والجمع:",
      pairs: [
        {left: "das Hemd", right: "القميص"},
        {left: "die Hose", right: "البنطال"},
        {left: "die Jacke", right: "السترة"},
        {left: "der Mantel", right: "المعطف"},
        {left: "das Kleid", right: "الفستان"},
        {left: "der Pullover", right: "الكنزة"},
        {left: "der Schuh", right: "حذاء واحد"},
        {left: "die Schuhe", right: "الأحذية (جمع)"},
      ],
      explanation: "احفظ الاسم مع أداة جنسه؛ der Schuh مفرد وdie Schuhe جمع.",
      errorType: "vocabulary",
    },
    {
      id: "e27",
      type: "multiple-choice",
      instructionAr: "اختر الرد الذي يناقض النفي ويجيب بالإيجاب:",
      questionDe: "Gefällt dir die Jacke nicht? — ___, sie gefällt mir.",
      options: ["Doch", "Nein", "Nicht", "Kein"],
      correctIndex: 0,
      explanation: "Doch يرفض النفي في السؤال ويؤكد أن السترة تعجب المتكلم؛ Nein سيؤكد أنها لا تعجبه.",
      errorType: "negation",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Das Hemd rot. (بدون ist)",
        right: "Das Hemd ist rot.",
        whyAr: "الجملة تحتاج فعلاً دائماً — تذكر درس sein!",
      },
      {
        wrong: "die Schuhe ist neu",
        right: "die Schuhe sind neu",
        whyAr: "جمع → sind.",
      },
      {
        wrong: "Die Jacke ist rote.",
        right: "Die Jacke ist rot.",
        whyAr:
          "بعد sein تأتي الصفة الخبرية في صورتها الأساسية: Die Jacke ist rot.",
      },
    ],
    eselsbruecken: [
      "ألوان العلم الألماني تُسمّى أحياناً Schwarz-Rot-Gold؛ في الجملة العادية تُكتب أسماء الألوان صفاتٍ بحروف صغيرة: schwarz, rot, gold.",
      "بعد sein في جملة الوصف: ist/sind + صفة خبرية بلا نهاية، مثل Die Jacke ist rot.",
    ],
    culturalNote: {
      title: "عند شراء الملابس في ألمانيا",
      content:
        "عند الشراء من متجر حضوري في ألمانيا، لا يوجد حق قانوني عام لإرجاع سلعة سليمة لمجرد تغيير الرأي؛ سياسة الاستبدال أو الإرجاع الطوعي تختلف بين المتاجر، فاسأل عنها واحتفظ بالإيصال. أما الشراء عن بُعد، فيوجد في كثير من الحالات حق عدول مدته 14 يوماً مع استثناءات وشروط. هذه معلومة عامة وليست استشارة قانونية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Die Hose ist ___.",
      questionAr: "البنطال أزرق.",
      options: ["blau", "blaue", "blauen", "blaues"],
      correctIndex: 0,
      explanation: "الصفة الخبرية: ist blau.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du heute? — Ich trage ein Hemd.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "du → trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["findest", "Wie", "Jacke", "meine", "du", "?"],
      correctSentence: "Wie findest du meine Jacke?",
      explanation: "سؤال W: Wie + findest (V2) + du + meine Jacke.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الصفة الخبرية بعد sein:",
      wrongSentence: "Das Hemd ist rotes.",
      wrongWord: "rotes",
      correctWord: "rot",
      options: ["rot", "rote", "rotes", "roten"],
      explanation:
        "بعد sein في جملة الوصف نقول Das Hemd ist rot؛ لا تأخذ الصفة الخبرية نهاية هنا.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الألوان:",
      template:
        "Die Nacht ist ___ (أسود). Der Schnee ist ___ (أبيض). Die Banane ist ___ (أصفر).",
      blanks: [
        { correct: "schwarz", options: ["schwarz", "weiß", "gelb"] },
        { correct: "weiß", options: ["schwarz", "weiß", "gelb"] },
        { correct: "gelb", options: ["schwarz", "weiß", "gelb"] },
      ],
      explanation: "الليل أسود، الثلج أبيض، الموزة صفراء.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "die Kleidung",
      ar: "الملابس",
      example: "Ich kaufe Kleidung.",
      exampleAr: "أشتري ملابس.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "das Hemd / die Hose",
      ar: "القميص / البنطال",
      example: "Das Hemd ist weiß.",
      exampleAr: "القميص أبيض.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "die Jacke",
      ar: "السترة",
      example: "Meine Jacke ist warm.",
      exampleAr: "سترتي دافئة.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "das Kleid",
      ar: "الفستان",
      example: "Das Kleid ist elegant.",
      exampleAr: "الفستان أنيق.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "die Schuhe",
      ar: "الأحذية (جمع؛ المفرد der Schuh)",
      example: "Die Schuhe sind neu.",
      exampleAr: "الأحذية جديدة.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "rot / blau / grün",
      ar: "أحمر / أزرق / أخضر",
      example: "Der Himmel ist blau.",
      exampleAr: "السماء زرقاء.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "tragen",
      ar: "يرتدي",
      example: "Ich trage eine Brille.",
      exampleAr: "أرتدي نظارة.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "Wie findest du …?",
      ar: "ما رأيك في…؟",
      example: "Wie findest du mein Hemd?",
      exampleAr: "ما رأيك في قميصي؟",
      level: "A1",
    },
    {
      id: "fc9",
      de: "Welche Größe haben Sie?",
      ar: "ما مقاسك؟",
      example: "Welche Größe haben Sie? — Größe 40.",
      exampleAr: "ما مقاسك؟ — مقاس 40.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "Ich nehme dieses Hemd.",
      ar: "آخذ هذا القميص.",
      example: "Ich nehme dieses Hemd, bitte.",
      exampleAr: "آخذ هذا القميص من فضلك.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "Das gefällt mir.",
      ar: "هذا يعجبني.",
      example: "Der Pullover gefällt mir sehr.",
      exampleAr: "الكنزة تعجبني كثيراً.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "Die Schuhe gefallen mir.",
      ar: "الأحذية تعجبني. (جمع ⇐ الفعل جمع)",
      example: "Die Schuhe gefallen mir, aber sie sind teuer.",
      exampleAr: "الأحذية تعجبني، لكنها غالية.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "passen (+ Dativ)",
      ar: "يناسب المقاس",
      example: "Die Hose passt mir nicht.",
      exampleAr: "البنطال لا يناسب مقاسي.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "stehen (+ Dativ)",
      ar: "يليق بـ",
      example: "Das Kleid steht dir gut.",
      exampleAr: "الفستان يليق بك.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "mir / dir / Ihnen",
      ar: "لي / لك / لحضرتك (ضمائر الدّاتيف)",
      example: "Wie gefällt Ihnen das?",
      exampleAr: "كيف يعجبك هذا؟",
      level: "A1",
    },
    {
      id: "fc16",
      de: "Wie gefällt Ihnen …?",
      ar: "كيف يعجبك …؟ (سؤال البائع)",
      example: "Wie gefällt Ihnen dieser Mantel?",
      exampleAr: "كيف يعجبك هذا المعطف؟",
      level: "A1",
    },
    {
      id: "fc17",
      de: "der Mantel",
      ar: "المعطف",
      example: "Der Mantel ist zu teuer.",
      exampleAr: "المعطف غالٍ جداً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "die Farbe",
      ar: "اللون",
      example: "Welche Farbe magst du?",
      exampleAr: "أيّ لونٍ تحبّ؟",
      level: "A1",
    },
    {
      id: "fc19",
      de: "grau",
      ar: "رماديّ",
      example: "Der Mantel ist grau.",
      exampleAr: "المعطف رماديّ.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "suchen",
      ar: "يبحث عن",
      example: "Ich suche eine Jacke.",
      exampleAr: "أبحث عن سترة.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "brauchen",
      ar: "يحتاج",
      example: "Im Herbst braucht man eine Jacke.",
      exampleAr: "في الخريف يحتاج المرء سترة.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "der Herbst",
      ar: "الخريف",
      example: "Im Herbst ist es kalt.",
      exampleAr: "في الخريف يكون الجوّ بارداً.",
      level: "A1",
    },
  ],

  /* ═══ أنشطة الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a1-08-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص وصف ملابس بالعربية",
      sourceDe:
        "Im Winter trage ich eine Jacke. Sie ist warm. Ich trage auch einen Schal und Handschuhe. Meine Lieblingsfarbe ist Blau.",
      taskAr: "انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.",
      modelAnswerAr:
        "«في الشتاء أرتدي سترة. هي دافئة. أرتدي أيضاً وشاحاً وقفازات. لوني المفضل أزرق.»",
      keyPointsAr: [
        "ذكرت الملابس الشتوية (سترة، وشاح، قفازات)",
        "نقلت اللون المفضل (أزرق)",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a1-08-1",
      scenarioAr: "صديقة تسأل رأيك في ملابس.",
      scenarioDe: "Eine Freundin fragt dich nach deiner Meinung zu ihrer Jacke.",
      strategyAr:
        "الاستراتيجية: إبداء الرأي بلطف (Ich finde... / Wie findest du...?). الخيارات هنا محاكاة نصية، وليست قياساً لأداء شفهي أو نطق.",
      rounds: [
        {
          speakerDe: "Wie findest du diese Jacke?",
          speakerAr: "كيف تجد هذه السترة؟",
          options: [
            {
              de: "Ich finde sie sehr schön. Die Jacke steht dir gut.",
              ar: "أجدها جميلة جداً. السترة تليق بك.",
              best: true,
              replyDe: "Danke! Und die Farbe?",
              replyAr: "شكراً! واللون؟",
            },
            {
              de: "Was kostet die Jacke?",
              ar: "كم ثمن السترة؟",
              best: false,
              replyDe: "Das weiß ich noch nicht. Wie gefällt sie dir?",
              replyAr: "لا أعرف بعد. ما رأيك بها؟",
            },
          ],
        },
        {
          speakerDe: "Welche Farbe gefällt dir besser?",
          speakerAr: "أيّ لون يعجبك أكثر؟",
          options: [
            {
              de: "Blau gefällt mir besser.",
              ar: "الأزرق يعجبني أكثر.",
              best: true,
              replyDe: "Danke! Dann probiere ich die Jacke in Blau.",
              replyAr: "شكراً! سأجرّب السترة باللون الأزرق إذن.",
            },
            {
              de: "Ich wohne in Bonn.",
              ar: "أسكن في بون.",
              best: false,
              replyDe: "Danke, aber ich habe nach der Farbe gefragt.",
              replyAr: "شكراً، لكنني سألت عن اللون.",
            },
          ],
        },
      ],
    },
  ],
};

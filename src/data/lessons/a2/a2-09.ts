import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-09: الدعوات والاحتفال — تطبيقات منتقاة على أفعال وحروف جر تحكم Dativ.
 * لا يزعم استكمال جميع استعمالات الحالة أو تقويم أداء شفهي.
 */
export const lessonA209: Lesson = {
  id: "a2-09",
  unitId: "a2-09",
  level: "A2",
  order: 1,
  titleDe: "Feste und Feiern",
  titleAr: "المناسبات والاحتفالات",
  summary:
    "صياغة دعوة قصيرة وفهم قراءة وحوار عن عيد ميلاد؛ تطبيقات منتقاة على أفعال تتطلب Dativ وحروف جر ثابتة، مع التمييز بين المكان والوجهة. لا يمثّل ذلك تغطية كل استعمالات Dativ.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann aus vorgegebenen Angaben eine kurze Geburtstagseinladung formulieren und höflich annehmen.",
      ar: "أصوغ دعوة قصيرة لعيد الميلاد انطلاقاً من بيانات محددة، وأقبل دعوةً بعبارة مهذبة.",
      evidence: {
        exerciseIds: ["w1", "w4"],
        taskIds: ["writing:a2-09:w1", "writing:a2-09:w4"],
        labelAr: "اكتب الدعوة في w1 ثم اكتب قبولاً مناسباً في w4؛ لا يُحتسب ظهور النموذج أو فتح النشاط.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann gezielte Informationen und einfache Zusammenhänge aus einer kurzen Erzählung über eine Feier entnehmen.",
      ar: "أستخرج معلومات محددة وعلاقات بسيطة من قصة قصيرة عن مناسبة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-09:rq1",
          "reading:read-a2-09:rq2",
          "reading:read-a2-09:rq3",
          "reading:read-a2-09:rq4",
        ],
        labelAr: "أجب عن أسئلة المكان والهدية والمساعدة والسبب في rq1–rq4؛ لا يكفي فتح القراءة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ausgewählte Dativformen von Artikeln und Personalpronomen nach häufigen Verben verwenden.",
      ar: "أختار صيغاً منتقاة من أدوات التعريف والضمائر في Dativ بعد أفعال شائعة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e6", "w2", "m1", "m5"],
        taskIds: [
          "practice:a2-09:e1",
          "flow-practice:a2-09:e1",
          "practice:a2-09:e2",
          "flow-practice:a2-09:e2",
          "practice:a2-09:e6",
          "writing:a2-09:w2",
          "mini-test:a2-09:m1",
          "flow-mini-test:a2-09:m1",
          "mini-test:a2-09:m5",
        ],
        labelAr:
          "أكمل أدوات الأسماء في e1/e2/e6، ثم ضمائر Dativ في w2 وm5، واختر الأداة في m1؛ التدفق لا يعرض كل بنك التدريب.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausgewählte Dativ-Ergänzungen bei helfen, gehören, gefallen, gratulieren und danken erkennen.",
      ar: "أميّز متمم Dativ في تراكيب مختارة مع helfen وgehören وgefallen وgratulieren وdanken.",
      evidence: {
        exerciseIds: ["e2", "e5", "e7", "e11", "e13", "m2", "m4"],
        taskIds: [
          "practice:a2-09:e2",
          "flow-practice:a2-09:e2",
          "practice:a2-09:e5",
          "practice:a2-09:e7",
          "practice:a2-09:e11",
          "practice:a2-09:e13",
          "mini-test:a2-09:m2",
          "flow-mini-test:a2-09:m2",
          "mini-test:a2-09:m4",
        ],
        labelAr:
          "اختر Dativ بعد gehören في e2، وصحّح ضمير gratulieren في e5، وحوّل المعنى إلى جملة مع helfen في e7، واختر اتفاق gefallen في e11، وأكمل إطار gratulieren في e13، واختر Dativ بعد danken في m2 وبعد helfen في m4؛ لا تعمّم ذلك على كل فعل.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgewählte Dativ-Präpositionen und den Orts-/Richtungsunterschied bei in erkennen.",
      ar: "أستخدم حروف جر مختارة مع Dativ وأميّز المكان من الوجهة مع in.",
      evidence: {
        exerciseIds: ["e12", "e14"],
        taskIds: ["practice:a2-09:e12", "practice:a2-09:e14"],
        labelAr:
          "اختر mit + Dativ لوسيلة النقل في e12، وميّز in den للوجهة عن im للمكان في e14؛ يلزم إجابة صحيحة عن المهمتين.",
        completion: "all-correct",
      },
    },
    {
      id: "z-listening",
      de: "Ich kann ausgewählte Angaben zu Tag, Uhrzeit und Person aus zwei kurzen Dialogen heraushören.",
      ar: "ألتقط اليوم والوقت والشخص من حوارين قصيرين قبل كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr:
          "أجب عن أسئلة اليوم والساعة وهوية من خبز التورتة أثناء الاستماع؛ نتيجة transcript بعد كشف النص ليست دليلاً على الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann eine kurze Geburtstagseinladung und eine passende Antwort mit einfachen Angaben schreiben sowie kurze Dativ-Sätze ergänzen und notieren.",
      ar: "أكتب دعوة قصيرة بعيد الميلاد ورداً مناسباً ببيانات بسيطة، وأكمل جملاً منتقاة بـDativ وأدوّن جملة من الإملاء.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3", "w4"],
        taskIds: [
          "writing:a2-09:w1",
          "writing:a2-09:w2",
          "writing:a2-09:w3",
          "writing:a2-09:w4",
        ],
        labelAr:
          "أنجز الدعوة في w1، والإكمال النحوي في w2، والإملاء في w3، وردّ القبول في w4؛ هذه مهام كتابة مضبوطة وليست كتابة حرة.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "كيف تكتب دعوةً بسيطة وتردّ عليها بوضوح؟ وما الفرق بين Ich lade dich ein وIch gratuliere dir؟ ابدأ بالفعل، ثم لاحظ المتمم الذي يطلبه.",
    motivatingQuestionDe: "Wie lädst du jemanden zu einer Feier ein?",
    contextAr:
      "تدور الأمثلة حول عيد ميلاد خيالي: دعوة الجيران، الحديث عن هدية، والردّ بأدب. نراجع تراكيب Dativ سبق أن ظهرت، ونضيف إليها أسماءً وحروف جرّ في سياقات محددة.",
    contextDe: "Herzlichen Glückwunsch zum Geburtstag!",
    connectionToPreviousAr:
      "هذا درس تراكمي لا أول لقاء بـDativ: ظهر Dativ المكاني في A1-04، وظهر helfen في A1-06 وgefallen/passen في A1-08، ثم تدربت على ضمائر مثل Ich helfe dir في A2-07. هنا نطبّق صيغاً اسمية وأفعالاً وحروف جر منتقاة ضمن دعوة واحتفال؛ ولا ندّعي تغطية كل وظائف الحالة.",
    activateVocabulary: [
      { de: "das Fest", ar: "المناسبة / الاحتفال" },
      { de: "die Einladung", ar: "الدعوة" },
      { de: "feiern", ar: "يحتفل" },
      { de: "das Geschenk", ar: "الهدية" },
      { de: "der Geburtstag", ar: "عيد ميلاد شخص" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية لصيغة الملكية من A1-02؛ طبّق الآن Dativ بعد helfen:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation:
        "في هذا التركيب يأخذ helfen متمماً في Dativ؛ وضمير الملكية مع Bruder المذكر في Dativ هو meinem.",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1-09: اختر المعنى:",
      questionDe: "der Geburtstag",
      options: ["عيد ميلاد شخص", "رأس السنة", "عيد زواج", "عطلة رسمية"],
      correctIndex: 0,
      explanation: "Geburtstag هو يوم ذكرى ولادة الشخص؛ لا يعني رأس السنة أو عطلة رسمية.",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية لصيغ الضمائر من A2-07: أكمل بضمير Akkusativ بعد einladen:",
      template: "Ich möchte ___ einladen. (أنتَ)",
      blanks: [{ correct: "dich", options: ["dich", "dir", "mich"] }],
      explanation:
        "في معنى دعوة شخص، يأخذ einladen مفعولاً في Akkusativ: dich. لا نستنتج الحالة من ترجمة الضمير العربية.",
      errorType: "case",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "أفعال مختارة تأخذ متمماً في Dativ",
      titleDe: "Ausgewählte Verben mit Dativ-Ergänzung",
      explanationAr: `تتكوّن الجملة الألمانية من أدوار نحوية، ويُظهر شكل الأداة أو الضمير بعض هذه العلاقات. في هذا الدرس نراجع صيغاً مختارة من Dativ: مع الاسم المذكر المفرد تتحول أداة التعريف der إلى dem، ومع المحايد das إلى dem، ومع المؤنث die إلى der، وفي الجمع تصبح die den؛ ويأخذ الاسم الجمع عادةً ‑n إضافية إذا لم يكن جمعه منتهياً أصلاً بـ‑n أو ‑s: die Kinder → den Kindern، لكن die Eltern → den Eltern. هذه الأشكال عيّنة تعليمية وليست جدولاً كاملاً لكل الأدوات والصفات والضمائر.

بعض الأفعال تختار متمماً في Dativ، ومن أمثلتها في المعاني المستعملة هنا helfen (يساعد)، gehören (يخصّ/يكون ملكاً لـ)، gefallen (يعجب)، gratulieren (يهنئ)، وdanken (يشكر). تعلّم الفعل مع إطاره: helfen + الشخص في Dativ؛ gehören + المالك في Dativ؛ gratulieren + الشخص في Dativ وغالباً zu + Dativ للمناسبة؛ danken + الشخص في Dativ، ويمكن أن يتبعه für + Akkusativ للشيء الذي نشكره عليه. لا يعني ذلك أن كل كلمة تعبّر عن شخص تأتي في Dativ.

انتبه خصوصاً إلى gefallen: الشيء الذي يثير الإعجاب هو الفاعل في Nominativ، أما الشخص الذي يعجبه الشيء فيأتي في Dativ؛ لذلك يتبع الفعل عدد الشيء: Das Fotoalbum gefällt Frau Yilmaz، لكن Die Blumen gefallen ihr. وفي المقابل، einladen في معنى دعوة شخص يأخذ ذلك الشخص في Akkusativ: Ich lade dich ein، لكن Ich gratuliere dir. سؤال wem? يساعد على فحص المتمم بعد معرفة الفعل، لكنه ليس تفسيراً لسبب اختيار الحالة ولا بديلاً عن حفظ إطار الفعل.`,
      whyAr: `حفظ صيغة واحدة مثل dem لا يكفي؛ ينبغي معرفة من يطلبها في الجملة. فالفعل هو الذي يحدد الحالة لمتممه في تراكيب مثل Ich helfe dem Vater وIch gratuliere der Nachbarin، بينما تحدد حروف الجر حالة مجموعتها في أمثلة أخرى. ويمنع هذا التفريق خطأً شائعاً: أن يختار المتعلم Dativ أو Akkusativ اعتماداً على ترجمة عربية واحدة أو على سؤال «لمن؟» من دون فحص الفعل.

ويظهر ذلك بوضوح مع gefallen: لا نقول إن الشخص هو الفاعل لمجرد أنه محور الإحساس؛ Das Geschenk هو الفاعل النحوي، وmir/der Nachbarin هو المتمم في Dativ. لهذا نقول Das Geschenk gefällt mir، وDie Blumen gefallen mir. أمّا مع einladen فالشخص المدعو في Akkusativ: Ich lade dich ein. تعلّم الفعل ومتممه واتفاق الفعل في جملة كاملة؛ ولا تعمم قائمة هذه الأمثلة على جميع الأفعال الألمانية.`,
      table: {
        title: "صيغ اسمية وضمائر منتقاة في Dativ",
        columns: ["المجموعة", "Nominativ", "Dativ", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der Vater", "dem Vater", "Ich helfe dem Vater."] },
          { label: "مؤنث", cells: ["die Mutter", "der Mutter", "Das gehört der Mutter."] },
          { label: "محايد", cells: ["das Kind", "dem Kind", "Ich danke dem Kind."] },
          {
            label: "جمع",
            cells: ["die Kinder", "den Kindern", "Ich helfe den Kindern."],
          },
          {
            label: "ضمائر المفرد",
            cells: ["ich / du / er / sie / es", "mir / dir / ihm / ihr / ihm", "Das gefällt mir."],
          },
          {
            label: "ضمائر الجمع والصيغة الرسمية",
            cells: ["wir / ihr / sie / Sie", "uns / euch / ihnen / Ihnen", "Ich danke Ihnen."],
          },
        ],
      },
      examples: [
        { de: "Ich helfe dem Vater beim Aufräumen.", ar: "أساعد الأب في ترتيب المكان." },
        { de: "Das Fotoalbum gefällt Frau Yilmaz.", ar: "ألبوم الصور يعجب السيدة يلماز." },
        { de: "Die Blumen gefallen der Nachbarin.", ar: "الزهور تعجب الجارة." },
        { de: "Das Fahrrad gehört meinem Bruder.", ar: "الدراجة ملك لأخي." },
        { de: "Wir gratulieren unserer Nachbarin zum Geburtstag.", ar: "نهنئ جارتنا بعيد ميلادها." },
        { de: "Ich danke den Kindern für die Hilfe.", ar: "أشكر الأطفال على المساعدة." },
        { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
        { de: "Das Geschenk gefällt ihr.", ar: "تعجبها الهدية." },
      ],
      comparisonWithArabic: `لا توجد مطابقة آلية بين Dativ الألمانية و«الجر» في العربية. في «أساعد الأب» يأتي «الأب» مفعولاً به في تركيب الفعل العربي؛ أما الفعل الألماني helfen فيطلب هنا متمماً في Dativ، فنقول Ich helfe dem Vater. وفي Das Geschenk gefällt mir يختلف بناء الجملة الألمانية عن الترجمة الطبيعية «تعجبني الهدية»: الهدية هي الفاعل الألماني، والشخص يأتي في Dativ. قد تعبّر العربية عن بعض العلاقات بلام الجر، كما في «أعطيت الكتاب للأخت»، لكن هذا لا يجعل كل Dativ عربياً مجروراً ولا يبرر إضافة اللام إلى كل ترجمة. استخدم العربية لفهم المعنى، ثم اختر الحالة الألمانية وفق الفعل أو حرف الجر وإطار استعماله.`,
      eselsbruecke:
        "احفظ الفعل مع متمّمه: helfen + Dativ، gehören + Dativ للمالك، gefallen + Dativ للشخص الذي يعجبه الشيء، gratulieren + Dativ للشخص، danken + Dativ للشخص. اسأل wem? بعد أن تحدد الفعل، ولا تستبدل ذلك بترجمة حرفية.",
      commonMistakes: [
        {
          wrong: "Ich helfe den Vater.",
          right: "Ich helfe dem Vater.",
          whyAr:
            "في معنى مساعدة شخص، يطلب helfen متمماً في Dativ. الاسم Vater مفرد مذكر، لذلك تكون أداة التعريف dem؛ أما den فهي صيغة Akkusativ للمذكر هنا.",
        },
        {
          wrong: "Ich gratuliere dich zum Geburtstag.",
          right: "Ich gratuliere dir zum Geburtstag.",
          whyAr:
            "يأخذ gratulieren الشخص المهنّأ في Dativ، لذلك نستخدم dir لا dich. ويأتي الحدث بعد zu أيضاً في Dativ: zum Geburtstag اختصار zu dem Geburtstag.",
        },
        {
          wrong: "Das Geschenk gefällt ich.",
          right: "Das Geschenk gefällt mir.",
          whyAr:
            "الشخص الذي يعجبه الشيء يأتي بعد gefallen في Dativ؛ ضمير ich يتحول إلى mir. الهدية هي الفاعل النحوي في هذا المثال، وليست الشخص الذي يشعر بالإعجاب.",
        },
        {
          wrong: "Die Blumen gefällt mir.",
          right: "Die Blumen gefallen mir.",
          whyAr:
            "الفاعل Die Blumen جمع، لذلك يأتي الفعل بصيغة الجمع gefallen. الضمير mir يبقى في Dativ ولا يحدد عدد الفعل؛ العدد يتبع الفاعل النحوي.",
        },
        {
          wrong: "Das Buch gehört mein Bruder.",
          right: "Das Buch gehört meinem Bruder.",
          whyAr:
            "في معنى الملكية يأتي صاحب الشيء بعد gehören في Dativ. مع الضمير mein والاسم المذكر Bruder تكون الصيغة meinem Bruder، لا mein Bruder.",
        },
        {
          wrong: "Ich helfe den Kinder.",
          right: "Ich helfe den Kindern.",
          whyAr:
            "الجمع في Dativ يأخذ den، ويضاف عادةً ‑n إلى صيغة الاسم الجمع إذا لم تنتهِ بـ‑n أو ‑s. لذلك Kinder تصبح Kindern؛ أما Eltern فتظل Eltern لأنها منتهية بـ‑n.",
        },
      ],
      relatedRuleComparison: {
        title: "الفعل يحدد الحالة: einladen مقابل gratulieren",
        content:
          "في المعنى المستهدف، يأخذ einladen الشخص المدعو في Akkusativ: Ich lade dich zu meiner Feier ein. أما gratulieren فيأخذ الشخص المهنّأ في Dativ: Ich gratuliere dir zum Geburtstag. الشخص نفسه يمكن أن يظهر بصيغتين مختلفتين لأن الفعلين يطلبان إطارين نحويين مختلفين؛ لا تغيّر الحالة اعتماداً على الترجمة وحدها.",
      },
    },
    {
      id: "t2",
      titleAr: "Dativ بعد حروف جر مختارة: المكان والوجهة",
      titleDe: "Ausgewählte Präpositionen: Dativ und Ortsangabe",
      explanationAr: `تفرض بعض حروف الجر حالة ثابتة على الاسم أو الضمير الذي يليها. من الحروف التي تتكرر في سياق هذا الدرس: mit، bei، von، zu، aus، nach، seit؛ وعند استعمالها حروفَ جرّ تأتي المجموعة الاسمية بعدها في Dativ: mit meiner Schwester، bei den Nachbarn، von den Gästen، zu der Feier / zur Feier، aus dem Hof، nach dem Essen، seit einem Jahr. هذه أمثلة منتقاة وليست قائمة بجميع حروف الجر الألمانية أو بكل معانيها.

تختلف عنها Wechselpräpositionen المحلية التسع: an، auf، hinter، in، neben، über، unter، vor، zwischen. إذا وصفت العبارة مكان وقوع الحدث وسألت Wo? فالصيغة المحلية المعتادة تكون Dativ: Wir feiern im Innenhof (= in dem Innenhof). وإذا حدّدت وجهة أو انتقالاً إلى داخل المكان وسألت Wohin? تأتي Akkusativ: Sie gehen in den Innenhof. لا تجعل «وجود حركة جسدية» وحده قاعدة؛ اسأل هل تصف العبارة المكان أم الهدف. فـWir tanzen im Innenhof تصف مكان الرقص حتى مع الحركة، وWir gehen in den Innenhof تحدد وجهة.

احفظ كذلك بعض الاختصارات الشائعة: in + dem = im، bei + dem = beim، von + dem = vom، zu + dem = zum، وzu + der = zur. والصيغة الكاملة قد تكون صحيحة في سياقها؛ في هذا التدريب نختار الاختصار المعتاد عندما يعرضه السؤال. قارن أيضاً بين bei/mit/von التي تطلب Dativ في هذه التراكيب وبين für التي تطلب Akkusativ: Ich danke dir für die Blumen.`,
      whyAr: `تساعد حروف الجر على تحديد علاقة المكان أو المصدر أو الرفقة، لكنها لا تختار كلها الحالة بالطريقة نفسها. بعض الحروف في الأمثلة المختارة، مثل mit وbei وvon وzu، تحكم Dativ؛ بينما in المحلية قد تتناوب بين Dativ وAkkusativ بحسب كون العبارة مكاناً أو وجهة. لذلك لا تحفظ «Dativ = حركة» أو «بعد كل حرف جر Dativ»؛ افحص الحرف ومعناه المحلي في الجملة.

في Wir feiern im Innenhof لا تصف العبارة اتجاهاً إلى الساحة، بل تحدد مكان الاحتفال. أما Wir gehen in den Innenhof فتحدد الوجهة؛ وقد بقي الحرف in نفسه وتغيّرت أداة الاسم. كذلك لا تخلط بين bei den Kindern (Dativ بعد bei) وfür die Kinder (Akkusativ بعد für). تعمل أسئلة Wo? وWohin? بوصفها وسيلة فحص مع الاستعمال المحلي لحروف التبديل، لا قاعدةً لجميع حروف الجر.`,
      table: {
        title: "أمثلة على حرف الجر والحالة",
        columns: ["الاستعمال", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "رفقة", cells: ["mit + Dativ", "mit meiner Schwester", "مع أختي"] },
          { label: "مكان/عند", cells: ["bei + Dativ", "bei den Nachbarn", "عند الجيران"] },
          { label: "مصدر", cells: ["von + Dativ", "von den Gästen", "من الضيوف"] },
          { label: "اتجاه بـ zu", cells: ["zu + Dativ", "zur Feier", "إلى المناسبة"] },
          { label: "مكان مع in", cells: ["in + Dativ", "im Innenhof", "في الساحة الداخلية"] },
          { label: "وجهة مع in", cells: ["in + Akkusativ", "in den Innenhof", "إلى الساحة الداخلية"] },
          { label: "شيء نشكر عليه", cells: ["für + Akkusativ", "für die Blumen", "على الزهور"] },
        ],
      },
      examples: [
        { de: "Wir feiern im Innenhof.", ar: "نحتفل في الساحة الداخلية للمبنى." },
        { de: "Sie lädt die Nachbarn in den Innenhof ein.", ar: "تدعو الجيران إلى الساحة الداخلية للمبنى." },
        { de: "Ich komme mit meiner Schwester.", ar: "آتي مع أختي." },
        { de: "Frau Yilmaz hilft beim Dekorieren.", ar: "تساعد السيدة يلماز في التزيين." },
        { de: "Die Blumen sind von den Gästen.", ar: "الزهور مقدّمة من الضيوف." },
        { de: "Wir gratulieren ihr zum Geburtstag.", ar: "نهنئها بعيد ميلادها." },
        { de: "Nach dem Essen räumen wir zusammen auf.", ar: "بعد الطعام نرتب المكان معاً." },
        { de: "Die Kinder stellen die Stühle an die Wand.", ar: "يضع الأطفال الكراسي ملاصقةً للجدار." },
        { de: "Die Stühle stehen an der Wand.", ar: "توجد الكراسي بمحاذاة الجدار." },
        { de: "Sie bedankt sich bei den Kindern für die Hilfe.", ar: "تشكر الأطفال على المساعدة." },
      ],
      comparisonWithArabic: `في العربية قد يتغير حرف الجر بين «في الساحة» و«إلى الساحة»، بينما تستخدم الألمانية الحرف المحلي نفسه in وتظهر المقابلة في الأداة: im Innenhof للمكان، وin den Innenhof للوجهة. لكن هذا التشابه في ترجمة موضعية لا يعني تطابق النظامين. كما أن معنى «مع» يقابل mit + Dativ في Ich komme mit meiner Schwester، ويقابل معنى «مخصّص للأطفال» für + Akkusativ في Das Geschenk ist für die Kinder. وفي جملة «أساعد الأطفال» لا نضيف بالضرورة لاماً عربية لمجرد أن الفعل الألماني helfen يأخذ Dativ. استخدم الترجمة لشرح المعنى لا لنسخ الحالة؛ احفظ كل حرف مع الحالة التي يحكمها في الاستعمال المعروض، وافحص Wo?/Wohin? فقط عند حروف التبديل المحلية.`,
      eselsbruecke:
        "للحروف الثابتة في أمثلتنا تذكّر: mit/bei/von/zu + Dativ؛ ولـin المحلية اسأل Wo? للمكان (im Hof) أم Wohin? للوجهة (in den Hof). أما für في المثال فيأتي مع Akkusativ: für die Blumen.",
      commonMistakes: [
        {
          wrong: "Ich komme mit meine Schwester.",
          right: "Ich komme mit meiner Schwester.",
          whyAr:
            "حرف الجر mit يطلب Dativ في هذا التركيب. Schwester مؤنث، لذلك يتحول ضمير الملكية meine إلى meiner؛ لا يغير معنى «مع» وحده نهاية الاسم.",
        },
        {
          wrong: "Frau Yilmaz hilft bei das Dekorieren.",
          right: "Frau Yilmaz hilft beim Dekorieren.",
          whyAr:
            "يحكم bei حالة Dativ؛ وDekorieren هنا مصدر مستعمل اسماً، لذلك يكتب بحرف كبير. الصيغة الكاملة هي bei dem Dekorieren، والاختصار الشائع beim Dekorieren؛ أما bei das Dekorieren فخطأ في الحالة.",
        },
        {
          wrong: "Wir feiern in den Innenhof.",
          right: "Wir feiern im Innenhof.",
          whyAr:
            "المقصود مكان إقامة الاحتفال، لا وجهته؛ نسأل Wo? ونستخدم Dativ: in dem Innenhof، وغالباً تختصر إلى im Innenhof. أما in den Innenhof فتدل على اتجاه إلى الداخل.",
        },
        {
          wrong: "Die Kinder stellen die Stühle an der Wand.",
          right: "Die Kinder stellen die Stühle an die Wand.",
          whyAr:
            "الجملة تصف وضع الكراسي باتجاه موضع جديد، أي Wohin?؛ لذلك يأتي Akkusativ بعد an: an die Wand. أما Die Stühle stehen an der Wand فتصف مكانها الحالي وتأتي مع Dativ.",
        },
        {
          wrong: "Ich danke dich für die Blumen.",
          right: "Ich danke dir für die Blumen.",
          whyAr:
            "الشخص الذي نشكره يأتي في هذا التركيب مع danken + Dativ، لذا نقول dir. أما für التي تقدم الشيء المشكور عليه فتطلب Akkusativ: für die Blumen.",
        },
      ],
      relatedRuleComparison: {
        title: "حرف ثابت مقابل حرف متبدّل: mit وin وfür",
        content:
          "mit يحكم Dativ في المثال: mit meiner Schwester. أما in المحلية فقد تأتي مع Dativ للمكان (im Innenhof) أو Akkusativ للوجهة (in den Innenhof). ويأخذ für Akkusativ في für die Blumen. لا تستنتج الحالة من وجود حرف جر فقط؛ احفظ الحرف، ثم افحص معنى المكان/الوجهة إذا كان من حروف التبديل.",
      },
    },
  ],

  reading: {
    id: "read-a2-09",
    titleDe: "Ein Geburtstag im Innenhof",
    titleAr: "عيد ميلاد في الساحة الداخلية للمبنى",
    textType: "erzaehlung",
    paragraphs: [
      "Am Samstag feiert Frau Yilmaz ihren sechzigsten Geburtstag. Sie lädt die Nachbarn in den Innenhof ein. Auf der Einladung stehen die Uhrzeit und der Treffpunkt. Ihr Bruder hilft ihr beim Dekorieren, und die Kinder stellen die Stühle an die Wand. Um fünf Uhr kommen die ersten Gäste.",
      "Das selbst gemachte Geschenk von den Kindern gefällt Frau Yilmaz besonders gut: ein großes Fotoalbum. Sie gratuliert ihrer Nachbarin zum neuen Job und bedankt sich bei allen für die Blumen. Ein Gast bringt einen Kuchen, der nach Schokolade riecht.",
      "Später läuft Musik, und alle tanzen. Der Abend ist warm, und die Stimmung ist fröhlich. Bevor die Gäste nach Hause gehen, helfen sie beim Aufräumen. Frau Yilmaz sagt, dass sie sich über diese Feier sehr freut.",
      "Am Sonntag treffen sich einige Gäste noch einmal zum Kaffee. Sie zeigen einander die Fotos vom Vorabend und erzählen kleine Geschichten. Frau Yilmaz erzählt, dass sie früher große Feiern anstrengend fand. Diesmal musste sie nicht alles allein vorbereiten, weil ihre Nachbarn geholfen haben. Sie möchte sich bei den Kindern besonders bedanken und plant schon einen gemeinsamen Ausflug.",
    ],
    paragraphsAr: [
      "تحتفل السيدة يلماز يوم السبت بعيد ميلادها الستين. تدعو الجيران إلى الساحة الداخلية للمبنى. وتظهر ساعة اللقاء ومكانه في الدعوة. يساعدها أخوها في التزيين، ويضع الأطفال الكراسي بمحاذاة الجدار. ويصل الضيوف الأوائل في الخامسة.",
      "أعجب السيدة يلماز خصوصاً ألبوم الصور الكبير الذي صنعه الأطفال وأهدوه لها. وتهنئ جارتها بوظيفتها الجديدة، وتشكر الجميع على الزهور. ويحضر أحد الضيوف كعكة تفوح منها رائحة الشوكولاتة.",
      "تُعزف الموسيقى لاحقاً ويرقص الجميع. الأمسية دافئة والأجواء مبهجة. وقبل أن يعود الضيوف إلى بيوتهم، يساعدون في ترتيب المكان. وتقول السيدة يلماز إنها سعيدة جداً بهذه المناسبة.",
      "يلتقي بعض الضيوف مجدداً لشرب القهوة يوم الأحد. ويتبادلون صور الأمسية السابقة ويروون قصصاً صغيرة. وتقول السيدة يلماز إنها كانت ترى الاحتفالات الكبيرة متعبة في السابق. لكنها لم تضطر هذه المرة إلى إعداد كل شيء وحدها، لأن جيرانها ساعدوها. وتريد أن تشكر الأطفال خصوصاً، وتخطط بالفعل لنزهة مشتركة.",
    ],
    glossary: [
      { de: "der Innenhof", ar: "الساحة الداخلية للمبنى" },
      { de: "die Einladung", ar: "الدعوة" },
      { de: "der Treffpunkt", ar: "مكان اللقاء" },
      { de: "die Nachbarn", ar: "الجيران" },
      { de: "das Fotoalbum", ar: "ألبوم الصور" },
      {
        de: "gratulieren + Dativ",
        ar: "يهنئ شخصاً",
        noteAr: "الشخص الذي نهنئه يأتي في Dativ في هذا التركيب.",
      },
      {
        de: "sich bei jemandem bedanken",
        ar: "يشكر شخصاً",
        noteAr: "الشخص بعد bei في Dativ؛ ويمكن إضافة für مع الشيء الذي نشكره عليه.",
      },
      { de: "das Aufräumen", ar: "ترتيب المكان بعد المناسبة" },
      { de: "der Vorabend", ar: "المساء السابق" },
      { de: "die Nachbarin", ar: "الجارة" },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الأول:",
        questionDe: "Wohin lädt Frau Yilmaz die Nachbarn ein?",
        questionAr: "إلى أين تدعو السيدة يلماز الجيران؟",
        options: ["In den Innenhof.", "In ein Café.", "In ihr Büro.", "In eine Turnhalle."],
        correctIndex: 0,
        explanation: "تذكر الفقرة الأولى أن الدعوة إلى الساحة الداخلية للمبنى.",
        errorType: "comprehension",
        paragraph: 1,
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الثاني:",
        questionDe: "Was gefiel Frau Yilmaz besonders gut?",
        questionAr: "ما الهدية التي أعجبت السيدة يلماز خصوصاً؟",
        options: ["Ein großes Fotoalbum.", "Ein Blumenstrauß.", "Ein Kuchen mit Schokolade.", "Ein neues Kleid."],
        correctIndex: 0,
        explanation:
          "أعجبها ألبوم الصور الذي صنعه الأطفال؛ الزهور والكعكة مذكورتان أيضاً لكنهما ليستا الهدية المقصودة.",
        errorType: "comprehension",
        paragraph: 2,
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الثالث:",
        questionDe: "Was machen die Gäste, bevor sie nach Hause gehen?",
        questionAr: "ماذا يفعل الضيوف قبل عودتهم إلى بيوتهم؟",
        options: [
          "Sie helfen beim Aufräumen.",
          "Sie beginnen einen Ausflug.",
          "Sie holen noch einen Kuchen.",
          "Sie gehen früher am Nachmittag nach Hause.",
        ],
        correctIndex: 0,
        explanation: "تقول الفقرة إن الضيوف يساعدون في ترتيب المكان قبل مغادرتهم.",
        errorType: "comprehension",
        paragraph: 3,
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الأخير:",
        questionDe: "Warum musste Frau Yilmaz diesmal nicht alles allein vorbereiten?",
        questionAr: "لماذا لم تضطر السيدة يلماز هذه المرة إلى إعداد كل شيء وحدها؟",
        options: [
          "Ihre Nachbarn haben ihr geholfen.",
          "Die Feier fand nicht statt.",
          "Ihr Bruder hat die Feier abgesagt.",
          "Sie hat alles allein vorbereitet.",
        ],
        correctIndex: 0,
        explanation: "يربط النص بين عدم الإعداد وحدها ومساعدة الجيران لها.",
        errorType: "comprehension",
        paragraph: 4,
      },
    ],
    redemittel: [
      { de: "Ich lade dich herzlich ein.", ar: "أدعوك بكل سرور." },
      { de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "أطيب التهاني بعيد ميلادك!" },
      { de: "Das Geschenk gefällt mir sehr.", ar: "تعجبني الهدية كثيراً." },
      { de: "Ich bedanke mich bei euch für die Blumen.", ar: "أشكركم على الزهور." },
    ],
    discussionAr:
      "صِف مناسبةً حضرتها أو نظّمتها، أو استخدم تفاصيل خيالية. اذكر من دُعي وما الذي أعجبك، واستعمل فعلاً واحداً من أمثلة Dativ مثل gefallen أو gratulieren. يمكنك كتابة الإجابة أو قولها للتدرب؛ النشاط مفتوح ولا يُسجَّل دليلاً على إتقان التحدث.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "دعوة عيد ميلاد",
        lines: [
          { speaker: "Mona", de: "Sami, ich habe am Samstag Geburtstag!", ar: "سامي، عيد ميلادي يوم السبت!" },
          { speaker: "Sami", de: "Herzlichen Glückwunsch! Was hast du geplant?", ar: "أطيب التهاني! ماذا خططتِ؟" },
          { speaker: "Mona", de: "Ich mache eine Party. Ich lade dich ein!", ar: "سأقيم حفلة. أدعوك!" },
          { speaker: "Sami", de: "Gern! Wann beginnt die Feier?", ar: "بكل سرور! متى تبدأ المناسبة؟" },
          { speaker: "Mona", de: "Die Feier beginnt um sieben Uhr bei mir zu Hause.", ar: "تبدأ المناسبة في السابعة في منزلي." },
          { speaker: "Sami", de: "Super! Ich bringe ein Geschenk mit.", ar: "رائع! سأحضر هدية." },
          { speaker: "Mona", de: "Danke dir! Du bist ein guter Freund.", ar: "شكراً لك! أنت صديق جيد." },
        ],
      },
      {
        id: "l2",
        title: "حديث قصير في المناسبة",
        lines: [
          { speaker: "Anna", de: "Das Geschenk gefällt mir sehr! Danke.", ar: "تعجبني الهدية كثيراً! شكراً." },
          { speaker: "Karim", de: "Gern geschehen! Und die Torte?", ar: "على الرحب والسعة! وماذا عن التورتة؟" },
          { speaker: "Anna", de: "Die Torte ist lecker! Wer hat sie gebacken?", ar: "التورتة لذيذة! من خبزها؟" },
          { speaker: "Karim", de: "Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.", ar: "خبزتها أمي. أساعدها في المطبخ." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الأول واختر الإجابة:",
        questionDe: "An welchem Tag hat Mona Geburtstag?",
        questionAr: "في أي يوم عيد ميلاد منى؟",
        options: ["am Samstag", "am Sonntag", "am Freitag", "am Montag"],
        correctIndex: 0,
        explanation: "تقول Mona في بداية الحوار إن عيد ميلادها يوم السبت.",
        errorType: "comprehension",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الأول واختر الإجابة:",
        questionDe: "Um wie viel Uhr beginnt die Feier?",
        questionAr: "في أي ساعة تبدأ المناسبة؟",
        options: ["um sieben Uhr", "um acht Uhr", "um sechs Uhr", "um neun Uhr"],
        correctIndex: 0,
        explanation: "تذكر Mona أن المناسبة تبدأ عند الساعة السابعة في منزلها.",
        errorType: "comprehension",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني واختر الإجابة:",
        questionDe: "Wer hat die Torte gebacken?",
        questionAr: "من خبز التورتة؟",
        options: ["Karims Mutter", "Anna", "Karim", "Monas Mutter"],
        correctIndex: 0,
        explanation: "يقول Karim إن أمه هي التي خبزت التورتة، لا Anna ولا هو.",
        errorType: "comprehension",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "النبر وأصوات مختارة في مفردات المناسبة",
    items: [
      {
        de: "das Geschenk",
        ar: "الهدية",
        note: "DWDS: [ɡəˈʃɛŋk]؛ النبر على المقطع الثاني، وsch يمثّل /ʃ/.",
      },
      {
        de: "feiern",
        ar: "يحتفل",
        note: "Wiktionary (IPA): [ˈfaɪ̯ɐn]؛ النبر على المقطع الأول، وei ثنائي الصوت /aɪ̯/.",
      },
      {
        de: "die Torte",
        ar: "التورتة",
        note: "Wiktionary (IPA): [ˈtɔʁtə]؛ النبر على Tor، والصائت o قصير مفتوح نسبياً، والنهاية -e ضعيفة.",
      },
      {
        de: "gratulieren",
        ar: "يهنئ",
        note: "Wiktionary (IPA): [ɡʁatuˈliːʁən]؛ النبر على المقطع lie كما يوافق تقطيع Duden؛ يختلف تحقيق r إقليمياً.",
      },
      {
        de: "die Einladung",
        ar: "الدعوة",
        note: "Wiktionary (IPA): [ˈaɪ̯nˌlaːdʊŋ]؛ النبر الرئيس على Ein- والثانوي على الجزء الثاني، وei يمثّل /aɪ̯/.",
      },
      {
        de: "der Glückwunsch",
        ar: "التهنئة",
        note: "Wiktionary (IPA): [ˈɡlʏkˌvʊnʃ]؛ انتبه إلى ü القصير /ʏ/ وإلى w=[v] وsch=[ʃ].",
      },
    ],
    tip:
      "استخدم زر الاستماع لتوليد الصوت عبر محرك الكلام في المتصفح ثم قلّد النبر؛ قد يختلف الصوت باختلاف المتصفح والجهاز. لا تمثل الكتابة العربية مقابلاً دقيقاً للأصوات الألمانية؛ ورموز IPA تقريبية لنطق معياري فوق إقليمي. تقييم النطق هنا آلي عند توفر التعرف الصوتي، وقد يتأثر بدعم المتصفح وجودة الميكروفون؛ لا يعد حكماً بشرياً ولا يثبت وحده الإتقان.",
    shadowing: [
      {
        de: "Herzlichen Glückwunsch zum Geburtstag!",
        ar: "أطيب التهاني بعيد ميلادك!",
        tip: "قسّم العبارة إلى وحدات قصيرة؛ في Herzlichen يُنطق z صوتاً مركباً قريباً من /ts/.",
      },
      {
        de: "Ich lade dich herzlich ein.",
        ar: "أدعوك بكل سرور.",
        tip: "حافظ على إيقاع الجملة؛ ein في آخر الجملة الرئيسية جزء منفصل من الفعل einladen.",
      },
      {
        de: "Das Geschenk gefällt mir.",
        ar: "تعجبني الهدية.",
        tip: "اسمع النبر في gefällt، وانتبه إلى ä المفتوحة /ɛ/؛ لا تعتمد على تهجئة عربية تقريبية.",
      },
      {
        de: "Ich helfe dir gern.",
        ar: "أساعدك بسرور.",
        tip: "انطق e في المقطع الأول من helfe /ɛ/ قصيرةً واضحة، وخفّف النهاية -e إلى /ə/؛ استمع إلى الإيقاع ثم كرر العبارة كاملة.",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة دعوة قصيرة بالألمانية تتضمن اليوم والساعة والمكان:",
      prompt: "اكتب: «أدعوك إلى حفلة عيد ميلادي يوم السبت الساعة السادسة مساءً في منزلي.»",
      acceptedAnswers: [
        "Ich lade dich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich am Samstag um 18 Uhr zu meiner Geburtstagsfeier bei mir zu Hause ein.",
        "Am Samstag um 18 Uhr lade ich dich zu meiner Geburtstagsfeier bei mir zu Hause ein.",
      ],
      sampleAnswer:
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
      explanation:
        "في هذا المثال يأتي الشخص المدعو بعد einladen في Akkusativ (dich)، ويأتي المفعول بعد zu في Dativ (zu meiner Geburtstagsfeier). وفي الجملة الرئيسية ينفصل ein ويقع في آخرها.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بضمير Dativ المناسب لكل فعل:",
      template: "Ich helfe ___ (هي). Das Geschenk gefällt ___. (أنا) Ich gratuliere ___ zum Geburtstag. (أنتَ)",
      blanks: [
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "dir", options: ["dir", "dich", "mir"] },
      ],
      explanation:
        "تأخذ الأفعال في الأمثلة متمماً في Dativ: helfen ihr، gefallen mir، gratulieren dir.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع ثم اكتب الجملة كما تسمعها:",
      audioText: "Das Geschenk gefällt mir sehr.",
      explanation:
        "الهدية تعجبني كثيراً؛ gefallen يتطلب هنا ضميراً في Dativ: mir. المهمة إملاء مضبوط وليست تقويماً للنطق.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب رداً قصيراً يقبل الدعوة بأدب:",
      prompt: "اكتب: «شكراً على الدعوة، سأحضر بكل سرور.» بالألمانية.",
      acceptedAnswers: [
        "Danke für die Einladung. Ich komme gern.",
        "Vielen Dank für die Einladung. Ich komme gern.",
        "Danke für die Einladung. Ich komme gerne.",
        "Vielen Dank für die Einladung. Ich komme gerne.",
      ],
      sampleAnswer: "Danke für die Einladung. Ich komme gern.",
      explanation:
        "الرد يشكر على الدعوة باستعمال für + Akkusativ، ثم يقبلها بعبارة Ich komme gern. هذه إجابة كتابية مضبوطة.",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة بعد الفعل:",
      questionDe: "Ich helfe ___ Vater beim Aufräumen.",
      options: ["dem", "den", "der", "das"],
      correctIndex: 0,
      explanation: "helfen يطلب متمماً في Dativ؛ Vater مذكر مفرد، لذلك نقول dem Vater.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Das Buch gehört ___ Mutter.",
      options: ["der", "dem", "den", "die"],
      correctIndex: 0,
      explanation: "صاحبة الكتاب تأتي بعد gehören في Dativ؛ Mutter مؤنث، لذا die → der.",
      errorType: "case",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صلّ الفعل بمعناه في الجملة المستهدفة:",
      pairs: [
        { left: "helfen", right: "يساعد" },
        { left: "gefallen", right: "يعجب" },
        { left: "gehören", right: "يخصّ / يكون ملكاً لـ" },
        { left: "gratulieren", right: "يهنئ" },
        { left: "danken", right: "يشكر" },
      ],
      explanation:
        "هذه معانٍ شائعة للأفعال في سياق الدرس؛ احفظ كل فعل مع متمّمه، لا مع معنى عربي منفصل فقط.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات وفق النمط: الفاعل + الفعل + متمم Dativ + المكان:",
      tokens: ["dem", "Ich", "Garten", "Vater", "im", "helfe", "."],
      correctSentence: "Ich helfe dem Vater im Garten.",
      explanation: "helfe هو الفعل المصرف في الموقع الثاني، وdem Vater متمم helfen في Dativ.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الضمير في جملة تهنئة موجّهة إلى المخاطَب (أنتَ):",
      wrongSentence: "Ich gratuliere dich zum Geburtstag.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mir", "ihn"],
      explanation: "gratulieren يأخذ الشخص المهنّأ في Dativ: dir.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بأداة Dativ المناسبة لكل اسم:",
      template: "Ich danke ___ Freund (مذكر). Wir helfen ___ Oma (مؤنث). Das Buch gehört ___ Kind (محايد).",
      blanks: [
        { correct: "dem", options: ["dem", "der", "den"] },
        { correct: "der", options: ["dem", "der", "den"] },
        { correct: "dem", options: ["dem", "der", "den"] },
      ],
      explanation: "بعد الأفعال المحددة في الأمثلة: المذكر والمحايد dem، والمؤنث der.",
      errorType: "case",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل المعنى إلى جملة «أنا أساعد الأب» مستخدماً helfen، وانتبه لتغير الحالة:",
      prompt: "Ich sehe den Vater. → (أنا أساعد الأب)",
      acceptedAnswers: ["Ich helfe dem Vater.", "Ich helfe dem Vater"],
      sampleAnswer: "Ich helfe dem Vater.",
      explanation:
        "هذا تحويل إلى فعل ومعنى جديدين لا تبديل شكلي للحالة داخل الجملة نفسها: sehen يأخذ Akkusativ، أما helfen فيأخذ Dativ.",
      errorType: "case",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر معنى الكلمة:",
      questionDe: "die Einladung",
      questionAr: "ما معنى die Einladung؟",
      options: ["الدعوة", "الهدية", "المناسبة", "التهنئة"],
      correctIndex: 0,
      explanation: "die Einladung هي الدعوة إلى زيارة أو مشاركة في مناسبة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "اختر الصيغة الصحيحة للاسم المميّز في الجملة:",
      wrongSentence: "Ich helfe den Kinder.",
      wrongWord: "den Kinder",
      correctWord: "den Kindern",
      options: ["den Kindern", "dem Kindern", "den Kinder", "der Kindern"],
      explanation:
        "Dativ الجمع يأخذ den، ويضاف ‑n عادةً إلى الاسم إن لم يكن جمعه منتهياً بـ‑n أو ‑s: Kinder → Kindern.",
      errorType: "case",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع ثم اكتب الجملة:",
      audioText: "Wir gratulieren der Nachbarin zum neuen Job.",
      explanation:
        "الشخص الذي نهنئه يأتي في Dativ (der Nachbarin)، والتهنئة على الحدث تأتي في هذا النمط مع zu + Dativ (zum neuen Job).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة gefallen التي توافق الفاعل:",
      template: "Das Fotoalbum ___ Frau Yilmaz besonders gut. Die Blumen ___ der Nachbarin auch.",
      blanks: [
        { correct: "gefällt", options: ["gefällt", "gefallen", "gefällst"] },
        { correct: "gefallen", options: ["gefallen", "gefällt", "gefällst"] },
      ],
      explanation:
        "Das Fotoalbum فاعل مفرد فيأخذ gefällt؛ Die Blumen فاعل جمع فيأخذ gefallen. الشخص بعد gefallen في Dativ.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر المناسب لوسيلة النقل:",
      questionDe: "Wir fahren ___ dem Zug zur Feier.",
      options: ["mit", "für", "ohne", "gegen"],
      correctIndex: 0,
      explanation: "للتعبير عن وسيلة النقل نقول mit dem Zug؛ mit يحكم Dativ. أما für وohne وgegen فتطلب Akkusativ في تراكيبها المعتادة، فلا تلائم dem هنا.",
      errorType: "preposition",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل باسم الملكية وحرف الجر المناسبين:",
      template: "Ich gratuliere ___ Nachbarin ___ neuen Job. (جارتي / على)",
      blanks: [
        { correct: "meiner", options: ["meiner", "meine", "meinen"] },
        { correct: "zum", options: ["zum", "zur", "von"] },
      ],
      explanation:
        "الشخص بعد gratulieren في Dativ: meiner Nachbarin. وللمناسبة/الحدث يستعمل المثال zu + Dativ: zum neuen Job.",
      errorType: "case",
    },
    {
      id: "e14",
      type: "fill-blank",
      instructionAr: "أكمل بحسب المعنى: وجهة الحركة أولاً، ثم مكان الاحتفال:",
      template: "Die Gäste kommen von draußen und gehen ___ Innenhof. Danach feiern sie ___ Innenhof.",
      blanks: [
        { correct: "in den", options: ["in den", "im", "in der"] },
        { correct: "im", options: ["im", "in den", "in der"] },
      ],
      explanation:
        "في الجملة الأولى، gehen in den Innenhof يحدد وجهة الوصول (Wohin?)؛ أما im فيصف مكاناً لا وجهة، وin der لا يطابق جنس Innenhof المذكر. وفي الثانية، feiern im Innenhof يصف مكان الاحتفال (Wo?)؛ أما in den فيدل على وجهة، وin der لا يطابق الجنس. نختار الحالة بحسب علاقة المكان/الوجهة، لا بحسب وجود حركة فقط.",
      errorType: "case",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich helfe den Vater.",
        right: "Ich helfe dem Vater.",
        whyAr:
          "الفعل helfen يطلب Dativ في معنى المساعدة؛ Vater مفرد مذكر فتكون الأداة dem. لا تستبدلها بـden اعتماداً على ترجمة المفعول العربي.",
      },
      {
        wrong: "Ich gratuliere dich zum Geburtstag.",
        right: "Ich gratuliere dir zum Geburtstag.",
        whyAr:
          "يأخذ gratulieren الشخص المهنّأ في Dativ، لذلك نستخدم dir. أما zum Geburtstag فتركيب zu + Dativ مستقل في الجملة.",
      },
      {
        wrong: "Das Geschenk gefällt ich.",
        right: "Das Geschenk gefällt mir.",
        whyAr:
          "الشخص الذي يعجبه الشيء متمم Dativ بعد gefallen: mir. الهدية هي الفاعل الألماني في المثال، فلا نضع ضمير ich مكان المتمم.",
      },
      {
        wrong: "Die Blumen gefällt mir.",
        right: "Die Blumen gefallen mir.",
        whyAr:
          "الفاعل Die Blumen جمع، ولذلك يطابقه الفعل gefallen. الضمير mir متمم Dativ ولا يغيّر عدد الفعل.",
      },
      {
        wrong: "Ich helfe den Kinder.",
        right: "Ich helfe den Kindern.",
        whyAr:
          "في Dativ الجمع تصبح Kinder صيغة Kindern؛ أداة den وحدها لا تكفي هنا. لا تزد نوناً ثانية إذا انتهى الجمع أصلاً بـ‑n أو ‑s، مثل Eltern أو Autos.",
      },
      {
        wrong: "Wir feiern in den Innenhof.",
        right: "Wir feiern im Innenhof.",
        whyAr:
          "الاحتفال يحدث داخل الساحة، فالسؤال Wo? والمكان Dativ: im Innenhof. أما in den Innenhof فوجهةٌ إليها، كما في Wir gehen in den Innenhof.",
      },
    ],
    eselsbruecken: [
      "احفظ الفعل مع الحالة التي يطلبها في معناه المحدد؛ لا تستخرج حالة الألمانية من ترجمة عربية مفردة.",
      "في Dativ الجمع: den + الاسم، وتزاد ‑n إذا لم ينتهِ الجمع بـ‑n أو ‑s؛ Kinder → den Kindern، Eltern → den Eltern.",
    ],
    culturalNote: {
      title: "عبارة تهنئة وليست قاعدة اجتماعية",
      content:
        "«Herzlichen Glückwunsch zum Geburtstag!» صيغة تهنئة ألمانية شائعة. عادات الاحتفال واستقبال الضيوف وتقديم الهدايا تختلف بين الأشخاص والأسر؛ ومشهد الدرس خيالي للتدريب اللغوي، لا وصفٌ موحد لكل الناطقين بالألمانية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Das Geschenk gefällt ___ Kind.",
      options: ["dem", "den", "der", "die"],
      correctIndex: 0,
      explanation: "Kind محايد مفرد، لذلك تكون أداة Dativ هي dem. في هذا المثال Das Geschenk هو الفاعل النحوي، وdem Kind هو الشخص الذي تعجبه الهدية.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الصحيح:",
      questionDe: "Ich danke ___ für die Blumen. (أنتَ)",
      options: ["dir", "dich", "mir", "mich"],
      correctIndex: 0,
      explanation: "الشخص بعد danken في هذا التركيب يأتي في Dativ: dir؛ وfür die Blumen مجموعة أخرى في Akkusativ.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "ابدأ بالفاعل، ثم رتّب الفعل ومتمم Dativ:",
      tokens: ["gefällt", "der", "Nachbarin", "Das", "Fotoalbum", "."],
      correctSentence: "Das Fotoalbum gefällt der Nachbarin.",
      explanation:
        "Das Fotoalbum هو الفاعل المفرد، وder Nachbarin الشخص الذي يعجبه الشيء في Dativ.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر أداة التعريف الصحيحة للاسم المميّز:",
      wrongSentence: "Ich helfe die Oma im Hof.",
      wrongWord: "die",
      correctWord: "der",
      options: ["der", "dem", "den", "das"],
      explanation: "Oma مؤنث، وhelfen يأخذ Dativ؛ لذلك die تتحول إلى der Oma.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بضمير Dativ المناسب:",
      template: "Kannst du ___ helfen? (أنا) Das Kleid gefällt ___. (هي)",
      blanks: [
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
      ],
      explanation: "helfen → mir، وgefallen → ihr في هذين المثالين.",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Fest", ar: "المناسبة / الاحتفال", example: "Das Fest war schön.", exampleAr: "كانت المناسبة جميلة.", level: "A2" },
    { id: "fc2", de: "die Einladung", ar: "الدعوة", example: "Danke für die Einladung!", exampleAr: "شكراً على الدعوة!", level: "A2" },
    { id: "fc3", de: "feiern", ar: "يحتفل", example: "Wir feiern am Samstag.", exampleAr: "نحتفل يوم السبت.", level: "A2" },
    { id: "fc4", de: "das Geschenk", ar: "الهدية", example: "Das Geschenk ist schön.", exampleAr: "الهدية جميلة.", level: "A2" },
    { id: "fc5", de: "helfen + Dativ", ar: "يساعد شخصاً", example: "Ich helfe dir.", exampleAr: "أساعدك.", level: "A2" },
    { id: "fc6", de: "gefallen + Dativ", ar: "يعجب شخصاً", example: "Das Geschenk gefällt mir.", exampleAr: "تعجبني الهدية.", level: "A2" },
    { id: "fc7", de: "gehören + Dativ", ar: "يخصّ / يكون ملكاً لـ", example: "Das Buch gehört meinem Bruder.", exampleAr: "الكتاب ملك لأخي.", level: "A2" },
    { id: "fc8", de: "gratulieren + Dativ", ar: "يهنئ شخصاً", example: "Ich gratuliere dir zum Geburtstag.", exampleAr: "أهنئك بعيد ميلادك.", level: "A2" },
    { id: "fc9", de: "der Geburtstag", ar: "عيد ميلاد شخص", example: "Sie hat am Samstag Geburtstag.", exampleAr: "عيد ميلادها يوم السبت.", level: "A2" },
    { id: "fc10", de: "der Gast, die Gäste", ar: "الضيف / الضيوف", example: "Die Gäste kommen um fünf Uhr.", exampleAr: "يصل الضيوف في الخامسة.", level: "A2" },
    { id: "fc11", de: "der Innenhof", ar: "الساحة الداخلية للمبنى", example: "Wir feiern im Innenhof.", exampleAr: "نحتفل في الساحة الداخلية للمبنى.", level: "A2" },
    { id: "fc12", de: "sich bei jemandem für etwas bedanken", ar: "يشكر شخصاً على شيء", example: "Ich bedanke mich bei dir für die Blumen.", exampleAr: "أشكرك على الزهور.", level: "A2" },
    { id: "fc13", de: "die Nachbarin", ar: "الجارة", example: "Die Nachbarin kommt zur Feier.", exampleAr: "تأتي الجارة إلى المناسبة.", level: "A2" },
    { id: "fc14", de: "das Fotoalbum", ar: "ألبوم الصور", example: "Das Fotoalbum gefällt Frau Yilmaz.", exampleAr: "ألبوم الصور يعجب السيدة يلماز.", level: "A2" },
    { id: "fc15", de: "die Torte", ar: "تورتة: كعكة بطبقات غالباً، ومحشوة أو مزيّنة", example: "Die Torte ist lecker.", exampleAr: "التورتة لذيذة.", level: "A2" },
  ],

  mediation: [
    {
      id: "med-a2-09-1",
      type: "relay-instructions",
      titleAr: "انقل تفاصيل دعوة عيد ميلاد إلى العربية",
      sourceDe:
        "Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.",
      taskAr: "انقل الدعوة بالعربية، مع ذكر اليوم والساعة والمكان وما يطلبه صاحب الدعوة.",
      modelAnswerAr:
        "«أصدقائي الأعزاء، سأحتفل بعيد ميلادي يوم السبت في السادسة مساءً في منزلي. تعالوا جميعاً، وأحضروا معكم روحاً مرحة!»",
      keyPointsAr: [
        "ذكر يوم السبت والساعة السادسة مساءً",
        "ذكر أن المكان هو منزل صاحب الدعوة",
        "نقل طلب الحضور بروح مرحة دون تغيير المعنى",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a2-09-1",
      scenarioAr: "تتلقى دعوة عيد ميلاد؛ تدرّب على قبولها أو الاعتذار عنها بأدب.",
      scenarioDe: "Geburtstagseinladung — höflich annehmen oder absagen.",
      strategyAr: "يمكنك قبول الدعوة، أو الاعتذار بوضوح مع اقتراح لقاء آخر؛ كلاهما ردّ ملائم للسياق.",
      rounds: [
        {
          speakerDe: "Ich feiere am Samstag meinen Geburtstag. Kommst du?",
          speakerAr: "سأحتفل السبت بعيد ميلادي. هل ستأتي؟",
          options: [
            {
              de: "Ja, gern! Um wie viel Uhr und wo?",
              ar: "نعم، بكل سرور! في أي ساعة وأين؟",
              best: true,
              replyDe: "Um 18 Uhr bei mir zu Hause.",
              replyAr: "الساعة السادسة مساءً في منزلي.",
            },
            {
              de: "Danke für die Einladung! Am Samstag kann ich leider nicht. Können wir uns ein anderes Mal treffen?",
              ar: "شكراً على الدعوة! للأسف لا أستطيع يوم السبت. هل يمكن أن نلتقي في وقت آخر؟",
              best: true,
              replyDe: "Schade, aber gern. Wir finden einen anderen Termin.",
              replyAr: "هذا مؤسف، لكن يسعدني ذلك. سنجد موعداً آخر.",
            },
          ],
        },
        {
          speakerDe: "Um 18 Uhr bei mir. Bringst du etwas mit?",
          speakerAr: "في السادسة مساءً عندي. هل ستحضر شيئاً؟",
          options: [
            {
              de: "Ja, ich bringe einen Kuchen mit!",
              ar: "نعم، سأحضر كعكة!",
              best: true,
              replyDe: "Toll, danke! Bis Samstag!",
              replyAr: "رائع، شكراً! إلى السبت!",
            },
            {
              de: "Gern, ich bringe eine Kleinigkeit mit. Passt das?",
              ar: "بكل سرور، سأحضر شيئاً بسيطاً. هل يناسبك ذلك؟",
              best: true,
              replyDe: "Ja, das passt sehr gut. Danke!",
              replyAr: "نعم، هذا مناسب جداً. شكراً!",
            },
          ],
        },
      ],
    },
  ],
};

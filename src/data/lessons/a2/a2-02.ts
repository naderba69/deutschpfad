import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-02: مواد مختارة عن الصحة والطبيب — أعراض، أفعال ناقصة، ووثائق صحية
 * مع أمثلة موجّهة؛ لا تمثل مساراً طبياً كاملاً أو اعتماداً منهجياً.
 */
export const lessonA202: Lesson = {
  id: "a2-02",
  unitId: "a2-02",
  level: "A2",
  order: 1,
  titleDe: "Beim Arzt",
  titleAr: "الصحة والطبيب",
  summary:
    "موضوعات مختارة في وصف أعراض شائعة، واستعمال sollen/sollten ونفي الإذن أو الوجوب، ومفردات زيارة الطبيب، وبعض الأفعال الانعكاسية؛ مع مهام موجّهة للقراءة والاستماع والكتابة. التفاعل والنطق والوساطة هنا أنشطة تدريبية ولا تثبت إتقاناً عاماً أو اعتماداً.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann häufige Schmerzangaben in den geübten Mustern ergänzen und einen kurzen Symptom-Satz schreiben.",
      ar: "أن أختار الصيغة المناسبة في مثالين عن الألم، وأكتب جملة محدّدة بـhaben + Kopfschmerzen.",
      evidence: {
        exerciseIds: ["e1", "e12", "w1"],
        taskIds: [
          "practice:a2-02:e1",
          "flow-practice:a2-02:e1",
          "practice:a2-02:e12",
          "writing:a2-02:w1",
        ],
        labelAr: "اختيار التعبير الشائع Kopfschmerzen، وتصريف tut/tun في مثالين، ثم كتابة جملة محددة تبدأ بـIch عن الصداع.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Kontexten eine Form von sollen oder sollten passend auswählen oder bilden.",
      ar: "أن أختار أو أبني soll/sollten في أمثلة محددة، مع مراعاة أن درجة التوجيه يحددها السياق.",
      evidence: {
        exerciseIds: ["e17", "e21", "e22"],
        taskIds: [
          "practice:a2-02:e17",
          "practice:a2-02:e21",
          "practice:a2-02:e22",
        ],
        labelAr: "تمييز نصيحة أقل مباشرة في e17، وإكمال صيغ sollen/sollten في e21، ثم تحويل جملة موجّهة إلى اقتراح بـsollten في e22.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in den vorgegebenen Beispielen ein Verbot von fehlender Verpflichtung unterscheiden.",
      ar: "أن أميّز في الأمثلة المحددة بين عدم الإذن بـdürfen nicht وعدم لزوم الفعل بـmüssen nicht.",
      evidence: {
        exerciseIds: ["e13", "e14", "e23"],
        taskIds: [
          "practice:a2-02:e13",
          "practice:a2-02:e14",
          "practice:a2-02:e23",
        ],
        labelAr: "اختيار المنع في e13، وفهم الإعفاء في e14، وتصنيف العبارات الأربع المرتبطة بالنص في e23؛ المطلوب إكمال المهام الثلاث كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausdrücklich genannte Informationen in diesem Gesundheitstext finden.",
      ar: "أن أستخرج معلومات مصرّحاً بها في نص القراءة وأسئلته المحددة، لا أن أستنتج جاهزية قراءة عامة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"],
        taskIds: [
          "reading:read-a2-02:rq1",
          "reading:read-a2-02:rq2",
          "reading:read-a2-02:rq3",
          "reading:read-a2-02:rq4",
          "reading:read-a2-02:rq5",
          "reading:read-a2-02:rq6",
        ],
        labelAr: "الإجابة عن أسئلة الأعراض والنصيحة والمنع والعودة إلى العمل في النص المحدد؛ يجب أن تصح الإجابات الست كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann bestimmte Informationen aus den zwei bereitgestellten Hörtexten entnehmen, bevor ich das Transkript öffne.",
      ar: "أن أستخرج معلومات محددة من تمريني الاستماع قبل كشف أيٍّ من نصيهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
          "listening:l2:q3",
        ],
        labelAr: "الإجابة الصحيحة عن الأسئلة الثلاثة قبل كشف التفريغ؛ إجابات ما بعد الكشف لا تدخل في الدليل.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann die in der Zuordnungsaufgabe geübten Gesundheitsdokumente und Nachweise ihren Funktionen zuordnen.",
      ar: "أن أطابق الوصفة والشهادة المرضية والإحالة وبطاقة التأمين بوظائفها في تمرين المطابقة المحدد، من دون تعميم النظام على كل حالة.",
      evidence: {
        exerciseIds: ["e19"],
        taskIds: ["practice:a2-02:e19"],
        labelAr: "إكمال أزواج المطابقة الأربعة في e19؛ لا يقيس التمرين متى تكون الإحالة مطلوبة قانونياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann ausgewählte reflexive Formen und Pronomen in den vorgegebenen Sätzen ergänzen.",
      ar: "أن أختار الضمائر الانعكاسية وصيغتها الألمانية المناسبة في الأمثلة المحددة.",
      evidence: {
        exerciseIds: ["e15", "e16"],
        taskIds: [
          "practice:a2-02:e15",
          "practice:a2-02:e16",
        ],
        labelAr: "إكمال ضمائر ich/er/wir في e15، وتصحيح mich إلى mir في تركيب غسل اليدين المحدد في e16.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann vorgegebene Gesundheitssätze mit sollen schriftlich ergänzen und eine kurze Diktatzeile verschriftlichen.",
      ar: "أن أكمل تصريفات sollen في جمل مكتوبة، ثم أكتب جملة قصيرة مملاة كما سُمعت.",
      evidence: {
        exerciseIds: ["w2", "w3"],
        taskIds: [
          "writing:a2-02:w2",
          "writing:a2-02:w3",
        ],
        labelAr: "إكمال أربع خانات في w2 وكتابة نص الإملاء القصير في w3؛ هذا تدريب موجّه لا يقيس كتابة حرة.",
        completion: "all-correct",
      },
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في المثال التدريبي، Sie sollten sich ausruhen اقتراحٌ، وSie dürfen nicht rauchen منعٌ. يساعدك الفعل الناقص على فهم المعنى، لكن السياق يظل مهماً. نراجع اليوم صيغاً سبق أن قابلت بعضها في دروس A1.",
    motivatingQuestionDe: "Was fehlt Ihnen?",
    contextAr:
      "موضوعات لغوية مختارة في الجسم والأعراض، وصيغ sollen/sollten وdürfen/müssen، وبعض عبارات العيادة والوثائق، ثم أفعال انعكاسية شائعة. المحادثة والنصوص أمثلة تدريبية وليست وصفاً كاملاً للرعاية الصحية أو لامتحان رسمي.",
    contextDe: "Ich habe Kopfschmerzen und Fieber.",
    connectionToPreviousAr:
      "تتذكر من A1: Ich habe Hunger (عندي جوع). اليوم نعمم: Ich habe Kopfschmerzen (عندي صداع) — نفس البنية مع haben + اسم.",
    activateVocabulary: [
      { de: "der Körper", ar: "الجسم" },
      { de: "der Kopf", ar: "الرأس" },
      { de: "die Schmerzen", ar: "الآلام" },
      { de: "der Termin", ar: "الموعد" },
      { de: "der Arzt", ar: "الطبيب" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): اختر الصيغة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي جوع.",
      options: ["Hunger", "hungrig", "der Hunger", "hungrig sein"],
      correctIndex: 0,
      explanation: "تذكر: Ich habe Hunger (الجوع اسم مع haben).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-10 — العمل والمهن): اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärzte", "Ärztinnen"],
      correctIndex: 0,
      explanation: "المهن: Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr:
        "مراجعة من A1 (درس a1-09 — المواعيد والتقويم): رتّب الجملة:",
      tokens: ["ist", "Der", "Termin", "Montag", "am", "."],
      correctSentence: "Der Termin ist am Montag.",
      explanation: "الموعد يوم الاثنين: am + يوم.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "تراكيب مختارة لوصف الألم والأعراض",
      titleDe: "Körper, Symptome und Schmerzen",
      explanationAr:
        "تُعرض الأعراض الألمانية بأكثر من تركيب. احفظ كل صيغة مع مثالها، ولا تحاول نقل حالة الإعراب حرفياً من العربية.\n\n**١ — haben + اسم عرض:** **Ich habe Kopfschmerzen / Fieber / Husten.** ومن المركّبات الشائعة **Kopf-, Bauch-, Rücken-, Hals-** و**Zahnschmerzen**. يذكر Duden أن **Kopfschmerz** يأتي غالباً في الجمع **Kopfschmerzen**، لكن المفرد موجود أيضاً؛ لذلك نقول هنا «الصيغة الشائعة» لا «الجمع دائماً».\n\n**٢ — العضو + tut/tun weh:** **Mein Rücken tut weh.** · **Meine Augen tun weh.** يتبع الفعلُ الفاعلَ: المفرد **tut** والجمع **tun**.\n\n**٣ — mir ist + صفة في أمثلة الإحساس:** **Mir ist schlecht / schwindelig / heiß / kalt.** الضمير **mir** في هذه البنية الألمانية في حالة **Dativ** ويشير إلى صاحب الإحساس. هذا وصف لحالة ألمانية، لا ترجمة مباشرة لعلامة إعراب عربية.\n\n**٤ — sich fühlen للحالة التي يصفها المتكلم:** **Ich fühle mich nicht gut / schwach.** استعمل الفعل مع الضمير الانعكاسي في هذا المعنى.\n\n**المدة والشدّة:** مع اسم ظاهر، **seit** تأخذ **Dativ**: **seit drei Tagen**؛ أما **seit gestern** فتركيب زمني بلا اسم ظاهر. ومن صفات الشدة الشائعة **leicht, mittel, stark, sehr stark**. المثال **Es tut sehr weh** طبيعي لوصف درجة الألم؛ لا نحوّل اختيار **sehr** هنا إلى قاعدة مطلقة عن كل استعمال لـ**viel**.",
      whyAr:
        "في **Ich bin krank** يكون **ich** فاعلاً في Nominativ مع صفة خبرية. أما **Mir ist schlecht** فهو تركيب ألماني شائع يضع صاحب الإحساس في Dativ؛ لا يلزم أن نعيد بناء المعنى من ترجمة حرفية، ولا أن نساوي Dativ بالإعراب العربي. احفظ البناءين كما هما: **Ich bin krank** و**Mir ist schlecht**.\n\nو**Ich bin schlecht** جملة ممكنة بمعانٍ أخرى، مثل «أنا ضعيف/سيّئ في هذا المجال» إذا دلّ السياق؛ لكنها ليست الصيغة المحايدة للتعبير عن الغثيان.\n\nأما **Kopfschmerz** فالمفرد صحيح، ويذكر Duden أن الاسم يُستعمل غالباً في الجمع. لا يسند ذلك تفسيراً ثقافياً أو اشتقاقياً عن طبيعة الألم؛ يكفي تعلّم العبارة الشائعة **Ich habe Kopfschmerzen**.",
      table: {
        title: "تراكيب ألمانية شائعة في وصف الأعراض",
        columns: ["البنية", "المثال", "متى؟"],
        rows: [
          {
            label: "haben + Schmerzen",
            cells: ["Ich habe Kopfschmerzen.", "صيغة شائعة لاسم الألم؛ لا تعني أن كل ألم يُبنى هكذا"],
          },
          {
            label: "العضو + tut weh",
            cells: ["Mein Rücken tut weh.", "ألمٌ موضعيّ محدّد"],
          },
          {
            label: "العضو (جمع) + tun weh",
            cells: ["Meine Augen tun weh.", "الجمع ⟵ tun لا tut"],
          },
          {
            label: "mir ist + صفة",
            cells: [
              "Mir ist schlecht / schwindelig.",
              "تعبير ألماني عن إحساس؛ mir في Dativ هنا",
            ],
          },
          {
            label: "sich fühlen",
            cells: [
              "Ich fühle mich nicht gut.",
              "حالة عامة؛ صيغة الفعل انعكاسية في هذا المعنى",
            ],
          },
          {
            label: "haben + عرَض",
            cells: ["Ich habe Fieber / Husten.", "الأعراض لا الآلام"],
          },
          {
            label: "المدّة",
            cells: ["seit drei Tagen / seit gestern", "Dativ مع اسم ظاهر؛ seit gestern تركيب زمني"],
          },
        ],
      },
      examples: [
        {
          de: "Ich habe seit drei Tagen starke Halsschmerzen.",
          ar: "عندي ألمٌ شديد في الحلق منذ ثلاثة أيّام.",
        },
        {
          de: "Mein Rücken tut weh, besonders am Morgen.",
          ar: "ظهري يؤلمني، خاصّةً في الصباح.",
        },
        {
          de: "Meine Augen tun weh, ich arbeite zu viel am Computer.",
          ar: "عيناي تؤلماني، أعمل كثيراً على الحاسوب. (جمع ⟵ tun)",
        },
        {
          de: "Mir ist schlecht und schwindelig.",
          ar: "أشعر بالغثيان والدوار. (mir في Dativ ضمن هذا التركيب الألماني)",
        },
        {
          de: "Ich fühle mich seit gestern sehr schwach.",
          ar: "أشعر بضعفٍ شديد منذ أمس.",
        },
        {
          de: "Haben Sie Fieber? – Ja, achtunddreißig Grad.",
          ar: "أعندك حمّى؟ — نعم، ثمانٍ وثلاثون درجة.",
        },
        {
          de: "Wo tut es weh? – Hier, im Bauch.",
          ar: "أين يؤلمك؟ — هنا، في البطن.",
        },
        {
          de: "Ich bin erkältet und habe Schnupfen.",
          ar: "أنا مصابٌ بالزكام وعندي رشح. (erkältet صفةٌ ⟵ sein)",
        },
      ],
      comparisonWithArabic:
        "قد تنقل العربية الألم بـ«عندي صداع» أو «رأسي يؤلمني»، بينما تُستعمل في الألمانية **Ich habe Kopfschmerzen** و**Mein Kopf tut weh**؛ هذه مقابلات وظيفية لا تطابق حرفي في ترتيب الكلمات أو الحالة.\n\nوللتعبير عن الغثيان يمكن ترجمة **Mir ist schlecht** بـ«أشعر بالغثيان». لكن **mir** هنا صيغة Dativ ألمانية؛ لا يعني ذلك أنها تقابل الجر العربي، ولا أن **Ich bin schlecht** خطأ في كل سياق.\n\nيطلب هذا النشاط وصفاً واضحاً مثل العرض ومدته، ويمكن إضافة صفة شدة. هذا قالب تعليمي للإجابة في التمرين، لا تعميم عن طريقة حديث المرضى بالعربية أو الألمانية، ولا تعليمات تشخيصية.",
      eselsbruecke:
        "للتذكّر: **Ich habe Kopfschmerzen** · **Mein Rücken tut weh** · **Mir ist schlecht** · **Ich fühle mich schwach**. تعلّم **mir** بوصفها Dativ في هذا التركيب الألماني، لا بترجمة «الجرّ» العربية.",
      commonMistakes: [
        {
          wrong: "Ich bin schlecht. (للتعبير المحايد عن الغثيان)",
          right: "Mir ist schlecht.",
          classification: "contextual-alternative",
          whyAr:
            "Ich bin schlecht جملة سليمة في معانٍ أخرى، مثل ضعف الأداء في مجال يحدده السياق؛ لكنها ليست الصيغة المحايدة للغثيان. يُستعمل Mir ist schlecht لهذا الإحساس، وmir Dativ في البناء الألماني؛ لا يعني ذلك مقابلةً مباشرة للجر العربي.",
        },
        {
          wrong: "Ich bin Kopfschmerzen.",
          right: "Ich habe Kopfschmerzen.",
          classification: "error",
          whyAr:
            "في هذا المعنى نقول عادةً Ich habe Kopfschmerzen. أما Ich bin krank فجملة صحيحة لأن krank صفة خبرية؛ لا تُسند إلى sein عبارةُ الاسم Kopfschmerzen بهذه الصورة.",
        },
        {
          wrong: "Meine Augen tut weh.",
          right: "Meine Augen tun weh.",
          classification: "error",
          whyAr:
            "الفاعل Meine Augen جمع؛ لذلك يأتي الفعل بصيغة الجمع tun، لا المفرد tut.",
        },
        {
          wrong: "Ich habe Kopfschmerzen seit drei Tage.",
          right: "Ich habe seit drei Tagen Kopfschmerzen.",
          classification: "error",
          whyAr:
            "الخطأ النحوي المحدد هو drei Tage بعد seit: مع اسم ظاهر في هذا التركيب نستعمل Dativ، seit drei Tagen. أما ترتيب منذ متى والجملة فله بدائل يحددها التركيز، ولا نحتاج إلى ادعاء ترتيب TeKaMoLo إلزامي.",
        },
        {
          wrong: "Es tut viel weh. (في وصف محايد للألم الشديد)",
          right: "Es tut sehr weh.",
          classification: "contextual-alternative",
          whyAr:
            "Es tut sehr weh صيغة محايدة شائعة لتقوية وصف الألم. لا نصف viel بأنه مستحيل في كل تركيب؛ المطلوب هنا اختيار الصيغة الأنسب للسياق المحايد المحدد.",
        },
      ],
      relatedRuleComparison: {
        title: "تراكيب Dativ ظهرت في سياقات سابقة",
        content:
          "تُظهر الدروس السابقة أن Dativ ظهر في أكثر من سياق، لا في درس واحد حصراً: في A1-04 مع بعض تراكيب المكان، وفي A1-06 في مثال helfen، وفي A1-08 مع gefallen/passen/stehen، كما ظهر Mir ist kalt في A1-12. في هذا الدرس نستخدم Mir ist schlecht مثالاً إضافياً على تركيب ألماني يعبّر عن الإحساس.\n\nتختلف وظيفة Dativ بين هذه التراكيب؛ فلا تُختزل كلها إلى قاعدة دلالية واحدة مثل «الشخص متلقٍّ»، ولا يُساوى Dativ بالجرّ العربي. تعلّم كل فعل أو حرف جر أو بناء مع مثاله وحالته، واستعمل ترجمة المعنى لا ترجمة العلامة الإعرابية.",
      },
    },
    {
      id: "t2",
      titleAr: "النصيحة والمنع: sollen · sollten · nicht dürfen · nicht müssen",
      titleDe: "Ratschläge, Verbote und fehlende Notwendigkeit: sollen, sollten, nicht dürfen, nicht müssen",
      explanationAr:
        "في الجملة الرئيسية الخبرية يأتي الفعل الناقص المصرف غالباً في الموقع الثاني، ويأتي مصدر الفعل الآخر في النهاية: **Der Arzt sagt, ich soll mich ausruhen.** تنقل الجملة توجيهاً من الطبيب؛ وقد تستعمل **sollen** أيضاً للتوقع أو التوصية بحسب السياق، فلا تختصره في «أمر الغير» دائماً.\n\n**sollten** هي صيغة Konjunktiv II من **sollen**، وصورتها قد تطابق Präteritum. في نصيحة حاضرة مثل **Sie sollten sich ausruhen** تُستعمل كثيراً لاقتراح أقل مباشرة؛ ليست الصيغة الوحيدة للنصيحة، والسياق هو الذي يحدد القراءة.\n\nفي المقابل، في القراءة المحايدة المقصودة هنا: **Sie dürfen nicht rauchen** تعني عدم الإذن/المنع، أما **Sie müssen nicht kommen** فتعني أن المجيء غير لازم، لا أنه ممنوع.\n\n| **nicht dürfen** = عدم إذن/منع في السياق | **nicht müssen** = عدم وجوب/إعفاء في السياق |\n\nوفي نفي الاسم المنكّر المحايد نقول مثلاً **Sie dürfen keinen Alkohol trinken**؛ صيغة **keinen** هي Akkusativ المذكر من **kein**.\n\nوفي سؤال **Was soll ich machen?** قد يطلب المتكلم نصيحةً أو يسأل عمّا ينبغي فعله؛ لذلك لا تنقل **sollen** دائماً أمراً صادراً عن شخص آخر.",
      whyAr:
        "في هذه الأمثلة، **dürfen** تتعلق بالإذن، و**müssen** بالوجوب: لذلك يختلف معنى **dürfen nicht** عن **müssen nicht**. هذا فرق دلالي مهم في الجمل المعطاة، وليس قاعدة تمنع كل استعمال آخر للفعلين في الألمانية.\n\nتُستعمل **sollten** في أمثلة كثيرة للتوصية أو الاقتراح، وقد تبدو أقل مباشرة من **sollen**؛ لكن **sollen** نفسها قد تؤدي وظيفة النصيحة أو التوجيه، كما قد تدل **sollten** على ماضٍ أو افتراض. لا نفسر ذلك بأن الابتعاد عن الواقع يزيد الأدب في كل موقف.\n\nللمقارنة الوظيفية بالعربية يمكن قول **ليس ضرورياً/لا يلزم** في نفي الوجوب، و**لا يجوز/ممنوع** في نفي الإذن. عبارة **لا يجب** قد تُفهم بطرق مختلفة؛ فالأفضل استخدام المقصود صراحةً. ولا توجد مطابقة صرفية واحدة بين **sollten** وأداة عربية بعينها.",
      table: {
        title: "معانٍ مختارة للأفعال الناقصة في السياق",
        columns: ["الصيغة", "المعنى", "المثال"],
        rows: [
          {
            label: "sollen",
            cells: [
              "توجيه أو نقل ما طُلب؛ المعنى يتحدد بالسياق",
              "Der Arzt sagt, ich soll mich ausruhen.",
            ],
          },
          {
            label: "sollten",
            cells: ["اقتراح/نصيحة في هذا السياق؛ غالباً أقل مباشرة", "Sie sollten sich ausruhen."],
          },
          {
            label: "müssen",
            cells: ["ضرورة بحسب السياق", "Sie müssen heute wiederkommen."],
          },
          {
            label: "nicht müssen",
            cells: ["غير لازم في هذا السياق", "Sie müssen nicht wiederkommen."],
          },
          { label: "dürfen", cells: ["إذن أو سماح بحسب السياق", "Sie dürfen jetzt aufstehen."] },
          {
            label: "nicht dürfen",
            cells: ["عدم إذن/منع في السياق", "Sie dürfen nicht rauchen."],
          },
          {
            label: "kein + اسم",
            cells: ["نفي الاسم", "Sie dürfen keinen Alkohol trinken."],
          },
        ],
      },
      examples: [
        {
          de: "Der Arzt sagt, ich soll mich ausruhen.",
          ar: "يقول الطبيب إن عليّ أن أستريح. (ينقل توجيهاً في هذا السياق)",
        },
        {
          de: "Sie sollten sich ausruhen.",
          ar: "من الأفضل أن تستريح. (اقتراح بصيغة شائعة)",
        },
        {
          de: "Sie dürfen nicht rauchen — das ist sehr wichtig.",
          ar: "ممنوعٌ عليك التدخين — هذا مهمّ جداً. (منع)",
        },
        {
          de: "Sie müssen nicht wiederkommen, wenn es Ihnen besser geht.",
          ar: "لستَ مضطرّاً للعودة إن تحسّنت حالك. (إعفاء لا منع)",
        },
        {
          de: "Du solltest mal zum Arzt gehen.",
          ar: "ينبغي أن تذهب إلى الطبيب. (اقتراح أقل مباشرة بحسب السياق)",
        },
        {
          de: "Sie dürfen keinen Sport machen, solange Sie Fieber haben.",
          ar: "لا يجوز لك ممارسة الرياضة ما دمت مصاباً بالحمى.",
        },
        {
          de: "Was soll ich jetzt machen? – Sie sollten sich ausruhen.",
          ar: "ماذا أفعل الآن؟ — ينبغي أن ترتاح. (سؤالٌ بـsollen وجوابٌ بـsollten)",
        },
        {
          de: "Muss ich heute wiederkommen? – Nein, das müssen Sie nicht.",
          ar: "هل عليّ أن أعود اليوم؟ — لا، لست مضطراً إلى ذلك.",
        },
      ],
      comparisonWithArabic:
        "لتمييز المثالين: **nicht dürfen** = لا يُسمح/ممنوع؛ **nicht müssen** = ليس ضرورياً/لستَ مضطراً. وفي العربية، استخدم عبارة واضحة مثل «لا يجوز» أو «لا يلزم» بدل الاعتماد على «لا يجب» وحدها. أما **sollten** فغالباً ما تقدّم نصيحة أقل مباشرة في هذا السياق؛ احفظها مع مثالها، ولا تجعلها مرادفاً وحيداً للنصيحة.",
      eselsbruecke:
        "اسأل عن المعنى المقصود: هل الفعل **غير مسموح**؟ استعمل **nicht dürfen**. هل الفعل **غير لازم**؟ استعمل **nicht müssen**. وفي النصيحة قد تناسب **sollten**، لكن لا تحكم على الملاءمة من الصيغة وحدها دون سياق.",
      commonMistakes: [
        {
          wrong: "Sie müssen nicht rauchen. (إذا كان المقصود منع التدخين)",
          right: "Sie dürfen nicht rauchen.",
          classification: "contextual-alternative",
          whyAr:
            "الجملة الأولى سليمة لكنها تعني أن التدخين غير لازم؛ لا تدل وحدها على المنع. إذا كان المقصود عدم السماح فاستعمل dürfen nicht. في هذا السياق يتغير المعنى، لا صحة الجملة النحوية.",
        },
        {
          wrong: "Sie dürfen nicht kommen. (إذا كان المقصود: لا داعي أن تأتي)",
          right: "Sie müssen nicht kommen.",
          classification: "contextual-alternative",
          whyAr:
            "Sie dürfen nicht kommen جملة صحيحة تفيد المنع في القراءة المعتادة؛ أما الإعفاء من ضرورة المجيء فيناسبه müssen nicht. اختَر بحسب المعنى المقصود، لا لأن الصيغة الأولى خطأ في ذاتها.",
        },
        {
          wrong: "Sie sollen sich ausruhen. (إذا كان المقصود اقتراحاً أقل مباشرة)",
          right: "Sie sollten sich ausruhen.",
          classification: "contextual-alternative",
          whyAr:
            "sollen قد يفيد توجيهاً أو نصيحة بحسب السياق، فلا يكون خطأ لمجرد ورود نصيحة. sollten صيغة شائعة لاقتراح أقل مباشرة في هذا المثال؛ ولا ندّعي أنها الصيغة الوحيدة أو المطلوبة في كل موقف.",
        },
        {
          wrong: "Sie dürfen nicht Alkohol trinken. (نفي محايد بلا مقابلة)",
          right: "Sie dürfen keinen Alkohol trinken.",
          classification: "pedagogical-simplification",
          whyAr:
            "في النفي المحايد لاسم غير معرّف نستعمل عادةً keinen Alkohol. أما nicht Alkohol فقد يظهر في نفي تقابلي مثل nicht Alkohol, sondern Wasser؛ لذا فالاختيار في المثال مرتبط بالسياق المقصود، لا باستحالة التركيب مطلقاً.",
        },
        {
          wrong: "Du sollst zum Arzt gehen. (إذا كان المراد اقتراحاً أقل مباشرة)",
          right: "Du solltest mal zum Arzt gehen.",
          classification: "contextual-alternative",
          whyAr:
            "Du sollst جملة صحيحة وقد تعبّر عن توجيه قوي أو نصيحة بحسب العلاقة والتنغيم والسياق. Du solltest mal zum Arzt gehen اقتراح شائع أقل مباشرة في هذا المثال؛ لا نصف sollen بالفظاظة حكماً ولا mal بالتلطيف الحتمي.",
        },
      ],
      relatedRuleComparison: {
        title: "مراجعة صيغ سبق أن ظهرت في A1",
        content:
          "في الدروس التي راجعتها من A1 ظهرت صيغ مودالية في مواضع مختلفة: **müssen/dürfen** في A1-04، و**können/möchten** في A1-06، ثم **wollen/sollen** في A1-14. لا يعني ذلك أن درس A1-14 وحده درّب الأفعال الستة كلها، ولا أن معانيها اكتملت في هذه الوحدات.\n\nيركّز هذا الدرس على أمثلة سياقية مختارة لـ**sollen/sollten** وعلى الفرق بين **nicht dürfen** و**nicht müssen**. للأفعال الناقصة استعمالات أوسع؛ لا يختزل الجدول كل دلالاتها، ولا يقرر اكتمال منهج أو تسلسل CEFR.",
      },
    },
    {
      id: "t3",
      titleAr: "عبارات ووثائق مختارة في العيادة",
      titleDe: "In der Praxis: ausgewählte Ausdrücke und Dokumente",
      explanationAr:
        "هذه عبارات تدريبية ممكنة للتواصل في العيادة، وليست مساراً ثابتاً لكل زيارة.\n\n**حجز موعد:** **Praxis Dr. Weber, guten Tag! — Guten Tag, ich hätte gern einen Termin.** وقد يُسأل المراجع مثلاً **Waren Sie schon einmal bei uns?** أو **Passt Ihnen Dienstag um zehn?**؛ تختلف الأسئلة والإجراءات بين العيادات.\n\n**عند الاستقبال:** قد تطلب العيادة من المؤمن عليه قانونياً **Ihre Gesundheitskarte / Versichertenkarte, bitte**. وتُستخدم في بعض الحالات وثيقة أخرى لإثبات التأمين؛ غياب البطاقة لا يعني تلقائياً دفع ثمن الزيارة نقداً، لذلك يُستحسن سؤال العيادة أو شركة التأمين.\n\n**عند الطبيب:** **Was fehlt Ihnen?** سؤال عن الشكوى، و**Seit wann haben Sie die Beschwerden?** عن بدايتها. ومن أمثلة التعليمات الممكنة **Atmen Sie tief ein** أو **Machen Sie bitte den Oberkörper frei** بحسب الفحص والحاجة.\n\n**وثائق قد تُذكر:**\n· **das Rezept** وصفة دواء. الأدوية الموصوفة تُصرف في الصيدلية، لكن ليس كل دواء يحتاج وصفة؛ فبعض الأدوية المتاحة دون وصفة تُباع أيضاً خارج الصيدليات.\n· **die Krankschreibung / Arbeitsunfähigkeitsbescheinigung (AU)** إثبات طبي لعدم القدرة على العمل. في نظام التأمين القانوني تُرسل eAU عادةً إلكترونياً، وعلى العامل إبلاغ جهة العمل؛ وتوجد استثناءات وإجراءات أخرى.\n· **die Überweisung** إحالة إلى طبيب/اختصاصي عند الحاجة. يستطيع المريض في حالات كثيرة مراجعة اختصاصي مباشرة، لكن بعض المواعيد أو التعريفات التأمينية تتطلب إحالة؛ تحقّق من العيادة أو شركة التأمين.\n\n**أمر المخاطبة الرسمية Sie:** في الأمثلة يأتي الفعل أولاً ثم **Sie**: **Nehmen Sie … / Atmen Sie … / Gehen Sie …**. هذه أمثلة صياغة، لا دعوى أن كل طبيب يستخدم العبارة نفسها.",
      whyAr:
        "تختلف بعض إجراءات الرعاية بحسب نوع التأمين والحالة. يوضح الموقع الصحي الاتحادي الألماني أن الاختصاصيين يمكن زيارتهم مباشرة في حالات كثيرة، مع وجود استثناءات وإحالات لازمة في حالات محددة؛ كما أن برنامج طبيب الأسرة قد يغيّر المسار. لذلك عُدّلت العبارة القديمة التي جعلت طبيب الأسرة بوابة إلزامية لكل اختصاصي.\n\nكذلك تُستخدم البطاقة الصحية الإلكترونية (eGK) أو وثيقة أخرى لإثبات التأمين، ولا يصح الجزم بأن نسيان بطاقة بعينها يفرض الدفع النقدي دائماً. وبالنسبة إلى AU، يصف المصدر الرسمي الإرسال الإلكتروني المعتاد في التأمين القانوني منذ 2023 مع بقاء واجب إبلاغ جهة العمل؛ فلا نصفها بأنها ورقة يسلمها كل مريض لصاحب العمل.\n\nأخيراً، تُصرف الأدوية الموصوفة في الصيدليات، لكن بعض الأدوية المتاحة دون وصفة تباع خارجها؛ «دواء» لا يعني آلياً «دواء بوصفة». هذه معلومات عامة لتفسير المفردات وليست نصيحة طبية أو قانونية.",
      table: {
        title: "أمثلة لعبارات ووثائق قد تُذكر في العيادة",
        columns: ["الخطوة", "ما يُقال", "ملاحظة"],
        rows: [
          {
            label: "الهاتف",
            cells: ["Ich hätte gern einen Termin.", "صيغة الطلب المهذّبة"],
          },
          {
            label: "الاستقبال",
            cells: ["Ihre Gesundheitskarte oder ein anderer Versicherungsnachweis.", "قد تطلب العيادة إثبات التأمين؛ التفاصيل تختلف"],
          },
          {
            label: "الانتظار",
            cells: ["Nehmen Sie bitte Platz.", "أمرٌ بصيغة Sie: الفعل أوّلاً"],
          },
          {
            label: "الشكوى",
            cells: ["Was fehlt Ihnen?", "سؤال عن الشكوى؛ Ihnen في Dativ مع fehlen"],
          },
          { label: "الفحص", cells: ["Atmen Sie tief ein.", "خذ نفساً عميقاً"] },
          {
            label: "الدواء",
            cells: [
              "Rezept für ein verschreibungspflichtiges Medikament",
              "الأدوية الموصوفة تُصرف في الصيدلية؛ ليست كل الأدوية بوصفة",
            ],
          },
          {
            label: "العمل",
            cells: ["AU / eAU", "إثبات عدم القدرة على العمل؛ الإجراء يختلف وقد يكون إلكترونياً"],
          },
          {
            label: "الأخصّائيّ",
            cells: ["die Überweisung", "قد تُطلب في حالات محددة؛ ليست شرطاً عاماً لكل اختصاصي"],
          },
        ],
      },
      examples: [
        {
          de: "Guten Tag, ich hätte gern einen Termin. Ich habe starke Zahnschmerzen.",
          ar: "نهارك سعيد، أودّ موعداً. عندي ألمٌ شديد في الأسنان.",
        },
        {
          de: "Waren Sie schon einmal bei uns? – Nein, ich bin neu hier.",
          ar: "هل سبق أن زرتنا؟ — لا، أنا جديد هنا.",
        },
        {
          de: "Ihre Gesundheitskarte, bitte. – Ja, gern. Hier ist sie.",
          ar: "بطاقة التأمين الصحي من فضلك. — نعم، تفضل. ها هي.",
        },
        {
          de: "Was fehlt Ihnen denn? – Ich habe seit gestern Fieber.",
          ar: "ما شكواك؟ — عندي حمّى منذ أمس.",
        },
        {
          de: "Ich schreibe Ihnen ein Rezept. Gehen Sie damit in die Apotheke.",
          ar: "سأكتب لك وصفة. اذهب بها إلى الصيدلية.",
        },
        {
          de: "Können Sie mich bitte krankschreiben? Ich informiere meinen Arbeitgeber dann gleich.",
          ar: "هل يمكنك إصدار شهادة بعدم قدرتي على العمل؟ سأبلغ صاحب العمل فوراً.",
        },
        {
          de: "Für diese Untersuchung brauchen Sie eine Überweisung zum Facharzt.",
          ar: "تحتاج إلى إحالة لهذا الفحص عند الاختصاصي. (في هذه الحالة المحددة)",
        },
        {
          de: "Gute Besserung! – Danke schön.",
          ar: "أتمنى لك الشفاء العاجل! — شكراً جزيلاً. (عبارة شائعة في هذا السياق)",
        },
      ],
      comparisonWithArabic:
        "**Gute Besserung!** عبارة ألمانية شائعة لتمني التحسن لشخص مريض أو مصاب؛ تقابلها وظيفياً عبارات مثل «سلامتك»، من دون افتراض أنها تُقال دائماً أو أن تركها وقاحة.\n\nيمكن أن يساعد قالب التدريب **العَرَض + منذ متى + وصف مختصر** على بناء جواب واضح. إنه اقتراح تعليمي للمحادثة، لا قاعدة ثقافية تلزم كل مريض بذكر الشدة تلقائياً.\n\nأما **Was fehlt Ihnen?** فهي عبارة اصطلاحية تسأل عن الشكوى؛ تُترجم بحسب الموقف إلى «ما شكواك؟» أو «ما الذي يزعجك؟». لا حاجة إلى بناء نظرية ثقافية عن تصور المرض انطلاقاً من ترجمة حرفية لكلمة **fehlen**.",
      eselsbruecke:
        "في محادثة تدريبية، يمكن ترتيب الأفكار هكذا: **طلب موعد → وصف الشكوى → فهم التعليمات والوثائق المناسبة للحالة → وداع**. هذه خريطة للتدريب وليست تسلسلاً إلزامياً لكل عيادة. وعند وصف الشكوى، جرّب ذكر العرض والمدة إن كانا معروفين.",
      commonMistakes: [
        {
          wrong: "Was fehlt Sie?",
          right: "Was fehlt Ihnen?",
          classification: "error",
          whyAr:
            "في معنى السؤال عن الشكوى يأخذ fehlen الشخصَ في Dativ: Ihnen. هذه حالة ألمانية تخص هذا البناء، وليست ترجمة لقاعدة الجرّ العربية.",
        },
        {
          wrong: "Ich will einen Termin. (عند طلب مهذّب في هذا المثال)",
          right: "Ich hätte gern einen Termin.",
          classification: "contextual-alternative",
          whyAr:
            "Ich will einen Termin صحيح نحوياً وقد يكون مباشراً بحسب الموقف. Ich hätte gern einen Termin صيغة شائعة مهذبة في الطلب الرسمي؛ ليست الصيغة الوحيدة ولا يعني اختيار الأخرى أنها فظة دائماً.",
        },
        {
          wrong: "Ich kaufe ein verschreibungspflichtiges Medikament im Supermarkt.",
          right: "Ich löse das Rezept in einer Apotheke ein.",
          classification: "error",
          whyAr:
            "في ألمانيا تُصرف الأدوية التي تتطلب وصفة عبر الصيدليات؛ لكن لا نعمّم ذلك على كل دواء، فبعض الأدوية المتاحة دون وصفة يمكن شراؤها خارجها. الخطأ هنا محدد بالدواء الموصوف.",
        },
        {
          wrong: "Nehmen bitte Platz.",
          right: "Nehmen Sie bitte Platz.",
          classification: "error",
          whyAr:
            "في الأمر الرسمي المقصود نذكر ضمير المخاطبة Sie بعد الفعل المصرف: Nehmen Sie bitte Platz.",
        },
        {
          wrong: "Ich brauche eine Krankschreibung für die Apotheke.",
          right: "Für das verschreibungspflichtige Medikament brauche ich ein Rezept.",
          classification: "contextual-alternative",
          whyAr:
            "الجملة مفهومة نحوياً؛ عدم ملاءمتها هنا دلالي/إجرائي لأنها تخلط وظيفة الوثيقتين: AU/Krankschreibung توثّق عدم القدرة على العمل، أما Rezept فيرتبط بصرف دواء موصوف. وفي التأمين القانوني قد تُرسل AU إلكترونياً؛ فلا يلزم افتراض ورقة تُسلّمها للصيدلية أو لصاحب العمل.",
        },
      ],
      relatedRuleComparison: {
        title: "صلة بموضوع المواعيد في A1-09",
        content:
          "تضمّن A1-09 مواد عن المواعيد والتقويم، وعبارات مثل **Ich hätte gern einen Termin**، ويمارس هذا الدرس العبارة في سياق صحي. الاقتباس هنا للمراجعة اللغوية فقط؛ لا يعني أن قائمة العبارات تمثل كل حجز موعد أو كل إجراءات العيادات.\n\nيركّز هذا المقطع على مفردات مختارة: الشكوى، وإثبات التأمين، وبعض الوثائق. قد تختلف الحاجة إلى بطاقة أو AU أو إحالة بحسب الحالة والتأمين؛ راجع الملاحظات والمصادر، ولا تستنتج من المثال قاعدة إجرائية عامة أو تسلسلاً كاملاً لمستويات CEFR.",
      },
    },
    {
      id: "t4",
      titleAr: "الأفعال الانعكاسية في سياق الصحّة والعناية",
      titleDe: "Reflexive Verben rund um Gesundheit und Körperpflege",
      explanationAr:
        "تُستعمل ضمائر انعكاسية مع أفعال ألمانية مختارة، ويُحفظ الفعل مع الضمير والحالة التي يتطلبها المثال.\n\n**waschen** يوضح فرقاً شائعاً: **Ich wasche mich**؛ هنا **mich** مفعول انعكاسي في Akkusativ. ومع ذكر عضو الجسم نقول **Ich wasche mir die Hände**؛ **die Hände** في Akkusativ، و**mir** في Dativ للدلالة على صاحب اليدين. هذا شرح لهذا التركيب، لا قاعدة عامة تقول إن كل ضمير انعكاسي يتحول إلى Dativ عند ظهور أي مفعول آخر.\n\nفي تصريف **waschen**: **ich wasche mich · du wäschst dich · er/sie/es wäscht sich · wir waschen uns · ihr wascht euch · sie/Sie waschen sich**. **sich** تُستخدم للغائب، وللجمع الغائب، وللمخاطبة الرسمية.\n\nفي الأمثلة البسيطة هنا يظهر الضمير قرب الفعل المصرف أو بعد الفاعل: **Ich fühle mich besser** و**Heute fühle ich mich besser**؛ وفي Perfekt: **Ich habe mich gut erholt**. يتغير ترتيب العناصر مع نوع الجملة ومكوّناتها، لذا فهذه أمثلة لا قاعدة «بعد الفعل مباشرةً» لكل تركيب.\n\nقارن أيضاً **Er wäscht sich** (sich في Akkusativ) بـ**Er wäscht sich die Hände** (sich في Dativ، و**die Hände** في Akkusativ): شكل الضمير وحده لا يكفي لتحديد الحالة؛ انظر إلى تركيب الجملة.",
      whyAr:
        "قد تعبر العربية عن معنى بعض الأفعال الألمانية الانعكاسية بفعل مشتق أو فعل غير انعكاسي أو تركيب آخر؛ لا توجد مقابلة آلية بين وزن عربي و**sich**. لذلك تُحفظ الأفعال التي تظهر هنا بوصفها وحدات مع ضمائرها، مثل **sich fühlen** و**sich erholen**.\n\nويفيد التمييز بين مثالين محددين: **Ich wasche mich** (أغتسل/أغسل نفسي) و**Ich wasche mir die Hände** (أغسل يديّ). الأولى فيها ضمير انعكاسي في Akkusativ، والثانية فيها **mir** في Dativ و**die Hände** في Akkusativ. ولا نستنتج حالة الفعل الألماني من تسمية عربية أو ترجمة حرفية.",
      table: {
        title: "أفعال انعكاسية في باب الصحّة",
        columns: ["الفعل", "المعنى", "المثال", "Perfekt"],
        rows: [
          {
            label: "sich fühlen",
            cells: ["يشعر", "Ich fühle mich besser.", "hat sich gefühlt"],
          },
          {
            label: "sich ausruhen",
            cells: [
              "يستريح",
              "Sie sollten sich ausruhen.",
              "hat sich ausgeruht",
            ],
          },
          {
            label: "sich erholen",
            cells: ["يتعافى", "Ich habe mich gut erholt.", "hat sich erholt"],
          },
          {
            label: "sich erkälten",
            cells: [
              "يُصاب بالزكام",
              "Ich habe mich erkältet.",
              "hat sich erkältet",
            ],
          },
          {
            label: "sich verletzen",
            cells: ["يتعرّض لإصابة/يجرح نفسه بحسب السياق", "Er hat sich verletzt.", "hat sich verletzt"],
          },
          {
            label: "sich waschen",
            cells: ["يغتسل", "Ich wasche mich.", "hat sich gewaschen"],
          },
          {
            label: "sich … waschen",
            cells: [
              "يغسل يديه",
              "Ich wasche mir die Hände.",
              "hat sich die Hände gewaschen؛ sich في Dativ وdie Hände في Akkusativ",
            ],
          },
        ],
      },
      examples: [
        {
          de: "Wie fühlen Sie sich heute? – Danke, ich fühle mich besser.",
          ar: "كيف تشعر اليوم؟ — شكراً، أشعر بتحسّن.",
        },
        {
          de: "Sie sollten sich ein paar Tage ausruhen.",
          ar: "ينبغي أن ترتاح بضعة أيّام. (نصيحةٌ بـsollten + انعكاسيّ)",
        },
        {
          de: "Ich habe mich im Urlaub gut erholt.",
          ar: "تعافيتُ جيداً في العطلة.",
        },
        {
          de: "Ich habe mich erkältet und ruhe mich heute aus.",
          ar: "أُصبتُ بنزلة برد وأستريح اليوم.",
        },
        {
          de: "Mein Sohn hat sich beim Fußball am Knie verletzt.",
          ar: "أُصيب ابني في ركبته أثناء كرة القدم.",
        },
        {
          de: "Waschen Sie sich bitte vorher die Hände.",
          ar: "اغسل يديك قبل ذلك من فضلك. (sich هنا في Dativ وdie Hände في Akkusativ)",
        },
        {
          de: "Heute fühle ich mich viel besser als gestern.",
          ar: "أشعر اليوم بتحسّنٍ كبير عن أمس. (الظرف أوّلاً ⟵ الفاعل انزاح)",
        },
        {
          de: "Ruhen Sie sich aus und bleiben Sie zu Hause.",
          ar: "استرح وابقَ في البيت. (أمران بصيغة Sie؛ ausruhen فعل منفصل انعكاسي)",
        },
      ],
      comparisonWithArabic:
        "احفظ الفعل مع الضمير في المعنى المقصود: **sich fühlen**, **sich ausruhen**, **sich erholen**. وفي **waschen** قارن البنيتين فقط: **Ich wasche mich** / **Ich wasche mir die Hände**؛ فالحالة هنا ألمانية (Akkusativ/Dativ)، وليست مقابلة مباشرة لإعراب عربي.",
      eselsbruecke:
        "لا تحفظ الفعل الألماني وحده إذا كان المثال انعكاسياً: تعلّم **sich fühlen** و**sich erholen** مع الضمير. وفي **waschen** احفظ الزوج **mich** بلا مفعول عضو، و**mir + عضو في Akkusativ** في مثال غسل اليدين؛ لا تعمّم الزوج على كل الأفعال.",
      commonMistakes: [
        {
          wrong: "Ich fühle gut. (لوصف حالتي)",
          right: "Ich fühle mich gut.",
          classification: "error",
          whyAr:
            "عند وصف الحالة الجسدية أو النفسية، يُستعمل الفعل هنا انعكاسياً: Ich fühle mich gut. أما fühlen من دون ضمير فيأتي في تراكيب أخرى، مثل etwas fühlen (أشعر بشيء/أتحسّس شيئاً). لذلك لا تنقل Ich fühle gut المعنى المقصود من دون mich.",
        },
        {
          wrong: "Ich habe mich gut erholen.",
          right: "Ich habe mich gut erholt.",
          classification: "error",
          whyAr:
            "بعد haben في Perfekt نحتاج هنا Partizip II erholt، لا المصدر erholen. والعبارة erholt بلا ge-؛ احفظ الصورة المصرفة نفسها.",
        },
        {
          wrong: "Ich wasche mich die Hände.",
          right: "Ich wasche mir die Hände.",
          classification: "error",
          whyAr:
            "في هذا التركيب المحدد تكون die Hände في Akkusativ وmir في Dativ. ليس السبب قاعدةً عامة بأن أي مفعول آخر يغيّر كل ضمير انعكاسي إلى Dativ، ولا أن Dativ يساوي الجرّ العربي.",
        },
        {
          wrong: "Er fühlt mich nicht gut. (لوصف حال Er)",
          right: "Er fühlt sich nicht gut.",
          classification: "contextual-alternative",
          whyAr:
            "في وصف حالة Er نقول Er fühlt sich nicht gut. أما fühlt mich فبنية أخرى يكون فيها mich مفعولاً لشخص آخر بحسب السياق؛ لذلك يُحدد الخطأ بقراءة الجملة على أنها وصف لحال Er.",
        },
        {
          wrong: "Ich habe erkältet. (للتعبير عن الإصابة بنزلة برد)",
          right: "Ich habe mich erkältet.",
          classification: "error",
          whyAr:
            "يحتاج sich erkälten إلى الضمير الانعكاسي في هذا الاستعمال، ويأخذ Perfekt هنا haben + erkältet. وهناك جملة صحيحة أخرى لوصف الحالة الحالية: Ich bin erkältet؛ ليست خطأً، لكنها بناء مختلف.",
        },
      ],
      relatedRuleComparison: {
        title: "أمثلة انعكاسية في A2-11",
        content:
          "يعرض A2-11 أفعالاً انعكاسية أخرى، منها **sich freuen** و**sich anmelden**، وأمثلةً مثل **sich freuen auf den Urlaub** و**Wir treffen uns**. هذه إحالة إلى أمثلة من وحدة أخرى، لا دعوى بأن A2-11 أو A2-02 يقدّم وصفاً كاملاً للأفعال الانعكاسية أو لقاعدة mich/mir.\n\nفي هذا المقطع نقتصر على أفعال صحية مختارة وعلى مثالين محددين لـwaschen. يُرجع إلى كل فعل وبنائه ومفعوله؛ لا تُعمّم قاعدةً واحدة على جميع الأفعال الانعكاسية.",
      },
    },
  ],

  reading: {
    id: "read-a2-02",
    titleDe: "Drei Tage zu Hause",
    titleAr: "ثلاثة أيام في البيت",
    textType: "erzaehlung",
    paragraphs: [
      "Am Montagmorgen bin ich aufgewacht und wusste sofort: Heute stimmt etwas nicht. Mein Hals tat weh, ich hatte Fieber, mir war heiß und kalt, und ich fühlte mich sehr schwach. Ich habe trotzdem versucht aufzustehen, aber nach zehn Minuten musste ich mich wieder hinlegen.",
      "Meine Kollegin hat mir am Telefon gesagt: „Du solltest zum Arzt gehen. Wenn du nicht arbeiten kannst, frag nach einer Krankschreibung und informiere deinen Chef.“ Sie hatte recht. Ich habe in der Praxis angerufen und einen Termin für den Nachmittag bekommen.",
      "Im Wartezimmer saßen schon sechs Leute. Nach vierzig Minuten war ich endlich dran. Die Ärztin hat gefragt: „Was fehlt Ihnen denn?“ Ich habe erzählt, dass ich seit dem Morgen Halsschmerzen, Fieber und Kopfschmerzen habe. Sie hat mich untersucht und gesagt: „Sie haben eine Erkältung. Die Beschwerden sind im Moment nicht sehr stark, aber Sie brauchen Ruhe.“",
      "Dann hat sie mir erklärt, was ich machen soll: „Sie sollten sich ausruhen und zu Hause bleiben. Solange Sie Fieber haben, dürfen Sie keinen Sport machen. Aber Sie müssen nicht wiederkommen, wenn es Ihnen besser geht.“ Ich habe ein Rezept und eine Krankschreibung für die nächsten drei Tage bekommen.",
      "Auf dem Weg nach Hause bin ich in die Apotheke gegangen. Der Apotheker war sehr freundlich und hat mir alles genau erklärt. Zu Hause habe ich Tee gekocht und mich ins Bett gelegt.",
      "Nach drei Tagen zu Hause ging es mir viel besser. Ich habe mich gut erholt und bin am Freitag wieder zur Arbeit gegangen. Meine Kollegin hat gelacht und gesagt: „Siehst du? Manchmal muss man einfach auf den Körper hören.“",
    ],
    paragraphsAr: [
      "صباح الاثنين استيقظتُ وعرفتُ فوراً: ثمّة خطبٌ ما اليوم. كان حلقي يؤلمني، وكانت لديّ حمى، وشعرتُ بالحرّ والبرد، وكنتُ ضعيفاً جداً. حاولتُ رغم ذلك أن أنهض، لكن بعد عشر دقائق اضطررتُ إلى الاستلقاء ثانيةً.",
      "قالت لي زميلتي على الهاتف: «ينبغي أن تذهب إلى الطبيب. وإذا لم تكن قادراً على العمل، فاسأل عن شهادة مرضية وأبلغ مديرك». كانت محقّة. اتصلتُ بالعيادة وحصلتُ على موعد بعد الظهر.",
      "في غرفة الانتظار كان يجلس ستة أشخاص. وبعد أربعين دقيقة جاء دوري أخيراً. سألت الطبيبة: «ما شكواك؟» فحكيت لها أن حلقي يؤلمني منذ الصباح، وأن لديّ حمى وصداعاً. فحصتني وقالت: «عندك نزلة برد. الأعراض ليست شديدة الآن، لكنك تحتاج إلى الراحة».",
      "ثم شرحت لي ما ينبغي أن أفعل: «ينبغي أن تستريح وتبقى في البيت. لا يجوز لك ممارسة الرياضة ما دمت مصاباً بالحمى. لكنك لست مضطراً إلى العودة إذا تحسنت حالك». وحصلت على وصفة وشهادة مرضية للأيام الثلاثة التالية.",
      "وفي طريق العودة ذهبت إلى الصيدلية. كان الصيدلي لطيفاً جداً وشرح لي كل شيء بدقة. وفي البيت أعددت شاياً واستلقيت في الفراش.",
      "وبعد ثلاثة أيام في البيت شعرت بتحسن كبير. تعافيت جيداً وعدت إلى العمل يوم الجمعة. ضحكت زميلتي وقالت: «أرأيت؟ أحياناً ينبغي للمرء أن يصغي إلى جسده».",
    ],
    glossary: [
      {
        de: "aufgewacht (aufwachen)",
        ar: "استيقظ",
        noteAr: "تغيّرُ حال ⟵ sein، وge- في الوسط",
      },
      {
        de: "hinlegen (sich hinlegen)",
        ar: "يستلقي",
        noteAr: "انعكاسيّ + منفصل: musste ich mich wieder hinlegen",
      },
      {
        de: "krankschreiben lassen",
        ar: "يحصل على شهادةٍ مرضية",
      },
      {
        de: "das Wartezimmer",
        ar: "غرفة الانتظار",
      },
      {
        de: "dran sein",
        ar: "يأتي دوره",
        noteAr: "Ich bin dran = دوري",
      },
      {
        de: "untersuchen",
        ar: "يفحص (طبّياً)",
        noteAr: "غير منفصل ⟵ untersucht بلا ge-",
      },
      {
        de: "die Erkältung",
        ar: "نزلة برد (ليست مرادفاً للإنفلونزا Grippe)",
      },
      {
        de: "stark",
        ar: "شديد/قوي بحسب السياق",
        noteAr: "في النص: Die Beschwerden sind nicht sehr stark = الأعراض ليست شديدة جداً؛ لا يثبت ذلك حكماً طبياً عاماً.",
      },
      {
        de: "die Ruhe",
        ar: "الراحة، السكون",
      },
      {
        de: "das Rezept",
        ar: "الوصفة الطبّية",
        noteAr: "وصفة لدواء موصوف؛ تُقدَّم لصرفه في صيدلية",
      },
      {
        de: "die Krankschreibung",
        ar: "الشهادة المرضية",
        noteAr: "تثبت عدم القدرة على العمل؛ قد تُرسل إلكترونياً، مع وجوب إبلاغ جهة العمل في الحالات المعتادة",
      },
      {
        de: "der Apotheker",
        ar: "الصيدليّ",
      },
      {
        de: "erholt (sich erholen)",
        ar: "تعافى، نقِه",
        noteAr: "Ich habe mich gut erholt",
      },
      {
        de: "auf den Körper hören",
        ar: "يُصغي إلى جسده",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Welche Symptome hatte die Person am Montagmorgen?",
        instructionAr: "اقرأ الفقرة الأولى: ما الأعراض؟",
        options: [
          "Die Person hatte Halsschmerzen und Fieber, ihr war heiß und kalt, und sie fühlte sich sehr schwach.",
          "Die Person hatte nur Kopfschmerzen und fühlte sich sonst gut.",
          "Die Person hatte Bauchschmerzen und kein Fieber.",
          "Die Person hatte Rückenschmerzen, aber keine weiteren Beschwerden.",
        ],
        correctIndex: 0,
        explanation:
          "«Mein Hals tat weh, ich hatte Fieber, mir war heiß und kalt, und ich fühlte mich sehr schwach.»",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Was hat die Kollegin geraten?",
        instructionAr: "اقرأ الفقرة الثانية: بماذا نصحت الزميلة؟",
        options: [
          "Zum Arzt gehen; bei Bedarf nach einer Krankschreibung fragen und den Chef informieren",
          "Zu Hause bleiben, ohne die Praxis anzurufen",
          "Zur Arbeit gehen, obwohl man nicht arbeiten kann",
          "Den Termin absagen und weiterarbeiten",
        ],
        correctIndex: 0,
        explanation:
          "«Du solltest zum Arzt gehen. Wenn du nicht arbeiten kannst, frag nach einer Krankschreibung und informiere deinen Chef.»",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Was bedeutet: „Sie müssen nicht wiederkommen“?",
        instructionAr: "اقرأ الفقرة الرابعة: ماذا تعني هذه الجملة؟",
        options: [
          "Es ist nicht nötig, zurückzukommen",
          "Es ist verboten, zurückzukommen",
          "Sie sollen morgen kommen",
          "Sie müssen unbedingt kommen",
        ],
        correctIndex: 0,
        explanation:
          "في هذه القراءة، müssen nicht ينفي الوجوب؛ أما dürfen nicht فيعبّر عن عدم الإذن/المنع.",
        errorType: "grammar",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Was war verboten?",
        instructionAr: "اقرأ الفقرة الرابعة: ما الممنوع؟",
        options: [
          "Sport machen, solange die Person Fieber hat",
          "Tee trinken",
          "Zu Hause bleiben",
          "Zur Apotheke gehen",
        ],
        correctIndex: 0,
        explanation:
          "«Solange Sie Fieber haben, dürfen Sie keinen Sport machen»؛ يذكر النص المنع مع شرط الحمى.",
        errorType: "grammar",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 5,
        questionDe: "Wohin ist die Person auf dem Weg nach Hause gegangen?",
        instructionAr: "اقرأ الفقرة الخامسة: إلى أين ذهب الشخص في طريق عودته؟",
        options: [
          "In die Apotheke",
          "In ein Restaurant",
          "Zur Arbeit",
          "In eine Schule",
        ],
        correctIndex: 0,
        explanation:
          "«Auf dem Weg nach Hause bin ich in die Apotheke gegangen.»",
        errorType: "vocabulary",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 6,
        questionDe: "Wann ist die Person wieder arbeiten gegangen?",
        instructionAr: "اقرأ الفقرة الأخيرة: متى عاد إلى العمل؟",
        options: ["Am Freitag", "Am Montag", "Am Mittwoch", "Am Sonntag"],
        correctIndex: 0,
        explanation: "«bin am Freitag wieder zur Arbeit gegangen».",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Heute stimmt etwas nicht.",
        ar: "اليوم ثمّة خطبٌ ما",
      },
      {
        de: "Du solltest zum Arzt gehen.",
        ar: "ينبغي أن تذهب إلى الطبيب",
      },
      {
        de: "Was fehlt Ihnen denn?",
        ar: "ما شكواك؟ — سؤال ممكن عن الأعراض",
      },
      {
        de: "Das ist nicht schlimm, aber Sie brauchen Ruhe.",
        ar: "الأمر ليس شديداً، لكنك تحتاج إلى الراحة.",
      },
      {
        de: "Nach drei Tagen zu Hause ging es mir viel besser.",
        ar: "وبعد ثلاثة أيّام صرتُ أحسن حالاً بكثير",
      },
      {
        de: "Ich habe mich gut erholt.",
        ar: "تعافيتُ جيداً",
      },
    ],
    discussionAr:
      "تدريب شفهي أو كتابي اختياري غير مسجّل: صفّ في بضع جمل حالةً صحية خيالية أو موقفاً غير شخصي. جرّب تركيباً لعرض ومدة، وجملةً فيها sollen أو sollten، إن شئت. لا يلزم الإفصاح عن معلومات صحية شخصية؛ وهذا النشاط لا يقيّم الكلام أو الكتابة ولا يضيف دليلاً إلى الأهداف.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "زيارة الطبيب",
        lines: [
          {
            speaker: "Arzt",
            de: "Guten Tag! Was fehlt Ihnen?",
            ar: "نهارك سعيد! ما شكواك؟",
          },
          {
            speaker: "Sami",
            de: "Ich habe seit gestern starke Kopfschmerzen und Fieber.",
            ar: "عندي منذ أمس صداع شديد وحمى.",
          },
          {
            speaker: "Arzt",
            de: "Haben Sie auch Husten?",
            ar: "هل عندك سعال أيضاً؟",
          },
          { speaker: "Sami", de: "Ja, ein bisschen.", ar: "نعم، قليلاً." },
          {
            speaker: "Arzt",
            de: "Sie haben eine Erkältung. Sie sollen sich ausruhen und zu Hause bleiben.",
            ar: "عندك نزلة برد. ينبغي أن تستريح وتبقى في البيت.",
          },
          { speaker: "Sami", de: "Und Tabletten?", ar: "وأقراص؟" },
          {
            speaker: "Arzt",
            de: "Ich stelle Ihnen ein Rezept aus. Bitte nehmen Sie das Medikament nach der Packungsbeilage ein.",
            ar: "سأحرر لك وصفة. تناول الدواء وفق النشرة المرفقة من فضلك.",
          },
        ],
      },
      {
        id: "l2",
        title: "نصائح من صديق",
        lines: [
          {
            speaker: "Anna",
            de: "Du siehst müde aus. Was ist los?",
            ar: "تبدو متعباً. ماذا حدث؟",
          },
          {
            speaker: "Karim",
            de: "Ich habe Rückenschmerzen. Ich habe zu viel gearbeitet.",
            ar: "عندي ألم في الظهر. عملت كثيراً.",
          },
          {
            speaker: "Anna",
            de: "Du sollst dich ausruhen und nicht so viel arbeiten!",
            ar: "ينبغي أن تستريح وألا تعمل كثيراً!",
          },
          {
            speaker: "Karim",
            de: "Du hast recht. Dann sollte ich zum Arzt gehen.",
            ar: "معك حق. ينبغي أن أذهب إلى الطبيب إذن.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار وأجب قبل فتح التفريغ:",
        questionDe: "Welche Beschwerden nennt Sami zuerst?",
        questionAr: "ما العرضان اللذان ذكرهما سامي أولاً؟",
        options: [
          "Kopfschmerzen und Fieber",
          "Bauchschmerzen",
          "Nur Husten",
          "Rückenschmerzen",
        ],
        correctIndex: 0,
        explanation: "قال: starke Kopfschmerzen und Fieber — صداع وحمى.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار وأجب قبل فتح التفريغ:",
        questionDe: "Was soll Sami machen?",
        questionAr: "ماذا نصحه الطبيب أن يفعل؟",
        options: [
          "sich ausruhen und zu Hause bleiben",
          "arbeiten",
          "Sport machen",
          "kalt baden",
        ],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollen sich ausruhen und zu Hause bleiben.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني وأجب قبل فتح التفريغ:",
        questionDe: "Warum hat Karim Rückenschmerzen?",
        questionAr: "لماذا ألم ظهر كريم؟",
        options: [
          "Er hat zu viel gearbeitet.",
          "Er hat geschwommen.",
          "Er ist geflogen.",
          "Er hat Fußball gespielt.",
        ],
        correctIndex: 0,
        explanation: "قال كريم: Ich habe zu viel gearbeitet — عمل كثيراً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الجسم: ch، sch، وau",
    items: [
      { de: "der Kopf", ar: "الرأس", note: "IPA /kɔpf/: o قصيرة؛ pf في نهاية المقطع، من دون حركة بينهما." },
      { de: "der Bauch", ar: "البطن", note: "IPA /baʊ̯x/: au ثنائي الصوت؛ ch هنا /x/، والخاء العربية تقريبية." },
      { de: "der Rücken", ar: "الظهر", note: "IPA /ˈʁʏkn̩/: ü حركة أمامية مدوّرة قصيرة؛ النبر على المقطع الأول." },
      { de: "die Schulter", ar: "الكتف", note: "IPA /ˈʃʊltɐ/: sch = /ʃ/، وu قصيرة." },
      { de: "das Auge", ar: "العين", note: "IPA /ˈaʊ̯ɡə/: au ثنائي الصوت؛ g هنا /ɡ/ انفجاري مجهور، لا /ɣ/ العربية." },
      { de: "der Husten", ar: "السعال", note: "IPA /ˈhuːstən/: u طويلة /uː/؛ راجع Cambridge وCollins." },
    ],
    tip: "استخدم IPA للاستدلال على الأصوات؛ الكتابة بالحروف العربية تقريبية ولا تمثل صوتاً ألمانياً مطابقاً. يبيّن نطق Auge أن g هنا /ɡ/ لا غ /ɣ/، وHusten فيه u طويلة. تكرار النص أو مطابقة التفريغ لا يقيسان وحدهما مخارج الأصوات والنبر.",
    shadowing: [
      {
        de: "Ich habe Kopfschmerzen.",
        ar: "عندي صداع.",
        tip: "في Kopfschmerzen انتبه إلى pf ثم sch /ʃ/؛ لا تعتمد على تهجئة عربية تقريبية للحركات.",
      },
      {
        de: "Mein Rücken tut weh.",
        ar: "ظهري يؤلمني.",
        tip: "tut weh: في weh يُنطق w /v/ وe طويلة /eː/.",
      },
      {
        de: "Sie sollen sich ausruhen.",
        ar: "ينبغي أن تستريح.",
        tip: "sollen: البداية s قبل الحركة /z/؛ الحركة o قصيرة في هذا الفعل.",
      },
      {
        de: "Ich soll im Bett bleiben.",
        ar: "يجب أن أبقى في السرير.",
        tip: "bleiben: ei = /aɪ̯/، مع نبر المقطع الأول.",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة واحدة عن الصداع تبدأ بـIch:",
      prompt: "Übersetze: «عندي صداع منذ أمس». Beginne mit „Ich“ und benutze haben + Kopfschmerzen.",
      acceptedAnswers: ["Ich habe seit gestern Kopfschmerzen."],
      sampleAnswer: "Ich habe seit gestern Kopfschmerzen.",
      explanation: "صيغة الجواب المحددة: Ich habe + seit gestern + Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف sollen:",
      template:
        "Ich ___ mich ausruhen. Du ___ im Bett bleiben. Er ___ sich ausruhen. Wir ___ heute zu Hause bleiben.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollst", options: ["soll", "sollst", "sollt"] },
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollst", "sollen"] },
      ],
      explanation: "سلم sollen: soll، sollst، soll، sollen، sollt، sollen.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Sie sollen sich ausruhen und zu Hause bleiben.",
      explanation:
        "تنتهي جملة الفعل الناقص بالفعل الأساسي bleiben؛ والضمير sich جزء من sich ausruhen.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الأكثر شيوعاً في التعبير اليومي:",
      questionDe: "Welche Form ist in der üblichen Wendung „Ich habe ___“ am gebräuchlichsten?",
      questionAr: "أي صيغة هي الأكثر شيوعاً في التعبير عن الصداع؟",
      options: [
        "Kopfschmerzen",
        "Kopfschmerzern",
        "Kopfschmerzenen",
        "Kopfschmerzten",
      ],
      correctIndex: 0,
      explanation: "Kopfschmerzen هي الصيغة المعتادة في هذا التعبير؛ يذكر Duden أن المفرد Kopfschmerz موجود أيضاً، لذا لا نقول إن الجمع هو الصورة الوحيدة.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen الصحيح:",
      questionDe: "Du ___ dich ausruhen.",
      options: ["sollst", "soll", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع du: sollst.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل جزء الجسم بمعناه:",
      pairs: [
        { left: "der Kopf", right: "الرأس" },
        { left: "das Auge", right: "العين" },
        { left: "der Bauch", right: "البطن" },
        { left: "der Rücken", right: "الظهر" },
      ],
      explanation: "أربعة أجزاء أساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["dich", "Du", "sollst", "ausruhen", "."],
      correctSentence: "Du sollst dich ausruhen.",
      explanation: "في الجملة الرئيسية يأتي الفعل المصرف في الموقع الثاني، ويأتي مصدر sollen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الكلمة الخاطئة في الجملة:",
      wrongSentence: "Ich bin Kopfschmerzen.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "soll", "werde"],
      explanation: "في التعبير المعتاد عن Kopfschmerzen نستخدم haben: Ich habe Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالعضو الصحيح (Auge/Ohr/Hand/Fuß):",
      template:
        "Ich sehe mit dem ___. Ich höre mit dem ___. Ich schreibe mit der ___.",
      blanks: [
        { correct: "Auge", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Ohr", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Hand", options: ["Auge", "Ohr", "Hand", "Fuß"] },
      ],
      explanation: "أرى بالعين، أسمع بالأذن، أكتب باليد.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "أعطِ نصيحة باستخدام sollen:",
      prompt: "Er ist krank. → (يجب أن يستريح)",
      acceptedAnswers: ["Er soll sich ausruhen", "Er soll sich ausruhen."],
      sampleAnswer: "Er soll sich ausruhen.",
      explanation: "النصيحة: Er soll + الفعل الأساسي في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was fehlt Ihnen?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما شكواك؟", "كم عمرك؟", "ما اسمك؟", "أين يؤلمك؟"],
      correctIndex: 0,
      explanation:
        "Was fehlt Ihnen? سؤال عن الشكوى؛ الترجمة الوظيفية «ما شكواك؟» أنسب من بناء المعنى على الترجمة الحرفية.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح تصريف الفعل في الجملة:",
      wrongSentence: "Ich sollst im Bett bleiben.",
      wrongWord: "sollst",
      correctWord: "soll",
      options: ["soll", "sollst", "sollt", "sollen"],
      explanation: "في المثال، الفاعل ich؛ لذلك الصيغة هي soll. أما sollst فتُستعمل مع du.",
      errorType: "conjugation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Du sollst nicht so viel arbeiten.",
      explanation: "يجب ألا تعمل كثيراً — nicht قبل الفعل الأساسي.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "أي صيغة ألمانية شائعة للتعبير عن الغثيان؟",
      questionDe: "Ihnen ist übel. Was können Sie im Alltag sagen?",
      options: [
        "Mir ist schlecht.",
        "Ich bin schlecht.",
        "Ich habe schlecht.",
        "Mich ist schlecht.",
      ],
      correctIndex: 0,
      explanation:
        "Mir ist schlecht صيغة شائعة للغثيان؛ mir هنا Dativ ألمانية. Ich bin schlecht جملة سليمة في معانٍ أخرى بحسب السياق، لكنها ليست الصيغة المحايدة لهذا الإحساس.",
      errorType: "case",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الصحيح (انتبه إلى الإفراد والجمع)",
      template: "Mein Rücken ___ weh. · Meine Augen ___ weh.",
      blanks: [
        {
          correct: "tut",
          options: ["tut", "tun", "tue", "tuen"],
          errorType: "conjugation",
        },
        {
          correct: "tun",
          options: ["tun", "tut", "tue", "tuet"],
          errorType: "conjugation",
        },
      ],
      explanation:
        "Rücken مفرد ⟵ tut، وAugen جمع ⟵ tun. والعبارة تُصرَّف ولا تُحفظ كتلةً جامدة.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "أي جملة تعبّر صراحةً عن عدم الإذن بالتدخين؟",
      questionDe: "In der Praxis ist Rauchen verboten. Welche Aussage passt?",
      options: [
        "Sie dürfen nicht rauchen.",
        "Sie müssen nicht rauchen.",
        "Sie dürfen rauchen.",
        "Sie sollten nicht rauchen.",
      ],
      correctIndex: 0,
      explanation:
        "dürfen nicht يعبّر عن منع/عدم إذن في هذا السياق. müssen nicht يعني أن الفعل غير لازم، وsollten nicht نصيحةً لا حظراً بذاتها.",
      errorType: "negation",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "ماذا تعني: «Sie müssen nicht wiederkommen»؟",
      questionDe: "Was bedeutet „Sie müssen nicht wiederkommen“?",
      options: [
        "ليس ضرورياً أن تعود (لكن يجوز)",
        "ممنوعٌ عليك العودة",
        "يجب أن تعود غداً",
        "عليك العودة حتماً",
      ],
      correctIndex: 0,
      explanation:
        "نفي الوجوب إعفاء لا منع. والمنع بـnicht dürfen: «Sie dürfen nicht wiederkommen».",
      errorType: "negation",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الانعكاسيّ الصحيح",
      template:
        "Ich fühle ___ besser. · Er fühlt ___ nicht gut. · Wir haben ___ gut erholt.",
      blanks: [
        {
          correct: "mich",
          options: ["mich", "mir", "sich", "dich"],
          errorType: "pronoun",
        },
        {
          correct: "sich",
          options: ["sich", "mich", "ihn", "ihm"],
          errorType: "pronoun",
        },
        {
          correct: "uns",
          options: ["uns", "sich", "wir", "unser"],
          errorType: "pronoun",
        },
      ],
      explanation:
        "الضمير الانعكاسيّ يتبع الفاعل: ich ⟵ mich · er ⟵ sich · wir ⟵ uns.",
      errorType: "pronoun",
    },
    {
      id: "e16",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich wasche mich die Hände.",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "sich", "meine"],
      explanation:
        "في هذا المثال تكون die Hände في Akkusativ وmir في Dativ؛ لا نعمّم الحالة على كل الأفعال الانعكاسية.",
      errorType: "case",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "تنصح صديقاً بلطف. أيّ صيغةٍ تختار؟",
      questionDe: "Sie möchten einem Freund einen weniger direkten Rat geben. Was sagen Sie?",
      options: [
        "Du solltest mal zum Arzt gehen.",
        "Du sollst zum Arzt gehen.",
        "Du musst zum Arzt gehen wollen.",
        "Du darfst zum Arzt gehen.",
      ],
      correctIndex: 0,
      explanation:
        "في هذا السياق، sollten مع mal صيغة شائعة لاقتراح أقل مباشرة؛ Du sollst جملة صحيحة لكنها توجيه أكثر مباشرة هنا، لا خطأ نحوي.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة عن مدة الأعراض، وابدأ بـIch:",
      tokens: [
        "Ich",
        "habe",
        "seit",
        "drei",
        "Tagen",
        "starke",
        "Halsschmerzen",
        ".",
      ],
      correctSentence: "Ich habe seit drei Tagen starke Halsschmerzen.",
      acceptedSentences: ["Ich habe starke Halsschmerzen seit drei Tagen."],
      explanation:
        "بعد seit مع اسم ظاهر هنا نقول drei Tagen. ويقبل التمرين أيضاً وضع العبارة الزمنية في آخر الجملة؛ فليس ترتيب الزمن قبل بقية المفعولات قاعدة مطلقة.",
      errorType: "word-order",
    },
    {
      id: "e19",
      type: "matching",
      instructionAr: "طابق كل وثيقة بوظيفتها أو بسياق استعمالها:",
      pairs: [
        { left: "das Rezept", right: "in einer Apotheke einlösen" },
        { left: "AU / Krankschreibung", right: "Arbeitsunfähigkeit nachweisen" },
        { left: "die Überweisung", right: "bei Bedarf zum Facharzt" },
        { left: "die Gesundheitskarte", right: "Versicherungsnachweis in der Praxis" },
      ],
      explanation:
        "الوصفة تُستخدم لصرف الدواء الموصوف في صيدلية؛ وAU توثّق عدم القدرة على العمل؛ والإحالة تُطلب في بعض الحالات؛ والبطاقة أو وثيقة أخرى قد تثبت التأمين. ليست كل حالة متطابقة.",
      errorType: "vocabulary",
    },
    {
      id: "e20",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في سؤال الطبيب",
      wrongSentence: "Was fehlt Sie denn?",
      wrongWord: "Sie",
      correctWord: "Ihnen",
      options: ["Ihnen", "Sie", "Ihr", "Ihren"],
      explanation:
        "في سؤال الشكوى مع fehlen تأتي Ihnen في Dativ. هذه خاصية البناء الألماني، وليست مقابلة مباشرة للجرّ العربي.",
      errorType: "case",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المناسب للسياق",
      template:
        "Im Bericht: Ich ___ mich ausruhen. (sollen) · Vorschlag: Sie ___ sich heute ausruhen. (sollen, Konjunktiv II) · Verbot bei Fieber: Sie ___ keinen Sport machen. (dürfen)",
      blanks: [
        {
          correct: "soll",
          options: ["soll", "sollst", "sollen", "darf"],
          errorType: "conjugation",
        },
        {
          correct: "sollten",
          options: ["sollten", "sollt", "sollen", "dürfen"],
          errorType: "conjugation",
        },
        {
          correct: "dürfen",
          options: ["dürfen", "müssen", "sollen", "können"],
          errorType: "vocabulary",
        },
      ],
      explanation:
        "تُظهر الخانات صيغاً مختلفة في سياقات مسماة: نقل توجيه بـsollen، وصيغة اقتراح بـsollten، ومنع ممارسة الرياضة هنا بـdürfen + keinen Sport. للسياق دور، ولا تستنفد الأمثلة معاني الأفعال.",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى اقتراح أقل مباشرة في هذا السياق:",
      prompt: "Sie sollen mehr schlafen. → Formulieren Sie denselben Rat mit sollten weniger direkt.",
      acceptedAnswers: [
        "Sie sollten mehr schlafen.",
        "Sie sollten mehr schlafen",
      ],
      sampleAnswer: "Sie sollten mehr schlafen.",
      hint: "Konjunktiv II مع sollten صيغة شائعة للاقتراح الأقل مباشرة؛ ليست حكماً ثابتاً عن الأدب في كل موقف.",
      explanation: "في هذا المثال، يُصاغ الاقتراح بـsollten. ولا يعني ذلك أن sollen لا يمكن أن يقدّم نصيحة في سياق آخر.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Die Ärztin sagt: „Sie haben eine Erkältung. Sie sollten sich ausruhen. Solange Sie Fieber haben, dürfen Sie keinen Sport machen. Sie müssen nicht wiederkommen, wenn es Ihnen besser geht. Hier ist ein Rezept für das Medikament.“",
      statements: [
        {
          id: "s1",
          de: "Solange die Person Fieber hat, darf sie keinen Sport machen.",
          ar: "لا يجوز للشخص ممارسة الرياضة ما دام مصاباً بالحمى.",
          isTrue: true,
          whyAr: "يفيد النص المنع في شرط محدد: solange Sie Fieber haben.",
        },
        {
          id: "s2",
          de: "Die Person muss unbedingt wiederkommen.",
          ar: "على الشخص أن يعود حتماً.",
          isTrue: false,
          whyAr: "«Sie müssen nicht wiederkommen» — نفي الوجوب إعفاء لا إلزام.",
        },
        {
          id: "s3",
          de: "Die Ärztin gibt der Person ein Rezept für ein Medikament.",
          ar: "أعطت الطبيبة الشخص وصفة لدواء.",
          isTrue: true,
          whyAr: "تذكر الطبيبة أنها أعطت الشخص وصفة؛ لا يستنتج هذا البند أن كل دواء يحتاج إليها.",
        },
        {
          id: "s4",
          de: "Die Ärztin gibt einen Befehl, keinen Rat.",
          ar: "الطبيبة تأمر ولا تنصح.",
          isTrue: false,
          whyAr: "يظهر في النص اقتراح بـsollten ومنع مشروط بـdürfen nicht؛ ولا تختزل هذه الفروق في نبرة ثابتة.",
        },
      ],
      explanation:
        "في النص: sollten لاقتراح، وdürfen nicht لمنع مشروط، وmüssen nicht لعدم لزوم العودة.",
      errorType: "negation",
    },
    {
      id: "e24",
      type: "multiple-choice",
      instructionAr: "ماذا تقول عند الوداع لمريض؟",
      questionDe: "Ihr Kollege ist krank. Was sagen Sie zum Abschied?",
      options: [
        "Gute Besserung!",
        "Viel Glück!",
        "Herzlichen Glückwunsch!",
        "Gute Reise!",
      ],
      correctIndex: 0,
      explanation:
        "Gute Besserung عبارة شائعة لتمني التحسن في هذا السياق؛ يختلف اختيار عبارات الوداع بحسب العلاقة والموقف، ولا يلزم استعمالها في كل مرة.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich bin Kopfschmerzen.",
        right: "Ich habe Kopfschmerzen.",
        classification: "error",
        whyAr: "في هذا التعبير الألماني الشائع يأتي اسم Kopfschmerzen مع haben: Ich habe Kopfschmerzen.",
      },
      {
        wrong: "Ich sollst mich ausruhen.",
        right: "Ich soll mich ausruhen.",
        classification: "error",
        whyAr: "مع ich تكون صيغة sollen هي soll؛ أما sollst فتأتي مع du.",
      },
      {
        wrong: "der Auge",
        right: "das Auge",
        classification: "error",
        whyAr: "Auge اسم محايد، لذا نحفظه مع أداته das. لا توجد قاعدة صوتية تربط أداة الاسم بحرفٍ عربي أو معنى الكلمة.",
      },
    ],
    eselsbruecken: [
      "في العبارة الشائعة Ich habe Kopfschmerzen يأتي اسم الصداع مع haben؛ لا تعمّم البناء على كل وصف للألم.",
      "قارن المثالين في سياقهما: Der Arzt sagt, ich soll … لنقل توجيه، وSie sollten … لاقتراح أقل مباشرة؛ الفعل نفسه قد يتعدد استعماله.",
    ],
    culturalNote: {
      title: "ملاحظات عامة عن التغطية الصحية والوثائق",
      content:
        "تُطلب التغطية الصحية في ألمانيا عموماً، لكن الوضع قد يكون ضمن التأمين القانوني أو الخاص؛ ولا يعني ذلك وجود مسار موحّد لكل زيارة. قد تطلب العيادة البطاقة الصحية الإلكترونية أو إثباتاً آخر؛ إذا لم تكن الوثيقة معك فاسأل العيادة أو شركة التأمين بدلاً من افتراض وجوب الدفع النقدي. الدواء الموصوف يُصرف في صيدلية، لكن ليس كل دواء بوصفة، وبعض الأدوية المتاحة دون وصفة تُباع خارج الصيدليات. وفي التأمين القانوني تُرسل eAU عادةً إلكترونياً، مع بقاء واجب إبلاغ جهة العمل في الحالات المعتادة. المعلومات عامة وليست نصيحة طبية أو قانونية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___ und Fieber.",
      options: ["Husten", "hustet", "der Husten", "hust"],
      correctIndex: 0,
      explanation: "Husten اسم مع haben: Ich habe Husten.",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen:",
      questionDe: "Er ___ im Bett bleiben.",
      options: ["soll", "sollst", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع er: soll.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة، وابدأ بـEr:",
      tokens: ["sich", "Er", "ausruhen", "soll", "."],
      correctSentence: "Er soll sich ausruhen.",
      explanation: "يجب أن يستريح: Er + soll + sich ausruhen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الكلمة الخاطئة في الجملة:",
      wrongSentence: "Mein Kopf tut weht.",
      wrongWord: "weht",
      correctWord: "weh",
      options: ["weh", "weht", "wehne", "wehe"],
      explanation: "tut weh — weh ثابتة بلا نهاية: Mein Kopf tut weh.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ sollen الصحيح:",
      template:
        "Ich ___ mich ausruhen. Sie ___ sich ausruhen. Ihr ___ früh schlafen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollen", "sollt"] },
        { correct: "sollt", options: ["soll", "sollt", "sollten"] },
      ],
      explanation: "ich soll، sie sollen، ihr sollt.",
      errorType: "conjugation",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "der Körper",
      ar: "الجسم",
      example: "Der Körper braucht Schlaf.",
      exampleAr: "الجسم يحتاج النوم.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "der Kopf",
      ar: "الرأس",
      example: "Ich habe Kopfschmerzen.",
      exampleAr: "عندي صداع.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "das Auge",
      ar: "العين",
      example: "Ich sehe mit den Augen.",
      exampleAr: "أرى بالعينين.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "der Rücken",
      ar: "الظهر",
      example: "Mein Rücken tut weh.",
      exampleAr: "ظهري يؤلمني.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "die Schmerzen",
      ar: "الآلام",
      example: "Ich habe Schmerzen.",
      exampleAr: "عندي آلام.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "das Fieber",
      ar: "الحمى",
      example: "Er hat Fieber.",
      exampleAr: "عنده حمى.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "sollen",
      ar: "يُفترض/ينبغي بحسب السياق",
      example: "Der Arzt sagt, ich soll mich ausruhen.",
      exampleAr: "يقول الطبيب إن عليّ أن أستريح.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "sich ausruhen",
      ar: "يستريح",
      example: "Sie sollen sich ausruhen.",
      exampleAr: "ينبغي أن تستريح.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "Mir ist schlecht.",
      ar: "أشعر بالغثيان؛ ليست Ich bin schlecht الصيغة المحايدة لهذا المعنى.",
      example: "Mir ist schlecht und schwindelig.",
      exampleAr: "أشعر بالغثيان والدوار.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "sich fühlen",
      ar: "يشعر (بحالٍ ما)",
      example: "Ich fühle mich heute besser.",
      exampleAr: "أشعر بتحسّن اليوم.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "sich erholen",
      ar: "يتعافى، ينقه",
      example: "Ich habe mich gut erholt.",
      exampleAr: "تعافيتُ جيداً.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "dran sein",
      ar: "يأتي دوره",
      example: "Nach vierzig Minuten war ich endlich dran.",
      exampleAr: "بعد أربعين دقيقة جاء دوري أخيراً.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "sich erkälten",
      ar: "يُصاب بالزكام",
      example: "Ich habe mich erkältet.",
      exampleAr: "أُصبتُ بالزكام.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "sollten",
      ar: "Konjunktiv II من sollen؛ اقتراح أقل مباشرة في سياقات كثيرة",
      example: "Sie sollten sich ausruhen.",
      exampleAr: "من الأفضل أن تستريح في هذا السياق.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "nicht dürfen",
      ar: "عدم الإذن/منع بحسب السياق",
      example: "Sie dürfen nicht rauchen.",
      exampleAr: "لا يُسمح لك بالتدخين.",
      level: "A2",
    },
    {
      id: "fc16",
      de: "nicht müssen",
      ar: "غير لازم (نفي الوجوب = إعفاء)",
      example: "Sie müssen nicht wiederkommen.",
      exampleAr: "لستَ مضطرّاً للعودة.",
      level: "A2",
    },
    {
      id: "fc17",
      de: "Was fehlt Ihnen?",
      ar: "ما شكواك؟ (سؤال اصطلاحي عن الأعراض)",
      example: "Guten Tag, was fehlt Ihnen denn?",
      exampleAr: "نهارك سعيد، ما شكواك؟",
      level: "A2",
    },
    {
      id: "fc18",
      de: "das Rezept",
      ar: "وصفة لدواء موصوف؛ تُصرف في صيدلية",
      example: "Ich schreibe Ihnen ein Rezept.",
      exampleAr: "سأكتب لك وصفة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "die Krankschreibung",
      ar: "إثبات عدم القدرة على العمل (AU؛ تختلف الإجراءات)",
      example: "Ich brauche eine Krankschreibung.",
      exampleAr: "أحتاج شهادةً مرضية.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "die Erkältung",
      ar: "نزلة برد (وليست مرادفاً للإنفلونزا Grippe)",
      example: "Sie haben eine Erkältung.",
      exampleAr: "عندك نزلة برد.",
      level: "A2",
    },
    {
      id: "fc21",
      de: "untersuchen",
      ar: "يفحص (طبّياً)",
      example: "Die Ärztin hat mich untersucht.",
      exampleAr: "فحصتني الطبيبة.",
      level: "A2",
    },
    {
      id: "fc22",
      de: "das Wartezimmer",
      ar: "غرفة الانتظار",
      example: "Im Wartezimmer saßen sechs Leute.",
      exampleAr: "كان في غرفة الانتظار ستّة أشخاص.",
      level: "A2",
    },
    {
      id: "fc23",
      de: "Gute Besserung!",
      ar: "شفاءً عاجلاً! (تقابل «سلامتك»)",
      example: "Gute Besserung! – Danke schön.",
      exampleAr: "شفاءً عاجلاً! — شكراً جزيلاً.",
      level: "A2",
    },
    {
      id: "fc24",
      de: "schlimm",
      ar: "سيّئ/شديد بحسب السياق",
      example: "Die Beschwerden sind nicht sehr schlimm.",
      exampleAr: "الأعراض ليست شديدة جداً.",
      level: "A2",
    },
  ],

  /* ═══ أنشطة إضافية: الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a2-02-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات طبية بالعربية لشخص",
      sourceDe:
        "Nehmen Sie die Tabletten nach der Packungsbeilage oder der ärztlichen Anweisung ein. Ändern Sie die empfohlene Dosis nicht selbst. Ruhen Sie sich aus.",
      taskAr: "انقل طريقة الاستخدام الآمن والتنبيه إلى عدم تغيير الجرعة ونصيحة الراحة؛ لا تضف جرعة أو توقيتاً غير وارد في النص.",
      modelAnswerAr:
        "«تناول الأقراص وفق النشرة المرفقة أو تعليمات الطبيب، ولا تغيّر الجرعة الموصى بها بنفسك. استرح.»",
      keyPointsAr: [
        "نقلت الرجوع إلى النشرة أو تعليمات الطبيب.",
        "ذكرت عدم تغيير الجرعة الموصى بها من تلقاء النفس.",
        "نقلت نصيحة الراحة.",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a2-02-1",
      scenarioAr: "تدريب اختيار نص على حوار قصير في العيادة.",
      scenarioDe: "Beim Arzt — du beschreibst Symptome.",
      strategyAr: "اختر الرد الملائم للسؤال؛ هذا نشاط اختيار من متعدد، لا يسجل إنتاجاً شفهياً أو نطقاً.",
      rounds: [
        {
          speakerDe: "Was fehlt Ihnen?",
          speakerAr: "ما الذي يزعجك؟",
          options: [
            {
              de: "Ich habe seit zwei Tagen Kopfschmerzen und Fieber.",
              ar: "أعاني منذ يومين من صداع وحمى.",
              best: true,
              replyDe: "Haben Sie auch Husten?",
              replyAr: "هل لديك سعال أيضاً؟",
            },
            {
              de: "Ich habe morgen einen Termin.",
              ar: "لدي موعد غداً.",
              best: false,
              replyDe: "Verstanden. Welche Beschwerden haben Sie?",
              replyAr: "حسناً. ما الأعراض التي لديك؟",
            },
          ],
        },
        {
          speakerDe: "Haben Sie auch Husten?",
          speakerAr: "هل لديك سعال أيضاً؟",
          options: [
            {
              de: "Ja, ein bisschen. Besonders nachts.",
              ar: "نعم قليلاً. خاصة في الليل.",
              best: true,
              replyDe: "Seit wann haben Sie Husten?",
              replyAr: "منذ متى لديك سعال؟",
            },
            {
              de: "Ich habe seit gestern Fieber.",
              ar: "لديّ حمى منذ أمس.",
              best: false,
              replyDe: "Danke. Ich frage noch einmal: Husten Sie auch?",
              replyAr: "شكراً. أسأل مرة أخرى: هل لديك سعال أيضاً؟",
            },
          ],
        },
      ],
    },
  ],
};

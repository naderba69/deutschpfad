import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-01: التعارف والتحيات — نموذج كامل لنظام الدرس الموحد
 * (يعرض المكونات العشرة كلها؛ يُوسَّع محتواه في المرحلة 6)
 */
export const lessonA101: Lesson = {
  id: "a1-01",
  unitId: "a1-01",
  level: "A1",
  order: 1,
  titleDe: "Hallo! Ich heiße …",
  titleAr: "التعارف والتحيات",
  summary:
    "التحيات والوداع، تقديم النفس، تصريف sein وheißen، السلسلة الذهبية لتصريف الأفعال المنتظمة، وأسئلة W الأساسية مع ترتيب الجملة الألماني (الفعل في المركز الثاني).",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann grüßen und mich vorstellen.", ar: "أن أُحيّي وأُقدّم نفسي باللغة الألمانية.", evidence: { exerciseIds: ["e3", "e6"], taskIds: ["practice:a1-01:e3", "practice:a1-01:e6"], labelAr: "ترتيب جملة التعارف (e3) ومطابقة التحيات بمعانيها (e6)، دون كشف الحل.", completion: "all-correct" }, },
    { id: "z2", de: "Ich kann fragen: Wie heißt du? Woher kommst du?", ar: "أن أسأل عن الاسم والبلد (Wie heißt du? / Woher kommst du?).", evidence: { exerciseIds: ["e4", "m1"], taskIds: ["practice:a1-01:e4", "mini-test:a1-01:m1"], labelAr: "ترتيب سؤال «من أين أنت؟» (e4) واختيار أداة السؤال عن الاسم (m1).", completion: "all-correct" }, },
    { id: "z3", de: "Ich kann „sein“ und „heißen“ konjugieren.", ar: "أن أصرف الفعلين sein (يكون) وheißen (يُسمى) في المضارع.", evidence: { exerciseIds: ["e1", "e5", "m2"], taskIds: ["practice:a1-01:e1", "practice:a1-01:e5", "mini-test:a1-01:m2"], labelAr: "اختيار bin وist وsind في سياقها (e1 وe5 وm2)، دون كشف الحل.", completion: "all-correct" }, },
    { id: "z4", de: "Ich kann ich, du und er in einfachen Sätzen richtig verwenden.", ar: "أن أستعمل الضمائر ich وdu وer في جمل بسيطة عن نفسي وعن الآخرين.", evidence: { exerciseIds: ["w3"], taskIds: ["writing:a1-01:w3"], labelAr: "إكمال الفراغات بالضمائر ich وdu وer في الكتابة (w3).", completion: "all-correct" }, },
    { id: "z5", de: "Ich kann W-Fragen stellen.", ar: "أن أطرح أسئلة الاستفهام (W-Fragen) وأجيب عنها.", evidence: { exerciseIds: ["e12", "e14", "m3", "m5"], taskIds: ["practice:a1-01:e12", "practice:a1-01:e14", "mini-test:a1-01:m3", "mini-test:a1-01:m5"], labelAr: "اختيار أداة السؤال المناسبة (e12)، وترتيب أسئلة W (e14 وm3)، وتصحيح ترتيب سؤال (m5).", completion: "all-correct" }, },
    { id: "z6", de: "Ich kann regelmäßige Verben konjugieren: lernen, wohnen, spielen.", ar: "أن أصرف الأفعال المنتظمة في المضارع (أتعلم، أسكن، ألعب).", evidence: { exerciseIds: ["e11", "e13", "m4"], taskIds: ["practice:a1-01:e11", "practice:a1-01:e13", "mini-test:a1-01:m4"], labelAr: "صرف أفعال منتظمة بالسلسلة الذهبية (e11 وe13)، وملء الفراغ في الجمل (m4).", completion: "all-correct" }, },
  ],

  /* 2) التمهيد وتنشيط المعرفة السابقة */
  einfuehrung: {
    motivatingQuestionAr:
      "تخيّل أنك في برلين والتقيت شخصاً ألمانياً لأول مرة. ما أول جملة ستقولها؟ وما أول سؤال ستطرحه؟ فكّر قبل أن تكمل الدرس!",
    motivatingQuestionDe: "Stell dir vor: Du bist in Berlin. Was sagst du zuerst?",
    contextAr:
      "قبل أن نتعلم أي قاعدة، لاحظ: الألمانية تتشابه مع العربية في أن الترحيب له أشكال متعددة حسب الوقت والرسمية. هل يمكنك تخمين معنى «Guten Morgen» قبل أن نبدأ؟",
    contextDe: "Guten Morgen, Guten Tag, Guten Abend, Gute Nacht …",
    connectionToPreviousAr: "هذا درسك الأول — لا توجد معرفة سابقة مطلوبة، فقط الحماس! 🚀",
    activateVocabulary: [
      { de: "Hallo", ar: "مرحباً" },
      { de: "ich", ar: "أنا" },
      { de: "du", ar: "أنتَ / أنتِ" },
      { de: "kommen", ar: "يأتي" },
      { de: "woher", ar: "من أين" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "الفعل sein (يكون) — تصريفه في المضارع",
      titleDe: "Das Verb „sein“ im Präsens",
      explanationAr:
        "الفعل **sein** يعني «يكون». هو أكثر فعل تستعمله في الألمانية، وصيغه لا تتبع قاعدة واحدة، لذلك تُحفظ مرةً واحدة وتُستعمل كثيراً.\n\n**متى نستعمله؟** في أربعة مواضع:\n· الاسم والهوية: Ich bin Sami.\n· الأصل والجنسية: Ich bin aus Tunesien.\n· المهنة، بلا أداة: Ich bin Student. (لا نقول ein Student)\n· الحالة والصفة: Ich bin müde.\n\n**القاعدة المهمة:** لا يُحذف sein أبداً. العربية تقول «أنا مهندس» بلا فعل، وهي جملة تامة. أما الألمانية فلا تقبل جملة بلا فعل مصرَّف، فتقول Ich **bin** Ingenieur، ولا تقول Ich Ingenieur.\n\n**sein أم haben؟** sein يصف حالةً أو هويةً أو أصلاً. haben يعني «يملك شيئاً». لذلك نقول Ich **bin** müde (أنا متعب)، ولا نقول Ich **habe** müde. وهذا الخلط من أشهر أخطاء المتعلمين العرب.\n\n**الصيغة الرسمية:** مع Sie نستعمل sind دائماً، حتى حين نخاطب شخصاً واحداً بأدب: Sie sind Frau Meier؟\n\n**تنبيه النطق:** الحرف s في أول sind وseid يُنطق «ز»، فنقول زِنْد وزايْت، لا سِنْد وسايْت. وهذه قاعدة عامة: s قبل حرف علّة تُنطق مجهورة.",
      whyAr:
        "لماذا نبدأ الألمانية كلّها بهذا الفعل تحديداً؟\n\nأوّلاً لأنّه **مفتاح الجملة الاسمية**، وهي أوّل ما يحتاجه المتعلّم: من أنت، من أين، ما مهنتك، كيف حالك. أربعة أسئلة يُجاب عنها كلّها بـ sein.\n\nوثانياً — وهو الأهمّ — لأنّ **العربي بالذات معرَّض لخطأ بنيوي هنا**. لغتك الأم تسمح بالجملة الاسمية بلا فعل رابط، فذهنك مبرمَج على أنّ «أنا متعب» جملة كاملة. حين تنقل هذه البرمجة إلى الألمانية تُنتج Ich müde، وهي أشيع أخطاء المبتدئين العرب على الإطلاق. فالبدء بـ sein ليس ترتيباً اعتباطياً، بل علاجٌ مبكّر لعادةٍ ذهنية.\n\nوثالثاً لأنّ sein سيعود إليك مرّتين لاحقاً: فعلاً مساعداً في الماضي التامّ (Ich **bin** gefahren)، وفعلاً في المبني للمجهول الحالي. فمن أتقنه اليوم وفّر على نفسه عناءً في B1.",
      table: {
        title: "تصريف sein في المضارع",
        columns: ["الضمير", "تصريفه", "النطق التقريبي"],
        rows: [
          { label: "ich (أنا)", cells: ["bin", "بِن"] },
          { label: "du (أنتَ/أنتِ)", cells: ["bist", "بِست"] },
          { label: "er/sie/es (هو/هي)", cells: ["ist", "إِست"] },
          { label: "wir (نحن)", cells: ["sind", "زِنْد"] },
          { label: "ihr (أنتم)", cells: ["seid", "زايْت"] },
          { label: "sie (هم) / Sie (حضرتك)", cells: ["sind", "زِنْد"] },
        ],
      },
      examples: [
        {"de": "Ich bin Sami.", "ar": "أنا سامي."},
        {"de": "Du bist sehr nett.", "ar": "أنتَ لطيف جداً."},
        {"de": "Er ist Ingenieur.", "ar": "هو مهندس. (بلا أداة قبل المهنة)"},
        {"de": "Wir sind aus Tunesien.", "ar": "نحن من تونس."},
        {"de": "Ihr seid Studenten.", "ar": "أنتم طلاب."},
        {"de": "Sie sind Frau Meier, richtig?", "ar": "حضرتك السيدة ماير، أليس كذلك؟"},
        {"de": "Das ist meine Schwester.", "ar": "هذه أختي. (das للتقديم مهما كان جنس المقدَّم)"},
        {"de": "Ich bin müde, aber glücklich.", "ar": "أنا متعب لكنّي سعيد."},
      ],
      comparisonWithArabic:
        "الفرق بين اللغتين هنا **بنيوي لا معجمي** — أي أنّه في تركيب الجملة نفسه لا في الكلمات.\n\nالعربية تعرف ما يسمّيه النحاة **الجملة الاسمية**: مبتدأ وخبر بلا فعل. «أنا من تونس»، «الجوّ جميل»، «هو طبيب». والرابط فيها مقدَّر لا ملفوظ. بل إنّ العربية تُظهر «يكون» فقط حين تحتاج إلى زمنٍ غير الحاضر: «كنتُ طالباً»، «سأكون هناك».\n\nوالألمانية على النقيض: **لا جملة بلا فعل مصرَّف**، أيّاً كان زمنها. فما تُقدّره العربية يجب أن تنطقه الألمانية.\n\nوهذا فرقٌ يُنتج ثلاثة أخطاء متتالية عند العربي:\n· حذف الفعل: Ich müde ✗\n· وضع haben مكانه، قياساً على «عندي»: Ich habe müde ✗\n· إضافة أداة قبل المهنة، قياساً على «أنا مهندسٌ» بالتنوين: Ich bin ein Ingenieur ✗\n\nوالمفارقة أنّ العربية **تملك** الرابط الملفوظ في الماضي («كنتُ»)، فالبنية ليست غريبة عن ذهنك — الغريب أن تلفظها في الحاضر.",
      eselsbruecke:
        "بيت العائلة: «أنا بِنْ (bin) داخل البيت، وأنتَ بِسْت (bist) عند الباب، وهو/هي إِسْت (ist) فوق السطح، ونحن زِنْد (sind) في الصالة، وأنتم زايْت (seid) في الحديقة، وهم زِنْد (sind) عائدون». كرّرها ثلاثاً بصوتٍ عالٍ. ولاحظ أنّ wir و sie يتشاركان sind — فالصيغ ستّ والأشكال خمسة.",
      commonMistakes: [
        {"wrong": "Ich müde.", "right": "Ich bin müde.", "whyAr": "حذف الفعل الرابط — وهو أشيع أخطاء العربي على الإطلاق. العربية تُجيز «أنا متعب» بلا فعل، والألمانية لا جملة فيها بلا فعل مصرَّف. الرابط مقدَّرٌ عندك، ملفوظٌ عندهم."},
        {"wrong": "Ich habe müde.", "right": "Ich bin müde.", "whyAr": "خلط sein بـ haben. الفعل haben يعني «يملك شيئاً»، وsein يعني «يكون في حالة». والتعب حالةٌ لا مِلك. والخطأ ناتج عن قياس «عندي تعب» العربية على الألمانية."},
        {"wrong": "Ich bin ein Ingenieur.", "right": "Ich bin Ingenieur.", "whyAr": "المهن والجنسيات والديانات تأتي بعد sein بلا أداة إطلاقاً. والعربي يُقحم ein لأنّ العربية تُنوّن «مهندسٌ»، فيترجم التنوين أداةً. أمّا إذا وُصفت المهنة فتعود الأداة: Er ist ein guter Ingenieur."},
        {"wrong": "Du sind mein Freund.", "right": "Du bist mein Freund.", "whyAr": "خلط صيغة du بصيغة wir/sie. والسبب أنّ sind تتكرّر في خانتين فتلتصق في الذهن كأنّها الصيغة العامّة. راجع الجدول: du تأخذ bist وحدها."},
      ],
      relatedRuleComparison: {
        title: "sein أم haben؟",
        content:
          "sein = يكون (حالة، وصف، أصل). haben = يملك (شيئاً). لا تقل Ich habe müde بل Ich bin müde (أنا متعب — حالة).",
      },
    },
    {
      id: "t-du-sie",
      titleAr: "du أم Sie؟ متى نقول «أنتَ» ومتى نقول «حضرتك»",
      titleDe: "du und Sie? Die Anrede im Alltag",
      explanationAr:
        "الألمانية تملك ضميرين للمخاطَب، ولا يوجد ما يعادلهما بالضبط في العربية. **du** نستعمله مع الشخص الذي نعرفه جيداً: صديق، أخ، زميل قريب في العمل، أو طفل. و**Sie** نستعمله في التعامل الرسمي والمهذّب: مع غريب في الشارع، مع موظف في مكتب، مع شخص أكبر منا سناً، أو في موقف عمل جديد. وهناك فرق كتابي مهم: **Sie** بحرف S كبير يعني «حضرتك» أو «حضراتكم»، أما **sie** بحرف صغير فيعني «هم» أو «هي». يمكن معرفة الفرق من الكتابة نفسها، ومن الفعل في الجملة.\n\nالفعل يتغيّر أيضاً: مع du نقول du bist وdu wohnst، ومع Sie نقول Sie sind وSie wohnen. ومع Sie يأخذ الفعل صيغة الجمع دائماً، حتى حين يخاطب المتكلم شخصاً واحداً بأدب. هذه القاعدة تبدو غريبة في البداية، لكنها ثابتة: Sie يحمل معنى «أنتم» في الصيغة النحوية، ويحمل معنى «حضرتك» في الاستعمال. وبالنسبة إلى المتعلم العربي، فإن أسهل طريقة لتذكّر الفرق هي أن تعرف متى تبدأ بـSie وكيف يُعرض عليك الانتقال إلى du. وإذا لم تكن متأكداً من الموقف، فاستعمل Sie؛ فهو الخيار الآمن الذي لا يُعدّ خطأً فادحاً في أي مكان.",
      whyAr:
        "لماذا يهمّ هذا من اليوم الأول؟ لأن اختيار du أو Sie ليس تفصيلاً شكلياً، بل إشارة إلى العلاقة بينك وبين المخاطَب. استعمال du مع موظف لا تعرفه يبدو وقحاً أو غير مهذّب، بينما استعمال Sie مع صديق يخلق مسافة غريبة بينكما. لذلك تبدأ الألمانية بتعليمك الصيغتين معاً، حتى لا تقع في الخطأ الاجتماعي قبل الخطأ النحوي. والقاعدة العملية التي ينصح بها المعلمون: ابدأ دائماً بـSie، والمخاطَب هو من يعرض عليك الانتقال إلى du بقوله «Du, bitte!» أو «Wir können uns duzen».",
      table: {
        title: "الفرق بين du وSie",
        columns: ["الضمير", "متى نستعمله", "مثال"],
        rows: [
          { label: "du (أنتَ/أنتِ)", cells: ["صديق، زميل قريب، طفل، شخص تعرفه جيداً", "Wie heißt du?"] },
          { label: "Sie (حضرتك/حضرتكم)", cells: ["شخص غريب، موظف، أكبر سناً، موقف رسمي", "Wie heißen Sie?"] },
        ],
      },
      examples: [
        { de: "Wie heißt du? (لأخ أو صديق)", ar: "ما اسمك؟ (غير رسمي)" },
        { de: "Wie heißen Sie? (لموظف في مكتب)", ar: "ما اسمك حضرتك؟ (رسمي)" },
        { de: "Woher kommen Sie? (سؤال رسمي)", ar: "من أين حضرتك؟" },
        { de: "Kommst du aus Tunesien? (لصديق جديد بالاسم الأول)", ar: "هل أنت من تونس؟" },
        { de: "Entschuldigung, wo wohnen Sie? (لغريب في الشارع)", ar: "عذراً، أين تسكن حضرتك؟" },
        { de: "Sie sind sehr freundlich, Herr Weber. (لشخص نحترمه)", ar: "حضرتك لطيف جداً، سيد فيبر." },
      ],
      comparisonWithArabic:
        "في العربية نفرّق بين «أنتَ» و«حضرتك» بالضمير وحده، والفعل لا يتغيّر في معظم الحالات: أنتَ تسكن وحضرتك تسكن. أما في الألمانية فالفرق يصل إلى الفعل نفسه: du bist مقابل Sie sind، و du wohnst مقابل Sie wohnen. كذلك لا توجد في العربية كتابة مختلفة للضمير حسب الأدب، بينما تكتب الألمانية Sie بحرف كبير عند الخطاب الرسمي. لذلك يحتاج المتعلم العربي إلى ربط الضمير بالفعل منذ البداية، لا إلى حفظ الضمير وحده.",
      eselsbruecke:
        "du = دافئ وقريب (مثل «يا صديقي»)، Sie = مهذّب ومسافة محترمة (مثل «حضرتك»). ابدأ بـSie، فالانتقال إلى du يحدث بدعوة من المخاطَب، وليس بقرارك أنت.",
      commonMistakes: [
        {
          wrong: "Wie heißt du? (لمدير الشركة في المقابلة)",
          right: "Wie heißen Sie?",
          whyAr: "المقابلة موقف رسمي مع شخص لا تعرفه، فنستعمل Sie. استعمال du هنا يُفهم على أنه قلة احترام، حتى لو كانت النية حسنة.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Sind du Ali?",
          right: "Bist du Ali?",
          whyAr: "du يأخذ bist، وSie يأخذ sind. الخلط بين الضميرين والفعل من أكثر الأخطاء شيوعاً عند المبتدئين، لأن العربية لا تربط الفعل بالضمير بهذه الصرامة.",
          classification: "error",
        },
        {
          wrong: "Sie bist müde. (لشخص واحد بأدب)",
          right: "Sie sind müde. (لحضرتك أو لأكثر من شخص)",
          whyAr: "Sie يأخذ صيغة الجمع sind دائماً، حتى حين يخاطب شخصاً واحداً بأدب. هذه القاعدة ثابتة، ولا تتغيّر بحسب عدد المخاطَبين.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "du/Sie مقابل ihr: الصيغة الجماعية",
        content:
          "عندما يخاطب المتكلم أكثر من شخص، لا يستعمل Sie إلا في الموقف الرسمي، بل يستعمل ihr للجمع غير الرسمي: ihr seid، وSie sind للجمع الرسمي. الفرق نفسه يتكرر بين du وSie في المفرد: الشكل غير الرسمي يقترب من الدفء، والرسمي يحفظ المسافة. قارن هذه الصورة بالجدول قبلها، وتذكّر أن ihr للجمع والمخاطَبين المقربين، وSie للحضور الرسمي مهما كان عددهم.",
      },
    },
    {
      id: "t2",
      titleAr: "أسئلة الاستفهام W-Fragen وترتيب الجملة (V2)",
      titleDe: "W-Fragen und die Satzstellung (V2)",
      explanationAr:
        "**أسئلة W** تبدأ كلها بحرف W، ولهذا تُسمّى W-Fragen. وهي تسأل عن معلومة محددة، لا تُجاب بنعم أو لا.\n\n**الكلمات الأساسية:**\n· wer = من · was = ماذا · wo = أين\n· woher = من أين · wohin = إلى أين\n· wann = متى · warum = لماذا · wie = كيف\n\n**قاعدة الترتيب (V2):** الفعل المصرَّف يقع في المركز الثاني من الجملة دائماً. وفي السؤال المفتوح تحتل كلمة الاستفهام المركز الأول، فيأتي الفعل بعدها مباشرة، ثم الفاعل:\nWoher **kommst** du? — Woher (1) + kommst (2) + du.\nWie **heißt** Ihre Tochter? — Wie (1) + heißt (2).\n\n**تذكّر الفروق الثلاثة:** wo للمكان الثابت (Wo wohnst du?)، وwoher للمصدر والأصل (Woher kommst du?)، وwohin للاتجاه (Wohin gehst du?).\n\n**وحدة واحدة في المركز الأول:** Wie alt bist du؟ تعد كلها وحدة واحدة هي Wie alt، فيأتي الفعل bist في المركز الثاني.\n\n**سؤال نعم/لا** مختلف: يتقدم الفعل إلى المركز الأول بلا أداة استفهام، مثل Kommst du aus Tunesien؟ ويُجاب عنه بـ Ja أو Nein. وقاعدة V2 هذه ستعود إليك في كل درس تالٍ.",
      whyAr:
        "لماذا نُلحّ على قاعدة V2 من الدرس الأوّل، مع أنّها تبدو تفصيلاً نحوياً متقدّماً؟\n\nلأنّها **العمود الفقري للجملة الألمانية كلّها**، ولأنّ كل ما تتعلّمه لاحقاً يُبنى عليها. الجملة الخبرية V2، والسؤال المفتوح V2، والجملة المبدوءة بظرف V2 (Morgen komme ich). ثم تأتي الجملة الفرعية في A2 لتقلبها فتضع الفعل في النهاية — وحينها لن تفهم الاستثناء إن لم تكن القاعدة راسخة.\n\nوالسبب الثاني عملي: العربي حين يسأل يميل إلى ترتيب لغته الأم، فيقول Woher du kommst؟ لأنّ العربية تقول «من أين أنتَ تأتي». وهذا الترتيب مفهوم للألماني لكنّه **يُصنَّف فوراً كخطأ أجنبي**، ويُخفّض تقييمك في الامتحان الشفوي. تثبيت V2 مبكراً يمنع تحجّر هذه العادة.",
      table: {
        title: "كلمات الاستفهام الأساسية",
        columns: ["الكلمة", "المعنى", "مثال"],
        rows: [
          { label: "wer", cells: ["من", "Wer bist du?"] },
          { label: "was", cells: ["ماذا", "Was ist das?"] },
          { label: "wo", cells: ["أين", "Wo wohnst du?"] },
          { label: "woher", cells: ["من أين", "Woher kommst du?"] },
          { label: "wie", cells: ["كيف", "Wie heißt du?"] },
          { label: "wann", cells: ["متى", "Wann kommst du?"] },
          { label: "warum", cells: ["لماذا", "Warum lernst du Deutsch?"] },
        ],
      },
      examples: [
        {"de": "Wie heißt du?", "ar": "ما اسمك؟ (حرفياً: كيف تُسمّى؟)"},
        {"de": "Woher kommst du?", "ar": "من أين أنت؟ (حرفياً: من أين تأتي؟)"},
        {"de": "Wo wohnen Sie?", "ar": "أين تسكن حضرتك؟"},
        {"de": "Wann beginnt der Kurs?", "ar": "متى تبدأ الدورة؟"},
        {"de": "Warum lernst du Deutsch?", "ar": "لماذا تتعلّم الألمانية؟"},
        {"de": "Wie alt bist du?", "ar": "كم عمرك؟ (Wie alt وحدةٌ واحدة في المركز الأوّل)"},
        {"de": "Wohin gehst du?", "ar": "إلى أين تذهب؟"},
      ],
      comparisonWithArabic:
        "العربية والألمانية تتّفقان في وضع أداة الاستفهام أوّلاً، وتختلفان في كلّ ما بعدها.\n\n**أوّلاً: وجوب الفعل.** العربية تسأل بلا فعل: «من أين أنت؟» — أداة ثم ضمير. والألمانية توجب الفعل: Woher **kommst** du؟ حرفيّاً «من أين تأتي أنت؟». فالعربي يميل إلى Woher du؟ أو Woher bist du؟ — والثانية مفهومة لكنّها غير مألوفة؛ الألماني يسأل عن الفعل لا عن الكون.\n\n**ثانياً: الترتيب.** العربية تقول «متى أنتَ تسافر؟» فتُقدّم الفاعل على الفعل. والألمانية تعكس: Wann **fährst du**؟ — الفعل قبل الفاعل دائماً.\n\n**ثالثاً: التفريق الثلاثي.** العربية تبني «من أين» و«إلى أين» بإضافة حرف جرّ إلى «أين». والألمانية تملك كلمات مستقلّة: wo / woher / wohin. والخطأ الشائع أن يُستعمل wo مكان woher: Wo kommst du؟ تعني «أين تأتي؟» وهي ركيكة؛ الصواب Woher kommst du؟\n\n**ورابعاً — نقطة تشابه مفيدة:** العربية تسأل عن العمر بـ«كم عمرك؟» والألمانية بـ Wie alt bist du؟ أي «كم كبيرٌ أنت؟». كلتاهما تسأل عن مقدارٍ لا عن شيء.",
      eselsbruecke:
        "أدوات الاستفهام كلّها تبدأ بـ W — ولذلك تُسمّى W-Fragen. واحفظ ترتيب السؤال كسُلَّم من ثلاث درجات: **W + فعل + فاعل**. «وَقَفَ فؤاد» — W، ثم قِف عند الفعل، ثم الفاعل. وللثلاثية: wo ثابتٌ في مكانه، wo**her** جاء من هناك (her = هنا إليّ)، wo**hin** ذهب إلى هناك (hin = من هنا بعيداً).",
      commonMistakes: [
        {"wrong": "Woher du kommst?", "right": "Woher kommst du?", "whyAr": "ترتيب عربي منقول حرفياً: «من أين أنت تأتي». الألمانية توجب الفعل في المركز الثاني مباشرة بعد أداة الاستفهام، والفاعل بعده. هذا الخطأ مفهومٌ للسامع لكنّه يُسمع أجنبياً فوراً."},
        {"wrong": "Wo kommst du?", "right": "Woher kommst du?", "whyAr": "خلط wo (أين — مكان ثابت) بـ woher (من أين — مصدر). فعل kommen يدلّ على حركةٍ من مكان، فيلزمه woher. أمّا wo فمع الأفعال الساكنة: Wo wohnst du?"},
        {"wrong": "Was ist dein Name? — Ich bin Name Sami.", "right": "Wie heißt du? — Ich heiße Sami.", "whyAr": "السؤال عن الاسم في الألمانية بـ wie (كيف) لا بـ was (ماذا)، لأنّ المنطق «كيف تُسمّى» لا «ما اسمك». وWas ist dein Name? صحيحة نحوياً لكنّها أقلّ استعمالاً وأكثر رسمية."},
        {"wrong": "Wie alt du bist?", "right": "Wie alt bist du?", "whyAr": "Wie alt وحدة معنوية واحدة تحتلّ المركز الأوّل كلّه، فيأتي الفعل bist في الثاني ثم الفاعل. والخطأ أن يُحسب alt كلمةً مستقلّة فيُزاح الفعل إلى الثالث."},
      ],
      relatedRuleComparison: {"title": "سؤال W أم سؤال نعم/لا؟", "content": "هذه الكتلة عن السؤال المفتوح. وهناك نوعٌ ثانٍ: سؤال الإجابة بنعم/لا (Ja/Nein-Frage)، وفيه يتقدّم الفعل إلى المركز الأوّل بلا أداة استفهام: Kommst du aus Tunesien? — Ja. فالفرق بين النوعين موضع الفعل: الأوّل أم الثاني. ومع أداة W يستحيل أن يتصدّر الفعل."},
    },
    
    {
      id: "t3",
      titleAr: "تصريف الأفعال المنتظمة في المضارع — السلسلة الذهبية",
      titleDe: "Das Präsens der regelmäßigen Verben: lernen, wohnen, spielen",
      explanationAr:
        "الأفعال المنتظمة (regelmäßige Verben) هي الأغلبية الساحقة من أفعال الألمانية. طريقة تصريفها في خطوتين:\n١. نأخذ المصدر ونحذف منه -en، فيبقى الجذع (der Stamm): lernen ← lern-\n٢. نضيف إلى الجذع نهاية الضمير (die Endung، والجمع die Endungen).\n\n**النهايات الست (السلسلة الذهبية):**\nich -e · du -st · er/sie/es -t · wir -en · ihr -t · sie/Sie -en\n\nمثال: lernen ← ich lerne، du lernst، er lernt، wir lernen، ihr lernt، sie lernen.\n\n**اقتصاد النظام:** ست خانات، لكن الأشكال أربعة فقط، لأن wir وsie/Sie تتشاركان -en، وer وihr تتشاركان -t.\n\n**الشواذ لاحقاً:** حين تلتقي بـ fahren ← du fährst أو nehmen ← du nimmst، فالنهايات نفسها، والتغيير يقع في حرف العلة داخل الجذع وحده.\n\n**وصلة -e-:** إذا انتهى الجذع بـ t أو d، نُدخل -e- قبل نهاية du وer حتى يسهل النطق: arbeiten ← du arbeit**e**st، er arbeit**e**t.\n\n**الاستثناء:** إذا انتهى الجذع بـ s أو ß أو z، تأخذ du النهاية -t وحدها: heißen ← du heißt، tanzen ← du tanzt.",
      whyAr:
        "لماذا تُقدَّم السلسلة الذهبية في الدرس الأوّل، قبل أيّ فعل شاذّ آخر؟\n\nلأنّها **أعلى مردودٍ تعليمي في المنهج كلّه**. ستّ نهايات تُحفظ في دقائق، تفتح لك مئات الأفعال دفعةً واحدة. من أتقنها اليوم يستطيع أن يقول «أسكن، أعمل، أتعلّم، ألعب، أطبخ، أشتري» — أي أن يتحدّث عن يومه كاملاً قبل أن يحفظ استثناءً واحداً.\n\nولأنّها كذلك **المرجع الذي يُقاس عليه الشذوذ**. حين تلتقي لاحقاً بـ fahren ← du fährst أو nehmen ← du nimmst، لن تراها فوضى بل انحرافاً محدَّداً عن قاعدةٍ تعرفها: النهايات نفسها، لكنّ حرف العلّة في الجذع تغيّر. ومن لم يُتقن القاعدة يرى الشذوذ عشوائياً فيحفظ كل فعل على حدة — وهو طريق مسدود.\n\nوأخيراً: وصلة -e- ليست تفصيلاً تجميلياً. arbeiten من أوائل الأفعال التي ستستعملها («أين تعمل؟»)، وحذف الوصلة يجعل الكلمة عسرة النطق ومسموعة كخطأ.",
      table: {
        title: "السلسلة الذهبية: نهايات المضارع",
        columns: ["الضمير", "lernen", "wohnen", "النهاية"],
        rows: [
          { label: "ich (أنا)", cells: ["lerne", "wohne", "-e"] },
          { label: "du (أنتَ/أنتِ)", cells: ["lernst", "wohnst", "-st"] },
          { label: "er/sie/es (هو/هي)", cells: ["lernt", "wohnt", "-t"] },
          { label: "wir (نحن)", cells: ["lernen", "wohnen", "-en"] },
          { label: "ihr (أنتم)", cells: ["lernt", "wohnt", "-t"] },
          { label: "sie/Sie (هم/حضرتك)", cells: ["lernen", "wohnen", "-en"] },
        ],
      },
      examples: [
        {"de": "Ich lerne Deutsch.", "ar": "أتعلّم الألمانية."},
        {"de": "Du wohnst in Tunis.", "ar": "أنت تسكن في تونس."},
        {"de": "Er spielt Fußball.", "ar": "هو يلعب كرة القدم."},
        {"de": "Wir kochen zusammen.", "ar": "نطبخ معاً."},
        {"de": "Ihr macht das gut.", "ar": "أنتم تفعلون ذلك جيداً."},
        {"de": "Sie kommen aus Deutschland.", "ar": "هم يأتون من ألمانيا."},
        {"de": "Du arbeitest viel.", "ar": "أنت تعمل كثيراً. (وصلة -e- لأنّ الجذع ينتهي بـ t)"},
        {"de": "Du heißt Sami.", "ar": "أنت تُسمّى سامي. (‑t وحدها بعد ß)"},
      ],
      comparisonWithArabic:
        "المقارنة هنا **تصبّ في صالحك**، خلافاً لما يظنّه أكثر المبتدئين.\n\n**العربية أعقد في التصريف.** فعل «كتب» يتغيّر في أوّله وآخره ووسطه: أكتبُ، تكتبُ، يكتبُ، نكتبُ، تكتبون، يكتبون — سوابق ولواحق وحركات داخلية. والألمانية لا تمسّ الجذع إطلاقاً في الأفعال المنتظمة: lern- ثابتة، والتغيير في النهاية وحدها.\n\n**والاشتقاق مألوف لك.** أنت تعرف من العربية فكرة الجذر الذي تُبنى عليه صيغ: ك-ت-ب ← كتب، كاتب، مكتوب، مكتبة. والألمانية تفعل الشيء نفسه بجذعٍ ونهايات: lern- ← lerne, lernst, Lerner, gelernt. فالآلية ليست غريبة عن ذهنك، بل هي آليتك نفسها بأدوات أبسط.\n\n**فأين تكمن الصعوبة الحقيقية إذاً؟** في موضعين:\n· **ضمائر لا مقابل لها.** الألمانية تفرّق بين du (أنتَ الودّي) و Sie (حضرتك الرسمي)، والعربية لا تملك هذا التمييز فتستعمل «أنتَ» للجميع. واختيار الضمير الخطأ في الألمانية **خطأٌ اجتماعي** لا نحوي، وهو أثقل.\n· **غياب المثنّى.** العربية تقول «أنتما تكتبان»، والألمانية لا مثنّى فيها إطلاقاً: ihr للاثنين وللعشرة سواء. وهذا **تبسيط** لصالحك، لا صعوبة.\n\nوموضع الالتباس الأخير: er و ihr يتشاركان النهاية -t، فتسمع lernt ولا تعرف أهو «هو» أم «أنتم» — والفاعل وحده يفصل.",
      eselsbruecke:
        "السلسلة الذهبية على إيقاع: «إِهْ ـ إِسْت ـ تْ ـ إِنْ ـ تْ ـ إِنْ» (‑e ‑st ‑t ‑en ‑t ‑en). ولاحظ التناظر: الطرفان -e و -en، والوسطان -st و -t، ثم تتكرّر -t و -en. وللوصلة: **إذا انتهى الجذع بـ t أو d، فامنحه راحةً (-e-) قبل النهاية** — arbeit-**e**-st.",
      commonMistakes: [
        {"wrong": "Ich lernen Deutsch.", "right": "Ich lerne Deutsch.", "whyAr": "استعمال المصدر بدل الفعل المصرَّف. والسبب أنّ المتعلّم يحفظ الفعل بصيغة القاموس lernen ثم ينساها كما هي. النهاية -en لـ wir وsie فقط، أمّا ich فتأخذ -e."},
        {"wrong": "Du arbeitst hier.", "right": "Du arbeitest hier.", "whyAr": "إغفال وصلة -e-. جذع arbeit- ينتهي بـ t، فإضافة -st مباشرة تُنتج tst وهي عسرة النطق. القاعدة: الجذع المنتهي بـ t أو d يأخذ -e- قبل نهايتَي du وer."},
        {"wrong": "Du heißst Sami.", "right": "Du heißt Sami.", "whyAr": "مضاعفة صوت s. الجذع heiß- ينتهي بـ ß وهو صوت s أصلاً، فتكتفي du بـ -t. والقاعدة نفسها مع tanzen ← du tanzt وreisen ← du reist."},
        {"wrong": "Er lernen Deutsch.", "right": "Er lernt Deutsch.", "whyAr": "خلط نهاية الغائب المفرد بنهاية الجمع. er/sie/es تأخذ -t، أمّا -en فللجمع wir/sie وللصيغة الرسمية Sie. وهذا الخطأ يُربك السامع لأنّه يُغيّر عدد الفاعل."},
      ],
      relatedRuleComparison: {
        title: "sein وheißen — ما تعلمته بالفعل",
        content: "sein شاذ تماماً (bin, bist, ist...). heißen «شبه منتظم»: heiße، heißt، heißt... لكن السلسلة الذهبية تبقى القاعدة العامة — الشاذ يُحفظ كاستثناء.",
      },
    },
  ],

  /* 4) الاستماع */
  reading: {
    "id": "read-a1-01",
    "titleDe": "Amir stellt sich vor",
    "titleAr": "أمير يقدّم نفسه",
    "textType": "erzaehlung",
    "paragraphs": [
      "Hallo! Ich heiße Amir Ben Salah. Ich komme aus Tunesien, aus der Stadt Sfax. Jetzt wohne ich in Leipzig. Leipzig ist eine Stadt in Deutschland. Ich bin 24 Jahre alt und ich bin Student. Ich lerne Deutsch, denn ich möchte hier Informatik studieren.",
      "Ich wohne nicht allein. Meine Mitbewohnerin heißt Lena. Sie kommt aus Polen und sie ist auch Studentin. Lena ist sehr nett und sie ist immer freundlich. Am Morgen sagt sie: Guten Morgen, Amir! Wie geht es dir? Und ich antworte: Danke, gut! Und dir?",
      "Am Montag beginnt mein Deutschkurs. Der Kurs ist von neun bis zwölf Uhr. Meine Lehrerin heißt Frau Weber. Sie fragt uns immer: Woher kommen Sie? Wo wohnen Sie? Warum lernen Sie Deutsch? Wir antworten auf Deutsch. Das ist nicht leicht, aber es macht Spaß.",
      "Am Abend telefoniere ich mit meiner Familie in Sfax. Meine Mutter fragt: Wie geht es dir in Deutschland? Ich sage: Es geht mir gut, aber ich vermisse euch. Deutschland ist neu für mich, doch ich lerne jeden Tag etwas Neues. Auf Wiedersehen und bis bald!"
    ],
    "paragraphsAr": [
      "مرحباً! اسمي أمير بن صالح. أنا من تونس، من مدينة صفاقس. أسكن الآن في لايبتسيغ، وهي مدينة في ألمانيا. عمري 24 سنة وأنا طالب. أتعلّم الألمانية لأنّني أودّ دراسة المعلوماتية هنا.",
      "أنا لا أسكن وحدي. شريكتي في السكن اسمها لينا. هي من بولندا وهي طالبة أيضاً. لينا لطيفة جداً وودودة دائماً. في الصباح تقول: صباح الخير يا أمير! كيف حالك؟ فأجيب: بخير، شكراً! وأنتِ؟",
      "يوم الاثنين تبدأ دورتي في الألمانية. الدورة من التاسعة إلى الثانية عشرة. معلّمتي اسمها السيدة فيبر. تسألنا دائماً: من أين أنتم؟ أين تسكنون؟ لماذا تتعلّمون الألمانية؟ ونجيب بالألمانية. ليس الأمر سهلاً، لكنّه ممتع.",
      "في المساء أتّصل بأسرتي في صفاقس. تسألني أمّي: كيف حالك في ألمانيا؟ فأقول: أنا بخير، لكنّني أشتاق إليكم. ألمانيا جديدة عليّ، غير أنّني أتعلّم كلّ يوم شيئاً جديداً. إلى اللقاء وإلى القريب!"
    ],
    "glossary": [
      {
        "de": "heißen",
        "ar": "يُسمّى / اسمه",
        "noteAr": "فعل منتظم لكن du تأخذ ‑t وحدها: du heißt (لأنّ الجذع ينتهي بـ ß)."
      },
      {
        "de": "kommen aus",
        "ar": "يأتي من / أصله من",
        "noteAr": "aus + اسم البلد للتعبير عن الأصل: Ich komme aus Tunesien."
      },
      {
        "de": "wohnen",
        "ar": "يسكن",
        "noteAr": "يُتبع بـ in + مدينة: Ich wohne in Leipzig. لا تخلطه بـ leben (يعيش)."
      },
      {
        "de": "die Stadt",
        "ar": "المدينة",
        "noteAr": "مؤنّثة، والجمع شاذّ: die Städte."
      },
      {
        "de": "der Student / die Studentin",
        "ar": "طالب جامعي / طالبة",
        "noteAr": "المؤنّث بإضافة ‑in. وبعد sein تأتي بلا أداة: Ich bin Student."
      },
      {
        "de": "nett",
        "ar": "لطيف",
        "noteAr": "صفة مع sein: Sie ist nett. لا تحتاج أداةً ولا نهاية."
      },
      {
        "de": "beginnen",
        "ar": "يبدأ",
        "noteAr": "منتظم: der Kurs beginnt. مرادفه anfangen (فعل بسابقة منفصلة، لاحقاً)."
      },
      {
        "de": "fragen",
        "ar": "يسأل",
        "noteAr": "منتظم تماماً: sie fragt. ضدّه antworten (وجذعه ينتهي بـ t فيأخذ وصلة ‑e‑: du antwortest)."
      },
      {
        "de": "die Lehrerin",
        "ar": "المعلّمة",
        "noteAr": "المذكّر der Lehrer، والمؤنّث بإضافة ‑in مع مدّ الحرف أحياناً."
      },
      {
        "de": "leicht",
        "ar": "سهل / خفيف",
        "noteAr": "ضدّه schwer. وتُستعمل للوزن والصعوبة معاً."
      },
      {
        "de": "Es macht Spaß",
        "ar": "إنّه ممتع",
        "noteAr": "تعبير ثابت. حرفياً «يصنع متعة»؛ لا يُترجم كلمةً كلمة."
      },
      {
        "de": "jeden Tag",
        "ar": "كلّ يوم",
        "noteAr": "ظرف زمان في حالة النصب (Akkusativ) — يُحفظ الآن كوحدة."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "اقرأ الفقرة الأولى ثمّ اختر الجواب الصحيح:",
        "questionDe": "Woher kommt Amir?",
        "questionAr": "من أين أمير؟",
        "options": [
          "Aus Polen",
          "Aus Tunesien",
          "Aus Deutschland",
          "Aus Leipzig"
        ],
        "correctIndex": 1,
        "explanation": "في الفقرة الأولى: «Ich komme aus Tunesien». انتبه للفرق بين مكان الأصل (Tunesien) ومكان السكن الحالي (Leipzig) — كلاهما مذكور، والسؤال بـ woher يطلب الأصل.",
        "optionExplanations": [
          "بولندا بلد لينا لا أمير.",
          undefined,
          "ألمانيا بلد إقامته لا أصله.",
          "لايبتسيغ مدينة سكنه الآن، والسؤال عن الأصل."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "اختر الجواب الصحيح حسب الفقرة الثانية:",
        "questionDe": "Wer ist Lena?",
        "questionAr": "من هي لينا؟",
        "options": [
          "Seine Lehrerin",
          "Seine Mutter",
          "Seine Mitbewohnerin",
          "Seine Schwester"
        ],
        "correctIndex": 2,
        "explanation": "«Meine Mitbewohnerin heißt Lena» — أي شريكته في السكن. أمّا المعلّمة فاسمها Frau Weber، والأمّ ذُكرت في الفقرة الأخيرة بلا اسم.",
        "optionExplanations": [
          "المعلّمة هي Frau Weber في الفقرة الثالثة.",
          "الأمّ وردت في الفقرة الرابعة.",
          undefined,
          "لم تُذكر أخت في النصّ إطلاقاً."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "ابحث في الفقرة الثالثة عن المعلومة الزمنية:",
        "questionDe": "Wann beginnt der Deutschkurs?",
        "questionAr": "متى تبدأ دورة الألمانية؟",
        "options": [
          "Am Abend",
          "Am Montag",
          "Am Morgen",
          "Am Wochenende"
        ],
        "correctIndex": 1,
        "explanation": "«Am Montag beginnt mein Deutschkurs». لاحظ ترتيب الكلمات: الظرف Am Montag في المركز الأوّل، فانزاح الفاعل بعد الفعل beginnt — وهذه قاعدة المركز الثاني نفسها التي درستَها.",
        "optionExplanations": [
          "المساء وقت المكالمة العائلية.",
          undefined,
          "الصباح وقت تحية لينا.",
          "لم تُذكر عطلة نهاية الأسبوع."
        ],
        "errorType": "word-order",
        "paragraph": 2
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "انتبه للتصريف في الفقرة الثالثة:",
        "questionDe": "Welcher Satz steht so im Text?",
        "questionAr": "أيّ جملة وردت هكذا في النصّ؟",
        "options": [
          "Sie frag uns immer",
          "Sie fragt uns immer",
          "Sie fragen uns immer",
          "Sie fragst uns immer"
        ],
        "correctIndex": 1,
        "explanation": "الفاعل sie (هي) مفرد غائب، فيأخذ الفعل النهاية ‑t: sie fragt. أمّا fragen فللجمع، وfragst لـ du، وfrag بلا نهاية صيغة أمر.",
        "optionExplanations": [
          "frag بلا نهاية = صيغة الأمر لا الإخبار.",
          undefined,
          "‑en للجمع wir/sie أو للصيغة الرسمية Sie.",
          "‑st نهاية du وحدها."
        ],
        "errorType": "conjugation",
        "paragraph": 2
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "افهم الموقف العامّ في الفقرة الأخيرة:",
        "questionDe": "Wie geht es Amir in Deutschland?",
        "questionAr": "كيف حال أمير في ألمانيا؟",
        "options": [
          "Er ist krank",
          "Er möchte zurück nach Sfax",
          "Es geht ihm gut, aber er vermisst die Familie",
          "Er lernt kein Deutsch mehr"
        ],
        "correctIndex": 2,
        "explanation": "يجمع النصّ حالين معاً: «Es geht mir gut, aber ich vermisse euch». الأداة aber هي مفتاح الفهم — فهي تربط شعورين متضادّين، ومَن قرأ نصفَ الجملة فقط أخطأ.",
        "optionExplanations": [
          "لم يُذكر مرض.",
          "يشتاق لأهله لكنّه لم يقل إنّه يريد العودة.",
          undefined,
          "بل يتعلّم كلّ يوم شيئاً جديداً."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      }
    ],
    "redemittel": [
      {
        "de": "Ich heiße … und ich komme aus …",
        "ar": "اسمي … وأنا من …"
      },
      {
        "de": "Ich wohne in … / Ich bin … Jahre alt.",
        "ar": "أسكن في … / عمري … سنة."
      },
      {
        "de": "Wie geht es dir? — Danke, gut! Und dir?",
        "ar": "كيف حالك؟ — بخير، شكراً! وأنتَ؟"
      },
      {
        "de": "Ich lerne Deutsch, denn ich möchte hier studieren.",
        "ar": "أتعلّم الألمانية لأنّني أودّ الدراسة هنا."
      },
      {
        "de": "Das ist nicht leicht, aber es macht Spaß.",
        "ar": "ليس الأمر سهلاً، لكنّه ممتع."
      },
      {
        "de": "Auf Wiedersehen und bis bald!",
        "ar": "إلى اللقاء وإلى القريب!"
      }
    ],
    "discussionAr": "قدّم نفسك أنت الآن على منوال أمير: اسمك، بلدك، مدينتك، عمرك، مهنتك أو دراستك، وسببُ تعلّمك الألمانية. اكتب خمس جملٍ على الأقلّ مستعملاً sein مرّةً والأفعال المنتظمة مرّتين، ثم اقرأها بصوتٍ عالٍ."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "لقاء غير رسمي (informell)",
        lines: [
          { speaker: "Anna", de: "Hallo! Ich heiße Anna. Wie heißt du?", ar: "مرحباً! اسمي آنا. ما اسمك؟" },
          { speaker: "Sami", de: "Hallo Anna! Ich heiße Sami.", ar: "مرحباً آنا! اسمي سامي." },
          { speaker: "Sami", de: "Ich komme aus Tunesien. Und woher kommst du?", ar: "أنا من تونس. وأنتِ من أين؟" },
          { speaker: "Anna", de: "Ich komme aus Deutschland, aus Berlin.", ar: "أنا من ألمانيا، من برلين." },
          { speaker: "Sami", de: "Freut mich!", ar: "يسعدني لقاؤك!" },
        ],
      },
      {
        id: "l2",
        title: "لقاء رسمي (formell)",
        lines: [
          { speaker: "Herr Weber", de: "Guten Tag! Wie heißen Sie?", ar: "طاب يومك! ما اسم حضرتك؟" },
          { speaker: "Frau Leila", de: "Guten Tag! Ich heiße Leila Mansour.", ar: "طاب يومك! اسمي ليلى منصور." },
          { speaker: "Herr Weber", de: "Woher kommen Sie, Frau Mansour?", ar: "من أين أنتِ يا سيدة منصور؟" },
          { speaker: "Frau Leila", de: "Ich komme aus Tunesien.", ar: "أنا من تونس." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الأول:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم الفتاة؟",
        options: ["Sami", "Anna", "Berlin", "Tunis"],
        correctIndex: 1,
        explanation: "قالت الفتاة: Ich heiße Anna — اسمها آنا.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Woher kommt Sami?",
        questionAr: "من أين سامي؟",
        options: ["aus Deutschland", "aus Berlin", "aus Tunesien", "aus Österreich"],
        correctIndex: 2,
        explanation: "قال سامي: Ich komme aus Tunesien — هو من تونس.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الثاني:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم السيدة في الحوار الرسمي؟",
        options: ["Frau Weber", "Leila Mansour", "Anna", "Sami"],
        correctIndex: 1,
        explanation: "قالت السيدة: Ich heiße Leila Mansour — اسمها ليلى منصور.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق (الأساسي — التقييم الكامل في المرحلة 3) */
  pronunciation: {
    id: "p1",
    title: "الأصوات الأساسية: h في بداية الكلمة وصوت ei",
    items: [
      { de: "Hallo", ar: "مرحباً", note: "h في البداية تُنطق من الحلق بنَفَس خفيف: ها-لو" },
      { de: "heißen", ar: "يُسمى", note: "ei تُنطق «أَيْ» وليس «إي»: هاي-سِن" },
      { de: "wie", ar: "كيف", note: "الحرف w هنا يُنطق «ڤ»: ڤي" },
      { de: "woher", ar: "من أين", note: "ڤوهير — مع h بارزة في المنتصف" },
      { de: "Guten Tag", ar: "طاب يومك", note: "غوتن تاك — الـ g في آخر الكلمة تُهمس فتُنطق «ك»" },
    ],
    tip: "كرّر كل كلمة ثلاث مرات بصوت عالٍ قبل الانتقال — النطق الصحيح من اليوم الأول يمنع العادات الخاطئة.",
    shadowing: [
      { de: "Hallo! Ich heiße Anna.", ar: "مرحباً! اسمي آنا.", tip: "انتبه: heiße تُنطق «هاي-سِه» وليس «هيسّه»" },
      { de: "Wie heißt du?", ar: "ما اسمك؟", tip: "ارفع نبرة صوتك في نهاية السؤال" },
      { de: "Ich komme aus Tunesien.", ar: "أنا من تونس.", tip: "komme = كومّه (حرف o قصير)" },
      { de: "Freut mich!", ar: "يسعدني لقاؤك!", tip: "مقطعان فقط: فرويت ميش" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "أجب كتابةً بالجملة الكاملة: من أين أنت؟",
      instructionDe: "Antworte: Woher kommst du?",
      prompt: "Woher kommst du? (أجب بجملة كاملة تبدأ بـ Ich)",
      acceptedAnswers: ["Ich komme aus Tunesien", "Ich komme aus Tunis", "Ich komme aus Tunesien."],
      sampleAnswer: "Ich komme aus Tunesien.",
      explanation: "الصيغة الصحيحة: Ich komme aus + البلد. انتبه إلى الفعل komme بعد ich.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "transformation",
      instructionAr: "حوّل هذه الجملة إلى سؤال (نعم/لا): Du heißt Anna.",
      instructionDe: "Bilde eine Frage: Du heißt Anna.",
      prompt: "Du heißt Anna. → ؟",
      acceptedAnswers: ["Heißt du Anna", "Heißt du Anna?"],
      sampleAnswer: "Heißt du Anna?",
      explanation: "سؤال نعم/لا: الفعل أولاً ثم الفاعل — Heißt du Anna?",
      errorType: "word-order",
    },
    {
      id: "w3",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالضمير الصحيح (ich/du/er/sie):",
      template: "___ bin Anna. Und wie heißt ___? ___ heißt Sami.",
      blanks: [
        { correct: "Ich", options: ["Ich", "Du", "Er"] },
        { correct: "du", options: ["ich", "du", "er"] },
        { correct: "Er", options: ["Ich", "Du", "Er"] },
      ],
      explanation: "Ich (أنا) مع bin، du (أنتَ) في السؤال، Er (هو) مع heißt للحديث عن شخص ثالث.",
      errorType: "pronoun",
    },
  ],

  /* 7) بنك التدريبات التفاعلية */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة الصحيحة لإكمال الجملة:",
      questionDe: "Ich ___ Anna.",
      questionAr: "أنا آنا.",
      options: ["bin", "bist", "ist", "sind"],
      correctIndex: 0,
      explanation: "مع الضمير ich نستخدم دائماً bin — هذا هو تصريف sein للضمير أنا.",
      optionExplanations: [
        undefined,
        "bist تأتي مع du وليس مع ich.",
        "ist تأتي مع er/sie/es وليس مع ich.",
        "sind تأتي مع wir/sie وليس مع ich.",
      ],
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Woher kommst du?",
      questionAr: "ما معنى السؤال؟",
      options: ["أين تسكن؟", "من أين أنت؟", "ما اسمك؟", "كم عمرك؟"],
      correctIndex: 1,
      explanation: "Woher تعني «من أين» و kommst du تعني «تأتي أنت» — أي من أين أنت؟",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["heiße", "Ich", "Sami", "."],
      correctSentence: "Ich heiße Sami.",
      explanation: "القاعدة: الفعل في المركز الثاني — Ich (1) + heiße (2) + Sami.",
      errorType: "word-order",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال صحيح:",
      tokens: ["kommst", "Woher", "du", "?"],
      correctSentence: "Woher kommst du?",
      explanation: "سؤال W: كلمة السؤال أولاً ثم الفعل ثم الفاعل — Woher + kommst + du.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بصيغة sein الصحيحة:",
      template: "Er ___ mein Bruder. Und ich ___ seine Schwester.",
      blanks: [
        { correct: "ist", options: ["bin", "ist", "bist", "sind"] },
        { correct: "bin", options: ["bin", "ist", "bist", "sind"] },
      ],
      explanation: "Er → ist (هو)، ich → bin (أنا). لا تخلط بينهما!",
      errorType: "conjugation",
    },
    {
      id: "e6",
      type: "matching",
      instructionAr: "صل الكلمة الألمانية بمعناها العربي:",
      pairs: [
        { left: "Guten Morgen", right: "صباح الخير" },
        { left: "Guten Abend", right: "مساء الخير" },
        { left: "Gute Nacht", right: "تصبح على خير" },
        { left: "Auf Wiedersehen", right: "إلى اللقاء" },
      ],
      explanation: "هذه أكثر التحيات استخداماً: Morgen (صباح)، Abend (مساء)، Nacht (ليل).",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe aus Tunesien.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "ist", "bist", "hat"],
      explanation: "الأصل من بلد يكون بـ sein لا haben: Ich bin aus Tunesien.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wie du heißt?",
      wrongWord: "du heißt",
      correctWord: "heißt du",
      options: ["heißt du", "du heißst", "du heißen", "heißen du"],
      explanation: "في سؤال W: الفعل مباشرة بعد كلمة السؤال — Wie heißt du?",
      errorType: "word-order",
    },
    {
      id: "e9",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال: Er kommt aus Berlin.",
      prompt: "Er kommt aus Berlin. → ؟",
      acceptedAnswers: ["Kommt er aus Berlin", "Kommt er aus Berlin?"],
      sampleAnswer: "Kommt er aus Berlin?",
      explanation: "سؤال نعم/لا: الفعل أولاً ثم الفاعل — Kommt er aus Berlin?",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه (اضغط على زر الاستماع):",
      audioText: "Ich heiße Anna und komme aus Berlin.",
      explanation: "الجملة الصحيحة: Ich heiße Anna und komme aus Berlin. لاحظ: kommt تصبح komme مع ich.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "صرف الفعل بين قوسين بالسلسلة الذهبية:",
      instructionDe: "Konjugiere: lernen, spielen, wohnen",
      template: "Ich ___ Deutsch. (lernen) · Du ___ Fußball. (spielen) · Er ___ in Tunis. (wohnen) · Wir ___ zusammen. (kochen)",
      blanks: [
        { correct: "lerne", options: ["lerne", "lernen", "lernst", "lernt"] },
        { correct: "spielst", options: ["spielst", "spiele", "spielen", "spielt"] },
        { correct: "wohnt", options: ["wohnt", "wohne", "wohnst", "wohnen"] },
        { correct: "kochen", options: ["kochen", "koche", "kocht", "kochst"] },
      ],
      hint: "السلسلة الذهبية: ich -e، du -st، er -t، wir -en.",
      explanation: "lerne (-e)، spielst (-st)، wohnt (-t)، kochen (-en) — السلسلة الذهبية.",
      errorType: "conjugation",
      points: 2,
    },
    {"id": "e12", "type": "multiple-choice", "instructionAr": "اختر الأداة الصحيحة للسؤال:", "questionDe": "___ wohnst du? — In Tunis.", "questionAr": "أين تسكن؟ — في تونس.", "options": ["Wo", "Woher", "Wohin", "Wann"], "correctIndex": 0, "explanation": "الجواب «in Tunis» يدلّ على مكانٍ ثابت، فالأداة Wo. أمّا Woher فتسأل عن الأصل (aus …) وWohin عن الوجهة (nach …).", "optionExplanations": [undefined, "Woher تنتظر جواباً بـ aus: aus Tunesien.", "Wohin تنتظر جواباً بـ nach: nach Berlin.", "Wann تسأل عن الزمن لا المكان."], "errorType": "vocabulary"},
    {"id": "e13", "type": "fill-blank", "instructionAr": "صرّف الفعل بين قوسين تصريفاً صحيحاً:", "template": "Du ___ sehr schnell. (arbeiten)", "blanks": [{"correct": "arbeitest", "options": ["arbeitest", "arbeitst", "arbeiten", "arbeitet"]}], "explanation": "جذع arbeit- ينتهي بحرف t، فتُدخَل وصلة ‑e‑ قبل نهاية du: arbeit + e + st = arbeitest. ولولا الوصلة لتعذّر نطق tst.", "errorType": "conjugation"},
    {"id": "e14", "type": "word-ordering", "instructionAr": "رتّب الكلمات لتكوّن سؤالاً صحيحاً:", "tokens": ["Warum", "lernst", "du", "Deutsch", "?"], "correctSentence": "Warum lernst du Deutsch?", "explanation": "أداة الاستفهام أوّلاً، ثمّ الفعل المصرَّف في المركز الثاني، ثمّ الفاعل، ثمّ المفعول. هذا هو ترتيب سؤال W الثابت.", "errorType": "word-order"},
    {"id": "e15", "type": "error-correction", "instructionAr": "ابحث عن الكلمة الخاطئة وصحّحها:", "wrongSentence": "Meine Lehrerin heißen Frau Weber.", "wrongWord": "heißen", "correctWord": "heißt", "options": ["heißt", "heiße", "heißest", "bin"], "explanation": "الفاعل «meine Lehrerin» مفردٌ غائب، فيأخذ الفعل النهاية ‑t. والجذع heiß- ينتهي بـ ß لكنّ ذلك لا يمسّ صيغة الغائب: heißt.", "errorType": "conjugation"}
  ],

  /* 8) الأخطاء الشائعة والتريكات + لقطة ثقافية */
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich bin Anna heißen.",
        right: "Ich heiße Anna.",
        whyAr: "لا تجمع بين sein والفعل heißen في نفس الجملة للتعبير عن الاسم — يكفي فعل واحد.",
      },
      {
        wrong: "Wo du wohnst?",
        right: "Wo wohnst du?",
        whyAr: "الفعل يجب أن يأتي في المركز الثاني مباشرة بعد كلمة السؤال.",
      },
      {
        wrong: "نطق heißen كـ«هيسّن»",
        right: "نطق heißen كـ«هاي-سن»",
        whyAr: "الصوت ei يُنطق «أَيْ» في الألمانية وليس «إي» (مثل: mein = مايْن).",
      },
    ],
    eselsbruecken: [
      "«بين (bin)»: أنا بين عائلتي = Ich bin — ربط الكلمة بمعناها الصوتي.",
      "أدوات الاستفهام الأساسية في هذا الدرس تبدأ بـ W: Wer, Was, Wo, Woher, Wann, Warum, Wie — «السؤال يبدأ بـ W».",
    ],
    culturalNote: {
      title: "du أم Sie؟",
      content:
        "في ألمانيا: مع الأصدقاء والأطفال والزملاء القريبين نستخدم du. مع الغرباء والموظفين وكبار السن نستخدم Sie (حضرتك) — وقرينة الصيغة الرسمية في السؤال: Wie heißen Sie?",
    },
  },

  /* 9) التقييم الختامي (Mini-Test) */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt du? — Ich heiße Karim.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      explanation: "السؤال عن الاسم يستخدم Wie: Wie heißt du? — ما اسمك؟",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wir ___ Studenten.",
      options: ["bin", "bist", "sind", "ist"],
      correctIndex: 2,
      explanation: "مع wir نستخدم sind: Wir sind Studenten — نحن طلاب.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["wohnst", "du", "Wo", "?"],
      correctSentence: "Wo wohnst du?",
      explanation: "أين تسكن؟ — Wo (أين) + wohnst (تسكن) + du (أنتَ).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ:",
      template: "Ich ___ aus Tunesien. Und du, woher ___ du?",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt"] },
        { correct: "kommst", options: ["komme", "kommst", "kommt"] },
      ],
      explanation: "ich → komme، du → kommst. لاحظ إضافة s في نهاية الفعل مع du.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Warum du lernst Deutsch?",
      wrongWord: "du lernst",
      correctWord: "lernst du",
      options: ["lernst du", "du lernen", "lernt du"],
      explanation: "في سؤال W يأتي الفعل مباشرة بعد كلمة السؤال ثم الفاعل: Warum lernst du Deutsch? والفعل يوافق du بالنهاية st-.",
      errorType: "word-order",
    },
  ],

  /* 10) بطاقات المراجعة */
  flashcards: [
    { id: "fc1", de: "der Name", ar: "الاسم", example: "Wie ist dein Name?", exampleAr: "ما اسمك؟", level: "A1" },
    { id: "fc2", de: "heißen", ar: "يُدعى / اسمه", example: "Ich heiße Anna.", exampleAr: "اسمي آنا.", level: "A1" },
    { id: "fc3", de: "kommen", ar: "يأتي", example: "Ich komme aus Tunesien.", exampleAr: "أنا من تونس.", level: "A1" },
    { id: "fc4", de: "wohnen", ar: "يسكن", example: "Ich wohne in Tunis.", exampleAr: "أسكن في تونس.", level: "A1" },
    { id: "fc5", de: "woher", ar: "من أين", example: "Woher kommst du?", exampleAr: "من أين أنت؟", level: "A1" },
    { id: "fc6", de: "Guten Morgen", ar: "صباح الخير", example: "Guten Morgen!", exampleAr: "صباح الخير!", level: "A1" },
    { id: "fc7", de: "das Land", ar: "البلد", example: "Ich liebe mein Land.", exampleAr: "أحب بلدي.", level: "A1" },
    { id: "fc8", de: "die Stadt", ar: "المدينة", example: "Tunis ist eine schöne Stadt.", exampleAr: "تونس مدينة جميلة.", level: "A1" },
    { id: "fc9", de: "lernen / ich lerne", ar: "يتعلم / أتعلم", example: "Ich lerne Deutsch.", exampleAr: "أتعلم الألمانية.", level: "A1" },
    { id: "fc10", de: "die Endung", ar: "النهاية (لاحقة تصريف الفعل)", example: "Die Endungen sind -e, -st, -t, -en: ich lerne, du lernst, er lernt.", exampleAr: "النهايات هي ‎-e و‎-st و‎-t و‎-en: أتعلّم، تتعلّم، يتعلّم.", level: "A1" },
    {"id": "fc11", "de": "die Mitbewohnerin", "ar": "شريكة السكن", "example": "Meine Mitbewohnerin heißt Lena.", "exampleAr": "شريكتي في السكن اسمها لينا.", "level": "A1"},
    {"id": "fc12", "de": "Es macht Spaß.", "ar": "إنّه ممتع.", "example": "Deutsch lernen macht Spaß.", "exampleAr": "تعلّم الألمانية ممتع.", "level": "A1"},
    {"id": "fc13", "de": "du arbeitest (وصلة ‑e‑)", "ar": "أنت تعمل — جذع بـ t يأخذ ‑e‑", "example": "Du arbeitest viel.", "exampleAr": "أنت تعمل كثيراً.", "level": "A1"},
    { id: "fc14", de: "studieren", ar: "يدرس في الجامعة", example: "Ich möchte hier Informatik studieren.", exampleAr: "أودّ أن أدرس المعلوماتية هنا.", level: "A1" },
    { id: "fc15", de: "allein", ar: "وحده", example: "Ich wohne nicht allein.", exampleAr: "لا أسكن وحدي.", level: "A1" },
    { id: "fc16", de: "freundlich", ar: "لطيف، ودود", example: "Lena ist immer freundlich.", exampleAr: "لينا ودودة دائماً.", level: "A1" },
    { id: "fc17", de: "nett", ar: "لطيف", example: "Meine Mitbewohnerin ist sehr nett.", exampleAr: "شريكتي في السكن لطيفة جداً.", level: "A1" },
    { id: "fc18", de: "beginnen", ar: "يبدأ", example: "Am Montag beginnt mein Deutschkurs.", exampleAr: "يوم الاثنين تبدأ دورتي.", level: "A1" },
    { id: "fc19", de: "der Deutschkurs", ar: "دورة اللغة الألمانية", example: "Der Deutschkurs ist von neun bis zwölf.", exampleAr: "الدورة من التاسعة إلى الثانية عشرة.", level: "A1" },
  ],

  /* ═══ مهام الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a1-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص بطاقة تعريف ألمانية لصديق لا يفهم الألمانية",
      sourceDe: "Hallo! Ich heiße Karim und komme aus Tunesien. Ich wohne in Tunis und lerne Deutsch.",
      sourceAr: "مرحباً! اسمي كريم وأنا من تونس. أسكن في تونس وأتعلم الألمانية.",
      taskAr: "نقل الرسالة أعلاه بالعربية إلى صديق لا يفهم الألمانية، مع الحفاظ على كل المعلومات (الاسم، البلد، المدينة، النشاط).",
      modelAnswerAr: "«مرحباً! صديقي اسمه كريم، وهو من تونس. يسكن في مدينة تونس ويتعلم اللغة الألمانية.»",
      keyPointsAr: ["ذكرت الاسم (كريم)", "ذكرت البلد (تونس)", "ذكرت المدينة (تونس)", "ذكرت أنه يتعلم الألمانية"],
    },
    {
      id: "med-a1-01-2",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بسيطة: كيف تتهجى الاسم؟",
      sourceDe: "Buchstabiere bitte deinen Namen! — K-A-R-I-M",
      taskAr: "اشرح لصديقك بالعربية كيف يتهجّى اسمه بالألمانية، موضحاً أن كل حرف يُنطق باسمه الألماني.",
      modelAnswerAr: "«التهجئة بالألمانية: نقول اسم كل حرف على حدة — K تُنطق كا، A آ، R إر، I إي، M إم. هكذا: كا-آ-إر-إي-إم.»",
      keyPointsAr: ["شرحت معنى buchstabieren (التهجئة)", "ذكرت مثالاً على التهجئة حرفاً حرفاً"],
    },
  ],
  interaction: [
    {
      id: "int-a1-01-1",
      scenarioAr: "تلتقي شخصاً ألمانياً لأول مرة في حفلة. هو يبدأ الحديث.",
      scenarioDe: "Du triffst eine deutsche Person auf einer Party.",
      strategyAr: "الاستراتيجية المستهدفة: افتتاح محادثة والرد على أسئلة التعارف.",
      rounds: [
        {
          speakerDe: "Hallo! Ich bin Lisa. Und du?",
          speakerAr: "مرحباً! أنا ليزا. وأنت؟",
          options: [
            { de: "Hallo Lisa! Ich heiße Karim. Freut mich!", ar: "مرحباً ليزا! اسمي كريم. سعيد بلقائك!", best: true, replyDe: "Freut mich auch, Karim! Woher kommst du?", replyAr: "سعيدة بلقائك أيضاً يا كريم! من أين أنت؟" },
            { de: "Ich bin ein Tisch.", ar: "أنا طاولة.", best: false, replyDe: "Haha, sehr lustig! Aber woher kommst du wirklich?", replyAr: "هاها، مضحك جداً! لكن من أين أنت حقاً؟" },
          ],
        },
        {
          speakerDe: "Woher kommst du, Karim?",
          speakerAr: "من أين أنت يا كريم؟",
          options: [
            { de: "Ich komme aus Tunesien. Und du?", ar: "أنا من تونس. وأنتِ؟", best: true, replyDe: "Aus Deutschland, aus Berlin. Ich wohne dort.", replyAr: "من ألمانيا، من برلين. أسكن هناك." },
            { de: "Ich wohne in einem Haus.", ar: "أسكن في بيت.", best: false, replyDe: "Das ist schön, aber woher kommst du?", replyAr: "جميل، لكن من أين أنت؟" },
          ],
        },
        {
          speakerDe: "Was machst du hier in Deutschland?",
          speakerAr: "ماذا تفعل هنا في ألمانيا؟",
          options: [
            { de: "Ich lerne Deutsch. Ich wohne hier.", ar: "أتعلم الألمانية. أسكن هنا.", best: true, replyDe: "Sehr gut! Viel Erfolg beim Deutschlernen!", replyAr: "ممتاز! حظاً موفقاً في تعلم الألمانية!" },
            { de: "Ich bin ein Auto.", ar: "أنا سيارة.", best: false, replyDe: "Du bist ein Auto? Okay, komisch! Tschüss!", replyAr: "أنت سيارة؟ حسناً، غريب! إلى اللقاء!" },
          ],
        },
      ],
    },
  ],
};

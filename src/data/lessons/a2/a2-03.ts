import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-03: في المطعم — سُلّم التأدّب، schmecken والداتيف، مسار الزيارة، وصف الطعم
 */
export const lessonA203: Lesson = {
  id: "a2-03",
  unitId: "a2-03",
  level: "A2",
  order: 1,
  titleDe: "Im Restaurant",
  titleAr: "المطعم والطعام",
  duration: 35,
  summary:
    "سُلّم الطلب المهذّب من will إلى hätte gern (وأصله Konjunktiv II من haben ومögen)، وأفعال «الشيء فاعلٌ والإنسان متلقٍّ» schmecken/gefallen/passen، ومسار الزيارة كاملاً من الحجز والجلوس إلى Zusammen oder getrennt? والبقشيش المنطوق، وصفات الطعم والمقادير وقاعدة etwas Warmes — مع نصّ «Ein Abend im Gasthaus Löwen».",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann höflich bestellen und die Stufen der Höflichkeit unterscheiden.",
      ar: "أن أطلب بأدب وأميّز درجات السُلّم: will ⟵ möchte ⟵ hätte gern ⟵ Könnte ich…?",
    },
    {
      id: "z2",
      de: "Ich kann mit schmecken, gefallen und passen über Essen sprechen.",
      ar: "أن أستعمل الأفعال التي يكون الشيء فيها فاعلاً والإنسان في الداتيف: Das Essen schmeckt mir.",
    },
    {
      id: "z3",
      de: "Ich kann einen Restaurantbesuch von der Reservierung bis zur Rechnung führen.",
      ar: "أن أدير زيارة مطعمٍ كاملة: الحجز، الجلوس، الطلب على مرحلتين، ثمّ Zusammen oder getrennt? والبقشيش.",
    },
    {
      id: "z4",
      de: "Ich kann Geschmack, Mengen und Wünsche wie etwas Warmes ausdrücken.",
      ar: "أن أصف الطعم (scharf مقابل heiß)، وأطلب المقادير (zwei Tassen Kaffee)، وأقول etwas Warmes.",
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "جملتان تطلبان الشيء نفسه: Ich will einen Kaffee وIch hätte gern einen Kaffee. الأولى مفهومة، لكنّها في أذن النادل الألماني تشبه «أنا عايز قهوة» في وجه ضيف. الفرق ليس في المعنى بل في **صورة الفعل**: hätte ليست فعلاً جديداً بل صورة شرطية من haben، وmöchte صورة شرطية من mögen. اليوم نفكّ هذا اللغز، ثمّ نمشي في المطعم من باب الحجز إلى جملة البقشيش الأخيرة.",
    motivatingQuestionDe: "Was hätten Sie gern?",
    contextAr:
      "المطعم موقفٌ صغير لكنّه يجمع أربعة دروس في واحد: التأدّب الصرفيّ، وأفعالٌ يكون الشيء فيها فاعلاً والإنسان متلقّياً (Das Essen schmeckt mir)، ومسارٌ اجتماعيّ له محطّاتٌ ثابتة (الجلوس بانتظار الإرشاد، الطلب على مرحلتين، الماء المدفوع، سؤال Zusammen oder getrennt?)، ولغةُ وصفٍ للطعم والمقادير. من أتقن هذه الأربعة أكل بلا خوف.",
    connectionToPreviousAr:
      "في a1-03 تعلّمتَ الطعام والنصب، وفي a1-07 تعلّمتَ الأسعار وسُلّم الطلب في المخبز، وفي a2-01 تعلّمتَ خطوات الشكوى المهذّبة الثلاث. اليوم نضمّها كلّها ونضيف أصلها الصرفيّ، فتصير الجملة مفهومةً لا محفوظة.",
    activateVocabulary: [
      { de: "die Speisekarte", ar: "قائمة الطعام" },
      { de: "bestellen", ar: "يطلب (طعاماً)" },
      { de: "schmecken", ar: "يكون طعمه (لفلان)" },
      { de: "die Vorspeise", ar: "المقبّلات" },
      { de: "die Rechnung", ar: "الحساب/الفاتورة" },
      { de: "das Trinkgeld", ar: "البقشيش" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): اختر الصيغة الصحيحة (النصب):",
      questionDe: "Ich esse ___ Apfel.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation: "بعد essen المذكر ein → einen (درس الطعام).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-06 — أوقات الفراغ والهوايات): اختر صيغة الأمر المهذبة:",
      questionDe: "___ Sie bitte! (تعالوا)",
      options: ["Kommen", "Komm", "Kommt", "Kommen Sie"],
      correctIndex: 3,
      explanation: "الأمر المهذب مع Sie: Kommen Sie! (درس الهوايات).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة من A1 (درس a1-03 — الطعام والشراب): أكمل بـ der/die/das:",
      template: "___ Brot · ___ Milch · ___ Käse",
      blanks: [
        { correct: "das", options: ["das", "die", "der"] },
        { correct: "die", options: ["das", "die", "der"] },
        { correct: "der", options: ["das", "die", "der"] },
      ],
      explanation: "das Brot، die Milch، der Käse (درس الطعام).",
      errorType: "gender",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "سُلّم الطلب — من Ich will إلى Ich hätte gern",
      titleDe: "Höflich bestellen: möchten, hätte gern, nehmen",
      explanationAr:
        "تعرف من A1 أنّ möchten تعني «أودّ»، وتعرف Ich nehme. لكنّ المطعم الألمانيّ لا يقيس صحّة الجملة وحدها، بل **درجة تأدّبها** — والمتعلّم الذي يقول Ich will einen Kaffee يبني جملةً سليمةً نحوياً ومرفوضةً اجتماعياً. لذلك نرتّب اليوم الصيغ في **سُلّمٍ من خمس درجات**، لا لنحفظها بل لنعرف متى نصعد ومتى ننزل.\n\n**الدرجة الأولى (الأدنى) — Ich will …** إرادةٌ عارية. تُقال للطفل ولا تُقال للنادل. وهي في أذن الألمانيّ أقرب إلى «أنا عايز» منها إلى «أريد».\n\n**الثانية — Ich nehme …** «آخذ». محايدةٌ عمليّة، وهي أكثر ما يُسمع فعلاً في المطاعم اليومية. ليست فظّة، لكنّها لا تحمل تأدّباً زائداً. صالحةٌ تماماً حين يكون الطلب واضحاً وسريعاً.\n\n**الثالثة — Ich möchte …** «أودّ». وهي في الأصل **صيغة Konjunktiv II من الفعل mögen**، أي أنّ تأدّبها ليس اصطلاحاً بل نحوٌ عامل: الصيغة الشرطية تُبعد الطلب عن المباشرة فتلطّفه. ولهذا لا يوجد لها مصدرٌ حقيقيّ في الاستعمال الحديث — تقول Ich mag Kaffee (أحبّ القهوة، ميلٌ دائم) وIch möchte einen Kaffee (أودّ قهوةً الآن، طلبٌ عارض)، والفرق بينهما فرق الميل عن الطلب.\n\n**الرابعة — Ich hätte gern …** «سأحبّ أن يكون لديّ». وهي أيضاً Konjunktiv II، لكن من **haben** هذه المرّة: hätte + gern. وهي أرقى قليلاً من möchten وأكثر شيوعاً عند النادل والبائع. لاحظ البنية: **hätte gern + مفعولٌ منصوب**، بلا فعلٍ ثانٍ ⟵ Ich hätte gern **einen** Salat.\n\n**الخامسة (الأعلى) — Könnte ich bitte … haben? / Ich würde gern …** سؤالٌ لا خبر. يُستعمل حين يكون الطلب استثنائياً أو مُكلِّفاً للطرف الآخر: Könnte ich bitte noch ein Glas Wasser haben?\n\n**والقاعدة الحاكمة للسُّلّم كلّه: كلّما ابتعدت الصيغة عن الإخبار المباشر ازداد التأدّب.** الشرطية أبعد من الإخبار، والسؤال أبعد من الشرطية. وهذه ليست خصوصيةً ألمانية بل مبدأ عامّ في اللغات، لكنّ الألمانية تُشغّله بصيغةٍ صرفية صريحة.",
      whyAr:
        "لأنّ هذا هو الموضع الذي يُحكَم فيه على المتعلّم اجتماعياً قبل أن يُحكَم عليه لغوياً. جملةٌ فيها خطأٌ في الأداة تُغتفر ويُصحّحها المستمع في ذهنه؛ أمّا نبرةُ الأمر فتُسجَّل انطباعاً عن الشخص لا عن لغته. وامتحان Goethe A2 يقيس هذا صراحةً في **Sprechen Teil 3** (تقديم طلبٍ والاستجابة لطلب)، وفي معايير التقييم بندٌ اسمه Angemessenheit — ملاءمة الصيغة للموقف — منفصلٌ عن بند الصحّة النحوية.\n\nوهناك سببٌ بنيويّ أعمق: möchten وhätte gern هما **أوّل لقاءٍ منهجيّ للمتعلّم بالـKonjunktiv II**، وهو الوضع الصرفيّ الذي سيحمل لاحقاً في B1 كلّ التمنّي والافتراض والنصيحة (wäre, könnte, würde, sollte). فإن فهمهما اليوم بوصفهما **صيغةً شرطيةً تعمل**، لا كلمتين مفردتين تُحفظان، دخل B1 وقد بُني نصف الباب. ولهذا نُسمّيهما هنا باسمهما الصرفيّ صراحةً بدل أن نمرّرهما كمفردات.\n\nوأخيراً: hätte gern تُدرَّب هنا لأنّها أكثر صيغة يسمعها المقيم في ألمانيا يومياً — في المخبز والمقهى والصيدلية — وهي مع ذلك من أكثر ما يُهمله كتاب المستوى، فيخرج المتعلّم يجيد möchten وحدها ويبدو مقروءاً من كتاب.",
      table: {
        title: "سُلّم الطلب — خمس درجات",
        columns: ["الصيغة", "الأصل الصرفيّ", "درجة التأدّب", "المثال"],
        rows: [
          {
            label: "Ich will …",
            cells: ["إخبار مباشر", "✗ مرفوضة", "Ich will einen Kaffee."],
          },
          {
            label: "Ich nehme …",
            cells: ["إخبار مباشر", "محايدة", "Ich nehme die Suppe."],
          },
          {
            label: "Ich möchte …",
            cells: [
              "Konjunktiv II من mögen",
              "مهذّبة",
              "Ich möchte einen Tee.",
            ],
          },
          {
            label: "Ich hätte gern …",
            cells: [
              "Konjunktiv II من haben",
              "أرقى",
              "Ich hätte gern einen Salat.",
            ],
          },
          {
            label: "Könnte ich … haben?",
            cells: [
              "سؤال + Konjunktiv II",
              "الأعلى",
              "Könnte ich bitte die Karte haben?",
            ],
          },
        ],
      },
      examples: [
        {
          de: "Ich hätte gern einen Kaffee, bitte.",
          ar: "أودّ قهوةً من فضلك. (hätte gern + منصوب)",
        },
        {
          de: "Ich möchte die Gemüsesuppe, bitte.",
          ar: "أودّ شوربة الخضار من فضلك.",
        },
        {
          de: "Ich nehme das Schnitzel mit Pommes.",
          ar: "آخذ الشنيتسل مع البطاطا. (محايدة عمليّة)",
        },
        {
          de: "Könnte ich bitte noch ein Glas Wasser haben?",
          ar: "أيمكنني كوب ماءٍ آخر من فضلك؟ (الأرقى)",
        },
        {
          de: "Für mich bitte nur einen Salat.",
          ar: "لي سلطة فقط من فضلك. (بلا فعلٍ أصلاً — مختصرة ومهذّبة)",
        },
        {
          de: "Wir hätten gern die Karte, bitte.",
          ar: "نودّ قائمة الطعام من فضلك. (الجمع: hätten)",
        },
        {
          de: "Ich mag Fisch, aber heute möchte ich Fleisch.",
          ar: "أحبّ السمك، لكنّي أودّ اللحم اليوم. (ميلٌ دائم مقابل طلبٍ عارض)",
        },
        {
          de: "Als Vorspeise hätte ich gern die Suppe.",
          ar: "كمقبّلات أودّ الشوربة. (لاحظ: hätte ich بعد التقديم — V2)",
        },
      ],
      comparisonWithArabic:
        "العربية تصنع التأدّب **بالمعجم والدعاء** أكثر ممّا تصنعه بالصرف: «لو سمحت»، «من فضلك»، «إذا تكرّمت»، «الله يخليك». والفعل نفسه يبقى كما هو: «أريد قهوة» تصير مهذّبةً بإضافة «لو سمحت» لا بتغيير «أريد».\n\nالألمانية تفعل العكس: **تغيّر صورة الفعل نفسه**. Ich will ⟵ Ich möchte ⟵ Ich hätte gern: ثلاث درجاتٍ من التأدّب في ثلاث صورٍ صرفية، وbitte إضافةٌ فوقها لا بديلٌ عنها. ومن هنا خطأٌ شائع ومحرج: يقول المتعلّم Ich will einen Kaffee, bitte ظانّاً أنّ bitte كافيةٌ كما تكفي «لو سمحت» في العربية — فتخرج الجملة كمن يقول «أنا عايز قهوة، لو سمحت» بنبرة أمر.\n\nوفرقٌ ثانٍ: العربية تستعمل «أودّ» و«أريد» متقاربتين، وكثيراً ما تُترجَم möchten بـ«أريد» في المعاجم — فيقيس المتعلّم عليها wollen. والصواب أنّ **wollen تقابل «أريد» بمعنى الإرادة والعزم** (Ich will Deutsch lernen — عزمٌ مشروع)، أمّا في الطلب الخدميّ فلا موضع لها البتّة.\n\nوثالثاً: العربية لا تملك مقابلاً صرفياً مباشراً لـhätte gern. أقرب ما يقابلها «كنت أودّ» أو «حابب» في العاميّة — وكلاهما يستعمل الماضي للتلطيف، وهذا بالضبط ما تفعله الألمانية. فالمنطق مشترك والأداة مختلفة، وهذه أفضل حالٍ للمتعلّم: يفهم العلّة ويحفظ الصورة.",
      eselsbruecke:
        "«كلّما ابتعدتَ عن الإخبار اقتربتَ من الأدب»: will (إخبار) ⟵ möchte (شرط) ⟵ hätte gern (شرط + gern) ⟵ Könnte ich …? (سؤال). والسُّلّم يُصعَد لا يُقفَز.",
      commonMistakes: [
        {
          wrong: "Ich will einen Kaffee, bitte.",
          right: "Ich hätte gern einen Kaffee, bitte.",
          whyAr:
            "bitte لا تُنقذ wollen. العربية تُهذّب بالإضافة، والألمانية تُهذّب بتغيير صورة الفعل — فالخطأ ليس نحوياً بل اجتماعياً، وهو أوّل ما يُسمع منك.",
        },
        {
          wrong: "Ich hätte gern ein Salat.",
          right: "Ich hätte gern einen Salat.",
          whyAr:
            "hätte gern تنصب مفعولها: der Salat ⟵ einen Salat. والتأدّب لا يُعفي من الإعراب.",
        },
        {
          wrong: "Ich möchte einen Kaffee trinken möchte.",
          right: "Ich möchte einen Kaffee trinken.",
          whyAr:
            "الفعل الناقص يُصرَّف مرّةً واحدةً في الموضع الثاني، والمصدر وحده في الآخر. تكراره من أثر الترجمة الحرفية لـ«أودّ أن أشرب».",
        },
        {
          wrong: "Ich mag einen Kaffee.",
          right: "Ich möchte einen Kaffee.",
          whyAr:
            "mag ميلٌ دائم (أحبّ القهوة عموماً)، وmöchte طلبٌ الآن. قولها للنادل يجعله ينتظر بقيّة الجملة.",
        },
        {
          wrong: "Wir hätte gern zwei Bier.",
          right: "Wir hätten gern zwei Bier.",
          whyAr:
            "hätte تُصرَّف كسائر الأفعال: ich/er hätte · wir/sie hätten · du hättest. وكونها شرطيةً لا يُجمّدها.",
        },
      ],
      relatedRuleComparison: {
        title: "من möchten إلى Konjunktiv II الكامل (B1)",
        content:
          "ما تتعلّمه اليوم صورتان محفوظتان: möchte وhätte. وفي B1 تُفتح المنظومة كلّها وتتّضح القاعدة التي تولّدهما:\n\n| الفعل | الماضي | Konjunktiv II | المعنى |\n|---|---|---|---|\n| mögen | mochte | **möchte** | أودّ |\n| haben | hatte | **hätte** | لو كان لديّ |\n| sein | war | **wäre** | لو كنت |\n| können | konnte | **könnte** | لو أمكن |\n| werden | wurde | **würde** | لكنت |\n\nوالقاعدة: **تُؤخذ صيغة الماضي ويُضاف Umlaut** (hatte ⟵ hätte · konnte ⟵ könnte · war ⟵ wäre). فما تحفظه اليوم مفردتين تراه في B1 نظاماً مطّرداً. ولذلك سمّيناه اليوم باسمه: لتجد الباب مفتوحاً حين تصل.",
      },
    },
    {
      id: "t2",
      titleAr: "schmecken وgefallen — حين يكون الطعام هو الفاعل",
      titleDe: "Schmecken, gefallen, passen: der Dativ des Erlebenden",
      explanationAr:
        "في a1-08 التقيتَ gefallen في سياق الملابس، وفي a2-02 التقيتَ fehlen عند الطبيب. اليوم نجمع هذه الأفعال في **بابٍ واحد** ونُظهر منطقها، لأنّها ليست شواذّ متفرّقةً تُحفظ بل عائلةٌ لها منطقٌ واحد.\n\n**القاعدة الجامعة: في هذه الأفعال، الشيءُ هو الفاعل والإنسانُ مجرور.** الألمانية تنظر إلى الذوق والإعجاب والملاءمة بوصفها **أثراً يصدر عن الشيء ويقع على الإنسان**، لا فعلاً يصدر عن الإنسان. فالطعام هو الذي «يَطعُم لك»، والقميص هو الذي «يُعجِب لك».\n\n**البنية الثابتة:** الشيء (Nominativ) + الفعل + الشخص (Dativ).\n· **Das Essen schmeckt mir.** — الطعام يعجبني طعمه. (das Essen مرفوع، mir مجرور)\n· **Die Suppe schmeckt mir nicht.** — الشوربة لا تعجبني.\n· **Der Salat schmeckt uns allen.** — السلطة أعجبتنا جميعاً.\n\n**وأهمّ ما في الباب: الفعل يُصرَّف مع الشيء لا مع الشخص.**\n· مفرد ⟵ Das Essen **schmeckt** mir.\n· جمع ⟵ Die Nudeln **schmecken** mir.\nوهذا هو موضع الخطأ الأوّل: يقول المتعلّم Die Nudeln schmeckt mir لأنّه يُصرِّف مع «أنا» في ذهنه.\n\n**أعضاء العائلة في هذا الدرس:**\n· **schmecken** (يكون طعمه طيّباً لـ) — للطعام والشراب حصراً.\n· **gefallen** (يُعجِب) — للمظهر والانطباع العامّ: Das Restaurant gefällt mir.\n· **passen** (يُلائم) — للمواعيد والمقاسات: Der Tisch am Fenster passt uns gut.\n\n**والفرق بين schmecken وgefallen دقيق ويُخطئ فيه الجميع:** schmecken **للطعم في الفم**، وgefallen **للانطباع بالعين أو العقل**. فتقول عن مطعمٍ Das Restaurant gefällt mir (يعجبني مكاناً)، وعن طبقٍ Das Gericht schmeckt mir (طعمه طيّب). ولو قلت Das Essen gefällt mir لفُهم أنّك أُعجبتَ بشكله وترتيبه في الطبق لا بمذاقه — وهي جملةٌ صحيحة لكنّها تقول شيئاً آخر.\n\n**وصيغة السؤال الجاهزة التي يقولها كلّ نادلٍ في ألمانيا: Schmeckt es Ihnen?** (أطعامك طيّب؟) — والجواب: Ja, sehr gut, danke. / Ja, ausgezeichnet!\n\n**من أين جاءت هذه القاعدة؟** هذا الباب ليس شذوذاً ألمانياً بل **إرثٌ هندو-أوروبيّ قديم** يسمّيه اللغويون «داتيف المتلقّي» (Dativus des Experiencers): حين لا يكون الإنسان فاعلاً مختاراً بل **متلقّياً لأثرٍ يقع عليه**، تضعه اللغة في الداتيف لا في الرفع. والفكرة أنّ الطعم يحدث لك، ولا تصنعه أنت. وللعربية الباب نفسه حيّاً: «أعجبني الطعام» — الطعام فاعل والياء مفعول، لا «أنا أعجبتُ الطعام». فالعربيّ يملك الحدس صحيحاً، وإنّما تخونه الإنجليزية (I like) لا لغته الأمّ.",
      whyAr:
        "لأنّ هذا الباب هو **الاختبار الحقيقيّ لفهم الـDativ**، لا حفظه. المتعلّم يستطيع أن يحفظ mir/dir/ihm ويظلّ عاجزاً عن بناء Das Essen schmeckt mir، لأنّ العائق ليس في الضمير بل في **إعادة توزيع الأدوار**: من الفاعل؟ فحين يفهم أنّ الطعام فاعلٌ والإنسان متلقٍّ، ينفتح له مع schmecken بابُ gefallen وpassen وgehören وfehlen وwehtun وgutgehen — وهي سبعة أفعالٍ من أكثر ما يُستعمل يومياً.\n\nوهذه الكتلة تُوضَع هنا لا في a2-09 (درس الـDativ الكامل) لسببٍ منهجيّ: الـDativ يُتعلَّم **موزّعاً على مواقف** ثمّ يُجمَع، لا يُجمَع أوّلاً. فأنت تلتقي gefallen مع الملابس (a1-08)، وwehtun وfehlen عند الطبيب (a2-02)، وschmecken في المطعم (اليوم) — ثمّ يأتي a2-09 فيقول لك: هذه كلّها بابٌ واحد اسمه Dativ-Verben، وهذه قائمته الكاملة وضمائره في كلّ الحالات. والتعلّم الذي يسبق التسمية أرسخ من التسمية التي تسبق التعلّم.\n\nوسببٌ ثالث عمليّ: Schmeckt es Ihnen? سؤالٌ **يُطرح عليك حتماً** في أيّ مطعمٍ ألمانيّ، وصمتُك عنه أو جوابك بـIch bin gut يُفسد لحظةً اجتماعيةً بسيطة. وهذه الكتلة تُسلّحك بالجواب قبل أن يُطرح السؤال.",
      table: {
        title: "الشيء يرفع والإنسان يُجرّ",
        columns: [
          "الفعل",
          "الشيء (Nominativ)",
          "الشخص (Dativ)",
          "المعنى ومجاله",
        ],
        rows: [
          {
            label: "schmecken",
            cells: ["Das Essen", "mir", "طعمه طيّب — الفم حصراً"],
          },
          {
            label: "gefallen",
            cells: ["Das Restaurant", "mir", "يُعجب — العين والانطباع"],
          },
          {
            label: "passen",
            cells: ["Der Termin", "uns", "يُلائم — الموعد والمقاس"],
          },
          {
            label: "fehlen",
            cells: ["Der Löffel", "mir", "ينقص (a2-02: Was fehlt Ihnen?)"],
          },
          { label: "wehtun", cells: ["Der Bauch", "mir", "يؤلم (a2-02)"] },
          { label: "gehören", cells: ["Das Glas", "dir", "يخصّ، مِلك"] },
        ],
      },
      examples: [
        {
          de: "Das Essen schmeckt mir sehr gut.",
          ar: "الطعام طعمه طيّب جداً. (الطعام فاعل، أنا مجرور)",
        },
        {
          de: "Die Nudeln schmecken mir nicht.",
          ar: "المعكرونة لا يعجبني طعمها. (جمع ⟵ schmecken)",
        },
        {
          de: "Schmeckt es Ihnen? – Ja, ausgezeichnet, danke!",
          ar: "أطعامك طيّب؟ — نعم، ممتاز، شكراً!",
        },
        {
          de: "Das Restaurant gefällt mir, aber das Essen schmeckt mir nicht.",
          ar: "المطعم يعجبني لكنّ الطعام لا يعجبني طعمه. (الفرق في جملة واحدة)",
        },
        {
          de: "Passt Ihnen ein Tisch am Fenster?",
          ar: "أتناسبك طاولةٌ عند النافذة؟",
        },
        {
          de: "Wie schmeckt dir die Suppe? – Sie ist ein bisschen salzig.",
          ar: "كيف طعم الشوربة عندك؟ — مالحةٌ قليلاً.",
        },
        {
          de: "Uns hat das Schnitzel sehr gut geschmeckt.",
          ar: "أعجبنا الشنيتسل كثيراً. (Perfekt مع haben)",
        },
        {
          de: "Der Nachtisch hat allen geschmeckt.",
          ar: "الحلوى أعجبت الجميع طعماً.",
        },
      ],
      comparisonWithArabic:
        "العربية تملك هذا الباب نفسه وتُشغّله بكثرة، وهذه فرصةٌ للمتعلّم العربيّ لا عقبة:\n\n**«أعجبني الطعام»** — من الفاعل؟ **الطعام**. ومن المفعول؟ **الياء** (أنا). فالبنية العربية مطابقةٌ للألمانية تماماً: الشيء يرفع والإنسان يُنصب. ومثلها «راقني المكان»، «طاب لي الطعام»، «يؤلمني رأسي» — كلّها تجعل الشيء فاعلاً.\n\n**فالمنطق موجودٌ في لغتك، والمطلوب نقله لا بناؤه.** الفرق الوحيد: العربية تنصب الإنسان («أعجبَ**ني**») والألمانية تجرّه (**mir**). فبدّل النصب بالجرّ وستكون الجملة صحيحة.\n\nلكنّ ثلاثة مزالق تبقى:\n\n**١. الإنجليزية تُفسد القياس.** المتعلّم الذي يمرّ بالإنجليزية يقول I like the food فيجعل الإنسان فاعلاً، ثمّ يترجم Ich schmecke das Essen — وهي جملةٌ خاطئة تماماً (وتعني حرفياً «أنا أتذوّق الطعام» بمعنى الفحص المهنيّ). فحين تشكّ، ارجع إلى العربية لا إلى الإنجليزية: «أعجبني» أقرب إلى الألمانية من I like.\n\n**٢. تصريف الفعل مع الشيء.** العربية تقول «أعجبتني الأطباق» فتؤنّث الفعل وتُجمعه مع الأطباق — وهذا بالضبط ما تفعله الألمانية: Die Gerichte schmecken mir. فالقياس سليم، لكنّ المتعلّم يهمله لأنّه يفكّر بالإنجليزية عند التصريف.\n\n**٣. schmecken ليست «يحبّ».** العربية تقول «أحبّ الشوربة» وتقصد الميل الدائم، وتقول «طابت لي الشوربة» وتقصد هذه المرّة. الألمانية تفصل: Ich mag Suppe (ميل) · Die Suppe schmeckt mir (هذه الآن).",
      eselsbruecke:
        "«الطعامُ هو الذي يفعل، وأنا الذي يتلقّى»: Das Essen schmeckt **mir** — لا أنا أشمكّ الطعام. وقس عليها كلّ ما أعجبك أو لاءمك أو نقصك أو آلمك.",
      commonMistakes: [
        {
          wrong: "Ich schmecke das Essen.",
          right: "Das Essen schmeckt mir.",
          whyAr:
            "أثر الإنجليزية I like. الجملة الخاطئة تعني «أفحص الطعام بلساني» — وهي ما يقوله طاهٍ محترف. ارجع إلى العربية: «أعجبني الطعام»، فالطعام فاعل.",
        },
        {
          wrong: "Die Nudeln schmeckt mir.",
          right: "Die Nudeln schmecken mir.",
          whyAr:
            "الفعل يُصرَّف مع الشيء لا مع الشخص. Die Nudeln جمع ⟵ schmecken. والعربية تفعل مثله: «أعجبتني الأطباق».",
        },
        {
          wrong: "Das Essen schmeckt mich.",
          right: "Das Essen schmeckt mir.",
          whyAr:
            "هذه الأفعال تجرّ متلقّيها ولا تنصبه. العربية تنصب («أعجبني») فيقيس المتعلّم mich — والألمانية تجرّ: mir.",
        },
        {
          wrong: "Das Essen gefällt mir sehr gut. (وأنت تقصد المذاق)",
          right: "Das Essen schmeckt mir sehr gut.",
          whyAr:
            "gefallen للعين والانطباع، وschmecken للفم. الجملة الأولى صحيحة نحواً لكنّها تمدح شكل الطبق لا مذاقه.",
        },
        {
          wrong: "Schmeckt es Sie?",
          right: "Schmeckt es Ihnen?",
          whyAr:
            "صيغة الاحترام في الجرّ هي Ihnen لا Sie — وهي القاعدة نفسها في Wie geht es Ihnen? وWas fehlt Ihnen?",
        },
      ],
      relatedRuleComparison: {
        title: "أين هذا من a1-08 وa2-02 وa2-09؟",
        content:
          "هذه العائلة تُبنى عندك على أربع دفعات، وكلّ دفعةٍ في موقعها الطبيعيّ:\n\n| الدرس | الفعل | الموقف |\n|---|---|---|\n| a1-08 | gefallen | الملابس: Der Pullover gefällt mir |\n| a2-02 | fehlen · wehtun | الطبيب: Was fehlt Ihnen? · Der Kopf tut mir weh |\n| **a2-03 (هنا)** | **schmecken · passen** | **المطعم: Das Essen schmeckt mir** |\n| a2-09 | القائمة الكاملة | helfen · gehören · gratulieren + كلّ ضمائر الجرّ |\n\nفما تراه اليوم ليس قاعدةً جديدةً بل **الطبقة الثالثة** من بناءٍ واحد. وفي a2-09 تُجمع الطبقات ويُسمّى البناء: Dativ-Verben.",
      },
    },
    {
      id: "t3",
      titleAr: "مسار الزيارة — من الحجز إلى «zusammen oder getrennt?»",
      titleDe: "Vom Reservieren bis zur Rechnung: der Ablauf",
      explanationAr:
        "المطعم الألمانيّ يجري وفق **مسارٍ ثابت**، ومن عرف محطّاته عرف ماذا يُقال في كلٍّ منها فلم يُفاجأ. وأهمّ ما في هذه الكتلة أنّ ثلاثاً من محطّاتها **تخالف العادة العربية مخالفةً تامّة** — وهي مواضع الإحراج الحقيقيّ لا مواضع الخطأ النحويّ.\n\n**١. الدخول والجلوس.** لا تجلس حيث شئت. تنتظر عند اللافتة Bitte warten Sie, Sie werden platziert، أو تسأل: **Haben Sie einen Tisch für zwei Personen?** وإن كنت قد حجزت: **Ich habe einen Tisch auf den Namen Ben Ali reserviert.**\n\n**٢. الطلب على مرحلتين.** يأتي النادل أوّلاً للمشروبات وحدها: **Was möchten Sie trinken?** ثمّ يعود للطعام. ومن طلب الطعام في الجولة الأولى استعجل النادل، ومن انتظر النادل ليأتي بالماء مجّاناً انتظر طويلاً — **الماء في ألمانيا يُطلب ويُدفع**، وتسأل: Stilles Wasser oder mit Kohlensäure? (بلا غاز أم فوّار؟)\n\n**٣. بنية القائمة:** die Vorspeise (مقبّلات) ⟵ das Hauptgericht (الطبق الرئيس) ⟵ die Beilage (طبق جانبي: Pommes, Reis, Salat) ⟵ der Nachtisch / die Nachspeise (الحلوى). وتُطلب هكذا: **Als Vorspeise hätte ich gern die Suppe, als Hauptgericht das Schnitzel.**\n\n**٤. أثناء الأكل — سؤالان ثابتان.** قبله يقول النادل أو من معك: **Guten Appetit!** (بالهناء) وتردّ: Danke, gleichfalls! (شكراً، وأنت كذلك). وأثناءه يسأل: **Schmeckt es Ihnen?** أو **Ist alles in Ordnung?**\n\n**٥. طلب الحساب — والمحطّة التي تُربك العرب.** تقول: **Die Rechnung, bitte** أو **Zahlen, bitte** أو الأرقى: **Könnten wir bitte zahlen?** فيسأل النادل سؤالاً لا مقابل له في ثقافتنا: **Zusammen oder getrennt?** (معاً أم كلٌّ على حدة؟) — والدفع المنفصل في ألمانيا هو **العُرف الطبيعيّ** لا شحّاً ولا قطيعةً، والنادل مستعدٌّ لحساب كلّ شخصٍ وحده. فالجواب: Zusammen, bitte. أو Getrennt, bitte.\n\n**٦. البقشيش (das Trinkgeld).** لا يُترك على الطاولة كما في أمريكا، بل **يُقال شفهياً عند الدفع**: إن كان الحساب 18,50 € وأردت أن تعطي عشرين، تقول **«Zwanzig, bitte»** أو **«Stimmt so»** إن أردت له الباقي كلّه. والمعتاد ٥–١٠٪. وأن تصمت وتنتظر الباقي كاملاً ليس خطأً، لكنّ الكلمة تُقال عادةً.\n\n**٧. الشكوى — إن لزمت.** بالبنية الثلاثية نفسها التي تعلّمتها في a2-01: **Entschuldigung, das habe ich nicht bestellt.** · **Die Suppe ist leider kalt.** · **Könnten Sie das bitte noch einmal prüfen?**",
      whyAr:
        "لأنّ الفشل في المطعم نادراً ما يكون نحوياً. المتعلّم الذي يعرف كلّ قواعد A2 قد يجلس في مكانٍ محجوز، ويطلب الطعام قبل الشراب، ويصمت أمام zusammen oder getrennt، ويترك النقود على الطاولة فيلحق به النادل ظانّاً أنّه نسيها. وكلّ هذا **معرفةٌ إجرائية** لا تُستنبط من القواعد ولا تُوجد في قوائم المفردات.\n\nومعايير CEFR في A2 تنصّ على التعامل مع «التبادلات القصيرة الروتينية في المتاجر والمطاعم»، والكلمة المفتاح **روتينية**: أي أنّ المطلوب ليس ارتجالاً لغوياً بل **إتقان سيناريو معروف**. ومن حفظ المسار حرّر ذهنه للّغة نفسها.\n\nوسؤال zusammen oder getrennt يستحقّ وقفة: في الثقافة العربية دعوةٌ للطعام يدفعها واحد، والإصرار على القسمة قد يُفهم جفاءً. وفي ألمانيا الدفع المنفصل هو الافتراض، ومن دفع عن الجميع بلا اتّفاقٍ مسبق قد يُحرج جلساءه لا يُكرمهم. فالمسألة ليست في ترجمة الجملة بل في **توقّع السؤال أصلاً** — والمتعلّم الذي لم يسمع به يتجمّد لأنّه لا يفهم لماذا يُسأل.\n\nوأخيراً: هذه الكتلة تُدرّب **الفهم السماعيّ الموجّه**. أنت لا تحتاج أن تنتج هذه الجمل كلّها، لكنّك تحتاج أن **تتعرّفها فوراً** حين تُقال بسرعة — وهذا ما يقيسه Hören Teil 1 في امتحان A2.",
      table: {
        title: "محطّات الزيارة — ماذا يُقال ومتى",
        columns: ["المحطّة", "يقول النادل", "تقول أنت"],
        rows: [
          {
            label: "الدخول",
            cells: [
              "Haben Sie reserviert?",
              "Ja, auf den Namen Ben Ali. / Nein, haben Sie einen Tisch frei?",
            ],
          },
          {
            label: "المشروبات",
            cells: ["Was möchten Sie trinken?", "Ein stilles Wasser, bitte."],
          },
          {
            label: "الطعام",
            cells: [
              "Und was möchten Sie essen?",
              "Als Hauptgericht hätte ich gern das Schnitzel.",
            ],
          },
          {
            label: "أثناء الأكل",
            cells: ["Schmeckt es Ihnen?", "Ja, sehr gut, danke!"],
          },
          {
            label: "الحساب",
            cells: ["Zusammen oder getrennt?", "Getrennt, bitte."],
          },
          {
            label: "الدفع",
            cells: ["Das macht 18,50 €.", "Zwanzig, bitte. / Stimmt so."],
          },
        ],
      },
      examples: [
        {
          de: "Haben Sie einen Tisch für zwei Personen?",
          ar: "أعندكم طاولةٌ لشخصين؟",
        },
        {
          de: "Ich habe einen Tisch auf den Namen Ben Ali reserviert.",
          ar: "حجزتُ طاولةً باسم بن علي.",
        },
        {
          de: "Stilles Wasser oder mit Kohlensäure?",
          ar: "ماءٌ بلا غاز أم فوّار؟ (سؤالٌ يُطرح حتماً)",
        },
        {
          de: "Als Vorspeise hätte ich gern die Suppe.",
          ar: "كمقبّلات أودّ الشوربة.",
        },
        {
          de: "Guten Appetit! – Danke, gleichfalls!",
          ar: "بالهناء! — شكراً، وأنت كذلك!",
        },
        {
          de: "Zusammen oder getrennt? – Getrennt, bitte.",
          ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة من فضلك.",
        },
        {
          de: "Das macht 18,50 €. – Zwanzig, bitte.",
          ar: "الحساب ١٨٫٥٠. — عشرون من فضلك. (بقشيش ١٫٥٠)",
        },
        {
          de: "Entschuldigung, das habe ich nicht bestellt.",
          ar: "عذراً، هذا ليس ما طلبتُه.",
        },
      ],
      comparisonWithArabic:
        "الفروق هنا **ثقافيّةٌ في لبوسٍ لغويّ**، وهي أخطر من الفروق النحوية لأنّها لا تُصحَّح بالقواعد:\n\n**١. الجلوس.** في المقهى العربيّ تدخل وتجلس. وفي المطعم الألمانيّ (لا المقهى البسيط) تنتظر أن يُجلسك النادل. والجملة المكتوبة على اللافتة Sie werden platziert مبنيّةٌ للمجهول («ستُجلَسون») — وهي أوّل Passiv يراه كثيرٌ من المتعلّمين في الحياة قبل الكتاب.\n\n**٢. الماء.** في تونس ومصر يوضع الماء على الطاولة مجّاناً. وفي ألمانيا **لا ماء إلّا بطلبٍ وثمن**، ومن انتظر أن يأتي وحده انتظر إلى آخر الوجبة. وLeitungswasser (ماء الحنفية) يُطلب أحياناً مجّاناً لكنّ كثيراً من المطاعم يرفضه أو يتحرّج منه.\n\n**٣. الدفع المنفصل.** هذا أكبر فرق. «getrennt» ليست شحّاً بل عُرفاً، والنادل يحسب لكلّ واحدٍ ما أكل بلا ضجر. أمّا في ثقافتنا فالمكارمة على الحساب جزءٌ من الضيافة، والسؤال نفسه قد يبدو غريباً.\n\n**٤. البقشيش يُقال ولا يُترك.** العربيّ يترك النقود على الطاولة وينصرف؛ والألمانيّ يقول المبلغ **قبل** أن يأخذ النادل النقود. ومن ترك المال وانصرف قد يلحق به النادل ظانّاً أنّه نسي — موقفٌ محرج سببه صمتٌ لا خطأ.\n\n**٥. Guten Appetit وردّها.** العربية تقول «بالهناء والشفاء» ويُردّ عليها بالدعاء. والألمانية تردّ بكلمةٍ واحدة: **gleichfalls** (وأنت كذلك) — ومن سكت بدا غافلاً، ومن أطال بدا غريباً.",
      eselsbruecke:
        "رتّب المسار في ستّ كلمات: **reservieren ⟵ trinken ⟵ essen ⟵ schmecken ⟵ zahlen ⟵ getrennt**. ومن حفظ هذا الخيط لم يُفاجئه سؤال.",
      commonMistakes: [
        {
          wrong: "(تدخل وتجلس في أيّ طاولة)",
          right: "Haben Sie einen Tisch für zwei Personen?",
          whyAr:
            "في المطعم الألمانيّ يُجلسك النادل. والجلوس في طاولةٍ محجوزة (Reserviert) موقفٌ محرج يتكرّر كثيراً مع الوافدين.",
        },
        {
          wrong: "Die Rechnung, bitte. Zusammen. (وأنتم خمسة لم تتّفقوا)",
          right: "Getrennt, bitte.",
          whyAr:
            "الدفع المنفصل هو العُرف لا الاستثناء. والدفع عن الجميع بلا اتّفاقٍ مسبق قد يُحرج الجلساء بدل أن يُكرمهم.",
        },
        {
          wrong: "Ich möchte Wasser. (وتنتظره مجّاناً)",
          right: "Ein stilles Wasser, bitte.",
          whyAr:
            "الماء يُطلب ويُدفع، ويُسأل عن نوعه: stilles (بلا غاز) أو mit Kohlensäure (فوّار). ومن قال Wasser فقط سُئل ثانيةً.",
        },
        {
          wrong: "Guten Appetit! – Danke.",
          right: "Guten Appetit! – Danke, gleichfalls!",
          whyAr:
            "gleichfalls («وأنت كذلك») جزءٌ ثابت من الردّ. حذفها ليس خطأً نحوياً لكنّه يُسمع ناقصاً.",
        },
        {
          wrong: "(تضع البقشيش على الطاولة وتنصرف)",
          right: "Zwanzig, bitte. / Stimmt so.",
          whyAr:
            "البقشيش يُقال شفهياً عند الدفع لا يُترك بعده. الصمت قد يجعل النادل يظنّك نسيت نقودك فيلحق بك.",
        },
      ],
      relatedRuleComparison: {
        title: "المسار نفسه في مواقف أخرى",
        content:
          "بنية «المسار الثابت» تتكرّر في كلّ موقفٍ خدميّ، وقد رأيتَها مرّتين:\n\n| الموقف | الدرس | المحطّات |\n|---|---|---|\n| العيادة | a2-02 | موعد ⟵ بطاقة تأمين ⟵ Was fehlt Ihnen? ⟵ وصفة |\n| الفندق والسفر | a2-01 | حجز ⟵ einchecken ⟵ شكوى ⟵ auschecken |\n| **المطعم** | **a2-03** | **حجز ⟵ شراب ⟵ طعام ⟵ حساب** |\n\nوالقاسم المشترك **الشكوى بثلاث خطوات**: المشكلة ⟵ أثرها ⟵ الطلب، مع leider وkönnten. تعلّمتَها في a2-01 مع الفندق، وتستعملها اليوم مع طبقٍ بارد، وستستعملها في a2-11 مع خدمةٍ رديئة. قالبٌ واحد يُعاد تعبئته.",
      },
    },
    {
      id: "t4",
      titleAr: "وصف الطعم — الصفات والمقادير وetwas Warmes",
      titleDe: "Wie schmeckt es? Adjektive und Mengen beim Essen",
      explanationAr:
        "يبقى أن تقول **كيف** كان الطعام، لا أن تكتفي بـgut وschlecht. وهذه الكتلة ثلاثة أقسام: صفات الطعم، والمقادير، وقالبٌ نحويّ صغير يُفتح هنا لأوّل مرّة.\n\n**أوّلاً — صفات الطعم، وكلّها تُستعمل بعد sein أو schmecken بلا نهاياتٍ إعرابية** (فهي مسندة لا موصوفة، كما تعلّمت في a1-08):\n· **lecker** (لذيذ) · **frisch** (طازج) · **süß** (حلو) · **salzig** (مالح) · **sauer** (حامض) · **scharf** (حارّ بالتوابل) · **bitter** (مُرّ) · **fett** (دسم) · **trocken** (جافّ)\n⟵ Die Suppe ist **salzig**. · Das Fleisch schmeckt **trocken**.\n\n**وانتبه إلى فخّين معجميّين:**\n· **scharf** = حارٌّ بالفلفل والتوابل، أمّا الحارّ حرارةً فهو **heiß**. فمن قال Die Suppe ist scharf وهو يعني سخونتها قال شيئاً آخر.\n· **warm** = دافئ ومقبول، **heiß** = ساخنٌ جداً وقد يحرق، **kalt** = بارد. وفي وصف الأطباق: warme Gerichte (أطباق ساخنة) مقابل kalte Platte (طبق بارد).\n\n**ثانياً — التدرّج (die Abstufung):** لا تقل gut وحدها بل درّج:\n**sehr gut > gut > ganz gut > geht so > nicht so gut > gar nicht gut**\nوأدوات التلطيف الصغيرة تعمل هنا عملاً كبيراً: **ein bisschen** (قليلاً) و**etwas** (بعض الشيء) و**zu** (أكثر من اللازم):\n⟵ Die Suppe ist **ein bisschen** salzig. (شكوى لطيفة) مقابل Die Suppe ist **zu** salzig. (شكوى صريحة)\nوالفرق بينهما هو الفرق بين ملاحظةٍ ودعوةٍ لتغيير الطبق. وكلمة **zu** هنا لا تعني «إلى» بل «أكثر من اللازم» — ومعناها هذا هو الأكثر وروداً في الكلام اليوميّ.\n\n**ثالثاً — المقادير في المطعم.** تعلّمتَ في a1-07 قاعدة «عدد + وحدة + سلعة» بلا حرف جرّ: zwei Kilo Äpfel. وتعمل هنا نفسها:\n· **ein Glas Wasser · eine Tasse Kaffee · eine Flasche Wein · ein Stück Kuchen · eine Portion Pommes**\n· والوحدات المذكّرة والمحايدة تبقى مفردةً بعد العدد: **zwei Glas Wasser · drei Stück Kuchen**، أمّا المؤنّثة فتُجمع: **zwei Tassen Kaffee · drei Flaschen Wasser**.\n· وشذوذٌ يوميّ يستحقّ الحفظ: **zwei Bier · drei Kaffee** — تُقال بلا جمعٍ في المطعم اختصاراً (والأصل zwei Gläser Bier).\n\n**رابعاً — القالب الجديد: etwas + صفةٌ مكبّرة.** حين تريد شيئاً بصفةٍ لا باسم:\n· **etwas Warmes** (شيئاً دافئاً) · **etwas Kaltes** · **etwas Süßes** · **nichts Scharfes** (لا شيء حارّ)\nوالقاعدة: بعد etwas وnichts **تُكتب الصفة بحرفٍ كبير وتأخذ -es**. لأنّها صارت اسماً. ⟵ Ich möchte **etwas Warmes** essen. · Ich esse **nichts Scharfes**.",
      whyAr:
        "لأنّ الفرق بين متعلّمٍ في A1 ومتعلّمٍ في A2 يظهر هنا بالضبط: كلاهما يستطيع الطلب، لكنّ الثاني يستطيع **التقييم**. ووصفُ A2 في CEFR ينصّ على «وصف أشياء مألوفة بعباراتٍ بسيطة وإبداء رأي» — والطعام هو أكثر موضوعٍ يُطلب فيه الرأي في الحياة اليومية وفي الامتحان معاً.\n\nوأمّا التدرّج (ein bisschen مقابل zu) فله وزنٌ اجتماعيّ يتجاوز المفردات: هو الفرق بين ملاحظةٍ مهذّبة وشكوى. والمتعلّم الذي لا يملك إلّا الطرفين — gut أو schlecht — يُجبَر على أن يكون إمّا مجاملاً كاذباً أو فظّاً، ولا يملك المنطقة الوسطى التي يعيش فيها الكلام الحقيقيّ. فأدوات التلطيف ليست زينةً بل **آلة ضبط النبرة**.\n\nوقالب etwas Warmes يُفتح هنا عمداً وهو صغير: فهو أوّل موضعٍ ترى فيه **صفةً تتحوّل إلى اسم** (die Substantivierung) — وهي ظاهرةٌ ألمانية واسعة ستعود في B1 (der Deutsche, das Wichtigste, die Erwachsenen). ونحن نأخذ منها اليوم صورةً واحدةً مغلقة (etwas/nichts + صفة + -es) تُحفظ كقالبٍ جاهز، ونؤجّل النظام كلّه — لأنّ فتح باب التصريف الوصفيّ الآن يُربك، وإغفال القالب يحرمك جملةً تُقال يومياً.\n\n**وهذه الكتلة بابٌ نصفيّ بوعي:** نهايات الصفة الموصوفة (ein **guter** Wein · die **frische** Suppe) لا تُدرَّس هنا. موطنها b1-06 وb1-10. فما تراه اليوم صفاتٌ مسندة (بعد sein/schmecken) وقالبٌ واحدٌ مغلق — لا أكثر، وذلك مقصود.",
      table: {
        title: "وصف الطعم — من المدح إلى الشكوى",
        columns: ["الدرجة", "العبارة", "المعنى والاستعمال"],
        rows: [
          {
            label: "ممتاز",
            cells: ["Das schmeckt ausgezeichnet!", "مدحٌ صريح — يُفرح الطاهي"],
          },
          {
            label: "جيّد",
            cells: [
              "Sehr lecker, danke.",
              "الردّ المعتاد على Schmeckt es Ihnen?",
            ],
          },
          { label: "مقبول", cells: ["Es geht so.", "فاترة — تُفهم تحفّظاً"] },
          {
            label: "ملاحظة لطيفة",
            cells: [
              "Die Suppe ist ein bisschen salzig.",
              "لا تستدعي تغيير الطبق",
            ],
          },
          {
            label: "شكوى صريحة",
            cells: ["Die Suppe ist zu salzig.", "تستدعي اعتذاراً أو استبدالاً"],
          },
          {
            label: "طلبٌ بصفة",
            cells: ["Ich möchte etwas Warmes.", "etwas + صفة كبيرة + -es"],
          },
        ],
      },
      examples: [
        {
          de: "Das Schnitzel ist wirklich lecker!",
          ar: "الشنيتسل لذيذٌ حقاً! (صفة مسندة بلا نهاية)",
        },
        {
          de: "Die Suppe ist ein bisschen salzig.",
          ar: "الشوربة مالحةٌ قليلاً. (ملاحظة لطيفة)",
        },
        {
          de: "Das Fleisch ist leider zu trocken.",
          ar: "اللحم جافٌّ أكثر من اللازم للأسف. (شكوى)",
        },
        {
          de: "Vorsicht, das Essen ist sehr heiß!",
          ar: "احذر، الطعام ساخنٌ جداً! (heiß حرارة لا توابل)",
        },
        {
          de: "Ich esse nichts Scharfes.",
          ar: "لا آكل شيئاً حارّاً. (nichts + صفة كبيرة + -es)",
        },
        {
          de: "Ich möchte etwas Warmes essen.",
          ar: "أودّ أن آكل شيئاً دافئاً.",
        },
        {
          de: "Zwei Bier und eine Tasse Kaffee, bitte.",
          ar: "بيرتان وفنجان قهوة من فضلك. (Bier بلا جمع، Tasse مؤنّثة تُجمع)",
        },
        {
          de: "Eine Portion Pommes als Beilage, bitte.",
          ar: "حصّة بطاطا كطبقٍ جانبيّ من فضلك.",
        },
      ],
      comparisonWithArabic:
        "**١. «حارّ» كلمةٌ واحدة في العربية ومعنيان في الألمانية.** نقول «الشوربة حارّة» فنعني السخونة، ونقول «الأكل حارّ» فنعني الفلفل، ويفصل السياق. والألمانية تفصل بالمفردة: **heiß** للحرارة و**scharf** للتوابل. وهذا من أكثر ما يخطئ فيه العرب والأتراك والهنود معاً، والخطأ مضحكٌ لا مُشكل: من قال Der Tee ist scharf وصف شاياً بالفلفل.\n\n**٢. التدرّج في العربية يقع على الصفة، وفي الألمانية على أداةٍ قبلها.** نقول «مالحة شوية» و«مالحة زيادة» فنضيف كلمةً بعد الصفة؛ والألمانية تضع الأداة **قبلها**: ein bisschen salzig · zu salzig. والترتيب مهمّ لأنّ ما بعد الصفة في الألمانية موضعٌ آخر.\n\n**٣. zu لا تعني «إلى» هنا.** المتعلّم يعرف zu حرف جرٍّ (ich gehe zum Arzt) ثمّ يراها قبل صفةٍ فيرتبك. وهي هنا **ظرفٌ بمعنى «أكثر من اللازم»**، ولا علاقة لها بالجرّ. وقريبٌ منها في العربية «زيادة عن اللزوم».\n\n**٤. etwas Warmes لا مقابل بنيويّ لها.** العربية تقول «شيئاً دافئاً» فتصف الاسم بصفة؛ والألمانية **تحذف الاسم وتُصعّد الصفة مكانه** فتكتبها بحرفٍ كبير: etwas Warmes حرفياً «بعضُ الدافئ». وأقرب ما يشبهها عربياً «شيءٌ من الدافئ» أو استعمال «الحلو» اسماً في «أحبّ الحلو». فالمنطق موجودٌ عندنا لكنّه ليس قاعدةً مطّردة كما في الألمانية.\n\n**٥. المقادير بلا «مِن».** العربية تقول «كوبٌ **من** الماء» و«فنجانٌ **من** القهوة»، والألمانية تحذف الحرف: **ein Glas Wasser** لا ein Glas von Wasser. وهذا الخطأ من أعند ما يقع فيه المتعلّم العربيّ لأنّ «من» عنده لازمةٌ في البنية.",
      eselsbruecke:
        "**scharf بالفلفل وheiß بالنار.** وللتدرّج: **ein bisschen** يُبقي الطبق و**zu** يُرجعه. وبعد etwas وnichts: **حرفٌ كبير و-es**.",
      commonMistakes: [
        {
          wrong: "Die Suppe ist scharf. (وأنت تعني أنّها ساخنة)",
          right: "Die Suppe ist heiß.",
          whyAr:
            "scharf للتوابل وheiß للحرارة. العربية تجمعهما في «حارّ» فينتقل اللبس، والنتيجة وصفُ شايٍ بالفلفل.",
        },
        {
          wrong: "Ich möchte etwas warm.",
          right: "Ich möchte etwas Warmes.",
          whyAr:
            "بعد etwas/nichts تصير الصفة اسماً: حرفٌ كبير ونهاية -es. قالبٌ مغلق يُحفظ كما هو.",
        },
        {
          wrong: "Ein Glas von Wasser, bitte.",
          right: "Ein Glas Wasser, bitte.",
          whyAr:
            "المقدار يلتصق بالسلعة بلا حرف جرّ (a1-07). و«من» العربية لا تُترجَم هنا البتّة.",
        },
        {
          wrong: "Zwei Tasse Kaffee, bitte.",
          right: "Zwei Tassen Kaffee, bitte.",
          whyAr:
            "الوحدات المؤنّثة تُجمع (Tassen, Flaschen)، والمذكّرة والمحايدة تبقى مفردة (zwei Glas, drei Stück, zwei Bier).",
        },
        {
          wrong: "Die Suppe ist sehr salzig. (وأنت تشكو وتريد استبدالها)",
          right: "Die Suppe ist zu salzig.",
          whyAr:
            "sehr تُقوّي الوصف وzu تُعلن تجاوز الحدّ. وحدها zu تُفهم شكوى تستدعي تصرّفاً.",
        },
      ],
      relatedRuleComparison: {
        title: "الصفات: ما تعرفه اليوم وما يأتي في B1",
        content:
          "الصفة الألمانية لها وضعان، وأنت تملك الأوّل كاملاً:\n\n| الوضع | المثال | النهاية | أين |\n|---|---|---|---|\n| **مسندة** (بعد sein/werden/schmecken) | Die Suppe ist **salzig** | ✗ بلا نهاية | a1-08 واليوم |\n| **موصوفة** (قبل الاسم) | die **salzige** Suppe | ✔ نهاية متغيّرة | b1-06 · b1-10 |\n| **مُصعَّدة** (بعد etwas/nichts) | etwas **Warmes** | ‑es وحرفٌ كبير | اليوم — قالبٌ مغلق |\n\nفما دامت الصفة بعد الفعل فأنت في أمان. وحين تسبق الاسم يبدأ نظام النهايات — وهو بابٌ كامل مؤجّل إلى B1 عن قصد، لأنّه يحتاج الحالات الأربع مُتقنةً أوّلاً.",
      },
    },
  ],

  reading: {
    id: "read-a2-03",
    titleDe: "Ein Abend im Gasthaus Löwen",
    titleAr: "أمسيةٌ في نُزُل الأسد",
    textType: "erzaehlung",
    paragraphs: [
      "Letzten Samstag wollten wir endlich mal wieder essen gehen. Meine Frau hatte am Mittwoch angerufen und einen Tisch für vier Personen auf den Namen Haddad reserviert. Das war eine gute Idee, denn das Gasthaus Löwen war am Abend komplett voll.",
      "Wir sind um sieben angekommen. Am Eingang stand ein Schild: „Bitte warten Sie, Sie werden platziert.“ Früher hätte ich mich einfach hingesetzt, aber inzwischen weiß ich, wie es hier läuft. Nach zwei Minuten kam der Kellner und hat uns an einen schönen Tisch am Fenster geführt.",
      "Zuerst kamen nur die Getränke. „Was möchten Sie trinken?“ – „Zweimal stilles Wasser und zwei Apfelschorle, bitte.“ Erst danach hat er die Speisekarte gebracht und nach dem Essen gefragt. Als Vorspeise hätten wir gern die Kürbissuppe, als Hauptgericht zweimal das Schnitzel mit Pommes und zweimal den Fisch.",
      "Das Essen hat fast allen sehr gut geschmeckt. Nur mein Bruder war nicht ganz zufrieden: Sein Fisch war leider etwas trocken. Er hat den Kellner gerufen und höflich gesagt: „Entschuldigung, der Fisch ist leider ziemlich trocken. Könnten Sie das bitte in der Küche sagen?“ Der Kellner hat sich entschuldigt und ihm einen neuen Teller gebracht.",
      "Nach dem Hauptgericht wollte niemand mehr etwas Süßes. Wir waren alle satt. „Hat es Ihnen geschmeckt?“, fragte der Kellner. „Ja, ausgezeichnet, danke!“",
      "Dann kam die Frage, die ich am Anfang nie verstanden habe: „Zusammen oder getrennt?“ Wir haben getrennt gezahlt – das ist hier ganz normal. Mein Anteil waren 21,40 Euro. Ich habe gesagt: „Dreiundzwanzig, bitte.“ Der Kellner hat sich bedankt, und wir sind zufrieden nach Hause gegangen.",
    ],
    paragraphsAr: [
      "السبت الماضي أردنا أخيراً أن نخرج للعشاء من جديد. كانت زوجتي قد اتّصلت يوم الأربعاء وحجزت طاولةً لأربعة أشخاص باسم حدّاد. وكانت فكرةً صائبة، فقد كان نُزُل الأسد ممتلئاً تماماً في المساء.",
      "وصلنا في السابعة. عند المدخل كانت لافتة: «انتظروا من فضلكم، سيُجلسكم أحدُنا». في السابق كنتُ سأجلس ببساطة، لكنّي صرتُ أعرف الآن كيف تجري الأمور هنا. وبعد دقيقتين جاء النادل وقادنا إلى طاولةٍ جميلة عند النافذة.",
      "أوّلاً جاءت المشروبات وحدها. «ماذا تحبّون أن تشربوا؟» — «ماءان بلا غاز وعصيرا تفّاحٍ بالمياه الغازية من فضلك». وبعد ذلك فقط أحضر قائمة الطعام وسأل عن الأكل. كمقبّلاتٍ أردنا شوربة القرع، وكطبقٍ رئيس شنيتسلين مع البطاطا وسمكتين.",
      "أعجب الطعام الجميع تقريباً. غير أنّ أخي لم يكن راضياً تماماً: كانت سمكته للأسف جافّةً بعض الشيء. نادى النادل وقال بأدب: «عذراً، السمك جافٌّ إلى حدٍّ ما للأسف. أيمكنك أن تُبلغ المطبخ من فضلك؟» فاعتذر النادل وأحضر له طبقاً جديداً.",
      "وبعد الطبق الرئيس لم يُرد أحدٌ شيئاً حلواً. كنّا كلّنا شباعاً. «هل أعجبكم الطعام؟» سأل النادل. «نعم، ممتاز، شكراً!»",
      "ثمّ جاء السؤال الذي لم أكن أفهمه في البداية أبداً: «معاً أم كلٌّ على حدة؟» دفعنا كلٌّ على حدة — وهذا أمرٌ عاديّ تماماً هنا. كان نصيبي ٢١٫٤٠ يورو. فقلت: «ثلاثة وعشرون من فضلك». شكرني النادل، وعدنا إلى البيت راضين.",
    ],
    glossary: [
      {
        de: "das Gasthaus",
        ar: "النُّزُل، مطعمٌ تقليديّ",
      },
      {
        de: "reserviert (reservieren)",
        ar: "حجز",
        noteAr: "auf den Namen … = باسم …",
      },
      {
        de: "platziert (platzieren)",
        ar: "يُجلس، يُنزل في مكان",
        noteAr: "Sie werden platziert مبنيّ للمجهول",
      },
      {
        de: "geführt (führen)",
        ar: "قاد، أوصل",
      },
      {
        de: "stilles Wasser",
        ar: "ماءٌ بلا غاز",
        noteAr: "مقابله: mit Kohlensäure",
      },
      {
        de: "die Speisekarte",
        ar: "قائمة الطعام",
      },
      {
        de: "die Vorspeise",
        ar: "المقبّلات",
        noteAr: "ثمّ Hauptgericht ثمّ Nachtisch",
      },
      {
        de: "das Hauptgericht",
        ar: "الطبق الرئيس",
      },
      {
        de: "geschmeckt (schmecken)",
        ar: "كان طعمه طيّباً لـ",
        noteAr: "الطعام فاعل والشخص مجرور",
      },
      {
        de: "trocken",
        ar: "جافّ",
      },
      {
        de: "sich entschuldigen",
        ar: "يعتذر",
        noteAr: "hat sich entschuldigt",
      },
      {
        de: "satt",
        ar: "شبعان",
        noteAr: "Ich bin satt — لا Ich habe satt",
      },
      {
        de: "getrennt",
        ar: "منفصلاً، كلٌّ على حدة",
        noteAr: "مقابله: zusammen",
      },
      {
        de: "der Anteil",
        ar: "النصيب، الحصّة",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Warum war die Reservierung eine gute Idee?",
        instructionAr: "اقرأ الفقرة الأولى: لماذا كان الحجز فكرةً صائبة؟",
        options: [
          "Weil das Gasthaus am Abend voll war",
          "Weil das Essen billiger war",
          "Weil sie am Fenster sitzen wollten",
          "Weil der Kellner sie kannte",
        ],
        correctIndex: 0,
        explanation: "«denn das Gasthaus Löwen war am Abend komplett voll».",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Was bedeutet das Schild „Sie werden platziert“?",
        instructionAr: "اقرأ الفقرة الثانية: ماذا تعني اللافتة؟",
        options: [
          "Der Kellner zeigt Ihnen den Tisch",
          "Sie dürfen sich einen Tisch aussuchen",
          "Das Restaurant ist geschlossen",
          "Sie müssen vorher zahlen",
        ],
        correctIndex: 0,
        explanation:
          "عرفٌ ألمانيّ: يُجلسك النادل ولا تختار طاولتك — ولذلك «Nach zwei Minuten kam der Kellner».",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Was hat der Kellner zuerst gebracht?",
        instructionAr: "اقرأ الفقرة الثالثة: ما الذي أُحضر أوّلاً؟",
        options: [
          "Nur die Getränke",
          "Die Speisekarte",
          "Die Vorspeise",
          "Die Rechnung",
        ],
        correctIndex: 0,
        explanation:
          "«Zuerst kamen nur die Getränke» — الطلب في المطعم الألمانيّ يجري على مرحلتين.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Wie hat sich der Bruder beschwert?",
        instructionAr: "اقرأ الفقرة الرابعة: كيف اشتكى الأخ؟",
        options: [
          "Höflich, mit leider und Könnten Sie",
          "Laut und wütend",
          "Er hat gar nichts gesagt",
          "Er hat das Restaurant verlassen",
        ],
        correctIndex: 0,
        explanation:
          "«leider» تُلطّف الشكوى و«Könnten Sie … bitte» تجعلها طلباً لا اتّهاماً — بنية a2-01 الثلاثية.",
        errorType: "vocabulary",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        questionDe:
          "Warum heißt es „Das Essen hat allen geschmeckt“ und nicht „Alle haben das Essen geschmeckt“?",
        instructionAr: "سؤال قواعد: لماذا هذا الترتيب؟",
        options: [
          "Weil bei schmecken die Speise das Subjekt ist",
          "Weil geschmeckt immer mit Dativ steht und kein Subjekt hat",
          "Weil alle ein Pluralwort ist",
          "Weil das Perfekt die Wörter umdreht",
        ],
        correctIndex: 0,
        explanation:
          "schmecken من أفعال الدّاتيف: الطعام فاعلٌ مرفوع والأشخاص مجرورون (allen).",
        errorType: "case",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 6,
        questionDe: "Wie viel Trinkgeld hat der Erzähler gegeben?",
        instructionAr: "اقرأ الفقرة الأخيرة: كم ترك بقشيشاً؟",
        options: ["1,60 Euro", "23 Euro", "21,40 Euro", "Gar nichts"],
        correctIndex: 0,
        explanation:
          "الحساب 21,40 ودفع 23 ⟵ الفرق 1,60 يورو. والبقشيش يُقال شفهياً: «Dreiundzwanzig, bitte».",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Ich habe einen Tisch auf den Namen … reserviert.",
        ar: "حجزتُ طاولةً باسم …",
      },
      {
        de: "Als Vorspeise hätte ich gern die Suppe.",
        ar: "كمقبّلات أودّ الشوربة",
      },
      {
        de: "Der Fisch ist leider ziemlich trocken.",
        ar: "السمك جافٌّ إلى حدٍّ ما للأسف",
      },
      {
        de: "Hat es Ihnen geschmeckt? – Ja, ausgezeichnet!",
        ar: "هل أعجبكم الطعام؟ — نعم، ممتاز!",
      },
      {
        de: "Zusammen oder getrennt? – Getrennt, bitte.",
        ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة",
      },
      {
        de: "Dreiundzwanzig, bitte.",
        ar: "ثلاثة وعشرون من فضلك (صيغة إعطاء البقشيش)",
      },
    ],
    discussionAr:
      "احكِ عن أمسيةٍ في مطعم، في ثماني جملٍ على الأقلّ. استعمل صيغتين مختلفتين من سُلّم الطلب (hätte gern · möchte · nehme)، وجملةً واحدة بـschmecken تجعل الطعام فيها فاعلاً، وصفةً مُدرَّجة (ein bisschen … أو zu …). ثمّ راجع: هل صرّفتَ schmecken مع الطعام لا مع نفسك؟ وهل جعلتَ الشخص مجروراً (mir/uns)؟",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "طلب الطعام",
        lines: [
          {
            speaker: "Kellner",
            de: "Guten Abend! Haben Sie schon gewählt?",
            ar: "مساء الخير! هل اخترتم؟",
          },
          {
            speaker: "Sami",
            de: "Ja, ich möchte bitte die Spaghetti und einen Salat.",
            ar: "نعم، أود السباغيتي وسلطة من فضلك.",
          },
          {
            speaker: "Kellner",
            de: "Und etwas zu trinken?",
            ar: "وشيء للشرب؟",
          },
          { speaker: "Sami", de: "Ein Wasser, bitte.", ar: "ماء من فضلك." },
          {
            speaker: "Kellner",
            de: "Sehr gerne. (nach dem Essen) Wie hat es geschmeckt?",
            ar: "بكل سرور. (بعد الأكل) كيف كان الطعم؟",
          },
          {
            speaker: "Sami",
            de: "Sehr gut! Die Spaghetti waren lecker. Die Rechnung, bitte.",
            ar: "جيد جداً! كانت السباغيتي لذيذة. الحساب من فضلك.",
          },
        ],
      },
      {
        id: "l2",
        title: "لا أستطيع أكل...",
        lines: [
          {
            speaker: "Mona",
            de: "Ich kann kein Fleisch essen.",
            ar: "لا أستطيع أكل اللحم.",
          },
          {
            speaker: "Kellner",
            de: "Kein Problem! Wir haben auch vegetarische Gerichte.",
            ar: "لا مشكلة! لدينا أيضاً أطباق نباتية.",
          },
          {
            speaker: "Mona",
            de: "Was können Sie empfehlen?",
            ar: "ماذا تنصحون؟",
          },
          {
            speaker: "Kellner",
            de: "Der Gemüseteller ist sehr gut und nicht teuer.",
            ar: "طبق الخضار جيد جداً وغير غالٍ.",
          },
          {
            speaker: "Mona",
            de: "Gut, ich nehme den Gemüseteller.",
            ar: "حسناً، سآخذ طبق الخضار.",
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
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: [
          "Spaghetti und Salat",
          "Fleisch und Suppe",
          "Pizza und Wasser",
          "Gemüseteller",
        ],
        correctIndex: 0,
        explanation: "قال: Ich möchte die Spaghetti und einen Salat.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie waren die Spaghetti?",
        questionAr: "كيف كانت السباغيتي؟",
        options: ["lecker", "schlecht", "scharf", "kalt"],
        correctIndex: 0,
        explanation: "قال سامي: Die Spaghetti waren lecker — لذيذة.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann Mona nicht essen?",
        questionAr: "ماذا لا تستطيع منى أكل؟",
        options: ["Fleisch", "Gemüse", "Salat", "Fisch"],
        correctIndex: 0,
        explanation: "قالت منى: Ich kann kein Fleisch essen — لا تستطيع اللحم.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المطعم: sch، ü، وck",
    items: [
      {
        de: "schmecken",
        ar: "يكون طعمه جيداً",
        note: "sch = ش + ck = ك مشددة: شمِكِن",
      },
      { de: "lecker", ar: "لذيذ", note: "e مفتوحة + ck: لِكّر" },
      { de: "die Küche", ar: "المطبخ", note: "ü + ch ناعمة: كُيخِه" },
      { de: "die Suppe", ar: "الحساء", note: "p مزدوجة: زوپّـِه" },
      {
        de: "die Rechnung",
        ar: "الحساب/الفاتورة",
        note: "ch بعد e = ش خفيفة (ich-Laut) لا خ + ung = ونغ: ريش-نونغ",
      },
      { de: "bestellen", ar: "يطلب", note: "e مفتوحة: بِشتِلِن" },
    ],
    tip: "Rechnung لها نطق صعب: «ريش-نونغ» — ch هنا تُنطق خ حلقية. كررها 5 مرات ببطء.",
    shadowing: [
      {
        de: "Ich möchte bitte einen Tee.",
        ar: "أود شاياً من فضلك.",
        tip: "möchte = مُوخشـتِه (ö)",
      },
      {
        de: "Die Speisekarte, bitte!",
        ar: "القائمة من فضلك!",
        tip: "Speisekarte = شپايْزِه-كارته (sp=شپ)",
      },
      { de: "Das schmeckt lecker!", ar: "هذا لذيذ!", tip: "schmeckt = شمِكْت" },
      {
        de: "Können Sie mir helfen?",
        ar: "هل يمكنكم مساعدتي؟",
        tip: "Können = كُنِن (ö)",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب طلبك في المطعم:",
      prompt: "Was möchtest du bestellen? (اكتب جملة كاملة بـ Ich möchte...)",
      acceptedAnswers: [
        "Ich möchte eine Pizza",
        "Ich möchte einen Salat",
        "Ich möchte die Suppe",
        "Ich möchte Wasser",
      ],
      sampleAnswer: "Ich möchte bitte eine Pizza und einen Salat.",
      explanation: "الصيغة: Ich möchte + المفعول (بالنصب) + من فضلك.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ möchten بتصريف صحيح:",
      template:
        "Ich ___ einen Kaffee. Du ___ einen Tee. Wir ___ die Rechnung. Sie ___ bestellen.",
      blanks: [
        { correct: "möchte", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchtest", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
      ],
      explanation:
        "سلم möchte: möchte، möchtest، möchte، möchten، möchtet، möchten.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte bitte zahlen.",
      explanation: "أود أن أدفع من فضلك — möchte + الفعل الأساسي في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Salat bestellen.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ Sie mir helfen?",
      options: ["Können", "Kann", "Kannst", "Könnt"],
      correctIndex: 0,
      explanation: "مع Sie: Können (صيغة الاحترام = صيغة الجمع).",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل عبارة المطعم بمعناها:",
      pairs: [
        { left: "die Speisekarte", right: "قائمة الطعام" },
        { left: "die Rechnung", right: "الحساب" },
        { left: "der Kellner", right: "النادل" },
        { left: "das Getränk", right: "المشروب" },
      ],
      explanation: "أربع كلمات أساسية في أي مطعم.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["möchte", "Ich", "die", "Suppe", "bestellen", "."],
      correctSentence: "Ich möchte die Suppe bestellen.",
      explanation: "Ich + möchte + die Suppe + bestellen (في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich möchte trinken einen Kaffee.",
      wrongWord: "trinken einen Kaffee",
      correctWord: "einen Kaffee trinken",
      options: [
        "einen Kaffee trinken",
        "trinken ein Kaffee",
        "ein Kaffee trinken",
        "trinke einen Kaffee",
      ],
      explanation: "الإطار: möchte + المفعول + الفعل الأساسي في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ schmeckt/schmecken:",
      template: "Das ___ gut. Die Suppe ___ lecker. Wie ___ es?",
      blanks: [
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
      ],
      explanation: "schmeckt مع المفرد (das, die Suppe, es).",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اطلب الحساب بأدب:",
      prompt: "(النادل اقترب — اطلب الحساب)",
      acceptedAnswers: [
        "Die Rechnung, bitte!",
        "Ich möchte zahlen, bitte!",
        "Ich möchte bitte zahlen.",
      ],
      sampleAnswer: "Die Rechnung, bitte!",
      explanation: "أبسط طلب: Die Rechnung, bitte! أو Ich möchte zahlen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wie schmeckt es?",
      questionAr: "ما معنى السؤال؟",
      options: ["كيف الطعم؟", "بكم هذا؟", "ماذا تريد؟", "أين المطعم؟"],
      correctIndex: 0,
      explanation: "Wie + schmeckt es = كيف طعمه؟",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich möchte zahlen die Rechnung.",
      wrongWord: "zahlen die Rechnung",
      correctWord: "die Rechnung zahlen",
      options: [
        "die Rechnung zahlen",
        "zahlen der Rechnung",
        "bezahlen die Rechnung",
        "der Rechnung zahlen",
      ],
      explanation: "الفعل الأساسي في النهاية: möchte die Rechnung zahlen.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Suppe schmeckt mir sehr gut.",
      explanation: "الحساء طعمه جيد جداً عندي — schmeckt + Dativ (mir).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الفعل الصحيحة (schmecken) بحسب الفاعل:",
      template:
        "Das Essen ___ mir gut. Die Nudeln ___ mir nicht. Die Suppe ___ ihm.",
      blanks: [
        { correct: "schmeckt", options: ["schmeckt", "schmecken", "schmecke"] },
        {
          correct: "schmecken",
          options: ["schmecken", "schmeckt", "schmecke"],
        },
        { correct: "schmeckt", options: ["schmeckt", "schmecken", "schmecke"] },
      ],
      explanation:
        "الفعل يتبع الفاعل النحوي: das Essen مفرد ⇒ schmeckt · die Nudeln جمع ⇒ schmecken · die Suppe مفرد ⇒ schmeckt.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich schmecke die Suppe sehr gut.",
      wrongWord: "Ich",
      correctWord: "Mir",
      options: ["Mir", "Ich", "Mich", "Mein"],
      explanation:
        "الطعام هو الفاعل والإنسان متلقٍّ: Mir schmeckt die Suppe sehr gut. أمّا Ich schmecke فتعني أنّ لي أنا طعماً.",
      errorType: "case",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "النادل يسألك عن رأيك في الحساء. أيّ صيغة صحيحة؟",
      questionDe: "Wie ___ Ihnen die Suppe?",
      questionAr: "كيف تجد الحساء؟",
      options: ["schmeckt", "schmecken", "schmecke", "schmeckst"],
      correctIndex: 0,
      explanation:
        "die Suppe مفرد وهي الفاعل ⇒ schmeckt. وIhnen في الـDativ لا تؤثّر في الفعل.",
      optionExplanations: [
        undefined,
        "schmecken للجمع، والحساء مفرد.",
        "schmecke لـ ich، وich ليست فاعل الجملة هنا.",
        "schmeckst لـ du، وdu ليست الفاعل.",
      ],
      errorType: "conjugation",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتقول إنّ المعكرونة لا تعجبك:",
      tokens: ["Die", "Nudeln", "schmecken", "mir", "nicht", "."],
      correctSentence: "Die Nudeln schmecken mir nicht.",
      explanation:
        "الفاعل (Die Nudeln) أوّلاً، ثم الفعل جمعاً، ثم المتلقّي mir، ثم النفي.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr:
        "حوّل الجملة إلى البنية الألمانية الصحيحة (الطعام فاعلاً).",
      prompt: "أريد أن أقول: «أنا أحبّ الكعكة» (der Kuchen) — بفعل gefallen.",
      acceptedAnswers: ["Der Kuchen gefällt mir.", "Mir gefällt der Kuchen."],
      sampleAnswer: "Der Kuchen gefällt mir.",
      explanation:
        "الكعكة هي الفاعل وأنا المتلقّي — كما تقول العربية «تعجبني الكعكة».",
      errorType: "case",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "أيّ صيغةٍ هي الأنسب لطلبٍ مهذّب من النادل؟",
      questionDe: "Sie bestellen beim Kellner. Was sagen Sie?",
      options: [
        "Ich hätte gern einen Kaffee, bitte.",
        "Ich will einen Kaffee, bitte.",
        "Ich mag einen Kaffee.",
        "Gib mir einen Kaffee.",
      ],
      correctIndex: 0,
      explanation:
        "bitte لا تُنقذ wollen: التأدّب في الألمانية يقع على صورة الفعل. وmag ميلٌ دائم لا طلب.",
      errorType: "vocabulary",
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich hätte gern ein Salat.",
      wrongWord: "ein",
      correctWord: "einen",
      options: ["einen", "ein", "eine", "einem"],
      explanation:
        "hätte gern تنصب مفعولها: der Salat ⟵ einen Salat. والتأدّب لا يُعفي من الإعراب.",
      errorType: "case",
    },
    {
      id: "e18",
      type: "fill-blank",
      instructionAr:
        "أكمل بالتصريف الصحيح لـschmecken (انتبه: مع الشيء لا مع الشخص)",
      template: "Das Essen ___ mir sehr gut. · Die Nudeln ___ mir nicht.",
      blanks: [
        {
          correct: "schmeckt",
          options: ["schmeckt", "schmecken", "schmecke", "geschmeckt"],
          errorType: "conjugation",
        },
        {
          correct: "schmecken",
          options: ["schmecken", "schmeckt", "schmeckst", "schmecke"],
          errorType: "conjugation",
        },
      ],
      explanation:
        "das Essen مفرد ⟵ schmeckt، وdie Nudeln جمع ⟵ schmecken. الفعل يتبع الطعام لا المتكلّم.",
      errorType: "conjugation",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح أثر الإنجليزية في هذه الجملة",
      wrongSentence: "Ich schmecke das Essen sehr gut.",
      wrongWord: "Ich",
      correctWord: "Das Essen schmeckt mir",
      options: ["Das Essen schmeckt mir", "Ich", "Mir", "Mich"],
      explanation:
        "قياسٌ على I like the food. الصواب أنّ الطعام فاعل: Das Essen schmeckt mir. وارجع إلى العربية «أعجبني الطعام» فهي أقرب.",
      errorType: "case",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "الشوربة ساخنةٌ جداً. أيّ صفةٍ تصف حرارتها؟",
      questionDe: "Die Suppe kommt direkt aus der Küche. Sie ist ...",
      options: ["heiß", "scharf", "warm", "trocken"],
      correctIndex: 0,
      explanation:
        "heiß للحرارة وscharf للتوابل. «حارّ» العربية تجمعهما فينتقل اللبس.",
      errorType: "vocabulary",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل بالمقدار الصحيح",
      template:
        "Zwei ___ Kaffee, bitte. · Drei ___ Wasser, bitte. (الوحدة: Glas)",
      blanks: [
        {
          correct: "Tassen",
          options: ["Tassen", "Tasse", "Tassens", "Tassen von"],
          errorType: "plural",
        },
        {
          correct: "Glas",
          options: ["Glas", "Gläser", "Glases", "Glas von"],
          errorType: "plural",
        },
      ],
      explanation:
        "الوحدات المؤنّثة تُجمع (zwei Tassen)، والمذكّرة والمحايدة تبقى مفردةً بعد العدد (drei Glas, zwei Bier).",
      errorType: "plural",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr: "تريد أن تأكل شيئاً دافئاً. كيف تقولها؟",
      questionDe: "Sie möchten kein kaltes Essen. Was sagen Sie?",
      options: [
        "Ich möchte etwas Warmes essen.",
        "Ich möchte etwas warm essen.",
        "Ich möchte ein Warmes essen.",
        "Ich möchte etwas Warme essen.",
      ],
      correctIndex: 0,
      explanation: "بعد etwas/nichts تصير الصفة اسماً: حرفٌ كبير ونهاية -es.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "word-ordering",
      instructionAr: "رتّب جملة الطلب: انتبه إلى V2 بعد التقديم",
      tokens: ["Als", "Vorspeise", "hätte", "ich", "gern", "die", "Suppe"],
      correctSentence: "Als Vorspeise hätte ich gern die Suppe",
      explanation:
        "تقديم Als Vorspeise يدفع الفاعل بعد الفعل: الفعل يبقى ثانياً دائماً.",
      errorType: "word-order",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ سؤالٍ بجوابه المعتاد في المطعم",
      pairs: [
        { left: "Haben Sie reserviert?", right: "Ja, auf den Namen Haddad." },
        {
          left: "Was möchten Sie trinken?",
          right: "Ein stilles Wasser, bitte.",
        },
        { left: "Schmeckt es Ihnen?", right: "Ja, ausgezeichnet, danke!" },
        { left: "Zusammen oder getrennt?", right: "Getrennt, bitte." },
      ],
      explanation:
        "أربعة أسئلةٍ تُطرح في كلّ زيارة تقريباً — ومن توقّعها لم يتجمّد أمامها.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Herr Haddad sitzt im Gasthaus. Der Kellner fragt: „Schmeckt es Ihnen?“ Herr Haddad antwortet: „Der Fisch ist leider ein bisschen trocken, aber die Suppe war ausgezeichnet.“ Am Ende fragt der Kellner: „Zusammen oder getrennt?“ Die Rechnung macht 21,40 Euro. Herr Haddad sagt: „Dreiundzwanzig, bitte.“",
      statements: [
        {
          id: "s1",
          de: "Herr Haddad hat sich sehr laut beschwert.",
          ar: "اشتكى السيّد حدّاد بصوتٍ عالٍ.",
          isTrue: false,
          whyAr:
            "«ein bisschen trocken» ملاحظةٌ لطيفة لا شكوى؛ ولو أراد الشكوى لقال zu trocken.",
        },
        {
          id: "s2",
          de: "Die Suppe hat ihm gut geschmeckt.",
          ar: "أعجبته الشوربة طعماً.",
          isTrue: true,
          whyAr: "«die Suppe war ausgezeichnet».",
        },
        {
          id: "s3",
          de: "Er gibt 1,60 Euro Trinkgeld.",
          ar: "ترك ١٫٦٠ يورو بقشيشاً.",
          isTrue: true,
          whyAr: "23 − 21,40 = 1,60 — والبقشيش يُقال شفهياً عند الدفع.",
        },
        {
          id: "s4",
          de: "In Deutschland ist getrennt zahlen unhöflich.",
          ar: "الدفع المنفصل قلّة أدبٍ في ألمانيا.",
          isTrue: false,
          whyAr: "بل هو العُرف الطبيعيّ، ولذلك يسأل النادل عنه ابتداءً.",
        },
      ],
      explanation:
        "النصّ يجمع التدرّج (ein bisschen) وschmecken وسؤال الحساب والبقشيش في موقفٍ واحد.",
      errorType: "vocabulary",
    },
    {
      id: "e26",
      type: "transformation",
      instructionAr: "حوّل الطلب الفظّ إلى طلبٍ مهذّب بصيغة hätte gern",
      prompt: "Ich will eine Suppe. → (höflich mit hätte gern)",
      acceptedAnswers: [
        "Ich hätte gern eine Suppe.",
        "Ich hätte gern eine Suppe",
      ],
      sampleAnswer: "Ich hätte gern eine Suppe.",
      hint: "hätte gern + مفعولٌ منصوب، بلا فعلٍ ثانٍ.",
      explanation:
        "الصعود في سُلّم التأدّب يتمّ بتغيير صورة الفعل لا بإضافة bitte.",
      errorType: "grammar",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich möchte trinken einen Kaffee.",
        right: "Ich möchte einen Kaffee trinken.",
        whyAr: "الفعل الأساسي في نهاية الجملة (الإطار).",
      },
      {
        wrong: "Ich schmecke das gut (المتذوق كفاعل)",
        right: "Das schmeckt mir gut.",
        whyAr: "الطعام فاعل، والمتذوق Dativ (mir).",
      },
      {
        wrong: "Kannst du mich helfen",
        right: "Kannst du mir helfen?",
        whyAr: "helfen يأخذ Dativ: mir وليس mich.",
      },
    ],
    eselsbruecken: [
      "«möchte = أود» للطلب المهذب — في أي مطعم ألماني: Ich möchte bitte...",
      "«lecker = لذيذ»: كلمة السر لإطراء النادل: Das schmeckt lecker!",
    ],
    culturalNote: {
      title: "نظام Trinkgeld (الإكرامية)",
      content:
        "في ألمانيا لا توجد نسبة إكرامية إلزامية، لكن من اللباقة تقريب المبلغ: «Stimmt so» (الباقي لك) أو 5-10%. تدفع للنادل مباشرة عند الطاولة — وغالباً بعد الأكل ينتظرونك أنت لتطلب الحساب وليس العكس.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ bitte einen Tee.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ du mir helfen?",
      options: ["Kannst", "Kann", "Können", "Könnt"],
      correctIndex: 0,
      explanation: "مع du: kannst.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Die", "Rechnung", "bitte", "!"],
      correctSentence: "Die Rechnung, bitte!",
      explanation: "الحساب من فضلك! — أبسط وأشيع طلب.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Suppe schmeckt gut nicht.",
      wrongWord: "gut nicht",
      correctWord: "nicht gut",
      options: ["nicht gut", "gut nicht", "nicht gut nicht", "schlecht nicht"],
      explanation: "النفي قبل الصفة: schmeckt nicht gut.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالكلمة الصحيحة (Speisekarte/Rechnung/schmeckt):",
      template:
        "Die ___, bitte! (القائمة) · Das ___ lecker! · Die ___, bitte! (الحساب)",
      blanks: [
        {
          correct: "Speisekarte",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
        {
          correct: "schmeckt",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
        {
          correct: "Rechnung",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
      ],
      explanation: "Speisekarte للطلب، schmeckt للطعم، Rechnung للحساب.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "das Restaurant",
      ar: "المطعم",
      example: "Wir gehen ins Restaurant.",
      exampleAr: "نذهب إلى المطعم.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Speisekarte",
      ar: "قائمة الطعام",
      example: "Die Speisekarte, bitte!",
      exampleAr: "القائمة من فضلك!",
      level: "A2",
    },
    {
      id: "fc3",
      de: "bestellen",
      ar: "يطلب (طعاماً)",
      example: "Ich möchte bestellen.",
      exampleAr: "أود أن أطلب.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "möchten",
      ar: "أود (طلب مهذب)",
      example: "Ich möchte einen Kaffee.",
      exampleAr: "أود قهوة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "können",
      ar: "أستطيع",
      example: "Können Sie mir helfen?",
      exampleAr: "هل يمكنكم مساعدتي؟",
      level: "A2",
    },
    {
      id: "fc6",
      de: "schmecken",
      ar: "يكون طعمه جيداً",
      example: "Das schmeckt mir gut.",
      exampleAr: "هذا طعمه جيد.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "lecker",
      ar: "لذيذ",
      example: "Die Pizza ist lecker!",
      exampleAr: "البيتزا لذيذة!",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Rechnung",
      ar: "الحساب",
      example: "Die Rechnung, bitte!",
      exampleAr: "الحساب من فضلك!",
      level: "A2",
    },
    {
      id: "fc9",
      de: "Das Essen schmeckt mir.",
      ar: "الطعام يعجبني (طعمه).",
      example: "Das Essen schmeckt mir sehr gut.",
      exampleAr: "الطعام يعجبني كثيراً.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "Wie schmeckt Ihnen ...?",
      ar: "كيف تجد ...؟",
      example: "Wie schmeckt Ihnen die Suppe?",
      exampleAr: "كيف تجد الحساء؟",
      level: "A2",
    },
    {
      id: "fc11",
      de: "Ich hätte gern ...",
      ar: "أودّ … (أرقى من möchte — Konjunktiv II من haben)",
      example: "Ich hätte gern einen Salat, bitte.",
      exampleAr: "أودّ سلطةً من فضلك.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "Ich nehme ...",
      ar: "آخذ … (محايدة عمليّة)",
      example: "Ich nehme das Schnitzel mit Pommes.",
      exampleAr: "آخذ الشنيتسل مع البطاطا.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "die Vorspeise",
      ar: "المقبّلات",
      example: "Als Vorspeise hätte ich gern die Suppe.",
      exampleAr: "كمقبّلات أودّ الشوربة.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "das Hauptgericht",
      ar: "الطبق الرئيس",
      example: "Als Hauptgericht nehme ich den Fisch.",
      exampleAr: "كطبقٍ رئيس آخذ السمك.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "der Nachtisch",
      ar: "الحلوى (بعد الطعام)",
      example: "Möchten Sie noch einen Nachtisch?",
      exampleAr: "أتودّ حلوى أيضاً؟",
      level: "A2",
    },
    {
      id: "fc16",
      de: "stilles Wasser",
      ar: "ماءٌ بلا غاز",
      example: "Stilles Wasser oder mit Kohlensäure?",
      exampleAr: "ماءٌ بلا غاز أم فوّار؟",
      level: "A2",
    },
    {
      id: "fc17",
      de: "reservieren",
      ar: "يحجز",
      example: "Ich habe einen Tisch auf den Namen Haddad reserviert.",
      exampleAr: "حجزتُ طاولةً باسم حدّاد.",
      level: "A2",
    },
    {
      id: "fc18",
      de: "Zusammen oder getrennt?",
      ar: "معاً أم كلٌّ على حدة؟ (سؤال الحساب)",
      example: "Zusammen oder getrennt? – Getrennt, bitte.",
      exampleAr: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "das Trinkgeld",
      ar: "البقشيش (يُقال شفهياً لا يُترك)",
      example: "Das macht 21,40. – Dreiundzwanzig, bitte.",
      exampleAr: "الحساب ٢١٫٤٠. — ثلاثة وعشرون من فضلك.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "Stimmt so.",
      ar: "احتفظ بالباقي",
      example: "Hier sind fünfundzwanzig Euro. Stimmt so.",
      exampleAr: "هذه خمسة وعشرون يورو. احتفظ بالباقي.",
      level: "A2",
    },
    {
      id: "fc21",
      de: "heiß",
      ar: "ساخن (حرارةً — لا scharf!)",
      example: "Vorsicht, das Essen ist sehr heiß!",
      exampleAr: "احذر، الطعام ساخنٌ جداً!",
      level: "A2",
    },
    {
      id: "fc22",
      de: "scharf",
      ar: "حارّ (بالتوابل)",
      example: "Ich esse nichts Scharfes.",
      exampleAr: "لا آكل شيئاً حارّاً.",
      level: "A2",
    },
    {
      id: "fc23",
      de: "salzig",
      ar: "مالح",
      example: "Die Suppe ist ein bisschen salzig.",
      exampleAr: "الشوربة مالحةٌ قليلاً.",
      level: "A2",
    },
    {
      id: "fc24",
      de: "satt",
      ar: "شبعان",
      example: "Danke, ich bin satt.",
      exampleAr: "شكراً، أنا شبعان.",
      level: "A2",
    },
    {
      id: "fc25",
      de: "etwas Warmes",
      ar: "شيءٌ دافئ (etwas + صفة كبيرة + ‑es)",
      example: "Ich möchte etwas Warmes essen.",
      exampleAr: "أودّ أن آكل شيئاً دافئاً.",
      level: "A2",
    },
    {
      id: "fc26",
      de: "Guten Appetit!",
      ar: "بالهناء! — ويُردّ: Danke, gleichfalls!",
      example: "Guten Appetit! – Danke, gleichfalls!",
      exampleAr: "بالهناء! — شكراً، وأنت كذلك!",
      level: "A2",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a2-03-1",
      type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية",
      sourceDe:
        "Vorspeise: Gemüsesuppe. Hauptgericht: Schnitzel mit Pommes oder Bratwurst mit Sauerkraut. Dessert: Apfelstrudel.",
      taskAr:
        "انقل القائمة بالعربية: المقبلات، الطبق الرئيسي بخياراته، والحلوى.",
      modelAnswerAr:
        "«مقبلات: شوربة خضار. طبق رئيسي: شنيتزل مع بطاطس أو سجق مع ملفوف مخلل. حلوى: ستروديل تفاح.»",
      keyPointsAr: ["نقلت المقبلات", "ذكرت خياري الطبق الرئيسي", "نقلت الحلوى"],
    },
  ],
  interaction: [
    {
      id: "int-a2-03-1",
      scenarioAr: "في مطعم — تطلب وتشكو من الطبق.",
      scenarioDe: "Im Restaurant — du bestellst und reklamierst.",
      strategyAr: "الاستراتيجية: الطلب بأدب وتقديم شكوى مهذبة.",
      rounds: [
        {
          speakerDe: "Was möchten Sie bestellen?",
          speakerAr: "ماذا تريد أن تطلب؟",
          options: [
            {
              de: "Ich hätte gern das Schnitzel mit Pommes, bitte.",
              ar: "أريد الشنيتزل مع البطاطس من فضلك.",
              best: true,
              replyDe: "Sehr gerne. Etwas zu trinken?",
              replyAr: "بكل سرور. شيء للشرب؟",
            },
            {
              de: "Ich möchte die Rechnung sofort.",
              ar: "أريد الحساب فوراً.",
              best: false,
              replyDe: "Sie haben noch nichts bestellt!",
              replyAr: "لم تطلب شيئاً بعد!",
            },
          ],
        },
        {
          speakerDe: "Hier ist Ihr Schnitzel. Guten Appetit!",
          speakerAr: "هذا شنيتزلك. بالهناء والشفاء!",
          options: [
            {
              de: "Entschuldigung, das Schnitzel ist kalt. Können Sie es bitte warm machen?",
              ar: "عذراً، الشنيتزل بارد. هل يمكنك تسخينه من فضلك؟",
              best: true,
              replyDe: "Es tut mir leid! Ich bringe sofort ein neues.",
              replyAr: "آسف! سأحضر واحداً جديداً فوراً.",
            },
            {
              de: "Das Schnitzel ist kalt. Sie sind schrecklich!",
              ar: "الشنيتزل بارد. أنت فظيع!",
              best: false,
              replyDe: "Bitte bleiben Sie höflich. Ich löse das Problem.",
              replyAr: "رجاءً كن مهذباً. سأحل المشكلة.",
            },
          ],
        },
      ],
    },
  ],
};

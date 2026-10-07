import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-03: في المطعم — صيغ الطلب في السياق، أمثلة Dativ، مفردات المطعم ووصف الطعام
 */
export const lessonA203: Lesson = {
  id: "a2-03",
  unitId: "a2-03",
  level: "A2",
  order: 1,
  titleDe: "Im Restaurant",
  titleAr: "المطعم والطعام",
  summary:
    "تعبيرات طلب شائعة تختلف ملاءمتها بحسب السياق، ومنها möchte وhätte gern وnehmen؛ أمثلة على schmecken مع Dativ ومراجعة gefallen/passen؛ مفردات مختارة من زيارة مطعم ووصف الطعام والكميات؛ ونصّ «Ein Abend im Gasthaus Löwen» مع أسئلة قراءة واستماع وكتابة موجّهة. الملاحظات الثقافية أمثلة محدودة لا قواعد عامة لكل المطاعم أو المناطق.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann in vorgegebenen Situationen eine passende Bestellformulierung auswählen und eine kurze Bestellung schreiben.",
      ar: "أن أختار في المواقف المحددة صيغة طلب مناسبة للسياق، وأكتب طلباً قصيراً.",
      evidence: {
        exerciseIds: ["e16", "e26", "w1"],
        taskIds: ["practice:a2-03:e16", "practice:a2-03:e26", "writing:a2-03:w1"],
        labelAr: "اختر صيغة الطلب المقصودة في e16، وأعِد الصياغة واكتب طلباً مقبولاً في e26 وw1.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in kurzen Beispielen die passenden Formen von schmecken, gefallen und passen wählen.",
      ar: "أن أختار في أمثلة قصيرة صيغة الفعل المناسبة مع schmecken وgefallen وpassen، وأميز المعنى المقصود.",
      evidence: {
        exerciseIds: ["e13", "e15", "e18", "e27"],
        taskIds: ["practice:a2-03:e13", "practice:a2-03:e15", "practice:a2-03:e18", "practice:a2-03:e27"],
        labelAr: "أجب عن سؤال schmecken في e13، وحوّل مثال gefallen في e15، وطابق تصريف الفعل والسياق في e18 وe27.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausdrücklich genannte Einzelheiten im Restaurant-Lesetext und in den Hördialogen finden.",
      ar: "أن أستخرج تفاصيل مذكورة صراحةً في نص المطعم وحوارات الاستماع، من دون تعميمها على كل زيارة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5", "rq6", "q1", "q2", "q3"],
        taskIds: [
          "reading:read-a2-03:rq1", "reading:read-a2-03:rq2", "reading:read-a2-03:rq3",
          "reading:read-a2-03:rq4", "reading:read-a2-03:rq5", "reading:read-a2-03:rq6",
          "listening:l1:q1", "listening:l1:q2", "listening:l2:q3",
        ],
        labelAr: "أجب عن أسئلة النص والحوارات؛ لا تُحتسب مشاهدة النص أو إجابات أسئلة الاستماع بعد كشف التفريغ.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in vorgegebenen Beispielen Geschmackswörter unterscheiden sowie Mengen und etwas Warmes passend ergänzen.",
      ar: "أن أميز في أمثلة محددة بين صفات الطعم والحرارة، وأختار صيغة كمية وetwas Warmes المناسبة.",
      evidence: {
        exerciseIds: ["e20", "e21", "e22"],
        taskIds: ["practice:a2-03:e20", "practice:a2-03:e21", "practice:a2-03:e22"],
        labelAr: "ميّز الحرارة عن التوابل في e20، وأكمل وحدات العدّ في e21، واختر كتابة etwas Warmes في e22.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "يمكن أن تسمع في المطعم «Ich möchte einen Kaffee» أو «Ich hätte gern einen Kaffee» أو «Ich nehme einen Kaffee». صيغٌ شائعة، لكنّها ليست درجاتٍ ثابتةً على سلّم عالمي. و«Ich will einen Kaffee» صحيحة نحوياً وقد تبدو مباشرةً في بعض المواقف؛ يؤثر السياق والنبرة والصياغة المصاحبة في وقعها. تاريخياً ترتبط möchte بـKonjunktiv II من mögen، لكنّها تُستعمل اليوم غالباً كصيغة طلب حاضرة مألوفة. سنقارن المعاني والاستعمالات من دون وصف بديل صحيح بأنه مرفوض اجتماعياً.",
    motivatingQuestionDe: "Was möchten Sie bestellen?",
    contextAr:
      "يعرض هذا الدرس صيغاً شائعة للطلب، وأمثلةً على schmecken مع ضمير Dativ مع مراجعة gefallen/passen، وبعض مفردات المطاعم وصفات الطعام والكميات. الحوارات التالية مواقف تدريبية محددة؛ ولا نستنتج منها ترتيباً أو سياسةً واحدة للخدمة أو الماء أو الحساب في جميع المطاعم.",
    connectionToPreviousAr:
      "في A1-03 تعلّمتَ الطعام والنصب، وفي A1-06 ظهرت möchte وصيغ الطلب، وفي A1-07 تدربتَ على الأسعار والشراء، وفي A2-01 درستَ صيغ شكوى مهذّبة. نراجع ما سبق ونضيف أمثلةً سياقيةً جديدةً من المطعم، لا «أول لقاء» بهذه الصيغ.",

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
        "مراجعة من A1 (درس a1-06 — أوقات الفراغ والهوايات): اختر الأمر الرسمي لدعوة ضيفٍ إلى الدخول:",
      questionDe: "Sie bitten einen Gast formell hereinzukommen. Was sagen Sie?",
      options: [
        "Kommen Sie bitte herein!",
        "Komm bitte herein!",
        "Kommt bitte herein!",
        "Kommen bitte herein!",
      ],
      correctIndex: 0,
      explanation: "الأمر الرسمي مع Sie: Kommen Sie bitte herein!",
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
      titleAr: "صيغ الطلب في المطعم — اختيارٌ بحسب السياق",
      titleDe: "Im Restaurant bestellen: Formulierungen im Kontext",
      explanationAr:
        `تسمع في المطعم صيغاً مختلفة للطلب، ولا تصطفّ في سلّم عالميّ ثابت للتأدّب. يتأثر وقع العبارة بالموقف، والنبرة، والعلاقة بين المتحدثين، وما إذا أضيفت كلمات مثل **bitte**.

· **Ich möchte …** صيغة شائعة للرغبة أو الطلب: **Ich möchte einen Kaffee, bitte.** استُعملت **möchte** كثيراً في الطلبات اليومية. تاريخياً هي صيغة Konjunktiv II من **mögen**، لكنّها تُعامل في الاستعمال الحديث غالباً كصيغة الحاضر؛ فلا نصف كل استعمال لها كأنّه شرطٌ حيّ.
· **Ich hätte gern …** صيغة طلب شائعة أخرى: **Ich hätte gern einen Salat, bitte.** و**hätte** صيغة Konjunktiv II من **haben**؛ وهي لا تجعلها «أرقى» في كل موقف من möchte.
· **Ich nehme …** اختيارٌ مألوف لما ستتناوله: **Ich nehme die Suppe.**
· **Könnte ich bitte … haben?** سؤالٌ يمكن أن يخفف الطلب في سياقات كثيرة: **Könnte ich bitte die Karte haben?** وليس قاعدةً آليةً بأن السؤال دائماً ألطف من الخبر.
· **Für mich bitte …** تركيب مختصر ممكن في الطلب: **Für mich bitte einen Salat.**
· **Ich will …** صحيحة نحوياً وتعبّر بوضوح عن الإرادة؛ قد تبدو مباشرةً في طلب خدمة، ويؤثر السياق والنبرة ووجود **bitte** في وقعها. لذلك لا نسمّيها «مرفوضة اجتماعياً» ولا نعدّها خطأً.

في **hätte gern + اسم** يأتي الاسم في الحالة المطلوبة في الجملة؛ في **Ich hätte gern einen Salat** نقول **einen Salat** لأنّ المفعول مذكر منصوب. نتدرّب هنا على فهم العبارات واختيارها لموقف محدد، لا على ترتيبها من الأكثر إلى الأقل تهذّباً.`,
      whyAr:
        "المتعلم يحتاج إلى أكثر من صيغة واحدة ليختار ما يناسب الموقف، وإلى فهم أن صحة التركيب النحوي لا تحسم وحدها أثره التداولي. قدّمت A1-06 بالفعل möchte وميّزت بين سياقاتها وwill؛ يوسّع هذا القسم التدريب إلى صيغ أخرى في طلب المطعم، من غير ادعاء سلّم تأدب ثابت أو معيار امتحاني.",
      table: {
        title: "صيغ ممكنة ومعناها في الموقف",
        columns: ["الصيغة", "وظيفة ممكنة", "ملاحظة السياق", "مثال"],
        rows: [
          {
            label: "Ich möchte …",
            cells: ["رغبة أو طلب", "صيغة شائعة للطلب؛ ليست درجة رقمية", "Ich möchte einen Tee, bitte."],
          },
          {
            label: "Ich hätte gern …",
            cells: ["طلب بصيغة gern", "صيغة شائعة أخرى؛ لا يلزم أن تكون أرقى من möchte", "Ich hätte gern einen Salat."],
          },
          {
            label: "Ich nehme …",
            cells: ["اختيار من القائمة", "مناسبة عند بيان ما ستتناوله", "Ich nehme die Suppe."],
          },
          {
            label: "Für mich bitte …",
            cells: ["طلب مختصر", "يتحدد وقعه بالنبرة والمقام", "Für mich bitte einen Salat."],
          },
          {
            label: "Könnte ich … haben?",
            cells: ["طلب في صورة سؤال", "قد يخفف الطلب؛ ليست قاعدة مطلقة", "Könnte ich bitte die Karte haben?"],
          },
          {
            label: "Ich will …",
            cells: ["إرادة أو طلب مباشر", "صحيحة؛ قد تكون مباشرةً بحسب السياق", "Ich will einen Kaffee, bitte."],
          },
        ],
      },
      examples: [
        {
          de: "Ich hätte gern einen Kaffee, bitte.",
          ar: "أودّ قهوةً من فضلك. (صيغة طلب شائعة)",
        },
        {
          de: "Ich möchte die Gemüsesuppe, bitte.",
          ar: "أودّ شوربة الخضار من فضلك.",
        },
        {
          de: "Ich nehme das Schnitzel mit Pommes.",
          ar: "سآخذ الشنيتسل مع البطاطا. (اختيار من القائمة)",
        },
        {
          de: "Ich will heute einen Tee.",
          ar: "أريد شاياً اليوم. (صحيحة، ووقعها المباشر يتأثر بالسياق والنبرة)",
        },
        {
          de: "Könnte ich bitte noch ein Glas Wasser haben?",
          ar: "هل يمكنني الحصول على كأس ماء آخر من فضلك؟",
        },
        {
          de: "Für mich bitte nur einen Salat.",
          ar: "لي سلطة فقط من فضلك. (صيغة مختصرة)",
        },
        {
          de: "Wir hätten gern die Karte, bitte.",
          ar: "نودّ قائمة الطعام من فضلك. (تصريف wir: hätten)",
        },
        {
          de: "Ich mag Fisch, aber heute möchte ich Fleisch.",
          ar: "أحبّ السمك، لكنّي أودّ اللحم اليوم. (ميلٌ عام مقابل رغبة في هذا الموقف)",
        },
      ],
      comparisonWithArabic:
        `يمكن أن تضيف العربية كلمات مثل «من فضلك» أو «لو سمحت»، ويمكن للألمانية أن تستعمل **bitte** أيضاً إلى جانب أفعال الطلب. لا توجد مطابقة آلية بين فعل عربي وصيغة ألمانية واحدة، ولا قاعدة تقول إن إضافة bitte تجعل كل عبارة متساوية في وقعها.

**Ich möchte** و**Ich hätte gern** و**Ich nehme** و**Könnte ich …?** خيارات مختلفة للتعبير عن الرغبة أو الاختيار أو الطلب؛ يحدّد السياق والنبرة ما يلائم. أمّا **Ich will einen Kaffee** فهي سليمة نحوياً، لكنها قد تبدو أكثر مباشرة في موقف خدمة؛ ويمكن أن تغيّر **bitte** والنبرة أثرها. لا نصف صيغة صحيحة بأنها ممنوعة اجتماعياً، ولا نعمّم على كل متحدثي العربية طريقةً واحدة لصنع التأدّب.`,
      eselsbruecke:
        "لا تحفظ سلّماً ثابتاً: احفظ الصيغة ومعناها، ثمّ انظر إلى الموقف والنبرة. ومن الخيارات الشائعة: **Ich möchte … / Ich hätte gern … / Ich nehme …**.",
      commonMistakes: [
        {
          wrong: "Ich will einen Kaffee, bitte.",
          right: "Ich hätte gern einen Kaffee, bitte. (إذا أردت صياغة أقل مباشرة في هذا المثال)",
          whyAr:
            "الجملة الأولى صحيحة نحوياً؛ قد تبدو مباشرة في بعض طلبات الخدمة. الصيغة الثانية بديل شائع أقل مباشرة في المثال، وليست تصحيحاً لخطأ نحوي ولا قاعدة مطلقة.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich hätte gern ein Salat.",
          right: "Ich hätte gern einen Salat.",
          whyAr:
            "في هذا التركيب يكون der Salat مفعولاً منصوباً مذكراً؛ لذلك نقول einen Salat.",
          classification: "error",
        },
        {
          wrong: "Ich möchte einen Kaffee trinken möchte.",
          right: "Ich möchte einen Kaffee trinken.",
          whyAr:
            "في هذا التركيب يأتي الفعل المصرف möchte مرةً واحدة، والمصدر trinken في نهاية الجملة.",
          classification: "error",
        },
        {
          wrong: "Ich mag einen Kaffee. (إذا كان المقصود طلبه الآن)",
          right: "Ich möchte einen Kaffee. / Ich hätte gern einen Kaffee.",
          whyAr:
            "mag يعبّر غالباً عن الميل أو التفضيل؛ لا يصرّح وحده بالطلب في هذا المثال. الجملة ليست خطأً نحوياً في كل سياق.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Wir hätte gern zwei Bier.",
          right: "Wir hätten gern zwei Bier.",
          whyAr:
            "مع wir نقول hätten، لا hätte؛ أمّا عبارة zwei Bier فهي طلب مختصر ممكن في سياق المطعم.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "möchte بين أصل الصيغة واستعمالها الحالي",
        content:
          "تذكر IDS Grammis أن **möchte** أصلها التاريخي Konjunktiv II من **mögen**، لكنها تُعامل في الاستعمال الحديث غالباً كصيغة الحاضر. أمّا **hätte** فهي صيغة Konjunktiv II من **haben**، وتظهر في النمط الشائع **Ich hätte gern …**. ليست هذه أول مرة تظهر فيها möchten: تناولتها A1-06، ثمّ توسّع B1-04 في وظائف Konjunktiv II الأخرى؛ وهذا القسم يراجع الصيغة ويضيف استعمال المطعم، لا يقدّم تاريخاً كاملاً للنحو.",
      },
    },
    {
      id: "t2",
      titleAr: "الشخص في Dativ: schmecken ومراجعة gefallen وpassen",
      titleDe: "Schmecken, gefallen und passen: Beispiele mit Dativ",
      explanationAr:
        `في النمط المقصود هنا، يكون الطعام أو الموعد أو الشيء **فاعلاً نحوياً في Nominativ**، ويأتي الشخص المعني في صيغة **Dativ**:
· **Das Essen schmeckt mir gut.** — الطعام طيّب المذاق عندي.
· **Das Restaurant gefällt mir.** — يعجبني المطعم / يلقى قبولي.
· **Der Termin passt uns gut.** — الموعد مناسب لنا.

يتبع الفعل فاعله النحوي: **Das Essen schmeckt** (مفرد)، و**Die Nudeln schmecken** (جمع)، مهما تغيّرت صيغة الضمير في Dativ. ولا يعني اجتماع البنية في هذه الأمثلة أن الأفعال متطابقة في المعنى أو أن كل استعمال لها يصف «أثراً» واحداً.

**schmecken** له استعمالان ينبغي عدم خلطهما: **Die Suppe schmeckt mir gut** تصف مذاقها بالنسبة إلى الشخص؛ أما **Ich schmecke die Suppe** فقد تعني أنني أتذوقها/أتبين مذاقها، وهي جملة صحيحة في هذا المعنى. في جملة التقييم يمكن أن يساعد **gut** أو **ausgezeichnet** على بيان الرأي بوضوح.

**gefallen** يعني أن شيئاً يلقى قبول شخص أو يترك لديه انطباعاً حسناً، ولا يقتصر على المظهر. ويمكن أن يكون **Das Essen gefällt mir** صحيحاً عند الحديث عن الانطباع العام؛ إذا كان المقصود تحديداً مذاق الطبق فـ**Das Essen schmeckt mir** أوضح. و**passen** يتغير معناه بحسب السياق: قد يلائم الموعد شخصاً، أو يكون المقاس مناسباً، أو ينسجم شيء مع آخر.

للمقارنة مع العربية، قد تساعدك الجملة **«أعجبني الطعام»** على ملاحظة أن الطعام هو الفاعل الدلالي والشخص هو من يختبر الأثر؛ لكنها ليست حالة Dativ ألمانية. ضمير العربية **ـني** يُحلَّل في نظام العربية، أما الألمانية فتستعمل **mir** بوصفه Dativ. التشابه هنا في توزيع الأدوار الدلالية، لا في تطابق الحالات أو علامات الإعراب.`,
      whyAr:
        "هذه مراجعة متدرجة لا أول لقاء بـDativ أو بهذه الأفعال. ظهر Dativ المكاني وذُكرت أفعال مثل gefallen/passen في A1-04؛ وترد صيغة helfen مع mir في A1-06؛ ثمّ خصص A1-08 تدريباً سياقياً على gefallen/passen/stehen، وتناول A2-02 أمثلة fehlen/wehtun. يضيف A2-03 تركيزاً على معنى schmecken في وصف المذاق، وعلى مطابقة الفعل مع فاعله، مع توضيح أن الصيغ التي تضم Dativ ليست عائلةً ذات معنى واحد.",
      table: {
        title: "أمثلة مختلفة على فاعلٍ ومتمّم Dativ",
        columns: ["الفعل/التركيب", "الفاعل (Nominativ)", "الشخص (Dativ)", "ملاحظة المعنى"],
        rows: [
          {
            label: "schmecken",
            cells: ["Das Essen", "mir", "مذاق الطعام بالنسبة إلى الشخص؛ للفعل استعمالات أخرى أيضاً"],
          },
          {
            label: "gefallen",
            cells: ["Das Restaurant", "mir", "يلقى قبولي/يترك انطباعاً حسناً، لا المظهر وحده"],
          },
          {
            label: "passen",
            cells: ["Der Termin", "uns", "يناسبنا في هذا السياق؛ وله استعمالات أخرى"],
          },
          {
            label: "fehlen",
            cells: ["Der Löffel", "mir", "ينقصني الملعقة في المثال"],
          },
          {
            label: "wehtun",
            cells: ["Der Bauch", "mir", "يؤلمني البطن؛ تركيبٌ فعليّ مختلف"],
          },
          {
            label: "gehören",
            cells: ["Das Glas", "dir", "ملكية؛ المثال للمقارنة في البنية لا في معنى الإحساس"],
          },
        ],
      },
      examples: [
        {
          de: "Das Essen schmeckt mir sehr gut.",
          ar: "مذاق الطعام طيّب جداً بالنسبة إليّ. (Das Essen فاعل، وmir في Dativ)",
        },
        {
          de: "Die Nudeln schmecken mir nicht.",
          ar: "لا يعجبني مذاق المعكرونة. (فاعل جمع، لذلك schmecken)",
        },
        {
          de: "Hat es Ihnen geschmeckt? – Ja, ausgezeichnet, danke!",
          ar: "هل راق لكم مذاق الطعام؟ — نعم، ممتاز، شكراً!",
        },
        {
          de: "Das Restaurant gefällt mir, aber das Essen schmeckt mir nicht.",
          ar: "يعجبني المطعم، لكن مذاق الطعام لا يعجبني.",
        },
        {
          de: "Passt Ihnen ein Tisch am Fenster?",
          ar: "هل تناسبكم طاولة عند النافذة؟ (بحسب سياق الاختيار)",
        },
        {
          de: "Wie schmeckt dir die Suppe? – Sie ist ein bisschen salzig.",
          ar: "كيف مذاق الشوربة بالنسبة إليك؟ — مالحة قليلاً.",
        },
        {
          de: "Uns hat das Schnitzel sehr gut geschmeckt.",
          ar: "كان مذاق الشنيتسل طيباً جداً بالنسبة إلينا. (Perfekt مع haben)",
        },
        {
          de: "Der Nachtisch hat allen geschmeckt.",
          ar: "أعجبت الحلوى الجميع من حيث المذاق. (allen في Dativ)",
        },
      ],
      comparisonWithArabic:
        `في **«أعجبني الطعام»** الطعام فاعلٌ، والشخص مضمَّن في الضمير **ـني** وفق تحليل العربية. وفي **Das Essen schmeckt mir** الطعام فاعل، و**mir** في Dativ وفق قواعد الألمانية. يمكن أن تساعد المقارنة في ملاحظة من يقوم بالدور الدلالي في الجملة، لكنها لا تجعل Dativ الألمانية مقابلاً مباشراً لـ«الجرّ» العربي ولا تنقل علامة حالة من لغة إلى أخرى.

انتبه أيضاً إلى المعنى: **Ich schmecke die Suppe** يمكن أن تصف التذوق، فلا تُعدّ خطأً في ذاتها؛ أما **Die Suppe schmeckt mir gut** فتصف المذاق بالنسبة إلى الشخص. و**gefallen** أوسع من الإعجاب البصري، بينما يحدد السياق أيّ معنى من معاني **passen** هو المقصود.`,
      eselsbruecke:
        "في المثال **Das Essen schmeckt mir gut** اسأل: ما الفاعل الذي يحدد تصريف الفعل؟ **Das Essen**. ومن الشخص المعني بالمذاق؟ **mir** في Dativ. لا تستنتج من المثال قاعدةً لكل استعمالات الفعل.",
      commonMistakes: [
        {
          wrong: "Ich schmecke das Essen. (إذا كان المقصود أن مذاقه طيب لي)",
          right: "Das Essen schmeckt mir gut.",
          whyAr:
            "الجملة الأولى صحيحة في معنى «أتذوق الطعام»، لكنها لا تعبّر وحدها عن تقييم مذاقه بالنسبة إليّ. الصيغة الثانية هي المقصودة لهذا المعنى.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Die Nudeln schmeckt mir.",
          right: "Die Nudeln schmecken mir.",
          whyAr:
            "الفاعل Die Nudeln جمع؛ لذلك يأتي الفعل بصيغة الجمع. وجود mir في Dativ لا يغيّر تصريف الفعل.",
          classification: "error",
        },
        {
          wrong: "Das Essen schmeckt mich.",
          right: "Das Essen schmeckt mir.",
          whyAr:
            "في هذا البناء يأتي الشخص المعني بالمذاق في Dativ، لذا نستخدم mir لا mich.",
          classification: "error",
        },
        {
          wrong: "Das Essen gefällt mir sehr gut. (إذا كان المقصود تحديد مذاقه)",
          right: "Das Essen schmeckt mir sehr gut.",
          whyAr:
            "الجملة الأولى صحيحة ويمكن أن تصف الانطباع العام؛ أما schmecken فتحدد معنى المذاق بوضوح. الاختيار دلاليّ لا تصحيحٌ لخطأ نحوي.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Schmeckt es Sie?",
          right: "Schmeckt es Ihnen?",
          whyAr:
            "في هذا السؤال الرسمي يأتي الضمير Ihnen بصيغة Dativ؛ لا نضع Sie في هذا الموضع.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "ما سبق عن Dativ وهذه الأفعال",
        content:
          `| الدرس | ما يظهر فيه | صلته بهذا القسم |
|---|---|---|
| A1-04 | Dativ مكاني، مع ذكر gefallen/passen ضمن أمثلة أفعال تأخذ هذه الصيغة | تعرض سابق، لا بداية التعلّم |
| A1-06 | مثال **Können Sie mir helfen?** | سبق ظهور ضمير Dativ في جملة |
| A1-08 | تدريب سياقي على gefallen/passen/stehen في الملابس | مراجعة للمعاني والبنى بحسب السياق |
| A2-02 | fehlen وwehtun في سياق الطبيب | أمثلة سابقة مختلفة المعنى |
| A2-03 | schmecken، مع مراجعة gefallen/passen | التركيز هنا على المذاق واتفاق الفعل مع الفاعل |
| A2-09 | Dativ مع أسماء وضمائر وأفعال مختارة | معالجة لاحقة أوسع؛ لا ندّعي أن هذا أول تعرض أو أن درساً واحداً يحصي النظام كله |`,
      },
    },
    {
      id: "t3",
      titleAr: "عبارات ومواقف مختارة في المطعم",
      titleDe: "Im Restaurant: ausgewählte Situationen und Redemittel",
      explanationAr:
        `يعرض هذا القسم عباراتٍ يمكن استعمالها في مواقف مطعم محددة، لا مساراً إلزامياً لكل زيارة. قد تطلب لافتة في مكان ما الانتظار أو يرافقك موظف إلى الطاولة؛ اتبع التعليمات المكتوبة أو اسأل عند عدم التأكد.

تختلف خطوات الطلب بين الحوارات نفسها: في قصة القراءة تأتي المشروبات أولاً، بينما يسأل حوار الاستماع عن اختيار الطعام ثم عن الشراب. هذا اختلاف ممكن، لا تناقضٌ نحوي ولا قاعدة عن ترتيب الخدمة. وتظهر في القوائم كلمات مثل **Vorspeise** (مقبّلات)، و**Hauptgericht** (طبق رئيس)، و**Beilage** (طبق جانبي)، و**Nachtisch/Nachspeise** (حلوى)؛ وهي أسماء لأقسام أو أطباق، وليست ترتيباً واجباً.

يمكن أن تسمع **Stilles Wasser oder mit Kohlensäure?** للسؤال عن ماء بلا غاز أو فوّار؛ و**ein stilles Wasser** لا يحدد وحده إن كان المقصود ماء الصنبور. إذا أردت ماء الصنبور فاسأل **Haben Sie Leitungswasser?**؛ واسأل المكان عن التوفر والسعر. مصدر جودة ماء الصنبور لا يحدد سياسة المطعم.

من العبارات العملية: **Die Rechnung, bitte** لطلب الحساب، و**Zusammen oder getrennt?** سؤالٌ عن طريقة الحساب إذا طُرح في ذلك الموقف. يمكن الإجابة **Zusammen, bitte** أو **Getrennt, bitte**. لا نستنتج من السؤال أو من قصة واحدة قاعدةً وطنية أو واجبة.

وعن الإكرامية، يذكر دليل برلين السياحي ممارسات محلية: يصفها بأنها اختيارية، ويعرض 5–10% كمبلغ مناسب في كثير من المقاهي ذات الجلوس والمطاعم غير الرسمية في برلين، كما يذكر وجود علب إكرامية في بعض الحانات. هذا إرشاد محلي لا وصفٌ ملزم لكل مكان في ألمانيا. في المثال النقدي **Das macht 18,50 € – Zwanzig, bitte** يكون المقصود دفع إجمالي عشرين يورو؛ و**Stimmt so** تعني أن يحتفظ البائع بالباقي في هذا السياق.`,
      whyAr:
        "تساعد العبارات النموذجية على فهم حوار قصير والتدرّب على طلب المعلومة أو الحساب. أما الممارسات التجارية والثقافية فتختلف بين المطاعم والمناطق؛ لذلك يقيّد الدرس أمثلته بالمشهد المكتوب ويقدّم الإرشاد الثقافي بوصفه مثالاً موثقاً، لا استعداداً عاماً ولا قاعدة اجتماعية شاملة.",
      table: {
        title: "عبارات محتملة في مشاهد الدرس",
        columns: ["الموقف", "سؤال ممكن", "رد ممكن"],
        rows: [
          {
            label: "عند الوصول",
            cells: ["Haben Sie reserviert?", "Ja, auf den Namen Ben Ali. / Nein, haben Sie noch einen Tisch für zwei frei?"],
          },
          {
            label: "اختيار المشروب",
            cells: ["Was möchten Sie trinken?", "Ein stilles Wasser, bitte."],
          },
          {
            label: "اختيار الطعام",
            cells: ["Was möchten Sie essen?", "Als Hauptgericht hätte ich gern das Schnitzel."],
          },
          {
            label: "بعد الطعام",
            cells: ["Hat es Ihnen geschmeckt?", "Ja, sehr gut, danke! / Ja, ausgezeichnet!"],
          },
          {
            label: "الحساب، إن سُئلت",
            cells: ["Zusammen oder getrennt?", "Zusammen, bitte. / Getrennt, bitte."],
          },
          {
            label: "دفع نقدي في المثال",
            cells: ["Das macht 18,50 €.", "Zwanzig, bitte. / Stimmt so."],
          },
        ],
      },
      examples: [
        {
          de: "Haben Sie noch einen Tisch für zwei Personen frei?",
          ar: "هل لديكم طاولة متاحة لشخصين؟",
        },
        {
          de: "Ich habe einen Tisch auf den Namen Ben Ali reserviert.",
          ar: "حجزتُ طاولةً باسم بن علي.",
        },
        {
          de: "Stilles Wasser oder mit Kohlensäure?",
          ar: "ماء بلا غاز أم فوّار؟ (سؤال عن نوع الماء)",
        },
        {
          de: "Als Vorspeise hätte ich gern die Suppe.",
          ar: "كمقبّلات أودّ الشوربة.",
        },
        {
          de: "Guten Appetit! – Danke, gleichfalls!",
          ar: "بالهناء! — شكراً، وأنت كذلك! (إذا كان الآخر يتناول الطعام أيضاً)",
        },
        {
          de: "Zusammen oder getrennt? – Getrennt, bitte.",
          ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة من فضلك.",
        },
        {
          de: "Das macht 18,50 €. – Zwanzig, bitte.",
          ar: "الحساب ١٨٫٥٠. — عشرون من فضلك. (إجمالي المبلغ في هذا المثال)",
        },
        {
          de: "Entschuldigung, der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?",
          ar: "عذراً، السمك جافّ للأسف إلى حدّ ما. هل يمكن أن تنقلوا ذلك إلى المطبخ من فضلكم؟",
        },
      ],
      comparisonWithArabic:
        `تعرض هذه العبارات وسائل السؤال عن الطاولة والطلب والحساب، ولا تفترض أن العادات في بلدٍ أو أسرةٍ عربية واحدة. لا يلزم أن يتبع كل مطعم ترتيباً واحداً، ولا أن يُطلب ماء الصنبور أو تُقسّم الفاتورة أو تُعطى الإكرامية بالطريقة نفسها في كل مكان.

**Guten Appetit!** تهنئةٌ بالوجبة؛ يمكن الرد **Danke**، أو **Danke, gleichfalls** إذا كان المتحدث الآخر يأكل أيضاً. و**Zusammen oder getrennt?** سؤالٌ عن طريقة الحساب عند طرحه، لا دليلٌ على قاعدة عامة بشأن الضيافة.

في دليل برلين السياحي، الإكرامية اختيارية؛ ويذكر الدليل أمثلة محلية للمبلغ وطريقة إبلاغ النادل بالإجمالي عند الدفع، كما يذكر علب الإكرامية في بعض الحانات. لذلك لا نحوّل صيغة **Zwanzig, bitte** إلى قاعدة عن كل المطاعم، ولا نحكم على طريقة دفع أخرى بأنها خطأ لغوي أو اجتماعي.`,
      eselsbruecke:
        "احفظ العبارة مع موقفها: **Die Rechnung, bitte** لطلب الحساب؛ أمّا ترتيب الطلب، وتقسيمه، والإكرامية فتتفاوت بحسب المكان.",
      commonMistakes: [
        {
          wrong: "In Deutschland werden Gäste in jedem Restaurant platziert.",
          right: "Die Abläufe variieren; folgen Sie einer vorhandenen Beschilderung oder fragen Sie freundlich.",
          whyAr:
            "هذه عبارة ثقافية مطلقة غير مسندة. الانتظار مناسب إذا دعت إليه لافتة أو تعليمات المكان؛ لا نعممه على كل المطاعم.",
          classification: "unverified-claim",
        },
        {
          wrong: "In jedem Restaurant kommen die Getränke vor dem Essen.",
          right: "Die Reihenfolge kann variieren; die beiden Dialoge hier zeigen unterschiedliche Abläufe.",
          whyAr:
            "القصة تقدّم المشروبات أولاً، بينما يبدأ حوار الاستماع باختيار الطعام؛ لا يثبت أي منهما ترتيباً عاماً.",
          classification: "unverified-claim",
        },
        {
          wrong: "Ein Wasser bedeutet immer kostenloses Leitungswasser.",
          right: "Ein stilles Wasser, bitte. / Haben Sie Leitungswasser?",
          whyAr:
            "العبارة الأولى لا تحدد وحدها ماء الصنبور أو سياسة السعر؛ إذا كان ذلك مهماً فاسأل بوضوح.",
          classification: "unverified-claim",
        },
        {
          wrong: "Getrennte Rechnungen sind in Deutschland immer die übliche Wahl.",
          right: "Zusammen, bitte. / Getrennt, bitte.",
          whyAr:
            "العبارتان خياران لغويان صحيحان؛ لا يثبت السؤال أو هذا المثال عادةً واحدةً لكل المجموعات والمطاعم.",
          classification: "unverified-claim",
        },
        {
          wrong: "Man muss in jedem deutschen Restaurant 10 Prozent Trinkgeld geben und es immer mündlich bezahlen.",
          right: "Der Berliner Ratgeber beschreibt Trinkgeld als freiwillig; Bräuche und Methoden variieren.",
          whyAr:
            "التعميم الإلزامي لا يسنده المصدر: دليل برلين يصف الإكرامية بأنها اختيارية، ويخصّص مقداراً وطريقةً بسياقات محلية؛ ويذكر علب الإكرامية في بعض الحانات.",
          classification: "unverified-claim",
        },
      ],
      relatedRuleComparison: {
        title: "مواقف الخدمة: عبارات قابلة للتكييف",
        content:
          "في A2-01 دُرّبت صيغ شكوى مهذّبة، وهنا يظهر مثال عن طعام جاف: **Der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?** يمكن تغيير تفاصيل الطلب وفق المشكلة الفعلية. أمّا خطوات الخدمة—الجلوس، وتوقيت الطلب، ونوع الماء، وتقسيم الفاتورة، والإكرامية—فلا تُعامل كقواعد ثابتة؛ اسأل عند الحاجة واتبع تعليمات المكان.",
      },
    },
    {
      id: "t4",
      titleAr: "صفات الطعم والكميات وعبارة etwas Warmes",
      titleDe: "Geschmack, Mengen und etwas Warmes",
      explanationAr:
        `تصف هذه الكلمات أبعاداً مختلفة للطعام: **süß** حلو، و**sauer** حامض، و**bitter** مُرّ، و**salzig** مالح. أمّا **scharf** فيصف الطعم الحارّ/اللاذع، و**warm/heiß** يصفان حرارة الطعام أو الشراب.

قارن **Die Suppe ist sehr salzig** (الشوربة مالحة جداً) بـ**Die Suppe ist mir zu salzig** (ملوحتها أكثر مما أراه مناسباً). كلمة **zu** تعبّر عن تجاوز حدّ المتكلم، لكنها لا تطلب تلقائياً استبدال الطبق؛ إذا أردت طلب تغيير فقل ذلك صراحةً.

في **Ich möchte etwas Warmes essen** استُعملت الصفة اسماً بعد **etwas**؛ لذلك تبدأ بحرف كبير وتأتي هنا بنهاية **-es**. هذه ملاحظة عن هذا التركيب، لا شرح كامل لتصريف الصفات. والجملة **Ich möchte etwas warm essen** سليمة أيضاً في معنى «أريد أن آكل شيئاً وهو دافئ»؛ يختلف تركيبها ومعناها عن اختيار «شيء دافئ».

للكميات، نقول **zwei Tassen Kaffee** لأننا نعدّ فنجانين/كوبين، و**zwei Gläser Wasser** عندما نتحدث عن كأسين قابلين للعدّ. يتبع الجمع هنا عدد الأشياء المعدودة، لا جنس الاسم. وتختلف صيغة وحدة القياس في بعض التراكيب: يسجل Duden استعمال **zwei Glas Wein** في سياق كمية/طلب مشروب، فلا نعمّم قاعدة **Gläser** على كل عبارات القياس. ويمكن أن تقول عن شرابين من التفاح: **zwei Apfelschorlen**، أو **zwei Gläser Apfelschorle**.`,
      whyAr:
        "يعالج القسم مفردات ووحدات معدودة محددة يحتاجها المتعلم في القائمة والطلب، ويقارن بين عبارتين صحيحتين عند اختلاف التركيب. لا يدّعي تعليم نظام الصفات أو وحدات القياس الألماني كاملاً؛ كما يفصل بين الطعم وحرارة الطعام لتقليل الالتباس.",
      table: {
        title: "وصف الطعم والحرارة في أمثلة قصيرة",
        columns: ["الكلمة", "المعنى المقصود", "مثال", "ملاحظة"],
        rows: [
          {
            label: "süß",
            cells: ["حلو", "Der Nachtisch ist süß.", "وصف للطعم"],
          },
          {
            label: "sauer",
            cells: ["حامض", "Die Zitrone schmeckt sauer.", "وصف للطعم"],
          },
          {
            label: "bitter",
            cells: ["مُرّ", "Der Kaffee schmeckt bitter.", "وصف للطعم"],
          },
          {
            label: "salzig",
            cells: ["مالح", "Die Suppe ist mir zu salzig.", "zu salzig يتضمن تقديراً بأنه أكثر من المناسب للمتكلم"],
          },
          {
            label: "scharf",
            cells: ["حارّ/لاذع في الطعم", "Das Curry ist sehr scharf.", "ليس وصفاً لدرجة الحرارة هنا"],
          },
          {
            label: "warm / heiß",
            cells: ["دافئ / ساخن", "Der Tee ist noch heiß.", "وصف لدرجة الحرارة"],
          },
        ],
      },
      examples: [
        {
          de: "Der Kaffee ist mir zu bitter.",
          ar: "القهوة مُرّة أكثر مما أفضّل.",
        },
        {
          de: "Das Wasser ist noch warm.",
          ar: "الماء ما زال دافئاً. (حرارة، لا طعم حار)",
        },
        {
          de: "Die Suppe ist sehr salzig, aber nicht zu salzig für mich.",
          ar: "الشوربة مالحة جداً، لكنها ليست أكثر من المناسب لي.",
        },
        {
          de: "Das Curry ist scharf, aber nur lauwarm.",
          ar: "الكاري حارّ في الطعم، لكنه فاتر فقط. (وصفان مختلفان)",
        },
        {
          de: "Ich möchte etwas Warmes essen.",
          ar: "أودّ أن آكل شيئاً دافئاً. (Warmes اسم مشتق من صفة)",
        },
        {
          de: "Ich möchte etwas warm essen.",
          ar: "أودّ أن آكل شيئاً وهو دافئ. (warm تصف طريقة/حالة الأكل في هذا السياق)",
        },
        {
          de: "Wir bestellen zwei Tassen Kaffee und zwei Gläser Wasser.",
          ar: "نطلب فنجانين من القهوة وكأسين من الماء.",
        },
        {
          de: "Für zwei Personen: zwei Apfelschorlen oder zwei Gläser Apfelschorle.",
          ar: "لشخصين: شرابا تفاح مخففان بالماء الغازي، أو كأسان من شراب التفاح المخفف.",
        },
      ],
      comparisonWithArabic:
        `تظهر في وصف الطعام فروقٌ ينبغي أن يبيّنها السياق: **warm/heiß** لدرجة الحرارة في الأمثلة، و**scharf** للطعم الحارّ/اللاذع. قد تختلف طريقة تقسيم هذه المعاني أو ألفاظها بين اللهجات العربية؛ لا نفترض مقابلةً كلمةً بكلمة.

**sehr salzig** يصف شدة الملوحة، و**zu salzig** يضيف حكماً بأنّها تجاوزت ما يناسب المتكلم. لكنّ هذه العبارة وحدها لا تحدد ما إذا كان سيطلب التبديل أو سيأكل الطبق أو سيتركه.

في **etwas Warmes** صفةٌ مستعملة اسماً فتُكتب بحرف كبير؛ أما **etwas warm essen** فتركيب سليم بمعنى مختلف. يقتصر المثال على هاتين الصيغتين ولا يشرح كل نهايات الصفات. و**zwei Tassen** و**zwei Gläser** في أمثلتنا جمعٌ لأشياء معدودة؛ في بعض وحدات الشراب ترد صيغة أخرى مثل **zwei Glas Wein**، لذا يعتمد الاختيار على التركيب المقصود لا على جنس الاسم وحده.`,
      eselsbruecke:
        "اسأل أولاً: أصف حرارة الطبق أم مذاقه؟ ثمّ حدّد هل تعدّ الوعاء نفسه (**zwei Gläser**) أم تستعمل تركيباً لوحدة مشروب؛ فالسياق مهم.",
      commonMistakes: [
        {
          wrong: "Die Suppe ist scharf. (إذا كان المقصود أنها ساخنة الحرارة)",
          right: "Die Suppe ist heiß. / Die Suppe ist warm.",
          whyAr:
            "scharf يصف الطعم الحارّ/اللاذع في هذا السياق، لا درجة الحرارة. قد تكون الشوربة حارة الطعم وساخنة الحرارة معاً إذا قيل الأمران.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Die Suppe ist sehr salzig. (إذا كان المقصود أنها تجاوزت ما أستسيغه)",
          right: "Die Suppe ist mir zu salzig.",
          whyAr:
            "sehr يصف درجة عالية، لكنه لا يعني وحده «أكثر مما يناسبني»؛ تضيف zu هذا التقييم. لا تستلزم الجملة طلب الاستبدال.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich möchte etwas warmes essen.",
          right: "Ich möchte etwas Warmes essen.",
          whyAr:
            "في هذا التركيب استُعملت Warmes اسماً بعد etwas، فتبدأ بحرف كبير. أمّا etwas warm essen فتركيب سليم في معنى آخر.",
          classification: "error",
        },
        {
          wrong: "Auf dem Tisch stehen zwei Glas.",
          right: "Auf dem Tisch stehen zwei Gläser.",
          whyAr:
            "هنا نعدّ كأسين ماديين على الطاولة، ولذلك نستخدم جمع Glas: Gläser. هذا لا ينفي ورود zwei Glas Wein بوصفه تركيب كمية في استعمال آخر.",
          classification: "error",
        },
        {
          wrong: "Das ist zwei Tassen Kaffee.",
          right: "Das sind zwei Tassen Kaffee. / Ich bestelle zwei Tassen Kaffee.",
          whyAr:
            "مع الفاعل الجمعي zwei Tassen يأتي الفعل بصيغة الجمع sind؛ وجمع Tasse هنا لعدّ أكواب القهوة، لا بسبب جنس الاسم.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "الصفات المستعملة اسماً ووحدات القياس",
        content:
          "توضح مراجع IDS Grammis أن الصفة التي تستعمل اسماً تُكتب بحرف كبير، وتعرض مراجع التصريف نهايات تتغير بحسب السياق. في **etwas Warmes** نرى صيغةً واحدة بعد **etwas**؛ لا نستنتج منها أن جميع الصفات تنتهي **-es**. كما يورد Duden **Gläser** لجمع كؤوس الشرب، ويذكر **zwei Glas Wein** في استعمال قياسي محدد؛ لذلك يجب ربط صيغة الجمع بنوع المعدود والتركيب.",
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
      "Zuerst kamen nur die Getränke. „Was möchten Sie trinken?“ – „Zweimal stilles Wasser und zwei Apfelschorlen, bitte.“ Erst danach hat er die Speisekarte gebracht und gefragt, was wir essen möchten. Als Vorspeise hätten wir gern die Kürbissuppe, als Hauptgericht zweimal das Schnitzel mit Pommes und zweimal den Fisch.",
      "Das Essen hat fast allen sehr gut geschmeckt. Nur mein Bruder war nicht ganz zufrieden: Sein Fisch war leider etwas trocken. Er hat den Kellner gerufen und höflich gesagt: „Entschuldigung, der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?“ Der Kellner hat sich entschuldigt und ihm einen neuen Teller gebracht.",
      "Nach dem Hauptgericht wollte niemand mehr etwas Süßes. Wir waren alle satt. „Hat es Ihnen geschmeckt?“, fragte der Kellner. „Ja, ausgezeichnet, danke!“",
      "Dann kam die Frage, die ich am Anfang nie verstanden habe: „Zusammen oder getrennt?“ An diesem Abend haben wir getrennt gezahlt. Mein Anteil war 21,40 Euro. Ich habe freiwillig auf 23 Euro aufgerundet und gesagt: „Dreiundzwanzig, bitte.“ So gab ich 1,60 Euro Trinkgeld. Der Kellner hat sich bedankt, und wir sind zufrieden nach Hause gegangen.",
    ],
    paragraphsAr: [
      "السبت الماضي أردنا أخيراً أن نخرج للعشاء من جديد. كانت زوجتي قد اتّصلت يوم الأربعاء وحجزت طاولةً لأربعة أشخاص باسم حدّاد. وكانت فكرةً صائبة، فقد كان نُزُل الأسد ممتلئاً تماماً في المساء.",
      "وصلنا في السابعة. عند المدخل كانت لافتة: «انتظروا من فضلكم، سيُجلسكم أحدُنا». في السابق كنتُ سأجلس ببساطة، لكنّي صرتُ أعرف الآن كيف تجري الأمور هنا. وبعد دقيقتين جاء النادل وقادنا إلى طاولةٍ جميلة عند النافذة.",
      "في البداية جاءت المشروبات وحدها. «ماذا تحبّون أن تشربوا؟» — «ماءان بلا غاز وشرابا تفاح مخففان بالماء الغازي من فضلك». وبعد ذلك أحضر قائمة الطعام وسألنا عمّا نريد أن نأكل. كمقبّلات أردنا شوربة القرع، وكطبق رئيس شنيتسلين مع البطاطا وسمكتين.",
      "كان مذاق الطعام طيباً جداً لدى الجميع تقريباً. غير أنّ أخي لم يكن راضياً تماماً: كانت سمكته للأسف جافةً بعض الشيء. نادى النادل وقال بأدب: «عذراً، السمك جاف إلى حد ما للأسف. هل يمكن أن تنقل ذلك إلى المطبخ من فضلك؟» فاعتذر النادل وأحضر له طبقاً جديداً.",
      "وبعد الطبق الرئيس لم يُرد أحدٌ شيئاً حلواً. كنّا كلّنا شباعاً. «هل راق لكم مذاق الطعام؟» سأل النادل. «نعم، ممتاز، شكراً!»",
      "ثمّ جاء السؤال: «معاً أم كلٌّ على حدة؟» دفعنا في تلك الأمسية كلٌّ على حدة. كان نصيبي ٢١٫٤٠ يورو. قرّبتُ المبلغ طوعاً إلى ٢٣ يورو وقلت: «ثلاثة وعشرون من فضلك». بذلك أعطيتُ إكراميةً قدرها ١٫٦٠ يورو. شكرني النادل، وعدنا إلى البيت راضين.",
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
        noteAr: "صيغة مبنيّة للمجهول؛ واللافتة في القصة تطلب من الزبائن الانتظار",
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
        noteAr: "قد تردّ على القائمة أيضاً كلمتا Hauptgericht وNachtisch؛ Beilage طبق جانبي",
      },
      {
        de: "das Hauptgericht",
        ar: "الطبق الرئيس",
      },
      {
        de: "geschmeckt (schmecken)",
        ar: "كان مذاقه (لشخص) بحسب السياق",
        noteAr: "في مثال الدرس Essen في Nominativ وضمير الشخص في Dativ الألمانية",
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
          "في هذه القصة توجّه اللافتة الزبائن إلى الانتظار، ثمّ يأتي النادل ويقود المجموعة إلى طاولة.",
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
          "هذا ما حدث في القصة: يذكر النص المشروبات أولاً ثمّ قائمة الطعام؛ لا يقرر ترتيباً عاماً للخدمة.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Wie hat der Bruder den trockenen Fisch angesprochen?",
        instructionAr: "اقرأ الفقرة الرابعة: كيف أشار الأخ إلى جفاف السمك؟",
        options: [
          "Höflich: „Entschuldigung … Könnten Sie das bitte an die Küche weitergeben?“",
          "Er hat den Kellner beschimpft.",
          "Er hat nur nach der Rechnung gefragt.",
          "Er hat den Fisch als ausgezeichnet gelobt.",
        ],
        correctIndex: 0,
        explanation:
          "يذكر النص أنه نادى النادل بأدب، واستعمل Entschuldigung وKönnten Sie … bitte لطلب نقل الملاحظة إلى المطبخ.",
        errorType: "vocabulary",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Das Essen ___ allen sehr gut geschmeckt. Welche Form passt?",
        instructionAr:
          "أكمل الفعل في الجملة: راعِ فاعلها النحوي، ولا تخلط بينه وبين ضمير Dativ.",
        options: ["hat", "haben", "habe", "hast"],
        correctIndex: 0,
        explanation:
          "Das Essen هو الفاعل المفرد، لذلك نستخدم hat؛ وallen ضمير جمع في Dativ. جملة Alle haben das Essen geschmeckt ممكنة في معنى «تذوّق الجميع الطعام»، لكنها تعني شيئاً آخر وليست تصحيحاً لهذه الجملة.",
        errorType: "conjugation",
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
          "في القصة الحساب 21,40 يورو والمجموع بعد التقريب 23؛ أي إكرامية قدرها 1,60 يورو في هذا المثال.",
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
        ar: "هل راق مذاق الطعام لكم؟ — نعم، ممتاز!",
      },
      {
        de: "Zusammen oder getrennt? – Getrennt, bitte.",
        ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة",
      },
      {
        de: "Dreiundzwanzig, bitte.",
        ar: "ثلاثة وعشرون من فضلك (صيغة الدفع في مشهد القصة)",
      },
    ],
    discussionAr:
      "احكِ عن أمسية في مطعم في ثماني جمل على الأقل. استعمل صيغتين مختلفتين من (hätte gern · möchte · nehme) في سياقين يناسبان المعنى، وجملةً بـschmecken يكون فيها الطعام فاعلاً، وصفةً للطعم. ثمّ راجع تصريف الفعل وحالة ضمير الشخص.",
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
            de: "Sehr gerne.",
            ar: "بكل سرور.",
          },
          {
            speaker: "Kellner (nach dem Essen)",
            de: "Wie hat es Ihnen geschmeckt?",
            ar: "كيف كان مذاق الطعام بالنسبة إليكم؟",
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
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: [
          "Spaghetti, einen Salat und ein Wasser",
          "Spaghetti und einen Salat",
          "Pizza und Wasser",
          "Gemüseteller",
        ],
        correctIndex: 0,
        explanation:
          "طلب سامي Spaghetti وسلطةً وماءً؛ الإجابة تجمع الطعام والشراب المذكورين.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
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
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
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
        ar: "يكون مذاقه (بحسب السياق)",
        note: "schmecken [ˈʃmɛkən]: sch = [ʃ]، وck تمثّل [k] بعد حركة قصيرة.",
      },
      {
        de: "lecker",
        ar: "لذيذ",
        note: "lecker [ˈlɛkɐ]: e في المقطع الأول [ɛ] قصيرة، وck تمثّل [k] بعد حركة قصيرة.",
      },
      {
        de: "die Küche",
        ar: "المطبخ",
        note: "Küche [ˈkʏçə]: ü [ʏ] صوت أمامي مدوّر قصير؛ وch هنا [ç] (ich-Laut)، لا خ [x] ولا ش عربية حرفياً.",
      },
      {
        de: "die Suppe",
        ar: "الحساء",
        note: "Suppe [ˈzʊpə]: s في البداية [z]، وu [ʊ] قصيرة؛ pp مكتوبتان لكن النطق [p] واحدة بعد حركة قصيرة.",
      },
      {
        de: "die Rechnung",
        ar: "الحساب/الفاتورة",
        note: "Rechnung [ˈʁɛçnʊŋ]: ch بعد e هو [ç] (ich-Laut)، لا يطابق خ [x] ولا ش العربية حرفياً.",
      },
      {
        de: "bestellen",
        ar: "يطلب",
        note: "bestellen [bəˈʃtɛlən]: المقطع الأول مخفّف [bə]، وe المنبورة [ɛ] قصيرة.",
      },
    ],
    tip:
      "في Rechnung يُنطق ch بصوت [ç] (ich-Laut)، وهو ليس خ العربية الخلفية [x] ولا ش العربية. في Küche الصوت نفسه؛ ويمكن تقريب [ç] بوصفه احتكاكاً أمامياً قرب موضع نطق الياء. أما ö في möchte [ˈmœçtə] وkönnen [ˈkœnən] فهو صوت أمامي مدوّر، لا تمثّله كتابة عربية واحدة بدقة.",
    shadowing: [
      {
        de: "Ich möchte bitte einen Tee.",
        ar: "أود شاياً من فضلك.",
        tip: "في möchte: ö [œ] صوت أمامي مدوّر؛ وch هو [ç]، لا خ عربية مطابقة.",
      },
      {
        de: "Die Speisekarte, bitte!",
        ar: "القائمة من فضلك!",
        tip: "في أول Speisekarte، sp تُنطق [ʃp] تقريباً؛ وei تُنطق [aɪ̯]. والكتابة العربية تقريبٌ لا نقل صوتي دقيق.",
      },
      { de: "Das schmeckt lecker!", ar: "هذا لذيذ!", tip: "schmeckt = شمِكْت" },
      {
        de: "Können Sie mir helfen?",
        ar: "هل يمكنكم مساعدتي؟",
        tip: "können [ˈkœnən]: ö [œ] صوت أمامي مدوّر؛ استمع وحاول تقريب وضع الشفتين.",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr:
        "اكتب طلباً كاملاً بـIch möchte، واختر عبارةً واحدة من الأسماء المحددة في السؤال. إن أضفت bitte فضعها بعد möchte أو في آخر الجملة.",
      prompt:
        "Was möchtest du bestellen? Verwende genau einen Ausdruck: eine Pizza / einen Salat / die Suppe / Wasser. (Schreibe einen vollständigen Satz mit Ich möchte ...)",
      acceptedAnswers: [
        "Ich möchte eine Pizza.",
        "Ich möchte bitte eine Pizza.",
        "Ich möchte eine Pizza, bitte.",
        "Ich möchte einen Salat.",
        "Ich möchte bitte einen Salat.",
        "Ich möchte einen Salat, bitte.",
        "Ich möchte die Suppe.",
        "Ich möchte bitte die Suppe.",
        "Ich möchte die Suppe, bitte.",
        "Ich möchte Wasser.",
        "Ich möchte bitte Wasser.",
        "Ich möchte Wasser, bitte.",
      ],
      sampleAnswer: "Ich möchte bitte eine Pizza.",
      explanation:
        "استخدم العبارة المختارة كما وردت في القائمة: Ich möchte + اسم الطلب، ويمكن وضع bitte بعد möchte أو في نهاية الجملة.",
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
        "الإجابات المطلوبة هنا: ich möchte، du möchtest، wir möchten، وSie möchten (للمخاطب المفرد أو الجمع بصيغة الاحترام).",
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
      instructionAr: "اختر التصريف مع المخاطب الرسمي Sie، سواء أخاطبتَ شخصاً واحداً أو أكثر:",
      questionDe: "___ Sie mir helfen?",
      options: ["Können", "Kann", "Kannst", "Könnt"],
      correctIndex: 0,
      explanation:
        "مع Sie الرسمية، سواء خاطبتَ شخصاً واحداً أو أكثر، نستخدم können. لا تدلّ صيغة المخاطبة الرسمية وحدها على أن المخاطَبين جمع.",
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
      explanation: "أربع مفردات مرتبطة بمشهد المطعم في هذا الدرس.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة في الصيغة التي تبدأ بـ Ich:",
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
      instructionAr: "اطلب الحساب بإحدى الصيغ المناسبة للمشهد:",
      prompt: "(النادل اقترب — اطلب الحساب)",
      acceptedAnswers: [
        "Die Rechnung, bitte!",
        "Ich möchte zahlen, bitte!",
        "Ich möchte bitte zahlen.",
        "Ich hätte gern die Rechnung, bitte.",
        "Ich möchte bitte die Rechnung.",
        "Könnten Sie mir bitte die Rechnung bringen?",
        "Könnte ich bitte die Rechnung haben?",
      ],
      sampleAnswer: "Die Rechnung, bitte!",
      explanation:
        "Die Rechnung, bitte! وIch möchte zahlen وIch hätte gern die Rechnung وKönnten Sie mir bitte die Rechnung bringen? صيغ ممكنة لهذا الطلب؛ يتغير الاختيار بحسب الموقف.",
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
      type: "multiple-choice",
      instructionAr: "اختر معنى الجملة في هذا السياق:",
      questionDe: "Die Suppe schmeckt mir sehr gut.",
      questionAr: "ماذا تعني الجملة؟",
      options: [
        "مذاق الشوربة طيب جداً بالنسبة إليّ.",
        "أنا أتذوق الشوربة الآن.",
        "الشوربة تذوقني جيداً.",
        "أعجبتني الشوربة من ناحية شكلها فقط.",
      ],
      correctIndex: 0,
      explanation:
        "Die Suppe schmeckt mir sehr gut تصف المذاق بالنسبة إلى الشخص. أمّا Ich schmecke die Suppe فيمكن أن تعني «أتذوق الشوربة»، وهي جملة صحيحة بمعنى آخر.",
      errorType: "vocabulary",
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
      instructionAr: "رتّب الكلمات في صيغة ممكنة لتقول إنّ مذاق المعكرونة لا يروق لك:",
      tokens: ["Die", "Nudeln", "schmecken", "mir", "nicht", "."],
      correctSentence: "Die Nudeln schmecken mir nicht.",
      acceptedSentences: ["Mir schmecken die Nudeln nicht."],
      explanation:
        "الترتيب النموذجي هنا يبدأ بالفاعل: Die Nudeln schmecken mir nicht. ويصحّ أيضاً تقديم mir: Mir schmecken die Nudeln nicht؛ يتبع الفعل المصرف في الجملة الخبرية أحد عناصر المقدّمة.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr:
        "حوّل الجملة إلى البنية الألمانية الصحيحة (الطعام فاعلاً).",
      prompt:
        "مثّل أن الكعكة تروق لك باستخدام gefallen (der Kuchen)، لا بوصف مذاقها.",
      acceptedAnswers: ["Der Kuchen gefällt mir.", "Mir gefällt der Kuchen."],
      sampleAnswer: "Der Kuchen gefällt mir.",
      explanation:
        "في هذا المثال Der Kuchen هو الفاعل وmir في Dativ. استُخدم gefallen للانطباع المقصود، لا بوصفه مرادفاً وحيداً لكل معاني الإعجاب.",
      errorType: "case",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr:
        "حدّد الجملة التي تستعمل صيغة التدريب Ich hätte gern؛ المقصود اختيار التركيب، لا ترتيب الصيغ على سلّم ثابت.",
      questionDe: "Welche Formulierung verwendet „Ich hätte gern“ für eine Bestellung?",
      options: [
        "Ich hätte gern einen Kaffee, bitte.",
        "Ich möchte einen Kaffee, bitte.",
        "Ich nehme einen Kaffee.",
        "Ich mag einen Kaffee.",
      ],
      correctIndex: 0,
      explanation:
        "الأولى تستعمل الصيغة المطلوبة. möchte وnehme بديلان صحيحان في سياقات مناسبة، وmag يعبّر هنا عن الميل لا عن طلب واضح؛ لا يعني ذلك أن البدائل الأخرى ممنوعة أو وقحة دائماً.",
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
        "في هاتين الجملتين يتبع الفعل الفاعل النحوي: das Essen مفرد ⟵ schmeckt، وdie Nudeln جمع ⟵ schmecken. ضمير الشخص في Dativ لا يتحكم في التصريف.",
      errorType: "conjugation",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح حالة الضمير في هذا المثال عن المذاق:",
      wrongSentence: "Das Essen schmeckt ich sehr gut.",
      wrongWord: "ich",
      correctWord: "mir",
      options: ["mir", "mich", "ich", "meine"],
      explanation:
        "في هذا المعنى يكون Das Essen فاعلاً، ويأتي الشخص المتأثر بالمذاق في Dativ: mir. المطلوب استبدال الضمير القصير فقط.",
      errorType: "case",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "الشوربة ساخنةٌ جداً. أيّ صفةٍ تصف حرارتها؟",
      questionDe: "Die Temperatur der Suppe ist sehr hoch. Sie ist ...",
      options: ["heiß", "scharf", "warm", "trocken"],
      correctIndex: 0,
      explanation:
        "heiß يصف الحرارة العالية هنا؛ أما scharf فيصف الطعم الحارّ/اللاذع.",
      errorType: "vocabulary",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr:
        "أكمل صيغة المعدود في المثالين؛ في الفراغ الثاني نعدّ كؤوس شرب فعلية، لا كمية مشروب.",
      template:
        "Zwei ___ Kaffee, bitte. · Auf dem Tisch stehen drei leere ___. (Trinkgläser)",
      blanks: [
        {
          correct: "Tassen",
          options: ["Tassen", "Tasse", "Tassens", "Tassenen"],
          errorType: "plural",
        },
        {
          correct: "Gläser",
          options: ["Gläser", "Glas", "Gläsern", "Glases"],
          errorType: "plural",
        },
      ],
      explanation:
        "Tassen جمعٌ للأكواب المعدودة، وGläser جمعٌ للكؤوس الفعلية على الطاولة. هذا لا يضع قاعدةً لكل وحدات القياس؛ فـDuden يورد مثلاً استعمال zwei Glas Wein في سياق كمية مشروب.",
      errorType: "plural",
    },
    {
      id: "e22",
      type: "fill-blank",
      instructionAr:
        "أكمل الصيغة التي تجعل الصفة اسماً بعد etwas؛ لا تختبر هذه المسألة الصيغة الأخرى ذات المعنى المختلف etwas warm essen.",
      template: "Ich möchte etwas ___ essen.",
      blanks: [
        {
          correct: "Warmes",
          options: ["Warmes", "Warm", "Warme", "Warmem"],
          errorType: "grammar",
        },
      ],
      explanation:
        "في هذا التركيب المحدد نقول etwas Warmes: تُكتب الصفة اسماً بحرف كبير وتأتي هنا النهاية -es. والجملة Ich möchte etwas warm essen سليمة أيضاً بمعنى مختلف؛ ليست مشتتاً في هذا السؤال.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "word-ordering",
      instructionAr:
        "رتّب الطلب بالصيغة المستهدفة «hätte gern + المفعول»، وانتبه إلى V2 بعد التقديم:",
      tokens: ["Als", "Vorspeise", "hätte", "ich", "gern", "die", "Suppe"],
      correctSentence: "Als Vorspeise hätte ich gern die Suppe",
      explanation:
        "في هذه الصيغة والجملة الرئيسية، تأتي العبارة المتقدمة Als Vorspeise في الموقع الأول، ثم الفعل المصرف hätte في الموقع الثاني من بنية الجملة، يليه الفاعل ich؛ وتأتي هنا صيغة gern قبل المفعول die Suppe.",
      errorType: "word-order",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ سؤالٍ بجوابه المناسب في هذا المشهد",
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
        "هذه أربعة أزواج سؤال وجواب مأخوذة من مشاهد الدرس؛ ترتيب الخطوات وصياغة الأسئلة يختلفان بحسب الموقف.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "true-false",
      instructionAr: "اقرأ تفاصيل الموقف نفسه ثمّ احكم على العبارات",
      textDe:
        "Herr Haddad sitzt im Gasthaus. Der Kellner fragt: „Hat es Ihnen geschmeckt?“ Herr Haddad antwortet: „Der Fisch war ein bisschen trocken, aber die Suppe war ausgezeichnet.“ Der Kellner entschuldigt sich und bringt dem Bruder einen neuen Teller. Die Rechnung beträgt 21,40 Euro. Herr Haddad rundet freiwillig auf 23 Euro auf und gibt 1,60 Euro Trinkgeld.",
      statements: [
        {
          id: "s1",
          de: "Herr Haddad sagt, dass der Fisch ein bisschen trocken war.",
          ar: "يقول السيد حدّاد إن السمك كان جافاً بعض الشيء.",
          isTrue: true,
          whyAr: "ورد ذلك صراحةً في الحوار.",
        },
        {
          id: "s2",
          de: "Die Suppe war für ihn ausgezeichnet.",
          ar: "كانت الشوربة ممتازةً بالنسبة إليه.",
          isTrue: true,
          whyAr: "قال: „Die Suppe war ausgezeichnet.“",
        },
        {
          id: "s3",
          de: "Herr Haddad gibt in diesem Beispiel 1,60 Euro Trinkgeld.",
          ar: "يعطي السيد حدّاد إكراميةً قدرها ١٫٦٠ يورو في هذا المثال.",
          isTrue: true,
          whyAr: "يذكر النص ذلك صراحةً: الحساب 21,40 والإجمالي 23 يورو.",
        },
        {
          id: "s4",
          de: "Der Kellner hat dem Bruder keinen neuen Teller gebracht.",
          ar: "لم يُحضر النادل طبقاً جديداً للأخ.",
          isTrue: false,
          whyAr: "النص يقول إن النادل اعتذر وأحضر له طبقاً جديداً.",
        },
      ],
      explanation:
        "تحقّق من العبارات مقابل تفاصيل النص؛ مبلغ الإكرامية في هذا الموقف حدث قصصي محدد، لا قاعدة عن كل المطاعم.",
      errorType: "vocabulary",
    },
    {
      id: "e26",
      type: "transformation",
      instructionAr:
        "أعِد صياغة الجملة باستعمال Ich hätte gern؛ المطلوب التدريب على صيغة شائعة أخرى، لا الحكم بأن الأصل خطأ أو وقح دائماً.",
      prompt: "Ich will eine Suppe. → (mit Ich hätte gern …)",
      acceptedAnswers: [
        "Ich hätte gern eine Suppe.",
        "Ich hätte gern eine Suppe",
      ],
      sampleAnswer: "Ich hätte gern eine Suppe.",
      hint: "hätte gern + مفعولٌ منصوب، بلا فعلٍ ثانٍ.",
      explanation:
        "تدرّب هنا على إعادة التعبير بصيغة Ich hätte gern. Ich will eine Suppe صحيحة نحوياً، وقد تبدو أكثر مباشرةً بحسب السياق والنبرة؛ لا يوجد سلّم تهذّب ثابت.",
      errorType: "grammar",
    },
    {
      id: "e27",
      type: "multiple-choice",
      instructionAr: "اختر تصريف passen الذي يوافق الفاعل في هذا المثال:",
      questionDe: "Der Termin ___ mir gut.",
      questionAr: "أي تصريف يلائم الفاعل Der Termin؟",
      options: ["passt", "passen", "passe", "gefallen"],
      correctIndex: 0,
      explanation:
        "Der Termin فاعل مفرد، لذا نقول passt؛ وmir متمّم Dativ لا يغيّر تصريف الفعل. هنا passen بمعنى يناسب/يلائم في هذا السياق.",
      errorType: "conjugation",
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
        wrong: "Das Essen schmeckt mich gut.",
        right: "Das Essen schmeckt mir gut.",
        whyAr: "في هذا المثال التقييمي يأتي الشخص المعني بالمذاق في Dativ: mir.",
      },
      {
        wrong: "Kannst du mich helfen",
        right: "Kannst du mir helfen?",
        whyAr: "helfen يأخذ Dativ: mir وليس mich.",
      },
    ],
    eselsbruecken: [
      "للطلب في المثال: Ich möchte …, bitte. ويمكن اختيار صيغ أخرى بحسب الموقف.",
      "lecker تعني لذيذ: Das schmeckt lecker! مثال ممكن لوصف الطعم.",
    ],
    culturalNote: {
      title: "إكرامية: مثال محلي لا قاعدة عامة",
      content:
        "يذكر دليل برلين السياحي أن الإكرامية اختيارية، ويعرض 5–10% كمبلغ مناسب في كثير من المقاهي ذات الجلوس والمطاعم غير الرسمية في برلين، مع اختلاف الممارسة في الحانات. هذا إرشاد محلي لا نسبة إلزامية ولا قاعدة لكل المطاعم. في مثال نقدي، يمكن تحديد المبلغ الإجمالي بقول «Zwanzig, bitte»؛ وتتبع طريقة الدفع الفعلية تعليمات المكان.",
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
      instructionAr: "ابدأ باسم المطلوب، ثم أضف bitte لصياغة طلب الحساب المختصر:",
      tokens: ["Die", "Rechnung", "bitte", "!"],
      correctSentence: "Die Rechnung, bitte!",
      explanation: "الحساب من فضلك! — طلب مختصر ممكن للحساب.",
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
      explanation: "في هذه الجملة، يأتي nicht قبل الصفة gut: schmeckt nicht gut.",
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
      ar: "أودّ (صيغة شائعة للرغبة أو الطلب)",
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
      ar: "يكون مذاقه (لشخص)؛ ويحدّد السياق إن راق المذاق أم لا",
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
      ar: "يعجبني مذاق الطعام.",
      example: "Das Essen schmeckt mir sehr gut.",
      exampleAr: "الطعام يعجبني كثيراً.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "Wie schmeckt Ihnen ...?",
      ar: "ما مذاق ... بالنسبة إليكم؟",
      example: "Wie schmeckt Ihnen die Suppe?",
      exampleAr: "ما مذاق الحساء بالنسبة إليكم؟",
      level: "A2",
    },
    {
      id: "fc11",
      de: "Ich hätte gern ...",
      ar: "أودّ … (صيغة طلب شائعة؛ hätte صيغة من haben)",
      example: "Ich hätte gern einen Salat, bitte.",
      exampleAr: "أودّ سلطةً من فضلك.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "Ich nehme ...",
      ar: "سآخذ … (اختيار مما سأطلبه)",
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
      ar: "مياه بلا غاز (لا تعني تلقائياً ماء الصنبور)",
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
      ar: "الإكرامية (تختلف أعرافها؛ يذكر دليل برلين المحلي أنها اختيارية)",
      example: "Das macht 21,40. – Dreiundzwanzig, bitte.",
      exampleAr: "الحساب ٢١٫٤٠. — ثلاثة وعشرون من فضلك.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "Stimmt so.",
      ar: "احتفظ بالباقي (في سياق الدفع بالمثال)",
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
      ar: "حارّ/لاذع في الطعم",
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
      ar: "شيء دافئ؛ Warmes اسم مشتق من صفة في هذا المثال",
      example: "Ich möchte etwas Warmes essen.",
      exampleAr: "أودّ أن آكل شيئاً دافئاً.",
      level: "A2",
    },
    {
      id: "fc26",
      de: "Guten Appetit!",
      ar: "بالهناء! يمكن الردّ بـDanke أو gleichfalls بحسب الموقف",
      example: "Guten Appetit! – Danke, gleichfalls!",
      exampleAr: "بالهناء! — شكراً، وأنت كذلك!",
      level: "A2",
    },
  ],

  /* ═══ الوساطة والتفاعل ═══ */
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
      strategyAr: "الاستراتيجية: اربط الردّ بالسؤال، واذكر المشكلة المحددة بوضوح.",
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
          speakerDe: "Ist mit dem Schnitzel alles in Ordnung?",
          speakerAr: "هل كل شيء على ما يرام مع الشنيتزل؟",
          options: [
            {
              de: "Entschuldigung, das Schnitzel ist leider kalt. Können Sie es bitte noch einmal erwärmen?",
              ar: "عذراً، الشنيتزل بارد للأسف. هل يمكنكم تسخينه مرةً أخرى من فضلكم؟",
              best: true,
              replyDe: "Es tut mir leid. Ich kläre das mit der Küche.",
              replyAr: "أعتذر. سأتحقق من الأمر مع المطبخ.",
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

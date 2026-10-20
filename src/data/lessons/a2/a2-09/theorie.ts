/**
 * a2-09 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-09.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
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
  ];

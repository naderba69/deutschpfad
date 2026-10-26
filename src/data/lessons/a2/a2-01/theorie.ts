/**
 * a2-01 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-01.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "عائلات الأفعال القوية — Ablaut ونظامه",
      titleDe: "Starke Verben und ihre Ablautreihen",
      explanationAr:
        "تُعرض الأفعال القوية غالباً بثلاث صور أساسية للحفظ: المصدر وPräteritum وPartizip II، مثل trinken – trank – getrunken. ويُسمّى تناوب حركة الجذر بين بعض هذه الصور Ablaut. تذكر المراجع سبع فئات تقليدية للأنماط، لكنّ هذا تصنيف وصفي يساعد على تنظيم أمثلة؛ ليس خوارزمية تتنبأ بصيغة كل فعل جديد، كما أن بعض الأفعال لها تفاصيل أو صيغ بديلة.\n\n**أمثلة على أنماط شائعة في هذه الكتلة:**\n· **i – a – u:** trinken – trank – getrunken · finden – fand – gefunden · singen – sang – gesungen\n· **ei – ie – ie:** schreiben – schrieb – geschrieben · bleiben – blieb – geblieben · steigen – stieg – gestiegen\n· **ie – o – o:** fliegen – flog – geflogen · verlieren – verlor – verloren · schließen – schloss – geschlossen\n· **e – a – o:** nehmen – nahm – genommen · sprechen – sprach – gesprochen · helfen – half – geholfen\n\nهذه أمثلة منتقاة لا قائمة شاملة، ولا تدّعي أن أربع مجموعات تغطي نسبة ثابتة من مفردات المتعلم. تعلّم الصور الموثقة لكل فعل ولا تستنتج صورة فعل غير معروف من حركة واحدة وحدها.\n\nوتجمع أفعال توصف بأنها مختلطة أو ضعيفة غير منتظمة تغيّر الجذر مع صيغة تنتهي بـ **-t**، مثل denken – dachte – gedacht وbringen – brachte – gebracht وkennen – kannte – gekannt. أمّا wissen – wusste – gewusst فيُعرض بوصفه فعلاً ذا تصريف خاص من فئة Präteritopräsentia، لا ضمن هذه القائمة نفسها، وإن تشابهت نهاية ماضيه مع بعض الأفعال المختلطة. تختلف المراجع في تصنيف بعض الأفعال، لذلك لا نقدّم هنا قائمةً حصرية.\n\n**الفائدة العملية:** قارن صور الفعل لتلاحظ النمط وتستعين به في التذكّر؛ لكن احفظ الفعل بصوره المسجلة، وانتبه إلى أن الأفعال ذات البادئة قد ترث صور الفعل الأساسي مع قواعد مستقلة لموضع ge-.",
      whyAr:
        "التصنيف يصف طريقة تصريف أفعال معينة؛ لا يضمن أن كل فعل يشبهها سيتبع النمط نفسه بلا استثناء. اخترنا هنا أمثلة تعليمية محددة، ويظل الرجوع إلى صورة الفعل في معجم موثوق ضرورياً، ولا سيما عند اختلاف Präteritum أو Partizip II أو وجود أكثر من صيغة. هدف هذا التبسيط مساعدة المتعلم على حفظ مجموعة صغيرة، لا إثبات سبب تاريخي واحد أو قاعدة ذهنية عامة لجميع الأفعال.",
      table: {
        title: "عائلات Ablaut الكبرى — الصور الثلاث",
        columns: ["النمط", "المصدر", "Präteritum", "Partizip II", "المعنى"],
        rows: [
          {
            label: "i – a – u",
            cells: ["trinken", "trank", "getrunken", "يشرب"],
          },
          { label: "i – a – u", cells: ["finden", "fand", "gefunden", "يجد"] },
          {
            label: "ei – ie – ie",
            cells: ["schreiben", "schrieb", "geschrieben", "يكتب"],
          },
          {
            label: "ei – ie – ie",
            cells: ["bleiben", "blieb", "geblieben", "يبقى (مع sein)"],
          },
          {
            label: "ie – o – o",
            cells: ["fliegen", "flog", "geflogen", "يطير (مع sein)"],
          },
          { label: "e – a – o", cells: ["nehmen", "nahm", "genommen", "يأخذ"] },
          {
            label: "e – a – o",
            cells: ["sprechen", "sprach", "gesprochen", "يتكلّم"],
          },
          { label: "مختلط", cells: ["denken", "dachte", "gedacht", "يفكّر"] },
          {
            label: "مختلط",
            cells: ["bringen", "brachte", "gebracht", "يُحضر"],
          },
        ],
      },
      examples: [
        {
          de: "Wir haben den ganzen Abend gesungen.",
          ar: "غنّينا طوال المساء. (singen – sang – gesungen، نمط i–a–u)",
        },
        {
          de: "Ich habe meinen Schlüssel nicht gefunden.",
          ar: "لم أجد مفتاحي. (finden، النمط نفسه)",
        },
        {
          de: "Sie ist nach Istanbul geflogen.",
          ar: "سافرت بالطائرة إلى إسطنبول. (fliegen، نمط ie–o–o؛ sein في معنى السفر إلى وجهة)",
        },
        {
          de: "Ich habe meinen Pass verloren.",
          ar: "أضعتُ جواز سفري. (verlieren – verlor – verloren)",
        },
        {
          de: "Hast du mit dem Chef gesprochen?",
          ar: "هل تكلّمتَ مع المدير؟ (sprechen، نمط e–a–o)",
        },
        {
          de: "Er hat mir sehr geholfen.",
          ar: "ساعدني كثيراً. (helfen – half – geholfen؛ المفعول هنا Dativ: mir)",
        },
        {
          de: "Daran habe ich gar nicht gedacht.",
          ar: "لم أفكّر في ذلك إطلاقاً. (denken — مختلط: تغيّرُ جذرٍ ونهاية -t)",
        },
        {
          de: "Ich habe dir ein Geschenk mitgebracht.",
          ar: "أحضرتُ لك هديّة. (bringen مختلط + بادئة منفصلة)",
        },
      ],
      comparisonWithArabic:
        "تستعمل العربية الجذر والوزن في بناء كثير من الكلمات والصيغ، ويمكن أن تساعد هذه المقارنة على ملاحظة أن حركة الجذر قد تتغير في trinken – trank – getrunken. لكن **Ablaut ليس هو الوزن العربي نفسه**: فالجذر والوزن العربيان نظام صرفي مختلف، أما Ablaut هنا فيصف تناوباً في صور أفعال ألمانية بعينها. لا تتنبأ المقارنة بصيغ فعل ألماني جديد، ولا تثبت أن متعلمي العربية أقدر من غيرهم على تعلمه. استخدمها لتذكّر وجود تناوب، ثم احفظ الصيغ الألمانية المحددة.",
      eselsbruecke:
        "احفظ صور الفعل كما تُعرض: trinken – trank – getrunken. لاحظ النمط للمقارنة، لكن لا تُنشئ Partizip II جديداً بالقياس؛ تحقّق من صورة الفعل نفسه.",
      commonMistakes: [
        {
          wrong: "Ich habe das Buch gefindet.",
          right: "Ich habe das Buch gefunden.",
          classification: "error",
          whyAr: "finden من الأفعال القوية؛ Partizip II المعياري في هذا المعنى هو gefunden، لا gefindet. احفظ الصيغة المحددة.",
        },
        {
          wrong: "Ich habe geschreibt.",
          right: "Ich habe geschrieben.",
          classification: "error",
          whyAr: "Partizip II من schreiben هو geschrieben؛ لا تُركّب نهاية الضعيف -t على هذه الصيغة القوية.",
        },
        {
          wrong: "Ich habe nach Berlin geflogen.",
          right: "Ich bin nach Berlin geflogen.",
          classification: "error",
          whyAr: "في معنى السفر بالطائرة إلى وجهة، يأخذ fliegen المساعد sein. وفي معانٍ أخرى مثل قيادة طائرة أو نقل شيء قد يختلف المساعد؛ لا تستنتج قاعدة لكل استعمال.",
        },
        {
          wrong: "Ich habe an dich gedenkt.",
          right: "Ich habe an dich gedacht.",
          classification: "error",
          whyAr: "الفعل هنا denken، وصيغته المختلطة في المثال denken – dachte – gedacht. أما gedenken ففعل آخر ومعناه وبناؤه مختلفان.",
        },
        {
          wrong: "Er hat mir gehelft.",
          right: "Er hat mir geholfen.",
          classification: "error",
          whyAr: "Partizip II من helfen هو geholfen؛ وفي هذا المثال يأخذ المفعول Dativ (mir). سبق عرض helfen في A1-06، وهنا نراجع صورته ومفعوله في المثال.",
        },
      ],
      relatedRuleComparison: {
        title: "القويّ في Perfekt مقابل القويّ في المضارع",
        content:
          "تغيّر e/i في المضارع مثل du sprichst قد يساعد على ملاحظة صلة بين بعض الصور، لكنه لا يتنبأ وحده بصيغ الأفعال القوية ولا يغني عن حفظ المصدر وPräteritum وPartizip II. وقد مرّ helfen في A1-06: sprechen – sprach – gesprochen مع du sprichst، وhelfen – half – geholfen مع du hilfst. أمّا schreiben فيأخذ schreiben – schrieb – geschrieben مع du schreibst في المضارع؛ لذا راجع صور الفعل نفسه.",

      },
    },
    {
      id: "t2",
      titleAr: "Perfekt أم Präteritum؟ — قسمة العمل بين الماضيين",
      titleDe: "Perfekt oder Präteritum? Die Arbeitsteilung",
      explanationAr:
        "لكلٍّ من Perfekt وPräteritum استعمالات صحيحة للماضي، ولا يصح اختزالهما إلى «الكلام مقابل الكتابة». في كثير من الحديث اليومي المعاصر يغلب Perfekt عند سرد أحداث كثيرة، بينما يشيع Präteritum في السرد المكتوب؛ لكن Präteritum يُسمع أيضاً في الكلام، وPerfekt يرد في الكتابة. تظهر كثيراً في الحديث صيغ مثل war وhatte وبعض الأفعال الناقصة، كما تختلف الأنماط باختلاف المنطقة والسجل والنص.\n\nللتدريب هنا:\n· **تقرير شخصي عن رحلة:** Ich bin nach Wien gefahren und habe dort meine Tante besucht.\n· **سرد مكتوب:** Der Zug fuhr um acht Uhr ab und erreichte Berlin am Mittag.\n· **صيغ قصيرة شائعة في أمثلة محادثة:** Ich war müde · Wir hatten keine Zeit · Ich konnte nicht kommen · Es gab kein WLAN.\n\nهذه اتجاهات ونماذج لا قوانين حصرية. البدائل مثل Ich bin … gewesen وIch habe nicht kommen können وEs hat … gegeben سليمة نحوياً، وقد تلائم سياقاً أو سجلاً أو منطقة بعينها؛ لا تصفها بأنها خطأ لمجرد أن الدرس يختار صيغة أقصر في مثال محدد.",
      whyAr:
        "يتأثر الاختيار بين الزمنين بنوع النص والسجل والمنطقة والسياق، وقد تؤثر دلالة الفعل أيضاً. لذلك لا يوجد تفسير واحد من قبيل أن صيغة بعينها «ثقيلة دائماً» أو أن الزمنين يتطابقان في كل موضع. يعرض الجدول أمثلة واتجاهات مألوفة لتيسير القراءة والتدريب، لا حدوداً ثابتة بين كلام صحيح وكتابة صحيحة.",
      table: {
        title: "أيّ ماضٍ تختار؟",
        columns: ["الموقف", "الزمن", "المثال"],
        rows: [
          {
            label: "حديثٌ عن العطلة",
            cells: ["Perfekt", "Ich bin nach Wien gefahren."],
          },
          {
            label: "رسالةٌ إلى صديق",
            cells: ["Perfekt", "Wir haben viel gelacht."],
          },
          {
            label: "رواية أو خبر صحفيّ",
            cells: ["Präteritum", "Der Zug erreichte den Bahnhof um acht."],
          },
          {
            label: "وصف حالة — sein",
            cells: ["Präteritum", "Ich war sehr müde."],
          },
          {
            label: "وصف امتلاك — haben",
            cells: ["Präteritum", "Wir hatten keine Zeit."],
          },
          {
            label: "فعلٌ ناقص — مثال موجّه",
            cells: ["Präteritum", "Ich konnte nicht schlafen."],
          },
          {
            label: "وجود — es gibt",
            cells: ["Präteritum", "Es gab keinen Kaffee mehr."],
          },
        ],
      },
      examples: [
        {
          de: "Ich war letztes Jahr in Ägypten. Es war fantastisch!",
          ar: "كنتُ العام الماضي في مصر. كانت الرحلة رائعة! (war صيغة Präteritum شائعة لوصف الحالة)",
        },
        {
          de: "Wir hatten leider kein Glück mit dem Wetter.",
          ar: "للأسف لم يحالفنا الحظّ في الطقس. (haben ⟵ hatten)",
        },
        {
          de: "Ich konnte gestern nicht kommen, denn ich musste arbeiten.",
          ar: "لم أستطع المجيء أمس، كان عليّ أن أعمل. (ناقصان بالـPräteritum)",
        },
        {
          de: "Ich bin nach Wien gefahren und habe dort meine Tante besucht.",
          ar: "سافرتُ إلى فيينّا وزرتُ عمّتي هناك. (مثال Perfekt للفعلين fahren وbesuchen)",
        },
        {
          de: "Es gab im Hotel kein WLAN.",
          ar: "لم يكن في الفندق واي فاي. (es gibt ⟵ es gab)",
        },
        {
          de: "Der Zug fuhr um acht Uhr ab und erreichte Berlin am Mittag.",
          ar: "انطلق القطار في الثامنة وبلغ برلين ظهراً. (نموذج سرد بـPräteritum)",
        },
        {
          de: "Ich wusste nicht, dass du auch hier bist.",
          ar: "لم أكن أعرف أنّك هنا أيضاً. (wissen ⟵ wusste)",
        },
        {
          de: "Wie war dein Urlaub? – Er war super, aber zu kurz!",
          ar: "كيف كانت عطلتك؟ — كانت رائعة لكنّها قصيرة جداً!",
        },
      ],
      comparisonWithArabic:
        "في العربية طرائق مختلفة للتعبير عن الزمن والحدث، كما تختلف العامية والفصحى في السياق والسجل. يمكن استخدام ذلك لتذكّر أن اختيار الصيغة الألمانية يتأثر بالمقام، لكنه **لا يساوي** Perfekt بالعامية أو Präteritum بالفصحى، ولا يعني أن لكل صيغة مقابلاً عربياً ثابتاً. كلا الزمنين يرد في الكلام والكتابة، ويُفهم المعنى من الجملة والسياق.",
      eselsbruecke:
        "في تقرير محادثي قصير، يكون Perfekt نقطة بداية نافعة لكثير من الأحداث؛ وتدرّب أيضاً على صيغ Präteritum الشائعة مثل war وhatte وkonnte وmusste. تذكّر أنها **أنماط استعمال شائعة لا قاعدة تمنع البدائل**.",
      commonMistakes: [
        {
          wrong: "Ich bin gestern sehr müde gewesen.",
          right: "Ich war gestern sehr müde.",
          classification: "contextual-alternative",
          whyAr: "الصيغة الأولى سليمة؛ يختار المثال war بوصفها صيغة قصيرة شائعة هنا، لا لأن Perfekt ممنوع.",
        },
        {
          wrong: "Ich habe nicht kommen können.",
          right: "Ich konnte nicht kommen.",
          classification: "contextual-alternative",
          whyAr: "تركيب Perfekt مع مصدرين ممكن وصحيح؛ يدرّب المثال على صيغة Präteritum الأقصر، ولا يصنّف البديل خطأً نحوياً.",
        },
        {
          wrong: "Gestern ich ging ins Kino. (في محادثة)",
          right: "Gestern bin ich ins Kino gegangen.",
          classification: "error",
          whyAr: "الخطأ المؤكد هو V2: بعد Gestern يجب أن يأتي الفعل المصرف في الموضع الثاني؛ Gestern ging ich ins Kino صحيحة أيضاً. اختيار Perfekt هنا هدف تدريبي للسرد المحادثي، لا لأن Präteritum خطأ في الكلام.",
        },
        {
          wrong: "Es hat kein WLAN gegeben.",
          right: "Es gab kein WLAN.",
          classification: "contextual-alternative",
          whyAr: "Perfekt ممكنة: Es hat kein WLAN gegeben. يعرض المثال es gab كصيغة موجزة مألوفة؛ الاختيار تابع للسياق والسجل.",
        },
        {
          wrong: "Ich habe gewusst, dass du kommst.",
          right: "Ich wusste, dass du kommst.",
          classification: "contextual-alternative",
          whyAr: "صيغة Perfekt من wissen ممكنة؛ اختير wusste في المثال بوصفها صيغة Präteritum شائعة، لا قاعدة تمنع البديل.",
        },
      ],
      relatedRuleComparison: {
        title: "war وhatte ضمن صيغ الماضي",
        content:
          "يعرض هذا الدرس war وhatte ضمن Präteritum ويقارنهما باستعمالات Perfekt، دون وصف أي صيغة بأنها ممنوعة من الكلام أو الكتابة. وتأتي تدريبات أوسع على Präteritum في دروس لاحقة؛ هذه أمثلة محددة وليست حصرًا لكل صيغ الماضي.",

      },
    },
    {
      id: "t3",
      titleAr: "الجملة الطويلة في Perfekt — ما الذي يقع بين القوسين؟",
      titleDe: "Die Satzklammer im Detail: Was steht im Mittelfeld?",
      explanationAr:
        "في الجملة الرئيسية الخبرية البسيطة، يكون المساعد المصرف غالباً في القوس الأيسر من Perfekt، ويأتي Partizip II في القوس الأيمن؛ وما بينهما هو Mittelfeld. أما ترتيب عناصر هذه المساحة فليس سلسلة جامدة واحدة.\n\n· في الأمثلة المحايدة، تتقدم الضمائر غير المنبورة عادةً على مجموعات الأسماء. وإذا اجتمع ضميران مفعوليان فترتيب Akkusativ قبل Dativ هو المعتاد؛ وبين مجموعتي اسم يشيع Dativ قبل Akkusativ. قد يغيّر التركيز والسياق ترتيباً مفضلاً.\n· في الظروف، يكون ترتيب الزمان ثم السبب ثم الكيفية ثم المكان (TeKaMoLo) **ميلاً شائعاً**، لا شرطاً نحوياً لا يتغير.\n· يتحدد موضع nicht بما تنفيه: يرد كثيراً قرب القوس الأيمن عند نفي مضمون الجملة المحايد، وقد يتقدم على العنصر الذي ينفيه في المقابلة، كما في Ich habe **nicht den Film**, sondern die Serie gesehen.\n· يمكن وضع جملة فرعية أو مقارنة في Nachfeld، وقد تأتي عناصر مؤجلة أخرى في سياق استدراك/تركيز؛ لذلك ليست عبارة «كل ما ليس فعلاً يبقى قبل Partizip II» قاعدة مطلقة.\n\nاستخدم الجدول أمثلةً لترتيب محايد قابل للتدريب، واقرأ ترتيب الكلمات مع المعنى والتركيز لا منفصلاً عنهما.",
      whyAr:
        "القوسان يحددان المجال الفعلي ويساعدان على رؤية موضع المساعد وPartizip II. داخل Mittelfeld توجد تفضيلات بنيوية وتواصلية متعددة، وقد تتفاعل؛ لذا لا تفسر ترتيباً واحداً على أنه الترتيب الوحيد المقبول. في التمرينات سنطلب أحياناً ترتيباً محايداً محدداً، مع التنبيه إلى أن السياق والنبر قد يجيزان بديلاً.",
      table: {
        title: "المساحة الوسطى — تفضيلات وأمثلة محايدة",
        columns: ["إرشاد (لا ترتيب إلزامي)", "العنصر", "المثال"],
        rows: [
          {
            label: "١",
            cells: ["ضميران مفعوليان: Akk قبل Dat غالباً", "Ich habe es ihm gegeben."],
          },
          { label: "٢", cells: ["الزمان — مثال", "… habe ich gestern …"] },
          { label: "٣", cells: ["السبب — مثال", "… wegen des Regens …"] },
          { label: "٤", cells: ["الكيفية — مثال", "… schnell / mit dem Zug …"] },
          { label: "٥", cells: ["المكان — مثال", "… in der Stadt …"] },
          {
            label: "٦",
            cells: ["اسمان مفعوليان: Dativ قبل Akk شائعاً", "Ich habe meinem Bruder das Buch gegeben."],
          },
          {
            label: "٧",
            cells: ["موضع nicht يتبع نطاق النفي", "… das Buch nicht gelesen."],
          },
        ],
      },
      examples: [
        {
          de: "Ich habe dir gestern eine Nachricht geschickt.",
          ar: "أرسلتُ لك رسالةً أمس. (ضميرٌ ثمّ زمانٌ ثمّ مفعول)",
        },
        {
          de: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
          ar: "سافرنا الصيف الماضي بالقطار إلى براغ. (زمان ⟵ كيفية ⟵ مكان)",
        },
        {
          de: "Ich habe es ihm schon gesagt.",
          ar: "قلتُه له بالفعل. (ضميران مفعوليان: Akkusativ es قبل Dativ ihm في ترتيب محايد)",
        },
        {
          de: "Ich habe meinem Bruder das Buch gegeben.",
          ar: "أعطيتُ أخي الكتاب. (اسمان مفعوليان: Dativ قبل Akkusativ شائعاً، بخلاف ترتيب الضميرين)",
        },
        {
          de: "Ich habe den Film nicht gesehen.",
          ar: "لم أشاهد الفيلم. (nicht قبل Partizip II لنفي الجملة كلّها)",
        },
        {
          de: "Ich habe nicht den Film gesehen, sondern die Serie.",
          ar: "لم أشاهد الفيلمَ بل المسلسل. (nicht قبل الجزء المنفيّ وحده)",
        },
        {
          de: "Er hat mir gestern wegen der Prüfung lange geholfen.",
          ar: "ساعدني أمس طويلاً بسبب الامتحان. (ضمير ⟵ زمان ⟵ سبب ⟵ كيفية)",
        },
        {
          de: "Ich habe gehört, dass du umgezogen bist.",
          ar: "سمعتُ أنّك انتقلتَ. (الجملة الفرعية تخرج بعد القوس)",
        },
      ],
      comparisonWithArabic:
        "تختلف مواضع الفعل والمتممات بين العربية والألمانية، لكن العربية نفسها تسمح بأنماط وتركيزات مختلفة؛ فلا تُختزل إلى قاعدة «الفعل أولاً ثم كل شيء». استعمل قوس Perfekt أداةً لتخطيط المثال الألماني: موضع المساعد، العناصر الوسطى، ثم Partizip II. ولا تفترض أن ترتيب ضمائر العربية يقابل ترتيب ضمائر الألمانية حرفياً؛ لكل لغة نظامها، والسياق يغيّر البؤرة.",
      eselsbruecke:
        "لترتيب محايد في الأمثلة الأساسية: حدّد قوسي الفعل أولاً؛ جرّب وضع الضمائر مبكراً، وترتيب الظروف الشائع زماناً ثم سبباً ثم كيفيةً ثم مكاناً، ثم أغلِق المجال بـPartizip II. هذه مساعدة أولية، لا وصفة إلزامية لكل جملة.",
      commonMistakes: [
        {
          wrong: "Ich habe gegessen einen Apfel.",
          right: "Ich habe einen Apfel gegessen.",
          classification: "contextual-alternative",
          whyAr: "الترتيب المحايد يضع المفعول قبل Partizip II؛ وقد يأتي عنصرٌ مؤجل بعد القوس في سياق استدراك أو تركيز، فلا نعدّ ذلك مستحيلاً مطلقاً.",
        },
        {
          wrong: "Ich habe ihm es gegeben.",
          right: "Ich habe es ihm gegeben.",
          classification: "contextual-alternative",
          whyAr: "es قبل ihm هو الترتيب المحايد المألوف لضميرين مفعوليين؛ قد يؤثر التركيز والسياق في الترتيب، لذا لا نصف كل ترتيب آخر بأنه خطأ في جميع المقامات.",
        },
        {
          wrong: "Ich habe das Buch meinem Bruder gegeben.",
          right: "Ich habe meinem Bruder das Buch gegeben.",
          classification: "contextual-alternative",
          whyAr: "إذا اجتمع اسمان مفعوليان، يشيع Dativ قبل Akkusativ في الترتيب المحايد. يمكن أن يتغير الترتيب مع التركيز والسياق.",
        },
        {
          wrong: "Ich habe nicht gelesen das Buch.",
          right: "Ich habe das Buch nicht gelesen.",
          classification: "pedagogical-simplification",
          whyAr: "للتعبير المحايد عن نفي قراءة الكتاب، المثال الأنسب Ich habe das Buch nicht gelesen. يتغير موضع nicht إذا كان النفي مقابلاً لجزء بعينه، وقد يظهر عنصر مؤجل بنبر مختلف.",
        },
        {
          wrong: "Wir sind nach Prag mit dem Zug letzten Sommer gefahren.",
          right: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
          classification: "contextual-alternative",
          whyAr: "الترتيب زمان–كيفية–مكان نموذج محايد مفيد، لكنه تفضيل للظروف لا ترتيب إلزامي لكل عنصر؛ وقد يخدم التقديم معنىً أو تركيزاً خاصاً.",
        },
      ],
      relatedRuleComparison: {
        title: "قوسٌ واحد بأربعة مِلْآت",
        content:
          "تظهر البنية ذات القوسين أيضاً مع الفعل الناقص، والفعل المنفصل، وبعض تراكيب المستقبل؛ لكن ترتيب العناصر الوسطى يتأثر بوظيفتها وبالمعلومة المراد إبرازها. أمثلة: Ich habe dir gestern eine Jacke gekauft · Ich will dir morgen ein Paket schicken · Ich hole dir morgen ein Paket ab · Ich werde dir morgen eine Jacke kaufen. تشترك هذه الأمثلة في أطر فعلية مختلفة، ولا تثبت أن كل ترتيب داخلي فيها واحد في جميع السياقات. وفي الجملة الفرعية يأتي المركب الفعلي غالباً في النهاية مثل weil ich dir eine Jacke gekauft habe.",

      },
    },
    {
      id: "t4",
      titleAr: "لغة السفر: الحجز والوصول والشكوى",
      titleDe: "Reisewortschatz: buchen, ankommen, sich beschweren",
      explanationAr:
        "هذه الكتلة تجمع عبارات مفيدة في الحجز والقطار والفندق، وتعرض صيغاً محددة لا قاعدةً تقول إن كل أفعال السفر لها المساعد نفسه.\n\n· **الحجز:** buchen / reservieren: Ich habe ein Zimmer gebucht · Ich möchte einen Tisch reservieren.\n· **أفعال النقل في معناها اللازم المعروض:** abfahren (القطار ينطلق) وankommen (يصل) وumsteigen (يبدّل وسيلة النقل) تُبنى أمثلتها بـsein: ist abgefahren · ist angekommen · ist umgestiegen. والبادئة المنفصلة تحدد موضع ge- في Partizip II، لا اختيار المساعد وحده.\n· **معانٍ أخرى:** abholen في معنى استلام شيء يأخذ haben: hat den Rucksack abgeholt. كما قد يختلف مساعد بعض الأفعال بحسب المعنى؛ فـfliegen إلى وجهة يختلف عن قيادة طائرة أو نقل شيء بها، وschwimmen للانتقال إلى وجهة يختلف عن نشاط السباحة.\n· **في الفندق:** einchecken / auschecken · die Übernachtung · das Einzelzimmer / das Doppelzimmer · inklusive Frühstück · die Rezeption.\n· **طلب واضح ومهذّب:** يمكن تنظيم الرسالة إلى وصف المشكلة ثم بيان أثرها أو الطلب: Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes Zimmer geben? هذه صيغة مناسبة لهذا المثال وليست العبارة المهذبة الوحيدة.",
      whyAr:
        "الحاجة إلى عبارات السفر هنا اختيار موضوعي للتدريب على المفردات والوظائف، لا ادعاء بأن هذا الموضوع وحده يعرّف A2 أو يطابق جزءاً محدداً من امتحان. تعلّم كل فعل مع استعماله الشائع ومساعده في ذلك المعنى؛ لا تستنتج sein من البادئة أو من فكرة الحركة وحدهما. وفي خدمة الفندق تساعد صيغ مثل Entschuldigung وbitte وKönnten Sie… على بناء طلب واضح ومهذّب، لكن درجات المباشرة تختلف بين الأشخاص والمواقف ولا يصح تعميمها ثقافياً.",
      table: {
        title: "معجم السفر — الأساسيّ",
        columns: ["الألمانية", "العربية", "ملاحظة"],
        rows: [
          {
            label: "buchen / reservieren",
            cells: ["يحجز", "Ich habe ein Zimmer gebucht (haben في هذا الاستعمال)"],
          },
          {
            label: "abfahren",
            cells: ["ينطلق (قطار/حافلة)", "في هذا الاستعمال اللازم: ist abgefahren؛ والبادئة منفصلة"],
          },
          { label: "ankommen", cells: ["يصل", "ist angekommen"] },
          {
            label: "umsteigen",
            cells: ["يبدّل وسيلة النقل", "ist umgestiegen"],
          },
          { label: "landen", cells: ["يهبط (طائرة)", "ist gelandet"] },
          {
            label: "hin und zurück",
            cells: ["ذهاباً وإياباً", "في التذاكر: einfache Fahrt = اتجاه واحد"],
          },
          {
            label: "die Verspätung",
            cells: ["التأخير", "Der Zug hat Verspätung."],
          },
          { label: "leider", cells: ["للأسف", "كلمة تلطيف الشكوى"] },
        ],
      },
      examples: [
        {
          de: "Ich habe online ein Doppelzimmer für zwei Nächte gebucht.",
          ar: "حجزتُ عبر الإنترنت غرفةً مزدوجة لليلتين.",
        },
        {
          de: "Einmal nach Hamburg, bitte. – Einfach oder hin und zurück?",
          ar: "تذكرة إلى هامبورغ من فضلك. — ذهاباً فقط أم ذهاباً وإياباً؟",
        },
        {
          de: "Der Zug ist mit zwanzig Minuten Verspätung angekommen.",
          ar: "وصل القطار متأخّراً عشرين دقيقة.",
        },
        {
          de: "In Frankfurt müssen Sie umsteigen.",
          ar: "في فرانكفورت عليك تبديل القطار.",
        },
        {
          de: "Wir sind um Mitternacht in Wien gelandet.",
          ar: "هبطنا في فيينّا منتصف الليل.",
        },
        {
          de: "Entschuldigung, das Zimmer ist leider nicht sauber.",
          ar: "عذراً، الغرفة للأسف ليست نظيفة. (خطوة المشكلة)",
        },
        {
          de: "Könnten Sie mir bitte ein anderes Zimmer geben?",
          ar: "هل يمكنكم إعطائي غرفةً أخرى من فضلكم؟ (خطوة الطلب)",
        },
        { de: "Ist das Frühstück inklusive?", ar: "هل الفطور مشمول؟" },
      ],
      comparisonWithArabic:
        "الصيغة المقترحة تجمع وضوح المشكلة مع طلب مهذّب، ويمكن للمتعلم تعديلها بحسب حاجته. لا نفترض أن المتحدثين بالعربية غير مباشرين أو أن المتحدثين بالألمانية يتكلمون بطريقة واحدة. وفي سياق التذاكر تُستعمل einfache Fahrt لرحلة باتجاه واحد، مقابل hin und zurück؛ وخارج هذا السياق تحمل einfach معاني أخرى مثل «بسيط».",
      eselsbruecke:
        "اربط المساعد بالفعل والمعنى في المثال: abfahren في معنى انطلاق القطار → ist abgefahren؛ buchen → hat gebucht؛ abholen لالتقاط حقيبة → hat abgeholt. واحفظ البادئة المنفصلة في موضع Partizip: abgefahren / abgeholt.",
      commonMistakes: [
        {
          wrong: "Der Zug hat um acht abgefahren.",
          right: "Der Zug ist um acht abgefahren.",
          classification: "error",
          whyAr: "في معنى انطلاق القطار اللازم، abfahren يبني Perfekt مع sein. ومع البادئة المنفصلة يدخل ge بين ab وfahren؛ والكتابة المعتادة كلمة واحدة: abgefahren.",
        },
        {
          wrong: "Ich habe in Köln umgestiegen.",
          right: "Ich bin in Köln umgestiegen.",
          classification: "error",
          whyAr: "umsteigen بمعنى تبديل وسيلة النقل يأخذ sein في هذا الاستعمال. لا تجعل البادئة المنفصلة وحدها سبب اختيار المساعد.",
        },
        {
          wrong: "Am Fahrkartenschalter: „Einfach, bitte.“ (إذا كان المقصود «الأمر بسيط»)",
          right: "Das ist einfach. (للتعبير عن أن الأمر بسيط)",
          classification: "contextual-alternative",
          whyAr: "في سياق شباك التذاكر، Einfach, bitte جواب مفهوم لطلب رحلة باتجاه واحد؛ أما معنى البساطة فيعبّر عنه مثلاً Das ist einfach. ليست كلمة einfach خطأ بذاتها، بل يحدد السياق المقصود.",
        },
        {
          wrong: "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
          right: "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes geben?",
          classification: "contextual-alternative",
          whyAr: "الجملة الأولى مفهومة ونحوها صحيح لكنها قد تبدو آمرة في هذا الموقف. الصياغة الثانية خيار واضح ومهذّب للتدريب، وليست العبارة المقبولة الوحيدة.",
        },
        {
          wrong: "Ich habe ein Zimmer gebucht für zwei Nächte.",
          right: "Ich habe für zwei Nächte ein Zimmer gebucht.",
          classification: "contextual-alternative",
          whyAr: "الصياغة المقترحة ترتيب محايد شائع؛ قد يظهر الظرف بعد القوس في سياق استدراك/تركيز. لا نصف ترتيب الكلمات بأنه خطأ مطلق خارج السياق.",
        },
      ],
      relatedRuleComparison: {
        title: "من a1-11 إلى a2-01 — المدينة ثمّ السفر",
        content:
          "في A1-11 تدربت على مفردات التنقل داخل المدينة، وهنا أضيف عبارات عن رحلة بين مدن وإقامة فندقية: die Fahrkarte، umsteigen، die Verspätung، buchen، die Rezeption. هذا امتداد موضوعي للمفردات، لا ادعاء بأن الدرسين يغطيان مواقف CEFR أو جزءاً بعينه من امتحان.",

      },
    },
  ];

/**
 * a1-14 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-14.ts في الدفعة 93 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الماضي المحكيّ (Perfekt): فعلٌ مساعد + Partizip II",
      titleDe: "Das Perfekt: haben/sein + Partizip II",
      explanationAr:
        "نستخدم Perfekt للحديث عن أحداث أو حالات في الماضي. وهو شائع في المحادثات اليومية، لكن لا يصح اختزاله في «ماضٍ يُقال فقط»؛ فـPräteritum يظهر أيضاً في الكلام والكتابة بحسب الفعل والسياق والمنطقة.\n\n**أولاً — التركيب:** يتكوّن Perfekt من **فعل مساعد مصرّف** (haben أو sein) و**Partizip II** للفعل الأساسي: **Ich habe Deutsch gelernt.** يحمل المساعد تصريف الشخص والزمن، ويقدّم Partizip II معنى الفعل. وفي تركيب Perfekt لا يتصرّف Partizip II مثل فعل مصرّف؛ أمّا استعماله صفةً قبل اسم، مثل *ein gelerntes Wort*، فقد يأخذ نهاية الصفة.\n\n**ثانياً — موضع الفعلين:** في الجملة الرئيسية الخبرية يأتي الفعل المساعد في المركز الثاني (V2؛ أي بعد المكوّن الأول، لا بالضرورة بعد الكلمة الثانية)، ويأتي Partizip II عادةً في نهاية الجملة: **Gestern | habe | ich in der Schule Deutsch | gelernt.** وفي سؤال نعم/لا يتقدّم المساعد: **Hast du gestern Deutsch gelernt?** أمّا في الجملة الفرعية فيأتي الفعل المساعد المصرف في النهاية بعد Partizip II: **…, weil ich gestern Deutsch gelernt habe.**\n\n**ثالثاً — أنماط تكوين شائعة:** الأفعال الضعيفة تكوّن Partizip II غالباً بإضافة **ge-** إلى الجذع والنهاية **-t**: *lernen → gelernt; machen → gemacht*. وإذا انتهى الجذع بـ*d* أو *t*، أو احتاج نطقه إلى مقطع إضافي، تظهر غالباً **-et**: *arbeiten → gearbeitet; warten → gewartet*. للأفعال القوية صيغ معجمية ينبغي تعلّمها؛ وكثير منها ينتهي بـ**-en** وقد يتغيّر الجذع: *trinken → getrunken; schreiben → geschrieben*. لا تنطبق هذه الأنماط على كل فعل بلا استثناء؛ تعلّم صيغة Partizip II مع الفعل نفسه.",
      whyAr:
        "الفائدة العملية من ملاحظة قطعتَي Perfekt هي معرفة ما الذي يحمل التصريف وما الذي يحمل معنى الفعل. المساعد هو الجزء المصرف؛ لذلك لا تُسقطه من الجملة. في الجملة الرئيسية الخبرية يلتزم المساعد موقع V2، ويأتي Partizip II في نهاية المجال الفعلي. قارن: **Gestern habe ich Deutsch gelernt**، و**…, weil ich Deutsch gelernt habe**؛ فموقع المساعد يتأثر بنوع الجملة. لا يلزم تفسير هذه البنية بحكاية تاريخية مبسطة كي تتعلّم استعمالها.",
      table: {
        title: "أنماط شائعة لتكوين Partizip II",
        columns: ["العائلة", "القاعدة", "المصدر ⟵ Partizip II", "الجملة"],
        rows: [
          { label: "ضعيف", cells: ["ge + جذر + t", "lernen ⟵ gelernt", "Ich habe Deutsch gelernt."] },
          { label: "ضعيف", cells: ["ge + جذر + t", "machen ⟵ gemacht", "Was hast du gemacht?"] },
          { label: "ضعيف مع -et", cells: ["ge + جذر + et", "arbeiten ⟵ gearbeitet", "Er hat viel gearbeitet."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "trinken ⟵ getrunken", "Wir haben Kaffee getrunken."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "schreiben ⟵ geschrieben", "Ich habe eine E-Mail geschrieben."] },
          { label: "قويّ بلا تغيّر", cells: ["ge + جذر + en", "lesen ⟵ gelesen", "Sie hat das Buch gelesen."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", ar: "تعلّمتُ الألمانية أمس. (habe في الثاني، gelernt في الآخر)" },
        { de: "Was hast du am Wochenende gemacht?", ar: "ماذا فعلتَ في عطلة الأسبوع؟ (سؤال تدريبي ممكن، لا ادعاء بتكراره في كل اختبار)" },
        { de: "Wir haben in einem Restaurant gegessen.", ar: "أكلنا في مطعم. (essen ⟵ gegessen — قويّ)" },
        { de: "Meine Mutter hat einen Kuchen gebacken.", ar: "خبزت أمّي كعكة." },
        { de: "Habt ihr die Hausaufgaben gemacht?", ar: "هل عملتم الواجبات؟ (في السؤال يتقدّم المساعد ويبقى الجزء الأخير مكانه)" },
        { de: "Ich habe zwei Stunden auf den Bus gewartet.", ar: "انتظرتُ الحافلة ساعتين. (warten ⟵ gewartet مع -et)" },
        { de: "Er hat mir ein Buch geschenkt.", ar: "أهداني كتاباً." },
        { de: "Ich habe nichts gesagt.", ar: "لم أقل شيئاً. (sagen ⟵ gesagt)" },
      ],
      comparisonWithArabic:
        "في المثال العربي «تعلّمتُ الألمانية أمس» تظهر دلالة الماضي في صيغة فعل واحدة، بينما تتكوّن الجملة الألمانية **Ich habe Deutsch gelernt** من مساعد مصرّف وPartizip II. هذه مقارنة بين مثالين وليست قاعدةً تصف كل طرائق التعبير عن الماضي في العربية. عملياً، ضع علامة على المساعد وعلى Partizip II كلٌّ على حدة، ثم راجع ترتيب الجملة الألمانية؛ ولا تفترض أن كل مفعول أو ظرف يأتي في موضع ثابت قبل الجزء الأخير.",
      eselsbruecke:
        "في الجملة الرئيسية الخبرية: المساعد المصرف في V2 وPartizip II في نهاية المجال الفعلي. في السؤال يتقدّم المساعد، وفي جملة *weil* يأتي المساعد المصرف بعد Partizip II. وتعلّم المساعد مع الفعل، لا من اختبار واحد وحده.",
      commonMistakes: [
        {
          wrong: "Ich habe gelernt Deutsch.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "في الجملة الرئيسية الخبرية المحايدة يأتي المساعد في V2 وPartizip II عادةً في نهاية المجال الفعلي؛ لذلك يسبق المفعول هنا Partizip II. راجع الترتيب في هذا السياق، لا قاعدةً واحدة لكل أنواع الجمل.",
        },
        {
          wrong: "Ich bin Deutsch gelernt.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "في هذا المثال يأخذ الفعل المتعدّي lernen، مع المفعول Deutsch، المساعد haben. وجود مفعول مباشر قرينة نافعة، لكنه ليس خوارزمية لاختيار المساعد لكل فعل.",
        },
        {
          wrong: "Ich habe Deutsch lernte.",
          right: "Ich habe Deutsch gelernt.",
          whyAr: "إذا طُلب Perfekt، فالصيغة هي المساعد المصرف + Partizip II، لا Präteritum مع المساعد. وPräteritum زمن صحيح في سياقات أخرى، وليس محصوراً بالكتابة.",
        },
        {
          wrong: "Ich habe gearbeit.",
          right: "Ich habe gearbeitet.",
          whyAr: "في هذا الفعل الضعيف ذي الجذع المنتهي بـt تظهر النهاية -et: gearbeitet. تعلّم الصيغة الإملائية المنطوقة مع الفعل.",
        },
        {
          wrong: "Ich habe getrinkt.",
          right: "Ich habe getrunken.",
          whyAr: "Partizip II من trinken هو getrunken؛ إنه فعل قوي بصيغة ينبغي تعلّمها، ولا تُنشأ هنا بقياس نهاية الأفعال الضعيفة -t.",
        },
      ],
      relatedRuleComparison: {
        title: "الحاضنة الفعلية — ثالث ظهورٍ لها",
        content:
          "قارن ثلاثة أنماط في الجملة الرئيسية الخبرية: **Ich stehe um sieben Uhr auf** (فعل منفصل في المضارع)، **Ich kann Deutsch sprechen** (فعل ناقص + مصدر)، و**Ich habe Deutsch gelernt** (Perfekt). في هذه الأمثلة يأتي الفعل المصرف في V2 ويظهر جزء غير مصرف في نهاية المجال الفعلي؛ لكن لكل تركيب قواعده، ولا يعني التشابه أن جميع الجمل الألمانية تُغلق بالطريقة نفسها. وفي الجملة الفرعية قد يتغير ترتيب الأفعال، مثل **…, weil ich Deutsch gelernt habe**. هذا درس في Perfekt، لا وعداً بتغطية المبني للمجهول أو المستقبل.",
      },
    },
    {
      id: "t2",
      titleAr: "haben أم sein؟ — قرائن سياقية لا اختبار واحد",
      titleDe: "haben oder sein? Die Wahl des Hilfsverbs",
      explanationAr:
        "اختيار الفعل المساعد في Perfekt يتأثر ببنية الفعل ومعناه واستعماله؛ لذلك لا توجد هنا «ثلاث حالات لا أكثر». هذه **قرائن تعليمية** لأمثلة شائعة:\n\n**haben** يأتي مع الأفعال المتعدية التي تأخذ مفعولاً مباشراً، مثل **ein Buch lesen** و**einen Brief schreiben**، ومع أفعال كثيرة تصف نشاطاً أو حالة بلا انتقال مكاني، مثل **schlafen** و**warten**: *Ich habe acht Stunden geschlafen.*\n\n**sein** يأتي غالباً مع أفعال لازمة تعبّر في معناها المقصود عن انتقال مكاني أو تغيّر حالة: **gehen, kommen, reisen, einschlafen, aufstehen**. مثال: *Ich bin nach Berlin gefahren.*\n\nوتوجد أفعال شائعة تُحفظ مع **sein** مثل **sein, bleiben, passieren, gelingen**؛ وهذه ليست قائمة كاملة بكل الأفعال التي تأخذ sein. تعلّم المساعد مع صيغة الفعل، ولا تستنتجه من حركة ظاهرة وحدها.\n\n**المفعول Akkusativ قرينة قوية لا اختبار آلي وحيد.** وجود مفعول مباشر يرجّح haben في الأمثلة المتعدية، لكن عبارات المدة مثل **acht Stunden** في *acht Stunden schlafen* ليست مفعولاً مباشراً، وبعض أفعال الحركة يتغيّر مساعدها بتغيّر المعنى أو التركيب.\n\n**الفعل قد يبدّل المساعد بحسب المعنى:** *Ich bin nach Berlin gefahren* (انتقلتُ إلى برلين) مقابل *Ich habe das Auto gefahren* (قدتُ السيارة). وقد تقبل بعض الأفعال مثل *laufen* أو *schwimmen* أكثر من صيغة في استعمالات مختلفة؛ لذا نتدرّب هنا على أمثلة محددة ولا نعمّم مفتاحاً واحداً على كل فعل.",
      whyAr:
        "تشرح مراجع النحو اختيار haben وsein بمعايير تركيبية ودلالية معاً، لا باختبار المفعول وحده. للمبتدئ، احفظ الفعل في بطاقة واحدة: **المصدر + Partizip II + haben/sein**، ثم انتبه إلى المعنى في الجملة. وجود مفعول مباشر يساعد كثيراً على اختيار haben في الجمل المتعدية، بينما الانتقال أو تغيّر الحالة يرجّح sein في أفعال لازمة شائعة. لكن عبارة Akkusativ قد تكون ظرف مدة لا مفعولاً، وقد يتغير المساعد مع تغيّر معنى فعل مثل fahren. لذلك لا تساوِ علامة Akkusativ وحدها بقرارٍ آليّ، ولا تحوّل القاعدة المختصرة إلى حكم على كل الأفعال.",
      table: {
        title: "sein أم haben؟ — قرائن وأمثلة غير حصرية",
        columns: ["الحالة", "أمثلة الأفعال", "المساعد", "الجملة"],
        rows: [
          { label: "انتقال في المعنى المقصود", cells: ["gehen, kommen, reisen; fahren بمعنى السفر", "sein", "Ich bin nach Berlin gefahren."] },
          { label: "تغيّر حال", cells: ["aufstehen, einschlafen, werden, wachsen", "sein", "Ich bin früh aufgestanden."] },
          { label: "أفعال شائعة تُحفظ مع sein", cells: ["sein, bleiben, passieren, gelingen", "sein", "Wir sind zu Hause geblieben."] },
          { label: "فعلٌ له مفعول", cells: ["lesen, essen, kaufen, schreiben", "haben", "Ich habe ein Buch gelesen."] },
          { label: "نشاطٌ بلا انتقال", cells: ["schlafen, arbeiten, warten, lachen", "haben", "Er hat gut geschlafen."] },
          { label: "الفعل ذو الوجهين", cells: ["fahren (سافر / قاد)", "sein / haben", "Ich bin gefahren. · Ich habe das Auto gefahren."] },
        ],
      },
      examples: [
        { de: "Ich bin gestern nach München gefahren.", ar: "سافرتُ أمس إلى ميونخ. (fahren بمعنى السفر إلى وجهة ⟵ sein)" },
        { de: "Ich habe ein Buch gelesen.", ar: "قرأتُ كتاباً. (lesen مع مفعول مباشر في هذا المثال ⟵ haben)" },
        { de: "Wir sind am Samstag zu Hause geblieben.", ar: "بقينا في البيت يوم السبت. (bleiben محفوظة ⟵ sein)" },
        { de: "Er hat acht Stunden geschlafen.", ar: "نام ثماني ساعات. (عبارة مدة، لا مفعول مباشر؛ schlafen هنا مع haben)" },
        { de: "Bist du schon einmal in Deutschland gewesen?", ar: "هل سبق أن كنتَ في ألمانيا؟ (sein ⟵ gewesen)" },
        { de: "Das Kind ist sehr schnell gewachsen.", ar: "كبر الطفل بسرعة. (تغيّر حال ⟵ sein)" },
        { de: "Was ist denn passiert?", ar: "ماذا حدث؟ (passieren محفوظة ⟵ sein)" },
        { de: "Ich bin um sechs Uhr aufgestanden und habe gefrühstückt.", ar: "نهضتُ في السادسة وتناولتُ الفطور. (المساعدان يختلفان في الجملة الواحدة)" },
      ],
      comparisonWithArabic:
        "لا يقابل haben وsein المساعدان الألمانيان تقسيماً صرفياً واحداً في العربية. قد تساعد معرفة المتعدّي واللازم في تذكّر بعض الأمثلة، لكنها ليست ترجمةً كاملة لاختيار المساعد الألماني؛ فالمعنى المعجمي للفعل وتركيبه واستعماله عوامل مهمة أيضاً. احفظ المثال الألماني مع مساعده، مثل *ein Buch lesen → hat gelesen* و*nach Berlin fahren → ist gefahren*، ولا تجعل كل كلمة في حالة Akkusativ دليلاً على أن لها وظيفة مفعول مباشر.",
      eselsbruecke:
        "ابدأ بمعنى الفعل واستعماله: المفعول المباشر قرينة قوية على haben؛ الانتقال المكاني أو تغيّر الحالة يرجّح sein؛ وكثير من الأنشطة يأخذ haben. ثم راجع المساعد المعجمي، خصوصاً حين يتغير معنى الفعل أو تكون العبارة ظرف مدة.",
      commonMistakes: [
        {
          wrong: "Ich habe nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "في هذا الاستعمال يدلّ fahren على رحلة إلى وجهة فيأخذ sein. أمّا قيادة مركبة بوصفها مفعولاً فتُبنى عادةً مع haben: Ich habe das Auto gefahren.",
        },
        {
          wrong: "Ich bin ein Buch gelesen.",
          right: "Ich habe ein Buch gelesen.",
          whyAr:
            "في هذا المثال يأخذ lesen مع المفعول المباشر ein Buch المساعد haben. هذه قرينة قوية للأفعال المتعدية، لا قاعدة بلا استثناء لكل اختيار بين المساعدين.",
        },
        {
          wrong: "Ich nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "عند تكوين Perfekt يلزم فعل مساعد مصرّف مع Partizip II. لا ينطبق هذا على كل جملة ماضية أو على كل تركيب ألماني؛ فالمضارع وPräteritum لهما تصريفهما الخاص.",
        },
        {
          wrong: "Wir haben zu Hause geblieben.",
          right: "Wir sind zu Hause geblieben.",
          whyAr:
            "يُحفظ bleiben مع sein: Wir sind geblieben. الحركة ليست شرطاً وحيداً لاستعمال sein، وهذه إحدى الصيغ المعجمية الشائعة التي تتعلّم مع مساعدها.",
        },
        {
          wrong: "Ich bin gut geschlafen.",
          right: "Ich habe gut geschlafen.",
          whyAr:
            "schlafen يأخذ haben في هذا المثال، أمّا einschlafen فيأخذ sein في استعماله الشائع الدال على بدء النوم/تغيّر الحالة. تعلّم الصيغة مع الفعل والمعنى.",
        },
      ],
      relatedRuleComparison: {
        title: "sein المساعد مقابل sein الأصليّ",
        content:
          "في **Ich bin Student** يعمل *sein* فعلاً رابطاً في جملة اسمية. وفي **Ich bin gefahren** هو مساعد مصرّف يبني Perfekt مع Partizip II؛ لا يُترجم عادةً بوصفه كلمة مستقلة، لكن له وظيفة نحوية ويحمل التصريف. وبالمثل، **Ich habe ein Auto** استعمالٌ معجمي لـhaben، بينما **Ich habe gelesen** فيه haben مساعد. لا تُوصف المساعدات بأنها «بلا معنى مطلقاً»؛ ادرس وظيفتها في كل تركيب.",
      },
    },
    {
      id: "t3",
      titleAr: "Partizip II في الأفعال المنفصلة وغير المنفصلة وفي -ieren",
      titleDe: "Partizip II bei trennbaren, untrennbaren und -ieren-Verben",
      explanationAr:
        "في Partizip II تظهر أنماط مختلفة بحسب نوع الفعل وبنيته؛ لا تستنتج موضع ge- من النبر وحده.\n\n**1) فعل ذو بادئة منفصلة:** تبقى البادئة جزءاً من الفعل المركب؛ وفي Partizip II يأتي ge- بينها وبين الجذع: **auf|stehen → aufgestanden**, **an|rufen → angerufen**, **ein|kaufen → eingekauft**. وفي المضارع قد تنفصل البادئة في الجملة الرئيسية (**Ich stehe früh auf**)، بينما تكتب متصلة في المصدر وPartizip II (**aufstehen, aufgestanden**).\n\n**2) بادئات غير منفصلة شائعة:** **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**. لا يضاف ge- آخر إلى Partizip II لهذه الأفعال: **besuchen → besucht, verstehen → verstanden, erzählen → erzählt, bekommen → bekommen**. تعلّم الفعل وصيغته؛ فالتغيّر بين الجذر والPartizip يختلف من فعل إلى آخر.\n\n**3) الأفعال المنتهية بـ-ieren:** لا تأخذ ge- في Partizip II، وتنتهي كثير من صيغها بـ-t: **studieren → studiert, telefonieren → telefoniert, fotografieren → fotografiert, reparieren → repariert**.\n\n**الخلاصة:** موقع ge- أو غيابها مرتبط ببنية الفعل وبادئته ونمطه الصرفي؛ قد يساعد النبر في التمييز بين بعض البوادئ، لكنه ليس قاعدةً شاملةً تحكم كل الأفعال. راجع قوائم الأفعال ودوّن المصدر وPartizip II معاً.",
      whyAr:
        "في الأفعال ذات البادئة المنفصلة، يوضع ge- بعد البادئة وقبل الجذع في Partizip II؛ أما البادئات غير المنفصلة فتشغل موضع البادئة ولا يضاف معها ge- أخرى، وأفعال -ieren تتبع نمطاً صرفياً بلا ge-. يصف IDS Grammis هذه الفئات ويذكر النبر/التنغيم ضمن العوامل ذات الصلة ببناء Partizip II؛ لا يختزل القاعدة في «كل فعل غير منبور في أوله لا يأخذ ge-». كما أن البادئة المنفصلة جزء من الفعل المركب وليست كلمةً مستقلة خارجه: انفصالها في بعض الجمل تصريفٌ نحوي، لا دليل على أنها ليست جزءاً من الفعل.",
      table: {
        title: "أين تذهب ge-؟",
        columns: ["العائلة", "العلامة", "المصدر ⟵ Partizip II", "النبر في هذه الأمثلة"],
        rows: [
          { label: "عاديّ", cells: ["ge- في الأوّل", "lernen ⟵ gelernt", "LER-nen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "aufstehen ⟵ aufgestanden", "AUF-stehen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "anrufen ⟵ angerufen", "AN-rufen"] },
          { label: "بادئة غير منفصلة", cells: ["بلا ge- إضافية", "besuchen ⟵ besucht", "be-SU-chen"] },
          { label: "بادئة غير منفصلة", cells: ["بلا ge- إضافية", "verstehen ⟵ verstanden", "ver-STE-hen"] },
          { label: "‎-ieren", cells: ["بلا ge-، والنهاية -t", "studieren ⟵ studiert", "stu-DIE-ren"] },
        ],
      },
      examples: [
        { de: "Ich bin heute um sechs Uhr aufgestanden.", ar: "نهضتُ اليوم في السادسة. (ge- في الوسط + sein)" },
        { de: "Hast du deine Mutter angerufen?", ar: "هل اتّصلتَ بأمّك؟ (anrufen ⟵ angerufen)" },
        { de: "Wir haben gestern eingekauft.", ar: "تسوّقنا أمس. (einkaufen ⟵ eingekauft)" },
        { de: "Ich habe meine Großmutter besucht.", ar: "زرتُ جدّتي. (be- ⟵ بلا ge-)" },
        { de: "Entschuldigung, ich habe das nicht verstanden.", ar: "عذراً، لم أفهم ذلك. (جملة إنقاذٍ في Hören وSprechen)" },
        { de: "Sie hat in Deutschland studiert.", ar: "درستْ في ألمانيا. (‎-ieren ⟵ studiert)" },
        { de: "Ich habe eine E-Mail bekommen.", ar: "وصلتني رسالة. (bekommen: الصورتان متطابقتان)" },
        { de: "Wir haben zwei Stunden telefoniert.", ar: "تحدّثنا هاتفياً ساعتين. (telefoniert)" },
      ],
      comparisonWithArabic:
        "قد تساعد مقارنة اللواصق في اللغتين على ملاحظة أن شكل الكلمة يتغيّر، لكن لا تقابل ge- زائدةً عربية بعينها ولا تفترض أنها لا تحمل إلا معنى الزمن في كل استعمال. لهذا الدرس، تعلّم الفعل الألماني مع Partizip II ومساعده بوصفها صيغة معجمية؛ مثل *besuchen → hat besucht* و*aufstehen → ist aufgestanden*. هذه المقارنة التذكّرية ليست قاعدةً شاملة عن الصرف العربي.",
      eselsbruecke:
        "احفظ ثلاثة أمثلة مع عائلاتها: aufstehen → aufgestanden (ge- بين البادئة والجذع)، besuchen → besucht (بادئة غير منفصلة)، وstudieren → studiert (-ieren). قد يساند النبر التعرّف إلى البادئة، لكن راجع البنية والصيغة المعجمية ولا تستعمل النبر وحده حكماً.",
      commonMistakes: [
        {
          wrong: "Ich habe meine Oma gebesucht.",
          right: "Ich habe meine Oma besucht.",
          whyAr: "besuchen يبدأ بالبادئة غير المنفصلة be-، وصيغة Partizip II القياسية besucht بلا ge- إضافية.",
        },
        {
          wrong: "Ich habe in Tunis gestudiert.",
          right: "Ich habe in Tunis studiert.",
          whyAr: "studieren ينتهي بـ-ieren؛ صيغة Partizip II هي studiert بلا ge-.",
        },
        {
          wrong: "Ich habe geaufstanden.",
          right: "Ich bin aufgestanden.",
          whyAr: "الصيغة aufstehen → aufgestanden تضع ge- بين البادئة والجذع، ويأخذ الفعل المساعد sein في هذا الاستعمال.",
        },
        {
          wrong: "Hast du mich angeruft?",
          right: "Hast du mich angerufen?",
          whyAr: "صيغة rufen القوية في Partizip II هي gerufen؛ ومع البادئة المنفصلة an- تصبح angerufen. المساعد هنا haben.",
        },
        {
          wrong: "Ich habe das nicht verstehen.",
          right: "Ich habe das nicht verstanden.",
          whyAr: "بعد haben في Perfekt نستخدم Partizip II: verstanden، لا المصدر verstehen. تعلّم هذه الصيغة القوية مع الفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "البادئة المنفصلة في المضارع مقابل Perfekt",
        content:
          "قارن استعمال الفعل المنفصل في جملتين: **Ich stehe um sechs auf** (المضارع المصرف؛ تنفصل البادئة في الجملة الرئيسية) و**Ich bin um sechs aufgestanden** (Partizip II؛ تكتب البادئة متصلة ويقع ge- بينها وبين الجذع). وفي المصدر بعد الفعل الناقص تكتب متصلة أيضاً: **Ich muss früh aufstehen**. الانفصال هنا سمة تركيبية في بعض التصاريف؛ لا يعني أن البادئة ليست جزءاً من الفعل.",
      },
    },
    {
      id: "t4",
      titleAr: "wollen وsollen — إتمام الأفعال الناقصة",
      titleDe: "Die Modalverben wollen und sollen",
      explanationAr:
        "**wollen** و**sollen** من الأفعال الناقصة الشائعة. يتصرّف الفعل الناقص في الجملة الرئيسية، ويأتي مصدر الفعل الآخر عادةً في نهاية المجال الفعلي:\n\n**wollen** يعبّر في أمثلة كثيرة عن رغبة أو إرادة أو نيّة: **Ich will Deutsch lernen.** قوّة الطلب ودرجة مباشرته تتأثران بالسياق والعلاقة والنبرة، فلا يوصف كل استعمال لـwollen بالفظاظة.\n\n**sollen** يعبّر، بحسب السياق، عن تكليف أو نصيحة أو توصية أو أمر منقول/متوقّع: **Der Arzt gibt mir einen Rat: „Du sollst genug Wasser trinken.“** لا توجد مطابقة آلية بين sollen و«أمر الغير» أو بين müssen و«ضرورة داخلية»؛ فكلاهما قد يتأثر بمصدر الإلزام وطريقة عرضه.\n\n**تصريف الحاضر:** *ich will, du willst, er/sie/es will, wir wollen, ihr wollt, sie/Sie wollen*؛ و*ich soll, du sollst, er/sie/es soll, wir sollen, ihr sollt, sie/Sie sollen*. لاحظ في المثالين أن صيغة ich وer متطابقة بلا نهاية شخصية ظاهرة، لكن لا تعمّم ذلك على كل فعل ألماني.\n\n**mögen وmöchte:** mögen أحد الأفعال الناقصة الستة؛ ومن تصريفاته **ich mag**. وتُستعمل صيغة Konjunktiv II **möchte** كثيراً في الطلب المهذّب: **Ich möchte bitte einen Kaffee.** وهي خيار شائع، لا الصيغة المهذّبة الوحيدة. أما **Ich will einen Kaffee** فجملة صحيحة نحوياً وقد تبدو أكثر مباشرة في بعض مواقف الخدمة، وليست خطأ مطلقاً.\n\n**تنبيه للناطق بالإنجليزية:** *will* هنا صيغة مضارع من **wollen** تعبّر عن الرغبة/النية، وليست الأداة النحوية لتكوين Futur I كما في الإنجليزية. يمكن للألمانية أن تستعمل المضارع مع ظرف زمني لخطة مستقبلية (**Ich fahre morgen nach Berlin**)، ويُبنى Futur I بـ**werden + Infinitiv** عند الحاجة؛ لا يلزم تحويل كل مستقبل إلى Futur I.",
      whyAr:
        "للتعلّم العملي، راجع تصريف الفعل والسياق الذي يقدّمه المثال. في الحاضر تتطابق هنا صيغتا **ich will / er will** و**ich soll / er soll**؛ هذه ملاحظة على هذين الفعلين في هذه الصيغة، لا قصة تاريخية تفسّر كل أوجه تصريف الأفعال الناقصة. يسرد IDS Grammis الأفعال الناقصة الستة ومعانيها السياقية، ويذكر أن mögen يظهر كثيراً في صيغة Konjunktiv II möchte. كما يميّز بين استعمال modal للتعبير عن الإرادة/التكليف/التوصية وبين أداة Futur: لا تُترجم الألمانية *will* آلياً إلى مستقبل إنجليزي. أما sollen وmüssen فلا تختزل العلاقة بينهما في ثنائية «إلزام من الخارج/ضرورة من الداخل»؛ فشدة الالتزام ومصدره والسياق عوامل مؤثرة.",
      table: {
        title: "الأفعال الناقصة الستّة — نظرة إلى صيغ شائعة",
        columns: ["الفعل", "المعنى", "ich / er", "المثال"],
        rows: [
          { label: "können", cells: ["يستطيع", "kann", "Ich kann schwimmen."] },
          { label: "mögen", cells: ["يحب؛ وتشيع صيغة الطلب möchte", "mag", "Ich mag Tee. · Ich möchte einen Kaffee."] },
          { label: "müssen", cells: ["يجب (ضرورة)", "muss", "Ich muss arbeiten."] },
          { label: "dürfen", cells: ["يُسمح له", "darf", "Hier darf man nicht rauchen."] },
          { label: "wollen", cells: ["يريد (عزم)", "will", "Ich will Deutsch lernen."] },
          { label: "sollen", cells: ["ينبغي/تكليف أو توصية بحسب السياق", "soll", "Ich soll Wasser trinken."] },
        ],
      },
      examples: [
        { de: "Ich will nächstes Jahr nach Deutschland ziehen.", ar: "أنوي الانتقال إلى ألمانيا العام القادم. (عزم ⟵ wollen)" },
        { de: "Was willst du am Wochenende machen?", ar: "ماذا تريد أن تفعل في العطلة؟ (willst بنهاية -st)" },
        { de: "Wir wollen heute Abend ins Kino gehen.", ar: "نريد الذهاب إلى السينما هذا المساء." },
        { de: "Der Lehrer sagt, wir sollen die Übung machen.", ar: "يقول المعلّم إنّ علينا عمل التمرين. (نقل أمر الغير ⟵ sollen)" },
        { de: "Soll ich das Fenster öffnen?", ar: "هل أفتح النافذة؟ (قد تأتي سؤالاً لعرض المساعدة أو طلب التوجيه بحسب السياق)" },
        { de: "Du sollst nicht so viel Zucker essen.", ar: "لا ينبغي أن تأكل سكّراً كثيراً." },
        { de: "Ich möchte bitte einen Kaffee.", ar: "أودّ قهوةً من فضلك. صيغة شائعة للطلب المهذّب." },
        { de: "Ich will gehen.", ar: "أريد/أنوي الذهاب؛ *will* صيغة من wollen وليست أداة Futur I الألمانية." },
      ],
      comparisonWithArabic:
        "في أمثلة الأفعال الناقصة، تأتي صيغة الفعل الناقص مصرّفةً ويتبعها مصدر بلا zu: **Ich will Deutsch lernen**. هذا تقريب بنيوي لمثال محدد؛ فلا نفترض أن كل استعمال عربي لـ«أريد/ينبغي أن» يطابق wollen أو sollen. قد تساعد «أريد أن أتعلم» و«ينبغي أن أشرب» في تذكّر المعنى، لكن ترجمة sollen وmüssen وwollen تتغير مع السياق. وكذلك لا تساوِ الألمانية will بالمستقبل الإنجليزي: هنا هي صيغة من wollen، وقد تعبّر عن نية تتجه إلى المستقبل من غير أن تكون علامة Futur I.",
      eselsbruecke:
        "wollen تعبّر هنا عن رغبة أو نيّة؛ sollen قد تعرض نصيحة أو تكليفاً أو توقعاً بحسب السياق؛ وmöchte صيغة شائعة مهذبة للطلب. احفظ التصريف ومصدر الفعل، ولا تجعلها مقابلات عربية أو درجات أدب ثابتة.",
      commonMistakes: [
        {
          wrong: "Er willt nach Berlin fahren.",
          right: "Er will nach Berlin fahren.",
          whyAr: "في هذا التصريف نقول er will بلا t؛ طابق صيغة الفعل مع الفاعل.",
        },
        {
          wrong: "Ich will lernen Deutsch.",
          right: "Ich will Deutsch lernen.",
          whyAr: "في جملة رئيسية خبرية مع فعل ناقص، يأتي المصدر المتعلق به عادةً في نهاية المجال الفعلي: Ich will Deutsch lernen.",
        },
        {
          wrong: "Du soll mehr für die Prüfung lernen.",
          right: "Du sollst mehr für die Prüfung lernen.",
          whyAr: "مع du نضيف -st في صيغة الحاضر هنا: du sollst. أما sollen في جملة النصيحة فهو اختيار سياقي لا تعريف وحيد للفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "القوالب الثلاثة التي تُغلق الجملة",
        content:
          "في الجمل الرئيسية الخبرية المحايدة، تقارن هذه الأمثلة بين الفعل المصرف في V2 وما يتبعه: **Ich will Deutsch lernen** (مصدر)، **Ich habe Deutsch gelernt** (Partizip II)، و**Ich stehe früh auf** (بادئة منفصلة في المضارع). هذا نمط مفيد في الأمثلة، لا قاعدة تقول إن الألمانية وحدها تضع كل متمم في آخر الجملة. وفي الجملة الفرعية يتغير ترتيب الأفعال؛ راجع أمثلة كل تركيب على حدة.",
      },
    },
  ];

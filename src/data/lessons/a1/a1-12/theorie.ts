/**
 * a1-12 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a1-12.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "وصف الطقس: es ist، es regnet، die Sonne scheint",
      titleDe: "Das Wetter beschreiben",
      explanationAr:
        "في هذه الوحدة نعرض **ثلاثة أنماط ابتدائية** لوصف الطقس، لا قائمةً حصرية بكل ما يمكن أن يقال:\n\n**١ — es ist + صفة خبرية:** Es ist kalt / warm / sonnig / windig / neblig / bewölkt. الصفة الخبرية بعد sein لا تأخذ نهاية: Es ist kalt. قارنها بصفة تسبق اسماً مثل ein kalter Tag؛ هذا استعمال آخر.\n\n**٢ — فعل طقس مع es صوريّ في الجملة الكاملة المعتادة:** Es regnet / schneit / donnert / blitzt / friert. في هذه التراكيب لا يعيّن es شخصاً أو شيئاً يمطر؛ يصف الفعل ظاهرة الطقس ويأتي معه es الصوريّ. انظر إلى المثالين: Es regnet heute. / Heute regnet es. قد يتقدّم ظرف الزمن، ويبقى الفعل المصرف في موضعه الثاني في الجملة الخبرية.\n\n**٣ — اسم الطقس فاعلٌ نحويّ:** Die Sonne scheint. / Der Wind weht. / Der Himmel ist blau. هنا يتبع الفعل فاعلاً ظاهراً، مثل Die Blätter fallen.\n\n**درجة الحرارة:** من التعبيرات القياسية Es sind zwanzig Grad (20 °C) وEs ist ein Grad. في قياس الحرارة يبقى الاسم غالباً بلا علامة جمع: 30 Grad؛ لكن Duden يسجّل جمع Grade في استعمالات أخرى، بل يورد أيضاً einige Grade kälter. لذلك لا تحفظ أن Grad لا يجمع مطلقاً.\n\n**وصف الطقس أم إحساس الشخص؟** Es ist kalt يصف الجوّ في المثال. Mir ist kalt تعبير ألماني مألوف عن شعور المتكلم بالبرد (Duden يشرحه بـich friere). أما Ich bin kalt فهي جملة سليمة من حيث البناء، لكن لا تُستعمل عادةً بوصفها العبارة المحايدة نفسها للإبلاغ عن الإحساس؛ معناها يتوقف على المقام وقد تصف حرارة الشخص/شيئاً أو معنى مجازياً. لا تسمِّها خطأً نحوياً مطلقاً.",
      whyAr:
        "تظهر صيغة es الألمانية في استعمالات متعددة: فقد تعود على اسم سابق، وقد تكون es صورية ثابتة مع بعض أفعال الطقس، وقد تكون عنصراً شكلياً في تراكيب أخرى. لذلك لا نفسّر كل es بأنه «حامل للفعل يملأ المركز الأول». في Es regnet heute يبدأ المثال بـes، أما Heute regnet es فـHeute يشغل المقدمة وes يأتي بعد الفعل؛ يشرح IDS Grammis أن es مع أفعال الطقس لا يحمل مرجعاً دلالياً.\n\nوالجملة الألمانية ليست دائماً ذات فاعل ظاهر: يذكر Duden صراحةً Mir ist kalt ضمن أمثلة الجمل التي تخلو من الفاعل، كما يُحذف الفاعل عادةً في صيغة الأمر. في المقابل تورد مراجع القواعد Es regnet مثالاً على es صوريّ مع فعل طقس. هذه أوصاف لتراكيب مختلفة، لا استثناء واحداً يفسرها كلها.\n\nفي Mir ist kalt، mir صيغة Dativ داخل هذا التعبير الألماني وتعبّر عن صاحب الإحساس. هذا لا يجعلها «جرّاً» عربياً، ولا يثبت أن تركيبها مماثل نحوياً لـDas gefällt mir لمجرد اشتراكهما في صورة mir. الأفضل حفظ التعبير وسياقه بدلاً من نقل تسمية حالة من لغة إلى أخرى.",
      table: {
        title: "صيغ الطقس الثلاث",
        columns: ["الصيغة", "مثال", "المعنى"],
        rows: [
          { label: "es ist + صفة", cells: ["Es ist kalt.", "الجو بارد"] },
          { label: "es ist + صفة", cells: ["Es ist sonnig.", "الجو مشمس"] },
          { label: "فعل طقس مع es صوريّ", cells: ["Es regnet.", "تمطر"] },
          { label: "فعل طقس مع es صوريّ", cells: ["Es schneit.", "تثلج"] },
          { label: "اسم + فعل", cells: ["Die Sonne scheint.", "تشرق الشمس"] },
          { label: "اسم + فعل", cells: ["Der Wind weht.", "تهب الرياح"] },
        ],
      },
      examples: [
        { de: "Es ist kalt und windig.", ar: "الجوّ بارد وعاصف." },
        { de: "Heute ist es sehr sonnig.", ar: "اليوم الجوّ مشمس جداً." },
        { de: "Es regnet heute.", ar: "تمطر اليوم." },
        { de: "Heute regnet es.", ar: "اليوم تمطر." },
        { de: "Es regnet seit drei Stunden.", ar: "تمطر منذ ثلاث ساعات." },
        { de: "Im Winter schneit es oft.", ar: "في الشتاء تثلج كثيراً." },
        {
          de: "Die Sonne scheint und der Himmel ist blau.",
          ar: "الشمس مشرقة والسماء زرقاء.",
        },
        {
          de: "Es sind zwanzig Grad.",
          ar: "الحرارة عشرون درجة؛ وفي هذا القياس يشيع Grad بلا علامة جمع، مع sind.",
        },
        {
          de: "Heute Nacht sind es minus fünf Grad.",
          ar: "الليلة خمس درجات تحت الصفر.",
        },
        {
          de: "Mir ist kalt. Hast du eine Jacke?",
          ar: "أشعر بالبرد. أعندك سترة؟ (إحساس ⇐ mir)",
        },
      ],
      comparisonWithArabic:
        "في العربية قد نقول «الجو بارد» أو «أنا أشعر بالبرد»، بينما تختار الألمانية تراكيب مثل Es ist kalt وMir ist kalt. هذه مقابلات معنى تقريبية، لا تطابقاً في الإعراب أو بنية الجملة. وكذلك لا ينبغي مساواة es الألمانية بضمير عربي مستتر؛ لكل لغة طرائقها في بناء جملة الطقس.",
      eselsbruecke:
        "في الجملة الخبرية الكاملة التي نتدرّب عليها: Es regnet heute؛ وإذا تقدّم ظرف الزمن: Heute regnet es. وفي الإحساس الشخصي احفظ التعبير Mir ist kalt. هذه تذكرة للأنماط الواردة هنا، لا قاعدة تفسّر كل استعمال لـes.",
      commonMistakes: [
        {
          wrong: "Ich bin kalt. (إذا كان المقصود: أشعر بالبرد الآن)",
          right: "Mir ist kalt.",
          whyAr:
            "Mir ist kalt هي الصيغة المحايدة المألوفة للتعبير عن الإحساس. لكن Ich bin kalt ليست خطأً نحوياً في كل سياق؛ قد تُفهم بحسب المقام على وصف حرارة الشخص أو معنى مجازي، فلا تُدان خارج السياق المقصود.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Es regnen.",
          right: "Es regnet.",
          whyAr:
            "في جملة الطقس الكاملة المعروضة يأتي الفعل regnen مصرفاً مع es الصوريّ بصيغة الغائب المفرد: regnet؛ أما regnen هنا فمصدر لا يحقق صيغة الفعل المطلوبة.",
          classification: "error",
        },
        {
          wrong: "Der Wetter ist schön.",
          right: "Das Wetter ist schön.",
          whyAr:
            "Wetter اسم محايد في الألمانية، لذلك يقال das Wetter. جنس المقابل العربي لا يحدد جنس الاسم الألماني.",
          classification: "error",
        },
        {
          wrong: "Es ist zwanzig Grade. (قياس حرارة)",
          right: "Es sind zwanzig Grad.",
          whyAr:
            "في التعبير المعتاد عن درجة الحرارة يكتب Duden 20 Grad، ويشيع معه Es sind. لكن Grade جمع موجود في استعمالات أخرى؛ الخطأ هنا محصور في صيغة قياس الحرارة المقصودة، لا في وجود الجمع مطلقاً.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "es للطقس أم mir للإحساس؟",
        content:
          "في أمثلة الطقس نقول Es regnet أو Es ist kalt؛ وفي المثال الشخصي نقول Mir ist kalt. صيغة mir جزء من التعبير الألماني في Dativ، وليست ترجمةً مباشرةً لحالة الإعراب العربية. وIch bin kalt تظل صيغةً ممكنة في سياقات أخرى، لكنها ليست العبارة المحايدة المقصودة عن الإحساس هنا.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل werden: التصريف ومعنى التغيّر",
      titleDe: "Das Verb werden: Formen und Veränderung",
      explanationAr:
        "في هذا الدرس نتدرّب على werden بمعنى «يصير/يصبح» في أمثلة التغيّر، ونميّزه عن وصف الحالة القائمة.\n\n**تصريف المضارع (Indikativ):** ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie (الجمع) / Sie (صيغة الاحترام): werden. يعرض Duden الفعل بوصفه غير منتظم؛ احفظ صورتَي du wirst وer wird كما هما. في هاتين الصيغتين يتغير جذر الفعل (e إلى i)، وليس التفسير حذف حرف e بسبب ثقل صوتي.\n\n**المعنى المستهدف هنا: تغيّر الحالة:**\n· Es wird kalt. (يتحوّل الجوّ إلى البرودة، أو تشير النشرة إلى ذلك بحسب السياق)\n· Die Tage werden kürzer. (تصير الأيام أقصر)\n· Ich werde müde. (أبدأ أشعر بالتعب)\n\n**مقارنة سياقية بين ist وwird:** Es ist kalt يصف حالةً قائمة في السياق، أما Es wird kalt فيعرض انتقالاً إلى البرودة أو توقّع هذا الانتقال. كلتا الجملتين صحيحة، ولا يحدد الزمن وحده الاختيار من دون سياق.\n\nويستعمل هذا الدرس أمثلةً من sein وhaben وwerden، وهي أفعال مساعدة شائعة في الألمانية، لكنه لا يقرر أنها كل الأفعال المساعدة. كذلك لا يخلط بين werden الفعل الدال على التغيّر في Es wird kalt وبين تراكيب أخرى: Futur I مثل Morgen wird es regnen، والمبني للمجهول مثل Das Haus wird gebaut. هذه وظائف أخرى لا تقيسها تمارين الدرس.\n\nويأتي werden مع خبر اسمي أيضاً: Er wird Arzt (يصير طبيباً؛ المهنة هنا بلا أداة تنكير)، وEs wird Winter (يبدأ الشتاء/يدخل).",
      whyAr:
        "يصنّف Duden werden فعلاً غير منتظم؛ ويعرض جدول الدرس صيغ المضارع المتدرّب عليها: werde, wirst, wird, werden, werdet, werden. لذلك نحفظ الأشكال المعيارية، ولا نخترع لها تفسيراً صوتياً من نوع «حذف e لأن مجموعة الحروف ثقيلة». كما يشرح Duden معنى werden الفعليّ بوصفه الدخول في حالة أو اكتساب صفة، ويورد أمثلةً مثل das Wetter wurde schlechter وmüde werden.\n\nتظهر الكلمة أيضاً بوظيفة الفعل المساعد في بناء المستقبل والمبني للمجهول، لكن هذا لا يجعل كل ظهور لها مستقبلاً: في Es wird kalt يأتي معنى التغيّر بحسب المثال؛ أما wird regnen وwird gebaut فتركيبان مختلفان. الفصل بين الوظائف يمنع تحويل «يصبح» و«سوف» إلى قاعدة واحدة.\n\nعند عرض حالة باردة موجودة نقول Es ist kalt في السياق المقصود، وعند وصف تغيّر نحو البرودة يمكن أن نقول Es wird kalt. إذا كان المقام نشرةً أو توقّعاً فقد يحمل الثاني قيمة مستقبلية؛ لا نصف الصيغتين بإحداهما «صحيحة» والأخرى «خاطئة» من دون تحديد المقصود.",
      table: {
        title: "تصريف werden",
        columns: ["الضمير", "werden", "مثال"],
        rows: [
          { label: "ich", cells: ["werde", "Ich werde müde."] },
          { label: "du", cells: ["wirst", "Du wirst müde."] },
          { label: "er/sie/es", cells: ["wird", "Es wird kalt."] },
          { label: "wir", cells: ["werden", "Wir werden müde."] },
          { label: "ihr", cells: ["werdet", "Ihr werdet müde."] },
          { label: "sie (Plural) / Sie (Höflichkeitsform)", cells: ["werden", "Sie werden stark."] },
        ],
      },
      examples: [
        {
          de: "Im Herbst werden die Blätter bunt.",
          ar: "في الخريف تصير الأوراق ملوّنة. (جمع ⇐ werden)",
        },
        {
          de: "Es wird kalt. Nimm eine Jacke mit!",
          ar: "يصير الجوّ بارداً. خذ سترةً معك!",
        },
        { de: "Ich werde müde.", ar: "أشعر بأنني أزداد تعباً." },
        {
          de: "Du wirst schnell besser.",
          ar: "تتحسّن بسرعة / ستتحسّن بسرعة بحسب السياق. (تصريف المضارع: du wirst)",
        },
        { de: "Das Wetter wird morgen besser.", ar: "سيتحسّن الطقس غداً / سيصبح الطقس أفضل غداً." },
        {
          de: "Es wird Winter und die Tage werden kürzer.",
          ar: "يدخل الشتاء وتصير الأيّام أقصر.",
        },
        {
          de: "Mein Bruder wird Arzt.",
          ar: "أخي سيصير طبيباً. (مهنة بلا أداة)",
        },
        {
          de: "Es ist kalt, aber morgen wird es wärmer.",
          ar: "الجوّ بارد، لكن غداً سيصبح أدفأ.",
        },
      ],
      comparisonWithArabic:
        "في هذه الأمثلة يقابل werden غالباً «يصير/يصبح» عند وصف تحوّلٍ في الحالة، لكن المقابلة تقريبية ولا تعني تطابق البنية أو الوظيفة. لا تُساوِ هذا الاستعمال بالفعل المساعد للمستقبل؛ في أمثلة الدرس werden + صفة/اسم، أما استعماله مع مصدر أو اسم مفعول فينتمي إلى بناء آخر.",
      eselsbruecke:
        "للتغيّر: werden + صفة خبرية بلا نهاية، مثل Es wird kalt. واحفظ التصريف كما في الجدول: werde · wirst · wird · werden · werdet · werden؛ هذا ملخّص للصيغ المعروضة، لا تفسير صوتي لها.",
      commonMistakes: [
        {
          wrong: "Du wird müde. (Indikativ Präsens)",
          right: "Du wirst müde.",
          whyAr:
            "في المضارع الإخباري مع du الصيغة هي wirst. أما werdest فهي صيغة صحيحة في Konjunktiv I في سياق نقل الكلام، فلا نعرضها كخطأ مطلق خارج سياق المضارع الإخباري.",
          classification: "error",
        },
        {
          wrong: "Ich wird müde.",
          right: "Ich werde müde.",
          whyAr:
            "مع ich نستخدم werde؛ wird هي صيغة الغائب المفرد في المضارع الإخباري.",
          classification: "error",
        },
        {
          wrong: "Es wird kaltes.",
          right: "Es wird kalt.",
          whyAr:
            "الصفة الخبرية بعد werden في المثال تبقى بلا نهاية؛ النهايات تظهر في سياقات أخرى، مثل ein kalter Tag عندما تسبق الصفة اسماً.",
          classification: "error",
        },
        {
          wrong: "Es wird kalt. (أصف حالةً مستقرة قائمة الآن)",
          right: "Es ist kalt.",
          whyAr:
            "wird صيغة سليمة عند وصف التحوّل أو التوقّع؛ إذا كان المقصود الحالة القائمة في هذا السياق، فـist أنسب. هذا فرق معنى وسياق، لا خطأ نحوي مطلق.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "werden بوصفه فعل تغيّر ووظائفه المساعدة الأخرى",
        content:
          "في هذا الدرس: Es wird kalt = يتغيّر الطقس نحو البرودة. وفي تراكيب أخرى: Futur I مثل Ich werde lernen، والمبني للمجهول مثل Das Haus wird gebaut. تشابه شكل werden لا يجعل هذه الوظائف موضوعاً واحداً، ولا تعني أمثلة الدرس أننا قيّمنا بناء المستقبل أو المبني للمجهول.",
      },
    },
    {
      id: "t3",
      titleAr: "تعبيرات زمنية شائعة مع الطقس",
      titleDe: "Zeitangaben im Wetterkontext",
      explanationAr:
        "تتعلّم هنا تعبيرات زمنية شائعة في جمل الطقس. هي أنماط استعمال متداولة ينبغي حفظ أمثلتها؛ لا تشتقّ حروفها من قاعدة عامة عن «حجم» الوحدة أو من معناها المكاني:\n\n· **um + الساعة:** um sieben Uhr / um halb neun.\n· **am + يوم أو تاريخ، ومن تعبيرات اليوم المألوفة:** am Montag، am 3. Mai، am Morgen، am Abend.\n· **im + شهر أو فصل:** im Mai، im Sommer.\n· **دون حرف جر في أمثلة ظرفية مألوفة:** heute، morgen (غداً)، gestern.\n· **تعبير زمني شائع:** in der Nacht. احفظه كما هو؛ لا تفسّره بقاعدة أن كل أجزاء اليوم تأخذ am ما عدا الليل.\n\nقارن هذه الصيغ في أمثلتها: **morgen** بحرف صغير تعني غداً، أما **Morgen** اسمٌ بحرف كبير؛ نقول Am Morgen = في الصباح، وmorgen früh = غداً صباحاً. وتُكتب الأسماء الألمانية بحرف كبير، لذا تساعد الكتابة على التمييز.\n\nوتظهر صيغ زمنية أخرى مع الطقس: **seit drei Stunden** تعني أن المطر مستمر منذ ثلاث ساعات في سياق المثال؛ **ab morgen** تعني ابتداءً من الغد. أما **in einer Stunde** فتُفهم هنا على أنها بعد ساعة من نقطة مرجعية مستقبلية في هذا السياق؛ ليست قاعدةً آلية تقول إن كل in + مدة تعني دائماً «بعد» مهما كان المقام.\n\nتعرض الأمثلة أنماطاً شائعة لا جدولاً شاملاً لكل حروف الجر والتعابير الزمنية الألمانية.",
      whyAr:
        "اختيار am أو im أو um يرتبط بالتعبير الألماني المألوف الذي يرافق نوعاً معيناً من الوقت، لا بقاعدة تعليمية موثقة عن «صِغر» الوقت أو «كبره». لذلك نقدّم تراكيب محددة يمكن استعمالها: um sieben Uhr، am Montag، im Sommer. ولا ننقل معنى حرف المكان إلى الزمن على نحو حرفي؛ يبيّن IDS Grammis أن الاستعمال الزمني لحروف الجر له أنماطه وسياقاته الخاصة.\n\nكذلك نميّز ظرف morgen الصغير من الاسم Morgen الكبير وفق قواعد الكتابة الألمانية، ونقدّم in einer Stunde بمعناه في مثال ذي منظور مستقبلي فقط. هذا يمنع التعميم أن كل عبارة in + مدة تشير إلى نقطة زمنية واحدة بمعزل عن السياق.",
      table: {
        title: "أنماط شائعة في أمثلة الدرس",
        columns: ["الصيغة", "مثال الاستعمال", "مثال"],
        rows: [
          { label: "um", cells: ["مع الساعة", "Um sieben Uhr ist es dunkel."] },
          {
            label: "am",
            cells: ["مع يوم أو تعبير يومي مألوف", "Am Montag regnet es."],
          },
          { label: "im", cells: ["مع شهر أو فصل", "Im Winter ist es kalt."] },
          {
            label: "بلا حرف جر",
            cells: ["heute / morgen / gestern", "Morgen scheint die Sonne."],
          },
          {
            label: "in der Nacht",
            cells: ["تعبير شائع يُحفظ كما هو", "In der Nacht wird es kühl."],
          },
        ],
      },
      examples: [
        {
          de: "Bei uns in Tunis ist es im Sommer oft heiß.",
          ar: "عندنا في تونس يكون الجو صيفاً حاراً غالباً.",
        },
        {
          de: "Am Wochenende bleibe ich zu Hause.",
          ar: "في عطلة الأسبوع أبقى في البيت.",
        },
        {
          de: "Morgen wird es kalt.",
          ar: "غداً يُتوقّع أن يصبح الجوّ بارداً في هذا السياق. (بلا حرف جرّ)",
        },
        {
          de: "Am Abend regnet es oft im Herbst.",
          ar: "في المساء تمطر كثيراً في الخريف.",
        },
        {
          de: "In der Nacht sind es nur fünf Grad.",
          ar: "في الليل تكون الحرارة خمس درجات فقط.",
        },
        { de: "Es regnet seit drei Stunden.", ar: "تمطر منذ ثلاث ساعات." },
        {
          de: "In einer Stunde hört der Regen auf.",
          ar: "في هذا السياق، يتوقّف المطر بعد ساعة من الآن.",
        },
        {
          de: "Ab morgen wird es wärmer.",
          ar: "ابتداءً من الغد يُتوقّع أن يصبح الجوّ أدفأ.",
        },
      ],
      comparisonWithArabic:
        "تتوزع تعبيرات الوقت بين العربية والألمانية بطرائق لا تتطابق واحداً بواحد. تعلّم الصيغ الألمانية كما ترد في الأمثلة، ولا تفترض أن حرفاً عربياً واحداً يقابل am أو im أو um في كل سياق. كما أن eine Stunde في مثال مستقبلي تعني بعد ساعة من نقطة المرجع في ذلك المقام؛ يظل السياق مهماً.",
      eselsbruecke:
        "احفظ كل مثال مع عبارته: um sieben Uhr · am Montag · im Sommer · in der Nacht؛ وميّز morgen = غداً من am Morgen = في الصباح. أما in einer Stunde فافهمها وفق نقطة الزمن في السياق.",
      commonMistakes: [
        {
          wrong: "In Montag regnet es.",
          right: "Am Montag regnet es.",
          whyAr:
            "في هذا التعبير الزمني القياسي مع اسم يوم نقول am Montag. تعلّم الصيغة الواردة هنا بدلاً من تعميم حرف جر عربي واحد على كل سياق ألماني.",
          classification: "error",
        },
        {
          wrong: "Am morgen scheint die Sonne. (والمقصود: غداً)",
          right: "Morgen scheint die Sonne.",
          whyAr:
            "إذا كان المقصود غداً فـmorgen ظرف يكتب بحرف صغير ولا يسبقه am. أما am Morgen فتعني في الصباح، وMorgen اسم يُكتب بحرف كبير.",
          classification: "error",
        },
        {
          wrong: "Am der Nacht ist es kalt.",
          right: "In der Nacht ist es kalt.",
          whyAr:
            "التعبير الشائع في المثال هو in der Nacht. احفظ هذا التركيب؛ لا نعلّل اختياره بقاعدة تقول إن كل أجزاء اليوم تأخذ am عدا الليل.",
          classification: "error",
        },
        {
          wrong: "In einer Stunde = immer und in jedem Kontext „nach einer Stunde“.",
          right: "In einer Stunde = hier, mit künftigem Bezugspunkt: nach einer Stunde.",
          whyAr:
            "في المثال ذي المنظور المستقبلي قد تعني in einer Stunde «بعد ساعة» من نقطة المرجع. لا يصح تحويل هذا المثال إلى قاعدة تلغي اختلاف المعنى والسياق في سائر استعمالات in مع المدة.",
          classification: "unverified-claim",
        },
      ],
      relatedRuleComparison: {
        title: "تراكيب زمنية تُتعلّم في أمثلتها",
        content:
          "انظر إلى كل عبارة في سياقها: am Montag، im Sommer، um sieben Uhr، in der Nacht. هي أنماط شائعة مختلفة، ولا يفسّرها سُلّم مكاني أو مقياس ثابت لحجم الوقت. وبالمثل يعتمد فهم in einer Stunde على نقطة المرجع والسياق.",
      },
    },
    {
      id: "t4",
      titleAr: "أدوات ربط شائعة: und · aber · oder · denn",
      titleDe: "Häufige Konnektoren: und, aber, oder, denn",
      explanationAr:
        "نستعمل أدوات ربط شائعة لبيان الإضافة أو الاختيار أو التضاد أو السبب. هنا أمثلة على **جمل خبرية مستقلة**؛ لكل جملة منها ترتيبها، ولا نعدّ أداة الربط عنصراً داخل الجملة التالية عند شرح موضع الفعل في هذه الأمثلة:\n\n· **und** يضيف معلومة: Es ist kalt und der Wind weht.\n· **aber** يقدّم تضاداً: Es ist kalt, aber die Sonne scheint.\n· **oder** يقدّم اختياراً: Gehen wir spazieren oder bleiben wir zu Hause? في السؤال البديل يظل ترتيب الفعل متأثراً بكون الجملة سؤالاً، لا بوجود oder وحده.\n· **denn** يقدّم سبباً في جملة رئيسية: Ich bleibe zu Hause, denn es regnet.\n\n**موضع الفعل:** في كل جملة خبرية مستقلة معتادة يبقى الفعل المصرف في الموضع الثاني من جملته: Es ist kalt, aber die Sonne scheint؛ بعد aber تبدأ الجملة الثانية بفاعلها die Sonne ثم الفعل scheint. هذه طريقة تعليمية لقراءة الأمثلة، وليست وصفاً شاملاً لكل استعمال أو تصنيف نحوي للأدوات.\n\n**الفاصلة في الأمثلة:** تسبق الفاصلة aber وdenn عندما تربطان جملتين مستقلتين كما في المثالين. ولا توضع عادةً فاصلة قبل und أو oder في الوصل العادي، لكن قد تسمح القواعد بإظهار فاصلة بين جملتين مستقلتين لتوضيح البنية. لا نعمّم حكماً واحداً على كل أنواع الجمل والروابط.\n\n**denn وweil:** كلاهما يقدّم سبباً في المثال، لكن ترتيب الفعل يختلف: Ich bleibe zu Hause, denn das Wetter ist schlecht؛ مقابل Ich bleibe zu Hause, weil das Wetter schlecht ist. في جملة weil التابعة يأتي الفعل المصرف في النهاية. هذا فرق بين المثالين المعروضين، وليس تعليلاً بأن رابطاً «لا يدخل الجملة» دائماً من كل وجه.\n\nيمكن لـund وoder أيضاً أن تربطا كلمات أو عبارات قصيرة لا جملتين كاملتين؛ لذلك لا تستنتج من كل مثال بسيط قاعدة موضع الفعل.",
      whyAr:
        "تدرب الأمثلة على أربع علاقات سهلة الملاحظة: الإضافة، والاختيار، والتضاد، والسبب. السياق هو ما يحدد الرابط، لا مقابلة حرفية آلية بين أداة عربية وألمانية.\n\nوعند وصل جملتين رئيسيتين، يساعد تقطيع المثال إلى جملتين على رؤية ترتيب كل واحدة: Es ist kalt | aber | die Sonne scheint. في الجملة الثانية die Sonne أول عنصر داخل الجملة ثم يأتي الفعل scheint في الموضع الثاني. هذا وصف للجمل الخبرية المستقلة المعروضة، لا قاعدة تقول إن كل رابط في الألمانية يوضع خارج الجملة في جميع التحليلات والاستعمالات.\n\nأما الفاصلة فمرتبطة ببنية الجملة وقواعد الكتابة، لا بفكرة أن كل جملة ألمانية تأخذ فاصلة قبل كل رابط. تبيّن قواعد Grammis أن الفاصلة لا تلزم عادةً مع und/oder في الوصل العادي، مع إمكان إظهارها في بعض الجمل المستقلة للتوضيح، بينما تسبق aber الفاصلة في الأمثلة المقصودة هنا. لذلك يذكر الجدول نوع البنية المقصودة صراحةً.",
      table: {
        title: "وظائف الروابط وعلامات الترقيم في أمثلة الدرس",
        columns: ["الأداة", "العلاقة", "الفاصلة بين جملتين مستقلتين؟"],
        rows: [
          {
            label: "und",
            cells: ["إضافة", "لا عادةً؛ يمكن إظهارها أحياناً للتوضيح"],
          },
          {
            label: "aber",
            cells: ["تضاد", "نعم في أمثلة الوصل هنا"],
          },
          {
            label: "oder",
            cells: ["اختيار", "لا عادةً؛ يمكن إظهارها أحياناً للتوضيح"],
          },
          {
            label: "denn",
            cells: ["سبب في جملة رئيسية", "نعم بين الجملتين في المثال"],
          },
          {
            label: "جملة خبرية مستقلة",
            cells: ["ترتيب كل جملة على حدة", "الفعل المصرف في الموضع الثاني عادةً"],
          },
        ],
      },
      examples: [
        { de: "Es ist kalt und der Wind weht.", ar: "الجوّ بارد وتهبّ الريح." },
        {
          de: "Es ist kalt, aber die Sonne scheint.",
          ar: "الجوّ بارد لكنّ الشمس مشرقة. (الفاعل أوّلاً بعد aber)",
        },
        {
          de: "Ich bleibe zu Hause, denn es regnet.",
          ar: "أبقى في البيت لأنّها تمطر.",
        },
        {
          de: "Gehen wir spazieren oder bleiben wir hier?",
          ar: "أنذهب في نزهة أم نبقى هنا؟",
        },
        {
          de: "Im Sommer ist es heiß, aber im Winter wird es kalt.",
          ar: "في الصيف حارّ، لكن في الشتاء يصير بارداً.",
        },
        {
          de: "Ich nehme den Regenschirm mit, denn das Wetter ist schlecht.",
          ar: "آخذ المظلّة معي لأنّ الطقس سيّئ.",
        },
        {
          de: "Heute schneit es und morgen wird es noch kälter.",
          ar: "اليوم تثلج وغداً يصير أبرد.",
        },
        {
          de: "Der Himmel ist grau, aber es regnet nicht.",
          ar: "السماء رمادية لكنّها لا تمطر.",
        },
      ],
      comparisonWithArabic:
        "تعبّر هذه الأدوات عن علاقات مثل الإضافة والاختيار والتضاد والسبب، لكن مقابلاتها العربية تقريبية وتتأثر بالسياق. كذلك لا ننقل ترتيب الكلمات أو علامات الترقيم بين اللغتين مباشرةً؛ نتعلّم هنا أمثلة ألمانية محددة وننتبه إلى حدود القاعدة التي تعرضها. وتتبدل الصيغة باختلاف المقام.",
      eselsbruecke:
        "اربط كل أداة بالمعنى في المثال: und إضافة، oder اختيار، aber تضاد، denn سبب. وعند وصل جملتين خبريتين مستقلتين، افحص ترتيب كل جملة وعلامة الترقيم الخاصة بالتركيب.",
      commonMistakes: [
        {
          wrong: "Es ist kalt, aber scheint die Sonne. (جملة خبرية)",
          right: "Es ist kalt, aber die Sonne scheint.",
          whyAr:
            "في الجملة الخبرية المستقلة المقصودة تبدأ الجملة الثانية بالفاعل die Sonne ثم يأتي الفعل المصرف في موضعه الثاني. أما ترتيب الفعل أولاً فيلائم أنماطاً أخرى، مثل السؤال، ولا يُستخدم هنا لمجرد وجود aber.",
          classification: "error",
        },
        {
          wrong: "Ich bleibe zu Hause denn es regnet.",
          right: "Ich bleibe zu Hause, denn es regnet.",
          whyAr:
            "في المثال تربط denn جملتين مستقلتين، وتوضع الفاصلة بينهما. لا نعمّم هذا الحكم على كل استعمال لـund أو oder.",
          classification: "error",
        },
        {
          wrong: "Ich bleibe zu Hause, denn das Wetter schlecht ist.",
          right: "Ich bleibe zu Hause, denn das Wetter ist schlecht.",
          whyAr:
            "بعد denn في هذا المثال تأتي جملة رئيسية بترتيبها المعتاد: الفاعل das Wetter ثم الفعل ist. أما weil فتُدخل هنا جملة تابعة ويأتي فعلها في النهاية: weil das Wetter schlecht ist.",
          classification: "error",
        },
        {
          wrong: "Es ist kalt und aber sonnig. (أريد رابطاً واحداً للتضاد)",
          right: "Es ist kalt, aber sonnig.",
          whyAr:
            "في هذا التمرين طُلب رابط واحد للتضاد، لذلك نختار aber وحدها. لا نحكم من هذا القيد على كل سياق قد تجتمع فيه und وaber؛ فالملاحظة هنا عن ملاءمة الصياغة للمقصود المحدد، لا عن استحالة مطلقة.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "العنصر الأول داخل الجملة أم الرابط؟",
        content:
          "قارن الأمثلة الخبرية: (١) Die Sonne scheint. (٢) Heute scheint die Sonne: اليوم عنصر الجملة الأول، والفعل المصرف ثانٍ. (٣) …, aber die Sonne scheint: أداة الربط ليست العنصر الأول داخل الجملة الخبرية التالية؛ die Sonne عنصرها الأول ثم يأتي scheint. هذا تمثيل تعليمي لهذه الجمل المستقلة، ولا يمتد تلقائياً إلى الأسئلة أو كل أنواع الروابط.",
      },
    },
  ];

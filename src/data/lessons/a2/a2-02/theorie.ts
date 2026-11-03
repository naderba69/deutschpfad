/**
 * a2-02 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-02.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
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
          ar: "طاب يومك، أودّ موعداً. عندي ألمٌ شديد في الأسنان.",
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
  ];

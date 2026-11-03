/**
 * a2-07 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-07.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "تركيب es gibt مع Akkusativ",
      titleDe: "„Es gibt“ + Akkusativ",
      explanationAr: `نستعمل es gibt لذكر وجود شخص أو شيء أو عدمه: Es gibt eine Bank in der Nähe. في هذا التركيب يأتي الاسم أو الضمير بعده في Akkusativ. يظهر الفرق بوضوح مع الاسم المذكر المفرد: der Park يصبح einen Park، وkein Park يصبح keinen Park. أما المؤنث والمحايد والجمع فقد تتطابق بعض صور المقال فيه مع Nominativ؛ فـeine Bank وein Konto لا يبدوان مختلفين شكلاً هنا. لا تستنتج من ثبات شكل المقال أن الحالة لم تتغير؛ افحص التركيب الكامل وجنس الاسم.

لا تحفظ العبارة على أنها شكل فعل لا يتغير في كل الأزمنة. في الحاضر نقول Es gibt einen Park، وفي الماضي Es gab einen Park أو Es hat einen Park gegeben. وفي السؤال البسيط يتقدم الفعل المصرف: Gibt es hier einen Park? وإذا جاء ظرف مكان أولاً بقي الفعل في المرتبة الثانية: In der Nähe gibt es eine Bank. الذي يبقى مفرداً في أمثلة الحاضر هو الفعل gibt لأن الفاعل الشكلي es مفرد؛ لا يتبع الفعلَ جمعُ الشيء المذكور: Es gibt viele Banken.

تعرّف في هذا الدرس على القوالب الأكثر شيوعاً، ولا تستبدل es gibt آلياً بكل جملة عربية فيها «يوجد» أو «هناك»؛ اختر الصياغة الألمانية بحسب ما تريد قوله. انتبه أيضاً إلى أن مجموعة المكان، مثل in der Stadt أو neben dem Bahnhof، ليست هي الاسم الواقع بعد es gibt؛ حالة تلك المجموعة تتأثر بحرف الجر وبالمعنى المكاني. أما اسم Geldautomat فله صيغة معجمية خاصة في المفرد: der Geldautomat، لكن den/einen Geldautomaten. احفظ الكلمة مع صيغتها ولا تعممها على كل الأسماء.`,
      whyAr: `صيغة Akkusativ هنا ليست نتيجة ترجمة حرفية لكلمة gibt إلى «يعطي»، ولا وسيلة لتفسير معنى الوجود بقصة اشتقاقية. هي جزء من بناء ألماني موثّق: Duden يورد أمثلة مثل es gibt einen Gott وes gibt viele Fische، وGrammis يصف es في بعض تراكيب الوجود بأنه عنصر شكلي لا يحمل مرجعاً مستقلاً. لذلك تعلّم الإطار النحوي كاملاً: es gibt + اسم في Akkusativ، ثم راقب ما الذي يتغير فعلاً في أداة الاسم. كذلك افصل بين تصريف الفعل والزمن: Präsens gibt، Präteritum gab، وPerfekt hat … gegeben. صيغة Gibt es…? ترتيب سؤال، وليست دليلاً على أن es gibt تركيب غير قابل للتصريف.`,
      table: {
        title: "أشكال شائعة في تركيب es gibt",
        columns: ["الاستعمال", "المثال الألماني", "ملاحظة"],
        rows: [
          {
            label: "إثبات — اسم مؤنث",
            cells: ["Es gibt eine Bank.", "يظهر Akkusativ، وشكل eine هنا مثل Nominativ."],
          },
          {
            label: "إثبات — اسم مذكر",
            cells: ["Es gibt einen Park.", "يتغير ein إلى einen."],
          },
          {
            label: "إثبات — اسم محايد",
            cells: ["Es gibt ein Konto.", "الجملة صحيحة؛ شكل ein لا يتغير هنا."],
          },
          {
            label: "مفعول جمع",
            cells: ["Es gibt viele Banken.", "يبقى فعل الحاضر gibt مفرداً."],
          },
          {
            label: "سؤال",
            cells: ["Gibt es hier eine Filiale?", "يتقدم الفعل المصرف في السؤال."],
          },
          {
            label: "نفي",
            cells: ["Es gibt keinen Geldautomaten.", "den Geldautomaten صيغة Akkusativ للمذكر."],
          },
          {
            label: "الماضي",
            cells: ["Früher gab es hier eine Bank.", "يتغير الفعل مع الزمن."],
          },
        ],
      },
      examples: [
        { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
        { de: "Es gibt einen Park im Zentrum.", ar: "يوجد منتزه في وسط المدينة." },
        { de: "Es gibt ein Konto für den Alltag.", ar: "يوجد حساب للاستخدام اليومي." },
        { de: "Gibt es hier einen Geldautomaten?", ar: "هل يوجد صراف آلي هنا؟" },
        { de: "Es gibt keine Filiale am Bahnhof.", ar: "لا يوجد فرع مصرفي في المحطة." },
        { de: "In der Nähe gibt es mehrere Banken.", ar: "يوجد في الجوار عدة بنوك." },
        { de: "Früher gab es hier eine kleine Bank.", ar: "كان يوجد هنا مصرف صغير سابقاً." },
        { de: "Es hat früher hier einen Geldautomaten gegeben.", ar: "كان يوجد هنا صراف آلي سابقاً." },
      ],
      comparisonWithArabic: `قد نترجم Es gibt eine Bank إلى «يوجد بنك» أو «هناك بنك»، لكن التشابه في المعنى لا يجعل بنية اللغتين متطابقة. في الألمانية يظل تركيب es gibt متبوعاً بالاسم في Akkusativ، ويظهر ذلك خصوصاً مع المذكر: einen Park. وفي العربية قد تتغير صيغة الفعل بحسب الاسم أو التركيب، ولا توجد أداة ألمانية تتبدل وفق الحالات بالطريقة نفسها. لذا فـ«يوجد» ترجمة تقريبية لهذا المثال وليست قاعدة مقابلة لكل حالة. عند تكوين السؤال الألماني نبدأ بالفعل: Gibt es…?؛ أما السؤال العربي فيبنى بأدواته وترتيبه المعتاد. تعلّم أمثلة اللغتين بمعناها وسياقها، ولا تنقل اسم الحالة أو علامة الإعراب من لغة إلى الأخرى آلياً.`,
      eselsbruecke:
        "احفظ القالب مع المثال: es gibt + Akkusativ؛ وفي سؤال نعم/لا ابدأ بالفعل: Gibt es …? وتعلّم اسم Geldautomat مع صيغته einen Geldautomaten.",
      commonMistakes: [
        {
          wrong: "Es gibt ein Bank.",
          right: "Es gibt eine Bank.",
          classification: "error",
          whyAr:
            "Bank اسم مؤنث، وصيغته في هذا المثال eine Bank. لا يصح اختيار ein اعتماداً على معنى «واحد» فقط؛ طابق أداة الاسم مع الجنس والحالة.",
        },
        {
          wrong: "Es geben viele Banken.",
          right: "Es gibt viele Banken.",
          classification: "error",
          whyAr:
            "في الحاضر يأتي الفعل مفرداً لأن الفاعل الشكلي es مفرد. وجود اسم جمع بعده لا يحوّل gibt إلى geben.",
        },
        {
          wrong: "Es gibt der Park.",
          right: "Es gibt einen Park.",
          classification: "error",
          whyAr:
            "بعد es gibt نستخدم الاسم في Akkusativ. ومع اسم مذكر غير معيّن تتغير أداة ein إلى einen؛ der هنا لا يحقق الصيغة المطلوبة.",
        },
        {
          wrong: "Es gibt keinen Automat.",
          right: "Es gibt keinen Automaten.",
          classification: "error",
          whyAr:
            "Automat من الأسماء المذكرة ذات الصيغة الضعيفة: den Automaten، ولذلك نقول keinen Automaten. هذه صيغة معجمية خاصة تُحفظ مع الاسم، لا قاعدة تعمم على كل الأسماء.",
        },
      ],
      relatedRuleComparison: {
        title: "es gibt أم sein؟",
        content:
          "تقرر Es gibt einen Geldautomaten وجود شيء. أما Der Geldautomat ist neben der Bank فتحدد موقع شيء معيّن. المتمم بعد es gibt في المثال الأول في Akkusativ، بينما Geldautomat هو الفاعل في Nominativ مع sein.",
      },
    },
    {
      id: "t2",
      titleAr: "صيغ الضمائر الشخصية بعد الأفعال",
      titleDe: "Personalpronomen im Akkusativ und Dativ",
      explanationAr: `للضمائر الشخصية صيغ مختلفة بحسب الشخص والعدد، وبحسب جنس الغائب المفرد، وبحسب الحالة الألمانية. من الصيغ التي نحتاجها هنا: ich — mich — mir، du — dich — dir، er — ihn — ihm، sie — sie — ihr، es — es — ihm. وفي الجمع: wir — uns — uns، ihr — euch — euch، sie — sie — ihnen. أما صيغة الاحترام فتكتب بحرف كبير: Sie في Nominativ وAkkusativ، وIhnen في Dativ.

اختيار الضمير لا يعتمد على ترجمة عربية ثابتة؛ انظر إلى الفعل أو حرف الجر في الجملة. الفعل sehen في معنى رؤية شخص أو شيء يأخذ عادةً مكمّلاً في Akkusativ، لذلك نقول Ich sehe dich أو Sie sieht mich. أما helfen وgehören فيطلبان Dativ: Ich helfe dir، Das Buch gehört ihm. وdanken يأخذ مكمّلاً في Dativ عندما نذكر الشخص الذي نشكره: Ich danke dir. ويأخذ حرف الجر mit أيضاً Dativ في mit mir. احفظ الفعل مع المثال والضمير، وميّز بين Dativ يحكمه فعل وبين مجموعة اسمية يحكمها حرف جر.

في هذا الدرس نركّز على صيغ كثيرة الورود، ولا ندّعي أن الأمثلة المختارة تغطي كل استخدامات الضمائر أو كل أفعال الألمانية. كما أن تكرار الضمير نفسه في حالات متعددة لا يعني أن صيغته واحدة في كل جملة: uns وeuch لهما الصورة نفسها في الجدول المعروض، بينما ich/mich/mir وdu/dich/dir تتمايز بوضوح. صيغة Sie الرسمية تُحفظ مستقلةً مع كتابة الحرف الكبير.`,
      whyAr: `قد تقابل dich وdir الشخص نفسه في ترجمتين عربيتين، لكنهما ليسا بديلين حرّين في الجملة الألمانية. الفعل يحدد نوع المتمم الذي يحتاجه: sehen في المثال المختار يأتي مع Akkusativ، وhelfen مع Dativ، وgehören مع Dativ. لهذا نقول Ich sehe dich لكن Ich helfe dir، مع أن الترجمتين العربيتين قد تكتبان ضمير المخاطب نفسه متصلاً بالفعل. لا تستنتج الحالة من ترجمة مفردة مثل «لك» أو «إياك»، ولا تفسّر Dativ على أنه علامة جر عربية. تعلّم كل فعل مع إطار استعماله، واستعمل الجدول لتذكر الصيغة بعد أن تحدد الفعل أو حرف الجر.`,
      table: {
        title: "الضمائر الشخصية بحسب الحالة الألمانية",
        columns: ["الشخص", "Nominativ", "Akkusativ", "Dativ"],
        rows: [
          { label: "المتحدث المفرد", cells: ["ich", "mich", "mir"] },
          { label: "المخاطب المفرد", cells: ["du", "dich", "dir"] },
          { label: "هو", cells: ["er", "ihn", "ihm"] },
          { label: "هي", cells: ["sie", "sie", "ihr"] },
          { label: "الغائب المحايد", cells: ["es", "es", "ihm"] },
          { label: "نحن", cells: ["wir", "uns", "uns"] },
          { label: "أنتم", cells: ["ihr", "euch", "euch"] },
          { label: "هم/هن", cells: ["sie", "sie", "ihnen"] },
          { label: "صيغة الاحترام", cells: ["Sie", "Sie", "Ihnen"] },
        ],
      },
      examples: [
        { de: "Ich sehe dich jeden Tag.", ar: "أراك كل يوم." },
        { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
        { de: "Das Buch gehört ihm.", ar: "هذا الكتاب يخصه." },
        { de: "Ich danke dir für alles.", ar: "أشكرك على كل شيء." },
        { de: "Sie liebt mich.", ar: "هي تحبني." },
        { de: "Können Sie mir bitte helfen?", ar: "هل يمكنكم مساعدتي من فضلكم؟" },
        { de: "Ich fahre mit ihr zur Bank.", ar: "أذهب معها إلى البنك." },
        { de: "Wir sehen sie am Bahnhof.", ar: "نراهم/نراهن في المحطة." },
      ],
      comparisonWithArabic: `في الترجمة إلى العربية قد يظهر المعنى نفسه بصيغ مثل «أراك» و«أساعدك»، لكن شكل الكاف في الترجمة لا يحدد وحده أي ضمير ألماني يجب أن تختار. في Ich sehe dich يختار الفعل الألماني Akkusativ، وفي Ich helfe dir يختار Dativ؛ ولكل نظام لغوي طريقة مستقلة في إظهار العلاقات بين الكلمات. لذلك نستخدم العربية لتوضيح معنى الجملة، لا لنسخ أسماء الحالات أو قواعدها حرفياً. وبالمثل، وجود كلمة ألمانية في Dativ لا يعني تلقائياً أن نظيرها العربي مجرور. قارن الأفعال داخل جمل كاملة، وتعلّم الضمير مع الفعل أو حرف الجر الذي يحكمه.`,
      eselsbruecke:
        "درّب أزواجاً داخل جملة لا ترجمات منفردة: sehen + mich/dich؛ helfen + mir/dir؛ gehören + ihm. حدّد الفعل أولاً، ثم اختر صيغة الضمير الألماني.",
      commonMistakes: [
        {
          wrong: "Kannst du mich helfen?",
          right: "Kannst du mir helfen?",
          classification: "error",
          whyAr:
            "الفعل helfen يأخذ مكمّلاً في Dativ في هذا التركيب؛ لذلك mir لا mich. الترجمة العربية «تساعدني» لا تغيّر اختيار الفعل الألماني.",
        },
        {
          wrong: "Das Buch gehört ihn.",
          right: "Das Buch gehört ihm.",
          classification: "error",
          whyAr:
            "gehören يأخذ Dativ للشخص الذي يخصه الشيء: ihm. أما ihn فهي صيغة Akkusativ ولا تلائم هذا الفعل في المثال.",
        },
        {
          wrong: "Ich sehe dir jeden Tag.",
          right: "Ich sehe dich jeden Tag.",
          classification: "error",
          whyAr:
            "في معنى «أراك» يأتي sehen مع Akkusativ؛ صيغة du المقابلة هنا dich. اختيار mir/dir لمجرد ظهور ضمير المخاطب بالعربية غير كافٍ.",
        },
        {
          wrong: "Ich danke dich.",
          right: "Ich danke dir.",
          classification: "error",
          whyAr:
            "عندما نذكر الشخص الذي نشكره، يستخدم danken مكمّلاً في Dativ: dir. ويمكن استعمال danken من دون ذكر متمم، لكن ذلك لا يجعل dich صحيحاً في هذا المثال.",
        },
      ],
      relatedRuleComparison: {
        title: "حالة يحددها الفعل أم حرف الجر؟",
        content:
          "في Ich helfe dir يطلب الفعل helfen متمماً في Dativ. وفي Ich fahre mit dir تفرض mit الحالة على الضمير. لذلك لا تكفي صيغة Dativ وحدها لمعرفة مصدر الحكم؛ افحص الجملة كاملة.",
      },
    },
  ];

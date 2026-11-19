/**
 * b1-12 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الغرض بـ um … zu: مثال بفاعل واحد",
      titleDe: "Finalsätze mit „um … zu“",
      explanationAr:
        "للتعبير عن الغرض يمكن استعمال um … zu + Infinitiv، مثل: Ich lerne Deutsch, um in Deutschland zu studieren. في هذا المثال الشخص نفسه يتعلّم ويدرس، لذلك تُحذف ضمائر الفاعل في جملة المصدر. وعندما تختلف الجهة التي تقوم بالفعلين، تُستعمل غالباً جملة damit بفاعل وفعل مصرّف.\n\nتأتي um في بداية جملة الغرض، ثم تفاصيلها، ثم zu + المصدر في نهاية مجموعة المصدر عادةً. وإذا كان الفعل منفصلاً دخلت zu بين بادئته وجذره: um einzukaufen · um aufzustehen · um mitzukommen.\n\nملاحظة مهمة: بعد تعبير تقييمي مثل Es ist wichtig، يأتي المصدر عادةً بلا um: Es ist wichtig, regelmäßig zu üben (من المهم أن نتدرّب بانتظام). أما um … zu فتعبّر عن الغرض: Man braucht Geduld, um eine Sprache zu lernen.\n\nاستخدم um … zu هنا بوصفها صيغة مختصرة شائعة عند اتحاد الفاعل المنطقي، لا قاعدةً تمنع كل صيغة أخرى. يمكن أن تأتي damit مع الفاعل نفسه أيضاً، وغالباً ما تكون um … zu أوجز. مثال مقارن: Sie spart Geld, um eine Reise zu machen؛ الشخص نفسه يدّخر ويريد القيام بالرحلة، ولذلك تناسبه الصيغة المصدرية.",
      whyAr:
        "تُختصر جملة الغرض هنا إلى مصدر، ويُفهم فاعلها من السياق؛ ولا يحمل المصدر تصريفاً زمنياً أو شخصياً: Ich lerne / ich lernte / ich werde lernen — um in Deutschland zu studieren. لا نضع فاعلاً جديداً صريحاً داخل تركيب um … zu؛ وإذا أردنا التصريح بفاعل مختلف نستخدم جملة تابعة مناسبة مثل damit.\n\nللمراجعة، قارن الفاعل المنطقي للفعلين: اتحاد الفاعل يجعل um … zu صيغة موجزة شائعة، واختلافه يجعل damit خياراً واضحاً. وقد تكون damit ممكنة مع الفاعل نفسه؛ لذلك فهذه طريقة اختيار نافعة في أمثلة الدرس، لا قاعدة مطلقة عن كل استعمال.\n\nلا حاجة إلى تعميمات عن الناطقين بالعربية لفهم هذه البنية: قارن ترتيب الكلمات الألماني في المثال، وميّز المصدر من الفعل المصرّف. وانتبه إلى مثالين مختلفين: Es ist wichtig, regelmäßig zu üben (مصدر يكمّل التقييم، بلا um)، وMan braucht Geduld, um eine Sprache zu lernen (مصدر يعبّر عن الغرض).",
      table: {
        title: "بنية um … zu",
        columns: ["الجزء", "الوظيفة", "مثال"],
        rows: [
          { label: "الجملة الأولى", cells: ["الفعل والفاعل", "Ich spare Geld,"] },
          { label: "um", cells: ["تفتح جملة الغرض", "um"] },
          { label: "المفعول/التفاصيل", cells: ["وسط الجملة", "ein Auto"] },
          { label: "zu + Infinitiv", cells: ["عادةً في نهاية مجموعة المصدر", "zu kaufen."] },
          { label: "فعل منفصل", cells: ["zu تدخل في الوسط", "um einzukaufen"] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch, um in Deutschland zu studieren.", ar: "أتعلّم الألمانية لكي أدرس في ألمانيا." },
        { de: "Sie fährt in die Stadt, um einzukaufen.", ar: "تذهب إلى المدينة لكي تتسوّق." },
        { de: "Wir üben jeden Tag, um die Prüfung zu bestehen.", ar: "نتدرّب كل يوم لكي ننجح في الامتحان." },
        { de: "Er steht früh auf, um pünktlich zu sein.", ar: "ينهض باكراً لكي يكون في الموعد." },
        { de: "Man braucht Geduld, um eine Sprache zu lernen.", ar: "يحتاج المرء صبراً لكي يتعلّم لغة." },
        { de: "Sie steht früh auf, um den Zug um sieben zu erreichen.", ar: "تنهض باكراً لكي تلحق بقطار السابعة." },
      ],
      comparisonWithArabic:
        "تقابل أمثلة كثيرة من «لكي/حتى» صيغة um … zu، لكن العلاقة ليست ترجمة كلمة بكلمة: الجملة الألمانية هنا مصدرية وتنتهي بـzu + Infinitiv، بينما الجملة بعد damit تامة ولها فعل مصرّف في النهاية. مثال خطأ: Ich lerne, um ich studiere؛ ومثال صحيح: Ich lerne, um zu studieren.\n\nمن المفيد أن تسأل: من يقوم بالفعل الثاني؟ اتحاد الفاعل يجعل um … zu صيغة مختصرة مناسبة في هذا الدرس؛ واختلافه يجعل damit خياراً واضحاً. لكن لا تُحوّل المقارنة إلى حكم على العربية كلها، ولا إلى قاعدة تمنع damit عندما يتحد الفاعل.",
      eselsbruecke:
        "«um … zu = صيغة مصدرية مختصرة للغرض»؛ في أمثلة الدرس يتحد فاعل الفعلين. وعند اختلافه، استعمل damit مع جملة تابعة كاملة.",
      commonMistakes: [
        { wrong: "Ich lerne Deutsch, um ich studiere.", right: "Ich lerne Deutsch, um zu studieren.", whyAr: "هذا مثال غير سليم لأن تركيب um … zu هنا يتبعه فعل مصرّف مع فاعل ظاهر، بينما الصيغة المطلوبة مصدرية: um zu studieren. إذا أردت التعبير عن غرض بفاعل مختلف، فصغ جملة تابعة بـdamit بدلاً من إدخال ضمير داخل تركيب um … zu." },
        { wrong: "Sie fährt in die Stadt, um zu einkaufen.", right: "Sie fährt in die Stadt, um einzukaufen.", whyAr: "هنا لا يعرف المتعلّم أن zu تتوغّل في الفعل المنفصل: ein+kaufen يصير einzukaufen، وتُكتب كلمة واحدة. وهذه علامة إتقان واضحة في الكتابة، لأن المتعلّم المتوسط يعرف القاعدة لكنه ينساها مع الأفعال المنفصلة: aufstehen ← aufzustehen · mitkommen ← mitzukommen · anrufen ← anzurufen. والحكم فيها بالعين لا بالسمع، لأن الفرق مكتوب لا مسموع." },
        { wrong: "Ich lerne, um die Prüfung bestehen zu.", right: "Ich lerne, um die Prüfung zu bestehen.", whyAr: "الخطأ في موضع zu لا في وجوده: zu تسبق المصدر دائماً ولا تلحقه أبداً، فالنهاية هي المصدر وحده. ومن جعل zu آخر كلمة فقد قلب بنية الشطر الثاني، وهي بنية صلبة لا تتغيّر. ولاحظ أن موضع zu ثابت حتى مع المفعول الطويل: um die Prüfung beim ersten Versuch sicher zu bestehen — المفعول أولاً، ثم zu، ثم المصدر في النهاية." },
      ],
      relatedRuleComparison: {
        title: "um … zu أم weil؟",
        content: "weil تجيب «لماذا؟» بسبب واقع: Ich lerne, weil ich Zeit habe (لأنّ لديّ وقتاً). أمّا um … zu فتجيب «لأيّ غرض؟» بهدف مستقبلي: Ich lerne, um zu studieren. السبب خلفك، والغرض أمامك.",
      },
    },
    {
      id: "t2",
      titleAr: "جملة الغرض بـ damit: الفعل المصرّف",
      titleDe: "Finalsätze mit „damit“",
      explanationAr:
        "عندما يختلف الفاعل المنطقي، لا تناسبه صيغة um … zu المختصرة عادةً؛ فيمكن استعمال damit:  Ich erkläre es langsam, damit du mich verstehst. وهنا لا اختصار: damit أداة ربط تفتح جملة تابعة كاملة، لها فاعلها الصريح وفعلها المصرَّف في النهاية كما في كل جملة تابعة. ومن ثمة يبقى الهدف واضحاً حتى حين يقوم به شخص آخر.\n\nوالنظامان لا يتنافسان بل يتكاملان: um … zu تصنع شطراً مصدرياً بلا فاعل ولا زمن، وdamit تصنع جملة كاملة بفاعل وزمن. فالغرض نفسه يمكن أن يُصاغ بالنظامين إذا كان الفاعل واحداً (Ich lerne, um zu studieren / Ich trage einen Pullover, damit ich nicht friere)، لكن النظام الأول أرشق وقد يُطلب في الكتابة. وعند اختلاف الفاعل لا تناسب صيغة um … zu هذا المعنى؛ وتكون damit خياراً مناسباً.\n\nوللكلمة وجه آخر يُخلط بها: damit الظرفية بمعنى «بواسطته/بهذا الشيء» (Ich schreibe mit dem Stift — Ich schreibe damit)، ووجهها الثالث في العبارات الجاهزة مثل damit rechnen (يحسب حساباً لشيء) وdamit anfangen (يبدأ به). وميّز بين الاستعمالين من تركيب الجملة: أداة الغرض تفتتح جملة تابعة يتبعها فاعل وفعل مصرّف في النهاية؛ أما الظرف «به/بذلك» فيقع عنصراً داخل جملة لا يفتتحها. تظهر الفاصلة عادةً عند حدّ الجملة التابعة، لكن موضعها وحده ليس اختباراً كافياً؛ انظر إلى البنية والكلمات التي تلي damit.",
      whyAr:
        "تساعد المقارنة بين الجملتين على إبقاء الفاعل المقصود واضحاً: um … zu صيغة مصدرية مختصرة، أما damit فتفتح جملة تابعة بفعل مصرّف وفاعل ظاهر. مثال «Ich erkläre es, um du zu verstehen» غير صحيح؛ والصواب «Ich erkläre es, damit du mich verstehst». هذا فرق في تركيب المثال، لا قاعدة تقول إن damit لا تستعمل مع الفاعل نفسه.\n\nفي نصوص الإرشادات قد تتكرر جمل الغرض مع فاعلين مختلفين؛ عندها تساعد damit على إظهار من يفعل كل فعل بوضوح.",
      table: {
        title: "um … zu مقابل damit",
        columns: ["المعيار", "um … zu", "damit"],
        rows: [
          { label: "الفاعل في أمثلة المقارنة", cells: ["متحد", "مختلف"] },
          { label: "الفعل", cells: ["مصدر مع zu", "مصرَّف في النهاية"] },
          { label: "صيغة الفاعل", cells: ["مصدر بلا فاعل ظاهر", "فاعل داخل جملة تابعة"] },
          { label: "مثال", cells: ["Ich spare, um zu reisen.", "Ich spare, damit meine Kinder reisen."] },
          { label: "فاعل واحد + damit", cells: ["—", "Ich trage einen Pullover, damit ich nicht friere."] },
        ],
      },
      examples: [
        { de: "Ich erkläre es langsam, damit du mich verstehst.", ar: "أشرحها ببطء لكي تفهمني." },
        { de: "Die Eltern arbeiten viel, damit die Kinder studieren können.", ar: "يعمل الوالدان كثيراً لكي يستطيع الأطفال الدراسة." },
        { de: "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst.", ar: "أكتب لك العنوان لكي لا تنساه." },
        { de: "Der Lehrer wiederholt die Regel, damit alle sie behalten.", ar: "يكرّر المعلّم القاعدة لكي يحفظها الجميع." },
        { de: "Wir gehen früh los, damit wir den Zug nicht verpassen.", ar: "ننطلق باكراً لكي لا تفوتنا القطار." },
        { de: "Ich spreche langsamer, damit du mich besser verstehen kannst.", ar: "أتحدث أبطأ لكي تفهمني أفضل." },
      ],
      comparisonWithArabic:
        "تُقابل «لكي» في أمثلة الدرس جملة مصدرية بـum … zu أو جملة تابعة بـdamit. عند اختلاف الفاعل يكون التصريح به في جملة damit مفيداً: Ich arbeite, damit mein Sohn Erfolg hat. أما إذا اتحد الفاعل، فـum … zu غالباً أوجز، ويمكن أيضاً أن تأتي damit بحسب السياق. لا تنقل هذه المقارنة إلى قاعدة مطلقة عن العربية أو الألمانية؛ ركّز على بنية كل جملة ألمانية ومَن يقوم بالفعل.",
      eselsbruecke:
        "«damit + فعل مصرّف في نهاية الجملة التابعة». عند اختلاف الفاعل تكون هذه الصيغة مناسبة بوضوح؛ ويمكن استعمال damit مع اتحاد الفاعل أيضاً.",
      commonMistakes: [
        { wrong: "Ich erkläre es langsam, um du zu verstehen.", right: "Ich erkläre es langsam, damit du mich verstehst.", whyAr: "الخطأ هنا خطأ مبدأ لا خطأ تفصيل: البنية um … zu مرفوضة تماماً حين يختلف الفاعل (أنا أشرح، أنت تفهم)، ولا تُصلَح بإدخال الفاعل داخلها. والصواب نقل الجملة إلى نظام damit. وعلامة هذا الخطأ أن الجملة تبدو «كألمانية» في سمع من كتبها، لأنها تحمل zu والمصدر، لكن الألماني يقرؤها مكسورة من أول ضمير." },
        { wrong: "Die Eltern arbeiten, damit die Kinder können studieren.", right: "Die Eltern arbeiten, damit die Kinder studieren können.", whyAr: "بعد damit تبدأ جملة تابعة، فيأتي الفعل المصرّف في النهاية؛ ومع فعل ناقص يأتي المصدر قبله: studieren können. قارن هذا بترتيب الفعل في الجملة الرئيسية." },
        { wrong: "Ich gehe früh, damit zu kommen pünktlich.", right: "Ich gehe früh, um pünktlich zu kommen.", whyAr: "خلط النظامين في جملة واحدة يُنتج بنية لا وجود لها: damit لا تُتبع بمصدر بـzu كما تفعل um، وum لا تُتبع بفعل مصرَّف. فوجود damit مع zu يكشف أن الكاتب يعرف الأداتين ولا يعرف حدهما. والحل أن تسأل أين الفاعل: أنا ذاهب وأنا القادم — فاعل واحد ⇒ um pünktlich zu kommen." },
      ],
      relatedRuleComparison: {
        title: "damit الأداة أم damit الظرف؟",
        content: "الكلمة نفسها لها وجهان: أداة غرض (damit du verstehst = لكي تفهم)، وظرف بمعنى «به/بذلك» (Ich schreibe damit = أكتب به). ميّزهما بالموضع: أداةً تفتح جملة تابعة بفاصلة قبلها، وظرفاً تقع داخل الجملة بلا فاصلة.",
      },
    },
    {
      id: "t3",
      titleAr: "حروف الجر مع المضاف إليه: wegen وtrotz وwährend",
      titleDe: "Präpositionen mit Genitiv: wegen, trotz, während, aufgrund",
      explanationAr:
        "في الأمثلة التعليمية هنا نستخدم wegen وtrotz وwährend وaufgrund مع Genitiv، وهي الصيغة التحريرية المعيارية المناسبة للكتابة الرسمية. أمثلة: wegen des Regens · trotz des Regens · während der Arbeit · aufgrund der Krise. لكن الاستعمال الفعلي متنوع: يُسمع Dativ بعد بعض هذه الحروف، وwegen + Dativ شائع في الكلام؛ فلا نصف كل استعمال له بأنه خطأ مطلقاً.\n\nفي الصيغة التي نتدرّب عليها، يأتي des عادةً مع المذكر والمحايد ويأخذ الاسم غالباً -s/-es (des Regens · des Wetters · des Kindes)، وتأتي der مع المؤنث والجمع (der Arbeit · der Kinder). وتوجد أنماط صرفية خاصة، مثل wegen des Studenten. لذلك اختر Genitiv في الكتابة الرسمية والتمارين هنا، مع التمييز بين هدف الدرس وبين وصف كل تنوع لغوي. ولتمييز حرف الجر من الرابط الذي يفتتح جملة، قارن: während der Arbeit (اسم ضمن عبارة حرفية) وwährend sie arbeitet (جملة فيها فعل مصرّف في النهاية). وكذلك wegen des Regens (اسم) مقابل weil es regnet (جملة). أما innerhalb فتأتي مع اسم مثل innerhalb einer Woche. يركّز هذا الدرس على حروف الجر مع الأسماء، ولا يدّعي تغطية كل استعمال للكلمات أو كل تنوع للحالة.",
      whyAr:
        "لماذا نتعلّم هذه الحروف؟ لأنها أداة الاختصار في الاسم لا في المعنى: «رغم أنّ الطقس كان سيئاً» تصير عبارة قصيرة trotz des Wetters، فتحمل العلاقة نفسها في نصف الكلمات. وهذا يوفّر صياغة اسمية موجزة، وقد يُستخدم في الكتابة الرسمية والقراءة.\n\nولها وظيفة ثانية: تسمح بتغيير نوع الجملة. فبدلاً من أن تُعلّل بجملة تابعة بـweil أو obwohl، يمكن أن تبدأ الجملة بالعبارة الحرفية (Wegen des Regens bleiben wir zu Hause) فتُقدّم السبب على الحكم — وهذا أسلوب ممكن في التقرير والتلخيص.\n\nوثالثاً، هذه الحروف تشرح فرقاً ثقافياً في الكتابة الألمانية: يمكن أن تظهر هذه التراكيب في النثر الرسمي؛ ومعرفة العلاقة بين الحرف والاسم تساعد على فهم الجمل الأطول.",
      table: {
        title: "حروف الجر مع Genitiv",
        columns: ["الحرف", "المعنى", "مثال"],
        rows: [
          { label: "wegen", cells: ["بسبب", "Wegen des Regens bleiben wir zu Hause."] },
          { label: "trotz", cells: ["رغم", "Trotz des Regens gehen wir spazieren."] },
          { label: "während", cells: ["أثناء", "Während der Arbeit telefoniere ich nicht."] },
          { label: "aufgrund", cells: ["نتيجةً لـ / بناءً على", "Aufgrund der Krise sparen viele Menschen."] },
          { label: "innerhalb", cells: ["خلال (مدة)", "Innerhalb einer Woche kommt die Antwort."] },
          { label: "مذكّر/محايد", cells: ["des + الاسم + s", "wegen des Wetters"] },
          { label: "مؤنّث/جمع", cells: ["der بلا إضافة", "wegen der Arbeit / wegen der Kinder"] },
        ],
      },
      examples: [
        { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت." },
        { de: "Trotz des schlechten Wetters fahren wir los.", ar: "رغم الطقس السيئ ننطلق." },
        { de: "Während der Prüfung darf man nicht sprechen.", ar: "أثناء الامتحان لا يُسمح بالكلام." },
        { de: "Aufgrund der hohen Preise kaufen wir weniger.", ar: "نتيجةً لارتفاع الأسعار نشتري أقلّ." },
        { de: "Wegen der Kinder ziehen sie in eine größere Wohnung.", ar: "من أجل الأطفال ينتقلون إلى شقة أكبر." },
        { de: "Trotz der Krise hat die Firma neue Stellen geschaffen.", ar: "رغم الأزمة أوجدت الشركة وظائف جديدة." },
      ],
      comparisonWithArabic:
        "تساعدك مقابلة هذه الأمثلة بمعاني «بسبب» و«رغم» و«أثناء» على فهم العلاقة بين حرف الجر والاسم. في الصيغ التي نتدرّب عليها، يظهر Genitiv بأدوات مثل des وder وبعلامات صرفية على بعض الأسماء.\n\nفي الاستعمال الفعلي توجد تنويعات للحالة بعد بعض حروف الجر. لهذا نعرض Genitiv بوصفه الصيغة التحريرية المستهدفة هنا، ونعرّف المتعلم بأن Dativ مسموع ومستعمل في بعض السياقات، ولا نساوي كل اختلاف عن نموذج التمرين بالخطأ المطلق. أمثلة العربية هنا وسائل تذكّر للمعنى وليست ادعاءً بأن النظامين متطابقان.",
      eselsbruecke:
        "«أربعة تطلب المضاف: wegen — trotz — während — aufgrund». وللأداة: مذكّر ومحايد des مع s لاصقة، ومؤنّث وجمع der نظيفة بلا زيادة.",
      commonMistakes: [
        { wrong: "wegen dem Regen (في نصّ مكتوب)", right: "wegen des Regens", whyAr: "في التمارين والكتابة الرسمية استعمل Genitiv (wegen des Regens). وwegen + Dativ شائع في الكلام؛ لا تُقدَّم صيغته على أنها خطأ مطلق في كل سياق." },
        { wrong: "trotz der Regen", right: "trotz des Regens", whyAr: "الاسم Regen مذكّر مفرد، لذلك تكون أداة Genitiv هنا des، ويأتي الاسم بصيغة Regens. أما der فتظهر مع المؤنث المفرد أو الجمع في الأمثلة المعروضة. تحقّق من جنس الاسم وعدده ثم اختر الأداة المناسبة." },
        { wrong: "während die Arbeit", right: "während der Arbeit", whyAr: "الخطأ هنا أن الكاتب نقل الاسم كما هو بلا تغيير، لأن die Arbeit تبدو «صحيحة» بصيغة الرفع والنصب. لكن بعد حرف الجرّ المطلوب للمضاف إليه تتغيّر الأداة إلى der: während der Arbeit · trotz der Krise · wegen der Kinder. وفي هذه الأمثلة التدريبية نختار صيغة Genitiv، مع ملاحظة أن الاستعمال بعد بعض الحروف يتنوع." },
      ],
      relatedRuleComparison: {
        title: "wegen أم weil؟",
        content: "المعنى واحد والبناء مختلف: weil تتبعها جملة كاملة بفعل في النهاية (weil es regnet)، وwegen يتبعها اسم في المضاف إليه (wegen des Regens). القاعدة العملية: عندك فعل ⇒ weil، عندك اسم ⇒ wegen.",
      },
    },
  ];

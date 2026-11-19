import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
  {
    id: "t1",
    titleAr: "الجمل النسبية المتقدمة: حروف الجر وwas وwo",
    titleDe: "Relativsätze mit Präpositionen, was und wo",
    explanationAr:
      "في الجملة النسبية مع حرف جر، يحدد الفعل أو التعبير حرف الجر المناسب (warten auf، sprechen mit)، وتحدد وظيفة العنصر داخل الجملة النسبية حالته. أمّا الجنس والعدد فيرتبطان بالاسم الذي يعود إليه العنصر: «Der Mann, auf den ich warte»؛ الاسم مذكر، وauf مع الانتظار يأخذ هنا Akkusativ، لذلك نقول «auf den». وفي الألمانية المعيارية المكتوبة يسبق حرف الجر الضمير النسبي: «Der Anwalt, mit dem ich gesprochen habe». حرف الجر والضمير كلمتان ضمن مجموعة جرّية، وليس حرف الجر جزءاً من الضمير نفسه.\n\nيُستعمل «wo» أداة وصل مكانية عندما يعود على مكان: «Das Land, wo ich lebe» أو «Das Land, in dem ich lebe». هذا الاستعمال مكافئ مكانيّاً في المثالين، وكلاهما ممكن في الألمانية المعيارية؛ وقد يختار الكاتب الصيغة ذات حرف الجر لإظهار العلاقة المطلوبة بوضوح. لكن «wo» المكانية لا تحل محل الضمير النسبي مع الأشخاص: نقول «Der Mann, auf den ich warte»، لا «Der Mann, wo ich warte». كما لا نخلط «wo» بـ«wohin» للاتجاه إلى مكان أو «woher» للاتجاه منه.\n\nيأتي «was» في الجمل النسبية بعد ضمائر محايدة عامة مثل «alles» و«nichts»، وبعد اسم صفة محايد مثل «das Beste»: «Alles, was du sagst» و«Das Beste, was wir tun können». وقد يأتي أيضاً في جملة نسبية تتابعية تعلّق على مضمون الجملة السابقة. بعد «etwas» توجد أحياناً صيغتان («etwas, was/das …»)، لذلك لا نعمم قاعدة واحدة على كل سياق. أمّا إذا كان المرجع اسماً محدداً مثل «das Buch» أو «das Gesetz»، فيُستعمل الضمير الموافق للاسم: «das Buch, das ich lese».\n\nوتعمل أدوات مثل «wofür» و«womit» بوظيفة عنصر وصل في جملة نسبية عن شيء: «Das Thema, wofür ich mich interessiere, ist spannend». وقد تظهر الصيغة نفسها في سؤال غير مباشر، لا في جملة نسبية: «Ich weiß nicht, wofür er sich interessiert». يحدد السياق وظيفة الجملة. وفي الأسلوب الرسمي يُفضّل عادةً «wofür» على «für was»، وهي صيغة دارجة شائعة في الكلام؛ لا يعني ذلك أن كل استعمال لها خطأ مطلقاً في كل سياق.",
    whyAr:
      "قبل اختيار الضمير، افصل بين سؤالين: ما مرجع الجملة؟ وما وظيفة العنصر داخلها؟ في «Der Mann, auf den ich warte» يحدد «der Mann» الجنس والعدد، بينما يفرض «warten auf» حرف الجر والحالة. وفي «Das Land, wo ich lebe» يعود «wo» على مكان، أما في «Ich weiß, wo er arbeitet» فالجملة سؤال غير مباشر عن مكان العمل. وأما «Alles, was …» فـ«was» عنصر وصل يعود على معنى عام. هذه الفروق تمنع ترجمة ترتيب العربية حرفياً، من دون أن تجعل كل صيغة بديلة قاعدة مطلقة.",
    table: {
      title: "عناصر الوصل في الجمل النسبية",
      columns: ["الوظيفة", "الصيغة", "مثال"],
      rows: [
        { label: "حرف جر + ضمير نسبي", cells: ["حرف الجر يسبق الضمير؛ والحالة بحسب حرف الجر", "Der Mann, auf den ich warte"] },
        { label: "wo المكانية", cells: ["إحالة إلى مكان؛ وقد تقابل حرف جر + ضمير", "Das Land, wo ich lebe"] },
        { label: "was بعد مرجع عام", cells: ["مثل alles/nichts أو das Beste", "Alles, was ich weiß"] },
        { label: "wofür في جملة نسبية", cells: ["عن شيء، بحسب حرف الفعل", "Das Thema, wofür er sich interessiert"] },
      ],
    },
    examples: [
      { de: "Der Anwalt, mit dem ich gesprochen habe, ist sehr erfahren.", ar: "المحامي الذي تحدثت معه خبير جداً." },
      { de: "Das Gesetz, auf das sich beide berufen, ist wichtig.", ar: "القانون الذي يستند إليه الطرفان مهم." },
      { de: "Alles, was du sagst, kann vor Gericht verwendet werden.", ar: "كل ما تقوله يمكن استخدامه أمام المحكمة." },
      { de: "Das Land, wo ich geboren wurde, ist Tunesien.", ar: "البلد الذي ولدت فيه هو تونس." },
      { de: "Das Thema, wofür sie sich interessiert, ist komplex.", ar: "الموضوع الذي تهتم به معقّد." },
      { de: "Ich weiß nicht, wofür er sich interessiert.", ar: "لا أعرف ما الذي يهتم به." },
    ],
    comparisonWithArabic:
      "في العربية قد يرتبط حرف الجر بالضمير في آخر العبارة، مثل «الرجل الذي أنتظرُه» أو «المحامي الذي تحدثت معه». وفي الألمانية المعيارية يسبق حرف الجر الضمير النسبي: «auf den» و«mit dem»، مع بقاء الفعل في نهاية الجملة النسبية. أمّا «wo» في «Das Land, wo ich lebe» فيحيل على مكان، ولا يحتاج معه ضمير مكاني زائد مثل «darin» في هذا المثال. و«was» بعد «alles» يقابل غالباً «ما» في «كل ما تقوله». لا تنقل بنية العربية حرفياً، ولا تستنتج من ذلك أن كل أداة ألمانية تقابل كلمة عربية واحدة في كل السياقات.",
    eselsbruecke:
      "اسأل أولاً: ما حرف الفعل؟ ثم اختر الضمير وحالته: warten auf → auf den؛ sprechen mit → mit dem. للمكان يمكن أن يأتي «wo»، وبعد «alles» يأتي غالباً «was». وتذكّر أن «wofür» قد يربط جملة نسبية أو يقدّم سؤالاً غير مباشر، بحسب الجملة.",
    commonMistakes: [
      { wrong: "Der Mann, den ich warte auf.", right: "Der Mann, auf den ich warte.", whyAr: "الفعل هو warten auf؛ لذلك يسبق حرف الجر الضمير النسبي في الألمانية المعيارية، ويأتي الفعل في نهاية الجملة النسبية." },
      { wrong: "Der Mann, wo ich warte.", right: "Der Mann, auf den ich warte.", whyAr: "«wo» هنا لا يصلح بديلاً عن ضمير يعود على شخص، كما أن warten يحتاج إلى auf في هذا المعنى. أمّا «wo» فيمكن أن يعود على مكان، مثل «Das Land, wo ich lebe»." },
      { wrong: "Alles, das du sagst, ist wichtig.", right: "Alles, was du sagst, ist wichtig.", whyAr: "بعد المرجع المحايد العام «alles» يُستعمل «was» عادةً في الألمانية المعيارية؛ أمّا مع اسم محدد مثل «das Buch» فيعود الضمير إلى الاسم: «das Buch, das …»." },
    ],
    relatedRuleComparison: {
      title: "الجملة النسبية والسؤال غير المباشر",
      content:
        "«Das Thema, wofür er sich interessiert, ist wichtig» جملة نسبية تصف «das Thema». أمّا «Ich weiß nicht, wofür er sich interessiert» فسؤال غير مباشر يعتمد على «Ich weiß nicht». تظهر «wofür» في المثالين، لكن وظيفة الجملة تختلف؛ لذلك لا تُعدّ كل جملة تبدأ بـwo/wofür جملة نسبية.",
    },
  },
  {
    id: "t2",
    titleAr: "تراكيب شائعة بديلة عن المبني للمجهول",
    titleDe: "Möglichkeiten mit sein, lassen sich und -bar",
    explanationAr:
      "تظهر في الألمانية تراكيب متعددة للتعبير عن معنى قريب من المبني للمجهول، لكنها ليست قالباً واحداً ولا تتطابق دائماً في الدلالة. من هذه التراكيب «sein + zu + مصدر»: «Die Aufgabe ist zu lösen». قد تُفهم على أنها وجوب أو إمكان بحسب الفعل والسياق؛ لذلك لا نترجمها آلياً بـ«يجب» أو «يمكن» من دون قراءة الجملة. وعندما يكون المقصود الوجوب يمكن أن يوضّح السياق ذلك، كما في «Die Rechnung ist bis Freitag zu bezahlen».\n\nأما «sein + Partizip II» فيمكن أن يصف حالة أو نتيجة قائمة: «Das Problem ist gelöst». ويقابله في هذا المثال «المشكلة محلولة». نقارن ذلك بـ«Das Problem wird gelöst»، التي تصف عملية أو حدثاً؛ لكن تفسير الصيغة يتوقف أيضاً على الفعل والسياق، ولا تكفي كلمة «sein» وحدها للحكم على كل تركيب.\n\nوتُستعمل «sich lassen + مصدر» كثيراً للتعبير عن إمكان وقوع الفعل أو قابليته: «Das Problem lässt sich lösen». وقد تتقارب هنا مع «Das Problem kann gelöst werden»، لكن لا يلزم أن تكون الجملتان متطابقتين في التركيز أو النبرة. لا تعني «lassen sich» وحدها أن الأمر سهل؛ فكلمة «leicht» هي التي تضيف معنى السهولة في «Das Problem lässt sich leicht erklären».\n\nوتصف صفات «-bar» قابلية الشيء للفعل: «lösbar» (قابل للحل)، «machbar» (قابل للتنفيذ)، «trinkbar» (صالح للشرب). الاشتقاق ليس آلياً مع كل فعل؛ تُستعمل الكلمات المألوفة في سياقاتها، وقد تكون بعض الصيغ غير شائعة أو غير مناسبة. عند القراءة، تحقّق من السياق ومن معنى الكلمة بدلاً من افتراض أن كل لاحقة «-bar» تعني الشيء نفسه تماماً.",
    whyAr:
      "تفيد معرفة هذه الصيغ في فهم النصوص الرسمية والعامة، لكن الأهم ألا نخلط بين الإمكان والوجوب والحالة القائمة. قارن «ist zu bezahlen» مع «lässt sich bezahlen» في سياقها، ولا تستنتج المعنى من التركيب وحده. وفي كل مثال، اسأل: هل يصف الكاتب متطلباً، أم إمكانية، أم نتيجة قائمة، أم صفة لقابلية الشيء؟ وإذا كانت الحقوق أو الالتزامات القانونية على المحك، فلا يكفي شرح لغوي مختصر لتحديد الحكم القانوني.",
    table: {
      title: "صيغ قريبة من معنى المبني للمجهول",
      columns: ["التركيب", "المعنى المحتمل", "مثال", "بالعربية"],
      rows: [
        { label: "Passiv بـwerden", cells: ["حدث أو عملية", "Das Problem wird gelöst.", "تُحلّ المشكلة."] },
        { label: "sein + zu + مصدر", cells: ["إمكان أو وجوب بحسب السياق", "Die Aufgabe ist zu lösen.", "المهمة قابلة للحل أو يجب حلها بحسب السياق."] },
        { label: "sein + Partizip II", cells: ["حالة أو نتيجة في المثال", "Das Problem ist gelöst.", "المشكلة محلولة."] },
        { label: "sich lassen + مصدر", cells: ["إمكان/قابلية غالباً", "Das Problem lässt sich lösen.", "يمكن حل المشكلة."] },
        { label: "صفة بـ -bar", cells: ["قابلية أو صلاحية بحسب الكلمة", "Das Problem ist lösbar.", "المشكلة قابلة للحل."] },
      ],
    },
    examples: [
      { de: "Die Aufgabe ist zu lösen.", ar: "المهمة قابلة للحل أو يجب حلها بحسب السياق." },
      { de: "Das Problem lässt sich leicht erklären.", ar: "يمكن شرح المشكلة بسهولة." },
      { de: "Die Rechnung ist bis Freitag zu bezahlen.", ar: "يجب دفع الفاتورة قبل يوم الجمعة في هذا السياق." },
      { de: "Der Fehler lässt sich beheben.", ar: "يمكن إصلاح الخطأ." },
      { de: "Nach der Reparatur war das Gerät wieder einsatzbereit.", ar: "بعد الإصلاح صار الجهاز جاهزاً للعمل مجدداً." },
      { de: "Die Frist ist einzuhalten.", ar: "ينبغي الالتزام بالمهلة؛ والسياق يوضح قوة الإلزام." },
    ],
    comparisonWithArabic:
      "تعبّر العربية عن هذه المعاني بوسائل مختلفة: «تُحلّ المشكلة» للمبني للمجهول، و«المشكلة محلولة» للحالة، و«يمكن حل المشكلة» للإمكان، و«يجب دفع المبلغ» للوجوب. وقد تختصر الألمانية بعض هذه المعاني في «lässt sich lösen» أو «ist zu lösen»، لكن السياق هو الذي يساعد على اختيار الترجمة. لذلك لا تُساوِ «ist zu» دائماً بوجوب أو إمكان، ولا تُفهم «lässt sich» على أنها سهولة ما لم يذكرها السياق أو كلمة مثل «leicht». هذا وصف لغوي، لا فتوى في أثر بند قانوني بعينه.",
    eselsbruecke:
      "قارن المعنى في الجملة كاملةً: «wird gelöst» حدث؛ «ist gelöst» حالة في هذا المثال؛ «lässt sich lösen» إمكان غالباً؛ و«ist zu lösen» قد يدل على إمكان أو وجوب بحسب السياق.",
    commonMistakes: [
      { wrong: "Die Aufgabe ist zu lösen = immer: يجب حل المهمة.", right: "Die Aufgabe ist zu lösen — المعنى يحدده السياق.", whyAr: "يمكن أن تفيد «sein + zu + مصدر» الوجوب أو الإمكان؛ لا تختَر ترجمة ثابتة من دون قرينة سياقية." },
      { wrong: "Das Problem lässt sich lösen = يمكن حلّه بسهولة دائماً.", right: "Das Problem lässt sich lösen.", whyAr: "«lassen sich» تدل غالباً على الإمكان أو القابلية؛ السهولة تظهر في كلمة مثل «leicht»، ولا تضمنها الصيغة وحدها." },
      { wrong: "Das Problem ist gelöst = يُحلّ الآن.", right: "Das Problem ist gelöst = المشكلة محلولة في هذا المثال.", whyAr: "في هذا المثال تصف «sein + Partizip II» نتيجة قائمة، بخلاف «wird gelöst» التي تعرض عملية أو حدثاً؛ تحقّق دائماً من الفعل والسياق." },
    ],
    relatedRuleComparison: {
      title: "الإمكان والوجوب والحالة",
      content:
        "«Die Aufgabe ist zu lösen» قد تعني وجوب الحل أو إمكانه بحسب السياق؛ «Die Aufgabe lässt sich lösen» تعبّر غالباً عن إمكان الحل؛ و«Die Aufgabe ist gelöst» تصف حالةً قائمة في هذا المثال. لا تحسم الترجمة من الصيغة وحدها.",
    },
  },
];

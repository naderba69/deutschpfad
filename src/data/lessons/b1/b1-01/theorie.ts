/**
 * b1-01 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "حالة المضاف إليه (Genitiv) — الملكية الرسمية",
      titleDe: "Der Genitiv: das Buch des Lehrers",
      explanationAr:
        `Genitiv حالة الملكية: تُجيب عن السؤال wessen? (لمن؟)، وتُربط بها أدوات مختلفة عن بقية الحالات: المذكر والمحايد يأخذان des مع إضافة s أو es إلى الاسم نفسه (das Buch des Lehrers · das Ende des Films)، والمؤنث والجمع يأخذان der بلا تغيير على الاسم (das Haus der Mutter · die Bücher der Studenten).

والميزة البنيوية أنّ Genitiv يُغني عن جملة كاملة: «الكتاب الذي يملكه المعلّم» تصير في الألمانية كلمتين متلاصقتين «das Buch des Lehrers»، فالاسم الثاني يحمل الأداة التي تُعلن الملكية. ولهذا لا تحتاج الألمانية إلى تركيب إضافي كما في «كتابٌ للمعلّم».

وأربعة حروف جرّ تأخذ Genitiv وحدها: wegen (بسبب) · trotz (رغم) · während (خلال) · statt (بدلاً من). وهي شائعة في النصوص الرسمية والكتابة، ويقابلها في الكلام اليومي ميلٌ إلى Dativ (wegen dem Regen) لا تقبله الصيغة الرسمية.

وموضع Genitiv من مسارك: هو المفتاح الذي يُغلق دائرتين معاً، الأول Genitiv الملكية الحقيقية، والثاني حروف الجر المتغيّرة التي درستها في a2-04، حيث كانت تسعة حروف تأخذ Akkusativ أو Dativ. فإن سُئلت عن الجنس والحالة معاً فالطريق واحد: حدّد الجنس أولاً، ثمّ حدّد ما يطلبه الموضع (Genitiv بعد wegen أو ملكية)، ثمّ اكتب الأداة مع الزيادة إن لزمت.`,
      whyAr:
        "لماذا نتعلّمها؟ لأنّها شائعة في النصّ المكتوب والرسمي، ولأنّ القارئ يحتاجها لفهم الجمل المعقّدة: جملةٌ مثل «die Ergebnisse der Studie» تحمل معنى كاملاً بلا فعل، فمن لا يعرف Genitiv يتوقف عندها. والفائدة الثانية أنّها تُقصّر التعبير: «der Bruder meines Freundes» أخصر من «der Bruder von meinem Freund»، والكتابة الرسمية تفضّلها. أمّا الكلام اليومي فيستبدلها كثيراً بـvon + Dativ، فلا تصحّح للناس في الشارع، لكن اكتب في الامتحان بالصيغة الرسمية.",
      table: {
        title: "أدوات Genitiv",
        columns: ["الجنس", "Nominativ", "Genitiv", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "des (+s)", "das Buch des Lehrers"] },
          { label: "محايد", cells: ["das", "des (+s)", "das Ende des Films"] },
          { label: "مؤنث", cells: ["die", "der", "das Haus der Mutter"] },
          { label: "جمع", cells: ["die", "der", "die Bücher der Studenten"] },
        ],
      },
      examples: [
        { de: "Das ist das Buch des Lehrers.", ar: "هذا كتاب المعلّم." },
        { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت." },
        { de: "Trotz des Wetters gehen wir spazieren.", ar: "رغم الطقس نذهب في نزهة." },
        { de: "Während des Unterrichts darf man nicht sprechen.", ar: "أثناء الحصة لا يجوز الكلام." },
        { de: "Die Meinung der Studenten ist wichtig.", ar: "رأي الطلاب مهم." },
        { de: "Während der Ausbildung wohnt sie bei ihren Eltern.", ar: "خلال التدريب المهني تسكن عند والديها." },
      ],
      comparisonWithArabic:
        "«كتاب المعلّم» = das Buch des Lehrers. العربية تلحق المضاف إليه مباشرةً بالتنوين أو بالكسرة («كتابُ المعلّمِ»)، فالملكية معنى يُفهم من المجاورة وحدها بلا أداة. والألمانية تفعل شيئاً آخر: تُعلن الملكية بأداة (des · der) وتزيد الاسم المذكر والمحايد s، حتى أنّه قد يتغيّر شكل الاسم نفسه (das Buch des Lehrers). والسؤال المقابل لـ«لمن؟» هو wessen?، والجواب يأتي في حالة Genitiv. وأقرب ترجمة عربية للتركيب الألماني هي «كتابٌ للمعلّم»، لأنّ اللام فيها هي التي تُعلن الملكية كما تفعل des.",
      eselsbruecke:
        "«Genitiv = لمن؟ (wessen)» — اسأل: لمن هذا الكتاب؟ الجواب: des Lehrers. وتذكّر حروف الجر الأربعة: wegen-trotz-während-statt (سبب-رغم-خلال-بدلاً من).",
      commonMistakes: [
        { wrong: "das Buch von dem Lehrer (عامية بدل Genitiv)", right: "das Buch des Lehrers", whyAr: "von + Dativ مقبولة في الكلام اليومي لكنها غير مناسبة في الكتابة الرسمية التي تنتظر Genitiv، والفرق هنا في المستوى اللغوي لا في الصواب النحوي." },
        { wrong: "des Lehrer (بدون s)", right: "des Lehrers", whyAr: "الاسم المذكر أو المحايد يضيف s (أو es إذا انتهى بحرف ساكن ثقيل) في Genitiv، فالصواب des Lehrers لا des Lehrer؛ وهي الزيادة التي تُعلن الحالة حتى لو شككت في الأداة." },
        { wrong: "wegen den Regen", right: "wegen des Regens", whyAr: "wegen من حروف الجرّ التي تأخذ Genitiv وحدها، فيصير der Regen في حالة الجرّ: wegen des Regens، وليس wegen den Regen كما يقع في الاستعمال اليومي المتسامح." },
      ],
      relatedRuleComparison: {
        title: "Genitiv أم von؟",
        content: "في الكلام اليومي: von + Dativ (das Buch von dem Lehrer). في الرسمية والكتابة: Genitiv. أتقن الاثنين: تفهم الاثنين، وتكتب بالرسمي. وقد يُستعمل Dativ بعد بعض حروف الجر مثل wegen وtrotz في الاستعمال اليومي (wegen dem Regen)، وهو ما لا تقبله الصيغة الرسمية هنا.",
      },
    },
    {
      id: "t2",
      titleAr: "الجمل النسبية (Relativsätze) مع der/die/das",
      titleDe: "Der Relativsatz: Der Mann, der ...",
      explanationAr:
        `الجملة النسبية وصفٌ إضافي لاسم يسبقها، تُربطه به بضمير نسبيّ: Der Mann, der dort steht, ist mein Lehrer. (الرجل الذي يقف هناك هو معلّمي). ولها ثلاث خصائص تُلخّص عملها: الضمير يأخذ جنس الاسم وعدده، وحالته من وظيفته داخل الجملة النسبية نفسها لا من الجملة الأمّ، والفعل المصرف ينتقل إلى نهاية الجملة النسبية.

والضمائر موزّعةٌ على الحالات: في Nominativ der · die · das · die، وفي Akkusativ den · die · das · die، وفي Dativ dem · der · dem · denen. فالمذكر وحده يظهر فيه الاختلاف بين الحالات الثلاث بوضوح (der · den · dem)، وهو الموضع الذي يخطئ فيه المتعلّم غالباً.

والمعيار العملي لاختيار الحالة سؤالٌ واحد: ما دور الاسم داخل الجملة النسبية؟ إن كان فاعلاً فNominativ (Der Mann, der dort steht)، وإن كان مفعولاً به فAkkusativ (Das Buch, das ich lese)، وإن كان مفعولاً غير مباشر أو جاء بعد حرف جرّ فDativ (Der Student, dem ich helfe · Die Universität, in der ich studiere). ووجود حرف الجرّ قبل الضمير لا يغيّر شيئاً: يأتي الحرف أولاً ثمّ الضمير في حالته.

وموضع هذه القاعدة من مسارك: الجملة النسبية جملةٌ ثانوية، فهي تخضع للقانون نفسه الذي عرفته في weil وdass وobwohl — الفعل المصرَّف في النهاية — والفرق أنّ فيها ضميراً يعود على اسمٍ قبلها.`,
      whyAr:
        "لماذا يتغيّر الضمير؟ لأنّه نائبٌ عن الاسم: يعود عليه بالجنس والعدد، أمّا حالته فيحدّدها دوره داخل الجملة النسبية. هذه أهمّ فكرة في B1، وبها تتحدّث عن أيّ شيء بدقّة بدل أن تُقطّع الكلام جملتين قصيرتين. وأثرها الأدائي مباشر: من يكتب «Das ist mein Bruder. Er wohnt in Bonn» يبدو مبتدئاً، ومن يكتب «Das ist mein Bruder, der in Bonn wohnt» يكتب بلغة مستوى B1، والمعنى واحد والفرق في البناء.",
      table: {
        title: "الضمائر النسبية",
        columns: ["الجنس", "Nominativ", "Akkusativ", "Dativ"],
        rows: [
          { label: "مذكر", cells: ["der", "den", "dem"] },
          { label: "محايد", cells: ["das", "das", "dem"] },
          { label: "مؤنث", cells: ["die", "die", "der"] },
          { label: "جمع", cells: ["die", "die", "denen"] },
        ],
      },
      examples: [
        { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك هو معلّمي." },
        { de: "Das Buch, das ich lese, ist spannend.", ar: "الكتاب الذي أقرؤه مثير." },
        { de: "Die Frau, die du kennst, ist Ärztin.", ar: "المرأة التي تعرفها طبيبة." },
        { de: "Der Student, dem ich helfe, ist aus Tunis.", ar: "الطالب الذي أساعده من تونس." },
        { de: "Die Universität, in der ich studiere, ist groß.", ar: "الجامعة التي أدرس فيها كبيرة." },
        { de: "Die Ausbildung, die sie macht, dauert drei Jahre.", ar: "التدريب المهني الذي تتدرّب فيه يستغرق ثلاث سنوات." },
      ],
      comparisonWithArabic:
        "«الرجل الذي يقف...» — العربية تستعمل اسم الموصول «الذي/التي/الذين» وهو مبنيّ لا يتغيّر مع الحالة، فيقول المتعلّم العربي «الرجل الذي يقف» و«الكتاب الذي أقرؤه» بالأداة نفسها. والألمانية تختار الضمير بحسب الجنس والحالة معاً، فالمذكر يظهر بثلاث صور (der · den · dem) بحسب وظيفته. وهذا فرقٌ تقابليّ يفسّر أشهر خطأ في الباب: أن يُبقى der في كل المواضع لأنّه ما يقابل «الذي» في الذهن. والفعل أيضاً ينقلب: العربية تُبقي الفعل تابعاً للفاعل («الذي هناك يقف» مقبولة لكن قليلة)، والألمانية تُلزم النهاية إلزاماً.",
      eselsbruecke:
        "«الضمير النسبي = بوصلة الجنس + مؤشر الحالة»: اسأل أولاً: الاسم مذكر/مؤنث/محايد؟ ثم: دوره في الجملة النسبية (فاعل/مفعول/بعد حرف جر)؟ الجمع بينهما يعطيك der/den/dem...",
      commonMistakes: [
        { wrong: "Der Mann, der dort steht, er ist mein Lehrer. (ضمير زائد)", right: "Der Mann, der dort steht, ist mein Lehrer.", whyAr: "لا نكرر الضمير بعد الجملة النسبية: الضمير النسبي der يؤدي وظيفة الفاعل كاملةً، فإعادته في صورة er تُنتج فاعلين لجملة واحدة." },
        { wrong: "Das Buch, das ich lese es, ... (تكرار)", right: "Das Buch, das ich lese, ...", whyAr: "الضمير النسبي das يقوم مقام المفعول به في الجملة النسبية، فإعادة الضمير es بعده تُنتج مفعولاً ثانياً بلا فعل يستدعيه." },
        { wrong: "الفعل في منتصف الجملة النسبية", right: "الفعل في النهاية: Der Mann, der dort steht", whyAr: "الجملة النسبية جملة ثانوية مثلها مثل weil وdass، فتنتقل الصيغة المصرَّفة إلى نهايتها: Der Mann, der dort steht — لا der dort steht في المنتصف كما في الجملة الرئيسية." },
      ],
      relatedRuleComparison: {
        title: "Relativsatz أم dass؟",
        content: "النسبية تصف اسماً (Der Mann, der...). dass تبدأ جملة كاملة (Ich denke, dass...). اسأل: هل أصف شخصاً/شيئاً؟ → نسبية. هل أذكر فكرة/رأياً؟ → dass.",
      },
    },
  ];

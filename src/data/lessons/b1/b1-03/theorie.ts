/**
 * b1-03 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "مجهول الحدث (Vorgangspassiv): werden + Partizip II",
      titleDe: "Das Vorgangspassiv: wird gebaut, wurde gebaut",
      explanationAr:
        `في Vorgangspassiv (مجهول الحدث) ينتقل التركيز من الفاعل إلى الحدث أو المتأثر به: Die Arbeiter bauen das Haus → Das Haus wird gebaut. وفي الجملة الخبرية البسيطة يأتي werden مصرّفاً، ثم Partizip II في آخر الجملة.

وتصريف werden هو عصب هذا التركيب: ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie werden. وفي Präteritum يأتي wurde/wurden، أما Perfekt للمجهول فيأتي مثل ist + Partizip II + worden (Das Haus ist gebaut worden). في هذا التركيب تكون الصيغة worden لا geworden.

يمكن حذف الفاعل الأصلي إذا لم يكن محور الكلام، أو ذكره غالباً بـvon + Dativ: Das Haus wird von den Arbeitern gebaut. وقد تأتي durch + Akkusativ لذكر سبب أو وسيلة أو وسيط، وأحياناً فاعلٍ أيضاً؛ لذلك لا نقسم von وdurch على أساس «عاقل/غير عاقل» وحده.

يمكن أيضاً استعمال man مع فعل معلوم لإسناد الفعل إلى فاعل عام غير محدد: Man baut das Haus. هذه صيغة نشطة بفاعل عام، وليست مجهولاً صرفياً. وقد يُختار بينهما بحسب ما يريد المتكلم إبرازَه؛ لا توجد قاعدة أن أحدهما يخصّ الكلام والآخر يخصّ الكتابة.`,
      whyAr:
        "يفيد Vorgangspassiv عندما نريد جعل الحدث أو المتأثر به محور الجملة، ولا نعرف الفاعل أو لا نحتاج إلى ذكره. ويمكن ذكر المنفّذ بـvon: Das Haus wird von der Gemeinde gebaut؛ لذلك لا يعني استعمال المبني للمجهول دائماً إخفاء الفاعل. كما أن man صيغة نشطة بفاعل عام، وليست تصريفاً للمجهول، مع أنها قد تنقل معنى قريباً في بعض السياقات. للمقارنة بالعربية صيغ متعددة للمجهول أيضاً؛ لذا تساعد المقارنة على فهم الفكرة ولا تجعل بناء اللغتين متطابقاً، ولا يجوز تعميم علامة واحدة على كل استعمالات werden.",
      table: {
        title: "Vorgangspassiv في المضارع والماضي",
        columns: ["الزمن", "التركيب", "مثال"],
        rows: [
          { label: "مضارع", cells: ["wird + Partizip II", "Das Haus wird gebaut."] },
          { label: "ماضي", cells: ["wurde + Partizip II", "Das Haus wurde gebaut."] },
          { label: "ماضٍ مركب (Perfekt)", cells: ["ist + Partizip II + worden", "Das Haus ist gebaut worden."] },
          { label: "بديل نشط بفاعل عام", cells: ["man + فعل معلوم", "Man baut das Haus."] },
        ],
      },
      examples: [
        { de: "Die Wälder werden zerstört.", ar: "تُدمَّر الغابات." },
        { de: "Das Haus wurde 1900 gebaut.", ar: "بُني البيت عام 1900." },
        { de: "Der Müll wird recycelt.", ar: "تُعاد تدوير النفايات." },
        { de: "Viele Bäume werden gepflanzt.", ar: "تُزرع أشجار كثيرة." },
        { de: "Man kann die Umwelt schützen.", ar: "يمكن حماية البيئة." },
        { de: "Die Stadt wurde durch das Hochwasser zerstört.", ar: "دُمّرت المدينة بسبب الفيضان." },
      ],
      comparisonWithArabic:
        "يمكن تقريب Das Haus wird gebaut إلى «يُبنى البيت»، وDas Haus wurde gebaut إلى «بُني البيت»؛ فيتغير الزمن في الألمانية بتصريف werden، ويبقى Partizip II في الصيغتين. لكن لا نطابق كل جملة آلياً: فالعربية والألمانية تملكان أكثر من طريقة للتعبير عن الحدث والفاعل، وقد تذكر الألمانية المنفّذ: Das Haus wird von der Gemeinde gebaut. وMan baut das Haus جملة نشطة ذات فاعل عام، لا مجهول صرفي. هذه المقارنة تشرح المعنى والفرق البنائي، لا قاعدة تحويل واحد إلى واحد.",
      eselsbruecke:
        "في هذا الدرس: werden + Partizip II = Vorgangspassiv. أما werden مع صفة فقد يعني «يصبح» (wird kalt)، ومع المصدر يكوّن Futur (wird arbeiten).",
      commonMistakes: [
        { wrong: "Das Haus wird von die Arbeiter gebaut.", right: "Das Haus wird von den Arbeitern gebaut.", whyAr: "von يأخذ Dativ دائماً، والجمع die Arbeiter يصير den Arbeitern في الجرّ: von den Arbeitern — لا von die Arbeiter كما في حالة الرفع." },
        { wrong: "Das Haus wird bauen (مجهول خاطئ)", right: "Das Haus wird gebaut.", whyAr: "المجهول تركيب من طبقتين: فعل مساعد werden مصرَّفاً + Partizip II في النهاية، فلا يكفي المصدر bauen ولا Partizip وحده، بل wird gebaut معاً." },
        { wrong: "wird أم wurde؟", right: "wird = مضارع (يُبنى). wurde = ماضٍ (بُني)", whyAr: "الفرق هنا زمني: wird للمضارع وwurde للماضي البسيط، ويتبعهما Partizip II في هذا التركيب." },
      ],
      relatedRuleComparison: {
        title: "Passiv أم Aktiv؟",
        content: "Aktiv: Die Arbeiter bauen das Haus. Vorgangspassiv: Das Haus wird gebaut. يختلف الاختيار بحسب ما يراد جعله محوراً للجملة والسياق.",
      },
    },
    {
      id: "t2",
      titleAr: "التركيب المصدري (Infinitiv mit zu): حماية البيئة تبدأ بفعل",
      titleDe: "Der Infinitiv mit zu: Es ist wichtig, die Umwelt zu schützen",
      explanationAr:
                `التركيب المصدري مع zu يربط معنى فعل أو صفة بمجموعة مصدرية: Er versucht, den Müll zu trennen. يظهر الفعل في نهاية المجموعة، ويُكتب zu منفصلاً عنه في الأفعال غير المنفصلة؛ وفي أمثلة الدرس نفصل المجموعة بفاصلة. أما الفعل المنفصل فيأخذ zu بين السابقة والفعل: ausschalten → auszuschalten، anfangen → anzufangen.

تأخذ الأفعال الناقصة (können · müssen · wollen · dürfen · sollen) المصدر بلا zu: Ich kann schwimmen. أما كثير من الأفعال مثل versuchen وplanen، والصفات في Es ist wichtig، فتأتي مع zu-Infinitiv: Ich versuche, Müll zu trennen؛ Es ist wichtig, Wasser zu sparen. لا تعمم القاعدة على كل الأفعال: فهناك أفعال أخرى وتراكيب خاصة، مثل أفعال الإدراك في Ich sehe ihn kommen.

انتبه إلى الفرق بين zu-Infinitiv وum … zu: في Ich hoffe, dich zu sehen يكمل المصدر معنى hoffen، ولا يصرّح بهدف. أما um … zu فيعرض الغاية: Ich lerne Deutsch, um in Deutschland zu arbeiten. يستعمل um … zu عادةً عندما يكون فاعل الجملة الرئيسية هو نفسه صاحب الغاية.

تدخل damit جملة تامة لها فاعل وفعل مصرّف، وتلزم إذا اختلف صاحب الفعل عن صاحب الغاية: Ich lerne Deutsch, damit meine Kinder mich verstehen. ويمكن استعمال damit أيضاً مع اتحاد الفاعل: Ich lerne Deutsch, damit ich Bücher auf Deutsch lesen kann. لذلك لا تقل إن damit ممنوعة حين يتحد الفاعل. هذه أنماط الدرس الشائعة وليست جرداً لكل استعمالات المصدر الألماني.`,
      whyAr:
                "التركيب يتحدد بالفعل أو الصفة: بعد können يأتي المصدر بلا zu، كما في Ich kann schwimmen؛ وبعد versuchen أو الصفة wichtig يأتي zu-Infinitiv، كما في Ich versuche, Deutsch zu lernen وEs ist wichtig, Deutsch zu lernen. ويكمل المصدر معنى الفعل أو الصفة، ولا يكون دائماً غاية. أما um … zu فيضيف معنى الهدف، وdamit تدخل جملة مصرّفة؛ وهذا الفرق يساعدك على اختيار الصيغة بحسب المعنى لا حفظ zu منفردة.",
      table: {
        title: "التراكيب التي تجذب zu + مصدر (في سياق البيئة)",
        columns: ["التركيب", "المثال", "المعنى"],
        rows: [
          { label: "versuchen (يحاول)", cells: ["Er versucht, den Müll zu trennen.", "يحاول فصل النفايات."] },
          { label: "hoffen (يأمل)", cells: ["Wir hoffen, die Umwelt zu retten.", "نأمل إنقاذ البيئة."] },
          { label: "anfangen (يبدأ)", cells: ["Ich fange an, weniger Plastik zu kaufen.", "أبدأ بشراء بلاستيك أقل."] },
          { label: "wichtig / möglich / schwer", cells: ["Es ist wichtig, Bäume zu pflanzen.", "من المهم زرع الأشجار."] },
          { label: "um … zu (لكي)", cells: ["Wir sparen Energie, um das Klima zu schützen.", "نوفر الطاقة لكي نحمي المناخ."] },
        ],
      },
      examples: [
        { de: "Es ist wichtig, Wasser zu sparen.", ar: "من المهم توفير الماء." },
        { de: "Ich versuche, jeden Tag mit dem Fahrrad zu fahren.", ar: "أحاول الذهاب بالدراجة كل يوم." },
        { de: "Sie hat vergessen, das Licht auszuschalten.", ar: "نسيت إطفاء الضوء." },
        { de: "Wir planen, ein Solardach zu bauen.", ar: "نخطط لبناء سقف شمسي." },
        { de: "Ich fange an, weniger Plastik zu kaufen.", ar: "أبدأ بشراء بلاستيك أقل." },
        { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", ar: "أتعلّم الألمانية لأعمل في ألمانيا." },
        { de: "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.", ar: "أتعلم الألمانية لكي أتمكن من العمل في ألمانيا." },
      ],
      comparisonWithArabic:
        "يمكن تقريب Ich versuche, die Umwelt zu schützen إلى «أحاول حماية البيئة»، وEs ist wichtig, die Umwelt zu schützen إلى «من المهم أن نحمي البيئة». في المثال الأول يكمل المصدر معنى versuchen، وفي الثاني يتمم المعنى الذي تعبّر عنه الصفة wichtig. لذلك لا نقول إن zu تقابل دائماً «أن» أو إنها تعني الغاية؛ الغاية الصريحة تظهر في um … zu، مثل Ich spare Wasser, um die Umwelt zu schützen. وعند اختلاف الفاعلين نستخدم damit: Ich spare Wasser, damit meine Kinder genug Wasser haben. هذه أمثلة تقريبية، لا تطابق صرفياً كاملاً بين اللغتين.",
      eselsbruecke:
        "«zu = راية اللحاق»: المصدر يركض إلى نهاية الجملة ومعه رايته zu. وإذا كان الفعل منفصلاً تلتصق الراية في الوسط: aufstehen → aufzustehen، ausschalten → auszuschalten. ولاحظ: الأفعال الناقصة ترفض الراية تماماً: Ich kann schwimmen (بدون zu).",
      commonMistakes: [
        { wrong: "Ich hoffe, dich sehen.", right: "Ich hoffe, dich zu sehen.", whyAr: "يأتي hoffen في هذا المثال مع zu-Infinitiv: Ich hoffe, dich zu sehen." },
        { wrong: "Es ist wichtig, die Umwelt schützen.", right: "Es ist wichtig, die Umwelt zu schützen.", whyAr: "في هذا المثال يأتي zu-Infinitiv بعد الصفة wichtig: Es ist wichtig, die Umwelt zu schützen." },
        { wrong: "Ich kann zu schwimmen.", right: "Ich kann schwimmen.", whyAr: "بعد الفعل الناقص können يأتي المصدر بلا zu في هذا البناء: Ich kann schwimmen. أما كثير من الأفعال الأخرى، مثل versuchen، فتأتي مع zu-Infinitiv: Ich versuche zu schwimmen." },
      ],
      relatedRuleComparison: {
        title: "zu + مصدر أم um … zu؟",
        content: "zu + مصدر يأتي مكمّلاً لفعل أو صفة: Ich hoffe, dich zu sehen (أرجو رؤيتك). أمّا um … zu فيعبّر عن غاية: Ich lerne Deutsch, um in Deutschland zu arbeiten (أتعلم الألمانية لكي أعمل في ألمانيا).",
      },
    },
  ];

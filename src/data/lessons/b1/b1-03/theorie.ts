/**
 * b1-03 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المبني للمجهول (Passiv): werden + Partizip II",
      titleDe: "Das Passiv: wird gebaut, wurde gebaut",
      explanationAr:
        `المبني للمجهول يَقلب وجهة الجملة: بدل أن تبدأ بالفاعل الذي فعل (Die Arbeiter bauen das Haus) تبدأ بالحدث الذي وقع (Das Haus wird gebaut). والتركيب طبقتان كالمعتاد في الألمانية: فعل مساعد في المرتبة الثانية (werden مضارعاً: wird/werden) + Partizip II في النهاية.

وتصريف werden هو عصب الباب: ich werde · du wirst · er/sie/es wird · wir werden · ihr werdet · sie werden. وفي الماضي البسيط يصير wurde بلا umlaut (ich wurde · er wurde · sie wurden)، وفي الماضي التامّ ist + Partizip II + worden — ولاحظ أنّ الصورة القديمة geworden تقصر في المجهول على worden بلا ge.

والفاعل الأصلي لا يُحذف وجوباً بل يجوز إظهاره بـvon + Dativ للشخص (Das Haus wird von den Arbeitern gebaut)، وبـdurch + Akkusativ للوسيلة أو السبب غير العاقل (Die Stadt wurde durch das Hochwasser zerstört). والفرق بينهما دلاليّ: von يذكر المنفّذ العاقل، وdurch يذكر السبب أو الوسيلة.

وللمجهول بديلان يفضّلهما الكلام اليومي: man + فعل (Man baut das Haus هنا) أو صيغة مجهولة حقيقية مع الفعل تكون قابلة للاختيار وضعياً. والاختيار بينهما مسألة أسلوب: التقارير الإخبارية والنصوص العلمية تفضّل المجهول لأنّها تُخفي الفاعل حين لا يهمّ، والكلام اليومي يفضّل man لأنّها أخفّ.`,
      whyAr:
        "لماذا نتعلّمه؟ لأنّ نصّ B1 — خبراً كان أو تقريراً أو مقالاً بيئياً — يعتمد عليه اعتماداً شديداً: «Die Wälder werden zerstört» لا يقول من دمّرها لأنّ المتكلّم لا يريد اتّهام أحد أو لا يعرفه، وهذا الاختيار الأسلوبيّ هو نفسه ما تفعله المجهول في العربية «تُدمَّر الغابات». وفائدة ثانية عمليّة: المجهول يسمح لك في الامتحان بالكتابة عن مشكلة بلا فاعل معلوم، فتبقى في دائرة الصياغة الرسمية لا الشخصية.",
      table: {
        title: "Passiv في المضارع والماضي",
        columns: ["الزمن", "التركيب", "مثال"],
        rows: [
          { label: "مضارع", cells: ["wird + Partizip II", "Das Haus wird gebaut."] },
          { label: "ماضي", cells: ["wurde + Partizip II", "Das Haus wurde gebaut."] },
          { label: "ماضٍ مركب (Perfekt)", cells: ["ist + Partizip II + worden", "Das Haus ist gebaut worden."] },
          { label: "المجهول مع man", cells: ["man + فعل (بديل)", "Man baut das Haus."] },
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
        "«يُبنى» = wird gebaut، و«بُني» = wurde gebaut. العربية تعبّر عن المجهول بتغيير هيئة الفعل وحده («بنى» ← «بُني»)، والألمانية تُضيف فعلاً مساعداً مستقلّاً هو werden، فالفارق أنّ المجهول في الألمانية تركيبٌ ظاهر لا هيئة صرفية. والمعنى واحد في اللسانين: الفاعل مغفول عنه. وهنا نقطة تفوّقٍ للمتعلّم العربي: عنده إحساس المجهول جاهزاً من لغته، فلا يحتاج إلا إلى التركيب.",
      eselsbruecke:
        "«werden = علامة المجهول»: إذا رأيت werden + Partizip II → مجهول. و«wurde = بُني (ماضٍ)». الفرق عن «يصبح»: مع صفة (wird kalt) وليس مع تصريف ثالث.",
      commonMistakes: [
        { wrong: "Das Haus wird von die Arbeiter gebaut.", right: "Das Haus wird von den Arbeitern gebaut.", whyAr: "von يأخذ Dativ دائماً، والجمع die Arbeiter يصير den Arbeitern في الجرّ: von den Arbeitern — لا von die Arbeiter كما في حالة الرفع." },
        { wrong: "Das Haus wird bauen (مجهول خاطئ)", right: "Das Haus wird gebaut.", whyAr: "المجهول تركيب من طبقتين: فعل مساعد werden مصرَّفاً + Partizip II في النهاية، فلا يكفي المصدر bauen ولا Partizip وحده، بل wird gebaut معاً." },
        { wrong: "wird أم wurde؟", right: "wird = مضارع (يُبنى). wurde = ماضٍ (بُني)", whyAr: "الفرق زمني لا معنوي: wird للمضارع (يُبنى الآن أو يُبنى عموماً)، وwurde للماضي البسيط (بُني في زمن ماضٍ)، وكلاهما يتبع Partizip II في النهاية." },
      ],
      relatedRuleComparison: {
        title: "Passiv أم Aktiv؟",
        content: "Aktiv: Die Arbeiter bauen das Haus (التركيز على الفاعل). Passiv: Das Haus wird gebaut (التركيز على الحدث). قد يكون المجهول أكثر شيوعاً في النصوص الإخبارية والرسمية (ملاحظة أسلوبية عامة لم تُقَس).",
      },
    },
    {
      id: "t2",
      titleAr: "التركيب المصدري (Infinitiv mit zu): حماية البيئة تبدأ بفعل",
      titleDe: "Der Infinitiv mit zu: Es ist wichtig, die Umwelt zu schützen",
      explanationAr:
                `التركيب المصدري يربط جملتين معنىً لا نحواً: الفعل الرئيسي يعبّر عن محاولة أو أمل أو رغبة أو حكم، والمصدر يذكر الفعل المقصود نفسه. فتقول: Er versucht, den Müll zu trennen. والتركيب: الجملة الرئيسية، فاصلة، ثم zu مع الفعل في النهاية.

وقاعدتان تحكمان الشكل: الأولى أنّ الأفعال الناقصة (können · müssen · wollen · dürfen · sollen · möchten) تأخذ المصدر بلا zu (Ich kann schwimmen)، بخلاف الأفعال العادية التي تجذبه (Ich versuche zu schwimmen). والثانية أنّ الأفعال المفصولة تُدخل zu بين البادئة والفعل: anfangen → Ich fange an, weniger Plastik zu kaufen — أي أنّ zu لا تقف قبل الفعل كاملاً بل في قلبه.

وثلاث صيغ عملية يكثر الخلط بينها: zu + مصدر (Ich versuche, das zu machen) · um … zu للتعبير عن الهدف (Ich lerne Deutsch, um zu studieren) · وdamit بجملة ثانوية كاملة حين يختلف الفاعل (Ich lerne Deutsch, damit meine Kinder es hören). والفرق بين um…zu وdamit ليس ذوقياً: إذا اتّحد الفاعل فـum…zu أخفّ، وإذا اختلف وجب damit.

وأخيراً الحالات التي تصير فيها البنية نفسها اسمية: بعد حروف الجرّ والحالات تأتي «zu + المصدر» بمعنى اسمي، مثل «Wir arbeiten für die Rettung der Natur» أنقى من التكرار. وهذه الصيغة هي ما يجعل الكتابة المكتوبة الرسمية أكثر كثافة.`,
      whyAr:
                "لماذا zu؟ لأنّ كل فعل له «سلوك»: بعض الأفعال تجذب مصدراً بعلامة zu، وبعضها يرفضها. والأفعال الناقصة (können · müssen · wollen · dürfen · sollen · möchten) تأخذ المصدر مباشرة بلا zu، لأنّها تحمل المعنى الناقص كاملاً: Ich kann schwimmen. أمّا الأفعال العادية والصفات فتطلب zu: Es ist wichtig, Deutsch zu lernen. ومن لم يعرف القاعدة يكتب «Ich kann das zu machen» — وهو خطأ لا يفهمه الألماني لأنه يقرؤها كتركيب جملة كاملة من أداة أخرى.",
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
        { de: "Ich versuche, jeden Tag das Fahrrad zu nehmen.", ar: "أحاول ركوب الدراجة كل يوم." },
        { de: "Sie hat vergessen, das Licht auszuschalten.", ar: "نسيت إطفاء الضوء." },
        { de: "Wir planen, ein Solardach zu bauen.", ar: "نخطط لبناء سقف شمسي." },
        { de: "Ich fange an, weniger Plastik zu kaufen.", ar: "أبدأ بشراء بلاستيك أقل." },
        { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", ar: "أتعلّم الألمانية لأعمل في ألمانيا." },
      ],
      comparisonWithArabic:
        "العربية تبني المصدر مباشرة على الفعل: «أحاول حماية البيئة»، فلا تحتاج أداة بين الفعلين. والألمانية تُلزم فاصلة وzu: Ich versuche, die Umwelt zu schützen. والنظير العربي الأقرب هو «من المهمّ أن نحمي البيئة»: «أن» تقوم مقام zu، والفعل بعدها منصوب كما أنّ المصدر في الألمانية في آخر الجملة. والمهارة المنتقلة هنا هي فهم أنّ zu ليس حرفاً للجرّ بل علامةُ صلةٍ بين جملتين، وأنّ موضعها في النهاية هو نفسه موضع الفعل في كلّ جملة ثانوية عرفها المتعلّم من weil وdass.",
      eselsbruecke:
        "«zu = راية اللحاق»: المصدر يركض إلى نهاية الجملة ومعه رايته zu. وإذا كان الفعل منفصلاً تلتصق الراية في الوسط: aufstehen → aufzustehen، ausschalten → auszuschalten. ولاحظ: الأفعال الناقصة ترفض الراية تماماً: Ich kann schwimmen (بدون zu).",
      commonMistakes: [
        { wrong: "Ich hoffe, dich sehen.", right: "Ich hoffe, dich zu sehen.", whyAr: "hoffen فعل عادي لا ناقص، فتأخذ جملته مصدراً بعلامة zu وليس مصدراً مجرّداً: Ich hoffe, dich zu sehen — والمصدر في النهاية." },
        { wrong: "Es ist wichtig, die Umwelt schützen.", right: "Es ist wichtig, die Umwelt zu schützen.", whyAr: "الصفات مع es ist تُدخل جملة مصدرية مستقلّة، فهي بحاجة إلى zu لتحمل الصلة بين الجملتين: Es ist wichtig, die Umwelt zu schützen — بخلاف الأفعال الناقصة التي تكفيها المصدر المجرّد." },
        { wrong: "Ich kann zu schwimmen.", right: "Ich kann schwimmen.", whyAr: "الأفعال الناقصة تحمل المعنى الناقص في صيغتها نفسها (können = قادر)، فلا تحتاج علامة صلٍ بينها وبين المصدر؛ فـzu تدخل مع الأفعال العادية والصفات لا معها." },
      ],
      relatedRuleComparison: {
        title: "zu + مصدر أم um … zu؟",
        content: "zu + مصدر = غاية عادية: Ich hoffe, dich zu sehen (أرجو رؤيتك). um … zu = «لكي» بهدف صريح: Ich lerne Deutsch, um in Deutschland zu arbeiten (أتعلم الألمانية لكي أعمل في ألمانيا).",
      },
    },
  ];

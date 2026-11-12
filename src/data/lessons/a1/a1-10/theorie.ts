/**
 * a1-10 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a1-10.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المهن والصيغ المحايدة: sein وarbeiten als",
      titleDe: "Berufe nennen: sein und arbeiten als",
      explanationAr:
        "في التعارف يمكن أن تسأل: **Was sind Sie von Beruf?** أو **Was machen Sie beruflich?** وتجيب مثلاً: **Ich bin Lehrerin.** أو **Ich arbeite als Lehrerin.**\n\n**١. صيغ المهن المؤنثة.** كثير من أسماء الأشخاص في المهن يصاغ بإضافة **-in**: der Lehrer → die Lehrerin، der Verkäufer → die Verkäuferin، der Ingenieur → die Ingenieurin. وجمع الصيغ التي تنتهي بـ **-in** يكون غالباً **-innen**: die Lehrerinnen، die Verkäuferinnen.\n\n**ليست -in قاعدةً بلا استثناء، وقد يتغير أصل الكلمة.** من الأمثلة التي تُحفظ كما هي: der Arzt → die Ärztin، der Koch → die Köchin، der Bauer → die Bäuerin. وتوجد مهن لها صيغة مختلفة، مثل der Kaufmann → die Kauffrau. لذلك تعلّم الكلمة المؤنثة مع صيغتها، ولا تستنتج كل صيغة من اللاحقة وحدها.\n\n**٢. المهنة بعد sein.** في التعريف المحايد بالمهنة تستعمل الألمانية كثيراً الاسم الخبري بلا أداة تنكير: **Ich bin Lehrer. Meine Mutter ist Ärztin.** وLehrer وÄrztin اسمان، لا صفتان؛ يبقيان بحرف كبير. وتظهر أداة التنكير مع اسم موصوف، مثل **Ich bin ein guter Lehrer**. أما الحكم على الجملة المجردة **Ich bin ein Lehrer** فلا نحسمه هنا بصحة أو خطأ مطلقين؛ يحتاج تقويمها إلى سياق استعمالي محدد. النمط الذي نتدرب عليه للتعريف المباشر هو **Ich bin Lehrer**.\n\n**٣. arbeiten als.** لتسمية الدور الذي تعمل به قل: **Ich arbeite als Ingenieur**؛ وفي النمط المعتاد لا تسبق اسم المهنة أداة: لا حاجة إلى *ein* هنا. **Ich bin Ingenieur** و**Ich arbeite als Ingenieur** جملتان صحيحتان؛ الأولى تقدّم المهنة خبراً عن المتكلم، والثانية تصوغها بوصفها عملاً أو دوراً. لا تعني إحداهما وحدها أن الوظيفة دائمة والأخرى أنها مؤقتة.\n\nمن مفردات السياق: der Chef / die Chefin (المدير/المديرة)، die Kollegin (الزميلة)، die Firma (الشركة)، das Praktikum (التدريب العملي)، der Beruf (المهنة)، arbeitslos (عاطل عن العمل)، selbstständig (يعمل لحسابه).",
      whyAr:
        "يفيد النمط بلا أداة في التعارف، لكن تفسيره بأنه «صفة لا اسم» تفسير غير صحيح: كلمة Lehrer اسمٌ ووظيفتها في الجملة اسم خبري بعد sein. يبيّن وصف Grammis لـPrädikativ أن هذا الجزء قد يكون اسماً أو مجموعة اسمية، ويورد مثالاً مهنياً مثل Karl ist Lehrer. كما يورد صيغةً موصوفةً بأداة، مثل eine berühmte Ärztin.\n\nوفي التأنيث، تساعد -in على تخمين صيغ كثيرة، لكنها لا تبرر تعميم «كل مهنة + in بلا تغيير». أمثلة Ärztin وKöchin وBäuerin تُظهر أن بعض الكلمات تتغير، وKauffrau تذكّر بأن لبعض المهن صيغة أخرى. هذا شرح تدريبي للصيغ الواردة هنا، لا حكمٌ شامل على كل الألقاب أو على كل طرق الإشارة إلى الأشخاص.",
      table: {
        title: "صيغ مهن مختارة",
        columns: ["الصيغة المذكرة", "الصيغة المؤنثة", "المعنى"],
        rows: [
          { label: "der Lehrer", cells: ["die Lehrerin", "معلم / معلمة"] },
          { label: "der Verkäufer", cells: ["die Verkäuferin", "بائع / بائعة"] },
          { label: "der Ingenieur", cells: ["die Ingenieurin", "مهندس / مهندسة"] },
          { label: "der Arzt", cells: ["die Ärztin", "طبيب / طبيبة"] },
          { label: "der Koch", cells: ["die Köchin", "طباخ / طباخة"] },
          { label: "der Bauer", cells: ["die Bäuerin", "مزارع / مزارعة"] },
          { label: "der Student", cells: ["die Studentin", "طالب / طالبة"] },
          { label: "der Kaufmann", cells: ["die Kauffrau", "تاجر / تاجرة"] },
        ],
      },
      examples: [
        { de: "Was sind Sie von Beruf? — Ich bin Ingenieur.", ar: "ما مهنتك؟ — أنا مهندس.", },
        { de: "Meine Mutter ist Ärztin.", ar: "أمي طبيبة.", },
        { de: "Ich arbeite als Verkäufer.", ar: "أعمل بائعاً.", },
        { de: "Meine Schwester arbeitet als Lehrerin.", ar: "أختي تعمل معلمة.", },
        { de: "Er ist Koch. Seine Kollegin ist Köchin.", ar: "هو طباخ. زميلته طباخة.", },
        { de: "Frau Maier ist eine gute Lehrerin.", ar: "السيدة ماير معلمة جيدة.", },
        { de: "Ich mache ein Praktikum bei einer Firma.", ar: "أؤدي تدريباً عملياً لدى شركة.", },
        { de: "Was machst du beruflich? — Ich arbeite als Ingenieurin.", ar: "ماذا تعملين؟ — أعمل مهندسة.", },
      ],
      comparisonWithArabic:
        "يمكن أن تساعد المقارنة بين **معلم/معلمة** و**Lehrer/Lehrerin** على ملاحظة أن اللغتين تملكان صيغاً مرتبطة بالنوع النحوي في بعض أسماء الأشخاص. لكنها مقارنة تقريبية، لا قاعدة واحدة تنطبق على كل المهن في اللغتين: في الألمانية تظهر تغييرات مثل Arzt → Ärztin وKoch → Köchin، كما توجد صيغ مثل Kaufmann/Kauffrau.\n\nوفي جملة التعريف، يحتاج الألماني إلى الفعل **bin/ist** في الحاضر: **Ich bin Lehrer**. أما العربية فيمكنها أن تقول «أنا معلّم» من دون فعل ظاهر. لا تنقل أداةً من الإنجليزية إلى كل جملة ألمانية؛ ابدأ بالنمط الشائع **Ich bin + اسم المهنة**. وللتركيز على الدور الوظيفي استعمل **arbeiten als + مهنة**، من دون ترجمة حرفية لتركيب الحال العربي.",
      eselsbruecke:
        "احفظ زوجاً لا نهايةً وحدها: Lehrer → Lehrerin، Ärztin، Köchin. وفي جملة التعريف المباشرة تذكّر النمط الشائع: Ich bin Lehrer؛ وللعمل بوصفه دوراً: Ich arbeite als Lehrer.",
      commonMistakes: [
        {
          wrong: "die Arztin",
          right: "die Ärztin",
          whyAr: "هذه كتابة غير صحيحة للصيغة المحددة؛ Arzt يصبح Ärztin مع Umlaut، لا Arztin.",
          classification: "error",
        },
        {
          wrong: "Ich arbeite Lehrer.",
          right: "Ich arbeite als Lehrer.",
          whyAr: "في تركيب العمل بمعنى أداء مهنة، تربط als الفعل باسم الدور: arbeiten als Lehrer. لا تنقل حذف حرف الربط من العربية إلى هذا النمط الألماني.",
          classification: "error",
        },
        {
          wrong: "Meine Mutter ist Kochin.",
          right: "Meine Mutter ist Köchin.",
          whyAr: "الصيغة المعجمية هي Köchin مع ö؛ إضافة -in وحدها من دون تغيير الصيغة لا تنتج هذه الكلمة الصحيحة.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "sein أم arbeiten als؟",
        content:
          "Ich bin Lehrer وIch arbeite als Lehrer طريقتان صحيحتان للتعريف بالمهنة. الأولى تجعل اسم المهنة خبراً بعد sein؛ والثانية تصوغ الدور مع als بعد arbeiten. لا تفسر الفرق على أنه دائم مقابل مؤقت. نتدرب على Ich bin Lehrer بوصفه النمط المحايد؛ ولا يصدر هذا الدرس حكماً عاماً على Ich bin ein Lehrer من دون سياق استعمالي محدد.",
      },
    },
    {
      id: "t2",
      titleAr: "النفي في الأنماط الشائعة: nicht وkein",
      titleDe: "Negation in einfachen Sätzen: nicht und kein",
      explanationAr:
        "في الألمانية نختار أداة النفي بحسب العبارة والمعنى المقصود، لا وفق ترجمة حرفية لكلمة عربية واحدة. في الأمثلة المحايدة المتدرب عليها هنا، تأتي **kein** قبل الاسم لتحل محل **ein/eine** أو مع اسم بلا أداة في هذا المعنى، وتتصرف بحسب الاسم والحالة: **ein Auto → kein Auto**، **Zeit → keine Zeit**، **einen Bruder → keinen Bruder**، والجمع **keine Kollegen**.\n\nأما **nicht** فتظهر في أمثلة مثل نفي جملة فعلية أو صفة أو عبارة اسمية معرّفة: **Ich arbeite heute nicht. Das Büro ist nicht groß. Ich kenne den Chef nicht.** موضع nicht ليس قاعدةً تقول «دائماً في آخر الجملة»؛ يتصل الموضع ببنية الجملة وبما يبرزه المتكلم. في الجملة البسيطة المحايدة يأتي كثيراً قرب نهاية الجملة، ومع الصفة يأتي قبلها، ومع الفعل المنفصل في مثالنا يأتي قبل الجزء المنفصل: **Ich rufe heute nicht an.**\n\nقارن معنى الاسم المقصود: **Ich kenne den Chef nicht** تعني أنني لا أعرف المدير المحدد في السياق، أما **Ich kenne keinen Chef** فتعني أنني لا أعرف أي مدير/لا أعرف مديراً. كلاهما جملة ألمانية ممكنة؛ السياق هو الذي يحدد الأنسب. كما يمكن أن يستعمل المتكلم **nicht** مع اسم في نفي تقابلي، مثل **Nicht heute, sondern morgen**؛ لذلك لا تختصر القاعدة إلى «kein مع كل اسم، وnicht لا يأتي مع الأسماء».\n\nفي النمط المحايد الذي نتدرب عليه، استعمل علامة نفي مناسبة واحدة: **Ich habe kein Geld.** لا تحوّل ذلك إلى ادعاء بأن كل تعاقب لأداتي نفي ممنوع في كل استعمال؛ التراكيب متعددة النفي لها دلالات ولهجية وسياقية خاصة لا يحتاجها هذا الدرس.",
      whyAr:
        "لا توجد مطابقة كلمة بكلمة بين kein والنفي العربي: **Ich habe keine Zeit** يمكن أن تعني «ليس لدي وقت»، و**Das ist nicht teuer** تعني «هذا ليس غالياً». اختر الأداة من تركيب الجملة الألمانية، ثم اختر صيغة kein المناسبة للاسم والحالة.\n\nويفرّق Grammis بين وسائل نفي متعددة، منها nicht وkein والضمائر والأحوال المنفية، ويصف استعمال أكثر من وسيلة في الجملة بحسب دلالتها. لذلك يحصر هذا الدرس التدريب في أمثلة محايدة قصيرة بدلاً من قاعدة منطقية مطلقة. كما أن نقل nicht إلى موضع مختلف قد يغيّر البؤرة أو المقابلة، فلا تحفظ موضعاً واحداً على أنه يصلح لكل الجمل.",
      table: {
        title: "النمط المحايد في أمثلة الدرس",
        columns: ["ما المقصود نفيه؟", "النمط المتدرب عليه", "مثال"],
        rows: [
          { label: "اسم مع أداة ein/eine", cells: ["استبدل الأداة بصيغة kein المناسبة", "Ich habe keinen Bruder."] },
          { label: "اسم بلا أداة في الإثبات", cells: ["kein + الاسم بصيغة مناسبة", "Ich habe keine Zeit."] },
          { label: "فعل أو جملة بسيطة", cells: ["nicht؛ الموضع بحسب الجملة", "Ich arbeite heute nicht."] },
          { label: "صفة خبرية", cells: ["nicht قبل الصفة في المثال", "Das Büro ist nicht groß."] },
          { label: "اسم معرّف لشخص محدد", cells: ["العبارة المعرّفة ثم nicht هنا", "Ich kenne den Chef nicht."] },
        ],
      },
      examples: [
        { de: "Ich habe ein Auto. — Ich habe kein Auto.", ar: "لدي سيارة. — ليس لدي سيارة.", },
        { de: "Ich habe Zeit. — Ich habe keine Zeit.", ar: "لدي وقت. — ليس لدي وقت.", },
        { de: "Ich habe keinen Bruder.", ar: "ليس لدي أخ.", },
        { de: "Das Büro ist nicht groß.", ar: "المكتب ليس كبيراً.", },
        { de: "Ich arbeite heute nicht.", ar: "لا أعمل اليوم.", },
        { de: "Ich kenne den Chef nicht.", ar: "لا أعرف المدير المحدد في السياق.", },
        { de: "Ich rufe heute nicht an.", ar: "لن أتصل اليوم.", },
        { de: "Nicht heute, sondern morgen arbeite ich.", ar: "ليس اليوم، بل غداً أعمل.", },
        { de: "Das ist kein Problem.", ar: "هذه ليست مشكلة.", },
      ],
      comparisonWithArabic:
        "تستعمل العربية وسائل مثل لا، لم، لن، ما، وليس بحسب تركيب الجملة والزمن واللهجة. وفي الألمانية تتغير الصيغة أيضاً بحسب ما تريد نفيه: اسمٌ منكّر في أمثلة مثل **kein Geld**، أو وصف مثل **nicht teuer**، أو جملة مثل **Ich arbeite nicht**. المقابلة هنا تقريبية؛ لا نقول إن كل أدوات النفي العربية تقع في موضع واحد أو إن للألمانية ترجمة عربية واحدة ثابتة.\n\nانتبه كذلك إلى الفرق بين **Ich kenne den Chef nicht** (مدير محدد) و**Ich kenne keinen Chef** (لا أعرف أي مدير/لا أعرف مديراً). لا يكفي أن ترى اسماً لتقرر تلقائياً بين nicht وkein؛ انظر إلى أداة الاسم ومعنى العبارة، وراجع سياق الجملة. والتدريب هنا على أمثلة الدرس المحايدة، لا على كل استعمالات النفي أو اللهجات الألمانية.",
      eselsbruecke:
        "ابدأ بسؤالين: هل أستبدل ein/eine أو أنفي اسماً بلا أداة في هذا المعنى؟ جرّب kein وصيغته المناسبة. هل أنفي فعلاً أو صفةً أو أتكلم عن اسم محدد؟ راجع نمط nicht وموضعه في الجملة. ثم افحص السياق.",
      commonMistakes: [
        {
          wrong: "Ich habe kein Bruder.",
          right: "Ich habe keinen Bruder.",
          whyAr: "Bruder مذكر ومفعول به في هذا المثال، لذلك الصيغة المطلوبة هي keinen. ليست المشكلة أن كل اسم يتبع صيغة واحدة؛ تتغير نهاية kein مع الاسم والحالة.",
          classification: "error",
        },
        {
          wrong: "Ich nicht arbeite heute.",
          right: "Ich arbeite heute nicht.",
          whyAr: "في هذه الجملة الخبرية البسيطة يجب أن يأتي الفعل المصرف في الموقع الثاني؛ نقل nicht إلى ما قبل ich arbeite هنا يكسر ترتيب الجملة المقصود. لا تستنتج من هذا أن nicht لا يمكن أن يأتي قبل عناصر أخرى في كل تركيب.",
          classification: "error",
        },
        {
          wrong: "Ich arbeite nicht am Samstag.",
          right: "Ich arbeite am Samstag nicht.",
          whyAr: "يمكن أن تكون الجملتان صحيحتين: قد يبرز Ich arbeite nicht am Samstag نفي يوم السبت في مقابلة، بينما يلائم Ich arbeite am Samstag nicht النمط المحايد المتدرّب عليه هنا. يحدد السياق والبؤرة الأنسب؛ لا نعدّ الأولى خطأً مطلقاً.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich kenne keinen Chef.",
          right: "Ich kenne den Chef nicht.",
          whyAr: "إذا كان المقصود مديراً محدداً سبق ذكره، فالجملة المناسبة هنا Ich kenne den Chef nicht. أما Ich kenne keinen Chef فهي جملة ممكنة بمعنى مختلف؛ ليست تصحيحاً عاماً لها خارج هذا السياق.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "اسم محدد أم نفي وجود/اختيار؟",
        content:
          "Ich kenne den Chef nicht تنفي معرفتي بشخص محدد. Ich kenne keinen Chef تنفي معرفة أي مدير أو تنفي وجود مدير ضمن المعنى المقصود. أما Ich habe keinen Bruder فتحل فيها kein محل الأداة المنكرة وتظهر نهايته الموافقة للمذكر في المفعول به. السياق والشكل معاً يحددان الاختيار.",
      },
    },
    {
      id: "t3",
      titleAr: "جهة العمل ومكانها: bei وin مع Dativ",
      titleDe: "Arbeitsort und Arbeitgeber: bei und in mit Dativ",
      explanationAr:
        "للسؤال عن العمل في موقع أو لدى جهة، قارن بين **bei** و**in**. حرف **bei** يأخذ Dativ، ويستعمل كثيراً مع شخص أو جهة/شركة بوصفها صاحب العمل: **bei einem Arzt**, **bei einer Firma**, **bei Siemens**. ويأتي **in** كثيراً لوصف المؤسسة أو المجال أو الموقع الذي يعمل فيه الشخص: **in einem Büro**, **in einer Praxis**, **in einem Krankenhaus**, **in einer Firma**. هذه إرشادات للأمثلة المعتادة وليست قسمةً تمنع كل استعمال آخر؛ فقد تصف **bei einer Firma** الشركة بوصفها جهة العمل، وقد تشير **in einer Firma** إلى المؤسسة أو مكان العمل بحسب ما تريد إبرازه.\n\nسبق أن قابلت Dativ في دروس سابقة؛ هنا نطبّقه في سياق المهن. مع **in** ذات المعنيين، يدل سؤال **Wo?** عن موقع ثابت في أمثلتنا على Dativ: **in einem Büro**, **in einer Firma**. أما سؤال الاتجاه **Wohin?** فيأخذ Akkusativ في مثال مثل **Ich gehe in ein Büro**. لا تساوِ اسم الحالة الألماني Dativ بجرّ العربية؛ تعلّم الصيغة الألمانية مع حرف الجر ومثالها.\n\nتظهر أداة النكرة في المكان بحسب الاسم: **in einem Büro** (das Büro)، **in einer Firma** (die Firma)، **bei einem Arzt** (der Arzt). ويظهر Dativ أيضاً في **bei dem Arzt**؛ والاختصار الشائع **beim Arzt**، كما أن **in dem Büro** و**im Büro** كلاهما ممكنان. لا نعلّم أن الاختصار واجب في كل سياق؛ قد تُفصل الكلمتان للتوكيد أو لمقابلة معينة.\n\nعند اختيار الجملة، اسأل: هل أقصد جهة العمل أو المؤسسة، أم أصف مجال العمل أو موقعه؟ ثم اختر bei أو in وفق التركيب والسياق. إذا قلت **Ich arbeite bei einem Arzt** فأنت تصف العمل لدى الطبيب؛ وإذا قلت **Ich arbeite in einer Arztpraxis** فأنت تصف موقع العمل. كلا المثالين طبيعي في معناه.",
      whyAr:
        "في بعض الترجمات العربية يمكن أن يظهر كل من bei وin بكلمة «في»، أو يترجم bei بـ«لدى/عند». هذه مقابلات تقريبية؛ لا تجعل حرفاً عربياً واحداً قاعدة آلية. ويوضح Grammis أن bei يتطلب Dativ في مثال علاقة العمل **bei der Firma Siemens**، وأن مدخل arbeiten يورد أيضاً **in einem Krankenhaus** ويصف **in + Dativ** الساكنة بوصفها طريقةً ممكنة للإشارة إلى المؤسسة التي يعمل الشخص لديها. كما يشرح مدخل Wechselpräpositionen الفرق بين الموقع **Wo?** والاتجاه **Wohin?** مع in؛ لذلك فاختيار bei/in ليس ثنائيةً مطلقة بين الأشخاص والمباني.\n\nلهذا تعطي التمارين سياقاً كلما كان مهماً: «لدى طبيب» يوجّه إلى bei einem Arzt، و«داخل المكتب/فيه» إلى in einem Büro. وعبارة **bei dem Arzt** ليست خطأً بحد ذاتها؛ الشائع المختصر **beim Arzt**، أما الفصل فقد يكون مقصوداً. اسم Dativ مصطلح ألماني، وليس ترجمةً لجرّ العربية.",
      table: {
        title: "اسأل عن العلاقة قبل اختيار حرف الجر",
        columns: ["المقصود", "النمط المتدرب عليه", "مثال"],
        rows: [
          { label: "جهة أو شخص أعمل لديه", cells: ["bei + Dativ", "bei einem Arzt"] },
          { label: "شركة بوصفها جهة العمل", cells: ["bei + اسم الشركة/جهة", "bei Siemens"] },
          { label: "مؤسسة أو موقع العمل (بحسب السياق)", cells: ["in + Dativ في المثال المكاني", "in einem Büro / in einem Krankenhaus"] },
          { label: "اتجاه إلى الداخل", cells: ["in + Akkusativ في هذا المعنى", "in ein Büro gehen"] },
          { label: "اختصار شائع", cells: ["bei dem / in dem", "beim Arzt / im Büro"] },
        ],
      },
      examples: [
        { de: "Ich arbeite bei einem Arzt.", ar: "أعمل لدى طبيب.", },
        { de: "Ich arbeite in einer Arztpraxis.", ar: "أعمل في عيادة طبيب.", },
        { de: "Sie arbeitet bei einer Firma.", ar: "تعمل لدى شركة.", },
        { de: "Er arbeitet in einem Büro.", ar: "يعمل في مكتب.", },
        { de: "Mein Vater arbeitet bei Siemens.", ar: "أبي يعمل لدى شركة سيمنس.", },
        { de: "Wir sind im Büro.", ar: "نحن في المكتب.", },
        { de: "Ich bin heute beim Arzt.", ar: "أنا اليوم عند الطبيب.", },
        { de: "Ich gehe in ein Büro.", ar: "أدخل إلى مكتب.", },
        { de: "Sie macht ein Praktikum bei einer Firma in Berlin.", ar: "تؤدي تدريباً عملياً لدى شركة في برلين.", },
      ],
      comparisonWithArabic:
        "قد تقابل **bei** في هذا السياق بـ«لدى» أو «عند»، و**in** بـ«في»، لكن العلاقة ليست تطابقاً آلياً: يمكن أن تصف جهة العمل بعبارة **bei einer Firma**، كما يمكن أن تصف الموقع بعبارة **in einer Firma**. افهم السياق قبل ترجمة حرف الجر.\n\nوالأهم أن **Dativ** الألماني ليس هو «الجرّ» العربي؛ اختلاف التسمية لا يعني تطابق الوظيفة النحوية في اللغتين. احفظ العبارة كاملة مع مثالها: **bei einem Arzt**، **in einem Büro**، **in einer Firma**. ومع حروف in ونحوها تميّز بين مكان ثابت في أمثلة **Wo?** وبين اتجاه في **Wohin?**: **in dem Büro / im Büro** مقابل **in ein Büro gehen**.",
      eselsbruecke:
        "احفظ العلاقة مع العبارة: لدى طبيب → bei einem Arzt؛ داخل/في مكتب → in einem Büro؛ اتجاه إلى مكتب → in ein Büro gehen. ثم تعلّم صيغة الاسم مع Dativ كما تظهر في المثال، من دون مساواتها بحالة عربية.",
      commonMistakes: [
        {
          wrong: "Ich arbeite in eine Firma.",
          right: "Ich arbeite in einer Firma.",
          whyAr: "السياق هنا سؤال Wo? عن موقع عمل ثابت، لذلك تأتي صيغة Dativ einer. أما in + Akkusativ فتظهر في معنى الاتجاه، مثل Ich gehe in eine Firma hinein؛ لا تحكم على العبارة خارج سياقها.",
          classification: "error",
        },
        {
          wrong: "Ich arbeite in einem Arzt.",
          right: "Ich arbeite bei einem Arzt.",
          whyAr: "المقصود في هذا المثال شخصٌ هو جهة العمل، لا موقع داخل مبنى؛ لذلك نختار bei einem Arzt. وإذا أردت ذكر المكان فقل مثلاً in einer Arztpraxis. لا نصف in بأنه ممنوع مع كل اسم جهة عمل؛ نحدد العلاقة أولاً.",
          classification: "error",
        },
        {
          wrong: "Ich arbeite bei einer Firma.",
          right: "Ich arbeite in einer Firma.",
          whyAr: "الجملتان مقبولتان بحسب المقصود: bei einer Firma تصف الشركة بوصفها جهة العمل، وin einer Firma تصف موقع العمل داخلها. ليس إحداهما تصحيحاً مطلقاً للأخرى؛ اختر وفق السياق.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich bin heute bei dem Arzt.",
          right: "Ich bin heute beim Arzt.",
          whyAr: "beim اختصار شائع لـbei dem، لكنه ليس التصحيح الوحيد في كل سياق. يمكن فصل bei dem للتوكيد أو للمقابلة؛ في هذا المثال المحايد نتدرب على الاختصار المألوف.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "Wo? أم Wohin? مع in",
        content:
          "للموقع الثابت في المثال: Ich arbeite in einem Büro (Dativ). للاتجاه إلى الداخل: Ich gehe in ein Büro (Akkusativ). أما bei في أمثلة هذا الدرس فتأخذ Dativ: bei einem Arzt. هذه أمثلة تعليمية محددة، لا تعني أن bei لا تصف المؤسسات أو أن in لا تأتي مع جهات عمل في سياقات أخرى.",
      },
    },
    {
      id: "t4",
      titleAr: "أدوات الملكية في العمل: unser وeuer وIhr",
      titleDe: "Possessivformen im Arbeitsalltag",
      explanationAr:
        "تعلمتَ mein وdein وغيرها. في هذا الدرس نضيف أشكالاً متكررة في محيط العمل: **unser** (لنا)، و**euer** (لكم في الخطاب غير الرسمي للجمع)، و**Ihr** (لكم/لحضرتكم في الخطاب الرسمي).\n\n**١. طابق أداة الملكية مع الاسم.** في الرفع نقول **unser Chef** (der Chef)، **unser Büro** (das Büro)، **unsere Firma** (die Firma)، **unsere Kollegen** (جمع). وهذه أمثلة رفع فقط؛ إذا تغيرت وظيفة الاسم تتغير نهاية الأداة أيضاً: **in unserem Büro** (Dativ)، و**für unseren Chef** (Akkusativ). الملكية تحدد الجذر، والاسم والحالة يحددان النهاية.\n\n**٢. الصيغ الشائعة لـeuer.** في الخطاب غير الرسمي للجمع استعمل مثلاً **euer Chef**, **euer Büro**, **eure Firma**, **eure Kollegen**. والصيغة **eure** مختصرة وشائعة. لكن **euere** ليست خطأً عاماً: يسجل Duden الصيغتين **eure/euere** في مواضع من تصريف euer، وكذلك يورد بدائل مثل eurem/euerm. لذلك ندرّب هنا الصيغة الشائعة، ولا نعلّم أن كل احتفاظ بالحرف e خطأ.\n\n**٣. Ihr الرسمية وحرفها الكبير.** عند استعمال صيغة المخاطبة الرسمية Sie تُكتب أداة الملكية **Ihr/Ihre/Ihrem/Ihren** بحرف كبير: **Herr Meier, ist das Ihr Büro?** أما **ihr/ihre** بحرف صغير فقد تعني ملكية مؤنث غائب أو ملكية جمع: **ihr Büro**. يحدد السياق المقصود. ويمكن أن تكون Sie مفرداً رسمياً أو جمعاً رسمياً؛ أما euer فتخاطب به جمعاً غير رسمي.\n\nالاختيار بين du/ihr وSie يتبع العلاقة والعرف المتفق عليه، لا قاعدةً تقول إن كل زميل أو مدير يجب أن يُخاطَب بطريقة واحدة. اتبع الصيغة التي يستخدمها الطرف الآخر أو اسأل عند الحاجة. وفي أمثلة الدرس نتدرب على المطابقة والكتابة، لا على تقرير عرف اجتماعي موحد لكل أماكن العمل.",
      whyAr:
        "تعتمد نهاية أداة الملكية على الاسم والحالة، لا على المالك وحده: Firma مؤنث في الرفع → unsere Firma، وBüro محايد في Dativ بعد in المكانية → in unserem Büro. كما أن الفرق بين **Ihr** الرسمية و**ihr** الصغيرة فرق إملائي ودلالي محتمل، لكن الجملة والسياق يبينان إن كان المقصود مخاطباً رسمياً أو شخصاً/مجموعة غائبة.\n\nويجب التفريق بين الصيغة التي نختار تدريبها وبين كل صيغة مقبولة في الألمانية. Duden يورد **eure** و**euere**، وكذلك **eurem/euerm**؛ لذا صُححت القاعدة السابقة في هذا الدرس: لا نعامل euere على أنها خطأ مؤكد. وفي التواصل المهني لا نفترض أن الهرمية أو العمر يفرضان وحدهما Sie أو du؛ الاستعمال يتفاوت بحسب الشخص والمكان والعلاقة.",
      table: {
        title: "أشكال مختارة في الرفع",
        columns: ["المتكلم/المخاطب", "مذكر أو محايد", "مؤنث أو جمع"],
        rows: [
          { label: "wir (نحن)", cells: ["unser Chef / unser Büro", "unsere Firma / unsere Kollegen"] },
          { label: "ihr (أنتم، غير رسمي)", cells: ["euer Chef / euer Büro", "eure Firma / eure Kollegen"] },
          { label: "Sie (حضرتك/حضراتكم، رسمي)", cells: ["Ihr Chef / Ihr Büro", "Ihre Firma / Ihre Kollegen"] },
          { label: "sie (هي/هم، غائب)", cells: ["ihr Chef / ihr Büro", "ihre Firma / ihre Kollegen"] },
        ],
      },
      examples: [
        { de: "Unsere Firma ist klein.", ar: "شركتنا صغيرة.", },
        { de: "Unser Chef kommt heute nicht.", ar: "مديرنا لا يأتي اليوم.", },
        { de: "Ist das euer Büro?", ar: "هل هذا مكتبكم؟ (خطاب غير رسمي للجمع)", },
        { de: "Eure Kolleginnen sind heute da.", ar: "زميلاتكم هنا اليوم.", },
        { de: "Herr Meier, ist das Ihr Büro?", ar: "سيد ماير، هل هذا مكتب حضرتك؟", },
        { de: "Frau Klein, wie ist Ihre Telefonnummer?", ar: "سيدة كلاين، ما رقم هاتف حضرتك؟", },
        { de: "Wir treffen uns in unserem Büro.", ar: "نلتقي في مكتبنا.", },
        { de: "Das ist ihre Firma, nicht unsere.", ar: "هذه شركتهم/شركتها، لا شركتنا.", },
      ],
      comparisonWithArabic:
        "توجد في العربية الفصحى واللهجات ضمائر وطرق متعددة لمخاطبة المفرد والجمع وللتأدب؛ لا تختزل ذلك في صيغة واحدة ولا تتوقع مقابلة حرفية بين كل لاحقة عربية وأداة ألمانية. في الألمانية يختلف **euer** للجمع غير الرسمي عن **Ihr** في المخاطبة الرسمية، كما تختلف كتابة Ihr الكبيرة عن ihr الصغيرة.\n\nوتظهر النهايات أيضاً بحسب الاسم والحالة: **unsere Firma** في الرفع مقابل **in unserem Büro** مع Dativ. لذا احفظ العبارة كاملة، لا الجذر وحده. أما اختيار du/ihr أو Sie فهو استعمال اجتماعي يتبع الموقف وعرف العلاقة؛ تعلّم الأمثلة ولا تعممها على كل صاحب عمل أو زميل.",
      eselsbruecke:
        "ابدأ بالاسم: unser Chef، unsere Firma، unser Büro. ومع euer تعلّم الشائع euer/eure، وتذكر أن Duden يجيز أيضاً صيغاً مثل euere. واكتب Ihr بحرف كبير عندما تكون ملكية المخاطبة الرسمية Sie.",
      commonMistakes: [
        {
          wrong: "Unsere Chef ist nett.",
          right: "Unser Chef ist nett.",
          whyAr: "Chef مذكر في هذا المثال المرفوع، لذلك نستخدم unser Chef. أما عند تغير الحالة فقد تظهر نهايات أخرى مثل unseren Chef أو unserem Chef.",
          classification: "error",
        },
        {
          wrong: "Das ist eure Büro.",
          right: "Das ist euer Büro.",
          whyAr: "Büro محايد في الرفع؛ الصيغة هنا euer Büro. لا تختَر eure لمجرد أن المخاطَبين جمع؛ النهاية تتبع الاسم لا عدد المالكين.",
          classification: "error",
        },
        {
          wrong: "Herr Weber, ist das ihr Büro?",
          right: "Herr Weber, ist das Ihr Büro?",
          whyAr: "النداء يحدد أن السؤال موجّه رسمياً إلى Herr Weber، لذا نكتب أداة ملكية المخاطبة الرسمية Ihr بحرف كبير. ihr الصغيرة صحيحة في سياقات ملكية الغائبة/الجمع، لكنها لا تحقق هذا المعنى هنا.",
          classification: "error",
        },
        {
          wrong: "Das ist euere Firma.",
          right: "Das ist eure Firma.",
          whyAr: "eure هي الصيغة المختصرة الشائعة التي نعتمدها في أمثلة الدرس، لكن Duden يسجل أيضاً euere؛ لا تعدّها خطأً معيارياً عاماً. اختر الصيغة المطلوبة في المهمة فقط.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich arbeite in unser Büro.",
          right: "Ich arbeite in unserem Büro.",
          whyAr: "السياق هنا موقع ثابت بعد in، فيأتي Dativ: in unserem Büro. أداة الملكية تتغير مع الحالة مثل بقية الكلمات المصاحبة للاسم؛ لا يغير ذلك معنى الملكية.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "الجذر للمالك والنهاية للاسم والحالة",
        content:
          "نقارن: unser Chef (رفع مذكر)، unsere Firma (رفع مؤنث)، in unserem Büro (Dativ محايد)، für unseren Chef (Akkusativ مذكر). أما euer/eure/euere فتُعرض هنا بوصفها أشكالاً شائعة أو بدائل موثقة، لا قاعدةً تبيح رفض صيغة مسجلة في المعجم. وحرف Ihr الكبير مرتبط بالمخاطبة الرسمية.",
      },
    },
  ];

/**
 * b2-11 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الضمير النسبي في المضاف إليه: dessen وderen",
      titleDe: "Relativpronomen im Genitiv: dessen und deren",
      explanationAr:
        "حين تكون العلاقة علاقة مِلكية («الكاتب الذي رواياته…») نستعمل الضمير النسبي في حالة المضاف إليه: dessen للمذكّر والمحايد، وderen للمؤنّث والجمع. قاعدتان أساسيتان: (1) الشكل يتبع الاسم السابق (المرجع) لا الاسم التالي؛ (2) الاسم الذي يلي dessen/deren يأتي بلا أداة تعريف إطلاقاً: der Autor, dessen Romane… وليس dessen die Romane. أمّا حالة الاسم الذي يليهما فتتحدد بوظيفته النحوية في الجملة النسبية؛ فقد يكون فاعلاً أو مفعولاً، ولا يفرض dessen/deren حالةً خاصة عليه.\n\nولا تكفي صيغ الضمير النسبي الأخرى هنا لأنها تؤدي وظائف نحوية مختلفة؛ أمّا علاقة الملكية فتُعبّر عنها صيغة المضاف إليه (Genitiv) dessen/deren. ومن ثمّ فإن «der Autor, dessen Romane bekannt sind» تساوي في المعنى «die Romane des Autors sind bekannt»، لكنّ الصيغة النسبية أقصر وتُبقي الاسم مرّة واحدة. والجملة النسبية تبقى جملة كاملة: der Autor هو المبتدأ، وdessen Romane bekannt sind هي الموصول، فلا يُستعمل dessen مع اسم مجرّد بلا فعل بعده.\n\nوالعربية تفعل الشيء نفسه بضمير لاصق في آخر المملوك («رواياتُه»)، وبنيّتها تكشف الموضع الذي يخطئ فيه المتعلّم: في الألمانية يختار dessen/deren **مالكاً** لا مملوكاً. فالكاتب رجل ⇒ dessen ولو كان المملوك جمعاً (die Romane)؛ والأمّ امرأة ⇒ deren ولو كان المملوك محايداً (das Auto)؛ والطلاب جماعة ⇒ deren، لأنّ الجمع يأخذ deren كما تأخذه المؤنّثة. والذاكرة الحسّية: dessen مثل des (المذكّر والمحايد)، وderen مثل der (المؤنّث والجمع).\n\nوفي الاستعمال تفصيلان. الأول أنّ dessen/deren يمكن أن تتقدّم عليها صيغةُ حرف جرّ داخل الجملة النسبية (der Mann, mit dessen Bruder ich rede)، فيبقى شكل dessen/deren تابعاً للمالك، بينما يحدّد حرف الجر حالة الاسم الذي يليه (mit dessen Bruder). ويمكن أن تؤدي تراكيب von + Dativ معنى قريباً في بعض السياقات، لكنها ليست بديلاً آلياً عن الجملة النسبية بـdessen/deren؛ فاختيار التركيب يتبع المعنى والبناء المقصود. وأخيراً تُستعمل deren للمفرد المؤنّث وللجمع بلفظ واحد، فالتمييز يقوم على المرجع لا على صيغة الاسم التالي.",
      whyAr:
        "لماذا يخطئ الناطق بالعربية هنا تحديداً؟ لأنّ العربية تعلّق المِلكية على الاسم الثاني بضمير متّصل («رواياتُه»)، فيكون التذكير والتأنيث تابعاً للمالك تلقائياً. الألمانية تفصل: dessen/deren كلمة مستقلّة تسبق المملوك، لكنها مع ذلك تُصرَّف حسب المالك. فمن يقول deren Romane عن كاتب رجل يكون قد طابق الكلمة الخطأ.",
      table: {
        title: "اختيار dessen أو deren حسب المرجع",
        columns: ["المرجع (المالك)", "الشكل", "مثال"],
        rows: [
          { label: "مذكّر مفرد", cells: ["dessen", "der Autor, dessen Romane bekannt sind"] },
          { label: "محايد مفرد", cells: ["dessen", "das Kind, dessen Eltern arbeiten"] },
          { label: "مؤنّث مفرد", cells: ["deren", "die Frau, deren Auto kaputt ist"] },
          { label: "جمع", cells: ["deren", "die Studenten, deren Noten gut sind"] },
          { label: "بعد حرف جر", cells: ["يبقى الشكل نفسه", "der Mann, mit dessen Bruder ich rede"] },
          { label: "الاسم التالي", cells: ["بلا أداة تعريف", "✗ dessen die Romane"] },
        ],
      },
      examples: [
        { de: "Der Autor, dessen Romane ins Arabische übersetzt wurden, lebt in Berlin.", ar: "الكاتب الذي تُرجمت رواياته إلى العربية يعيش في برلين." },
        { de: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet seit zehn Jahren hier.", ar: "الزميلة التي سمعنا محاضرتها تعمل هنا منذ عشر سنوات." },
        { de: "Das Kind, dessen Eltern im Ausland leben, wohnt bei den Großeltern.", ar: "الطفل الذي يعيش والداه في الخارج يسكن عند جدّيه." },
        { de: "Die Nachbarn, deren Hund immer bellt, sind umgezogen.", ar: "الجيران الذين ينبح كلبهم دائماً قد انتقلوا." },
        { de: "Ich kenne einen Arzt, mit dessen Hilfe du einen Termin bekommst.", ar: "أعرف طبيباً تحصل بمساعدته على موعد." },
        { de: "Die Firma, deren Produkte wir verkaufen, sitzt in Hamburg.", ar: "الشركة التي نبيع منتجاتها مقرّها في هامبورغ." },
      ],
      comparisonWithArabic:
        "«الكاتب الذي رواياتُه مشهورة» = der Autor, dessen Romane bekannt sind. لاحظ الفرق البنيوي: العربية تُلصق الضمير بالمملوك في آخره، والألمانية تضع كلمة مستقلّة قبله. وانتبه: الألمانية تختار dessen حسب المالك (رجل)، لا حسب المملوك (Romane جمع). ولذلك يخطئ من يقول deren Romane عن رجل: صحيحٌ أنّ Romane جمع، لكنّ اللاحقة تُقاس بمن يملك. ومثلها: «بيتُ المرأة» = die Frau, deren Haus…، و«دفاتر الطلاب» = die Studenten, deren Hefte…؛ فالمرجع هو الحاكم، والمملوك يتبعه بلا أداة تعريف.",
      eselsbruecke:
        "«dessen للمالك المذكّر والمحايد (الرجل والطفل)، وderen للمالكة المؤنّثة والجماعة». والعلامة الفارقة: بعدهما اسم عارٍ بلا der/die/das — إن وجدت أداة تعريف فقد أخطأت.",
      commonMistakes: [
        { wrong: "Der Autor, deren Romane bekannt sind.", right: "Der Autor, dessen Romane bekannt sind.", whyAr: "المطابقة مع المالك (der Autor مذكّر) لا مع المملوك (die Romane جمع)." },
        { wrong: "Die Frau, dessen Auto kaputt ist.", right: "Die Frau, deren Auto kaputt ist.", whyAr: "المالكة مؤنّثة ⇒ deren، ولو كان المملوك محايداً (das Auto)؛ فالمطابقة مع المرجع لا مع المملوك، ولذلك لا تصلح dessen هنا أبداً." },
        { wrong: "Der Mann, dessen der Sohn studiert.", right: "Der Mann, dessen Sohn studiert.", whyAr: "لا أداة تعريف بعد dessen/deren أبداً: dessen هو نفسه علامة الإضافة، فمجيء der بعده تكرار للأداة على غرار العربية «الذي ابنُه». والصواب: dessen Sohn studiert." },
      ],
      relatedRuleComparison: {
        title: "dessen أم von dem؟",
        content:
          "deren/ dessen يربطان الاسم بالمالك مباشرةً داخل الجملة النسبية. أمّا von + Dativ فيظهر في تراكيب أخرى بحسب الفعل والمعنى، ولا ينبغي افتراض أنه بديل مطابق دائماً.",
      },
    },
    {
      id: "t2",
      titleAr: "الصيغة المصدرية المزدوجة مع الأفعال المودالية",
      titleDe: "Der doppelte Infinitiv mit Modalverben",
      explanationAr:
        "في الصيغة القياسية المستهدفة هنا، حين يقترن فعل مودالي بفعل رئيسي في Perfekt نستخدم مصدرين متتاليين (Ersatzinfinitiv)، لا Partizip II للمودالي مثل gemusst: Ich habe arbeiten müssen. الترتيب ثابت: haben المصرَّف + الفعل الرئيسي بالمصدر + الفعل المودالي بالمصدر في النهاية. وفي الصيغة القياسية التي يركّز عليها الدرس يكون المساعد haben، حتى مع فعل حركي: Ich habe gehen müssen. أمّا اسم المفعول gemusst/gekonnt فلا يُستعمل إلا حين يقف المودالي وحده بلا فعل رئيسي: Ich habe es nicht gekonnt.\n\nوالتسمية النحوية لهذا الشكل هي Ersatzinfinitiv: المصدر يحلّ محلّ اسم المفعول. ولا يُستبدل إلا الفعل المودالي وحده؛ فالفعل الرئيسي مصدره طبيعي في هذا الموضع (المصدر يأتي بعد المودالي أصلاً)، والمساعد haben هو الوحيد المصرَّف في الكتلة كلها. ومن ثمّ فإنّ جواب سؤال «أين الزمن؟» هو: في haben، لا في ذيل الجملة.\n\nوموضع الكتلة يتغيّر بحسب نوع الجملة، والقاعدة واحدة: المصرَّف يتقدّم. في الجملة الرئيسية يقع haben في المرتبة الثانية (Ich habe arbeiten müssen)، وفي جملة تابعة من هذا النوع يأتي الفاعل بعد الأداة، ثم يسبق الفعل المساعد المصرَّف المصدرين (…, weil ich habe arbeiten müssen)، وفي الحالتين يبقى المصدران متجاورين في الذيل. وهذه إشارة تصحيح سريعة: إن فصلتَ بين المصدرين بشيء فقد خرجت عن البنية.\n\nوالتمييز الأخير بين المودالي ناقصاً ومرافقاً هو مفتاح الموضعين: في «Ich habe es nicht gekonnt» يقف können وحده فيأخذ شكل اسم المفعول، وفي «Ich habe es nicht machen können» يلحق به فعل رئيسي فيعود مصدراً. والقاعدة نفسها تسري على dürfen وmüssen وsollen وwollen وmögen، وتسري كذلك على lassen وsehen وhören — وهي مادة الوحدة التالية.",
      whyAr:
        "المهمّ عملياً حفظ بنية المصدرين: في Perfekt مع مودالي يتبعه فعل، يأتي المودالي في صيغة المصدر بعد مصدر الفعل الرئيسي، ويُصرّف haben. وفي الجملة الرئيسية يقع haben في المرتبة الثانية، أمّا في جملة مثل …, weil ich habe arbeiten müssen فيأتي الفاعل بعد الأداة ثم يسبق المساعد المصرَّف المصدرين.",
      table: {
        title: "المصدر المزدوج مقابل اسم المفعول",
        columns: ["الحالة", "الصيغة", "مثال"],
        rows: [
          { label: "مودالي + فعل رئيسي", cells: ["مصدر + مصدر", "Ich habe arbeiten müssen."] },
          { label: "مودالي وحده", cells: ["اسم مفعول", "Ich habe es nicht gekonnt."] },
          { label: "فعل حركي رئيسي", cells: ["haben في الصيغة القياسية المعروضة", "Er hat gehen müssen."] },
          { label: "في جملة تابعة", cells: ["hat يتقدّم المصدرين", "…, weil er hat arbeiten müssen."] },
          { label: "الماضي البسيط (أشيع)", cells: ["musste + مصدر", "Ich musste arbeiten."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern bis Mitternacht arbeiten müssen.", ar: "اضطررت أمس إلى العمل حتى منتصف الليل." },
        { de: "Wir haben den Termin leider verschieben müssen.", ar: "اضطررنا للأسف إلى تأجيل الموعد." },
        { de: "Sie hat die Prüfung nicht wiederholen müssen.", ar: "لم تضطرّ إلى إعادة الامتحان." },
        { de: "Er hat als Kind nie früh aufstehen dürfen.", ar: "لم يكن مسموحاً له في طفولته أن ينهض باكراً." },
        { de: "Ich habe es einfach nicht gekonnt.", ar: "لم أستطع ذلك ببساطة." },
        { de: "Ich habe ihn gestern nicht anrufen können.", ar: "لم أستطع الاتصال به أمس." },
      ],
      comparisonWithArabic:
        "«اضطررتُ أن أعمل» تقابلها Ich habe arbeiten müssen. العربية تصرّف فعل الاضطرار وتذكر الفعل الثاني منصوباً بـ«أن»، والألمانية تضع الفعلين في صيغة المصدر وتحمل الزمن على haben وحده. ومن يترجم كلمة بكلمة قد يكتب habe gemusst zu arbeiten، وهذه ليست الصيغة المعيارية.",
      eselsbruecke:
        "«مصدران في الذيل، والمودالي آخرهم». وإن لم يكن معك فعل رئيسي فعد إلى اسم المفعول: gekonnt وحدها، müssen مع رفيق.",
      commonMistakes: [
        { wrong: "Ich habe arbeiten gemusst.", right: "Ich habe arbeiten müssen.", whyAr: "مع فعل رئيسي يتحوّل المودالي إلى مصدر لا اسم مفعول: الصيغة «arbeiten gemusst» تفكيرٌ على طريقة اللغات الأخرى، والألمانية تجمع مصدرين وتترك الزمن على haben." },
        { wrong: "Ich bin gehen müssen.", right: "Ich habe gehen müssen.", whyAr: "الصيغة القياسية المستهدفة في هذا الدرس تستعمل haben مع المصدر المزدوج، حتى مع فعل حركي." },
        { wrong: "…, weil ich arbeiten müssen habe.", right: "…, weil ich habe arbeiten müssen.", whyAr: "في الجملة التابعة يتقدّم الفعل المصرَّف على المصدرين: بعد الأداة يأتي الفاعل ثم haben المصرَّف، ويبقى المصدران متجاورين في آخر الجملة." },
      ],
      relatedRuleComparison: {
        title: "Perfekt أم Präteritum مع المودالي؟",
        content:
          "يمكن التعبير عن الماضي بصيغة Präteritum (Ich musste arbeiten) أو Perfekt (Ich habe arbeiten müssen). وغالباً ما تكون صيغة Präteritum أقصر مع الأفعال المودالية، لكن الاختيار يتأثر بالسياق والمنطقة وأسلوب المتكلم؛ وإذا اخترت Perfekt مع مودالي يتبعه مصدر، فالمصدر المزدوج مطلوب في الجملة الرئيسية والتابعة، لا في التابعة وحدها.",
      },
    },
    {
      id: "t3",
      titleAr: "lassen وأفعال الإدراك: sehen، hören",
      titleDe: "lassen, sehen und hören im Perfekt",
      explanationAr:
        "في تراكيب معيّنة تسلك الأفعال lassen وsehen وhören سلوكاً شبيهاً بالمودالي في Perfekt: يأتي معها مصدرٌ آخر (مثل reparieren lassen أو kommen sehen/hören). فتقول Ich habe das Auto reparieren lassen (جعلتُهم يُصلحون السيارة) لا habe reparieren gelassen. ويُستعمل lassen كثيراً عند وصف تكليف شخص آخر بخدمة أو عمل؛ ويظل المعنى الدقيق تابعاً للسياق. أمّا حين يقف lassen وحده بمعنى «يترك» فيعود اسم مفعول عادياً: Ich habe den Schlüssel zu Hause gelassen.\n\nوفي هذه التراكيب لا تعمل الأفعال الثلاثة بالطريقة نفسها في كل استعمال: lassen مع مصدرٍ آخر قد يدل على التكليف أو الإذن، وsehen/hören مع مصدر يعبّران عن إدراك حدث. في Perfekt يأتي المصدران من دون Partizip II لفعل الإطار، ويُصرّف haben. أمّا الاستعمالات الأخرى، مثل lassen المستقل بمعنى ترك شيء في مكان، فلها صيغتها العادية.\n\nوlassen ذاتها تحمل أكثر من معنى، والمعنى هو الذي يحدّد الصيغة: بمعنى التكليف أو الإذن يلحقها فعل آخر (Ich habe das Auto reparieren lassen)، وبمعنى «يترك شيئاً في مكانه» تقف وحدها فيعود اسم المفعول (Ich habe den Schlüssel zu Hause gelassen). والعربية تستعمل «تركتُ» في المعنيين معاً، ومن هنا ينتقل الالتباس إلى الألمانية.\n\nوفي sehen وhören يبقى الشخص المُدرَك في حالة النصب (Ich habe ihn kommen sehen)، والفعل المُدرَك في صيغة المصدر لا اسم المفعول. والجملتان Ich habe ihn kommen sehen وIch sah ihn kommen تصفان إدراكه وهو يأتي؛ اختيار Perfekt أو Präteritum لا يحوّل المعنى وحده إلى «نتيجة مكتملة»، بل يتبع سياق السرد والاستعمال. وأخيراً: المساعد في التراكيب القياسية المعروضة هنا haben، حتى مع الأفعال الحركية؛ لذا نستخدم «Ich habe ihn kommen sehen».",
      whyAr:
        "عندما يتبع هذه الأفعال مصدرٌ آخر، يعبّر lassen عن التكليف أو الإذن، ويعبّر sehen/hören عن إدراك حدث. في هذا البناء يأتي فعل الإطار مصدراً في Perfekt (reparieren lassen، kommen sehen). أمّا عند استعمال الفعل مستقلاً فتأتي صيغته العادية، مثل gelassen أو gesehen أو gehört؛ لذلك لا نعمّم القاعدة على كل استعمال لهذه الأفعال.",
      table: {
        title: "أفعال الإطار في الماضي التام",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "lassen (تكليف)", cells: ["يجعل غيره يفعل", "Ich habe das Auto reparieren lassen."] },
          { label: "lassen (وحده)", cells: ["يترك — اسم مفعول", "Ich habe den Schlüssel zu Hause gelassen."] },
          { label: "sehen", cells: ["يرى حدثاً يقع", "Ich habe ihn kommen sehen."] },
          { label: "hören", cells: ["يسمع حدثاً يقع", "Wir haben sie singen hören."] },
          { label: "المساعد في هذه البنية", cells: ["haben", "Er hat sich die Haare schneiden lassen."] },
        ],
      },
      examples: [
        { de: "Ich habe mein Fahrrad reparieren lassen.", ar: "أعطيت درّاجتي لتُصلَّح." },
        { de: "Sie hat sich die Haare schneiden lassen.", ar: "جعلت شخصاً آخر يقصّ شعرها." },
        { de: "Wir haben ihn nicht kommen sehen.", ar: "لم نره قادماً." },
        { de: "Ich habe die Kinder im Garten spielen hören.", ar: "سمعت الأطفال يلعبون في الحديقة." },
        { de: "Er hat den Mantel im Büro gelassen.", ar: "ترك المعطف في المكتب." },
        { de: "Sie hat ihn den ganzen Abend Klavier spielen hören.", ar: "سمعتْه يعزف البيانو طوال المساء." },
      ],
      comparisonWithArabic:
        "«أصلحتُ السيارة» قد لا يوضّح وحده في العربية إن كان المتكلم نفّذ العمل أم رتّبه. في المثال الألماني Ich habe das Auto repariert يُسند الإصلاح إلى المتكلم، بينما Ich habe das Auto reparieren lassen يصرّح بأنه جعل شخصاً آخر يصلحها؛ ويظلّ السياق مهماً لتحديد التفاصيل العملية. ومن هنا أيضاً التركيب الخدمي الشائع: Ich lasse mir die Haare schneiden «أجعل شخصاً آخر يقصّ شعري» — الفاعل يكلّف والفعل يقع على يد غيره، فتعود الألمانية وتقول ما تقوله العربية عند التوضيح: «عند الحلاق».",
      eselsbruecke:
        "«في تراكيب يتبعها فيها مصدر، تتشبّه lassen وsehen وhören بالمودالية». في Perfekt: reparieren lassen، kommen sehen؛ وإذا استُعمل الفعل مستقلاً فله صيغته العادية.",
      commonMistakes: [
        { wrong: "Ich habe das Auto reparieren gelassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "مع فعل تالٍ يبقى lassen مصدراً: في المثال المستقلّ الذي يعني ترك شيء في مكان نستخدم gelassen، أمّا إذا جاء بعده فعل آخر فهو إطار لا خبر مستقلّ." },
        { wrong: "Ich habe ihn kommen gesehen.", right: "Ich habe ihn kommen sehen.", whyAr: "مصدران فقط: الفعل الرئيسي ثم sehen؛ ولا تُضاف sehen مرّتين ولو بدا الإدراك فعلين — الفعل المُدرَك مصدر، وفعل الإدراك مصدر مثله." },
        { wrong: "Ich habe das Auto repariert lassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "الفعل الأول يجب أن يكون مصدراً (reparieren) لا اسم مفعول: الكتلة المصدرية المزدوجة ترفض شكل اسم المفعول، لأنّ haben المصرَّف يحمل الزمن وحده في الذيل." },
      ],
      relatedRuleComparison: {
        title: "reparieren أم reparieren lassen؟",
        content:
          "في المثال Ich habe die Wohnung renoviert يُسند فعل التجديد إلى المتكلم، بينما Ich habe die Wohnung renovieren lassen يصرّح بأنه رتّب أن ينفّذها شخص آخر. تفاصيل من قام بأي جزء من العمل قد يوضحها السياق.",
      },
    },
  ];

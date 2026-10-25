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
        "حين تكون العلاقة علاقة مِلكية («الكاتب الذي رواياته…») نستعمل الضمير النسبي في حالة المضاف إليه: dessen للمذكّر والمحايد، وderen للمؤنّث والجمع. قاعدتان أساسيتان: (1) الشكل يتبع الاسم السابق (المرجع) لا الاسم التالي؛ (2) الاسم الذي يلي dessen/deren يأتي بلا أداة تعريف إطلاقاً: der Autor, dessen Romane… وليس dessen die Romane. وحالة الاسم التالي داخل الجملة النسبية حرّة تماماً — قد يكون فاعلاً أو مفعولاً.\n\nولماذا لا تكفي der/die/das في هذا الموضع؟ لأنّ الضمير النسبي العادي يحمل حالةً واحدة (فاعل أو مفعول)، والمِلكية حالة ثالثة (Genitiv) لها شكلها المستقل. ومن ثمّ فإن «der Autor, dessen Romane bekannt sind» تساوي في المعنى «die Romane des Autors sind bekannt»، لكنّ الصيغة النسبية أقصر وتُبقي الاسم مرّة واحدة. والجملة النسبية تبقى جملة كاملة: der Autor هو المبتدأ، وdessen Romane bekannt sind هي الموصول، فلا يُستعمل dessen مع اسم مجرّد بلا فعل بعده.\n\nوالعربية تفعل الشيء نفسه بضمير لاصق في آخر المملوك («رواياتُه»)، وبنيّتها تكشف الموضع الذي يخطئ فيه المتعلّم: في الألمانية يختار dessen/deren **مالكاً** لا مملوكاً. فالكاتب رجل ⇒ dessen ولو كان المملوك جمعاً (die Romane)؛ والأمّ امرأة ⇒ deren ولو كان المملوك محايداً (das Auto)؛ والطلاب جماعة ⇒ deren، لأنّ الجمع يأخذ deren كما تأخذه المؤنّثة. والذاكرة الحسّية: dessen مثل des (المذكّر والمحايد)، وderen مثل der (المؤنّث والجمع).\n\nوفي الاستعمال تفصيلان. الأول أنّ dessen/deren يمكن أن تتقدّم عليها صيغةُ حرف جرّ داخل الجملة النسبية (der Mann, mit dessen Bruder ich rede)، فيبقى الشكل على حاله ويتقدّم حرف الجرّ — وهذا ما لا تفعله صيغة von dem في الأسلوب المكتوب. والثاني أنّ «von dem» ليست خطأً نحوياً، لكنها أثقل وأقرب إلى الكلام، ولذلك يفضّل النصّ الرسمي dessen/deren. وأخيراً تُستعمل deren للمفرد المؤنّث وللجمع بلفظ واحد، فالتمييز يقوم على المرجع لا على صيغة الاسم التالي.",
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
          "von dem ممكن نحوياً لكنه ثقيل وغير مستحسن في النصّ المكتوب: der Autor, von dem die Romane bekannt sind. الصيغة المعيارية في النص المكتوب هي dessen. استعمل von + Dativ فقط حين يفرضها الفعل نفسه (träumen von, abhängen von) لا للمِلكية.",
      },
    },
    {
      id: "t2",
      titleAr: "الصيغة المصدرية المزدوجة مع الأفعال المودالية",
      titleDe: "Der doppelte Infinitiv mit Modalverben",
      explanationAr:
        "حين يقترن فعل مودالي بفعل رئيسي في الماضي التام لا نستعمل اسم المفعول (gemusst) بل مصدرين متتاليين: Ich habe arbeiten müssen. الترتيب ثابت: haben المصرَّف + الفعل الرئيسي بالمصدر + الفعل المودالي بالمصدر في النهاية. والمساعد دائماً haben ولو كان الفعل الرئيسي حركياً: Ich habe gehen müssen. أمّا اسم المفعول gemusst/gekonnt فلا يُستعمل إلا حين يقف المودالي وحده بلا فعل رئيسي: Ich habe es nicht gekonnt.\n\nوالتسمية النحوية لهذا الشكل هي Ersatzinfinitiv: المصدر يحلّ محلّ اسم المفعول. ولا يُستبدل إلا الفعل المودالي وحده؛ فالفعل الرئيسي مصدره طبيعي في هذا الموضع (المصدر يأتي بعد المودالي أصلاً)، والمساعد haben هو الوحيد المصرَّف في الكتلة كلها. ومن ثمّ فإنّ جواب سؤال «أين الزمن؟» هو: في haben، لا في ذيل الجملة.\n\nوموضع الكتلة يتغيّر بحسب نوع الجملة، والقاعدة واحدة: المصرَّف يتقدّم. في الجملة الرئيسية يقع haben في المرتبة الثانية (Ich habe arbeiten müssen)، وفي الجملة التابعة يقع بعده مباشرةً بعد الأداة (…, weil ich habe arbeiten müssen)، وفي الحالتين يبقى المصدران متجاورين في الذيل. وهذه إشارة تصحيح سريعة: إن فصلتَ بين المصدرين بشيء فقد خرجت عن البنية.\n\nوالتمييز الأخير بين المودالي ناقصاً ومرافقاً هو مفتاح الموضعين: في «Ich habe es nicht gekonnt» يقف können وحده فيأخذ شكل اسم المفعول، وفي «Ich habe es nicht machen können» يلحق به فعل رئيسي فيعود مصدراً. والقاعدة نفسها تسري على dürfen وmüssen وsollen وwollen وmögen، وتسري كذلك على lassen وsehen وhören — وهي مادة الوحدة التالية.",
      whyAr:
        "لماذا هذا الشذوذ؟ لأنّ المصدر المزدوج يحفظ ترتيباً منطقياً: الفعل الأهمّ (المودالي، حامل المعنى) يُختم به الكلام. وفائدته العملية أنّ هذه التراكيب تتكرر في سرد الماضي، مثل «اضطررت»، «استطعت»، «لم يُسمح لي». والأمر الثالث أنّ الكتلة تحكم موضع الفعل المصرَّف: في الجملة الرئيسية يتقدّم haben على المصدرين، وفي الجملة التابعة يتقدّم المصرَّف بعد الأداة مباشرةً — أي أنّ المصدرين يبقيان متجاورين في الذيل مهما تغيّر نوع الجملة.",
      table: {
        title: "المصدر المزدوج مقابل اسم المفعول",
        columns: ["الحالة", "الصيغة", "مثال"],
        rows: [
          { label: "مودالي + فعل رئيسي", cells: ["مصدر + مصدر", "Ich habe arbeiten müssen."] },
          { label: "مودالي وحده", cells: ["اسم مفعول", "Ich habe es nicht gekonnt."] },
          { label: "فعل حركي رئيسي", cells: ["المساعد يبقى haben", "Er hat gehen müssen."] },
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
        { wrong: "Ich bin gehen müssen.", right: "Ich habe gehen müssen.", whyAr: "المصدر المزدوج يأخذ haben دائماً، ولو كان الفعل الرئيسي حركياً." },
        { wrong: "…, weil ich arbeiten müssen habe.", right: "…, weil ich habe arbeiten müssen.", whyAr: "في الجملة التابعة يتقدّم الفعل المصرَّف على المصدرين: بعد الأداة يأتي الفاعل ثم haben المصرَّف، ويبقى المصدران متجاورين في آخر الجملة." },
      ],
      relatedRuleComparison: {
        title: "Perfekt أم Präteritum مع المودالي؟",
        content:
          "الماضي البسيط أشيع بكثير مع الأفعال المودالية حتى في الكلام: Ich musste arbeiten أخفّ من Ich habe arbeiten müssen. استعمل المصدر المزدوج حين تكون الجملة تابعة (بعد dass أو weil) أو حين يفرضه السياق، ولا تتكلّفه في كل جملة.",
      },
    },
    {
      id: "t3",
      titleAr: "lassen وأفعال الإدراك: sehen، hören",
      titleDe: "lassen, sehen und hören im Perfekt",
      explanationAr:
        "ثلاثة أفعال تسلك سلوك المودالي في الماضي التام: lassen (يدع/يجعل غيره يفعل)، وsehen وhören. فتقول Ich habe das Auto reparieren lassen (جعلتُهم يُصلحون السيارة) لا habe reparieren gelassen. وlassen بمعنى «التكليف» تركيب شائع في الحياة اليومية: كثير من الخدمات التي تطلبها من غيرك يُعبَّر عنها به. أمّا حين يقف lassen وحده بمعنى «يترك» فيعود اسم مفعول عادياً: Ich habe den Schlüssel zu Hause gelassen.\n\nوسبب هذا السلوك أنّ هذه الأفعال الثلاثة «أفعال إطار»: لا تصف حدثاً في ذاتها، بل تُؤطّر حدثاً آخر — تكليفاً به، أو إدراكاً له بالحسّ. والألمانية تعامل الإطار معاملة الأفعال المودالية: الفعل المُكلَّف أو المُدرَك يأتي أولاً في صيغة المصدر، وفعل الإطار يأتي بعده مصدراً أيضاً، وhaben المصرَّف يحمل الزمن وحده.\n\nوlassen ذاتها تحمل أكثر من معنى، والمعنى هو الذي يحدّد الصيغة: بمعنى التكليف أو الإذن يلحقها فعل آخر (Ich habe das Auto reparieren lassen)، وبمعنى «يترك شيئاً في مكانه» تقف وحدها فيعود اسم المفعول (Ich habe den Schlüssel zu Hause gelassen). والعربية تستعمل «تركتُ» في المعنيين معاً، ومن هنا ينتقل الالتباس إلى الألمانية.\n\nوفي sehen وhören يبقى الشخص المُدرَك في حالة النصب (Ich habe ihn kommen sehen)، والفعل المُدرَك في صيغة المصدر لا اسم المفعول. والماضي التام هنا يصف عملية رُئيت وهي تقع، لا نتيجةً رُئيت منتهية؛ ومن أراد النتيجة صاغ الجملة بالماضي البسيط: Ich sah ihn kommen. وأخيراً: المساعد في كل هذه التراكيب haben — حتى مع الأفعال الحركية — فـ«Ich bin kommen sehen» خطأ.",
      whyAr:
        "لماذا تُجمع هذه الأفعال مع المودالية؟ لأنّها كلها «أفعال إطار»: لا تصف حدثاً بذاتها بل تؤطّر حدثاً آخر — الاضطرار إليه، أو تكليف غيرك به، أو إدراكه بالحسّ. والألمانية تعامل الإطار معاملة واحدة: مصدر في الذيل. وميزانه العملي: إن جاء بعد الفعل الثاني فعلٌ آخر في صيغة المصدر فالأول مصدرٌ إلى جانبه؛ وإن وقف الفعل وحده بمعنى تامّ (تركتُ المفتاح، أصلحتُ بنفسي) عاد اسم المفعول العادي.",
      table: {
        title: "أفعال الإطار في الماضي التام",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "lassen (تكليف)", cells: ["يجعل غيره يفعل", "Ich habe das Auto reparieren lassen."] },
          { label: "lassen (وحده)", cells: ["يترك — اسم مفعول", "Ich habe den Schlüssel gelassen."] },
          { label: "sehen", cells: ["يرى حدثاً يقع", "Ich habe ihn kommen sehen."] },
          { label: "hören", cells: ["يسمع حدثاً يقع", "Wir haben sie singen hören."] },
          { label: "المساعد", cells: ["haben دائماً", "Er hat sich die Haare schneiden lassen."] },
        ],
      },
      examples: [
        { de: "Ich habe mein Fahrrad reparieren lassen.", ar: "أعطيت درّاجتي لتُصلَّح." },
        { de: "Sie hat sich die Haare schneiden lassen.", ar: "قصّت شعرها (عند الحلاق)." },
        { de: "Wir haben ihn nicht kommen sehen.", ar: "لم نره قادماً." },
        { de: "Ich habe die Kinder im Garten spielen hören.", ar: "سمعت الأطفال يلعبون في الحديقة." },
        { de: "Er hat den Mantel im Büro gelassen.", ar: "ترك المعطف في المكتب." },
        { de: "Sie hat ihn den ganzen Abend Klavier spielen hören.", ar: "سمعته يعزف البيانو طوال المساء." },
      ],
      comparisonWithArabic:
        "«أصلحتُ السيارة» في العربية غامضة: بيدي أم بيد غيري؟ والألمانية تحسمها: Ich habe das Auto repariert (بنفسي) مقابل Ich habe das Auto reparieren lassen (كلّفت غيري). هذا التمييز مطلوب في الألمانية، وليس له مقابل صرفي واضح في العربية. ومن هنا أيضاً التركيب الخدمي الشائع: Ich lasse mir die Haare schneiden «أقصّ شعري عند الحلاق» — الفاعل يكلّف والفعل يقع على يد غيره، فتعود الألمانية وتقول ما تقوله العربية عند التوضيح: «عند الحلاق».",
      eselsbruecke:
        "«ثلاثة تتشبّه بالمودالية: lassen وsehen وhören». وميزان lassen: إن كان بعده فعل آخر فهو مصدر، وإن وقف وحده فهو gelassen.",
      commonMistakes: [
        { wrong: "Ich habe das Auto reparieren gelassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "مع فعل تالٍ يبقى lassen مصدراً: gelassen محفوظة لحالة «الترك» وحدها، أمّا إذا جاء بعده فعل آخر فهو إطار لا خبر مستقلّ." },
        { wrong: "Ich habe ihn kommen gesehen sehen.", right: "Ich habe ihn kommen sehen.", whyAr: "مصدران فقط: الفعل الرئيسي ثم sehen؛ ولا تُضاف sehen مرّتين ولو بدا الإدراك فعلين — الفعل المُدرَك مصدر، وفعل الإدراك مصدر مثله." },
        { wrong: "Ich habe das Auto repariert lassen.", right: "Ich habe das Auto reparieren lassen.", whyAr: "الفعل الأول يجب أن يكون مصدراً (reparieren) لا اسم مفعول: الكتلة المصدرية المزدوجة ترفض شكل اسم المفعول، لأنّ haben المصرَّف يحمل الزمن وحده في الذيل." },
      ],
      relatedRuleComparison: {
        title: "reparieren أم reparieren lassen؟",
        content:
          "الفرق فرق مسؤولية لا أسلوب: Ich habe die Wohnung renoviert تعني أنّك طليت بيدك، وIch habe die Wohnung renovieren lassen تعني أنّك استأجرت من فعل. في سياق رسمي أو تأميني قد يغيّر هذا الاختيار المعنى المقصود.",
      },
    },
  ];

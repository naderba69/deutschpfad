/**
 * b2-07 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المستقبل التام (Futur II)",
      titleDe: "Das Futur II: werde + Partizip II + haben/sein",
      explanationAr:
        "Futur II = حدث سيكون قد اكتمل في المستقبل: Bis 2030 werde ich Deutsch gelernt haben (بحلول 2030 سأكون قد تعلمت الألمانية). والتركيب ثابت الترتيب: werden في موضع الفعل الثاني، ثم Partizip II قبل haben/sein في نهاية الجملة. ولا يأتي «werden» نفسه في هذه الصيغة بصيغة اسم الفاعل الماضي أبداً، لأن الفعل الوظيفي هو الذي يحمل التصريف وحده.\n\nواختيار المساعد يتبع منطق التام (Perfekt) نفسه: الأفعال التي تنقل مكاناً أو تغيّر حالة تأخذ sein (Er wird gegangen sein · Sie wird eingeschlafen sein)، والأفعال المتعدية والثابتة تأخذ haben (Er wird das Buch gelesen haben). ومن ثمّ لا يحتاج المتعلّم قاعدة جديدة، بل أن يتذكر أن Futur II ليس إلا الزمن التام مُزاحاً إلى المستقبل.\n\nوللفعل الوظيفي هنا وظيفتان مختلفتان يجب فصلهما. الأولى التوقّع المستقبلي المكتمل: حدث ينتهي قبل نقطة زمنية محددة في المستقبل، ويُرافق عادةً بـ bis (Bis morgen wird er angekommen sein). والثانية التخمين عن الماضي: أنت لا ترى الحدث وقد وقع فعلاً، فتُصوّر المتكلم يخمّن («Er wird den Zug verpasst haben» أي لا بدّ أنه فاته القطار). وفي هذه الوظيفة الثانية تكثر معه كلمات الترجيح مثل wohl وsicher، لأن الجملة استنتاج لا خبر محقّق.\n\nوأما حضوره في الواقع فمحدود: الألمانية المنطوقة تفضّل المضارع أو التام مع كلمة ترجيح (Er hat wohl den Zug verpasst) على صيغة Futur II الكاملة، وتتراجع هذه الصيغة في الكلام اليومي حتى تكاد لا تُسمع. أما في التقارير والوثائق والكتابة الأكاديمية فتبقى حاضرة، خاصةً في العناوين التي تقول «Bis 2035 wird sich die Zahl der Rentner verdoppelt haben».\n\n",
      whyAr:
        "لماذا نحتاج زمناً إضافياً؟ لأن التوقّع يفرّق بين «سينتهي» و«سيكون قد انتهى»: الأولى تُلقي الحدث في المستقبل بلا نهاية معروفة، والثانية تحدّد أن الحدث يكتمل قبل نقطة زمنية مذكورة، وهذا الفرق جوهر التقارير والوعود السياسية والعناوين الإخبارية (Bis 2030 wird sich vieles verändert haben). والفائدة الثانية أن الزمن نفسه يصلح للتخمين عن الماضي بلا كلمة ترجيح إضافية: «Er wird geschlafen haben» تقول بذاتها «لا بدّ أنه كان نائماً»، وهذا اختصار لا تجده في زمن آخر. ومن هنا تنشأ ضرورة الإتقان: المتعلّم الذي لا يعرفه يفهم «werden + Partizip II + haben» كجملة مستقبلية غريبة فيقع في خطأ فهم كامل، والذي يعرفه يقرأ عنواناً واحداً فيعرف أن الخبر ترجيح لا يقين.",
      table: {
        title: "Futur II",
        columns: ["النوع", "التركيب", "مثال"],
        rows: [
          { label: "فعل عادي", cells: ["werde + PII + haben", "Ich werde Deutsch gelernt haben."] },
          { label: "حركة", cells: ["werde + PII + sein", "Er wird gegangen sein."] },
          { label: "مع sein", cells: ["werde + gewesen sein", "Sie wird müde gewesen sein."] },
        ],
      },
      examples: [
        { de: "Bis nächste Woche werde ich das Buch gelesen haben.", ar: "بحلول الأسبوع القادم سأكون قد قرأت الكتاب." },
        { de: "Er wird die Prüfung bestanden haben.", ar: "سيكون قد اجتاز الامتحان." },
        { de: "Die Gesellschaft wird sich verändert haben.", ar: "سيكون المجتمع قد تغير." },
        { de: "Wir werden angekommen sein, bevor du rufst.", ar: "سنكون قد وصلنا قبل أن تتصل." },
        { de: "Sie wird es vergessen haben.", ar: "ستكون قد نسيته." },
        { de: "Bis zum Jahr 2040 wird sich die Zahl der Städte stark verändert haben.", ar: "بحلول عام 2040 سيكون عدد المدن قد تغيّر كثيراً." },
      ],
      comparisonWithArabic:
        "«سأكون قد قرأت» = werde gelesen haben — تقابل قريب جداً من «سيكون قد + فعل» في العربية، والمنطق واحد: اكتمال قبل لحظة مرجعية. والفرق أن العربية تعبّر عن الاكتمال المسبق بـ «كان قد» أو «سيكون قد» وترافقها بـ «بحلول/قبل»، وهي نظيرة bis وvor الألمانية. وفي وظيفة التخمين تلتقي اللغتان أيضاً: «لا بدّ أنه فاته القطار» = Er wird den Zug verpasst haben، فـ«لا بدّ» هي المقابل الدلالي لـ wohl مع Futur II. ومن ثمّ لا يحتاج المتعلّم العربي إلى فهم جديد بل إلى حفظ الترتيب الألماني: werden ثانياً، ثم Partizip II، ثم haben/sein في النهاية.",
      eselsbruecke:
        "«سيكون قد = werde + Partizip II + haben/sein» — كل توقع اكتمال في المستقبل. واسأل: هل سيكون الحدث منتهياً وقت الحديث عن المستقبل؟ نعم → Futur II.",
      commonMistakes: [
        { wrong: "Ich werde Deutsch gelernt haben gelernt (تضاعف)", right: "Ich werde Deutsch gelernt haben.", whyAr: "Partizip II يرد مرّة واحدة فقط، ويأتي قبل haben مباشرة: werde + gelernt + haben. وتكراره ناتج عن إضافة المساعد في موضعه الخطأ، أو عن الخلط بين التام (habe gelernt) والمستقبل التام (werde gelernt haben)، وكلاهما يجعل الجملة غير مقبولة مع أنها مفهومة." },
        { wrong: "Er wird gegangen haben (حركة بـ haben)", right: "Er wird gegangen sein.", whyAr: "أفعال الحركة والانتقال إلى حالة تأخذ sein لا haben: wird gegangen sein · wird angekommen sein · wird eingeschlafen sein. والخطأ يقع لأن werden مضارع يشبه bleiben في السمع، فيبدو haben أقرب للأذن العربية؛ والمرجع الصحيح هو الزمن التام نفسه لا صيغة المستقبل." },
        { wrong: "Futur I أم II؟", right: "I = سيفعل. II = سيكون قد فعل", whyAr: "الاثنان يبدآن بـ werden ويفترقان في آخر الجملة: Futur I يضع المصدر (werde lernen = سأتعلم)، وFutur II يضع Partizip II والمساعد (werde gelernt haben = سأكون قد تعلمت). والاكتمال هو الفرق كلّه، ومن أخطأ هنا نقل توقّعاً مكتملاً كوعد مستقبلي بسيط." },
      ],
      relatedRuleComparison: {
        title: "Futur I أم Futur II؟",
        content: "I: Ich werde lernen (سأتعلم — مستقبل). II: Ich werde Deutsch gelernt haben (سأكون قد تعلمت الألمانية — اكتمال في المستقبل). اسأل: هل أتحدث عن الفعل أم اكتماله؟",
      },
    },
    {
      id: "t2",
      titleAr: "الكتابة الجدلية (Erörterung) — الهيكل الأكاديمي",
      titleDe: "Die Erörterung: These, Argumente, Schluss",
      explanationAr:
        "المقال الجدلي (Erörterung) له هيكل ثابت لا يتغيّر: مقدمة تُقدّم الموضوع وتطرح السؤال، ثم جسد يعرض الحجج، ثم خاتمة تُعلن الموقف وتُغلق النقاش. والمقدمة تُبنى في ثلاث حركات: تمهيد عام يربط الموضوع بالواقع (Das Thema ... ist seit Jahren umstritten)، ثم تحديد السؤال المطروح (Die Frage ist, ob ...)، ثم أطروحة أولية (These) تعلن الاتجاه بلا تفصيل.\n\nوأهم تمييز هيكلي أن يكون المقال خطّياً (lineare Erörterung) أو جدلياً (dialektische Erörterung). الخطّي يبني حججاً في اتجاه واحد: يبدأ بالأضعف وينتهي بالأقوى (Sanduhrprinzip)، فيخرج القارئ مقتنعاً بالموقف المدَّعى. أما الجدلي فيوازن بين الجانبين: يُعرض Pro ثم Contra أو العكس، ثم في الخاتمة يفاضل بينهما بحكم صريح. والممتحن يخطئ كثيراً لأنه يبدأ بمقدمة محايدة ثم يقدّم حججاً متراكمة في اتجاه واحد وينتهي بموقف معارض، فتكون الخاتمة معلّقة في الهواء.\n\nوكل حجة في الجسد يجب أن تكون كتلة مكتملة لا مجرّد رأي: Behauptung (الادعاء)، ثم Begründung (التعليل: لماذا؟)، ثم Beispiel أو Beleg (مثال أو دليل ملموس)، ثم Rückbindung (عود إلى السؤال أو إلى الفقرة السابقة). ولذلك تُبنى الفقرة على عادة واحدة بلا تكرار: لأن ... مثال ذلك ... وهذا يعني بالمقابل. وحجة بلا مثال تبقى دعوى شخصية، والخاتمة بلا موقف تُقرأ كتلخيص لا كاستنتاج.\n\nوالتدرّج من الضعيف إلى القويّ هو ما يمنح المقال إيقاعه. في البداية تُعرَض الحجة الأقلّ إلزاماً حتى يُدخل القارئ في الموضوع، ثم ترتفع الحجج ثقلاً حتى تنتهي بالحجة الحاسمة، فيكون الترتيب نفسه حجةً صامتة. أما تقديم الحجة الأقوى في المقدمة فيفقد المقال توتره ويجعل ما بعده تكراراً لا إضافة، وهو أشيع عيوب المقال الجدلي عند المتعلّمين.",
      whyAr:
        "لماذا هيكل واضح؟ لأن المقال الجدلي يعتمد على ترتيب الحجج لا على عددها، والهيكل يعطي القارئ خريطة واضحة لمتابعة الفكرة. وفائدة ثانية عملية: الهيكل الثابت يعني أن الفقرة التي لا تخدم المقدمة ولا الخاتمة تكون زائدة، فيتعلّم الكاتب أن يحذف. أما السبب الثالث فهو المقروئية عند التصحيح: المصحّح يقرأ الوظيفة أولاً ثم يبحث عن الدليل، فإذا وجد حجة بلا مثال أو خاتمة بلا موقف كتب «مقبول» لا «جيد». ولأن المقال يُقاس على هيكل ثابت، يصبح الإتقان مسألة تدريب لا استعداد لغوي.",
      table: {
        title: "هيكل المقال الجدلي",
        columns: ["الجزء", "الوظيفة", "عبارات مفتاحية"],
        rows: [
          { label: "المقدمة", cells: ["عرض الموضوع", "Das Thema ... ist aktuell. Die Frage ist:"] },
          { label: "Pro-حجج", cells: ["مؤيدات", "Einerseits..., andererseits..."] },
          { label: "Contra-حجج", cells: ["معارضات", "Dagegen spricht..., Jedoch..."] },
          { label: "الخاتمة", cells: ["رأي شخصي", "Meiner Meinung nach..., Zusammenfassend..."] },
        ],
      },
      examples: [
        { de: "Das Thema der Digitalisierung ist sehr aktuell.", ar: "موضوع الرقمنة حاضر جداً." },
        { de: "Einerseits spart Technik Zeit, andererseits macht sie abhängig.", ar: "من ناحية توفر التقنية الوقت، ومن ناحية أخرى تجعلنا معتمدين." },
        { de: "Dagegen spricht, dass der Mensch Ruhe braucht.", ar: "ضد ذلك أن الإنسان يحتاج الهدوء." },
        { de: "Meiner Meinung nach ist ein Gleichgewicht wichtig.", ar: "في رأيي التوازن مهم." },
        { de: "Zusammenfassend kann man sagen, dass die Zukunft offen ist.", ar: "ختاماً يمكن القول إن المستقبل مفتوح." },
        { de: "Zum Schluss lässt sich sagen, dass beide Seiten ihre Berechtigung haben.", ar: "ختاماً يمكن القول إن للجانبين مبرّرهما." },
      ],
      comparisonWithArabic:
        "«في رأيي» = Meiner Meinung nach — تقابل قريب. و«من ناحية ... ومن ناحية أخرى» = einerseits ... andererseits، و«يجب أن نأخذ بعين الاعتبار» = Wir sollten berücksichtigen. والفرق الجوهري أن العربية الأكاديمية تميل إلى الازدواج المترادف والحشو الاحتياطي («تجدر الإشارة هنا إلى أنه من المهم أن نلاحظ»)، بينما الألمانية الرسمية تُقدّر الجملة الواحدة بمعنى واحد (Das Argument ist nicht überzeugend). ومن أخطاء المتعلّم العربي الشائعة نقل الحشو العربي إلى الألمانية فيبدو النص تافهاً، ونقل التسلسل «أولاً، ثانياً، ثالثاً» بلا حاجة حقيقية إليه. والعلاج أن يُختار لكل حجة فعل واحد واضح، وأن تحمل أدوات الربط (denn · deshalb · darüber hinaus) وظيفة الانتقال بدل التكرار.",
      eselsbruecke:
        "«مقدمة → Pro → Contra → خاتمة» — احفظ الهيكل كأربع خطوات. وعباراتك الجاهزة: Meiner Meinung nach... / Zusammenfassend...",
      commonMistakes: [
        { wrong: "مقال بلا خاتمة", right: "اختم دائماً بـ Meiner Meinung nach + Zusammenfassend", whyAr: "الخاتمة ليست تكراراً للمقدمة بل موقف: تُفتح بـ Meiner Meinung nach أو Zusammenfassend lässt sich sagen، ثم تُفاضل بين الجانبين أو تُعلن الاتجاه، وتُغلق بسؤال أو أفق (Ausblick). والمقال بلا خاتمة يترك القارئ بلا حكم، وهو أول ما يُخصم عليه في التصحيح." },
        { wrong: "رأي واحد فقط (بلا Contra)", right: "اعرض الجانبين ثم رأيك", whyAr: "الجدلية تقوم على التوازن: يُعرض Pro ثم Contra (أو العكس) بوزن متقارب، والحكم يأتي في الخاتمة لا في المقدمة. ومن قدّم جانباً واحداً بلا ذكر الجانب الآخر كتب مقالاً خطّياً حين طُلب منه جدليّ، وهذا فرق في النوع لا في الطول." },
        { wrong: "عبارات عامية في مقال رسمي", right: "استخدم الروابط الرسمية: außerdem, daraus folgt", whyAr: "السجل الرسمي يرفض العامية: «echt krass» لا تصلح في مقال، ومكانها «besonders problematisch» أو «äußerst fragwürdig». والخطأ ينتج من الكتابة كما يُتكلَّم، ومنه تنتقل أيضاً لحمة الجمل الركيكة (und dann · so was). والعلاج أن تُبنى الجملة على روابط رسمية: außerdem · darüber hinaus · daraus folgt." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Bericht؟",
        content: "Erörterung = جدل (رأي وحجج). Bericht = تقرير (حقائق فقط بلا رأي). الأول «أرى»، والثاني «أبلغ». لكل منهما هيكله الخاص.",
      },
    },
  ];

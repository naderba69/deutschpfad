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
        "يتكوّن Futur II من صيغة مصرّفة من werden + Infinitiv Perfekt: Partizip II + المصدر haben أو sein. مثال: «Bis morgen werde ich das Buch gelesen haben» (بحلول الغد سأكون قد قرأت الكتاب). في الجملة الرئيسية يأتي werden المصرف في الموقع الثاني، ويظهر الجزء غير المصرف من المركب الفعلي في النهاية؛ وقد يختلف ترتيب الكلمات في الجملة التابعة.\n\nيستعمل الزمن زمنياً لعرض حدث متوقع أن يكتمل قبل نقطة مرجعية مستقبلية، وقد تعبّر الصيغة أيضاً عن تخمين يتعلق بحدث ماضٍ أو حاضر. مثلاً «Er wird den Zug verpasst haben» ترجّح أنه فاته القطار؛ ليست تقريراً مؤكداً. وقد يوضح السياق أو ظرف مثل wohl درجة التخمين. ووتعرض IDS Grammis الاستعمالين، وتشير إلى أن الصيغة ليست كثيرة في الحديث اليومي؛ وهذا لا يعني أنها لا تُستعمل، ولا يحدد ترتيباً ثابتاً لشيوع الاستعمالين في كل سياق.\n\nاختيار haben أو sein يتبع اختيار الفعل في Perfekt بحسب الفعل ومعناه وتركيبه: «Er wird das Buch gelesen haben» مقابل «Er wird angekommen sein». كثير من الأفعال اللازمة الدالة على انتقال أو تغيّر حالة تأخذ sein، لكن الحركة وحدها ليست قاعدة آلية لكل فعل؛ راجع صيغة Perfekt للفعل نفسه. وإذا كان werden فعلاً معجمياً بمعنى «يصبح»، يمكن أن يأتي Partizip II «geworden»: «Sie wird Ärztin geworden sein». أما في تركيب Futur II فـwerden المصرف هو الفعل المساعد.\n\nعادةً يبيّن bis أو ظرف زمني نقطة الاكتمال، لكنه ليس شرطاً نحوياً؛ فالسياق قد يحددها. وتفيد المقارنة بين «Ich werde lernen» (سأتعلم) و«Ich werde gelernt haben» (سأكون قد تعلمت) في إبراز الفرق بين فعل مستقبلي وبين النظر إليه بوصفه مكتملاً قبل نقطة مرجعية.",
      whyAr:
        "يفيد Futur II في تمييز حدث يُتوقّع اكتماله قبل وقت مرجعي من حدث نعرضه في المستقبل دون التركيز على اكتماله. وله استعمال آخر هو صياغة تخمين عن الماضي، مثل «Er wird geschlafen haben»؛ والسياق يبيّن أن هذا ترجيح لا معرفة مباشرة. لكن الزمن لا يضمن وحده درجة يقين محددة، وقد يصرّح المتكلم بدرجة الاحتمال بأدوات مثل wohl أو wahrscheinlich.",
      table: {
        title: "Futur II",
        columns: ["النوع", "التركيب", "مثال"],
        rows: [
          { label: "فعل عادي", cells: ["werde + PII + haben", "Ich werde Deutsch gelernt haben."] },
          { label: "حركة", cells: ["werde + PII + sein", "Er wird gegangen sein."] },
          { label: "مع sein", cells: ["werde + gewesen sein", "Sie wird müde gewesen sein."] },
          { label: "werden بمعنى يصبح", cells: ["werde + geworden sein", "Sie wird Ärztin geworden sein."] },
        ],
      },
      examples: [
        { de: "Bis nächste Woche werde ich das Buch gelesen haben.", ar: "بحلول الأسبوع القادم سأكون قد قرأت الكتاب." },
        { de: "Bis zum Ende des Semesters wird er die Prüfung bestanden haben.", ar: "سيكون قد اجتاز الامتحان بحلول نهاية الفصل الدراسي." },
        { de: "Bis 2040 wird sich die Gesellschaft vielleicht verändert haben.", ar: "ربما يكون المجتمع قد تغير بحلول 2040." },
        { de: "Wir werden angekommen sein, bevor du rufst.", ar: "سنكون قد وصلنا قبل أن تتصل." },
        { de: "Sie wird es wohl vergessen haben.", ar: "لعلها نسيته." },
        { de: "Bis 2040 wird sich die Lage vermutlich verändert haben.", ar: "قد تكون الأحوال قد تغيرت بحلول 2040." },
      ],
      comparisonWithArabic:
        "يمكن تقريب «سأكون قد قرأت» من «Ich werde gelesen haben» عند الحديث عن حدث يكتمل قبل وقت مستقبلي، لكن الترجمة تتوقف على السياق. وفي التخمين عن الماضي تقابل «Er wird den Zug verpasst haben» صياغة مثل «لا بد أنه فاته القطار»؛ وwohl قد يضيف معنى الترجيح، لكنه ليس مقابلاً ثابتاً لـ«لا بد». في الألمانية احفظ بنية Infinitiv Perfekt بعد werden، مع مراعاة ترتيب الفعل في نوع الجملة.",
      eselsbruecke:
        "Futur II = werden + Partizip II + haben/sein؛ قد يصف اكتمالاً قبل نقطة مستقبلية، وقد يصوغ تخميناً عن الماضي. اسأل: هل أعرض اكتمالاً مستقبلياً أم أرجّح أمراً سابقاً؟",
      commonMistakes: [
        { wrong: "Ich werde Deutsch gelernt haben gelernt (تضاعف)", right: "Ich werde Deutsch gelernt haben.", whyAr: "Partizip II يرد مرّة واحدة فقط، ويأتي قبل haben مباشرة: werde + gelernt + haben. وتكراره ناتج عن إضافة المساعد في موضعه الخطأ، أو عن الخلط بين التام (habe gelernt) والمستقبل التام (werde gelernt haben)، وكلاهما يجعل الجملة غير مقبولة مع أنها مفهومة." },
        { wrong: "Er wird gegangen haben (حركة بـ haben)", right: "Er wird gegangen sein.", whyAr: "أفعال كثيرة لازمة تدل على انتقال أو تغيّر حالة تأخذ sein في Perfekt، مثل gehen وankommen وeinschlafen. لكن لا يكفي معنى الحركة وحده للحكم على كل فعل؛ تحقق من استعمال الفعل ومعناه المحدد في Perfekt." },
        { wrong: "Futur I أم II؟", right: "I = سأفعل؛ II = سأكون قد فعلت، أو تخمين عن الماضي", whyAr: "الاثنان يبدآن بـ werden ويختلف تركيبهما: Futur I يضع المصدر (werde lernen = سأتعلم)، وFutur II يضع Partizip II والمساعد (werde gelernt haben). قد يدل Futur II على اكتمال قبل نقطة مستقبلية، أو على ترجيح حدث سابق؛ فالاكتمال المستقبلي ليس استعماله الوحيد." },
      ],
      relatedRuleComparison: {
        title: "Futur I أم Futur II؟",
        content: "I: Ich werde lernen (سأتعلم). II: Ich werde Deutsch gelernt haben (سأكون قد تعلمت قبل نقطة مستقبلية)، وقد يأتي Futur II أيضاً للتخمين عن ماضٍ: Er wird schon angekommen sein (لا بد أنه وصل). اسأل عن السياق قبل اختيار المعنى.",
      },
    },
    {
      id: "t2",
      titleAr: "المقال الجدلي (Erörterung): نماذج لتنظيم الحجة",
      titleDe: "Die Erörterung: These, Argumente und Schluss",
      explanationAr:
        "تختلف متطلبات Erörterung باختلاف السؤال والنوع والسياق؛ لذلك لا يوجد مخطط واحد إلزامي لكل مقال. من النماذج التعليمية الشائعة: مقدمة تحدد الموضوع والسؤال، ثم عرض حجة أو حجج مع تعليل وأمثلة مناسبة، ثم خاتمة تجيب عن السؤال أو تلخص الموقف إذا طلبت المهمة ذلك. اقرأ المطلوب قبل اختيار البنية.\n\nقد تطلب المهمة عرض موقف واحد مع دعمه (linear)، أو مناقشة وجهات نظر متعارضة ثم بيان موقف (dialektisch). في النموذج الجدلي يمكن تنظيم الحجج بحسب الجوانب، وقد يختار الكاتب الانتقال من حجة أقل إقناعاً إلى أقوى حجة؛ هذا خيار تنظيمي معروف، لا شرط لازم ولا «مبدأ ممتحن». اتبع صيغة المهمة ومعاييرها المعلنة، ولا تخلط بين النموذج التدريبي وقاعدة عامة لكل كتابة ألمانية.\n\nلتطوير الحجة، جرّب هذا السقالة المفيدة: ادعاء (Behauptung/These)، وتعليل (Begründung) يوضح السبب، ومثال أو دليل إذا كان متاحاً وملائماً، ثم صلة بالسؤال. ليست كل حجة بحاجة إلى النوع نفسه من الدليل، ولا يحوّل المثال الرأي وحده إلى حقيقة. ميّز بين رأيك، ومعلومة موثقة، وافتراض افتراضي؛ وانسب الأقوال إلى أصحابها عند النقل.\n\nتخدم الروابط القارئ إذا وضّحت علاقتها: «einerseits … andererseits» للموازنة، و«dagegen» للاعتراض، و«deshalb» لنتيجة، و«zusammenfassend» للخلاصة. لا تستخدم الرابط لمجرد الزخرفة، ولا تفترض أن عرض الجانبين مطلوب إن كانت المهمة تطلب حجة أحادية. ويمكن أن تختلف الخاتمة: موقف مرجّح، أو خلاصة موزونة، أو جواب مباشر؛ المهم أن تستجيب لما طلبه السؤال.\n\nفي الكتابة الأكاديمية أو الرسمية يُناسب عادةً اختيار ألفاظ دقيقة وتجنب العبارات شديدة المحادثية، لكن مستوى الرسمية يتبع الجمهور والنوع والمهمة. هذه البنية أداة للتخطيط والتدرب وليست معيار تصحيح رسميّاً أو ضماناً لجودة المقال.\n\n",
      whyAr:
        "يساعد التخطيط على رؤية العلاقة بين السؤال والحجة والشرح قبل الكتابة، ويقلل احتمال أن يبتعد النص عن المطلوب. جرّب مخططاً قصيراً ثم راجعه: هل كل فقرة تجيب عن السؤال؟ هل المثال يوضح الفكرة فعلاً؟ وهل الخاتمة تلخص النتيجة المطلوبة؟ يمكن تعديل المخطط بحسب المهمة، ولا يثبت إكماله وحده مستوى لغوياً أو جودة الحجة.",
      table: {
        title: "هيكل المقال الجدلي",
        columns: ["جزء ممكن", "وظيفته", "عبارات ممكنة"],
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
        "يمكن تقريب «في رأيي» بـMeiner Meinung nach، و«من ناحية… ومن ناحية أخرى» بـeinerseits … andererseits. هذه أمثلة ترجمة لا تطابق آلياً؛ اختر الصياغة وفق الحجة والسياق. تختلف أعراف الكتابة بحسب النوع والجمهور في العربية والألمانية، ولا يصح تعميم سمة واحدة على كل كتابة عربية أو ألمانية. عند الصياغة راجع وضوح الفكرة، وصلتها بالسؤال، وحاجة القارئ إلى الرابط أو المثال؛ واحذف التكرار إذا لم يضف معنى.",
      eselsbruecke:
        "«سؤال → حجة/حجج → خاتمة بحسب المطلوب» — مخطط يساعدك على التخطيط، وعدّله وفق المهمة. عبارات ممكنة: Meiner Meinung nach... / Zusammenfassend...",
      commonMistakes: [
        { wrong: "مقال بلا خاتمة", right: "أضف خاتمة إذا طلبتها المهمة، وأجب فيها عن السؤال", whyAr: "كثير من مخططات المقال التدريبي تتضمن خاتمة، لكن شكلها ومقدارها يتبعان المطلوب. في هذا التمرين لخّص موقفك أو أجب عن السؤال؛ لا تُضف رأياً جديداً بلا تعليل." },
        { wrong: "رأي واحد فقط (بلا Contra)", right: "اعرض الجانبين إذا طلبت المهمة مناقشة الرأيين", whyAr: "في المهمة الجدلية التي تطلب المقارنة، اذكر الرأي المقابل وردّ عليه ثم وضّح موقفك. أما إذا طلب السؤال دعم أطروحة واحدة، فلا يلزم إدخال جانب ثانٍ لمجرد اتباع قالب محفوظ." },
        { wrong: "عبارات شديدة المحادثية في المهمة", right: "اختر سجلاً يلائم القارئ ونوع النص", whyAr: "قد لا تلائم عبارة شديدة المحادثية مثل echt krass مقالاً أكاديمياً؛ يمكن أن تكون besonders problematisch أدق في هذا السياق. لكن الاختيار مرتبط بالمقام والمهمة، وليس منعاً مطلقاً لعبارات بعينها. außerdem وdarüber hinaus رابطان ممكنان حين تناسب العلاقة." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Bericht؟",
        content: "Erörterung تناقش سؤالاً وتعرض حجة أو موقفاً بحسب المهمة. أما Bericht فينقل معلومات أو أحداثاً بقصد الإخبار؛ وقد تختلف بنيتهما باختلاف النوع والجمهور، ولا تختزل الفروق في «رأي مقابل حقائق فقط».",
      },
    },
  ];

/**
 * b2-08 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen)",
      titleDe: "Verben mit festen Präpositionen",
      explanationAr:
        "أسّست هذا الباب في b1-09 (teilnehmen an · sich erinnern an · warten auf)، وهنا نواصل إلى الطبقة الأكثر تعقيداً: الأفعال التي يحدد فيها الفعل حرفه وحالته (Akkusativ أو Dativ)، فيصيران جزءاً لا يتجزّأ من معناه. «warten auf» ليست «انتظر» + حرف، بل كلمة واحدة معناها «ينتظر شيئاً»؛ ولذلك لا يصحّ فيها التبديل ولا القياس على فعل آخر.\n\nووجه الصعوبة أن الحرف لا يُترجم: العربية تقول «يهتمّ بـ» و«يحلم بـ» و«يعتني بـ»، فتبدو حروفها متشابهة، بينما الألمانية توزّعها: sich interessieren für · träumen von · sich kümmern um. ومن ثمّ يجب أن تُحفظ الكتلة كاملة (الفعل + الحرف + الحالة) لا الفعل وحده، وأن تُراجع في القاموس بترتيبها لا بمعناها العربي.\n\nوبعض الأفعال تقبل حرفين بمعنيين مختلفين، وهذا هو المكان الذي يتفوّق فيه من أتقن الباب: sich freuen auf تعني انتظاراً بفرح لحدث قادم (Ich freue mich auf den Urlaub)، وsich freuen über تعني فرحاً بحدث وقع (Ich freue mich über das Geschenk). وdenken an تعني تذكّراً شخصياً (Ich denke an dich)، وdenken über تعني رأياً في مسألة (Was denkst du über das Studium?). والفرق دلالي لا نحوي، فلا تُصلحه قاعدة بل قراءة السياق.\n\nثم يأتي الضمير المرتبط بالفعل (Pronominaladverb) ليجعل هذه التراكيب قابلة للسؤال والربط بلا تكرار: worauf? — darauf · woran? — daran · worüber? — darüber. وهذه الصيغة هي ما يقابل «فيمَ؟» بالعربية، وتُستعمل كثيراً في الكتابة الرسمية لأنها تمنع إعادة الاسم مرتين: «Ich habe eine Frage dazu» أفضل من تكرار الأمر في جملتين.\n\nوأخيراً قاعدة الرتبة داخل الجملة: حرف الجر ومتمّمه يبقيان كتلة واحدة في مجال الجملة، وصيغة الأمر لا تغيّر موضعهما (Warte auf mich!). وعند السؤال بـ wo- يبقى الحرف ملتصقاً بجذر الاستفهام (Worauf wartest du?)، ومن أخطأ في هذا الجانب كتب سؤالاً يتصارع فيه الحرف مع رتبة الفعل.",
      whyAr:
        "لماذا «ثابتة»؟ لأن الألمانية لا تسمح بالتبديل ولا بالقياس: «warten für» غير موجودة، و«sich interessieren über» خطأ وإن كان مفهوم المعنى. والحرف جزء من دلالة الفعل نفسه (الفرق بين sich freuen auf وüber فرق في المعنى لا في الأسلوب)، ومن ثمّ لا يستطيع المتعلّم أن يستنتجه من المعنى العربي، بل يحفظه في سياقه. وفائدة الحفظ أعلى من كلفته: من يحفظ الكتل يستعمل الصيغة الواحدة في الكلام والقراءة والكتابة، ويقرأ أخباراً ومقالات بلا أن يعلق في كل جملة عند حرف جر؛ ومن يحفظ الأفعال وحدها يحتاج إلى تخمين الحرف في كل مرة، والتخمين هنا يفشل.",
      table: {
        title: "أهم الأفعال مع حروفها",
        columns: ["الفعل", "حرف الجر", "الحالة", "مثال"],
        rows: [
          { label: "sich interessieren", cells: ["für", "Akk", "Ich interessiere mich für Musik."] },
          { label: "warten", cells: ["auf", "Akk", "Ich warte auf den Bus."] },
          { label: "sich freuen", cells: ["über/auf", "Akk", "Ich freue mich auf den Urlaub."] },
          { label: "denken", cells: ["an", "Akk", "Ich denke an dich."] },
          { label: "träumen", cells: ["von", "Dat", "Ich träume von einer Reise."] },
          { label: "abhängen", cells: ["von", "Dat", "Das hängt von dir ab."] },
          { label: "sich kümmern", cells: ["um", "Akk", "Er kümmert sich um die Kinder."] },
          { label: "diskutieren", cells: ["über", "Akk", "Wir diskutieren über Politik."] },
          { label: "sich beschweren", cells: ["über / bei", "Akk / Dat", "Ich beschwere mich über den Lärm bei der Verwaltung."] },
        ],
      },
      examples: [
        { de: "Ich interessiere mich sehr für andere Kulturen.", ar: "أهتم جداً بالثقافات الأخرى." },
        { de: "Wir freuen uns auf den Besuch.", ar: "نتطلع للزيارة." },
        { de: "Er träumt von einem Studium in Deutschland.", ar: "يحلم بالدراسة في ألمانيا." },
        { de: "Das Verständnis hängt von der Kommunikation ab.", ar: "يعتمد الفهم على التواصل." },
        { de: "Sie kümmert sich um ihre Eltern.", ar: "تعتني بوالديها." },
        { de: "Worüber sprichst du? — Über das Studium.", ar: "عن ماذا تتحدث؟ — عن الدراسة." },
        { de: "Worauf wartest du? — Auf den Bus.", ar: "على ماذا تنتظر؟ — على الحافلة." },
        { de: "Ich muss mich noch um die Anmeldung kümmern.", ar: "ما زلت بحاجة إلى الاعتناء بأمر التسجيل." },
      ],
      comparisonWithArabic:
        "«يهتمّ بـ» = sich interessieren für، و«يحلم بـ» = träumen von، و«يعتني بـ» = sich kümmern um — والعربية تستعمل حرفاً واحداً (بـ) في الشؤون جميعها، بينما الألمانية توزّع الحروف بحسب الفعل. ومن هنا أول خطأ يقع فيه المتعلّم العربي: يقيس على «بـ» فيكتب für أو an حيث يجب von أو um. والفارق الثاني أن العربية تُضمّر الفعل مع حرف واحد («يهتمّ بماذا؟»)، والألمانية تُلزم صيغة Worauf?/Darauf — أي تدمج الحرف في الاستفهام والربط. والخطوة العملية أن تُحفظ الكتل بصيغة السؤال والجواب معاً: Worauf wartest du? — Ich warte darauf، لأن هذه الصيغة هي التي تُثبّت الحرف في الذاكرة.",
      eselsbruecke:
        "«الفعل + حرفه = كلمة واحدة»: فكّر بـ «sich-interessieren-für» كوحدة. وقائمة للمراجعة: für (اهتمام)، auf (انتظار/تطلع)، an (تفكير)، von (حلم/اعتماد)، um (اعتناء)، über (نقاش/فرح).",
      commonMistakes: [
        { wrong: "sich interessieren auf (حرف خاطئ)", right: "sich interessieren für", whyAr: "الفعل يحدد حرفه، ومن أجل هذا الصنف für لا auf: قاس المتعلّم على warten auf المجاور في الجدول فوقع الخطأ. والعلاج أن تُحفظ الكتلة بصيغة السؤال (Wofür interessierst du dich?) لأن السؤال يفرض الحرف فرضاً." },
        { wrong: "warten für den Bus", right: "warten auf den Bus", whyAr: "warten يأخذ auf مع المفعول به في النصب: warten auf den Bus. والخطأ ينتج من أثر حرف الجر في اللغة الأولى أو من قياس خاطئ على für بمعنى «لأجل»؛ والقاعدة تلزم بحفظ الكتلة لا بتجزئتها." },
        { wrong: "träumen für أم von؟", right: "träumen von (يحلم بـ)", whyAr: "träumen يأخذ von + Dativ: träumen von einem Studium. وحرف für لا يرد مع هذا الفعل مطلقاً، ولا يساعد عليه المعنى، لأن «الحلم بـ» في العربية لا يقابل ما يقابله für من «لأجل»." },
      ],
      relatedRuleComparison: {
        title: "sich freuen auf أم über؟",
        content: "auf = تطلع لمستقبل (Ich freue mich auf den Urlaub). über = فرح بحاضر/ماضٍ (Ich freue mich über das Geschenk). الزمن يحدد الحرف في كثير من الحالات!",
      },
    },
    {
      id: "t2",
      titleAr: "الجسيمات التداولية: doch, ja, mal, eben",
      titleDe: "Modalpartikeln: doch, ja, mal, eben",
      explanationAr: "الجسيمات (Modalpartikeln) لا تُترجم حرفياً، لكنها تنقل النبرة وموقف المتكلّم: doch (ردّ توقّع معاكس)، ja (أمر معروف للطرفين)، mal (تخفيف الطلب)، eben (تسليم بأمر واقع)، وdenn في السؤال (فضول). ووظيفتها ليست إخبارية بل علاقية: هي تنظّم العلاقة بين المتكلّم والمستمع، فلا تُضيف معلومة، ولو حُذفت لبقيت الجملة صحيحة تماماً في النحو والمعنى.\n\nوموضعها ثابت: في الجزء الأوسط من الجملة (Mittelfeld) بعد الفعل المصرّف وقبل المعمولات التي تحمل المعلومة الجديدة. «Komm doch mal vorbei!» لا تصلح «Doch komm mal vorbei!» لأن الجسيم اتصل بالفعل فصار أداة ربط لا نبرة؛ و«Was machst du denn?» لا تصلح «Was denn machst du?» لأن denn لا يفصل أداة الاستفهام عن فعلها.\n\nوالجسيم الواحد يبدّل موقف المتكلّم كلّه: «Das ist so» خبر جاف، و«Das ist eben so» تسليم بأن الأمر لا مفرّ منه، و«Das ist ja so» تقول إن المستمع يعرف ذلك، و«Das ist doch so» تقول إنك تعرف خلافه وتصحّحه. ولذلك يقرأ المتعلّم الجملة نفسها بأربع نبرات مختلفة، ويكفي أن يُخطئ في الجسيم لينقل إلى المستمع نبرة اجتماعية لم تكن مقصودة.\n\nويجب الفصل بين الجسيم والظرف: «doch» في «Das ist doch wahr» جسيم نبرة، وفي «Er ist arm, doch glücklich» حرف عطف بمعنى «لكن»؛ و«eben» جسيم تسليم، وصفة بمعنى «مستوٍ» وظرف بمعنى «الآن قريباً». والتمييز هنا وظيفي لا كتابي، ولذلك لا تُحفظ هذه الكلمات في قوائم مفرّدة بل في عبارات جاهزة.\n\nوأخيراً: كثرة الجسيمات لغة منطوقة بالأساس، وتقلّ كلما ارتفع مستوى الرسمية، ولا يبقى منها شيء في العقود والقوانين. ومن ثمّ فإن استعمالها في المحادثة يعطي طلاقة، واستعمالها في التقرير يُنزل السجل. والحدّ الأنسب جسيم واحد في الجملة، واثنان في الاقتباس القصير على الأكثر؛ فالفرق بين الطبيعي والمتكلّف جسيم واحد زائد.",
      whyAr: "لماذا؟ لأن هذه الجسيمات هي ما يفرّق بين الألمانية المتعلَّمة والألمانية الطبيعية: الجملة بلا جسيم تُفهم، لكنها تُفهم كما يُفهم نص مترجم، فيلاحظ المستمع المسافة فوراً. وهي أيضاً مفتاح للاستماع: من يسمع «doch» في جملة يفهم أن المتكلّم يعارض توقّعاً سابقاً («Du kommst nicht? Doch, ich komme»)، فيربح معلومة دلالية لا توجد في أي فعل. وبالمقابل، من لا يفرّق بين الجسيم والظرف يقرأ «doch» بمعنى «لكن» في كل موضع، فيقلب موقف الجملة رأساً على عقب.",
      table: {
        title: "الجسيمات التداولية ووظائفها",
        columns: ["الجسيم", "الوظيفة", "مثال", "بالعربية"],
        rows: [
          { label: "ja", cells: ["أمر معروف للطرفين", "Das ist ja bekannt.", "هذا معروف كما تعلم."] },
          { label: "doch", cells: ["ردّ توقّع معاكس", "Komm doch mit!", "هيا تعال معنا!"] },
          { label: "mal", cells: ["تخفيف الطلب", "Warte mal kurz.", "انتظر قليلاً."] },
          { label: "eben", cells: ["تسليم بأمر واقع", "Das ist eben so.", "الأمر هكذا ببساطة."] },
          { label: "denn", cells: ["فضول أو اهتمام بالسؤال", "Was machst du denn?", "ماذا تفعل إذن؟"] },
        ],
      },
      examples: [
        { de: "Komm doch mal vorbei!", ar: "تعال قليلاً! (ودّي)" }, { de: "Das ist eben so.", ar: "الأمر ببساطة هكذا." }, { de: "Das war ja klar!", ar: "كان هذا واضحاً بالطبع!" }, { de: "Ruf mich doch morgen an.", ar: "اتصل بي غداً إذن." }, { de: "Wo bist du denn gewesen?", ar: "أين كنت إذن؟" }
,
        { de: "Nimm dir doch eben mal fünf Minuten Zeit.", ar: "خُذ لنفسك خمس دقائق فقط (تخفيف وطلب ودّي)." },
      ],
      comparisonWithArabic: "العربية تملك نظيراً وظيفياً واضحاً: «يا أخي»، «إذن»، «بالله عليك»، «ببساطة». فهذه كلمات لا تُضيف خبراً جديداً بل تنقل العلاقة والنبرة، تماماً كما تفعل doch وja وeben. والفرق التركيبي أن العربية تضعها في مواضع كثيرة (في الأول أو الوسط) بينما الألمانية تُلزم الجزء الأوسط بعد الفعل، وأن العربية تقبل تكديسها («يا أخي بالله عليك ببساطة») بينما الألمانية ترفض التكديس. ومن ثمّ يجوز للمتعلّم أن يستعين بالحسّ العربي ليفهم «لماذا يوجد جسيم أصلاً»، لكنه لا يجوز أن ينقل مواضعه ولا تعدّده.",
      eselsbruecke: "الجسيم لا يُترجم بل يُحسّ. يقع غالباً في الجزء الأوسط من الجملة، قريباً من الفعل أو الفاعل. وإن حذفته بقيت الجملة صحيحة نحوياً لكنها تفقد دفأها وتبدو جافة كأنها من كتاب.",
      commonMistakes: [
        { wrong: "Doch komm mit!", right: "Komm doch mit!", whyAr: "الجسيم لا يتصدّر الجملة، بل يقع في الجزء الأوسط بعد الفعل المصرّف: «Komm doch mit!». ووضع «doch» في الأول يقلبه إلى أداة ربط بمعنى «لكن»، فتتحول جملة الطلب الودّي إلى مواجهة." },
        { wrong: "Was denn machst du?", right: "Was machst du denn?", whyAr: "في السؤال يقع الجسيم بعد الفعل أو بعد الفاعل، ولا يفصل أداة الاستفهام عن فعلها: «Was machst du denn?». والخطأ ينشأ من نيّة إبراز الفضول في الموضع الأول، وهو موضع الفعل لا موضع النبرة." },
        { wrong: "Das ist ja doch mal eben so.", right: "Das ist eben so.", whyAr: "لا تُكدَّس الجسيمات: واحد كافٍ، واثنان في الاقتباس القصير على الأكثر. وتكديسها يُنتج لغة متكلّفة تفقد المصداقية، لأن كل جسيم يضيف نبرة اجتماعية، وتراكمها نبرات متضاربة في جملة واحدة." },
      ],
      relatedRuleComparison: {
        title: "doch جسيماً أم جواباً؟",
        content: "doch لها استعمالان: جسيم تداولي داخل الجملة (Komm doch mit)، وجواب مستقل يردّ نفياً سابقاً: Kommst du nicht? — Doch! أي بل سآتي. الاستعمال الثاني لا نظير له في العربية بكلمة واحدة.",
      },
    },
  ];

/**
 * a1-08 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a1-08.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الملابس والألوان + الصفات الخبرية",
      titleDe: "Kleidung, Farben und prädikative Adjektive",
      explanationAr:
        "احفظ اسم قطعة الملابس مع أداته:\n• مذكّر: **der** Pullover · **der** Mantel · **der** Rock · **der** Schuh\n• مؤنّث: **die** Hose · **die** Jacke · **die** Mütze · **die** Bluse · **die** Socke\n• محايد: **das** Hemd · **das** Kleid · **das** T-Shirt\nجنس الاسم خاصية معجمية؛ لا توجد حيلة واحدة مضمونة تستنتجه من شكل القطعة.\n\n**انتبه إلى المفرد والجمع:** المفرد **der Schuh** وجمعه **die Schuhe**؛ والمفرد **die Socke** وجمعها **die Socken**. أمّا **die Jeans** فتُستعمل للمفرد وللجمع بالصورة نفسها، ويبيّن السياق العدد. وللإشارة إلى زوج من الأحذية نقول **ein Paar Schuhe**.\n\n**ألوان في صيغتها الوصفية:** rot · blau · grün · gelb · schwarz · weiß · braun · grau · orange · rosa · lila. تُكتب الصفة بحرف صغير حين تصف اسماً: **Die Jacke ist rot.** وإذا استُعمل اسم اللون اسماً مستقلاً كُتب بحرف كبير: **Rot ist meine Lieblingsfarbe.**\n\n**الصفة الخبرية بعد sein:** في **Das Hemd ist rot** و**Die Schuhe sind rot** تبقى الصفة في صورتها الأساسية؛ الذي يتغير هنا هو فعل sein مع الفاعل: **ist/sind**. لا تأخذ الصفة في هذا الموقع نهايةً لمطابقة الاسم.\n\nنركّز في هذا الدرس على جمل وصفية من نوع **Das Kleid ist rosa/orange/lila**. لا نعمّم منها قاعدة على الصفة قبل الاسم؛ فالصفة النعتية تتأثر بالحالة والجنس والعدد ونوع الأداة، وهذا نطاق مؤجل إلى كتلة لاحقة. وألوان مثل rosa وlila وorange لها استعمالات كتابية مختلفة قبل الاسم؛ لذلك لا نقرر لها قاعدة استثنائية عامة هنا.",
      whyAr:
        "اختيرت الصفة الخبرية لتكوين جمل وصفية قصيرة من دون تقديم جدول نهايات الصفة قبل الاسم؛ هذا تحديدٌ لنطاق الدرس، لا ادعاءٌ بأن الوصف يقتصر على هذه الصيغة أو أن النهايات تخص مستوى امتحان بعينه.\n\nاخترنا الملابس لأنها سياق مناسب لمفردات القطع والألوان والمقاسات. ويتضمن نموذج Goethe الرسمي لـA1 موضوع **Einkaufen** في مهمة شفهية لطلب المعلومات، ومن بطاقاته مثال عن **Schuhe**؛ وهذا يبرر التدريب على السياق، لكنه لا يعني أن كل امتحان يطرح الموضوع أو هذه الأفعال بعينها.\n\nتُراجع أداة الاسم بوصفها جزءاً من المفردة. لا نعتمد على ربط جنس الاسم بشكل القطعة أو طول الكلمة؛ احفظ مثلاً **der Schuh** و**das Hemd** كما هما.",
      table: {
        title: "الملابس والألوان",
        columns: ["القطعة", "العربية", "لون", "العربية"],
        rows: [
          { label: "das Hemd", cells: ["القميص", "rot", "أحمر"] },
          { label: "die Hose", cells: ["البنطال", "blau", "أزرق"] },
          { label: "die Jacke", cells: ["السترة", "grün", "أخضر"] },
          { label: "das Kleid", cells: ["الفستان", "gelb", "أصفر"] },
          { label: "der Pullover", cells: ["الكنزة", "schwarz", "أسود"] },
          { label: "die Schuhe (جمع)", cells: ["الأحذية", "weiß", "أبيض"] },
          { label: "die Socken", cells: ["الجوارب", "braun", "بني"] },
          { label: "die Mütze", cells: ["القبعة", "grau", "رمادي"] },
        ],
      },
      examples: [
        { de: "Das Hemd ist rot.", ar: "القميص أحمر." },
        { de: "Meine Jacke ist blau.", ar: "سترتي زرقاء." },
        { de: "Die Schuhe sind schwarz.", ar: "الأحذية سوداء. (فاعل جمع ⇐ sind)" },
        { de: "Das Kleid ist sehr schön.", ar: "الفستان جميل جداً." },
        { de: "Der Pullover ist warm.", ar: "الكنزة دافئة." },
        {
          de: "Die Schuhe sind schwarz und die Socken sind weiß.",
          ar: "الأحذية سوداء والجوارب بيضاء. (الصفتان بعد sein بلا نهاية)",
        },
        {
          de: "Meine Mütze ist grau, nicht braun.",
          ar: "قبّعتي رمادية لا بنّية.",
        },
        {
          de: "Ist die Bluse rosa? — Ja, sie ist rosa.",
          ar: "هل البلوزة زهرية؟ — نعم، هي زهرية. (rosa لا تتغيّر)",
        },
      ],
      comparisonWithArabic:
        "في العربية نقول «القميص أحمر» وقد لا نذكر فعلاً رابطاً في المضارع؛ كما تتبدل الصفة بحسب جنس الاسم: **القميص أحمر، السترة حمراء**. أمّا الألمانية فتضع **sein** في الجملة الخبرية: **Das Hemd ist rot. Die Jacke ist rot.** وتبقى الصفة الخبرية بلا نهاية في المثالين.\n\nإذن لا تنقل نهاية التأنيث العربية إلى الصفة الألمانية بعد **sein**: **Die Jacke ist rot** لا **Die Jacke ist rote**. كذلك يتغير الفعل مع الفاعل: **Die Schuhe sind schwarz**. لا تُسقط رابط **ist/sind** من الجملة الألمانية.",
      eselsbruecke:
        "**بعد sein تبقى الصفة الخبرية في صورتها الأساسية:** Das Hemd ist rot · Die Schuhe sind rot. واحفظ أداة كل اسم معه: der Schuh، die Socke، das Hemd.",
      commonMistakes: [
        {
          wrong: "Das Hemd rot.",
          right: "Das Hemd ist rot.",
          whyAr:
            "في هذه الجملة الخبرية الكاملة نحتاج صيغة الفعل sein مع الفاعل؛ لذلك نقول ist مع das Hemd: Das Hemd ist rot.",
          classification: "error",
        },
        {
          wrong: "Die Schuhe ist neu.",
          right: "Die Schuhe sind neu.",
          whyAr:
            "في الجملة die Schuhe جمع der Schuh، لذا يطابقه الفعل الجمع sind. للمفرد نقول der Schuh ist neu.",
          classification: "error",
        },
        {
          wrong: "Die Jacke ist rote.",
          right: "Die Jacke ist rot.",
          whyAr:
            "بعد sein تأتي الصفة الخبرية بلا نهاية: Die Jacke ist rot. لا نضيف نهاية التأنيث إلى الصفة في هذا التركيب.",
          classification: "error",
        },
        {
          wrong: "Die Bluse ist rosane.",
          right: "Die Bluse ist rosa.",
          whyAr:
            "في هذا المثال جاءت الصفة بعد sein، فتُستعمل في صورتها الأساسية: rosa. أمّا الصيغ قبل الاسم فلها استعمالات مختلفة ولا تُحسم بقاعدة واحدة لجميع الألوان.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "الصفة الخبرية أم النعتية؟",
        content:
          "في هذا الدرس نستعمل الصفة خبرية بعد sein: Das Hemd ist rot. أمّا إذا سبقت الصفة الاسم فتدخل في نظام تصريف يتأثر بالحالة والجنس والعدد ونوع الأداة؛ هذا النظام الكامل خارج نطاق هذه الكتلة. استخدم الجمل الخبرية في التدريبات ولا تخلط بين الموقعين.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل tragen + السؤال عن الرأي (Wie findest du...?)",
      titleDe: "Das Verb „tragen“ und „Wie findest du...?“",
      explanationAr:
        "**أولاً: tragen.** معناه «يرتدي» أو «يحمل» بحسب المفعول والسياق. في المضارع يتغير حرف الجذر في صيغتي **du** و**er/sie/es**: **ich trage · du trägst · er/sie/es trägt · wir tragen · ihr tragt · sie/Sie tragen**. احفظ هاتين الصيغتين مع الفعل؛ فليست كل الأفعال التي فيها a تتبع هذا النمط. تشبهه في هذا التصريف أفعال مثل **fahren: du fährst** و**schlafen: du schläfst**.\n\n**ثانياً: السؤال عن الرأي بـfinden.** في هذا السياق تعني **finden** «ما رأيك في/أجد»، لا «أعثر على»: **Wie findest du meine Jacke? — Ich finde sie schön.** يأتي الشيء مفعولاً به، ويمكن أن تليه صفة تصف رأيك: **Ich finde das Kleid schön.** صيغ الفعل هنا: **ich finde · du findest · er/sie/es findet**.\n\n**ثالثاً: doch مع السؤال المنفي.** إذا كان السؤال يحتوي على نفي وأردت أن ترفض النفي وتجيب بالإيجاب، فاستعمل **doch**: **Gefällt dir die Jacke nicht? — Doch, sie gefällt mir.** أما **Nein** فيقدّم جواباً سلبياً يؤكد النفي: **Nein, sie gefällt mir nicht.** هذا وصف لجواب هذا النوع من الأسئلة، لا قاعدة عن كل استعمالات الكلمة.\n\nللمقارنة مع العربية، يمكن تذكّر **بلى** مع **doch** في هذا المثال تحديداً، لكن لا تترجم الكلمتين آلياً في كل سياق.",
      whyAr:
        "يُحفظ تصريف **tragen** في المفرد الثاني والثالث، حيث تظهر **ä**: **trägst/trägt**؛ أما **wir tragen** و**ihr tragt** فبلا Umlaut. لا نستنتج التغيير من حرف a وحده في كل الأفعال.\n\nتُقدَّم **finden** هنا في سؤال رأي مع أمثلة قصيرة: **Wie findest du …?** و**Ich finde … schön**. ويدرب سؤال منفي واحد على فرق عملي: في السياق المحدد **doch** يرفض النفي، و**nein** يوافقه. اخترنا حواراً تسوقياً للتدريب، ولا ندّعي أن **doch** بندٌ مضمون في اختبار Goethe A1.",
      table: {
        title: "تصريف tragen",
        columns: ["الضمير", "trage/trägst/trägt", "مثال"],
        rows: [
          { label: "ich", cells: ["trage", "Ich trage ein Hemd."] },
          { label: "du", cells: ["trägst", "Was trägst du?"] },
          { label: "er/sie/es", cells: ["trägt", "Sie trägt ein Kleid."] },
          { label: "wir", cells: ["tragen", "Wir tragen Jacken."] },
          { label: "ihr", cells: ["tragt", "Was tragt ihr?"] },
          { label: "sie/Sie", cells: ["tragen", "Sie tragen Schuhe."] },
        ],
      },
      examples: [
        { de: "Ich trage heute ein Hemd.", ar: "أرتدي اليوم قميصاً." },
        { de: "Wie findest du meine Jacke?", ar: "ما رأيك في سترتي؟" },
        {
          de: "Ich finde das Kleid sehr schön.",
          ar: "أجد الفستان جميلاً جداً.",
        },
        {
          de: "Was trägst du morgen? — Ich trage einen Mantel.",
          ar: "ماذا سترتدي غداً؟ — سأرتدي معطفاً. (du ⇐ trägst)",
        },
        {
          de: "Wir tragen alle Jeans.",
          ar: "كلّنا نرتدي جينزاً. (جمع ⇐ tragen بلا تغيير في الجذر)",
        },
        {
          de: "Wie findest du diese Schuhe? — Ich finde sie zu teuer.",
          ar: "ما رأيك في هذه الأحذية؟ — أجدها غالية جداً.",
        },
        {
          de: "Gefällt dir die Mütze nicht? — Doch, sie ist super!",
          ar: "ألا تعجبك القبّعة؟ — بلى، إنّها رائعة! (سؤال منفيّ ⇐ doch)",
        },
        {
          de: "Trägst du keine Brille? — Doch, ich trage eine Brille.",
          ar: "ألا ترتدي نظّارة؟ — بلى، أرتدي نظّارة.",
        },
      ],
      comparisonWithArabic:
        "**١. السؤال عن الرأي:** العربية تقول «ما رأيك في السترة؟»، وفي هذا الموقف الألمانية تستعمل الصيغة **Wie findest du …?**. تعلّم القالب الألماني مع مفعوله بدلاً من نقل ترتيب العربية حرفياً.\n\n**٢. تصريف tragen:** احفظ الصيغ الألمانية كما هي؛ لا تفترض أن تغيّر الجذر أو ثباته في العربية والألمانية يتطابق.\n\n**٣. doch:** في جواب السؤال المنفي، **بلى** تذكير عربي مفيد لـ**doch** عندما يكون الرد إيجابياً ومخالفاً للنفي. هذه مقابلة وظيفية في هذا السياق فقط، لا ترجمة ثابتة للكلمة في جميع استعمالاتها.",
      eselsbruecke:
        "**trägst / trägt**: راقب النقطتين فوق ä في صيغتي المخاطب والغائب المفرد؛ وتذكّر أن **wir tragen / ihr tragt** بلا Umlaut.\n**doch**: سؤال منفي + رد إيجابي يناقض النفي ← **Doch, …**؛ تأكيد النفي ← **Nein, …**. أضف الجملة بعد كلمة الجواب لتوضيح المقصود.",
      commonMistakes: [
        {
          wrong: "Du tragst ein Hemd.",
          right: "Du trägst ein Hemd.",
          whyAr:
            "في تصريف هذا الفعل نقول du trägst وer/sie/es trägt؛ لا ننقل صيغة ich trage إلى du.",
          classification: "error",
        },
        {
          wrong: "Wir trägen Jacken.",
          right: "Wir tragen Jacken.",
          whyAr:
            "في صيغ الجمع الواردة هنا لا يظهر Umlaut: wir/sie tragen وihr tragt.",
          classification: "error",
        },
        {
          wrong: "Wie finden du das Kleid?",
          right: "Wie findest du das Kleid?",
          whyAr:
            "مع الفاعل du نقول findest؛ ومع er/sie/es نقول findet، لأن صيغة الفعل تتغير مع الضمير.",
          classification: "error",
        },
        {
          wrong: "Gefällt dir das Hemd nicht? — Ja, es gefällt mir.",
          right: "Gefällt dir das Hemd nicht? — Doch, es gefällt mir.",
          whyAr:
            "المقصود هنا تأكيد أن القميص يعجب المتكلم، أي رفض النفي في السؤال؛ لذلك تكون صيغة الرد الواضحة Doch. وقد تُفهم ja على أنها موافقة على النفي، فلا نعرضها هنا جواباً مكافئاً.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "tragen أم anziehen؟",
        content:
          "**tragen** يصف ارتداء الشيء أو حمله: **Ich trage einen Mantel.** أما **anziehen** فيعني وضع قطعة الملابس/ارتداءها بوصفه فعلاً: **Ich ziehe den Mantel an.** وهو فعل ذو بادئة منفصلة: **Ich ziehe … an.** يختلف اختيار الفعل بحسب ما تريد قوله؛ ليسا بديلين متطابقين في كل سياق.",
      },
    },
    {
      id: "t3",
      titleAr: "أيّ قميص؟ هذا القميص — dieser وwelcher",
      titleDe: "Welcher Pullover? Dieser Pullover!",
      explanationAr:
        "في متجر الملابس نحتاج إلى السؤال «أيّ؟» والإشارة إلى قطعة. نستعمل **welcher-/welche-/welches-** للسؤال، و**dieser/diese/dieses** للإشارة. في أمثلة الرفع:\n**der Pullover → welcher Pullover? → dieser Pullover**\n**die Hose → welche Hose? → diese Hose**\n**das Hemd → welches Hemd? → dieses Hemd**\n**die Schuhe (جمع) → welche Schuhe? → diese Schuhe**\n\nمع مفعول مذكر في النصب نقول **diesen Mantel** و**welchen Mantel**: **Ich nehme diesen Mantel. Welchen Mantel möchten Sie?** في الأمثلة المؤنثة والمحايدة والجمع الواردة هنا تبقى هذه الصيغ كما هي بين الرفع والنصب: **diese Hose / dieses Hemd / diese Schuhe**.\n\nويمكن استعمال **dieses** وحدها إذا كان الاسم مفهوماً: **Welches Hemd möchten Sie? — Dieses, bitte.** أما **dieser-** فيشير إلى شيء في السياق؛ و**der/die/das** أداة تعريف في هذه التراكيب، ويتوقف معنى الإشارة أيضاً على التركيب والنبر. لا نعمّم هنا على جميع الحالات الإعرابية؛ نتدرّب على أمثلة الرفع والنصب الواردة فقط.",
      whyAr:
        "هذه الصيغ نافعة في سؤال اختيار قطعة أو الإشارة إليها في حوار تمثيلي. ويعرض نموذج Goethe A1 الرسمي موضوع التسوق مثالاً في مهمة السؤال عن المعلومات، لكنه لا يفرض هذه الكلمات أو القاعدة بعينها في كل امتحان.\n\nابدأ بالأشكال الظاهرة في الجدول: أداة الاسم تساعد على تذكّر welcher/dieser، ثم لاحظ صيغة النصب المذكر **welchen/diesen**. لا نقول إن كل الحالات متطابقة؛ لهذا حُدّدت أمثلة الدرس بالرفع والنصب.",
      table: {
        title: "صيغ مختارة للسؤال والإشارة",
        columns: ["الأداة", "welch- (أيّ؟)", "dies- (هذا)"],
        rows: [
          {
            label: "der Pullover",
            cells: ["welcher Pullover?", "dieser Pullover"],
          },
          { label: "die Hose", cells: ["welche Hose?", "diese Hose"] },
          { label: "das Hemd", cells: ["welches Hemd?", "dieses Hemd"] },
          {
            label: "die Schuhe (ج)",
            cells: ["welche Schuhe?", "diese Schuhe"],
          },
          {
            label: "مع Akkusativ المذكّر",
            cells: ["welchen Mantel?", "diesen Mantel"],
          },
        ],
      },
      examples: [
        { de: "Welcher Pullover gefällt dir?", ar: "أيّ كنزة تعجبك؟" },
        { de: "Dieses Hemd ist zu klein.", ar: "هذا القميص صغير جداً." },
        { de: "Welche Größe haben Sie?", ar: "ما مقاسك؟" },
        {
          de: "Ich nehme diesen Mantel.",
          ar: "آخذ هذا المعطف. (مفعول به مذكّر ⇐ -en)",
        },
        { de: "Diese Schuhe sind sehr bequem.", ar: "هذه الأحذية مريحة جداً." },
        {
          de: "Welches Hemd möchten Sie? — Dieses, bitte.",
          ar: "أيّ قميص تريد؟ — هذا، من فضلك. (بلا اسم)",
        },
        {
          de: "Welche Jacke nimmst du? — Diese Jacke.",
          ar: "أيّ سترة ستأخذ؟ — هذه السترة.",
        },
      ],
      comparisonWithArabic:
        "للعربية والألمانية صيغ إشارة تتأثر بالجنس والعدد، لكن لا تتطابق أجزاؤها كلمةً بكلمة. في الألمانية تتغير صيغة **dieser-** و**welcher-** أيضاً مع الحالة في بعض المواضع: **dieser Mantel** في الرفع، و**diesen Mantel** مفعولاً به. تعلّم الاسم مع أداته والصيغة في المثال، ولا تفترض أن هذا/هذه العربية يقابل دائماً نهاية ألمانية واحدة.",
      eselsbruecke:
        "لأمثلة هذا الدرس: **der → dieser/welcher** · **die → diese/welche** · **das → dieses/welches** · **الجمع → diese/welche**. وإذا كان المفعول مذكراً في النصب: **diesen/welchen**.",
      commonMistakes: [
        {
          wrong: "Welche Pullover möchten Sie?",
          right: "Welchen Pullover möchten Sie?",
          whyAr:
            "Pullover مفعول به بعد möchten في هذا السؤال، وهو مذكر؛ صيغة النصب هنا welchen.",
          classification: "error",
        },
        {
          wrong: "Dieses Hose ist schön.",
          right: "Diese Hose ist schön.",
          whyAr:
            "Hose مؤنث؛ لذلك نقول في الرفع diese Hose لا dieses Hose، فصيغة الإشارة توافق جنس الاسم.",
          classification: "error",
        },
        {
          wrong: "Ich nehme dieser Mantel.",
          right: "Ich nehme diesen Mantel.",
          whyAr:
            "Mantel مفعول به مذكر في النصب بعد nehmen؛ الصيغة هنا diesen.",
          classification: "error",
        },
        {
          wrong: "Welche ist dein Größe?",
          right: "Welche Größe haben Sie?",
          whyAr:
            "في التعبير المقصود تأتي welche قبل الاسم المؤنث Größe، وتُصاغ الجملة بالسؤال الشائع Welche Größe haben Sie?.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "عائلة تكبر لاحقاً",
        content:
          "هنا نراجع صيغ الرفع والنصب المختارة من **welcher-** و**dieser-**. تظهر الصيغ في حالات أخرى أيضاً، لكن هذا الدرس لا يشرح تصريفهما كاملاً.",
      },
    },
    {
      id: "t4",
      titleAr: "يعجبني هذا! — أفعال الدّاتيف gefallen وpassen وstehen",
      titleDe: "Das gefällt mir: Dativ-Verben beim Einkaufen",
      explanationAr:
        "**النمط الذي ندرّب عليه:** الشيء هو الفاعل النحوي، والشخص يأتي في الداتيف مع الأفعال الثلاثة في هذه المعاني:\n• **Das Hemd gefällt mir.** — القميص يعجبني.\n• **Die Hose passt mir.** — البنطال يناسبني من حيث المقاس.\n• **Das Kleid steht dir gut.** — الفستان يليق بك.\n\nفي هذه الأمثلة نقول **mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen** للشخص. احفظ الفعل مع البنية والضمير في الجملة؛ وليس معنى ذلك أن الداتيف له مقابل واحد في كل استعمالات الألمانية.\n\nمع **gefallen** يطابق الفعل الفاعل: **Der Pullover gefällt mir** (مفرد)، و**Die Schuhe gefallen mir** (جمع). الضمير **mir** لا يغيّر تصريف الفعل.\n\nللتفريق في سياق الملابس: **gefallen** يعبّر عن الإعجاب أو الانطباع؛ **passen** قد يصف ملاءمة المقاس للشخص (**Die Hose passt mir**)؛ و**stehen** يصف كيف تبدو قطعة أو لون على شخص (**Blau steht dir gut**). ولـ**passen** استعمال آخر مع **zu** بمعنى الانسجام مع شيء: **Die Farbe passt zur Hose**. هذه فروق مفيدة في الأمثلة، لا تقسيم حصري لكل استعمالات الأفعال.\n\nيمكن تقديم الداتيف في أول الجملة: **Mir gefällt der Pullover.** يبقى الفعل **gefällt** موافقاً للفاعل **der Pullover**، لا للضمير **mir**. كما يمكن قول **Wie gefällt Ihnen das?** في المخاطبة الرسمية.",
      whyAr:
        "يصف IDS Grammis بناء **gefallen** في هذا المعنى بفاعل في الرفع ومتمّم في الداتيف، ويورد أمثلة مثل **Gefällt dir …?**. وتعرض مداخل الأفعال لدى Grammis وDuden استعمال **stehen** مع شخص في الداتيف لبيان ما يليق به، و**passen** للمقاس أو للملاءمة بحسب السياق. لذلك نعرض البنى في جمل قصيرة، ونبيّن المعنى المقصود في المثال بدلاً من وصفها بأنها «كل لغة المتجر».\n\nقد يصادف المتعلم تراكيب داتيف أخرى في دروس سابقة أو لاحقة؛ لا نزعم أن هذا أول لقاء له بالحالة. وفي هذا القسم نركز على أفعال وجمل بعينها، ولا ندّعي أن كل الأفعال التي تأخذ الداتيف تتبع معنى أو ترتيباً واحداً.",
      table: {
        title: "من يفعل ومن يتأثّر",
        columns: [
          "المعنى",
          "الجملة الألمانية",
          "الفاعل (Nominativ)",
          "المستقبِل (Dativ)",
        ],
        rows: [
          {
            label: "يعجبني",
            cells: ["Das Hemd gefällt mir.", "das Hemd", "mir"],
          },
          {
            label: "يعجبني (جمع)",
            cells: ["Die Schuhe gefallen mir.", "die Schuhe", "mir"],
          },
          {
            label: "يناسبك",
            cells: ["Die Hose passt dir.", "die Hose", "dir"],
          },
          {
            label: "لا يناسبني",
            cells: ["Der Mantel passt mir nicht.", "der Mantel", "mir"],
          },
          {
            label: "يليق بك",
            cells: ["Das Kleid steht dir gut.", "das Kleid", "dir"],
          },
          {
            label: "سؤال البائع",
            cells: ["Wie gefällt Ihnen das?", "das", "Ihnen"],
          },
          {
            label: "بتقديم الدّاتيف",
            cells: ["Mir gefällt der Pullover.", "der Pullover", "mir"],
          },
        ],
      },
      examples: [
        {
          de: "Das Hemd gefällt mir sehr.",
          ar: "القميص يعجبني كثيراً. (فاعل مفرد ⇐ gefällt)",
        },
        {
          de: "Die Schuhe gefallen mir nicht.",
          ar: "الأحذية لا تعجبني. (فاعل جمع ⇐ gefallen)",
        },
        {
          de: "Die Hose passt mir nicht. Haben Sie Größe 42?",
          ar: "البنطال لا يناسبني. هل عندكم مقاس 42؟",
        },
        {
          de: "Das Kleid steht dir wirklich gut!",
          ar: "الفستان يليق بك حقّاً!",
        },
        {
          de: "Wie gefällt Ihnen dieser Mantel?",
          ar: "كيف يعجبك هذا المعطف؟ (Ihnen للمخاطبة المهذّبة)",
        },
        {
          de: "Mir gefällt die Jacke, aber sie ist zu teuer.",
          ar: "السترة تعجبني، لكنّها غالية جداً. (تقديم mir لإبراز الرأي)",
        },
        {
          de: "Das Hemd gefällt mir, aber es passt mir nicht.",
          ar: "القميص يعجبني لكنّه لا يناسب مقاسي. (الفرق بين الفعلين)",
        },
      ],
      comparisonWithArabic:
        "لا تنقل ترتيب الفاعل والمتمّم من ترجمة حرفية؛ احفظ المثال الألماني مع بنيته: **Das Hemd (فاعل) gefällt mir (داتيف)**. وفي الجمع يطابق الفعل الفاعل: **Die Schuhe gefallen mir**.\n\nالعربية تستطيع أن تعبّر عن المعنى بتركيب مختلف، مثل «يعجبني القميص». لا يلزم أن تتطابق علامات الحالة أو مواضع العناصر بين اللغتين. كذلك فإن ترجمة «يعجبني» لا تكفي وحدها لاختيار فعل ألماني: اسأل هل المقصود الإعجاب، ملاءمة المقاس، أم كون القطعة لائقة بالشخص.",
      eselsbruecke:
        "**من يفعل؟** في **Der Pullover gefällt mir** الفاعل هو der Pullover، والشخص في الداتيف.\n**كم قطعة؟** مفرد **gefällt**، جمع **gefallen**.\n**أي معنى؟** المقاس **passen**؛ كيف تبدو عليك **stehen**؛ الانطباع/الإعجاب **gefallen**.",
      commonMistakes: [
        {
          wrong: "Ich gefalle das Hemd.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "هذه الصيغة لا تبني المعنى المقصود مع gefallen: الشيء الذي يعجبك هو الفاعل، والشخص يأتي في الداتيف: Das Hemd gefällt mir.",
          classification: "error",
        },
        {
          wrong: "Die Schuhe gefällt mir.",
          right: "Die Schuhe gefallen mir.",
          whyAr:
            "الفاعل die Schuhe جمع؛ لذلك نقول gefallen. الضمير mir في الداتيف ولا يحدد صيغة الفعل.",
          classification: "error",
        },
        {
          wrong: "Das Hemd gefällt mich.",
          right: "Das Hemd gefällt mir.",
          whyAr:
            "في المعنى المقصود من gefallen يأتي الشخص في الداتيف: mir، لا ضمير النصب mich.",
          classification: "error",
        },
        {
          wrong: "Das Hemd gefällt mir, Größe 44 bitte.",
          right: "Das Hemd passt mir nicht, haben Sie Größe 44?",
          whyAr:
            "الجملة الأولى قد تعبّر عن إعجابك بالقميص، لكنها لا تشرح وحدها مشكلة المقاس؛ فهي ليست خطأً نحوياً. عند طلب مقاس آخر، أضف جملة بـpassen أو سؤالاً واضحاً عن المقاس.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Wie gefällt Sie das?",
          right: "Wie gefällt Ihnen das?",
          whyAr:
            "das هو الفاعل؛ والمخاطب يأتي في الداتيف مع gefallen، لذا نقول Ihnen.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "gefallen أم mögen أم finden؟",
        content:
          "هذه الأفعال الثلاثة قد تُترجم أحياناً بكلمة «يعجب» أو «يناسب»، لكن بُنى الجملة ومعانيها تختلف:\n• **gefallen**: الشيء فاعل والشخص في الداتيف: **Der Pullover gefällt mir.**\n• **mögen**: الشخص فاعل والشيء مفعول به: **Ich mag den Pullover.** ويمكن استعماله مع شيء محدد أو مع تفضيل عام بحسب السياق.\n• **finden + Akkusativ + Adjektiv**: يقدّم المتكلم تقييماً: **Ich finde den Pullover schön.**\nهذه صيغ متقاربة في بعض المواقف وليست معانيها متطابقة أو محصورة في تقسيم جامد؛ اختر التركيب الذي يطابق ما تريد قوله.",
      },
    },
  ];

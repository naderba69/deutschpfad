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
        "تُحفظ بعض الأفعال الألمانية مع حرف الجر والحالة التي يأتي بها متمّمها، مثل warten auf + Akkusativ وträumen von + Dativ. تعلّم الفعل ضمن مثال، وراجع معجماً موثوقاً عند الشك؛ فالمقابل العربي لا يكفي دائماً لاختيار الحرف الألماني.\n\nوقد يتغيّر الحرف مع تغيّر المعنى أو السياق. غالباً ما تعبّر sich auf etwas freuen عن التطلع إلى أمر منتظر، بينما تعبّر sich über etwas freuen عن الفرح بأمر أو نتيجة؛ وdenken an jemanden يعني التفكير فيه، أما über ein Thema nachdenken فيتناول التفكير في موضوع. تعلّم كل تركيب في سياقه، ولا تحوّل الفرق المعتاد إلى قاعدة زمنية مطلقة.\n\nتُستعمل الظروف الضميرية (Pronominaladverbien) للسؤال عن الأشياء أو الأفكار والإحالة إليها: Worauf wartest du? — Ich warte darauf. ويمكن أيضاً تقديم الإحالة: Darauf warte ich. وعندما يكون المرجع شخصاً نستخدم حرف الجر مع ضمير الشخص: Auf wen wartest du? — Auf ihn. إذا بدأ حرف الجر بحركة صوتية قد تظهر r بين wo/da والحرف: worauf/darauf، وكذلك worüber/darüber.\n\nتأتي هذه الضمائر أيضاً قبل جملة تابعة: Ich freue mich darauf, dass du kommst. وفي السؤال غير المباشر: Sie fragte, worauf ich warte. أما ترتيب الجملة فيتبع نوعها: في السؤال المباشر يأتي الفعل المصرف بعد أداة السؤال (Worauf wartest du?)، وفي الجملة التابعة يأتي في النهاية (… worauf ich warte). وفي sich beschweren يعبّر über + Akk. عن موضوع الشكوى، بينما يحدد bei + Dat. الجهة التي تُقدّم إليها الشكوى.\n\nهذه تراكيب معجمية مفيدة في الحديث والكتابة. احفظها من أمثلة متنوعة، وانتبه إلى أن الفعل الواحد قد يقبل أكثر من متمّم بحسب معناه؛ لا تعمم اختياراً واحداً خارج سياقه.",
      whyAr:
        "وصف الحرف بأنه ثابت يعني أن تركيباً معجمياً بعينه يختار متمّماً محدداً في ذلك المعنى، لا أن كل فعل لا يقبل سواه في جميع استعمالاته. احفظ الفعل مع مثال وحالته الإعرابية، وميّز بين الأفعال التي تقبل أكثر من حرف. تساعد هذه الطريقة على تقليل التخمين وفهم العبارة وإنتاجها، لكنها لا تغني عن مراجعة السياق.",
      table: {
        title: "أمثلة على الأفعال مع حروف جرها",
        columns: ["الفعل", "حرف الجر", "الحالة", "مثال"],
        rows: [
          { label: "sich interessieren", cells: ["für", "Akk", "Ich interessiere mich für Musik."] },
          { label: "warten", cells: ["auf", "Akk", "Ich warte auf den Bus."] },
          { label: "sich freuen auf", cells: ["auf", "Akk", "Ich freue mich auf den Urlaub."] },
          { label: "sich freuen über", cells: ["über", "Akk", "Ich freue mich über das Geschenk."] },
          { label: "denken", cells: ["an", "Akk", "Ich denke an dich."] },
          { label: "träumen", cells: ["von", "Dat", "Ich träume von einer Reise."] },
          { label: "abhängen", cells: ["von", "Dat", "Das hängt von dir ab."] },
          { label: "sich kümmern", cells: ["um", "Akk", "Er kümmert sich um die Kinder."] },
          { label: "diskutieren", cells: ["über", "Akk", "Wir diskutieren über Politik."] },
          { label: "sich beschweren über", cells: ["über", "Akk", "Ich beschwere mich über den Lärm."] },
          { label: "sich beschweren bei", cells: ["bei", "Dat", "Ich beschwere mich bei der Verwaltung."] },
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
        "يمكن أن تساعد الترجمة العربية على تذكّر المعنى، لكنها لا تحدد حرف الجر الألماني دائماً. قارن أمثلة كاملة: sich interessieren für Musik، träumen von einer Reise، sich kümmern um die Anmeldung. وعند السؤال عن شيء نقول Worauf wartest du? — Ich warte darauf؛ أما مع الأشخاص فنقول Auf wen wartest du? — Auf ihn. احفظ التركيب والحالة من سياقه، ولا تنقل الحرف بين اللغتين آلياً.",
      eselsbruecke:
        "احفظ كل تركيب داخل جملة: warten auf + Akk. — Ich warte auf den Bus. ثم اسأل عنه: Worauf wartest du? — Ich warte darauf.",
      commonMistakes: [
        { wrong: "sich interessieren auf Musik", right: "sich interessieren für Musik", whyAr: "في هذا المعنى يأتي الفعل مع für: Ich interessiere mich für Musik. تعلّم الحرف من مثال أو معجم، ولا تستبدله بحرف فعل آخر." },
        { wrong: "warten für den Bus", right: "warten auf den Bus", whyAr: "في معنى انتظار الحافلة نقول: Ich warte auf den Bus. كلا التركيبين هنا يحافظ على شكل den Bus؛ التصحيح يستهدف حرف الجر، لا حالة الاسم." },
        { wrong: "träumen für einem Studium", right: "träumen von einem Studium", whyAr: "في المثال المقصود، يأتي träumen von مع Dativ: von einem Studium. تعلّم المثال بوصفه تركيباً معجمياً؛ لا تستنتج حرف الجر من الترجمة وحدها." },
      ],
      relatedRuleComparison: {
        title: "sich freuen auf أم über؟",
        content: "sich auf etwas freuen غالباً ما يعبّر عن التطلع إلى أمر منتظر (Ich freue mich auf den Urlaub). sich über etwas freuen يعبّر عن الفرح بأمر أو نتيجة (Ich freue mich über das Geschenk). هذا فرق دلالي شائع لا قاعدة زمنية مطلقة؛ افهم السياق.",
      },
    },
    {
      id: "t2",
      titleAr: "الجسيمات التداولية: doch, ja, mal, eben",
      titleDe: "Modalpartikeln: doch, ja, mal, eben",
      explanationAr: "الجسيمات التداولية (Modalpartikeln) كلمات قصيرة تضيف دلالة موقف أو نبرة يحددها السياق؛ ولا تقابلها عادة ترجمة عربية واحدة. في أمثلة الدرس قد تشير doch إلى اعتراض أو تذكير بتوقع سابق، وتوحي ja بأن المتكلم يعرض الأمر كمعروف أو متوقع، وتلطّف mal بعض الطلبات، وتعبّر eben أحياناً عن التسليم بالأمر، بينما تضيف denn نبرة للسؤال. هذه معانٍ تقريبية وليست مقابلات ثابتة لكل استعمال.\n\nتظهر الجسيمات غالباً في وسط الجملة (Mittelfeld)، لكن موضعها يتأثر ببنية الجملة وبالجسيمة نفسها. قارن: Komm doch mal vorbei! وWas machst du denn? أما Doch komm mal vorbei! فقد تبدأ بـDoch بمعنى «لكن/بل» في سياق مناسب؛ فلا يصح الحكم على الترتيب بمعزل عن المعنى والسياق.\n\nلا تغيّر الجسيمة عادة الحدث الأساسي الذي تصفه الجملة، لكنها تغيّر طريقة تقديمه وموقف المتكلم منه. لذلك قد تبقى الجملة ممكنة نحوياً بعد حذف الجسيمة، مع فقدان نبرة أو إيحاء تداولي. قارن Das ist ja klar وDas ist doch klar بحسب ما سبق في الحوار؛ ولا تحفظ لكل كلمة معنى عربياً منفصلاً عن السياق.\n\nانتبه إلى أن الكلمات نفسها تؤدي وظائف أخرى: doch قد تكون أداة ربط بمعنى «لكن» في Er ist arm, doch glücklich؛ وeben قد تأتي ظرفاً بمعنى «قبل قليل» أو صفة بمعنى «مستوٍ»، إلى جانب استعمالها جسيمة. حدّد الوظيفة من تركيب الجملة والمعنى.\n\nتكثر أمثلة الجسيمات في الحوار، لكن اختيارها يتبع الموقف ونوع النص، ولا توجد في هذا الدرس قاعدة لعدد ثابت مسموح به. ابدأ بأمثلة قصيرة، ثم لاحظ أثر الجسيمة في سياقها؛ فالحذف قد يحافظ على النحو ويغيّر نبرة الكلام.",
      whyAr: "ملاحظة الجسيمات في حوار قصير تساعدك على فهم النبرة والافتراضات المشتركة، لا على تخمين معنى واحد ثابت. قارن الجملة مع الجسيمة ومن دونها، ثم اسأل: ما الذي تغيّر في موقف المتكلم؟ واستمع إلى الحوار كاملاً، فالدلالة تتبدل مع النبرة والسياق وموقع الجسيمة. ولا تخلط بين استعمال الكلمة جسيمةً ووظيفتها الأخرى أداة ربط أو ظرفاً.",
      table: {
        title: "الجسيمات التداولية ووظائفها",
        columns: ["الجسيم", "الوظيفة", "مثال", "بالعربية"],
        rows: [
          { label: "ja", cells: ["عرض الأمر كمعروف/متوقع", "Das ist ja bekannt.", "هذا معروف كما تعلم."] },
          { label: "doch", cells: ["حثّ أو ردّ على توقع بحسب السياق", "Komm doch mit!", "هيا تعال معنا!"] },
          { label: "mal", cells: ["تخفيف الطلب", "Warte mal kurz.", "انتظر قليلاً."] },
          { label: "eben", cells: ["تسليم بأمر واقع", "Das ist eben so.", "الأمر هكذا ببساطة."] },
          { label: "denn", cells: ["إضافة نبرة للسؤال بحسب السياق", "Was machst du denn?", "ماذا تفعل إذن؟"] },
        ],
      },
      examples: [
        { de: "Komm doch mal vorbei!", ar: "تعال قليلاً! (ودّي)" }, { de: "Das ist eben so.", ar: "الأمر ببساطة هكذا." }, { de: "Das war ja klar!", ar: "كان هذا واضحاً بالطبع!" }, { de: "Ruf mich doch morgen an.", ar: "اتصل بي غداً إذن." }, { de: "Wo bist du denn gewesen?", ar: "أين كنت إذن؟" }
,
        { de: "Nimm dir doch eben mal fünf Minuten Zeit.", ar: "خُذ لنفسك خمس دقائق فقط (تخفيف وطلب ودّي)." },
      ],
      comparisonWithArabic: "قد تساعد بعض أدوات الخطاب العربية على ملاحظة وظيفة الجسيمة، لكن لا توجد مطابقة كلمة بكلمة؛ اختر الترجمة بحسب السياق والنبرة. وتختلف مواقع الكلمات ووظائفها بين اللغتين، لذلك قارن أمثلة ألمانية كاملة بدلاً من نقل ترتيب عربي آلياً. عند فهم doch أو ja أو mal اسأل عمّا سبق في الحوار، ومن المتكلم، وما الأثر الذي يضيفه اللفظ إلى العبارة.",
      eselsbruecke: "لاحظ الجسيمة داخل سياقها: قد تبقى الجملة نحوية عند حذفها، لكن نبرتها أو الإيحاء فيها قد يتغير.",
      commonMistakes: [
        { wrong: "Ich weiß, was machst du denn.", right: "Ich weiß, was du denn machst.", whyAr: "في السؤال غير المباشر تأتي الجملة التابعة بعد was، ويقع الفعل المصرف في نهايتها: Ich weiß, was du denn machst. لا يُترك ترتيب السؤال المباشر machst du داخلها." },
        { wrong: "Du kommst nicht? — Doch, ich komme nicht.", right: "Du kommst nicht? — Doch, ich komme.", whyAr: "ترد doch هنا نفياً سابقاً وتؤكد العكس، لذا يجب أن يوافقها مضمون الجواب: Doch, ich komme. أما ich komme nicht فيكرر النفي ويناقض وظيفة الرد." },
        { wrong: "Das ist ja doch mal eben so.", right: "Das ist eben so.", whyAr: "تكديس عدة جسيمات في جملة تدريبية واحدة قد يجعل النبرة ملتبسة. ابدأ بجسيمة واحدة وافهم أثرها هنا؛ لا يعني ذلك وجود حدّ عام ثابت لعدد الجسيمات في الألمانية." },
      ],
      relatedRuleComparison: {
        title: "doch جسيماً أم جواباً؟",
        content: "قد تأتي doch جسيمةً داخل الجملة (Komm doch mit!)، وقد تأتي جواباً يصحح نفياً سابقاً: Kommst du nicht? — Doch! يختار السياق المعنى والصياغة العربية المناسبة.",
      },
    },
  ];

/**
 * b1-09 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الوصلات الاسمية-الفعلية (Nomen-Verb-Verbindungen)",
      titleDe: "Nomen-Verb-Verbindungen: eine Frage stellen",
      explanationAr:
        "Nomen-Verb-Verbindungen اسمٌ عام لوصلات تجمع اسماً وفعلاً، مثل eine Frage stellen وeine Entscheidung treffen وBescheid sagen. لا تُصنَّف كل هذه الأمثلة بالضرورة في الفئة النحوية الأضيق Funktionsverbgefüge؛ فبعضها يوصف بأنه تركيب بفعل اسميّ، وبعضها تعبير ثابت. يكفي في هذا الدرس حفظ كل وصلة كما تُستعمل.\n\nالاسم يحمل جزءاً مهماً من المعنى، لكن الفعل ليس مجرد حامل للنحو: فهو يشارك في بناء المعنى ويُحدّد الشريك المألوف للاسم. والوصلة ليست دائماً أرفع أو أكثر رسمية من الفعل البسيط؛ فالاختيار يتبع التعبير والسياق. كما أن وجود اسم قابل للوصف لا يثبت أن الصيغة أفصح: نقول مثلاً eine wichtige Entscheidung treffen، لكن الفرق عن entscheiden لا يُختزل في الرسمية أو التروي. سنتمرّن هنا على: eine Frage stellen، eine Entscheidung treffen، Bescheid sagen، Hilfe leisten، وAbschied nehmen.",
      whyAr:
        "لا يلزم أن تكون الوصلة الاسمية أرسَم أو أبطأ من الفعل البسيط، ولا أن تحمل دائماً معنى إدارياً. فـeine Entscheidung treffen وentscheiden متقاربان في المعنى الأساسي، ولا تكفي الصيغة وحدها لإثبات أن القرار كان نتيجة تشاور أطول. وBescheid sagen تعبير شائع للتبليغ أو إخبار شخص بما يلزمه، ولا يعني بذاته وجود إجراء إداري رسمي.\n\nتسمح الوصلة بوصف الاسم: eine schwierige Entscheidung treffen، وeine wichtige Rolle spielen. وهذه فائدة تركيبية، لكنها لا تجعل الفعل البسيط عاجزاً عن التعبير عن المعنى نفسه؛ يمكن مثلاً قول eine schwierige Entscheidung treffen أو schwierig entscheiden بحسب المقصود والبناء. تعلّم الوصلة كاملة مع سياقها، ولا تستنتج فرقاً دلالياً ثابتاً لمجرد اختلاف الصياغة.",
      table: {
        title: "أهم الوصلات",
        columns: ["الوصلة", "المعنى", "الفعل المكافئ"],
        rows: [
          { label: "eine Frage stellen", cells: ["يطرح سؤالاً", "fragen"] },
          { label: "Bescheid sagen", cells: ["يعطي خبراً", "informieren"] },
          { label: "Hilfe leisten", cells: ["يقدم مساعدة", "helfen"] },
          { label: "eine Entscheidung treffen", cells: ["يتخذ قراراً", "entscheiden"] },
          { label: "Abschied nehmen", cells: ["يودع", "sich verabschieden"] },
          { label: "eine Rolle spielen", cells: ["يلعب دوراً", "—"] },
        ],
      },
      examples: [
        { de: "Darf ich eine Frage stellen?", ar: "هل أستطيع طرح سؤال؟" },
        { de: "Sag mir bitte Bescheid!", ar: "أعطني خبراً من فضلك!" },
        { de: "Wir leisten den Kindern Hilfe.", ar: "نقدم مساعدة للأطفال." },
        { de: "Er traf eine wichtige Entscheidung.", ar: "اتخذ قراراً مهماً." },
        { de: "Wir nehmen Abschied von unseren Freunden.", ar: "نودع أصدقاءنا." },
        { de: "Der Verein spielt eine wichtige Rolle in der Stadt.", ar: "تلعب الجمعية دوراً مهماً في المدينة." },
      ],
      comparisonWithArabic:
        "توجد في العربية تعبيرات تجمع اسماً وفعلاً، مثل «يطرح سؤالاً» و«يتخذ قراراً» و«يقدّم مساعدة»، لكن هذا التشابه لا يعني تطابق الاستعمال أو درجة الرسمية بين اللغتين. وبعض الوصلات الألمانية يقابلها في العربية فعل واحد، مثل Abschied nehmen («يودّع»). لذلك احفظ الشريك الألماني كما هو، واستعمل الترجمة لتقريب المعنى لا لاستنتاج الفعل الألماني.",
      eselsbruecke:
        "«استبدل الفعل البسيط بوصلة»: fragen → eine Frage stellen، helfen → Hilfe leisten. بعضها يشبه العربية، وبعضها لا؛ احفظها كأزواج جاهزة.",
      commonMistakes: [
        { wrong: "eine Frage machen (فعل خاطئ)", right: "eine Frage stellen", whyAr: "التعبير المعتاد في هذا المعنى هو eine Frage stellen، لا eine Frage machen. قد توجد تراكيب أخرى مع Frage بحسب المقصود، لكن لا تستبدل الفعل في هذه الوصلة المحفوظة؛ تعلّمها كاملة مع مثال سياقي." },
        { wrong: "eine Entscheidung machen", right: "eine Entscheidung treffen", whyAr: "في هذا التعبير نقول eine Entscheidung treffen. لا تُترجم الفعل كلمةً بكلمة، ولا تُعمّم الشريك treffen على أسماء أخرى؛ احفظ التعبير مع مثال، مثل: Der Chef trifft morgen eine Entscheidung." },
        { wrong: "Bescheid machen", right: "Bescheid sagen", whyAr: "التعبير الشائع هو Bescheid sagen، ومعناه إخبار شخص أو إبلاغه بما يلزمه. لا يلزم أن يكون الإخبار إدارياً، ولا أن يعني انتهاء الموضوع؛ احفظ الفعل sagen مع Bescheid باعتباره تركيباً ثابتاً في هذا المعنى." },
      ],
      relatedRuleComparison: {
        title: "الوصلة أم الفعل البسيط؟",
        content: "لا تفترض أن الوصلة رسمية دائماً أو أن الفعل البسيط غير مناسب؛ قارن المعنى والسياق، واحفظ كل تعبير مع الفعل الذي يرد معه.",
      },
    },
    {
      id: "t2",
      titleAr: "تصريف n (n-Deklination)",
      titleDe: "Die n-Deklination: der Student → den Studenten",
      explanationAr:
        "تضيف فئة من الأسماء المذكرة الضعيفة نهاية -n أو -en في الحالات غير الرفع المفرد، كما في الجدول: der Student، den/dem/des Studenten. ومن المؤشرات الشائعة: بعض الأسماء المنتهية بـ-e مثل der Junge وder Kollege وder Kunde؛ وأسماء كثيرة ذات لواحق مثل -ent و-ant و-ist، ومنها der Student وder Demonstrant وder Polizist. توجد أيضاً أسماء شائعة تُحفظ، مثل der Herr → den Herrn، وder Mensch → den Menschen، وder Nachbar → den Nachbarn، وder Bauer → den Bauern. هذه مؤشرات وأمثلة لا قائمة كاملة.\n\nليست الفئة مقصورة على أسماء البشر أو الحيوان؛ فـder Automat اسم غير عاقل وتصريفه den Automaten. ولـder Name تصريف خاص: den/dem Namen، لكن des Namens. أما الجمع فيحتاج الانتباه إلى الأداة والحالة: den Studenten مفرد Akkusativ أو جمع Dativ بحسب السياق؛ المفرد في الأكوزاتيف هو den Studenten، والجمع في الأكوزاتيف die Studenten.",
      whyAr:
        "تعامل مع n-Deklination بوصفها نمطاً صرفياً لفئة من الأسماء، لا قاعدة دلالية عن الأحياء. أكثر أمثلتها الشائعة أسماء أشخاص، لكن توجد أسماء غير عاقلة مثل der Automat. ولـder Name تصريف مختلط خاص (den/dem Namen، des Namens)، كما أن das Herz له أشكال خاصة (dem Herzen، des Herzens)، فلا تعمم النمط على كل المذكر أو المحايد.\n\nتأمل نهاية الاسم بدقة: Studenten وDemonstranten تُكتبان -ten، ولا تتضاعف فيهما n؛ إذ تُضاف النهاية -en إلى Student وDemonstrant. وفي der Nachbar وder Bauer تظهر -n. احفظ هذه الأشكال المألوفة مع أداة التعريف والحالة.",
      table: {
        title: "n-Deklination",
        columns: ["الحالة", "der Student", "der Kunde"],
        rows: [
          { label: "Nominativ", cells: ["der Student", "der Kunde"] },
          { label: "Akkusativ", cells: ["den Studenten", "den Kunden"] },
          { label: "Dativ", cells: ["dem Studenten", "dem Kunden"] },
          { label: "Genitiv", cells: ["des Studenten", "des Kunden"] },
        ],
      },
      examples: [
        { de: "Ich kenne den Studenten.", ar: "أعرف الطالب." },
        { de: "Wir helfen dem Kunden.", ar: "نساعد الزبون." },
        { de: "Das ist der Wagen des Herrn Weber.", ar: "هذه سيارة السيد فيبر." },
        { de: "Der Polizist fragt den Journalisten.", ar: "يسأل الشرطي الصحفي." },
        { de: "Sie spricht mit dem Kollegen.", ar: "تتحدث مع الزميل." },
        { de: "Wir danken dem Lehrer und dem Herrn Schmidt.", ar: "نشكر المعلّم والسيد شميت." },
      ],
      comparisonWithArabic:
        "في العربية الفصحى تظهر بعض علامات الإعراب في أواخر الكلمات، لكن نطقها واستعمالها يختلفان بين الفصحى واللهجات. أما في هذا النمط الألماني فتتغير نهاية الاسم نفسه، إلى جانب الأداة. لا نفترض أن الفرق بين Student وStudenten متطابق سمعياً مع فرق عربي؛ استمع إلى النهاية الألمانية واكتبها، واستعمل الأداة والسياق لتحديد الحالة والعدد. مثال مهم: den Studenten مفرد Akkusativ، وقد يكون جمع Dativ؛ أما جمع Akkusativ فيأتي مع die: die Studenten.",
      eselsbruecke:
        "«n-Deklination = نمط صرفي في أسماء مختارة»: بعض الأسماء المذكرة تنتهي بـ -n/-en خارج الرفع المفرد. احفظ الأشكال مع الأداة: der Student → den Studenten، der Nachbar → dem Nachbarn.",
      commonMistakes: [
        { wrong: "Ich sehe den Student. (بدون n)", right: "Ich sehe den Studenten.", whyAr: "في هذه الفئة لا تكفي أداة den وحدها: الاسم Student يأخذ -en في Akkusativ، كما في den Studenten. قارن ذلك بالرفع المفرد der Student، واحفظ شكل الاسم مع الحالة بدلاً من افتراض أن كل اسم مذكر يتبع هذا النمط." },
        { wrong: "dem Herr (بدون n)", right: "dem Herrn", whyAr: "الصيغة الصحيحة هي dem Herrn، مثل mit dem Herrn؛ فـHerr يأخذ -n في الحالات غير الرفع المفرد. احفظ هذا الاسم منفرداً مع أداة الجر، ولا تنقل إليه تصريف أسماء مذكّرة أخرى." },
        { wrong: "Ich sehe den Herr.", right: "Ich sehe den Herrn.", whyAr: "بعد den في النصب المفرد يبقى الاسم ضعيفاً أيضاً: den Herrn. لكن لا تُعمم النهاية على كل اسم مذكر؛ احفظ أن Herr من الأسماء ذات الشكل Herrn في الحالات غير الرفع المفرد." },
      ],
      relatedRuleComparison: {
        title: "n-Deklination أم عادية؟",
        content: "النهاية -e مؤشر مفيد لا قاعدة بلا استثناء: der Junge → den Jungen، لكن der Name له نمط مختلط: den/dem Namen، des Namens. وقارن بالأسماء العادية: der Mann → dem Mann. تحقّق من تصريف الاسم نفسه عند الشك.",
      },
    },
    {
      id: "t3",
      titleAr: "الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen)",
      titleDe: "Verben mit festen Präpositionen: teilnehmen an, sich erinnern an",
      explanationAr:
        "ترتبط أفعال كثيرة بحرف جر وحالة معيّنين في معنى محدد؛ لذلك يُستحسن حفظها معاً: teilnehmen an + Dativ (يشارك في)، sich erinnern an + Akkusativ (يتذكر)، sich interessieren für + Akkusativ (يهتم بـ)، warten auf + Akkusativ (ينتظر)، denken an + Akkusativ (يفكر في)، sich kümmern um + Akkusativ (يعتني بـ)، helfen bei + Dativ (يساعد في). فالقاعدة الذهبية أن تحفظ مع الفعل ثلاثة لا اثنين: الفعل + حرف الجر + الحالة؛ فالحرف والحالة يصيران معه كأنهما جزء من الكلمة الواحدة.\n\nوتوضيح عملي للفارق: إذا كان للحرف معنى مكاني فهو حرف حر له معناه (auf dem Tisch = على الطاولة)، أما في warten auf فهو مجرّد مرافق يفرضه الفعل، بلا علاقة بمعناه الأصلي «على». ولهذا لا يُخالف ولا يُبدّل بحرف قريب منه في المعنى.\n\nولهذا الباب امتداد مهم في الكلام: إذا أُريد الرجوع إلى شيء غير عاقل أُبدل الحرف بتركيب مصوغ على شكل da(r) — Worauf wartest du? ↔ Ich warte darauf؛ أما إذا كان المرجع عاقلاً فلا يُستغنى عن الضمير الشخصي: Ich warte auf ihn. ومن عرف هذا استطاع أن يقرأ جملة كثيرة في الحديث اليومي لا حرف فيها ظاهر، وأن يُنشئ أخرى بها في الأسلوب الرسمي.",
      whyAr:
        "في a1-04 دُرست حروف مكانية تتغير حالتها بحسب الموضع أو الاتجاه. أما هنا فاحفظ وصلة الفعل وحالتها كما هي؛ وقد يختلف المعنى عن الاستعمال المكاني للحرف، مثل teilnehmen an + Dativ.",
      table: {
        title: "أهم الأفعال مع حروف الجر الثابتة",
        columns: ["الفعل + الحرف", "الحالة", "المعنى", "مثال"],
        rows: [
          { label: "teilnehmen an", cells: ["Dativ", "يشارك في", "Ich nehme am Kurs teil."] },
          { label: "sich erinnern an", cells: ["Akkusativ", "يتذكر", "Ich erinnere mich an den Tag."] },
          { label: "sich interessieren für", cells: ["Akkusativ", "يهتم بـ", "Er interessiert sich für Musik."] },
          { label: "warten auf", cells: ["Akkusativ", "ينتظر", "Wir warten auf den Bus."] },
          { label: "denken an", cells: ["Akkusativ", "يفكر في", "Sie denkt an ihre Familie."] },
          { label: "sich kümmern um", cells: ["Akkusativ", "يعتني بـ", "Er kümmert sich um die Kinder."] },
          { label: "helfen bei", cells: ["Dativ", "يساعد في", "Ich helfe dir bei der Arbeit."] },
        ],
      },
      examples: [
        { de: "Ich nehme an einem Sprachkurs teil.", ar: "أشارك في دورة لغة." },
        { de: "Erinnerst du dich an unseren ersten Tag?", ar: "هل تتذكر يومنا الأول؟" },
        { de: "Viele Freiwillige kümmern sich um die Flüchtlinge.", ar: "متطوعون كثيرون يعتنون باللاجئين." },
        { de: "Wir warten auf die Antwort des Vereins.", ar: "ننتظر جواب الجمعية." },
        { de: "Sie interessiert sich für das Ehrenamt.", ar: "هي مهتمة بالعمل التطوعي." },
        { de: "Der Verein hilft den Familien bei der Anmeldung.", ar: "الجمعية تساعد العائلات في التسجيل." },
      ],
      comparisonWithArabic:
        "قد تتشابه بعض الوصلات مع العربية، لكن حروف الجر والحالات لا تُنقل آلياً من لغة إلى أخرى. احفظ كل فعل مع حرف الجر والحالة، مثل teilnehmen an + Dativ وwarten auf + Akkusativ. وتُستخدم ضمائر da(r)- عادةً للإحالة إلى الأشياء أو الأفكار (Worauf wartest du? – Ich warte darauf)، بينما يُستعمل حرف الجر مع الضمير الشخصي عند الإحالة إلى شخص (Ich warte auf ihn). هذه أداة ألمانية لا يقابلها شكل واحد مطابق في العربية.",
      eselsbruecke:
        "«الفعل يسافر بحقيبتين»: الحرف والحالة. لا تحفظ warten وحده بل warten auf + Akkusativ. ولا تعمّم حالة الحرف من حرف إلى آخر: teilnehmen an مع Dativ، وdenken an مع Akkusativ؛ احفظ كل فعل مع حالته.",
      commonMistakes: [
        { wrong: "Ich warte den Bus. (بلا حرف)", right: "Ich warte auf den Bus.", whyAr: "في الألمانية نقول warten auf + Akkusativ: Ich warte auf den Bus. لا تحذف auf، حتى إن جاءت الترجمة العربية من دون حرف جر؛ فالمطلوب حفظ الوصلة الألمانية نفسها." },
        { wrong: "Ich nehme an den Kurs teil.", right: "Ich nehme am Kurs teil.", whyAr: "teilnehmen يأخذ an + Dativ؛ لذلك نقول an dem Kurs أو اختصاراً am Kurs، لا an den Kurs. احفظ الحالة مع الفعل، ولا تستنتجها من وظيفة الاسم في الترجمة." },
        { wrong: "Ich erinnere an den Tag. (بلا mich)", right: "Ich erinnere mich an den Tag.", whyAr: "في المعنى المقصود هنا الفعل هو sich erinnern an + Akkusativ، ويجب إظهار الضمير الانعكاسي: Ich erinnere mich an den Tag. احفظ الفعل بصيغته الانعكاسية مع حرف الجر والحالة." },
        { wrong: "Er interessiert sich über Musik.", right: "Er interessiert sich für Musik.", whyAr: "الوصلة المستهدفة في هذا المثال هي sich interessieren für + Akkusativ: Er interessiert sich für moderne Kunst. استبدال für بـüber لا يطابق هذا المعنى المقصود؛ احفظ التعبير مع حرفه." },
      ],
      relatedRuleComparison: {
        title: "حرف جر ثابت أم Wechselpräposition؟",
        content: "في a1-04 دُرست حروف مكانية تتغير حالتها بحسب الموضع أو الاتجاه. أما هنا فاحفظ وصلة الفعل وحالتها كما هي؛ وقد يختلف المعنى عن الاستعمال المكاني للحرف، مثل warten auf + Akkusativ.",
      },
    },
  ];

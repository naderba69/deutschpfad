import {DAILY_DIALOGUES} from "@/data/dialogues";
import {PODCASTS} from "@/data/podcasts";
import {INTERACTIVE_STORIES} from "@/data/stories";

/**
 * ═══════════════════════════════════════════════════════════
 *  ربط الدروس بالمحتوى الرديف (المرحلة ب من خطة التوسعة)
 * ═══════════════════════════════════════════════════════════
 *
 *  المشكلة التي يحلّها هذا الملف:
 *  المشروع يحوي 140 مورداً مكتوباً بالكامل — 60 قصة تفاعلية،
 *  60 حواراً يومياً، 20 حلقة بودكاست — لكنّها كانت معزولة في
 *  ثلاث صفحات مكتبات (/stories, /dialogues, /podcasts) لا يصلها
 *  المتعلّم من داخل مساره. من يتبع الدروس بالترتيب لا يرى منها
 *  شيئاً، ومن يفتح المكتبة يواجه 60 بطاقة دون معرفة أيّها يناسب
 *  ما تعلّمه للتوّ.
 *
 *  الحل: خريطة صريحة مكتوبة يدوياً درساً درساً. الربط **موضوعي
 *  ونحوي معاً**: القصة/الحوار/الحلقة المربوطة بدرسٍ ما تعيد
 *  تدوير مفرداته أو تركيبه النحوي في سياق متصل.
 *
 *  لماذا يدويّاً لا آلياً؟ لأنّ المطابقة الآلية بالعناوين هي
 *  بالضبط ما أنتج فهرس القواعد المعطوب سابقاً. كل سطر هنا
 *  مُتحقَّق منه بقراءة وصف المورد ومحتواه، لا بتشابه العناوين.
 *
 *  الحرّاس في related-resources.test.ts تمنع:
 *  · معرّفاً لمورد غير موجود (خطأ مطبعي يصبح رابطاً ميتاً)
 *  · ربط مورد بمستوى أعلى من مستوى درسه (مفردات غير مفهومة)
 *  · تكرار المورد نفسه في درسين (كل مورد يخدم درساً واحداً)
 */

/** أنواع الموارد الرديفة الثلاثة */
export type RelatedResourceKind = "story" | "dialogue" | "podcast";

export interface RelatedResource {
  kind: RelatedResourceKind;
  /** معرّف المورد في مكتبته */
  id: string;
  /** لماذا يُقترح هذا المورد بعد هذا الدرس تحديداً */
  reasonAr: string;
}

/**
 * الخريطة: معرّف الدرس ← موارده الرديفة.
 * الدروس غير المذكورة (دروس المراجعة الشاملة ودروس التكتيك)
 * لا تُربط عمداً: وظيفتها تجميع ما سبق لا إضافة تعرّض جديد.
 */
export const LESSON_RELATED_RESOURCES: Record<string, RelatedResource[]> = {
  /* ─────────────────────────── A1 ─────────────────────────── */
  "a1-00": [
    { kind: "story", id: "a1-im-park", reasonAr: "قصة قصيرة جداً بجمل بسيطة — اسمع النطق بعد كل مقطع وطابقه بما تعلّمته من الأصوات المركّبة." },
  ],
  "a1-01": [
    { kind: "dialogue", id: "a1-01-begruessung", reasonAr: "الحوار نفسه الذي درسته: التحية وتقديم النفس — طبّقه في وضع «دورك» 🎭." },
    { kind: "story", id: "a1-neue-nachbarin", reasonAr: "جارة جديدة تتعرّف على الجيران: sein/wohnen والنفي بـ nicht/kein في سياق متصل." },
  ],
  "a1-02": [
    { kind: "dialogue", id: "a1-04-familie", reasonAr: "تسأل صديقاً عن عائلته — استعمال حيّ لضمائر الملكية mein/meine." },
    { kind: "story", id: "a1-tag-mit-oma", reasonAr: "يوم مع الجدة: أفراد العائلة + الروتين اليومي معاً." },
    { kind: "podcast", id: "p-a1-meine-familie", reasonAr: "حلقة استماع قصيرة عن العائلة — استمع أولاً دون نص ثم تحقّق." },
  ],
  "a1-03": [
    { kind: "dialogue", id: "a1-02-cafe", reasonAr: "طلب مشروب وحلوى في مقهى — النصب (Akkusativ) مع einen/eine في جمل الطلب." },
    { kind: "story", id: "a1-das-fruehstueck", reasonAr: "فطور عائلي: مفردات الطعام وصيغة الجمع." },
    { kind: "story", id: "a1-im-cafe", reasonAr: "تيم وبيا يطلبان ويدفعان — Ich möchte + النصب." },
    { kind: "dialogue", id: "a1-10-essen-bestellen", reasonAr: "طلب وجبة في مطعم سريع — النصب في أبسط جملة طلب تحتاجها يومياً." },
  ],
  "a1-04": [
    { kind: "dialogue", id: "a1-07-wohnung", reasonAr: "تصف شقتك لصديق — غرف البيت مع in + Dativ." },
    { kind: "story", id: "a1-hilfe-beim-nachbarn", reasonAr: "مساعدة الجار: أدوات البيت والأفعال اليومية." },
  ],
  "a1-05": [
    { kind: "dialogue", id: "a1-05-uhrzeit", reasonAr: "السؤال عن الوقت في الشارع — قراءة الساعة عملياً." },
    { kind: "story", id: "a1-erster-schultag", reasonAr: "أول يوم مدرسة: قراءة الساعة + مفردات اليوم الدراسي." },
  ],
  "a1-06": [
    { kind: "dialogue", id: "a1-12-freizeit", reasonAr: "تسأل زميلاً عن هواياته — gern و mögen في المحادثة." },
    { kind: "story", id: "a1-im-schwimmbad", reasonAr: "يوم في المسبح: أفعال الهوايات (schwimmen) وصيغة الأمر." },
    { kind: "story", id: "a1-im-zoo", reasonAr: "زيارة حديقة الحيوان: الصفات الخبرية (groß, klein, lustig) مع sehen." },
  ],
  "a1-07": [
    { kind: "dialogue", id: "a1-03-supermarkt", reasonAr: "شراء الطعام والسؤال عن الأسعار — Was kostet das? بالأرقام." },
    { kind: "story", id: "a1-anna-einkaufen", reasonAr: "آنا في السوق: مفردات الطعام + الأثمان + صيغة الأمر." },
    { kind: "podcast", id: "p-a1-markt", reasonAr: "حلقة «في السوق» — مفردات المنتجات في نص مسموع مولّد آلياً؛ لا تتضمن أسعاراً، وعبارة «ein Kilo» لا تحدد المنتج، فلا تغني عن تدريب الكميات والأسعار في الدرس." },
  ],
  "a1-08": [
    { kind: "dialogue", id: "a1-06-kleidung", reasonAr: "شراء قميص في متجر: السؤال عن المقاس والسعر، ثم قبول القطعة؛ تدريب مكمّل على مفردات الشراء والملابس." },
    { kind: "story", id: "a1-geschenk", reasonAr: "سارة تشتري هدية: الألوان والتسوق والتعبير عن الامتنان والمحبة." },
  ],
  "a1-09": [
    { kind: "dialogue", id: "a1-08-einladung", reasonAr: "دعوة لحفلة عيد ميلاد — تحديد يوم وساعة مع am/um." },
    { kind: "podcast", id: "p-a1-geburstag", reasonAr: "حلقة «عيد الميلاد» — مفردات الاحتفال وأوقات اليوم في نص مسموع؛ لا تتضمن تاريخاً تقويمياً محدداً." },
  ],
  "a1-10": [
    { kind: "story", id: "a1-max-hund", reasonAr: "ماكس يجد كلباً: الأفعال الشائعة والنفي — تدريب على nicht/kein بعد درس المهن." },
    { kind: "podcast", id: "p-a1-haustier", reasonAr: "حلقة «حيواني الأليف» — وصف بسيط بجمل قصيرة ومنفية." },
  ],
  "a1-11": [
    { kind: "dialogue", id: "a1-09-wegbeschreibung", reasonAr: "تائه في المدينة وتسأل عن المحطة — الاتجاهات كاملةً في محادثة." },
    { kind: "dialogue", id: "a1-15-ticket", reasonAr: "شراء تذكرة قطار من الشباك — أماكن المدينة + الأرقام." },
    { kind: "story", id: "a1-am-bahnhof", reasonAr: "توم يشتري تذكرة إلى هامبورغ: المواصلات والأسعار." },
    { kind: "dialogue", id: "a1-11-apotheke", reasonAr: "شراء دواء للصداع من الصيدلية — die Apotheke من مفردات هذا الدرس نفسه." },
  ],
  "a1-12": [
    { kind: "dialogue", id: "a1-14-wetter", reasonAr: "حوار مع الجار عن طقس اليوم والغد: الشمس والمطر وبرودة الجو والمظلّة." },
    { kind: "story", id: "a1-picknick", reasonAr: "نزهة عائلة مولر: الطقس والطعام والألوان مجتمعة." },
    { kind: "story", id: "a1-am-strand", reasonAr: "مشهد عائلي على الشاطئ ومفردات الطبيعة؛ سياق خارجي داعم لا تدريب مباشر على تراكيب الطقس." },
  ],
  "a1-14": [
    { kind: "dialogue", id: "a1-13-hotel", reasonAr: "حجز غرفة فندق هاتفياً — أرقام الهاتف والتواريخ رقماً رقماً." },
  ],

  /* ─────────────────────────── A2 ─────────────────────────── */
  "a2-01": [
    { kind: "dialogue", id: "a2-05-reisebuero", reasonAr: "حجز رحلة في مكتب سفر — مفردات السفر مع Perfekt في سرد التجارب." },
    { kind: "story", id: "a2-urlaub-bergen", reasonAr: "عطلة جبلية: Perfekt مع sein (sind gewandert) — أصعب نصف في الدرس." },
    { kind: "story", id: "a2-berlin-tag", reasonAr: "يوم في برلين: الماضي + حروف الجر مع الاتجاه." },
    { kind: "podcast", id: "p-a2-zug", reasonAr: "حلقة «السفر بالقطار» — سرد ماضٍ مسموع بجمل قصيرة." },
  ],
  "a2-02": [
    { kind: "dialogue", id: "a2-01-arzt", reasonAr: "زيارة الطبيب — وصف الأعراض والنصيحة بـ sollen." },
    { kind: "story", id: "a2-beim-arzt", reasonAr: "بيتر عند الطبيب: أجزاء الجسم والأعراض في حكاية متصلة." },
    { kind: "story", id: "a2-zahnarzt", reasonAr: "ألم الأسنان: Schmerzen + نصائح sollen في موقف مختلف." },
  ],
  "a2-03": [
    { kind: "dialogue", id: "a2-02-restaurant", reasonAr: "طلب عشاء كامل في مطعم — الطلب المهذّب möchten." },
    { kind: "story", id: "a2-im-restaurant", reasonAr: "جوليا ومارك في مطعم: وصف الطعام بـ schmecken." },
  ],
  "a2-04": [
    { kind: "dialogue", id: "a2-04-wohnungssuche", reasonAr: "مكالمة مع وكيل عقارات عن شقة معلنة — لغة الإعلانات السكنية." },
    { kind: "story", id: "a2-umzug", reasonAr: "الانتقال لشقة جديدة: حروف الجر المتغيرة (in/an + Dativ/Akkusativ) والأثاث." },
    { kind: "podcast", id: "p-a2-wohnung", reasonAr: "حلقة «الشقة الجديدة» — وصف سكن مسموع." },
  ],
  "a2-05": [
    { kind: "dialogue", id: "a2-10-bewerbung", reasonAr: "مكالمة استفسار عن وظيفة معلنة — لغة المكتب الرسمية المبسّطة." },
    { kind: "dialogue", id: "a2-12-verspaetet", reasonAr: "الاعتذار عن التأخير لصديق — عبارات اعتذار في حوار غير رسمي، لا نموذج لمكالمة عمل." },
  ],
  "a2-06": [
    { kind: "dialogue", id: "a2-08-handy", reasonAr: "امتداد اختياري لمفردة الإنترنت عبر مكالمة خدمة؛ لا يتناول مباشرةً قراءة الأخبار أو بناء dass." },
    { kind: "podcast", id: "p-a2-kinoabend", reasonAr: "حلقة «أمسية سينما» — الإعلام والترفيه في نص مسموع بسيط." },
  ],
  "a2-07": [
    { kind: "dialogue", id: "a2-07-bank", reasonAr: "محاكاة افتراضية للسؤال عن فتح حساب؛ للتدرّب على المفردات والأسئلة، لا لعرض متطلبات مصرفية عامة." },
    { kind: "story", id: "a2-fahrrad", reasonAr: "قصة اختيار دراجة بين أسعار مختلفة؛ امتداد اختياري لمفردات السعر والاختيار، لا لقاعدة المصرف." },
  ],
  "a2-08": [
    { kind: "dialogue", id: "a2-03-zug", reasonAr: "في القطار: السؤال عن المقعد ومحادثة مع راكب." },
    { kind: "dialogue", id: "a2-09-bus", reasonAr: "شراء تذكرة حافلة وطلب التوقف — مواصلات المدينة." },
    { kind: "story", id: "a2-klassenfahrt", reasonAr: "رحلة الفصل إلى هامبورغ: التنقل + المقارنة (besser als)." },
  ],
  "a2-09": [
    { kind: "story", id: "a2-geburtstag", reasonAr: "حفلة عيد ميلاد ليزا: المستقبل القريب (werden + Infinitiv) والهدايا." },
    { kind: "story", id: "a2-jahrmarkt", reasonAr: "مهرجان شعبي: Perfekt والمشاعر في احتفال." },
    { kind: "dialogue", id: "a2-15-geschenk", reasonAr: "شراء هدية لصديق — لغة المناسبات." },
    { kind: "podcast", id: "p-a2-sonnntag", reasonAr: "حلقة «أحد في العائلة» — تجمّع عائلي مسموع." },
  ],
  "a2-10": [
    { kind: "story", id: "a2-wochenende-berlin", reasonAr: "نهاية أسبوع في برلين: Perfekt الموسّع — تثبيت ما قبل قفزة B1." },
    { kind: "podcast", id: "p-a2-wochenmarkt", reasonAr: "حلقة «سوق الأسبوع» — استماع ممتد بمفردات مألوفة." },
  ],
  "a2-11": [
    { kind: "dialogue", id: "a2-06-post", reasonAr: "إرسال طرد إلى الخارج — لغة الخدمات والإجراءات." },
    { kind: "dialogue", id: "a2-11-friseur", reasonAr: "عند الحلاق: التعبير عن الرغبة في موقف خدمي." },
    { kind: "dialogue", id: "a2-13-einkaufen-kleidung", reasonAr: "إرجاع بنطال في مثال حواري: الشكوى المهذّبة والاستفسار عن إجراء الإرجاع." },
    { kind: "story", id: "a2-postamt", reasonAr: "ياسمين ترسل طرداً إلى تونس: الخدمات والتعليمات." },
    { kind: "story", id: "a2-friseur", reasonAr: "لوكاس عند الحلاق: höflich fragen والأوصاف (kürzer)." },
  ],
  "a2-12": [
    { kind: "dialogue", id: "a2-14-nachbarn", reasonAr: "التعرّف على جار جديد — لغة العلاقات اليومية." },
    { kind: "story", id: "a2-verlorener-schluessel", reasonAr: "آنا تفقد مفتاحها وتطلب المساعدة: Perfekt + طلب العون." },
    { kind: "story", id: "a2-hotel", reasonAr: "عائلة تصل إلى الفندق: التعامل مع الآخرين في موقف خدمي." },
  ],

  /* ─────────────────────────── B1 ─────────────────────────── */
  "b1-01": [
    { kind: "story", id: "b1-sprachkurs", reasonAr: "أحمد في دورة لغة: الجمل الثانوية (dass, weil) + الحديث عن التقدّم الدراسي." },
    { kind: "story", id: "b1-sprachreise", reasonAr: "رحلة لغة إلى فيينا: التجربة التعليمية بجمل مركّبة." },
    { kind: "podcast", id: "p-b1-lernen", reasonAr: "حلقة «تعلم اللغات» — آراء وأسباب، تمرين على الاستماع الحجاجي." },
  ],
  "b1-02": [
    { kind: "dialogue", id: "b1-07-interview", reasonAr: "محاكاة تدريبية لمقابلة عمل، مع أسئلة وأجوبة بلغة العمل؛ الأجر الوارد مثال لشخصية خيالية لا معيار سوق." },
    { kind: "story", id: "b1-neuer-job", reasonAr: "دانيال يبدأ في بنك: Präteritum + الأفعال المنفصلة في السرد." },
    { kind: "story", id: "b1-nebenjob", reasonAr: "قصة تدريبية عن طالبة توازن بين العمل والدراسة: Präteritum في سياق يومي، وليست مرجعاً للأجور أو شروط العمل." },
    { kind: "dialogue", id: "b1-08-krankmeldung", reasonAr: "إبلاغ العمل بالمرض — مكالمة رسمية قصيرة." },
  ],
  "b1-03": [
    { kind: "dialogue", id: "b1-06-umwelt", reasonAr: "نقاش عن البلاستيك — التعبير عن الرأي بالحجّة." },
    { kind: "story", id: "b1-umweltgruppe", reasonAr: "قصة تدريبية خيالية عن مجموعة طلابية؛ للمجهول (wird/wurde) والعمل التطوعي، لا لإثبات مبادرة محلية بعينها." },
    { kind: "story", id: "b1-energiesparen", reasonAr: "قصة تدريبية خيالية تصف عادات لتوفير الطاقة؛ ليست دليلاً على مقدار توفير فعلي." },
    { kind: "podcast", id: "p-b1-umwelt", reasonAr: "نموذج قصير لعرض رأيين وممارسة الاستماع؛ ليس مسحاً لآراء الناس أو تقريراً علمياً." },
  ],
  "b1-04": [
    { kind: "story", id: "b1-digital-detox", reasonAr: "قصة تدريبية خيالية عن تقليل استخدام الهاتف (لا تشخّص إدماناً): dass/weil." },
    { kind: "dialogue", id: "b1-01-meinung", reasonAr: "التعبير عن الرأي في العمل عن بُعد — عبارات إبداء الرأي." },
  ],
  "b1-05": [
    { kind: "dialogue", id: "b1-13-sport", reasonAr: "حوار تدريبي خيالي للاستفسار عن اشتراك؛ السعر والمزايا ليست عرضاً حقيقياً. امتداد لغوي اختياري، لا معلومة صحية." },
    { kind: "dialogue", id: "b1-04-terminal", reasonAr: "محاكاة خيالية لتأكيد موعد طبيب؛ اسأل العيادة الفعلية عن الوثائق المطلوبة، فبطاقة التأمين ليست قاعدة عامة. امتداد لغوي اختياري." },
    { kind: "podcast", id: "p-b1-gesundheit", reasonAr: "حلقة مسموعة تنسب توصية البالغين الأسبوعية بوضوح إلى منظمة الصحة العالمية؛ لا تقدّم نصيحة طبية فردية." },
  ],
  "b1-06": [
    { kind: "dialogue", id: "b1-09-ticket-kaufen", reasonAr: "حوار تدريبي خيالي عن شراء تذكرتَي حفلة؛ السعر والخصم افتراضيان، مع مفردات ثقافية عملية." },
    { kind: "story", id: "b1-familienfest", reasonAr: "قصة تدريبية خيالية لا تمثل ثقافة بعينها: احتفال عائلي وروابط زمنية (bevor, nachdem)." },
    { kind: "dialogue", id: "b1-14-kochen", reasonAr: "حوار تمثيلي عن وصفة يفضّلها متحدث خيالي؛ لا يعمم وصفة أو عادة على ثقافة كاملة." },
  ],
  "b1-07": [
    { kind: "dialogue", id: "b1-03-beschwerde", reasonAr: "امتداد اختياري للتدرّب على عرض اعتراض مهذّب؛ الحوار عن شكوى فندقية خيالية، وليس مادة عن السياسة أو الانتخابات." },
    { kind: "story", id: "b1-verein", reasonAr: "قصة تدريبية خيالية عن الانضمام إلى نادٍ رياضي؛ امتداد للمفردات الاجتماعية ومراجعة seit وobwohl، لا مصدر لمعلومات سياسية." },
  ],
  "b1-08": [
    { kind: "dialogue", id: "b1-05-probleme-loesen", reasonAr: "حوار تدريبي خيالي لحل مشكلة مع زميل؛ يتيح ممارسة الروابط الثنائية والحجاج، وليس شهادة عن واقعة حقيقية." },
    { kind: "story", id: "b1-umzug-ins-buero", reasonAr: "قصة تدريبية خيالية عن نقل مكتب؛ لممارسة Passiv ومفردات التنظيم الرقمي، لا تقريراً عن شركة حقيقية." },
    { kind: "podcast", id: "p-b1-homeoffice", reasonAr: "حلقة تدريبية خيالية عن العمل من المنزل تعرض رأيين شخصيين، لا مسحاً لسوق العمل؛ فيها zwar … aber ومفردات التواصل والفصل بين العمل ووقت الفراغ." }
  ],
  "b1-09": [
    { kind: "dialogue", id: "b1-10-nachhilfe", reasonAr: "حوار تدريبي خيالي عن طلب المساعدة الدراسية؛ السعر الوارد افتراضي." },
    { kind: "dialogue", id: "b1-11-panne", reasonAr: "محاكاة خيالية لتعطّل سيارة — لغة الاستغاثة؛ موعد السحب ليس ضماناً زمنياً." },
  ],
  "b1-10": [
    { kind: "story", id: "b1-wochenendausflug", reasonAr: "التخطيط لعطلة: Futur I (werden + Infinitiv) وجمل wenn الشرطية." },
    { kind: "dialogue", id: "b1-02-urlaub-planen", reasonAr: "التخطيط لإجازة الصيف — لغة الخطط والاتفاق." },
    { kind: "dialogue", id: "b1-15-wohnungswechsel", reasonAr: "إخبار صديق أنك ستنتقل — الحديث عن قرار مستقبلي." },
    { kind: "podcast", id: "p-b1-reisen", reasonAr: "حلقة تدريبية بعنوان «السفر أم البقاء في البيت؟»؛ آراء النص أمثلة وليست حقائق عامة أو نصائح بيئية موثقة." },
  ],
  "b1-12": [
    { kind: "story", id: "b1-neue-wohnung", reasonAr: "البحث عن شقة: weil/dass/wenn مع أسباب القرار — نفس منطق «لماذا؟» في الدرس." },
    { kind: "dialogue", id: "b1-12-geld", reasonAr: "حوار تدريبي خيالي عن الادخار والهدف من توفير المال؛ الحوار الحالي لا يتضمن تركيب um … zu صراحةً." },
    { kind: "story", id: "b1-verlorene-zeit", reasonAr: "قصة تعليمية خيالية عن الندم والتعلّم؛ صلة موضوعية بالأهداف، من دون تقديمها كشرح مباشر لـum … zu." },
    { kind: "story", id: "b1-lange-zugreise", reasonAr: "قصة تعليمية خيالية عن رحلة لينا والجمل الزمنية. تميّز während فيها بوصفها رابطاً لجملة زمنية عن حرف الجر während + Genitiv في هذا الدرس." },
  ],
  "b1-11": [
    { kind: "story", id: "b1-vorstellungsgespraech", reasonAr: "قصة خيالية عن مقابلة عمل، مع أمثلة على Konjunktiv II المهذّب؛ ليست محاكاة لامتحان رسمي." },
  ],

  /* ─────────────────────────── B2 ─────────────────────────── */
  "b2-01": [
    { kind: "story", id: "b2-forschungsprojekt", reasonAr: "بحث في الطاقة الشمسية: اللغة الأكاديمية والاشتقاق الاسمي." },
    { kind: "story", id: "b2-verhandlung", reasonAr: "مفاوضات بين شركتين: Konjunktiv I في نقل الكلام — جوهر هذا الدرس." },
    { kind: "dialogue", id: "b2-06-akademisch", reasonAr: "ندوة تمثيلية عن الذكاء الاصطناعي — عرض الرأي ومناقشة المخاطر والحلول." },
  ],
  "b2-02": [
    { kind: "story", id: "b2-startup", reasonAr: "قصة خيالية للتدرب على لغة الأعمال والمخاطرة والجمل الشرطية؛ أرقام النجاح فيها افتراضية." },
    { kind: "dialogue", id: "b2-11-verhandlung-kunde", reasonAr: "حوار تفاوضي خيالي للتدرب على لغة الأعمال؛ النسب والكمية ليست عرضاً تجارياً حقيقياً." },
    { kind: "podcast", id: "p-b2-globalisierung", reasonAr: "نقاش عام يدرّب على موازنة الرأي؛ ليس تقريراً اقتصادياً أو مصدراً لبيانات فعلية." },
  ],
  "b2-03": [
    { kind: "dialogue", id: "b2-07-bewerbung-vertrag", reasonAr: "محاكاة خيالية لمراجعة مسودة عقد عمل؛ مدد التجربة والإنهاء في الحوار ليست قاعدة عامة أو استشارة قانونية." },
    { kind: "dialogue", id: "b2-09-wohnungsvertrag", reasonAr: "موقف تدريبي خيالي عن عطل تدفئة؛ استحقاق تخفيض الإيجار أو غيره يعتمد على الوقائع والقواعد المطبقة، وليس الحوار نصيحة قانونية." },
    { kind: "dialogue", id: "b2-05-pass-verloren", reasonAr: "محاكاة خيالية لفقدان جواز؛ إجراءات البلاغ والبديل تختلف باختلاف جهة الإصدار والبلد والبعثة، ويجب التحقق من الجهة المختصة." },
    { kind: "dialogue", id: "b2-13-flug", reasonAr: "محاكاة خيالية لإلغاء رحلة؛ إعادة الحجز والتعويض والحقوق الأخرى تتوقف على المسار ووقت الإبلاغ وسبب الإلغاء والقواعد المنطبقة." },
  ],
  "b2-04": [
    { kind: "story", id: "b2-kunstausstellung", reasonAr: "ناقد يحلّل معرضاً: أوصاف الفنون والصفات الوصفية الطويلة." },
    { kind: "story", id: "b2-medienkritik", reasonAr: "نقاش موثوقية الأخبار: اللغة النقدية والروابط المتقدمة." },
    { kind: "dialogue", id: "b2-14-medien", reasonAr: "نقاش مع زملاء عن موثوقية الأخبار — نقد الإعلام شفهياً." },
  ],
  "b2-11": [
    { kind: "story", id: "b2-erste-arbeitstag", reasonAr: "أول يوم عمل لنورا: جمل مركّبة طويلة وجمل الغرض — أرضية جيدة لملاحظة مرجع الضمير في السياق." },
    { kind: "dialogue", id: "b2-02-teambesprechung", reasonAr: "اجتماع فريق: جمل متداخلة تُتابَع فيها مراجع الضمائر والمِلكية." },
  ],
  "b2-05": [
    { kind: "dialogue", id: "b2-03-konflikt", reasonAr: "إدارة خلاف مع زميل — أدوات الكلام (Modalpartikeln) ولغة التلطيف." },
    { kind: "story", id: "b2-kulturelle-differenzen", reasonAr: "اختلافات ثقافية في العمل: التواصل وسوء الفهم." },
    { kind: "podcast", id: "p-b2-work-life-balance", reasonAr: "حلقة «التوازن بين العمل والحياة» — لغة نفسية اجتماعية." },
  ],
  "b2-06": [
    { kind: "dialogue", id: "b2-01-gehaltsverhandlung", reasonAr: "التفاوض على الراتب — التبرير بالأسباب والتدرّج في الحجّة." },
    { kind: "story", id: "b2-bewerbungsgespraech", reasonAr: "مقابلة ناجحة: Konjunktiv II الماضي ولغة المقابلات." },
    { kind: "dialogue", id: "b2-08-praesentation", reasonAr: "التحضير لعرض تقديمي — بناء خطاب منظّم." },
  ],
  "b2-07": [
    { kind: "story", id: "b2-zukunft-arbeit", reasonAr: "قصة تدريبية متخيّلة تعرض آراءً عن مستقبل العمل، وتتضمن Futur II دون ادعاء أنها توقعات خبراء موثقة." },
    { kind: "podcast", id: "p-b2-digitalisierung", reasonAr: "حلقة «الرقمنة في الحياة اليومية» — توقّعات وتحليل." },
    { kind: "podcast", id: "p-b2-kuenstliche-intelligenz", reasonAr: "حلقة «الذكاء الاصطناعي في العمل» — مادة خام لمقال الإرشتيرونغ." },
  ],
  "b2-08": [
    { kind: "story", id: "b2-integration", reasonAr: "حكاية تدريبية خيالية عن تجربة فردية؛ تعرض أفعال حروف الجر ولا تقدم نصيحة عامة للمهاجرين." },
    { kind: "story", id: "b2-umzug-muenchen", reasonAr: "حكاية خيالية محددة عن ياسمين؛ أمثلتها عن اللهجة والاستمارات تخص تجربتها ولا تعمم على ميونخ أو بافاريا." },
    { kind: "dialogue", id: "b2-10-international", reasonAr: "محاكاة خيالية لاجتماع فريق؛ عُدلت لتتناول خبرة الزميلة المهنية لا أن تمثل ثقافة بلدها." },

    { kind: "podcast", id: "p-b2-migration", reasonAr: "مشهد خيالي عن تجربة سميرة الفردية مع الهوية والانتماء؛ لا يمثل نتائج بحثية أو تجارب الجميع. التسجيل لم يُحدّث أو يُطابق بالنص." },
  ],
  "b2-09": [
    { kind: "story", id: "b2-bewerbung", reasonAr: "ألبرشت يتقدّم لمنصب: المراسلات الرسمية والسيرة الذاتية." },
    { kind: "story", id: "b2-homeoffice-kultur", reasonAr: "نقاش مستقبل العمل عن بُعد: Konjunktiv I ولغة الأعمال." },
    { kind: "dialogue", id: "b2-15-umzug-firma", reasonAr: "تنظيم نقل شركة — لغة إدارية تطبيقية." },
  ],
  "b2-10": [
    { kind: "story", id: "b2-konferenz", reasonAr: "محاضرة أكاديمية وأسئلة الجمهور: العرض الرسمي والربط المتقدم." },
    { kind: "story", id: "b2-nachhaltigkeit", reasonAr: "مشروع مدينة مستدامة: الاشتقاق الاسمي والمبني للمجهول المتقدم." },
    { kind: "dialogue", id: "b2-04-notfall", reasonAr: "الاتصال بالطوارئ (112) — معلومة حياتية لا غنى عنها لمن يدرس في ألمانيا." },
    { kind: "dialogue", id: "b2-12-arzt-spezialist", reasonAr: "شرح أعراض معقّدة لطبيب متخصص — لغة دقيقة في موقف ضاغط." },
    { kind: "podcast", id: "p-b2-gesunde-ernaehrung", reasonAr: "حلقة «التغذية الصحية» — استماع أكاديمي مبسّط." },
  ],
};

/** الموارد الرديفة لدرس (مصفوفة فارغة إن لم تُربط) */
export function getRelatedResources(lessonId: string): RelatedResource[] {
  return LESSON_RELATED_RESOURCES[lessonId] ?? [];
}

/* ═══ العناوين المعروضة — تُقرأ من المكتبات نفسها لا تُكرَّر يدوياً ═══ */

export interface ResolvedRelatedResource extends RelatedResource {
  titleDe: string;
  titleAr: string;
  emoji: string;
  level: string;
  /** رابط يفتح المورد نفسه مباشرةً (لا مجرّد المكتبة) */
  href: string;
}

const KIND_HREF: Record<RelatedResourceKind, string> = {
  story: "/stories",
  dialogue: "/dialogues",
  podcast: "/podcasts",
};

/**
 * يحوّل مراجع الموارد إلى بيانات عرض كاملة بقراءة المكتبة الأصلية.
 * المورد المفقود يُسقط بصمت في الواجهة (والاختبار يمنع حدوث ذلك أصلاً).
 */
export function resolveRelatedResources(lessonId: string): ResolvedRelatedResource[] {
  return getRelatedResources(lessonId).flatMap((ref) => {
    if (ref.kind === "story") {
      const s = INTERACTIVE_STORIES.find((x) => x.id === ref.id);
      if (!s) return [];
      return [{ ...ref, titleDe: s.title, titleAr: s.titleAr, emoji: s.emoji, level: s.level, href: `${KIND_HREF.story}?open=${s.id}` }];
    }
    if (ref.kind === "dialogue") {
      const d = DAILY_DIALOGUES.find((x) => x.id === ref.id);
      if (!d) return [];
      return [{ ...ref, titleDe: d.titleDe, titleAr: d.title, emoji: d.emoji, level: d.level, href: `${KIND_HREF.dialogue}?open=${d.id}` }];
    }
    const p = PODCASTS.find((x) => x.id === ref.id);
    if (!p) return [];
    return [{ ...ref, titleDe: p.title, titleAr: p.titleAr, emoji: p.emoji, level: p.level, href: `${KIND_HREF.podcast}?open=${p.id}` }];
  });
}

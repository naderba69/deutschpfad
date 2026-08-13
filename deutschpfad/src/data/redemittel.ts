/**
 * ═══════════════════════════════════════════════════════════
 *  بنك العبارات الامتحانية (Redemittel) — A2 → B2
 *  العبارات الجاهزة التي يحتاجها المتعلم في امتحانات Goethe:
 *  إبداء الرأي، الموافقة، الاعتراض، الاقتراح، التعليل، العرض،
 *  المناقشة، الرسالة الرسمية، مشاركة المنتدى... إلخ.
 *  — أضيفت في تدقيق المرحلة النهائية (جوهري لشهادة B2) —
 * ═══════════════════════════════════════════════════════════
 */

export interface Redemittel {
  id: string;
  /** الوظيفة التواصلية (فئة العرض) */
  category: string;
  /** العبارة الألمانية */
  de: string;
  /** المعنى بالعربية */
  ar: string;
  /** متى تستخدمها (سياق) */
  usage: string;
  /** المستوى المستهدف */
  level: "A2" | "B1" | "B2";
}

export const REDEMITTEL_CATEGORIES: { id: string; label: string; icon: string; examSection: string }[] = [
  { id: "meinung", label: "إبداء الرأي", icon: "💬", examSection: "Sprechen + Schreiben" },
  { id: "zustimmen", label: "الموافقة", icon: "👍", examSection: "Diskussion" },
  { id: "widersprechen", label: "الاعتراض", icon: "👎", examSection: "Diskussion" },
  { id: "vorschlag", label: "الاقتراح", icon: "💡", examSection: "Sprechen Teil 2" },
  { id: "begruenden", label: "التعليل", icon: "🧠", examSection: "الكل" },
  { id: "beispiel", label: "الأمثلة", icon: "📌", examSection: "الكل" },
  { id: "folge", label: "النتائج", icon: "➡️", examSection: "Schreiben" },
  { id: "einschraenken", label: "التحفظ والتوازن", icon: "⚖️", examSection: "Erörterung" },
  { id: "praesentation", label: "هيكلة العرض", icon: "🎤", examSection: "Vortrag B2" },
  { id: "diskussion", label: "إدارة المناقشة", icon: "🗣️", examSection: "Diskussion" },
  { id: "email", label: "الرسالة الرسمية", icon: "✉️", examSection: "Schreiben Teil 2" },
  { id: "forum", label: "مشاركة المنتدى", icon: "💻", examSection: "Schreiben Teil 1" },
  { id: "hoeflichkeit", label: "المجاملة واللباقة", icon: "🤝", examSection: "الكل" },
  { id: "struktur", label: "ربط الأفكار", icon: "🔗", examSection: "الكل" },
];

export const REDEMITTEL: Redemittel[] = [
  /* ── إبداء الرأي ── */
  { id: "rm-meinung-1", category: "meinung", de: "Meiner Meinung nach ...", ar: "في رأيي ...", usage: "أشهر صيغة لإبداء الرأي — تليها الجملة مباشرة (الفعل ثانياً).", level: "A2" },
  { id: "rm-meinung-2", category: "meinung", de: "Ich bin der Ansicht, dass ...", ar: "أنا على رأي أن ...", usage: "أكثر رسمية من Meiner Meinung nach — متبوعة بجملة ثانوية (فعل في النهاية).", level: "B1" },
  { id: "rm-meinung-3", category: "meinung", de: "Meines Erachtens ist das Problem größer als gedacht.", ar: "في تقديري المشكلة أكبر مما يُظن.", usage: "رسمية جداً (كتابية/أكاديمية) — تناسب B2 Schreiben.", level: "B2" },
  { id: "rm-meinung-4", category: "meinung", de: "Ich vertrete die Auffassung, dass ...", ar: "أنا أتبنى الرأي القائل بأن ...", usage: "قوية ورسمية — جملة ثانوية بعدها.", level: "B2" },
  { id: "rm-meinung-5", category: "meinung", de: "Ich finde es wichtig, dass ... / Ich finde es schade, dass ...", ar: "أجد من المهم أن ... / أجد من المؤسف أن ...", usage: "لطيفة وعملية — مع صفة بعد finde.", level: "A2" },
  { id: "rm-meinung-6", category: "meinung", de: "Aus meiner Sicht gibt es hier zwei Möglichkeiten.", ar: "من وجهة نظري توجد هنا إمكانيتان.", usage: "تمهيد راقٍ لتحليل — من وجهة نظري.", level: "B1" },
  { id: "rm-meinung-7", category: "meinung", de: "Ich möchte dazu Folgendes sagen: ...", ar: "أود أن أقول بشأن ذلك ما يلي: ...", usage: "تمهيد لموقف في المناقشة أو المنتدى.", level: "B1" },

  /* ── الموافقة ── */
  { id: "rm-zustimmen-1", category: "zustimmen", de: "Da stimme ich Ihnen vollkommen zu.", ar: "هنا أوافقك الرأي تماماً.", usage: "أشهر صيغة موافقة رسمية — انتبه: Ihnen (مع Sie).", level: "B1" },
  { id: "rm-zustimmen-2", category: "zustimmen", de: "Das sehe ich genauso.", ar: "أرى ذلك بالضبط.", usage: "موافقة ودية — تستخدم في الحوار.", level: "B1" },
  { id: "rm-zustimmen-3", category: "zustimmen", de: "Ich teile Ihre Meinung.", ar: "أشاركك الرأي.", usage: "أدبية — رسمية.", level: "B2" },
  { id: "rm-zustimmen-4", category: "zustimmen", de: "Da haben Sie (völlig) recht.", ar: "أنت محق (تماماً) هنا.", usage: "بسيطة ومؤثرة — recht (بلا حرف تعريف!).", level: "A2" },
  { id: "rm-zustimmen-5", category: "zustimmen", de: "Dem kann ich nur zustimmen.", ar: "لا يسعني إلا الموافقة على ذلك.", usage: "موافقة قوية — dem = ذلك (جر).", level: "B2" },
  { id: "rm-zustimmen-6", category: "zustimmen", de: "Sie haben einen guten Punkt. Das ist ein wichtiger Aspekt.", ar: "عندك نقطة جيدة. هذا جانب مهم.", usage: "اعتراف ثم بناء عليه — مهارة نقاش متقدمة.", level: "B2" },

  /* ── الاعتراض ── */
  { id: "rm-widersprechen-1", category: "widersprechen", de: "Da muss ich Ihnen widersprechen.", ar: "هنا يجب أن أعترض عليك.", usage: "أشهر صيغة اعتراض رسمية مهذبة.", level: "B1" },
  { id: "rm-widersprechen-2", category: "widersprechen", de: "Das sehe ich anders.", ar: "أرى الأمر بشكل مختلف.", usage: "اعتراض لطيف من دون مواجهة.", level: "B1" },
  { id: "rm-widersprechen-3", category: "widersprechen", de: "Ich bin da anderer Meinung.", ar: "أنا هنا برأي مختلف.", usage: "واضح ومهذب — anderer Meinung sein.", level: "B1" },
  { id: "rm-widersprechen-4", category: "widersprechen", de: "Da bin ich nicht ganz einverstanden, denn ...", ar: "أنا لست موافقاً تماماً هنا، لأن ...", usage: "اعتراض جزئي مع تعليل — ذكاء نقاشي.", level: "B2" },
  { id: "rm-widersprechen-5", category: "widersprechen", de: "Ich sehe das ein, aber trotzdem ...", ar: "أتفهم ذلك، لكن رغم ذلك ...", usage: "اعتراض «نعم... لكن» — الأقوى في النقاش.", level: "B2" },
  { id: "rm-widersprechen-6", category: "widersprechen", de: "Verzeihen Sie, aber da muss ich widersprechen.", ar: "اعذرني، لكن هنا يجب أن أعترض.", usage: "مهذبة جداً — ممتازة لفتح الاعتراض.", level: "B2" },

  /* ── الاقتراح ── */
  { id: "rm-vorschlag-1", category: "vorschlag", de: "Ich schlage vor, dass wir ...", ar: "أقترح أن نقوم بـ ...", usage: "أشهر صيغة اقتراح — جملة ثانوية.", level: "B1" },
  { id: "rm-vorschlag-2", category: "vorschlag", de: "Man könnte ... / Man sollte ...", ar: "يمكن للمرء أن ... / ينبغي للمرء أن ...", usage: "اقتراح عام (man) — سهل ومفيد جداً.", level: "A2" },
  { id: "rm-vorschlag-3", category: "vorschlag", de: "Es wäre sinnvoll, wenn wir ...", ar: "سيكون من الحكمة لو قمنا بـ ...", usage: "اقتراح مهذب بـ Konjunktiv II — علامة B1+.", level: "B1" },
  { id: "rm-vorschlag-4", category: "vorschlag", de: "Ich würde empfehlen, ... zu ...", ar: "أنصح بـ ...", usage: "رسمية راقية — مع zu + مصدر.", level: "B2" },
  { id: "rm-vorschlag-5", category: "vorschlag", de: "Was halten Sie davon, wenn wir ...?", ar: "ما رأيك لو قمنا بـ ...؟", usage: "اقتراح بشكل سؤال — يستفز النقاش.", level: "B1" },
  { id: "rm-vorschlag-6", category: "vorschlag", de: "Eine Alternative wäre, ...", ar: "البديل سيكون ...", usage: "تقديم بديل — جملة اسمية بعدها.", level: "B2" },

  /* ── التعليل ── */
  { id: "rm-begruenden-1", category: "begruenden", de: "Der Grund dafür ist, dass ...", ar: "السبب في ذلك أن ...", usage: "تعليل رسمي — الفعل في النهاية.", level: "B1" },
  { id: "rm-begruenden-2", category: "begruenden", de: "Das liegt daran, dass ...", ar: "يعود ذلك إلى أن ...", usage: "تعليل سببي جميل — daran liegt es.", level: "B1" },
  { id: "rm-begruenden-3", category: "begruenden", de: "Aus diesem Grund finde ich ...", ar: "لهذا السبب أجد ...", usage: "ربط السبب بالنتيجة — كلاسيكية الامتحان.", level: "A2" },
  { id: "rm-begruenden-4", category: "begruenden", de: "Das erklärt, warum ...", ar: "هذا يفسر لماذا ...", usage: "تحليل — مناسبة للكتابة.", level: "B2" },
  { id: "rm-begruenden-5", category: "begruenden", de: "Denn ... (Die Lösung ist gut, denn sie ist billig.)", ar: "لأن ... (الحل جيد لأنه رخيص)", usage: "سبب بعد الجملة — الفعل ثانٍ (لا نهاية!).", level: "A2" },
  { id: "rm-begruenden-6", category: "begruenden", de: "Aufgrund der steigenden Kosten ...", ar: "بسبب التكاليف المتصاعدة ...", usage: "تعليل اسمي رسمي (wegen + Genitiv بديل) — B2.", level: "B2" },

  /* ── الأمثلة ── */
  { id: "rm-beispiel-1", category: "beispiel", de: "Zum Beispiel ... / So zum Beispiel ...", ar: "على سبيل المثال ...", usage: "أشهر أداة أمثلة.", level: "A2" },
  { id: "rm-beispiel-2", category: "beispiel", de: "Ein gutes Beispiel dafür ist ...", ar: "مثال جيد على ذلك هو ...", usage: "مثال موثق — ترتيب راقٍ.", level: "B1" },
  { id: "rm-beispiel-3", category: "beispiel", de: "Nehmen wir das Beispiel der ...", ar: "لنأخذ مثال ...", usage: "يدعو المستمع للمشاركة الذهنية.", level: "B2" },
  { id: "rm-beispiel-4", category: "beispiel", de: "Das zeigt sich zum Beispiel daran, dass ...", ar: "يظهر ذلك مثلاً في أن ...", usage: "ربط المثال بالحجة — تحليل B2.", level: "B2" },

  /* ── النتائج ── */
  { id: "rm-folge-1", category: "folge", de: "Daraus folgt, dass ...", ar: "يترتب على ذلك أن ...", usage: "النتيجة المنطقية — جملة ثانوية.", level: "B1" },
  { id: "rm-folge-2", category: "folge", de: "Das führt dazu, dass ...", ar: "يؤدي ذلك إلى أن ...", usage: "سلسلة سبب-نتيجة — محبوبة في الكتابة.", level: "B1" },
  { id: "rm-folge-3", category: "folge", de: "Die Folge ist, dass ...", ar: "النتيجة أن ...", usage: "مباشرة وواضحة.", level: "B1" },
  { id: "rm-folge-4", category: "folge", de: "Als Konsequenz daraus ...", ar: "كنتيجة لذلك ...", usage: "رسمية — B2.", level: "B2" },

  /* ── التحفظ والتوازن ── */
  { id: "rm-einschraenken-1", category: "einschraenken", de: "Einerseits ..., andererseits ...", ar: "من ناحية ... ومن ناحية أخرى ...", usage: "أشهر أداة التوازن — لا تنساها في المقال!", level: "B1" },
  { id: "rm-einschraenken-2", category: "einschraenken", de: "In gewissem Maße stimme ich zu.", ar: "إلى حد ما أوافق.", usage: "موافقة مشروطة — B2.", level: "B2" },
  { id: "rm-einschraenken-3", category: "einschraenken", de: "Das hängt davon ab, ob ...", ar: "ذلك يعتمد على ما إذا ...", usage: "إجابة دبلوماسية — je nachdem.", level: "B2" },
  { id: "rm-einschraenken-4", category: "einschraenken", de: "Es kommt darauf an, wie man es betrachtet.", ar: "يتوقف الأمر على كيف تنظر إليه.", usage: "تحفظ ذكي — يظهر نضجاً.", level: "B2" },
  { id: "rm-einschraenken-5", category: "einschraenken", de: "Einerseits hat es Vorteile, andererseits gibt es auch Nachteile.", ar: "من ناحية له مزايا ومن ناحية أخرى توجد عيوب.", usage: "جملة التوازن الكاملة — احفظها حرفياً!", level: "B1" },

  /* ── هيكلة العرض (Vortrag B2) ── */
  { id: "rm-praesentation-1", category: "praesentation", de: "Ich möchte heute über das Thema ... sprechen.", ar: "أود اليوم أن أتحدث عن موضوع ...", usage: "افتتاح العرض الرسمي (B2 Teil 1).", level: "B2" },
  { id: "rm-praesentation-2", category: "praesentation", de: "Mein Vortrag besteht aus drei Teilen.", ar: "يتكون عرضي من ثلاثة أجزاء.", usage: "إعلان الهيكل — يعطي انطباع تنظيم.", level: "B2" },
  { id: "rm-praesentation-3", category: "praesentation", de: "Zuerst möchte ich über die Situation sprechen, danach über die Ursachen und schließlich über Lösungen.", ar: "أولاً أتحدث عن الوضع، ثم عن الأسباب، وأخيراً عن الحلول.", usage: "هيكل كامل جاهز — ثلاث خطوات ذهبية.", level: "B2" },
  { id: "rm-praesentation-4", category: "praesentation", de: "Kommen wir nun zum nächsten Punkt.", ar: "ننتقل الآن إلى النقطة التالية.", usage: "انتقال سلس داخل العرض.", level: "B2" },
  { id: "rm-praesentation-5", category: "praesentation", de: "Zusammenfassend kann man sagen, dass ...", ar: "خلاصة القول يمكن القول إن ...", usage: "الخاتمة الأهم — لا تنهِ عرضاً بدونها!", level: "B1" },
  { id: "rm-praesentation-6", category: "praesentation", de: "Vielen Dank für Ihre Aufmerksamkeit.", ar: "شكراً جزيلاً على انتباهكم.", usage: "إنهاء العرض المهذب — ختام إلزامي.", level: "B2" },
  { id: "rm-praesentation-7", category: "praesentation", de: "Darf ich noch kurz etwas zu ... sagen?", ar: "هل أستطيع أن أضيف شيئاً باختصار عن ...؟", usage: "إضافة مرتجلة خلال العرض.", level: "B2" },

  /* ── إدارة المناقشة ── */
  { id: "rm-diskussion-1", category: "diskussion", de: "Darf ich kurz etwas dazu sagen?", ar: "هل أستطيع قول شيء باختصار بشأن ذلك؟", usage: "طلب الكلام بأدب — B2 Diskussion.", level: "B2" },
  { id: "rm-diskussion-2", category: "diskussion", de: "Wie sehen Sie das?", ar: "كيف ترى ذلك؟", usage: "سؤال يشرك الشريك — ضروري للنقاش.", level: "B1" },
  { id: "rm-diskussion-3", category: "diskussion", de: "Könnten Sie das bitte genauer erklären?", ar: "هل يمكنك توضيح ذلك أكثر؟", usage: "طلب توضيح — يُظهر إنصاتاً.", level: "B2" },
  { id: "rm-diskussion-4", category: "diskussion", de: "Ich verstehe Ihren Standpunkt, aber ...", ar: "أتفهم وجهة نظرك، لكن ...", usage: "الانتقال من الفهم إلى الاعتراض — ذهبي.", level: "B2" },
  { id: "rm-diskussion-5", category: "diskussion", de: "Dazu möchte ich Folgendes sagen: ...", ar: "أود أن أقول بشأن ذلك ما يلي: ...", usage: "تمهيد للموقف.", level: "B1" },
  { id: "rm-diskussion-6", category: "diskussion", de: "Sind wir uns darüber einig, dass ...?", ar: "هل نتفق على أن ...؟", usage: "بحث توافق — يظهر قيادة الحوار.", level: "B2" },

  /* ── الرسالة الرسمية ── */
  { id: "rm-email-1", category: "email", de: "Sehr geehrte Damen und Herren,", ar: "حضرات السيدات والسادة،", usage: "افتتاح رسمي بلا اسم — أأمن افتتاح.", level: "B1" },
  { id: "rm-email-2", category: "email", de: "Ich schreibe Ihnen, weil ich mich über ... beschweren möchte.", ar: "أكتب إليكم لأنني أريد أن أشتكي من ...", usage: "رسالة شكوى — B2 Schreiben Teil 2.", level: "B2" },
  { id: "rm-email-3", category: "email", de: "Ich wende mich an Sie, um nach ... zu fragen.", ar: "أتوجه إليكم لأستفسر عن ...", usage: "رسالة استفسار — um...zu.", level: "B2" },
  { id: "rm-email-4", category: "email", de: "Ich bitte Sie höflich, das Problem zu lösen.", ar: "أطلب منكم بأدب حل المشكلة.", usage: "طلب رسمي بأدب — أساسي في الشكوى.", level: "B2" },
  { id: "rm-email-5", category: "email", de: "Ich wäre Ihnen dankbar, wenn Sie ...", ar: "سأكون ممتناً لكم لو قمتم بـ ...", usage: "طلب مهذب جداً بـ Konjunktiv II.", level: "B2" },
  { id: "rm-email-6", category: "email", de: "Mit freundlichen Grüßen", ar: "مع أطيب التحيات", usage: "الخاتمة الرسمية الوحيدة الصحيحة — لا تنسَها!", level: "B1" },
  { id: "rm-email-7", category: "email", de: "Anbei finden Sie ...", ar: "تجدون مرفقاً ...", usage: "للإشارة إلى المرفقات.", level: "B2" },

  /* ── مشاركة المنتدى ── */
  { id: "rm-forum-1", category: "forum", de: "Ich habe den Beitrag gelesen und möchte meine Meinung dazu äußern.", ar: "قرأت المشاركة وأود إبداء رأيي فيها.", usage: "افتتاح Forumsbeitrag — B2 Schreiben Teil 1.", level: "B2" },
  { id: "rm-forum-2", category: "forum", de: "Das Thema finde ich sehr aktuell, denn ...", ar: "أجد الموضوع في غاية الراهنية، لأن ...", usage: "انطلاق لطيف ثم سبب.", level: "B1" },
  { id: "rm-forum-3", category: "forum", de: "In meinem Land ist die Situation ähnlich/anders.", ar: "في بلدي الوضع مشابه/مختلف.", usage: "إضافة تجربة شخصية — يرفع الدرجة!", level: "B1" },
  { id: "rm-forum-4", category: "forum", de: "Was die anderen Teilnehmer geschrieben haben, finde ich interessant. Besonders der Beitrag von ...", ar: "ما كتبه المشاركون الآخرون مثير للاهتمام. خاصة مشاركة ...", usage: "الرد على مشاركة سابقة — مطلوب حرفياً في الامتحان!", level: "B2" },
  { id: "rm-forum-5", category: "forum", de: "Abschließend möchte ich sagen, dass ...", ar: "ختاماً أود أن أقول إن ...", usage: "خاتمة المنتدى.", level: "B1" },

  /* ── المجاملة واللباقة ── */
  { id: "rm-hoeflichkeit-1", category: "hoeflichkeit", de: "Vielen Dank für Ihre Hilfe / Ihre Rückmeldung.", ar: "شكراً جزيلاً لمساعدتكم / ردكم.", usage: "شكر رسمي.", level: "A2" },
  { id: "rm-hoeflichkeit-2", category: "hoeflichkeit", de: "Es freut mich, dass wir uns heute austauschen können.", ar: "يسعدني أننا نستطيع تبادل الأفكار اليوم.", usage: "افتتاح لطيف للمناقشة.", level: "B2" },
  { id: "rm-hoeflichkeit-3", category: "hoeflichkeit", de: "Darf ich Sie um einen Gefallen bitten?", ar: "هل أستطيع أن أطلب منك معروفاً؟", usage: "طلب خدمة بأدب.", level: "B1" },
  { id: "rm-hoeflichkeit-4", category: "hoeflichkeit", de: "Entschuldigen Sie die Störung.", ar: "اعذرني على الإزعاج.", usage: "اعتذار تمهيدي — في المكالمات.", level: "B1" },
  { id: "rm-hoeflichkeit-5", category: "hoeflichkeit", de: "Es tut mir leid, aber ich muss leider absagen.", ar: "آسف، لكن علي للأسف الاعتذار.", usage: "اعتذار رسمي عن موعد.", level: "B1" },

  /* ── ربط الأفكار ── */
  { id: "rm-struktur-1", category: "struktur", de: "Zuerst ... dann ... danach ... schließlich ...", ar: "أولاً ... ثم ... بعد ذلك ... أخيراً ...", usage: "سلسلة زمنية/ترتيبية — هيكل أي نص.", level: "A2" },
  { id: "rm-struktur-2", category: "struktur", de: "Außerdem ... / Darüber hinaus ...", ar: "بالإضافة إلى ذلك ... / وعلاوة على ذلك ...", usage: "إضافة أفكار — لا تكرر «و»!", level: "B1" },
  { id: "rm-struktur-3", category: "struktur", de: "Im Gegensatz dazu ...", ar: "على النقيض من ذلك ...", usage: "مقابلة الأفكار.", level: "B1" },
  { id: "rm-struktur-4", category: "struktur", de: "Trotzdem ... / Nichtsdestotrotz ...", ar: "رغم ذلك ... / على الرغم من ذلك ...", usage: "مفارقة — الثانية رسمية جداً (B2).", level: "B1" },
  { id: "rm-struktur-5", category: "struktur", de: "Was ... betrifft, so ...", ar: "بخصوص ... فإن ...", usage: "توجيه الحديث لموضوع محدد.", level: "B2" },
  { id: "rm-struktur-6", category: "struktur", de: "Kurz gesagt / Mit anderen Worten ...", ar: "باختصار / بعبارة أخرى ...", usage: "إعادة صياغة للتوضيح.", level: "B2" },
];

/** كل عبارات فئة معينة */
export function getRedemittelByCategory(category: string): Redemittel[] {
  return REDEMITTEL.filter((r) => r.category === category);
}

/** بحث نصي في العبارات */
export function searchRedemittel(query: string): Redemittel[] {
  const q = query.trim().toLowerCase();
  if (!q) return REDEMITTEL;
  return REDEMITTEL.filter(
    (r) =>
      r.de.toLowerCase().includes(q) ||
      r.ar.includes(q) ||
      r.usage.includes(q) ||
      r.category.includes(q),
  );
}

export const TOTAL_REDEMITTEL = REDEMITTEL.length;

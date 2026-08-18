import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  مسار الكتابة المتدرج ✍️ — من الجملة إلى المقال
 *  4 مراحل تصاعدية: جملة ← فقرة ← رسالة رسمية ← مقال
 *  كل مهمة تُقيَّم آلياً بقواعد Goethe (evaluateWriting)
 * ═══════════════════════════════════════════════════════════
 */

export type WritingStage = "sentence" | "paragraph" | "letter" | "essay" | "translation";

export interface WritingTask {
  id: string;
  level: LevelCode;
  stage: WritingStage;
  title: string;
  /** المطلوب من المتعلم (بالعربية) */
  promptAr: string;
  /** نموذج للإلهام (بالألمانية) */
  exampleDe: string;
  /** نوع المهمة لمقيّم Goethe */
  taskType: "Forumsbeitrag" | "formelle E-Mail" | "Meinung" | "Übersetzung";
  /** الحد الأدنى من الكلمات */
  minWords: number;
  /** عناصر مطلوبة */
  requires: string[];
  /** مفردات مساعدة */
  hilfen: string[];
}

export const WRITING_TASKS: WritingTask[] = [
  /* ═══ المرحلة 1: الجملة (A1) ═══ */
  {
    id: "w-s1-a1",
    level: "A1",
    stage: "sentence",
    title: "عرّف عن نفسك في 3 جمل",
    promptAr: "اكتب 3 جمل عن نفسك: اسمك، من أين أنت، وماذا تحب. استخدم Ich bin / Ich komme / Ich mag.",
    exampleDe: "Ich bin Sami. Ich komme aus Tunesien. Ich mag Musik und Fußball.",
    taskType: "Meinung",
    minWords: 12,
    requires: ["bin", "komme", "mag"],
    hilfen: ["Ich heiße…", "Ich wohne in…", "Mein Hobby ist…"],
  },
  {
    id: "w-s1-a1b",
    level: "A1",
    stage: "sentence",
    title: "صف يومك",
    promptAr: "اكتب 3 جمل عن يومك: متى تستيقظ، ماذا تأكل، ومتى تنام. استخدم um + الوقت.",
    exampleDe: "Ich stehe um sieben Uhr auf. Ich esse Brot und Käse. Ich schlafe um zehn Uhr.",
    taskType: "Meinung",
    minWords: 12,
    requires: ["um", "Uhr"],
    hilfen: ["am Morgen", "am Mittag", "am Abend"],
  },
  /* ═══ المرحلة 2: الفقرة (A2) ═══ */
  {
    id: "w-s2-a2",
    level: "A2",
    stage: "paragraph",
    title: "حدث عن عطلة نهاية أسبوعك (فقرة)",
    promptAr: "اكتب فقرة (5-6 جمل) عن عطلة نهاية الأسبوع الماضية باستخدام الماضي التام (Perfekt): ماذا فعلت؟ أين كنت؟ مع من؟",
    exampleDe: "Am Wochenende bin ich mit Freunden ins Kino gegangen. Wir haben einen lustigen Film gesehen. Danach haben wir Pizza gegessen. Am Sonntag habe ich zu Hause gelernt und Musik gehört.",
    taskType: "Meinung",
    minWords: 40,
    requires: ["bin", "habe", "gegangen"],
    hilfen: ["ich bin … gegangen", "wir haben …", "danach"],
  },
  {
    id: "w-s2-a2b",
    level: "A2",
    stage: "paragraph",
    title: "وصف مدينتك",
    promptAr: "اكتب فقرة عن مدينتك: أين هي؟ ماذا يوجد فيها؟ لماذا تحبها؟ استخدم es gibt.",
    exampleDe: "Meine Stadt ist klein und ruhig. Es gibt einen großen Markt und einen schönen Park. Die Leute sind freundlich. Ich liebe meine Stadt, weil sie sicher ist.",
    taskType: "Meinung",
    minWords: 40,
    requires: ["es gibt"],
    hilfen: ["im Zentrum", "am Rand", "viele Läden"],
  },
  /* ═══ المرحلة 3: الرسالة الرسمية (B1) ═══ */
  {
    id: "w-s3-b1",
    level: "B1",
    stage: "letter",
    title: "رسالة شكوى رسمية",
    promptAr: "اكتب رسالة شكوى رسمية (formelle E-Mail) لشركة: طلبت منتجاً ولم يصلك. افتح بـ Sehr geehrte Damen und Herren، واشرح المشكلة، واطلب حلاً، واختم بـ Mit freundlichen Grüßen.",
    exampleDe: "Sehr geehrte Damen und Herren, ich habe am 1. Juli einen Laptop bei Ihnen bestellt. Leider ist er noch nicht angekommen. Ich möchte Sie bitten, die Lieferung zu prüfen. Mit freundlichen Grüßen, Sami Ben Ali",
    taskType: "formelle E-Mail",
    minWords: 60,
    requires: ["Sehr geehrte", "Mit freundlichen Grüßen"],
    hilfen: ["leider", "ich möchte Sie bitten", "vielen Dank"],
  },
  {
    id: "w-s3-b1b",
    level: "B1",
    stage: "letter",
    title: "رسالة اعتذار في العمل",
    promptAr: "اكتب رسالة رسمية لرئيسك تعتذر فيها عن تأخرك عن موعد وتسأل عن موعد بديل. استخدم صيغاً مهذبة (Konjunktiv II).",
    exampleDe: "Sehr geehrter Herr Weber, ich möchte mich entschuldigen, dass ich den Termin am Montag nicht wahrnehmen konnte. Könnten wir einen neuen Termin vereinbaren? Ich würde mich über eine Antwort freuen. Mit freundlichen Grüßen",
    taskType: "formelle E-Mail",
    minWords: 60,
    requires: ["entschuldigen", "Mit freundlichen Grüßen"],
    hilfen: ["würde", "könnte", "vielen Dank für Ihr Verständnis"],
  },
  /* ═══ المرحلة 4: المقال (B2) ═══ */
  {
    id: "w-s4-b2",
    level: "B2",
    stage: "essay",
    title: "مقال: العمل من المنزل",
    promptAr: "اكتب مقالاً (150-180 كلمة) عن «العمل من المنزل»: اذكر الإيجابيات والسلبيات، ووضّح رأيك في النهاية. استخدم روابط نصية (zwar… aber, einerseits… andererseits, außerdem) وفقرات (مقدمة/جسد/خاتمة).",
    exampleDe: "In den letzten Jahren hat das Homeoffice stark zugenommen. Einerseits spart man Zeit und Geld, weil man nicht zur Arbeit fahren muss. Andererseits fehlt der persönliche Kontakt zu den Kollegen. Außerdem ist es schwierig, Arbeit und Freizeit zu trennen. Meiner Meinung nach ist Homeoffice eine gute Option, aber nicht für jeden. Man sollte flexible Modelle anbieten.",
    taskType: "Forumsbeitrag",
    minWords: 150,
    requires: ["Einerseits", "Andererseits"],
    hilfen: ["außerdem", "meiner Meinung nach", "deshalb"],
  },
  {
    id: "w-s4-b2b",
    level: "B2",
    stage: "essay",
    title: "مقال: الشبكات الاجتماعية",
    promptAr: "اكتب مقالاً عن «الشبكات الاجتماعية»: فوائدها ومخاطرها، مع أمثلة من واقعك، ورأيك المدعوم بحجتين. استخدم أسلوباً أكاديمياً وروابط متقدمة.",
    exampleDe: "Soziale Netzwerke sind aus unserem Alltag nicht mehr wegzudenken. Sie ermöglichen es uns, mit Freunden in Kontakt zu bleiben und Informationen schnell zu teilen. Jedoch gibt es auch Risiken: Datenschutz und Zeitverschwendung. Beispielsweise verbringen viele Jugendliche mehrere Stunden täglich online. Zusammenfassend glaube ich, dass die Vorteile überwiegen, wenn man bewusst damit umgeht.",
    taskType: "Forumsbeitrag",
    minWords: 150,
    requires: ["Jedoch", "Zusammenfassend"],
    hilfen: ["beispielsweise", "darüber hinaus", "einerseits"],
  },
  /* ═══ المرحلة 5: الترجمة العربية ← الألمانية (B2 — جسر الكتابة) ═══ */
  { id: "w-tr-1", level: "B2", stage: "translation", title: "ترجم: الاقتصاد والبطالة",
    promptAr: "ترجم إلى الألمانية: «انخفضت البطالة العام الماضي، لكن الشركات تبحث عن خبراء تقنية. من المهم الاستثمار في التعليم لسد هذه الفجوة.»",
    exampleDe: "Die Arbeitslosigkeit ist im letzten Jahr gesunken, aber die Unternehmen suchen IT-Experten. Es ist wichtig, in die Bildung zu investieren, um diese Lücke zu schließen.",
    taskType: "Übersetzung", minWords: 14,
    requires: ["Arbeitslosigkeit", "gesunken", "Experten", "investieren", "Bildung"],
    hilfen: ["sinken", "die Lücke schließen", "das Unternehmen", "der Experte"] },
  { id: "w-tr-2", level: "B2", stage: "translation", title: "ترجم: العمل عن بُعد",
    promptAr: "ترجم إلى الألمانية: «للعمل عن بُعد مزايا وعيوب. من ناحية يوفر الوقت، ومن ناحية أخرى ينقص التواصل الاجتماعي. رأيي أن المزيج هو الأفضل.»",
    exampleDe: "Homeoffice hat Vor- und Nachteile. Einerseits spart es Zeit, andererseits fehlt der soziale Kontakt. Meiner Meinung nach ist eine Mischung am besten.",
    taskType: "Übersetzung", minWords: 14,
    requires: ["Homeoffice", "Vorteile", "Nachteile", "Einerseits", "Mischung"],
    hilfen: ["sparen", "der soziale Kontakt", "andererseits", "Meiner Meinung nach"] },
  { id: "w-tr-3", level: "B2", stage: "translation", title: "ترجم: حماية البيئة",
    promptAr: "ترجم إلى الألمانية: «الاستهلاك المستدام يعني شراء منتجات محلية وتجنب البلاستيك. إذا اتبع الجميع هذه القاعدة، سنحمي البيئة للأجيال القادمة.»",
    exampleDe: "Nachhaltiger Konsum bedeutet, lokale Produkte zu kaufen und Plastik zu vermeiden. Wenn alle diese Regel befolgen, schützen wir die Umwelt für kommende Generationen.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Konsum", "lokale", "Plastik", "vermeiden", "Umwelt"],
    hilfen: ["nachhaltig", "befolgen", "die Generation", "schützen"] },
  { id: "w-tr-4", level: "B2", stage: "translation", title: "ترجم: التكنولوجيا والخصوصية",
    promptAr: "ترجم إلى الألمانية: «الرقمنة تسهل حياتنا، لكنها تهدد الخصوصية. يجب على الشركات أن تشرح بوضوح كيف تستخدم بياناتنا، وأن تحصل على موافقتنا قبل جمعها.»",
    exampleDe: "Die Digitalisierung erleichtert unser Leben, aber sie bedroht die Privatsphäre. Die Unternehmen müssen klar erklären, wie sie unsere Daten nutzen, und unsere Zustimmung einholen, bevor sie sie sammeln.",
    taskType: "Übersetzung", minWords: 18,
    requires: ["Digitalisierung", "bedroht", "Privatsphäre", "Daten", "Zustimmung"],
    hilfen: ["erleichtern", "erklären", "sammeln", "die Zustimmung einholen"] },
  { id: "w-tr-5", level: "B2", stage: "translation", title: "ترجم: التعليم مدى الحياة",
    promptAr: "ترجم إلى الألمانية: «في عالم سريع التغير، يجب أن نتعلم باستمرار. الدروس عبر الإنترنت تتيح لنا اكتساب مهارات جديدة في وقتنا الحر، وهذا يفتح فرصاً مهنية.»",
    exampleDe: "In einer sich schnell verändernden Welt müssen wir ständig lernen. Online-Kurse ermöglichen uns, in der Freizeit neue Fähigkeiten zu erwerben, und das eröffnet berufliche Chancen.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["ständig", "lernen", "Online-Kurse", "Fähigkeiten", "Chancen"],
    hilfen: ["sich verändern", "erwerben", "eröffnen", "beruflich"] },
  { id: "w-tr-6", level: "B2", stage: "translation", title: "ترجم: الصحة والتوتر",
    promptAr: "ترجم إلى الألمانية: «التوتر في العمل يؤثر على صحتنا. ينصح الخبراء بأخذ فترات راحة منتظمة وممارسة الرياضة. كما يجب على الشركات خلق مناخ عمل صحي.»",
    exampleDe: "Stress bei der Arbeit beeinflusst unsere Gesundheit. Experten empfehlen regelmäßige Pausen und Sport. Außerdem sollten die Unternehmen ein gesundes Arbeitsklima schaffen.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Stress", "beeinflusst", "Pausen", "Sport", "Arbeitsklima"],
    hilfen: ["empfehlen", "regelmäßig", "die Gesundheit", "schaffen"] },
  { id: "w-tr-7", level: "B2", stage: "translation", title: "ترجم: السكن في المدن",
    promptAr: "ترجم إلى الألمانية: «الإيجارات في المدن الكبرى ترتفع بسرعة، وكثير من العائلات لا تستطيع تحمل التكاليف. لذلك يجب على الدولة بناء مساكن ميسورة.»",
    exampleDe: "Die Mieten in den Großstädten steigen schnell, und viele Familien können sich die Kosten nicht leisten. Deshalb sollte der Staat bezahlbare Wohnungen bauen.",
    taskType: "Übersetzung", minWords: 14,
    requires: ["Mieten", "steigen", "Familien", "leisten", "Wohnungen"],
    hilfen: ["die Kosten", "bezahlbar", "der Staat", "bauen"] },
  { id: "w-tr-8", level: "B2", stage: "translation", title: "ترجم: الهجرة والاندماج",
    promptAr: "ترجم إلى الألمانية: «اللغة هي مفتاح الاندماج. كلما تعلم الوافدون الألمانية بشكل أسرع، زادت فرصهم في العمل والحياة الاجتماعية. لذلك يجب دعم دورات اللغة.»",
    exampleDe: "Die Sprache ist der Schlüssel zur Integration. Je schneller Zugewanderte Deutsch lernen, desto besser sind ihre Chancen auf Arbeit und soziale Teilhabe. Deshalb sollte man Sprachkurse unterstützen.",
    taskType: "Übersetzung", minWords: 17,
    requires: ["Sprache", "Schlüssel", "Integration", "lernen", "Sprachkurse"],
    hilfen: ["je...desto", "die Teilhabe", "unterstützen", "die Chancen"] },
  { id: "w-tr-9", level: "B2", stage: "translation", title: "ترجم: وسائل التواصل",
    promptAr: "ترجم إلى الألمانية: «قضى الشباب ساعات طويلة على وسائل التواصل، مما يؤثر على نومهم وتركيزهم. من المهم تعليمهم الاستخدام الواعي منذ الصغر.»»",
    exampleDe: "Junge Menschen verbringen viele Stunden in den sozialen Medien, was ihren Schlaf und ihre Konzentration beeinflusst. Es ist wichtig, ihnen von klein auf einen bewussten Umgang beizubringen.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["verbringen", "sozialen Medien", "Schlaf", "bewussten", "Umgang"],
    hilfen: ["beeinflussen", "die Konzentration", "beibringen", "von klein auf"] },
  { id: "w-tr-10", level: "B2", stage: "translation", title: "ترجم: التطوع",
    promptAr: "ترجم إلى الألمانية: «التطوع يفيد المجتمع والمتطوع نفسه. من خلال العمل التطوعي يكتسب المرء خبرات جديدة وعلاقات اجتماعية، ويشعر بأنه يفعل شيئاً مفيداً.»",
    exampleDe: "Ehrenamt nützt der Gesellschaft und dem Freiwilligen selbst. Durch die Freiwilligenarbeit gewinnt man neue Erfahrungen und soziale Kontakte und hat das Gefühl, etwas Sinnvolles zu tun.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Ehrenamt", "Gesellschaft", "Erfahrungen", "Kontakte", "Sinnvolles"],
    hilfen: ["nützen", "gewinnen", "der Freiwillige", "das Gefühl"] },
  { id: "w-tr-11", level: "B2", stage: "translation", title: "ترجم: الذكاء الاصطناعي",
    promptAr: "ترجم إلى الألمانية: «الذكاء الاصطناعي يغير سوق العمل. بعض الوظائف ستختفي، لكن ستظهر وظائف جديدة تتطلب مهارات مختلفة. التعلم المستمر هو الجواب.»",
    exampleDe: "Künstliche Intelligenz verändert den Arbeitsmarkt. Einige Berufe werden verschwinden, aber neue werden entstehen, die andere Fähigkeiten verlangen. Lebenslanges Lernen ist die Antwort.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Künstliche Intelligenz", "Arbeitsmarkt", "verschwinden", "Fähigkeiten", "Lernen"],
    hilfen: ["verändern", "entstehen", "verlangen", "die Antwort"] },
  { id: "w-tr-12", level: "B2", stage: "translation", title: "ترجم: السفر المستدام",
    promptAr: "ترجم إلى الألمانية: «السفر المستدام يعني اختيار القطار بدل الطائرة عندما يكون ذلك ممكناً، واحترام الطبيعة والثقافة المحلية. كل رحلة قرار واعٍ.»",
    exampleDe: "Nachhaltiges Reisen bedeutet, den Zug statt des Flugzeugs zu wählen, wenn es möglich ist, und die Natur sowie die lokale Kultur zu respektieren. Jede Reise ist eine bewusste Entscheidung.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Reisen", "Zug", "Flugzeug", "Natur", "Kultur"],
    hilfen: ["wählen", "respektieren", "die Entscheidung", "möglich"] },
  { id: "w-tr-13", level: "B2", stage: "translation", title: "ترجم: الطاقة المتجددة",
    promptAr: "ترجم إلى الألمانية: «التحول إلى الطاقات المتجددة ضروري لحماية المناخ. على الرغم من التكاليف المرتفعة في البداية، فإن الاستثمار في الشمس والرياح يفيد الجميع على المدى الطويل.»",
    exampleDe: "Die Umstellung auf erneuerbare Energien ist notwendig, um das Klima zu schützen. Trotz der hohen Anfangskosten nützt die Investition in Sonne und Wind allen langfristig.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["erneuerbare Energien", "Klima", "Investition", "Sonne", "Wind"],
    hilfen: ["die Umstellung", "notwendig", "schützen", "langfristig"] },
  { id: "w-tr-14", level: "B2", stage: "translation", title: "ترجم: المرأة والعمل",
    promptAr: "ترجم إلى الألمانية: «رغم التقدم الكبير، ما زالت المرأة تواجه عوائق في سوق العمل، خاصة في المناصب القيادية. يجب أن تكون المساواة هدفاً للجميع، رجالاً ونساءً.»",
    exampleDe: "Trotz großer Fortschritte stoßen Frauen auf dem Arbeitsmarkt noch immer auf Hindernisse, besonders in Führungspositionen. Die Gleichstellung sollte ein Ziel für alle sein, für Männer und Frauen.",
    taskType: "Übersetzung", minWords: 17,
    requires: ["Frauen", "Arbeitsmarkt", "Hindernisse", "Gleichstellung", "Ziel"],
    hilfen: ["trotz", "die Führungsposition", "stoßen auf", "erreichen"] },
  { id: "w-tr-15", level: "B2", stage: "translation", title: "ترجم: إدارة الوقت",
    promptAr: "ترجم إلى الألمانية: «الوقت هو أثمن مورد لدينا. من يخطط يومه بعناية يستطيع تحقيق التوازن بين العمل والعائلة والراحة. التنظيم يقلل التوتر.»",
    exampleDe: "Die Zeit ist unsere wertvollste Ressource. Wer seinen Tag sorgfältig plant, kann die Balance zwischen Arbeit, Familie und Erholung finden. Organisation reduziert den Stress.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Zeit", "Ressource", "plant", "Balance", "Stress"],
    hilfen: ["wertvoll", "sorgfältig", "die Erholung", "reduzieren"] },
  { id: "w-tr-16", level: "B2", stage: "translation", title: "ترجم: القهوة أم الشاي؟",
    promptAr: "ترجم إلى الألمانية: «في ألمانيا، القهوة جزء من الثقافة اليومية، لكن الشاي يحظى بشعبية كبيرة أيضاً، خاصة في الشمال. المهم ليس المشروب بل اللحظة التي نتشاركها مع الآخرين.»",
    exampleDe: "In Deutschland gehört Kaffee zur Alltagskultur, aber auch Tee ist sehr beliebt, besonders im Norden. Entscheidend ist nicht das Getränk, sondern der Moment, den wir mit anderen teilen.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["Kaffee", "Alltagskultur", "Tee", "beliebt", "Moment"],
    hilfen: ["gehören zu", "besonders", "entscheidend", "teilen"] },
  { id: "w-tr-17", level: "B2", stage: "translation", title: "ترجم: المكتبة العامة",
    promptAr: "ترجم إلى الألمانية: «المكتبات العامة ليست أماكن للاستعارة فقط، بل فضاءات للقاء والتعلم. فيها يجد الأطفال والكبار عروضاً مجانية، من القراءة إلى الدورات.»",
    exampleDe: "Öffentliche Bibliotheken sind nicht nur Orte zum Ausleihen, sondern Räume der Begegnung und des Lernens. Dort finden Kinder und Erwachsene kostenlose Angebote, vom Lesen bis zu Kursen.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["Bibliotheken", "Ausleihen", "Begegnung", "kostenlose", "Kurse"],
    hilfen: ["öffentlich", "der Raum", "das Angebot", "von...bis"] },
  { id: "w-tr-18", level: "B2", stage: "translation", title: "ترجم: العمل الحر",
    promptAr: "ترجم إلى الألمانية: «كثيرون يختارون العمل الحر للاستقلالية والمرونة، لكن عليهم تحمل المخاطر المالية بأنفسهم. النجاح يحتاج انضباطاً ذاتياً وتخطيطاً جيداً.»",
    exampleDe: "Viele wählen die Selbstständigkeit wegen der Unabhängigkeit und Flexibilität, aber sie müssen die finanziellen Risiken selbst tragen. Erfolg erfordert Selbstdisziplin und gute Planung.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Selbstständigkeit", "Unabhängigkeit", "Risiken", "Selbstdisziplin", "Planung"],
    hilfen: ["die Flexibilität", "tragen", "erfordern", "der Erfolg"] },
  { id: "w-tr-19", level: "B2", stage: "translation", title: "ترجم: الهواتف للأطفال",
    promptAr: "ترجم إلى الألمانية: «مسألة أول هاتف ذكي للطفل تقسم الآباء. القواعد الواضحة أفضل من المنع: وقت شاشة محدد ومناطق خالية من الهاتف في المنزل.»",
    exampleDe: "Die Frage nach dem ersten Smartphone spaltet die Eltern. Klare Regeln sind besser als Verbote: eine feste Bildschirmzeit und handyfreie Zonen zu Hause.",
    taskType: "Übersetzung", minWords: 15,
    requires: ["Smartphone", "spaltet", "Eltern", "Regeln", "Bildschirmzeit"],
    hilfen: ["das Verbot", "fest", "die Zone", "besser als"] },
  { id: "w-tr-20", level: "B2", stage: "translation", title: "ترجم: الدراسة في الخارج",
    promptAr: "ترجم إلى الألمانية: «فصل دراسي في الخارج يوسع الأفق ويكشف ثقافات جديدة. رغم التحديات، يكتسب الطالب خبرات لا تقدر بثمن لمستقبله المهني والشخصي.»",
    exampleDe: "Ein Auslandssemester erweitert den Horizont und zeigt neue Kulturen. Trotz der Herausforderungen gewinnt der Student unschätzbare Erfahrungen für seine berufliche und persönliche Zukunft.",
    taskType: "Übersetzung", minWords: 16,
    requires: ["Auslandssemester", "Horizont", "Kulturen", "Erfahrungen", "Zukunft"],
    hilfen: ["erweitern", "die Herausforderung", "unschätzbar", "beruflich"] },
];

/** مهام مرحلة معيّنة */
export function getTasksByStage(stage: WritingStage): WritingTask[] {
  return WRITING_TASKS.filter((t) => t.stage === stage);
}

/** ترتيب المراحل */
export const STAGE_ORDER: { key: WritingStage; title: string; emoji: string; level: string }[] = [
  { key: "sentence", title: "الجملة", emoji: "1️⃣", level: "A1" },
  { key: "paragraph", title: "الفقرة", emoji: "2️⃣", level: "A2" },
  { key: "letter", title: "الرسالة الرسمية", emoji: "3️⃣", level: "B1" },
  { key: "essay", title: "المقال", emoji: "4️⃣", level: "B2" },
  { key: "translation", title: "الترجمة — جسر الكتابة", emoji: "5️⃣", level: "B2" },
];

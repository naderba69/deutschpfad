/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة الاستماع بأسلوب Goethe B2 (Hörverstehen-Library)
 *  أنواع النصوص الأربعة الرسمية في امتحان B2:
 *  1) إعلان/رسالة إذاعية (Ansage)  2) رسالة هاتفية (Nachricht)
 *  3) مقابلة (Interview)           4) محاضرة/حديث (Vortrag)
 *  كل نص: النص الألماني + الترجمة + أسئلة اختيار بمعايير غوته.
 *  يُشغَّل عبر التركيب الصوتي للمتصفح (TTS) — لا حاجة لملفات صوتية.
 * ═══════════════════════════════════════════════════════════
 */

export interface HoerenText {
  id: string;
  /** المستوى المستهدف */
  level: "A1" | "A2" | "B1" | "B2";
  /** نوع النص (صيغة غوته الرسمية) */
  format: "ansage" | "nachricht" | "interview" | "vortrag";
  titleDe: string;
  titleAr: string;
  /** النص الألماني الكامل (يُقرأ صوتياً) */
  text: string;
  textAr: string;
  /** أسئلة فهم الاستماع */
  questions: { q: string; qAr: string; options: string[]; correct: number; explanation: string }[];
}

export const HOEREN_FORMATS: { id: HoerenText["format"]; label: string; de: string; desc: string }[] = [
  { id: "ansage", label: "إعلان إذاعي", de: "Ansage", desc: "معلومات رسمية من مكان عام (محطة، متجر، مركز)" },
  { id: "nachricht", label: "رسالة هاتفية", de: "Telefonansage / Nachricht", desc: "رسالة مسجلة أو محادثة هاتفية قصيرة" },
  { id: "interview", label: "مقابلة", de: "Interview", desc: "حوار سؤال وجواب حول موضوع" },
  { id: "vortrag", label: "محاضرة/حديث", de: "Vortrag", desc: "حديث طويل متصل يقدم معلومات وحججاً" },
];

export const HOEREN_LIBRARY: HoerenText[] = [
  {
    id: "h-b2-1",
    level: "B2",
    format: "ansage",
    titleDe: "Durchsage am Bahnhof",
    titleAr: "إعلان في محطة القطار",
    text: "Achtung, liebe Reisende! Der Intercity-Zug nach München, Abfahrt 14 Uhr 35, hat heute zwanzig Minuten Verspätung. Der Grund ist eine Störung an der Strecke. Der Zug fährt jetzt von Gleis sieben ab. Wir bitten Sie, die neuen Anzeigen zu beachten. Für die Unannehmlichkeiten entschuldigen wir uns. Getränke erhalten Sie im Bordbistro des Zuges.",
    textAr: "انتباه أيها المسافرون الأعزاء! قطار إنترسيتي المتجه إلى ميونخ، موعد انطلاقه 14:35، متأخر اليوم عشرين دقيقة. السبب خلل على الخط. سينطلق القطار الآن من الرصيف السابع. نرجو الانتباه إلى اللوحات الجديدة. نعتذر عن الإزعاج. المشروبات متوفرة في بوفيه القطار.",
    questions: [
      { q: "Wie viel Verspätung hat der Zug?", qAr: "كم تأخير القطار؟", options: ["20 Minuten", "15 Minuten", "35 Minuten", "keine"], correct: 0, explanation: "عشرون دقيقة (zwanzig Minuten)." },
      { q: "Warum hat der Zug Verspätung?", qAr: "لماذا تأخر القطار؟", options: ["wegen einer Störung an der Strecke", "wegen des Wetters", "wegen eines Unfalls", "unbekannt"], correct: 0, explanation: "خلل على الخط." },
      { q: "Von welchem Gleis fährt der Zug jetzt ab?", qAr: "من أي رصيف ينطلق القطار الآن؟", options: ["Gleis sieben", "Gleis drei", "Gleis vierzehn", "Gleis fünf"], correct: 0, explanation: "الرصيف السابع (Gleis sieben)." },
      { q: "Wo bekommt man Getränke?", qAr: "أين يحصل المرء على المشروبات؟", options: ["im Bordbistro", "im Bahnhofscafé", "am Gleis", "im Gepäckwagen"], correct: 0, explanation: "في بوفيه القطار (Bordbistro)." },
    ],
  },
  {
    id: "h-b2-2",
    level: "B2",
    format: "nachricht",
    titleDe: "Anrufbeantworter: Frau Kessler",
    titleAr: "رسالة هاتفية: السيدة كيسلر",
    text: "Guten Tag, Frau Kessler. Hier spricht Thomas Weber von der Firma SolarTech. Ich rufe an, weil sich die Lieferung Ihrer Solaranlage um zwei Wochen verzögert. Der Grund sind Probleme mit dem Zulieferer. Die Montage verschiebt sich daher auf den dritten Oktober. Falls dieser Termin nicht passt, rufen Sie mich bitte unter der Nummer 069 55 88 44 an. Ich bin bis 17 Uhr erreichbar. Vielen Dank und einen schönen Tag!",
    textAr: "نهارك سعيد سيدة كيسلر، معكم توماس فيبر من شركة سولار تك. أتصل لأن شحنة منظومتك الشمسية ستتأخر أسبوعين. السبب مشاكل مع المورد. لذلك يتأجل التركيب إلى الثالث من أكتوبر. إن لم يناسبك هذا الموعد فاتصلي بي على الرقم 069 55 88 44. أنا متاح حتى الساعة 17. شكراً ونهارك سعيد!",
    questions: [
      { q: "Warum ruft Herr Weber an?", qAr: "لماذا يتصل السيد فيبر؟", options: ["um eine Lieferverzögerung zu melden", "um einen Termin zu bestätigen", "um sich zu bedanken", "um zu reklamieren"], correct: 0, explanation: "ليبلغ عن تأخر الشحنة." },
      { q: "Wann findet die Montage jetzt statt?", qAr: "متى يتم التركيب الآن؟", options: ["am 3. Oktober", "am 3. September", "am 14. Oktober", "am 3. November"], correct: 0, explanation: "الثالث من أكتوبر." },
      { q: "Bis wann ist Herr Weber erreichbar?", qAr: "حتى متى يتاح السيد فيبر؟", options: ["bis 17 Uhr", "bis 7 Uhr", "bis 18 Uhr", "bis 20 Uhr"], correct: 0, explanation: "حتى الساعة 17." },
      { q: "Was ist der Grund für die Verzögerung?", qAr: "ما سبب التأخير؟", options: ["Probleme mit dem Zulieferer", "schlechtes Wetter", "zu viele Aufträge", "Personalprobleme"], correct: 0, explanation: "مشاكل مع المورد." },
    ],
  },
  {
    id: "h-b2-3",
    level: "B2",
    format: "interview",
    titleDe: "Interview: Arbeiten im Ausland",
    titleAr: "مقابلة: العمل في الخارج",
    text: "Moderatorin: Herr Doktor Saleh, Sie haben zehn Jahre in Deutschland gearbeitet. Was war Ihre größte Herausforderung? — Dr. Saleh: Die Sprache, eindeutig. Man kann den Wortschatz lernen, aber die Kultur steckt in den Redewendungen und im Humor. — Moderatorin: Und was hat Ihnen am meisten geholfen? — Dr. Saleh: Geduld und Neugier. Ich habe jeden Tag etwas Neues gefragt. Außerdem war mein deutscher Kollege ein echter Türöffner. — Moderatorin: Würden Sie anderen empfehlen, im Ausland zu arbeiten? — Dr. Saleh: Unbedingt, aber mit Vorbereitung. Man sollte die Sprache wirklich beherrschen, bevor man geht, sonst verliert man viel Zeit und Selbstvertrauen.",
    textAr: "المذيعة: دكتور صالح، عملت عشر سنوات في ألمانيا. ما أكبر تحدٍ واجهك؟ — د. صالح: اللغة بلا شك. يمكن تعلم المفردات، لكن الثقافة تكمن في التعابير والفكاهة. — المذيعة: وما الذي ساعدك أكثر؟ — د. صالح: الصبر والفضول. كنت أسأل عن شيء جديد كل يوم. كما كان زميلي الألماني مفتاح أبواب حقيقياً. — المذيعة: هل تنصح الآخرين بالعمل في الخارج؟ — د. صالح: بالتأكيد، لكن باستعداد. ينبغي إتقان اللغة فعلاً قبل الذهاب، وإلا خسرت وقتاً وثقة بالنفس.",
    questions: [
      { q: "Was war für Dr. Saleh die größte Herausforderung?", qAr: "ما أكبر تحدٍ للدكتور صالح؟", options: ["die Sprache", "das Wetter", "das Essen", "die Miete"], correct: 0, explanation: "اللغة (die Sprache, eindeutig)." },
      { q: "Wo steckt die Kultur laut Dr. Saleh?", qAr: "أين تكمن الثقافة حسب قوله؟", options: ["in Redewendungen und Humor", "in der Musik", "in der Architektur", "im Essen"], correct: 0, explanation: "في التعابير والفكاهة." },
      { q: "Was hat ihm am meisten geholfen?", qAr: "ما الذي ساعده أكثر؟", options: ["Geduld und Neugier", "viel Geld", "ein Auto", "kein Stress"], correct: 0, explanation: "الصبر والفضول." },
      { q: "Was empfiehlt Dr. Saleh vor einem Auslandsjob?", qAr: "ماذا يوصي قبل عمل في الخارج؟", options: ["die Sprache wirklich zu beherrschen", "einen Vertrag zu unterschreiben", "eine Wohnung zu kaufen", "Urlaub zu machen"], correct: 0, explanation: "إتقان اللغة فعلاً." },
    ],
  },
  {
    id: "h-b2-4",
    level: "B2",
    format: "vortrag",
    titleDe: "Vortrag: Nachhaltiger Konsum",
    titleAr: "محاضرة: الاستهلاك المستدام",
    text: "Meine sehr geehrten Damen und Herren, ich möchte heute über nachhaltigen Konsum sprechen. Nachhaltiger Konsum bedeutet: Wir kaufen Produkte, die umweltfreundlich hergestellt wurden und lange halten. Das Problem ist, dass viele Menschen billige Waren bevorzugen, die schnell kaputtgehen. Die Folge ist eine riesige Menge an Elektroschrott. Eine Lösung wäre, beim Kauf auf Qualität statt auf Menge zu achten. Auch Reparieren statt Wegwerfen ist ein wichtiger Schritt. Zusammengefasst: Jede Kaufentscheidung ist auch eine Entscheidung für die Umwelt. Vielen Dank für Ihre Aufmerksamkeit.",
    textAr: "حضرات السيدات والسادة الكرام، أود اليوم الحديث عن الاستهلاك المستدام. الاستهلاك المستدام يعني: نشتري منتجات صُنعت بطريقة صديقة للبيئة وتدوم طويلاً. المشكلة أن كثيرين يفضلون سلعاً رخيصة تتعطل بسرعة. والنتيجة كمية هائلة من النفايات الإلكترونية. أحد الحلول أن ننتبه عند الشراء إلى الجودة لا الكمية. كما أن الإصلاح بدل الرمي خطوة مهمة. خلاصة: كل قرار شراء هو أيضاً قرار من أجل البيئة. شكراً لانتباهكم.",
    questions: [
      { q: "Was bedeutet nachhaltiger Konsum laut dem Vortrag?", qAr: "ماذا يعني الاستهلاك المستدام حسب المحاضرة؟", options: ["umweltfreundliche und langlebige Produkte kaufen", "weniger essen", "mehr Geld sparen", "nur online kaufen"], correct: 0, explanation: "شراء منتجات صديقة للبيئة وتدوم." },
      { q: "Was ist die Folge von billigen Waren?", qAr: "ما نتيجة السلع الرخيصة؟", options: ["viel Elektroschrott", "bessere Qualität", "weniger Müll", "höhere Preise"], correct: 0, explanation: "نفايات إلكترونية كثيرة." },
      { q: "Welche Lösung wird vorgeschlagen?", qAr: "ما الحل المقترح؟", options: ["Qualität statt Menge und Reparieren", "mehr Werbung", "teurere Verpackung", "weniger Geschäfte"], correct: 0, explanation: "الجودة بدل الكمية والإصلاح." },
      { q: "Wie endet der Vortrag?", qAr: "كيف تنتهي المحاضرة؟", options: ["mit einer Zusammenfassung und Dank", "mit einer Frage", "mit einem Witz", "mit einer Pause"], correct: 0, explanation: "بخلاصة وشكر (Zusammengefasst... Dank)." },
    ],
  },

  /* ── A1 — نصوص قصيرة بسيطة ── */
  {
    id: "h-a1-1",
    level: "A1",
    format: "ansage",
    titleDe: "Ansage im Supermarkt",
    titleAr: "إعلان في السوبرماركت",
    text: "Achtung, liebe Kunden! Unser Geschäft schließt um zwanzig Uhr. Wir bitten Sie, Ihre Einkäufe zu beenden. Morgen öffnen wir wieder um acht Uhr. Vielen Dank und einen schönen Abend!",
    textAr: "انتباه أيها الزبائن الأعزاء! يغلق متجرنا الساعة الثامنة مساءً. نرجو إنهاء مشترياتكم. غداً نفتح مجدداً الثامنة صباحاً. شكراً ومساءً جميلاً!",
    questions: [
      { q: "Wann schließt das Geschäft?", qAr: "متى يغلق المتجر؟", options: ["um zwanzig Uhr", "um acht Uhr", "um zehn Uhr", "um sechs Uhr"], correct: 0, explanation: "الساعة الثامنة مساءً (zwanzig Uhr)." },
      { q: "Wann öffnet das Geschäft morgen?", qAr: "متى يفتح المتجر غداً؟", options: ["um acht Uhr", "um zehn Uhr", "um sieben Uhr", "um neun Uhr"], correct: 0, explanation: "الثامنة صباحاً (um acht Uhr)." },
    ],
  },
  {
    id: "h-a1-2",
    level: "A1",
    format: "nachricht",
    titleDe: "Nachricht von Lisa",
    titleAr: "رسالة من ليزا",
    text: "Hallo Anna! Ich bin jetzt im Café am Bahnhof. Kommst du auch? Wir treffen uns um fünf Uhr. Bitte bring das Buch mit. Bis gleich!",
    textAr: "مرحباً آنا! أنا الآن في المقهى عند المحطة. هل تأتين أيضاً؟ نتقابل الخامسة. من فضلك أحضري الكتاب. إلى اللقاء قريباً!",
    questions: [
      { q: "Wo ist Lisa?", qAr: "أين ليزا؟", options: ["im Café am Bahnhof", "zu Hause", "in der Schule", "im Kino"], correct: 0, explanation: "في المقهى عند المحطة." },
      { q: "Wann treffen sie sich?", qAr: "متى يتقابلان؟", options: ["um fünf Uhr", "um sechs Uhr", "um vier Uhr", "um sieben Uhr"], correct: 0, explanation: "الساعة الخامسة." },
      { q: "Was soll Anna mitbringen?", qAr: "ماذا يجب أن تحضر آنا؟", options: ["das Buch", "die Tasche", "das Handy", "den Schlüssel"], correct: 0, explanation: "الكتاب." },
    ],
  },
  {
    id: "h-a1-3",
    level: "A1",
    format: "interview",
    titleDe: "Interview: Meine Familie",
    titleAr: "مقابلة: عائلتي",
    text: "Frage: Wie groß ist deine Familie? Antwort: Meine Familie ist groß. Ich habe zwei Brüder und eine Schwester. Mein Vater ist Arzt und meine Mutter ist Lehrerin. Wir wohnen in einem Haus mit Garten.",
    textAr: "سؤال: كم حجم عائلتك؟ جواب: عائلتي كبيرة. لدي أخوان وأخت. أبي طبيب وأمي معلمة. نسكن في بيت بحديقة.",
    questions: [
      { q: "Wie viele Brüder hat er?", qAr: "كم أخاً لديه؟", options: ["zwei", "eins", "drei", "vier"], correct: 0, explanation: "أخوان (zwei Brüder)." },
      { q: "Was ist der Vater von Beruf?", qAr: "ما مهنة الأب؟", options: ["Arzt", "Lehrer", "Verkäufer", "Fahrer"], correct: 0, explanation: "طبيب." },
      { q: "Wo wohnen sie?", qAr: "أين يسكنون؟", options: ["in einem Haus mit Garten", "in einer Wohnung", "im Hotel", "auf dem Land"], correct: 0, explanation: "في بيت بحديقة." },
    ],
  },

  /* ── A2 — نصوص متوسطة ── */
  {
    id: "h-a2-1",
    level: "A2",
    format: "ansage",
    titleDe: "Durchsage im Museum",
    titleAr: "إعلان في المتحف",
    text: "Liebe Besucherinnen und Besucher! Das Museum schließt in einer Stunde. Die Sonderausstellung über Ägypten ist noch bis zwanzig Uhr geöffnet. Der Eingang ist am Hauptportal. Bitte beachten Sie: Fotografieren ist in der Ausstellung nicht erlaubt.",
    textAr: "أعزاءنا الزوار! يغلق المتحف بعد ساعة. معرض مصر الخاص ما زال مفتوحاً حتى الثامنة. المدخل من البوابة الرئيسية. يرجى الانتباه: التصوير غير مسموح في المعرض.",
    questions: [
      { q: "Was ist noch bis zwanzig Uhr geöffnet?", qAr: "ما الذي ما زال مفتوحاً حتى الثامنة؟", options: ["die Sonderausstellung über Ägypten", "das Café", "der Laden", "der Park"], correct: 0, explanation: "معرض مصر الخاص." },
      { q: "Was ist nicht erlaubt?", qAr: "ما غير المسموح؟", options: ["Fotografieren", "Essen", "Trinken", "Reden"], correct: 0, explanation: "التصوير." },
    ],
  },
  {
    id: "h-a2-2",
    level: "A2",
    format: "nachricht",
    titleDe: "Anruf vom Zahnarzt",
    titleAr: "اتصال من طبيب الأسنان",
    text: "Guten Tag, Herr Ali. Hier ist die Praxis von Dr. Weber. Ihr Termin für morgen um zehn Uhr muss leider verschoben werden. Können Sie am Donnerstag um vierzehn Uhr kommen? Bitte rufen Sie uns unter der Nummer 0 30 55 66 77 an. Danke!",
    textAr: "نهارك سعيد سيد علي. هنا عيادة د. فيبر. موعدك غداً العاشرة يجب تأجيله للأسف. هل تستطيع القدوم الخميس في الثانية بعد الظهر؟ من فضلك اتصل بنا على الرقم 0 30 55 66 77. شكراً!",
    questions: [
      { q: "Warum ruft die Praxis an?", qAr: "لماذا تتصل العيادة؟", options: ["Der Termin muss verschoben werden", "Die Praxis ist geschlossen", "Herr Ali hat bezahlt", "Es gibt ein Problem"], correct: 0, explanation: "يجب تأجيل الموعد." },
      { q: "Wann kann Herr Ali kommen?", qAr: "متى يستطيع السيد علي القدوم؟", options: ["am Donnerstag um vierzehn Uhr", "am Freitag um zehn Uhr", "am Montag", "morgen"], correct: 0, explanation: "الخميس في الثانية بعد الظهر (14:00)." },
    ],
  },
  {
    id: "h-a2-3",
    level: "A2",
    format: "vortrag",
    titleDe: "Mein Lieblingsessen",
    titleAr: "طعامي المفضل",
    text: "Ich möchte über mein Lieblingsessen sprechen. Ich esse sehr gern Couscous mit Gemüse. Meine Mutter kocht es am Freitag. Dazu trinken wir Tee mit Minze. Am Wochenende esse ich auch gern Pizza mit Freunden. Essen ist für mich auch eine Zeit mit der Familie.",
    textAr: "أريد الحديث عن طعامي المفضل. أحب الكسكس بالخضار كثيراً. تطبخه أمي يوم الجمعة. نشرب معه الشاي بالنعناع. في نهاية الأسبوع آكل أيضاً البيتزا مع الأصدقاء. الطعام عندي أيضاً وقت مع العائلة.",
    questions: [
      { q: "Was ist sein Lieblingsessen?", qAr: "ما طعامه المفضل؟", options: ["Couscous mit Gemüse", "Pizza", "Fisch", "Reis"], correct: 0, explanation: "الكسكس بالخضار." },
      { q: "Wann kocht die Mutter Couscous?", qAr: "متى تطبخ الأم الكسكس؟", options: ["am Freitag", "am Montag", "am Samstag", "am Sonntag"], correct: 0, explanation: "يوم الجمعة." },
    ],
  },

  /* ── B1 — نصوص أطول ── */
  {
    id: "h-b1-1",
    level: "B1",
    format: "interview",
    titleDe: "Interview: Leben auf dem Land",
    titleAr: "مقابلة: الحياة في الريف",
    text: "Moderatorin: Sie sind vor zwei Jahren aufs Land gezogen. Warum? Gast: In der Stadt war es mir zu laut und zu teuer. Hier haben wir ein Haus mit Garten, und die Kinder können draußen spielen. Moderatorin: Und die Nachteile? Gast: Der Weg zur Arbeit ist länger, und die Schule ist nicht so nah. Aber die Ruhe ist es wert. Moderatorin: Würden Sie zurückziehen? Gast: Nein, auf keinen Fall. Wir haben uns hier gut eingelebt.",
    textAr: "المذيعة: انتقلتما إلى الريف قبل عامين. لماذا؟ الضيف: كانت المدينة صاخبة وغالية عليّ. هنا عندنا بيت بحديقة والأطفال يستطيعون اللعب خارجاً. المذيعة: وما العيوب؟ الضيف: طريق العمل أطول والمدرسة ليست قريبة. لكن الهدوء يستحق. المذيعة: هل تعودان؟ الضيف: لا، أبداً. لقد تأقلمنا جيداً هنا.",
    questions: [
      { q: "Warum ist die Familie aufs Land gezogen?", qAr: "لماذا انتقلت العائلة للريف؟", options: ["Die Stadt war zu laut und zu teuer", "Sie haben Arbeit auf dem Land", "Die Kinder wollen reiten", "Das Haus ist größer"], correct: 0, explanation: "كانت المدينة صاخبة وغالية." },
      { q: "Was ist ein Nachteil auf dem Land?", qAr: "ما عيب الريف؟", options: ["Der Weg zur Arbeit ist länger", "Es ist zu ruhig", "Es gibt keine Natur", "Das Essen ist schlecht"], correct: 0, explanation: "طريق العمل أطول." },
      { q: "Würde der Gast zurückziehen?", qAr: "هل سيعود الضيف للمدينة؟", options: ["Nein, auf keinen Fall", "Ja, sofort", "Vielleicht", "Weiß nicht"], correct: 0, explanation: "لا، أبداً." },
    ],
  },
  {
    id: "h-b1-2",
    level: "B1",
    format: "vortrag",
    titleDe: "Vortrag: Gesund leben",
    titleAr: "حديث: عش بصحة",
    text: "Guten Tag! Ich möchte kurz über gesundes Leben sprechen. Gesundheit beginnt im Alltag: genug Schlaf, gesundes Essen und Bewegung. Viele Menschen sitzen den ganzen Tag und essen schnell. Das ist nicht gut für den Körper. Man muss nicht jeden Tag Sport treiben, aber regelmäßig ist wichtig. Zum Beispiel kann man mit dem Fahrrad zur Arbeit fahren oder abends spazieren gehen. Zusammenfassend: Kleine Änderungen haben große Wirkung. Vielen Dank!",
    textAr: "نهارك سعيد! أريد الحديث باختصار عن الحياة الصحية. الصحة تبدأ في الحياة اليومية: نوم كافٍ وأكل صحي وحركة. كثيرون يجلسون طوال اليوم ويأكلون بسرعة. هذا ليس جيداً للجسم. لا يجب ممارسة الرياضة كل يوم لكن الانتظام مهم. مثلاً يمكن الذهاب للعمل بالدراجة أو التنزه مساءً. خلاصة: تغييرات صغيرة لها أثر كبير. شكراً!",
    questions: [
      { q: "Wo beginnt Gesundheit laut dem Vortrag?", qAr: "أين تبدأ الصحة حسب الحديث؟", options: ["im Alltag", "im Krankenhaus", "beim Arzt", "in der Apotheke"], correct: 0, explanation: "في الحياة اليومية." },
      { q: "Was ist wichtig?", qAr: "ما المهم؟", options: ["regelmäßige Bewegung", "viel Sitzen", "schnell essen", "wenig Schlaf"], correct: 0, explanation: "الحركة المنتظمة." },
      { q: "Was ist ein Beispiel für Bewegung?", qAr: "ما مثال على الحركة؟", options: ["mit dem Fahrrad zur Arbeit fahren", "den ganzen Tag sitzen", "fernsehen", "im Bett liegen"], correct: 0, explanation: "الذهاب للعمل بالدراجة." },
    ],
  },
  {
    id: "h-b1-3",
    level: "B1",
    format: "nachricht",
    titleDe: "Nachricht vom Chef",
    titleAr: "رسالة من المدير",
    text: "Hallo Karim, hier ist Herr Schmidt. Die Besprechung am Montag wurde auf Dienstag verschoben, um zehn Uhr im großen Konferenzraum. Ich möchte außerdem, dass du die Präsentation über das neue Projekt vorbereitest. Bitte schick mir bis Freitag eine kurze Zusammenfassung. Danke und bis bald!",
    textAr: "مرحباً كريم، معك السيد شميت. تم تأجيل اجتماع الاثنين إلى الثلاثاء العاشرة في قاعة الاجتماعات الكبيرة. كما أريد منك تحضير عرض عن المشروع الجديد. من فضلك أرسل لي ملخصاً قصيراً حتى الجمعة. شكراً وإلى اللقاء!",
    questions: [
      { q: "Wann findet die Besprechung jetzt statt?", qAr: "متى يقام الاجتماع الآن؟", options: ["am Dienstag um zehn Uhr", "am Montag um zehn Uhr", "am Freitag", "am Mittwoch"], correct: 0, explanation: "الثلاثاء العاشرة." },
      { q: "Was soll Karim vorbereiten?", qAr: "ماذا يجب أن يحضر كريم؟", options: ["eine Präsentation über das neue Projekt", "die Kaffeemaschine", "die Bücher", "den Bericht über die Firma"], correct: 0, explanation: "عرضاً عن المشروع الجديد." },
      { q: "Was soll Karim bis Freitag schicken?", qAr: "ماذا يجب أن يرسل كريم حتى الجمعة؟", options: ["eine Zusammenfassung", "die Rechnung", "die Fotos", "den Vertrag"], correct: 0, explanation: "ملخصاً." },
    ],
  },
];
export const TOTAL_HOEREN = HOEREN_LIBRARY.length;

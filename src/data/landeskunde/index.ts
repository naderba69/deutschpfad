import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  القراءة الثقافية (Landeskunde) 🏰
 *  بطاقات ثقافية: أعياد، عادات، مدن، تقاليد — لكل مستوى
 *  — الثقافة جزء من امتحان Goethe وفهم اللغة الحية —
 * ═══════════════════════════════════════════════════════════
 */

export interface CultureCard {
  id: string;
  level: LevelCode;
  title: string;
  titleAr: string;
  emoji: string;
  category: string;
  /** النص الألماني المتدرج */
  de: string;
  /** الترجمة العربية */
  ar: string;
  /** 3 حقائق مهمة */
  facts: { de: string; ar: string }[];
}

export const CULTURE_CARDS: CultureCard[] = [
  /* ─── A1 ─── */
  {
    id: "k-a1-hallo",
    level: "A1",
    title: "Hallo und Tschüss",
    titleAr: "التحية والوداع",
    emoji: "👋",
    category: "عادات",
    de: "In Deutschland sagt man „Hallo“ oder „Guten Tag“. Freunde sagen „Tschüss“ oder „Bis bald“. Nach dem Essen sagt man „Guten Appetit“. Und wenn jemand niest, sagt man „Gesundheit!“",
    ar: "في ألمانيا يقول الناس «هالو» أو «غوتن تاغ». الأصدقاء يقولون «تشوس» أو «بيس بالد». بعد الأكل يقال «غوتن أبّتيت» (بالهناء). وعندما يعطس أحد يقال «غيزوندهايت» (صحة)!",
    facts: [
      { de: "Man sagt „du“ zu Freunden und „Sie“ zu Fremden.", ar: "يقال «دو» للأصدقاء و«زي» للغرباء." },
      { de: "„Gesundheit!“ nach dem Niesen ist höflich.", ar: "قول «غيزوندهايت» بعد العطس مهذب." },
      { de: "„Guten Appetit!“ vor dem Essen ist üblich.", ar: "«غوتن أبّتيت» قبل الأكل معتاد." },
    ],
  },
  {
    id: "k-a1-sonntag",
    level: "A1",
    title: "Der Sonntag ist ruhig",
    titleAr: "الأحد يوم هادئ",
    emoji: "🌙",
    category: "عادات",
    de: "Am Sonntag sind die Geschäfte in Deutschland geschlossen. Die Menschen ruhen sich aus. Familien machen Spaziergänge oder essen zusammen Kuchen. Das nennt man Kaffee und Kuchen.",
    ar: "يوم الأحد تكون المحلات مغلقة في ألمانيا. يستريح الناس. العائلات تتنزه أو تأكل الكعك معاً. يسمى ذلك «القهوة والكعك».",
    facts: [
      { de: "Geschäfte sind am Sonntag zu.", ar: "المحلات مغلقة يوم الأحد." },
      { de: "Kaffee und Kuchen ist eine Tradition.", ar: "القهوة والكعك تقليد ألماني." },
      { de: "Sonntag ist Familientag.", ar: "الأحد يوم العائلة." },
    ],
  },
  /* ─── A2 ─── */
  {
    id: "k-a2-oktoberfest",
    level: "A2",
    title: "Das Oktoberfest",
    titleAr: "مهرجان أكتوبر",
    emoji: "🍺",
    category: "أعياد",
    de: "Das Oktoberfest in München ist das größte Volksfest der Welt. Es beginnt im September. Die Menschen tragen Trachten: Lederhosen und Dirndl. Sie essen Brezeln, Hendl und trinken Bier. Es gibt auch Fahrgeschäfte und Musik.",
    ar: "مهرجان أكتوبر في ميونخ هو أكبر مهرجان شعبي في العالم. يبدأ في سبتمبر. يرتدي الناس الأزياء التقليدية: السراويل الجلدية والفستان البافاري. يأكلون البريتزل والدجاج ويشربون البيرة. توجد أيضاً ألعاب وموسيقى.",
    facts: [
      { de: "Das Oktoberfest beginnt im September.", ar: "مهرجان أكتوبر يبدأ في سبتمبر." },
      { de: "Lederhosen und Dirndl sind Trachten.", ar: "السراويل الجلدية والفساتين البافارية أزياء تقليدية." },
      { de: "Es ist das größte Volksfest der Welt.", ar: "إنه أكبر مهرجان شعبي في العالم." },
    ],
  },
  {
    id: "k-a2-weihnachten",
    level: "A2",
    title: "Weihnachten in Deutschland",
    titleAr: "عيد الميلاد في ألمانيا",
    emoji: "🎄",
    category: "أعياد",
    de: "Im Dezember feiern die Deutschen Weihnachten. Am 24. Dezember gibt es Geschenke. Die Familien essen zusammen und singen Lieder. Auf dem Weihnachtsmarkt trinkt man heißen Glühwein und isst gebrannte Mandeln.",
    ar: "في ديسمبر يحتفل الألمان بعيد الميلاد. في 24 ديسمبر توزع الهدايا. تجتمع العائلات وتغني الأغاني. في سوق الميلاد يشرب المرء النبيذ الساخن ويأكل اللوز المحمص.",
    facts: [
      { de: "Geschenke gibt es am 24. Dezember.", ar: "الهدايا توزع في 24 ديسمبر." },
      { de: "Glühwein ist ein heißes Getränk im Winter.", ar: "النبيذ الساخن مشروب شتوي." },
      { de: "Weihnachtsmärkte gibt es in jeder Stadt.", ar: "أسواق الميلاد موجودة في كل مدينة." },
    ],
  },
  /* ─── B1 ─── */
  {
    id: "k-b1-recycling",
    level: "B1",
    title: "Die deutsche Recycling-Kultur",
    titleAr: "ثقافة إعادة التدوير الألمانية",
    emoji: "♻️",
    category: "مجتمع",
    de: "Deutschland ist Weltmeister im Recycling. Man trennt den Müll in verschiedene Tonnen: Papier, Plastik, Glas und Bioabfall. Dafür gibt es das Pfandsystem für Flaschen. Die Deutschen nehmen das sehr ernst — sogar im Büro steht eine gelbe Tonne.",
    ar: "ألمانيا بطلة العالم في إعادة التدوير. يفرز الناس القمامة في حاويات مختلفة: ورق، بلاستيك، زجاج، ونفايات عضوية. يوجد نظام إيداع للزجاجات. يأخذ الألمان هذا الأمر بجدية شديدة — حتى في المكتب توجد حاوية صفراء.",
    facts: [
      { de: "Es gibt verschiedene Tonnen für Müll.", ar: "توجد حاويات مختلفة للقمامة." },
      { de: "Pfand gibt es für Glasflaschen.", ar: "الإيداع موجود للزجاجات." },
      { de: "Mülltrennung ist im Alltag normal.", ar: "فرز القمامة طبيعي في الحياة اليومية." },
    ],
  },
  {
    id: "k-b1-terminkultur",
    level: "B1",
    title: "Pünktlichkeit und Termine",
    titleAr: "الدقة والمواعيد",
    emoji: "⏰",
    category: "عادات",
    de: "Pünktlichkeit ist in Deutschland sehr wichtig. Wenn man einen Termin hat, kommt man pünktlich. „Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit“ — das sagt man oft. Im Beruf ist das besonders wichtig.",
    ar: "الدقة مهمة جداً في ألمانيا. عندما يكون لدى المرء موعد، يأتي في الوقت المحدد. «خمس دقائق قبل الوقت هي دقة الألماني» — هكذا يقال كثيراً. في العمل هذا مهم بشكل خاص.",
    facts: [
      { de: "Pünktlichkeit ist eine Tugend.", ar: "الدقة فضيلة." },
      { de: "Man kommt 5 Minuten früher zu Terminen.", ar: "يأتي المرء قبل الموعد بخمس دقائق." },
      { de: "Zu spät kommen ist unhöflich.", ar: "التأخر غير مهذب." },
    ],
  },
  /* ─── B2 ─── */
  {
    id: "k-b2-wiedervereinigung",
    level: "B2",
    title: "Die deutsche Wiedervereinigung",
    titleAr: "الوحدة الألمانية",
    emoji: "🇩🇪",
    category: "تاريخ",
    de: "Am 3. Oktober 1990 wurden Ost- und Westdeutschland wiedervereinigt. Der 3. Oktober ist heute der Tag der Deutschen Einheit — ein gesetzlicher Feiertag. Die Geschichte der Teilung prägt die deutsche Gesellschaft bis heute. Man spricht offen über die Unterschiede zwischen Ost und West.",
    ar: "في 3 أكتوبر 1990 توحدت ألمانيا الشرقية والغربية. الثالث من أكتوبر اليوم هو يوم الوحدة الألمانية — عطلة رسمية. قصة الانقسام ما زالت تشكل المجتمع الألماني حتى اليوم. يتحدث الناس بصراحة عن الاختلافات بين الشرق والغرب.",
    facts: [
      { de: "Die Wiedervereinigung war am 3. Oktober 1990.", ar: "الوحدة كانت في 3 أكتوبر 1990." },
      { de: "Der 3. Oktober ist ein Feiertag.", ar: "الثالث من أكتوبر عطلة رسمية." },
      { de: "Ost und West unterscheiden sich noch heute.", ar: "الشرق والغرب يختلفان حتى اليوم." },
    ],
  },
  {
    id: "k-b2-meisterkultur",
    level: "B2",
    title: "Die Meisterkultur",
    titleAr: "ثقافة الحرفيين المهرة",
    emoji: "🛠️",
    category: "اقتصاد",
    de: "Das duale Ausbildungssystem ist weltweit bekannt. Junge Leute lernen einen Beruf in der Firma und in der Berufsschule. Der „Meister“ ist der höchste Abschluss im Handwerk. Viele Betriebe sind Familienunternehmen, die seit Generationen bestehen. Diese Kultur erklärt die starke Wirtschaft Deutschlands.",
    ar: "نظام التدريب المهني المزدوج مشهور عالمياً. يتعلم الشباب مهنة في الشركة وفي المدرسة المهنية. «الميستر» هو أعلى شهادة في الحرف. كثير من الشركات عائلية تعمل منذ أجيال. هذه الثقافة تفسر قوة الاقتصاد الألماني.",
    facts: [
      { de: "Das duale System kombiniert Firma und Schule.", ar: "النظام المزدوج يجمع بين الشركة والمدرسة." },
      { de: "Der Meister ist der höchste Handwerksabschluss.", ar: "الميستر أعلى شهادة حرفية." },
      { de: "Viele Firmen sind Familienunternehmen.", ar: "كثير من الشركات عائلية." },
    ],
  },
  /* ─── A1 إضافية ─── */
  {
    id: "k-a1-schule",
    level: "A1",
    title: "Die Schultüte",
    titleAr: "كيس المدرسة المخروطي",
    emoji: "🎒",
    category: "تقاليد",
    de: "Am ersten Schultag bekommen Kinder in Deutschland eine Schultüte. Das ist eine große Tüte mit Süßigkeiten, Spielzeug und Schulsachen. Die Kinder sind sehr stolz darauf. Diese Tradition ist über 200 Jahre alt.",
    ar: "في أول يوم دراسي يحصل الأطفال في ألمانيا على «شولتوتة» — كيس مخروطي كبير مليء بالحلويات والألعاب وأدوات مدرسية. الأطفال فخورون جداً به. هذا التقليد عمره أكثر من 200 عام.",
    facts: [
      { de: "Die Schultüte gibt es am ersten Schultag.", ar: "الكيس المخروطي يُمنح في أول يوم دراسي." },
      { de: "Sie ist voll mit Süßigkeiten und Schulmaterial.", ar: "ممتلئ بالحلويات والأدوات المدرسية." },
      { de: "Die Tradition ist über 200 Jahre alt.", ar: "التقليد عمره أكثر من 200 عام." },
    ],
  },
  {
    id: "k-a1-brot",
    level: "A1",
    title: "Das deutsche Brot",
    titleAr: "الخبز الألماني",
    emoji: "🍞",
    category: "طعام",
    de: "Deutschland ist berühmt für sein Brot. Es gibt über 300 Brotsorten. Das Brot ist dunkel und schwer. Viele Deutsche essen Brot zum Frühstück und zum Abendbrot. Die Bäckerei ist ein wichtiger Ort im Alltag.",
    ar: "ألمانيا مشهورة بخبزها. يوجد أكثر من 300 نوع خبز. الخبز داكن وثقيل. يأكل كثير من الألمان الخبز في الفطور والعشاء. المخبز مكان مهم في الحياة اليومية.",
    facts: [
      { de: "Es gibt über 300 Brotsorten.", ar: "يوجد أكثر من 300 نوع خبز." },
      { de: "Das Brot ist meist dunkel und schwer.", ar: "الخبز غالباً داكن وثقيل." },
      { de: "Brot gehört zum Frühstück und Abendbrot.", ar: "الخبز جزء من الفطور والعشاء." },
    ],
  },
  /* ─── A2 إضافية ─── */
  {
    id: "k-a2-ostern",
    level: "A2",
    title: "Ostern in Deutschland",
    titleAr: "عيد الفصح في ألمانيا",
    emoji: "🐰",
    category: "أعياد",
    de: "Ostern ist das wichtigste Frühlingsfest. Kinder suchen bunte Ostereier im Garten. Der Osterhase versteckt sie. Familien essen zusammen und dekorieren Eier. Viele Städte haben Osterfeuer und Märkte.",
    ar: "عيد الفصح أهم أعياد الربيع. يبحث الأطفال عن بيض ملون في الحديقة. أرنب الفصح يخفيه. العائلات تأكل معاً وتزين البيض. كثير من المدن تقيم نيران عيد الفصح وأسواقاً.",
    facts: [
      { de: "Kinder suchen bunte Ostereier.", ar: "يبحث الأطفال عن البيض الملون." },
      { de: "Der Osterhase versteckt die Eier.", ar: "أرنب الفصح يخفي البيض." },
      { de: "Ostern ist ein Frühlingsfest.", ar: "الفصح عيد الربيع." },
    ],
  },
  {
    id: "k-a2-biergarten",
    level: "A2",
    title: "Der Biergarten",
    titleAr: "حديقة البيرة",
    emoji: "🌳",
    category: "عادات",
    de: "Im Sommer sitzen die Deutschen gerne im Biergarten. Das ist ein Garten mit Bäumen und langen Holztischen. Man trinkt Bier oder Limonade und isst Brezeln. Es ist ein Ort zum Entspannen und Reden mit Freunden. In Bayern ist diese Tradition besonders stark.",
    ar: "في الصيف يجلس الألمان في «حديقة البيرة». إنها حديقة فيها أشجار وطاولات خشبية طويلة. يشرب المرء بيرة أو ليموناضة ويأكل البريتزل. إنه مكان للاسترخاء والحديث مع الأصدقاء. في بافاريا هذا التقليد قوي جداً.",
    facts: [
      { de: "Im Sommer geht man gerne in den Biergarten.", ar: "في الصيف يذهب الناس بسرور لحديقة البيرة." },
      { de: "Man trinkt Bier und isst Brezeln.", ar: "يشرب المرء البيرة ويأكل البريتزل." },
      { de: "Die Tradition ist in Bayern stark.", ar: "التقليد قوي في بافاريا." },
    ],
  },
  /* ─── B1 إضافية ─── */
  {
    id: "k-b1-vereinskultur",
    level: "B1",
    title: "Die Vereinskultur",
    titleAr: "ثقافة الجمعيات والنوادي",
    emoji: "⚽",
    category: "مجتمع",
    de: "In Deutschland gibt es viele Vereine: Sportvereine, Musikvereine und Kulturvereine. Fast jeder dritte Deutsche ist Mitglied in einem Verein. Vereine organisieren Feste, Turniere und Ausflüge. Sie sind ein wichtiger Teil des sozialen Lebens. Durch Vereine findet man schnell Kontakte.",
    ar: "في ألمانيا توجد جمعيات كثيرة: رياضية وموسيقية وثقافية. تقريباً كل ألماني ثالث عضو في جمعية. تنظم الجمعيات الأعياد والبطولات والرحلات. إنها جزء مهم من الحياة الاجتماعية. عبر الجمعيات يجد المرء علاقات بسرعة.",
    facts: [
      { de: "Fast jeder dritte Deutsche ist im Verein.", ar: "تقريباً كل ألماني ثالث عضو في جمعية." },
      { de: "Vereine organisieren Feste und Ausflüge.", ar: "الجمعيات تنظم الأعياد والرحلات." },
      { de: "Durch Vereine findet man Kontakte.", ar: "عبر الجمعيات يجد المرء علاقات." },
    ],
  },
  {
    id: "k-b1-urlaub",
    level: "B1",
    title: "Urlaub in Deutschland",
    titleAr: "الإجازة في ألمانيا",
    emoji: "🏖️",
    category: "عادات",
    de: "Urlaub ist für die Deutschen sehr wichtig. Die meisten verreisen einmal im Jahr. Beliebt sind Reisen ans Meer, in die Berge oder ins Ausland. Viele planen ihren Urlaub Monate vorher. Im Sommer sind die Autobahnen zu den Ferienzielen voll. Nach dem Urlaub erzählt man gerne von den Erlebnissen.",
    ar: "الإجازة مهمة جداً للألمان. معظمهم يسافرون مرة في السنة. الرحلات الشائعة إلى البحر أو الجبال أو الخارج. كثيرون يخططون لإجازتهم قبل أشهر. في الصيف تكون الطرق السريعة ممتلئة باتجاه وجهات العطلات. بعد الإجازة يحكي الناس بسرور عن التجارب.",
    facts: [
      { de: "Die meisten Deutschen verreisen einmal im Jahr.", ar: "معظم الألمان يسافرون مرة سنوياً." },
      { de: "Beliebt sind Meer, Berge und Ausland.", ar: "الشائع البحر والجبال والخارج." },
      { de: "Man plant den Urlaub Monate vorher.", ar: "يخطط المرء لإجازته قبل أشهر." },
    ],
  },
  /* ─── B2 إضافية ─── */
  {
    id: "k-b2-karneval",
    level: "B2",
    title: "Der Karneval",
    titleAr: "الكرنفال",
    emoji: "🎭",
    category: "تقاليد",
    de: "Der Karneval ist vor allem im Rheinland eine große Tradition. Die Hochburg ist Köln. Wochenlang feiern die Menschen mit Kostümen, Umzügen und Musik. Am Rosenmontag findet der größte Umzug statt. Kritiker sagen, der Karneval sei nur Kommerz. Anhänger betonen, er stärke das Gemeinschaftsgefühl.",
    ar: "الكرنفال تقليد كبير خاصة في منطقة الراين. العاصمة الحقيقية له كولونيا. لأسابيع يحتفل الناس بالأزياء والمواكب والموسيقى. في «روزن مونتاغ» (إثنين الورد) يقام أكبر موكب. يقول النقاد إن الكرنفال مجرد تجارة. يؤكد المؤيدون أنه يقوي الشعور بالجماعة.",
    facts: [
      { de: "Die Hochburg des Karnevals ist Köln.", ar: "عاصمة الكرنفال كولونيا." },
      { de: "Der größte Umzug ist am Rosenmontag.", ar: "أكبر موكب في إثنين الورد." },
      { de: "Karneval stärkt das Gemeinschaftsgefühl.", ar: "الكرنفال يقوي الشعور بالجماعة." },
    ],
  },
  {
    id: "k-b2-nachhaltigkeit",
    level: "B2",
    title: "Nachhaltigkeit als Lebensstil",
    titleAr: "الاستدامة كأسلوب حياة",
    emoji: "🌿",
    category: "مجتمع",
    de: "Nachhaltigkeit ist in Deutschland zu einem wichtigen Thema geworden. Viele Menschen kaufen regionale Produkte, nutzen öffentliche Verkehrsmittel und sparen Energie. Unverpackt-Läden werden beliebter. Kritiker meinen, individuelles Verhalten reiche nicht aus; die Politik müsse Rahmenbedingungen schaffen. Die Debatte zeigt eine reife Zivilgesellschaft.",
    ar: "أصبحت الاستدامة موضوعاً مهماً في ألمانيا. كثيرون يشترون منتجات محلية ويستخدمون وسائل النقل العام ويوفرون الطاقة. متاجر «بلا تغليف» تزداد شعبية. يرى النقاد أن السلوك الفردي لا يكفي؛ بل يجب أن تخلق السياسة الشروط الإطارية. النقاش يظهر مجتمعاً مدنياً ناضجاً.",
    facts: [
      { de: "Viele kaufen regionale Produkte.", ar: "كثيرون يشترون منتجات محلية." },
      { de: "Unverpackt-Läden werden beliebter.", ar: "متاجر بلا تغليف تزداد شعبية." },
      { de: "Die Politik muss Rahmenbedingungen schaffen.", ar: "السياسة يجب أن تخلق الشروط الإطارية." },
    ],
  },
];

/** بطاقات مستوى معيّن */
export function getCardsByLevel(level: LevelCode): CultureCard[] {
  return CULTURE_CARDS.filter((c) => c.level === level);
}

export const CULTURE_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

/**
 * ═══════════════════════════════════════════════════════════
 *  نماذج العرض التقديمي الكاملة (Vortrag-Modelle) — B2 Teil 1
 *  ثلاثة مواضيع مكتوبة بالكامل — هياكل جاهزة للحفظ والتدريب
 *  بخطوات غوته: مقدمة → الوضع الحالي → مشاكل → حلول → خاتمة
 * ═══════════════════════════════════════════════════════════
 */

export interface VortragModell {
  id: string;
  topicDe: string;
  topicAr: string;
  /** الأسئلة الإرشادية (Leitfragen) */
  leitfragen: string[];
  /** العرض كاملاً مقسماً لخطوات */
  steps: { heading: string; de: string; ar: string; seconds: number }[];
  /** زمن العرض الكلي */
  totalSeconds: number;
}

export const VORTRAG_MODELLE: VortragModell[] = [
  {
    id: "vm-1",
    topicDe: "Gesundes Leben in der modernen Gesellschaft",
    topicAr: "الحياة الصحية في المجتمع الحديث",
    leitfragen: [
      "Warum ist Gesundheit heute ein großes Thema?",
      "Welche Rolle spielen Ernährung und Bewegung?",
      "Wie kann der Staat die Gesundheit fördern?",
    ],
    totalSeconds: 180,
    steps: [
      {
        heading: "مقدمة (30 ثانية)",
        de: "Sehr geehrte Damen und Herren, ich möchte heute über das Thema Gesundheit in der modernen Gesellschaft sprechen. Gesundheit ist heute wichtiger denn je, weil unser Lebensstil sich stark verändert hat.",
        ar: "حضرات السيدات والسادة، أود اليوم الحديث عن الصحة في المجتمع الحديث. الصحة اليوم أهم من أي وقت مضى لأن أسلوب حياتنا تغير كثيراً.",
        seconds: 30,
      },
      {
        heading: "الوضع الحالي (40 ثانية)",
        de: "Die meisten Menschen sitzen lange im Büro und bewegen sich zu wenig. Gleichzeitig steigt die Zahl von Krankheiten wie Diabetes und Herzproblemen. Das ist eine Folge von Stress und ungesunder Ernährung.",
        ar: "معظم الناس يجلسون طويلاً في المكتب ويتحركون قليلاً. وفي الوقت نفسه يرتفع عدد أمراض مثل السكري ومشاكل القلب. ذلك نتيجة التوتر والتغذية غير الصحية.",
        seconds: 40,
      },
      {
        heading: "الأسباب والمشاكل (40 ثانية)",
        de: "Ein großes Problem ist der Zeitmangel: Viele haben keine Zeit zum Kochen oder für den Sport. Außerdem werben die Medien ständig für ungesunde Produkte. Die Folge ist, dass Bewegung im Alltag immer seltener wird.",
        ar: "مشكلة كبيرة هي ضيق الوقت: كثيرون لا يملكون وقتاً للطبخ أو الرياضة. كما تعلن وسائل الإعلام باستمرار عن منتجات غير صحية. والنتيجة أن الحركة في الحياة اليومية أصبحت نادرة.",
        seconds: 40,
      },
      {
        heading: "الحلول (40 ثانية)",
        de: "Man sollte mit kleinen Schritten beginnen: öfter zu Fuß gehen, Treppen statt Aufzug nehmen und mehr Obst und Gemüse essen. Auch der Staat kann helfen, zum Beispiel mit kostenlosen Sportangeboten und Aufklärung in den Schulen.",
        ar: "ينبغي البدء بخطوات صغيرة: المشي أكثر، استعمال الدرج بدل المصعد، وتناول المزيد من الفواكه والخضار. كما يمكن للدولة المساعدة، مثلاً بعروض رياضية مجانية والتوعية في المدارس.",
        seconds: 40,
      },
      {
        heading: "خاتمة (30 ثانية)",
        de: "Zusammenfassend lässt sich sagen, dass Gesundheit keine Frage des Geldes ist, sondern der täglichen Entscheidungen. Jeder kann heute damit beginnen. Vielen Dank für Ihre Aufmerksamkeit.",
        ar: "خلاصةً يمكن القول إن الصحة ليست مسألة مال بل قرارات يومية. يمكن لأي شخص أن يبدأ اليوم. شكراً لانتباهكم.",
        seconds: 30,
      },
    ],
  },
  {
    id: "vm-2",
    topicDe: "Arbeiten im Ausland: Chancen und Risiken",
    topicAr: "العمل في الخارج: الفرص والمخاطر",
    leitfragen: [
      "Welche Vorteile hat ein Job im Ausland?",
      "Welche Schwierigkeiten können entstehen?",
      "Würden Sie selbst im Ausland arbeiten?",
    ],
    totalSeconds: 180,
    steps: [
      {
        heading: "مقدمة (30 ثانية)",
        de: "Mein Thema heute ist die Arbeit im Ausland. Immer mehr Menschen verlassen ihr Land, um beruflich neue Wege zu gehen. Ich möchte über die Chancen und Risiken sprechen.",
        ar: "موضوعي اليوم العمل في الخارج. يتزايد عدد من يغادرون بلادهم لسلوك طرق مهنية جديدة. سأتحدث عن الفرص والمخاطر.",
        seconds: 30,
      },
      {
        heading: "الفرص (40 ثانية)",
        de: "Ein Job im Ausland bietet viele Vorteile: Man lernt eine neue Sprache, eine neue Kultur und gewinnt internationale Erfahrung. Außerdem verbessern sich oft die beruflichen Chancen und das Gehalt.",
        ar: "يوفر العمل في الخارج مزايا كثيرة: تعلم لغة وثقافة جديدة واكتساب خبرة دولية. كما تتحسن غالباً الفرص المهنية والراتب.",
        seconds: 40,
      },
      {
        heading: "المخاطر (40 ثانية)",
        de: "Es gibt aber auch Schwierigkeiten: Die Sprachbarriere und das Heimweh können sehr belastend sein. Man muss auch mit bürokratischen Hürden rechnen. Und ohne Familie und Freunde fühlt man sich manchmal einsam.",
        ar: "لكن توجد صعوبات أيضاً: حاجز اللغة والحنين للوطن قد يكونان مرهقين للغاية. يجب أيضاً توقع عقبات بيروقراطية. وبدون العائلة والأصدقاء يشعر المرء أحياناً بالوحدة.",
        seconds: 40,
      },
      {
        heading: "رأيي (40 ثانية)",
        de: "Meiner Meinung nach lohnt sich die Arbeit im Ausland, wenn man gut vorbereitet ist. Man sollte die Sprache wirklich lernen und sich über das Land informieren. Mit Geduld und Offenheit überwiegen die Vorteile.",
        ar: "في رأيي يستحق العمل في الخارج العناء إذا كان المرء مستعداً جيداً. ينبغي تعلم اللغة فعلاً والاطلاع على البلد. بالصبر والانفتاح تغلب المزايا.",
        seconds: 40,
      },
      {
        heading: "خاتمة (30 ثانية)",
        de: "Zusammenfassend ist ein Auslandsjob eine große Chance, aber keine Garantie. Wer sich vorbereitet, kann viel gewinnen. Vielen Dank für Ihre Aufmerksamkeit.",
        ar: "خلاصةً، العمل في الخارج فرصة كبيرة لكنها ليست ضماناً. من يستعد جيداً يمكنه ربح الكثير. شكراً لانتباهكم.",
        seconds: 30,
      },
    ],
  },
  {
    id: "vm-3",
    topicDe: "Soziale Medien: Fluch oder Segen?",
    topicAr: "وسائل التواصل الاجتماعي: نقمة أم نعمة؟",
    leitfragen: [
      "Wie verändern soziale Medien unseren Alltag?",
      "Welche Gefahren gibt es für Jugendliche?",
      "Wie kann man verantwortungsvoll damit umgehen?",
    ],
    totalSeconds: 180,
    steps: [
      {
        heading: "مقدمة (30 ثانية)",
        de: "Ich möchte heute über ein Thema sprechen, das uns alle betrifft: die sozialen Medien. Sie sind aus unserem Alltag nicht mehr wegzudenken, aber sind sie ein Fluch oder ein Segen?",
        ar: "أود الحديث اليوم عن موضوع يمسنا جميعاً: وسائل التواصل الاجتماعي. لم تعد قابلة للاستغناء في حياتنا اليومية، لكن هل هي نقمة أم نعمة؟",
        seconds: 30,
      },
      {
        heading: "الوضع (40 ثانية)",
        de: "Soziale Medien haben die Kommunikation revolutioniert: Wir sind immer erreichbar, Informationen verbreiten sich in Sekunden. Sie helfen auch, Kontakte zu pflegen und sich zu informieren.",
        ar: "ثورة وسائل التواصل في الاتصال: نحن متاحون دائماً، والمعلومات تنتشر في ثوانٍ. تساعد أيضاً في الحفاظ على العلاقات والمعرفة.",
        seconds: 40,
      },
      {
        heading: "الأخطار (40 ثانية)",
        de: "Aber es gibt ernste Gefahren, besonders für Jugendliche: Cybermobbing, Sucht und falsche Informationen. Viele junge Menschen vergleichen sich ständig mit anderen und leiden unter Druck. Das kann zu Angstzuständen führen.",
        ar: "لكن توجد أخطار جدية خاصة بالشباب: التنمر الإلكتروني والإدمان والمعلومات المغلوطة. كثير من الشباب يقارنون أنفسهم باستمرار بالآخرين ويعانون من الضغط. وقد يؤدي ذلك إلى حالات قلق.",
        seconds: 40,
      },
      {
        heading: "الحلول (40 ثانية)",
        de: "Verantwortungsvoller Umgang ist möglich: feste Zeiten ohne Handy, kritische Prüfung der Quellen und offene Gespräche in der Familie. Auch die Schulen sollten Medienkompetenz vermitteln.",
        ar: "التعامل المسؤول ممكن: أوقات ثابتة دون هاتف، وفحص نقدي للمصادر، وحوارات صريحة في العائلة. كما ينبغي أن تعلّم المدارس الثقافة الإعلامية.",
        seconds: 40,
      },
      {
        heading: "خاتمة (30 ثانية)",
        de: "Zusammenfassend sind soziale Medien weder gut noch schlecht – sie sind ein Werkzeug. Entscheidend ist, wie wir sie benutzen. Vielen Dank für Ihre Aufmerksamkeit.",
        ar: "خلاصةً، وسائل التواصل ليست خيراً ولا شراً — إنها أداة. المهم كيف نستخدمها. شكراً لانتباهكم.",
        seconds: 30,
      },
    ],
  },
];

export const TOTAL_VORTRAG_MODELLE = VORTRAG_MODELLE.length;

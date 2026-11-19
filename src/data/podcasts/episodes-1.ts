/**
 * حلقات البودكاست — الجزء الأول (A1 حتى B2: الحلقات الأساسية)
 * فُصل من index.ts في الدفعة 61 (سقف 600 سطراً). القيم منقولة حرفياً وبالترتيب.
 */
import type { PodcastEpisode } from "./types";

export const PODCASTS_PART_1: PodcastEpisode[] = [
  /* ─── A1 ─── */
  {
    id: "p-a1-markt",
    level: "A1",
    title: "Auf dem Markt",
    titleAr: "في السوق",
    emoji: "🥕",
    script: "Heute ist Samstag. Anna geht zum Markt. Sie kauft Äpfel, Tomaten und Brot. Der Markt ist groß und bunt. Anna sagt: „Die Äpfel sind frisch!“ Sie kauft ein Kilo. Dann geht sie nach Hause.",
    scriptAr: "اليوم سبت. تذهب آنا إلى السوق. تشتري تفاحاً وطماطم وخبزاً. السوق كبير وملوّن. تقول آنا: «التفاح طازج!» تشتري كيلوغراماً. ثم تعود إلى البيت.",
    questions: [
      {
        de: "Wann geht Anna zum Markt?",
        ar: "متى تذهب آنا إلى السوق؟",
        options: [
          { text: "Am Samstag", ar: "يوم السبت", correct: true, explanation: "نعم — الحلقة تقول: «Heute ist Samstag.»." },
          { text: "Am Montag", ar: "يوم الاثنين", correct: false, explanation: "لا — الحلقة تقول: «Heute ist Samstag.»." },
          { text: "Am Abend", ar: "في المساء", correct: false, explanation: "لا — الحلقة تقول: «Heute ist Samstag.»." },
        ],
      },
      {
        de: "Was kauft Anna?",
        ar: "ماذا تشتري آنا؟",
        options: [
          { text: "Äpfel, Tomaten und Brot", ar: "تفاحاً وطماطم وخبزاً", correct: true, explanation: "نعم — الحلقة تقول: «Sie kauft Äpfel, Tomaten und Brot.»." },
          { text: "Milch und Käse aus dem Kühlregal", ar: "حليباً وجبناً", correct: false, explanation: "لا — الحلقة تقول: «Sie kauft Äpfel, Tomaten und Brot.»." },
          { text: "Fisch und Fleisch vom Markt", ar: "سمكاً ولحماً", correct: false, explanation: "لا — الحلقة تقول: «Sie kauft Äpfel, Tomaten und Brot.»." },
        ],
      },
    ],
  },
  {
    id: "p-a1-haustier",
    level: "A1",
    title: "Mein Haustier",
    titleAr: "حيواني الأليف",
    emoji: "🐱",
    script: "Ich habe eine Katze. Sie heißt Mimi. Mimi ist klein und grau. Sie schläft am Tag und spielt in der Nacht. Ich mag meine Katze. Mimi ist meine beste Freundin.",
    scriptAr: "عندي قطة. اسمها ميمي. ميمي صغيرة ورمادية. تنام نهاراً وتلعب ليلاً. أحب قطتي. ميمي أفضل صديقة لي.",
    questions: [
      {
        de: "Wie heißt die Katze?",
        ar: "ما اسم القطة؟",
        options: [
          { text: "Mimi", ar: "ميمي", correct: true, explanation: "نعم — الحلقة تقول: «Sie heißt Mimi.»." },
          { text: "Luna", ar: "لونا", correct: false, explanation: "لا — الحلقة تقول: «Sie heißt Mimi.»." },
          { text: "Mia", ar: "ميا", correct: false, explanation: "لا — الحلقة تقول: «Sie heißt Mimi.»." },
        ],
      },
      {
        de: "Wann schläft die Katze?",
        ar: "متى تنام القطة؟",
        options: [
          { text: "Am Tag", ar: "في النهار", correct: true, explanation: "نعم — «Sie schläft am Tag und spielt in der Nacht»." },
          { text: "In der Nacht", ar: "في الليل", correct: false, explanation: "لا — الليل للّعب لا للنوم: «Sie schläft am Tag und spielt in der Nacht»." },
          { text: "Immer", ar: "دائماً", correct: false, explanation: "لا — ليس دائماً؛ فالنهار للنوم والليل للّعب: «Sie schläft am Tag und spielt in der Nacht»." },
        ],
      },
    ],
  },
  /* ─── A2 ─── */
  {
    id: "p-a2-sonnntag",
    level: "A2",
    title: "Ein Sonntag in der Familie",
    titleAr: "أحد في العائلة",
    emoji: "☀️",
    script: "Am Sonntag sind alle zu Hause. Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen. Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut. Es war ein schöner, ruhiger Tag. Wir haben die Zeit genossen.",
    scriptAr: "يوم الأحد الجميع في البيت. تناولنا الفطور معاً. ثم ذهبنا في نزهة. بعد الظهر خبزنا كعكة وشاهدنا أفلاماً. كان يوماً جميلاً وهادئاً. استمتعنا بالوقت.",
    questions: [
      {
        de: "Was haben sie am Nachmittag gemacht?",
        ar: "ماذا فعلوا بعد الظهر؟",
        options: [
          { text: "Kuchen gebacken und Filme geschaut", ar: "خبزوا كعكة وشاهدوا أفلاماً", correct: true, explanation: "نعم — الحلقة تقول: «Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut.»." },
          { text: "Gearbeitet und E-Mails beantwortet", ar: "عملوا وأجابوا عن رسائل البريد الإلكتروني", correct: false, explanation: "لا — الحلقة تقول: «Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut.»." },
          { text: "Geschlafen bis zum späten Abend", ar: "ناموا", correct: false, explanation: "لا — الحلقة تقول: «Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut.»." },
        ],
      },
      {
        de: "Was haben sie am Sonntag gemacht?",
        ar: "ماذا فعلوا يوم الأحد؟",
        options: [
          { text: "Zusammen gefrühstückt und spazieren gegangen", ar: "تناولوا الفطور معاً وتمشوا", correct: true, explanation: "نعم — الحلقة تقول: «Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen.»." },
          { text: "Gearbeitet und E-Mails beantwortet", ar: "عملوا وأجابوا عن رسائل البريد الإلكتروني", correct: false, explanation: "لا — الحلقة تقول: «Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen.»." },
          { text: "Geschlafen bis zum späten Abend", ar: "ناموا", correct: false, explanation: "لا — الحلقة تقول: «Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen.»." },
        ],
      }
    ],
  },
  {
    id: "p-a2-zug",
    level: "A2",
    title: "Mit dem Zug reisen",
    titleAr: "السفر بالقطار",
    emoji: "🚆",
    script: "Letztes Wochenende bin ich mit dem Zug nach Hamburg gefahren. Die Fahrt hat drei Stunden gedauert. Ich habe aus dem Fenster geschaut und Musik gehört. In Hamburg habe ich meinen Freund besucht. Wir waren im Hafen und haben Fisch gegessen.",
    scriptAr: "نهاية الأسبوع الماضية سافرت بالقطار إلى هامبورغ. استغرقت الرحلة ثلاث ساعات. نظرت من النافذة واستمعت للموسيقى. في هامبورغ زرت صديقي. كنا في الميناء وأكلنا السمك.",
    questions: [
      {
        de: "Wie lange hat die Fahrt gedauert?",
        ar: "كم استغرقت الرحلة؟",
        options: [
          { text: "Drei Stunden", ar: "ثلاث ساعات", correct: true, explanation: "نعم — الحلقة تقول: «Die Fahrt hat drei Stunden gedauert.»." },
          { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — الحلقة تقول: «Die Fahrt hat drei Stunden gedauert.»." },
          { text: "Einen Tag", ar: "يوماً", correct: false, explanation: "لا — الحلقة تقول: «Die Fahrt hat drei Stunden gedauert.»." },
        ],
      },
      {
        de: "Wen hat er in Hamburg besucht?",
        ar: "من زار في هامبورغ؟",
        options: [
          { text: "Seinen Freund", ar: "صديقه", correct: true, explanation: "نعم — الحلقة تقول: «In Hamburg habe ich meinen Freund besucht.»." },
          { text: "Seine Eltern", ar: "والديه", correct: false, explanation: "لا — الحلقة تقول: «In Hamburg habe ich meinen Freund besucht.»." },
          { text: "Seinen Lehrer", ar: "معلمه", correct: false, explanation: "لا — الحلقة تقول: «In Hamburg habe ich meinen Freund besucht.»." },
        ],
      }
    ],
  },
  /* ─── B1 ─── */
  {
    id: "p-b1-umwelt",
    level: "B1",
    title: "Sollten wir umweltfreundlicher leben?",
    titleAr: "هل يجب أن نعيش بطريقة صديقة للبيئة؟",
    emoji: "🌍",
    script: "Viele Menschen denken, dass wir umweltfreundlicher leben sollten. Man kann zum Beispiel mit dem Fahrrad fahren statt mit dem Auto. Man kann weniger Plastik benutzen und regionales Obst kaufen. Andere sagen, dass das nicht genug ist. Die Politik muss etwas ändern. Was denkst du?",
    scriptAr: "يعتقد كثير من الناس أننا يجب أن نعيش بطريقة صديقة للبيئة. يمكن مثلاً ركوب الدراجة بدل السيارة. يمكن استخدام بلاستيك أقل وشراء فواكه محلية. يقول آخرون إن هذا ليس كافياً. السياسة يجب أن تغيّر شيئاً. ما رأيك؟",
    questions: [
      {
        de: "Was kann man laut dem Text tun?",
        ar: "ماذا يمكن للمرء أن يفعل حسب النص؟",
        options: [
          { text: "Mit dem Fahrrad fahren", ar: "ركوب الدراجة", correct: true, explanation: "نعم — الحلقة تقول: «Man kann zum Beispiel mit dem Fahrrad fahren statt mit dem Auto.»." },
          { text: "Öfter mit dem Auto fahren", ar: "الذهاب بالسيارة بوتيرة أكبر", correct: false, explanation: "لا — الحلقة تقول: «Man kann zum Beispiel mit dem Fahrrad fahren statt mit dem Auto.»." },
          { text: "Mehr Plastik benutzen", ar: "استخدام بلاستيك أكثر", correct: false, explanation: "لا — الحلقة تقول: «Man kann zum Beispiel mit dem Fahrrad fahren statt mit dem Auto.»." },
        ],
      },
      {
        de: "Was meinen andere Menschen?",
        ar: "ماذا يعتقد الآخرون؟",
        options: [
          { text: "Die Politik muss etwas ändern", ar: "السياسة يجب أن تغيّر شيئاً", correct: true, explanation: "نعم — الحلقة تقول: «Die Politik muss etwas ändern.»." },
          { text: "Man muss gar nichts ändern", ar: "لا يجب تغيير أي شيء", correct: false, explanation: "لا — الحلقة تقول: «Die Politik muss etwas ändern.»." },
          { text: "Autos sind viel besser als die Bahn", ar: "السيارات أفضل بكثير من القطار", correct: false, explanation: "لا — الحلقة تقول: «Die Politik muss etwas ändern.»." },
        ],
      },
    ],
  },
  {
    id: "p-b1-homeoffice",
    level: "B1",
    title: "Homeoffice: Vor- und Nachteile",
    titleAr: "العمل من المنزل: الإيجابيات والسلبيات",
    emoji: "🏠",
    script: "Fiktive Szene: Lea arbeitet zu Hause. Sie sagt: „Ich spare mir den Arbeitsweg und kann mich gut konzentrieren.“ Ihr Kollege meint: „Mir fehlt der Austausch im Team. Arbeit und Freizeit zu trennen ist nicht immer leicht.“ Homeoffice hat zwar Vorteile, passt aber nicht immer.",
    scriptAr: "مشهد خيالي: تعمل ليا من المنزل. تقول: «أوفّر مشوار الذهاب إلى العمل وأستطيع التركيز جيداً». ويرى زميلها: «أفتقد التواصل مع الفريق. وليس الفصل بين العمل ووقت الفراغ سهلاً دائماً». وللعمل من المنزل مزايا، لكنه لا يلائم كل الحالات.",
    questions: [
      {
        de: "Was spart Lea laut eigener Aussage?",
        ar: "ما الذي توفره ليا بحسب قولها؟",
        options: [
          { text: "Den Arbeitsweg", ar: "مشوار الذهاب إلى العمل", correct: true, explanation: "نعم — تقول ليا: «Ich spare mir den Arbeitsweg»." },
          { text: "Das Mittagessen", ar: "الغداء", correct: false, explanation: "لا — لم تذكر ليا الغداء؛ بل قالت «Ich spare mir den Arbeitsweg»." },
          { text: "Den Teamkontakt", ar: "التواصل مع الفريق", correct: false, explanation: "لا — يقول الزميل «Mir fehlt der Austausch im Team»؛ لا إن ليا توفر المحادثات." },
        ],
      },
      {
        de: "Was findet der Kollege schwierig?",
        ar: "ما الأمر الذي يجده الزميل صعباً؟",
        options: [
          { text: "Arbeit und Freizeit zu trennen", ar: "الفصل بين العمل ووقت الفراغ", correct: true, explanation: "نعم — يقول: «Arbeit und Freizeit zu trennen ist nicht immer leicht»." },
          { text: "Mit dem Zug täglich zur Arbeit fahren", ar: "الذهاب يومياً إلى العمل بالقطار", correct: false, explanation: "لا — يصف الزميل صعوبة «Arbeit und Freizeit zu trennen»؛ ولا يذكر قطاراً أو تنقلاً." },
          { text: "Neue Programme im Büro einrichten", ar: "إعداد برامج جديدة في المكتب", correct: false, explanation: "لا — الحوار يذكر أن «Arbeit und Freizeit zu trennen ist nicht immer leicht»؛ ولا يذكر برامج مكتب." },
        ],
      }
    ],
  },
  /* ─── B2 ─── */
  {
    id: "p-b2-digitalisierung",
    level: "B2",
    contentNoteAr: "نص تدريبي يعرض مواقف افتراضية عن الرقمنة؛ عبارات المؤيدين والنقاد عن المنافع والمخاطر والتقنية محاور للنقاش، وليست نتائج بحث أو وصفاً شاملاً للواقع.",
    title: "Digitalisierung im Alltag",
    titleAr: "الرقمنة في الحياة اليومية",
    emoji: "📱",
    script: "Die Digitalisierung verändert unser Leben grundlegend. Befürworter argumentieren, dass digitale Technologien den Alltag erleichtern und Informationen zugänglicher machen. Kritiker hingegen warnen vor Datenschutzproblemen und sozialer Isolation. Eine ausgewogene Betrachtung zeigt: Die Technologie selbst ist neutral — entscheidend ist, wie wir sie nutzen.",
    scriptAr: "الرقمنة تغيّر حياتنا جذرياً. يجادل المؤيدون أن التقنيات الرقمية تسهّل الحياة اليومية وتجعل المعلومات أكثر سهولة. في المقابل يحذر النقاد من مشاكل حماية البيانات والعزلة الاجتماعية. نظرة متوازنة تُظهر: التقنية نفسها محايدة — المهم كيف نستخدمها.",
    questions: [
      {
        de: "Was argumentieren die Befürworter?",
        ar: "بماذا يجادل المؤيدون؟",
        options: [
          { text: "Digitalisierung erleichtert den Alltag", ar: "الرقمنة تسهّل الحياة اليومية", correct: true, explanation: "نعم — الحلقة تقول: «Befürworter argumentieren, dass digitale Technologien den Alltag erleichtern.»." },
          { text: "Digitalisierung ist gefährlich", ar: "الرقمنة خطيرة", correct: false, explanation: "لا — الحلقة تقول: «Befürworter argumentieren, dass digitale Technologien den Alltag erleichtern.»." },
          { text: "Man soll keine Technologie benutzen", ar: "لا يجب استخدام التقنية", correct: false, explanation: "لا — الحلقة تقول: «Befürworter argumentieren, dass digitale Technologien den Alltag erleichtern.»." },
        ],
      },
      {
        de: "Wovor warnen die Kritiker?",
        ar: "مماذا يحذر النقاد؟",
        options: [
          { text: "Vor Datenschutzproblemen und Isolation", ar: "من مشاكل حماية البيانات والعزلة", correct: true, explanation: "نعم — الحلقة تقول: «Kritiker hingegen warnen vor Datenschutzproblemen und sozialer Isolation.»." },
          { text: "Vor zu viel Bewegung im Alltag", ar: "من الحركة الزائدة", correct: false, explanation: "لا — الحلقة تقول: «Kritiker hingegen warnen vor Datenschutzproblemen und sozialer Isolation.»." },
          { text: "Vor schlechtem Wetter im Winter", ar: "من سوء الطقس", correct: false, explanation: "لا — الحلقة تقول: «Kritiker hingegen warnen vor Datenschutzproblemen und sozialer Isolation.»." },
        ],
      },
    ],
  },
  {
    id: "p-b2-globalisierung",
    level: "B2",
    title: "Chancen und Risiken der Globalisierung",
    titleAr: "فرص ومخاطر العولمة",
    emoji: "🌐",
    script: "Die Globalisierung bietet zweifellos wirtschaftliche Chancen: freieren Handel und kulturellen Austausch. Dennoch wächst die Kritik: Man befürchtet, dass lokale Kulturen verschwinden und Arbeitsplätze verlagert werden. Experten sind sich uneinig, ob die Vorteile die Nachteile überwiegen. Fest steht: Wir müssen einen Weg finden, die Vorteile zu nutzen und die Risiken zu minimieren.",
    scriptAr: "تقدم العولمة بلا شك فرصاً اقتصادية: تجارة حرة وتبادلاً ثقافياً. ومع ذلك ينمو النقد: يخشى البعض أن تختفي الثقافات المحلية وتُنقل أماكن العمل. الخبراء غير متفقين هل تفوق المزايا العيوب. المؤكد: يجب أن نجد طريقة لنستفيد من المزايا ونقلل المخاطر.",
    questions: [
      {
        de: "Welche Chance bietet die Globalisierung?",
        ar: "ما الفرصة التي تقدمها العولمة؟",
        options: [
          { text: "Freieren Handel und kulturellen Austausch", ar: "تجارة حرة وتبادلاً ثقافياً", correct: true, explanation: "نعم — الحلقة تقول: «Die Globalisierung bietet zweifellos wirtschaftliche Chancen: freieren Handel und kulturellen Austausch.»." },
          { text: "Weniger Reisen und weniger Kontakt", ar: "سفراً أقل", correct: false, explanation: "لا — الحلقة تقول: «Die Globalisierung bietet zweifellos wirtschaftliche Chancen: freieren Handel und kulturellen Austausch.»." },
          { text: "Keine Veränderungen im Alltag", ar: "لا تغييرات", correct: false, explanation: "لا — الحلقة تقول: «Die Globalisierung bietet zweifellos wirtschaftliche Chancen: freieren Handel und kulturellen Austausch.»." },
        ],
      },
      {
        de: "Worüber sind sich Experten uneinig?",
        ar: "في ماذا يختلف الخبراء؟",
        options: [
          { text: "Ob die Vorteile die Nachteile überwiegen", ar: "هل تفوق المزايا العيوب", correct: true, explanation: "نعم — الحلقة تقول: «Experten sind sich uneinig, ob die Vorteile die Nachteile überwiegen.»." },
          { text: "Ob es die Globalisierung überhaupt gibt", ar: "هل توجد عولمة", correct: false, explanation: "لا — الحلقة تقول: «Experten sind sich uneinig, ob die Vorteile die Nachteile überwiegen.»." },
          { text: "Ob der internationale Handel legal ist", ar: "هل التجارة قانونية", correct: false, explanation: "لا — الحلقة تقول: «Experten sind sich uneinig, ob die Vorteile die Nachteile überwiegen.»." },
        ],
      }
    ],
  },
  /* ─── A1 — حلقة إضافية ─── */
  {
    id: "p-a1-geburstag",
    level: "A1",
    title: "Der Geburtstag",
    titleAr: "عيد الميلاد",
    emoji: "🎂",
    script: "Heute hat Emma Geburtstag. Sie wird sieben Jahre alt. Am Morgen singen die Eltern: „Happy Birthday!“ Emma bekommt viele Geschenke: ein Buch, einen Ball und eine Puppe. Am Nachmittag kommen die Freunde. Sie essen Kuchen und spielen im Garten.",
    scriptAr: "اليوم عيد ميلاد إيما. ستبلغ السابعة من عمرها. في الصباح تغني الأسرة: «عيد ميلاد سعيد!» تحصل إيما على هدايا كثيرة: كتاباً وكرة ودمية. بعد الظهر يأتي الأصدقاء. يأكلون الكعك ويلعبون في الحديقة.",
    questions: [
      {
        de: "Wie alt wird Emma?",
        ar: "كم سيبلغ عمر إيما؟",
        options: [
          { text: "Sieben Jahre", ar: "سبع سنوات", correct: true, explanation: "نعم — الحلقة تقول: «Sie wird sieben Jahre alt.»." },
          { text: "Sechs Jahre", ar: "ست سنوات", correct: false, explanation: "لا — الحلقة تقول: «Sie wird sieben Jahre alt.»." },
          { text: "Acht Jahre", ar: "ثماني سنوات", correct: false, explanation: "لا — الحلقة تقول: «Sie wird sieben Jahre alt.»." },
        ],
      },
      {
        de: "Was machen die Freunde am Nachmittag?",
        ar: "ماذا يفعل الأصدقاء بعد الظهر؟",
        options: [
          { text: "Sie essen Kuchen und spielen", ar: "يأكلون الكعك ويلعبون", correct: true, explanation: "نعم — الحلقة تقول: «Sie essen Kuchen und spielen im Garten.»." },
          { text: "Sie schlafen lange und ruhen sich aus", ar: "ينامون", correct: false, explanation: "لا — الحلقة تقول: «Sie essen Kuchen und spielen im Garten.»." },
          { text: "Sie lernen zusammen Deutsch", ar: "يتعلمون الألمانية", correct: false, explanation: "لا — الحلقة تقول: «Sie essen Kuchen und spielen im Garten.»." },
        ],
      },
    ],
  },
  /* ─── A2 — حلقة إضافية ─── */
  {
    id: "p-a2-wochenmarkt",
    level: "A2",
    title: "Der Wochenmarkt",
    titleAr: "سوق الأسبوع",
    emoji: "🥦",
    script: "Jeden Freitag ist in unserer Stadt ein Wochenmarkt. Die Bauern bringen frisches Obst und Gemüse. Ich kaufe dort Tomaten, Äpfel und Kräuter. Die Sachen sind billiger als im Supermarkt und schmecken besser. Am Stand von Frau Huber gibt es den besten Honig. Ich kaufe immer ein Glas.",
    scriptAr: "كل جمعة يوجد في مدينتنا سوق أسبوعي. يجلب المزارعون فواكه وخضروات طازجة. أشتري هناك طماطم وتفاحاً وأعشاباً. الأشياء أرخص من السوبرماركت وألذ طعماً. عند كشك السيدة هوبر يوجد أفضل عسل. أشتري دائماً عبوة.",
    questions: [
      {
        de: "Wann ist der Wochenmarkt?",
        ar: "متى يكون السوق الأسبوعي؟",
        options: [
          { text: "Jeden Freitag", ar: "كل جمعة", correct: true, explanation: "نعم — الحلقة تقول: «Jeden Freitag ist in unserer Stadt ein Wochenmarkt.»." },
          { text: "Jeden Montag", ar: "كل اثنين", correct: false, explanation: "لا — الحلقة تقول: «Jeden Freitag ist in unserer Stadt ein Wochenmarkt.»." },
          { text: "Jeden Sonntag", ar: "كل أحد", correct: false, explanation: "لا — الحلقة تقول: «Jeden Freitag ist in unserer Stadt ein Wochenmarkt.»." },
        ],
      },
      {
        de: "Was gibt es bei Frau Huber?",
        ar: "ماذا يوجد عند السيدة هوبر؟",
        options: [
          { text: "Den besten Honig", ar: "أفضل عسل", correct: true, explanation: "نعم — الحلقة تقول: «Am Stand von Frau Huber gibt es den besten Honig.»." },
          { text: "Die billigsten Äpfel", ar: "أرخص تفاح", correct: false, explanation: "لا — الحلقة تقول: «Am Stand von Frau Huber gibt es den besten Honig.»." },
          { text: "Den frischesten Fisch", ar: "السمك الأشدّ طزاجةً", correct: false, explanation: "لا — الحلقة تقول: «Am Stand von Frau Huber gibt es den besten Honig.»." },
        ],
      },
    ],
  },
  /* ─── B1 — حلقة إضافية ─── */
  {
    id: "p-b1-reisen",
    level: "B1",
    title: "Reisen oder zu Hause bleiben?",
    titleAr: "السفر أم البقاء في البيت؟",
    emoji: "✈️",
    script: "Im Sommer stellen sich viele die Frage: Verreisen oder zu Hause bleiben? Reisen hat viele Vorteile: Man lernt neue Kulturen kennen und erholt sich. Aber Reisen ist auch teuer und anstrengend. Manche Menschen bleiben lieber zu Hause und machen Ausflüge in die Umgebung. Sie sparen Geld und schonen die Umwelt. Was ist besser? Das hängt von den eigenen Bedürfnissen ab.",
    scriptAr: "في الصيف يسأل كثيرون أنفسهم: نسافر أم نبقى في البيت؟ للسفر مزايا كثيرة: تتعرف على ثقافات جديدة وتستريح. لكن السفر مكلف ومتعب أيضاً. يفضل بعض الناس البقاء في البيت والقيام برحلات إلى المناطق القريبة. يوفرون المال ويحمون البيئة. ما الأفضل؟ يعتمد ذلك على احتياجاتك.",
    questions: [
      {
        de: "Was ist ein Vorteil des Reisens?",
        ar: "ما ميزة السفر؟",
        options: [
          { text: "Man lernt neue Kulturen kennen", ar: "تتعرف على ثقافات جديدة", correct: true, explanation: "نعم — الحلقة تقول: «Reisen hat viele Vorteile: Man lernt neue Kulturen kennen und erholt sich.»." },
          { text: "Man spart dabei viel Geld", ar: "توفر المال", correct: false, explanation: "لا — الحلقة تقول: «Reisen hat viele Vorteile: Man lernt neue Kulturen kennen und erholt sich.»." },
          { text: "Man schont die Umwelt sehr", ar: "تحمي البيئة", correct: false, explanation: "لا — الحلقة تقول: «Reisen hat viele Vorteile: Man lernt neue Kulturen kennen und erholt sich.»." },
        ],
      },
      {
        de: "Warum bleiben manche lieber zu Hause?",
        ar: "لماذا يفضل البعض البقاء في البيت؟",
        options: [
          { text: "Reisen ist teuer und anstrengend", ar: "السفر مكلف ومتعب", correct: true, explanation: "نعم — الحلقة تقول: «Aber Reisen ist auch teuer und anstrengend.»." },
          { text: "Sie mögen keine langen Ausflüge", ar: "لا يحبون الرحلات", correct: false, explanation: "لا — الحلقة تقول: «Aber Reisen ist auch teuer und anstrengend.»." },
          { text: "Sie haben keine Zeit für Freunde", ar: "ليس لديهم أصدقاء", correct: false, explanation: "لا — الحلقة تقول: «Aber Reisen ist auch teuer und anstrengend.»." },
        ],
      },
    ],
  },
  /* ─── B2 — حلقة إضافية ─── */
  {
    id: "p-b2-kuenstliche-intelligenz",
    level: "B2",
    contentNoteAr: "نص تدريبي يعرض مواقف افتراضية عن الذكاء الاصطناعي والعمل؛ لا يوثق مقدار أثره في الإنتاجية أو الوظائف ولا ينقل توصيات خبراء بمصدر محدد.",
    title: "Künstliche Intelligenz im Beruf",
    titleAr: "الذكاء الاصطناعي في العمل",
    emoji: "🤖",
    script: "Künstliche Intelligenz verändert die Arbeitswelt grundlegend. Befürworter betonen, dass KI Routineaufgaben übernimmt und die Produktivität steigert. Kritiker warnen jedoch vor Arbeitsplatzverlusten und ethischen Problemen. Experten empfehlen eine Kombination: Man sollte die Technologie nutzen, ohne die menschliche Kontrolle aufzugeben. Die Zukunft gehört denjenigen, die mit KI zusammenarbeiten können.",
    scriptAr: "يغيّر الذكاء الاصطناعي عالم العمل جذرياً. يؤكد المؤيدون أن الذكاء الاصطناعي يتولى المهام الروتينية ويزيد الإنتاجية. لكن يحذر النقاد من فقدان الوظائف ومشاكل أخلاقية. يوصي الخبراء بمزيج: يجب استخدام التقنية دون التخلي عن السيطرة البشرية. المستقبل لمن يستطيع التعاون مع الذكاء الاصطناعي.",
    questions: [
      {
        de: "Was betonen die Befürworter?",
        ar: "بماذا يؤكد المؤيدون؟",
        options: [
          { text: "KI übernimmt Routineaufgaben", ar: "الذكاء الاصطناعي يتولى المهام الروتينية", correct: true, explanation: "نعم — الحلقة تقول: «KI Routineaufgaben übernimmt und die Produktivität steigert.»." },
          { text: "KI ist viel zu gefährlich für alle", ar: "الذكاء الاصطناعي خطير جداً", correct: false, explanation: "لا — الحلقة تقول: «KI Routineaufgaben übernimmt und die Produktivität steigert.»." },
          { text: "Man sollte KI ganz verbieten", ar: "يجب منع الذكاء الاصطناعي", correct: false, explanation: "لا — الحلقة تقول: «KI Routineaufgaben übernimmt und die Produktivität steigert.»." },
        ],
      },
      {
        de: "Was empfehlen die Experten?",
        ar: "بماذا يوصي الخبراء؟",
        options: [
          { text: "KI nutzen und menschliche Kontrolle behalten", ar: "استخدام الذكاء الاصطناعي مع الحفاظ على السيطرة البشرية", correct: true, explanation: "نعم — الحلقة تقول: «Man sollte die Technologie nutzen, ohne die menschliche Kontrolle aufzugeben.»." },
          { text: "Alle Arbeit der KI vollständig überlassen", ar: "ترك كل العمل للذكاء الاصطناعي", correct: false, explanation: "لا — الحلقة تقول: «Man sollte die Technologie nutzen, ohne die menschliche Kontrolle aufzugeben.»." },
          { text: "Gar keine Technologie mehr benutzen", ar: "عدم استخدام أي تقنية", correct: false, explanation: "لا — الحلقة تقول: «Man sollte die Technologie nutzen, ohne die menschliche Kontrolle aufzugeben.»." },
        ],
      },
    ],
  },
  /* ─── B2 — حلقة إضافية ثانية ─── */
  {
    id: "p-b2-gesunde-ernaehrung",
    level: "B2",
    title: "Gesunde Ernährung im Alltag",
    titleAr: "التغذية الصحية في الحياة اليومية",
    emoji: "🥗",
    contentNoteAr: "نقاش تدريبي خيالي عن التغذية والعوامل التي تؤثر في اختيار الطعام؛ ليس تقريراً علمياً أو نصيحة غذائية. أُعيد توليد التسجيل TTS من النص المحدّث وقورن محلياً بتفريغ ASR، مع اختلاف كتابي في فصل «darauf hin». لم يُجر تقييم سمعي للوضوح أو طبيعية الأداء أو النطق.",
    script: "In dieser fiktiven Diskussionsrunde geht es um Ernährung im Alltag. Eine Person hält eine ausgewogene Ernährung für wichtig; eine andere fragt, welche Belege diese Aussage stützen. Manche Teilnehmende bevorzugen frische Zutaten, andere weisen darauf hin, dass Zeit, Preis und Verfügbarkeit die Auswahl beeinflussen. Die Runde diskutiert deshalb, wie Informationen verständlich und verschiedene Lebenslagen fair berücksichtigt werden können.",
    scriptAr: "تدور هذه الحلقة النقاشية الخيالية حول التغذية في الحياة اليومية. يرى أحد المشاركين أن الغذاء المتوازن مهم، ويسأل مشارك آخر عن الأدلة التي تسند هذا القول. يفضّل بعض المشاركين المكونات الطازجة، بينما يشير آخرون إلى أن الوقت والسعر والتوافر تؤثر في الاختيار. لذلك تناقش المجموعة كيف يمكن عرض المعلومات بوضوح ومراعاة اختلاف ظروف الناس بعدل.",
    questions: [
      {
        de: "Worauf weist ein Teilnehmender hin?",
        ar: "إلى ماذا يشير أحد المشاركين؟",
        options: [
          { text: "Zeit, Preis und Verfügbarkeit beeinflussen die Auswahl", ar: "الوقت والسعر والتوافر تؤثر في الاختيار", correct: true, explanation: "نعم — يذكر الحوار: «dass Zeit, Preis und Verfügbarkeit die Auswahl beeinflussen.»" },
          { text: "Alle Menschen wählen dieselben Lebensmittel", ar: "يختار الجميع الأطعمة نفسها", correct: false, explanation: "لا — ينصّ الحوار: «Manche Teilnehmende bevorzugen frische Zutaten, andere weisen darauf hin ...»؛ أي إنه يذكر اختلافاً لا تطابقاً." },
          { text: "Die Runde hat bereits eine Studie veröffentlicht", ar: "نشرت المجموعة دراسة بالفعل", correct: false, explanation: "لا — يصف النص لقاءً خيالياً: «In dieser fiktiven Diskussionsrunde geht es um Ernährung im Alltag» ولا يذكر نشر دراسة." },
        ],
      },
      {
        de: "Was möchte die Runde erreichen?",
        ar: "ما الذي تريد المجموعة تحقيقه؟",
        options: [
          { text: "Klare Infos und faire Rücksicht auf unterschiedliche Lebenslagen.", ar: "معلومات واضحة ومراعاة عادلة لاختلاف ظروف الناس", correct: true, explanation: "نعم — يختم الحوار: «wie Informationen verständlich und verschiedene Lebenslagen fair berücksichtigt werden können.»" },
          { text: "Eine verbindliche Ernährungsregel für alle Teilnehmenden.", ar: "فرض قاعدة غذائية ملزمة على جميع المشاركين", correct: false, explanation: "لا — لا يقترح النص قاعدة واحدة؛ بل تقول المجموعة: «In dieser fiktiven Diskussionsrunde geht es um Ernährung im Alltag»." },
          { text: "Eine persönliche Diagnose für die Ernährung aller Zuhörenden.", ar: "تشخيصاً شخصياً لتغذية جميع المستمعين", correct: false, explanation: "لا — النص يصف نقاشاً: «Die Runde diskutiert deshalb, wie Informationen verständlich und verschiedene Lebenslagen fair berücksichtigt werden können»؛ وليس تشخيصاً طبياً." },
        ],
      },
    ],
  },
];

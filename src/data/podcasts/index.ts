import type { LevelCode } from "@/types/curriculum";
import { balanceChoiceTree } from "@/lib/tests/balance-options";

/**
 * ═══════════════════════════════════════════════════════════
 *  بودكاست تعليمي مبسّط 🎧 — لكل مستوى
 *  نصوص مسموعة قصيرة (تُقرأ بـ TTS ألماني) + أسئلة فهم:
 *  · A1: مواقف يومية بسيطة جداً
 *  · A2: قصص قصيرة بسيطة عن الحياة
 *  · B1: حوارات وآراء
 *  · B2: مواضيع مجردة ونقل آراء (مؤيد/معارض)
 * ═══════════════════════════════════════════════════════════
 */

export interface PodcastQuestion {
  de: string;
  ar: string;
  options: { text: string; ar: string; correct: boolean; explanation?: string }[];
}

export interface PodcastEpisode {
  id: string;
  level: LevelCode;
  title: string;
  titleAr: string;
  emoji: string;
  /** النص المسموع (يُقرأ بـ TTS) */
  script: string;
  scriptAr: string;
  /** تنبيه تحريري عربي عند الحاجة إلى بيان حدود الادعاءات أو خيالها */
  contentNoteAr?: string;
  questions: PodcastQuestion[];
}

export const RAW_PODCASTS: PodcastEpisode[] = [
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
          { text: "Gearbeitet und E-Mails beantwortet", ar: "عملوا", correct: false, explanation: "لا — الحلقة تقول: «Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut.»." },
          { text: "Geschlafen bis zum späten Abend", ar: "ناموا", correct: false, explanation: "لا — الحلقة تقول: «Am Nachmittag haben wir einen Kuchen gebacken und Filme geschaut.»." },
        ],
      },
      {
        de: "Was haben sie am Sonntag gemacht?",
        ar: "ماذا فعلوا يوم الأحد؟",
        options: [
          { text: "Zusammen gefrühstückt und spazieren gegangen", ar: "تناولوا الفطور معاً وتمشوا", correct: true, explanation: "نعم — الحلقة تقول: «Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen.»." },
          { text: "Gearbeitet und E-Mails beantwortet", ar: "عملوا", correct: false, explanation: "لا — الحلقة تقول: «Wir haben zusammen gefrühstückt. Danach sind wir spazieren gegangen.»." },
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
          { text: "Die Zeit für das Mittagessen", ar: "وقت تناول الغداء", correct: false, explanation: "لا — لم تذكر ليا الغداء أو وقت تناوله." },
          { text: "Die Gespräche mit ihrem Team", ar: "المحادثات مع فريقها", correct: false, explanation: "لا — يقول زميلها إنه يفتقد التواصل مع الفريق، لا إن ليا توفر وقته." },
        ],
      },
      {
        de: "Was findet der Kollege schwierig?",
        ar: "ما الأمر الذي يجده الزميل صعباً؟",
        options: [
          { text: "Arbeit und Freizeit zu trennen", ar: "الفصل بين العمل ووقت الفراغ", correct: true, explanation: "نعم — يقول: «Arbeit und Freizeit zu trennen ist nicht immer leicht»." },
          { text: "Jeden Morgen mit dem Zug zur Arbeit zu fahren", ar: "الذهاب إلى العمل بالقطار كل صباح", correct: false, explanation: "لا — لا يتحدث عن قطار أو تنقّل يومي." },
          { text: "Neue Programme im Büro zu installieren", ar: "تثبيت برامج جديدة في المكتب", correct: false, explanation: "لا — لا يذكر الحوار تثبيت برامج في المكتب." },
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
    scriptAr: "اليوم عيد ميلاد إيما. ستصبح في السابعة. في الصباح تغني الأسرة: «عيد ميلاد سعيد!» تحصل إيما على هدايا كثيرة: كتاباً وكرة ودمية. بعد الظهر يأتي الأصدقاء. يأكلون الكعك ويلعبون في الحديقة.",
    questions: [
      {
        de: "Wie alt wird Emma?",
        ar: "كم ستصبح إيما؟",
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
          { text: "Den frischesten Fisch", ar: "أطازج سمك", correct: false, explanation: "لا — الحلقة تقول: «Am Stand von Frau Huber gibt es den besten Honig.»." },
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
    script: "Ernährungswissenschaftler betonen, dass eine ausgewogene Ernährung die Grundlage für Gesundheit ist. Kritiker der modernen Lebensmittelindustrie argumentieren, dass viele Produkte zu viel Zucker enthalten. Fachleute empfehlen, mehr frische Zutaten zu verwenden und Fertiggerichte zu vermeiden. Allerdings ist gesundes Essen nicht für alle bezahlbar. Deshalb fordern Experten günstigere gesunde Alternativen in Supermärkten.",
    scriptAr: "يؤكد خبراء التغذية أن الغذاء المتوازن أساس الصحة. يجادل منتقدو صناعة الأغذية الحديثة أن منتجات كثيرة تحتوي سكراً كثيراً. يوصي المختصون باستخدام مكونات طازجة أكثر وتجنب الوجبات الجاهزة. لكن الطعام الصحي ليس ميسوراً للجميع. لذلك يطالب الخبراء ببدائل صحية أرخص في المتاجر.",
    questions: [
      {
        de: "Was argumentieren Kritiker der Lebensmittelindustrie?",
        ar: "بماذا يجادل منتقدو صناعة الأغذية؟",
        options: [
          { text: "Viele Produkte enthalten zu viel Zucker", ar: "منتجات كثيرة تحتوي سكراً كثيراً", correct: true, explanation: "نعم — الحلقة تقول: «viele Produkte zu viel Zucker enthalten.»." },
          { text: "Gesundes Essen ist zu billig", ar: "الطعام الصحي رخيص جداً", correct: false, explanation: "لا — الحلقة تقول: «viele Produkte zu viel Zucker enthalten.»." },
          { text: "Man soll mehr Fertiggerichte essen", ar: "يجب أكل وجبات جاهزة أكثر", correct: false, explanation: "لا — الحلقة تقول: «viele Produkte zu viel Zucker enthalten.»." },
        ],
      },
      {
        de: "Was fordern Experten?",
        ar: "بماذا يطالب الخبراء؟",
        options: [
          { text: "Günstigere gesunde Alternativen", ar: "بدائل صحية أرخص", correct: true, explanation: "نعم — الحلقة تقول: «Deshalb fordern Experten günstigere gesunde Alternativen in Supermärkten.»." },
          { text: "Teurere Produkte in allen Läden", ar: "منتجات أغلى", correct: false, explanation: "لا — الحلقة تقول: «Deshalb fordern Experten günstigere gesunde Alternativen in Supermärkten.»." },
          { text: "Weniger frische Zutaten im Angebot", ar: "مكونات طازجة أقل", correct: false, explanation: "لا — الحلقة تقول: «Deshalb fordern Experten günstigere gesunde Alternativen in Supermärkten.»." },
        ],
      },
    ],
  },
  /* ─── A1 — حلقة ثالثة ─── */
  {
    id: "p-a1-meine-familie",
    level: "A1",
    title: "Meine Familie",
    titleAr: "عائلتي",
    emoji: "👨‍👩‍👧",
    script: "Ich habe eine kleine Familie. Mein Vater heißt Karim und meine Mutter heißt Salma. Ich habe einen Bruder und eine Schwester. Wir wohnen in einem Haus mit Garten. Am Wochenende essen wir zusammen und reden viel. Ich liebe meine Familie sehr.",
    scriptAr: "عندي عائلة صغيرة. أبي اسمه كريم وأمي اسمها سلمى. عندي أخ وأخت. نسكن في بيت فيه حديقة. في نهاية الأسبوع نأكل معاً ونتحدث كثيراً. أحب عائلتي كثيراً.",
    questions: [
      { de: "Wie viele Geschwister hat der Sprecher?", ar: "كم أخاً وأختاً للمتحدث؟", options: [
        { text: "Einen Bruder und eine Schwester", ar: "أخاً وأختاً", correct: true, explanation: "نعم — «Ich habe einen Bruder und eine Schwester»." },
        { text: "Zwei Brüder, aber keine Schwester", ar: "أخوين", correct: false, explanation: "لا — ليس أخوين بلا أخت؛ بل «Ich habe einen Bruder und eine Schwester»." },
        { text: "Keine Geschwister in der Familie", ar: "لا إخوة", correct: false, explanation: "لا — له إخوةٌ صراحةً: «Ich habe einen Bruder und eine Schwester»." },
      ]},
      { de: "Wo wohnt die Familie?", ar: "أين تسكن العائلة؟", options: [
        { text: "In einem Haus mit Garten", ar: "في بيت فيه حديقة", correct: true, explanation: "نعم — الحلقة تقول: «Wir wohnen in einem Haus mit Garten.»." },
        { text: "In einer kleinen Wohnung", ar: "في شقة", correct: false, explanation: "لا — ليست شقة Wohnung؛ بل «Wir wohnen in einem Haus mit Garten»." },
        { text: "In einem Hotel am Meer", ar: "في فندق", correct: false, explanation: "لا — لم يُذكر فندق Hotel ولا بحر؛ والمسكن «in einem Haus mit Garten»." },
      ]},
    ],
  },
  /* ─── A2 — حلقة ثالثة ─── */
  {
    id: "p-a2-kinoabend",
    level: "A2",
    title: "Ein Kinoabend",
    titleAr: "أمسية سينما",
    emoji: "🎬",
    script: "Am Freitagabend sind wir ins Kino gegangen. Wir haben einen spannenden Film gesehen. Danach haben wir in einem Café geredet und Eis gegessen. Der Film hat zwei Stunden gedauert. Ich fand den Film sehr gut, aber meine Freundin fand ihn langweilig.",
    scriptAr: "مساء الجمعة ذهبنا إلى السينما. شاهدنا فيلماً مثيراً. ثم تحدثنا في مقهى وأكلنا آيس كريم. استمر الفيلم ساعتين. وجدت الفيلم جيداً جداً لكن صديقتي وجدته مملاً.",
    questions: [
      { de: "Wann sind sie ins Kino gegangen?", ar: "متى ذهبوا إلى السينما؟", options: [
        { text: "Am Freitagabend", ar: "مساء الجمعة", correct: true, explanation: "نعم — «Am Freitagabend sind wir ins Kino gegangen»." },
        { text: "Am Montagmorgen", ar: "صباح الاثنين", correct: false, explanation: "لا — ليس صباح الاثنين Montagmorgen؛ بل «Am Freitagabend sind wir ins Kino gegangen»." },
        { text: "Am Sonntag", ar: "يوم الأحد", correct: false, explanation: "لا — لم يُذكر الأحد Sonntag؛ والخروج كان «Am Freitagabend»." },
      ]},
      { de: "Wie lange hat der Film gedauert?", ar: "كم استمر الفيلم؟", options: [
        { text: "Zwei Stunden", ar: "ساعتين", correct: true, explanation: "نعم — الحلقة تقول: «Der Film hat zwei Stunden gedauert.»." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — ليست ساعة واحدة؛ بل «Der Film hat zwei Stunden gedauert»." },
        { text: "Drei Stunden", ar: "ثلاث ساعات", correct: false, explanation: "لا — لم تُذكر ثلاث Stunden؛ والمدة «zwei Stunden gedauert»." },
      ]},
    ],
  },
  /* ─── B1 — حلقة رابعة ─── */
  {
    id: "p-b1-gesundheit",
    level: "B1",
    title: "Gesund leben",
    titleAr: "العيش بصحة",
    emoji: "🥗",
    // WHO adult guideline: 150–300 min moderate or 75–150 min vigorous activity weekly; stairs count as everyday physical activity.
    // https://www.who.int/europe/news-room/fact-sheets/item/physical-activity
    script: "Die Weltgesundheitsorganisation empfiehlt Erwachsenen pro Woche 150 bis 300 Minuten Bewegung mit mittlerer Intensität oder 75 bis 150 Minuten mit hoher Intensität. Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen. Die Zeit kann über die Woche verteilt werden. Die Empfehlung ist allgemein und ersetzt keine persönliche medizinische Beratung.",
    scriptAr: "توصي منظمة الصحة العالمية البالغين 150 إلى 300 دقيقة أسبوعياً من الحركة متوسطة الشدة، أو 75 إلى 150 دقيقة من الحركة الشديدة. وتُحسب الحركة اليومية أيضاً، مثل صعود الدرج. ويمكن توزيع الوقت على أيام الأسبوع. هذه توصية عامة وليست بديلاً عن المشورة الطبية الشخصية.",
    questions: [
      { de: "Was empfiehlt die WHO Erwachsenen?", ar: "بماذا توصي منظمة الصحة العالمية للبالغين؟", options: [
        { text: "Wöchentlich 150 bis 300 Minuten mit mittlerer oder 75 bis 150 Minuten mit hoher Intensität", ar: "أسبوعياً 150–300 دقيقة متوسطة الشدة أو 75–150 دقيقة شديدة الشدة", correct: true, explanation: "نعم — يذكر النص: «150 bis 300 Minuten Bewegung mit mittlerer Intensität oder 75 bis 150 Minuten mit hoher Intensität»." },
        { text: "Nur Bewegung im Fitnessstudio", ar: "الحركة في النادي الرياضي فقط", correct: false, explanation: "لا — لا يحصر النص النشاط في النادي الرياضي؛ يذكر حركة الحياة اليومية أيضاً." },
        { text: "Treppensteigen zählt nicht als Bewegung", ar: "صعود الدرج لا يُعد حركة", correct: false, explanation: "لا — يقول النص: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen»." },
      ]},
      { de: "Was zählt laut WHO als Bewegung im Alltag?", ar: "ما الذي يُحسب حركةً في الحياة اليومية وفقاً لمنظمة الصحة العالمية؟", options: [
        { text: "Treppensteigen", ar: "صعود الدرج", correct: true, explanation: "نعم — يقول النص: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
        { text: "Öfter mit dem Auto fahren", ar: "قيادة السيارة أكثر", correct: false, explanation: "لا — لا يذكر النص السيارة؛ بل يقول: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
        { text: "Mehr Fastfood am Abend essen", ar: "أكل وجبات سريعة أكثر", correct: false, explanation: "لا — لا يتناول النص الطعام؛ بل يقول: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
      ]},
    ],
  },
  /* ─── B2 — حلقة خامسة ─── */
  {
    id: "p-b2-work-life-balance",
    level: "B2",
    title: "Work-Life-Balance",
    titleAr: "التوازن بين العمل والحياة",
    emoji: "⚖️",
    script: "Die Work-Life-Balance ist heute ein zentrales Thema. Viele Arbeitnehmer klagen über Überstunden und ständige Erreichbarkeit. Experten betonen, dass Erholung für die Produktivität unerlässlich ist. Unternehmen reagieren mit flexiblen Arbeitszeiten. Dennoch bleibt die Frage: Wie findet man die richtige Balance? Die Antwort ist individuell und hängt von den eigenen Werten ab.",
    scriptAr: "التوازن بين العمل والحياة موضوع محوري اليوم. يشكو موظفون كثيرون من الساعات الإضافية والاتصال الدائم. يؤكد الخبراء أن الراحة ضرورية للإنتاجية. تستجيب الشركات بساعات عمل مرنة. ومع ذلك يبقى السؤال: كيف يجد المرء التوازن الصحيح؟ الجواب فردي ويعتمد على القيم الشخصية.",
    contentNoteAr: "هذا نص تدريبي مبسّط، لا تقرير إحصائي. عبارتا «موظفون كثيرون» و«يؤكد الخبراء» تعميمان غير منسوبين في الحلقة إلى مصدر محدد، ولا تثبت المصادر المشار إليها جميع ادعاءاتها.",
    questions: [
      { de: "Worüber klagen viele Arbeitnehmer?", ar: "ممَّ يشكو كثير من الموظفين؟", options: [
        { text: "Über Überstunden und ständige Erreichbarkeit", ar: "من الساعات الإضافية والاتصال الدائم", correct: true, explanation: "نعم — الحلقة تقول: «Viele Arbeitnehmer klagen über Überstunden und ständige Erreichbarkeit.»." },
        { text: "Über zu viel Urlaub und zu freie Tage", ar: "من الإجازات الكثيرة", correct: false, explanation: "لا — ليست الإجازات الكثيرة Urlaub؛ والشكوى «über Überstunden und ständige Erreichbarkeit»." },
        { text: "Über zu wenig Arbeit und Langeweile", ar: "من قلة العمل", correct: false, explanation: "لا — ليست قلّة العمل ولا الملل Langeweile؛ بل «Viele Arbeitnehmer klagen über Überstunden»." },
      ]},
      { de: "Wie reagieren Unternehmen?", ar: "كيف تستجيب الشركات؟", options: [
        { text: "Mit flexiblen Arbeitszeiten", ar: "بساعات عمل مرنة", correct: true, explanation: "نعم — الحلقة تقول: «Unternehmen reagieren mit flexiblen Arbeitszeiten.»." },
        { text: "Mit noch mehr Überstunden", ar: "بمزيد من الساعات الإضافية", correct: false, explanation: "لا — ليس بمزيد من الساعات الإضافية؛ بل «Unternehmen reagieren mit flexiblen Arbeitszeiten»." },
        { text: "Mit deutlich weniger Lohn", ar: "برواتب أقل", correct: false, explanation: "لا — لم يُذكر أجر Lohn؛ والاستجابة «mit flexiblen Arbeitszeiten»." },
      ]},
    ],
  },
  /* ─── B2 — حلقة سادسة ─── */
  {
    id: "p-b2-migration",
    level: "B2",
    title: "Migration und Identität",
    titleAr: "الهجرة والهوية",
    emoji: "🪪",
    script: "In dieser Übungsfolge erzählt Samira von ihrem Umzug nach Bremen. Am Anfang fühlte sie sich oft unsicher und fragte sich, wo sie sich zu Hause fühlte. In ihrem neuen Team brachte sie ihre Erfahrungen ein. Mit der Zeit fand sie Menschen, bei denen sie sich wohlfühlte. Für Samira gehört beides zu ihrer Identität: Erinnerungen an früher und ihr Leben heute. Andere Menschen erleben Zugehörigkeit anders.",
    scriptAr: "تحكي سميرة في هذه الحلقة التدريبية عن انتقالها إلى بريمن. في البداية شعرت بعدم الأمان كثيراً وتساءلت أين شعرت بأنها في بيتها. وفي فريقها الجديد شاركت خبراتها. ومع الوقت وجدت أشخاصاً ارتاحت إليهم. وبالنسبة إلى سميرة، تتألف هويتها من الأمرين: ذكريات الماضي وحياتها اليوم. وقد يختبر أشخاص آخرون الانتماء على نحو مختلف.",
    contentNoteAr: "مشهد تدريبي خيالي عن تجربة سميرة الفردية، وليس وصفاً إحصائياً أو بحثاً عن الهجرة والهوية. التسجيل الصوتي لم يُحدّث أو يُطابق مع النص في هذه المراجعة؛ ففحص الإشارة لا يثبت التطابق.",
    questions: [
      { de: "Wie fühlte sich Samira am Anfang?", ar: "كيف شعرت سميرة في البداية؟", options: [
        { text: "Oft unsicher", ar: "بعدم الأمان كثيراً", correct: true, explanation: "نعم — يقول النص: «Am Anfang fühlte sie sich oft unsicher»." },
        { text: "Immer gelangweilt", ar: "بالملل دائماً", correct: false, explanation: "لا — لم يذكر النص الملل؛ بل أنها شعرت بعدم الأمان كثيراً في البداية." },
        { text: "Sofort zu Hause", ar: "بأنها في بيتها فوراً", correct: false, explanation: "لا — تساءلت في البداية أين تشعر بأنها في بيتها." },
      ]},
      { de: "Was gehört für Samira zu ihrer Identität?", ar: "ما الذي يشكل هوية سميرة بحسب تجربتها؟", options: [
        { text: "Frühere Erinnerungen und ihr heutiges Leben", ar: "ذكريات الماضي وحياتها اليوم", correct: true, explanation: "نعم — يقول النص: «Für Samira gehört beides zu ihrer Identität: Erinnerungen an früher und ihr Leben heute»." },
        { text: "Ihr Team und ihr Beruf im neuen Umfeld", ar: "فريقها وعملها في محيطها الجديد", correct: false, explanation: "لا — لا يحصر النص الهوية في الفريق أو العمل؛ بل يذكر الذكريات والحياة الحالية." },
        { text: "Nur ihr früherer Wohnort und ihre Sprache", ar: "مكان إقامتها السابق ولغتها فقط", correct: false, explanation: "لا — النص لا يحصر هويتها في مكان أو لغة؛ بل يذكر ذكريات الماضي وحياتها اليوم." },
      ]},
    ],
  },
  /* ─── B1 — حلقة خامسة ─── */
  {
    id: "p-b1-lernen",
    level: "B1",
    title: "Sprachen lernen",
    titleAr: "تعلم اللغات",
    emoji: "🧠",
    script: "Warum lernen wir Sprachen? Es gibt viele Gründe: Reisen, Beruf oder Kultur. Wissenschaftler sagen, dass Sprachenlernen das Gehirn trainiert. Der beste Weg ist, regelmäßig zu üben. Man sollte nicht Angst vor Fehlern haben. Wichtig ist auch, die Sprache aktiv zu benutzen, zum Beispiel mit Muttersprachlern zu sprechen. Jeder Fehler ist ein Schritt zum Erfolg.",
    scriptAr: "لماذا نتعلم اللغات؟ أسباب كثيرة: السفر أو العمل أو الثقافة. يقول العلماء إن تعلم اللغات يدرب الدماغ. أفضل طريقة هي التدرب بانتظام. يجب ألا يخاف المرء من الأخطاء. المهم أيضاً استخدام اللغة بنشاط، مثلاً التحدث مع الناطقين الأصليين. كل خطأ خطوة نحو النجاح.",
    questions: [
      { de: "Was sagen Wissenschaftler über Sprachenlernen?", ar: "ماذا يقول العلماء عن تعلم اللغات؟", options: [
        { text: "Es trainiert das Gehirn", ar: "إنه يدرب الدماغ", correct: true, explanation: "نعم — الحلقة تقول: «Wissenschaftler sagen, dass Sprachenlernen das Gehirn trainiert.»." },
        { text: "Es ist nur für Kinder", ar: "إنه للأطفال فقط", correct: false, explanation: "لا — لم يُخصَّص للأطفال Kinder؛ والأسباب عامّة: «Reisen, Beruf oder Kultur»." },
        { text: "Es ist unmöglich", ar: "إنه مستحيل", correct: false, explanation: "لا — لم يُوصف بالاستحالة unmöglich؛ بل «Sprachenlernen das Gehirn trainiert»." },
      ]},
      { de: "Was ist der beste Weg?", ar: "ما أفضل طريقة؟", options: [
        { text: "Regelmäßig und viel üben", ar: "التدرب بانتظام", correct: true, explanation: "نعم — الحلقة تقول: «Der beste Weg ist, regelmäßig zu üben.»." },
        { text: "Nur Grammatik lernen", ar: "تعلم القواعد فقط", correct: false, explanation: "لا — لم تُذكر قواعد Grammatik؛ والطريق «regelmäßig zu üben» مع «die Sprache aktiv zu benutzen»." },
        { text: "Keine Fehler machen wollen", ar: "عدم الرغبة في الخطأ", correct: false, explanation: "لا — الخوف من الخطأ منهيٌّ عنه: «Man sollte nicht Angst vor Fehlern haben»." },
      ]},
    ],
  },
  /* ─── A2 — حلقة رابعة ─── */
  {
    id: "p-a2-wohnung",
    level: "A2",
    title: "Die neue Wohnung",
    titleAr: "الشقة الجديدة",
    emoji: "🏠",
    script: "Meine Familie hat eine neue Wohnung gefunden. Sie liegt im dritten Stock und hat drei Zimmer. Die Küche ist modern und das Bad ist neu. Die Miete ist ein bisschen hoch, aber die Lage ist perfekt: Die U-Bahn ist nur fünf Minuten entfernt. Wir sind sehr zufrieden.",
    scriptAr: "وجدت عائلتي شقة جديدة. تقع في الطابق الثالث فوق الأرضي وتحتوي على ثلاث غرف. المطبخ حديث والحمام جديد. الإيجار مرتفع قليلاً لكن الموقع مثالي: محطة المترو تبعد خمس دقائق فقط. نحن راضون جداً.",
    questions: [
      { de: "In welchem Stock liegt die Wohnung?", ar: "في أي طابق تقع الشقة؟", options: [
        { text: "Im dritten Stock", ar: "في الطابق الثالث فوق الأرضي", correct: true, explanation: "نعم — الحلقة تقول: «Sie liegt im dritten Stock.»." },
        { text: "Im ersten Stock", ar: "في الطابق الأول فوق الأرضي", correct: false, explanation: "لا — ليس الطابق الأول؛ بل «Sie liegt im dritten Stock»." },
        { text: "Im fünften Stock", ar: "في الطابق الخامس فوق الأرضي", correct: false, explanation: "لا — لم يُذكر الطابق الخامس fünften؛ والشقة «im dritten Stock»." },
      ]},
      { de: "Wie weit ist die U-Bahn?", ar: "كم تبعد محطة المترو؟", options: [
        { text: "Fünf Minuten", ar: "خمس دقائق", correct: true, explanation: "نعم — الحلقة تقول: «Die U-Bahn ist nur fünf Minuten entfernt.»." },
        { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — ليست ثلاثين دقيقة؛ بل «Die U-Bahn ist nur fünf Minuten entfernt»." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — لم تُذكر ساعة Stunde؛ والمسافة «nur fünf Minuten entfernt»." },
      ]},
    ],
  },
];
/**
 * الحلقات كما تُعرض: مواضع الإجابات موزّعة (كانت 40/40 = 100% في الأول).
 * النصّ المسموع `script` لا يُمسّ — التحويل على أسئلة الفهم فقط.
 * `RAW_PODCASTS` نسخة التدقيق للحرّاس فقط — بلا مستهلك إنتاجي.
 */
export const PODCASTS: PodcastEpisode[] = RAW_PODCASTS.map((item, index) => balanceChoiceTree(item, index + 1));


/** بودكاستات مستوى معيّن */
export function getPodcastsByLevel(level: LevelCode): PodcastEpisode[] {
  return PODCASTS.filter((p) => p.level === level);
}

export const PODCAST_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

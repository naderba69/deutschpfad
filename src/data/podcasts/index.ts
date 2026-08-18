import type { LevelCode } from "@/types/curriculum";

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
  questions: PodcastQuestion[];
}

export const PODCASTS: PodcastEpisode[] = [
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
          { text: "Am Samstag", ar: "يوم السبت", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Am Samstag» (يوم السبت)." },
          { text: "Am Montag", ar: "يوم الاثنين", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Am Abend", ar: "في المساء", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was kauft Anna?",
        ar: "ماذا تشتري آنا؟",
        options: [
          { text: "Äpfel, Tomaten und Brot", ar: "تفاحاً وطماطم وخبزاً", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Äpfel, Tomaten und Brot» (تفاحاً وطماطم وخبزاً)." },
          { text: "Milch und Käse", ar: "حليباً وجبناً", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Fisch und Fleisch", ar: "سمكاً ولحماً", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
    script: "Ich habe eine Katze. Sie heißt Mimi. Mimi ist klein und grau. Sie schläft am Tag und spielt in der Nacht. Ich mag meine Katze. Mimi ist mein bester Freund.",
    scriptAr: "عندي قطة. اسمها ميمي. ميمي صغيرة ورمادية. تنام نهاراً وتلعب ليلاً. أحب قطتي. ميمي أفضل صديق لي.",
    questions: [
      {
        de: "Wie heißt die Katze?",
        ar: "ما اسم القطة؟",
        options: [
          { text: "Mimi", ar: "ميمي", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Mimi» (ميمي)." },
          { text: "Luna", ar: "لونا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Mia", ar: "ميا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Wann schläft die Katze?",
        ar: "متى تنام القطة؟",
        options: [
          { text: "Am Tag", ar: "في النهار", correct: true, explanation: "نعم — «Sie schläft am Tag und spielt in der Nacht»." },
          { text: "In der Nacht", ar: "في الليل", correct: false, explanation: "لا — في الليل تلعب لا تنام." },
          { text: "Immer", ar: "دائماً", correct: false, explanation: "لا — تنام نهاراً وتلعب ليلاً." },
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
          { text: "Kuchen gebacken und Filme geschaut", ar: "خبزوا كعكة وشاهدوا أفلاماً", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Kuchen gebacken und Filme geschaut» (خبزوا كعكة وشاهدوا أفلاماً)." },
          { text: "Gearbeitet", ar: "عملوا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Geschlafen", ar: "ناموا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was haben sie am Sonntag gemacht?",
        ar: "ماذا فعلوا يوم الأحد؟",
        options: [
          { text: "Zusammen gefrühstückt und spazieren gegangen", ar: "تناولوا الفطور معاً وتمشوا", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Zusammen gefrühstückt und spazieren gegangen» (تناولوا الفطور معاً وتمشوا)." },
          { text: "Gearbeitet", ar: "عملوا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Geschlafen", ar: "ناموا", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Drei Stunden", ar: "ثلاث ساعات", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Drei Stunden» (ثلاث ساعات)." },
          { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Einen Tag", ar: "يوماً", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Wen hat er in Hamburg besucht?",
        ar: "من زار في هامبورغ؟",
        options: [
          { text: "Seinen Freund", ar: "صديقه", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Seinen Freund» (صديقه)." },
          { text: "Seine Eltern", ar: "والديه", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Seinen Lehrer", ar: "معلمه", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Mit dem Fahrrad fahren", ar: "ركوب الدراجة", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Mit dem Fahrrad fahren» (ركوب الدراجة)." },
          { text: "Mehr Auto fahren", ar: "قيادة السيارة أكثر", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Mehr Plastik benutzen", ar: "استخدام بلاستيك أكثر", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was meinen andere Menschen?",
        ar: "ماذا يعتقد الآخرون؟",
        options: [
          { text: "Die Politik muss etwas ändern", ar: "السياسة يجب أن تغيّر شيئاً", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Die Politik muss etwas ändern» (السياسة يجب أن تغيّر شيئاً)." },
          { text: "Man muss nichts ändern", ar: "لا يجب تغيير أي شيء", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Autos sind besser", ar: "السيارات أفضل", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
    script: "Immer mehr Leute arbeiten im Homeoffice. Ein Vorteil ist, dass man keine Zeit im Verkehr verliert. Man kann besser konzentrieren. Aber es gibt auch Nachteile. Man sieht seine Kollegen nicht so oft. Das kann einsam machen. Und die Grenze zwischen Arbeit und Freizeit wird schwer.",
    scriptAr: "المزيد والمزيد من الناس يعملون من المنزل. من المزايا أنك لا تضيّع وقتاً في الزحام. يمكنك التركيز بشكل أفضل. لكن هناك أيضاً عيوباً. لا ترى زملاءك كثيراً. هذا قد يسبب الوحدة. ويصبح الحد بين العمل والفراغ صعباً.",
    questions: [
      {
        de: "Was ist ein Vorteil von Homeoffice?",
        ar: "ما ميزة العمل من المنزل؟",
        options: [
          { text: "Keine Zeit im Verkehr verlieren", ar: "عدم إضاعة وقت في الزحام", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Keine Zeit im Verkehr verlieren» (عدم إضاعة وقت في الزحام)." },
          { text: "Mehr Kollegen sehen", ar: "رؤية زملاء أكثر", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Weniger arbeiten", ar: "عمل أقل", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was kann im Homeoffice schwer sein?",
        ar: "ما الذي قد يصعب في العمل من المنزل؟",
        options: [
          { text: "Die Grenze zwischen Arbeit und Freizeit", ar: "الحد بين العمل والفراغ", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Die Grenze zwischen Arbeit und Freizeit» (الحد بين العمل والفراغ)." },
          { text: "Der Weg zur Arbeit", ar: "الطريق إلى العمل", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Die Kollegen", ar: "الزملاء", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      }
    ],
  },
  /* ─── B2 ─── */
  {
    id: "p-b2-digitalisierung",
    level: "B2",
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
          { text: "Digitalisierung erleichtert den Alltag", ar: "الرقمنة تسهّل الحياة اليومية", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Digitalisierung erleichtert den Alltag» (الرقمنة تسهّل الحياة اليومية)." },
          { text: "Digitalisierung ist gefährlich", ar: "الرقمنة خطيرة", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Man soll keine Technologie benutzen", ar: "لا يجب استخدام التقنية", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Wovor warnen die Kritiker?",
        ar: "مماذا يحذر النقاد؟",
        options: [
          { text: "Vor Datenschutzproblemen und Isolation", ar: "من مشاكل حماية البيانات والعزلة", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Vor Datenschutzproblemen und Isolation» (من مشاكل حماية البيانات والعزلة)." },
          { text: "Vor zu viel Bewegung", ar: "من الحركة الزائدة", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Vor schlechtem Wetter", ar: "من سوء الطقس", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Freieren Handel und kulturellen Austausch", ar: "تجارة حرة وتبادلاً ثقافياً", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Freieren Handel und kulturellen Austausch» (تجارة حرة وتبادلاً ثقافياً)." },
          { text: "Weniger Reisen", ar: "سفراً أقل", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Keine Veränderungen", ar: "لا تغييرات", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Worüber sind sich Experten uneinig?",
        ar: "في ماذا يختلف الخبراء؟",
        options: [
          { text: "Ob die Vorteile die Nachteile überwiegen", ar: "هل تفوق المزايا العيوب", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Ob die Vorteile die Nachteile überwiegen» (هل تفوق المزايا العيوب)." },
          { text: "Ob es Globalisierung gibt", ar: "هل توجد عولمة", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Ob Handel legal ist", ar: "هل التجارة قانونية", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Sieben Jahre", ar: "سبع سنوات", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Sieben Jahre» (سبع سنوات)." },
          { text: "Sechs Jahre", ar: "ست سنوات", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Acht Jahre", ar: "ثماني سنوات", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was machen die Freunde am Nachmittag?",
        ar: "ماذا يفعل الأصدقاء بعد الظهر؟",
        options: [
          { text: "Sie essen Kuchen und spielen", ar: "يأكلون الكعك ويلعبون", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Sie essen Kuchen und spielen» (يأكلون الكعك ويلعبون)." },
          { text: "Sie schlafen", ar: "ينامون", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Sie lernen Deutsch", ar: "يتعلمون الألمانية", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Jeden Freitag", ar: "كل جمعة", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Jeden Freitag» (كل جمعة)." },
          { text: "Jeden Montag", ar: "كل اثنين", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Jeden Sonntag", ar: "كل أحد", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was gibt es bei Frau Huber?",
        ar: "ماذا يوجد عند السيدة هوبر؟",
        options: [
          { text: "Den besten Honig", ar: "أفضل عسل", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Den besten Honig» (أفضل عسل)." },
          { text: "Die billigsten Äpfel", ar: "أرخص تفاح", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Den frischesten Fisch", ar: "أطازج سمك", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Man lernt neue Kulturen kennen", ar: "تتعرف على ثقافات جديدة", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Man lernt neue Kulturen kennen» (تتعرف على ثقافات جديدة)." },
          { text: "Man spart Geld", ar: "توفر المال", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Man schont die Umwelt", ar: "تحمي البيئة", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Warum bleiben manche lieber zu Hause?",
        ar: "لماذا يفضل البعض البقاء في البيت؟",
        options: [
          { text: "Reisen ist teuer und anstrengend", ar: "السفر مكلف ومتعب", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Reisen ist teuer und anstrengend» (السفر مكلف ومتعب)." },
          { text: "Sie mögen keine Ausflüge", ar: "لا يحبون الرحلات", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Sie haben keine Freunde", ar: "ليس لديهم أصدقاء", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
    ],
  },
  /* ─── B2 — حلقة إضافية ─── */
  {
    id: "p-b2-kuenstliche-intelligenz",
    level: "B2",
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
          { text: "KI übernimmt Routineaufgaben", ar: "الذكاء الاصطناعي يتولى المهام الروتينية", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «KI übernimmt Routineaufgaben» (الذكاء الاصطناعي يتولى المهام الروتينية)." },
          { text: "KI ist zu gefährlich", ar: "الذكاء الاصطناعي خطير جداً", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Man soll KI verbieten", ar: "يجب منع الذكاء الاصطناعي", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was empfehlen die Experten?",
        ar: "بماذا يوصي الخبراء؟",
        options: [
          { text: "KI nutzen und menschliche Kontrolle behalten", ar: "استخدام الذكاء الاصطناعي مع الحفاظ على السيطرة البشرية", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «KI nutzen und menschliche Kontrolle behalten» (استخدام الذكاء الاصطناعي مع الحفاظ على السيطرة البشرية)." },
          { text: "Alle Arbeit der KI überlassen", ar: "ترك كل العمل للذكاء الاصطناعي", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Keine Technologie benutzen", ar: "عدم استخدام أي تقنية", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
          { text: "Viele Produkte enthalten zu viel Zucker", ar: "منتجات كثيرة تحتوي سكراً كثيراً", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Viele Produkte enthalten zu viel Zucker» (منتجات كثيرة تحتوي سكراً كثيراً)." },
          { text: "Gesundes Essen ist zu billig", ar: "الطعام الصحي رخيص جداً", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Man soll mehr Fertiggerichte essen", ar: "يجب أكل وجبات جاهزة أكثر", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
        ],
      },
      {
        de: "Was fordern Experten?",
        ar: "بماذا يطالب الخبراء؟",
        options: [
          { text: "Günstigere gesunde Alternativen", ar: "بدائل صحية أرخص", correct: true, explanation: "نعم — هذا ما ورد في الحلقة: «Günstigere gesunde Alternativen» (بدائل صحية أرخص)." },
          { text: "Teurere Produkte", ar: "منتجات أغلى", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
          { text: "Weniger frische Zutaten", ar: "مكونات طازجة أقل", correct: false, explanation: "لا — الصواب هو ما ذُكر في الحلقة." },
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
        { text: "Zwei Brüder", ar: "أخوين", correct: false, explanation: "لا — أخ واحد وأخت واحدة." },
        { text: "Keine Geschwister", ar: "لا إخوة", correct: false, explanation: "لا — لديه أخ وأخت." },
      ]},
      { de: "Wo wohnt die Familie?", ar: "أين تسكن العائلة؟", options: [
        { text: "In einem Haus mit Garten", ar: "في بيت فيه حديقة", correct: true, explanation: "صحيح — المنزل فيه حديقة." },
        { text: "In einer Wohnung", ar: "في شقة", correct: false, explanation: "لا — بيت مع حديقة." },
        { text: "In einem Hotel", ar: "في فندق", correct: false, explanation: "لا — بيت العائلة." },
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
        { text: "Am Montagmorgen", ar: "صباح الاثنين", correct: false, explanation: "لا — مساء الجمعة." },
        { text: "Am Sonntag", ar: "يوم الأحد", correct: false, explanation: "لا — الجمعة." },
      ]},
      { de: "Wie lange hat der Film gedauert?", ar: "كم استمر الفيلم؟", options: [
        { text: "Zwei Stunden", ar: "ساعتين", correct: true, explanation: "صحيح — مدة الفيلم ساعتان." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — ساعتان." },
        { text: "Drei Stunden", ar: "ثلاث ساعات", correct: false, explanation: "لا — ساعتان." },
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
    script: "Immer mehr Menschen achten auf ihre Gesundheit. Sie essen mehr Gemüse und treiben regelmäßig Sport. Ärzte empfehlen, mindestens 30 Minuten pro Tag aktiv zu sein. Natürlich ist das nicht immer einfach. Aber kleine Änderungen können viel bewirken. Zum Beispiel die Treppe statt des Aufzugs zu nehmen.",
    scriptAr: "المزيد والمزيد من الناس يهتمون بصحتهم. يأكلون خضروات أكثر ويمارسون الرياضة بانتظام. يوصي الأطباء بالنشاط 30 دقيقة على الأقل يومياً. طبعاً هذا ليس سهلاً دائماً. لكن التغييرات الصغيرة يمكن أن تفعل الكثير. مثلاً أخذ الدرج بدل المصعد.",
    questions: [
      { de: "Was empfehlen Ärzte?", ar: "بماذا يوصي الأطباء؟", options: [
        { text: "Mindestens 30 Minuten aktiv pro Tag", ar: "النشاط 30 دقيقة يومياً على الأقل", correct: true, explanation: "نعم — التوصية الأساسية." },
        { text: "Weniger als 10 Minuten pro Tag", ar: "أقل من 10 دقائق يومياً", correct: false, explanation: "لا — 30 دقيقة على الأقل." },
        { text: "Kein Sport", ar: "لا رياضة", correct: false, explanation: "لا — الرياضة موصى بها." },
      ]},
      { de: "Was ist ein Beispiel für eine kleine Änderung?", ar: "ما مثال على تغيير صغير؟", options: [
        { text: "Die Treppe statt des Aufzugs nehmen", ar: "أخذ الدرج بدل المصعد", correct: true, explanation: "صحيح — مثال بسيط وفعّال." },
        { text: "Mehr Auto fahren", ar: "قيادة السيارة أكثر", correct: false, explanation: "لا — عكس النصيحة." },
        { text: "Mehr Fastfood essen", ar: "أكل وجبات سريعة أكثر", correct: false, explanation: "لا — عكس النصيحة." },
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
    questions: [
      { de: "Worüber klagen viele Arbeitnehmer?", ar: "عماذا يشكو موظفون كثيرون؟", options: [
        { text: "Über Überstunden und ständige Erreichbarkeit", ar: "من الساعات الإضافية والاتصال الدائم", correct: true, explanation: "نعم — الشكوى الأساسية." },
        { text: "Über zu viel Urlaub", ar: "من الإجازات الكثيرة", correct: false, explanation: "لا — عكس الواقع." },
        { text: "Über zu wenig Arbeit", ar: "من قلة العمل", correct: false, explanation: "لا — من كثرة العمل." },
      ]},
      { de: "Wie reagieren Unternehmen?", ar: "كيف تستجيب الشركات؟", options: [
        { text: "Mit flexiblen Arbeitszeiten", ar: "بساعات عمل مرنة", correct: true, explanation: "صحيح — الاستجابة المرنة." },
        { text: "Mit mehr Überstunden", ar: "بمزيد من الساعات الإضافية", correct: false, explanation: "لا — العكس." },
        { text: "Mit weniger Lohn", ar: "برواتب أقل", correct: false, explanation: "لا — لا علاقة." },
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
    script: "Migration prägt die deutsche Gesellschaft seit Jahrzehnten. Menschen mit Migrationshintergrund bringen neue Perspektiven in Wirtschaft und Kultur. Gleichzeitig kämpfen viele mit Identitätsfragen: Wo gehören sie hin? Experten betonen, dass hybride Identitäten keine Schwäche sind, sondern eine Bereicherung. Die Gesellschaft profitiert von Vielfalt, wenn sie Offenheit und Respekt praktiziert.",
    scriptAr: "تشكل الهجرة المجتمع الألماني منذ عقود. يقدم ذوو الخلفية الهجرية منظورات جديدة في الاقتصاد والثقافة. في نفس الوقت يكافح كثيرون مع أسئلة الهوية: إلى أين ينتمون؟ يؤكد الخبراء أن الهويات الهجينة ليست ضعفاً بل إثراءً. يستفيد المجتمع من التنوع عندما يمارس الانفتاح والاحترام.",
    questions: [
      { de: "Was bringen Menschen mit Migrationshintergrund?", ar: "ماذا يقدم ذوو الخلفية الهجرية؟", options: [
        { text: "Neue Perspektiven", ar: "منظورات جديدة", correct: true, explanation: "نعم — إثراء للمجتمع." },
        { text: "Nur Probleme", ar: "مشاكل فقط", correct: false, explanation: "لا — منظورات جديدة في الاقتصاد والثقافة." },
        { text: "Weniger Vielfalt", ar: "تنوعاً أقل", correct: false, explanation: "لا — العكس." },
      ]},
      { de: "Was betonen Experten über hybride Identitäten?", ar: "ماذا يؤكد الخبراء عن الهويات الهجينة؟", options: [
        { text: "Sie sind eine Bereicherung", ar: "إنها إثراء", correct: true, explanation: "صحيح — ليست ضعفاً بل إثراء." },
        { text: "Sie sind eine Schwäche", ar: "إنها ضعف", correct: false, explanation: "لا — العكس." },
        { text: "Sie sind selten", ar: "إنها نادرة", correct: false, explanation: "لا — شائعة بين المهاجرين." },
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
        { text: "Es trainiert das Gehirn", ar: "إنه يدرب الدماغ", correct: true, explanation: "نعم — فائدة معرفية." },
        { text: "Es ist nur für Kinder", ar: "إنه للأطفال فقط", correct: false, explanation: "لا — للجميع." },
        { text: "Es ist unmöglich", ar: "إنه مستحيل", correct: false, explanation: "لا — ممكن بالتدرب." },
      ]},
      { de: "Was ist der beste Weg?", ar: "ما أفضل طريقة؟", options: [
        { text: "Regelmäßig üben", ar: "التدرب بانتظام", correct: true, explanation: "صحيح — الانتظام مفتاح النجاح." },
        { text: "Nur Grammatik lernen", ar: "تعلم القواعد فقط", correct: false, explanation: "لا — التدرب والاستخدام." },
        { text: "Keine Fehler machen wollen", ar: "عدم الرغبة في الخطأ", correct: false, explanation: "لا — الأخطاء جزء من التعلم." },
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
    scriptAr: "وجدت عائلتي شقة جديدة. تقع في الطابق الثالث وتحتوي ثلاث غرف. المطبخ حديث والحمام جديد. الإيجار مرتفع قليلاً لكن الموقع مثالي: مترو الأنفاق على بعد خمس دقائق فقط. نحن راضون جداً.",
    questions: [
      { de: "In welchem Stock liegt die Wohnung?", ar: "في أي طابق تقع الشقة؟", options: [
        { text: "Im dritten Stock", ar: "في الطابق الثالث", correct: true, explanation: "نعم — الطابق الثالث." },
        { text: "Im ersten Stock", ar: "في الطابق الأول", correct: false, explanation: "لا — الثالث." },
        { text: "Im fünften Stock", ar: "في الطابق الخامس", correct: false, explanation: "لا — الثالث." },
      ]},
      { de: "Wie weit ist die U-Bahn?", ar: "كم تبعد محطة المترو؟", options: [
        { text: "Fünf Minuten", ar: "خمس دقائق", correct: true, explanation: "صحيح — قريبة جداً." },
        { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — خمس دقائق." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — خمس دقائق." },
      ]},
    ],
  },
];

/** بودكاستات مستوى معيّن */
export function getPodcastsByLevel(level: LevelCode): PodcastEpisode[] {
  return PODCASTS.filter((p) => p.level === level);
}

export const PODCAST_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

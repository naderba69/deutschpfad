import type { InteractiveStory } from "./types";

/**
 * ═══════════════════════════════════════════════════════════
 *  قصص A2 — 8 قصص (أساسي)
 *  التركيز: الماضي التام (Perfekt) • الماضي البسيط (war, hatte)
 *  · حروف الجر المتغيرة • الحياة اليومية والسفر
 * ═══════════════════════════════════════════════════════════
 */

const A2_1: InteractiveStory = {
  id: "a2-berlin-tag",
  level: "A2",
  title: "Ein Tag in Berlin",
  titleAr: "يوم في برلين",
  emoji: "🏛️",
  description: "سامي يزور برلين لأول مرة — الماضي والاتجاهات في المدينة.",
  grammar: "الماضي البسيط (war, hatte, ging) • حروف الجر مع الاتجاه",
  segments: [
    {
      id: 1,
      de: "Sami war zum ersten Mal in Berlin. Das Wetter war schön.",
      ar: "كان سامي في برلين لأول مرة. كان الطقس جميلاً.",
    },
    {
      id: 2,
      de: "Am Morgen ging er zum Brandenburger Tor. Er machte viele Fotos.",
      ar: "في الصباح ذهب إلى بوابة براندنبورغ. التقط صوراً كثيرة.",
      question: {
        de: "Was machte Sami am Brandenburger Tor?",
        ar: "ماذا فعل سامي عند بوابة براندنبورغ؟",
        options: [
          { text: "Er machte Fotos", ar: "التقط صوراً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Er machte Fotos» (التقط صوراً)." },
          { text: "Er schwamm", ar: "سبح", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Er schlief", ar: "نام", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Dann fuhr er mit der U-Bahn zur Museumsinsel. Dort sah er eine große Ausstellung.",
      ar: "ثم ركب المترو إلى جزيرة المتاحف. هناك رأى معرضاً كبيراً.",
    },
    {
      id: 4,
      de: "Am Nachmittag traf er seine Freundin Lisa. Sie tranken Kaffee in einem Café.",
      ar: "بعد الظهر قابل صديقته ليزا. شربا قهوة في مقهى.",
      question: {
        de: "Wo tranken sie Kaffee?",
        ar: "أين شربا القهوة؟",
        options: [
          { text: "In einem Café", ar: "في مقهى", correct: true, explanation: "نعم — هذا ما ورد في القصة: «In einem Café» (في مقهى)." },
          { text: "Im Museum", ar: "في المتحف", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Im Bus", ar: "في الحافلة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Abend gingen sie ins Kino. Der Film war sehr spannend.",
      ar: "في المساء ذهبا إلى السينما. كان الفيلم مثيراً جداً.",
      choices: [
        { text: "Sami fand Berlin toll.", ar: "وجد سامي برلين رائعة.", next: 6, feedback: "مشاعرك مثل سامي!" },
        { text: "Sami war müde.", ar: "كان سامي متعباً.", next: 6, feedback: "معقول أيضاً." },
      ],
    },
    { id: 6, de: "Sami liebte diesen Tag in Berlin. Ende.", ar: "أحب سامي هذا اليوم في برلين. النهاية." },
  ],
};

const A2_2: InteractiveStory = {
  id: "a2-geburtstag",
  level: "A2",
  title: "Die Geburtstagsfeier",
  titleAr: "حفلة عيد الميلاد",
  emoji: "🎂",
  description: "ليزا تحتفل بعيد ميلادها — المستقبل القريب والهدايا.",
  grammar: "المستقبل (werden + Infinitiv) • كلمات الزمن",
  segments: [
    {
      id: 1,
      de: "Lisa hat morgen Geburtstag. Sie wird 20 Jahre alt.",
      ar: "غداً عيد ميلاد ليزا. ستصبح في العشرين.",
    },
    {
      id: 2,
      de: "Sie bereitet eine Party vor. Ihre Freunde werden um 19 Uhr kommen.",
      ar: "تحضّر حفلة. سيأتي أصدقاؤها في السابعة مساءً.",
      question: {
        de: "Wann werden die Freunde kommen?",
        ar: "متى سيأتي الأصدقاء؟",
        options: [
          { text: "Um 19 Uhr", ar: "في السابعة مساءً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Um 19 Uhr» (في السابعة مساءً)." },
          { text: "Am Morgen", ar: "في الصباح", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Am Montag", ar: "يوم الإثنين", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Max bringt einen Kuchen mit. Anna kauft Blumen.",
      ar: "يحضر ماكس كعكة. تشتري آنا زهوراً.",
    },
    {
      id: 4,
      de: "Lisa sagt: „Ich werde Musik machen und wir werden tanzen!“",
      ar: "تقول ليزا: «سأشغّل الموسيقى وسنرقص!»",
      question: {
        de: "Was bringt Max mit?",
        ar: "ماذا يحضر ماكس؟",
        options: [
          { text: "Einen Kuchen", ar: "كعكة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Einen Kuchen» (كعكة)." },
          { text: "Blumen", ar: "زهوراً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Geschenke", ar: "هدايا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Die Party war ein großer Erfolg. Lisa wird dieses Fest nie vergessen.",
      ar: "كانت الحفلة نجاحاً كبيراً. لن تنسى ليزا هذا الاحتفال أبداً.",
      choices: [
        { text: "Ich werde auch feiern!", ar: "سأحتفل أيضاً!", next: 6, feedback: "استخدام جميل للمستقبل." },
        { text: "Der Kuchen schmeckt gut.", ar: "الكعكة لذيذة.", next: 6, feedback: "صحيح!" },
      ],
    },
    { id: 6, de: "Ende. Alles Gute zum Geburtstag, Lisa!", ar: "النهاية. عيد ميلاد سعيد يا ليزا!" },
  ],
};

const A2_3: InteractiveStory = {
  id: "a2-beim-arzt",
  level: "A2",
  title: "Beim Arzt",
  titleAr: "عند الطبيب",
  emoji: "🩺",
  description: "بيتر يشعر بتعب — أجزاء الجسم والنصائح الطبية.",
  grammar: "أجزاء الجسم • الأعراض • sollen (للنصيحة)",
  segments: [
    {
      id: 1,
      de: "Peter fühlt sich nicht gut. Er hat Kopfschmerzen.",
      ar: "بيتر لا يشعر بحالة جيدة. عنده صداع.",
    },
    {
      id: 2,
      de: "Er geht zum Arzt. Die Praxis ist voll, aber er wartet geduldig.",
      ar: "يذهب إلى الطبيب. العيادة ممتلئة، لكنه ينتظر بصبر.",
      question: {
        de: "Was hat Peter?",
        ar: "ماذا يعاني بيتر؟",
        options: [
          { text: "Kopfschmerzen", ar: "صداع", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Kopfschmerzen» (صداع)." },
          { text: "Zahnschmerzen", ar: "ألم أسنان", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Halsschmerzen", ar: "ألم حلق", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Der Arzt untersucht Peter und sagt: „Sie sollen viel trinken und sich ausruhen.“",
      ar: "يفحص الطبيب بيتر ويقول: «يجب أن تشرب كثيراً وتستريح».",
    },
    {
      id: 4,
      de: "Peter nimmt die Medizin. Am Abend geht es ihm schon besser.",
      ar: "يتناول بيتر الدواء. في المساء تتحسن حالته.",
      question: {
        de: "Was soll Peter tun?",
        ar: "ماذا يجب أن يفعل بيتر؟",
        options: [
          { text: "Viel trinken und ruhen", ar: "يشرب كثيراً ويستريح", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Viel trinken und ruhen» (يشرب كثيراً ويستريح)." },
          { text: "Sport machen", ar: "يمارس الرياضة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Arbeiten", ar: "يعمل", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am nächsten Tag ist Peter wieder gesund. Er bedankt sich beim Arzt.",
      ar: "في اليوم التالي يعود بيتر إلى صحته. يشكر الطبيب.",
      choices: [
        { text: "Gesundheit ist wichtig.", ar: "الصحة مهمة.", next: 6, feedback: "حكمة جميلة!" },
        { text: "Peter geht arbeiten.", ar: "بيتر يذهب للعمل.", next: 6, feedback: "بالتأكيد بعد الشفاء!" },
      ],
    },
    { id: 6, de: "Peter sagt: „Ich passe besser auf mich auf!“ Ende.", ar: "يقول بيتر: «سأعتني بنفسي أكثر!» النهاية." },
  ],
};

const A2_4: InteractiveStory = {
  id: "a2-verlorener-schluessel",
  level: "A2",
  title: "Der verlorene Schlüssel",
  titleAr: "المفتاح الضائع",
  emoji: "🔑",
  description: "آنا تفقد مفتاحها — البحث والاتجاهات والماضي التام.",
  grammar: "الماضي التام (Perfekt) • أماكن المدينة • السؤال عن الطريق",
  segments: [
    {
      id: 1,
      de: "Anna hat ihren Schlüssel verloren. Sie ist verzweifelt.",
      ar: "فقدت آنا مفتاحها. إنها يائسة.",
    },
    {
      id: 2,
      de: "Sie hat überall gesucht: in der Tasche, im Auto, in der Wohnung.",
      ar: "بحثت في كل مكان: في الحقيبة، في السيارة، في الشقة.",
      question: {
        de: "Was hat Anna verloren?",
        ar: "ماذا فقدت آنا؟",
        options: [
          { text: "Ihren Schlüssel", ar: "مفتاحها", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Ihren Schlüssel» (مفتاحها)." },
          { text: "Ihre Tasche", ar: "حقيبتها", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Ihr Handy", ar: "هاتفها", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Sie fragt den Nachbarn. Er sagt: „Hast du im Büro geschaut?“",
      ar: "تسأل الجار. يقول: «هل بحثت في المكتب؟»",
    },
    {
      id: 4,
      de: "Anna fährt ins Büro. Ja! Der Schlüssel liegt auf dem Schreibtisch.",
      ar: "تذهب آنا إلى المكتب. نعم! المفتاح على المكتب.",
      question: {
        de: "Wo war der Schlüssel?",
        ar: "أين كان المفتاح؟",
        options: [
          { text: "Im Büro auf dem Schreibtisch", ar: "في المكتب على الطاولة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Im Büro auf dem Schreibtisch» (في المكتب على الطاولة)." },
          { text: "In der Küche", ar: "في المطبخ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Im Auto", ar: "في السيارة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Anna lacht: „Ich habe den Schlüssel den ganzen Tag gesucht!“",
      ar: "تضحك آنا: «لقد بحثت عن المفتاح طوال اليوم!»",
      choices: [
        { text: "Der Schlüssel war im Büro.", ar: "كان المفتاح في المكتب.", next: 6, feedback: "بالضبط!" },
        { text: "Der Schlüssel war verloren.", ar: "كان المفتاح ضائعاً.", next: 6, feedback: "لا، وجدته!" },
      ],
    },
    { id: 6, de: "Anna ruft den Nachbarn an: „Ich habe ihn gefunden, danke!“ Ende.", ar: "تتصل آنا بالجار: «وجدته، شكراً!» النهاية." },
  ],
};

const A2_5: InteractiveStory = {
  id: "a2-urlaub-bergen",
  level: "A2",
  title: "Der Urlaub in den Bergen",
  titleAr: "العطلة في الجبال",
  emoji: "🏔️",
  description: "عائلة في عطلة جبلية — الماضي التام مع sein والطقس.",
  grammar: "Perfekt مع sein (sind gewandert) • الطقس • الهوايات",
  segments: [
    {
      id: 1,
      de: "Die Familie war eine Woche in den Bergen. Sie sind gewandert.",
      ar: "كانت العائلة أسبوعاً في الجبال. تنزهوا مشياً.",
    },
    {
      id: 2,
      de: "Am ersten Tag sind sie auf einen Berg gestiegen. Die Aussicht war fantastisch.",
      ar: "في اليوم الأول صعدوا جبلاً. كان المنظر رائعاً.",
      question: {
        de: "Was haben sie am ersten Tag gemacht?",
        ar: "ماذا فعلوا في اليوم الأول؟",
        options: [
          { text: "Sie sind auf einen Berg gestiegen", ar: "صعدوا جبلاً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Sie sind auf einen Berg gestiegen» (صعدوا جبلاً)." },
          { text: "Sie sind geschwommen", ar: "سبحوا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Sie haben geschlafen", ar: "ناموا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Am zweiten Tag hat es geregnet. Sie sind ins Museum gegangen.",
      ar: "في اليوم الثاني أمطرت السماء. ذهبوا إلى المتحف.",
    },
    {
      id: 4,
      de: "Am Abend haben sie in einer Hütte Kuchen gegessen und Spiele gespielt.",
      ar: "في المساء أكلوا كعكة في كوخ ولعبوا الألعاب.",
      question: {
        de: "Was haben sie bei Regen gemacht?",
        ar: "ماذا فعلوا وقت المطر؟",
        options: [
          { text: "Sie sind ins Museum gegangen", ar: "ذهبوا إلى المتحف", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Sie sind ins Museum gegangen» (ذهبوا إلى المتحف)." },
          { text: "Sie sind gewandert", ar: "تنزهوا مشياً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Sie sind nach Hause gefahren", ar: "عادوا إلى البيت", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am letzten Tag hat die Sonne geschienen. Sie haben ein Picknick gemacht.",
      ar: "في اليوم الأخير أشرقت الشمس. قاموا بنزهة.",
      choices: [
        { text: "Die Ferien waren wunderbar.", ar: "كانت العطلة رائعة.", next: 6, feedback: "أكيد!" },
        { text: "Das Wetter war immer schlecht.", ar: "كان الطقس سيئاً دائماً.", next: 6, feedback: "لا — كان جميلاً معظم الوقت." },
      ],
    },
    { id: 6, de: "Zu Hause zeigt die Familie die Fotos. Ende.", ar: "في البيت تعرض العائلة الصور. النهاية." },
  ],
};

const A2_6: InteractiveStory = {
  id: "a2-im-restaurant",
  level: "A2",
  title: "Im Restaurant",
  titleAr: "في المطعم",
  emoji: "🍽️",
  description: "جوليا ومارك في مطعم — الطلب بأدب والطعام.",
  grammar: "الطلب (möchten) • وصف الطعام (schmecken) • الأكلات",
  segments: [
    {
      id: 1,
      de: "Julia und Mark sind im Restaurant. Es ist gemütlich.",
      ar: "جوليا ومارك في المطعم. الجو مريح.",
    },
    {
      id: 2,
      de: "Der Kellner kommt und fragt: „Was möchten Sie bestellen?“",
      ar: "يأتي النادل ويسأل: «ماذا تريدان أن تطلبا؟»",
      question: {
        de: "Wo sind Julia und Mark?",
        ar: "أين جوليا ومارك؟",
        options: [
          { text: "Im Restaurant", ar: "في المطعم", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Im Restaurant» (في المطعم)." },
          { text: "Im Supermarkt", ar: "في السوبرماركت", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Im Kino", ar: "في السينما", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Julia möchte eine Pizza mit Käse. Mark nimmt Schnitzel mit Pommes.",
      ar: "تريد جوليا بيتزا بالجبن. يأخذ مارك شنيتزل مع البطاطس المقلية.",
    },
    {
      id: 4,
      de: "Das Essen schmeckt sehr gut. Sie trinken Mineralwasser.",
      ar: "الطعام لذيذ جداً. يشربان ماء معدني.",
      question: {
        de: "Was möchte Julia?",
        ar: "ماذا تريد جوليا؟",
        options: [
          { text: "Eine Pizza mit Käse", ar: "بيتزا بالجبن", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Eine Pizza mit Käse» (بيتزا بالجبن)." },
          { text: "Schnitzel mit Pommes", ar: "شنيتزل مع بطاطس", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen Salat", ar: "سلطة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Ende fragt der Kellner: „Möchten Sie noch einen Nachtisch?“",
      ar: "في النهاية يسأل النادل: «هل تريدان حلوى بعد؟»",
      choices: [
        { text: "Ja, zwei Eis, bitte!", ar: "نعم، آيس كريم اثنان من فضلك!", next: 6, feedback: "اختيار لذيذ!" },
        { text: "Nein, danke. Die Rechnung, bitte!", ar: "لا شكراً. الفاتورة من فضلك!", next: 6, feedback: "رد مهذب!" },
      ],
    },
    { id: 6, de: "Sie zahlen und geben Trinkgeld. Ende.", ar: "يدفعان ويتركان إكرامية. النهاية." },
  ],
};

const A2_7: InteractiveStory = {
  id: "a2-klassenfahrt",
  level: "A2",
  title: "Die Klassenfahrt",
  titleAr: "رحلة الفصل",
  emoji: "🚌",
  description: "الفصل في رحلة إلى هامبورغ — الماضي والمقارنات.",
  grammar: "الماضي التام • المقارنة (besser als) • معالم المدينة",
  segments: [
    {
      id: 1,
      de: "Die Klasse war drei Tage in Hamburg. Es war eine tolle Reise.",
      ar: "قضى الفصل ثلاثة أيام في هامبورغ. كانت رحلة رائعة.",
    },
    {
      id: 2,
      de: "Sie haben den Hafen und das Rathaus besichtigt.",
      ar: "زاروا الميناء وقاعة المدينة.",
      question: {
        de: "Was haben sie besichtigt?",
        ar: "ماذا زاروا؟",
        options: [
          { text: "Den Hafen und das Rathaus", ar: "الميناء وقاعة المدينة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Den Hafen und das Rathaus» (الميناء وقاعة المدينة)." },
          { text: "Den Flughafen und den Zoo", ar: "المطار وحديقة الحيوان", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Die Kirche und die Schule", ar: "الكنيسة والمدرسة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Das Wetter war besser als erwartet. Nur am Dienstag hat es geregnet.",
      ar: "كان الطقس أفضل من المتوقع. فقط يوم الثلاثاء أمطرت.",
    },
    {
      id: 4,
      de: "Am Abend haben sie am Strand gespielt und Lieder gesungen.",
      ar: "في المساء لعبوا على الشاطئ وغنوا الأغاني.",
      question: {
        de: "Was haben sie am Abend gemacht?",
        ar: "ماذا فعلوا في المساء؟",
        options: [
          { text: "Am Strand gespielt", ar: "لعبوا على الشاطئ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Am Strand gespielt» (لعبوا على الشاطئ)." },
          { text: "Hausaufgaben gemacht", ar: "أنجزوا الواجبات", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Geschlafen", ar: "ناموا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am letzten Tag haben sie Souvenirs gekauft: eine Kette und einen Schlüsselanhänger.",
      ar: "في اليوم الأخير اشتروا تذكارات: قلادة وسلسلة مفاتيح.",
      choices: [
        { text: "Hamburg ist eine schöne Stadt.", ar: "هامبورغ مدينة جميلة.", next: 6, feedback: "أكيد!" },
        { text: "Die Reise war zu lang.", ar: "كانت الرحلة طويلة جداً.", next: 6, feedback: "لكنها ممتعة!" },
      ],
    },
    { id: 6, de: "Zurück in der Schule erzählt jeder von der Reise. Ende.", ar: "في المدرسة يحكي الجميع عن الرحلة. النهاية." },
  ],
};

const A2_8: InteractiveStory = {
  id: "a2-umzug",
  level: "A2",
  title: "Der Umzug",
  titleAr: "الانتقال",
  emoji: "📦",
  description: "عائلة تنتقل إلى شقة جديدة — حروف الجر المتغيرة والأثاث.",
  grammar: "حروف الجر المتغيرة (in, an + Dativ/Akkusativ) • الأثاث",
  segments: [
    {
      id: 1,
      de: "Die Familie zieht in eine neue Wohnung. Es gibt viele Kartons.",
      ar: "تنتقل العائلة إلى شقة جديدة. هناك صناديق كثيرة.",
    },
    {
      id: 2,
      de: "Sie stellen das Sofa ins Wohnzimmer. Der Tisch steht in der Küche.",
      ar: "يضعون الأريكة في غرفة المعيشة. الطاولة في المطبخ.",
      question: {
        de: "Wo steht der Tisch?",
        ar: "أين تقف الطاولة؟",
        options: [
          { text: "In der Küche", ar: "في المطبخ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «In der Küche» (في المطبخ)." },
          { text: "Im Wohnzimmer", ar: "في غرفة المعيشة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Im Schlafzimmer", ar: "في غرفة النوم", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Die Kinder hängen die Bilder an die Wand. Die Bücher kommen ins Regal.",
      ar: "يعلق الأطفال الصور على الحائط. الكتب توضع على الرف.",
    },
    {
      id: 4,
      de: "Am Abend ist alles fertig. Die neue Wohnung sieht schön aus.",
      ar: "في المساء كل شيء جاهز. الشقة الجديدة تبدو جميلة.",
      question: {
        de: "Was hängen die Kinder an die Wand?",
        ar: "ماذا يعلق الأطفال على الحائط؟",
        options: [
          { text: "Die Bilder", ar: "الصور", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Die Bilder» (الصور)." },
          { text: "Die Teller", ar: "الأطباق", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Die Jacken", ar: "المعاطف", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Die Nachbarn kommen zur Begrüßung. Sie bringen einen Kuchen mit.",
      ar: "يأتي الجيران للترحيب. يحضرون كعكة.",
      choices: [
        { text: "Willkommen in der Nachbarschaft!", ar: "أهلاً بكم في الجوار!", next: 6, feedback: "ترحيب جميل!" },
        { text: "Die Kartons sind schwer.", ar: "الصناديق ثقيلة.", next: 6, feedback: "لكن العمل انتهى!" },
      ],
    },
    { id: 6, de: "Die Familie ist glücklich in ihrer neuen Wohnung. Ende.", ar: "العائلة سعيدة في شقتها الجديدة. النهاية." },
  ],
};

export const A2_STORIES: InteractiveStory[] = [A2_1, A2_2, A2_3, A2_4, A2_5, A2_6, A2_7, A2_8];

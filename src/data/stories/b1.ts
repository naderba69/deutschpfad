import type { InteractiveStory } from "./types";

/**
 * ═══════════════════════════════════════════════════════════
 *  قصص B1 — 7 قصص (متوسط)
 *  التركيز: الجمل الثانوية (weil, dass, wenn, bevor, nachdem)
 *  · Konjunktiv II (würde, hätte, wäre) • Passiv • Präteritum
 * ═══════════════════════════════════════════════════════════
 */

const B1_1: InteractiveStory = {
  id: "b1-neue-wohnung",
  level: "B1",
  title: "Die neue Wohnung",
  titleAr: "الشقة الجديدة",
  emoji: "🏠",
  description: "عائلة تبحث عن شقة جديدة — السبب والنتيجة والمقارنات.",
  grammar: "الجمل الثانوية (weil, dass, wenn) • مقارنات الصفات",
  segments: [
    {
      id: 1,
      de: "Die Familie Müller sucht eine neue Wohnung, weil die alte zu klein ist.",
      ar: "تبحث عائلة مولر عن شقة جديدة لأن القديمة صغيرة جداً.",
    },
    {
      id: 2,
      de: "Sie besichtigen eine Wohnung im dritten Stock. Die Aussicht ist wunderbar, aber die Miete ist hoch.",
      ar: "يزورون شقة في الطابق الثالث. المنظر رائع، لكن الإيجار مرتفع.",
      question: {
        de: "Warum sucht die Familie eine neue Wohnung?",
        ar: "لماذا تبحث العائلة عن شقة جديدة؟",
        options: [
          { text: "Die alte Wohnung ist zu klein", ar: "القديمة صغيرة جداً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Die alte Wohnung ist zu klein» (القديمة صغيرة جداً)." },
          { text: "Die Miete ist zu hoch", ar: "الإيجار مرتفع", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Die Aussicht ist schlecht", ar: "المنظر سيئ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Der Vater sagt: „Wenn wir hier wohnen, müssen wir weniger Auto fahren.“",
      ar: "يقول الأب: «إذا سكنا هنا، يجب أن نستخدم السيارة أقل».",
    },
    {
      id: 4,
      de: "Die Mutter antwortet: „Ich denke, dass diese Wohnung perfekt für uns ist.“",
      ar: "تجيب الأم: «أعتقد أن هذه الشقة مثالية لنا».",
      question: {
        de: "Was denkt die Mutter?",
        ar: "ماذا تعتقد الأم؟",
        options: [
          { text: "Die Wohnung ist perfekt", ar: "الشقة مثالية", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Die Wohnung ist perfekt» (الشقة مثالية)." },
          { text: "Die Wohnung ist zu teuer", ar: "الشقة غالية جداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Die Wohnung ist zu weit", ar: "الشقة بعيدة جداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Sie unterschreiben den Vertrag. Sie sind glücklich, weil sie endlich mehr Platz haben.",
      ar: "يوقعون العقد. إنهم سعداء لأن لديهم أخيراً مساحة أكبر.",
      choices: [
        { text: "Die Wohnung ist besser als die alte.", ar: "الشقة أفضل من القديمة.", next: 6, feedback: "مقارنة صحيحة!" },
        { text: "Die Wohnung ist kleiner als die alte.", ar: "الشقة أصغر من القديمة.", next: 6, feedback: "لا — هي أكبر!" },
      ],
    },
    { id: 6, de: "Ende. Eine neue Wohnung bedeutet ein neues Leben.", ar: "النهاية. شقة جديدة تعني حياة جديدة." },
  ],
};

const B1_2: InteractiveStory = {
  id: "b1-neuer-job",
  level: "B1",
  title: "Der neue Job",
  titleAr: "الوظيفة الجديدة",
  emoji: "💼",
  description: "دانيال يبدأ عملاً جديداً في بنك — الماضي البسيط وعالم العمل.",
  grammar: "الماضي البسيط (Präteritum) • لغة العمل • الأفعال المنفصلة",
  segments: [
    {
      id: 1,
      de: "Daniel hat einen neuen Job bekommen. Er arbeitet jetzt bei einer Bank.",
      ar: "حصل دانيال على وظيفة جديدة. يعمل الآن في بنك.",
    },
    {
      id: 2,
      de: "Am ersten Tag lernte er viele neue Kollegen kennen. Sie waren freundlich.",
      ar: "في اليوم الأول تعرف على زملاء جدد كثيرين. كانوا ودودين.",
      question: {
        de: "Wo arbeitet Daniel jetzt?",
        ar: "أين يعمل دانيال الآن؟",
        options: [
          { text: "Bei einer Bank", ar: "في بنك", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Bei einer Bank» (في بنك)." },
          { text: "In einer Schule", ar: "في مدرسة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "In einem Krankenhaus", ar: "في مستشفى", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Die Arbeit gefiel ihm, aber er musste am Anfang viel lernen.",
      ar: "أعجبه العمل، لكنه كان عليه أن يتعلم الكثير في البداية.",
    },
    {
      id: 4,
      de: "Nach einer Woche verstand er die Abläufe besser. Sein Chef war zufrieden.",
      ar: "بعد أسبوع فهم سير العمل بشكل أفضل. كان رئيسه راضياً.",
      question: {
        de: "Wie war die erste Woche?",
        ar: "كيف كان الأسبوع الأول؟",
        options: [
          { text: "Schwierig, aber er lernte viel", ar: "صعب، لكنه تعلم الكثير", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Schwierig, aber er lernte viel» (صعب، لكنه تعلم الكثير)." },
          { text: "Sehr langweilig", ar: "ممل جداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Ohne Aufgaben", ar: "بلا مهام", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Freitag lud der Chef das ganze Team zum Essen ein.",
      ar: "يوم الجمعة دعا الرئيس الفريق كله إلى العشاء.",
      choices: [
        { text: "Daniel fühlte sich wohl im Team.", ar: "شعر دانيال بالراحة في الفريق.", next: 6, feedback: "اندماج رائع!" },
        { text: "Daniel wollte kündigen.", ar: "أراد دانيال الاستقالة.", next: 6, feedback: "لا — كل شيء سار جيداً!" },
      ],
    },
    { id: 6, de: "Daniel dachte: „Das ist ein guter Start.“ Ende.", ar: "فكر دانيال: «هذه بداية جيدة». النهاية." },
  ],
};

const B1_3: InteractiveStory = {
  id: "b1-umweltgruppe",
  level: "B1",
  title: "Die Umweltgruppe",
  titleAr: "مجموعة البيئة",
  emoji: "🌱",
  description: "طلاب يؤسسون مجموعة بيئية — المبني للمجهول والعمل التطوعي.",
  grammar: "المبني للمجهول (Passiv: wird, wurden) • البيئة • man",
  segments: [
    {
      id: 1,
      de: "In der Stadt wurde eine neue Umweltgruppe gegründet. Viele Schüler sind dabei.",
      ar: "تأسست مجموعة بيئية جديدة في المدينة. يشارك فيها طلاب كثيرون.",
    },
    {
      id: 2,
      de: "Jeden Samstag wird Müll im Park gesammelt und der Müll getrennt.",
      ar: "كل سبت يُجمع القمامة في الحديقة وتُفرز.",
      question: {
        de: "Was wird jeden Samstag gemacht?",
        ar: "ماذا يُفعل كل سبت؟",
        options: [
          { text: "Müll wird gesammelt", ar: "يُجمع القمامة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Müll wird gesammelt» (يُجمع القمامة)." },
          { text: "Es wird geschlafen", ar: "يُنام", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Es wird gekocht", ar: "يُطبخ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Die Schüler pflanzen auch Bäume im Park. Die Bäume werden gepflegt.",
      ar: "يزرع الطلاب أيضاً أشجاراً في الحديقة. تُعتني بالأشجار.",
    },
    {
      id: 4,
      de: "Nach einem Jahr wurde der Park viel grüner. Alle sind stolz.",
      ar: "بعد عام أصبحت الحديقة أكثر خضرة بكثير. الجميع فخورون.",
      question: {
        de: "Was pflanzen die Schüler?",
        ar: "ماذا يزرع الطلاب؟",
        options: [
          { text: "Bäume", ar: "أشجاراً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Bäume» (أشجاراً)." },
          { text: "Blumen nur", ar: "زهوراً فقط", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Gemüse", ar: "خضروات", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Die Stadtverwaltung hat die Gruppe für ihren Einsatz belohnt.",
      ar: "كأفت إدارة المدينة المجموعة على جهودها.",
      choices: [
        { text: "Umweltschutz ist wichtig.", ar: "حماية البيئة مهمة.", next: 6, feedback: "متفق تماماً!" },
        { text: "Man kann nichts ändern.", ar: "لا يمكن تغيير أي شيء.", next: 6, feedback: "خطأ — لقد غيّروا الحديقة!" },
      ],
    },
    { id: 6, de: "Die Gruppe plant neue Projekte für das nächste Jahr. Ende.", ar: "تخطط المجموعة لمشاريع جديدة للعام القادم. النهاية." },
  ],
};

const B1_4: InteractiveStory = {
  id: "b1-lange-zugreise",
  level: "B1",
  title: "Die lange Zugreise",
  titleAr: "رحلة القطار الطويلة",
  emoji: "🚄",
  description: "لينا تسافر إلى فيينا — الروابط الزمنية (bevor, während, nachdem).",
  grammar: "الجمل الزمنية (bevor, während, nachdem) • السفر",
  segments: [
    {
      id: 1,
      de: "Bevor die Reise begann, packte Lena ihren Koffer und kaufte ein Ticket.",
      ar: "قبل أن تبدأ الرحلة، حزمت لينا حقيبتها واشترت تذكرة.",
    },
    {
      id: 2,
      de: "Während der Fahrt las sie ein Buch und sah aus dem Fenster. Die Landschaft war wunderschön.",
      ar: "أثناء الرحلة قرأت كتاباً ونظرت من النافذة. كان المشهد جميلاً.",
      question: {
        de: "Was machte Lena während der Fahrt?",
        ar: "ماذا فعلت لينا أثناء الرحلة؟",
        options: [
          { text: "Sie las ein Buch", ar: "قرأت كتاباً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Sie las ein Buch» (قرأت كتاباً)." },
          { text: "Sie schlief die ganze Zeit", ar: "نامت طوال الوقت", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Sie telefonierte viel", ar: "تحدثت كثيراً في الهاتف", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Nachdem sie zwei Stunden gefahren waren, kamen sie in Wien an.",
      ar: "بعد أن قطعوا ساعتين، وصلوا إلى فيينا.",
    },
    {
      id: 4,
      de: "Im Hotel angekommen, ruhten sie sich kurz aus und gingen dann spazieren.",
      ar: "عند وصولهم إلى الفندق، استراحوا قليلاً ثم ذهبوا في نزهة.",
      question: {
        de: "Wann kamen sie in Wien an?",
        ar: "متى وصلوا إلى فيينا؟",
        options: [
          { text: "Nach zwei Stunden Fahrt", ar: "بعد ساعتين من السفر", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Nach zwei Stunden Fahrt» (بعد ساعتين من السفر)." },
          { text: "Nach einem Tag", ar: "بعد يوم", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Nach zehn Minuten", ar: "بعد عشر دقائق", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Abend besuchten sie das berühmte Schloss Schönbrunn. Die Stadt war voller Leben.",
      ar: "في المساء زاروا قصر شونبرون الشهير. كانت المدينة مليئة بالحياة.",
      choices: [
        { text: "Wien ist eine Reise wert.", ar: "فيينا تستحق الزيارة.", next: 6, feedback: "بالتأكيد!" },
        { text: "Die Reise war zu anstrengend.", ar: "كانت الرحلة متعبة جداً.", next: 6, feedback: "لكنها جميلة!" },
      ],
    },
    { id: 6, de: "Lena dachte: „Ich werde auf jeden Fall wiederkommen.“ Ende.", ar: "فكرت لينا: «سأعود بالتأكيد». النهاية." },
  ],
};

const B1_5: InteractiveStory = {
  id: "b1-vorstellungsgespraech",
  level: "B1",
  title: "Das Vorstellungsgespräch",
  titleAr: "مقابلة العمل",
  emoji: "🤝",
  description: "ليزا تستعد لمقابلة عمل — صيغة الشرط (Konjunktiv II) المهذبة.",
  grammar: "Konjunktiv II (würde, könnte) • مقابلة العمل • التهذيب",
  segments: [
    {
      id: 1,
      de: "Lisa hat morgen ein Vorstellungsgespräch bei einer großen Firma.",
      ar: "غداً لدى ليزا مقابلة عمل في شركة كبيرة.",
    },
    {
      id: 2,
      de: "Sie würde gern einen guten Eindruck machen. Deshalb übt sie zu Hause.",
      ar: "تود أن تترك انطباعاً جيداً. لذلك تتدرب في البيت.",
      question: {
        de: "Was hat Lisa morgen?",
        ar: "ماذا لدى ليزا غداً؟",
        options: [
          { text: "Ein Vorstellungsgespräch", ar: "مقابلة عمل", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Ein Vorstellungsgespräch» (مقابلة عمل)." },
          { text: "Einen Zahnarzttermin", ar: "موعد طبيب أسنان", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen Flug", ar: "رحلة طيران", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Sie fragt ihren Freund: „Was würdest du anziehen? Wie könnte ich antworten?“",
      ar: "تسأل صديقها: «ماذا سترتدي؟ كيف يمكنني الإجابة؟»",
    },
    {
      id: 4,
      de: "Am nächsten Tag ist Lisa ruhig und selbstbewusst. Das Gespräch verläuft sehr gut.",
      ar: "في اليوم التالي ليزا هادئة وواثقة. تسير المقابلة بشكل جيد جداً.",
      question: {
        de: "Wie verläuft das Gespräch?",
        ar: "كيف تسير المقابلة؟",
        options: [
          { text: "Sehr gut", ar: "جيد جداً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Sehr gut» (جيد جداً)." },
          { text: "Sehr schlecht", ar: "سيئ جداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Sie kommt nicht hin", ar: "لا تذهب", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Der Chef sagt: „Wir würden uns freuen, Sie im Team zu haben.“",
      ar: "يقول المدير: «يسعدنا أن تكوني معنا في الفريق».",
      choices: [
        { text: "Lisa könnte morgen anfangen!", ar: "تستطيع ليزا أن تبدأ غداً!", next: 6, feedback: "Konjunktiv II جميل!" },
        { text: "Lisa würde ablehnen.", ar: "سترفض ليزا.", next: 6, feedback: "لا — إنها سعيدة!" },
      ],
    },
    { id: 6, de: "Lisa ruft ihren Freund an: „Ich habe den Job bekommen!“ Ende.", ar: "تتصل ليزا بصديقها: «حصلت على الوظيفة!» النهاية." },
  ],
};

const B1_6: InteractiveStory = {
  id: "b1-verlorene-zeit",
  level: "B1",
  title: "Die verlorene Zeit",
  titleAr: "الوقت الضائع",
  emoji: "⏳",
  description: "مارك يتأمل ماضيه — hätte/wäre والندم والتعلم من التجربة.",
  grammar: "Konjunktiv II الماضي (hätte, wäre) • الندم • التعلم",
  segments: [
    {
      id: 1,
      de: "Mark denkt an seine Schulzeit zurück. Er war nicht immer fleißig.",
      ar: "يستعيد مارك ذكريات أيام مدرسته. لم يكن مجتهداً دائماً.",
    },
    {
      id: 2,
      de: "Er sagt: „Ich hätte mehr lernen sollen. Dann hätte ich bessere Noten gehabt.“",
      ar: "يقول: «كان عليّ أن أتعلم أكثر. لكنت حصلت على درجات أفضل».",
      question: {
        de: "Was denkt Mark über seine Schulzeit?",
        ar: "ماذا يعتقد مارك عن أيام مدرسته؟",
        options: [
          { text: "Er hätte mehr lernen sollen", ar: "كان عليه أن يتعلم أكثر", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Er hätte mehr lernen sollen» (كان عليه أن يتعلم أكثر)." },
          { text: "Er war perfekt", ar: "كان مثالياً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Er hat nie gelernt", ar: "لم يتعلم أبداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Seine Freundin antwortet: „Du hättest nicht alles ändern können. Jetzt ist es anders.“",
      ar: "تجيب صديقته: «لم يكن بإمكانك تغيير كل شيء. الآن الأمر مختلف».",
    },
    {
      id: 4,
      de: "Mark lächelt: „Stimmt. Aber jetzt lerne ich Deutsch. Das mache ich richtig!“",
      ar: "يبتسم مارك: «صحيح. لكنني الآن أتعلم الألمانية. وهذا سأفعله بشكل صحيح!»",
      question: {
        de: "Was lernt Mark jetzt?",
        ar: "ماذا يتعلم مارك الآن؟",
        options: [
          { text: "Deutsch", ar: "الألمانية", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Deutsch» (الألمانية)." },
          { text: "Mathematik", ar: "الرياضيات", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Musik", ar: "الموسيقى", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Er schreibt sich in einen Deutschkurs ein und übt jeden Tag.",
      ar: "يسجل في دورة ألمانية ويتدرب كل يوم.",
      choices: [
        { text: "Aus Fehlern lernt man.", ar: "يتعلم الإنسان من أخطائه.", next: 6, feedback: "حكمة صحيحة!" },
        { text: "Die Vergangenheit ändert sich.", ar: "الماضي يتغير.", next: 6, feedback: "لا — لكن المستقبل يتغير!" },
      ],
    },
    { id: 6, de: "Ein Jahr später spricht Mark schon gut Deutsch. Ende.", ar: "بعد عام يتحدث مارك الألمانية جيداً. النهاية." },
  ],
};

const B1_7: InteractiveStory = {
  id: "b1-wochenendausflug",
  level: "B1",
  title: "Der Wochenendausflug",
  titleAr: "رحلة نهاية الأسبوع",
  emoji: "🎒",
  description: "خطط عائلة لعطلة نهاية الأسبوع — المستقبل (Futur I) والخطط.",
  grammar: "المستقبل (werden + Infinitiv) • الخطط • الجمل الشرطية (wenn)",
  segments: [
    {
      id: 1,
      de: "Am Wochenende werden wir mit dem Auto nach München fahren.",
      ar: "في نهاية الأسبوع سنسافر بالسيارة إلى ميونخ.",
    },
    {
      id: 2,
      de: "Wir werden den Englischen Garten besuchen und am See spazieren gehen.",
      ar: "سنزور الحديقة الإنجليزية ونتنزه بجانب البحيرة.",
      question: {
        de: "Wohin werden sie fahren?",
        ar: "إلى أين سيسافرون؟",
        options: [
          { text: "Nach München", ar: "إلى ميونخ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Nach München» (إلى ميونخ)." },
          { text: "Nach Hamburg", ar: "إلى هامبورغ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Nach Köln", ar: "إلى كولونيا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Meine Schwester wird ein Picknick vorbereiten. Ich werde Getränke kaufen.",
      ar: "ستحضّر أختي نزهة. سأشتري المشروبات.",
    },
    {
      id: 4,
      de: "Wenn das Wetter schlecht wird, werden wir ins Deutsche Museum gehen.",
      ar: "إذا ساء الطقس، سنذهب إلى المتحف الألماني.",
      question: {
        de: "Was passiert bei schlechtem Wetter?",
        ar: "ماذا سيحدث إذا ساء الطقس؟",
        options: [
          { text: "Sie gehen ins Deutsche Museum", ar: "يذهبون إلى المتحف الألماني", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Sie gehen ins Deutsche Museum» (يذهبون إلى المتحف الألماني)." },
          { text: "Sie bleiben zu Hause", ar: "يبقون في البيت", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Sie fahren zurück", ar: "يعودون", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Der Wetterbericht sagt: Sonne und 25 Grad. Perfekt für das Picknick!",
      ar: "نشرة الطقس تقول: شمس و25 درجة. مثالي للنزهة!",
      choices: [
        { text: "Das wird ein schöner Tag!", ar: "سيكون يوماً جميلاً!", next: 6, feedback: "بالتأكيد!" },
        { text: "Wir werden zu Hause bleiben.", ar: "سنبقى في البيت.", next: 6, feedback: "لا — الطقس رائع!" },
      ],
    },
    { id: 6, de: "Am Sonntagabend sind alle glücklich und müde. Ende.", ar: "مساء الأحد الجميع سعداء ومتعبون. النهاية." },
  ],
};

export const B1_STORIES: InteractiveStory[] = [B1_1, B1_2, B1_3, B1_4, B1_5, B1_6, B1_7];

import type { InteractiveStory } from "./types";

/**
 * ═══════════════════════════════════════════════════════════
 *  دفعة القصص الثانية — 12 قصة (الوصول إلى 60 إجمالاً)
 *  كل قصة بسؤالين على الأقل + شرح لكل خيار
 * ═══════════════════════════════════════════════════════════
 */

/* ─── A1 +2 (15) ─── */
const A1_14: InteractiveStory = {
  id: "a1-im-park",
  level: "A1",
  title: "Im Park",
  titleAr: "في الحديقة",
  emoji: "🌳",
  description: "سارة تلعب في الحديقة وتلتقي بصديقة جديدة.",
  grammar: "التحية • الألعاب • الصداقة",
  segments: [
    { id: 1, de: "Sara spielt im Park. Sie sieht ein Mädchen.", ar: "تلعب سارة في الحديقة. ترى فتاة." },
    {
      id: 2,
      de: "Das Mädchen heißt Lina. Sie ist fünf Jahre alt.",
      ar: "اسم الفتاة لينا. عمرها خمس سنوات.",
      question: {
        de: "Wo spielt Sara?",
        ar: "أين تلعب سارة؟",
        options: [
          { text: "Im Park", ar: "في الحديقة", correct: true, explanation: "نعم — «Sara spielt im Park»." },
          { text: "In der Schule", ar: "في المدرسة", correct: false, explanation: "لا — القصة في الحديقة." },
          { text: "Zu Hause", ar: "في البيت", correct: false, explanation: "لا — في الخارج في الحديقة." },
        ],
      },
    },
    { id: 3, de: "Die Mädchen spielen zusammen mit dem Ball.", ar: "تلعب الفتاتان معاً بالكرة." },
    {
      id: 4,
      de: "Am Abend sagt Sara: „Tschüss, Lina! Bis morgen!“",
      ar: "في المساء تقول سارة: «إلى اللقاء لينا! إلى الغد!»",
      question: {
        de: "Wie heißt das Mädchen?",
        ar: "ما اسم الفتاة؟",
        options: [
          { text: "Lina", ar: "لينا", correct: true, explanation: "صحيح — «Das Mädchen heißt Lina»." },
          { text: "Sara", ar: "سارة", correct: false, explanation: "لا — سارة هي الشخصية الرئيسية." },
          { text: "Anna", ar: "آنا", correct: false, explanation: "لا — الاسم لينا." },
        ],
      },
    },
    { id: 5, de: "Lina sagt: „Tschüss! Das war schön!“ Ende.", ar: "تقول لينا: «إلى اللقاء! كان جميلاً!» النهاية." },
  ],
};

const A1_15: InteractiveStory = {
  id: "a1-das-fruehstueck",
  level: "A1",
  title: "Das Frühstück",
  titleAr: "الفطور",
  emoji: "🥐",
  description: "عائلة تتناول الفطور معاً — الطعام والوقت.",
  grammar: "الطعام • صيغة الجمع • العائلة",
  segments: [
    { id: 1, de: "Am Morgen frühstückt die Familie zusammen.", ar: "في الصباح تتناول العائلة الفطور معاً." },
    {
      id: 2,
      de: "Es gibt Brötchen, Käse, Eier und Marmelade.",
      ar: "يوجد خبز صغير وجبن وبيض ومربى.",
      question: {
        de: "Was gibt es zum Frühstück?",
        ar: "ماذا يوجد للفطور؟",
        options: [
          { text: "Brötchen, Käse und Eier", ar: "خبز وجبن وبيض", correct: true, explanation: "نعم — هذه الأطعمة موجودة على الطاولة." },
          { text: "Pizza und Eis", ar: "بيتزا وآيس كريم", correct: false, explanation: "لا — هذه أطعمة الغداء أو الحلوى." },
          { text: "Fisch und Reis", ar: "سمك وأرز", correct: false, explanation: "لا — الفطور ألماني تقليدي." },
        ],
      },
    },
    { id: 3, de: "Der Vater trinkt Kaffee. Die Kinder trinken Milch.", ar: "يشرب الأب القهوة. يشرب الأطفال الحليب." },
    {
      id: 4,
      de: "Um sieben Uhr gehen die Kinder zur Schule.",
      ar: "في السابعة يذهب الأطفال إلى المدرسة.",
      question: {
        de: "Was trinken die Kinder?",
        ar: "ماذا يشرب الأطفال؟",
        options: [
          { text: "Milch", ar: "حليباً", correct: true, explanation: "صحيح — «Die Kinder trinken Milch»." },
          { text: "Kaffee", ar: "قهوة", correct: false, explanation: "لا — القهوة للأب." },
          { text: "Saft", ar: "عصيراً", correct: false, explanation: "لا — الحليب وليس العصير." },
        ],
      },
    },
    { id: 5, de: "„Guten Morgen und einen schönen Tag!“ Ende.", ar: "«صباح الخير ويوماً جميلاً!» النهاية." },
  ],
};

/* ─── A2 +2 (15) ─── */
const A2_14: InteractiveStory = {
  id: "a2-postamt",
  level: "A2",
  title: "Auf der Post",
  titleAr: "في مكتب البريد",
  emoji: "📮",
  description: "ياسمين ترسل طرداً إلى تونس — الخدمات والتعليمات.",
  grammar: "الخدمات • wie viel • التعليمات",
  segments: [
    { id: 1, de: "Yasmin geht zur Post. Sie möchte ein Paket nach Tunesien schicken.", ar: "تذهب ياسمين إلى البريد. تريد إرسال طرد إلى تونس." },
    {
      id: 2,
      de: "Die Mitarbeiterin fragt: „Was ist im Paket? Wie schwer ist es?“",
      ar: "تسأل الموظفة: «ماذا يوجد في الطرد؟ كم وزنه؟»",
      question: {
        de: "Wohin möchte Yasmin das Paket schicken?",
        ar: "إلى أين تريد ياسمين إرسال الطرد؟",
        options: [
          { text: "Nach Tunesien", ar: "إلى تونس", correct: true, explanation: "نعم — الوجهة تونس." },
          { text: "Nach Deutschland", ar: "إلى ألمانيا", correct: false, explanation: "لا — إنها في ألمانيا وترسل لتونس." },
          { text: "Nach Frankreich", ar: "إلى فرنسا", correct: false, explanation: "لا — الوجهة تونس." },
        ],
      },
    },
    { id: 3, de: "Das Paket wiegt zwei Kilo. Es kostet 25 Euro.", ar: "يزن الطرد كيلوين. يكلف 25 يورو." },
    {
      id: 4,
      de: "Yasmin füllt das Formular aus und bezahlt.",
      ar: "تملأ ياسمين الاستمارة وتدفع.",
      question: {
        de: "Wie viel kostet das Paket?",
        ar: "كم يكلف الطرد؟",
        options: [
          { text: "25 Euro", ar: "25 يورو", correct: true, explanation: "صحيح — السعر 25 يورو." },
          { text: "15 Euro", ar: "15 يورو", correct: false, explanation: "لا — السعر 25." },
          { text: "30 Euro", ar: "30 يورو", correct: false, explanation: "لا — السعر 25." },
        ],
      },
    },
    { id: 5, de: "„Das Paket kommt in zehn Tagen an“, sagt die Mitarbeiterin. Ende.", ar: "«يصل الطرد خلال عشرة أيام» تقول الموظفة. النهاية." },
  ],
};

const A2_15: InteractiveStory = {
  id: "a2-wochenende-berlin",
  level: "A2",
  title: "Wochenende in Berlin",
  titleAr: "نهاية أسبوع في برلين",
  emoji: "🌆",
  description: "زوجان يقضيان نهاية الأسبوع في برلين — الماضي التام والمعالم.",
  grammar: "الماضي التام (Perfekt) • معالم المدينة",
  segments: [
    { id: 1, de: "Am Wochenende sind Max und Eva nach Berlin gefahren.", ar: "في نهاية الأسبوع ذهب ماكس وإيفا إلى برلين." },
    {
      id: 2,
      de: "Sie haben das Brandenburger Tor und die Mauer gesehen.",
      ar: "شاهدا بوابة براندنبورغ والجدار.",
      question: {
        de: "Wohin sind Max und Eva gefahren?",
        ar: "إلى أين ذهب ماكس وإيفا؟",
        options: [
          { text: "Nach Berlin", ar: "إلى برلين", correct: true, explanation: "نعم — الوجهة برلين." },
          { text: "Nach Hamburg", ar: "إلى هامبورغ", correct: false, explanation: "لا — برلين وليس هامبورغ." },
          { text: "Nach München", ar: "إلى ميونخ", correct: false, explanation: "لا — برلين." },
        ],
      },
    },
    { id: 3, de: "Am Abend haben sie in einem Restaurant Currywurst gegessen.", ar: "في المساء أكلا كاري فورست (نقانق بالكاري) في مطعم." },
    {
      id: 4,
      de: "Das Wetter war schön, aber es war ein bisschen kalt.",
      ar: "كان الطقس جميلاً لكنه كان بارداً قليلاً.",
      question: {
        de: "Was haben sie am Abend gegessen?",
        ar: "ماذا أكلا في المساء؟",
        options: [
          { text: "Currywurst", ar: "كاري فورست", correct: true, explanation: "صحيح — الأكلة الشهيرة في برلين." },
          { text: "Pizza", ar: "بيتزا", correct: false, explanation: "لا — النص يذكر كاري فورست." },
          { text: "Schnitzel", ar: "شنيتزل", correct: false, explanation: "لا — كاري فورست." },
        ],
      },
    },
    { id: 5, de: "„Berlin ist immer eine Reise wert“, sagt Eva. Ende.", ar: "«برلين تستحق الزيارة دائماً» تقول إيفا. النهاية." },
  ],
};

/* ─── B1 +4 (15) ─── */
const B1_12: InteractiveStory = {
  id: "b1-digital-detox",
  level: "B1",
  title: "Digital Detox",
  titleAr: "التخلص من الإدمان الرقمي",
  emoji: "📵",
  description: "شاب يقرر الابتعاد عن هاتفه — الجمل الثانوية والتغيير.",
  grammar: "الجمل الثانوية (dass, weil) • التغيير الشخصي",
  segments: [
    { id: 1, de: "Jonas hat gemerkt, dass er zu viel Zeit mit dem Handy verbringt.", ar: "أدرك يوناس أنه يقضي وقتاً كثيراً مع الهاتف." },
    {
      id: 2,
      de: "Er beschließt, eine Woche ohne Handy zu leben.",
      ar: "يقرر العيش أسبوعاً بدون هاتف.",
      question: {
        de: "Was hat Jonas gemerkt?",
        ar: "ماذا أدرك يوناس؟",
        options: [
          { text: "Er verbringt zu viel Zeit mit dem Handy", ar: "يقضي وقتاً كثيراً مع الهاتف", correct: true, explanation: "نعم — هذا سبب قراره." },
          { text: "Er hat zu viel Geld", ar: "لديه مال كثير", correct: false, explanation: "لا — المشكلة في الوقت مع الهاتف." },
          { text: "Er schläft zu viel", ar: "ينام كثيراً", correct: false, explanation: "لا — المشكلة رقمية." },
        ],
      },
    },
    { id: 3, de: "Am Anfang ist es schwer, weil er sich langweilt.", ar: "في البداية الأمر صعب لأنه يمل." },
    {
      id: 4,
      de: "Nach drei Tagen liest er wieder Bücher und trifft Freunde.",
      ar: "بعد ثلاثة أيام يقرأ الكتب من جديد ويلتقي بالأصدقاء.",
      question: {
        de: "Warum ist es am Anfang schwer?",
        ar: "لماذا الأمر صعب في البداية؟",
        options: [
          { text: "Weil er sich langweilt", ar: "لأنه يمل", correct: true, explanation: "صحيح — الجملة الثانوية بـ weil توضح السبب." },
          { text: "Weil er keine Freunde hat", ar: "لأنه بلا أصدقاء", correct: false, explanation: "لا — الملل هو السبب." },
          { text: "Weil er kein Buch hat", ar: "لأنه بلا كتاب", correct: false, explanation: "لا — الملل لا الكتب." },
        ],
      },
    },
    { id: 5, de: "Nach einer Woche fühlt er sich besser. Er nutzt das Handy weniger. Ende.", ar: "بعد أسبوع يشعر بتحسن. يستخدم الهاتف أقل. النهاية." },
  ],
};

const B1_13: InteractiveStory = {
  id: "b1-nebenjob",
  level: "B1",
  title: "Der Nebenjob",
  titleAr: "العمل الإضافي",
  emoji: "🛍️",
  description: "طالبة تعمل في متجر — العمل والدراسة والتوازن.",
  grammar: "الماضي البسيط (Präteritum) • التوازن بين العمل والدراسة",
  segments: [
    { id: 1, de: "Clara studiert Medizin und arbeitet am Wochenende in einem Supermarkt.", ar: "تدرس كلارا الطب وتعمل في نهاية الأسبوع في سوبرماركت." },
    {
      id: 2,
      de: "Sie arbeitet acht Stunden und verdient 12 Euro pro Stunde.",
      ar: "تعمل ثماني ساعات وتكسب 12 يورو في الساعة.",
      question: {
        de: "Wo arbeitet Clara?",
        ar: "أين تعمل كلارا؟",
        options: [
          { text: "In einem Supermarkt", ar: "في سوبرماركت", correct: true, explanation: "نعم — عملها في المتجر." },
          { text: "In einem Krankenhaus", ar: "في مستشفى", correct: false, explanation: "لا — هي تدرس الطب لكن تعمل في المتجر." },
          { text: "In einer Schule", ar: "في مدرسة", correct: false, explanation: "لا — المتجر." },
        ],
      },
    },
    { id: 3, de: "Am Anfang war es anstrengend, aber sie hat sich daran gewöhnt.", ar: "في البداية كان متعباً لكنها اعتادت عليه." },
    {
      id: 4,
      de: "Der Chef war zufrieden und hat ihr mehr Stunden gegeben.",
      ar: "كان المدير راضياً وأعطاها ساعات أكثر.",
      question: {
        de: "Wie viel verdient Clara pro Stunde?",
        ar: "كم تكسب كلارا في الساعة؟",
        options: [
          { text: "12 Euro", ar: "12 يورو", correct: true, explanation: "صحيح — الأجر 12 يورو." },
          { text: "8 Euro", ar: "8 يورو", correct: false, explanation: "لا — 12 يورو." },
          { text: "20 Euro", ar: "20 يورو", correct: false, explanation: "لا — 12 يورو." },
        ],
      },
    },
    { id: 5, de: "Clara ist glücklich: Sie verdient Geld und lernt fürs Leben. Ende.", ar: "كلارا سعيدة: تكسب المال وتتعلم للحياة. النهاية." },
  ],
};

const B1_14: InteractiveStory = {
  id: "b1-sprachreise",
  level: "B1",
  title: "Die Sprachreise",
  titleAr: "رحلة اللغة",
  emoji: "✈️",
  description: "مجموعة تسافر لتعلم الألمانية في فيينا — التجربة والاندماج.",
  grammar: "الجمل الزمنية • التجربة الثقافية",
  segments: [
    { id: 1, de: "Im Sommer ist eine Gruppe aus Tunesien nach Wien gefahren.", ar: "في الصيف سافرت مجموعة من تونس إلى فيينا." },
    {
      id: 2,
      de: "Sie haben vier Wochen in einer Sprachschule gelernt.",
      ar: "تعلموا أربعة أسابيع في مدرسة لغة.",
      question: {
        de: "Wohin ist die Gruppe gefahren?",
        ar: "إلى أين سافرت المجموعة؟",
        options: [
          { text: "Nach Wien", ar: "إلى فيينا", correct: true, explanation: "نعم — الوجهة فيينا." },
          { text: "Nach Berlin", ar: "إلى برلين", correct: false, explanation: "لا — فيينا." },
          { text: "Nach Zürich", ar: "إلى زيورخ", correct: false, explanation: "لا — فيينا." },
        ],
      },
    },
    { id: 3, de: "Am Vormittag hatten sie Unterricht, am Nachmittag Ausflüge.", ar: "في الصباح كان عندهم درس وفي الظهيرة رحلات." },
    {
      id: 4,
      de: "Bevor sie nach Hause fuhren, besuchten sie das Schloss Schönbrunn.",
      ar: "قبل أن يعودوا إلى البيت زاروا قصر شونبرون.",
      question: {
        de: "Wie lange haben sie gelernt?",
        ar: "كم تعلموا؟",
        options: [
          { text: "Vier Wochen", ar: "أربعة أسابيع", correct: true, explanation: "صحيح — مدة البرنامج أربعة أسابيع." },
          { text: "Vier Tage", ar: "أربعة أيام", correct: false, explanation: "لا — أربعة أسابيع كاملة." },
          { text: "Vier Monate", ar: "أربعة أشهر", correct: false, explanation: "لا — أسابيع لا أشهر." },
        ],
      },
    },
    { id: 5, de: "Alle sind motivierter nach Hause gekommen. Ende.", ar: "عاد الجميع إلى البيت بحماس أكبر. النهاية." },
  ],
};

const B1_15: InteractiveStory = {
  id: "b1-energiesparen",
  level: "B1",
  title: "Energie sparen",
  titleAr: "توفير الطاقة",
  emoji: "💡",
  description: "عائلة تقرر توفير الطاقة — المبني للمجهول والعادات.",
  grammar: "المبني للمجهول (wird, werden) • البيئة",
  segments: [
    { id: 1, de: "Die Familie möchte Energie sparen, weil die Preise steigen.", ar: "تريد العائلة توفير الطاقة لأن الأسعار ترتفع." },
    {
      id: 2,
      de: "Die Heizung wird niedriger gestellt und das Licht wird ausgeschaltet.",
      ar: "يُخفض التدفئة وتُطفأ الأنوار.",
      question: {
        de: "Warum möchte die Familie Energie sparen?",
        ar: "لماذا تريد العائلة توفير الطاقة؟",
        options: [
          { text: "Weil die Preise steigen", ar: "لأن الأسعار ترتفع", correct: true, explanation: "نعم — السبب ارتفاع الأسعار." },
          { text: "Weil sie kein Geld haben", ar: "لأنها بلا مال", correct: false, explanation: "لا — السبب ارتفاع الأسعار لا الفقر." },
          { text: "Weil sie umziehen", ar: "لأنها تنتقل", correct: false, explanation: "لا — لا علاقة بالانتقال." },
        ],
      },
    },
    { id: 3, de: "Die Kinder lernen, dass Wasser nicht verschwendet wird.", ar: "يتعلم الأطفال أن الماء لا يُهدر." },
    {
      id: 4,
      de: "Nach einem Monat ist die Rechnung viel kleiner.",
      ar: "بعد شهر تصبح الفاتورة أصغر بكثير.",
      question: {
        de: "Was wird niedriger gestellt?",
        ar: "ماذا يُخفض؟",
        options: [
          { text: "Die Heizung", ar: "التدفئة", correct: true, explanation: "صحيح — «Die Heizung wird niedriger gestellt»." },
          { text: "Der Kühlschrank", ar: "الثلاجة", correct: false, explanation: "لا — التدفئة." },
          { text: "Der Fernseher", ar: "التلفاز", correct: false, explanation: "لا — التدفئة." },
        ],
      },
    },
    { id: 5, de: "„Sparen ist gut für das Geld und für die Umwelt“, sagt der Vater. Ende.", ar: "«التوفير جيد للمال وللبيئة» يقول الأب. النهاية." },
  ],
};

/* ─── B2 +4 (15) ─── */
const B2_12: InteractiveStory = {
  id: "b2-homeoffice-kultur",
  level: "B2",
  title: "Homeoffice-Kultur",
  titleAr: "ثقافة العمل عن بُعد",
  emoji: "💻",
  description: "نقاش حول مستقبل العمل عن بُعد — نقل الآراء والتحليل.",
  grammar: "Konjunktiv I (نقل الكلام) • لغة الأعمال",
  segments: [
    { id: 1, de: "In der Firma wird intensiv über Homeoffice diskutiert.", ar: "يُناقش في الشركة بشكل مكثف موضوع العمل عن بُعد." },
    {
      id: 2,
      de: "Der Geschäftsführer sagte, die Produktivität sei im Homeoffice gestiegen.",
      ar: "قال المدير التنفيذي إن الإنتاجية ارتفعت في العمل عن بُعد.",
      question: {
        de: "Worüber wird in der Firma diskutiert?",
        ar: "عماذا يُناقش في الشركة؟",
        options: [
          { text: "Über Homeoffice", ar: "عن العمل عن بُعد", correct: true, explanation: "نعم — الموضوع الرئيسي." },
          { text: "Über neue Büros", ar: "عن مكاتب جديدة", correct: false, explanation: "لا — عن العمل عن بُعد." },
          { text: "Über Gehälter", ar: "عن الرواتب", correct: false, explanation: "لا — لا علاقة بالرواتب هنا." },
        ],
      },
    },
    { id: 3, de: "Einige Mitarbeiter betonten, die Zusammenarbeit werde schwieriger.", ar: "أكد بعض الموظفين أن التعاون يصبح أصعب." },
    {
      id: 4,
      de: "Man einigte sich auf ein hybrides Modell: zwei Tage im Büro, drei zu Hause.",
      ar: "اتفقوا على نموذج هجين: يومان في المكتب وثلاثة في البيت.",
      question: {
        de: "Was sagte der Geschäftsführer?",
        ar: "ماذا قال المدير التنفيذي؟",
        options: [
          { text: "Die Produktivität sei gestiegen", ar: "إن الإنتاجية ارتفعت", correct: true, explanation: "صحيح — نقل الكلام بصيغة Konjunktiv I." },
          { text: "Die Produktivität sei gesunken", ar: "إن الإنتاجية انخفضت", correct: false, explanation: "لا — هو يقول إنها ارتفعت." },
          { text: "Man solle ins Büro zurückkehren", ar: "يجب العودة للمكتب", correct: false, explanation: "لا — النتيجة نموذج هجين." },
        ],
      },
    },
    { id: 5, de: "Die Entscheidung wurde von den meisten Mitarbeitern begrüßt. Ende.", ar: "رحب معظم الموظفين بالقرار. النهاية." },
  ],
};

const B2_13: InteractiveStory = {
  id: "b2-medienkritik",
  level: "B2",
  title: "Medienkritik",
  titleAr: "نقد الإعلام",
  emoji: "📰",
  description: "نقاش حول موثوقية الأخبار — الجدل والتحليل النقدي.",
  grammar: "اللغة النقدية • نقل الآراء • الروابط المتقدمة",
  segments: [
    { id: 1, de: "Im Seminar wird die Rolle der Medien in der Demokratie analysiert.", ar: "في الندوة يُحلل دور الإعلام في الديمقراطية." },
    {
      id: 2,
      de: "Eine Studentin argumentiert, dass soziale Medien Falschinformationen verbreiten.",
      ar: "تجادل طالبة أن وسائل التواصل تنشر معلومات مضللة.",
      question: {
        de: "Was wird im Seminar analysiert?",
        ar: "ماذا يُحلل في الندوة؟",
        options: [
          { text: "Die Rolle der Medien", ar: "دور الإعلام", correct: true, explanation: "نعم — موضوع الندوة." },
          { text: "Die Wirtschaft", ar: "الاقتصاد", correct: false, explanation: "لا — الإعلام." },
          { text: "Die Geschichte", ar: "التاريخ", correct: false, explanation: "لا — الإعلام." },
        ],
      },
    },
    { id: 3, de: "Ein anderer Student widerspricht: Die Medien seien wichtiger denn je.", ar: "يعترض طالب آخر: الإعلام أكثر أهمية من أي وقت مضى." },
    {
      id: 4,
      de: "Die Professorin fasst zusammen: Medienkompetenz sei entscheidend.",
      ar: "تلخص الأستاذة: الثقافة الإعلامية حاسمة.",
      question: {
        de: "Was argumentiert die Studentin?",
        ar: "بماذا تجادل الطالبة؟",
        options: [
          { text: "Soziale Medien verbreiten Falschinformationen", ar: "وسائل التواصل تنشر معلومات مضللة", correct: true, explanation: "صحيح — هذه حجتها." },
          { text: "Soziale Medien sind perfekt", ar: "وسائل التواصل مثالية", correct: false, explanation: "لا — حجتها نقدية." },
          { text: "Man soll keine Nachrichten lesen", ar: "يجب عدم قراءة الأخبار", correct: false, explanation: "لا — نقد الحلقة المفرغة." },
        ],
      },
    },
    { id: 5, de: "Am Ende sind sich alle einig: Kritisches Denken ist unverzichtbar. Ende.", ar: "في النهاية يتفق الجميع: التفكير النقدي لا غنى عنه. النهاية." },
  ],
};

const B2_14: InteractiveStory = {
  id: "b2-kulturelle-differenzen",
  level: "B2",
  title: "Kulturelle Differenzen im Beruf",
  titleAr: "الاختلافات الثقافية في العمل",
  emoji: "🌍",
  description: "موظفة دولية تواجه اختلافات ثقافية — التأقلم والتفاهم.",
  grammar: "صدمة الثقافة • الجمل الثانوية المتقدمة • الحوار",
  segments: [
    { id: 1, de: "Fatma arbeitet in einem internationalen Team in Frankfurt.", ar: "تعمل فاطمة في فريق دولي في فرانكفورت." },
    {
      id: 2,
      de: "Am Anfang fand sie die direkte Kommunikation ungewohnt.",
      ar: "في البداية وجدت التواصل المباشر غير مألوف.",
      question: {
        de: "Wo arbeitet Fatma?",
        ar: "أين تعمل فاطمة؟",
        options: [
          { text: "In einem internationalen Team in Frankfurt", ar: "في فريق دولي في فرانكفورت", correct: true, explanation: "نعم — مكان عملها." },
          { text: "In einem kleinen Geschäft", ar: "في متجر صغير", correct: false, explanation: "لا — فريق دولي في فرانكفورت." },
          { text: "In einer Schule in Berlin", ar: "في مدرسة في برلين", correct: false, explanation: "لا — فريق دولي." },
        ],
      },
    },
    { id: 3, de: "Mit der Zeit verstand sie, dass Direktheit hier Effizienz bedeutet.", ar: "مع الوقت فهمت أن المباشرة هنا تعني الكفاءة." },
    {
      id: 4,
      de: "Sie lernte, ihre Meinung klarer zu äußern, ohne unhöflich zu wirken.",
      ar: "تعلمت التعبير عن رأيها بوضوح دون أن تبدو وقحة.",
      question: {
        de: "Was fand Fatma am Anfang ungewohnt?",
        ar: "ماذا وجدت فاطمة غير مألوف في البداية؟",
        options: [
          { text: "Die direkte Kommunikation", ar: "التواصل المباشر", correct: true, explanation: "صحيح — هذا ما وجدته غير مألوف." },
          { text: "Die Arbeit selbst", ar: "العمل نفسه", correct: false, explanation: "لا — التواصل المباشر." },
          { text: "Die deutsche Sprache", ar: "اللغة الألمانية", correct: false, explanation: "لا — التواصل المباشر." },
        ],
      },
    },
    { id: 5, de: "Heute schätzt sie die Offenheit im Team sehr. Ende.", ar: "اليوم تقدر الانفتاح في الفريق كثيراً. النهاية." },
  ],
};

const B2_15: InteractiveStory = {
  id: "b2-zukunft-arbeit",
  level: "B2",
  title: "Die Zukunft der Arbeit",
  titleAr: "مستقبل العمل",
  emoji: "🤖",
  description: "خبراء يتوقعون مستقبل العمل — المستقبل التام والتحليل.",
  grammar: "المستقبل التام (Futur II) • التحليل • لغة الخبراء",
  segments: [
    { id: 1, de: "Experten prognostizieren, dass künstliche Intelligenz viele Berufe verändern wird.", ar: "يتوقع الخبراء أن الذكاء الاصطناعي سيغيّر مهناً كثيرة." },
    {
      id: 2,
      de: "Manche glauben, dass Routineaufgaben in zehn Jahren automatisiert sein werden.",
      ar: "يعتقد البعض أن المهام الروتينية ستكون مؤتمتة خلال عشر سنوات.",
      question: {
        de: "Was prognostizieren die Experten?",
        ar: "ماذا يتوقع الخبراء؟",
        options: [
          { text: "KI wird viele Berufe verändern", ar: "الذكاء الاصطناعي سيغيّر مهناً كثيرة", correct: true, explanation: "نعم — التوقع الرئيسي." },
          { text: "KI wird verschwinden", ar: "الذكاء الاصطناعي سيختفي", correct: false, explanation: "لا — سيزداد تأثيره." },
          { text: "Die Arbeit bleibt unverändert", ar: "العمل سيبقى دون تغيير", correct: false, explanation: "لا — تغيير كبير متوقع." },
        ],
      },
    },
    { id: 3, de: "Andere warnen, dass soziale Berufe wichtiger werden.", ar: "يحذر آخرون أن المهن الاجتماعية ستصبح أهم." },
    {
      id: 4,
      de: "Die Diskussion zeigt: lebenslanges Lernen wird unvermeidlich sein.",
      ar: "يظهر النقاش: التعلم مدى الحياة سيكون حتمياً.",
      question: {
        de: "Was wird in zehn Jahren automatisiert sein?",
        ar: "ماذا سيكون مؤتمتاً خلال عشر سنوات؟",
        options: [
          { text: "Routineaufgaben", ar: "المهام الروتينية", correct: true, explanation: "صحيح — حسب المعتقد المذكور." },
          { text: "Soziale Berufe", ar: "المهن الاجتماعية", correct: false, explanation: "لا — ستزداد أهمية لا تؤتمت." },
          { text: "Alle Berufe", ar: "كل المهن", correct: false, explanation: "لا — المهام الروتينية فقط." },
        ],
      },
    },
    { id: 5, de: "Fazit: Anpassungsfähigkeit ist die wichtigste Kompetenz der Zukunft. Ende.", ar: "الخلاصة: القدرة على التكيف أهم كفاءة في المستقبل. النهاية." },
  ],
};

export const STORIES_WAVE2: InteractiveStory[] = [A1_14, A1_15, A2_14, A2_15, B1_12, B1_13, B1_14, B1_15, B2_12, B2_13, B2_14, B2_15];

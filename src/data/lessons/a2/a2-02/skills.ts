/**
 * a2-02 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-02.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-02",
    titleDe: "Drei Tage zu Hause",
    titleAr: "ثلاثة أيام في البيت",
    textType: "erzaehlung",
    paragraphs: [
      "Am Montagmorgen bin ich aufgewacht und wusste sofort: Heute stimmt etwas nicht. Mein Hals tat weh, ich hatte Fieber, mir war heiß und kalt, und ich fühlte mich sehr schwach. Ich habe trotzdem versucht aufzustehen, aber nach zehn Minuten musste ich mich wieder hinlegen.",
      "Meine Kollegin hat mir am Telefon gesagt: „Du solltest zum Arzt gehen. Wenn du nicht arbeiten kannst, frag nach einer Krankschreibung und informiere deinen Chef.“ Sie hatte recht. Ich habe in der Praxis angerufen und einen Termin für den Nachmittag bekommen.",
      "Im Wartezimmer saßen schon sechs Leute. Nach vierzig Minuten war ich endlich dran. Die Ärztin hat gefragt: „Was fehlt Ihnen denn?“ Ich habe erzählt, dass ich seit dem Morgen Halsschmerzen, Fieber und Kopfschmerzen habe. Sie hat mich untersucht und gesagt: „Sie haben eine Erkältung. Die Beschwerden sind im Moment nicht sehr stark, aber Sie brauchen Ruhe.“",
      "Dann hat sie mir erklärt, was ich machen soll: „Sie sollten sich ausruhen und zu Hause bleiben. Solange Sie Fieber haben, dürfen Sie keinen Sport machen. Aber Sie müssen nicht wiederkommen, wenn es Ihnen besser geht.“ Ich habe ein Rezept und eine Krankschreibung für die nächsten drei Tage bekommen.",
      "Auf dem Weg nach Hause bin ich in die Apotheke gegangen. Der Apotheker war sehr freundlich und hat mir alles genau erklärt. Zu Hause habe ich Tee gekocht und mich ins Bett gelegt.",
      "Nach drei Tagen zu Hause ging es mir viel besser. Ich habe mich gut erholt und bin am Freitag wieder zur Arbeit gegangen. Meine Kollegin hat gelacht und gesagt: „Siehst du? Manchmal muss man einfach auf den Körper hören.“",
    ],
    paragraphsAr: [
      "صباح الاثنين استيقظتُ وعرفتُ فوراً: ثمّة خطبٌ ما اليوم. كان حلقي يؤلمني، وكانت لديّ حمى، وشعرتُ بالحرّ والبرد، وكنتُ ضعيفاً جداً. حاولتُ رغم ذلك أن أنهض، لكن بعد عشر دقائق اضطررتُ إلى الاستلقاء ثانيةً.",
      "قالت لي زميلتي على الهاتف: «ينبغي أن تذهب إلى الطبيب. وإذا لم تكن قادراً على العمل، فاسأل عن شهادة مرضية وأبلغ مديرك». كانت محقّة. اتصلتُ بالعيادة وحصلتُ على موعد بعد الظهر.",
      "في غرفة الانتظار كان يجلس ستة أشخاص. وبعد أربعين دقيقة جاء دوري أخيراً. سألت الطبيبة: «ما شكواك؟» فحكيت لها أن حلقي يؤلمني منذ الصباح، وأن لديّ حمى وصداعاً. فحصتني وقالت: «عندك نزلة برد. الأعراض ليست شديدة الآن، لكنك تحتاج إلى الراحة».",
      "ثم شرحت لي ما ينبغي أن أفعل: «ينبغي أن تستريح وتبقى في البيت. لا يجوز لك ممارسة الرياضة ما دمت مصاباً بالحمى. لكنك لست مضطراً إلى العودة إذا تحسنت حالك». وحصلت على وصفة وشهادة مرضية للأيام الثلاثة التالية.",
      "وفي طريق العودة ذهبت إلى الصيدلية. كان الصيدلي لطيفاً جداً وشرح لي كل شيء بدقة. وفي البيت أعددت شاياً واستلقيت في الفراش.",
      "وبعد ثلاثة أيام في البيت شعرت بتحسن كبير. تعافيت جيداً وعدت إلى العمل يوم الجمعة. ضحكت زميلتي وقالت: «أرأيت؟ أحياناً ينبغي للمرء أن يصغي إلى جسده».",
    ],
    glossary: [
      {
        de: "aufgewacht (aufwachen)",
        ar: "استيقظ",
        noteAr: "تغيّرُ حال ⟵ sein، وge- في الوسط",
      },
      {
        de: "hinlegen (sich hinlegen)",
        ar: "يستلقي",
        noteAr: "انعكاسيّ + منفصل: musste ich mich wieder hinlegen",
      },
      {
        de: "krankschreiben lassen",
        ar: "يحصل على شهادةٍ مرضية",
      },
      {
        de: "das Wartezimmer",
        ar: "غرفة الانتظار",
      },
      {
        de: "dran sein",
        ar: "يأتي دوره",
        noteAr: "Ich bin dran = دوري",
      },
      {
        de: "untersuchen",
        ar: "يفحص (طبّياً)",
        noteAr: "غير منفصل ⟵ untersucht بلا ge-",
      },
      {
        de: "die Erkältung",
        ar: "نزلة برد (ليست مرادفاً للإنفلونزا Grippe)",
      },
      {
        de: "stark",
        ar: "شديد/قوي بحسب السياق",
        noteAr: "في النص: Die Beschwerden sind nicht sehr stark = الأعراض ليست شديدة جداً؛ لا يثبت ذلك حكماً طبياً عاماً.",
      },
      {
        de: "die Ruhe",
        ar: "الراحة، السكون",
      },
      {
        de: "das Rezept",
        ar: "الوصفة الطبّية",
        noteAr: "وصفة لدواء موصوف؛ تُقدَّم لصرفه في صيدلية",
      },
      {
        de: "die Krankschreibung",
        ar: "الشهادة المرضية",
        noteAr: "تثبت عدم القدرة على العمل؛ قد تُرسل إلكترونياً، مع وجوب إبلاغ جهة العمل في الحالات المعتادة",
      },
      {
        de: "der Apotheker",
        ar: "الصيدليّ",
      },
      {
        de: "erholt (sich erholen)",
        ar: "تعافى، نقِه",
        noteAr: "Ich habe mich gut erholt",
      },
      {
        de: "auf den Körper hören",
        ar: "يُصغي إلى جسده",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Welche Symptome hatte die Person am Montagmorgen?",
        instructionAr: "اقرأ الفقرة الأولى: ما الأعراض؟",
        options: [
          "Die Person hatte Halsschmerzen und Fieber, ihr war heiß und kalt, und sie fühlte sich sehr schwach.",
          "Die Person hatte nur leichte Kopfschmerzen und fühlte sich sonst ganz gut und arbeitsfähig.",
          "Die Person hatte starke Bauchschmerzen und Übelkeit, aber ganz sicher kein Fieber.",
          "Die Person hatte starke Rückenschmerzen, aber sonst keine weiteren Beschwerden.",
        ],
        correctIndex: 0,
        explanation:
          "«Mein Hals tat weh, ich hatte Fieber, mir war heiß und kalt, und ich fühlte mich sehr schwach.»",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«nur leichte Kopfschmerzen … arbeitsfähig» يناقض «Mein Hals tat weh, ich hatte Fieber … sehr schwach».",
          "«starke Bauchschmerzen und Übelkeit, aber kein Fieber» يناقض ذكر «ich hatte Fieber» صراحةً.",
          "«starke Rückenschmerzen» لم تُذكر؛ الشكوى كانت الحلقَ والحمّى والضعف.",
        ],
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Was hat die Kollegin geraten?",
        instructionAr: "اقرأ الفقرة الثانية: بماذا نصحت الزميلة؟",
        options: [
          "Zum Arzt gehen; bei Bedarf nach einer Krankschreibung fragen und den Chef informieren",
          "Zu Hause bleiben und gar nicht erst in der Praxis anrufen oder Bescheid sagen",
          "Zur Arbeit gehen, obwohl man ganz offensichtlich nicht arbeiten kann",
          "Den Termin in der Praxis einfach absagen und trotzdem weiterarbeiten",
        ],
        correctIndex: 0,
        explanation:
          "«Du solltest zum Arzt gehen. Wenn du nicht arbeiten kannst, frag nach einer Krankschreibung und informiere deinen Chef.»",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«zu Hause bleiben und gar nicht erst anrufen» يناقض «frag nach einer Krankschreibung und informiere deinen Chef».",
          "«zur Arbeit gehen, obwohl man nicht arbeiten kann» يخالف شرط النصّ «Wenn du nicht arbeiten kannst …».",
          "«den Termin einfach absagen und trotzdem weiterarbeiten» يخالف الأمرين معاً: الذهاب للطبيب وإبلاغ الرئيس.",
        ],
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Was bedeutet: „Sie müssen nicht wiederkommen“?",
        instructionAr: "اقرأ الفقرة الرابعة: ماذا تعني هذه الجملة؟",
        options: [
          "Es ist nicht nötig, zurückzukommen",
          "Es ist verboten, zurückzukommen",
          "Sie sollen morgen kommen",
          "Sie müssen unbedingt kommen",
        ],
        correctIndex: 0,
        explanation:
          "في هذه القراءة، müssen nicht ينفي الوجوب؛ أما dürfen nicht فيعبّر عن عدم الإذن/المنع.",
        errorType: "grammar",
        optionExplanations: [
          undefined,
          "«Es ist verboten, zurückzukommen» — المنع يُصاغ بـ«dürfen nicht» لا بـ«müssen nicht».",
          "«Sie sollen morgen kommen» — الجملة لا تحدّد موعداً ولا تأمر بالحضور.",
          "«Sie müssen unbedingt kommen» عكس النفي؛ «müssen nicht» إعفاءٌ لا إلزام.",
        ],
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Was war verboten?",
        instructionAr: "اقرأ الفقرة الرابعة: ما الممنوع؟",
        options: [
          "Sport machen, solange die Person Fieber hat",
          "Tee trinken und viel schlafen",
          "Zu Hause bleiben und ausruhen",
          "Zur Apotheke gehen und Medizin holen",
        ],
        correctIndex: 0,
        explanation:
          "«Solange Sie Fieber haben, dürfen Sie keinen Sport machen»؛ يذكر النص المنع مع شرط الحمى.",
        errorType: "grammar",
        optionExplanations: [
          undefined,
          "«Tee trinken und viel schlafen» موصىً به في النصّ لا محظور.",
          "«Zu Hause bleiben und ausruhen» هو المطلوب لا الممنوع.",
          "«Zur Apotheke gehen und Medizin holen» فعله الشخص فعلاً بلا منع.",
        ],
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 5,
        questionDe: "Wohin ist die Person auf dem Weg nach Hause gegangen?",
        instructionAr: "اقرأ الفقرة الخامسة: إلى أين ذهب الشخص في طريق عودته؟",
        options: [
          "In die Apotheke",
          "In ein Restaurant",
          "Zur Arbeit",
          "In eine Schule",
        ],
        correctIndex: 0,
        explanation:
          "«Auf dem Weg nach Hause bin ich in die Apotheke gegangen.»",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«In ein Restaurant» لم يُذكر في طريق العودة.",
          "«Zur Arbeit» — عاد إليها «am Freitag» فقط، لا في طريقه إلى البيت.",
          "«In eine Schule» لا ذكر لها في النصّ.",
        ],
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 6,
        questionDe: "Wann ist die Person wieder arbeiten gegangen?",
        instructionAr: "اقرأ الفقرة الأخيرة: متى عاد إلى العمل؟",
        options: ["Am Freitag", "Am Montag", "Am Mittwoch", "Am Sonntag"],
        correctIndex: 0,
        explanation: "«bin am Freitag wieder zur Arbeit gegangen».",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Am Montag» يومُ المرض لا يومُ العودة.",
          "«Am Mittwoch» — النصّ يقول «bin am Freitag wieder zur Arbeit gegangen».",
          "«Am Sonntag» غير مذكور في النصّ.",
        ],
      },
    ],
    redemittel: [
      {
        de: "Heute stimmt etwas nicht.",
        ar: "اليوم ثمّة خطبٌ ما",
      },
      {
        de: "Du solltest zum Arzt gehen.",
        ar: "ينبغي أن تذهب إلى الطبيب",
      },
      {
        de: "Was fehlt Ihnen denn?",
        ar: "ما شكواك؟ — سؤال ممكن عن الأعراض",
      },
      {
        de: "Das ist nicht schlimm, aber Sie brauchen Ruhe.",
        ar: "الأمر ليس شديداً، لكنك تحتاج إلى الراحة.",
      },
      {
        de: "Nach drei Tagen zu Hause ging es mir viel besser.",
        ar: "وبعد ثلاثة أيّام صرتُ أحسن حالاً بكثير",
      },
      {
        de: "Ich habe mich gut erholt.",
        ar: "تعافيتُ جيداً",
      },
    ],
    discussionAr:
      "تدريب شفهي أو كتابي اختياري غير مسجّل: صفّ في بضع جمل حالةً صحية خيالية أو موقفاً غير شخصي. جرّب تركيباً لعرض ومدة، وجملةً فيها sollen أو sollten، إن شئت. لا يلزم الإفصاح عن معلومات صحية شخصية؛ وهذا النشاط لا يقيّم الكلام أو الكتابة ولا يضيف دليلاً إلى الأهداف.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "زيارة الطبيب",
        lines: [
          {
            speaker: "Arzt",
            de: "Guten Tag! Was fehlt Ihnen?",
            ar: "طاب يومك! ما شكواك؟",
          },
          {
            speaker: "Sami",
            de: "Ich habe seit gestern starke Kopfschmerzen und Fieber.",
            ar: "عندي منذ أمس صداع شديد وحمى.",
          },
          {
            speaker: "Arzt",
            de: "Haben Sie auch Husten?",
            ar: "هل عندك سعال أيضاً؟",
          },
          { speaker: "Sami", de: "Ja, ein bisschen.", ar: "نعم، قليلاً." },
          {
            speaker: "Arzt",
            de: "Sie haben eine Erkältung. Sie sollen sich ausruhen und zu Hause bleiben.",
            ar: "عندك نزلة برد. ينبغي أن تستريح وتبقى في البيت.",
          },
          { speaker: "Sami", de: "Und Tabletten?", ar: "وأقراص؟" },
          {
            speaker: "Arzt",
            de: "Ich stelle Ihnen ein Rezept aus. Bitte nehmen Sie das Medikament nach der Packungsbeilage ein.",
            ar: "سأحرر لك وصفة. تناول الدواء وفق النشرة المرفقة من فضلك.",
          },
        ],
      },
      {
        id: "l2",
        title: "نصائح من صديق",
        lines: [
          {
            speaker: "Anna",
            de: "Du siehst müde aus. Was ist los?",
            ar: "تبدو متعباً. ماذا حدث؟",
          },
          {
            speaker: "Karim",
            de: "Ich habe Rückenschmerzen. Ich habe zu viel gearbeitet.",
            ar: "عندي ألم في الظهر. عملت كثيراً.",
          },
          {
            speaker: "Anna",
            de: "Du sollst dich ausruhen und nicht so viel arbeiten!",
            ar: "ينبغي أن تستريح وألا تعمل كثيراً!",
          },
          {
            speaker: "Karim",
            de: "Du hast recht. Dann sollte ich zum Arzt gehen.",
            ar: "معك حق. ينبغي أن أذهب إلى الطبيب إذن.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار وأجب قبل فتح التفريغ:",
        questionDe: "Welche Beschwerden nennt Sami zuerst?",
        questionAr: "ما العرضان اللذان ذكرهما سامي أولاً؟",
        options: [
          "Kopfschmerzen und Fieber",
          "Bauchschmerzen und Übelkeit",
          "Nur Husten ohne Fieber",
          "Rückenschmerzen am Morgen",
        ],
        correctIndex: 0,
        explanation: "قال: starke Kopfschmerzen und Fieber — صداع وحمى.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Bauchschmerzen und Übelkeit» لم يذكرهما سامي.",
          "«Nur Husten ohne Fieber» ينفي الحمّى التي ذكرها سامي.",
          "«Rückenschmerzen am Morgen» شكوى كريم لا سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار وأجب قبل فتح التفريغ:",
        questionDe: "Was soll Sami machen?",
        questionAr: "ماذا نصحه الطبيب أن يفعل؟",
        options: [
          "sich ausruhen und zu Hause bleiben",
          "arbeiten",
          "Sport machen im Fitnessstudio",
          "kalt baden am frühen Morgen",
        ],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollen sich ausruhen und zu Hause bleiben.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«arbeiten» عكس نصيحة الطبيب: «Sie sollen sich ausruhen».",
          "«Sport machen im Fitnessstudio» يناقض لزوم البقاء في البيت.",
          "«kalt baden am frühen Morgen» لم يُنصح به في الحوار.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني وأجب قبل فتح التفريغ:",
        questionDe: "Warum hat Karim Rückenschmerzen?",
        questionAr: "لماذا ألم ظهر كريم؟",
        options: [
          "Er hat zu viel gearbeitet.",
          "Er hat geschwommen.",
          "Er ist geflogen.",
          "Er hat Fußball gespielt.",
        ],
        correctIndex: 0,
        explanation: "قال كريم: Ich habe zu viel gearbeitet — عمل كثيراً.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Er hat geschwommen» سببٌ مختلقٌ لم يقله كريم.",
          "«Er ist geflogen» لا صلة له بآلام الظهر في الحوار.",
          "«Er hat Fußball gespielt» غير مذكور؛ قوله «Ich habe zu viel gearbeitet».",
        ],
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات الجسم: ch، sch، وau",
    items: [
      { de: "der Kopf", ar: "الرأس", note: "IPA /kɔpf/: o قصيرة؛ pf في نهاية المقطع، من دون حركة بينهما." },
      { de: "der Bauch", ar: "البطن", note: "IPA /baʊ̯x/: au ثنائي الصوت؛ ch هنا /x/، والخاء العربية تقريبية." },
      { de: "der Rücken", ar: "الظهر", note: "IPA /ˈʁʏkn̩/: ü حركة أمامية مدوّرة قصيرة؛ النبر على المقطع الأول." },
      { de: "die Schulter", ar: "الكتف", note: "IPA /ˈʃʊltɐ/: sch = /ʃ/، وu قصيرة." },
      { de: "das Auge", ar: "العين", note: "IPA /ˈaʊ̯ɡə/: au ثنائي الصوت؛ g هنا /ɡ/ انفجاري مجهور، لا /ɣ/ العربية." },
      { de: "der Husten", ar: "السعال", note: "IPA /ˈhuːstən/: u طويلة /uː/؛ راجع Cambridge وCollins." },
    ],
    tip: "استخدم IPA للاستدلال على الأصوات؛ الكتابة بالحروف العربية تقريبية ولا تمثل صوتاً ألمانياً مطابقاً. يبيّن نطق Auge أن g هنا /ɡ/ لا غ /ɣ/، وHusten فيه u طويلة. تكرار النص أو مطابقة التفريغ لا يقيسان وحدهما مخارج الأصوات والنبر.",
    shadowing: [
      {
        de: "Ich habe Kopfschmerzen.",
        ar: "عندي صداع.",
        tip: "في Kopfschmerzen انتبه إلى pf ثم sch /ʃ/؛ لا تعتمد على تهجئة عربية تقريبية للحركات.",
      },
      {
        de: "Mein Rücken tut weh.",
        ar: "ظهري يؤلمني.",
        tip: "tut weh: في weh يُنطق w /v/ وe طويلة /eː/.",
      },
      {
        de: "Sie sollen sich ausruhen.",
        ar: "ينبغي أن تستريح.",
        tip: "sollen: البداية s قبل الحركة /z/؛ الحركة o قصيرة في هذا الفعل.",
      },
      {
        de: "Ich soll im Bett bleiben.",
        ar: "يجب أن أبقى في السرير.",
        tip: "bleiben: ei = /aɪ̯/، مع نبر المقطع الأول.",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة واحدة عن الصداع تبدأ بـIch:",
      prompt: "Übersetze: «عندي صداع منذ أمس». Beginne mit „Ich“ und benutze haben + Kopfschmerzen.",
      acceptedAnswers: ["Ich habe seit gestern Kopfschmerzen."],
      sampleAnswer: "Ich habe seit gestern Kopfschmerzen.",
      explanation: "صيغة الجواب المحددة: Ich habe + seit gestern + Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف sollen:",
      template:
        "Ich ___ mich ausruhen. Du ___ im Bett bleiben. Er ___ sich ausruhen. Wir ___ heute zu Hause bleiben.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollst", options: ["soll", "sollst", "sollt"] },
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollst", "sollen"] },
      ],
      explanation: "سلم sollen: soll، sollst، soll، sollen، sollt، sollen.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Sie sollen sich ausruhen und zu Hause bleiben.",
      explanation:
        "تنتهي جملة الفعل الناقص بالفعل الأساسي bleiben؛ والضمير sich جزء من sich ausruhen.",
      errorType: "spelling",
    },
  ];

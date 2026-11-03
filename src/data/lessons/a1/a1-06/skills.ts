/**
 * a1-06 — المهارات: قراءة و استماع و نطق و كتابة (الجزء «skills»)
 * فُصل من a1-06.ts في الدفعة 94 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    "id": "read-a1-06",
    "titleDe": "Was machst du am Wochenende?",
    "titleAr": "ماذا تفعل في نهاية الأسبوع؟",
    "textType": "dialog",
    "paragraphs": [
      "Lena: Hallo Youssef! Sag mal, was machst du eigentlich gern in deiner Freizeit?",
      "Youssef: Ich koche sehr gern. Am liebsten koche ich für Freunde. Und ich lese viel — jeden Abend eine halbe Stunde. Und du? Hast du ein Hobby?",
      "Lena: Ich spiele Volleyball, zweimal pro Woche. Ich mag Mannschaftssport. Aber ich kann leider nicht schwimmen. Das finde ich schade.",
      "Youssef: Wirklich? Ich kann ganz gut schwimmen. Komm doch mal mit ins Schwimmbad! Ich kann dir beim Schwimmen helfen. Fang einfach an, es ist nicht schwer.",
      "Lena: Vielleicht. Was hast du denn am Wochenende gemacht? Warst du zu Hause?",
      "Youssef: Nein, am Samstag war ich im Museum. Es war interessant, aber ich hatte wenig Zeit. Am Sonntag war das Wetter schlecht, also habe ich gekocht und ferngesehen.",
      "Lena: Klingt gut! Hast du Lust auf einen Kaffee? Dann erzählst du mir mehr.",
      "Youssef: Sehr gern! Ich möchte aber lieber einen Tee. Kaffee trinke ich nur am Morgen."
    ],
    "paragraphsAr": [
      "لينا: أهلاً يوسف! قل لي، ماذا تحبّ أن تفعل في وقت فراغك؟",
      "يوسف: أحبّ الطبخ كثيراً. وأكثر ما أحبّه أن أطبخ للأصدقاء. وأقرأ كثيراً — نصف ساعة كلّ مساء. وأنتِ؟ ألديك هواية؟",
      "لينا: ألعب الكرة الطائرة مرّتين أسبوعياً. أحبّ الرياضات الجماعية. لكنّني للأسف لا أستطيع السباحة. أجد ذلك مؤسفاً.",
      "يوسف: حقّاً؟ أُحسن السباحة. تعالي معي إلى المسبح! أستطيع مساعدتك في السباحة. ابدئي فقط، فالأمر ليس صعباً.",
      "لينا: ربّما. وماذا فعلتَ في نهاية الأسبوع؟ أكنتَ في البيت؟",
      "يوسف: لا، يوم السبت كنت في المتحف. كان مثيراً للاهتمام، لكن لم يكن لديّ وقت كافٍ. ويوم الأحد كان الجوّ سيّئاً، فطبختُ وشاهدت التلفاز.",
      "لينا: هذا يبدو جيداً! ألديك رغبة في قهوة؟ فتحكي لي المزيد.",
      "يوسف: بكلّ سرور! لكنّني أفضّل شاياً. القهوة لا أشربها إلا صباحاً."
    ],
    "glossary": [
      {
        "de": "eigentlich",
        "ar": "في الحقيقة / بالمناسبة",
        "noteAr": "تعمل هنا غالباً بوصفها أداةً حوارية تجعل السؤال أقرب إلى الاستفسار العابر؛ ويتوقف أثرها على السياق والنبرة."
      },
      {
        "de": "am liebsten",
        "ar": "أكثر ما أحبّ",
        "noteAr": "أعلى درجات سُلَّم gern ← lieber ← am liebsten. وهي صيغٌ شاذّة لا تُقاس على أصلها."
      },
      {
        "de": "der Mannschaftssport",
        "ar": "الرياضة الجماعية",
        "noteAr": "مركّب من die Mannschaft (الفريق) + der Sport، وجنسه من الجزء الأخير فهو مذكّر."
      },
      {
        "de": "schade",
        "ar": "مؤسف / يا للأسف",
        "noteAr": "صفة لا تُصرَّف، وتُستعمل وحدها تعجّباً: Schade! ومنها Wie schade! = يا للأسف الشديد."
      },
      {
        "de": "das Schwimmbad",
        "ar": "المسبح",
        "noteAr": "محايد لأنّ das Bad محايد. والحركة إليه بـins: ins Schwimmbad gehen."
      },
      {
        "de": "helfen",
        "ar": "يساعد",
        "noteAr": "يأخذ مفعولاً غير مباشر بصيغة الجر (Dativ): Ich kann dir helfen."
      },
      {
        "de": "Fang an!",
        "ar": "ابدأ!",
        "noteAr": "أمر من anfangen: في المضارع du fängst an، وفي أمر du نقول Fang an! من دون الإمالة ä."
      },
      {
        "de": "das Museum",
        "ar": "المتحف",
        "noteAr": "محايد، وجمعه شاذّ لاتينيّ: die Museen. والحركة إليه بـins Museum."
      },
      {
        "de": "interessant",
        "ar": "ممتع / مثير للاهتمام",
        "noteAr": "صفة، والنبر على المقطع الأخير: interess‑ÁNT. وضدّها langweilig (مملّ)."
      },
      {
        "de": "also",
        "ar": "إذن / لذلك",
        "noteAr": "حذارِ من الصديق الكاذب: ليست «also» الإنجليزية (= أيضاً) بل تعني «إذن». و«أيضاً» هي auch."
      },
      {
        "de": "Klingt gut!",
        "ar": "هذا يبدو جيداً!",
        "noteAr": "تعبير محكيّ شائع من الفعل klingen (يبدو صوتُه). والفاعل «das» محذوف اختصاراً."
      },
      {
        "de": "erzählen",
        "ar": "يحكي / يروي",
        "noteAr": "في «Erzähl mir davon!» يأتي الضمير mir في Dativ، وdavon تعني «عن ذلك». وقد يختلف تركيب erzählen بحسب المتمّمات في الجملة."
      },
      {
        "de": "habe gekocht / ferngesehen",
        "ar": "طبخت / شاهدت التلفاز",
        "noteAr": "صيغة Perfekt ظاهرة هنا لفهم الحوار: haben في الحاضر مع Partizip II. نركز في هذا الدرس على war وhatte؛ لا تخلط بين عرض الصيغة في القراءة وجعلها هدف الإتقان هنا."
      },
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "هوايات يوسف:",
        "questionDe": "Was macht Youssef am liebsten?",
        "questionAr": "ما أكثر نشاط يحبّ يوسف أن يفعله؟",
        "options": [
          "Volleyball spielen",
          "Für Freunde kochen",
          "Ins Museum gehen",
          "Schwimmen"
        ],
        "correctIndex": 1,
        "explanation": "قال: «Am liebsten koche ich für Freunde». وصيغة am liebsten هي أعلى درجات التفضيل، فوق gern و lieber.",
        "optionExplanations": [
          "الكرة الطائرة «Volleyball spielen» هواية لينا؛ ويوسف قال «Am liebsten koche ich für Freunde».",
          undefined,
          "ذهب إلى المتحف «im Museum» مرّةً يوم السبت، وليست هوايته «am liebsten».",
          "السباحة «Schwimmen» مما يُحسنه، لكنه لم يجعلها «am liebsten»."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "قدرات لينا:",
        "questionDe": "Was kann Lena nicht?",
        "questionAr": "ما الذي لا تستطيعه لينا؟",
        "options": [
          "Volleyball spielen",
          "Kochen",
          "Schwimmen",
          "Deutsch sprechen"
        ],
        "correctIndex": 2,
        "explanation": "قالت: «ich kann leider nicht schwimmen». ولاحظ البنية: können مصرَّفاً ثانياً، و nicht قبل المصدر، والمصدر في الآخر.",
        "optionExplanations": [
          "بل تلعبها «Volleyball» مرتين أسبوعياً؛ والعجز عن «nicht schwimmen».",
          "لم يُذكر عجزها عن الطبخ «Kochen»؛ والمنفيّ في النصّ «ich kann leider nicht schwimmen».",
          undefined,
          "هي تتحدّث الألمانية «Deutsch sprechen» في الحوار نفسه، فلا ينطبق عليها النفي."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "عطلة يوسف — انتبه إلى صيغ الماضي:",
        "questionDe": "Wo war Youssef am Samstag?",
        "questionAr": "أين كان يوسف يوم السبت؟",
        "options": [
          "Im Schwimmbad",
          "Im Museum",
          "Zu Hause",
          "Im Café"
        ],
        "correctIndex": 1,
        "explanation": "قال: «am Samstag war ich im Museum». ولاحظ ترتيب V2: ظرف الزمان أوّلاً ثمّ الفعل war ثمّ الفاعل ich.",
        "optionExplanations": [
          "المسبح «Schwimmbad» دعوةٌ للمستقبل؛ والماضي «am Samstag war ich im Museum».",
          undefined,
          "بل نفى ذلك صراحةً بقوله Nein.",
          "القهوة «Café» اقتراحٌ في نهاية الحوار، لا حدثاً وقع السبت «am Samstag war ich»."
        ],
        "errorType": "vocabulary",
        "paragraph": 5
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "بنية الجملة — لماذا هذه الصيغة؟",
        "questionDe": "Wo steht die trennbare Vorsilbe an im Imperativsatz?",
        "questionAr": "أين تأتي البادئة المنفصلة an في جملة الأمر؟",
        "options": [
          "Am Satzanfang vor dem Verb",
          "Am Satzende",
          "Zwischen Verb und Subjekt",
          "Sie bleibt immer direkt beim Infinitiv"
        ],
        "correctIndex": 1,
        "explanation": "anfangen فعل منفصل، وفي صيغة الأمر Fang einfach an! تأتي البادئة an في نهاية الجملة بعد بقية الكلمات.",
        "optionExplanations": [
          "في «Fang einfach an!» تأتي «an» في الآخر، لا قبل الفعل في أول الجملة.",
          undefined,
          "لا موضع للبادئة بين الفعل والفاعل؛ وفي الأمر «Fang einfach an!» تسبقها «einfach».",
          "«anfangen» ينفصل في الجملة المصرفة ⇒ «Fang … an»؛ ولا يبقى ملتصقاً بالمصدر «Infinitiv»."
        ],
        "errorType": "word-order",
        "paragraph": 3
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "الطلب المهذّب في النهاية:",
        "questionDe": "Was möchte Youssef trinken?",
        "questionAr": "ماذا يودّ يوسف أن يشرب؟",
        "options": [
          "Einen Kaffee",
          "Einen Tee",
          "Ein Wasser",
          "Nichts"
        ],
        "correctIndex": 1,
        "explanation": "قال: «Ich möchte aber lieber einen Tee»؛ أي إنه يفضّل الشاي على القهوة في هذا السياق.",
        "optionExplanations": [
          "القهوة «Einen Kaffee» اقتراح لينا؛ ويوسف قال «Ich möchte aber lieber einen Tee».",
          undefined,
          "لم يُذكر ماء «Ein Wasser» في هذا الحوار.",
          "بل قَبِل الدعوة بقوله Sehr gern."
        ],
        "errorType": "vocabulary",
        "paragraph": 7
      }
    ],
    "redemittel": [
      {
        "de": "Was machst du gern in deiner Freizeit?",
        "ar": "ماذا تحبّ أن تفعل في وقت فراغك؟"
      },
      {
        "de": "Ich koche gern, am liebsten für Freunde.",
        "ar": "أحبّ الطبخ، وأكثر ما أحبّه أن أطبخ للأصدقاء."
      },
      {
        "de": "Ich kann leider nicht schwimmen. Das finde ich schade.",
        "ar": "لا أستطيع السباحة للأسف. أجد ذلك مؤسفاً."
      },
      {
        "de": "Hast du Lust auf einen Kaffee?",
        "ar": "ألديك رغبة في قهوة؟"
      },
      {
        "de": "Wie war dein Wochenende? — Es war sehr schön!",
        "ar": "كيف كانت عطلتك؟ — كانت جميلةً جدّاً!"
      },
      {
        "de": "Ich möchte lieber einen Tee, bitte.",
        "ar": "أفضّل شاياً من فضلك."
      }
    ],
    "discussionAr": "اكتب حواراً من ثماني تبادلات عن وقت الفراغ مع صديق. أدرج ثلاث جمل بـgern أو lieber أو am liebsten، وجملتين بـkönnen (إحداهما منفية)، وطلباً بـmöchte، وأمراً موجهاً إلى الصديق بصيغة du. ثم اكتب الصيغة الرسمية المقابلة بـSie منفصلةً عن الحوار، واسأل عن عطلة سابقة وأجب باستخدام war وhatte. راجع تصريف الأفعال في كل جملة.",
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "دعوة إلى المباراة",
        audioNoteAr: "يُنطق النص آلياً عبر أصوات المتصفح (TTS)، وليس تسجيلاً بشرياً؛ وقد تختلف الأصوات حسب الجهاز.",
        lines: [
          { speaker: "Karim", de: "Hallo Mona! Was machst du am Samstag?", ar: "مرحباً منى! ماذا تفعلين السبت؟" },
          { speaker: "Mona", de: "Am Samstag? Ich weiß nicht. Warum?", ar: "السبت؟ لا أعرف. لماذا؟" },
          { speaker: "Karim", de: "Ich spiele gern Fußball. Hast du Lust, mitzukommen?", ar: "أحب لعب كرة القدم. هل لديك رغبة في المجيء معنا؟" },
          { speaker: "Mona", de: "Gern! Ich spiele auch gern Fußball.", ar: "بسرور! أنا أيضاً أحب لعب كرة القدم." },
          { speaker: "Karim", de: "Super! Komm um vier Uhr zum Sportplatz!", ar: "رائع! تعالي في الرابعة إلى الملعب!" },
        ],
      },
      {
        id: "l2",
        title: "الهوايات المفضلة",
        audioNoteAr: "يُنطق النص آلياً عبر أصوات المتصفح (TTS)، وليس تسجيلاً بشرياً؛ وقد تختلف الأصوات حسب الجهاز.",
        lines: [
          { speaker: "Lehrer", de: "Was machst du gern in deiner Freizeit?", ar: "ماذا تحب أن تفعل في وقت فراغك؟" },
          { speaker: "Sami", de: "Ich lese gern und höre gern Musik.", ar: "أحب القراءة والاستماع للموسيقى." },
          { speaker: "Lehrer", de: "Und du, Anna?", ar: "وأنتِ يا آنا؟" },
          { speaker: "Anna", de: "Ich tanze gern und fotografiere.", ar: "أحب الرقص والتصوير." },
        ],
      },
      {
        id: "l3",
        title: "هوايات يوم الأحد",
        audioNoteAr: "مصدر ملفات الصوت المرفقة غير موثّق في بيانات الدرس؛ لذلك لا أجزم بأنها مولّدة آلياً أو تسجيلات بشرية، ولا أؤكد هوية الصوتين. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Mona", de: "Was machst du am Sonntag gern?", ar: "ماذا تحب أن تفعل يوم الأحد؟", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-1.mp3" },
          { speaker: "Karim", de: "Ich fahre gern Rad und gehe gern schwimmen.", ar: "أحب ركوب الدراجة والذهاب للسباحة.", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-2.mp3" },
          { speaker: "Mona", de: "Wo fährst du gern Rad?", ar: "أين تحب ركوب الدراجة؟", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-3.mp3" },
          { speaker: "Karim", de: "Ich fahre gern im Park Rad.", ar: "أحب ركوب الدراجة في الحديقة.", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-4.mp3" },
          { speaker: "Mona", de: "Und was machst du am Abend?", ar: "وماذا تفعل مساءً؟", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-5.mp3" },
          { speaker: "Karim", de: "Am Abend spiele ich Gitarre.", ar: "أعزف الغيتار مساءً.", audioSrc: "/audio/lessons/a1-06/ls-a1-06-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was spielt Karim gern?",
        questionAr: "ماذا يحب كريم أن يلعب؟",
        options: ["Fußball", "Tennis", "Basketball", "Schach"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — التنس لم يُذكر في الحوار؛ وكريم يقول: «Ich spiele gern Fußball».", "لا — كرة السلة لم تُذكر؛ والمسموع من كريم: «Ich spiele gern Fußball».", "لا — الشطرنج لم يُذكر إطلاقاً؛ والمسموع: «Ich spiele gern Fußball. Hast du Lust, mitzukommen?»."],
        explanation: "قال كريم: Ich spiele gern Fußball.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann soll Mona kommen?",
        questionAr: "متى يجب أن تأتي منى؟",
        options: ["um vier Uhr", "um fünf Uhr", "um drei Uhr", "am Abend"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — الخامسة لم تُذكر؛ وكريم حدّد الموعد: «Komm um vier Uhr zum Sportplatz!».", "لا — الثالثة لم تُذكر؛ والمسموع «um vier Uhr zum Sportplatz».", "لا — «am Abend» تحديدٌ غامض لم يُقل؛ والموعد بالساعة: «Komm um vier Uhr»."],
        explanation: "قال كريم: Komm um vier Uhr zum Sportplatz!",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Anna gern?",
        questionAr: "ماذا تحب آنا أن تفعل؟",
        options: ["tanzen und fotografieren", "lesen und Musik hören", "Fußball spielen", "fernsehen"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — هذه هواية سامي لا آنا: «Ich lese gern und höre gern Musik».", "لا — كرة القدم من حوار الدعوة (كريم ومنى)؛ وآنا قالت: «Ich tanze gern und fotografiere».", "لا — مشاهدة التلفاز لم تُذكر في الحوار؛ والمسموع من آنا: «Ich tanze gern und fotografiere»."],
        explanation: "قالت آنا: Ich tanze gern und fotografiere.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was macht Karim am Sonntag gern?",
        questionAr: "ماذا يحب كريم أن يفعل يوم الأحد؟",
        options: ["Rad fahren und schwimmen", "tanzen und fotografieren", "Fußball spielen und lesen", "Musik hören und kochen"],
        correctIndex: 0,
        optionExplanations: [undefined, "الرقص والتصوير من هوايتي آنا في الحوار الآخر.", "لم يقل كريم إنه يلعب كرة القدم أو يقرأ يوم الأحد.", "الاستماع للموسيقى والطبخ لم يردا في هذا الحوار."],
        explanation: "قال كريم: Ich fahre gern Rad und gehe gern schwimmen.",
        errorType: "vocabulary",
      },
      {
        id: "q5",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo fährt Karim gern Rad?",
        questionAr: "أين يحب كريم ركوب الدراجة؟",
        options: ["In einem Park", "In einem Garten", "Auf dem Platz", "Beim Schwimmbad"],
        correctIndex: 0,
        optionExplanations: [undefined, "قال إنه يركب الدراجة في متنزّه (Park)، لا في حديقة (Garten).", "لم يذكر ساحةً أو ملعباً؛ بل قال «im Park».", "المسبح مرتبط بالسباحة؛ أما ركوب الدراجة ففي الحديقة."],
        explanation: "قال: Ich fahre gern im Park Rad.",
        errorType: "vocabulary",
      },
      {
        id: "q6",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Karim am Abend?",
        questionAr: "ماذا يفعل كريم مساءً؟",
        options: ["Er spielt am Abend Gitarre", "Er hört am Abend Musik", "Er liest am Abend ein Buch", "Er sieht am Abend fern"],
        correctIndex: 0,
        optionExplanations: [undefined, "لم يذكر الاستماع للموسيقى مساءً؛ قال إنه يعزف الغيتار.", "لم يقل إنه يقرأ كتاباً مساءً في هذا الحوار.", "مشاهدة التلفاز ليست النشاط المذكور؛ إنه يعزف الغيتار."],
        explanation: "أجاب: Am Abend spiele ich Gitarre.",
        errorType: "vocabulary",
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات الهوايات: ö وz وh",
    items: [
      { de: "das Hobby", ar: "الهواية", note: "h في أول الكلمة يُنطق /h/ ولا يُحذف." },
      { de: "gern", ar: "بسرور", note: "g صوت /ɡ/ مجهور، قريب من g في go، وليس غ العربية؛ وقد يختلف r بحسب المنطقة." },
      { de: "tanzen", ar: "يرقص", note: "z الألمانية يُنطق /ts/؛ قرّبها من ت + س متصلتين: tan-tsen." },
      { de: "hören", ar: "يسمع", note: "ö طويل /øː/: ابدأ بصوت e ثم دوّر الشفتين من دون تحويله إلى u." },
      { de: "die Musik", ar: "الموسيقى", note: "النطق [muˈziːk]: s قبل i هنا مجهور /z/؛ آخر الكلمة هو k، لا s." },
      { de: "fotografieren", ar: "يُصوّر", note: "النبر على ‎-fie-، وie تمثل /iː/ طويلاً تقريباً: fo-to-gra-FIE-ren." },
    ],
    tip: "لا يتغير صوت الحرف لمجرد وقوع الكلمة في نهاية الجملة: في Musik يبقى s قبل i مجهوراً /z/، وتنتهي الكلمة بصوت k.",
    shadowing: [
      { de: "Ich spiele gern Tennis.", ar: "أحب لعب التنس.", tip: "sp في بداية الكلمة يُنطق /ʃp/؛ وg في gern هو /ɡ/." },
      { de: "Ich höre gern Musik.", ar: "أحب الاستماع للموسيقى.", tip: "حافظ على ö الطويل /øː/ ولا تستبدله بصوت u." },
      { de: "Komm bitte um vier Uhr!", ar: "تعال في الرابعة من فضلك!", tip: "v في vier يُنطق /f/." },
      { de: "Hast du Lust, mitzukommen?", ar: "هل لديك رغبة في المجيء معنا؟", tip: "في mitzukommen تدخل zu بين البادئة mit والفعل kommen: mit + zu + kommen." },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة باستخدام نشاط واحد من القائمة المحددة:",
      prompt: "Was machst du gern in deiner Freizeit? Verwende eine Aktivität: Fußball spielen / Bücher lesen / Musik hören / tanzen.",
      acceptedAnswers: ["Ich spiele gern Fußball", "Ich lese gern Bücher", "Ich höre gern Musik", "Ich tanze gern"],
      sampleAnswer: "Ich spiele gern Fußball.",
      explanation: "الصيغة: Ich + فعل + gern + بقية الجملة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل صيغ الأمر الصحيحة (Komm/Kommt/Kommen Sie):",
      template: "___ bitte! (لصديقك) · ___ bitte! (لصديقين) · ___ bitte! (لحضرتك)",
      blanks: [
        { correct: "Komm", options: ["Komm", "Kommt", "Kommen Sie"] },
        { correct: "Kommt", options: ["Komm", "Kommt", "Kommen Sie"] },
        { correct: "Kommen Sie", options: ["Komm", "Kommt", "Kommen Sie"] },
      ],
      explanation: "du → Komm، ihr → Kommt، Sie → Kommen Sie. الضمير يُحذف مع du/ihr ويُذكر مع Sie.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Komm doch morgen mit!",
      explanation: "تعال معنا غداً! — Komm (أمر du) + doch (تشجيع) + mit (بادئة فعل منفصل في النهاية).",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل الحوار المكتوب. افترض أن الساعة 15:00 لا تناسبك (مع أن السبت متاح): اقبل الدعوة أولاً واسأل عن الوقت، ثم اعتذر عن الساعة واقترح الأسبوع القادم.",
      template: "A: Hast du am Samstag Zeit? Wir spielen Fußball. · B: ___ · A: Um 15 Uhr im Park. Kommst du mit? · B: ___ · A: ___",
      blanks: [
        { correct: "Ja, gern! Um wie viel Uhr?", options: ["Ja, gern! Um wie viel Uhr?", "Leider habe ich keine Zeit.", "Ich spiele Fußball?"] },
        { correct: "Leider passt mir 15 Uhr nicht. Vielleicht nächste Woche?", options: ["Leider passt mir 15 Uhr nicht. Vielleicht nächste Woche?", "Ja, gern! Um wie viel Uhr?", "Leider bin ich keine Zeit. Vielleicht nächste Woche?"] },
        { correct: "Ja, gern! Nächste Woche passt es mir gut.", options: ["Ja, gern! Nächste Woche passt es mir gut.", "Nein, ich habe am Samstag Zeit.", "Ich möchte keine Zeit."] },
      ],
      explanation: "القبول الأولي يسبق معرفة الساعة؛ وبعد تحديد 15:00 يوضح المتحدث أن الوقت لا يناسبه، ثم يقترح الأسبوع القادم ويقبل الطرف الآخر. هكذا لا يتعارض الاعتذار مع القبول الأول.",
      errorType: "vocabulary",
    },
    {
      id: "w5",
      type: "fill-blank",
      instructionAr: "أكمل رسالة قصيرة عن عطلة سابقة بصيغتي war وhatte:",
      template: "Am Samstag ___ ich im Museum. Es ___ interessant. Ich ___ wenig Zeit.",
      blanks: [
        { correct: "war", options: ["war", "hatte", "waren"] },
        { correct: "war", options: ["war", "hatte", "warst"] },
        { correct: "hatte", options: ["hatte", "war", "hatten"] },
      ],
      explanation: "war هي صيغة Präteritum من sein للمكان والوصف، وhatte صيغة Präteritum من haben للوقت أو الملكية.",
      errorType: "conjugation",
    },
  ];

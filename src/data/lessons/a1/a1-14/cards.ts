/**
 * a1-14 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-14.ts في الدفعة 93 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "mt-a1-14-1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح",
      questionDe: "Im Perfekt: Am Sonntag ___ wir im Park spazieren gegangen.",
      options: ["sind", "haben", "waren", "werden"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «spazieren gehen» حركة فتأخذ «sein»: «wir sind … gegangen».", "لا — «waren» ماضٍ بسيط ولا يرافق التصريف الثالث «gegangen»؛ والصحيح «sind».", "لا — «werden» تبني المستقبل؛ والجملة في التصريف الثالث فتحتاج «sind»."],
      explanation: "في spazieren gehen بمعنى التمشّي، يُستعمل sein: Am Sonntag sind wir spazieren gegangen.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-2",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II",
      template: "Hast du die E-Mail schon ___? (schreiben)",
      blanks: [{ correct: "geschrieben", options: ["geschrieben", "geschreibt", "schrieb", "geschreiben"], errorType: "grammar" }],
      explanation: "schreiben قويّ: ei ⟵ ie والنهاية -en ⟵ geschrieben.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-3",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ لا يأخذ ge- في Partizip II؟",
      questionDe: "Welches Verb bildet das Partizip II ohne ge-?",
      options: ["reparieren", "kaufen", "hören", "spielen"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «kaufen» يصير «gekauft» أي بـ«ge-»؛ والمطلوب فعلٌ على «-ieren».", "لا — «hören» يصير «gehört»؛ وأفعال «-ieren» وحدها بلا «ge-» مثل «studiert».", "لا — «spielen» يصير «gespielt»؛ والصحيح «reparieren» ← «repariert»."],
      explanation: "reparieren ينتهي بـ-ieren ⟵ repariert بلا ge-. والثلاثة الأخرى ضعيفة عادية: gekauft, gehört, gespielt.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة وابدأ بالفاعل المركّب Meine Schwester",
      tokens: ["Meine", "Schwester", "hat", "in", "München", "studiert"],
      correctSentence: "Meine Schwester hat in München studiert",
      explanation: "المساعد hat في المركز الثاني بعد المبتدأ المركّب، وstudiert في الآخر.",
      errorType: "word-order",
    },
    {
      id: "mt-a1-14-5",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ ناقصٍ يناسب؟",
      questionDe: "Meine Eltern raten mir: „Du ___ mehr für die Prüfung lernen.“",
      options: ["sollst", "willst", "darfst", "kannst"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «willst» رغبةُ المخاطب نفسه؛ والنصيحة من الوالدين فتُستعمل «sollst».", "لا — «darfst» تعني الإذن؛ والوالدان ينصحان لا يأذنان فيلزم «sollst».", "لا — «kannst» تفيد القدرة؛ والمطلوب نقل نصح: «Du sollst mehr … lernen»."],
      explanation: "الفعل raten يضع العبارة في سياق نصيحة؛ لذلك تناسب الصيغة Du sollst. أما wollen وdürfen وkönnen فتعبر هنا عن نية أو إذن أو قدرة لا عن النصيحة المطلوبة.",
      errorType: "vocabulary",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Perfekt", ar: "الماضي المحكيّ (haben/sein + Partizip II)", example: "Im Gespräch benutzt man das Perfekt.", exampleAr: "يشيع Perfekt في محادثات كثيرة، ولا يقتصر الماضي الألماني عليه.", level: "A1" },
    { id: "fc2", de: "gemacht (machen)", ar: "فعَل", example: "Was hast du gestern gemacht?", exampleAr: "ماذا فعلتَ أمس؟", level: "A1" },
    { id: "fc3", de: "gelernt (lernen)", ar: "تعلَّم", example: "Ich habe zwei Stunden gelernt.", exampleAr: "تعلّمتُ لمدّة ساعتين.", level: "A1" },
    { id: "fc4", de: "gegessen (essen)", ar: "أكَل", example: "Wir haben im Restaurant gegessen.", exampleAr: "أكلنا في المطعم.", level: "A1" },
    { id: "fc5", de: "getrunken (trinken)", ar: "شرِب", example: "Ich habe einen Tee getrunken.", exampleAr: "شربتُ شاياً.", level: "A1" },
    { id: "fc6", de: "gefahren (fahren)", ar: "سافر، ذهب بمركبة", example: "Ich bin nach Berlin gefahren.", exampleAr: "سافرتُ إلى برلين.", level: "A1" },
    { id: "fc7", de: "gegangen (gehen)", ar: "ذهب", example: "Wir sind ins Kino gegangen.", exampleAr: "ذهبنا إلى السينما.", level: "A1" },
    { id: "fc8", de: "gewesen (sein)", ar: "كان", example: "Ich bin in Berlin gewesen.", exampleAr: "كنتُ في برلين.", level: "A1" },
    { id: "fc9", de: "geblieben (bleiben)", ar: "بقي", example: "Wir sind zu Hause geblieben.", exampleAr: "بقينا في البيت.", level: "A1" },
    { id: "fc10", de: "aufgestanden (aufstehen)", ar: "نهض من النوم", example: "Ich bin um sechs aufgestanden.", exampleAr: "نهضتُ في السادسة.", level: "A1" },
    { id: "fc11", de: "angerufen (anrufen)", ar: "اتّصل هاتفياً", example: "Ich habe meine Mutter angerufen.", exampleAr: "اتّصلتُ بأمّي.", level: "A1" },
    { id: "fc12", de: "besucht (besuchen)", ar: "زار", example: "Wir haben unsere Oma besucht.", exampleAr: "زرنا جدّتنا.", level: "A1" },
    { id: "fc13", de: "verstanden (verstehen)", ar: "فهِم", example: "Ich habe das nicht verstanden.", exampleAr: "لم أفهم ذلك.", level: "A1" },
    { id: "fc14", de: "studiert (studieren)", ar: "درس في الجامعة", example: "Sie hat in Tunis studiert.", exampleAr: "درستْ في تونس.", level: "A1" },
    { id: "fc15", de: "wollen", ar: "يريد/ينوي بحسب السياق", example: "Ich will Deutsch lernen.", exampleAr: "أريد أن أتعلّم الألمانية.", level: "A1" },
    { id: "fc16", de: "sollen", ar: "ينبغي/يُطلب منه بحسب السياق", example: "Der Arzt sagt, ich soll Wasser trinken.", exampleAr: "يقول الطبيب إنّ عليّ شرب الماء.", level: "A1" },
    { id: "fc17", de: "gestern", ar: "أمس", example: "Gestern habe ich viel gearbeitet.", exampleAr: "أمس عملتُ كثيراً.", level: "A1" },
    { id: "fc18", de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية", example: "Letztes Wochenende bin ich gereist.", exampleAr: "عطلة الأسبوع الماضية سافرتُ.", level: "A1" },
    { id: "fc19", de: "gefallen (hat gefallen)", ar: "أعجب", example: "Berlin hat mir sehr gefallen.", exampleAr: "أعجبتني برلين كثيراً.", level: "A1" },
    { id: "fc20", de: "die Fahrt", ar: "الرحلة، السفرة", example: "Die Fahrt hat vier Stunden gedauert.", exampleAr: "استغرقت الرحلة أربع ساعات.", level: "A1" },
    { id: "fc21", de: "treffen", ar: "يقابل، يلتقي", example: "In Berlin habe ich Nadia getroffen.", exampleAr: "في برلين قابلتُ نادية.", level: "A1" },
    { id: "fc22", de: "probieren", ar: "يجرّب، يذوق", example: "Ich habe eine Currywurst probiert.", exampleAr: "جرّبتُ الكاري فورست.", level: "A1" },
    { id: "fc23", de: "schmecken", ar: "يكون طعمه طيّباً", example: "Es hat mir gut geschmeckt.", exampleAr: "أعجبني طعمه.", level: "A1" },
    { id: "fc24", de: "deshalb", ar: "لذلك، لهذا السبب", example: "Es hat geregnet, deshalb sind wir ins Museum gegangen.", exampleAr: "أمطرت، لذلك ذهبنا إلى المتحف.", level: "A1" },
    { id: "fc25", de: "das Museum", ar: "المتحف", example: "Im Museum habe ich viel gelernt.", exampleAr: "في المتحف تعلّمتُ كثيراً.", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-14-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديقك بالعربية",
      sourceDe: "Hallo! Am Samstag bin ich früh aufgestanden und bin nach Köln gefahren. Dort habe ich meinen Bruder besucht. Wir haben zusammen gegessen und sind am Rhein spazieren gegangen. Am Sonntag hat es geregnet, deshalb bin ich zu Hause geblieben.",
      taskAr: "صديقك لا يعرف الألمانية. لخّص له بالعربية ما فعله كاتب الرسالة يومَي السبت والأحد — ثلاث جملٍ تكفي.",
      modelAnswerAr: "«يوم السبت نهض مبكّراً وسافر إلى كولونيا وزار أخاه هناك. أكلا معاً وتمشّيا على نهر الراين. ويوم الأحد أمطرت فبقي في البيت.»",
      keyPointsAr: ["ذكرتَ السفر إلى كولونيا وزيارة الأخ", "ذكرتَ الأكل والتنزّه على النهر", "ذكرتَ المطر يوم الأحد والبقاء في البيت"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-14-1",
      scenarioAr: "زميلك في دورة اللغة يسألك يوم الاثنين عن عطلة أسبوعك.",
      scenarioDe: "Am Montag im Kurs: Ein Mitschüler fragt dich nach deinem Wochenende.",
      strategyAr: "الاستراتيجية: أجب بجملةٍ في Perfekt، ثمّ أضف تفصيلاً، ثمّ أعد السؤال إليه بـ«Und du?».",
      rounds: [
        {
          speakerDe: "Hallo! Was hast du am Wochenende gemacht?",
          speakerAr: "أهلاً! ماذا فعلتَ في عطلة الأسبوع؟",
          options: [
            { de: "Ich bin nach Hamburg gefahren und habe Freunde besucht.",
              ar: "سافرتُ إلى هامبورغ وزرتُ أصدقاء.", best: true, replyDe: "Oh, schön! Wie war das Wetter dort?", replyAr: "أوه، جميل! كيف كان الطقس هناك؟" },
            { de: "Ich habe nach Hamburg gefahren.", ar: "سافرتُ إلى هامبورغ. (بمساعدٍ خاطئ)", best: false, replyDe: "Du meinst „ich bin gefahren“, oder? Aber erzähl weiter!", replyAr: "تقصد «ich bin gefahren»، أليس كذلك؟ لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Wie war das Wetter dort?",
          speakerAr: "كيف كان الطقس هناك؟",
          options: [
            { de: "Am Samstag hat es geregnet, aber am Sonntag hat die Sonne geschienen.",
              ar: "يوم السبت أمطرت، لكن يوم الأحد أشرقت الشمس.", best: true, replyDe: "Da hattest du Glück! Und was habt ihr gemacht?", replyAr: "كنتَ محظوظاً! وماذا فعلتم؟" },
            { de: "Das Wetter gut.", ar: "الطقس جيّد. (بلا فعل)", best: false, replyDe: "Du meinst, das Wetter war gut?", replyAr: "تقصد أنّ الطقس كان جيّداً؟" },
          ],
        },
        {
          speakerDe: "Und was habt ihr zusammen gemacht?",
          speakerAr: "وماذا فعلتم معاً؟",
          options: [
            { de: "Wir sind in die Stadt gegangen und haben in einem Café gefrühstückt.",
              ar: "ذهبنا إلى المدينة وتناولنا الفطور في مقهى.", best: true, replyDe: "Das klingt super! Und du, willst du bald wieder hinfahren?", replyAr: "يبدو رائعاً! وهل تريد السفر إلى هناك قريباً مرّةً أخرى؟" },
            { de: "Wir haben in die Stadt gegangen.", ar: "ذهبنا إلى المدينة. (بمساعدٍ خاطئ)", best: false, replyDe: "„Wir sind gegangen“ — gehen steht mit sein. Aber weiter!", replyAr: "«wir sind gegangen» — فـgehen مع sein. لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Willst du bald wieder hinfahren?",
          speakerAr: "هل تريد السفر إلى هناك قريباً مرّةً أخرى؟",
          options: [
            { de: "Ja, ich will im Sommer wieder nach Hamburg fahren.",
              ar: "نعم، أريد السفر إلى هامبورغ ثانيةً في الصيف.", best: true, replyDe: "Super! Viel Spaß dann!", replyAr: "رائع! استمتع إذن!" },
            { de: "Ja, ich will fahren wieder.", ar: "نعم، أريد أسافر ثانيةً. (المصدر في غير موضعه)", best: false, replyDe: "Fast! Der Infinitiv steht am Ende, und „wieder“ kommt davor: „Ja, ich will im Sommer wieder nach Hamburg fahren.“", replyAr: "قريب! المصدر يأتي في الآخر: «wieder fahren»." },
          ],
        },
      ],
    },
  ];

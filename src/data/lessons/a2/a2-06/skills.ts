/**
 * a2-06 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-06.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-06",
    titleDe: "Nachrichten aus dem Viertel",
    titleAr: "أخبار من الحيّ — نص تعليمي متخيّل",
    textType: "artikel",
    paragraphs: [
      "Die kleine Zeitung „Unser Viertel“ erscheint jeden Freitag. Sie berichtet über neue Geschäfte, Veranstaltungen und Menschen aus der Stadt. Die Redakteurin Leyla sagt, dass viele Bewohner gern kurze Nachrichten über ihre Nachbarn lesen.",
      "In dieser Woche gibt es einen Bericht über einen neuen Fahrradweg. Einige Anwohner finden, dass der Weg sicher ist. Andere glauben, dass noch mehr Lampen nötig sind. Die Stadt möchte die Meinungen sammeln und später eine Entscheidung treffen.",
      "Leyla schreibt auch über ein Sommerfest am Samstag. Es beginnt um vier Uhr im Park; alle Familien sind willkommen. Die Zeitung kann man im Café lesen oder kostenlos auf der Internetseite herunterladen.",
      "Viele Menschen aus dem Viertel besuchen Veranstaltungen. Sie schreiben der Redaktion darüber und schicken einige Fotos. Dazu schreiben sie kurze Sätze über ihre Eindrücke. Leyla prüft jede Nachricht. Danach erscheint die Nachricht in der Zeitung. So finden auch Menschen ohne soziale Medien wichtige Informationen aus dem Viertel. Für die Zukunft plant die Zeitung außerdem eine Seite mit Tipps für Familien und Jugendliche.",
    ],
    paragraphsAr: [
      "تصدر الصحيفة الصغيرة «حيّنا» كل يوم جمعة. وتنشر أخباراً عن المتاجر الجديدة والفعاليات والأشخاص في المدينة. تقول المحررة ليلى إن كثيراً من السكان يحبون قراءة أخبار قصيرة عن جيرانهم.",
      "يوجد هذا الأسبوع تقرير عن مسار جديد للدراجات. يرى بعض سكان المنطقة أن المسار آمن. ويعتقد آخرون أن هناك حاجة إلى مزيد من المصابيح. تريد المدينة جمع الآراء ثم اتخاذ قرار لاحقاً.",
      "وتكتب ليلى أيضاً عن مهرجان صيفي يوم السبت. يبدأ في الساعة الرابعة في الحديقة، وكل العائلات مرحب بها. ويمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
      "يزور كثير من سكان الحي فعاليات. ويكتبون إلى هيئة التحرير عنها ويرسلون بعض الصور. ويضيفون جملاً قصيرة عن انطباعاتهم. تراجع ليلى كل خبر، ثم يظهر الخبر في الصحيفة. وهكذا يجد أشخاص لا يستخدمون وسائل التواصل معلومات مهمة عن الحي. وتخطط الصحيفة أيضاً لصفحة فيها نصائح للعائلات والشباب في المستقبل.",
    ],
    glossary: [
      {
        de: "erscheinen",
        ar: "يصدر بصفة دورية (عن صحيفة أو مجلة)",
        noteAr: "هنا تصدر الصحيفة كل يوم جمعة.",
      },
      {
        de: "die Redakteurin",
        ar: "المحررة",
        noteAr: "Leyla هي المسؤولة عن إعداد مواد الصحيفة في القصة.",
      },
      {
        de: "der Bewohner",
        ar: "ساكن / أحد السكان",
        noteAr: "ترد في النص بصيغة الجمع Bewohner.",
      },
      {
        de: "der Anwohner",
        ar: "ساكن في المنطقة المجاورة",
        noteAr: "يقصد به شخص يسكن بالقرب من المكان المذكور.",
      },
      {
        de: "der Fahrradweg",
        ar: "مسار للدراجات",
        noteAr: "في النص مسار جديد في الحي.",
      },
      {
        de: "nötig",
        ar: "ضروري / لازم",
        noteAr: "يعتقد بعض السكان أن مزيداً من المصابيح ضروري.",
      },
      {
        de: "die Veranstaltung",
        ar: "فعالية",
        noteAr: "وردت في النص بصيغة الجمع Veranstaltungen.",
      },
      {
        de: "die Redaktion",
        ar: "هيئة التحرير",
        noteAr: "الجهة التي تستقبل ما يرسله القراء للصحيفة.",
      },
      {
        de: "herunterladen",
        ar: "ينزّل (ملفاً من الإنترنت)",
        noteAr: "يمكن تنزيل الصحيفة من موقعها مجاناً في القصة.",
      },
      {
        de: "der Eindruck",
        ar: "انطباع",
        noteAr: "يرسل القراء جملاً قصيرة عن انطباعاتهم.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        instructionAr: "اقرأ الفقرة الأولى ثم اختر الإجابة:",
        questionDe: "Wann erscheint die Zeitung „Unser Viertel“?",
        questionAr: "متى تصدر صحيفة «حيّنا»؟",
        options: [
          "Jeden Montag.",
          "Jeden Freitag.",
          "Einmal im Monat.",
          "Nur im Sommer.",
        ],
        correctIndex: 1,
        explanation:
          "تذكر الجملة الأولى أن الصحيفة الصغيرة تصدر كل يوم جمعة، لا مرة واحدة في الشهر أو في فصل الصيف فقط.",
        errorType: "vocabulary",
        optionExplanations: [
          "لم يُذكر الاثنين «jeden Montag»؛ الصحيفة تصدر «jeden Freitag».",
          undefined,
          "ليست شهرية «einmal im Monat»؛ صدورها أسبوعي كل جمعة.",
          "لم تُذكر موسمية «nur im Sommer» في النص. ",
        ],
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        instructionAr: "كيف يرى بعض السكان مسار الدراجات الجديد؟",
        questionDe: "Wie finden einige Anwohner den neuen Fahrradweg?",
        questionAr: "كيف يرى بعض السكان مسار الدراجات الجديد؟",
        options: [
          "Sie finden, dass der Weg sicher ist.",
          "Sie finden, dass er zu teuer ist.",
          "Sie wollen, dass der Weg geschlossen wird.",
          "Sie möchten dort eine Zeitung verkaufen.",
        ],
        correctIndex: 0,
        explanation:
          "يرى بعض سكان المنطقة أن المسار آمن؛ ويقول النص إن آخرين يعتقدون أن هناك حاجة إلى مصابيح أكثر.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يُذكر الثمن «zu teuer»؛ رأي بعضهم أن المسار «sicher».",
          "لم يطالبوا بإغلاقه «dass der Weg geschlossen wird»؛ والنص يذكر طلب مصابيح أكثر.",
          "بيع الصحيفة «eine Zeitung verkaufen» عمل ليلا، لا رأيٌ في مسار الدراجات. ",
        ],
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        instructionAr: "كيف يمكن الحصول على الصحيفة عبر الإنترنت؟",
        questionDe: "Wie kann man die Zeitung online bekommen?",
        questionAr: "كيف يمكن الحصول على الصحيفة عبر الإنترنت؟",
        options: [
          "Man muss sie teuer kaufen.",
          "Man kann sie kostenlos herunterladen.",
          "Man muss Leyla anrufen.",
          "Sie ist nur im Café erhältlich.",
        ],
        correctIndex: 1,
        explanation:
          "يمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
        errorType: "vocabulary",
        optionExplanations: [
          "عكس النص: التنزيل «kostenlos herunterladen» لا شراءٌ غالٍ «teuer kaufen».",
          undefined,
          "لم يُذكر اتصالٌ بليلا «Leyla anrufen» شرطاً للحصول على الصحيفة.",
          "ليست حصرية للمقهى «nur im Café erhältlich»؛ تُقرأ هناك وتُنزَّل من الموقع. ",
        ],
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        instructionAr: "اقرأ الفقرة الأخيرة: ماذا تفعل ليلى أولاً بكل خبر؟",
        questionDe: "Was macht Leyla zuerst mit jeder Nachricht?",
        questionAr: "ماذا تفعل ليلى أولاً بكل خبر؟",
        options: [
          "Sie prüft jede Nachricht genau.",
          "Sie löscht jede Nachricht sofort.",
          "Sie schickt jede Nachricht an die Stadt.",
          "Sie liest jede Nachricht im Radio vor.",
        ],
        correctIndex: 0,
        explanation:
          "يذكر النص أن ليلى تراجع كل خبر أولاً، ثم يظهر الخبر في الصحيفة؛ ولا يقول إنها تحذفه أو ترسله إلى المدينة أو تقرأه في الراديو.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم تحذف الأخبار «löscht jede Nachricht sofort»؛ تراجعها قبل النشر.",
          "لم تُرسل الأخبار إلى المدينة «schickt … an die Stadt».",
          "لم تُقرأ في الراديو «im Radio vorlesen»؛ العمل في صحيفة الحيّ. ",
        ],
      },
    ],
    redemittel: [
      { de: "Die Zeitung berichtet über …", ar: "تنشر الصحيفة أخباراً عن …" },
      { de: "Einige Anwohner finden, dass …", ar: "يرى بعض سكان المنطقة أن …" },
      { de: "Die Stadt möchte die Meinungen sammeln.", ar: "تريد المدينة جمع الآراء." },
      {
        de: "Man kann die Zeitung kostenlos herunterladen.",
        ar: "يمكن تنزيل الصحيفة مجاناً.",
      },
    ],
    discussionAr:
      "اختر فعالية أو خبراً محلياً متخيلاً. اكتب ثلاث جمل تحدد الحدث ومكانه وموعده، ثم أضف جملة رأي تبدأ بـIch finde, dass أو Ich glaube, dass. هذا نشاط مفتوح للمراجعة الذاتية، ولا يُصحح آلياً ولا يثبت إتقان كتابة حرة.",
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "آراء عن وسائل الإعلام",
        lines: [
          {
            speaker: "Mona",
            de: "Ich sehe jeden Tag fern. Ich finde, dass die Serien gut sind.",
            ar: "أشاهد التلفاز كل يوم. أرى أن المسلسلات جيدة.",
          },
          {
            speaker: "Karim",
            de: "Ich denke, dass im Fernsehen zu viel Werbung läuft.",
            ar: "أظن أن في التلفاز إعلانات كثيرة جداً.",
          },
          {
            speaker: "Mona",
            de: "Ja, aber ich lese auch die Zeitung.",
            ar: "نعم، لكنني أقرأ الصحيفة أيضاً.",
          },
          {
            speaker: "Karim",
            de: "Ich lese lieber Nachrichten im Internet. Ich finde, dass das Internet praktisch ist.",
            ar: "أفضل قراءة الأخبار على الإنترنت. وأرى أن الإنترنت عملي.",
          },
          {
            speaker: "Mona",
            de: "Das kann ich verstehen. Im Internet finde ich oft schnell Informationen.",
            ar: "أتفهم ذلك. وغالباً ما أجد معلومات بسرعة على الإنترنت.",
          },
          {
            speaker: "Karim",
            de: "Und soziale Medien? Ich glaube, dass sie viel Zeit kosten.",
            ar: "وماذا عن وسائل التواصل؟ أعتقد أنها تستهلك وقتاً كثيراً.",
          },
          {
            speaker: "Mona",
            de: "Ja, aber dort findet man auch nützliche Informationen.",
            ar: "نعم، لكن المرء يجد فيها أيضاً معلومات مفيدة.",
          },
        ],
      },
      {
        id: "l2",
        title: "اختيارات للقراءة",
        lines: [
          {
            speaker: "Lehrer",
            de: "Was liest du gern, Anna?",
            ar: "ماذا تحبين أن تقرئي يا آنا؟",
          },
          {
            speaker: "Anna",
            de: "Ich lese gern die Zeitung. Ich finde, dass die Artikel interessant sind.",
            ar: "أحب قراءة الصحيفة. وأرى أن المقالات ممتعة.",
          },
          {
            speaker: "Lehrer",
            de: "Und du, Sami?",
            ar: "وأنت يا سامي؟",
          },
          {
            speaker: "Sami",
            de: "Ich lese Nachrichten im Internet. Ich finde, dass das praktisch ist.",
            ar: "أقرأ الأخبار على الإنترنت. وأجد ذلك عملياً.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر ما يقوله كريم عن التلفاز:",
        questionDe: "Was denkt Karim über das Fernsehen?",
        questionAr: "ما رأي كريم في التلفاز؟",
        options: [
          "Im Fernsehen läuft zu viel Werbung.",
          "Die Serien sind immer langweilig.",
          "Die Zeitung ist zu teuer.",
          "Das Internet ist zu langsam.",
        ],
        correctIndex: 0,
        explanation:
          "يقول كريم إنه يعتقد أن في التلفاز إعلانات كثيرة جداً؛ ولا يذكر أن المسلسلات مملة أو أن الإنترنت بطيء.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يصف المسلسلات بالملل «Die Serien sind langweilig»؛ شكواه «zu viel Werbung».",
          "لم يذكر ثمن الصحيفة «Die Zeitung ist zu teuer» في كلامه عن التلفاز.",
          "لم يشتكِ من بطء الإنترنت «Das Internet ist zu langsam». ",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "أين يقرأ كريم الأخبار؟",
        questionDe: "Wo liest Karim lieber Nachrichten?",
        questionAr: "أين يفضّل كريم قراءة الأخبار؟",
        options: ["im Internet", "in der Zeitung", "im Fernsehen", "im Radio"],
        correctIndex: 0,
        explanation:
          "يقول كريم: Ich lese lieber Nachrichten im Internet، أي إنه يقرأ الأخبار على الإنترنت؛ ولا يقول إنه يقرأها في الصحيفة أو يشاهدها في التلفاز.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "عكس قوله «Ich lese lieber Nachrichten im Internet».",
          "التلفاز للمشاهدة «fernsehen»؛ وهو قال إنه يقرأ في الإنترنت.",
          "الراديو «Radio hören» استماعٌ لا قراءة «lesen». ",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر رأي آنا في المقالات:",
        questionDe: "Welches Adjektiv benutzt Anna für die Artikel?",
        questionAr: "أي صفة تستعملها آنا لوصف المقالات؟",
        options: ["interessant", "langweilig", "kurz", "teuer"],
        correctIndex: 0,
        explanation:
          "الصفة التي تستعملها آنا فعلاً هي interessant؛ ولا يذكر الحوار الصفات الأخرى.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم تقل آنا «langweilig»؛ الصفة التي استعملتها «interessant».",
          "لم تُذكر الصفة «kurz» في الحوار.",
          "لم تصف المقالات بـ«teuer». ",
        ],
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات ومقاطع في كلمات الإعلام",
    items: [
      {
        de: "die Zeitung",
        ar: "الصحيفة",
        note:
          "IPA: [ˈt͡saɪ̯tʊŋ]. يبدأ اللفظ بصوت [t͡s]، وei تمثل الحركة المركبة [aɪ̯]؛ وفي نهاية -ung يظهر [ʊŋ] مع أنفي طبقي [ŋ].",
      },
      {
        de: "das Fernsehen",
        ar: "التلفاز / مشاهدة التلفاز",
        note:
          "IPA للاسم: [ˈfɛʁnˌzeːən]. يقع النبر الأساسي على fern، ويبدأ المقطع sehen بصوت [z]؛ والفعل fernsehen ينفصل في Ich sehe gern fern.",
      },
      {
        de: "die Nachricht",
        ar: "الخبر / الرسالة",
        note:
          "IPA: [ˈnaːxˌʁɪçt]. في الكتابة ch صوت [x] بعد a ثم [ç] بعد i؛ وهما صوتان مختلفان، فلا تساوهما بالخاء أو الشين العربية.",
      },
      {
        de: "die Werbung",
        ar: "الدعاية / الإعلان",
        note:
          "IPA: [ˈvɛʁbʊŋ]. الحرف w هنا [v]، وb صوت مجهور [b] لا [p]؛ والنهاية -ung هي [ʊŋ] لا مقطعاً مستقلاً ng.",
      },
      {
        de: "das Radio",
        ar: "الراديو / الإذاعة",
        note:
          "IPA شائع: [ˈʁaːdi̯o]. الاسم محايد في المعيار العام، ويذكر Duden استعمال المذكر إقليمياً في جنوب ألمانيا والنمسا وسويسرا؛ ويتنوع تحقيق r بين المتحدثين.",
      },
      {
        de: "die Meinung",
        ar: "الرأي",
        note:
          "IPA: [ˈmaɪ̯nʊŋ]. يرد المقطع ei بصوت مركب [aɪ̯]، وتنتهي الكلمة بـ[ʊŋ]؛ هذه رموز صوتية وليست تهجئة عربية حرفية.",
      },
    ],
    tip:
      "استخدم IPA أو عينة Duden الصوتية بدلاً من كتابة تقريب عربي يوهم بالتطابق. يتنوع صوت r الألماني إقليمياً وبين المتحدثين. يبيّن المثالان في Nachricht الفرق بين [x] و[ç]؛ أما الكتابة ch وحدها فلا تكفي لاختيار صوت واحد من غير النظر إلى السياق الصوتي.",
    shadowing: [
      {
        de: "Ich sehe gern fern.",
        ar: "أحب مشاهدة التلفاز.",
        tip: "fernsehen فعل منفصل: في المضارع المصرف يأتي الجزء fern في نهاية الجملة الخبرية.",
      },
      {
        de: "Ich lese die Zeitung.",
        ar: "أقرأ الصحيفة.",
        tip: "انتبه إلى بداية [t͡s] والمقطع المشدد في Zeitung.",
      },
      {
        de: "Ich glaube, dass das stimmt.",
        ar: "أعتقد أن ذلك صحيح.",
        tip: "حافظ على الفاصلة في الكتابة، وميّز dass أداة الربط من das الضمير.",
      },
      {
        de: "Die Nachrichten sind wichtig.",
        ar: "الأخبار مهمة.",
        tip: "Nachrichten جمع، ولذلك يأتي الفعل sind بصيغة الجمع.",
      },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب رأياً موجزاً بجملة dass:",
      prompt: "اكتب بالألمانية: «أرى / أعتقد أن الأخبار مهمة». ",
      acceptedAnswers: [
        "Ich glaube, dass die Nachrichten wichtig sind",
        "Ich denke, dass die Nachrichten wichtig sind",
        "Ich finde, dass die Nachrichten wichtig sind",
      ],
      sampleAnswer: "Ich glaube, dass die Nachrichten wichtig sind.",
      explanation:
        "تقبل المهمة صيغ رأي طبيعية متعددة؛ تُكتب فاصلة قبل dass، ويطابق الفعل الجمع Nachrichten بصيغة sind في نهاية الجملة التابعة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل تصريف الفعل في كل جملة dass:",
      template:
        "Ich finde, dass der Film gut ___ (sein). Ich hoffe, dass du morgen ___ (kommen).",
      blanks: [
        { correct: "ist", options: ["ist", "sein", "sind"] },
        { correct: "kommst", options: ["kommst", "kommt", "kommen"] },
      ],
      explanation:
        "في المثال الأول الفاعل der Film مفرد، فالصيغة ist؛ وفي الثاني الفاعل du فيخاطبك الفعل بصيغة kommst. يأتي كل فعل مصرف في نهاية جملة dass.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Die Nachrichten sind interessant.",
      explanation:
        "Nachrichten جمع، لذلك يأتي معها sind؛ راجع تهجئة المفردات عند إعادة المحاولة.",
      errorType: "spelling",
    },
  ];

/**
 * a2-03 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-03.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-03",
    titleDe: "Ein Abend im Gasthaus Löwen",
    titleAr: "أمسيةٌ في نُزُل الأسد",
    textType: "erzaehlung",
    paragraphs: [
      "Letzten Samstag wollten wir endlich mal wieder essen gehen. Meine Frau hatte am Mittwoch angerufen und einen Tisch für vier Personen auf den Namen Haddad reserviert. Das war eine gute Idee, denn das Gasthaus Löwen war am Abend komplett voll.",
      "Wir sind um sieben angekommen. Am Eingang stand ein Schild: „Bitte warten Sie, Sie werden platziert.“ Früher hätte ich mich einfach hingesetzt, aber inzwischen weiß ich, wie es hier läuft. Nach zwei Minuten kam der Kellner und hat uns an einen schönen Tisch am Fenster geführt.",
      "Zuerst kamen nur die Getränke. „Was möchten Sie trinken?“ – „Zweimal stilles Wasser und zwei Apfelschorlen, bitte.“ Erst danach hat er die Speisekarte gebracht und gefragt, was wir essen möchten. Als Vorspeise hätten wir gern die Kürbissuppe, als Hauptgericht zweimal das Schnitzel mit Pommes und zweimal den Fisch.",
      "Das Essen hat fast allen sehr gut geschmeckt. Nur mein Bruder war nicht ganz zufrieden: Sein Fisch war leider etwas trocken. Er hat den Kellner gerufen und höflich gesagt: „Entschuldigung, der Fisch ist leider ziemlich trocken. Könnten Sie das bitte an die Küche weitergeben?“ Der Kellner hat sich entschuldigt und ihm einen neuen Teller gebracht.",
      "Nach dem Hauptgericht wollte niemand mehr etwas Süßes. Wir waren alle satt. „Hat es Ihnen geschmeckt?“, fragte der Kellner. „Ja, ausgezeichnet, danke!“",
      "Dann kam die Frage, die ich am Anfang nie verstanden habe: „Zusammen oder getrennt?“ An diesem Abend haben wir getrennt gezahlt. Mein Anteil war 21,40 Euro. Ich habe freiwillig auf 23 Euro aufgerundet und gesagt: „Dreiundzwanzig, bitte.“ So gab ich 1,60 Euro Trinkgeld. Der Kellner hat sich bedankt, und wir sind zufrieden nach Hause gegangen.",
    ],
    paragraphsAr: [
      "السبت الماضي أردنا أخيراً أن نخرج للعشاء من جديد. كانت زوجتي قد اتّصلت يوم الأربعاء وحجزت طاولةً لأربعة أشخاص باسم حدّاد. وكانت فكرةً صائبة، فقد كان نُزُل الأسد ممتلئاً تماماً في المساء.",
      "وصلنا في السابعة. عند المدخل كانت لافتة: «انتظروا من فضلكم، سيُجلسكم أحدُنا». في السابق كنتُ سأجلس ببساطة، لكنّي صرتُ أعرف الآن كيف تجري الأمور هنا. وبعد دقيقتين جاء النادل وقادنا إلى طاولةٍ جميلة عند النافذة.",
      "في البداية جاءت المشروبات وحدها. «ماذا تحبّون أن تشربوا؟» — «ماءان بلا غاز وشرابا تفاح مخففان بالماء الغازي من فضلك». وبعد ذلك أحضر قائمة الطعام وسألنا عمّا نريد أن نأكل. كمقبّلات أردنا شوربة القرع، وكطبق رئيس شنيتسلين مع البطاطا وسمكتين.",
      "كان مذاق الطعام طيباً جداً لدى الجميع تقريباً. غير أنّ أخي لم يكن راضياً تماماً: كانت سمكته للأسف جافةً بعض الشيء. نادى النادل وقال بأدب: «عذراً، السمك جاف إلى حد ما للأسف. هل يمكن أن تنقل ذلك إلى المطبخ من فضلك؟» فاعتذر النادل وأحضر له طبقاً جديداً.",
      "وبعد الطبق الرئيس لم يُرد أحدٌ شيئاً حلواً. كنّا كلّنا شباعاً. «هل راق لكم مذاق الطعام؟» سأل النادل. «نعم، ممتاز، شكراً!»",
      "ثمّ جاء السؤال: «معاً أم كلٌّ على حدة؟» دفعنا في تلك الأمسية كلٌّ على حدة. كان نصيبي ٢١٫٤٠ يورو. قرّبتُ المبلغ طوعاً إلى ٢٣ يورو وقلت: «ثلاثة وعشرون من فضلك». بذلك أعطيتُ إكراميةً قدرها ١٫٦٠ يورو. شكرني النادل، وعدنا إلى البيت راضين.",
    ],
    glossary: [
      {
        de: "das Gasthaus",
        ar: "النُّزُل، مطعمٌ تقليديّ",
      },
      {
        de: "reserviert (reservieren)",
        ar: "حجز",
        noteAr: "auf den Namen … = باسم …",
      },
      {
        de: "platziert (platzieren)",
        ar: "يُجلس، يُنزل في مكان",
        noteAr: "صيغة مبنيّة للمجهول؛ واللافتة في القصة تطلب من الزبائن الانتظار",
      },
      {
        de: "geführt (führen)",
        ar: "قاد، أوصل",
      },
      {
        de: "stilles Wasser",
        ar: "ماءٌ بلا غاز",
        noteAr: "مقابله: mit Kohlensäure",
      },
      {
        de: "die Speisekarte",
        ar: "قائمة الطعام",
      },
      {
        de: "die Vorspeise",
        ar: "المقبّلات",
        noteAr: "قد تردّ على القائمة أيضاً كلمتا Hauptgericht وNachtisch؛ Beilage طبق جانبي",
      },
      {
        de: "das Hauptgericht",
        ar: "الطبق الرئيس",
      },
      {
        de: "geschmeckt (schmecken)",
        ar: "كان مذاقه (لشخص) بحسب السياق",
        noteAr: "في مثال الدرس Essen في Nominativ وضمير الشخص في Dativ الألمانية",
      },
      {
        de: "trocken",
        ar: "جافّ",
      },
      {
        de: "sich entschuldigen",
        ar: "يعتذر",
        noteAr: "hat sich entschuldigt",
      },
      {
        de: "satt",
        ar: "شبعان",
        noteAr: "Ich bin satt — لا Ich habe satt",
      },
      {
        de: "getrennt",
        ar: "منفصلاً، كلٌّ على حدة",
        noteAr: "مقابله: zusammen",
      },
      {
        de: "der Anteil",
        ar: "النصيب، الحصّة",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Warum war die Reservierung eine gute Idee?",
        instructionAr: "اقرأ الفقرة الأولى: لماذا كان الحجز فكرةً صائبة؟",
        options: [
          "Weil das Gasthaus am Abend voll war",
          "Weil das Essen billiger war",
          "Weil sie am Fenster sitzen wollten",
          "Weil der Kellner sie kannte",
        ],
        correctIndex: 0,
        explanation: "«denn das Gasthaus Löwen war am Abend komplett voll».",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Was bedeutet das Schild „Sie werden platziert“?",
        instructionAr: "اقرأ الفقرة الثانية: ماذا تعني اللافتة؟",
        options: [
          "Der Kellner zeigt Ihnen den Tisch",
          "Sie dürfen sich einen Tisch aussuchen",
          "Das Restaurant ist geschlossen",
          "Sie müssen vorher zahlen",
        ],
        correctIndex: 0,
        explanation:
          "في هذه القصة توجّه اللافتة الزبائن إلى الانتظار، ثمّ يأتي النادل ويقود المجموعة إلى طاولة.",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Was hat der Kellner zuerst gebracht?",
        instructionAr: "اقرأ الفقرة الثالثة: ما الذي أُحضر أوّلاً؟",
        options: [
          "Nur die Getränke",
          "Die Speisekarte",
          "Die Vorspeise",
          "Die Rechnung",
        ],
        correctIndex: 0,
        explanation:
          "هذا ما حدث في القصة: يذكر النص المشروبات أولاً ثمّ قائمة الطعام؛ لا يقرر ترتيباً عاماً للخدمة.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Wie hat der Bruder den trockenen Fisch angesprochen?",
        instructionAr: "اقرأ الفقرة الرابعة: كيف أشار الأخ إلى جفاف السمك؟",
        options: [
          "Höflich: „Entschuldigung … Könnten Sie das bitte an die Küche weitergeben?“",
          "Er hat den Kellner vor allen anderen Gästen laut beschimpft.",
          "Er hat nur nach der Rechnung gefragt und ist dann gegangen.",
          "Er hat den Fisch als ausgezeichnet gelobt und viel Trinkgeld gegeben.",
        ],
        correctIndex: 0,
        explanation:
          "يذكر النص أنه نادى النادل بأدب، واستعمل Entschuldigung وKönnten Sie … bitte لطلب نقل الملاحظة إلى المطبخ.",
        errorType: "vocabulary",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 4,
        questionDe: "Das Essen ___ allen sehr gut geschmeckt. Welche Form passt?",
        instructionAr:
          "أكمل الفعل في الجملة: راعِ فاعلها النحوي، ولا تخلط بينه وبين ضمير Dativ.",
        options: ["hat", "haben", "habe", "hast"],
        correctIndex: 0,
        explanation:
          "Das Essen هو الفاعل المفرد، لذلك نستخدم hat؛ وallen ضمير جمع في Dativ. جملة Alle haben das Essen geschmeckt ممكنة في معنى «تذوّق الجميع الطعام»، لكنها تعني شيئاً آخر وليست تصحيحاً لهذه الجملة.",
        errorType: "conjugation",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 6,
        questionDe: "Wie viel Trinkgeld hat der Erzähler gegeben?",
        instructionAr: "اقرأ الفقرة الأخيرة: كم ترك بقشيشاً؟",
        options: ["1,60 Euro", "23 Euro", "21,40 Euro", "Gar nichts"],
        correctIndex: 0,
        explanation:
          "في القصة الحساب 21,40 يورو والمجموع بعد التقريب 23؛ أي إكرامية قدرها 1,60 يورو في هذا المثال.",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Ich habe einen Tisch auf den Namen … reserviert.",
        ar: "حجزتُ طاولةً باسم …",
      },
      {
        de: "Als Vorspeise hätte ich gern die Suppe.",
        ar: "كمقبّلات أودّ الشوربة",
      },
      {
        de: "Der Fisch ist leider ziemlich trocken.",
        ar: "السمك جافٌّ إلى حدٍّ ما للأسف",
      },
      {
        de: "Hat es Ihnen geschmeckt? – Ja, ausgezeichnet!",
        ar: "هل راق مذاق الطعام لكم؟ — نعم، ممتاز!",
      },
      {
        de: "Zusammen oder getrennt? – Getrennt, bitte.",
        ar: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة",
      },
      {
        de: "Dreiundzwanzig, bitte.",
        ar: "ثلاثة وعشرون من فضلك (صيغة الدفع في مشهد القصة)",
      },
    ],
    discussionAr:
      "احكِ عن أمسية في مطعم في ثماني جمل على الأقل. استعمل صيغتين مختلفتين من (hätte gern · möchte · nehme) في سياقين يناسبان المعنى، وجملةً بـschmecken يكون فيها الطعام فاعلاً، وصفةً للطعم. ثمّ راجع تصريف الفعل وحالة ضمير الشخص.",
  };


export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "طلب الطعام",
        lines: [
          {
            speaker: "Kellner",
            de: "Guten Abend! Haben Sie schon gewählt?",
            ar: "مساء الخير! هل اخترتم؟",
          },
          {
            speaker: "Sami",
            de: "Ja, ich möchte bitte die Spaghetti und einen Salat.",
            ar: "نعم، أود السباغيتي وسلطة من فضلك.",
          },
          {
            speaker: "Kellner",
            de: "Und etwas zu trinken?",
            ar: "وشيء للشرب؟",
          },
          { speaker: "Sami", de: "Ein Wasser, bitte.", ar: "ماء من فضلك." },
          {
            speaker: "Kellner",
            de: "Sehr gerne.",
            ar: "بكل سرور.",
          },
          {
            speaker: "Kellner (nach dem Essen)",
            de: "Wie hat es Ihnen geschmeckt?",
            ar: "كيف كان مذاق الطعام بالنسبة إليكم؟",
          },
          {
            speaker: "Sami",
            de: "Sehr gut! Die Spaghetti waren lecker. Die Rechnung, bitte.",
            ar: "جيد جداً! كانت السباغيتي لذيذة. الحساب من فضلك.",
          },
        ],
      },
      {
        id: "l2",
        title: "لا أستطيع أكل...",
        lines: [
          {
            speaker: "Mona",
            de: "Ich kann kein Fleisch essen.",
            ar: "لا أستطيع أكل اللحم.",
          },
          {
            speaker: "Kellner",
            de: "Kein Problem! Wir haben auch vegetarische Gerichte.",
            ar: "لا مشكلة! لدينا أيضاً أطباق نباتية.",
          },
          {
            speaker: "Mona",
            de: "Was können Sie empfehlen?",
            ar: "ماذا تنصحون؟",
          },
          {
            speaker: "Kellner",
            de: "Der Gemüseteller ist sehr gut und nicht teuer.",
            ar: "طبق الخضار جيد جداً وغير غالٍ.",
          },
          {
            speaker: "Mona",
            de: "Gut, ich nehme den Gemüseteller.",
            ar: "حسناً، سآخذ طبق الخضار.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: [
          "Spaghetti, einen Salat und ein Wasser",
          "Spaghetti und einen großen Salat",
          "Pizza und ein stilles Wasser",
          "Ein Gemüseteller mit Reis",
        ],
        correctIndex: 0,
        explanation:
          "طلب سامي Spaghetti وسلطةً وماءً؛ الإجابة تجمع الطعام والشراب المذكورين.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
        questionDe: "Wie waren die Spaghetti?",
        questionAr: "كيف كانت السباغيتي؟",
        options: ["lecker", "schlecht", "scharf", "kalt"],
        correctIndex: 0,
        explanation: "قال سامي: Die Spaghetti waren lecker — لذيذة.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "أجب بعد الاستماع وقبل فتح التفريغ:",
        questionDe: "Was kann Mona nicht essen?",
        questionAr: "ماذا لا تستطيع منى أكل؟",
        options: ["Fleisch", "Gemüse", "Salat", "Fisch"],
        correctIndex: 0,
        explanation: "قالت منى: Ich kann kein Fleisch essen — لا تستطيع اللحم.",
        errorType: "vocabulary",
      },
    ],
  };


export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات المطعم: sch، ü، وck",
    items: [
      {
        de: "schmecken",
        ar: "يكون مذاقه (بحسب السياق)",
        note: "schmecken [ˈʃmɛkən]: sch = [ʃ]، وck تمثّل [k] بعد حركة قصيرة.",
      },
      {
        de: "lecker",
        ar: "لذيذ",
        note: "lecker [ˈlɛkɐ]: e في المقطع الأول [ɛ] قصيرة، وck تمثّل [k] بعد حركة قصيرة.",
      },
      {
        de: "die Küche",
        ar: "المطبخ",
        note: "Küche [ˈkʏçə]: ü [ʏ] صوت أمامي مدوّر قصير؛ وch هنا [ç] (ich-Laut)، لا خ [x] ولا ش عربية حرفياً.",
      },
      {
        de: "die Suppe",
        ar: "الحساء",
        note: "Suppe [ˈzʊpə]: s في البداية [z]، وu [ʊ] قصيرة؛ pp مكتوبتان لكن النطق [p] واحدة بعد حركة قصيرة.",
      },
      {
        de: "die Rechnung",
        ar: "الحساب/الفاتورة",
        note: "Rechnung [ˈʁɛçnʊŋ]: ch بعد e هو [ç] (ich-Laut)، لا يطابق خ [x] ولا ش العربية حرفياً.",
      },
      {
        de: "bestellen",
        ar: "يطلب",
        note: "bestellen [bəˈʃtɛlən]: المقطع الأول مخفّف [bə]، وe المنبورة [ɛ] قصيرة.",
      },
    ],
    tip:
      "في Rechnung يُنطق ch بصوت [ç] (ich-Laut)، وهو ليس خ العربية الخلفية [x] ولا ش العربية. في Küche الصوت نفسه؛ ويمكن تقريب [ç] بوصفه احتكاكاً أمامياً قرب موضع نطق الياء. أما ö في möchte [ˈmœçtə] وkönnen [ˈkœnən] فهو صوت أمامي مدوّر، لا تمثّله كتابة عربية واحدة بدقة.",
    shadowing: [
      {
        de: "Ich möchte bitte einen Tee.",
        ar: "أود شاياً من فضلك.",
        tip: "في möchte: ö [œ] صوت أمامي مدوّر؛ وch هو [ç]، لا خ عربية مطابقة.",
      },
      {
        de: "Die Speisekarte, bitte!",
        ar: "القائمة من فضلك!",
        tip: "في أول Speisekarte، sp تُنطق [ʃp] تقريباً؛ وei تُنطق [aɪ̯]. والكتابة العربية تقريبٌ لا نقل صوتي دقيق.",
      },
      { de: "Das schmeckt lecker!", ar: "هذا لذيذ!", tip: "schmeckt = شمِكْت" },
      {
        de: "Können Sie mir helfen?",
        ar: "هل يمكنكم مساعدتي؟",
        tip: "können [ˈkœnən]: ö [œ] صوت أمامي مدوّر؛ استمع وحاول تقريب وضع الشفتين.",
      },
    ],
  };


export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr:
        "اكتب طلباً كاملاً بـIch möchte، واختر عبارةً واحدة من الأسماء المحددة في السؤال. إن أضفت bitte فضعها بعد möchte أو في آخر الجملة.",
      prompt:
        "Was möchtest du bestellen? Verwende genau einen Ausdruck: eine Pizza / einen Salat / die Suppe / Wasser. (Schreibe einen vollständigen Satz mit Ich möchte ...)",
      acceptedAnswers: [
        "Ich möchte eine Pizza.",
        "Ich möchte bitte eine Pizza.",
        "Ich möchte eine Pizza, bitte.",
        "Ich möchte einen Salat.",
        "Ich möchte bitte einen Salat.",
        "Ich möchte einen Salat, bitte.",
        "Ich möchte die Suppe.",
        "Ich möchte bitte die Suppe.",
        "Ich möchte die Suppe, bitte.",
        "Ich möchte Wasser.",
        "Ich möchte bitte Wasser.",
        "Ich möchte Wasser, bitte.",
      ],
      sampleAnswer: "Ich möchte bitte eine Pizza.",
      explanation:
        "استخدم العبارة المختارة كما وردت في القائمة: Ich möchte + اسم الطلب، ويمكن وضع bitte بعد möchte أو في نهاية الجملة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ möchten بتصريف صحيح:",
      template:
        "Ich ___ einen Kaffee. Du ___ einen Tee. Wir ___ die Rechnung. Sie ___ bestellen.",
      blanks: [
        { correct: "möchte", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchtest", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
      ],
      explanation:
        "الإجابات المطلوبة هنا: ich möchte، du möchtest، wir möchten، وSie möchten (للمخاطب المفرد أو الجمع بصيغة الاحترام).",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte bitte zahlen.",
      explanation: "أود أن أدفع من فضلك — möchte + الفعل الأساسي في النهاية.",
      errorType: "spelling",
    },
  ];

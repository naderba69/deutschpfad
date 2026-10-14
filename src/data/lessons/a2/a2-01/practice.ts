/**
 * a2-01 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-01.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ ein Buch ___.",
      options: [
        "habe ... gekauft",
        "bin ... gekauft",
        "habe ... kaufen",
        "bin ... gekaufen",
      ],
      correctIndex: 0,
      explanation: "kaufen عادي → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة لمعنى السفر بالطائرة إلى بلد:",
      questionDe: "Wir ___ nach Deutschland ___.",
      options: [
        "sind ... geflogen",
        "haben ... geflogen",
        "sind ... gefliegt",
        "haben ... gefliegen",
      ],
      correctIndex: 0,
      explanation: "هنا fliegen يعني السفر بالطائرة إلى Deutschland، فيأتي Perfekt مع sein: sind geflogen.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بتصريفه في Perfekt:",
      pairs: [
        { left: "kaufen", right: "gekauft" },
        { left: "sehen", right: "gesehen" },
        { left: "essen", right: "gegessen" },
        { left: "fahren", right: "gefahren" },
      ],
      explanation: "منتظم (gekauft) وقوي (gesehen, gegessen, gefahren).",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه: التصريف في النهاية):",
      tokens: ["habe", "Ich", "gestern", "Pizza", "gegessen", "."],
      correctSentence: "Ich habe gestern Pizza gegessen.",
      explanation: "الإطار: Ich habe + التفاصيل + gegessen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "اختر الكلمة التي تصلح الخلل في الجملة المعروضة:",
      wrongSentence: "Ich habe nach Berlin geflogen.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "hatte"],
      explanation:
        "في معنى السفر بالطائرة إلى Berlin، الصيغة هي: Ich bin nach Berlin geflogen. قد يختلف المساعد في استعمالات أخرى لـfliegen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template:
        "Er ___ nach Tunis gefahren. Ich ___ ein Souvenir gekauft. Wir ___ zur Insel geschwommen.",
      blanks: [
        { correct: "ist", options: ["ist", "hat"] },
        { correct: "habe", options: ["ist", "habe"] },
        { correct: "sind", options: ["sind", "haben"] },
      ],
      explanation:
        "إلى تونس: ist gefahren. kaufen هنا: habe gekauft. إلى جزيرة بوصفها وجهة: sind geschwommen؛ أما نشاط السباحة فقد يرد معه haben أو sein.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الماضي (Perfekt):",
      prompt: "Ich kaufe ein Ticket. → (الماضي)",
      acceptedAnswers: [
        "Ich habe ein Ticket gekauft",
        "Ich habe ein Ticket gekauft.",
      ],
      sampleAnswer: "Ich habe ein Ticket gekauft.",
      explanation: "kaufen → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich bin um sieben Uhr aufgestanden.",
      questionAr: "ما معنى الجملة؟",
      options: [
        "نهضتُ في السابعة",
        "أستيقظ في السابعة",
        "سأستيقظ في السابعة",
        "كنت نائماً في السابعة",
      ],
      correctIndex: 0,
      explanation:
        "aufstehen يعني هنا النهوض/مغادرة السرير، وصيغته aufgestanden مع sein في هذا المعنى.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "multiple-choice",
      instructionAr: "اختر الحكم الدقيق على المساعد في المثال:",
      questionDe: "Ich habe geschwommen.",
      options: [
        "الصيغة ممكنة لنشاط السباحة؛ أما السباحة إلى وجهة فتأخذ sein، مثل Ich bin zur Insel geschwommen.",
        "الصيغة خطأ دائماً؛ schwimmen يأخذ sein فقط.",
        "الصيغة خطأ لأن Partizip II هو geschwimmt.",
        "الصيغة صحيحة فقط إذا كان الكلام في الحاضر.",
      ],
      correctIndex: 0,
      explanation:
        "يذكر Duden أن نشاط السباحة للمتعة/الرياضة يقبل hat/ist geschwommen؛ أما الانتقال سباحةً إلى مكان مثل zur Insel فيأخذ sein. لذلك لا يصح تصحيح Ich habe geschwommen بلا سياق.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir haben im Hotel gut geschlafen.",
      explanation: "نمنا جيداً في الفندق — Partizip II من schlafen هو geschlafen.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل القويّ (عائلة i–a–u)",
      template: "Wir haben den ganzen Abend ___. (singen)",
      blanks: [
        {
          correct: "gesungen",
          options: ["gesungen", "gesingt", "gesangen", "gesungt"],
          errorType: "grammar",
        },
      ],
      explanation: "singen – sang – gesungen، عائلة i–a–u مثل trinken وfinden.",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II (عائلة ei–ie–ie)",
      template: "Ich habe ihm eine lange E-Mail ___. (schreiben)",
      blanks: [
        {
          correct: "geschrieben",
          options: ["geschrieben", "geschreibt", "geschreiben", "schrieb"],
          errorType: "grammar",
        },
      ],
      explanation:
        "schreiben – schrieb – geschrieben: تتغيّر الحركة وتبقى النهاية -en.",
      errorType: "grammar",
    },
    {
      id: "e13",
      type: "matching",
      instructionAr: "طابق كلّ فعلٍ بعائلة Ablaut التي ينتمي إليها",
      pairs: [
        { left: "trinken – trank – getrunken", right: "i – a – u" },
        { left: "bleiben – blieb – geblieben", right: "ei – ie – ie" },
        { left: "fliegen – flog – geflogen", right: "ie – o – o" },
        { left: "sprechen – sprach – gesprochen", right: "e – a – o" },
        {
          left: "denken – dachte – gedacht",
          right: "مختلط (تغيّر جذر + نهاية -t)",
        },
      ],
      explanation:
        "تطابق الأمثلة أربع مجموعات Ablaut مع مجموعة مختلطة. الأنماط وصفٌ للمقارنة والمساعدة على التذكّر، ولا تعفي من حفظ صور الفعل المحدد.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المطلوبة، لا حكماً على صحة Perfekt:",
      questionDe: "Welche Form ist die Präteritumform von „Ich bin gestern sehr müde gewesen“?",
      options: [
        "Ich war gestern sehr müde.",
        "Ich bin gestern sehr müde gewesen.",
        "Ich habe gestern sehr müde gewesen.",
        "Ich gewesen gestern sehr müde.",
      ],
      correctIndex: 0,
      explanation:
        "war هي صيغة Präteritum المطلوبة. Ich bin gestern sehr müde gewesen صيغة Perfekt سليمة أيضاً؛ السؤال يطلب زمناً بعينه، لا يقرر أن البديل غير مستعمل.",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بصيغ Präteritum المطلوبة في هذا التمرين:",
      template:
        "Ich ___ nicht kommen, ich ___ arbeiten. Es ___ keine andere Möglichkeit.",
      blanks: [
        {
          correct: "konnte",
          options: ["konnte", "habe gekonnt", "kann", "könnte"],
          errorType: "grammar",
        },
        {
          correct: "musste",
          options: ["musste", "habe gemusst", "muss", "müsste"],
          errorType: "grammar",
        },
        {
          correct: "gab",
          options: ["gab", "hat gegeben", "gibt", "gegeben"],
          errorType: "grammar",
        },
      ],
      explanation:
        "الصيغ المطلوبة هنا هي konnte وmusste وgab. صيغة Präteritum مناسبة للنموذج المعروض؛ لا يعني ذلك أن Perfekt ممنوع في الكلام.",
      errorType: "grammar",
    },
    {
      id: "e16",
      type: "word-ordering",
      instructionAr: "رتّب الجملة: انتبه إلى ترتيب المساحة الوسطى (TeKaMoLo)",
      tokens: [
        "Wir",
        "sind",
        "letzten",
        "Sommer",
        "mit",
        "dem",
        "Zug",
        "nach",
        "Prag",
        "gefahren",
        ".",
      ],
      correctSentence: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
      explanation:
        "زمان (letzten Sommer) ⟵ كيفية (mit dem Zug) ⟵ مكان (nach Prag)، وPartizip II يُغلق.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب المحايد المألوف للضميرين المفعوليين:",
      questionDe: "Ich habe ___ schon gesagt.",
      options: ["es ihm", "ihm es", "ihn es", "es ihn"],
      correctIndex: 0,
      explanation:
        "في هذا المثال، es (Akkusativ) قبل ihm (Dativ) هو الترتيب المحايد المألوف. تتأثر الترتيبات بالبؤرة والسياق؛ لا نصف كل ترتيب آخر بأنه مستحيل في كل مقام.",
      errorType: "word-order",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب المحايد في جملة رئيسية بسيطة:",
      questionDe: "Ich habe ___ gegessen.",
      options: [
        "einen Apfel",
        "gegessen einen Apfel",
        "ein Apfel",
        "einen Apfel essen",
      ],
      correctIndex: 0,
      explanation:
        "في الترتيب المحايد، يسبق المفعول einen Apfel Partizip II. وقد توجد عناصر مؤجلة أو بؤرة خاصة في سياقات أخرى؛ السؤال يحدد الترتيب المحايد.",
      errorType: "word-order",
    },
    {
      id: "e19",
      type: "multiple-choice",
      instructionAr: "ما الفرق بين الجملتين؟",
      questionDe: "Ich habe nicht den Film gesehen, sondern die Serie.",
      options: [
        "النفي يقع على «الفيلم» وحده لا على المشاهدة",
        "النفي يقع على الجملة كلّها",
        "الجملتان بمعنى واحد",
        "الجملة خاطئة نحوياً",
      ],
      correctIndex: 0,
      explanation:
        "nicht قبل جزءٍ بعينه ينفيه وحده. ولنفي الجملة كلّها يوضع قبل Partizip II: «Ich habe den Film nicht gesehen».",
      errorType: "negation",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بمساعد Perfekt الملائم في هذين الاستعمالين اللازمين لأفعال السفر:",
      template:
        "Der Zug ___ pünktlich abgefahren, und wir ___ um acht angekommen.",
      blanks: [
        {
          correct: "ist",
          options: ["ist", "hat", "war", "wird"],
          errorType: "grammar",
        },
        {
          correct: "sind",
          options: ["sind", "haben", "waren", "werden"],
          errorType: "grammar",
        },
      ],
      explanation:
        "في هذين الاستعمالين اللازمين — القطار ينطلق ونحن نصل — يأتي المساعد sein. لا تعمّم ذلك على كل معنى لكل فعل سفر.",
      errorType: "grammar",
    },
    {
      id: "e21",
      type: "multiple-choice",
      instructionAr: "في شبّاك التذاكر: ماذا تعني «einfach»؟",
      questionDe: "Am Schalter: „Einfach oder hin und zurück?“",
      options: [
        "ذهاباً فقط",
        "الأمر بسيط",
        "الدرجة الاقتصادية",
        "بدون حجز مقعد",
      ],
      correctIndex: 0,
      explanation:
        "في هذا السياق عند شباك التذاكر تعني einfache Fahrt رحلةً باتجاه واحد؛ أما hin und zurück فتعني ذهاباً وإياباً. وخارج سياق التذاكر قد تعني einfach «بسيط».",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr: "أيّ صياغة مناسبة لموقف الشكوى المحدد؟",
      questionDe: "Sie sind im Hotelzimmer: Das Zimmer ist nicht sauber. Welche Bitte nennt das Problem klar und höflich?",
      options: [
        "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes Zimmer geben?",
        "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
        "Vielleicht stimmt etwas mit dem Zimmer nicht; ich bin mir nicht sicher.",
        "Kein Problem, das ist in Ordnung.",
      ],
      correctIndex: 0,
      explanation:
        "الخيار يجمع وصف المشكلة بوضوح وطلباً مهذباً بصيغة Könnten Sie …? إنه نموذج مناسب للموقف المحدد، لا قاعدة ثقافية عن كل شكوى بالألمانية.",
      errorType: "vocabulary",
    },
    {
      id: "e23",
      type: "transformation",
      instructionAr: "أعد صياغة المثال المحدد بـPerfekt؛ لا تفترض أن الكلام لا يقبل Präteritum:",
      prompt:
        "Der Zug fuhr um acht ab und erreichte Berlin am Mittag. → Formulieren Sie beide Prädikate im Perfekt.",
      acceptedAnswers: [
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht",
      ],
      sampleAnswer:
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
      hint: "المطلوب هنا Perfekt: abfahren في معنى انطلاق القطار يأخذ sein؛ وerreichen يأخذ haben في هذا المثال.",
      explanation:
        "صيغة Perfekt المستهدفة هي ist abgefahren وhat erreicht. قد يرد Präteritum أيضاً في الكلام؛ التمرين يطلب تحويل هذين الفعلين إلى Perfekt تحديداً.",
      errorType: "grammar",
    },
    {
      id: "e24",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Wir haben alles geplant. Aber der Zug hatte drei Stunden Verspätung. In Dresden mussten wir umsteigen. Am Ende sind wir um Mitternacht angekommen. Das Hotel war trotzdem noch offen, und wir konnten sofort einchecken.",
      statements: [
        {
          id: "s1",
          de: "Der Zug war pünktlich.",
          ar: "كان القطار في موعده.",
          isTrue: false,
          whyAr: "النصّ يقول «drei Stunden Verspätung» — تأخّر ثلاث ساعات.",
        },
        {
          id: "s2",
          de: "Sie mussten in Dresden umsteigen.",
          ar: "كان عليهم تبديل القطار في درسدن.",
          isTrue: true,
          whyAr: "«In Dresden mussten wir umsteigen».",
        },
        {
          id: "s3",
          de: "Im Text stehen hatte, mussten und konnten im Präteritum.",
          ar: "الأفعال hatte وmussten وkonnten وردت بالـPräteritum.",
          isTrue: true,
          whyAr: "في هذا النص تحديداً، هذه الصيغ الثلاث في Präteritum؛ لا تعمم الصيغة على كل مقام أو كل استعمال.",
        },
        {
          id: "s4",
          de: "Das Hotel war schon geschlossen.",
          ar: "كان الفندق قد أُغلق.",
          isTrue: false,
          whyAr: "«Das Hotel war trotzdem noch offen».",
        },
      ],
      explanation:
        "في النص هذا المثال المحدد: sind angekommen في Perfekt، وhatte وmussten وwar وkonnten في Präteritum. لا يعني ذلك أن بقية الأفعال أو كل السياقات تتبع قسمة مطلقة.",
      errorType: "grammar",
    },
    {
      id: "e25",
      type: "multiple-choice",
      instructionAr: "اختر العبارة التي تطابق نوع الغرفة والفترة المذكورين:",
      questionDe: "Am Telefon: Sie möchten vom 10. bis zum 12. Juli ein Doppelzimmer reservieren. Was sagen Sie?",
      options: [
        "Ich möchte ein Doppelzimmer vom 10. bis zum 12. Juli reservieren, bitte.",
        "Ich möchte ein Einzelzimmer vom 10. bis zum 12. Juli reservieren, bitte.",
        "Ich möchte ein Doppelzimmer vom 10. bis zum 12. Juli abholen, bitte.",
        "Ich möchte eine Fahrkarte vom 10. bis zum 12. Juli reservieren, bitte.",
      ],
      correctIndex: 0,
      explanation:
        "الخيار الأول يحافظ على نوع الغرفة (Doppelzimmer) والتاريخ، ويستخدم reservieren في طلب حجز واضح. العبارات الأخرى تغيّر نوع الغرفة أو تستعمل فعلاً/اسماً لا يطابق المقصود.",
      errorType: "vocabulary",
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich habe nach Berlin gefliegen.",
        right: "Ich bin nach Berlin geflogen.",
        whyAr: "في معنى السفر بالطائرة إلى وجهة: bin geflogen. راجع مساعد كل فعل بحسب معناه، ولا تعمّم على كل استعمال للحركة.",
      },
      {
        wrong: "Ich habe gegessen einen Apfel.",
        right: "Ich habe einen Apfel gegessen.",
        whyAr: "هذا هو الترتيب المحايد للمفعول وPartizip II في الجملة الرئيسية البسيطة؛ قد تظهر عناصر مؤجلة في سياقات مخصوصة.",
      },
      {
        wrong: "gekaufen",
        right: "gekauft",
        whyAr: "صيغة Partizip II القياسية من kaufen هي gekauft. لا تُنشئ الصيغة بقياس عام على أفعال أخرى؛ تعلّم صورة الفعل نفسه.",
      },
    ],
    eselsbruecken: [
      "في السفر اللازم إلى وجهة قد يأتي sein؛ لكن المساعد يتبع معنى الفعل وبنيته، وقد يأخذ الفعل نفسه haben في استعمال آخر.",
      "في جملة رئيسية خبرية بسيطة: يفتح المساعد قوس Perfekt ويأتي Partizip II في آخره؛ راجع ترتيب الفعل في الجمل الفرعية على حدة.",
    ],
    culturalNote: {
      title: "سؤال متابعة عن الرحلة",
      content:
        "بعد أن يذكر المتحدث رحلة، يمكن متابعة الحديث بسؤال مثل: «Wie war dein Urlaub?» أو «Was hast du dort gemacht?». هذه عبارات للممارسة، وليست ادعاءً بأن جميع المتحدثين يسألون السؤال نفسه.",
    },
  };

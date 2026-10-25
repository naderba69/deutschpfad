/**
 * a2-07 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-07.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الاسم الصحيحة:",
      questionDe: "Es gibt ___ Bank in der Nähe.",
      options: ["eine", "ein", "einen", "der"],
      correctIndex: 0,
      explanation:
        "Bank مؤنث، وبعد es gibt نستخدم صيغة Akkusativ: eine Bank. أما ein/einen فليسا صيغة هذا الاسم، وder لا يطابق التركيب.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«ein» للمحايد أو المرفوع؛ و«die Bank» مؤنث منصوب ⇒ «eine Bank».",
        "«einen» للمذكر؛ و«die Bank» مؤنث.",
        "«der» مرفوع مذكر؛ وبعد «es gibt» يأتي Akkusativ. ",
      ],
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة النفي الصحيحة للاسم المفرد في الجملة:",
      questionDe: "Es gibt ___ Park im Stadtzentrum.",
      options: ["keinen", "kein", "keine", "nicht"],
      correctIndex: 0,
      explanation:
        "Park اسم مذكر مفرد؛ النفي غير المحدد في Akkusativ هو keinen Park. keine تلائم مثلاً جمعاً أو مؤنثاً، وnicht لا تحل محل أداة النفي هنا.",
      errorType: "negation",
      optionExplanations: [
        undefined,
        "«kein» صيغة المرفوع أو المحايد؛ و«der Park» مذكر منصوب ⇒ «keinen Park».",
        "«keine» للمؤنث أو الجمع؛ و«der Park» مذكر مفرد.",
        "«nicht» ينفي الفعل أو الجملة، لا اسماً بأداة تنكير؛ والمطلوب «keinen Park». ",
      ],
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كل صيغة ضمير بجملة وترجمتها المناسبة:",
      pairs: [
        { left: "mich", right: "Er sieht mich. = هو يراني." },
        { left: "dich", right: "Ich sehe dich. = أراك." },
        { left: "mir", right: "Kannst du mir helfen? = هل تساعدني؟" },
        { left: "dir", right: "Ich helfe dir. = أساعدك." },
      ],
      explanation:
        "اقرأ الضمير ضمن جملته: sehen يأتي هنا مع mich/dich، وhelfen مع mir/dir. الترجمة توضح المعنى ولا تجعل أسماء الحالات الألمانية مطابقة لإعراب العربية.",
      errorType: "pronoun",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال طبيعي:",
      tokens: ["helfen", "Kannst", "mir", "?", "du"],
      correctSentence: "Kannst du mir helfen?",
      explanation:
        "في سؤال نعم/لا يأتي الفعل المصرف Kannst أولاً، ثم du؛ وتبقى صيغة المصدر helfen في نهاية الجملة.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح صيغة الضمير في الجملة:",
      wrongSentence: "Kannst du mich helfen?",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "dich", "ihn"],
      explanation:
        "helfen يأخذ مكمّلاً في Dativ في هذا المثال؛ الصيغة الصحيحة mir.",
      errorType: "pronoun",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الضمير التي يطلبها الفعل:",
      template: "Ich sehe ___. (هي) Ich danke ___. (أنت) Sie liebt ___. (أنا)",
      blanks: [
        { correct: "sie", options: ["sie", "ihr", "ihn"] },
        { correct: "dir", options: ["dir", "dich", "mir"] },
        { correct: "mich", options: ["mich", "mir", "dich"] },
      ],
      caseSensitive: true,
      explanation:
        "sehen وlieben يأتيان مع متمم Akkusativ في هذين المثالين: sie/mich. وعند ذكر الشخص الذي نشكره يأتي danken مع dir.",
      errorType: "pronoun",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة الخبرية إلى سؤال يبدأ بالفعل:",
      prompt: "Es gibt einen Geldautomaten. → Frage",
      acceptedAnswers: ["Gibt es einen Geldautomaten?"],
      caseSensitive: true,
      sampleAnswer: "Gibt es einen Geldautomaten?",
      explanation:
        "في سؤال نعم/لا يتقدم الفعل المصرف gibt: Gibt es …? ويظل الاسم في Akkusativ.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر معنى العبارة في سياق الدفع:",
      questionDe: "bar zahlen",
      questionAr: "ما معنى العبارة؟",
      options: ["يدفع نقداً", "يدفع بالبطاقة", "يحوّل مالاً", "يسحب نقوداً"],
      correctIndex: 0,
      explanation:
        "bar zahlen أو bar bezahlen تعني الدفع بالنقود الورقية أو المعدنية، لا الدفع بالبطاقة أو تحويل المال.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "الدفع بالبطاقة «mit der Karte zahlen»، لا «bar zahlen».",
        "تحويل المال «Geld überweisen» غير الدفع النقدي.",
        "سحب النقود «Geld abheben»؛ و«bar zahlen» دفعٌ لا سحب. ",
      ],
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح صيغة الضمير التي لا تلائم الفعل:",
      wrongSentence: "Das Buch gehört ihn.",
      wrongWord: "ihn",
      correctWord: "ihm",
      options: ["ihm", "ihn", "ihr", "es"],
      explanation:
        "gehören يأخذ Dativ للشخص الذي يخصه الشيء؛ صيغة الضمير المذكر هنا ihm.",
      errorType: "pronoun",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Ich überweise das Geld auf dein Konto.",
      caseSensitive: true,
      explanation:
        "الجملة صحيحة: Ich überweise … . الفعل überweisen غير منفصل في هذا المعنى؛ ومن صيغه hat überwiesen، لا hat übergewiesen.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر معنى الفعل في سياق التحويل المصرفي:",
      questionDe: "Was bedeutet „Geld auf ein anderes Konto überweisen“?",
      options: [
          "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
        "Am Automaten Bargeld aus dem eigenen Konto holen und einzahlen.",
        "Eine Karte an der Kasse zum Bezahlen von Waren benutzen.",
        "Münzen in einen Briefumschlag legen und per Post schicken.",
      ],
      correctIndex: 0,
      explanation:
        "في السياق المصرفي يعني überweisen تحويل مبلغ من حساب إلى آخر. أما الخيارات الأخرى فتصف سحب النقد، أو الدفع بالبطاقة، أو وضع العملات في ظرف.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "ذلك سحبٌ وإيداع «Bargeld am Automaten holen und einzahlen»، لا «überweisen».",
        "ذلك دفعٌ بالبطاقة عند الصندوق «Eine Karte an der Kasse benutzen».",
        "ذلك إرسال نقودٍ بالبريد «Münzen … per Post schicken»، لا تحويلٌ مصرفي. ",
      ],
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر تصريف الفعل المنفصل abheben في الجملة الرئيسية:",
      questionDe: "Ich ___ am Automaten Geld ab. (abheben)",
      options: ["hebe", "abhebe", "hebst", "heben"],
      correctIndex: 0,
      explanation:
        "abheben فعل منفصل في الحاضر: Ich hebe Geld ab. يثبت Duden ترتيب hebt … ab؛ أما überweisen في تمرين e10 فغير منفصل.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "الجزء «ab» يذهب إلى آخر الجملة الرئيسية «Ich hebe … ab»، فلا يبقى ملتصقاً بالفعل.",
        "«hebst» مع du؛ والفاعل هنا «Ich».",
        "«heben» مصدرٌ أو صيغة جمع؛ ومع «Ich» نقول «hebe». ",
      ],
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الماضي المناسبة:",
      questionDe: "Früher ___ es hier eine Bank. (Präteritum)",
      options: ["gab", "gibt", "geben", "gebe"],
      correctIndex: 0,
      explanation:
        "Präteritum من geben هو gab؛ لذلك نقول Früher gab es hier eine Bank. هذا مثال إضافي على أن صيغة الحاضر es gibt ليست ثابتة في جميع الأزمنة.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«gibt» حاضر «es gibt»؛ و«Früher» تستدعي الماضي «gab».",
        "«geben» مصدر؛ والجملة تحتاج صيغةً مصرفة «gab».",
        "«gebe» مع ich؛ والتركيب «es gab» بلا فاعلٍ متكلم. ",
      ],
    },
    {
      id: "e14",
      type: "fill-blank",
      instructionAr:
        "اختر أداة اسم مفرد مذكر؛ تذكّر صيغة الاسم: der Geldautomat — den Geldautomaten:",
      template: "Es gibt ___ Geldautomaten in der Nähe. (einen einzelnen)",
      blanks: [
        { correct: "einen", options: ["einen", "einem", "ein", "der"] },
      ],
      explanation:
        "المقصود صراف واحد: einen Geldautomaten. Geldautomat اسم مذكر وصيغته في Akkusativ المفرد Geldautomaten؛ أما einem فهو Dativ، وein لا يطابق الصيغة المطلوبة.",
      errorType: "case",
    },
  ];

export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Kannst du mich helfen?",
        right: "Kannst du mir helfen?",
        classification: "error",
        whyAr:
          "helfen يطلب هنا مكمّلاً في Dativ. لا تستبدل mir بـmich اعتماداً على ترجمة «تساعدني» وحدها.",
      },
      {
        wrong: "Es gibt der Park.",
        right: "Es gibt einen Park.",
        classification: "error",
        whyAr:
          "في هذا الإطار نستخدم الاسم في Akkusativ؛ مع ein واسم مذكر مفرد تكون الصيغة einen Park.",
      },
      {
        wrong: "Es gibt keinen Automat.",
        right: "Es gibt keinen Automaten.",
        classification: "error",
        whyAr:
          "Automat اسم مذكر ضعيف: den Automaten في Akkusativ. يُحفظ هذا الاسم بصيغته الخاصة، ولا تُعمّم النهاية على سائر الأسماء.",
      },
      {
        wrong: "القول إن صيغة Euro واحدة في كل سياق جمع.",
        right: "die Euros في جمع الاسم، لكن عشرة يورو: 10 Euro.",
        classification: "contextual-alternative",
        whyAr:
          "Duden يورد الجمع Euros مع أداة التعريف، ويورد أيضاً كتابة المبالغ مثل 30 Euro بلا s. التمرين r3 يقيس جمع الاسم، لا كتابة المبلغ.",
      },
      {
        wrong: "bar تعني «حانة» دائماً.",
        right: "bar zahlen = يدفع نقداً؛ die Bar = الحانة.",
        classification: "error",
        whyAr:
          "الحرف الكبير والجنس النحوي والسياق تميّز الاسم die Bar عن الصفة bar في سياق الدفع. ليست الكلمتان استعمالاً واحداً.",
      },
    ],
    eselsbruecken: [
      "es gibt + Akkusativ؛ في السؤال ابدأ بالفعل: Gibt es …?",
      "احفظ الفعل مع المتمم: sehen + dich، helfen + dir، gehören + ihm.",
      "abheben ينفصل في الجملة الرئيسية: Ich hebe Geld ab؛ überweisen لا ينفصل: Ich überweise Geld.",
    ],
    culturalNote: {
      title: "النقد والبطاقات: معلومة محددة لا تعميم ثقافي",
      content:
        "في أحدث دراسة نشرتها Bundesbank لسلوك الدفع في ألمانيا، عن عام 2025، سُدّد 45% من المعاملات المسجلة نقداً، واستخدمت بطاقة الخصم في 26% منها بحسب العدد. ظل النقد وسيلة الدفع المفردة الأكثر استخداماً، لكن وسائل الدفع غير النقدية مجتمعة تجاوزته للمرة الأولى (55%). هذه أرقام ألمانيا لعام 2025 وليست وصفاً ثابتاً لكل بلد أو لكل متجر؛ وقد تختلف وسائل الدفع المقبولة، فاقرأ اللافتة أو اسأل. ويذكر التقرير أن Girocard كانت أكثر بطاقات الخصم استخداماً؛ لا تخلط بطاقة الخصم تلقائياً ببطاقة الائتمان Kreditkarte.",
    },
  };

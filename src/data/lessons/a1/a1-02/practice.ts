/**
 * a1-02 — بنك التمارين ونصائح الأخطاء (الجزء «practice»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 8) بنك التدريبات */
export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Mutter.",
      questionAr: "هذه أمي.",
      options: ["mein", "meine", "dein", "deine"],
      correctIndex: 1,
      explanation: "Mutter مؤنثة (die Mutter) → meine Mutter.",
      optionExplanations: [
        "mein تأتي مع الأسماء المذكرة/المحايدة، وMutter مؤنثة.",
        undefined,
        "dein أداة ملكية للمخاطَب المفرد غير الرسمي (du)، وليست أداة المتكلم.",
        "deine صيغة أداة المخاطَب مع اسم مؤنث أو جمع في الرفع؛ هنا المقصود أمي (meine Mutter)، لا أمّ المخاطَب.",
      ],
      errorType: "gender",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Geschwister?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك إخوة أو أخوات؟", "هل تحب عائلتك الكبيرة؟", "كم عمرك؟", "أين والدك الآن؟"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — السؤال ليس عن المحبة ولا عن عدد أفراد العائلة؛ و«Hast du Geschwister؟» تسأل عن وجود الإخوة والأخوات.", "لا — السؤال عن العمر صيغته «Wie alt bist du؟»؛ و«Geschwister» تعني الإخوة والأخوات.", "لا — السؤال عن المكان صيغته «Wo ist dein Vater؟»؛ و«Hast du…؟» تسأل عن وجود شيء عند المخاطب."],
      explanation: "Hast du = هل لديك، وGeschwister = الإخوة والأخوات (جمع).",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Das", "ist", "mein", "Vater", "."],
      correctSentence: "Das ist mein Vater.",
      explanation: "Das ist (هذا هو) + mein Vater (أبي) — ترتيب مباشر ومألوف.",
      errorType: "word-order",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["du", "Geschwister", "Hast", "?"],
      correctSentence: "Hast du Geschwister?",
      explanation:
        "سؤال نعم/لا: الفعل أولاً — Hast (1) + du (2) + Geschwister.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "matching",
      instructionAr: "صل كلمة العائلة بمعناها:",
      pairs: [
        { left: "der Bruder", right: "الأخ" },
        { left: "die Schwester", right: "الأخت" },
        { left: "die Eltern", right: "الوالدان" },
        { left: "die Tochter", right: "الابنة" },
        { left: "der Sohn", right: "الابن" },
      ],
      explanation:
        "ثنائيات متقابلة: Bruder/Schwester وSohn/Tochter. تذكّرها كثنائيات!",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr:
        "اختر التصحيح المناسب للكلمة الخاطئة في الجملة.",
      wrongSentence: "Mein Mutter heißt Leila.",
      wrongWord: "Mein",
      correctWord: "Meine",
      options: ["Meine", "Dein", "Mein", "Ihr"],
      explanation:
        "في حالة الرفع نقول meine Mutter لأن Mutter مؤنثة. هذا بند تدريب على اختيار النهاية، لا ترتيباً إحصائياً لأخطاء متعلمي العربية.",
      errorType: "gender",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بـ mein أو meine:",
      template:
        "___ Bruder ist zehn Jahre alt. ___ Schwester heißt Nour. ___ Eltern sind nett.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation:
        "Bruder (مذكر) → Mein. Schwester (مؤنث) → Meine. Eltern (جمع) → Meine.",
      errorType: "gender",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه:",
      audioText: "Meine Schwester heißt Nour.",
      explanation:
        "الجملة الصحيحة: Meine Schwester heißt Nour — لاحظ meine لأن Schwester مؤنثة.",
      errorType: "spelling",
    },
    {
      id: "e9",
      type: "multiple-choice",
      instructionAr: "أكمل: الحديث عن عائلة شخص آخر.",
      questionDe: "Lena ist meine Freundin. ___ Vater arbeitet in Berlin.",
      questionAr: "لينا صديقتي. أبوها يعمل في برلين.",
      options: ["Ihr", "Ihre", "Sein", "Seine"],
      correctIndex: 0,
      explanation:
        "المالكة أنثى (Lena) ⇒ الجذر ihr. والمملوك Vater مذكر (der) ⇒ بلا ـe: Ihr Vater.",
      optionExplanations: [
        undefined,
        "الجذر صحيح لكنّ الـ ـe زائدة: Vater مذكر لا مؤنث. النهاية تتبع المملوك لا المالكة.",
        "sein تعني «له»، والمالكة هنا لينا.",
        "خطآن معاً: الجذر «sein» للملك المذكّر، والنهاية «-e» للمملوك المؤنث؛ والمالك «Lena» والمملوك «der Vater».",
      ],
      errorType: "pronoun",
    },
    {
      id: "e10",
      type: "fill-blank",
      instructionAr:
        "أكمل بالأداة المناسبة (انتبه: مَن المالك؟ وما جنس المملوك؟).",
      template:
        "Das ist Ali. ___ Bruder heißt Omar und ___ Schwester heißt Mona. Und du? Ist das ___ Vater?",
      blanks: [
        { correct: "Sein", options: ["Sein", "Seine", "Ihr"] },
        { correct: "seine", options: ["sein", "seine", "ihre"] },
        { correct: "dein", options: ["dein", "deine", "sein"] },
      ],
      explanation:
        "علي مذكر ⇒ الجذر sein في الأولَيَين. Bruder مذكر ⇒ Sein بلا ـe؛ Schwester مؤنث ⇒ seine. ثم خاطبناك أنت ⇒ dein، وVater مذكر ⇒ بلا ـe.",
      errorType: "pronoun",
    },
    {
      id: "e11",
      type: "error-correction",
      instructionAr:
        "اختر التصحيح المناسب للكلمة الخاطئة في الجملة.",
      wrongSentence: "Fatma wohnt in Sousse. Ihre Bruder studiert in Tunis.",
      wrongWord: "Ihre",
      correctWord: "Ihr",
      options: ["Ihr", "Seine", "Ihre", "Deine"],
      explanation:
        "الفخّ المتوقّع: المالكة أنثى فيُظنّ أنّ الأداة تأخذ ـe. لكنّ النهاية تتبع المملوك: Bruder مذكر (der) ⇒ Ihr Bruder.",
      errorType: "pronoun",
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال صحيح:",
      tokens: ["Ist", "das", "deine", "Schwester", "?"],
      correctSentence: "Ist das deine Schwester?",
      explanation:
        "السؤال بلا أداة استفهام يبدأ بالفعل: Ist das …? والمملوك Schwester مؤنث ⇒ deine.",
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الملكية المناسبة:",
      template: "Ali und Sara haben zwei Kinder. ___ Kinder heißen Nour und Amir.",
      blanks: [{ correct: "Ihre", options: ["Ihr", "Ihre", "Sein", "Seine"] }],
      explanation:
        "المالكان Ali und Sara جمع ⟵ الجذر ihr. والمملوك Kinder جمع ⟵ النهاية ‑e: Ihre Kinder.",
      errorType: "pronoun",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة كلّياً:",
      questionDe: "Welcher Satz ist richtig?",
      questionAr: "أيّ جملة صحيحة؟",
      options: [
        "Ali und sein Mutter wohnen hier",
        "Ali und seine Mutter wohnen hier",
        "Ali und ihr Mutter wohnen hier",
        "Ali und seine Mutter wohnt hier",
      ],
      correctIndex: 1,
      explanation:
        "المالك علي مذكّر ⟵ sein؛ والمملوك Mutter مؤنّث ⟵ النهاية ‑e؛ والفاعل مثنّى (علي وأمّه) ⟵ الفعل بالجمع wohnen.",
      optionExplanations: [
        "نقصت النهاية ‑e التي يوجبها تأنيث Mutter.",
        undefined,
        "الصيغة الصحيحة مع Mutter هي ihre؛ أما ihr Mutter فناقصة النهاية ‑e.",
        "الأداة صحيحة لكنّ الفعل يجب أن يكون جمعاً: wohnen.",
      ],
      errorType: "pronoun",
    },
    {
      id: "e15",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في مخاطبة رسمية:",
      wrongSentence: "Frau Weber, wie heißt deine Tochter?",
      wrongWord: "deine",
      correctWord: "Ihre",
      options: ["Ihre", "seine", "meine", "eure"],
      explanation:
        "ذكر التمرين أن السياق رسمي؛ في هذا السياق نستخدم عادة Sie وIhr. Tochter مؤنث، لذا تكون صيغة الرفع Ihre Tochter. في الاستعمال الواقعي تحدد العلاقة والسياق صيغة المخاطبة.",
      errorType: "pronoun",
    },
    {
      id: "e16",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة صحيحة:",
      tokens: ["Meine", "Großeltern", "wohnen", "in", "Kairouan", "."],
      correctSentence: "Meine Großeltern wohnen in Kairouan.",
      explanation:
        "Großeltern جمع ⟵ الأداة meine بالنهاية ‑e والفعل wohnen بالنهاية ‑en. والفعل في المركز الثاني بعد الفاعل المركّب.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "matching",
      instructionAr: "طابق كلّ كلمة بجمعها:",
      pairs: [
        { left: "der Vater", right: "die Väter" },
        { left: "die Mutter", right: "die Mütter" },
        { left: "der Bruder", right: "die Brüder" },
        { left: "die Schwester", right: "die Schwestern" },
        { left: "der Sohn", right: "die Söhne" },
        { left: "die Tochter", right: "die Töchter" },
      ],
      explanation:
        "أربع كلماتٍ تُجمع بالإمالة وحدها (Väter, Mütter, Brüder, Töchter)، وواحدة بالنهاية وحدها (Schwestern)، وواحدة بالاثنتين معاً (Söhne). فثلاثة أنماط جمعٍ في ستّ كلمات.",
      errorType: "plural",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "أكمل أداة الملكية للمخاطَبين بصيغة الجمع:",
      questionDe: "Ihr seid neu in der Stadt. ___ Eltern wohnen auch hier.",
      questionAr: "أنتم جدد في المدينة. والداكم يسكنان هنا أيضاً.",
      options: ["Eure", "Ihre", "Unsere", "Seine"],
      correctIndex: 0,
      optionExplanations: [
        undefined,
        "Ihre قد تكون للحديث الرسمي عن والدي المخاطَب، لكن السياق هنا يخاطب مجموعة بصيغة ihr/seid؛ أداة ملكيتها eure.",
        "Unsere تعني والدينا نحن المتكلمين، لا والدي المخاطَبين.",
        "Seine تعني والديه هو، ولا يوجد مالك مفرد مذكر في السياق.",
      ],
      explanation: "يحدد ihr + seid المخاطَبين بصيغة الجمع؛ لذلك الجذر euer، ومع الاسم الجمع Eltern تظهر صيغة eure: eure Eltern.",
      errorType: "pronoun",
    },
  ];

/* 9) الأخطاء والتريكات */
export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "mein Mutter / mein Schwester",
        right: "meine Mutter / meine Schwester",
        whyAr:
          "في حالة الرفع تأخذ الأسماء المؤنثة meine؛ لا تتحدد النهاية بجنس المتكلم، وتتغير الصيغة في حالات إعرابية أخرى.",
      },
      {
        wrong: "Meine Eltern ist nett.",
        right: "Meine Eltern sind nett.",
        whyAr: "Eltern جمع → الفعل بصيغة الجمع sind.",
      },
      {
        wrong: "Ich habe ein Bruder.",
        right: "Ich habe einen Bruder.",
        whyAr:
          "بعد الفعل haben (يملك) يأتي الاسم المذكر بحالة النصب (Akkusativ): einen Bruder. (سنفصل هذا في دروس لاحقة — فقط لاحظ الآن).",
      },
    ],
    eselsbruecken: [
      "في حالة الرفع: mein Vater / mein Kind، وmeine Mutter / meine Eltern. اختَر النهاية بحسب الاسم المملوك، لا بحسب جنس المتكلم.",
      "ثنائيات العائلة: Vater/Mutter, Bruder/Schwester, Sohn/Tochter, Opa/Oma.",
    ],
    culturalNote: {
      title: "العائلة في الثقافة الألمانية",
      content:
        "قد تعني Familie الأسرة المعيشية أو العائلة والأقارب بمعنى أوسع، بحسب السياق. تختلف عادات الحديث عن الأسرة من شخص إلى آخر؛ قد يسأل شخص عن الإخوة في تعارف، لكن ذلك ليس قاعدة في كل لقاء، ولا يلزم المتعلم الإفصاح عن معلومات خاصة. وتعني Schwiegereltern والدي الزوج أو الزوجة؛ وللدلالة على عائلة الشريك عموماً يمكن قول Familie meines Partners / meiner Partnerin.",
    },
  };

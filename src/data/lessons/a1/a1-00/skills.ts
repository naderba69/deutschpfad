/**
 * a1-00 — المهارات: قراءة و استماع و نطق و كتابة (الجزء «skills»)
 * فُصل من a1-00.ts في الدفعة 95 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 4) القراءة */
export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a1-00",
    titleDe: "Im Sprachenzentrum: Wie schreibt man das?",
    titleAr: "في مركز اللغات: كيف يُكتب هذا؟",
    textType: "dialog",
    paragraphs: [
      "Frau Weber arbeitet im Sprachenzentrum in Leipzig. Heute kommt ein neuer Student. Er möchte einen Deutschkurs machen. Frau Weber nimmt ein Formular und einen Stift. Sie fragt freundlich: Guten Tag! Wie heißen Sie bitte?",
      "Der Student antwortet: Guten Tag! Ich heiße Youssef Chaabane. Frau Weber schreibt und fragt dann: Chaabane? Wie schreibt man das? Buchstabieren Sie bitte! Der Student buchstabiert langsam: C wie Cäsar, H wie Heinrich, A wie Anton, A wie Anton, B wie Berta, A wie Anton, N wie Nordpol, E wie Emil.",
      "Danke schön, sagt Frau Weber. Und woher kommen Sie? Ich komme aus Tunesien, antwortet Youssef. Und wo wohnen Sie jetzt? Ich wohne in der Goethestraße, Nummer zwölf. Frau Weber lächelt: Die Goethestraße kenne ich gut. Sie schreiben das mit ß, nicht mit ss.",
      "Zum Schluss fragt Frau Weber: Und Ihre Telefonnummer? Youssef sagt die Nummer langsam: null, drei, vier, eins, sieben, neun. Sehr gut, sagt Frau Weber. Ihr Kurs beginnt am Montag um neun Uhr, Raum vier. Auf Wiedersehen und bis Montag! Youssef sagt: Vielen Dank! Auf Wiedersehen!",
    ],
    paragraphsAr: [
      "تعمل السيدة فيبر في مركز اللغات بمدينة لايبتسيغ. اليوم يأتي طالب جديد يودّ الالتحاق بدورة ألمانية. تأخذ السيدة فيبر استمارة وقلماً وتسأل بلطف: طاب يومك! ما اسمك من فضلك؟",
      "يجيب الطالب: طاب يومك! اسمي يوسف شعبان. تكتب السيدة فيبر ثمّ تسأل: شعبان؟ كيف يُكتب هذا؟ تهجَّ من فضلك! فيتهجّى الطالب ببطء: C كما في تسيزار، H كما في هاينريش، A كما في أنطون، A كما في أنطون، B كما في بيرتا، A كما في أنطون، N كما في نوردبول، E كما في إميل.",
      "تقول السيدة فيبر: شكراً جزيلاً. ومن أين أنت؟ فيجيب يوسف: أنا من تونس. وأين تسكن الآن؟ أسكن في شارع غوته، رقم اثني عشر. تبتسم السيدة فيبر: أعرف شارع غوته جيداً. تكتبونه بـ ß لا بـ ss.",
      "وفي الختام تسأل السيدة فيبر: ورقم هاتفك؟ فيقول يوسف الرقم ببطء: صفر، ثلاثة، أربعة، واحد، سبعة، تسعة. تقول السيدة فيبر: ممتاز. تبدأ دورتك يوم الاثنين في التاسعة، القاعة رقم أربعة. إلى اللقاء وإلى يوم الاثنين! فيقول يوسف: شكراً جزيلاً! إلى اللقاء!",
    ],
    glossary: [
      {
        de: "das Sprachenzentrum",
        ar: "مركز اللغات",
        noteAr:
          "كلمة مركّبة: Sprachen (لغات) + Zentrum (مركز). وجنس المركّب من جزئه الأخير: das Zentrum ⟵ das Sprachenzentrum.",
      },
      {
        de: "buchstabieren",
        ar: "يتهجّى",
        noteAr:
          "من der Buchstabe (الحرف). فعلٌ منتظم، وهو أهمّ فعل في هذا الدرس عملياً.",
      },
      {
        de: "das Formular",
        ar: "الاستمارة",
        noteAr:
          "كلمة ستقابلك في كلّ دائرة رسمية ألمانية. الجمع: die Formulare.",
      },
      {
        de: "wie schreibt man das?",
        ar: "كيف يُكتب هذا؟",
        noteAr:
          "man ضمير عامّ لا يُترجم («المرء/يُفعَل»)، ويأخذ الفعل معه صيغة الغائب المفرد: man schreibt.",
      },
      {
        de: "langsam",
        ar: "ببطء / بطيء",
        noteAr:
          "ضدّه schnell. وتُستعمل ظرفاً بلا أيّ نهاية: Sprechen Sie bitte langsam!",
      },
      {
        de: "freundlich",
        ar: "ودود / بلطف",
        noteAr:
          "من der Freund (الصديق) + النهاية ‑lich التي تصنع الصفات، كما في herzlich و täglich.",
      },
      {
        de: "die Telefonnummer",
        ar: "رقم الهاتف",
        noteAr:
          "مركّبة أيضاً، وجنسها من die Nummer. وتُقال أرقامها فرادى لا مجتمعة.",
      },
      {
        de: "der Raum",
        ar: "القاعة / الغرفة",
        noteAr:
          "الجمع بالإمالة: die Räume — مثالٌ حيّ على أنّ ä علامة جمع لا زخرفة.",
      },
      {
        de: "zum Schluss",
        ar: "في الختام / أخيراً",
        noteAr: "تعبير رابط يُستعمل في الكلام والكتابة معاً لإنهاء سلسلة.",
      },
      {
        de: "lächeln",
        ar: "يبتسم",
        noteAr:
          "لاحظ ä فيه. ولا تخلطه بـ lachen (يضحك): فيه ch غليظة بعد a، أما lächeln ففيه ch ناعمة بعد ä.",
      },
      {
        de: "kennen",
        ar: "يعرف (شخصاً أو مكاناً)",
        noteAr:
          "يخصّ المعرفة بالمعايشة والتجربة. ويقابله wissen للمعرفة بالمعلومة؛ وفي العربية يشبه ذلك التمييز بين «عرف» و«علم» تقريباً.",
      },
      {
        de: "Vielen Dank!",
        ar: "شكراً جزيلاً!",
        noteAr:
          "أدفأ من Danke المجرّدة. والردّ عليها: Bitte schön! أو Gern geschehen!",
      },
    ],
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "اقرأ الفقرة الأولى ثمّ اختر:",
        questionDe: "Wo arbeitet Frau Weber?",
        questionAr: "أين تعمل السيدة فيبر؟",
        options: [
          "In einer Schule",
          "Im Sprachenzentrum",
          "In einem Büro in Tunesien",
          "An der Universität",
        ],
        correctIndex: 1,
        explanation:
          "الجملة الأولى تنصّ: «Frau Weber arbeitet im Sprachenzentrum in Leipzig». وانتبه إلى أنّ Leipzig هي المدينة، أما مكان العمل الأدقّ فهو Sprachenzentrum.",
        optionExplanations: [
          "لم تُذكر مدرسة «eine Schule»؛ والنصّ «arbeitet im Sprachenzentrum in Leipzig».",
          undefined,
          "تونس بلد يوسف «Youssef» لا مكان عملها؛ ومكتبها ليس «in einem Büro in Tunesien».",
          "لم تُذكر جامعة «an der Universität» في النصّ؛ والمكان «Sprachenzentrum».",
        ],
        errorType: "vocabulary",
        paragraph: 0,
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "انتبه لطريقة التهجّي في الفقرة الثانية:",
        questionDe: "Warum sagt Youssef: A wie Anton?",
        questionAr: "لماذا يقول يوسف: A كما في أنطون؟",
        options: [
          "Weil Anton sein Freund ist",
          "Weil das die deutsche Buchstabiertafel ist",
          "Weil er den Buchstaben vergessen hat",
          "Weil Anton auch im Kurs ist",
        ],
        correctIndex: 1,
        explanation:
          "الألمان يتهجّون بأسماء علمٍ معيارية (Anton, Berta, Emil…) تماماً كما يقول الطيّارون Alpha‑Bravo. والغرض تفادي الخلط بين الحروف المتشابهة صوتياً في الهاتف، لا ذكر أشخاص بأعيانهم.",
        optionExplanations: [
          "«Anton» اسمٌ في جدول التهجّي «die Buchstabiertafel»، لا شخصٌ في النصّ.",
          undefined,
          "لم ينسَ الحرف «den Buchstaben vergessen»؛ بل يتهجّى بدقّة: «A wie Anton».",
          "لا وجود لشخصٍ اسمه «Anton» في الدورة؛ والاسم جزء من «Buchstabiertafel».",
        ],
        errorType: "vocabulary",
        paragraph: 1,
      },
      {
        id: "r3",
        type: "multiple-choice",
        instructionAr: "الفقرة الثالثة — ركّز على الإملاء:",
        questionDe: "Wie schreibt man den Straßennamen richtig?",
        questionAr: "كيف يُكتب اسم الشارع كتابةً صحيحة؟",
        options: [
          "Goethestrasse",
          "Goethestraße",
          "Göthestraße",
          "Goetestrasse",
        ],
        correctIndex: 1,
        explanation:
          "النصّ يصرّح: «Sie schreiben das mit ß, nicht mit ss». والقاعدة تؤيّده: حرف a في Straße طويل، والعلّة الطويلة يليها ß لا ss. أمّا Goethe فتُكتب oe لأنّه اسم علم تاريخي حُفظ رسمه القديم.",
        optionExplanations: [
          "الكتابة بـ«ss» سويسرية؛ والنصّ ينصّ «Sie schreiben das mit ß, nicht mit ss».",
          undefined,
          "لا إمالة في اسم غوته؛ بل يُكتب «oe» كما في «Goethestraße».",
          "خطآن معاً: نقص «h» في «Goetestrasse» و«ss» بدل «ß».",
        ],
        errorType: "spelling",
        paragraph: 2,
      },
      {
        id: "r4",
        type: "multiple-choice",
        instructionAr: "الفقرة الرابعة — المعلومة الزمنية:",
        questionDe: "Wann beginnt der Kurs?",
        questionAr: "متى تبدأ الدورة؟",
        options: [
          "Am Montag um neun Uhr",
          "Am Sonntag um vier Uhr",
          "Am Montag um zwölf Uhr",
          "Heute um neun Uhr",
        ],
        correctIndex: 0,
        explanation:
          "النصّ: «Ihr Kurs beginnt am Montag um neun Uhr, Raum vier». والفخّ أنّ العدد أربعة وردَ فعلاً لكنّه رقم القاعة لا الساعة، والعدد اثنا عشر ورد لكنّه رقم البيت — فقراءة العدد وحده دون سياقه تُوقع في الخطأ.",
        optionExplanations: [
          undefined,
          "لم يُذكر الأحد «am Sonntag»؛ و«vier» في النصّ رقم القاعة «Raum vier».",
          "اليوم صحيح لكن الساعة لا؛ و«zwölf» في النصّ رقم البيت لا الساعة «neun Uhr».",
          "الساعة صحيحة لكن اليوم لا؛ والبداية «am Montag» لا «heute».",
        ],
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "r5",
        type: "multiple-choice",
        instructionAr: "سؤال نطق مبني على النصّ:",
        questionDe: "Welches Wort spricht man mit dem harten ach-Laut?",
        questionAr: "أيّ كلمة تُنطق فيها ch خاءً غليظة؟",
        options: ["nicht", "ich", "Buchstabe", "lächelt"],
        correctIndex: 2,
        explanation:
          "الخاء الغليظة تأتي بعد a و o و u و au. وفي Buchstabe يسبق ch حرف u فتُنطق خاءً. أمّا nicht وich فقبلهما i، وlächelt قبلها ä — وكلّها تُنطق شيناً ناعمة.",
        optionExplanations: [
          "في «nicht» يسبق «ch» حرفُ «i» ⇒ شين ناعمة (ich-Laut)، لا خاء غليظة.",
          "في «ich» يسبق «ch» حرفُ «i» ⇒ شين ناعمة؛ والخاء الغليظة بعد a/o/u/au كما في «Buch».",
          undefined,
          "في «lächelt» يسبق «ch» حرفُ «ä» ⇒ شين ناعمة؛ والخاء الغليظة بعد a/o/u/au.",
        ],
        errorType: "spelling",
        paragraph: 1,
      },
    ],
    redemittel: [
      {
        de: "Wie heißen Sie bitte? — Ich heiße …",
        ar: "ما اسمك من فضلك؟ — اسمي …",
      },
      {
        de: "Wie schreibt man das? — Buchstabieren Sie bitte!",
        ar: "كيف يُكتب هذا؟ — تهجَّ من فضلك!",
      },
      {
        de: "A wie Anton, B wie Berta, E wie Emil.",
        ar: "أ كما في أنطون، ب كما في بيرتا… (جدول التهجّي المعياري)",
      },
      {
        de: "Können Sie das bitte langsam wiederholen?",
        ar: "هل يمكنك إعادته ببطء من فضلك؟",
      },
      {
        de: "Ich wohne in der …straße, Nummer …",
        ar: "أسكن في شارع …، رقم …",
      },
      {
        de: "Vielen Dank! — Auf Wiedersehen!",
        ar: "شكراً جزيلاً! — إلى اللقاء!",
      },
    ],
    discussionAr:
      "تخيّل أنّك في مكتب التسجيل: تهجَّ اسمك الكامل بالألمانية مستعملاً جدول التهجّي (X wie …)، ثمّ اذكر شارعك ورقم هاتفك رقماً رقماً. سجّل نفسك بالهاتف واستمع: هل نطقتَ W ڤاءً؟ وهل جعلتَ ei آيَ؟ وهل همستَ آخر Tag؟ أعد المحاولة حتى تسلم الثلاثة.",
  };

/* 5) الاستماع */
export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "تهجئة الاسم في الهاتف",
        lines: [
          {
            speaker: "Sami",
            de: "Hallo, mein Name ist Sami Ben Ali.",
            ar: "مرحباً، اسمي سامي بن علي.",
          },
          {
            speaker: "Frau Weber",
            de: "Wie bitte? Können Sie das buchstabieren?",
            ar: "عذراً؟ هل يمكنك تهجئة ذلك؟",
          },
          {
            speaker: "Sami",
            de: "Ja, natürlich. S-A-M-I. B-E-N. A-L-I.",
            ar: "نعم بالطبع. إس-آ-إم-آي. بيه-إيه-إن. آ-إل-آي.",
          },
          {
            speaker: "Frau Weber",
            de: "Ah, vielen Dank, Herr Ben Ali!",
            ar: "آه، شكراً جزيلاً يا سيد بن علي!",
          },
        ],
      },
      {
        id: "l2",
        title: "حروف مشهورة في الكلمات",
        lines: [
          {
            speaker: "Lehrer",
            de: "Wie schreibt man „Schule“?",
            ar: "كيف تُكتب كلمة Schule (مدرسة)؟",
          },
          { speaker: "Mona", de: "S-C-H-U-L-E.", ar: "إس-تسيه-ها-وو-إل-إيه." },
          {
            speaker: "Lehrer",
            de: "Sehr gut! Und „Straße“?",
            ar: "ممتاز! وكلمة Straße (شارع)؟",
          },
          {
            speaker: "Mona",
            de: "S-T-R-A-ß-E.",
            ar: "إس-تيه-إر-آ-إسّتِت-إيه.",
          },
          { speaker: "Lehrer", de: "Perfekt!", ar: "مثالي!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie heißt der Mann?",
        questionAr: "ما اسم الرجل؟",
        options: ["Sami Ben Ali", "Herr Weber", "Mona", "Sami Weber"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — «Weber» لقب المرأة في الحوار («Frau Weber») لا اسم الرجل؛ وهو يقول: «Hallo, mein Name ist Sami Ben Ali».", "لا — «Mona» متحدّثة الحوار الثاني مع المعلم؛ والرجل على الهاتف هو «Sami Ben Ali».", "لا — هذا تركيبٌ من اسم الرجل ولقب المرأة؛ فاسمه «Sami Ben Ali» وهو ما تهجّاه حرفاً حرفاً: «S-A-M-I. B-E-N. A-L-I»."],
        explanation: "قال: mein Name ist Sami Ben Ali — وتهجأه حرفاً حرفاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie schreibt man „Schule“?",
        questionAr: "كيف تُكتب Schule؟",
        options: ["S-C-H-U-L-E", "S-C-H-O-L-E", "S-H-U-L-E", "S-C-U-L-E"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — الصائت في «Schule» هو «u» لا «o»؛ وتهجئة مونا في الحوار: «S-C-H-U-L-E».", "لا — سقط حرف «C» من مجموعة «sch»؛ والتهجئة الكاملة: «S-C-H-U-L-E».", "لا — سقط حرف «H» من «sch»؛ والصحيح كما في الحوار: «S-C-H-U-L-E»."],
        explanation:
          "Schule بالطبع S-C-H-U-L-E — لاحظ sch معاً ثم u ثم l ثم e.",
        errorType: "spelling",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Welcher Buchstabe ist in „Straße“?",
        questionAr: "أي حرف يوجد في Straße؟",
        options: ["ß", "ä", "ü", "ö"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — لا يوجد «ä» في «Straße»؛ والحرف الخاصّ فيها هو «ß» كما في التهجئة: «S-T-R-A-ß-E».", "لا — لا «ü» في كلمة «Straße»؛ والمسموع في التهجئة: «S-T-R-A-ß-E».", "لا — لا «ö» في «Straße»؛ والحرف المطلوب «ß»."],
        explanation: "Straße تحتوي ß — الحرف الحاد الذي يشبه ss.",
        errorType: "spelling",
      },
    ],
  };

/* 6) النطق */
export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أهم 10 أصوات للمتعلم العربي: sch وsp وpf — استمع وكرر",
    items: [
      {
        de: "ich",
        ar: "أنا",
        note: "ch ناعمة بعد i: أقرب إلى «ش» هامسة من «خ»",
      },
      { de: "Buch", ar: "كتاب", note: "ch خاء غليظة بعد u" },
      { de: "schön", ar: "جميل", note: "sch = ش + ö بشفتين مستديرتين" },
      { de: "mein", ar: "ملكي", note: "ei = آي: ماين" },
      { de: "Wien", ar: "فيينا", note: "ie = إي: ڤين" },
      { de: "neu", ar: "جديد", note: "eu = أُوي: نُوي" },
      { de: "Sport", ar: "رياضة", note: "sp في البداية = شپورت" },
      { de: "Stadt", ar: "مدينة", note: "st في البداية = شتات" },
      { de: "Apfel", ar: "تفاحة", note: "pf معاً: آپفِل" },
      { de: "Vater", ar: "أب", note: "V = ف: فاتر" },
    ],
    tip: "اختر صوتاً واحداً يومياً من هذه القائمة وكرره في 5 كلمات مختلفة — صوت واحد يومياً أسرع من مراجعة كل شيء مرة واحدة.",
    shadowing: [
      { de: "Mein Name ist Anna.", ar: "اسمي آنا.", tip: "ei في Mein = آي" },
      {
        de: "Ich buchstabiere: A-N-N-A.",
        ar: "أتهجّى: آ-إن-إن-آ.",
        tip: "حرف A في الألمانية = آ",
      },
      {
        de: "Die Schule ist in der Stadt.",
        ar: "المدرسة في المدينة.",
        tip: "Schule = شولِه، Stadt = شتات",
      },
      {
        de: "Das Buch ist neu.",
        ar: "الكتاب جديد.",
        tip: "Buch = بوخ (خاء غليظة)",
      },
    ],
  };

/* 7) الكتابة */
export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب تهجئة الاسم حرفاً حرفاً بالألمانية (بفاصلة بين الحروف):",
      instructionDe: "Buchstabiere deinen Namen!",
      prompt:
        "اكتب تهجئة الاسم Sami حرفاً حرفاً بالألمانية (مثال للتدريب)",
      acceptedAnswers: ["S-A-M-I", "S A M I"],
      sampleAnswer: "S-A-M-I",
      explanation:
        "التهجئة بالألمانية: كل حرف يُنطق باسمه الألماني (A=آ، B=بيه، C=تسه...).",
      errorType: "spelling",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالحرف الصحيح (ei أو ie):",
      template: "M___n (لي) · W___n (فيينا) · l___ben (يحب) · n___n (لا)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation:
        "المرجع: mein (آي [aɪ]) / Wien (إي [iː]) / lieben (إي [iː]) / nein (آي [aɪ]). ie = إي طويلة · ei = آي مركّبة.",
      errorType: "spelling",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه (جملة تحتوي أصواتاً مركبة):",
      audioText: "Die Schule ist schön und neu.",
      explanation:
        "لاحظ: Schule (ش) + schön (ش+ö) + neu (أُوي). الجملة: Die Schule ist schön und neu.",
      errorType: "spelling",
    },
  ];

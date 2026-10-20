/**
 * a1-02 — المهارات: قراءة و استماع و نطق و كتابة (الجزء «skills»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 4) القراءة */
export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a1-02",
    titleDe: "Eine Fotografie aus Kairouan",
    titleAr: "صورة من القيروان",
    textType: "erzaehlung",
    paragraphs: [
      "Hallo, ich bin Amira. Hier ist ein Foto von meiner Familie. Das Foto ist alt, aber ich mag es sehr. Wir sind bei meinen Großeltern in Kairouan. Meine Familie ist groß und wir sind oft zusammen.",
      "Links steht mein Vater. Er heißt Karim und er ist Lehrer. Neben ihm sitzt meine Mutter Leila. Sie ist Ärztin und sie arbeitet in einem Krankenhaus. Meine Eltern sind seit fünfundzwanzig Jahren verheiratet und sie sind immer sehr freundlich.",
      "Ich habe zwei Geschwister: einen Bruder und eine Schwester. Mein Bruder heißt Youssef. Er ist neunzehn Jahre alt und studiert in Tunis. Seine Freundin Sonia studiert auch dort. Meine Schwester Nour ist noch klein. Sie ist sieben Jahre alt und geht in die Schule.",
      "Rechts auf dem Foto sind meine Großeltern. Mein Opa ist achtzig Jahre alt, aber er arbeitet immer noch im Garten. Seine Frau, meine Oma, kocht sehr gut. Ihr Couscous ist berühmt in der Familie! Auch meine Tante ist da. Ihr Mann ist nicht auf dem Foto, denn er fotografiert.",
      "Und ich? Ich stehe in der Mitte und ich lache. Heute wohne ich in Deutschland und meine Familie ist weit weg. Aber jeden Sonntag telefoniere ich mit meinen Eltern. Dann fragt meine Mutter immer: Wie geht es dir, mein Kind?",
    ],
    paragraphsAr: [
      "مرحباً، أنا أميرة. هذه صورة لعائلتي. الصورة قديمة لكنّها تعجبني كثيراً. نحن عند جدّيّ في القيروان. عائلتي كبيرة ونكون معاً كثيراً.",
      "على اليسار يقف أبي. اسمه كريم وهو معلّم. بجانبه تجلس أمّي ليلى. هي طبيبة وتعمل في مستشفى. والداي متزوّجان منذ خمس وعشرين سنة وهما ودودان دائماً.",
      "لديّ أخ وأخت. أخي اسمه يوسف. عمره تسعة عشر عاماً ويدرس في تونس. صديقته سنية تدرس هناك أيضاً. أختي نور ما زالت صغيرة. عمرها سبع سنوات وتذهب إلى المدرسة.",
      "على يمين الصورة جدّاي. جدّي عمره ثمانون سنة، ومع ذلك ما زال يعمل في الحديقة. زوجته، جدّتي، تطبخ طبخاً ممتازاً. كسكسيها مشهور في العائلة! وعمّتي/خالتي حاضرة أيضاً. زوجها ليس في الصورة لأنّه هو المصوّر.",
      "وأنا؟ أقف في الوسط وأضحك. أسكن اليوم في ألمانيا وعائلتي بعيدة. لكنّني أتّصل بوالديّ كلّ يوم أحد. وحينها تسألني أمّي دائماً: كيف حالك يا ابنتي؟",
    ],
    glossary: [
      {
        de: "das Foto",
        ar: "الصورة",
        noteAr:
          "محايدة، وجمعها الشائع die Fotos.",
      },
      {
        de: "die Großeltern",
        ar: "الجدّان",
        noteAr:
          "تُستعمل بصيغة الجمع للجدّين؛ والمفردان: der Großvater وdie Großmutter.",
      },
      {
        de: "der Lehrer / die Ärztin",
        ar: "المعلّم / الطبيبة",
        noteAr:
          "المهن تأتي بعد sein بلا أداة: Er ist Lehrer. والمؤنّث بالنهاية ‑in: der Arzt ⟵ die Ärztin (مع إمالة).",
      },
      {
        de: "verheiratet",
        ar: "متزوّج",
        noteAr:
          "صفة تُستعمل مع sein: Sie sind verheiratet. ومن أضدادها ledig (غير متزوج)؛ وتُستعملان لوصف الحالة الاجتماعية.",
      },
      {
        de: "studieren",
        ar: "يدرس (في الجامعة)",
        noteAr:
          "يخصّ الدراسة الجامعية. أمّا التلميذ في المدرسة فيقال عنه: Er geht in die Schule أو er lernt.",
      },
      {
        de: "immer noch",
        ar: "ما زال / لا يزال",
        noteAr:
          "تعبير من كلمتين يفيد استمرار الحال خلافاً للمتوقّع. وموضعه بعد الفعل: Er arbeitet immer noch.",
      },
      {
        de: "berühmt",
        ar: "مشهور",
        noteAr:
          "صفة. ويُقال berühmt für etwas (مشهور بشيء) أو berühmt in (مشهور في نطاق).",
      },
      {
        de: "in der Mitte",
        ar: "في الوسط",
        noteAr:
          "تعبير مكاني ثابت. وأخواته: links (يسار)، rechts (يمين)، oben (أعلى)، unten (أسفل) — وكلّها مفيدة لوصف الصور.",
      },
      {
        de: "weit weg",
        ar: "بعيد",
        noteAr:
          "تعبير من كلمتين، وضدّه in der Nähe (قريب). وتُستعمل مع sein: Die Familie ist weit weg.",
      },
      {
        de: "telefonieren mit",
        ar: "يتّصل هاتفياً بـ",
        noteAr:
          "الحرف mit يجرّ ما بعده حتماً: mit meinen Eltern. وستدرس هذا في باب الجرّ (Dativ).",
      },
      {
        de: "jeden Sonntag",
        ar: "كلّ يوم أحد",
        noteAr:
          "ظرف زمان في حالة النصب. والنمط عامّ: jeden Tag, jeden Montag, jede Woche.",
      },
      {
        de: "die Freundin",
        ar: "الصديقة / الخليلة",
        noteAr:
          "قد تعني صديقةً أو شريكةً عاطفية، سواء وردت مع eine أو meine؛ الأداة وحدها لا تحسم العلاقة. في هذه القصة لا يحدَّد نوع العلاقة، فاختر ترجمة محايدة أو اذكر الاحتمالين.",
      },
    ],
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "اقرأ الفقرة الثانية واختر:",
        questionDe: "Was ist Amiras Mutter von Beruf?",
        questionAr: "ما مهنة أمّ أميرة؟",
        options: [
          "Sie ist Lehrerin",
          "Sie ist Ärztin",
          "Sie ist Studentin",
          "Sie arbeitet im Garten",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «meine Mutter Leila. Sie ist Ärztin». والفخّ أنّ مهنة المعلّم ذُكرت في الجملة السابقة مباشرةً لكنّها للأب كريم، والعمل في الحديقة للجدّ. فتتبّع الضمير sie لا الكلمة الأقرب.",
        optionExplanations: [
          "التعليم مهنة الأب كريم «Er ist Lehrer»؛ والأمّ «Sie ist Ärztin».",
          undefined,
          "الطالبان هما يوسف وسنية «studieren an der Universität»؛ والأمّ طبيبة.",
          "العمل في الحديقة «im Garten» للجدّ في الفقرة الرابعة، لا للأمّ «Sie ist Ärztin».",
        ],
        errorType: "vocabulary",
        paragraph: 1,
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "الفقرة الثالثة — انتبه لأداة الملكية:",
        questionDe:
          "Warum heißt es «seine Freundin» und nicht «ihre Freundin»?",
        questionAr: "لماذا قيل seine Freundin لا ihre Freundin؟",
        options: [
          "Weil das Wort Freundin feminin ist",
          "Weil der Besitzer Youssef ist, also maskulin",
          "Weil Sonia an der Universität studiert",
          "Weil Amira das in der Stunde sagt",
        ],
        correctIndex: 1,
        explanation:
          "الجذر يُختار بحسب المالك، ومالك الصديقة هو يوسف وهو مذكّر ⟵ الجذر sein. أمّا النهاية ‑e فهي التي جاءت من تأنيث Freundin. فالكلمة تحمل رسالتين: جذرها يقول «مالكها رجل»، ونهايتها تقول «المملوك مؤنّث».",
        optionExplanations: [
          "تأنيث Freundin يفسّر النهاية ‑e لا الجذر sein.",
          undefined,
          "دراسة سونيا «an der Universität studiert» لا أثر لها في اختيار الأداة «sein».",
          "مجرد كون أميرة هي المتكلمة لا يحدد الجذر هنا؛ المالك المذكور في النص هو Youssef، لذلك يُستعمل sein.",
        ],
        errorType: "pronoun",
        paragraph: 2,
      },
      {
        id: "r3",
        type: "multiple-choice",
        instructionAr: "الفقرة الرابعة — من غير موجود في الصورة؟",
        questionDe: "Wer ist nicht auf dem Foto?",
        questionAr: "من ليس في الصورة؟",
        options: ["Die Oma aus Sfax", "Die Tante von Youssef", "Der Mann der Tante", "Der Opa aus Tunis"],
        correctIndex: 2,
        explanation:
          "النصّ يقول: «Ihr Mann ist nicht auf dem Foto, denn er fotografiert». في هذا السياق، ihr أداة ملكية قبل الاسم Mann وتعود على الخالة؛ ويؤكد السياق أنه هو المصوّر. لا تجعل الكلمة التالية وحدها قاعدةً عامة لتحديد كل استعمالات ihr.",
        optionExplanations: [
          "الجدّة حاضرة وتطبخ الكسكسي «Couscous»؛ والغائب «Ihr Mann ist nicht auf dem Foto».",
          "الخالة حاضرة صراحةً: Auch meine Tante ist da.",
          undefined,
          "الجدّ حاضر في الصورة «der Opa»؛ والغائب زوج الخالة «denn er fotografiert».",
        ],
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "r4",
        type: "multiple-choice",
        instructionAr: "احسب من الفقرة الثالثة:",
        questionDe: "Wie viele Geschwister hat Amira?",
        questionAr: "كم أخاً وأختاً لأميرة؟",
        options: [
          "Ein Geschwister",
          "Zwei Geschwister",
          "Drei Geschwister",
          "Keine Geschwister",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «Ich habe zwei Geschwister: einen Bruder und eine Schwester». في الاستعمال اليومي الشائع يُستعمل Geschwister جمعاً؛ أما ein Geschwister فصيغة مفردة نادرة أو تخصصية. وفي كل الأحوال يذكر النص اثنين.",
        optionExplanations: [
          "صيغة مفردة نادرة، والنصّ يذكر عدداً صريحاً: «Ich habe zwei Geschwister».",
          undefined,
          "الثلاثة تشمل أميرة نفسها؛ والنصّ «einen Bruder und eine Schwester» = اثنان.",
          "لها أخٌ وأخت صراحةً: «einen Bruder und eine Schwester»، لا «keine Geschwister».",
        ],
        errorType: "plural",
        paragraph: 2,
      },
      {
        id: "r5",
        type: "multiple-choice",
        instructionAr: "الفقرة الأخيرة — افهم الموقف:",
        questionDe: "Wie hält Amira Kontakt zu ihrer Familie?",
        questionAr: "كيف تبقى أميرة على تواصل مع عائلتها؟",
        options: [
          "Sie besucht sie jeden Monat in Tunis",
          "Sie schreibt jeden Tag lange Briefe",
          "Sie telefoniert jeden Sonntag mit ihren Eltern",
          "Sie wohnt bei ihren Großeltern in Tunis",
        ],
        correctIndex: 2,
        explanation:
          "النصّ يقول: «jeden Sonntag telefoniere ich mit meinen Eltern»؛ ومنه نعرف أنها تتصل بوالديها كل يوم أحد. هذا بند فهم قرائي؛ وورود ترتيب الكلمات في الجملة ليس ما يقيسه السؤال.",
        optionExplanations: [
          "لم تُذكر زيارات؛ العائلة weit weg.",
          "لم تُذكر رسائل «Briefe schreiben»؛ بل «jeden Sonntag telefoniere ich mit meinen Eltern».",
          undefined,
          "أميرة تسكن اليوم في ألمانيا؛ فلا يصحّ «Sie wohnt bei ihren Großeltern in Tunis».",
        ],
        errorType: "vocabulary",
        paragraph: 4,
      },
    ],
    redemittel: [
      {
        de: "Das ist ein Foto von meiner Familie.",
        ar: "هذه صورة لعائلتي.",
      },
      {
        de: "Links steht … / Rechts sitzt … / In der Mitte bin ich.",
        ar: "على اليسار يقف… / على اليمين يجلس… / في الوسط أنا.",
      },
      {
        de: "Ich habe zwei Geschwister: einen Bruder und eine Schwester.",
        ar: "لديّ أخ وأخت.",
      },
      {
        de: "Meine Mutter ist Ärztin und mein Vater ist Lehrer.",
        ar: "أمّي طبيبة وأبي معلّم.",
      },
      {
        de: "Meine Eltern sind seit … Jahren verheiratet.",
        ar: "والداي متزوّجان منذ … سنة.",
      },
      {
        de: "Jeden Sonntag telefoniere ich mit meiner Familie.",
        ar: "أتّصل بعائلتي كلّ يوم أحد.",
      },
    ],
    discussionAr:
      "اكتب أو قل وصفاً لصورة حقيقية أو متخيّلة على منوال أميرة؛ لا حاجة إلى مشاركة صورة شخصية أو معلومات خاصة. ابدأ بـ Das ist ein Foto von …، ثم استخدم links / rechts / in der Mitte، واذكر ما تعرفه عن الأشخاص وصلتهم بك. جرّب mein/meine وsein/ihr في سياق مناسب، ثم راجع: من المالك؟ وما الاسم المملوك؟ وهل الصيغة في حالة الرفع؟",
  };

/* 5) الاستماع */
export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "حديث عن العائلة",
        lines: [
          {
            speaker: "Mona",
            de: "Hallo Karim! Hast du Geschwister?",
            ar: "مرحباً كريم! هل لديك إخوة أو أخوات؟",
          },
          {
            speaker: "Karim",
            de: "Ja, ich habe einen Bruder und eine Schwester.",
            ar: "نعم، لدي أخ وأخت.",
          },
          { speaker: "Mona", de: "Wie heißen sie?", ar: "ما اسماهما؟" },
          {
            speaker: "Karim",
            de: "Mein Bruder heißt Youssef und meine Schwester heißt Nour.",
            ar: "أخي اسمه يوسف وأختي اسمها نور.",
          },
          { speaker: "Mona", de: "Und deine Eltern?", ar: "ووالداك؟" },
          {
            speaker: "Karim",
            de: "Meine Eltern wohnen in Tunis.",
            ar: "والداي يسكنان في تونس.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Geschwister hat Karim?",
        questionAr: "كم أخاً وأختاً لدى كريم؟",
        options: [
          "einen Bruder und eine Schwester",
          "zwei ältere Brüder und keine Schwester",
          "eine kleine Schwester, aber keinen Bruder",
          "gar keine Geschwister, er ist allein",
        ],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — لم يُذكر أخوان ولا صفة «älter»؛ وكريم يقول: «Ja, ich habe einen Bruder und eine Schwester».", "لا — النفي عكسُ المسموع؛ فأخوه مذكورٌ بالاسم: «Mein Bruder heißt Youssef».", "لا — هذا نفيٌ صريح لخلاف المسموع: «Ja, ich habe einen Bruder und eine Schwester»."],
        explanation:
          "قال كريم: ich habe einen Bruder und eine Schwester — أخ واحد وأخت واحدة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo wohnen die Eltern von Karim?",
        questionAr: "أين يسكن والدا كريم؟",
        options: ["in Sousse", "in Tunis", "in Berlin", "in Kairouan"],
        correctIndex: 1,
        optionExplanations: ["لا — سوسة لم تُذكر في الحوار؛ وكريم يقول: «Meine Eltern wohnen in Tunis».", undefined, "لا — برلين موضع الحديث مع منى لا سكن الوالدين؛ والمسموع: «Meine Eltern wohnen in Tunis».", "لا — القيروان لم تُذكر إطلاقاً؛ والجواب المسموع «in Tunis»."],
        explanation: "قال كريم: Meine Eltern wohnen in Tunis.",
        errorType: "vocabulary",
      },
    ],
  };

/* 6) النطق */
export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات الأسرة: ch وsch وw",
    items: [
      {
        de: "ich",
        ar: "أنا",
        note: "[ɪç]: احتكاك حنكي خفيف بعد i. لا يطابق الشين [ʃ] ولا الخاء العربية الخلفية [x] تماماً؛ استمع إلى الصوت وقلّده برفق.",
      },
      { de: "Bruder", ar: "الأخ", note: "النطق التقريبي [ˈbʁuːdɐ]؛ u طويلة، وr الأخيرة تختلف باختلاف اللهجة." },
      { de: "Schwester", ar: "الأخت", note: "[ˈʃvɛstɐ]: sch مثل ش، وe قصيرة [ɛ] لا ياء طويلة؛ w تُنطق قريباً من ڤ." },
      { de: "Tochter", ar: "الابنة", note: "[ˈtɔxtɐ]: ch هنا [x]، قريب من الخاء العربية، وo قصيرة." },
      {
        de: "Geschwister",
        ar: "الإخوة والأخوات",
        note: "[ɡəˈʃvɪstɐ]: يبدأ المقطع بـg ألمانية [ɡ] ثم sch؛ لا يُنطق غيناً [ɣ].",
      },
    ],
    tip: "يوجد في الألمانية صوتان كتابيان لـch: Ich-Laut [ç] بعد الحركات الأمامية مثل i، وAch-Laut [x] غالباً بعد الحركات الخلفية مثل a/o/u. هذه تقريبات صوتية؛ لا تساوِ [ç] بالشين أو بالخاء العربية.",
    shadowing: [
      {
        de: "Mein Bruder heißt Youssef.",
        ar: "أخي اسمه يوسف.",
        tip: "Mein = مايْن (ei = آي)",
      },
      {
        de: "Meine Schwester heißt Nour.",
        ar: "أختي اسمها نور.",
        tip: "Meine = ماي-نِه",
      },
      {
        de: "Meine Eltern wohnen in Tunis.",
        ar: "والداي يسكنان في تونس.",
        tip: "wohnen = ڤوه-نِن (wo تنطق ڤو)",
      },
      {
        de: "Das ist meine Familie!",
        ar: "هذه عائلتي!",
        tip: "Familie = فا-مي-ليِه (3 مقاطع)",
      },
    ],
  };

/* 7) الكتابة */
export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة عن والد أميرة مستخدماً الاسم المعطى:",
      prompt: "Das ist mein Vater. Er heißt Ahmed. (أعد كتابة المعلومتين بجملة تبدأ بـ „Mein Vater …“)",
      acceptedAnswers: [
        "Mein Vater heißt Ahmed",
        "Mein Vater heißt Ahmed.",
      ],
      sampleAnswer: "Mein Vater heißt Ahmed.",
      explanation:
        "يُذكر الاسم بالفعل heißen: Mein Vater heißt Ahmed. الاسم Ahmed موجود في نص السؤال، لذا لا تحتاج إلى تخمينه.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein أو meine:",
      template: "Das ist ___ Vater. Das ist ___ Mutter. Das ist ___ Kind.",
      blanks: [
        { correct: "mein", options: ["mein", "meine"] },
        { correct: "meine", options: ["mein", "meine"] },
        { correct: "mein", options: ["mein", "meine"] },
      ],
      explanation: "Vater مذكر → mein. Mutter مؤنث → meine. Kind محايد → mein.",
      errorType: "gender",
    },
  ];

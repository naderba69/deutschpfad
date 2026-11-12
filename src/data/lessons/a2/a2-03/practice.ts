/**
 * a2-03 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-03.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Salat bestellen.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«möchtest» تصريف du، والفاعل هنا «Ich».",
        "«möchten» مع wir/sie/Sie، لا مع ich.",
        "«möchtet» مع ihr؛ لا يطابق «Ich». ",
      ],
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر التصريف مع المخاطب الرسمي Sie، سواء أخاطبتَ شخصاً واحداً أو أكثر:",
      questionDe: "___ Sie mir helfen?",
      options: ["Können", "Kann", "Kannst", "Könnt"],
      correctIndex: 0,
      explanation:
        "مع Sie الرسمية، سواء خاطبتَ شخصاً واحداً أو أكثر، نستخدم können. لا تدلّ صيغة المخاطبة الرسمية وحدها على أن المخاطَبين جمع.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«Kann» تصريف ich أو er/sie/es؛ مع «Sie» الرسمية تبقى صيغة المصدر «können».",
        "«Kannst» مع du، و«Sie» ليست du.",
        "«Könnt» مع ihr؛ أما Sie فتأخذ «können» بلا تغيير. ",
      ],
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل عبارة المطعم بمعناها:",
      pairs: [
        { left: "die Speisekarte", right: "قائمة الطعام" },
        { left: "die Rechnung", right: "الحساب" },
        { left: "der Kellner", right: "النادل" },
        { left: "das Getränk", right: "المشروب" },
      ],
      explanation: "أربع مفردات مرتبطة بمشهد المطعم في هذا الدرس.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة في الصيغة التي تبدأ بـ Ich:",
      tokens: ["möchte", "Ich", "die", "Suppe", "bestellen", "."],
      correctSentence: "Ich möchte die Suppe bestellen.",
      explanation: "Ich + möchte + die Suppe + bestellen (في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich möchte trinken einen Kaffee.",
      wrongWord: "trinken einen Kaffee",
      correctWord: "einen Kaffee trinken",
      options: [
        "einen Kaffee trinken",
        "trinken ein Kaffee",
        "ein Kaffee trinken",
        "trinke einen Kaffee",
      ],
      explanation: "الإطار: möchte + المفعول + الفعل الأساسي في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ schmeckt/schmecken:",
      template: "Das ___ gut. Die Suppe ___ lecker. Wie ___ es?",
      blanks: [
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
      ],
      explanation: "schmeckt مع المفرد (das, die Suppe, es).",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اطلب الحساب بإحدى الصيغ المناسبة للمشهد:",
      prompt: "(النادل اقترب — اطلب الحساب)",
      acceptedAnswers: [
        "Die Rechnung, bitte!",
        "Ich möchte zahlen, bitte!",
        "Ich möchte bitte zahlen.",
        "Ich hätte gern die Rechnung, bitte.",
        "Ich möchte bitte die Rechnung.",
        "Könnten Sie mir bitte die Rechnung bringen?",
        "Könnte ich bitte die Rechnung haben?",
      ],
      sampleAnswer: "Die Rechnung, bitte!",
      explanation:
        "Die Rechnung, bitte! وIch möchte zahlen وIch hätte gern die Rechnung وKönnten Sie mir bitte die Rechnung bringen? صيغ ممكنة لهذا الطلب؛ يتغير الاختيار بحسب الموقف.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wie schmeckt es?",
      questionAr: "ما معنى السؤال؟",
      options: ["كيف الطعم؟", "بكم هذا؟", "ماذا تريد؟", "أين المطعم؟"],
      correctIndex: 0,
      explanation: "Wie + schmeckt es = كيف طعمه؟",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "السؤال عن السعر هو «Was kostet das?» لا «Wie schmeckt es?».",
        "«ماذا تريد؟» تقابلها «Was möchten Sie?».",
        "سؤال المكان «Wo ist das Restaurant?» لا علاقة له بـ«schmecken». ",
      ],
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich möchte zahlen die Rechnung.",
      wrongWord: "zahlen die Rechnung",
      correctWord: "die Rechnung zahlen",
      options: [
        "die Rechnung zahlen",
        "zahlen der Rechnung",
        "bezahlen die Rechnung",
        "der Rechnung zahlen",
      ],
      explanation: "الفعل الأساسي في النهاية: möchte die Rechnung zahlen.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Suppe schmeckt mir sehr gut.",
      explanation: "الحساء طعمه جيد جداً عندي — schmeckt + Dativ (mir).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الفعل الصحيحة (schmecken) بحسب الفاعل:",
      template:
        "Das Essen ___ mir gut. Die Nudeln ___ mir nicht. Die Suppe ___ ihm.",
      blanks: [
        { correct: "schmeckt", options: ["schmeckt", "schmecken", "schmecke"] },
        {
          correct: "schmecken",
          options: ["schmecken", "schmeckt", "schmecke"],
        },
        { correct: "schmeckt", options: ["schmeckt", "schmecken", "schmecke"] },
      ],
      explanation:
        "الفعل يتبع الفاعل النحوي: das Essen مفرد ⇒ schmeckt · die Nudeln جمع ⇒ schmecken · die Suppe مفرد ⇒ schmeckt.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر معنى الجملة في هذا السياق:",
      questionDe: "Die Suppe schmeckt mir sehr gut.",
      questionAr: "ماذا تعني الجملة؟",
      options: [
        "مذاق الشوربة طيب جداً بالنسبة إليّ.",
        "أنا أتذوق الشوربة الآن.",
        "الشوربة تذوقني جيداً.",
        "أعجبتني الشوربة من ناحية شكلها فقط.",
      ],
      correctIndex: 0,
      explanation:
        "Die Suppe schmeckt mir sehr gut تصف المذاق بالنسبة إلى الشخص. أمّا Ich schmecke die Suppe فيمكن أن تعني «أتذوق الشوربة»، وهي جملة صحيحة بمعنى آخر.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "ذلك معنى «Ich schmecke die Suppe» بفاعل أنا، لا بنية «Die Suppe schmeckt mir».",
        "ترجمة حرفية خاطئة: «mir» في Dativ تدلّ على من يستطيب الطعم لا على مفعول به.",
        "«schmeckt» عن الطعم لا عن الشكل؛ الشكل يوصف بـ«sieht gut aus». ",
      ],
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "النادل يسألك عن رأيك في الحساء. أيّ صيغة صحيحة؟",
      questionDe: "Wie ___ Ihnen die Suppe?",
      questionAr: "كيف تجد الحساء؟",
      options: ["schmeckt", "schmecken", "schmecke", "schmeckst"],
      correctIndex: 0,
      explanation:
        "die Suppe مفرد وهي الفاعل ⇒ schmeckt. وIhnen في الـDativ لا تؤثّر في الفعل.",
      optionExplanations: [
        undefined,
        "schmecken للجمع، والحساء مفرد.",
        "schmecke لـ ich، وich ليست فاعل الجملة هنا.",
        "schmeckst لـ du، وdu ليست الفاعل.",
      ],
      errorType: "conjugation",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في صيغة ممكنة لتقول إنّ مذاق المعكرونة لا يروق لك:",
      tokens: ["Die", "Nudeln", "schmecken", "mir", "nicht", "."],
      correctSentence: "Die Nudeln schmecken mir nicht.",
      acceptedSentences: ["Mir schmecken die Nudeln nicht."],
      explanation:
        "الترتيب النموذجي هنا يبدأ بالفاعل: Die Nudeln schmecken mir nicht. ويصحّ أيضاً تقديم mir: Mir schmecken die Nudeln nicht؛ يتبع الفعل المصرف في الجملة الخبرية أحد عناصر المقدّمة.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr:
        "حوّل الجملة إلى البنية الألمانية الصحيحة (الطعام فاعلاً).",
      prompt:
        "مثّل أن الكعكة تروق لك باستخدام gefallen (der Kuchen)، لا بوصف مذاقها.",
      acceptedAnswers: ["Der Kuchen gefällt mir.", "Mir gefällt der Kuchen."],
      sampleAnswer: "Der Kuchen gefällt mir.",
      explanation:
        "في هذا المثال Der Kuchen هو الفاعل وmir في Dativ. استُخدم gefallen للانطباع المقصود، لا بوصفه مرادفاً وحيداً لكل معاني الإعجاب.",
      errorType: "case",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr:
        "حدّد الجملة التي تستعمل صيغة التدريب Ich hätte gern؛ المقصود اختيار التركيب، لا ترتيب الصيغ على سلّم ثابت.",
      questionDe: "Welche Formulierung verwendet „Ich hätte gern“ für eine Bestellung?",
      options: [
        "Ich hätte gern einen Kaffee, bitte.",
        "Ich möchte einen Kaffee, bitte.",
        "Ich nehme einen Kaffee.",
        "Ich mag einen Kaffee.",
      ],
      correctIndex: 0,
      explanation:
        "الأولى تستعمل الصيغة المطلوبة. möchte وnehme بديلان صحيحان في سياقات مناسبة، وmag يعبّر هنا عن الميل لا عن طلب واضح؛ لا يعني ذلك أن البدائل الأخرى ممنوعة أو وقحة دائماً.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "صياغة صحيحة ومهذّبة لكنها تستعمل «möchte» لا الصيغة المطلوبة «Ich hätte gern».",
        "«Ich nehme einen Kaffee» صيغة طلب معتادة، لكنها ليست «Ich hätte gern».",
        "«Ich mag einen Kaffee» يعبّر عن الميل لا عن تركيب «hätte gern». ",
      ],
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich hätte gern ein Salat.",
      wrongWord: "ein",
      correctWord: "einen",
      options: ["einen", "ein", "eine", "einem"],
      explanation:
        "hätte gern تنصب مفعولها: der Salat ⟵ einen Salat. والتأدّب لا يُعفي من الإعراب.",
      errorType: "case",
    },
    {
      id: "e18",
      type: "fill-blank",
      instructionAr:
        "أكمل بالتصريف الصحيح لـschmecken (انتبه: مع الشيء لا مع الشخص)",
      template: "Das Essen ___ mir sehr gut. · Die Nudeln ___ mir nicht.",
      blanks: [
        {
          correct: "schmeckt",
          options: ["schmeckt", "schmecken", "schmecke", "geschmeckt"],
          errorType: "conjugation",
        },
        {
          correct: "schmecken",
          options: ["schmecken", "schmeckt", "schmeckst", "schmecke"],
          errorType: "conjugation",
        },
      ],
      explanation:
        "في هاتين الجملتين يتبع الفعل الفاعل النحوي: das Essen مفرد ⟵ schmeckt، وdie Nudeln جمع ⟵ schmecken. ضمير الشخص في Dativ لا يتحكم في التصريف.",
      errorType: "conjugation",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح حالة الضمير في هذا المثال عن المذاق:",
      wrongSentence: "Das Essen schmeckt ich sehr gut.",
      wrongWord: "ich",
      correctWord: "mir",
      options: ["mir", "mich", "ich", "meine"],
      explanation:
        "في هذا المعنى يكون Das Essen فاعلاً، ويأتي الشخص المتأثر بالمذاق في Dativ: mir. المطلوب استبدال الضمير القصير فقط.",
      errorType: "case",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "الشوربة ساخنةٌ جداً. أيّ صفةٍ تصف حرارتها؟",
      questionDe: "Die Temperatur der Suppe ist sehr hoch. Sie ist ...",
      options: ["heiß", "scharf", "warm", "trocken"],
      correctIndex: 0,
      explanation:
        "heiß يصف الحرارة العالية هنا؛ أما scharf فيصف الطعم الحارّ/اللاذع.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«scharf» للطعم اللاذع/الحارّ، أما درجة الحرارة فهي «heiß».",
        "«warm» دافئ، و«sehr hoch» في السؤال تستدعي «heiß».",
        "«trocken» للجفاف (كسمك القصة «zu trocken»)، لا للحرارة. ",
      ],
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr:
        "أكمل صيغة المعدود في المثالين؛ في الفراغ الثاني نعدّ كؤوس شرب فعلية، لا كمية مشروب.",
      template:
        "Zwei ___ Kaffee, bitte. · Auf dem Tisch stehen drei leere ___. (Trinkgläser)",
      blanks: [
        {
          correct: "Tassen",
          options: ["Tassen", "Tasse", "Tassens", "Tassenen"],
          errorType: "plural",
        },
        {
          correct: "Gläser",
          options: ["Gläser", "Glas", "Gläsern", "Glases"],
          errorType: "plural",
        },
      ],
      explanation:
        "Tassen جمعٌ للأكواب المعدودة، وGläser جمعٌ للكؤوس الفعلية على الطاولة. هذا لا يضع قاعدةً لكل وحدات القياس؛ فـDuden يورد مثلاً استعمال zwei Glas Wein في سياق كمية مشروب.",
      errorType: "plural",
    },
    {
      id: "e22",
      type: "fill-blank",
      instructionAr:
        "أكمل الصيغة التي تجعل الصفة اسماً بعد etwas؛ المطلوب هنا تمييز الكتابة الاسمية الكبيرة من الصيغة الصحيحة etwas warm essen.",
      template: "Ich möchte etwas ___ essen.",
      blanks: [
        {
          correct: "Warmes",
          options: ["Warmes", "Warm", "Warme", "Warmem"],
          errorType: "grammar",
        },
      ],
      explanation:
        "في هذا التركيب المحدد نقول etwas Warmes: تُكتب الصفة اسماً بحرف كبير وتأتي هنا النهاية -es. والجملة Ich möchte etwas warm essen صحيحة أيضاً وقريبة المعنى، لكن warm فيها ليست اسماً؛ لذلك لا تصلح جواباً للصيغة الاسمية المطلوبة.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "word-ordering",
      instructionAr:
        "رتّب الطلب بالصيغة المستهدفة «hätte gern + المفعول»، وانتبه إلى V2 بعد التقديم:",
      tokens: ["Als", "Vorspeise", "hätte", "ich", "gern", "die", "Suppe"],
      correctSentence: "Als Vorspeise hätte ich gern die Suppe",
      explanation:
        "في هذه الصيغة والجملة الرئيسية، تأتي العبارة المتقدمة Als Vorspeise في الموقع الأول، ثم الفعل المصرف hätte في الموقع الثاني من بنية الجملة، يليه الفاعل ich؛ وتأتي هنا صيغة gern قبل المفعول die Suppe.",
      errorType: "word-order",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ سؤالٍ بجوابه المناسب في هذا المشهد",
      pairs: [
        { left: "Haben Sie reserviert?", right: "Ja, auf den Namen Haddad." },
        {
          left: "Was möchten Sie trinken?",
          right: "Ein stilles Wasser, bitte.",
        },
        { left: "Schmeckt es Ihnen?", right: "Ja, ausgezeichnet, danke!" },
        { left: "Zusammen oder getrennt?", right: "Getrennt, bitte." },
      ],
      explanation:
        "هذه أربعة أزواج سؤال وجواب مأخوذة من مشاهد الدرس؛ ترتيب الخطوات وصياغة الأسئلة يختلفان بحسب الموقف.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "true-false",
      instructionAr: "اقرأ تفاصيل الموقف نفسه ثمّ احكم على العبارات",
      textDe:
        "Herr Haddad sitzt im Gasthaus. Der Kellner fragt: „Hat es Ihnen geschmeckt?“ Herr Haddad antwortet: „Der Fisch war ein bisschen trocken, aber die Suppe war ausgezeichnet.“ Der Kellner entschuldigt sich und bringt dem Bruder einen neuen Teller. Die Rechnung beträgt 21,40 Euro. Herr Haddad rundet freiwillig auf 23 Euro auf und gibt 1,60 Euro Trinkgeld.",
      statements: [
        {
          id: "s1",
          de: "Herr Haddad sagt, dass der Fisch ein bisschen trocken war.",
          ar: "يقول السيد حدّاد إن السمك كان جافاً بعض الشيء.",
          isTrue: true,
          whyAr: "ورد ذلك صراحةً في الحوار.",
        },
        {
          id: "s2",
          de: "Die Suppe war für ihn ausgezeichnet.",
          ar: "كانت الشوربة ممتازةً بالنسبة إليه.",
          isTrue: true,
          whyAr: "قال: „Die Suppe war ausgezeichnet.“",
        },
        {
          id: "s3",
          de: "Herr Haddad gibt in diesem Beispiel 1,60 Euro Trinkgeld.",
          ar: "يعطي السيد حدّاد إكراميةً قدرها ١٫٦٠ يورو في هذا المثال.",
          isTrue: true,
          whyAr: "يذكر النص ذلك صراحةً: الحساب 21,40 والإجمالي 23 يورو.",
        },
        {
          id: "s4",
          de: "Der Kellner hat dem Bruder keinen neuen Teller gebracht.",
          ar: "لم يُحضر النادل طبقاً جديداً للأخ.",
          isTrue: false,
          whyAr: "النص يقول إن النادل اعتذر وأحضر له طبقاً جديداً.",
        },
      ],
      explanation:
        "تحقّق من العبارات مقابل تفاصيل النص؛ مبلغ الإكرامية في هذا الموقف حدث قصصي محدد، لا قاعدة عن كل المطاعم.",
      errorType: "vocabulary",
    },
    {
      id: "e26",
      type: "transformation",
      instructionAr:
        "أعِد صياغة الجملة باستعمال Ich hätte gern؛ المطلوب التدريب على صيغة شائعة أخرى، لا الحكم بأن الأصل خطأ أو وقح دائماً.",
      prompt: "Ich will eine Suppe. → (mit Ich hätte gern …)",
      acceptedAnswers: [
        "Ich hätte gern eine Suppe.",
        "Ich hätte gern eine Suppe",
      ],
      sampleAnswer: "Ich hätte gern eine Suppe.",
      hint: "hätte gern + مفعولٌ منصوب، بلا فعلٍ ثانٍ.",
      explanation:
        "تدرّب هنا على إعادة التعبير بصيغة Ich hätte gern. Ich will eine Suppe صحيحة نحوياً، وقد تبدو أكثر مباشرةً بحسب السياق والنبرة؛ لا يوجد سلّم تهذّب ثابت.",
      errorType: "grammar",
    },
    {
      id: "e27",
      type: "multiple-choice",
      instructionAr: "اختر تصريف passen الذي يوافق الفاعل في هذا المثال:",
      questionDe: "Der Termin ___ mir gut.",
      questionAr: "أي تصريف يلائم الفاعل Der Termin؟",
      options: ["passt", "passen", "passe", "gefallen"],
      correctIndex: 0,
      explanation:
        "Der Termin فاعل مفرد، لذا نقول passt؛ وmir متمّم Dativ لا يغيّر تصريف الفعل. هنا passen بمعنى يناسب/يلائم في هذا السياق.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«passen» صيغة الجمع، والفاعل «Der Termin» مفرد ⇒ «passt».",
        "«passe» مع ich، والفاعل «Der Termin» من الغائب.",
        "«gefallen» يعطي ترتيباً آخر «Der Termin gefällt mir» بمعنى يعجب، لا بمعنى يناسب الموعد. ",
      ],
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich möchte trinken einen Kaffee.",
        right: "Ich möchte einen Kaffee trinken.",
        whyAr: "الفعل الأساسي في نهاية الجملة (الإطار).",
      },
      {
        wrong: "Das Essen schmeckt mich gut.",
        right: "Das Essen schmeckt mir gut.",
        whyAr: "في هذا المثال التقييمي يأتي الشخص المعني بالمذاق في Dativ: mir.",
      },
      {
        wrong: "Kannst du mich helfen",
        right: "Kannst du mir helfen?",
        whyAr: "helfen يأخذ Dativ: mir وليس mich.",
      },
    ],
    eselsbruecken: [
      "للطلب في المثال: Ich möchte …, bitte. ويمكن اختيار صيغ أخرى بحسب الموقف.",
      "lecker تعني لذيذ: Das schmeckt lecker! مثال ممكن لوصف الطعم.",
    ],
    culturalNote: {
      title: "إكرامية: مثال محلي لا قاعدة عامة",
      content:
        "يصف دليل الزوار في Berlin.de الإكرامية بأنها طوعية، ويذكر التقريب أو 5–10% في بعض سياقات الجلوس، بينما يورد visitBerlin 10–15% للمطاعم. تختلف الأرقام بين الدليلين، وهي إرشادات محلية لا نسبة إلزامية ولا قاعدة عامة. في مثال نقدي، يمكن تحديد المبلغ الإجمالي بقول «Zwanzig, bitte»؛ وتتبع طريقة الدفع الفعلية تعليمات المكان.",
    },
  };

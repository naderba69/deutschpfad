/**
 * a1-03 — المهارات: قراءة و استماع و نطق و كتابة (الجزء «skills»)
 * فُصل من a1-03.ts في الدفعة 88 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    "id": "read-a1-03",
    "titleDe": "Im Café Sonnenblume",
    "titleAr": "في مقهى عبّاد الشمس",
    "textType": "dialog",
    "paragraphs": [
      "Kellner: Guten Tag! Was möchten Sie trinken?\nAmira: Guten Tag. Ich möchte einen Kaffee, bitte. Mit Milch, aber ohne Zucker.\nKellner: Gern. Und Sie?\nYoussef: Ich nehme einen Tee. Haben Sie auch Mineralwasser?\nKellner: Ja, natürlich.\nYoussef: Dann ein Mineralwasser, bitte.",
      "Kellner: Möchten Sie auch etwas essen? Wir haben heute Suppe, Salat und Käsebrötchen.\nAmira: Ich habe großen Hunger! Ich nehme die Suppe und ein Käsebrötchen.\nYoussef: Für mich nur einen Salat, bitte. Ich bin nicht sehr hungrig.",
      "Kellner: Sie möchten also einen Kaffee mit Milch, einen Tee, ein Mineralwasser, die Suppe, ein Käsebrötchen und einen Salat. Ist das richtig?\nAmira: Ja, das ist richtig. Vielen Dank!\nKellner: Einen Moment bitte, das Essen kommt gleich.",
      "Youssef: Der Salat ist wirklich frisch. Wie ist deine Suppe?\nAmira: Sie ist sehr gut, aber ein bisschen heiß. Möchtest du probieren?\nYoussef: Nein, danke. Ich habe keinen Hunger mehr, aber noch Durst. Entschuldigung, noch ein Glas Wasser bitte!",
      "Amira: Entschuldigung, die Rechnung bitte! Wie viel macht das?\nKellner: Das macht zusammen zwanzig Euro fünfzig.\nAmira: Hier sind fünfundzwanzig Euro. Stimmt so.\nKellner: Vielen Dank und einen schönen Tag noch!"
    ],
    "paragraphsAr": [
      "النادل: مرحباً! ماذا تودّان أن تشربا؟\nأميرة: مرحباً. أريد قهوةً من فضلك، مع الحليب ومن دون سكر.\nالنادل: بكل سرور. وماذا عنك؟\nيوسف: سأطلب شايًا. هل لديكم ماء معدني أيضاً؟\nالنادل: نعم، بالطبع.\nيوسف: إذن ماءً معدنياً أيضاً، من فضلك.",
      "النادل: هل تودّان تناول شيء أيضاً؟ لدينا اليوم حساء وسلطة وخبز صغير بالجبن.\nأميرة: أنا جائعة جداً! سأطلب الحساء وخبزةً صغيرة بالجبن.\nيوسف: أريد سلطةً فقط من فضلك. لست جائعاً جداً.",
      "النادل: إذن ستطلبان قهوةً بالحليب، وشاياً، وماءً معدنياً، والحساء، وخبزةً صغيرة بالجبن، وسلطةً. أهذا صحيح؟\nأميرة: نعم، هذا صحيح. شكراً جزيلاً!\nالنادل: لحظة من فضلكما، سيأتي الطعام بعد قليل.",
      "يوسف: السلطة طازجة حقاً. كيف حساؤك؟\nأميرة: إنها لذيذة جداً، لكنها ساخنة قليلاً. هل تريد أن تتذوق؟\nيوسف: لا، شكراً. لم أعد جائعاً، لكنني ما زلت عطشان. عفواً، كأس ماء آخر من فضلك!",
      "أميرة: عفواً، الفاتورة من فضلك! كم الحساب؟\nالنادل: المجموع عشرون يورو وخمسون سنتاً.\nأميرة: تفضّل خمسةً وعشرين يورو، واحتفظ بالباقي.\nالنادل: شكراً جزيلاً، وأتمنى لكما يوماً سعيداً!"
    ],
    "glossary": [
      {
        "de": "der Kellner",
        "ar": "النادل",
        "noteAr": "للمؤنث نقول die Kellnerin. ويمكن لفت انتباه النادل بقول Entschuldigung!؛ وهي عبارة مهذبة شائعة في الخدمة."
      },
      {
        "de": "möchten",
        "ar": "يودّ / يريد",
        "noteAr": "تُستعمل كثيراً في الطلب المهذب: Ich möchte … / Möchten Sie …? تعلّمها في هذه العبارات؛ أما will فهي صيغة أخرى أكثر مباشرة بحسب السياق."
      },
      {
        "de": "ohne Zucker",
        "ar": "بلا سكّر",
        "noteAr": "الحرف ohne ينصب ما بعده دائماً: ohne den Kaffee. وضدّه mit الذي يجرّ (Dativ): mit Milch."
      },
      {
        "de": "das Mineralwasser",
        "ar": "الماء المعدني",
        "noteAr": "اسم مركّب محايد؛ في Mineralwasser يحدّد الاسم الأخير Wasser جنس المركّب. ولتمييز النوعين يقال مثلاً Mineralwasser mit Kohlensäure (فوّار) أو stilles Wasser (غير فوّار)."
      },
      {
        "de": "das Brötchen",
        "ar": "خبزة صغيرة",
        "noteAr": "Brötchen تعني خبزة صغيرة، وهي تصغير لـBrot. الأسماء المصغّرة المنتهية بـ‑chen محايدة في الألمانية القياسية؛ وجمع Brötchen لا يغيّر شكل الاسم."
      },
      {
        "de": "hungrig / satt",
        "ar": "جائع / شبعان",
        "noteAr": "صفتان تُبنيان بـsein: Ich bin hungrig / satt. وقارن بالاسم: Ich habe Hunger — اسمٌ مع haben وصفةٌ مع sein."
      },
      {
        "de": "frisch",
        "ar": "طازج",
        "noteAr": "صفة تعني طازج. وفي وصف الطعام قد تعني alt قديماً أو غير طازج؛ ويتحدد المعنى بالسياق."
      },
      {
        "de": "probieren",
        "ar": "يذوق / يجرّب",
        "noteAr": "في هذا المثال يأخذ الفعل مفعولاً به: Ich probiere die Suppe (أتذوق الحساء)."
      },
      {
        "de": "die Rechnung",
        "ar": "الفاتورة",
        "noteAr": "Rechnung مؤنثة: die Rechnung. اللاحقة الاشتقاقية ‑ung علامة قوية على التأنيث؛ والعبارة الجاهزة: Die Rechnung, bitte!"
      },
      {
        "de": "zusammen / getrennt",
        "ar": "معاً / منفصلين",
        "noteAr": "قد يسأل النادل عند الدفع: Zusammen oder getrennt? أي: هل تدفعون معاً أم كلٌّ على حدة؟"
      },
      {
        "de": "Stimmt so.",
        "ar": "احتفظ بالباقي.",
        "noteAr": "يقولها الزبون عند الدفع إذا أراد من النادل الاحتفاظ بالباقي؛ معناها التقريبي «هكذا مناسب». لا توجد نسبة بقشيش واحدة تلزم كل موقف."
      },
      {
        "de": "gleich",
        "ar": "حالاً / بعد قليل",
        "noteAr": "ظرف زمان يفيد القرب الشديد. وله معنىً آخر صفةً: مساوٍ، متماثل (gleich groß = متساويان في الطول)."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأولى — ماذا طلبت أميرة؟",
        "questionDe": "Was bestellt Amira zum Trinken?",
        "questionAr": "ماذا طلبت أميرة لتشربه؟",
        "options": [
          "Einen Tee ohne Milch und Zucker",
          "Einen Kaffee mit Milch und ohne Zucker",
          "Ein Mineralwasser mit Zitrone",
          "Eine warme Suppe mit Brot"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich möchte einen Kaffee, bitte. Mit Milch, aber ohne Zucker». والشاي والماء المعدني طلبهما يوسف، والشوربة طعام لا شراب.",
        "optionExplanations": [
          "الشاي «einen Tee» طلبه يوسف؛ وأميرة قالت «Ich möchte einen Kaffee, bitte».",
          undefined,
          "الماء المعدني «Ein Mineralwasser mit Zitrone» سأل عنه يوسف، لا أميرة.",
          "الشوربة «Eine warme Suppe mit Brot» طعام؛ والسؤال عن الشراب «zum Trinken»."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثانية — لماذا اختلف الطلبان؟",
        "questionDe": "Warum nimmt Youssef nur einen Salat?",
        "questionAr": "لماذا اكتفى يوسف بسلطة؟",
        "options": [
          "Weil der Salat billig ist",
          "Weil er nicht sehr hungrig ist",
          "Weil er kein Geld hat",
          "Weil die Suppe zu heiß ist"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich bin nicht sehr hungrig». ولاحظ البناء: hungrig **صفة** فتُبنى بـsein وتُنفى بـnicht — لا بـkein. ولو قال الاسم لقال: Ich habe keinen Hunger.",
        "optionExplanations": [
          "السعر «billig» لم يُذكر عند الطلب؛ والسبب «Ich bin nicht sehr hungrig».",
          undefined,
          "لم يُذكر مال «kein Geld»؛ وأميرة دفعت الحساب في النهاية.",
          "حرارة الشوربة «zu heiß» ذُكرت لاحقاً وتخصّ أميرة، لا سبب طلب يوسف «nur einen Salat»."
        ],
        "errorType": "grammar",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — اختر الصيغة المناسبة:",
        "questionDe": "Welche Ergänzung passt? „Ich habe ___ Hunger mehr.“",
        "questionAr": "ما الكلمة المناسبة لإكمال الجملة؟",
        "options": [
          "keinen",
          "nicht",
          "keine",
          "kein"
        ],
        "correctIndex": 0,
        "explanation": "في هذا التعبير نقول Ich habe keinen Hunger mehr؛ Hunger مذكّر في النصب بعد haben، فتأتي صيغة kein على صورة keinen. لا تعمم أن nicht لا يأتي مطلقاً مع الأسماء؛ فقد ينفي عبارة محددة بحسب السياق.",
        "optionExplanations": [
          undefined,
          "في هذه الجملة المحايدة لا تناسب nicht؛ النفي المعتاد للاسم غير المحدد هو kein.",
          "keine لا توافق Hunger المذكر في هذه الجملة.",
          "kein بصيغتها هذه لا توافق المذكر في النصب؛ الصواب keinen."
        ],
        "errorType": "negation",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الخامسة — الحساب:",
        "questionDe": "Wie viel Trinkgeld gibt Amira?",
        "questionAr": "كم تركت أميرة بقشيشاً؟",
        "options": [
          "Nichts",
          "Zwanzig Euro fünfzig",
          "Vier Euro fünfzig",
          "Fünfundzwanzig Euro"
        ],
        "correctIndex": 2,
        "explanation": "الحساب ٢٠٫٥٠ يورو، وأعطت أميرة ٢٥ يورو وقالت Stimmt so (احتفظ بالباقي)؛ فالفرق بين المبلغين ٤٫٥٠ يورو.",
        "optionExplanations": [
          "Stimmt so تعني صراحةً ترك الباقي.",
          "هذا مبلغ الفاتورة «20,50 Euro» نفسه، لا البقشيش «Trinkgeld».",
          undefined,
          "هذا ما دفعته إجمالاً مع قولها «Stimmt so»؛ والفرق «Vier Euro fünfzig»."
        ],
        "errorType": "vocabulary",
        "paragraph": 4
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "قارن صيغة المذكر والمؤنث في النصب:",
        "questionDe": "Was stimmt über den Akkusativ in diesen Bestellungen?",
        "questionAr": "ما الصحيح عن النصب في هذين الطلبين؟",
        "options": [
          "Beim maskulinen Salat wird die unbestimmte Form „ein“ im Akkusativ zu „einen“; bei der femininen Suppe bleibt „die“ gleich.",
          "Suppe ist maskulin und bekommt im Akkusativ die Endung -en.",
          "Salat steht im Nominativ, weil er nach nehmen kommt.",
          "Suppe kann man nicht zählen."
        ],
        "correctIndex": 0,
        "explanation": "بعد nehmen يأتي الصنفان هنا في Akkusativ. Salat مذكر؛ فإذا استُعمل نكرةً تتحول أداة ein من الرفع إلى einen في النصب. Suppe مؤنثة، وأداة التعريف die لا تتغير هنا. أمّا اختيار المعرفة أو التنكير فيعتمد على السياق، لا على الجنس وحده.",
        "optionExplanations": [
          undefined,
          "Suppe مؤنثة، وليس فيها نهاية -en في هذا التركيب.",
          "بعد nehmen يأتي المفعول به هنا في النصب.",
          "Suppe اسم معدود في سياق المطعم، ويمكن طلب eine Suppe."
        ],
        "errorType": "case",
        "paragraph": 1
      }
    ],
    "redemittel": [
      {
        "de": "Ich möchte einen Kaffee, bitte. / Ich nehme die Suppe.",
        "ar": "أريد قهوة من فضلك. / آخذ الشوربة."
      },
      {
        "de": "Mit Milch, aber ohne Zucker.",
        "ar": "بحليب لكن بلا سكّر."
      },
      {
        "de": "Haben Sie auch …? / Was haben Sie heute?",
        "ar": "أعندكم أيضاً…؟ / ماذا لديكم اليوم؟"
      },
      {
        "de": "Ich habe Hunger. / Ich habe keinen Hunger mehr.",
        "ar": "أنا جائع. / لم أعد جائعاً."
      },
      {
        "de": "Die Rechnung, bitte! Wie viel macht das?",
        "ar": "الفاتورة من فضلك! كم الحساب؟"
      },
      {
        "de": "Zusammen oder getrennt? — Zusammen, bitte. Stimmt so.",
        "ar": "معاً أم منفصلين؟ — معاً من فضلك. احتفظ بالباقي."
      }
    ],
    "discussionAr": "مثّل الحوار مرّتين: مرّةً نادلاً ومرّةً زبوناً. اطلب في كلّ دور زبون أربعة أصناف مختلفة: صنفين مذكّرين مع einen، وصنفاً مؤنثاً مع eine أو die، وصنفاً محايداً مع أداته المناسبة. ثمّ أضف جملةً واحدة بـ Ich habe Hunger أو Ich habe Durst، وجملةً بالنفي بـ kein. وفي الختام راجع: هل نصبتَ المذكّر وحده وتركتَ الباقي؟"
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "في المقهى",
        lines: [
          { speaker: "Kellner", de: "Guten Tag! Was möchten Sie bestellen?", ar: "مرحباً! ماذا تودّ أن تطلب؟" },
          { speaker: "Sami", de: "Ich hätte gern einen Kaffee und ein Brötchen, bitte.", ar: "أودّ قهوةً وخبزةً صغيرة، من فضلك." },
          { speaker: "Kellner", de: "Gern. Möchten Sie noch etwas dazu?", ar: "بكل سرور. هل تريد شيئاً آخر معها؟" },
          { speaker: "Sami", de: "Nein, danke.", ar: "لا، شكراً." },
          { speaker: "Kellner", de: "Alles klar. Das macht fünf Euro.", ar: "حسناً. المجموع خمسة يورو." },
        ],
      },
      {
        id: "l2",
        title: "في السوبرماركت",
        lines: [
          { speaker: "Mona", de: "Ich brauche einen Apfel und eine Banane.", ar: "أحتاج تفاحةً وموزةً." },
          { speaker: "Karim", de: "Und wir kaufen auch Brot und Milch.", ar: "ونشتري أيضاً خبزاً وحليباً." },
          { speaker: "Mona", de: "Hast du Hunger?", ar: "هل أنت جائع؟" },
          { speaker: "Karim", de: "Ja, ich habe großen Hunger!", ar: "نعم، أنا جائع جداً!" },
        ],
      },
      {
        id: "l3",
        title: "شراء حاجيات من المخبز",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Verkäuferin", de: "Guten Morgen! Was möchten Sie?", ar: "صباح الخير! ماذا تودّ؟", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-1.mp3" },
          { speaker: "Sami", de: "Ich möchte zwei Brötchen und einen Apfel, bitte.", ar: "أريد خبزتين صغيرتين وتفاحةً، من فضلك.", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-2.mp3" },
          { speaker: "Verkäuferin", de: "Möchten Sie noch eine Banane?", ar: "هل تودّ موزةً أيضاً؟", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-3.mp3" },
          { speaker: "Sami", de: "Nein, danke. Haben Sie Milch?", ar: "لا، شكراً. هل لديكم حليب؟", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-4.mp3" },
          { speaker: "Verkäuferin", de: "Ja. Eine Flasche Milch kostet zwei Euro.", ar: "نعم. زجاجة الحليب بيوروين.", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-5.mp3" },
          { speaker: "Sami", de: "Dann nehme ich die Milch auch.", ar: "إذن سآخذ الحليب أيضاً.", audioSrc: "/audio/lessons/a1-03/ls-a1-03-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: ["einen Kaffee und ein Brötchen", "eine Milch und einen Kuchen", "einen Tee und ein Brötchen", "einen Kaffee und eine Banane"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — لم يُطلب حليبٌ ولا كعكة؛ بل «einen Kaffee und ein Brötchen».", "لا — الشاي لم يُطلب؛ والطلب «einen Kaffee und ein Brötchen».", "لا — لم تُذكر موزة Banane؛ والمطلوب «ein Brötchen» مع القهوة."],
        explanation: "طلب Sami einen Kaffee und ein Brötchen؛ أي قهوةً وخبزةً صغيرة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet das?",
        questionAr: "كم كان المجموع؟",
        options: ["fünf Euro", "vier Euro", "zehn Euro", "drei Euro"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — ليس أربعة؛ فالنادل قال «Das macht fünf Euro».", "لا — لم يُذكر عشرة Euro؛ والمجموع «fünf Euro».", "لا — ليس ثلاثة؛ والحساب «Das macht fünf Euro»."],
        explanation: "قال النادل: Das macht fünf Euro — خمسة يورو.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was braucht Mona?",
        questionAr: "ماذا تحتاج منى؟",
        options: ["einen Apfel und eine Banane", "ein Brot und die Milch", "einen Kaffee", "ein Brot"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — لم تحتج خبزاً ولا حليباً؛ بل «einen Apfel und eine Banane».", "لا — القهوة ليست طلبها؛ والحاجة «einen Apfel und eine Banane».", "لا — الخبز وحده لا يكفي؛ فالمذكور «einen Apfel und eine Banane»."],
        explanation: "قالت: Ich brauche einen Apfel und eine Banane.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami kaufen?",
        questionAr: "ماذا يريد سامي أن يشتري؟",
        options: ["Zwei Brötchen und einen Apfel", "Ein Brot und eine Banane", "Einen Kaffee und Milch", "Zwei Äpfel und ein Brötchen"],
        correctIndex: 0,
        optionExplanations: [undefined, "لم يطلب رغيفاً أو موزة؛ طلب خبزتين صغيرتين وتفاحة.", "القهوة ليست في طلبه؛ قال: zwei Brötchen und einen Apfel.", "لم يطلب تفاحتين؛ بل تفاحة واحدة وخبزتين صغيرتين."],
        explanation: "طلب سامي: zwei Brötchen und einen Apfel.",
        errorType: "vocabulary",
      },
      {
        id: "q5",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Kauft Sami auch eine Banane?",
        questionAr: "هل يشتري سامي موزةً أيضاً؟",
        options: ["Nein, er sagt Nein, danke", "Ja, zwei Bananen", "Ja, eine Banane", "Das Gespräch sagt es nicht"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا يشتري موزتين؛ بل يرفض الموزة ويطلب الحليب.", "رفض العرض بقوله Nein, danke.", "الحوار يذكر بوضوح أنه يرفض الموزة."],
        explanation: "رفض سامي الموزة بقوله: Nein, danke.",
        errorType: "comprehension",
      },
      {
        id: "q6",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie viel kostet eine Flasche Milch?",
        questionAr: "كم ثمن زجاجة الحليب؟",
        options: ["Zwei Euro", "Drei Euro", "Ein Euro fünfzig", "Fünf Euro"],
        correctIndex: 0,
        optionExplanations: [undefined, "قالت البائعة إن ثمنها zwei Euro.", "لم تذكر سعراً قدره يورو وخمسون سنتاً.", "لم تذكر خمسة يورو؛ السعر هو zwei Euro."],
        explanation: "قالت البائعة: Eine Flasche Milch kostet zwei Euro.",
        errorType: "vocabulary",
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات الطعام: ei، ch، وpf",
    items: [
      { de: "der Apfel", ar: "التفاحة", note: "[ˈapfəl]: الصوت pf يُنطق p وf معاً دون حركة فاصلة بينهما، والنبر على المقطع الأول." },
      { de: "das Brot", ar: "الخبز", note: "[bʁoːt]: الحركة o طويلة [oː]." },
      { de: "die Milch", ar: "الحليب", note: "[mɪlç]: ch هنا صوت ich-Laut [ç] بعد i؛ لا يطابق الشين أو الخاء العربية تماماً." },
      { de: "der Kaffee", ar: "القهوة", note: "من النطق الشائع [kaˈfeː]: النبر على المقطع الثاني وe طويلة؛ توجد فروق إقليمية في النطق." },
      { de: "der Käse", ar: "الجبن", note: "تُسمع نطقتان إقليميتان: [ˈkɛːzə] و[ˈkeːzə]؛ النبر على المقطع الأول." },
      { de: "die Eier", ar: "البيض", note: "[ˈaɪ̯ɐ]: ei صوت مركّب [aɪ̯]، وer في النهاية غير منبور." },
    ],
    tip: "الرموز بين [ ] تمثّل النطق (IPA)؛ ˈ قبل المقطع المنبور وː للحركة الطويلة. في Eier تُنطق ei قريباً من [aɪ̯]، وفي Euro تُنطق eu [ɔʏ̯]؛ الصوتان مختلفان.",
    shadowing: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة.", tip: "einen [ˈaɪ̯nən]: يبدأ بصوت ei المركّب [aɪ̯]." },
      { de: "Ich trinke einen Kaffee.", ar: "أشرب قهوة.", tip: "Kaffee [kaˈfeː] في نطق شائع: النبر على المقطع الثاني." },
      { de: "Hast du Hunger?", ar: "هل أنت جائع؟", tip: "Hunger [ˈhʊŋɐ]: u قصيرة [ʊ]، لا طويلة." },
      { de: "Das Brot ist frisch.", ar: "الخبز طازج.", tip: "Brot [bʁoːt] بحركة طويلة؛ frisch [fʁɪʃ]." },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة لتستخدم أداة التنكير:",
      prompt: "Das ist der Apfel. → (هذه تفاحة)",
      acceptedAnswers: ["Das ist ein Apfel."],
      sampleAnswer: "Das ist ein Apfel.",
      explanation: "بعد sein يأتي الاسم الخبري هنا في الرفع: ein Apfel، لا einen Apfel.",
      errorType: "article",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بأداة مناسبة، وانتبه إلى حالة الاسم (الرفع أو النصب):",
      template: "Das ist ___ Apfel. Ich esse ___ Apfel. ___ Milch ist kalt.",
      blanks: [
        { correct: "ein", options: ["ein", "eine", "den"] },
        { correct: "einen", options: ["ein", "einen", "eine"] },
        { correct: "Die", options: ["Die", "Der", "Das"] },
      ],
      explanation: "بعد ist يأتي الاسم الخبري Apfel في الرفع: ein Apfel. وبعد esse يكون مفعولاً به: einen Apfel. وMilch مؤنثة؛ وكُتبت Die بحرف كبير لأنها في بداية الجملة.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع إلى النطق الاصطناعي واكتب الجملة (لاحظ النصب):",
      audioText: "Ich habe einen Bruder.",
      explanation: "في هذه الجملة يأتي Bruder مفعولاً به منصوباً بعد haben؛ لذلك نقول einen Bruder.",
      errorType: "case",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب الجملة بالألمانية وابدأ بـ Ich möchte؛ استخدم أداة تنكير قبل الاسمين:",
      prompt: "أريد شاياً وموزةً من فضلك.",
      acceptedAnswers: [
        "Ich möchte einen Tee und eine Banane, bitte.",
        "Ich möchte eine Banane und einen Tee, bitte.",
      ],
      sampleAnswer: "Ich möchte einen Tee und eine Banane, bitte.",
      explanation: "بعد möchte يأتي المفعول في Akkusativ: der Tee يصبح einen Tee، وأداة المؤنث eine Banane تبقى كما هي.",
      errorType: "case",
    },
  ];

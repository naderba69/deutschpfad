/**
 * a1-04 — المهارات: قراءة و استماع و نطق و كتابة (الجزء «skills»)
 * فُصل من a1-04.ts في الدفعة 89 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    "id": "read-a1-04",
    "titleDe": "Die neue Wohnung",
    "titleAr": "الشقّة الجديدة",
    "textType": "email",
    "paragraphs": [
      "Liebe Sonia,\nwie geht es dir? Ich habe endlich eine Wohnung gefunden! Sie ist nicht sehr groß, aber sie ist hell und ruhig. Ich wohne jetzt in der Gartenstraße 14, im dritten Stock. Die Miete ist nicht billig, aber die Lage ist sehr gut.",
      "Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist mein Lieblingsraum. Dort stehen ein Sofa, ein kleiner Tisch und ein Regal mit meinen Büchern. An der Wand hängt ein Bild aus Tunesien. Auf dem Balkon habe ich drei Pflanzen.",
      "Die Küche ist sehr klein, aber praktisch. Der Kühlschrank steht neben dem Fenster und der Herd ist ziemlich neu. Im Schlafzimmer gibt es nur ein Bett und einen Schrank. Das ist genug für mich. Unter dem Bett habe ich meine Koffer.",
      "Es gibt aber auch Regeln. In unserem Haus darf man nach 22 Uhr nicht laut sein, denn dann beginnt die Ruhezeit. Laut Hausordnung darf ich am Sonntag keine Wäsche waschen. Und ich muss den Müll trennen: Papier, Glas, Plastik und Biomüll. Am Anfang war das kompliziert!",
      "Meine Nachbarn sind sehr freundlich. Frau Berger wohnt unter mir und sie hat einen kleinen Hund. Sie sagt immer: Du musst nicht klingeln, die Tür ist offen. Kommst du mich bald besuchen? Du darfst gern eine Woche bleiben.\nViele Grüße,\ndeine Amira"
    ],
    "paragraphsAr": [
      "عزيزتي سنية،\nكيف حالك؟ وجدتُ أخيراً شقّة! ليست كبيرة جداً لكنّها مضيئة وهادئة. أسكن الآن في شارع الحديقة رقم ١٤، في الطابق الثالث فوق الطابق الأرضي. الإيجار ليس رخيصاً لكنّ الموقع جيد جداً.",
      "الشقّة فيها غرفتان ومطبخ وحمّام. غرفة المعيشة هي غرفتي المفضّلة. فيها أريكة وطاولة صغيرة ورفّ عليه كتبي. وعلى الجدار صورة معلّقة من تونس. وعلى الشرفة عندي ثلاث نبتات.",
      "المطبخ صغير جداً لكنّه عمليّ. الثلّاجة بجانب النافذة والموقد جديد نسبياً. وفي غرفة النوم سرير وخزانة فقط. وهذا يكفيني. وتحت السرير حقائبي.",
      "لكن هناك قواعد أيضاً. في مبنانا لا يُسمح بإحداث الضجيج بعد العاشرة مساءً، إذ يبدأ حينها وقت الهدوء. ووفق لائحة المبنى لا يُسمح لي بغسل الملابس يوم الأحد. وعليّ أن أفرز النفايات: ورق وزجاج وبلاستيك ونفايات عضوية. كان ذلك معقّداً في البداية!",
      "جيراني ودودون جداً. السيّدة بيرغر تسكن تحتي ولها كلب صغير. تقول لي دائماً: لستِ مضطرّة إلى قرع الجرس، الباب مفتوح. أتأتين لزيارتي قريباً؟ يسعدني أن تبقي أسبوعاً كاملاً.\nتحيّاتي،\nأميرة"
    ],
    "glossary": [
      {
        "de": "die Miete",
        "ar": "الإيجار",
        "noteAr": "مؤنّثة. ومنها der Mieter (المستأجر) و der Vermieter (المؤجّر) و der Mietvertrag (عقد الإيجار). وتُستعمل Kaltmiete للإيجار دون تكاليف التدفئة والتكاليف الجانبية، وWarmmiete لمبلغ يشملها وفق تفاصيل الإعلان؛ تحقّق مما يدخل في السعر."
      },
      {
        "de": "die Lage",
        "ar": "الموقع",
        "noteAr": "اسم مؤنث؛ ومعناه هنا موقع الشقة بالنسبة إلى محيطها، لا الحالة. من التراكيب الشائعة: ruhige Lage (موقع هادئ) وgute Lage (موقع جيد)."
      },
      {
        "de": "der Stock",
        "ar": "الطابق",
        "noteAr": "في الترقيم الشائع، Erdgeschoss هو الطابق الأرضي وim ersten Stock هو الطابق الذي فوقه؛ لكن تسميات الطوابق قد تختلف محلياً أو بين المباني، فتحقّق عند الحاجة. في النص: im dritten Stock = الطابق الثالث فوق الأرضي."
      },
      {
        "de": "hängen",
        "ar": "يُعلَّق / معلّق",
        "noteAr": "من أفعال الموقع مع Dativ: Das Bild hängt an der Wand. ويُستعمل أيضاً للحركة مع Akkusativ: Ich hänge das Bild an die Wand."
      },
      {
        "de": "der Kühlschrank",
        "ar": "الثلّاجة",
        "noteAr": "مركّب من kühl (بارد) + Schrank (خزانة) — حرفياً «خزانة باردة». ومذكّر لأنّ der Schrank مذكّر."
      },
      {
        "de": "neben",
        "ar": "بجانب",
        "noteAr": "من حروف التبديل التسعة: Wo? ⟵ Dativ (neben dem Fenster)، و Wohin? ⟵ Akkusativ (Ich stelle es neben das Fenster)."
      },
      {
        "de": "genug",
        "ar": "كافٍ",
        "noteAr": "ظرف لا يُصرَّف. يشيع قبل الاسم: genug Geld (مال كافٍ)، وبعد الصفة: groß genug (كبير بما يكفي)؛ وقد يأتي بعد الاسم في سياقات مخصوصة."
      },
      {
        "de": "die Ruhezeit",
        "ar": "وقت الهدوء",
        "noteAr": "فترة للحدّ من الضجيج، لكن مواعيدها وتفاصيلها تعتمد على القواعد المحلية وHausordnung؛ لا تعمّم وقتاً واحداً على كل ألمانيا."
      },
      {
        "de": "den Müll trennen",
        "ar": "يفرز النفايات",
        "noteAr": "فرز النفايات من الممارسات المعتادة، لكن فئات الجمع وألوان الحاويات تختلف بحسب البلدية؛ راجع الإرشادات المحلية."
      },
      {
        "de": "die Wäsche waschen",
        "ar": "يغسل الملابس",
        "noteAr": "die Wäsche اسمٌ جمعيّ للملابس المعدّة للغسل أو المغسولة. وقد تحدّ بعض Hausordnungen من تشغيل الغسالة في أوقات معيّنة بسبب الضجيج؛ تحقّق من اللائحة المحلية."
      },
      {
        "de": "der Nachbar",
        "ar": "الجار",
        "noteAr": "مذكّر من صنف n‑Deklination: der Nachbar لكن den Nachbarn في النصب. والمؤنّث die Nachbarin."
      },
      {
        "de": "klingeln",
        "ar": "يقرع الجرس",
        "noteAr": "فعل منتظم. ومنه die Klingel (الجرس). قد يظهر اسم الساكن بجانب زرّ الجرس في بعض المباني؛ وتختلف طريقة الدخول من مكان إلى آخر."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأولى — أين تسكن أميرة؟",
        "questionDe": "Wo liegt Amiras neue Wohnung?",
        "questionAr": "أين تقع شقّة أميرة الجديدة؟",
        "options": [
          "Im Erdgeschoss",
          "Im dritten Stock",
          "Im ersten Stock",
          "In einem Haus mit Garten"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «in der Gartenstraße 14, im dritten Stock». وانتبه إلى أنّ اسم الشارع Gartenstraße فيه كلمة «حديقة» لكنّه لا يعني أنّ للشقّة حديقة.",
        "optionExplanations": [
          "الطابق الأرضي «Im Erdgeschoss» لم يُذكر؛ والسكن «im dritten Stock».",
          undefined,
          "النصّ يقول «im dritten Stock» أي الثالث، لا «im ersten Stock».",
          "اسم الشارع Gartenstraße مضلّل؛ الشقّة في عمارة."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثانية — دقّق في الحالة الإعرابية:",
        "questionDe": "Warum heißt es «an der Wand» und nicht «an die Wand»?",
        "questionAr": "لماذا an der Wand لا an die Wand؟",
        "options": [
          "Weil das Wort Wand maskulin ist und bleibt",
          "Weil die Frage Wo? ist und es keine Bewegung gibt",
          "Weil das Verb hängen immer den Dativ braucht",
          "Weil das Bild klein und leicht ist"
        ],
        "correctIndex": 1,
        "explanation": "الجملة تصف موقعاً ثابتاً وتجيب عن Wo? ⟵ فالجرّ واجب، و die Wand مؤنّثة فتصير der. ولو كانت حركةً لقلنا: Ich hänge das Bild an die Wand (نصب).",
        "optionExplanations": [
          "die Wand مؤنّثة، و der هنا علامة جرّ المؤنّث لا مذكّر.",
          undefined,
          "hängen يعمل في الحالتين بحسب المعنى، لا دائماً بالجرّ.",
          "حجم الصورة «klein und leicht» لا أثر له في الإعراب؛ والحالة يحدّدها سؤال «Wo؟»."
        ],
        "errorType": "case",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — القواعد المنزلية:",
        "questionDe": "Was ist am Sonntag verboten?",
        "questionAr": "ما الممنوع يوم الأحد؟",
        "options": [
          "Den Müll trennen",
          "Wäsche waschen",
          "Auf dem Balkon sitzen",
          "Nachbarn besuchen"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Laut Hausordnung darf ich am Sonntag keine Wäsche waschen». ويعبّر dürfen مع النفي عن عدم السماح في هذا السياق، خلافاً لـ müssen مع النفي التي ترفع الإلزام فقط.",
        "optionExplanations": [
          "فرز النفايات واجب لا ممنوع: ich muss den Müll trennen.",
          undefined,
          "الجلوس في الشرفة «Auf dem Balkon sitzen» لم يُمنع؛ والمنع «keine Wäsche waschen».",
          "زيارة الجيران «Nachbarn besuchen» مرحَّب بها في آخر الرسالة، لا ممنوعة «verboten»."
        ],
        "errorType": "negation",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الخامسة — افهم قصد الجارة:",
        "questionDe": "Was meint Frau Berger mit «Du musst nicht klingeln»?",
        "questionAr": "ماذا تقصد السيّدة بيرغر بقولها Du musst nicht klingeln؟",
        "options": [
          "Klingeln ist verboten",
          "Klingeln ist nicht nötig",
          "Sie hört die Klingel nicht",
          "Die Klingel ist kaputt"
        ],
        "correctIndex": 1,
        "explanation": "nicht müssen ترفع الإلزام ولا تمنع: أي «لستِ مضطرّة، الباب مفتوح أصلاً». ولو أرادت منع قرع الجرس لقالت Du darfst nicht klingeln؛ وهذه صيغة منع، مختلفة عن رفع الإلزام في Du musst nicht klingeln.",
        "optionExplanations": [
          "المنع يُصاغ بـ darf nicht لا musst nicht.",
          undefined,
          "لم تُذكر مشكلة سمع «Sie hört die Klingel nicht»؛ بل «nicht müssen» ترفع الإلزام.",
          "لم يُذكر عطب «Die Klingel ist kaputt»؛ والمعنى أن الباب مفتوح فلا حاجة إلى «klingeln»."
        ],
        "errorType": "negation",
        "paragraph": 4
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "انظر في النصّ كلّه:",
        "questionDe": "Was wird im Text nicht erwähnt?",
        "questionAr": "ما الشيء الذي لم يُذكر في النص؟",
        "options": [
          "Ein Regal an der Wand",
          "Ein großer Kühlschrank",
          "Ein Esstisch im Esszimmer",
          "Ein Schrank im Schlafzimmer"
        ],
        "correctIndex": 2,
        "explanation": "الرفّ والثلّاجة والخزانة مذكورة صراحةً. أمّا وجود طاولة أو غرفة طعام فلم يذكره النص؛ لذا فالإجابة هي الشيء غير المذكور، لا الجزم بأنه غير موجود في الشقة.",
        "optionExplanations": [
          "الرفّ «Ein Regal an der Wand» مذكور في غرفة المعيشة، فهو وارد في النصّ.",
          "الثلّاجة «Ein großer Kühlschrank» مذكورة بجانب النافذة في النصّ.",
          undefined,
          "الخزانة «Ein Schrank im Schlafzimmer» مذكورة في النصّ."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      }
    ],
    "redemittel": [
      {
        "de": "Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad.",
        "ar": "شقّتي فيها غرفتان ومطبخ وحمّام."
      },
      {
        "de": "Ich wohne in der Gartenstraße 14, im dritten Stock.",
        "ar": "أسكن في شارع الحديقة ١٤، في الطابق الثالث فوق الأرضي."
      },
      {
        "de": "Die Wohnung ist hell und ruhig, aber nicht billig.",
        "ar": "الشقّة مضيئة وهادئة لكنّها ليست رخيصة."
      },
      {
        "de": "Der Kühlschrank steht neben dem Fenster.",
        "ar": "الثلّاجة بجانب النافذة."
      },
      {
        "de": "In dieser Hausordnung steht: Nach 22 Uhr darf man nicht laut sein.",
        "ar": "بعد العاشرة مساءً يُمنع الضجيج."
      },
      {
        "de": "Ich muss den Müll trennen.",
        "ar": "عليّ أن أفرز النفايات."
      }
    ],
    "discussionAr": "اكتب رسالةً قصيرة على منوال رسالة أميرة تصف فيها سكنك الحالي: ابدأ بعدد الغرف، ثمّ صِف غرفتك المفضّلة وما فيها من أثاث مستعملاً حرفي جرّ مكانيّين أو ثلاثةً مع Dativ، ثمّ اذكر قاعدتين منزليتين: واحدة بـ ich muss وأخرى بـ man darf nicht. وفي المراجعة اسأل عن جمل المكان: هل تجيب عن Wo? وتستعمل Dativ؟"
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "وصف الشقة",
        lines: [
          { speaker: "Mona", de: "Meine Wohnung ist in Tunis. Sie hat zwei Zimmer, eine Küche und ein Bad.", ar: "شقتي في تونس. فيها غرفتان ومطبخ وحمام." },
          { speaker: "Sami", de: "Welche Zimmer?", ar: "أي غرف؟" },
          { speaker: "Mona", de: "Ein Wohnzimmer und ein Schlafzimmer.", ar: "غرفة معيشة وغرفة نوم." },
          { speaker: "Sami", de: "Und die Küche? Ist sie groß?", ar: "والمطبخ؟ هل هو كبير؟" },
          { speaker: "Mona", de: "Ja, die Küche ist groß und modern.", ar: "نعم، المطبخ كبير وحديث." },
        ],
      },
      {
        id: "l2",
        title: "أين الأشياء؟",
        lines: [
          { speaker: "Karim", de: "Wo ist das Buch?", ar: "أين الكتاب؟" },
          { speaker: "Leila", de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
          { speaker: "Karim", de: "Und die Lampe?", ar: "والمصباح؟" },
          { speaker: "Leila", de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
          { speaker: "Karim", de: "Wo schläfst du?", ar: "أين تنام؟" },
          { speaker: "Leila", de: "Ich schlafe im Schlafzimmer.", ar: "أنام في غرفة النوم." },
        ],
      },
      {
        id: "l3",
        title: "جولة في شقة جديدة",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Nora", de: "Wo ist das Schlafzimmer?", ar: "أين غرفة النوم؟", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-1.mp3" },
          { speaker: "Herr Maier", de: "Das Schlafzimmer ist neben dem Bad.", ar: "غرفة النوم بجانب الحمّام.", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-2.mp3" },
          { speaker: "Nora", de: "Und wo ist die Küche?", ar: "وأين المطبخ؟", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-3.mp3" },
          { speaker: "Herr Maier", de: "Die Küche ist neben dem Wohnzimmer.", ar: "المطبخ بجانب غرفة المعيشة.", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-4.mp3" },
          { speaker: "Nora", de: "Gibt es auch einen Balkon?", ar: "هل توجد شرفة أيضاً؟", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-5.mp3" },
          { speaker: "Herr Maier", de: "Ja, der Balkon ist vor dem Wohnzimmer.", ar: "نعم، الشرفة أمام غرفة المعيشة.", audioSrc: "/audio/lessons/a1-04/ls-a1-04-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Zimmer hat die Wohnung?",
        questionAr: "كم عدد غرف الشقة؟",
        options: ["vier", "drei", "fünf", "zwei"],
        correctIndex: 3,
        optionExplanations: ["لا — ليست أربع غرف؛ فمنى قالت «Sie hat zwei Zimmer, eine Küche und ein Bad».", "لا — ليست ثلاث غرف؛ والعدد المنطوق «zwei Zimmer».", "لا — لم تُذكر خمس غرف fünf؛ والشقة فيها «zwei Zimmer».", undefined],
        explanation: "قالت منى: Sie hat zwei Zimmer, eine Küche und ein Bad — غرفتان، بالإضافة إلى المطبخ والحمّام.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist das Buch?",
        questionAr: "أين الكتاب؟",
        options: ["auf dem Tisch", "in der Küche", "im Bett", "unter dem Sofa"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — المطبخ مكان المصباح لا الكتاب؛ و«Das Buch ist auf dem Tisch».", "لا — لم يُذكر سرير Bett؛ والكتاب «auf dem Tisch».", "لا — ليس تحت الأريكة؛ وليلى قالت «Das Buch ist auf dem Tisch»."],
        explanation: "قالت ليلى: Das Buch ist auf dem Tisch — على الطاولة (auf dem).",
        errorType: "preposition",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Lampe?",
        questionAr: "أين المصباح؟",
        options: ["in der Küche", "auf dem Tisch", "im Schlafzimmer", "unter dem Bett"],
        correctIndex: 0,
        optionExplanations: [undefined, "لا — الطاولة مكان الكتاب؛ و«Die Lampe ist in der Küche».", "لا — لم تُذكر غرفة نوم Schlafzimmer؛ والمصباح «in der Küche».", "لا — ليس تحت السرير؛ والمذكور «Die Lampe ist in der Küche»."],
        explanation: "قالت: Die Lampe ist in der Küche — في المطبخ (die→der).",
        errorType: "preposition",
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wo ist das Schlafzimmer?",
        questionAr: "أين غرفة النوم؟",
        options: ["Neben dem Bad", "Vor dem Balkon", "Im Wohnzimmer", "In der Küche"],
        correctIndex: 0,
        optionExplanations: [undefined, "لم يقل إنها أمام الشرفة؛ قال إنها بجانب الحمّام.", "غرفة النوم ليست غرفة المعيشة؛ هي بجانب الحمّام.", "لم يقل إنها في المطبخ؛ ذكر «neben dem Bad»."],
        explanation: "قال Herr Maier: Das Schlafzimmer ist neben dem Bad.",
        errorType: "preposition",
      },
      {
        id: "q5",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Küche?",
        questionAr: "أين المطبخ؟",
        options: ["Neben dem Wohnzimmer", "Vor dem Schlafzimmer", "Neben dem Balkon", "Im Erdgeschoss"],
        correctIndex: 0,
        optionExplanations: [undefined, "لم يذكر أنها أمام غرفة النوم؛ قال إنها بجانب غرفة المعيشة.", "لم يحدد الشرفة مكاناً للمطبخ؛ بل ذكر غرفة المعيشة.", "لم يذكر الطابق الأرضي؛ المعلومة المسموعة أنها بجانب غرفة المعيشة."],
        explanation: "قال Herr Maier: Die Küche ist neben dem Wohnzimmer.",
        errorType: "preposition",
      },
      {
        id: "q6",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist der Balkon?",
        questionAr: "أين الشرفة؟",
        options: ["Vor dem Wohnzimmer", "Hinter der Küche", "Neben dem Bad", "Auf dem Balkon"],
        correctIndex: 0,
        optionExplanations: [undefined, "لم يذكر أنها خلف المطبخ؛ قال إنها أمام غرفة المعيشة.", "مكان غرفة النوم بجانب الحمّام، لا الشرفة.", "لم يقل إن الشرفة على نفسها؛ بل إنها أمام غرفة المعيشة."],
        explanation: "قال Herr Maier: Der Balkon ist vor dem Wohnzimmer.",
        errorType: "preposition",
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات السكن: ch، ß، وsch",
    items: [
      { de: "die Küche", ar: "المطبخ", note: "ü صوتٌ أمامي مدوّر [ʏ] (ليس يو)، وch هنا خفيفة [ç]." },
      { de: "das Schlafzimmer", ar: "غرفة النوم", note: "sch = ش؛ وz في Zimmer = تس: شلاف-تسِمَر (تقريب عربي)." },
      { de: "die Straße", ar: "الشارع", note: "st في البداية = شت؛ وß صوت س مهموس، مع a طويلة: شتراسه (تقريب عربي)." },
      { de: "wohnen", ar: "يسكن", note: "w = ڤ؛ وh لا تُنطق، بل تطيل o: ڤوونِن (تقريب عربي)." },
      { de: "das Sofa", ar: "الأريكة", note: "S في بداية الكلمة قبل الحركة تُنطق غالباً /z/: زوفا (تقريب عربي)." },
      { de: "das Zimmer", ar: "الغرفة", note: "Z = تس؛ وmm تدلّ على قِصر i، لا على مدّ m: تسِمَر (تقريب عربي)." },
    ],
    tip: "قارن الأصوات في البداية: Z في Zimmer = /ts/، وS في Sofa = /z/، وsch في Schlafzimmer = /ʃ/.",
    shadowing: [
      { de: "Ich wohne in einer Wohnung.", ar: "أسكن في شقة.", tip: "wohne = ڤوهنِه (w=ڤ)" },
      { de: "Das Wohnzimmer ist groß.", ar: "غرفة المعيشة كبيرة.", tip: "groß فيها o طويلة، وß تُنطق /s/؛ يختلف r بحسب المتحدث والمنطقة." },
      { de: "Das Bett ist im Schlafzimmer.", ar: "السرير في غرفة النوم.", tip: "im = in+dem" },
      { de: "Die Küche ist modern.", ar: "المطبخ حديث.", tip: "ü صوتٌ مدوّر قريب من [ʏ] وch هنا [ç]؛ لا يوجد مقابل عربي مطابق تماماً." },
      { de: "Wo wohnst du?", ar: "أين تسكن؟", tip: "w = ڤ؛ ركّز على st في wohnst." },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "كوّن جملة قصيرة تصف مكاناً؛ اختر اسماً وصفةً من الكلمات المعطاة.",
      prompt: "die Wohnung / das Zimmer / die Küche + ist + groß / klein / hell / ruhig",
      acceptedAnswers: [
        "Die Wohnung ist groß.", "Die Wohnung ist klein.", "Die Wohnung ist hell.", "Die Wohnung ist ruhig.",
        "Das Zimmer ist groß.", "Das Zimmer ist klein.", "Das Zimmer ist hell.", "Das Zimmer ist ruhig.",
        "Die Küche ist groß.", "Die Küche ist klein.", "Die Küche ist hell.", "Die Küche ist ruhig.",
      ],
      sampleAnswer: "Die Wohnung ist hell.",
      explanation: "بعد sein تأتي الصفة الخبرية بلا نهاية: Die Wohnung ist hell. غيّر الاسم والصفة باستعمال الكلمات المعطاة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر والأداة الصحيحين (im/in der/auf dem/unter dem):",
      template: "Das Buch ist ___ Tisch (على). Die Lampe ist ___ Küche (في). Ich schlafe ___ Bett (في).",
      blanks: [
        { correct: "auf dem", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "in der", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "im", options: ["auf dem", "in der", "im", "unter dem"] },
      ],
      explanation: "على طاولة مذكر → auf dem. في مطبخ مؤنث → in der. في سرير محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Sofa ist im Wohnzimmer.",
      explanation: "Das Sofa ist im Wohnzimmer — im = in + dem (Wohnzimmer محايد).",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "كوّن سؤالاً عن السكن ثم أجب عنه بجملة مناسبة:",
      prompt: "Antwort: Ich wohne in Tunis. → Frage + Antwort: ...",
      acceptedAnswers: ["Wo wohnst du? Ich wohne in Tunis.", "Wo wohnst du? — Ich wohne in Tunis."],
      sampleAnswer: "Wo wohnst du? Ich wohne in Tunis.",
      explanation: "في سؤال W تأتي أداة السؤال أولاً ثم الفعل المصرف: Wo wohnst du? وتكون الإجابة بضمير المتكلم: Ich wohne in Tunis.",
      errorType: "word-order",
    },
  ];

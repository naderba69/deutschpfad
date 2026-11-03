/**
 * b2-11 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "في دار النشر",
        audioNoteAr: "الصوت في هذا المشهد يُنشأ بواسطة تحويل النص إلى كلام في المتصفح (TTS)، وليس تسجيلاً بشرياً؛ ويعتمد الصوت على الجهاز والمتصفح.",
        lines: [
          { speaker: "Redakteurin", de: "Kennen Sie den Autor, dessen Romane wir übersetzen?", ar: "هل تعرف الكاتب الذي نترجم رواياته؟" },
          { speaker: "Karim", de: "Natürlich. Das ist der Schriftsteller, dessen Bücher in Tunesien sehr beliebt sind.", ar: "بالطبع. إنه الأديب الذي كتبه محبوبة جداً في تونس." },
          { speaker: "Redakteurin", de: "Wir haben den Termin leider verschieben müssen.", ar: "اضطررنا للأسف إلى تأجيل الموعد." },
          { speaker: "Karim", de: "Wegen der Kollegin, deren Vortrag ausgefallen ist?", ar: "بسبب الزميلة التي أُلغيت محاضرتها؟" },
          { speaker: "Redakteurin", de: "Genau. Sie hat kurzfristig absagen müssen.", ar: "بالضبط. اضطرت إلى الاعتذار في اللحظة الأخيرة." },
        ],
      },
      {
        id: "l2",
        title: "بعد العطلة",
        audioNoteAr: "الصوت في هذا المشهد يُنشأ بواسطة تحويل النص إلى كلام في المتصفح (TTS)، وليس تسجيلاً بشرياً؛ ويعتمد الصوت على الجهاز والمتصفح.",
        lines: [
          { speaker: "Nora", de: "Ich habe mein Auto reparieren lassen. Es war teuer.", ar: "كلّفت شخصاً بإصلاح سيارتي؛ وكان ذلك مكلفاً." },
          { speaker: "Jonas", de: "Bei dem Mechaniker, dessen Werkstatt am Bahnhof ist?", ar: "عند الميكانيكي الذي ورشته قرب المحطة؟" },
          { speaker: "Nora", de: "Ja. Ich habe zwei Tage warten müssen.", ar: "نعم. اضطررت إلى الانتظار يومين." },
          { speaker: "Jonas", de: "Ich habe dich gestern telefonieren hören. Klang stressig.", ar: "سمعتك تتحدثين في الهاتف أمس. بدا الأمر مرهقاً." },
        ],
      },
      {
        id: "l3",
        title: "التحضير لإصدار مترجم",
        audioNoteAr: "ملفات هذا المشهد مولّدة آلياً (TTS)، وليست تسجيلات بشرية. طابق تفريغ ASR محلي بتمريرين النصوص الستة بعد تصحيح ثلاثة مقاطع؛ لم تُجرَ مراجعة سمعية بشرية، ولا يثبت ASR جودة النطق أو طبيعته.",
        lines: [
          { speaker: "Mira", de: "Wir arbeiten mit der Übersetzerin, deren letzter Roman viel Lob erhalten hat.", ar: "نعمل مع المترجمة التي لاقت روايتها الأخيرة استحساناً كبيراً.", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-1.mp3" },
          { speaker: "Karim", de: "Ist das der Autor, dessen Bücher wir ins Arabische übertragen?", ar: "هل هذا هو الكاتب الذي ننقل كتبه إلى العربية؟", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-2.mp3" },
          { speaker: "Mira", de: "Genau. Seine Werke sind in Tunesien sehr beliebt und werden gerade neu übersetzt.", ar: "بالضبط. أعماله محبوبة جداً في تونس، وتجري ترجمتها من جديد الآن.", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-3.mp3" },
          { speaker: "Karim", de: "Hat die Übersetzerin die letzten Änderungen prüfen lassen?", ar: "هل كلفت المترجمة أحداً بمراجعة التعديلات الأخيرة؟", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-4.mp3" },
          { speaker: "Mira", de: "Ja, sie hat den Text prüfen lassen, bevor wir ihn an die Druckerei geschickt haben.", ar: "نعم، كلفت بمراجعة النص قبل أن نرسله إلى المطبعة.", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-5.mp3" },
          { speaker: "Karim", de: "Gut. Dann können wir die Ausgabe rechtzeitig fertigstellen und das Werk dem Publikum vorstellen.", ar: "جيد. إذاً يمكننا إنهاء الإصدار في موعده وتقديم العمل للجمهور.", audioSrc: "/audio/lessons/b2-11/ls-b2-11-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie beschreibt Karim den Schriftsteller?",
        questionAr: "كيف يصف كريم الأديب؟",
        options: [
          "Der Schriftsteller, dessen Bücher in Tunesien beliebt sind",
          "Der Schriftsteller, deren Bücher beliebt sind",
          "Der Schriftsteller, den die Bücher beliebt sind",
          "Der Schriftsteller, dessen die Bücher beliebt sind",
        ],
        correctIndex: 0,
        explanation: "المرجع der Schriftsteller مذكّر ⇒ dessen، والاسم بعده بلا أداة تعريف.",
        errorType: "case",
        optionExplanations: [
          undefined,
          "«deren Bücher beliebt sind» خطأ؛ Schriftsteller مذكر، فالضمير dessen.",
          "«den die Bücher beliebt sind» خطأ في الحالة وفي ترتيب الجملة.",
          "«dessen die Bücher beliebt sind» خطأ؛ تكرار الاسم بعد الضمير غير صحيح.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was musste die Kollegin tun?",
        questionAr: "ماذا اضطرت الزميلة أن تفعل؟",
        options: ["Sie hat absagen müssen", "Sie hat abgesagt gemusst", "Sie ist absagen müssen", "Sie hat absagen gemusst"],
        correctIndex: 0,
        explanation: "مصدر مزدوج مع haben: hat absagen müssen.",
        errorType: "conjugation",
        optionExplanations: [
          undefined,
          "«Sie hat abgesagt gemusst» خطأ؛ تُستعمل الصيغة absagen müssen بعد hat.",
          "«Sie ist absagen müssen» خطأ؛ الفعل المساعد haben وليس sein.",
          "«Sie hat absagen gemusst» خطأ؛ الصيغة الصحيحة absagen müssen.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat das Auto repariert?",
        questionAr: "من أصلح السيارة؟",
        options: ["Der Mechaniker", "Nora selbst", "Jonas", "Niemand"],
        correctIndex: 0,
        explanation: "قالت reparieren lassen ⇒ كلّفت غيرها، أي الميكانيكي.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Nora selbst» لم تُصلح السيارة بنفسها، بل أعطتها للميكانيكي.",
          "«Jonas» لم يُصلح السيارة؛ ذكره بوصفه من يسأل.",
          "«Niemand» تنفي الإصلاح، وهذا عكس ما قالته نورا.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wessen Bücher werden ins Arabische übertragen?",
        questionAr: "كتب من تُنقل إلى العربية؟",
        options: ["die Bücher des Autors", "die Romane der Übersetzerin", "die Texte der Redakteurin", "die Werke des Mechanikers"],
        correctIndex: 0,
        explanation: "قال كريم: Ist das der Autor, dessen Bücher wir ins Arabische übertragen? ثم أكدت ميرا ذلك.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "الرواية الأخيرة للمترجمة ذُكرت في سياق مختلف؛ الكتب التي تُنقل للعربية هي للكاتب.",
          "لم يذكر الحوار أن محررة تنشر نصوصها.",
          "لا يخص الحوار ميكانيكياً؛ بل يتحدث عن كاتب وأعماله.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "النطق: dessen وderen والمصدر المزدوج",
    items: [
      { de: "dessen", ar: "ضمير ملكية نسبي للمذكّر والمحايد", note: "النطق القياسي تقريباً [ˈdɛsən]؛ ss بعد حركة قصيرة، والمقطع الأول منبور." },
      { de: "deren", ar: "ضمير ملكية نسبي للمؤنّث والجمع", note: "النطق القياسي تقريباً [ˈdeːʁən]؛ الحركة e الأولى طويلة، مع اختلاف نطق r إقليمياً." },
      { de: "müssen", ar: "يجب", note: "النطق القياسي تقريباً [ˈmʏsən]؛ ü أمامية مستديرة وss بعد حركة قصيرة." },
      { de: "lassen", ar: "يدع/يكلّف", note: "النطق القياسي تقريباً [ˈlasən]؛ a قصيرة وss بعدها." },
      { de: "der Autor", ar: "الكاتب", note: "النطق القياسي تقريباً [ˈaʊ̯toːɐ̯]؛ النبر على المقطع الأول، وقد تتحقق r النهائية صوتاً حركياً." },
      { de: "übersetzen", ar: "يترجم", note: "النطق القياسي تقريباً [ˌyːbɐˈzɛtsən]؛ النبر الرئيسي على المقطع setz." },
    ],
    tip: "قاعدة إملائية عامة: يأتي ss بعد حركة قصيرة، بينما تأتي ß بعد حركة طويلة أو مزدوجة (مثل Straße وheißen). هذا نمط إملائي يفيد في القراءة، وليس بديلاً عن سماع طول الحركة ونطقها.",
    shadowing: [
      { de: "Der Autor, dessen Roman ich lese, kommt aus Wien.", ar: "الكاتب الذي أقرأ روايته من فيينا.", tip: "dessen — مالك مذكّر" },
      { de: "Die Frau, deren Auto dort steht, ist meine Chefin.", ar: "المرأة التي سيارتها هناك هي مديرتي.", tip: "deren — مالكة مؤنّثة" },
      { de: "Ich habe gestern lange arbeiten müssen.", ar: "اضطررت أمس إلى العمل طويلاً.", tip: "مصدر مزدوج" },
      { de: "Wir haben das Fahrrad reparieren lassen.", ar: "أعطينا الدرّاجة لتُصلَّح.", tip: "lassen — تكليف" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "ادمج الجملتين في جملة نسبية بـ dessen أو deren:",
      prompt: "Ich kenne einen Autor. Seine Romane sind berühmt.",
      acceptedAnswers: [
        "Ich kenne einen Autor, dessen Romane berühmt sind",
        "Ich kenne einen Autor, dessen Romane berühmt sind.",
      ],
      sampleAnswer: "Ich kenne einen Autor, dessen Romane berühmt sind.",
      explanation: "المالك مذكّر ⇒ dessen، والفعل المصرَّف في نهاية الجملة النسبية.",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالمصدر المزدوج الصحيح:",
      template: "Ich habe gestern das Auto ___ ___ . Es war kaputt.",
      blanks: [
        { correct: "reparieren", options: ["reparieren", "repariert", "zu reparieren"] },
        { correct: "lassen", options: ["lassen", "gelassen", "lässt"] },
      ],
      explanation: "التكليف: haben + مصدر الفعل الرئيسي + lassen بالمصدر.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع إلى الصوت الذي يولّده المتصفح واكتب الجملة:",
      audioText: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet hier.",
      explanation: "deren للمالكة المؤنّثة، والاسم بعدها بلا أداة تعريف: deren Vortrag.",
      errorType: "spelling",
    },
  ];

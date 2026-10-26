/**
 * a1-09 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-09.ts في الدفعة 91 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann die Wochentage und Monate ihren arabischen Bedeutungen zuordnen.",
      ar: "أطابق أسماء أيام الأسبوع والشهور الاثني عشر بمعانيها العربية.",
      evidence: {
        exerciseIds: ["e3", "e6"],
        taskIds: ["practice:a1-09:e3", "practice:a1-09:e6"],
        labelAr: "طابق أيام الأسبوع السبعة في e3 وأسماء الشهور الاثني عشر في e6؛ لا يكفي فتح النشاط أو مراجعة البطاقات.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann die vier Jahreszeiten erkennen und in die hier geübte Reihenfolge bringen.",
      ar: "أتعرف إلى أسماء الفصول الأربعة وأرتبها في المهمة المحددة.",
      evidence: {
        exerciseIds: ["e8", "m5"],
        taskIds: ["practice:a1-09:e8", "mini-test:a1-09:m5"],
        labelAr: "اختر الفصل في سياق تقويمي في e8، ثم أكمل ترتيب الفصول الأربعة في m5؛ يلزم الأداء الصحيح في المهمتين.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausgewählte Ordinalzahlen in Datumsangaben erkennen und in vorgegebenen Satzmustern verwenden.",
      ar: "أتعرف إلى صيغ مختارة من الأعداد الترتيبية في التواريخ وأستعملها في جمل محددة.",
      evidence: {
        exerciseIds: ["e2", "e7", "e11", "e12", "e15", "e18", "m2"],
        taskIds: ["practice:a1-09:e2", "practice:a1-09:e7", "practice:a1-09:e11", "practice:a1-09:e12", "practice:a1-09:e15", "practice:a1-09:e18", "mini-test:a1-09:m2"],
        labelAr: "أجب عن صيغ الترتيبي في e2 وe7 وe11 وe12 وe15 وe18، ثم أعد الصيغة في m2؛ يجب أن تكون كل الإجابات صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgeschriebene und numerische Datumsangaben lesen und nach dem heutigen Datum fragen.",
      ar: "أقرأ تاريخاً مكتوباً بالكلمات أو بالأرقام، وأسأل عن تاريخ اليوم في أمثلة الدرس.",
      evidence: {
        exerciseIds: ["e9", "e13", "e14"],
        taskIds: ["practice:a1-09:e9", "practice:a1-09:e13", "practice:a1-09:e14"],
        labelAr: "ميّز صيغة التاريخ الصحيحة في e9، واقرأ 5.9. في e13، ورتّب سؤال التاريخ في e14؛ يلزم الصواب في المهمات الثلاث.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann am, im und um in ausgewählten Zeitangaben verwenden.",
      ar: "أختار am وim وum في أمثلة مختارة لليوم والشهر والفصل والساعة.",
      evidence: {
        exerciseIds: ["e1", "e4", "e5", "e10", "w1", "w2", "m1", "m3", "m4"],
        taskIds: ["practice:a1-09:e1", "practice:a1-09:e4", "practice:a1-09:e5", "practice:a1-09:e10", "writing:a1-09:w1", "writing:a1-09:w2", "mini-test:a1-09:m1", "mini-test:a1-09:m3", "mini-test:a1-09:m4"],
        labelAr: "طبّق حروف الجر في e1 وe4 وe5 وe10 وw1 وw2 وm1 وm3 وm4؛ فتح قسم الكتابة أو الاستماع لا يسجّل هذا الهدف.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann Anfang, Endpunkt, Zeitraum, ungefähre Uhrzeit und Wiederholung in einfachen Zeitangaben unterscheiden.",
      ar: "أميز في أمثلة محددة بين بداية المدى ونهايته والمدى المحدد والوقت التقريبي والتكرار الأسبوعي.",
      evidence: {
        exerciseIds: ["e16", "e17", "e19", "e22", "e23", "e25"],
        taskIds: ["practice:a1-09:e16", "practice:a1-09:e17", "practice:a1-09:e19", "practice:a1-09:e22", "practice:a1-09:e23", "practice:a1-09:e25"],
        labelAr: "أكمل أسئلة von … bis وab وgegen والتكرار montags وصيغة التاريخ في e16 وe17 وe19 وe22 وe23 وe25؛ يلزم الصواب في كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann einem kurzen Dialog Anlass, Öffnungszeiten, Verfügbarkeit und den vereinbarten Termin entnehmen.",
      ar: "أستخرج سبب الاتصال وساعات العمل والتفرغ وموعد الحجز من حوار قراءة قصير.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: ["reading:read-a1-09:rq1", "reading:read-a1-09:rq2", "reading:read-a1-09:rq3", "reading:read-a1-09:rq4", "reading:read-a1-09:rq5"],
        labelAr: "أجب عن أسئلة القراءة rq1–rq5 كلها إجابة صحيحة؛ فتح النص وحده لا يُسجل دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann nach drei kurzen Dialogen Fragen zu Terminen, Uhrzeiten und Geburtstagen beantworten.",
      ar: "أجيب عن أسئلة فهم تتعلق بالمواعيد والساعات وأعياد الميلاد بعد ثلاثة حوارات قصيرة.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
        labelAr: "أجب عن q1–q6 إجابة صحيحة؛ فتح المقطع أو تشغيله وحده لا يكفي. ولأن النص قابل للإظهار، فالنتيجة دليل على إجابات الفهم لا على الاستماع المستقل دون نص.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einen einfachen Wunschtermin schriftlich formulieren und einen kurzen Datensatz korrekt verschriftlichen.",
      ar: "أكتب جملة كاملة عن وقت يناسبني، وأدوّن جملة تاريخ قصيرة كما أسمعها.",
      evidence: {
        exerciseIds: ["w1", "w3"],
        taskIds: ["writing:a1-09:w1", "writing:a1-09:w3"],
        labelAr: "اكتب جملة الموعد الكاملة في w1، ثم اكتب جملة الإملاء في w3؛ لا يُحتسب فتح الأنشطة.",
        completion: "all-correct",
      },
    },
    {
      id: "z10",
      de: "Ich kann eine höfliche Terminanfrage aus vorgegebenen Wörtern zusammensetzen und die Annahme eines konkreten Vorschlags erkennen.",
      ar: "أرتب كلمات طلب موعد شائع مهذب، وأتعرف إلى رد يؤكد قبول وقت مقترح.",
      evidence: {
        exerciseIds: ["e21", "e26", "e27"],
        taskIds: ["practice:a1-09:e21", "practice:a1-09:e26", "practice:a1-09:e27"],
        labelAr: "رتّب الطلب في e21، واختر صيغة طلب مناسبة في e26، ثم اختر قبول الوقت المقترح في e27؛ هذه مهام نصية ولا تقيس الكلام الشفهي.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "ما الذي تلاحظه في كلمة Mittwoch إذا قارنتها بـMitte وWoche؟ ثم جرّب أن تصوغ موعداً يجمع يوماً وساعةً.",
    motivatingQuestionDe: "Wann hast du Zeit?",
    contextAr:
      "في هذا الدرس نتعرف إلى أيام الأسبوع والشهور والفصول، ونقرأ تواريخ مختارة ونتدرب على صياغة موعد بسيط، مثل am Montag وum zehn Uhr. يبدأ ترتيب الأيام في أمثلتنا بالاثنين.",
    contextDe: "Der Termin ist am Montag um zehn Uhr.",
    connectionToPreviousAr:
      "يراجع الدرس قراءة الساعة وبعض أمثلة von … bis الواردة في درس الروتين A1-05، ثم يضيف أسماء التقويم وصيغاً أخرى للمواعيد.",
    activateVocabulary: [
      { de: "der Termin", ar: "الموعد" },
      { de: "der Montag", ar: "الاثنين" },
      { de: "der Monat", ar: "الشهر" },
      { de: "die Jahreszeit", ar: "الفصل (من فصول السنة)" },
      { de: "der Geburtstag", ar: "عيد الميلاد" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-08 — الفعل gefallen مع الضمير في الداتيف): اختر الشكل الصحيح.",
      questionDe: "Das Kleid ___ mir sehr gut.",
      questionAr: "هذا الفستان يعجبني كثيراً.",
      options: ["gefällt", "gefalle", "gefallen", "gefällst"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «ich gefalle» صيغة المتكلّم المفرد، والفاعل هنا «Das Kleid» (هو) فيلزم «es gefällt mir».", "لا — «gefallen» مصدرٌ أو صيغة الجمع «sie gefallen»؛ والفاعل «Das Kleid» مفرد فيلزم «gefällt».", "لا — «gefällst» صيغة المخاطب «du gefällst»؛ والمطلوب الغائب المفرد: «Das Kleid gefällt mir»."],
      explanation: "مع das Kleid (مفرد): gefällt.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-05 — الأفعال المنفصلة): أكمل الجملة.",
      template: "Ich ___ um sieben ___.",
      blanks: [
        { correct: "stehe", options: ["stehe", "stehst", "steht", "aufstehe"] },
        { correct: "auf", options: ["auf", "an", "aus", "ein"] },
      ],
      explanation: "الجزء الثاني من الفعل المنفصل يذهب إلى آخر الجملة: Ich stehe um sieben auf.",
      errorType: "word-order",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-07 — صيغ الجمع والكميات): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Ich kaufe zwei Apfel.",
      wrongWord: "Apfel",
      correctWord: "Äpfel",
      options: ["Äpfel", "Apfel", "Apfeln", "Äpfeln"],
      explanation: "بعد zwei نستخدم صيغة الجمع: zwei Äpfel.",
      errorType: "plural",
    },
  ];

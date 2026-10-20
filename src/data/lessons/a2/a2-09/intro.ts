/**
 * a2-09 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-09.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann aus vorgegebenen Angaben eine kurze Geburtstagseinladung formulieren und höflich annehmen.",
      ar: "أصوغ دعوة قصيرة لعيد الميلاد انطلاقاً من بيانات محددة، وأقبل دعوةً بعبارة مهذبة.",
      evidence: {
        exerciseIds: ["w1", "w4"],
        taskIds: ["writing:a2-09:w1", "writing:a2-09:w4"],
        labelAr: "اكتب الدعوة في w1 ثم اكتب قبولاً مناسباً في w4؛ لا يُحتسب ظهور النموذج أو فتح النشاط.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann gezielte Informationen und einfache Zusammenhänge aus einer kurzen Erzählung über eine Feier entnehmen.",
      ar: "أستخرج معلومات محددة وعلاقات بسيطة من قصة قصيرة عن مناسبة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-09:rq1",
          "reading:read-a2-09:rq2",
          "reading:read-a2-09:rq3",
          "reading:read-a2-09:rq4",
        ],
        labelAr: "أجب عن أسئلة المكان والهدية والمساعدة والسبب في rq1–rq4؛ لا يكفي فتح القراءة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ausgewählte Dativformen von Artikeln und Personalpronomen nach häufigen Verben verwenden.",
      ar: "أختار صيغاً منتقاة من أدوات التعريف والضمائر في Dativ بعد أفعال شائعة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e6", "w2", "m1", "m5"],
        taskIds: [
          "practice:a2-09:e1",
          "practice:a2-09:e2",
          "practice:a2-09:e6",
          "writing:a2-09:w2",
          "mini-test:a2-09:m1",
          "flow-mini-test:a2-09:m1",
          "mini-test:a2-09:m5",
        ],
        labelAr:
          "أكمل أدوات الأسماء في e1/e2/e6، ثم ضمائر Dativ في w2 وm5، واختر الأداة في m1؛ التدفق لا يعرض كل بنك التدريب.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausgewählte Dativ-Ergänzungen bei helfen, gehören, gefallen, gratulieren und danken erkennen.",
      ar: "أميّز متمم Dativ في تراكيب مختارة مع helfen وgehören وgefallen وgratulieren وdanken.",
      evidence: {
        exerciseIds: ["e2", "e5", "e7", "e11", "e13", "m2", "m4"],
        taskIds: [
          "practice:a2-09:e2",
          "practice:a2-09:e5",
          "practice:a2-09:e7",
          "practice:a2-09:e11",
          "practice:a2-09:e13",
          "mini-test:a2-09:m2",
          "flow-mini-test:a2-09:m2",
          "mini-test:a2-09:m4",
        ],
        labelAr:
          "اختر Dativ بعد gehören في e2، وصحّح ضمير gratulieren في e5، وحوّل المعنى إلى جملة مع helfen في e7، واختر اتفاق gefallen في e11، وأكمل إطار gratulieren في e13، واختر Dativ بعد danken في m2 وبعد helfen في m4؛ لا تعمّم ذلك على كل فعل.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgewählte Dativ-Präpositionen und den Orts-/Richtungsunterschied bei in erkennen.",
      ar: "أستخدم حروف جر مختارة مع Dativ وأميّز المكان من الوجهة مع in.",
      evidence: {
        exerciseIds: ["e12", "e14"],
        taskIds: ["practice:a2-09:e12", "practice:a2-09:e14"],
        labelAr:
          "اختر mit + Dativ لوسيلة النقل في e12، وميّز in den للوجهة عن im للمكان في e14؛ يلزم إجابة صحيحة عن المهمتين.",
        completion: "all-correct",
      },
    },
    {
      id: "z-listening",
      de: "Ich kann ausgewählte Angaben zu Tag, Uhrzeit und Person aus zwei kurzen Dialogen heraushören.",
      ar: "ألتقط اليوم والوقت والشخص من حوارين قصيرين قبل كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr:
          "أجب عن أسئلة اليوم والساعة وهوية من خبز التورتة أثناء الاستماع؛ نتيجة transcript بعد كشف النص ليست دليلاً على الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann eine kurze Geburtstagseinladung und eine passende Antwort mit einfachen Angaben schreiben sowie kurze Dativ-Sätze ergänzen und notieren.",
      ar: "أكتب دعوة قصيرة بعيد الميلاد ورداً مناسباً ببيانات بسيطة، وأكمل جملاً منتقاة بـDativ وأدوّن جملة من الإملاء.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3", "w4"],
        taskIds: [
          "writing:a2-09:w1",
          "writing:a2-09:w2",
          "writing:a2-09:w3",
          "writing:a2-09:w4",
        ],
        labelAr:
          "أنجز الدعوة في w1، والإكمال النحوي في w2، والإملاء في w3، وردّ القبول في w4؛ هذه مهام كتابة مضبوطة وليست كتابة حرة.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "كيف تكتب دعوةً بسيطة وتردّ عليها بوضوح؟ وما الفرق بين Ich lade dich ein وIch gratuliere dir؟ ابدأ بالفعل، ثم لاحظ المتمم الذي يطلبه.",
    motivatingQuestionDe: "Wie lädst du jemanden zu einer Feier ein?",
    contextAr:
      "تدور الأمثلة حول عيد ميلاد خيالي: دعوة الجيران، الحديث عن هدية، والردّ بأدب. نراجع تراكيب Dativ سبق أن ظهرت، ونضيف إليها أسماءً وحروف جرّ في سياقات محددة.",
    contextDe: "Herzlichen Glückwunsch zum Geburtstag!",
    connectionToPreviousAr:
      "هذا درس تراكمي لا أول لقاء بـDativ: ظهر Dativ المكاني في A1-04، وظهر helfen في A1-06 وgefallen/passen في A1-08، ثم تدربت على ضمائر مثل Ich helfe dir في A2-07. هنا نطبّق صيغاً اسمية وأفعالاً وحروف جر منتقاة ضمن دعوة واحتفال؛ ولا ندّعي تغطية كل وظائف الحالة.",
    activateVocabulary: [
      { de: "das Fest", ar: "المناسبة / الاحتفال" },
      { de: "die Einladung", ar: "الدعوة" },
      { de: "feiern", ar: "يحتفل" },
      { de: "das Geschenk", ar: "الهدية" },
      { de: "der Geburtstag", ar: "عيد ميلاد شخص" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-02 — العائلة والأصدقاء: الملكية)؛ طبّق الآن Dativ بعد helfen:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation:
        "في هذا التركيب يأخذ helfen متمماً في Dativ؛ وضمير الملكية مع Bruder المذكر في Dativ هو meinem.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«meinen» منصوب؛ و«helfen» يأخذ Dativ ⇒ «meinem Bruder».",
        "«mein» مرفوع أو محايد؛ والمطلوب Dativ مذكر.",
        "«meine» للمؤنث أو الجمع؛ و«der Bruder» مذكر مفرد. ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-09 — المواعيد والتقويم): اختر المعنى:",
      questionDe: "der Geburtstag",
      options: ["عيد ميلاد شخص", "رأس السنة الميلادية", "عيد زواج والديها", "عطلة رسمية في البلد"],
      correctIndex: 0,
      explanation: "Geburtstag هو يوم ذكرى ولادة الشخص؛ لا يعني رأس السنة أو عطلة رسمية.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "رأس السنة «Neujahr» أو «Silvester»، لا «der Geburtstag».",
        "عيد الزواج «der Hochzeitstag» مناسبةٌ أخرى.",
        "العطلة الرسمية «der Feiertag»، لا يوم ميلاد شخص. ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A2 (درس a2-07 — البنك والمال: صيغ الضمائر بعد الأفعال): أكمل بضمير Akkusativ بعد einladen:",
      template: "Ich möchte ___ einladen. (أنتَ)",
      blanks: [{ correct: "dich", options: ["dich", "dir", "mich"] }],
      explanation:
        "في معنى دعوة شخص، يأخذ einladen مفعولاً في Akkusativ: dich. لا نستنتج الحالة من ترجمة الضمير العربية.",
      errorType: "case",
    },
  ];

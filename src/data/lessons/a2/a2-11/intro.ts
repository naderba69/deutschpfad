/**
 * a2-11 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Verständnisfragen zu drei kurzen Dialogen bei ausgeblendetem Transkript richtig beantworten.",
      ar: "أن أجيب إجابة صحيحة عن أسئلة فهم محددة للحوارات الثلاثة مع بقاء تفريغها مخفياً؛ ويسجل النظام صحة الإجابة لا تشغيل الصوت.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجب صحيحاً عن الأسئلة الأربعة في تبويب الفهم مع بقاء تفريغ الحوار المرتبط بكل سؤال مخفياً. لا يسجل النظام تشغيل الصوت؛ الإجابات بعد كشف التفريغ لا تُحتسب لهذا الهدف، وفتح المقطع وحده ليس دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Sätzen passende Reflexivpronomen auswählen.",
      ar: "أن أختار الضمير الانعكاسي المناسب في جمل موجّهة؛ وهذا اختيار موجّه لا إنتاج حر.",
      evidence: {
        exerciseIds: ["e1", "e6", "w2"],
        taskIds: ["practice:a2-11:e1", "practice:a2-11:e6", "writing:a2-11:w2"],
        labelAr: "أجب صحيحاً عن e1 وe6 في التدريب (ويظهر e1 أيضاً ضمن أول أربعة تمارين في مسار التدفق)، ثم اختر الضمائر المناسبة لفراغات w2؛ هذه مهام اختيار موجّه لا كتابة حرة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann eine vorgegebene höfliche Beschwerdeformel schriftlich bilden.",
      ar: "أن أكتب صيغة افتتاحية مهذبة للشكوى عند إعطائي معناها والتعبير المطلوب؛ وهذا لا يقيس محادثة حرة.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a2-11:w4"],
        labelAr: "اكتب العبارة المحددة في w4؛ لا يُحتسب اختيار ردّ مكتوب في محاكاة التفاعل أداءً شفهياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgewählte Angaben einem Übungsformular zuordnen und in vorgegebene Felder eintragen.",
      ar: "أن أطابق بعض أسماء الخانات وأضع بيانات معطاة في نموذج تدريبي افتراضي، لا أن أملأ كل النماذج الرسمية.",
      evidence: {
        exerciseIds: ["e11", "w5"],
        taskIds: ["practice:a2-11:e11", "writing:a2-11:w5"],
        labelAr: "أنجز مطابقة الحقول في e11 عند ظهوره في إحدى جلسات التدريب العشوائية، ثم اكتب البيانات التدريبية المعطاة في حقول w5؛ عرض النموذج وحده لا يثبت الأداء.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في هذا المعنى نقول بالعربية «أنا مسرور»، وبالألمانية: Ich freue mich. لا تترجم mich هنا حرفياً إلى «نفسي»؛ فالمعنى هو «أنا مسرور/أتطلع إلى…» بحسب ما يأتي بعد الفعل. وقارن لاحقاً بين Ich wasche mich وIch wasche mir die Hände.",
    motivatingQuestionDe: "Was kann ich für Sie tun?",
    contextAr:
      "نتدرّب على مشاهد مختارة عند الحلاق وخدمة إصلاح هاتف، وعلى صيغ انعكاسية شائعة، ثم نكتب عبارة افتتاحية مهذبة للشكوى ونكمل نموذجاً تدريبياً افتراضياً.",
    contextDe: "Ich möchte mich beschweren.",
    connectionToPreviousAr:
      "تتذكر صيغ الضمائر الشخصية من A2-07. هنا تظهر الصيغة الانعكاسية بحسب بناء الفعل: في Ich freue mich تأتي mich، وفي Ich wasche mir die Hände تأتي mir مع مفعول Akkusativ صريح. لا تطابق تسمية Akkusativ أو Dativ الإعراب العربي حرفياً.",
    activateVocabulary: [
      { de: "die Post", ar: "خدمة البريد أو مكتب البريد بحسب السياق" },
      { de: "der Friseur", ar: "الحلاق" },
      { de: "reparieren", ar: "يصلح" },
      { de: "sich beschweren", ar: "يشتكي" },
      { de: "der Termin", ar: "الموعد" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-07 — البنك والمال): اختر الضمير الصحيح:",
      questionDe: "Ich sehe ___. (أنتَ)",
      options: ["dich", "dir", "mich", "mir"],
      correctIndex: 0,
      explanation: "في معنى الرؤية هنا، يأخذ sehen مكمّلاً في Akkusativ: dich. لا تطابق تسمية الحالة الألمانية الإعراب العربي حرفياً.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«dir» في Dativ؛ و«sehen» يأخذ مفعولاً في Akkusativ ⇒ «Ich sehe dich».",
        "«mich» ضمير المتكلم؛ والمقصود هنا «أنتَ» ⇒ «dich».",
        "«mir» Dativ للمتكلم؛ فالخطأ في الحالة وفي الشخص معاً. ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر المعنى الأنسب في هذا السياق:",
      questionDe: "Ich gehe zur Post. Was bedeutet „zur Post“ hier?",
      questionAr: "إلى أين أذهب؟",
      options: ["إلى مكتب البريد", "إلى البنك", "إلى المحطة", "إلى الصيدلية"],
      correctIndex: 0,
      explanation: "zur Post هنا = إلى مكتب البريد؛ وقد تعني die Post خدمة البريد أيضاً بحسب السياق.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "البنك «die Bank»: «Ich gehe zur Bank» لا «zur Post».",
        "المحطة «der Bahnhof»: «Ich gehe zum Bahnhof».",
        "الصيدلية «die Apotheke»: «Ich gehe zur Apotheke». ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): أكمل طلب كوب واحد:",
      template: "Ich möchte ___ Tee. (كوب واحد)",
      blanks: [
        { correct: "einen", options: ["einen", "ein", "eine"] },
      ],
      explanation: "في هذا السياق المقصود حصة واحدة: `einen Tee`؛ الاسم مذكر ومفعول `möchten` هنا في Akkusativ. ويمكن استعمال `Tee` بلا أداة في سياق آخر عند الحديث عن الشاي كمادة عامة (مراجعة A1-03).",
      errorType: "case",
    },
  ];

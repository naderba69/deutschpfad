/**
 * b2-07 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Aussagen zu abstrakten Themen verstehen.",
      ar: "أن أفهم حديثاً عن موضوع فلسفي مجرد: ماذا يعني حياة جيدة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1"],
        taskIds: ["listening:l1:q1"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 في q1، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Futur II bilden: werde + Partizip II + haben/sein.",
      ar: "أن أبني المستقبل التام: سيكون قد فعل.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e4", "e5", "m1", "m2", "w1", "w2"],
        taskIds: [
          "practice:b2-07:e1",
          "practice:b2-07:e2",
          "practice:b2-07:e4",
          "practice:b2-07:e5",
          "mini-test:b2-07:m1",
          "mini-test:b2-07:m2",
          "writing:b2-07:w1",
          "writing:b2-07:w2",
        ],
        labelAr: "أختار haben أو sein وأرتب الجملة وأصحح المساعد الخطأ (e1 إلى e5 وm1 وm2 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Redemittel der Erörterung benutzen.",
      ar: "أن أستخدم عبارات المقال الجدلي: في رأيي، ومن ناحية... ومن ناحية أخرى.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e6", "e7", "m5"],
        taskIds: ["practice:b2-07:e6", "practice:b2-07:e7", "mini-test:b2-07:m5"],
        labelAr: "أكمل عبارات الرأي والروابط الجدلية وأكتب عبارة الخاتمة (e6 وe7 وm5)، دون كشف الحل. لا يقيس هذا كتابة مقال كامل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Pro- und Contra-Argumente verstehen.",
      ar: "أن أفهم الحجج المؤيدة والمعارضة في حديث قصير.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q2", "q3"],
        taskIds: ["listening:l2:q2", "listening:l2:q3"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l2 في q2 وq3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في B1 تعلمت المستقبل (werde lernen). ماذا لو أردت: «سيكون قد أنهى»؟ هنا المستقبل التام: Er wird fertig geworden sein. التركيب: werde + Partizip II + haben/sein في النهاية. وهو قريب في المعنى من «سيكون قد...» في العربية.",
    motivatingQuestionDe: "Was bedeutet ein gutes Leben?",
    contextAr:
      "الفلسفة: أسئلة كبرى. نضيف المستقبل التام للتعبير عن «الانتهاء في المستقبل»، ثم نتعلم هيكل المقال الجدلي (Erörterung) — مهارة مهمة في الكتابة الأكاديمية.",
    contextDe: "Bis 2030 wird die Gesellschaft sich verändert haben.",
    connectionToPreviousAr: "تتذكر Futur I (werde lernen) وPerfekt (habe gelernt). اليوم: دمجهما — Futur II. ومعه الكتابة الجدلية التي تجمع كل قواعد B2.",
    activateVocabulary: [
      { de: "die Philosophie", ar: "الفلسفة" },
      { de: "argumentieren", ar: "يبني حجة" },
      { de: "die These", ar: "الأطروحة" },
      { de: "die Erörterung", ar: "المقال الجدلي" },
      { de: "die Gesellschaft", ar: "المجتمع" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-10 — المستقبل والخطط: werden): اختر الصيغة:",
      questionDe: "Ich ___ morgen lernen.",
      options: ["werde", "wirst", "wird", "werden"],
      correctIndex: 0,
      explanation: "مع ich: werde.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wirst» مع du، ولا تناسب ich.",
        "«wird» مع er أو sie أو es، ولا تناسب ich.",
        "«werden» مع الجمع أو sie أو wir، ولا تناسب ich.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-01 — السفر والعطلات): اختر Perfekt:",
      questionDe: "Ich habe ein Buch ___.",
      options: ["gelesen", "lesen", "gelest", "liest"],
      correctIndex: 0,
      explanation: "lesen → gelesen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«lesen» مصدر، ولا يكوّن زمن Perfekt مع haben.",
        "«gelest» صيغة غير صحيحة لهذا الفعل.",
        "«liest» صيغة المضارع، ولا تناسب Perfekt مع haben.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2 (درس b2-01 — العلوم والبحث): أكمل:",
      template: "Er sagt, er ___ Zeit. (Konjunktiv I من haben)",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
      ],
      explanation: "Konjunktiv I: habe (درس العلوم B2).",
      errorType: "grammar",
    },
  ];

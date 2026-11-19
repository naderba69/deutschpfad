/**
 * a1-11 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-11.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      "id": "z1",
      "de": "Ich kann ausgewählte Orte der Stadt ihren Bedeutungen zuordnen.",
      "ar": "أطابق أسماء أماكن مختارة بمعانيها في تمرين المفردات المحدد؛ لا تكفي مراجعة البطاقات.",
      "evidence": {
        "exerciseIds": [
          "e3"
        ],
        "taskIds": [
          "practice:a1-11:e3"
        ],
        "labelAr": "أنجز مطابقة الأماكن في e3 إجابة صحيحة؛ مشاهدة الكلمات أو فتح التمرين لا تسجل دليلاً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z2",
      "de": "Ich kann eine einfache Frage nach dem Weg in den geübten Formen formulieren.",
      "ar": "أكوّن صيغة سؤال مكتوبة عن مكان أو طريق في نمطي Wo ist …? وWie komme ich …?؛ هذا لا يثبت أنني نطقتها شفهياً.",
      "evidence": {
        "exerciseIds": [
          "e7",
          "e22"
        ],
        "taskIds": [
          "practice:a1-11:e7",
          "practice:a1-11:e22"
        ],
        "labelAr": "أجب عن e7 وe22 كليهما؛ يقيس ذلك تكوين الصيغة وترتيب كلماتها في هاتين المهمتين، لا أداءً شفهياً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z3",
      "de": "Ich kann ausgewählte Richtungsangaben zuordnen und einer kurzen Wegbeschreibung eine Abzweigung entnehmen.",
      "ar": "أختار الاتجاه في التمرينين المحددين وأستخرج أول انعطاف من نص القراءة؛ لا أعمم ذلك على فهم كل الإرشادات.",
      "evidence": {
        "exerciseIds": [
          "e4",
          "e6",
          "rq2"
        ],
        "taskIds": [
          "practice:a1-11:e4",
          "practice:a1-11:e6",
          "reading:read-a1-11:rq2"
        ],
        "labelAr": "رتّب صيغة الاتجاه في e4، وأكمل الاتجاهات في e6، ثم أجب عن سؤال القراءة rq2؛ يلزم أداء المهام الثلاث.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z4",
      "de": "Ich kann in den geübten Sätzen die passende Orts- oder Zielangabe auswählen.",
      "ar": "أختار بين تعبيرات الموقع والوجهة في الأمثلة المحددة، مع تمييز in der Stadt / in die Stadt وnach Hause / zu Hause.",
      "evidence": {
        "exerciseIds": [
          "e1",
          "e2",
          "e5",
          "e9",
          "e19",
          "e20",
          "e23",
          "m1",
          "m4",
          "m5",
          "w1",
          "w2"
        ],
        "taskIds": [
          "practice:a1-11:e1",
          "practice:a1-11:e2",
          "practice:a1-11:e5",
          "practice:a1-11:e9",
          "practice:a1-11:e19",
          "practice:a1-11:e20",
          "practice:a1-11:e23",
          "mini-test:a1-11:m1",
          "mini-test:a1-11:m4",
          "mini-test:a1-11:m5",
          "writing:a1-11:w1",
          "writing:a1-11:w2"
        ],
        "labelAr": "أجب عن مهام الوجهة والموقع e1 وe2 وe5 وe9 وe19 وe20 وe23 وm1 وm4 وm5 وw1 وw2 كلها؛ بعض الصيغ البديلة تتوقف على المعنى والسياق.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z5",
      "de": "Ich kann für Verkehrsmittel die geübten Formen mit + Dativ und passende Bewegungsverben in klaren Kontexten verwenden.",
      "ar": "أضبط صيغ mit + Dativ وzu Fuß في التمارين، وأميّز الفعل الأنسب عندما تسمّي الجملة وسيلة النقل صراحةً.",
      "evidence": {
        "exerciseIds": [
          "e11",
          "e12",
          "e13",
          "e14",
          "e15",
          "e21",
          "e25",
          "e27"
        ],
        "taskIds": [
          "practice:a1-11:e11",
          "practice:a1-11:e12",
          "practice:a1-11:e13",
          "practice:a1-11:e14",
          "practice:a1-11:e15",
          "practice:a1-11:e21",
          "practice:a1-11:e25",
          "practice:a1-11:e27"
        ],
        "labelAr": "أنجز تدريبات mit وzu Fuß والوسيلة والفعل في e11–e15 وe21 وe25 وe27 كلها؛ e27 يتحقق من عدم تصحيح Ich gehe nach Berlin خارج سياق يحدد الوسيلة.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z6",
      "de": "Ich kann die geübten direkten Objektpronomen passend zu ausgewählten deutschen Nomen einsetzen.",
      "ar": "أختار ضمير المفعول المنصوب وفق جنس الاسم الألماني في الأمثلة المحددة، وأميّزه من ضمير الفاعل.",
      "evidence": {
        "exerciseIds": [
          "e16",
          "e17",
          "e18",
          "e24",
          "e26"
        ],
        "taskIds": [
          "practice:a1-11:e16",
          "practice:a1-11:e17",
          "practice:a1-11:e18",
          "practice:a1-11:e24",
          "practice:a1-11:e26"
        ],
        "labelAr": "أجب عن اختيار الضمير وتصحيحه واستبدال الاسم في e16–e18 وe24 وe26 كلها؛ لا تستنتج جنس الاسم الألماني من مقابله العربي.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z7",
      "de": "Ich kann ausgewählte Informationen aus dem kurzen Lesetext entnehmen.",
      "ar": "أستخرج المعلومات التي تسأل عنها أسئلة فهم النص الألماني القصير، من دون ادعاء كفاءة قراءة عامة.",
      "evidence": {
        "exerciseIds": [
          "rq1",
          "rq2",
          "rq3",
          "rq4",
          "rq5"
        ],
        "taskIds": [
          "reading:read-a1-11:rq1",
          "reading:read-a1-11:rq2",
          "reading:read-a1-11:rq3",
          "reading:read-a1-11:rq4",
          "reading:read-a1-11:rq5"
        ],
        "labelAr": "أجب عن أسئلة القراءة rq1–rq5 كلها إجابة صحيحة؛ إظهار النص أو ترجمته وحده لا يسجل أداءً.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z8",
      "de": "Ich kann ausgewählte Angaben aus drei bereitgestellten, vorgelesenen Dialogen wiedererkennen.",
      "ar": "أحدد المعلومات التي تسأل عنها الأسئلة الستة في ثلاثة حوارات قصيرة تُنطق عبر TTS؛ يُسجّل الدليل عند الإجابة قبل كشف النص، ولا يثبت إتقاناً عاماً للاستماع.",
      "evidence": {
        "exerciseIds": [
          "q1",
          "q2",
          "q3",
          "q4",
          "q5",
          "q6"
        ],
        "taskIds": [
          "listening:l1:q1",
          "listening:l2:q2",
          "listening:l2:q3",
          "listening:l3:q4",
          "listening:l3:q5",
          "listening:l3:q6"
        ],
        "labelAr": "أجب عن q1–q6 بعد الاستماع وقبل كشف النص؛ كشفه، حتى إن أخفيته لاحقاً، يجعل الإجابات خارج دليل الاستماع. ولا تُحتسب إجابات المسار المرحلي الذي يعرض النص.",
        "completion": "all-correct"
      }
    },
    {
      "id": "z9",
      "de": "Ich kann die geübten Zielangaben schriftlich formulieren und einen kurzen Satz nach Diktat verschriften.",
      "ar": "أكتب إجابة قصيرة عن الوجهة، وأملأ تعبيرات محددة، وأدوّن جملة الإملاء في مهام الكتابة الثلاث.",
      "evidence": {
        "exerciseIds": [
          "w1",
          "w2",
          "w3"
        ],
        "taskIds": [
          "writing:a1-11:w1",
          "writing:a1-11:w2",
          "writing:a1-11:w3"
        ],
        "labelAr": "اكتب في w1، وأكمل w2، ثم أنجز الإملاء w3؛ يلزم الصواب في المهام الثلاث، لا مجرد عرض نموذج الإجابة.",
        "completion": "all-correct"
      }
    }
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "أين محطة القطار، وكيف أسأل عن طريق الوصول إليها؟ قارن Wo ist der Bahnhof? وWie komme ich zum Bahnhof? ثم لاحظ in في in der Stadt / in die Stadt: ما العلاقة المكانية التي تغيّرت؟ هل يكفي وجود حركة لاختيار Akkusativ؟",
    motivatingQuestionDe: "Entschuldigung, wo ist der Bahnhof?",
    contextAr:
      "في مدينة جديدة، تسمية الأماكن وطلب إعادة الاتجاه وفهم وسيلة النقل تساعدك على متابعة الحديث. سنقارن تعبيرات الوجهة والموقع بحسب العلاقة المقصودة؛ لا نستخدم قاعدة آلية تقول إن كل حركة تأخذ Akkusativ.",
    contextDe: "Gehen Sie geradeaus und dann links!",
    connectionToPreviousAr:
      "سبق أن تدربنا على وصف أماكن وصيغ حالات في تراكيب مختلفة. هنا نعيد النظر إلى المكان ونقارن Wo? بـWohin? مع in في أمثلة محددة، مع تذكّر أن حروفاً مثل zu وmit تحكم الحالة بطريقة أخرى؛ وليس هذا أول تعرض لـDativ.",
    activateVocabulary: [
      { de: "die Stadt", ar: "المدينة" },
      { de: "der Bahnhof", ar: "محطة القطار" },
      { de: "die Straße", ar: "الشارع" },
      { de: "geradeaus", ar: "مباشرة (للأمام)" },
      { de: "rechts / links", ar: "يمين / يسار" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-10 — النفي بـ nicht وkein): اختر الكلمة الصحيحة.",
      questionDe: "Ich habe ___ Auto.",
      questionAr: "ليست لدي سيارة.",
      options: ["kein", "nicht", "keine", "keinen"],
      correctIndex: 0,
      explanation: "عند النفي للاسم بعد habe نستخدم kein: kein Auto.",
      errorType: "negation",
      optionExplanations: [
        undefined,
        "«nicht» تنفي الصفة أو الفعل؛ والمنفيّ اسم بنكرة «Auto» ⇒ «kein».",
        "«keine» لمؤنث أو جمع؛ و«das Auto» محايد.",
        "«keinen» منصوب مذكر؛ و«das Auto» محايد ⇒ «kein Auto».",
      ],
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-04 — حروف الجر مع الداتيف للمكان): أكمل الجملة.",
      template: "Die Lampe hängt über ___ Sofa.",
      blanks: [{ correct: "dem", options: ["dem", "den", "der", "die"] }],
      explanation: "حرف الجر über مع المكان يأخذ الداتيف: über dem Sofa.",
      errorType: "case",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-06 — الأمر Imperativ): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Gehst geradeaus!",
      wrongWord: "Gehst",
      correctWord: "Geh",
      options: ["Geh", "Gehst", "Gehe", "Gehen"],
      explanation: "في الأمر لشخص واحد (du) نقول: Geh geradeaus!",
      errorType: "grammar",
    },
  ];

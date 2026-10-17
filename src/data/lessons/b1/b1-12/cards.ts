/**
 * b1-12 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Er nimmt einen Kurs, ___ besser Deutsch ___ sprechen.",
      options: ["um … zu", "damit … zu", "wegen … zu", "trotz … zu"],
      correctIndex: 0,
      explanation: "الفاعل واحد ⇒ um … zu.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«damit … zu» غير صحيحة، لأن damit لا تُستعمل مع zu.",
        "«wegen … zu» غير صحيحة، لأن wegen حرف جر ولا تربط جملة.",
        "«trotz … zu» غير صحيحة، لأن trotz حرف جر ولا تُستعمل مع zu.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Ich rufe dich an, ___ du Bescheid weißt.",
      options: ["damit", "um zu", "trotz", "aufgrund"],
      correctIndex: 0,
      explanation: "الفاعل مختلف (أنا أتصل، أنت تعلم) ⇒ damit.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«um zu» تستعمل مع مصدر بلا فاعل، ولا تناسب جملة كاملة بعد الفاصلة.",
        "«trotz» تعني رغم، وهذا عكس المعنى المطلوب.",
        "«aufgrund» تعني بسبب، ولا تناسب الغاية في الجملة.",
      ],
    },
    {
      id: "m3",
      type: "fill-blank",
      instructionAr: "أكمل بأداة المضاف إليه:",
      template: "Aufgrund ___ Krise sparen viele Menschen.",
      blanks: [
        { correct: "der", options: ["der", "des", "dem"] },
      ],
      explanation: "die Krise مؤنّث ⇒ der Krise.",
      errorType: "case",
    },
    {
      id: "m4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Sie", "spart", "Geld", "um", "eine", "Reise", "zu", "machen", ",", "."],
      correctSentence: "Sie spart Geld, um eine Reise zu machen.",
      explanation: "um + المفعول + zu + المصدر في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wegen der Verkehrs kommen wir später.",
      wrongWord: "der",
      correctWord: "des",
      options: ["des", "der", "dem", "den"],
      explanation: "der Verkehr مذكّر ⇒ des Verkehrs في المضاف إليه.",
      errorType: "case",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "um … zu", ar: "لكي (فاعل واحد)", example: "Ich lerne, um zu studieren.", exampleAr: "أتعلّم لكي أدرس.", level: "B1" },
    { id: "fc2", de: "damit", ar: "لكي (فاعلان مختلفان)", example: "Ich erkläre es, damit du es verstehst.", exampleAr: "أشرحها لكي تفهمها.", level: "B1" },
    { id: "fc3", de: "wegen", ar: "بسبب (+ مضاف إليه)", example: "Wegen des Regens bleibe ich hier.", exampleAr: "بسبب المطر أبقى هنا.", level: "B1" },
    { id: "fc4", de: "trotz", ar: "رغم (+ مضاف إليه)", example: "Trotz der Kälte gehe ich raus.", exampleAr: "رغم البرد أخرج.", level: "B1" },
    { id: "fc5", de: "während", ar: "أثناء (+ مضاف إليه)", example: "Während der Pause esse ich.", exampleAr: "أثناء الاستراحة آكل.", level: "B1" },
    { id: "fc6", de: "aufgrund", ar: "نتيجةً لـ (+ مضاف إليه)", example: "Aufgrund der Krise sparen wir.", exampleAr: "نتيجةً للأزمة نوفّر.", level: "B1" },
    { id: "fc7", de: "das Ziel", ar: "الهدف", example: "Mein Ziel ist das Niveau B2.", exampleAr: "هدفي هو المستوى B2.", level: "B1" },
    { id: "fc8", de: "der Grund", ar: "السبب", example: "Der Grund ist einfach.", exampleAr: "السبب بسيط.", level: "B1" },
    { id: "fc9", de: "die Absicht", ar: "النية", example: "Das war nicht meine Absicht.", exampleAr: "لم تكن تلك نيّتي.", level: "B1" },
    { id: "fc10", de: "der Zweck", ar: "الغرض", example: "Welchen Zweck hat das?", exampleAr: "ما الغرض من هذا؟", level: "B1" },
    { id: "fc11", de: "die Voraussetzung", ar: "الشرط المسبق", example: "Deutsch ist die Voraussetzung.", exampleAr: "الألمانية هي الشرط المسبق.", level: "B1" },
    { id: "fc12", de: "innerhalb", ar: "خلال (+ مضاف إليه)", example: "Innerhalb einer Woche antworte ich.", exampleAr: "خلال أسبوع أردّ.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b1-12-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص إعلان دورة لغة بالعربية",
      sourceDe:
        "Der Intensivkurs findet während der Sommerferien statt. Aufgrund der hohen Nachfrage gibt es nur 15 Plätze. Viele Teilnehmer besuchen den Kurs, um sich auf die B2-Prüfung vorzubereiten.",
      taskAr: "لخّص لصديق: متى الدورة، ولماذا الأماكن محدودة، ولماذا يحضرها المشاركون.",
      modelAnswerAr:
        "«الدورة المكثّفة أثناء العطلة الصيفية. نتيجةً للطلب الكبير لا يوجد سوى خمسة عشر مقعداً. كثير من المشاركين يحضرونها لكي يستعدّوا لامتحان B2.»",
      keyPointsAr: [
        "نقلت الزمن (أثناء العطلة الصيفية)",
        "نقلت سبب محدودية المقاعد (الطلب الكبير)",
        "نقلت الغرض من الحضور (الاستعداد لامتحان B2)",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-12-1",
      scenarioAr: "مقابلة في مركز لغات: يسألك الموظّف عن هدفك من الدورة.",
      scenarioDe: "Beratungsgespräch in einer Sprachschule.",
      strategyAr: "الاستراتيجية: صُغ هدفك بجملة غرض صريحة بدل جواب عام، واذكر سببك باسم مختصر.",
      rounds: [
        {
          speakerDe: "Warum möchten Sie diesen Kurs besuchen?",
          speakerAr: "لماذا تريد حضور هذه الدورة؟",
          options: [
            {
              de: "Ich besuche den Kurs, um mich auf die B2-Prüfung vorzubereiten. Aufgrund meiner Arbeit brauche ich das Zertifikat.",
              ar: "أحضر الدورة لكي أستعدّ لامتحان B2. نتيجةً لعملي أحتاج الشهادة.",
              best: true,
              replyDe: "Sehr klar formuliert. Dann passt der Abendkurs gut zu Ihnen.",
              replyAr: "صياغة واضحة جداً. إذن الدورة المسائية تناسبك.",
            },
            {
              de: "Weil Deutsch schön ist.",
              ar: "لأنّ الألمانية جميلة.",
              best: false,
              replyDe: "Das freut mich, aber welches konkrete Ziel haben Sie?",
              replyAr: "يسعدني ذلك، لكن ما هدفك الملموس؟",
            },
          ],
        },
        {
          speakerDe: "Der Kurs findet während der Woche statt. Ist das ein Problem?",
          speakerAr: "الدورة أثناء أيام الأسبوع. هل هذه مشكلة؟",
          options: [
            {
              de: "Trotz meiner Arbeitszeiten schaffe ich das. Ich komme früher, damit ich nichts verpasse.",
              ar: "رغم أوقات عملي سأتدبّر الأمر. سآتي أبكر لكي لا يفوتني شيء.",
              best: true,
              replyDe: "Gut. Ich trage Sie für den Kurs ein.",
              replyAr: "جيد. سأسجّلك في الدورة.",
            },
            {
              de: "Ja, ich kann nicht kommen wegen die Arbeit.",
              ar: "نعم، لا أستطيع الحضور بسبب العمل.",
              best: false,
              replyDe: "Sie meinen sicher „wegen der Arbeit“. Sollen wir einen Abendkurs suchen?",
              replyAr: "تقصد «wegen der Arbeit». هل نبحث عن دورة مسائية؟",
            },
          ],
        },
      ],
    },
  ];

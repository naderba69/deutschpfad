/**
 * b2-07 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Futur II:",
      questionDe: "Bis 2030 ___ ich Deutsch gelernt ___.",
      options: ["werde ... haben", "werde ... sein", "wird ... haben", "habe ... worden"],
      correctIndex: 0,
      explanation: "فعل عادي: werde + haben.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«werde ... sein» تستعمل sein مع فعل لا يأخذ sein في هذا السياق، والمطلوب haben.",
        "«wird ... haben» مع ich خاطئة؛ الصيغة الصحيحة werde.",
        "«habe ... worden» زمن غير مناسب مع Futur II.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Futur II (حركة):",
      questionDe: "Wir werden ___ angekommen ___.",
      options: ["... sein", "... haben", "... gehabt", "... worden"],
      correctIndex: 0,
      explanation: "حركة → sein.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«... haben» تستعمل مع أفعال الحركة مثل ankommen، والمطلوب sein.",
        "«... gehabt» صيغة غير صحيحة هنا.",
        "«... worden» تستعمل مع المبني للمجهول، ولا تناسب الفعل ankommen.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Meiner", "nach", "ist", "Meinung", "das", "wichtig", "."],
      correctSentence: "Meiner Meinung nach ist das wichtig.",
      explanation: "في رأيي هذا مهم.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Sie wird das Buch gelesen sein.",
      wrongWord: "sein",
      correctWord: "haben",
      options: ["haben", "sein", "gehabt", "worden"],
      explanation: "قراءة فعل عادي → haben.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بعبارة:",
      template: "___ Meinung nach... (في رأيي) · ___ ist Technik nützlich, andererseits... (من ناحية)",
      blanks: [
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Einerseits", options: ["Einerseits", "Andererseits", "Außerdem"] },
      ],
      explanation: "Meiner Meinung nach + einerseits.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Philosophie", ar: "الفلسفة", example: "Philosophie fragt nach dem Sinn.", exampleAr: "تسأل الفلسفة عن المعنى.", level: "B2" },
    { id: "fc2", de: "die These", ar: "الأطروحة", example: "Die These ist klar.", exampleAr: "الأطروحة واضحة.", level: "B2" },
    { id: "fc3", de: "das Argument", ar: "الحجة", example: "Das Argument ist stark.", exampleAr: "الحجة قوية.", level: "B2" },
    { id: "fc4", de: "die Erörterung", ar: "المقال الجدلي", example: "Die Erörterung ist gut strukturiert.", exampleAr: "المقال الجدلي منظم جيداً.", level: "B2" },
    { id: "fc5", de: "das Futur II", ar: "المستقبل التام", example: "werde gelernt haben", exampleAr: "سأكون قد تعلمت", level: "B2" },
    { id: "fc6", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist das gut.", exampleAr: "في رأيي هذا جيد.", level: "B2" },
    { id: "fc7", de: "einerseits... andererseits", ar: "من ناحية... ومن ناحية أخرى", example: "Einerseits..., andererseits...", exampleAr: "من ناحية... ومن ناحية أخرى...", level: "B2" },
    { id: "fc8", de: "zusammenfassend", ar: "خلاصةً", example: "Zusammenfassend kann man sagen...", exampleAr: "خلاصةً يمكن القول...", level: "B2" },
    { id: "fc9", de: "die Verantwortung", ar: "المسؤولية", example: "Wer trägt die Verantwortung für die Zukunft?", exampleAr: "من يحمل مسؤولية المستقبل؟", level: "B2" },
    { id: "fc10", de: "die Generation", ar: "الجيل", example: "Die künftigen Generationen können keine Forderungen stellen.", exampleAr: "الأجيال القادمة لا تستطيع أن تطالب بشيء.", level: "B2" },
    { id: "fc11", de: "die Begründung", ar: "التعليل", example: "Bei langfristigen Entscheidungen gehören Begründung und Verhältnismäßigkeit zusammen.", exampleAr: "في القرارات البعيدة يقترن التعليل والتناسب.", level: "B2" },
    { id: "fc12", de: "der Fortschritt", ar: "التقدّم", example: "Dagegen wird eingewandt, dass solche Regeln den Fortschritt bremsen.", exampleAr: "ويُعترض بأن مثل هذه القواعد تعطّل التقدّم.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-07-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً فلسفياً اجتماعياً بالعربية",
      sourceDe: "Fiktive Diskussionsrunde: Eine Person fragt: «Was gibt meinem Leben Sinn?» Eine andere antwortet: «Für mich entstehen Sinn und Zugehörigkeit oft in Beziehungen und in der Gemeinschaft.» Das ist eine persönliche Position im Beispiel, keine Aussage über alle Menschen.",
      taskAr: "لخّص سؤال المتحدث وموقف الشخص الآخر، وبيّن أنه رأي شخصي في حوار متخيّل لا تعميم عن الناس.",
      modelAnswerAr: "«في حوار متخيّل يسأل شخص عمّا يمنح الحياة معنى، ويجيب آخر بأن العلاقات والمجتمع يمنحانه هو شعوراً بالمعنى والانتماء. هذا رأيه الشخصي لا قاعدة عامة.»",
      keyPointsAr: ["نقلت سؤال المتحدث عن معنى الحياة", "نقلت الرأي الشخصي للمتحدث الثاني", "ميّزت الرأي الافتراضي من الحقيقة العامة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-07-1",
      scenarioAr: "نقاش فلسفي عن مفهوم السعادة مع صديق.",
      scenarioDe: "Philosophische Diskussion über Glück.",
      strategyAr: "الاستراتيجية: التعبير عن مفاهيم مجردة وتقدير وجهات النظر المختلفة.",
      rounds: [
        {
          speakerDe: "Was bedeutet Glück für dich?",
          speakerAr: "ماذا تعني السعادة لك؟",
          options: [
            { de: "Für mich ist Glück weniger ein Ziel als ein Zustand. Es entsteht in Momenten der Verbundenheit und Dankbarkeit, nicht durch materiellen Besitz.", ar: "بالنسبة لي السعادة ليست هدفاً بقدر ما هي حالة. تنشأ في لحظات التواصل والامتنان، لا بالملكية المادية.", best: true, replyDe: "Eine tiefe und reflektierte Antwort. Hat sich deine Sichtweise verändert?", replyAr: "إجابة عميقة وتأملية. هل تغيرت نظرتك؟" },
            { de: "Glück ist Geld, ganz einfach.", ar: "السعادة هي المال، ببساطة.", best: false, replyDe: "Für manche ist Geld eine wichtige Voraussetzung; ob es allein glücklich macht, hängt jedoch von der persönlichen Sichtweise ab.", replyAr: "يرى بعض الناس أن المال شرط مهم، لكن كفايته لتحقيق السعادة مسألة تختلف باختلاف وجهات النظر." },
          ],
        },
        {
          speakerDe: "Hat sich deine Sichtweise auf Glück verändert?",
          speakerAr: "هل تغيرت نظرتك للسعادة؟",
          options: [
            { de: "Ja, früher dachte ich, Erfolg sei entscheidend. Heute weiß ich, dass Beziehungen und Gesundheit wichtiger sind, obwohl Erfolg auch seinen Wert hat.", ar: "نعم، كنت أظن سابقاً أن النجاح حاسم. اليوم أعلم أن العلاقات والصحة أهم، رغم أن للنجاح قيمته أيضاً.", best: true, replyDe: "Eine weise Erkenntnis. Das Leben lehrt uns solche Lektionen.", replyAr: "حكمة ناضجة. الحياة تعلمنا هذه الدروس." },
            { de: "Meine Sichtweise hat sich nie geändert und wird sich nie ändern.", ar: "لم تتغير نظرتي ولن تتغير أبداً.", best: false, replyDe: "Andere Menschen ändern manche Ansichten, während sie an anderen Überzeugungen festhalten.", replyAr: "يغيّر بعض الناس بعض آرائهم، ويتمسكّون بقناعات أخرى." },
          ],
        },
      ],
    },
  ];

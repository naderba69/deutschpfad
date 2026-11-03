/**
 * b2-04 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المشارك:",
      questionDe: "die ___ Frau (تقرأ)",
      options: ["lesende", "gelesene", "lesend", "liest"],
      correctIndex: 0,
      explanation: "فاعل الفعل lesen في هذا المثال → lesende.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«gelesene» تعني المقروء، والمطلوب الفاعل الذي يقرأ.",
        "«lesend» صيغة غير مستعملة هنا بنهاية الصفة.",
        "«liest» صيغة فعل مصرّف، ولا تناسب الصفة.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر المشارك:",
      questionDe: "der ___ Roman (مترجَم)",
      options: ["übersetzte", "übersetzende", "übersetzt", "übersetzen"],
      correctIndex: 0,
      explanation: "فعل منتهٍ ومبني للمجهول → Partizip II مع نهاية الصفة: der übersetzte Roman. أما übersetzend فيعني «الذي يترجم».",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«übersetzende» تعني الذي يترجم، والمطلوب معنى المترجَم.",
        "«übersetzt» بلا نهاية الصفة، ولا تناسب الصفة قبل Roman.",
        "«übersetzen» مصدر، ولا تناسب الصفة.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Das", "Museum", "ist", "geöffnete", "neu", "beeindruckend", "."],
      correctSentence: "Das neu geöffnete Museum ist beeindruckend.",
      explanation: "المتحف المفتوح حديثاً مذهل.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Der geschrieben Brief liegt hier.",
      wrongWord: "geschrieben",
      correctWord: "geschriebene",
      options: ["geschriebene", "geschrieben", "schreibende", "schreibt"],
      explanation: "نهاية الصفة: geschriebene.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "اختر I أو II:",
      template: "der ___ (weinen) Mann [الباكي] · die ___ (verlieren) Zeit [الوقت الضائع]",
      blanks: [
        { correct: "weinende", options: ["weinende", "geweinte"] },
        { correct: "verlorene", options: ["verlierende", "verlorene"] },
      ],
      explanation: "فاعل الفعل weinen في هذا المثال → weinende؛ وverloren يصف الحالة الناتجة هنا.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Literatur", ar: "الأدب", example: "Literatur ist wichtig.", exampleAr: "الأدب مهم.", level: "B2" },
    { id: "fc2", de: "der Roman", ar: "الرواية", example: "Der Roman ist spannend.", exampleAr: "الرواية مشوقة.", level: "B2" },
    { id: "fc3", de: "das Gedicht", ar: "القصيدة", example: "Das Gedicht ist schön.", exampleAr: "القصيدة جميلة.", level: "B2" },
    { id: "fc4", de: "der Autor", ar: "الكاتب", example: "Der Autor ist berühmt.", exampleAr: "الكاتب مشهور.", level: "B2" },
    { id: "fc5", de: "das Partizip I", ar: "المشارك الأول (غالباً دلالة فاعلية)", example: "das spielende Kind", exampleAr: "الطفل اللاعب", level: "B2" },
    { id: "fc6", de: "das Partizip II", ar: "المشارك الثاني (المعنى بحسب الفعل والسياق)", example: "der geschriebene Brief", exampleAr: "الرسالة المكتوبة", level: "B2" },
    { id: "fc7", de: "der Beitrag", ar: "المقال/المساهمة", example: "Ein interessanter Beitrag.", exampleAr: "مقال مثير.", level: "B2" },
    { id: "fc8", de: "die Geschichte", ar: "القصة", example: "Die Geschichte ist emotional.", exampleAr: "القصة عاطفية.", level: "B2" },
    { id: "fc9", de: "der Film", ar: "الفيلم", example: "Der Film zum Buch ist gut.", exampleAr: "فيلم الرواية جيد.", level: "B2" },
    { id: "fc10", de: "die Autorin", ar: "المؤلّفة", example: "Die spät entdeckte Autorin zählt zu den meistgelesenen Stimmen.", exampleAr: "الكاتبة المكتشفة متأخّرةً من أكثر الأصوات قراءةً.", level: "B2" },
    { id: "fc11", de: "der Kritiker", ar: "الناقد", example: "Ein in Frankfurt arbeitender Kritiker nannte das Buch inhaltlich dünn.", exampleAr: "وصف ناقد يعمل في فرانكفورت الكتاب بأنه هزيل المضمون.", level: "B2" },
    { id: "fc12", de: "die Übersetzung", ar: "الترجمة", example: "Eine erwartete Übersetzung soll nächstes Jahr erscheinen.", exampleAr: "من المتوقّع صدور ترجمة في العام القادم.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-04-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مراجعة أدبية ألمانية مع نقل النبرة",
      sourceDe: "Der Roman ist ein Meisterwerk der modernen Literatur. Der Autor verbindet poetische Sprache mit gesellschaftskritischen Themen auf beeindruckende Weise.",
      taskAr: "لخّص المراجعة مع نقل نبرة الإعجاب: لماذا يُعد العمل تحفة، وما الذي يميزه.",
      modelAnswerAr: "«الرواية تحفة من الأدب الحديث. يمزج الكاتب اللغة الشعرية بالمواضيع النقدية الاجتماعية بشكل مذهل.»",
      keyPointsAr: ["نقلت الحكم (تحفة)", "ذكرت اللغة الشعرية", "نقلت المواضيع النقدية"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-04-1",
      scenarioAr: "نقاش نقدي عن فيلم أو كتاب مع صديق.",
      scenarioDe: "Kritische Diskussion über einen Film oder ein Buch.",
      strategyAr: "الاستراتيجية: نقد بناء مع احترام وجهة نظر الآخر.",
      rounds: [
        {
          speakerDe: "Wie hat dir der Roman gefallen?",
          speakerAr: "كيف أعجبك الكتاب؟",
          options: [
            { de: "Obwohl die Handlung langsam beginnt, entwickelt sich der Roman zu einem tiefgründigen Werk über Identität und Heimat.", ar: "رغم أن الحبكة تبدأ ببطء، يتطور الكتاب إلى عمل عميق عن الهوية والوطن.", best: true, replyDe: "Interessante Perspektive! Was hat dich am meisten beeindruckt?", replyAr: "منظور مثير! ما أكثر ما أدهشك؟" },
            { de: "Der Roman ist langweilig und sinnlos, Punkt.", ar: "الكتاب ممل وبلا معنى، نقطة.", best: false, replyDe: "Eine pauschale Kritik ohne Begründung ist wenig überzeugend.", replyAr: "نقد عام بلا تبرير غير مقنع." },
          ],
        },
        {
          speakerDe: "Was hat dich am meisten beeindruckt?",
          speakerAr: "ما أكثر ما أدهشك؟",
          options: [
            { de: "Am meisten beeindruckt mich, wie der Autor die innere Welt der Figuren beschreibt und zugleich die Gesellschaft kritisch reflektiert.", ar: "طريقة وصف الكاتب للعالم الداخلي للشخصيات. وفي الوقت نفسه يقدم تأملاً نقدياً عن المجتمع.", best: true, replyDe: "Das ist eine tiefe Analyse. Du hast den Kern des Werks erfasst.", replyAr: "هذا تحليل عميق. لقد أدركت جوهر العمل." },
            { de: "Mich hat nichts beeindruckt, das Buch war leer.", ar: "لم يدهشني شيء، الكتاب كان فارغاً.", best: false, replyDe: "Vielleicht solltest du es noch einmal lesen.", replyAr: "ربما يجب أن تقرأه مرة أخرى." },
          ],
        },
      ],
    },
  ];

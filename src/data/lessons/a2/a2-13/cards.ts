/**
 * a2-13 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-13.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح:",
      questionDe: "Meine Eltern ___ letzte Woche nach Italien gefahren.",
      questionAr: "سافر والداي الأسبوع الماضي إلى إيطاليا.",
      options: ["sind", "haben", "waren", "hatten"],
      correctIndex: 0,
      explanation: "fahren حركة ⇒ sein: sie sind gefahren.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«haben» لا تصلح مع فعل الحركة «fahren» ⇒ «sie sind gefahren».",
        "«waren» ماضي sein بلا اسم مفعول؛ والمطلوب مساعد «sind».",
        "«hatten» ماضي haben البسيط؛ لا يبني الماضي التام هنا. ",
      ],
    },
    {
      id: "m2",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير أو الأداة في حالة الجر:",
      template: "Das Kleid gefällt ___ sehr. (يعجبني) · Ich danke ___ Kollegin für die Hilfe. (الزميلة)",
      blanks: [
        { correct: "mir", options: ["mir", "mich", "ich", "meiner"] },
        { correct: "der", options: ["der", "die", "den", "das"] },
      ],
      explanation: "gefallen وdanken فعلان يطلبان Dativ: gefällt mir · danke der Kollegin.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط الصحيحة:",
      questionDe: "Ich gehe heute nicht ins Kino, ___ ich kein Geld habe.",
      questionAr: "لن أذهب إلى السينما اليوم لأنه ليس معي مال.",
      options: ["weil", "und", "deshalb", "obwohl"],
      correctIndex: 0,
      explanation: "التعليل مع فعل في النهاية (habe) ⇒ weil. (denn تعلّل أيضاً، لكنها تترك الترتيب عادياً: denn ich habe kein Geld، فلا تناسب هذا الفراغ.)",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«und» جمعٌ لا تعليل؛ والفعل «habe» في النهاية يدلّ على جملة تابعة.",
        "«deshalb» نتيجة وتقلب الترتيب؛ وهنا الفعل في آخر الجملة ⇒ «weil».",
        "«obwohl» تنازل بمعنى رغم أنّ؛ والسبب يُصاغ بـ«weil». ",
      ],
    },
    {
      id: "m4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Arzt", "Ich", "zum", "gegangen", "bin", "heute", "."],
      correctSentence: "Ich bin heute zum Arzt gegangen.",
      explanation: "Perfekt مع sein: الفعل المساعد bin في المركز الثاني، وgegangen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الانعكاسي الصحيح:",
      questionDe: "Wir ___ uns auf die Ferien.",
      questionAr: "نتطلّع إلى العطلة.",
      options: ["freuen", "freut", "freust", "freue"],
      correctIndex: 0,
      explanation: "مع wir: freuen uns — الفعل الانعكاسي يوافق الفاعل في التصريف والضمير معاً.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«freut» مع er/sie/es أو ihr؛ و«Wir» تأخذ «freuen».",
        "«freust» مع du؛ لا تطابق «Wir».",
        "«freue» مع ich؛ والفاعل «Wir». ",
      ],
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Brücke", ar: "الجسر", example: "A2 ist die Brücke nach B1.", exampleAr: "A2 هو الجسر إلى B1.", level: "A2" },
    { id: "fc2", de: "zusammenfassen", ar: "يلخّص/يجمع", example: "Ich fasse die Regeln zusammen.", exampleAr: "ألخّص القواعد.", level: "A2" },
    { id: "fc3", de: "bestehen", ar: "يجتاز (امتحاناً)", example: "Ich möchte die Prüfung bestehen.", exampleAr: "أريد اجتياز الامتحان.", level: "A2" },
    { id: "fc4", de: "der Fortschritt", ar: "التقدّم", example: "Ich sehe meinen Fortschritt.", exampleAr: "أرى تقدّمي.", level: "A2" },
    { id: "fc5", de: "die Stufe", ar: "المرحلة/الدرجة", example: "Die nächste Stufe ist B1.", exampleAr: "المرحلة التالية هي B1.", level: "A2" },
    { id: "fc6", de: "das Fieber", ar: "الحمّى", example: "Ich habe Fieber und bleibe zu Hause.", exampleAr: "عندي حمّى وأبقى في البيت.", level: "A2" },
    { id: "fc7", de: "die Krankmeldung", ar: "إبلاغ جهة العمل بالمرض", example: "Ich melde mich heute bei meinem Chef krank.", exampleAr: "أبلغ رئيسي اليوم أنني مريض.", level: "A2" },
    { id: "fc8", de: "wiederholen", ar: "يراجع/يكرّر", example: "Vor der Prüfung wiederhole ich alles.", exampleAr: "قبل الامتحان أراجع كل شيء.", level: "A2" },
    { id: "fc9", de: "das Ergebnis", ar: "النتيجة", example: "Ich warte auf das Ergebnis der Prüfung.", exampleAr: "أنتظر نتيجة الامتحان.", level: "A2" },
    { id: "fc10", de: "die Schwäche", ar: "نقطة الضعف", example: "Meine größte Schwäche war der Dativ.", exampleAr: "كانت أكبر نقطة ضعف عندي حالةُ الجر Dativ.", level: "A2" },
    { id: "fc11", de: "die Übung", ar: "التمرين", example: "Diese Übung hat mir geholfen.", exampleAr: "ساعدني هذا التمرين.", level: "A2" },
    { id: "fc12", de: "der Schritt", ar: "الخطوة", example: "Kleine Schritte bringen großen Fortschritt.", exampleAr: "الخطوات الصغيرة تُنتج تقدّماً كبيراً.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-13-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة المدرسة اللغوية بالعربية",
      sourceDe:
        "Liebe Teilnehmerinnen und Teilnehmer, der A2-Abschlusstest findet am Freitag, dem 12. Juni, um 9 Uhr in Raum 204 statt. Bitte bringen Sie Ihren Ausweis mit. Der Test dauert 90 Minuten. Wer den Test besteht, kann sich ab Montag für den B1-Kurs anmelden.",
      taskAr:
        "زميلك لا يقرأ الألمانية بعد. لخّص له الإعلان بالعربية في ثلاث نقاط: متى وأين الامتحان، وماذا يجب أن يُحضر، وماذا يحدث بعد النجاح.",
      modelAnswerAr:
        "«امتحان ختام A2 يوم الجمعة 12 يونيو الساعة التاسعة في القاعة 204، ومدّته 90 دقيقة. يجب إحضار بطاقة الهوية. من ينجح يستطيع التسجيل في دورة B1 اعتباراً من يوم الاثنين.»",
      keyPointsAr: [
        "نقلتُ الموعد والمكان (الجمعة 12 يونيو، الساعة 9، القاعة 204)",
        "ذكرتُ المدة (90 دقيقة) وضرورة إحضار بطاقة الهوية",
        "أوضحتُ ما بعد النجاح: التسجيل في B1 من يوم الاثنين",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-13-1",
      scenarioAr: "مكالمة مع سكرتارية معهد اللغة: تسأل عن نتيجة امتحان A2 وتسجّل في دورة B1.",
      scenarioDe: "Ein Telefongespräch mit dem Sekretariat der Sprachschule.",
      strategyAr: "الاستراتيجية: طلب معلومة بأدب، ثم طلب توضيح حين لا تفهم، ثم تأكيد ما فهمته قبل إنهاء المكالمة.",
      rounds: [
        {
          speakerDe: "Sprachschule Rheinbogen, guten Tag. Was kann ich für Sie tun?",
          speakerAr: "مدرسة راينبوغن للغات، طاب يومك. كيف أساعدك؟",
          options: [
            {
              de: "Guten Tag, hier ist Sami Ben Ali. Ich möchte wissen, ob mein A2-Ergebnis schon da ist.",
              ar: "طاب يومك، معك سامي بن علي. أود أن أعرف إن كانت نتيجتي في A2 قد صدرت.",
              best: true,
              replyDe: "Einen Moment bitte... Ja, Sie haben bestanden. Herzlichen Glückwunsch!",
              replyAr: "لحظة من فضلك... نعم، لقد نجحت. تهانينا!",
            },
            {
              de: "Ergebnis. Jetzt.",
              ar: "النتيجة. الآن.",
              best: false,
              replyDe: "Wie bitte? Könnten Sie mir bitte Ihren Namen nennen?",
              replyAr: "عفواً؟ هل يمكنك ذكر اسمك من فضلك؟",
            },
          ],
        },
        {
          speakerDe: "Für B1 gibt es zwei Kurse: den Intensivkurs und den Abendkurs.",
          speakerAr: "لـ B1 هناك دورتان: المكثّفة والمسائية.",
          options: [
            {
              de: "Entschuldigung, das habe ich nicht ganz verstanden. Können Sie das bitte wiederholen?",
              ar: "عفواً، لم أفهم تماماً. هل يمكنك الإعادة من فضلك؟",
              best: true,
              replyDe: "Natürlich. Der Intensivkurs ist täglich, der Abendkurs zweimal pro Woche.",
              replyAr: "بالطبع. المكثّفة يومية، والمسائية مرتين في الأسبوع.",
            },
            {
              de: "Ja ja, alles klar.",
              ar: "نعم نعم، كل شيء واضح.",
              best: false,
              replyDe: "Gut, dann trage ich Sie in den Intensivkurs ein.",
              replyAr: "حسناً، إذاً سأسجّلك في الدورة المكثّفة.",
            },
          ],
        },
        {
          speakerDe: "Welchen Kurs möchten Sie denn nehmen?",
          speakerAr: "أي دورة تودّ أن تأخذ؟",
          options: [
            {
              de: "Den Abendkurs bitte, weil ich tagsüber arbeite. Wann fängt er an?",
              ar: "المسائية من فضلك، لأنني أعمل نهاراً. متى تبدأ؟",
              best: true,
              replyDe: "Am 3. September. Ich schicke Ihnen die Anmeldung per E-Mail.",
              replyAr: "في الثالث من سبتمبر. سأرسل لك استمارة التسجيل بالبريد الإلكتروني.",
            },
            {
              de: "Ich weiß nicht. Sie entscheiden.",
              ar: "لا أدري. قرّري أنتِ.",
              best: false,
              replyDe: "Das kann ich leider nicht für Sie entscheiden.",
              replyAr: "للأسف لا أستطيع أن أقرّر بدلاً منك.",
            },
          ],
        },
      ],
    },
  ];

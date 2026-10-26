/**
 * b1-11 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "mt-b1-11-1",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Die Frau, die dort steht, ist meine Lehrerin.",
        "Die Frau, der dort steht, ist meine Lehrerin.",
        "Die Frau, das dort steht, ist meine Lehrerin.",
      ],
      correctIndex: 0,
      explanation: "الاسم Frau مؤنث، والضمير هنا فاعل الفعل steht؛ لذلك تأتي صيغة الرفع die.",
      errorType: "article",
      optionExplanations: [
        undefined,
        "«Die Frau, der dort steht» الحالة خاطئة؛ الفاعل مؤنث ويحتاج die.",
        "«Die Frau, das dort steht» الأداة خاطئة؛ Frau مؤنث ويحتاج die.",
      ],
    },
    {
      id: "mt-b1-11-2",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح",
      template: "Ich lerne Deutsch, ___ in Deutschland zu studieren.",
      blanks: [{ correct: "um", options: ["um", "damit", "zu"] }],
      explanation: "نفس الفاعل + مصدر → um...zu.",
      errorType: "grammar",
    },
    {
      id: "mt-b1-11-3",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة",
      questionDe: "Was bedeutet „die Anmeldung“?",
      options: ["التسجيل", "الامتحان", "النجاح"],
      correctIndex: 0,
      explanation: "die Anmeldung = التسجيل.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«الامتحان» تقابل Prüfung، وليس Anmeldung.",
        "«النجاح» تقابل Erfolg، وليس Anmeldung.",
      ],
    },
    {
      id: "mt-b1-11-4",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (تمنٍّ في الحاضر)",
      questionDe: "Ich wünschte, ich ___ mehr Zeit.",
      options: ["hätte", "habe", "hatte"],
      correctIndex: 0,
      explanation: "Konjunktiv II للتمنّي: ich hätte = لو كان لديّ.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«habe» صيغة المضارع، ولا تناسب تمني الحال غير الواقع.",
        "«hatte» صيغة الماضي، ولا تناسب تمني الحال غير الواقع.",
      ],
    },
    {
      id: "mt-b1-11-5",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة المبني للمجهول في المضارع",
      template: "Das Essen ___ gerade gekocht.",
      blanks: [{ correct: "wird", options: ["wird", "ist", "hat"] }],
      explanation: "المبني للمجهول في المضارع = werden + اسم المفعول (wird gekocht).",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc-b1-11-1", de: "die Prüfung bestehen", ar: "ينجح في الامتحان", example: "Ich habe die Prüfung bestanden.", exampleAr: "نجحت في الامتحان.", level: "B1" },
    { id: "fc-b1-11-2", de: "die Anmeldung", ar: "التسجيل", example: "Die Anmeldung ist bis Freitag.", exampleAr: "التسجيل حتى الجمعة.", level: "B1" },
    { id: "fc-b1-11-3", de: "die Vorbereitung", ar: "التحضير", example: "Die Vorbereitung hilft mir sehr.", exampleAr: "التحضير يساعدني كثيراً.", level: "B1" },
    { id: "fc-b1-11-4", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist das eine gute Idee.", exampleAr: "في رأيي هذه فكرة جيدة.", level: "B1" },
    { id: "fc-b1-11-5", de: "Einerseits ... andererseits", ar: "من ناحية ... ومن ناحية أخرى", example: "Einerseits ist es teuer, andererseits gut.", exampleAr: "من ناحية مكلف، ومن ناحية أخرى جيد.", level: "B1" },
    { id: "fc-b1-11-6", de: "das Beratungsgespräch", ar: "جلسة الاستشارة", example: "Ich habe ein Beratungsgespräch bei der Agentur für Arbeit.", exampleAr: "لدي جلسة استشارة في وكالة العمل.", level: "B1" },
    { id: "fc-b1-11-7", de: "der Prüfungsteil", ar: "جزء الامتحان", example: "Ich übe jeden Teil einzeln.", exampleAr: "أتدرّب على كل جزء على حدة.", level: "B1" },
    { id: "fc-b1-11-8", de: "die Bewerbung", ar: "طلب التوظيف", example: "Ich schreibe eine Bewerbung.", exampleAr: "أكتب طلب توظيف.", level: "B1" },
    { id: "fc-b1-11-9", de: "trotzdem", ar: "مع ذلك", example: "Es regnet, trotzdem gehen wir spazieren.", exampleAr: "تمطر، ومع ذلك نخرج للتنزّه.", level: "B1" },
    { id: "fc-b1-11-10", de: "der Lebenslauf", ar: "السيرة الذاتية", example: "Mein Lebenslauf ist auf Deutsch.", exampleAr: "سيرتي الذاتية بالألمانية.", level: "B1" },
    { id: "fc-b1-11-11", de: "die Unterlagen", ar: "المستندات", example: "Die Unterlagen müssen bis Freitag eingehen.", exampleAr: "يجب أن تصل المستندات حتى الجمعة.", level: "B1" },
    { id: "fc-b1-11-12", de: "die Frist", ar: "المهلة الزمنية", example: "Die Frist endet am 20. August.", exampleAr: "تنتهي المهلة في 20 أغسطس.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b1-11-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة تدريبية خيالية عن تأجيل موعد بالعربية",
      sourceDe: "Sehr geehrte Frau Ben Ali, wir müssen Ihren Termin für das Beratungsgespräch leider verschieben. Der neue Termin ist am Donnerstag, den 15., um 14 Uhr. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit.",
      taskAr: "هذا مثال تدريبي خيالي لا يصف موعداً أو جهة حقيقية. انقل الرسالة بالعربية إلى شخص لا يفهم الألمانية: الموعد الجديد والمستندات المطلوبة، مع الحفاظ على النبرة الرسمية.",
      modelAnswerAr: "«عزيزتي السيدة بن علي، نأسف لتأجيل موعد جلسة الاستشارة. الموعد الجديد الخميس 15 الساعة 14. يرجى إحضار السيرة الذاتية والشهادات.»",
      keyPointsAr: ["نقلت الاعتذار عن التأجيل", "ذكرت الموعد الجديد بدقة (الخميس 15، 14:00)", "ذكرت المستندات المطلوبة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-11-1",
      scenarioAr: "تدريب تفاعلي خيالي على نقاش مع زميل عن العمل عن بُعد (Homeoffice)، وليس تقييماً رسمياً.",
      scenarioDe: "Diskussion über Homeoffice mit einem Kollegen.",
      strategyAr: "الاستراتيجية: إبداء الرأي المبرر، الموافقة/الاعتراض بلطف، وطلب رأي الآخر.",
      rounds: [
        {
          speakerDe: "Findest du, dass Homeoffice gut ist?",
          speakerAr: "هل تجد أن العمل عن بُعد جيد؟",
          options: [
            { de: "Meiner Meinung nach ist Homeoffice praktisch, weil man Zeit spart. Einerseits ist es flexibel, andererseits fehlt der Kontakt.",
              ar: "في رأيي العمل عن بُعد عملي لأنه يوفر الوقت. من ناحية مرن، ومن ناحية أخرى تفتقد التواصل.", best: true,
              replyDe: "Das stimmt. Aber wie findest du die Produktivität?", replyAr: "هذا صحيح. لكن كيف ترى الإنتاجية؟" },
            { de: "Homeoffice ist schlecht. Punkt.", ar: "العمل عن بُعد سيئ. نقطة.", best: false,
              replyDe: "Kannst du das bitte begründen? Eine Meinung braucht Argumente.", replyAr: "هل يمكنك تبرير ذلك من فضلك؟ الرأي يحتاج حججاً." },
          ],
        },
        {
          speakerDe: "Wie findest du die Produktivität im Homeoffice?",
          speakerAr: "كيف ترى الإنتاجية في العمل عن بُعد؟",
          options: [
            { de: "Ich denke, die Produktivität ist höher, weil man sich besser konzentrieren kann, obwohl die Trennung zwischen Arbeit und Freizeit schwerfällt.",
              ar: "أعتقد أن الإنتاجية أعلى لأن التركيز أفضل، رغم أن الفصل بين العمل والراحة صعب.", best: true,
              replyDe: "Interessant! Und was ist mit der Teamarbeit?", replyAr: "مثير للاهتمام! وماذا عن العمل الجماعي؟" },
            { de: "Ich weiß nicht und es ist egal.", ar: "لا أعرف ولا يهم.", best: false,
              replyDe: "Für eine Diskussion wäre eine eigene Meinung besser.", replyAr: "في النقاش الأفضل أن يكون لديك رأي خاص." },
          ],
        },
        {
          speakerDe: "Was ist mit der Teamarbeit im Homeoffice?",
          speakerAr: "ماذا عن العمل الجماعي في العمل عن بُعد؟",
          options: [
            { de: "Teamarbeit ist schwieriger, weil man sich nur online trifft. Trotzdem kann man mit Videokonferenzen viel erreichen. Was denkst du?",
              ar: "العمل الجماعي أصعب لأن اللقاءات عبر الإنترنت فقط. رغم ذلك يمكن تحقيق الكثير بالمؤتمرات المرئية. ما رأيك؟", best: true,
              replyDe: "Da bin ich ganz deiner Meinung. Danke für die Diskussion!", replyAr: "أوافقك الرأي تماماً. شكراً على النقاش!" },
            { de: "Teamarbeit funktioniert nie.", ar: "العمل الجماعي لا ينجح أبداً.", best: false,
              replyDe: "„Nie“ ist ein starkes Wort. Vielleicht in manchen Situationen?", replyAr: "«أبداً» كلمة قوية. ربما في بعض المواقف؟" },
          ],
        },
      ],
    },
  ];

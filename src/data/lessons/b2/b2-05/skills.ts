/**
 * b2-05 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "ورشة تواصل",
        lines: [
          { speaker: "Trainerin", de: "Man verbessert die Kommunikation, indem man aktiv zuhört.", ar: "يحسّن المرء التواصل بالإنصات النشط." },
          { speaker: "Sami", de: "Und was soll man vermeiden?", ar: "وماذا يجب أن يتجنب؟" },
          { speaker: "Trainerin", de: "Man sollte nicht unterbrechen. Anstatt zu antworten, sollte man erst verstehen.", ar: "يجب ألا يقاطع. بدلاً من الإجابة، يجب أن يفهم أولاً." },
          { speaker: "Sami", de: "Ich gehe, ohne zu verstehen? Nein, ich frage nach!", ar: "أذهب دون أن أفهم؟ لا، سأسأل!" },
          { speaker: "Trainerin", de: "Genau! Fragen ist der Schlüssel.", ar: "بالضبط! السؤال هو المفتاح." },
        ],
      },
      {
        id: "l2",
        title: "قرار صعب",
        lines: [
          { speaker: "Anna", de: "Wir treffen uns morgen, es sei denn, es regnet stark.", ar: "نتقابل غداً إلا إذا أمطرت بشدة." },
          { speaker: "Karim", de: "Je nachdem, wie das Wetter wird, entscheiden wir.", ar: "حسبما يصير الطقس نقرر." },
          { speaker: "Anna", de: "Und du kommst, ohne zu zögern?", ar: "وستأتي دون تردد؟" },
          { speaker: "Karim", de: "Ja, natürlich!", ar: "نعم طبعاً!" },
        ],
      },
      {
        id: "l3",
        title: "سوء فهم في فريق العمل",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Mira", de: "Unser Team hat das Projekt fast abgeschlossen, aber im letzten Gespräch gab es ein Missverständnis.", ar: "أوشك فريقنا على إنهاء المشروع، لكن حدث سوء فهم في الاجتماع الأخير.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-1.mp3" },
          { speaker: "Jonas", de: "Was ist passiert? Mira: Ich habe einen Vorschlag gemacht, ohne die Erwartungen der anderen genau zu kennen.", ar: "ماذا حدث؟ ميرا: قدمت اقتراحاً دون أن أعرف توقعات الآخرين بدقة.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-2.mp3" },
          { speaker: "Jonas", de: "Dann sollten wir zuerst aktiv zuhören, anstatt sofort zu antworten. Vielleicht klären wir die Aufgaben dadurch besser.", ar: "إذاً ينبغي أن نصغي أولاً بدلاً من الرد فوراً. ربما نوضح المهام بهذه الطريقة.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-3.mp3" },
          { speaker: "Mira", de: "Einverstanden. Ich frage nach, es sei denn, jemand möchte zuerst seine Sicht erklären.", ar: "موافقة. سأستفسر، إلا إذا أراد أحدهم أن يشرح وجهة نظره أولاً.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-4.mp3" },
          { speaker: "Jonas", de: "Je nachdem, was wir dabei erfahren, teilen wir die Aufgaben neu auf.", ar: "بحسب ما نعرفه، سنعيد توزيع المهام.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-5.mp3" },
          { speaker: "Mira", de: "Gut. So vermeiden wir weitere Missverständnisse, indem wir alles klar und respektvoll besprechen.", ar: "جيد. هكذا نتجنب مزيداً من سوء الفهم بأن نناقش كل شيء بوضوح واحترام.", audioSrc: "/audio/lessons/b2-05/ls-b2-05-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie verbessert man die Kommunikation?",
        questionAr: "كيف يحسّن المرء التواصل؟",
        options: ["indem man aktiv zuhört", "indem man spricht", "indem man schweigt", "indem man schreibt"],
        correctIndex: 0,
        explanation: "قالت المدربة: Man verbessert die Kommunikation, indem man aktiv zuhört.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«indem man spricht» لا تعبّر عن تحسين التواصل، والمطلوب الاستماع.",
          "«indem man schweigt» تعني الصمت، وهذا عكس الحل المطلوب.",
          "«indem man schreibt» لا تعبّر عن تحسين التواصل في هذا السياق.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann treffen sie sich?",
        questionAr: "متى يتقابلون؟",
        options: ["morgen, es sei denn, es regnet stark", "heute Abend, gleich nach der Arbeit", "übermorgen, wenn alle Zeit haben", "nie, das Treffen wurde abgesagt"],
        correctIndex: 0,
        explanation: "قالت آنا: Wir treffen uns morgen, es sei denn, es regnet stark.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«heute Abend, gleich nach der Arbeit» لم تُذكر في الحوار كموعد للقاء.",
          "«übermorgen, wenn alle Zeit haben» لم تُذكر في الحوار كموعد للقاء.",
          "«nie, das Treffen wurde abgesagt» تنفي اللقاء، وهذا عكس ما قالته آنا.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie entscheiden sie?",
        questionAr: "كيف يقررون؟",
        options: ["je nachdem, wie das Wetter wird", "sofort, noch in dieser Stunde", "morgen früh, noch vor der Arbeit", "gar nicht, sie entscheiden später"],
        correctIndex: 0,
        explanation: "قال كريم: Je nachdem, wie das Wetter wird, entscheiden wir.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«sofort, noch in dieser Stunde» لم تُذكر في الحوار كقرار.",
          "«morgen früh, noch vor der Arbeit» لم تُذكر في الحوار كقرار.",
          "«gar nicht, sie entscheiden später» تنفي القرار، ولم يقلها كريم.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie wollen Mira und Jonas weitere Missverständnisse vermeiden?",
        questionAr: "كيف تريد ميرا ويوناس تجنب مزيد من سوء الفهم؟",
        options: ["indem sie alles klar und respektvoll besprechen", "indem sie sofort neue Aufgaben verteilen", "indem sie das Gespräch beenden", "indem sie ohne Rückfragen entscheiden"],
        correctIndex: 0,
        explanation: "قالت ميرا: So vermeiden wir weitere Missverständnisse, indem wir alles klar und respektvoll besprechen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يقل الحوار إنهما سيوزعانها فوراً؛ قالت ميرا «Ich frage nach»، ثم قال يوناس: «Je nachdem, was wir dabei erfahren, teilen wir die Aufgaben neu auf». ",
          "لم يقترحا إنهاءه؛ قالت ميرا: «So vermeiden wir weitere Missverständnisse, indem wir alles klar und respektvoll besprechen». ",
          "على العكس، قالت ميرا: «Ich frage nach, es sei denn, jemand möchte zuerst seine Sicht erklären». ",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات التواصل: tion، ei، وö",
    items: [
      { de: "die Kommunikation", ar: "التواصل", note: "tion = تسيون: كومونيكاتسيون" },
      { de: "das Missverständnis", ar: "سوء الفهم", note: "شديدة: ميس-فِر-شتندنيس" },
      { de: "zuhören", ar: "يصغي", note: "z = /ts/، وzu = /tsuː/ تقريباً" },
      { de: "das Verhalten", ar: "السلوك", note: "v = ف + h: فِر-هالتن" },
      { de: "vermeiden", ar: "يتجنب", note: "ei = آي: فِرمايدن" },
      { de: "das Gefühl", ar: "الشعور", note: "ü طويل بصوت أمامي مستدير، لا مقابل دقيقاً له في العربية" },
    ],
    tip: "التهجئة العربية تقريبية ولا تنقل الأصوات الألمانية بدقة؛ في Missverständnis يظهر المقطع المشدّد في ständ. استمع إلى النموذج ولا تعتبر النقل العربي تقييماً للنطق.",
    shadowing: [
      { de: "Man lernt, indem man übt.", ar: "يتعلم المرء بالممارسة.", tip: "indem man übt" },
      { de: "Anstatt zu schlafen, arbeitete er.", ar: "بدلاً من النوم عمل.", tip: "anstatt zu schlafen" },
      { de: "Er ging, ohne zu grüßen.", ar: "غادر دون أن يحيي.", tip: "ohne zu grüßen" },
      { de: "Ich komme, es sei denn, es regnet.", ar: "سآتي إلا إذا أمطرت.", tip: "es sei denn" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة indem:",
      prompt: "«يتعلم المرء بالممارسة» (indem)",
      acceptedAnswers: ["Man lernt, indem man übt", "Man lernt, indem man übt."],
      sampleAnswer: "Man lernt, indem man übt.",
      explanation: "indem + جملة كاملة (طريقة).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ anstatt...zu أو ohne...zu:",
      template: "___ zu schlafen, arbeitete er. Er ging, ___ zu grüßen.",
      blanks: [
        { correct: "Anstatt", options: ["Anstatt", "Ohne"] },
        { correct: "ohne", options: ["Anstatt", "ohne"] },
      ],
      explanation: "بدلاً من → anstatt. دون أن → ohne.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Man vermeidet Missverständnisse, indem man aktiv zuhört.",
      explanation: "يتجنب المرء سوء الفهم بالإنصات النشط — indem.",
      errorType: "spelling",
    },
  ];

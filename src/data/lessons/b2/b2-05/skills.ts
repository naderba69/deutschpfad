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
        options: ["morgen, es sei denn, es regnet stark", "heute", "übermorgen", "nie"],
        correctIndex: 0,
        explanation: "قالت آنا: Wir treffen uns morgen, es sei denn, es regnet stark.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«heute» لم تُذكر في الحوار كموعد للقاء.",
          "«übermorgen» لم تُذكر في الحوار كموعد للقاء.",
          "«nie» تنفي اللقاء، وهذا عكس ما قالته آنا.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie entscheiden sie?",
        questionAr: "كيف يقررون؟",
        options: ["je nachdem, wie das Wetter wird", "sofort", "morgen früh", "gar nicht"],
        correctIndex: 0,
        explanation: "قال كريم: Je nachdem, wie das Wetter wird, entscheiden wir.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«sofort» لم تُذكر في الحوار كقرار.",
          "«morgen früh» لم تُذكر في الحوار كقرار.",
          "«gar nicht» تنفي القرار، ولم يقلها كريم.",
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
      { de: "zuhören", ar: "يصغي", note: "z = تس + ö: تسوهورِن" },
      { de: "das Verhalten", ar: "السلوك", note: "v = ف + h: فِر-هالتن" },
      { de: "vermeiden", ar: "يتجنب", note: "ei = آي: فِرمايدن" },
      { de: "das Gefühl", ar: "الشعور", note: "ü طويل: غِفول" },
    ],
    tip: "Missverständnis = ميس-فِر-شتندنيس — كلمة طويلة فيها sch. قسّمها: Miss + ver + ständ + nis.",
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

/**
 * a1-01b — نصّ القراءة الخاص بالجزء الثاني (مستقلّ عن قراءة a1-01)
 * فُصل في المرحلة 5. نصّ A1 بسيط: أسئلة W وترتيب الجملة وتصريف الأفعال المنتظمة.
 */
import type { ReadingText } from "@/types/lesson";

export const readingA1B: ReadingText = {
  id: "read-a1-01b",
  titleDe: "Ein neuer Kurs beginnt",
  titleAr: "دورة جديدة تبدأ",
  textType: "erzaehlung",
  paragraphs: [
    "Der Deutschkurs beginnt am Montag. Sara kommt aus Tunesien und wohnt jetzt in Berlin. Sie lernt Deutsch, weil sie hier studieren möchte.",
    "In der ersten Stunde fragt die Lehrerin: „Woher kommst du?“ Sara antwortet: „Ich komme aus Tunis.“ Dann fragt Milan: „Wo wohnst du?“ — „Ich wohne in Kreuzberg.“",
    "Milan arbeitet in einem Café. Er lernt jeden Abend zwei Stunden Deutsch. „Ich arbeite viel, aber ich lerne gern“, sagt er. Die Lehrerin sagt: „Du arbeitest gut!“",
    "Nach dem Kurs schreibt Sara eine Nachricht an ihre Freundin: „Wie geht es dir? Ich habe viele Fragen gestellt. Der Kurs ist toll, und ich habe schon drei neue Freunde.“",
  ],
  paragraphsAr: [
    "تبدأ دورة الألمانية يوم الاثنين. سارة من تونس وتسكن الآن في برلين. تتعلّم الألمانية لأنّها تريد الدراسة هنا.",
    "في الحصة الأولى تسأل المعلّمة: «من أين أنت؟» تجيب سارة: «أنا من تونس». ثم يسأل ميلان: «أين تسكن؟» — «أسكن في كرويتسبرغ».",
    "يعمل ميلان في مقهى. ويتعلّم الألمانية ساعتين كل مساء. يقول: «أعمل كثيراً، لكنني أتعلّم بسرور». وتقول المعلّمة: «أنت تعمل جيداً!»",
    "بعد الدورة تكتب سارة رسالة إلى صديقتها: «كيف حالك؟ طرحت أسئلة كثيرة. الدورة رائعة، ولديّ ثلاثة أصدقاء جدد بالفعل».",
  ],
  glossary: [
    { de: "der Kurs", ar: "الدورة", noteAr: "مذكّر: der Kurs، والجمع die Kurse." },
    { de: "beginnen", ar: "يبدأ", noteAr: "فعل منتظم: ich beginne · du beginnst · er beginnt." },
    { de: "antworten", ar: "يجيب", noteAr: "فعل منتظم: ich antworte · du antwortest · er antwortet." },
    { de: "die Lehrerin", ar: "المعلّمة", noteAr: "مؤنّثة بلاحقة -in، والمذكّر der Lehrer." },
    { de: "fragen", ar: "يسأل", noteAr: "فعل منتظم، ومنه die Frage (السؤال)." },
    { de: "arbeiten", ar: "يعمل", noteAr: "جذعه ينتهي بـt فيأخذ وصلة ‑e‑ مع du: du arbeitest." },
    { de: "die Nachricht", ar: "الرسالة", noteAr: "مؤنّثة: die Nachricht، والجمع die Nachrichten." },
    { de: "die Freundin", ar: "الصديقة", noteAr: "مؤنّثة؛ والمذكّر der Freund." },
    { de: "studieren", ar: "يدرس (في الجامعة)", noteAr: "فعل منتظم بنهاية -ieren: ich studiere." },
    { de: "der Abend", ar: "المساء", noteAr: "مذكّر: der Abend، ومنه guten Abend (مساء الخير)." },
  ],
  questions: [
    {
      id: "rq1",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Woher kommt Sara?",
      options: ["Aus Berlin", "Aus Tunesien", "Aus Polen", "Aus Kreuzberg"],
      correctIndex: 1,
      explanation: "الفقرة 1: Sara kommt aus Tunesien und wohnt jetzt in Berlin — الأصل غير مكان السكن الحالي.",
      paragraph: 1,
      errorType: "comprehension",
    },
    {
      id: "rq2",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Wo wohnt Sara in Berlin?",
      options: ["In Tunis", "In einem Café", "In Kreuzberg", "Am Montag"],
      correctIndex: 2,
      explanation: "الفقرة 2: جوابها على سؤال «Wo wohnst du?» هو «Ich wohne in Kreuzberg» — أي أنّ سكنها في كرويتسبرغ.",
      paragraph: 2,
      errorType: "comprehension",
    },
    {
      id: "rq3",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was macht Milan in Berlin?",
      options: ["Er studiert Medizin", "Er wohnt in Tunis", "Er lernt nur am Wochenende", "Er arbeitet in einem Café"],
      correctIndex: 3,
      explanation: "الفقرة 3: Milan arbeitet in einem Café — وعمله هو ما يذكره النصّ عنه أوّلاً، ثم يذكر تعلّمه اليومي.",
      paragraph: 3,
      errorType: "comprehension",
    },
    {
      id: "rq4",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was schreibt Sara nach dem Kurs?",
      options: ["Eine Nachricht an ihre Freundin", "Einen neuen Kurs", "Eine Frage an die Lehrerin", "Ein Buch über Berlin"],
      correctIndex: 0,
      explanation: "الفقرة 4: Nach dem Kurs schreibt Sara eine Nachricht an ihre Freundin — وتذكر فيها أسئلتها الجديدة وأصدقاءها.",
      paragraph: 4,
      errorType: "comprehension",
    },
  ],
  redemittel: [
    { de: "Woher kommst du?", ar: "من أين أنت؟" },
    { de: "Ich komme aus Tunis.", ar: "أنا من تونس." },
    { de: "Wo wohnst du?", ar: "أين تسكن؟" },
    { de: "Ich lerne gern.", ar: "أتعلّم بسرور." },
    { de: "Wie geht es dir?", ar: "كيف حالك؟" },
  ],
  discussionAr:
    "اكتب ثلاثة أسئلة استفهام تسأل بها زميلاً في الصف: عن اسمه، ومن أين هو، وأين يسكن. ثم أجب عن سؤالين منها بجمل كاملة، ولا تنسَ ترتيب سؤال W: الأداة أولاً، ثم الفعل المصرَّف، ثم الفاعل.",
};

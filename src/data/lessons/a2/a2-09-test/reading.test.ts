/**
 * a2-09 — القراءة: بقاءُ النصّ في ملفّ الدرس والتباينُ في خياراته وأسئلةُ القراءة والاستماع المصنّفة (جزء من تدقيق الدرس)
 * فُصل من a2-09.test.ts في الدفعة 103 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";

describe("A2-09 lesson audit", () => {
  it("keeps the active A2-09 reading in the lesson file, not in the multi-lesson archive", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading).toMatchObject({
      id: "read-a2-09",
      titleDe: "Ein Geburtstag im Innenhof",
      textType: "erzaehlung",
    });
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(4);
    expect(reading.paragraphs).toEqual([
      "Am Samstag feiert Frau Yilmaz ihren sechzigsten Geburtstag. Sie lädt die Nachbarn in den Innenhof ein. Auf der Einladung stehen die Uhrzeit und der Treffpunkt. Ihr Bruder hilft ihr beim Dekorieren, und die Kinder stellen die Stühle an die Wand. Um fünf Uhr kommen die ersten Gäste.",
      "Das selbst gemachte Geschenk von den Kindern gefällt Frau Yilmaz besonders gut: ein großes Fotoalbum. Sie gratuliert ihrer Nachbarin zum neuen Job und bedankt sich bei allen für die Blumen. Ein Gast bringt einen Kuchen, der nach Schokolade riecht.",
      "Später läuft Musik, und alle tanzen. Der Abend ist warm, und die Stimmung ist fröhlich. Bevor die Gäste nach Hause gehen, helfen sie beim Aufräumen. Frau Yilmaz sagt, dass sie sich über diese Feier sehr freut.",
      "Am Sonntag treffen sich einige Gäste noch einmal zum Kaffee. Sie zeigen einander die Fotos vom Vorabend und erzählen kleine Geschichten. Frau Yilmaz erzählt, dass sie früher große Feiern anstrengend fand. Diesmal musste sie nicht alles allein vorbereiten, weil ihre Nachbarn geholfen haben. Sie möchte sich bei den Kindern besonders bedanken und plant schon einen gemeinsamen Ausflug.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تحتفل السيدة يلماز يوم السبت بعيد ميلادها الستين. تدعو الجيران إلى الساحة الداخلية للمبنى. وتظهر ساعة اللقاء ومكانه في الدعوة. يساعدها أخوها في التزيين، ويضع الأطفال الكراسي بمحاذاة الجدار. ويصل الضيوف الأوائل في الخامسة.",
      "أعجب السيدة يلماز خصوصاً ألبوم الصور الكبير الذي صنعه الأطفال وأهدوه لها. وتهنئ جارتها بوظيفتها الجديدة، وتشكر الجميع على الزهور. ويحضر أحد الضيوف كعكة تفوح منها رائحة الشوكولاتة.",
      "تُعزف الموسيقى لاحقاً ويرقص الجميع. الأمسية دافئة والأجواء مبهجة. وقبل أن يعود الضيوف إلى بيوتهم، يساعدون في ترتيب المكان. وتقول السيدة يلماز إنها سعيدة جداً بهذه المناسبة.",
      "يلتقي بعض الضيوف مجدداً لشرب القهوة يوم الأحد. ويتبادلون صور الأمسية السابقة ويروون قصصاً صغيرة. وتقول السيدة يلماز إنها كانت ترى الاحتفالات الكبيرة متعبة في السابق. لكنها لم تضطر هذه المرة إلى إعداد كل شيء وحدها، لأن جيرانها ساعدوها. وتريد أن تشكر الأطفال خصوصاً، وتخطط بالفعل لنزهة مشتركة.",
    ]);
    expect(reading.glossary.map((item) => [item.de, item.ar])).toEqual([
      ["der Innenhof", "الساحة الداخلية للمبنى"],
      ["die Einladung", "الدعوة"],
      ["der Treffpunkt", "مكان اللقاء"],
      ["die Nachbarn", "الجيران"],
      ["das Fotoalbum", "ألبوم الصور"],
      ["gratulieren + Dativ", "يهنئ شخصاً"],
      ["sich bei jemandem bedanken", "يشكر شخصاً"],
      ["das Aufräumen", "ترتيب المكان بعد المناسبة"],
      ["der Vorabend", "المساء السابق"],
      ["die Nachbarin", "الجارة"],
    ]);
    expect(reading.redemittel).toEqual([
      { de: "Ich lade dich herzlich ein.", ar: "أدعوك بكل سرور." },
      { de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "أطيب التهاني بعيد ميلادك!" },
      { de: "Das Geschenk gefällt mir sehr.", ar: "تعجبني الهدية كثيراً." },
      { de: "Ich bedanke mich bei euch für die Blumen.", ar: "أشكركم على الزهور." },
    ]);
    expect(reading.discussionAr?.length).toBeGreaterThan(40);
    expect(reading.discussionAr).toContain("لا يُسجَّل دليلاً على إتقان التحدث");
    const wordCount = reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
    expect(wordCount).toBeGreaterThanOrEqual(150);

    for (const question of reading.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(4);
      expect(question.errorType).toBe("comprehension");
      if (!question.questionAr) throw new Error(`${question.id} must include an Arabic question`);
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.questionAr.trim().length).toBeGreaterThan(8);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      const key = question.options[question.correctIndex];
      expect(key.length <= 45 || !reading.paragraphs.join(" ").includes(key)).toBe(true);
    }
  });

  it("documents the contrast in the reading choices and keeps the reading questions formative", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading.questions.map((question) => question.options[question.correctIndex])).toEqual([
      "In den Innenhof.",
      "Ein großes Fotoalbum.",
      "Sie helfen beim Aufräumen.",
      "Ihre Nachbarn haben ihr geholfen.",
    ]);
    for (const question of reading.questions) {
      for (const [index, option] of question.options.entries()) {
        expect(
          evaluateExercise(question, option).isCorrect,
          `${question.id} option ${index + 1}: ${option}`,
        ).toBe(index === question.correctIndex);
      }
    }
    expect(lessonA209.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds).toEqual([
      "reading:read-a2-09:rq1",
      "reading:read-a2-09:rq2",
      "reading:read-a2-09:rq3",
      "reading:read-a2-09:rq4",
    ]);
  });

  it("keeps every reading and listening question grounded, keyed, and distinctly classified", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading.questions.map((question) => question.id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(lessonA209.listening.questions.map((question) => question.id)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"]);
    expect(lessonA209.listening.questions.every((question) => question.errorType === "comprehension")).toBe(
      true,
    );
    expect(reading.questions.every((question) => question.errorType === "comprehension")).toBe(true);
    expect(lessonA209.listening.items).toEqual([
      {
        id: "l1",
        title: "دعوة عيد ميلاد",
        lines: [
          { speaker: "Mona", de: "Sami, ich habe am Samstag Geburtstag!", ar: "سامي، عيد ميلادي يوم السبت!" },
          { speaker: "Sami", de: "Herzlichen Glückwunsch! Was hast du geplant?", ar: "أطيب التهاني! ماذا خططتِ؟" },
          { speaker: "Mona", de: "Ich mache eine Party. Ich lade dich ein!", ar: "سأقيم حفلة. أدعوك!" },
          { speaker: "Sami", de: "Gern! Wann beginnt die Feier?", ar: "بكل سرور! متى تبدأ المناسبة؟" },
          { speaker: "Mona", de: "Die Feier beginnt um sieben Uhr bei mir zu Hause.", ar: "تبدأ المناسبة في السابعة في منزلي." },
          { speaker: "Sami", de: "Super! Ich bringe ein Geschenk mit.", ar: "رائع! سأحضر هدية." },
          { speaker: "Mona", de: "Danke dir! Du bist ein guter Freund.", ar: "شكراً لك! أنت صديق جيد." },
        ],
      },
      {
        id: "l2",
        title: "حديث قصير في المناسبة",
        lines: [
          { speaker: "Anna", de: "Das Geschenk gefällt mir sehr! Danke.", ar: "تعجبني الهدية كثيراً! شكراً." },
          { speaker: "Karim", de: "Gern geschehen! Und die Torte?", ar: "على الرحب والسعة! وماذا عن التورتة؟" },
          { speaker: "Anna", de: "Die Torte ist lecker! Wer hat sie gebacken?", ar: "التورتة لذيذة! من خبزها؟" },
          { speaker: "Karim", de: "Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.", ar: "خبزتها أمي. أساعدها في المطبخ." },
        ],
      },
      {
        id: "l3",
        title: "تفاصيل الدعوة وما سيحضره الضيوف",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. المناسبة والتفاصيل في الحوار تدريبية وخيالية.",
        lines: [
          { speaker: "Mona", de: "Hast du die Einladung von Frau Yilmaz bekommen?", ar: "هل وصلتك دعوة السيدة يلماز؟", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-1.mp3" },
          { speaker: "Sami", de: "Ja. Sie feiert am Samstag im Innenhof.", ar: "نعم. ستحتفل يوم السبت في الساحة الداخلية.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-2.mp3" },
          { speaker: "Mona", de: "Um wie viel Uhr beginnt das Fest?", ar: "في أي ساعة تبدأ المناسبة؟", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-3.mp3" },
          { speaker: "Sami", de: "Um fünf Uhr. Das steht auf der Einladung.", ar: "في الخامسة. هذا ما ورد في الدعوة.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-4.mp3" },
          { speaker: "Mona", de: "Was soll ich mitbringen?", ar: "ماذا ينبغي أن أحضر معي؟", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-5.mp3" },
          { speaker: "Sami", de: "Bring einen Salat mit. Ich bringe die Getränke.", ar: "أحضري سلطة. سأحضر المشروبات.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-3-6.mp3" },
        ],
      },
      {
        id: "l4",
        title: "هدية للسيدة يلماز",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. تفاصيل المناسبة خيالية للتدريب.",
        lines: [
          { speaker: "Mona", de: "Weißt du schon, was wir Frau Yilmaz schenken?", ar: "هل تعرف ماذا سنهدي السيدة يلماز؟", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-1.mp3" },
          { speaker: "Sami", de: "Ja, wir schenken ihr ein Kochbuch.", ar: "نعم، سنهديها كتاباً للطهي.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-2.mp3" },
          { speaker: "Mona", de: "Liest sie gern Kochbücher?", ar: "هل تحب قراءة كتب الطهي؟", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-3.mp3" },
          { speaker: "Sami", de: "Ja, sie probiert oft neue Rezepte aus.", ar: "نعم، كثيراً ما تجرب وصفات جديدة.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-4.mp3" },
          { speaker: "Mona", de: "Dann kaufen wir das Buch zusammen.", ar: "إذن سنشتري الكتاب معاً.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-5.mp3" },
          { speaker: "Sami", de: "Gute Idee. Ich gratuliere ihr am Samstag.", ar: "فكرة جيدة. سأهنئها يوم السبت.", audioSrc: "/audio/lessons/a2-09/ls-a2-09-4-6.mp3" },
        ],
      },
    ]);
    expect(lessonA209.listening.items.map((item) => item.lines.length)).toEqual([7, 4, 6, 6]);
    expect(lessonA209.listening.questions.map((question) => [question.questionDe, question.questionAr])).toEqual([
      ["An welchem Tag hat Mona Geburtstag?", "في أي يوم عيد ميلاد منى؟"],
      ["Um wie viel Uhr beginnt die Feier?", "في أي ساعة تبدأ المناسبة؟"],
      ["Wer hat die Torte gebacken?", "من خبز التورتة؟"],
      ["Wo feiert Frau Yilmaz?", "أين تحتفل السيدة يلماز؟"],
      ["Was soll Mona mitbringen?", "ماذا ينبغي لمنى أن تحضر معها؟"],
      ["Was bringt Sami mit?", "ماذا سيحضر سامي معه؟"],
      ["Was schenken Mona und Sami Frau Yilmaz?", "ماذا سيهدي منى وسامي السيدة يلماز؟"],
      ["Was macht Frau Yilmaz oft?", "ماذا تفعل السيدة يلماز كثيراً؟"],
      ["Wann gratuliert Sami Frau Yilmaz?", "متى سيهنئ سامي السيدة يلماز؟"],
    ]);

    for (const question of [...reading.questions, ...lessonA209.listening.questions]) {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(4);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(evaluateExercise(question, answer).isCorrect).toBe(true);
      for (const [index, option] of question.options.entries()) {
        expect(
          evaluateExercise(question, option).isCorrect,
          `${question.id} option ${index + 1}: ${option}`,
        ).toBe(index === question.correctIndex);
      }
    }
  });
});

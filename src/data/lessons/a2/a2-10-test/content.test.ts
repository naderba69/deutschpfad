/**
 * a2-10 — المحتوى: النظرية وجداول المقابلة والقراءة الثنائية اللغة والاستماع (جزء من تدقيق الدرس)
 * فُصل من a2-10.test.ts في الدفعة 102 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { taskIds } from "./fixtures";

describe("A2-10 lesson content audit", () => {
  it("checks both theory blocks, the three-link contrast, and the scoped possessive table", () => {
    const links = lessonA210.theory.find((block) => block.id === "t1");
    const possessives = lessonA210.theory.find((block) => block.id === "t2");
    expect(links).toBeDefined();
    expect(possessives).toBeDefined();
    expect(links?.table?.rows.map((row) => [row.label, ...row.cells])).toEqual([
      ["weil", "لأنّ", "سبب", "Ich lerne, weil ich die Prüfung bestehen will."],
      ["wenn", "إذا/عندما", "شرط أو زمن بحسب السياق", "Wenn ich Zeit habe, lerne ich."],
      ["ob", "هل/ما إذا", "سؤال غير مباشر بنعم/لا", "Ich weiß nicht, ob er kommt."],
    ]);
    expect(links?.explanationAr).toContain("الزمن");
    expect(links?.explanationAr).toContain("الفعل المصرف");
    expect(links?.whyAr).toContain("علامة الترقيم تتبع نوع الجملة الرئيسية");
    expect(links?.relatedRuleComparison?.content).toContain("denn ich habe Zeit");
    expect(links?.relatedRuleComparison?.content).toContain("الكلام العفوي");
    expect(links?.commonMistakes).toEqual([
      {
        wrong: "Ich lerne noch, weil ich will die Prüfung bestehen.",
        right: "Ich lerne noch, weil ich die Prüfung bestehen will.",
        whyAr: "في المثال التابع المندمج الذي نتدرب عليه يأتي الفعل المصرف will في النهاية، بعد المصدر bestehen.",
        classification: "error",
      },
      {
        wrong: "Ich weiß nicht, wenn die Prüfung schwer ist. (إذا كان المقصود: لا أعرف هل الامتحان صعب.)",
        right: "Ich weiß nicht, ob die Prüfung schwer ist.",
        whyAr: "للسؤال غير المباشر بنعم/لا نستخدم ob؛ وتظل wenn مناسبة في سياقات الشرط أو الزمن الأخرى.",
        classification: "contextual-alternative",
      },
      {
        wrong: "Weil es regnet, ich bleibe zu Hause.",
        right: "Weil es regnet, bleibe ich zu Hause.",
        whyAr: "في الجملة الرئيسية القياسية، تشغل الجملة التابعة المتقدمة الموقع الأول؛ لذلك يأتي الفعل المصرف بعدها مباشرةً قبل الفاعل.",
        classification: "error",
      },
    ]);
    expect(links?.examples.map(({ de, ar }) => [de, ar])).toEqual([
      ["Ich lerne Deutsch, weil ich in Deutschland studieren will.", "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا."],
      ["Wenn ich Zeit habe, wiederhole ich Vokabeln.", "إذا توفر لديّ وقت، أراجع المفردات."],
      ["Ich weiß nicht, ob die Prüfung schwer ist.", "لا أعرف ما إذا كان الامتحان صعباً."],
      ["Er lernt, weil er die Prüfung bestehen will.", "يتعلم لأنه يريد اجتياز الامتحان."],
      ["Ob du kommst, ist mir egal.", "لا يهمني إن كنت ستأتي أم لا."],
      ["Weil ich müde war, bin ich früh ins Bett gegangen.", "لأنني كنت متعباً، ذهبت إلى الفراش مبكراً."],
    ]);

    expect(possessives?.titleAr).not.toContain("كل الحالات");
    expect(possessives?.titleDe).toBe("Possessivbegleiter: Deklination von mein");
    expect(possessives?.table?.rows.map((row) => row.label)).toEqual([
      "Nominativ",
      "Akkusativ",
      "Dativ",
    ]);
    expect(possessives?.table?.rows.map((row) => row.cells)).toEqual([
      ["mein", "meine", "mein", "meine"],
      ["meinen", "meine", "mein", "meine"],
      ["meinem", "meiner", "meinem", "meinen (+n عند انطباقها على الاسم)"],
    ]);
    expect(possessives?.explanationAr).toContain("لا يغطي الجدول Genitiv");
    expect(possessives?.explanationAr).toContain("في Dativ الجمع تكون الأداة meinen");
    expect(possessives?.explanationAr).toContain("mit meinen Freunden وmit meinen Eltern");
    expect(possessives?.comparisonWithArabic).toContain("لا تقابل تسمية Dativ كلمة «الجر» العربية مقابلةً كاملة");
    expect(possessives?.examples.map(({ de, ar }) => [de, ar])).toEqual([
      ["Das ist mein Bruder.", "هذا أخي. (Nominativ بعد sein)"],
      ["Ich sehe meinen Bruder.", "أرى أخي. (Akkusativ؛ sehen يأخذ مفعولاً به هنا)"],
      ["Ich helfe meinem Bruder.", "أساعد أخي. (Dativ؛ الفعل helfen يتطلب Dativ)"],
      ["Meine Schwester lernt Deutsch.", "أختي تتعلم الألمانية. (Nominativ مؤنث)"],
      ["Ich helfe meiner Schwester.", "أساعد أختي. (Dativ مؤنث)"],
      ["Das ist mein Buch. Ich lese mein Buch.", "هذا كتابي. أقرأ كتابي. (محايد: mein في المثالين)"],
    ]);
    expect(possessives?.commonMistakes).toEqual([
      {
        wrong: "Ich sehe mein Bruder.",
        right: "Ich sehe meinen Bruder.",
        whyAr: "Bruder مذكر، وهو مفعول به مباشر لـsehen هنا؛ لذلك Akkusativ: meinen.",
        classification: "error",
      },
      {
        wrong: "Ich helfe meinen Bruder.",
        right: "Ich helfe meinem Bruder.",
        whyAr: "الفعل helfen يأخذ Dativ في هذا المعنى؛ مع الاسم المذكر نقول meinem Bruder.",
        classification: "error",
      },
      {
        wrong: "meine Bruder",
        right: "mein Bruder",
        whyAr: "في Nominativ الاسم Bruder مذكر ومفرد؛ الشكل المناسب قبل الاسم هو mein.",
        classification: "error",
      },
    ]);
    expect(lessonA210.summary).not.toMatch(/كل الحالات|all cases/i);
  });

  it("checks the full bilingual reading, paragraph references, glossary, questions, and answer keys", () => {
    const reading = lessonA210.reading;
    expect(reading).toBeDefined();
    expect(reading?.id).toBe("read-a2-10");
    expect(reading?.textType).toBe("erzaehlung");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphs).toEqual([
      "Seit zwei Monaten besucht Noura einen Deutschkurs an einer Sprachschule in ihrer Stadt. Der Unterricht findet montags und mittwochs am Abend statt. Sie lernt Deutsch, weil sie später an einer Universität studieren möchte. Die Anmeldung für den Kurs hat sie online gemacht.",
      "Vor der Prüfung wiederholt Noura jeden Tag neue Wörter. Wenn sie nach der Arbeit müde ist, macht sie eine kurze Pause. Danach schreibt sie einige Wörter in ihr Heft und liest sie am nächsten Morgen noch einmal.",
      "Am Freitag fragt ihr Freund Sami, ob sie am Wochenende zusammen üben kann. Noura antwortet, dass sie am Samstag Zeit hat. Sie weiß noch nicht, ob die Bibliothek geöffnet ist; deshalb prüft Sami die Öffnungszeiten auf der Webseite.",
      "Am Samstag lernen beide in der Bibliothek. Sie vergleichen ihre Notizen und erklären einander schwierige Wörter. Noura ist vor der Prüfung etwas nervös, aber sie bleibt ruhig, weil sie sich gut vorbereitet hat. Wenn beide Zeit haben, wollen sie vor der nächsten Prüfung wieder zusammen lernen.",
    ]);
    expect(reading?.paragraphsAr).toEqual([
      "منذ شهرين تحضر نورا دورةً للألمانية في مدرسة لغات بمدينتها. تُعقد الحصص مساء يومي الاثنين والأربعاء. تتعلم الألمانية لأنها تريد لاحقاً الدراسة في جامعة. وقد أنجزت تسجيل الدورة عبر الإنترنت.",
      "قبل الامتحان تراجع نورا كلمات جديدة كل يوم. إذا عادت متعبة من العمل تأخذ استراحة قصيرة. بعد ذلك تكتب بعض الكلمات في دفترها وتقرأها مجدداً في صباح اليوم التالي.",
      "يوم الجمعة يسألها صديقها سامي هل يمكنهما التدرّب معاً في نهاية الأسبوع. تجيب نورا بأنها متفرغة يوم السبت. وهي لا تعرف بعد إن كانت المكتبة مفتوحة؛ لذلك يتحقق سامي من مواعيد فتحها على الموقع الإلكتروني.",
      "يوم السبت يتعلم الاثنان معاً في المكتبة. يقارنان ملاحظاتهما ويشرحان لبعضهما الكلمات الصعبة. تشعر نورا ببعض التوتر قبل الامتحان، لكنها تظل هادئة لأنها استعدت جيداً. وإذا كان لدى كليهما وقت، يريدان الدراسة معاً مجدداً قبل الامتحان التالي.",
    ]);
    expect(reading?.paragraphs?.every((paragraph) => paragraph.trim().length > 80)).toBe(true);
    expect(reading?.paragraphsAr?.every((paragraph) => paragraph.trim().length > 60)).toBe(true);
    expect(reading?.paragraphs?.[0]).toContain("montags und mittwochs am Abend");
    expect(reading?.paragraphs?.[0]).toContain("weil sie später an einer Universität studieren möchte");
    expect(reading?.paragraphs?.[1]).toContain("Wenn sie nach der Arbeit müde ist");
    expect(reading?.paragraphs?.[2]).toContain("ob die Bibliothek geöffnet ist");
    expect(reading?.paragraphs?.[3]).toContain("weil sie sich gut vorbereitet hat");
    expect(reading?.questions.map((question) => [question.questionDe, question.questionAr, question.paragraph])).toEqual([
      ["Wann findet der Unterricht statt?", "متى تُعقد الحصص؟", 1],
      ["Warum lernt Noura Deutsch?", "لماذا تتعلم نورا الألمانية؟", 1],
      ["Was prüft Sami am Freitag?", "ما الذي يتحقق منه سامي يوم الجمعة؟", 3],
      ["Warum bleibt Noura ruhig?", "لماذا تظل نورا هادئة؟", 4],
    ]);
    expect(reading?.questions.map((question) => question.explanation)).toEqual([
      "تنص الفقرة الأولى على أن الحصص مساء الاثنين والأربعاء؛ أما لقاء المكتبة يوم السبت فليس موعد الحصة.",
      "تذكر نورا أنها تريد لاحقاً الدراسة في جامعة. بقية الأسباب غير واردة في النص.",
      "يتحقق سامي من مواعيد فتح المكتبة على موقعها؛ ولا يذكر النص أنه يفحص موعد الامتحان أو الرسوم أو الجدول.",
      "تقول الفقرة إنها تظل هادئة لأنها استعدت جيداً؛ ولا يذكر النص إلغاء الامتحان أو غياب الامتحان أو قيام سامي به عنها.",
    ]);
    expect(reading?.glossary).toEqual([
      { de: "die Sprachschule", ar: "مدرسة اللغات" },
      { de: "die Anmeldung", ar: "التسجيل", noteAr: "في النص: أنجزت نورا تسجيل الدورة عبر الإنترنت." },
      { de: "der Unterricht", ar: "التعليم أو الحصة الدراسية" },
      { de: "wiederholen", ar: "يراجع أو يكرر" },
      { de: "müde", ar: "متعب" },
      { de: "das Heft", ar: "الدفتر" },
      { de: "üben", ar: "يتدرب" },
      { de: "geöffnet", ar: "مفتوح" },
      { de: "die Öffnungszeiten", ar: "مواعيد الفتح" },
      { de: "die Notizen", ar: "الملاحظات" },
      { de: "sich vorbereiten", ar: "يستعد" },
    ]);
    expect(reading?.redemittel).toEqual([
      { de: "Ich wiederhole neue Wörter.", ar: "أراجع كلمات جديدة." },
      { de: "Ich weiß noch nicht, ob die Bibliothek geöffnet ist.", ar: "لا أعرف بعد إن كانت المكتبة مفتوحة." },
      { de: "Ich lerne, weil ich mich gut vorbereiten möchte.", ar: "أدرس لأنني أريد أن أستعد جيداً." },
      { de: "Wenn ich müde bin, mache ich eine Pause.", ar: "إذا كنت متعباً، آخذ استراحة." },
    ]);
    expect(reading?.discussionAr).toMatch(/لا يقيس وحده.*الكتابة الحرة أو التحدث/);
  });

  it("checks all four listening dialogues and every transcript-free comprehension question", () => {
    expect(lessonA210.listening.items.map((item) => item.id)).toEqual(["l1", "l2", "l3", "l4"]);
    expect(lessonA210.listening.items.map((item) => item.lines.length)).toEqual([4, 5, 6, 6]);
    expect(lessonA210.listening.items.flatMap((item) => item.lines.map(({ speaker, de, ar }) => ({ speaker, de, ar })))).toEqual([
      { speaker: "Anna", de: "Warum lernst du Deutsch, Sami?", ar: "لماذا تتعلم الألمانية يا سامي؟" },
      { speaker: "Sami", de: "Ich lerne Deutsch, weil ich später in Deutschland studieren möchte.", ar: "أتعلم الألمانية لأنني أريد لاحقاً الدراسة في ألمانيا." },
      { speaker: "Anna", de: "Wann wiederholst du neue Wörter?", ar: "متى تراجع الكلمات الجديدة؟" },
      { speaker: "Sami", de: "Wenn ich am Morgen Zeit habe, wiederhole ich sie.", ar: "إذا توفر لديّ وقت في الصباح، أراجعها." },
      { speaker: "Karim", de: "Ich weiß nicht, ob die Prüfung schwierig wird.", ar: "لا أعرف ما إذا كان الامتحان سيكون صعباً." },
      { speaker: "Mona", de: "Wann ist die Prüfung?", ar: "متى الامتحان؟" },
      { speaker: "Karim", de: "Morgen. Ich lerne heute noch, weil ich gut vorbereitet sein möchte.", ar: "غداً. سأدرس اليوم أيضاً لأنني أريد أن أكون مستعداً جيداً." },
      { speaker: "Mona", de: "Bist du nervös?", ar: "هل أنت متوتر؟" },
      { speaker: "Karim", de: "Ja, ein bisschen. Ich hoffe, dass alles gut geht.", ar: "نعم، قليلاً. آمل أن تسير الأمور على ما يرام." },
      { speaker: "Lisa", de: "Hast du dich für den Deutschkurs am Abend angemeldet?", ar: "هل سجلت في دورة الألمانية المسائية؟" },
      { speaker: "Amir", de: "Noch nicht. Ich weiß nicht, ob ich nach der Arbeit pünktlich komme.", ar: "ليس بعد. لا أعرف إن كنت سأصل في الوقت المحدد بعد العمل." },
      { speaker: "Lisa", de: "Der Kurs beginnt erst um halb sieben.", ar: "تبدأ الدورة عند السادسة والنصف." },
      { speaker: "Amir", de: "Dann passt es. Wenn mein Bus pünktlich ist, bin ich um sechs da.", ar: "إذن يناسبني الموعد. إذا وصلت الحافلة في موعدها، سأكون هناك عند السادسة." },
      { speaker: "Lisa", de: "Lernst du lieber allein oder in einer Gruppe?", ar: "هل تفضل الدراسة وحدك أم ضمن مجموعة؟" },
      { speaker: "Amir", de: "In einer kleinen Gruppe, weil wir zusammen sprechen können.", ar: "في مجموعة صغيرة، لأننا نستطيع التحدث معاً." },
      { speaker: "Nora", de: "Lernst du am Wochenende für die Prüfung?", ar: "هل تدرس للامتحان في عطلة نهاية الأسبوع؟" },
      { speaker: "Amir", de: "Ja, wenn die Bibliothek geöffnet ist, lerne ich dort.", ar: "نعم، إذا كانت المكتبة مفتوحة، أدرس هناك." },
      { speaker: "Nora", de: "Weißt du, ob sie am Samstag bis sechs geöffnet ist?", ar: "هل تعرف إن كانت مفتوحة يوم السبت حتى السادسة؟" },
      { speaker: "Amir", de: "Das weiß ich nicht. Ich schaue auf der Webseite nach.", ar: "لا أعرف ذلك. سأتحقق من الموقع الإلكتروني." },
      { speaker: "Nora", de: "Wenn du möchtest, können wir zusammen lernen.", ar: "إذا أردت، يمكننا أن ندرس معاً." },
      { speaker: "Amir", de: "Gute Idee, weil ich mit einem Partner besser üben kann.", ar: "فكرة جيدة، لأنني أستطيع التدرب بشكل أفضل مع شريك." },
    ]);
    expect(
      lessonA210.listening.items.flatMap((item) => item.lines).every((line) => line.de.trim() && line.ar.trim()),
    ).toBe(true);
    expect(lessonA210.listening.items[0]?.lines[1]?.de).toBe(
      "Ich lerne Deutsch, weil ich später in Deutschland studieren möchte.",
    );
    expect(lessonA210.listening.items[0]?.lines[3]?.de).toBe(
      "Wenn ich am Morgen Zeit habe, wiederhole ich sie.",
    );
    expect(lessonA210.listening.items[1]?.lines[0]?.de).toBe(
      "Ich weiß nicht, ob die Prüfung schwierig wird.",
    );
    expect(lessonA210.listening.items[1]?.lines[2]?.de).toBe(
      "Morgen. Ich lerne heute noch, weil ich gut vorbereitet sein möchte.",
    );
    expect(lessonA210.listening.questions.map((question) => question.itemId)).toEqual([
      "l1",
      "l1",
      "l2",
      "l2",
      "l3",
      "l3",
      "l3",
      "l4",
      "l4",
      "l4",
    ]);
    expect(lessonA210.listening.questions.map((question) => question.questionAr)).toEqual([
      "لماذا يتعلم سامي الألمانية؟",
      "متى يراجع سامي الكلمات الجديدة؟",
      "ما الأمر الذي لا يعرفه كريم؟",
      "كيف يشعر كريم؟",
      "متى تبدأ الدورة؟",
      "متى يكون أمير هناك إذا وصلت الحافلة في موعدها؟",
      "كيف يفضل أمير أن يتعلم؟",
      "أين يدرس أمير إذا كانت المكتبة مفتوحة؟",
      "ما الأمر الذي لا يعرفه أمير بعد؟",
      "ما الذي تقترحه نورا وأمير؟",
    ]);
    expect(lessonA210.listening.questions.map((question) => question.explanation)).toEqual([
      "يقول Sami إنه يتعلم الألمانية لأنه يريد لاحقاً الدراسة في ألمانيا؛ أما موعد الامتحان فيخص حوار Karim.",
      "يقول Sami: Wenn ich am Morgen Zeit habe, wiederhole ich sie. لا يحدد الحوار وقتاً يومياً ثابتاً.",
      "يقول Karim: Ich weiß nicht, ob die Prüfung schwierig wird. ولا يذكر النص عدم معرفته بالمواعيد أو بعدد الكلمات.",
      "يجيب Karim: Ja, ein bisschen، رداً على سؤال Mona عما إذا كان متوتراً.",
      "تقول Lisa إن الدورة تبدأ عند halb sieben، أي السادسة والنصف؛ أما السادسة فهو وقت وصول Amir إذا كانت الحافلة في موعدها.",
      "يقول Amir: Wenn mein Bus pünktlich ist, bin ich um sechs da؛ السادسة والنصف بداية الدورة لا وقت وصوله.",
      "يفضل Amir مجموعة صغيرة لأنهم يستطيعون التحدث معاً؛ لا يقول إنه يريد الدراسة وحده أو مع Lisa صباحاً.",
      "يقول أمير إنه يدرس في المكتبة إذا كانت مفتوحة.",
      "تسأل نورا إن كان يعرف ساعات فتح المكتبة، فيجيب بأنه لا يعرف وسيتحقق من الموقع.",
      "تقترح نورا أن يدرسا معاً، ويوافق أمير لأن التدرب مع شريك يساعده.",
    ]);
    for (const question of lessonA210.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA210.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      expect(getListeningQuestionTaskId(lessonA210.id, question.itemId, question.id, true)).toBe(
        `listening-transcript:${lessonA210.id}:${question.itemId}:${question.id}`,
      );
    }
    expect(lessonA210.lernziele.find((item) => item.id === "z-listening")?.evidence?.taskIds).not.toContain(
      "listening-transcript:a2-10:l1:q1",
    );
    expect(lessonA210.lernziele.find((item) => item.id === "z-listening")?.evidence?.taskIds?.some((id) =>
      id.startsWith("flow-listening:"),
    )).toBe(false);
  });
});

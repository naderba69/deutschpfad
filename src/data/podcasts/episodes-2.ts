/**
 * حلقات البودكاست — الجزء الثاني (الحلقات الإضافية لكل مستوى)
 * فُصل من index.ts في الدفعة 61 (سقف 600 سطراً). القيم منقولة حرفياً وبالترتيب.
 */
import type { PodcastEpisode } from "./types";

export const PODCASTS_PART_2: PodcastEpisode[] = [
  /* ─── A1 — حلقة ثالثة ─── */
  {
    id: "p-a1-meine-familie",
    level: "A1",
    title: "Meine Familie",
    titleAr: "عائلتي",
    emoji: "👨‍👩‍👧",
    script: "Ich habe eine kleine Familie. Mein Vater heißt Karim und meine Mutter heißt Salma. Ich habe einen Bruder und eine Schwester. Wir wohnen in einem Haus mit Garten. Am Wochenende essen wir zusammen und reden viel. Ich liebe meine Familie sehr.",
    scriptAr: "عندي عائلة صغيرة. أبي اسمه كريم وأمي اسمها سلمى. عندي أخ وأخت. نسكن في بيت فيه حديقة. في نهاية الأسبوع نأكل معاً ونتحدث كثيراً. أحب عائلتي كثيراً.",
    questions: [
      { de: "Wie viele Geschwister hat der Sprecher?", ar: "كم أخاً وأختاً للمتحدث؟", options: [
        { text: "Einen Bruder und eine Schwester", ar: "أخاً وأختاً", correct: true, explanation: "نعم — «Ich habe einen Bruder und eine Schwester»." },
        { text: "Zwei Brüder, aber keine Schwester", ar: "أخوين", correct: false, explanation: "لا — ليس أخوين بلا أخت؛ بل «Ich habe einen Bruder und eine Schwester»." },
        { text: "Keine Geschwister in der Familie", ar: "لا إخوة", correct: false, explanation: "لا — له إخوةٌ صراحةً: «Ich habe einen Bruder und eine Schwester»." },
      ]},
      { de: "Wo wohnt die Familie?", ar: "أين تسكن العائلة؟", options: [
        { text: "In einem Haus mit Garten", ar: "في بيت فيه حديقة", correct: true, explanation: "نعم — الحلقة تقول: «Wir wohnen in einem Haus mit Garten.»." },
        { text: "In einer kleinen Wohnung", ar: "في شقة صغيرة", correct: false, explanation: "لا — ليست شقة Wohnung؛ بل «Wir wohnen in einem Haus mit Garten»." },
        { text: "In einem Hotel am Meer", ar: "في فندق", correct: false, explanation: "لا — لم يُذكر فندق Hotel ولا بحر؛ والمسكن «in einem Haus mit Garten»." },
      ]},
    ],
  },
  /* ─── A2 — حلقة ثالثة ─── */
  {
    id: "p-a2-kinoabend",
    level: "A2",
    title: "Ein Kinoabend",
    titleAr: "أمسية سينما",
    emoji: "🎬",
    script: "Am Freitagabend sind wir ins Kino gegangen. Wir haben einen spannenden Film gesehen. Danach haben wir in einem Café geredet und Eis gegessen. Der Film hat zwei Stunden gedauert. Ich fand den Film sehr gut, aber meine Freundin fand ihn langweilig.",
    scriptAr: "مساء الجمعة ذهبنا إلى السينما. شاهدنا فيلماً مثيراً. ثم تحدثنا في مقهى وأكلنا آيس كريم. استمر الفيلم ساعتين. وجدت الفيلم جيداً جداً لكن صديقتي وجدته مملاً.",
    questions: [
      { de: "Wann sind sie ins Kino gegangen?", ar: "متى ذهبوا إلى السينما؟", options: [
        { text: "Am Freitagabend", ar: "مساء الجمعة", correct: true, explanation: "نعم — «Am Freitagabend sind wir ins Kino gegangen»." },
        { text: "Am Montagmorgen", ar: "صباح الاثنين", correct: false, explanation: "لا — ليس صباح الاثنين Montagmorgen؛ بل «Am Freitagabend sind wir ins Kino gegangen»." },
        { text: "Am Sonntag", ar: "يوم الأحد", correct: false, explanation: "لا — لم يُذكر الأحد Sonntag؛ والخروج كان «Am Freitagabend»." },
      ]},
      { de: "Wie lange hat der Film gedauert?", ar: "كم استمر الفيلم؟", options: [
        { text: "Zwei Stunden", ar: "ساعتين", correct: true, explanation: "نعم — الحلقة تقول: «Der Film hat zwei Stunden gedauert.»." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — ليست ساعة واحدة؛ بل «Der Film hat zwei Stunden gedauert»." },
        { text: "Drei Stunden", ar: "ثلاث ساعات", correct: false, explanation: "لا — لم تُذكر ثلاث Stunden؛ والمدة «zwei Stunden gedauert»." },
      ]},
    ],
  },
  /* ─── B1 — حلقة رابعة ─── */
  {
    id: "p-b1-gesundheit",
    level: "B1",
    title: "Gesund leben",
    titleAr: "العيش بصحة",
    emoji: "🥗",
    // WHO adult guideline: 150–300 min moderate or 75–150 min vigorous activity weekly; stairs count as everyday physical activity.
    // https://www.who.int/europe/news-room/fact-sheets/item/physical-activity
    script: "Die Weltgesundheitsorganisation empfiehlt Erwachsenen pro Woche 150 bis 300 Minuten Bewegung mit mittlerer Intensität oder 75 bis 150 Minuten mit hoher Intensität. Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen. Die Zeit kann über die Woche verteilt werden. Die Empfehlung ist allgemein und ersetzt keine persönliche medizinische Beratung.",
    scriptAr: "توصي منظمة الصحة العالمية البالغين 150 إلى 300 دقيقة أسبوعياً من الحركة متوسطة الشدة، أو 75 إلى 150 دقيقة من الحركة الشديدة. وتُحسب الحركة اليومية أيضاً، مثل صعود الدرج. ويمكن توزيع الوقت على أيام الأسبوع. هذه توصية عامة وليست بديلاً عن المشورة الطبية الشخصية.",
    questions: [
      { de: "Was empfiehlt die WHO Erwachsenen?", ar: "بماذا توصي منظمة الصحة العالمية للبالغين؟", options: [
        { text: "150 bis 300 Minuten moderat oder 75 bis 150 Minuten intensiv pro Woche", ar: "أسبوعياً 150 إلى 300 دقيقة متوسطة الشدة أو 75 إلى 150 دقيقة شديدة الشدة", correct: true, explanation: "نعم — يذكر النص: «150 bis 300 Minuten Bewegung mit mittlerer Intensität oder 75 bis 150 Minuten mit hoher Intensität»." },
        { text: "Nur Bewegung im Fitnessstudio, nicht als Alltagstätigkeit", ar: "الحركة في النادي الرياضي فقط، لا النشاط اليومي", correct: false, explanation: "لا — يقول النص «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen»؛ فلا يحصر الحركة في Fitnessstudio." },
        { text: "Treppensteigen zählt nicht als körperliche Bewegung im Alltag", ar: "صعود الدرج لا يُعد حركة بدنية يومية", correct: false, explanation: "لا — يقول النص: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen»." },
      ]},
      { de: "Was zählt laut WHO als Bewegung im Alltag?", ar: "ما الذي يُحسب حركةً في الحياة اليومية وفقاً لمنظمة الصحة العالمية؟", options: [
        { text: "Treppensteigen", ar: "صعود الدرج", correct: true, explanation: "نعم — يقول النص: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
        { text: "Mit dem Auto fahren", ar: "قيادة السيارة", correct: false, explanation: "لا — لا يذكر النص السيارة؛ بل يقول: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
        { text: "Fastfood am Abend", ar: "وجبات سريعة مساءً", correct: false, explanation: "لا — لا يتناول النص الطعام؛ بل يقول: «Auch Bewegung im Alltag zählt, zum Beispiel Treppensteigen.»" },
      ]},
    ],
  },
  /* ─── B2 — حلقة خامسة ─── */
  {
    id: "p-b2-work-life-balance",
    level: "B2",
    title: "Work-Life-Balance",
    titleAr: "التوازن بين العمل والحياة",
    emoji: "⚖️",
    script: "Die Work-Life-Balance ist heute ein zentrales Thema. Viele Arbeitnehmer klagen über Überstunden und ständige Erreichbarkeit. Experten betonen, dass Erholung für die Produktivität unerlässlich ist. Unternehmen reagieren mit flexiblen Arbeitszeiten. Dennoch bleibt die Frage: Wie findet man die richtige Balance? Die Antwort ist individuell und hängt von den eigenen Werten ab.",
    scriptAr: "التوازن بين العمل والحياة موضوع محوري اليوم. يشكو موظفون كثيرون من الساعات الإضافية والاتصال الدائم. يؤكد الخبراء أن الراحة ضرورية للإنتاجية. تستجيب الشركات بساعات عمل مرنة. ومع ذلك يبقى السؤال: كيف يجد المرء التوازن الصحيح؟ الجواب فردي ويعتمد على القيم الشخصية.",
    contentNoteAr: "هذا نص تدريبي مبسّط، لا تقرير إحصائي. عبارتا «موظفون كثيرون» و«يؤكد الخبراء» تعميمان غير منسوبين في الحلقة إلى مصدر محدد، ولا تثبت المصادر المشار إليها جميع ادعاءاتها.",
    questions: [
      { de: "Worüber klagen viele Arbeitnehmer?", ar: "ممَّ يشكو كثير من الموظفين؟", options: [
        { text: "Über Überstunden und ständige Erreichbarkeit", ar: "من الساعات الإضافية والاتصال الدائم", correct: true, explanation: "نعم — الحلقة تقول: «Viele Arbeitnehmer klagen über Überstunden und ständige Erreichbarkeit.»." },
        { text: "Über zu viel Urlaub und zu freie Tage", ar: "من الإجازات الكثيرة", correct: false, explanation: "لا — ليست الإجازات الكثيرة Urlaub؛ والشكوى «über Überstunden und ständige Erreichbarkeit»." },
        { text: "Über zu wenig Arbeit und Langeweile", ar: "من قلة العمل والملل", correct: false, explanation: "لا — ليست قلّة العمل ولا الملل Langeweile؛ بل «Viele Arbeitnehmer klagen über Überstunden»." }
      ]},
      { de: "Wie reagieren Unternehmen?", ar: "كيف تستجيب الشركات؟", options: [
        { text: "Mit flexiblen Arbeitszeiten", ar: "بساعات عمل مرنة", correct: true, explanation: "نعم — الحلقة تقول: «Unternehmen reagieren mit flexiblen Arbeitszeiten.»." },
        { text: "Mit noch mehr Überstunden", ar: "بمزيد من الساعات الإضافية", correct: false, explanation: "لا — ليس بمزيد من الساعات الإضافية؛ بل «Unternehmen reagieren mit flexiblen Arbeitszeiten»." },
        { text: "Mit deutlich weniger Lohn", ar: "برواتب أقل", correct: false, explanation: "لا — لم يُذكر أجر Lohn؛ والاستجابة «mit flexiblen Arbeitszeiten»." },
      ]},
    ],
  },
  /* ─── B2 — حلقة سادسة ─── */
  {
    id: "p-b2-migration",
    level: "B2",
    title: "Migration und Identität",
    titleAr: "الهجرة والهوية",
    emoji: "🪪",
    script: "In dieser Übungsfolge erzählt Samira von ihrem Umzug nach Bremen. Am Anfang fühlte sie sich oft unsicher und fragte sich, wo sie sich zu Hause fühlte. In ihrem neuen Team brachte sie ihre Erfahrungen ein. Mit der Zeit fand sie Menschen, bei denen sie sich wohlfühlte. Für Samira gehört beides zu ihrer Identität: Erinnerungen an früher und ihr Leben heute. Andere Menschen erleben Zugehörigkeit anders.",
    scriptAr: "تحكي سميرة في هذه الحلقة التدريبية عن انتقالها إلى بريمن. في البداية شعرت بعدم الأمان كثيراً وتساءلت أين شعرت بأنها في بيتها. وفي فريقها الجديد شاركت خبراتها. ومع الوقت وجدت أشخاصاً ارتاحت إليهم. وبالنسبة إلى سميرة، تتألف هويتها من الأمرين: ذكريات الماضي وحياتها اليوم. وقد يختبر أشخاص آخرون الانتماء على نحو مختلف.",
    contentNoteAr: "مشهد تدريبي خيالي عن تجربة سميرة الفردية، وليس وصفاً إحصائياً أو بحثاً عن الهجرة والهوية. التسجيل مولّد آلياً من نص الحلقة الحالي، وليس تسجيلاً بشرياً؛ قورن بتفريغ ASR محلي أظهر تطابقاً نصياً مرتفعاً مع اختلاف إملائي في كلمة واحدة. لم يُجر تقييم سمعي للوضوح أو طبيعية الأداء أو النطق.",
    questions: [
      { de: "Wie fühlte sich Samira am Anfang?", ar: "كيف شعرت سميرة في البداية؟", options: [
        { text: "Oft unsicher", ar: "بعدم الأمان كثيراً", correct: true, explanation: "نعم — يقول النص: «Am Anfang fühlte sie sich oft unsicher»." },
        { text: "Immer gelangweilt", ar: "بالملل دائماً", correct: false, explanation: "لا — النص يقول «Am Anfang fühlte sie sich oft unsicher»؛ ولا يذكر Langeweile." },
        { text: "Sofort zu Hause", ar: "شعرت فوراً بأنها في بيتها", correct: false, explanation: "لا — النص يقول إنها «fragte sich, wo sie sich zu Hause fühlte»؛ فلا يقول إنها شعرت فوراً بأنها في بيتها." },
      ]},
      { de: "Was gehört für Samira zu ihrer Identität?", ar: "ما الذي يشكل هوية سميرة بحسب تجربتها؟", options: [
        { text: "Frühere Erinnerungen und ihr heutiges Leben", ar: "ذكريات الماضي وحياتها اليوم", correct: true, explanation: "نعم — يقول النص: «Für Samira gehört beides zu ihrer Identität: Erinnerungen an früher und ihr Leben heute»." },
        { text: "Ihr Team und ihr Beruf im neuen Umfeld", ar: "فريقها وعملها في محيطها الجديد", correct: false, explanation: "لا — خلاصة النص هي «Erinnerungen an früher und ihr Leben heute»؛ ولا يحصر الهوية في Team أو Beruf." },
        { text: "Nur ihr früherer Wohnort und ihre Sprache", ar: "مكان إقامتها السابق ولغتها فقط", correct: false, explanation: "لا — يقول النص «Erinnerungen an früher und ihr Leben heute»؛ ولا يحصر الهوية في Wohnort أو Sprache." },
      ]},
    ],
  },
  /* ─── B2 — حلقة سابعة (مهنية) ─── */
  {
    id: "p-b2-weiterbildung",
    level: "B2",
    title: "Weiterbildung neben dem Beruf",
    titleAr: "التدريب المستمر بجانب العمل",
    emoji: "🎓",
    script: "Weiterbildung neben dem Beruf ist für viele Beschäftigte eine Herausforderung. In dieser Übungsfolge berichtet Karim von einem Abendkurs: Zweimal pro Woche lernt er nach der Arbeit, am Wochenende wiederholt er den Stoff. Obwohl der Kurs anstrengend ist, möchte er ihn abschließen. Sein Arbeitgeber unterstützt ihn mit zwei Stunden Freistellung pro Woche. Karim sagt, die Weiterbildung habe ihm geholfen, eine neue Aufgabe im Team zu übernehmen. Er betont aber, dass nicht jede Weiterbildung automatisch zu einer Beförderung führt.",
    scriptAr: "التدريب المستمر بجانب العمل تحدٍّ لكثير من الموظفين. يحكي كريم في هذه الحلقة التدريبية عن دورة مسائية: يتعلم مرتين أسبوعياً بعد العمل، ويراجع المادة في نهاية الأسبوع. ورغم أن الدورة متعبة، يريد إتمامها. ويدعمه صاحب العمل بساعتَي إعفاء أسبوعياً. ويقول كريم إن التدريب ساعده على تولّي مهمة جديدة في الفريق. لكنه يؤكد أن ليس كل تدريب مستمر يؤدي تلقائياً إلى ترقية.",
    contentNoteAr: "مشهد تدريبي خيالي عن تجربة كريم الفردية، وليس إحصاءً عن فرص الترقية أو شروط جهات العمل. التسجيل مولّد آلياً من نص الحلقة الحالي، وليس تسجيلاً بشرياً، ولم يُجر تقييم سمعي للوضوح أو طبيعية الأداء.",
    questions: [
      { de: "Wie oft hat Karim Unterricht?", ar: "كم مرة يتعلم كريم أسبوعياً؟", options: [
        { text: "Zweimal pro Woche", ar: "مرتين أسبوعياً", correct: true, explanation: "نعم — الحلقة تقول: «Zweimal pro Woche lernt er nach der Arbeit»." },
        { text: "Dreimal pro Woche", ar: "ثلاث مرات أسبوعياً", correct: false, explanation: "لا — العدد في الحلقة «Zweimal pro Woche»، لا ثلاث مرات." },
        { text: "Nur am Wochenende", ar: "في نهاية الأسبوع فقط", correct: false, explanation: "لا — نهاية الأسبوع للـ«wiederholt er den Stoff»، والدرس «Zweimal pro Woche»." },
      ]},
      { de: "Wie unterstützt der Arbeitgeber Karim?", ar: "كيف يدعم صاحب العمل كريم؟", options: [
        { text: "Mit zwei Stunden Freistellung pro Woche", ar: "بساعتَي إعفاء أسبوعياً", correct: true, explanation: "نعم — «Sein Arbeitgeber unterstützt ihn mit zwei Stunden Freistellung pro Woche»." },
        { text: "Mit der Zahlung des gesamten Kurses", ar: "بدفع كامل تكلفة الدورة", correct: false, explanation: "لا — الدعم المذكور «mit zwei Stunden Freistellung pro Woche»، لا دفع الكامل." },
        { text: "Mit einem eigenen Büro im Betrieb", ar: "بمكتب خاص في الشركة", correct: false, explanation: "لا — لم تُذكر مكتب Büro؛ والدعم «mit zwei Stunden Freistellung pro Woche»." },
      ]},
      { de: "Was betont Karim am Ende?", ar: "ماذا يؤكد كريم في النهاية؟", options: [
        { text: "Dass Weiterbildung nicht automatisch zur Beförderung führt", ar: "أن التدريب لا يؤدي تلقائياً إلى ترقية", correct: true, explanation: "نعم — «dass nicht jede Weiterbildung automatisch zu einer Beförderung führt»." },
        { text: "Dass der Kurs ihm zu anstrengend geworden ist", ar: "أن الدورة صارت مرهقة جداً له", correct: false, explanation: "لا — هو «möchte er ihn abschließen» رغم الصعوبة، ويؤكد حدود الترقية." },
        { text: "Dass er den Arbeitsplatz wechseln möchte", ar: "أنه يريد تغيير وظيفته", correct: false, explanation: "لا — لم يذكر تغيير الوظيفة؛ وتأكيده «dass nicht jede Weiterbildung automatisch zu einer Beförderung führt»." },
      ]},
    ],
  },
  /* ─── B1 — حلقة خامسة ─── */
  {
    id: "p-b1-lernen",
    level: "B1",
    title: "Sprachen lernen",
    titleAr: "تعلم اللغات",
    emoji: "🧠",
    script: "Warum lernen wir Sprachen? Es gibt viele Gründe: Reisen, Beruf oder Kultur. Wissenschaftler sagen, dass Sprachenlernen das Gehirn trainiert. Der beste Weg ist, regelmäßig zu üben. Man sollte nicht Angst vor Fehlern haben. Wichtig ist auch, die Sprache aktiv zu benutzen, zum Beispiel mit Muttersprachlern zu sprechen. Jeder Fehler ist ein Schritt zum Erfolg.",
    scriptAr: "لماذا نتعلم اللغات؟ أسباب كثيرة: السفر أو العمل أو الثقافة. يقول العلماء إن تعلم اللغات يدرب الدماغ. أفضل طريقة هي التدرب بانتظام. يجب ألا يخاف المرء من الأخطاء. المهم أيضاً استخدام اللغة بنشاط، مثلاً التحدث مع الناطقين الأصليين. كل خطأ خطوة نحو النجاح.",
    questions: [
      { de: "Was sagen Wissenschaftler über Sprachenlernen?", ar: "ماذا يقول العلماء عن تعلم اللغات؟", options: [
        { text: "Es trainiert das Gehirn", ar: "إنه يدرب الدماغ", correct: true, explanation: "نعم — الحلقة تقول: «Wissenschaftler sagen, dass Sprachenlernen das Gehirn trainiert.»." },
        { text: "Es ist nur für Kinder", ar: "إنه للأطفال فقط", correct: false, explanation: "لا — لم يُخصَّص للأطفال Kinder؛ والأسباب عامّة: «Reisen, Beruf oder Kultur»." },
        { text: "Es ist unmöglich", ar: "إنه مستحيل", correct: false, explanation: "لا — لم يُوصف بالاستحالة unmöglich؛ بل «Sprachenlernen das Gehirn trainiert»." },
      ]},
      { de: "Was ist der beste Weg?", ar: "ما أفضل طريقة؟", options: [
        { text: "Regelmäßig und viel üben", ar: "التدرب بانتظام", correct: true, explanation: "نعم — الحلقة تقول: «Der beste Weg ist, regelmäßig zu üben.»." },
        { text: "Nur Grammatik lernen", ar: "تعلم القواعد فقط", correct: false, explanation: "لا — لم تُذكر قواعد Grammatik؛ والطريق «regelmäßig zu üben» مع «die Sprache aktiv zu benutzen»." },
        { text: "Keine Fehler machen wollen", ar: "عدم الرغبة في الخطأ", correct: false, explanation: "لا — الخوف من الخطأ منهيٌّ عنه: «Man sollte nicht Angst vor Fehlern haben»." },
      ]},
    ],
  },
  /* ─── A2 — حلقة رابعة ─── */
  {
    id: "p-a2-wohnung",
    level: "A2",
    title: "Die neue Wohnung",
    titleAr: "الشقة الجديدة",
    emoji: "🏠",
    script: "Meine Familie hat eine neue Wohnung gefunden. Sie liegt im dritten Stock und hat drei Zimmer. Die Küche ist modern und das Bad ist neu. Die Miete ist ein bisschen hoch, aber die Lage ist perfekt: Die U-Bahn ist nur fünf Minuten entfernt. Wir sind sehr zufrieden.",
    scriptAr: "وجدت عائلتي شقة جديدة. تقع في الطابق الثالث فوق الأرضي وتحتوي على ثلاث غرف. المطبخ حديث والحمام جديد. الإيجار مرتفع قليلاً لكن الموقع مثالي: محطة المترو تبعد خمس دقائق فقط. نحن راضون جداً.",
    questions: [
      { de: "In welchem Stock liegt die Wohnung?", ar: "في أي طابق تقع الشقة؟", options: [
        { text: "Im dritten Stock", ar: "في الطابق الثالث فوق الأرضي", correct: true, explanation: "نعم — الحلقة تقول: «Sie liegt im dritten Stock.»." },
        { text: "Im ersten Stock", ar: "في الطابق الأول فوق الأرضي", correct: false, explanation: "لا — ليس الطابق الأول؛ بل «Sie liegt im dritten Stock»." },
        { text: "Im fünften Stock", ar: "في الطابق الخامس فوق الأرضي", correct: false, explanation: "لا — لم يُذكر الطابق الخامس fünften؛ والشقة «im dritten Stock»." },
      ]},
      { de: "Wie weit ist die U-Bahn?", ar: "كم تبعد محطة المترو؟", options: [
        { text: "Fünf Minuten", ar: "خمس دقائق", correct: true, explanation: "نعم — الحلقة تقول: «Die U-Bahn ist nur fünf Minuten entfernt.»." },
        { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — ليست ثلاثين دقيقة؛ بل «Die U-Bahn ist nur fünf Minuten entfernt»." },
        { text: "Eine Stunde", ar: "ساعة", correct: false, explanation: "لا — لم تُذكر ساعة Stunde؛ والمسافة «nur fünf Minuten entfernt»." },
      ]},
    ],
  },
];

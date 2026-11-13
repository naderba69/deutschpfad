/**
 * b2-13 — نصّ القراءة الممتدّ (الجزء «reading»)
 * مقال افتراضي عن الذكاء الاصطناعي في العمل: اشتقاق تقني
 * (Digitalisierung, Datenschutz, nachvollziehbar) واستدراك
 * (obwohl, dennoch, zwar ... aber).
 */
import type { ReadingText } from "@/types/lesson";

export const readingB213: ReadingText = {
  id: "read-b2-13",
  titleDe: "Wenn Maschinen mitdenken — Chancen und Grenzen der KI",
  titleAr: "حين تفكر الآلات معنا — فرص الذكاء الاصطناعي وحدوده",
  textType: "artikel",
  paragraphs: [
    "Die folgende Darstellung ist ein erfundenes Fallbeispiel und keine Studie. In der Beispiel-Firma unterstützt ein KI-System die Kundenberatung. Die Automatisierung übernimmt einfache Anfragen, während schwierige Fälle an Mitarbeitende weitergeleitet werden. Obwohl das System die Antwortzeit verkürzt, prüft eine Fachkraft jede Antwort, bevor sie gesendet wird.",
    "Die Entwickler betonen, dass die Ergebnisse nachvollziehbar sein müssen. Zwar erzeugt das System Vorschläge in Sekunden, aber die Begründung der Vorschläge ist nicht immer erkennbar. Deshalb muss die Fachkraft bewerten, ob eine Antwort belegbar ist. Auch wenn die Software dazulernt, bleibt ein Restrisiko: Sie kann Fehler übernehmen, die sie einmal gelernt hat.",
    "Ein weiterer Punkt ist der Datenschutz. Alle personenbezogenen Daten werden verschlüsselt gespeichert, und sie bleiben nur so lange im System, wie es für den jeweiligen Vorgang nötig ist. Dennoch wendet eine Betriebsrätin ein: Wer die Datenauswertung nicht selbst prüfen kann, verliert die Kontrolle. Einerseits erleichtert die Digitalisierung die Arbeit, andererseits entsteht eine neue Abhängigkeit von Systemen, die nur wenige verstehen.",
    "In der erfundenen Firma wird deshalb eine Regel eingeführt: Entscheidungen mit Folgen für Menschen trifft weiterhin eine Person. Das System darf vorbereiten und vorschlagen, aber nicht endgültig entscheiden. Diese Grenze ist zwar unbequem, denn sie bremst die Geschwindigkeit, aber sie sichert die Verantwortbarkeit der Entscheidungen.",
    "Die Geschäftsführung reagiert mit einem freiwilligen Weiterbildungsprogramm, das allen Beschäftigten Grundkenntnisse zur sicheren Nutzung und zur kritischen Prüfung der Systeme vermittelt. Obgleich die Cybersicherheit dadurch nicht automatisch besser wird, steigt die Aufmerksamkeit für verdächtige Mails und unsichere Passwörter. Ein Teil der Beschäftigten bleibt skeptisch, trotzdem nimmt die Beteiligung an den Kursen zu.",
    "Die Fallgeschichte führt damit zwei Erkenntnisse zusammen: Technik kann entlasten, wenn ihre Grenzen bekannt sind, und Menschen müssen die Grenzen ihrer Systeme verstehen, um sie sinnvoll zu nutzen. Wer nur auf die Geschwindigkeit schaut, übersieht die Fehler. Wer die Fehler sucht, ohne die Entlastung anzuerkennen, verhindert Verbesserungen. Aus einer erfundenen Einführung wird so ein Beispiel für eine nüchterne Frage: Welche Aufgabe darf bleiben, welche muss geteilt werden?",
  ],
  paragraphsAr: [
    "العرض الآتي حالة افتراضية ولا يمثل دراسة. في الشركة الافتراضية يساعد نظام ذكاء اصطناعي في خدمة العملاء. تتولى الأتمتة الأسئلة البسيطة، بينما تُحال الحالات الصعبة إلى الموظفين. ورغم أن النظام يختصر زمن الرد، يفحص مختص كل إجابة قبل إرسالها.",
    "يؤكد المطوّرون أن النتائج يجب أن تكون قابلة للتحقق. صحيح أن النظام يولّد مقترحات في ثوانٍ، لكن تبرير المقترحات ليس واضحاً دائماً. لذلك يجب على المختص أن يقيّم ما إذا كانت الإجابة قابلة للإثبات. وحتى لو كان البرنامج يتعلم من نفسه، تبقى مخاطرة متبقية: قد يتبنى أخطاء تعلمها مرة.",
    "وهناك نقطة أخرى هي حماية البيانات. تُشفَّر جميع البيانات الشخصية وتُخزَّن فقط بقدر ما تدعو الحاجة. ومع ذلك تعترض عضوة في مجلس العمال: من لا يستطيع فحص تقييم البيانات بنفسه يفقد السيطرة. فمن جهة تسهّل الرقمنة العمل، ومن جهة أخرى تنشأ تبعية جديدة لأنظمة لا يفهمها إلا قليلون.",
    "لذلك تُدخل الشركة الافتراضية قاعدة: القرارات ذات الأثر على البشر يتخذها شخص دائماً. يجوز للنظام أن يحضّر ويقترح، لكن لا يجوز له أن يقرر نهائياً. صحيح أن هذا الحد مزعج، لأنه يكبح السرعة، لكنه يضمن إمكانية تحمّل المسؤولية عن القرارات.",
    "تستجيب الإدارة ببرنامج تدريب مستمر يقدم لجميع الموظفين معرفة أساسية باستخدام الأنظمة وفحصها. ورغم أن الأمن السيبراني لا يتحسن تلقائياً بذلك، تزداد الانتباهة للرسائل المشبوهة وكلمات المرور غير الآمنة. ويبقى جزء من الموظفين متشككاً، ومع ذلك يزداد الإقبال على الدورات.",
    "وهكذا تجمع الحالة الافتراضية نتيجتين: التقنية قد تخفف العبء، ويجب على البشر فهم حدود أنظمتهم. من ينظر إلى السرعة فقط يفوّت الأخطاء، ومن يبحث عن الأخطاء دون الاعتراف بتخفيف العبء يمنع التحسين. وهكذا يتحول إدخال افتراضي إلى مثال على سؤال واقعي: أي مهمة يجوز أن تبقى، وأي مهمة يجب أن تُقاسم؟",
  ],
  glossary: [
    { de: "die Automatisierung", ar: "الأتمتة", noteAr: "مؤنّثة؛ من automatisieren + ung." },
    { de: "nachvollziehbar", ar: "قابل للتتبع والفهم", noteAr: "صفة؛ nach + vollziehen + bar." },
    { de: "der Datenschutz", ar: "حماية البيانات", noteAr: "مذكّر؛ الجنس من Schutz." },
    { de: "die Datenauswertung", ar: "تقييم البيانات", noteAr: "مؤنّثة؛ الجنس من Auswertung." },
    { de: "die Cybersicherheit", ar: "الأمن السيبراني", noteAr: "مؤنّثة؛ الجنس من Sicherheit." },
    { de: "die Abhängigkeit", ar: "التبعية، الاعتماد", noteAr: "مؤنّثة؛ abhängig + keit." },
    { de: "die Verantwortbarkeit", ar: "قابلية تحمل المسؤولية", noteAr: "مؤنّثة؛ verantwortbar + keit." },
    { de: "der Betriebsrat", ar: "مجلس العمال", noteAr: "مذكّر؛ Betrieb + Rat." },
    { de: "die Weiterbildung", ar: "التدريب المستمر", noteAr: "مؤنّثة؛ weiter + Bildung." },
    { de: "der Vorschlag", ar: "الاقتراح", noteAr: "مذكّر؛ vorschlagen → Vorschlag." },
  ],
  questions: [
    {
      id: "rq1",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was prüft die Fachkraft, bevor eine Antwort gesendet wird?",
      questionAr: "ماذا يفحص المختص قبل إرسال الإجابة؟",
      options: [
        "Ob die Antwort belegbar ist.",
        "Ob der Kunde zufrieden war.",
        "Ob das System schnell genug war.",
        "Ob die Antwort auf Englisch ist.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — رضا العميل لم يُذكر معياراً للفحص؛ بل قابلية الإثبات.", "لا — السرعة ميزة النظام لا معيار فحص المختص.", "لا — لغة الإجابة لم تُذكر في النصّ."],
      paragraph: 2,
      explanation:
        "الفقرة الثانية تشرح أن المختص يجب أن يقيّم ما إذا كانت الإجابة قابلة للإثبات («ob eine Antwort belegbar ist»).",
      errorType: "comprehension",
    },
    {
      id: "rq2",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was kritisiert die Betriebsrätin?",
      questionAr: "ما الذي تنتقده عضوة مجلس العمال؟",
      options: [
        "Wer die Datenauswertung nicht prüfen kann, verliert die Kontrolle.",
        "Die Weiterbildungskurse seien zu teuer für die kleine Firma.",
        "Die neue Software arbeite im Alltag viel zu langsam.",
        "Die Kunden würden sich zu selten beim Service melden.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — تكلفة الدورات لم تُذكر في نقدها؛ بل فقدان السيطرة على تقييم البيانات.", "لا — البطء لم يُذكر؛ والنصّ يذكر أن النظام يختصر الزمن.", "لا — عدد مكالمات العملاء لم يُذكر في النصّ."],
      paragraph: 3,
      explanation:
        "الفقرة الثالثة تنقل اعتراض عضوة مجلس العمال: من لا يستطيع فحص تقييم البيانات بنفسه يفقد السيطرة.",
      errorType: "comprehension",
    },
    {
      id: "rq3",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Welche Regel gilt in der Beispiel-Firma für Entscheidungen?",
      questionAr: "أي قاعدة تسري في الشركة الافتراضية على القرارات؟",
      options: [
        "Entscheidungen mit Folgen für Menschen trifft eine Person.",
        "Das System entscheidet alle Fälle allein.",
        "Nur die Geschäftsführung darf das System nutzen.",
        "Alle Entscheidungen werden ausgelagert.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — النصّ يمنع أن يقرر النظام نهائياً.", "لا — استخدام النظام مقصور على الإدارة لم يُذكر.", "لا — إسناد القرارات إلى جهة خارجية لم يُذكر."],
      paragraph: 4,
      explanation:
        "الفقرة الرابعة تذكر القاعدة: القرارات ذات الأثر على البشر يتخذها شخص، والنظام يحضّر ويقترح فقط.",
      errorType: "comprehension",
    },
    {
      id: "rq4",
      type: "multiple-choice",
      instructionAr: "اختر الجواب الصحيح حسب النصّ:",
      questionDe: "Was bewirkt das Weiterbildungsprogramm laut Text?",
      questionAr: "ما الذي يحققه برنامج التدريب المستمر حسب النصّ؟",
      options: [
        "Die Aufmerksamkeit für unsichere Mails steigt.",
        "Die Cybersicherheit ist danach garantiert.",
        "Alle Beschäftigten werden überzeugt.",
        "Das System wird überflüssig.",
      ],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — النصّ ينفي التحسن التلقائي: «nicht automatisch besser».", "لا — النصّ يقول إن جزءاً من الموظفين يبقى متشككاً.", "لا — استغناء النظام لم يُذكر."],
      paragraph: 5,
      explanation:
        "الفقرة الخامسة تقول إن الأمن السيبراني لا يتحسن تلقائياً، لكن الانتباهة للرسائل المشبوهة تزداد.",
      errorType: "comprehension",
    },
  ],
  redemittel: [
    { de: "Obwohl das System schnell ist, prüft eine Fachkraft jede Antwort.", ar: "رغم أن النظام سريع، يفحص مختص كل إجابة." },
    { de: "Zwar erzeugt das System Vorschläge, aber die Begründung fehlt.", ar: "صحيح أن النظام يولّد مقترحات، لكن التبرير غائب." },
    { de: "Einerseits erleichtert die Digitalisierung die Arbeit, andererseits entsteht eine Abhängigkeit.", ar: "من جهة تسهّل الرقمنة العمل، ومن جهة أخرى تنشأ تبعية." },
    { de: "Dennoch verliert man die Kontrolle, wenn man nicht selbst prüfen kann.", ar: "ومع ذلك يفقد المرء السيطرة إن لم يستطع الفحص بنفسه." },
    { de: "Wer nur auf die Geschwindigkeit schaut, übersieht die Fehler.", ar: "من ينظر إلى السرعة فقط يفوّت الأخطاء." },
  ],
  discussionAr:
    "النصّ حالة افتراضية لا تقرير عن أداء أنظمة حقيقية. ناقش مع زميلك سؤالاً واحداً: هل يجوز لنظام ذكاء اصطناعي أن يقترح قراراً يخص إنساناً؟ اكتبا موقفاً من خمس فقرات: الموقف، وحجتان مؤيدتان، وحجة مضادة تعترفان بها صراحةً، ثم خلاصة. وشرط الأسلوب: استعملا أداتين استدراكيتين مختلفتي التركيب على الأقل (obwohl · dennoch · zwar ... aber)، ومصطلحاً تقنياً مشتقاً واحداً على الأقل (die Automatisierung · nachvollziehbar · die Abhängigkeit)، ولا تجمعا «obwohl» مع «aber» في الجملة نفسها. ثم اقرأا الموقف على زميل واسألاه: أين بدا الاعتراف بالحجة المضادة شكلياً؟ وأي جملة كان الفعل فيها في موضع خاطئ؟",
};

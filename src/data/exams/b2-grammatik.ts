/**
 * ═══════════════════════════════════════════════════════════
 *  بنك القواعد والمفردات B2 — 60 سؤالاً MCQ
 *  (30 قواعد + 30 مفردات) بصيغ الامتحان مع شرح لكل سؤال
 * ═══════════════════════════════════════════════════════════
 */
export interface B2GrammarMcq {
  id: string;
  skill: "grammatik" | "wortschatz";
  q: string;
  qAr: string;
  options: string[];
  correct: number;
  whyAr: string;
}

export const B2_GRAMMATIK: B2GrammarMcq[] = [
  /* ═══════════ قواعد (30) ═══════════ */
  { id: "g1", skill: "grammatik", q: "Er sagte, er ___ keine Zeit.", qAr: "قال إنه لا وقت لديه (نقل كلام).", options: ["habe", "hat", "hatte", "haben"], correct: 0, whyAr: "Konjunktiv I للنقل: er habe." },
  { id: "g2", skill: "grammatik", q: "Sie behauptet, sie ___ das Buch gelesen.", qAr: "تدّعي أنها قرأت الكتاب (نقل).", options: ["habe", "hat", "hätte", "hatte"], correct: 0, whyAr: "Konjunktiv I الماضي: sie habe gelesen." },
  { id: "g3", skill: "grammatik", q: "Der Brief ___ gestern geschrieben.", qAr: "كُتبت الرسالة أمس (مجهول).", options: ["wurde", "wird", "ist gewesen", "werde"], correct: 0, whyAr: "Vorgangspassiv الماضي: wurde geschrieben." },
  { id: "g4", skill: "grammatik", q: "Die Hausaufgaben ___ von den Schülern gemacht werden.", qAr: "يجب أن تُنجز الواجبات من الطلاب (مجهول + ناقص).", options: ["müssen", "müsst", "muss", "müssten"], correct: 0, whyAr: "Passiv mit Modalverb: müssen gemacht werden (الجمع)." },
  { id: "g5", skill: "grammatik", q: "Das Fenster ist ___ (مفتوحاً — Zustandspassiv).", qAr: "النافذة مفتوحة (حالة).", options: ["geöffnet", "öffnet", "öffnen", "geöffnet worden"], correct: 0, whyAr: "Zustandspassiv: sein + Partizip II = حالة." },
  { id: "g6", skill: "grammatik", q: "___ der Technologie schreitet die Medizin voran.", qAr: "بفضل التقنية يتقدم الطب.", options: ["Dank", "Trotz", "Wegen", "Statt"], correct: 0, whyAr: "Dank + Genitiv = بفضل." },
  { id: "g7", skill: "grammatik", q: "Das Haus, in ___ ich wohne, ist alt.", qAr: "البيت الذي أسكن فيه قديم.", options: ["dem", "das", "den", "der"], correct: 0, whyAr: "Relativsatz: in dem (Dativ مذكر)." },
  { id: "g8", skill: "grammatik", q: "Ich freue mich ___ deine Nachricht.", qAr: "أنا سعيد برسالتك.", options: ["über", "auf", "für", "an"], correct: 0, whyAr: "sich freuen über + Akkusativ (عن شيء حدث)." },
  { id: "g9", skill: "grammatik", q: "___ du früher gefahren, hättest du den Zug erreicht.", qAr: "لو غادرت مبكراً لَلحقت القطار.", options: ["Wärst", "Sei", "Bist", "Warst"], correct: 0, whyAr: "Konditionalsatz III: Wärst du früher gefahren…" },
  { id: "g10", skill: "grammatik", q: "Der Vertrag muss ___ unterschrieben werden.", qAr: "يجب توقيع العقد (قبل).", options: ["unterschrieben", "unterschreiben", "unterschreibend", "zu unterschreiben"], correct: 0, whyAr: "Passiv: unterschrieben werden." },
  { id: "g11", skill: "grammatik", q: "Je mehr man übt, ___ besser wird man.", qAr: "كلما تمرنت أكثر، أصبحت أفضل.", options: ["desto", "so", "dann", "auch"], correct: 0, whyAr: "je…desto: المقارنة النسبية." },
  { id: "g12", skill: "grammatik", q: "Er arbeitet, ___ er krank ist.", qAr: "يعمل رغم أنه مريض.", options: ["obwohl", "weil", "damit", "wenn"], correct: 0, whyAr: "obwohl = رغم أن (جملة امتيازية)." },
  { id: "g13", skill: "grammatik", q: "Ich gehe spazieren, ___ frische Luft zu bekommen.", qAr: "أمشي لأحصل على هواء نقي.", options: ["um", "ohne", "statt", "indem"], correct: 0, whyAr: "um…zu + Infinitiv = لكي." },
  { id: "g14", skill: "grammatik", q: "Die zu ___ Dokumente liegen auf dem Tisch.", qAr: "المستندات التي يجب توقيعها على الطاولة.", options: ["unterschreibenden", "unterschriebenen", "unterschrieben", "unterschreibende"], correct: 0, whyAr: "Partizipialattribut: die zu unterschreibenden Dokumente." },
  { id: "g15", skill: "grammatik", q: "Das Problem ist ___ als gedacht.", qAr: "المشكلة أعقد مما يُظن.", options: ["komplizierter", "am kompliziertesten", "komplizierte", "kompliziert"], correct: 0, whyAr: "مقارنة: komplizierter als." },
  { id: "g16", skill: "grammatik", q: "Man hat die Entscheidung getroffen, ___ alle betroffen sind.", qAr: "اتُخذ قرار يمس الجميع.", options: ["von der", "durch die", "mit dem", "an den"], correct: 0, whyAr: "betroffen von + Dativ: von der Entscheidung." },
  { id: "g17", skill: "grammatik", q: "Die Kinder freuen sich ___ die Ferien.", qAr: "الأطفال يتطلعون للعطلة (مستقبل).", options: ["auf", "über", "an", "mit"], correct: 0, whyAr: "sich freuen auf = يتطلع إلى (مستقبل)؛ über = سعيد بـ (حاضر/ماضٍ)." },
  { id: "g18", skill: "grammatik", q: "Nachdem er gegessen ___, ging er zur Arbeit.", qAr: "بعد أن أكل، ذهب للعمل.", options: ["hatte", "hat", "hätte", "habe"], correct: 0, whyAr: "Plusquamperfekt: nachdem + hatte gegessen." },
  { id: "g19", skill: "grammatik", q: "Das dürfte stimmen – bedeutet:", qAr: "«Das dürfte stimmen» تعني:", options: ["هذا على الأرجح صحيح", "هذا خاطئ", "هذا مؤكد تماماً", "لا أعرف"], correct: 0, whyAr: "dürfte (ذاتي) = احتمال قوي — على الأرجح." },
  { id: "g20", skill: "grammatik", q: "Die Forschung zeigt, dass die Ergebnisse ___ seien.", qAr: "يُظهر البحث أن النتائج إيجابية (نقل).", options: ["positiv", "positive", "positives", "positiven"], correct: 0, whyAr: "Konjunktiv I: die Ergebnisse seien positiv." },
  { id: "g21", skill: "grammatik", q: "Sie gab mir einen Rat, ___ ich lange überlegte.", qAr: "قدمت لي نصيحة فكرت فيها طويلاً.", options: ["über den", "über das", "über der", "über die"], correct: 0, whyAr: "Relativsatz: über den Rat (مذكر Akkusativ) → über den." },
  { id: "g22", skill: "grammatik", q: "___ des Wetters blieben wir zu Hause.", qAr: "بسبب الطقس بقينا في المنزل.", options: ["Wegen", "Trotz", "Dank", "Statt"], correct: 0, whyAr: "wegen + Genitiv = بسبب." },
  { id: "g23", skill: "grammatik", q: "Es ist wichtig, dass man regelmäßig ___ .", qAr: "من المهم ممارسة الرياضة بانتظام.", options: ["Sport treibt", "Sport getrieben", "Sport treiben", "Sport treibt wird"], correct: 0, whyAr: "dass + الفعل في النهاية: man regelmäßig Sport treibt." },
  { id: "g24", skill: "grammatik", q: "Die Ausstellung, ___ wir gestern waren, war interessant.", qAr: "المعرض الذي كنا فيه أمس كان مثيراً.", options: ["in der", "in das", "in den", "in die"], correct: 0, whyAr: "in der Ausstellung (Dativ مؤنث) → in der." },
  { id: "g25", skill: "grammatik", q: "Hätte ich mehr Zeit, ___ ich mehr reisen.", qAr: "لو كان لدي وقت أكثر لسافرت أكثر.", options: ["würde", "werde", "wer", "war"], correct: 0, whyAr: "Konjunktiv II: würde reisen." },
  { id: "g26", skill: "grammatik", q: "Die Kinder sollen ___ Spielzeug aufräumen.", qAr: "يجب أن يرتب الأطفال ألعابهم.", options: ["ihr", "ihre", "ihren", "ihrem"], correct: 0, whyAr: "ihr Spielzeug (مفرد محايد) — ملكية الجمع مع مفرد." },
  { id: "g27", skill: "grammatik", q: "Es lohnt sich, ___ man sich rechtzeitig bewirbt.", qAr: "يجدر التقديم في الوقت المناسب.", options: ["dass", "weil", "ob", "als"], correct: 0, whyAr: "Es lohnt sich, dass… — جملة dass بعدها." },
  { id: "g28", skill: "grammatik", q: "Die Daten wurden ___ analysiert.", qAr: "حُللت البيانات بدقة.", options: ["sorgfältig", "sorgfältige", "sorgfältiger", "am sorgfältigsten"], correct: 0, whyAr: "ظرف: sorgfältig analysiert." },
  { id: "g29", skill: "grammatik", q: "Man sollte ___ Probleme offen sprechen.", qAr: "يجب التحدث عن المشاكل بصراحة.", options: ["über", "von", "mit", "auf"], correct: 0, whyAr: "sprechen über + Akkusativ = يتحدث عن." },
  { id: "g30", skill: "grammatik", q: "Anstatt ___ zu warten, begann er allein.", qAr: "بدلاً من الانتظار بدأ وحده.", options: ["zu warten", "warten", "gewarten", "wartend"], correct: 0, whyAr: "anstatt + zu + Infinitiv = بدلاً من." },

  /* ═══════════ مفردات (30) ═══════════ */
  { id: "v1", skill: "wortschatz", q: "die Nachhaltigkeit", qAr: "ما معنى die Nachhaltigkeit؟", options: ["الاستدامة", "السرعة", "التكلفة", "الجودة"], correct: 0, whyAr: "Nachhaltigkeit = الاستدامة." },
  { id: "v2", skill: "wortschatz", q: "die Auswirkung", qAr: "ما معنى die Auswirkung؟", options: ["الأثر/النتيجة", "السبب", "الفرصة", "الخبرة"], correct: 0, whyAr: "Auswirkung = أثر/نتيجة." },
  { id: "v3", skill: "wortschatz", q: "Der Vorschlag wurde abgelehnt – bedeutet:", qAr: "«Der Vorschlag wurde abgelehnt» تعني:", options: ["رُفض الاقتراح", "قُبل الاقتراح", "نوقش الاقتراح", "عدّل الاقتراح"], correct: 0, whyAr: "ablehnen = يرفض." },
  { id: "v4", skill: "wortschatz", q: "die Vereinbarung", qAr: "ما معنى die Vereinbarung؟", options: ["الاتفاق", "الاجتماع", "المقابلة", "المؤسسة"], correct: 0, whyAr: "Vereinbarung = اتفاق/اتفاقية." },
  { id: "v5", skill: "wortschatz", q: "Er hat die Prüfung bestanden – bedeutet:", qAr: "«Er hat die Prüfung bestanden» تعني:", options: ["نجح في الامتحان", "رسب في الامتحان", "ألغى الامتحان", "أعاد الامتحان"], correct: 0, whyAr: "bestehen = يجتاز/ينجح." },
  { id: "v6", skill: "wortschatz", q: "die Bewerbung", qAr: "ما معنى die Bewerbung؟", options: ["طلب التوظيف", "المقابلة", "الشهادة", "السيرة"], correct: 0, whyAr: "Bewerbung = طلب وظيفة." },
  { id: "v7", skill: "wortschatz", q: "Er hat sich bei der Firma beworben – bedeutet:", qAr: "«Er hat sich bei der Firma beworben» تعني:", options: ["تقدّم للوظيفة", "اشتكى للشركة", "اعتذر للشركة", "سجّل في الشركة"], correct: 0, whyAr: "sich bewerben bei = يتقدم لوظيفة." },
  { id: "v8", skill: "wortschatz", q: "die Einstellung", qAr: "ما معنى die Einstellung؟", options: ["الموقف/الرأي أو التوظيف", "المبنى", "الراتب", "الإجازة"], correct: 0, whyAr: "Einstellung = موقف (رأي) أو تعيين." },
  { id: "v9", skill: "wortschatz", q: "Er verfügt über gute Kenntnisse – bedeutet:", qAr: "«Er verfügt über gute Kenntnisse» تعني:", options: ["يمتلك معرفة جيدة", "يحتاج معرفة", "ينكر المعرفة", "يعلّم المعرفة"], correct: 0, whyAr: "verfügen über = يمتلك/يتمتع بـ." },
  { id: "v10", skill: "wortschatz", q: "die Maßnahme", qAr: "ما معنى die Maßnahme؟", options: ["الإجراء", "القياس", "المسافة", "المناسبة"], correct: 0, whyAr: "Maßnahme = إجراء/تدبير." },
  { id: "v11", skill: "wortschatz", q: "Die Regierung hat Maßnahmen ergriffen – bedeutet:", qAr: "«Die Regierung hat Maßnahmen ergriffen» تعني:", options: ["اتخذت الحكومة إجراءات", "ألغت الحكومة إجراءات", "ناقشت الحكومة", "انتقدت الحكومة"], correct: 0, whyAr: "Maßnahmen ergreifen = يتخذ إجراءات." },
  { id: "v12", skill: "wortschatz", q: "der Umgang mit", qAr: "ما معنى der Umgang mit؟", options: ["التعامل مع", "الخروج من", "الانتقال إلى", "الاتصال بـ"], correct: 0, whyAr: "Umgang mit = تعامل مع." },
  { id: "v13", skill: "wortschatz", q: "Sie nahm Rücksicht auf ihre Kollegen – bedeutet:", qAr: "«Sie nahm Rücksicht auf ihre Kollegen» تعني:", options: ["راعت زملاءها", "انتقدت زملاءها", "استقبلت زملاءها", "نسيت زملاءها"], correct: 0, whyAr: "Rücksicht nehmen auf = يراعي." },
  { id: "v14", skill: "wortschatz", q: "die Voraussetzung", qAr: "ما معنى die Voraussetzung؟", options: ["الشرط المسبق", "النتيجة", "الاستنتاج", "الفرضية"], correct: 0, whyAr: "Voraussetzung = شرط مسبق." },
  { id: "v15", skill: "wortschatz", q: "Das steht außer Frage – bedeutet:", qAr: "«Das steht außer Frage» تعني:", options: ["هذا خارج النقاش/مؤكد", "هذا مشكوك فيه", "هذا مستحيل", "هذا مكلف"], correct: 0, whyAr: "außer Frage stehen = لا شك فيه." },
  { id: "v16", skill: "wortschatz", q: "die Zunahme", qAr: "ما معنى die Zunahme؟", options: ["الزيادة", "النقصان", "التبدل", "الثبات"], correct: 0, whyAr: "Zunahme = زيادة/ارتفاع." },
  { id: "v17", skill: "wortschatz", q: "Die Zahl der Arbeitslosen hat abgenommen – bedeutet:", qAr: "«Die Zahl der Arbeitslosen hat abgenommen» تعني:", options: ["انخفض عدد العاطلين", "ارتفع عدد العاطلين", "استقر العدد", "ضاعف العدد"], correct: 0, whyAr: "abnehmen = ينخفض." },
  { id: "v18", skill: "wortschatz", q: "Er hat die Firma gegründet – bedeutet:", qAr: "«Er hat die Firma gegründet» تعني:", options: ["أسس الشركة", "أغلق الشركة", "قاد الشركة", "باع الشركة"], correct: 0, whyAr: "gründen = يؤسس." },
  { id: "v19", skill: "wortschatz", q: "die Herausforderung", qAr: "ما معنى die Herausforderung؟", options: ["التحدي", "الفرصة", "التهديد", "المسؤولية"], correct: 0, whyAr: "Herausforderung = تحدٍّ." },
  { id: "v20", skill: "wortschatz", q: "Sie stellte sich der Herausforderung – bedeutet:", qAr: "«Sie stellte sich der Herausforderung» تعني:", options: ["واجهت التحدي", "تجنبت التحدي", "تجاهلت التحدي", "أخفت التحدي"], correct: 0, whyAr: "sich einer Herausforderung stellen = يواجه." },
  { id: "v21", skill: "wortschatz", q: "die Erwartung", qAr: "ما معنى die Erwartung؟", options: ["التوقع", "الانتظار", "الاحترام", "التقدير"], correct: 0, whyAr: "Erwartung = توقع." },
  { id: "v22", skill: "wortschatz", q: "Er hat die Erwartungen übertroffen – bedeutet:", qAr: "«Er hat die Erwartungen übertroffen» تعني:", options: ["تجاوز التوقعات", "خيّب التوقعات", "حدد التوقعات", "تجاهل التوقعات"], correct: 0, whyAr: "übertreffen = يتجاوز/يتفوق." },
  { id: "v23", skill: "wortschatz", q: "der Mangel an", qAr: "ما معنى der Mangel an؟", options: ["نقص في", "كثرة في", "حاجة إلى", "قدرة على"], correct: 0, whyAr: "Mangel an = نقص في." },
  { id: "v24", skill: "wortschatz", q: "Es herrscht ein Mangel an Fachkräften – bedeutet:", qAr: "«Es herrscht ein Mangel an Fachkräften» تعني:", options: ["هناك نقص في الكفاءات", "هناك وفرة في الكفاءات", "الكفاءات متساوية", "الكفاءات غائبة"], correct: 0, whyAr: "herrschen = يسود؛ Mangel = نقص." },
  { id: "v25", skill: "wortschatz", q: "die Wahrnehmung", qAr: "ما معنى die Wahrnehmung؟", options: ["الإدراك", "الحقيقة", "الواقعية", "المعرفة"], correct: 0, whyAr: "Wahrnehmung = إدراك/إحساس." },
  { id: "v26", skill: "wortschatz", q: "Er hat den Termin wahrgenommen – يعني:", qAr: "«Er hat den Termin wahrgenommen» تعني:", options: ["حضر الموعد", "ألغى الموعد", "غيّر الموعد", "نسي الموعد"], correct: 0, whyAr: "einen Termin wahrnehmen = يحضر موعداً." },
  { id: "v27", skill: "wortschatz", q: "der Verbrauch", qAr: "ما معنى der Verbrauch؟", options: ["الاستهلاك", "الإنتاج", "التوزيع", "التخزين"], correct: 0, whyAr: "Verbrauch = استهلاك." },
  { id: "v28", skill: "wortschatz", q: "Wir müssen den Verbrauch senken – bedeutet:", qAr: "«Wir müssen den Verbrauch senken» تعني:", options: ["يجب خفض الاستهلاك", "يجب رفع الاستهلاك", "يجب قياس الاستهلاك", "يجب تجاهل الاستهلاك"], correct: 0, whyAr: "senken = يخفض." },
  { id: "v29", skill: "wortschatz", q: "die Aufklärung", qAr: "ما معنى die Aufklärung؟", options: ["التوعية", "الشرح", "التعليم", "الاستنارة"], correct: 0, whyAr: "Aufklärung = توعية (أو عصر التنوير)." },
  { id: "v30", skill: "wortschatz", q: "Sie setzt sich für Umweltschutz ein – bedeutet:", qAr: "«Sie setzt sich für Umweltschutz ein» تعني:", options: ["تناضل من أجل حماية البيئة", "تعارض حماية البيئة", "تدرس حماية البيئة", "تمول حماية البيئة"], correct: 0, whyAr: "sich einsetzen für = يناضل من أجل." },
];

import type { VocabEntry } from "@/data/vocabulary/a1";
import { getA1VocabAll } from "@/data/vocabulary/a1";
import { getA2VocabAll } from "@/data/vocabulary/a2";
import { getB1VocabAll } from "@/data/vocabulary/b1";
import { B2_EXTRA_VOCAB } from "@/data/vocabulary/b2-extra";
import { B2_EXTRA2_VOCAB } from "@/data/vocabulary/b2-extra2";

/**
 * ═══════════════════════════════════════════════════════════
 *  بنك مفردات المستوى B2 (~200 كلمة) — منظم حسب الوحدات
 *  (المفردات المتخصصة: اقتصاد، علوم، أدب، قانون، علم نفس، فلسفة)
 * ═══════════════════════════════════════════════════════════
 */

export const B2_VOCAB: Record<string, VocabEntry[]> = {
  /* ── وحدة 1: العلوم ── */
  "b2-01": [
    { de: "die Wissenschaft", ar: "العلم", g: "die", ex: "Die Wissenschaft sucht nach Antworten.", exAr: "العلم يبحث عن الإجابات." },
    { de: "die Forschung", ar: "البحث العلمي", g: "die", ex: "Die Forschung an der Universität ist wichtig.", exAr: "البحث العلمي في الجامعة مهم." },
    { de: "das Experiment", ar: "التجربة", g: "das", ex: "Das Experiment hat das Ergebnis bestätigt.", exAr: "التجربة أكدت النتيجة." },
    { de: "die Entdeckung", ar: "الاكتشاف", g: "die", ex: "Die Entdeckung hat die Medizin verändert.", exAr: "الاكتشاف غيّر الطب." },
    { de: "der Beweis", ar: "البرهان", g: "der", ex: "Er legt einen Beweis für seine These vor.", exAr: "هو يقدم دليلاً على أطروحته." },
    { de: "der Konjunktiv I", ar: "نقل الكلام غير المباشر", g: "der", ex: "Der Konjunktiv I dient dazu, fremde Aussagen wiederzugeben.", exAr: "صيغة الشرط الأولى تُستعمل لنقل أقوال الآخرين." },
    { de: "die indirekte Rede", ar: "الكلام غير المباشر", g: "die", ex: "In der indirekten Rede ändert sich oft die Zeitform.", exAr: "في الكلام غير المباشر يتغير الزمن غالباً." },
    { de: "behaupten", ar: "يزعم", g: "v", ex: "Er behauptet, dass er alles weiß.", exAr: "هو يزعم أنه يعرف كل شيء." },
    { de: "der Wissenschaftler", ar: "العالم (باحث)", g: "der", ex: "Der Wissenschaftler veröffentlicht seine Studie.", exAr: "العالم ينشر دراسته." },
    { de: "die Studie", ar: "الدراسة", g: "die", ex: "Eine neue Studie zeigt den Zusammenhang.", exAr: "دراسة جديدة تبيّن العلاقة." },
    { de: "das Ergebnis", ar: "النتيجة", g: "das", ex: "Das Ergebnis ist überraschend.", exAr: "النتيجة مفاجئة." },
    { de: "beweisen", ar: "يثبت", g: "v", ex: "Die Messung beweist seine Theorie.", exAr: "القياس يثبت نظريته." },
    { de: "die Hypothese", ar: "الفرضية", g: "die", ex: "Die Hypothese muss überprüft werden.", exAr: "الفرضية يجب التحقق منها." },
    { de: "das Labor", ar: "المختبر", g: "das", ex: "Im Labor arbeiten viele Forscher.", exAr: "في المختبر يعمل كثير من الباحثين." },
    { de: "die Publikation", ar: "المنشور", g: "die", ex: "Seine Publikation erschien im Frühjahr.", exAr: "منشوره صدر في الربيع." },
  ],

  /* ── وحدة 2: الاقتصاد ── */
  "b2-02": [
    { de: "die Wirtschaft", ar: "الاقتصاد", g: "die", ex: "Die Wirtschaft wächst langsam.", exAr: "الاقتصاد ينمو ببطء." },
    { de: "der Markt", ar: "السوق", g: "der", ex: "Der Markt reagiert auf neue Preise.", exAr: "السوق يتفاعل مع الأسعار الجديدة." },
    { de: "der Umsatz", ar: "الإيرادات / حجم المبيعات", g: "der", ex: "Der Umsatz ist in diesem Jahr gestiegen.", exAr: "الإيرادات ارتفعت هذا العام." },
    { de: "die Inflation", ar: "التضخم", g: "die", ex: "Die Inflation macht das Leben teurer.", exAr: "التضخم يجعل الحياة أغلى." },
    { de: "die Aktie", ar: "السهم", g: "die", ex: "Er kauft Aktien einer Firma.", exAr: "هو يشتري أسهم شركة." },
    { de: "das Zustandspassiv", ar: "مجهول الحالة", g: "das", ex: "Das Fenster ist geschlossen.", exAr: "النافذة مغلقة (هذه حالة الفعل المبني للمجهول)." },
    { de: "sich lösen lassen", ar: "يمكن حلّه (تركيب يفيد الإمكان)", g: "other", ex: "Das Problem lässt sich lösen.", exAr: "يمكن حل المشكلة." },
    { de: "-bar (Suffix)", ar: "لاحقة تُفيد غالباً القابلية: قابل لـ…", g: "other", ex: "Das Problem ist lösbar.", exAr: "المشكلة قابلة للحل." },
    { de: "die Konjunktur", ar: "الدورة الاقتصادية", g: "die", ex: "Die Konjunktur erholt sich langsam.", exAr: "الدورة الاقتصادية تتعافى ببطء." },
    { de: "die Investition", ar: "الاستثمار", g: "die", ex: "Die Investition lohnt sich.", exAr: "الاستثمار مربح." },
    { de: "der Gewinn", ar: "الربح", g: "der", ex: "Die Firma macht einen hohen Gewinn.", exAr: "الشركة تحقق ربحاً كبيراً." },
    { de: "der Verlust", ar: "الخسارة", g: "der", ex: "Der Verlust war größer als erwartet.", exAr: "الخسارة كانت أكبر من المتوقع." },
    { de: "die Lieferung", ar: "التسليم", g: "die", ex: "Die Lieferung kommt nächste Woche.", exAr: "التوصيل يصل الأسبوع القادم." },
    { de: "der Vertrag", ar: "العقد", g: "der", ex: "Der Vertrag wurde unterschrieben.", exAr: "العقد تم توقيعه." },
    { de: "verhandeln", ar: "يتفاوض", g: "v", ex: "Die Parteien verhandeln über den Preis.", exAr: "الطرفان يتفاوضان على السعر." },
  ],

  /* ── وحدة 3: القانون ── */
  "b2-03": [
    { de: "das Recht", ar: "الحق/القانون", g: "das", ex: "Jeder hat das Recht auf Bildung.", exAr: "لكل إنسان الحق في التعليم." },
    { de: "das Gesetz", ar: "القانون", g: "das", ex: "Das Gesetz gilt für alle.", exAr: "القانون ينطبق على الجميع." },
    { de: "das Gericht", ar: "المحكمة", g: "das", ex: "Der Fall liegt vor Gericht.", exAr: "القضية أمام المحكمة." },
    { de: "der Anwalt", ar: "المحامي", g: "der", ex: "Ich brauche einen Anwalt.", exAr: "أحتاج إلى محامٍ." },
    { de: "der Zeuge", ar: "الشاهد", g: "der", ex: "Der Zeuge sagt die Wahrheit.", exAr: "الشاهد يقول الحقيقة." },
    { de: "die Strafe", ar: "العقوبة", g: "die", ex: "Die Strafe war sehr hoch.", exAr: "العقوبة كانت عالية جداً." },
    { de: "auf den / mit dem (Relativ)", ar: "نسبية بحرف جر", g: "other", ex: "Das ist der Plan, auf den wir uns geeinigt haben.", exAr: "هذه الخطة التي اتفقنا عليها." },
    { de: "wo (Relativ)", ar: "حيث (مكان)", g: "other", ex: "Das ist die Stadt, wo ich geboren bin.", exAr: "هذه المدينة التي وُلدت فيها." },
    { de: "was (Relativ)", ar: "ما (بعد كل شيء)", g: "other", ex: "Das ist alles, was ich weiß.", exAr: "هذا كل ما أعرفه." },
    { de: "der Richter", ar: "القاضي", g: "der", ex: "Der Richter spricht das Urteil.", exAr: "القاضي يصدر الحكم." },
    { de: "das Urteil", ar: "الحكم", g: "das", ex: "Das Urteil wird morgen verkündet.", exAr: "الحكم يُعلن غداً." },
    { de: "die Frist", ar: "المهلة", g: "die", ex: "Die Frist endet am Freitag.", exAr: "المهلة تنتهي يوم الجمعة." },
    { de: "die Unterschrift", ar: "التوقيع", g: "die", ex: "Ohne Unterschrift ist der Vertrag nicht gültig.", exAr: "بدون توقيع لا يكون العقد ساريا." },
    { de: "gültig", ar: "ساري", g: "adj", ex: "Der Ausweis ist noch gültig.", exAr: "بطاقة الهوية ما زالت سارية." },
  ],

  /* ── وحدة 4: الأدب ── */
  "b2-04": [
    { de: "die Literatur", ar: "الأدب", g: "die", ex: "Die Literatur der Aufklärung ist spannend.", exAr: "أدب عصر التنوير مثير." },
    { de: "der Roman", ar: "الرواية", g: "der", ex: "Der Roman hat über tausend Seiten.", exAr: "الرواية فيها أكثر من ألف صفحة." },
    { de: "das Gedicht", ar: "القصيدة", g: "das", ex: "Das Gedicht hat einen schönen Rhythmus.", exAr: "للقصيدة إيقاع جميل." },
    { de: "der Autor", ar: "الكاتب", g: "der", ex: "Der Autor schreibt über seine Kindheit.", exAr: "الكاتب يكتب عن طفولته." },
    { de: "das Partizip I", ar: "صيغة الفعل الوصفية الأولى (Partizip I)", g: "das", ex: "Das Partizip I von lesen ist lesend.", exAr: "اسم الفاعل (Partizip I) للفعل lesen هو lesend." },
    { de: "das Partizip II", ar: "صيغة الفعل الوصفية الثانية (Partizip II)", g: "das", ex: "Das Partizip II von lesen ist gelesen.", exAr: "اسم المفعول (Partizip II) للفعل lesen هو gelesen." },
    { de: "der Beitrag", ar: "المقال/المساهمة", g: "der", ex: "Sein Beitrag zur Debatte war wichtig.", exAr: "مساهمته في النقاش كانت مهمة." },
    { de: "die Geschichte", ar: "القصة", g: "die", ex: "Die Geschichte ist sehr traurig.", exAr: "القصة حزينة جداً." },
    { de: "die Erzählung", ar: "الحكاية", g: "die", ex: "Die Erzählung spielt im Mittelalter.", exAr: "الحكاية تدور في العصور الوسطى." },
    { de: "der Verlag", ar: "دار النشر", g: "der", ex: "Der Verlag druckt das Buch.", exAr: "دار النشر تطبع الكتاب." },
    { de: "das Werk", ar: "العمل الفني", g: "das", ex: "Das Werk wurde in zehn Sprachen übersetzt.", exAr: "العمل تُرجم إلى عشر لغات." },
    { de: "lesenswert", ar: "يستحق القراءة", g: "adj", ex: "Das Buch ist lesenswert.", exAr: "الكتاب يستحق القراءة." },
    { de: "spannend", ar: "مشوق", g: "adj", ex: "Der Krimi ist sehr spannend.", exAr: "الرواية البوليسية مشوقة جداً." },
    { de: "die Buchmesse", ar: "معرض الكتاب", g: "die", ex: "Auf der Buchmesse gibt es viele Neuheiten.", exAr: "في معرض الكتاب توجد إصدارات جديدة كثيرة." },
    { de: "die Rezension", ar: "المراجعة النقدية", g: "die", ex: "Die Rezension lobt den Roman.", exAr: "المراجعة النقدية تثني على الرواية." },
  ],

  /* ── وحدة 5: علم النفس ── */
  "b2-05": [
    { de: "die Psychologie", ar: "علم النفس", g: "die", ex: "Die Psychologie erklärt das Verhalten.", exAr: "علم النفس يفسر السلوك." },
    { de: "die Kommunikation", ar: "التواصل", g: "die", ex: "Gute Kommunikation hilft im Team.", exAr: "التواصل الجيد يساعد في الفريق." },
    { de: "das Missverständnis", ar: "سوء الفهم", g: "das", ex: "Das war ein Missverständnis.", exAr: "كان ذلك سوء فهم." },
    { de: "zuhören", ar: "يصغي", g: "v", ex: "Hör mir bitte aufmerksam zu.", exAr: "استمع إليّ بانتباه من فضلك." },
    { de: "das Verhalten", ar: "السلوك", g: "das", ex: "Sein Verhalten war unerwartet.", exAr: "سلوكه كان غير متوقع." },
    { de: "indem", ar: "بأن/بواسطة", g: "other", ex: "Man lernt, indem man übt.", exAr: "المرء يتعلم بالتدرّب." },
    { de: "anstatt...zu", ar: "بدلاً من أن", g: "other", ex: "Anstatt zu warten, handelte er sofort.", exAr: "بدلاً من أن ينتظر، تصرف فوراً." },
    { de: "ohne...zu", ar: "دون أن", g: "other", ex: "Er ging, ohne ein Wort zu sagen.", exAr: "ذهب دون أن يقول كلمة." },
    { de: "es sei denn", ar: "إلا إذا", g: "other", ex: "Ich komme, es sei denn, es regnet.", exAr: "سآتي إلا إذا أمطرت." },
    { de: "je nachdem", ar: "حسبما", g: "other", ex: "Wir fahren, je nachdem wie das Wetter ist.", exAr: "نسافر حسبما يكون الطقس." },
    { de: "die Emotion", ar: "العاطفة", g: "die", ex: "Musik weckt starke Emotionen.", exAr: "الموسيقى توقظ عواطف قوية." },
    { de: "der Stress", ar: "التوتر", g: "der", ex: "Der Stress im Studium ist hoch.", exAr: "التوتر في الدراسة الجامعية مرتفع." },
    { de: "die Motivation", ar: "الحوافز", g: "die", ex: "Motivation ist der Schlüssel zum Erfolg.", exAr: "الحافز هو مفتاح النجاح." },
    { de: "das Selbstvertrauen", ar: "الثقة بالنفس", g: "das", ex: "Mit Selbstvertrauen spricht man besser.", exAr: "مع الثقة بالنفس يتكلم المرء أفضل." },
    { de: "die Empathie", ar: "التعاطف", g: "die", ex: "Empathie hilft beim Zuhören.", exAr: "التعاطف يساعد على الإصغاء." },
  ],

  /* ── وحدة 6: المهنة ── */
  "b2-06": [
    { de: "die Karriere", ar: "المسار المهني", g: "die", ex: "Ihre Karriere verläuft sehr schnell.", exAr: "مسيرتها المهنية تسير بسرعة كبيرة." },
    { de: "die Führungskraft", ar: "القائد/المدير", g: "die", ex: "Eine gute Führungskraft motiviert das Team.", exAr: "القائد الجيد يحفز الفريق." },
    { de: "die Probezeit", ar: "فترة التجربة", g: "die", ex: "Die Probezeit dauert sechs Monate.", exAr: "فترة التجربة تستمر ستة أشهر." },
    { de: "die Nominalisierung", ar: "الاشتقاق الاسمي", g: "die", ex: "Die Nominalisierung macht Texte formeller.", exAr: "الاشتقاق الاسمي يجعل النصوص أكثر رسمية." },
    { de: "beim Lesen / zum Nachdenken", ar: "عند القراءة / للتفكير", g: "other", ex: "Beim Lesen mache ich Notizen.", exAr: "عند القراءة أدوّن ملاحظات." },
    { de: "die Verbesserung", ar: "التحسين", g: "die", ex: "Die Verbesserung der Arbeit ist sichtbar.", exAr: "تحسين العمل واضح." },
    { de: "die Zusammenarbeit", ar: "التعاون", g: "die", ex: "Die Zusammenarbeit im Team klappt gut.", exAr: "التعاون في الفريق ناجح." },
    { de: "die Fähigkeit", ar: "المهارة", g: "die", ex: "Er hat die Fähigkeit, schnell zu lernen.", exAr: "لديه القدرة على التعلم بسرعة." },
    { de: "die Qualifikation", ar: "المؤهل", g: "die", ex: "Seine Qualifikation passt zur Stelle.", exAr: "مؤهلاته مناسبة للوظيفة." },
    { de: "die Verantwortung", ar: "المسؤولية", g: "die", ex: "Die Verantwortung liegt bei dir.", exAr: "المسؤولية تقع عليك." },
    { de: "der Erfolg", ar: "النجاح", g: "der", ex: "Der Erfolg kam nach vielen Jahren.", exAr: "النجاح جاء بعد سنوات كثيرة." },
    { de: "das Ziel", ar: "الهدف", g: "das", ex: "Das Ziel ist klar definiert.", exAr: "الهدف محدد بوضوح." },
    { de: "befördern", ar: "يرقّي", g: "v", ex: "Man hat ihn zum Abteilungsleiter befördert.", exAr: "تمت ترقيته إلى رئيس قسم." },
    { de: "kündigen", ar: "يستقيل", g: "v", ex: "Sie hat fristgerecht gekündigt.", exAr: "استقالت في الموعد المحدد." },
    { de: "die Gehaltserhöhung", ar: "زيادة الراتب", g: "die", ex: "Nach einem Jahr gab es eine Gehaltserhöhung.", exAr: "بعد سنة حصل على زيادة في الراتب." },
  ],

  /* ── وحدة 7: الفلسفة ── */
  "b2-07": [
    { de: "die Philosophie", ar: "الفلسفة", g: "die", ex: "Die Philosophie stellt große Fragen.", exAr: "الفلسفة تطرح أسئلة كبيرة." },
    { de: "die These", ar: "الأطروحة", g: "die", ex: "Seine These ist umstritten.", exAr: "أطروحته موضع جدل." },
    { de: "das Argument", ar: "الحجة", g: "das", ex: "Das Argument überzeugt mich nicht.", exAr: "الحجة لا تقنعني." },
    { de: "die Erörterung", ar: "المقال الجدلي", g: "die", ex: "Eine Erörterung braucht Argumente und Beispiele.", exAr: "المقال الجدلي يحتاج إلى حجج وأمثلة." },
    { de: "das Futur II", ar: "المستقبل التام", g: "das", ex: "Im Futur II sagt man: Er wird das Buch gelesen haben.", exAr: "في المستقبل التام نقول: سيكون قد قرأ الكتاب." },
    { de: "Meiner Meinung nach", ar: "في رأيي", g: "other", ex: "Meiner Meinung nach ist das richtig.", exAr: "في رأيي هذا صحيح." },
    { de: "einerseits... andererseits", ar: "من ناحية... ومن ناحية أخرى", g: "other", ex: "Einerseits ist es teuer, andererseits sehr nützlich.", exAr: "من ناحية هو غالٍ، ومن ناحية أخرى مفيد جداً." },
    { de: "zusammenfassend", ar: "خلاصةً", g: "other", ex: "Zusammenfassend lässt sich sagen: Es war gut.", exAr: "خلاصةً يمكن القول: كان جيداً." },
    { de: "die Wahrheit", ar: "الحقيقة", g: "die", ex: "Die Wahrheit lässt sich nicht verbergen.", exAr: "الحقيقة لا يمكن إخفاؤها." },
    { de: "die Ethik", ar: "الأخلاق", g: "die", ex: "Die Ethik fragt nach dem richtigen Handeln.", exAr: "الأخلاق تسأل عن التصرف الصحيح." },
    { de: "der Sinn", ar: "المعنى", g: "der", ex: "Das Leben hat für ihn einen tiefen Sinn.", exAr: "للحياة معنى عميق بالنسبة له." },
    { de: "die Freiheit", ar: "الحرية", g: "die", ex: "Freiheit bedeutet auch Verantwortung.", exAr: "الحرية تعني المسؤولية أيضاً." },
    { de: "die Gerechtigkeit", ar: "العدالة", g: "die", ex: "Die Gerechtigkeit verlangt gleiche Rechte.", exAr: "العدالة تقتضي حقوقاً متساوية." },
    { de: "der Gedanke", ar: "الفكرة", g: "der", ex: "Der Gedanke ist sehr originell.", exAr: "الفكرة أصيلة جداً." },
    { de: "nachdenken", ar: "يتأمل", g: "v", ex: "Ich denke lange über die Frage nach.", exAr: "أفكر طويلاً في السؤال." },
  ],

  /* ── وحدة 8: اللغات ── */
  "b2-08": [
    { de: "die Sprache", ar: "اللغة", g: "die", ex: "Die Sprache verbindet Menschen.", exAr: "اللغة تربط بين الناس." },
    { de: "die Kultur", ar: "الثقافة", g: "die", ex: "Jede Kultur hat eigene Werte.", exAr: "لكل ثقافة قيم خاصة بها." },
    { de: "der Austausch", ar: "التبادل", g: "der", ex: "Der kulturelle Austausch bereichert uns.", exAr: "التبادل الثقافي يثري حياتنا." },
    { de: "interkulturell", ar: "بين الثقافات", g: "adj", ex: "Wir brauchen interkulturelle Kompetenz.", exAr: "نحتاج إلى كفاءة بين ثقافية." },
    { de: "sich interessieren für", ar: "يهتم بـ", g: "v", ex: "Sie interessiert sich für fremde Sprachen.", exAr: "هي مهتمة باللغات الأجنبية." },
    { de: "warten auf", ar: "ينتظر", g: "v", ex: "Wir warten auf den Zug.", exAr: "ننتظر القطار." },
    { de: "sich freuen auf/über", ar: "يتطلع لـ/يفرح بـ", g: "v", ex: "Ich freue mich über deinen Brief.", exAr: "أنا سعيد برسالتك." },
    { de: "denken an", ar: "يفكر في", g: "v", ex: "Ich denke oft an meine Heimat.", exAr: "أفكر كثيراً في وطني." },
    { de: "träumen von", ar: "يحلم بـ", g: "v", ex: "Er träumt von einer Reise nach Japan.", exAr: "هو يحلم برحلة إلى اليابان." },
    { de: "abhängen von", ar: "يعتمد على", g: "v", ex: "Der Erfolg hängt von der Vorbereitung ab.", exAr: "النجاح يعتمد على التحضير." },
    { de: "sich kümmern um", ar: "يعتني بـ", g: "v", ex: "Sie kümmert sich um die Kinder.", exAr: "هي تعتني بالأطفال." },
    { de: "diskutieren über", ar: "يناقش", g: "v", ex: "Wir diskutieren über das Thema.", exAr: "نناقش الموضوع." },
    { de: "die Mehrsprachigkeit", ar: "تعدد اللغات", g: "die", ex: "Mehrsprachigkeit ist ein großer Vorteil.", exAr: "تعدد اللغات ميزة كبيرة." },
    { de: "die Herkunft", ar: "الأصل", g: "die", ex: "Ihre Herkunft ist aus Tunesien.", exAr: "أصلها من تونس." },
    { de: "die Verständigung", ar: "التفاهم", g: "die", ex: "Eine gute Verständigung spart Zeit.", exAr: "التفاهم الجيد يوفر الوقت." },
  ],

  /* ── وحدة 9: سوق العمل ── */
  "b2-09": [
    { de: "der Arbeitsmarkt", ar: "سوق العمل", g: "der", ex: "Der Arbeitsmarkt ist im Moment schwierig.", exAr: "سوق العمل صعب حالياً." },
    { de: "die Stelle", ar: "المنصب", g: "die", ex: "Die Stelle wurde gerade ausgeschrieben.", exAr: "الوظيفة أُعلن عنها للتو." },
    { de: "das Anschreiben", ar: "خطاب التقديم", g: "das", ex: "Im Anschreiben stellt man sich vor.", exAr: "في خطاب التقديم يقدّم المرء نفسه." },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", g: "der", ex: "Der Lebenslauf muss aktuell sein.", exAr: "السيرة الذاتية يجب أن تكون محدّثة." },
    { de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", g: "v", ex: "Wir ziehen Ihre Bewerbung in Betracht.", exAr: "نأخذ طلبك بعين الاعتبار." },
    { de: "zur Verfügung stellen", ar: "يضع تحت التصرف", g: "v", ex: "Wir stellen Ihnen ein Büro zur Verfügung.", exAr: "نضع تحت تصرفك مكتباً." },
    { de: "Wert legen auf", ar: "يولي أهمية", g: "v", ex: "Der Chef legt Wert auf Pünktlichkeit.", exAr: "المدير يولي أهمية للالتزام بالمواعيد." },
    { de: "eine Rolle spielen", ar: "يلعب دوراً", g: "v", ex: "Erfahrung spielt eine große Rolle.", exAr: "للخبرة دور كبير." },
    { de: "Anbei finden Sie ...", ar: "مرفقاً تجدون...", g: "other", ex: "Anbei finden Sie meinen Lebenslauf.", exAr: "مرفقاً تجدون سيرتي الذاتية." },
    { de: "sich bewerben um", ar: "يتقدم لـ", g: "v", ex: "Ich bewerbe mich um die Stelle.", exAr: "أتقدم لهذه الوظيفة." },
    { de: "der Arbeitgeber", ar: "صاحب العمل", g: "der", ex: "Der Arbeitgeber sucht Fachkräfte.", exAr: "صاحب العمل يبحث عن كفاءات متخصصة." },
    { de: "die Kündigungsfrist", ar: "مهلة الإنهاء", g: "die", ex: "Die Kündigungsfrist beträgt drei Monate.", exAr: "مدة الإشعار بالاستقالة ثلاثة أشهر." },
    { de: "die Anerkennung", ar: "الاعتراف (بشهادة)", g: "die", ex: "Die Anerkennung des Abschlusses dauert lange.", exAr: "الاعتراف بالشهادة يستغرق وقتاً طويلاً." },
    { de: "die Berufserfahrung", ar: "الخبرة المهنية", g: "die", ex: "Berufserfahrung ist bei dieser Stelle wichtig.", exAr: "الخبرة المهنية مهمة لهذه الوظيفة." },
    { de: "die Bewerbungsunterlagen", ar: "ملفات التقديم", g: "die", ex: "Bitte schicken Sie die Bewerbungsunterlagen per E-Mail.", exAr: "من فضلك أرسل ملفات التقديم بالبريد الإلكتروني." },
  ],

  /* ── وحدة 10: الدراسة ── */
  "b2-10": [
    { de: "das Studium", ar: "الدراسة الجامعية", g: "das", ex: "Das Studium der Medizin dauert lange.", exAr: "دراسة الطب تستغرق وقتاً طويلاً." },
    { de: "die Hausarbeit", ar: "البحث الجامعي", g: "die", ex: "Die Hausarbeit muss bis Montag abgegeben werden.", exAr: "البحث الجامعي يجب تسليمه حتى يوم الاثنين." },
    { de: "das Seminar", ar: "الندوة", g: "das", ex: "Das Seminar behandelt die Grammatik.", exAr: "الندوة تتناول القواعد." },
    { de: "die Fachsprache", ar: "لغة التخصص", g: "die", ex: "Die Fachsprache der Medizin ist schwer.", exAr: "لغة الطب المتخصصة صعبة." },
    { de: "es ist erwiesen, dass", ar: "ثابت أن", g: "other", ex: "Es ist erwiesen, dass Schlaf wichtig ist.", exAr: "ثابت أن النوم مهم." },
    { de: "meiner Ansicht nach", ar: "في رأيي", g: "other", ex: "Meiner Ansicht nach ist das falsch.", exAr: "في رأيي هذا خطأ." },
    { de: "möglicherweise", ar: "ربما", g: "adv", ex: "Er kommt möglicherweise später.", exAr: "ربما يأتي متأخراً." },
    { de: "in gewissem Maße", ar: "إلى حد ما", g: "other", ex: "Das stimmt in gewissem Maße.", exAr: "هذا صحيح إلى حد ما." },
    { de: "die Linguistik", ar: "علم اللغة", g: "die", ex: "Die Linguistik untersucht die Sprache.", exAr: "علم اللغة يدرس اللغة." },
    { de: "der Numerus clausus", ar: "قيد القبول (تخصص محدود القبول)", g: "der", ex: "Für Medizin gilt ein Numerus clausus.", exAr: "لتخصص الطب قيد قبول محدود." },
    { de: "die Zulassung", ar: "القبول", g: "die", ex: "Die Zulassung zum Studium erfolgt online.", exAr: "القبول في الدراسة يتم عبر الإنترنت." },
    { de: "der Studiengang", ar: "برنامج الدراسة", g: "der", ex: "Welchen Studiengang wählst du?", exAr: "أي برنامج دراسي تختار؟" },
    { de: "die Vorlesung", ar: "المحاضرة", g: "die", ex: "Die Vorlesung beginnt um acht.", exAr: "المحاضرة تبدأ الساعة الثامنة." },
    { de: "das Semesterticket", ar: "تذكرة الفصل", g: "das", ex: "Mit dem Semesterticket fahre ich kostenlos.", exAr: "بتذكرة الفصل أسافر مجاناً." },
  ],
};

/** كل مفردات B2 (مصفوفة مسطحة) */
export function getB2VocabAll(): VocabEntry[] {
  /* عدّاد فريد عبر المستويات (تدقيق نهائي 2026-08-12) */
  const lower = new Set([...getA1VocabAll(), ...getA2VocabAll(), ...getB1VocabAll()].map((w) => `${w.de}‖${w.ar}`));
  return [...Object.values(B2_VOCAB).flat(), ...B2_EXTRA_VOCAB, ...B2_EXTRA2_VOCAB].filter(
    (w) => !lower.has(`${w.de}‖${w.ar}`),
  );
}

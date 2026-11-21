import type { VocabEntry } from "@/data/vocabulary/a1";
import { getA1VocabAll } from "@/data/vocabulary/a1";
import { getA2VocabAll } from "@/data/vocabulary/a2";
import { B1_EXTRA_VOCAB } from "@/data/vocabulary/b1-extra";
import { B1_EXTRA2_VOCAB } from "@/data/vocabulary/b1-extra2";

/**
 * ═══════════════════════════════════════════════════════════
 *  بنك مفردات المستوى B1 (~200 كلمة) — منظم حسب الوحدات
 * ═══════════════════════════════════════════════════════════
 */

export const B1_VOCAB: Record<string, VocabEntry[]> = {
  /* ── وحدة 1: التعليم ── */
  "b1-01": [
    { de: "die Ausbildung", ar: "التدريب المهني", g: "die", ex: "Meine Ausbildung dauert drei Jahre.", exAr: "تدريبي المهني يستمر ثلاث سنوات." },
    { de: "das Studium", ar: "الدراسة الجامعية", g: "das", ex: "Das Studium ist sehr anspruchsvoll.", exAr: "الدراسة الجامعية صعبة جداً." },
    { de: "das Fach", ar: "التخصص", g: "das", ex: "Welches Fach studierst du?", exAr: "ما التخصص الذي تدرسه؟" },
    { de: "studieren", ar: "يدرس (جامعة)", g: "v", ex: "Ich studiere Informatik in Tunis.", exAr: "أدرس علوم الحاسوب في تونس." },
    { de: "der Genitiv", ar: "المضاف إليه", g: "der", ex: "Der Genitiv zeigt den Besitz.", exAr: "المضاف إليه يدل على الملكية." },
    { de: "der Relativsatz", ar: "الجملة النسبية", g: "der", ex: "Der Mann, der dort steht, ist mein Lehrer.", exAr: "الرجل الذي يقف هناك هو معلمي." },
    { de: "das Stipendium", ar: "المنحة", g: "das", ex: "Er hat ein Stipendium bekommen.", exAr: "حصل على منحة." },
    { de: "die Note", ar: "العلامة", g: "die", ex: "Welche Note hast du bekommen?", exAr: "ما العلامة التي حصلت عليها؟" },
    { de: "das Zeugnis", ar: "الشهادة", g: "das", ex: "Sie hat ihr Zeugnis erhalten.", exAr: "حصلت على شهادتها." },
    { de: "das Semester", ar: "الفصل الدراسي", g: "das", ex: "Im dritten Semester lerne ich mehr.", exAr: "في الفصل الدراسي الثالث أتعلم أكثر." },
    { de: "wegen / trotz / während / statt (meist + Gen.)", ar: "حروف جر يأتي بعدها Genitiv غالباً؛ وتَرِد صيغ Dativ في استعمالات محددة: بسبب/رغم/خلال/بدلاً من", g: "other", ex: "Wegen des Verkehrs komme ich zu spät.", exAr: "بسبب الزحمة أتأخر." },
    { de: "wessen?", ar: "لمن؟", g: "other", ex: "Wessen Buch ist das?", exAr: "كتاب لمن هذا؟" },
    { de: "die Universität", ar: "الجامعة", g: "die", ex: "Die Universität liegt im Zentrum.", exAr: "الجامعة تقع في وسط المدينة." },
    { de: "das Referat", ar: "العرض التقديمي", g: "das", ex: "Ich halte morgen ein Referat.", exAr: "سأقدم عرضاً تقديمياً غداً." },
    { de: "die Prüfung bestehen", ar: "يجتاز الامتحان", g: "v", ex: "Ich hoffe, die Prüfung zu bestehen.", exAr: "آمل أن أجتاز الامتحان." },
  ],

  /* ── وحدة 2: العمل ── */
  "b1-02": [
    { de: "die Bewerbung", ar: "طلب الوظيفة", g: "die", ex: "Meine Bewerbung ist schon abgeschickt.", exAr: "طلب توظيفي أُرسل بالفعل." },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", g: "der", ex: "Ich aktualisiere meinen Lebenslauf.", exAr: "أحدّث سيرتي الذاتية." },
    { de: "das Vorstellungsgespräch", ar: "مقابلة العمل", g: "das", ex: "Das Vorstellungsgespräch war sehr gut.", exAr: "مقابلة العمل كانت جيدة جداً." },
    { de: "der Arbeitgeber", ar: "صاحب العمل", g: "der", ex: "Der Arbeitgeber bietet gute Bedingungen.", exAr: "صاحب العمل يقدم شروطاً جيدة." },
    { de: "der Arbeitnehmer", ar: "الموظف", g: "der", ex: "Der Arbeitnehmer hat Anspruch auf Urlaub.", exAr: "الموظف له حق في الإجازة." },
    { de: "die Erfahrung", ar: "الخبرة", g: "die", ex: "Ich habe fünf Jahre Erfahrung.", exAr: "عندي خمس سنوات خبرة." },
    { de: "das Präteritum", ar: "الماضي البسيط", g: "das", ex: "Das Präteritum von gehen ist ging.", exAr: "الماضي البسيط للفعل gehen هو ging." },
    { de: "das Plusquamperfekt", ar: "الماضي التام المركب", g: "das", ex: "Ich hatte schon gegessen, als er kam.", exAr: "كنت قد أكلت عندما جاء." },
    { de: "bevor / nachdem / als", ar: "قبل أن/بعد أن/عندما", g: "other", ex: "Bevor ich gehe, schreibe ich dir.", exAr: "قبل أن أذهب أكتب لك." },
    { de: "das Gehalt", ar: "الراتب", g: "das", ex: "Das Gehalt kommt am Monatsende.", exAr: "الراتب يأتي في نهاية الشهر." },
    { de: "die Stelle", ar: "الوظيفة/المنصب", g: "die", ex: "Ich suche eine Stelle als Verkäufer.", exAr: "أبحث عن وظيفة بائع." },
    { de: "kündigen", ar: "يستقيل/يفصل", g: "v", ex: "Er hat seine Stelle gekündigt.", exAr: "استقال من وظيفته." },
    { de: "der Kollege", ar: "الزميل", g: "der", ex: "Mein Kollege hilft mir oft.", exAr: "زميلي يساعدني كثيراً." },
    { de: "die Karriere", ar: "المسار المهني", g: "die", ex: "Sie macht eine schnelle Karriere.", exAr: "هي تحقق تقدماً مهنياً سريعاً." },
    { de: "die Fähigkeit", ar: "القدرة/المهارة", g: "die", ex: "Teamarbeit ist eine wichtige Fähigkeit.", exAr: "العمل الجماعي مهارة مهمة." },
  ],

  /* ── وحدة 3: البيئة ── */
  "b1-03": [
    { de: "die Umwelt", ar: "البيئة", g: "die", ex: "Wir müssen die Umwelt schützen.", exAr: "يجب أن نحمي البيئة." },
    { de: "der Klimawandel", ar: "تغير المناخ", g: "der", ex: "Der Klimawandel betrifft alle Länder.", exAr: "تغير المناخ يؤثر في كل البلدان." },
    { de: "der Müll", ar: "النفايات", g: "der", ex: "Der Müll muss getrennt werden.", exAr: "النفايات يجب فرزها." },
    { de: "recyceln", ar: "يعيد التدوير", g: "v", ex: "Plastik kann man recyceln.", exAr: "البلاستيك يمكن إعادة تدويره." },
    { de: "die Energie", ar: "الطاقة", g: "die", ex: "Wir sparen Energie im Winter.", exAr: "نوفر الطاقة في الشتاء." },
    { de: "die Sonnenenergie", ar: "الطاقة الشمسية", g: "die", ex: "Die Sonnenenergie ist sauber.", exAr: "الطاقة الشمسية نظيفة." },
    { de: "das Passiv", ar: "المبني للمجهول", g: "das", ex: "Im Passiv steht das Objekt am Satzanfang.", exAr: "في المبني للمجهول يقع المفعول به في بداية الجملة." },
    { de: "werden + Partizip II", ar: "قالب المضارع للمبني للمجهول (werden هو الفعل المصرف)", g: "other", ex: "Das Haus wird gebaut.", exAr: "البيت يُبنى الآن." },
    { de: "wurde + Partizip II", ar: "فُعل (ماضٍ مجهول)", g: "other", ex: "Das Haus wurde im Jahr 1990 gebaut.", exAr: "البيت بُني عام 1990." },
    { de: "man", ar: "المرء / الناس عموماً؛ ضمير فاعل عام", g: "pron", ex: "Man schützt die Umwelt.", exAr: "يجب حماية البيئة." },
    { de: "die Nachhaltigkeit", ar: "الاستدامة", g: "die", ex: "Nachhaltigkeit ist wichtig für die Zukunft.", exAr: "الاستدامة مهمة للمستقبل." },
    { de: "der Klimaschutz", ar: "حماية المناخ", g: "der", ex: "Der Klimaschutz beginnt bei jedem Einzelnen.", exAr: "حماية المناخ تبدأ من كل فرد." },
    { de: "die Pflanze", ar: "النبتة", g: "die", ex: "Die Pflanze braucht Wasser.", exAr: "النبتة تحتاج إلى ماء." },
    { de: "der Wald", ar: "الغابة", g: "der", ex: "Der Wald ist grün und ruhig.", exAr: "الغابة خضراء وهادئة." },
    { de: "verschmutzen", ar: "يلوث", g: "v", ex: "Die Fabrik verschmutzt den Fluss.", exAr: "المصنع يلوث النهر." },
  ],

  /* ── وحدة 4: الإعلام ── */
  "b1-04": [
    { de: "die Gesellschaft", ar: "المجتمع", g: "die", ex: "Die Gesellschaft verändert sich schnell.", exAr: "المجتمع يتغير بسرعة." },
    { de: "die Meinung", ar: "الرأي", g: "die", ex: "Jeder darf seine Meinung sagen.", exAr: "كل واحد له الحق في أن يقول رأيه." },
    { de: "kritisch", ar: "نقدي", g: "adj", ex: "Er ist kritisch gegenüber neuen Ideen.", exAr: "هو ناقد للأفكار الجديدة." },
    { de: "der Konjunktiv II", ar: "صيغة الشرط", g: "der", ex: "Der Konjunktiv II drückt Wünsche aus.", exAr: "صيغة الشرط تعبّر عن الأماني." },
    { de: "würde + Infinitiv", ar: "صيغة افتراضية أو مهذبة؛ تُترجم بحسب السياق", g: "other", ex: "Ich würde gern reisen.", exAr: "أود أن أسافر." },
    { de: "wäre / hätte / könnte", ar: "صيغ Konjunktiv II من sein/haben/können؛ معناها يتحدد بالسياق", g: "other", ex: "Wenn ich Zeit hätte, könnte ich kommen.", exAr: "لو كان عندي وقت لاستطعت أن آتي." },
    { de: "der Einfluss", ar: "التأثير", g: "der", ex: "Die Medien haben großen Einfluss.", exAr: "لوسائل الإعلام تأثير كبير." },
    { de: "die Presse", ar: "الصحافة", g: "die", ex: "Die Presse berichtet über das Ereignis.", exAr: "الصحافة تغطي الحدث." },
    { de: "berichten", ar: "يُخبر/يغطي (خبراً)", g: "v", ex: "Die Zeitung berichtet über die Wahl.", exAr: "الجريدة تخبر عن الانتخابات." },
    { de: "die Quelle", ar: "المصدر", g: "die", ex: "Nenne bitte deine Quelle.", exAr: "من فضلك اذكر مصدرك." },
    { de: "der Journalist", ar: "الصحفي", g: "der", ex: "Der Journalist schreibt einen Artikel.", exAr: "الصحفي يكتب مقالاً." },
    { de: "die Schlagzeile", ar: "العنوان الرئيسي", g: "die", ex: "Die Schlagzeile hat alle überrascht.", exAr: "العنوان فاجأ الجميع." },
    { de: "objektiv", ar: "موضوعي", g: "adj", ex: "Ein Bericht soll objektiv sein.", exAr: "التقرير يجب أن يكون موضوعياً." },
    { de: "die Wahrheit", ar: "الحقيقة", g: "die", ex: "Die Wahrheit ist manchmal unbequem.", exAr: "الحقيقة أحياناً غير مريحة." },
    { de: "lügen", ar: "يكذب", g: "v", ex: "Er lügt nicht.", exAr: "هو لا يكذب." },
  ],

  /* ── وحدة 5: الصحة ── */
  "b1-05": [
    { de: "die Gesundheit", ar: "الصحة", g: "die", ex: "Die Gesundheit ist das Wichtigste.", exAr: "الصحة أهم شيء." },
    { de: "die Prävention", ar: "الوقاية", g: "die", ex: "Prävention ist besser als Behandlung.", exAr: "الوقاية أفضل من العلاج." },
    { de: "die Bewegung", ar: "الحركة/النشاط", g: "die", ex: "Bewegung hält fit.", exAr: "الحركة تُبقي الجسم لائقاً." },
    { de: "fit", ar: "لائق", g: "adj", ex: "Mein Vater ist mit siebzig noch fit.", exAr: "أبي ما زال لائقاً في السبعين." },
    { de: "trainieren", ar: "يتدرب", g: "v", ex: "Ich trainiere dreimal pro Woche.", exAr: "أتمرن ثلاث مرات في الأسبوع." },
    { de: "hätte/wäre + Partizip II", ar: "صيغة الشرط في الماضي، وتُترجم بحسب الفعل والسياق", g: "other", ex: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.", exAr: "لو كان عندي وقت لكنت أتيت." },
    { de: "als ob", ar: "كما لو", g: "other", ex: "Er tut so, als ob er alles wüsste.", exAr: "هو يتصرف كما لو أنه يعرف كل شيء." },
    { de: "die Süßigkeit (Pl.: Süßigkeiten)", ar: "حلوى/قطعة من الحلوى", g: "die", ex: "Ich esse zu viele Süßigkeiten.", exAr: "آكل حلويات كثيرة جداً." },
    { de: "der Stress", ar: "التوتر", g: "der", ex: "Der Stress im Beruf ist groß.", exAr: "التوتر في العمل كبير." },
    { de: "entspannen", ar: "يسترخي", g: "v", ex: "Am Abend entspanne ich mich mit Musik.", exAr: "في المساء أسترخي مع الموسيقى." },
    { de: "die Ernährung", ar: "التغذية", g: "die", ex: "Gesunde Ernährung ist wichtig.", exAr: "التغذية الصحية مهمة." },
    { de: "die Vorsorge", ar: "الفحص الوقائي", g: "die", ex: "Die Vorsorge beim Arzt ist sinnvoll.", exAr: "الفحص الوقائي عند الطبيب مفيد." },
    { de: "der Sportverein", ar: "النادي الرياضي", g: "der", ex: "Ich bin im Sportverein.", exAr: "أنا عضو في النادي الرياضي." },
    { de: "die Gewohnheit", ar: "العادة", g: "die", ex: "Lesen ist meine tägliche Gewohnheit.", exAr: "القراءة عادتي اليومية." },
    { de: "das Immunsystem", ar: "جهاز المناعة", g: "das", ex: "Schlaf stärkt das Immunsystem.", exAr: "النوم يقوّي جهاز المناعة." },
  ],

  /* ── وحدة 6: الثقافة ── */
  "b1-06": [
    { de: "die Kultur", ar: "الثقافة", g: "die", ex: "Die Kultur dieses Landes ist sehr reich.", exAr: "ثقافة هذا البلد غنية جداً." },
    { de: "die Kunst", ar: "الفن", g: "die", ex: "Sie interessiert sich für Kunst.", exAr: "هي مهتمة بالفن." },
    { de: "das Gemälde", ar: "اللوحة", g: "das", ex: "Das Gemälde hängt im Museum.", exAr: "اللوحة معلقة في المتحف." },
    { de: "der Maler", ar: "الرسام", g: "der", ex: "Der Maler malt eine Landschaft.", exAr: "الرسام يرسم منظراً طبيعياً." },
    { de: "das Museum", ar: "المتحف", g: "das", ex: "Das Museum ist am Montag geschlossen.", exAr: "المتحف مغلق يوم الاثنين." },
    { de: "die Adjektivdeklination", ar: "تصريف الصفات", g: "die", ex: "Die Adjektivdeklination ist schwer.", exAr: "تصريف الصفات صعب." },
    { de: "wunderschön", ar: "رائع الجمال", g: "adj", ex: "Die Stadt ist wunderschön.", exAr: "المدينة رائعة الجمال." },
    { de: "das Jahrhundert", ar: "القرن", g: "das", ex: "Das Gebäude stammt aus dem letzten Jahrhundert.", exAr: "المبنى يعود إلى القرن الماضي." },
    { de: "die Ausstellung", ar: "المعرض", g: "die", ex: "Die Ausstellung zeigt alte Bilder.", exAr: "المعرض يعرض لوحات قديمة." },
    { de: "das Orchester", ar: "الأوركسترا", g: "das", ex: "Das Orchester spielt heute Abend.", exAr: "الأوركسترا تعزف الليلة." },
    { de: "der Komponist", ar: "الملحن", g: "der", ex: "Mozart war ein berühmter Komponist.", exAr: "موتسارت كان ملحناً مشهوراً." },
    { de: "das Werk", ar: "العمل الفني", g: "das", ex: "Dieses Werk ist sehr bekannt.", exAr: "هذا العمل معروف جداً." },
    { de: "berühmt", ar: "مشهور", g: "adj", ex: "Der Künstler ist sehr berühmt.", exAr: "الفنان مشهور جداً." },
    { de: "die Tradition", ar: "التقليد", g: "die", ex: "Die Familie pflegt alte Traditionen.", exAr: "العائلة تحافظ على التقاليد القديمة." },
    { de: "der Brauch", ar: "العرف", g: "der", ex: "Das Fest ist ein alter Brauch.", exAr: "الاحتفال عادة قديمة." },
  ],

  /* ── وحدة 7: السياسة ── */
  "b1-07": [
    { de: "die Politik", ar: "السياسة", g: "die", ex: "Ich interessiere mich für Politik.", exAr: "أنا مهتم بالسياسة." },
    { de: "die Regierung", ar: "الحكومة", g: "die", ex: "Die Regierung hat ein neues Gesetz beschlossen.", exAr: "الحكومة أقرت قانوناً جديداً." },
    { de: "das Gesetz", ar: "القانون", g: "das", ex: "Jeder muss das Gesetz beachten.", exAr: "على الجميع أن يحترم القانون." },
    { de: "die Wahl", ar: "الانتخاب", g: "die", ex: "Die Wahl findet im Herbst statt.", exAr: "الانتخابات تُجرى في الخريف." },
    { de: "der Bürger", ar: "المواطن", g: "der", ex: "Jeder Bürger hat eine Stimme.", exAr: "لكل مواطن صوت." },
    { de: "als / wenn / während / bevor / nachdem / bis", ar: "أدوات الزمن", g: "other", ex: "Als ich klein war, wohnte ich am Meer.", exAr: "عندما كنت صغيراً كنت أسكن قرب البحر." },
    { de: "seitdem", ar: "منذ أن", g: "other", ex: "Seitdem wohne ich in Berlin.", exAr: "منذ ذلك الحين أسكن في برلين." },
    { de: "die Demokratie", ar: "الديمقراطية", g: "die", ex: "In einer Demokratie wählt das Volk.", exAr: "في الديمقراطية يختار الشعب." },
    { de: "der Politiker", ar: "السياسي", g: "der", ex: "Der Politiker hält eine Rede.", exAr: "السياسي يلقي خطاباً." },
    { de: "das Parlament", ar: "البرلمان", g: "das", ex: "Das Parlament diskutiert das Gesetz.", exAr: "البرلمان يناقش القانون." },
    { de: "die Partei", ar: "الحزب", g: "die", ex: "Er ist Mitglied einer Partei.", exAr: "هو عضو في حزب." },
    { de: "demonstrieren", ar: "يتظاهر", g: "v", ex: "Viele Menschen demonstrieren auf dem Platz.", exAr: "كثير من الناس يتظاهرون في الساحة." },
    { de: "die Freiheit", ar: "الحرية", g: "die", ex: "Die Freiheit der Presse ist wichtig.", exAr: "حرية الصحافة مهمة." },
    { de: "die Gerechtigkeit", ar: "العدالة", g: "die", ex: "Alle wollen Gerechtigkeit.", exAr: "الجميع يريد العدالة." },
    { de: "wählen", ar: "ينتخب", g: "v", ex: "Am Sonntag wähle ich einen Kandidaten.", exAr: "يوم الأحد أنتخب مرشحاً." },
  ],

  /* ── وحدة 8: التقنية ── */
  "b1-08": [
    { de: "die Technik", ar: "التقنية", g: "die", ex: "Die Technik verändert unser Leben.", exAr: "التقنية تغيّر حياتنا." },
    { de: "die Zukunft", ar: "المستقبل", g: "die", ex: "Die Zukunft ist ungewiss.", exAr: "المستقبل غير مؤكد." },
    { de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", g: "die", ex: "Die künstliche Intelligenz lernt schnell.", exAr: "الذكاء الاصطناعي يتعلم بسرعة." },
    { de: "das Futur I", ar: "المستقبل (زمن)", g: "das", ex: "Im Futur I sagt man: Ich werde lernen.", exAr: "في المستقبل I نقول: سأتعلم." },
    { de: "nicht nur... sondern auch", ar: "ليس فقط بل أيضاً", g: "other", ex: "Er spricht nicht nur Deutsch, sondern auch Französisch.", exAr: "هو لا يتكلم الألمانية فقط، بل الفرنسية أيضاً." },
    { de: "weder... noch", ar: "لا... ولا", g: "other", ex: "Ich trinke weder Kaffee noch Tee.", exAr: "لا أشرب القهوة ولا الشاي." },
    { de: "entweder... oder", ar: "إما... أو", g: "other", ex: "Wir fahren entweder mit dem Zug oder mit dem Bus.", exAr: "إما أن نسافر بالقطار أو بالحافلة." },
    { de: "sowohl... als auch", ar: "كلٌّ من ... و... أيضاً", g: "other", ex: "Sowohl die Lehrer als auch die Schüler sind hier.", exAr: "كل من المعلمين والطلاب هنا." },
    { de: "je... desto", ar: "كلما... كلما", g: "other", ex: "Je mehr ich übe, desto sicherer werde ich.", exAr: "كلما تدربت أكثر، ازددت ثقة." },
    { de: "die Entwicklung", ar: "التطور", g: "die", ex: "Die Entwicklung der Technik ist schnell.", exAr: "تطور التقنية سريع." },
    { de: "das Handy", ar: "الهاتف المحمول", g: "das", ex: "Mein Handy ist neu.", exAr: "هاتفي المحمول جديد." },
    { de: "die App", ar: "التطبيق", g: "die", ex: "Ich nutze eine App zum Lernen.", exAr: "أستخدم تطبيقاً للتعلم." },
    { de: "der Datenschutz", ar: "حماية البيانات", g: "der", ex: "Der Datenschutz ist sehr wichtig.", exAr: "حماية البيانات مهمة جداً." },
    { de: "die Digitalisierung", ar: "الرقمنة", g: "die", ex: "Die Digitalisierung der Schule hat begonnen.", exAr: "رقمنة المدرسة بدأت." },
    { de: "der Roboter", ar: "الروبوت", g: "der", ex: "Der Roboter arbeitet in der Fabrik.", exAr: "الروبوت يعمل في المصنع." },
  ],

  /* ── وحدة 9: التطوع ── */
  "b1-09": [
    { de: "das Ehrenamt", ar: "العمل التطوعي", g: "das", ex: "Sie übt ein Ehrenamt im Krankenhaus aus.", exAr: "هي تمارس عملاً تطوعياً في المستشفى." },
    { de: "der Verein", ar: "الجمعية", g: "der", ex: "Ich bin Mitglied im Verein.", exAr: "أنا عضو في الجمعية." },
    { de: "die Spende", ar: "التبرع", g: "die", ex: "Die Spende hilft den Kindern.", exAr: "التبرع يساعد الأطفال." },
    { de: "das Mitglied", ar: "العضو", g: "das", ex: "Er ist ein neues Mitglied.", exAr: "هو عضو جديد." },
    { de: "eine Frage stellen", ar: "يطرح سؤالاً", g: "v", ex: "Darf ich eine Frage stellen?", exAr: "هل يمكنني أن أطرح سؤالاً؟" },
    { de: "eine Entscheidung treffen", ar: "يتخذ قراراً", g: "v", ex: "Wir müssen heute eine Entscheidung treffen.", exAr: "علينا أن نتخذ قراراً اليوم." },
    { de: "Bescheid sagen", ar: "يبلغ", g: "v", ex: "Sag mir bitte Bescheid.", exAr: "أخبرني من فضلك." },
    { de: "die n-Deklination", ar: "تصريف n", g: "die", ex: "Bei der n-Deklination bekommen viele Substantive die Endung -en.", exAr: "في تصريف n تأخذ كثير من الأسماء النهاية -en." },
    { de: "der Student / den Studenten", ar: "الطالب (رفع/نصب)", g: "der", ex: "Ich kenne den Studenten.", exAr: "أعرف الطالب." },
    { de: "ehrenamtlich", ar: "تطوعياً", g: "adj", ex: "Er arbeitet ehrenamtlich im Heim.", exAr: "هو يعمل تطوعياً في الدار." },
    { de: "das Projekt", ar: "المشروع", g: "das", ex: "Das Projekt startet im Mai.", exAr: "المشروع يبدأ في مايو." },
    { de: "unterstützen", ar: "يدعم", g: "v", ex: "Wir unterstützen unsere Nachbarn.", exAr: "ندعم جيراننا." },
    { de: "die Gemeinschaft", ar: "المجتمع المحلي", g: "die", ex: "Die Gemeinschaft hilft den Armen.", exAr: "المجتمع المحلي يساعد الفقراء." },
    { de: "der Freiwillige", ar: "المتطوع", g: "der", ex: "Der Freiwillige hilft beim Essen.", exAr: "المتطوع يساعد في توزيع الطعام." },
    { de: "die Solidarität", ar: "التضامن", g: "die", ex: "Solidarität ist in schweren Zeiten wichtig.", exAr: "التضامن مهم في الأوقات الصعبة." },
  ],

  /* ── وحدة 10: المستقبل ── */
  "b1-10": [
    { de: "der Plan", ar: "الخطة", g: "der", ex: "Hast du schon einen Plan?", exAr: "هل عندك خطة؟" },
    { de: "das Ziel", ar: "الهدف", g: "das", ex: "Mein Ziel ist das Niveau B2.", exAr: "هدفي هو المستوى B2." },
    { de: "sich bewerben", ar: "يتقدم (وظيفة/دراسة)", g: "v", ex: "Ich bewerbe mich um einen Kurs.", exAr: "أتقدم إلى دورة." },
    { de: "der Integrationskurs", ar: "دورة الاندماج", g: "der", ex: "Der Integrationskurs hilft neuen Menschen.", exAr: "دورة الاندماج تساعد الوافدين الجدد." },
    { de: "sich wünschen", ar: "يتمنى", g: "v", ex: "Ich wünsche mir mehr Zeit.", exAr: "أتمنى أن يكون عندي وقت أكثر." },
    { de: "die Chance", ar: "الفرصة", g: "die", ex: "Das ist eine gute Chance für mich.", exAr: "هذه فرصة جيدة لي." },
    { de: "der Erfolg", ar: "النجاح", g: "der", ex: "Der Erfolg kommt mit Geduld.", exAr: "النجاح يأتي بالصبر." },
    { de: "schaffen", ar: "ينجح في", g: "v", ex: "Ich schaffe die Prüfung.", exAr: "سأنجح في الامتحان." },
    { de: "entscheiden", ar: "يقرر", g: "v", ex: "Er entscheidet sich schnell.", exAr: "هو يقرر بسرعة." },
    { de: "die Entscheidung", ar: "القرار", g: "die", ex: "Die Entscheidung ist nicht leicht.", exAr: "القرار ليس سهلاً." },
    { de: "der Traum", ar: "الحلم", g: "der", ex: "Mein Traum ist ein eigenes Haus.", exAr: "حلمي بيت خاص بي." },
    { de: "die Perspektive", ar: "المنظور/الفرصة", g: "die", ex: "Die Stelle bietet gute Perspektiven.", exAr: "الوظيفة تقدم آفاقاً جيدة." },
    { de: "verbessern", ar: "يحسّن", g: "v", ex: "Ich möchte meine Sprachkenntnisse verbessern.", exAr: "أريد أن أحسّن معرفتي باللغة." },
    { de: "erreichen", ar: "يحقق", g: "v", ex: "Ich möchte mein Ziel erreichen.", exAr: "أريد أن أحقق هدفي." },
  ],
};

/** كل مفردات B1 (مصفوفة مسطحة) */
export function getB1VocabAll(): VocabEntry[] {
  /* عدّاد فريد عبر المستويات (تدقيق نهائي 2026-08-12) */
  const lower = new Set([...getA1VocabAll(), ...getA2VocabAll()].map((w) => `${w.de}‖${w.ar}`));
  return [...Object.values(B1_VOCAB).flat(), ...B1_EXTRA_VOCAB, ...B1_EXTRA2_VOCAB].filter(
    (w) => !lower.has(`${w.de}‖${w.ar}`),
  );
}

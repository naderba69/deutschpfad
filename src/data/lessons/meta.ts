import type { LessonMeta } from "./meta-types";

/**
 * ═══════════════════════════════════════════════════════════
 *  فهرس الدروس الخفيف (بيانات وصفية فقط) — 48 درساً
 *  يُولَّد آلياً عبر scripts/gen-lesson-meta.py
 *  الغرض: صفحات القوائم تحتاج فقط العنوان والمعرّف والوقت،
 *  دون تحميل محتوى الدروس الكامل (أداء أفضل للحزم).
 * ═══════════════════════════════════════════════════════════
 */

const LEVEL_RANK: Record<LessonMeta["level"], number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/**
 * ترتيب الدروس كما يسير فيها المتعلّم: المستوى ← الوحدة ← ترتيب الدرس داخلها.
 * التنقّل (السابق/التالي) يعتمد على موضع العنصر في المصفوفة، وكان الترتيب
 * الحرفي ينتهي بـ «… a1-12, a1-14, a1-13» فيقفز المتعلّم من درس الطقس
 * إلى درس الأرقام (وهو الدرس الثاني للوحدة a1-07) ثم يعود للمراجعة الشاملة.
 */
function sortLessonMeta(list: LessonMeta[]): LessonMeta[] {
  return [...list].sort(
    (a, b) =>
      LEVEL_RANK[a.level] - LEVEL_RANK[b.level] ||
      a.unitId.localeCompare(b.unitId) ||
      a.order - b.order ||
      a.id.localeCompare(b.id),
  );
}

const LESSON_META_SOURCE: LessonMeta[] = [
  { id: "a1-00", unitId: "a1-01", level: "A1", order: 0, titleDe: "Das Alphabet und die Aussprache", titleAr: "الأبجدية الألمانية والنطق", duration: 35, summary: "الحروف الستة والعشرون + الحروف المعلمة (ä, ö, ü) وß + الأصوات المركبة (ch, sch, ei, ie, eu, äu, sp, st, pf, tz) — مع تمارين نطق مكثفة مصممة لأخطاء المتعلم العربي.", keyWords: ["das Alphabet", "der Buchstabe", "aussprechen", "buchstabieren", "der Umlaut"] },
  { id: "a1-01", unitId: "a1-01", level: "A1", order: 1, titleDe: "Hallo! Ich heiße …", titleAr: "التعارف والتحيات", duration: 30, summary: "التحيات والوداع، تقديم النفس، تصريف sein وheißen، السلسلة الذهبية لتصريف الأفعال المنتظمة، وأسئلة W الأساسية مع ترتيب الجملة الألماني (الفعل في المركز الثاني).", keyWords: ["der Name", "heißen", "kommen", "wohnen", "woher"] },
  { id: "a1-02", unitId: "a1-02", level: "A1", order: 2, titleDe: "Meine Familie", titleAr: "العائلة والأصدقاء", duration: 30, summary: "أفراد العائلة بالعربية والألمانية، أدوات الملكية mein/meine حسب جنس الاسم، ووصف العائلة بجمل بسيطة.", keyWords: ["die Familie", "der Vater", "der Bruder", "die Eltern", "die Geschwister"] },
  { id: "a1-03", unitId: "a1-03", level: "A1", order: 1, titleDe: "Essen und Trinken", titleAr: "الطعام والشراب", duration: 30, summary: "المأكولات والمشروبات، أدوات التعريف والتنكير (der/die/das + ein/eine)، حالة النصب (Akkusativ): Ich esse einen Apfel، وفعل haben مع الجوع والعطش.", keyWords: ["das Essen", "der Apfel", "das Brot", "die Milch", "der Käse"] },
  { id: "a1-04", unitId: "a1-04", level: "A1", order: 1, titleDe: "Meine Wohnung", titleAr: "السكن والمنزل", duration: 30, summary: "غرف البيت والأثاث، وصف المنزل بصفات بسيطة، حروف الجر المكانية in/auf مع حالة Dativ (im/in der)، والسؤال: Wo wohnst du?", keyWords: ["die Wohnung", "das Zimmer", "die Küche", "das Wohnzimmer", "das Schlafzimmer"] },
  { id: "a1-05", unitId: "a1-05", level: "A1", order: 1, titleDe: "Mein Tag", titleAr: "الحياة اليومية والروتين", duration: 30, summary: "الروتين اليومي، الأفعال المنفصلة (aufstehen, fernsehen...)، قراءة الساعة، وأوقات اليوم (am Morgen, am Abend)، والمدى الزمني von … bis (من … إلى).", keyWords: ["aufstehen", "frühstücken", "fernsehen", "einkaufen", "anfangen"] },
  { id: "a1-06", unitId: "a1-06", level: "A1", order: 1, titleDe: "Freizeit und Hobbys", titleAr: "أوقات الفراغ والهوايات", duration: 30, summary: "الحديث عن الهوايات مع gern، فعل mögen، وصيغة الأمر (Imperativ) بصورها الثلاث، وتغيّر الصوت في الأفعال الشاذة (essen→isst)، والأفعال الناقصة الأولى (können, möchte)، والماضي الأول (war, hatte).", keyWords: ["die Freizeit", "das Hobby", "gern", "Musik hören", "tanzen"] },
  { id: "a1-07", unitId: "a1-07", level: "A1", order: 1, titleDe: "Einkaufen", titleAr: "التسوق", duration: 30, summary: "الأرقام من 0 حتى 1000، قراءة الأسعار باليورو، أنماط جمع الأسماء الأساسية، وعبارات التسوق: Was kostet das? Ich nehme...", keyWords: ["kaufen", "kosten", "der Euro", "billig", "die Zahl"] },
  { id: "a1-08", unitId: "a1-08", level: "A1", order: 1, titleDe: "Kleidung und Farben", titleAr: "الملابس والألوان", duration: 30, summary: "أسماء الملابس والألوان، وصفها بالصفات الخبرية، فعل tragen (يرتدي)، والسؤال عن الرأي: Wie findest du...?", keyWords: ["die Kleidung", "das Hemd", "die Jacke", "das Kleid", "die Schuhe"] },
  { id: "a1-09", unitId: "a1-09", level: "A1", order: 1, titleDe: "Termine und der Kalender", titleAr: "المواعيد والتقويم", duration: 30, summary: "أيام الأسبوع والأشهر والفصول، الأعداد الترتيبية (der erste...)، وحروف الجر الزمنية am/um/in لترتيب المواعيد: Am Montag um neun Uhr.", keyWords: ["der Termin", "der Monat", "die Jahreszeit", "der Geburtstag", "am"] },
  { id: "a1-10", unitId: "a1-10", level: "A1", order: 1, titleDe: "Arbeit und Berufe", titleAr: "العمل والمهن", duration: 30, summary: "أسماء المهن وأشكالها المذكرة والمؤنثة، فعل arbeiten، والنفي بالألمانية: nicht مع الأفعال والصفات، kein مع الأسماء.", keyWords: ["der Beruf", "arbeiten", "der Lehrer", "der Arzt", "arbeiten als"] },
  { id: "a1-11", unitId: "a1-11", level: "A1", order: 1, titleDe: "In der Stadt", titleAr: "التنقل في المدينة", duration: 30, summary: "أماكن المدينة (Bahnhof, Supermarkt, Apotheke...)، السؤال عن الطريق، الاتجاهات (geradeaus, rechts, links)، والحركة: wohin? مع nach وzu.", keyWords: ["die Stadt", "der Bahnhof", "die Apotheke", "geradeaus", "nach"] },
  { id: "a1-12", unitId: "a1-12", level: "A1", order: 1, titleDe: "Wetter und Jahreszeiten", titleAr: "الطقس والفصول", duration: 30, summary: "الحديث عن الطقس: es ist kalt، عبارات المطر والشمس، فعل werden (يصبح) في المضارع — يكتمل به مثلث الأفعال المساعدة sein/haben/werden — وربط الطقس بالفصول.", keyWords: ["das Wetter", "die Sonne", "der Regen", "der Schnee", "kalt"] },
  { id: "a1-14", unitId: "a1-07", level: "A1", order: 2, titleDe: "Zahlen, Telefon und Adressen", titleAr: "الأرقام والهاتف والعناوين", duration: 30, summary: "الأرقام من 0 حتى 100 بثقة، قراءة أرقام الهاتف (رقم برقم)، فهم العناوين (الشارع، الرقم، الرمز البريدي، المدينة)، والسؤال عن رقم الهاتف: Wie ist deine Telefonnummer?", keyWords: ["die Zahl", "die Telefonnummer", "die Adresse", "die Straße", "die Postleitzahl"] },
  { id: "a1-13", unitId: "a1-13", level: "A1", order: 1, titleDe: "A1 kompakt — die große Wiederholung", titleAr: "A1 المراجعة الشاملة", duration: 35, summary: "المراجعة الختامية لمستوى A1: السلسلة الذهبية، sein/haben/werden، الأدوات والنصب، الأفعال المنفصلة، الأفعال الناقصة الأولى (kann, möchte, muss)، والماضي الأول (war, hatte) — مع اختبار تجميعي وتحضير مباشر لمستوى A2.", keyWords: ["die Wiederholung", "der Satz", "kombinieren", "die Prüfung", "die Brücke"] },
  { id: "a2-01", unitId: "a2-01", level: "A2", order: 1, titleDe: "Reisen und Urlaub", titleAr: "السفر والعطلات", duration: 35, summary: "الماضي التام (Perfekt): تركيبه بـ haben/sein + Partizip II، الأفعال الشاذة والقوية، وحكاية تجارب السفر: Ich bin nach Deutschland geflogen.", keyWords: ["der Urlaub", "die Reise", "fliegen", "das Flugzeug", "das Perfekt"] },
  { id: "a2-02", unitId: "a2-02", level: "A2", order: 1, titleDe: "Beim Arzt", titleAr: "الصحة والطبيب", duration: 35, summary: "أجزاء الجسم والأعراض، وصف الألم، فعل sollen (ينبغي) للنصيحة، وزيارة الطبيب: Ich habe Kopfschmerzen. Sie sollen viel trinken.", keyWords: ["der Körper", "der Kopf", "das Auge", "der Rücken", "die Schmerzen"] },
  { id: "a2-03", unitId: "a2-03", level: "A2", order: 1, titleDe: "Im Restaurant", titleAr: "المطعم والطعام", duration: 35, summary: "الطلب في المطعم بأدب: Ich möchte... ، أفعال الشرط möchten وkönnen، وصف الطعام بـ schmecken (الطعم)، وطلب الحساب.", keyWords: ["das Restaurant", "die Speisekarte", "bestellen", "möchten", "können"] },
  { id: "a2-04", unitId: "a2-04", level: "A2", order: 1, titleDe: "Wohnungssuche", titleAr: "البحث عن سكن", duration: 35, summary: "إعلانات العقارات، وصف الشقة، وحروف الجر المتغيرة (Wechselpräpositionen) التسعة: السكون Dativ والحركة Akkusativ، والعيش المشترك: الجيران ونظام البيت وأوقات الهدوء (Nachbarn, Hausordnung, Ruhezeiten).", keyWords: ["umziehen", "die Miete", "der Vermieter", "die Wechselpräpositionen", "stellen"] },
  { id: "a2-05", unitId: "a2-05", level: "A2", order: 1, titleDe: "Im Büro", titleAr: "في المكتب والعمل", duration: 35, summary: "الاتصالات الهاتفية والبريد الإلكتروني، الماضي البسيط (Präteritum) للأفعال المساعدة (war, hatte) والأفعال الشائعة، وتنسيق المواعيد مهنياً.", keyWords: ["das Büro", "anrufen", "der Kollege", "die Besprechung", "die E-Mail"] },
  { id: "a2-06", unitId: "a2-06", level: "A2", order: 1, titleDe: "Medien und Nachrichten", titleAr: "الإعلام والأخبار", duration: 35, summary: "وسائل الإعلام، التعبير عن الرأي، والجملة الثانوية بـ dass (أنّ): Ich glaube, dass... مع قاعدة الفعل في نهاية الجملة الثانوية.", keyWords: ["das Fernsehen", "die Zeitung", "das Internet", "die Nachrichten", "die Werbung"] },
  { id: "a2-07", unitId: "a2-07", level: "A2", order: 1, titleDe: "Bank und Geld", titleAr: "البنك والمال", duration: 35, summary: "معاملات البنك، es gibt + Akkusativ (يوجد)، ضمائر النصب والجر (mich/dich، mir/dir)، وطرق الدفع.", keyWords: ["das Konto", "das Geld", "überweisen", "bar zahlen", "der Geldautomat"] },
  { id: "a2-08", unitId: "a2-08", level: "A2", order: 1, titleDe: "Mobil sein", titleAr: "المواصلات والتنقل", duration: 35, summary: "شراء التذاكر وقراءة الجداول، المقارنة والتفضيل (Komparativ/Superlativ) مع الشواذ، ومقارنة وسائل النقل: Der Zug ist schneller als der Bus.", keyWords: ["die Fahrkarte", "der Zug", "umsteigen", "die Haltestelle", "hin und zurück"] },
  { id: "a2-09", unitId: "a2-09", level: "A2", order: 1, titleDe: "Feste und Feiern", titleAr: "المناسبات والاحتفالات", duration: 35, summary: "الدعوات والهدايا والمناسبات الألمانية، حالة الجر (Dativ) الكاملة مع أفعالها الخاصة (helfen, gefallen, gehören, gratulieren) وضمائرها.", keyWords: ["das Fest", "die Einladung", "feiern", "das Geschenk", "helfen"] },
  { id: "a2-10", unitId: "a2-10", level: "A2", order: 1, titleDe: "Lernen und Schule", titleAr: "المدرسة والتعلم", duration: 35, summary: "الدراسة والدورات، الجمل الثانوية weil (لأنّ) وwenn (إذا/عندما) وob (هل)، والضمائر الملكية في كل الحالات.", keyWords: ["der Kurs", "die Prüfung", "der Unterricht", "studieren", "weil"] },
  { id: "a2-11", unitId: "a2-11", level: "A2", order: 1, titleDe: "Dienstleistungen", titleAr: "الخدمات والمعاملات", duration: 35, summary: "البريد والحلاق والإصلاحات، الأفعال الانعكاسية (sich freuen, sich ärgern, sich anmelden) مع ضمائر mich/mir، وتقديم شكوى بأدب، وملء الاستمارات الرسمية (Formulare ausfüllen: Anmeldung, Angaben).", keyWords: ["die Post", "der Friseur", "reparieren", "sich freuen", "sich ärgern"] },
  { id: "a2-12", unitId: "a2-12", level: "A2", order: 1, titleDe: "Zwischenmenschliches", titleAr: "العلاقات بين الناس", duration: 35, summary: "المشاعر والآراء، أدوات الربط المزدوجة (und, aber, oder, denn, sondern, deshalb, trotzdem, dann) وقواعدها، والتعامل مع الخلافات بلطف — خاتمة مستوى A2.", keyWords: ["das Gefühl", "glücklich", "gestresst", "der Streit", "aber"] },
  { id: "b1-01", unitId: "b1-01", level: "B1", order: 1, titleDe: "Ausbildung und Studium", titleAr: "التعليم والدراسة", duration: 40, summary: "مقارنة الأنظمة التعليمية، حالة المضاف إليه (Genitiv) واستخداماتها، والجمل النسبية (Relativsätze) مع der/die/das.", keyWords: ["das Studium", "die Ausbildung", "das Fach", "der Genitiv", "wegen"] },
  { id: "b1-02", unitId: "b1-02", level: "B1", order: 1, titleDe: "Arbeitswelt", titleAr: "عالم العمل", duration: 40, summary: "الماضي البسيط الكامل (Präteritum) لكل الأفعال المنتظمة والشاذة، الماضي التام المركب (Plusquamperfekt)، وسرد تجربة العمل: Ich arbeitete, ich hatte gearbeitet.", keyWords: ["die Bewerbung", "der Lebenslauf", "das Vorstellungsgespräch", "die Erfahrung", "das Präteritum"] },
  { id: "b1-03", unitId: "b1-03", level: "B1", order: 1, titleDe: "Umwelt und Klima", titleAr: "البيئة والمناخ", duration: 40, summary: "مشاكل البيئة والحلول، المبني للمجهول (Passiv): werden + Partizip II في المضارع والماضي، وبدائله (man)، والتركيب المصدري (Infinitiv mit zu): Es ist wichtig, die Umwelt zu schützen.", keyWords: ["die Umwelt", "der Müll", "recyceln", "der Klimawandel", "das Passiv"] },
  { id: "b1-04", unitId: "b1-04", level: "B1", order: 1, titleDe: "Medien und Gesellschaft", titleAr: "الإعلام والمجتمع", duration: 40, summary: "النظر النقدي للإعلام، صيغة الشرط (Konjunktiv II): würde + Infinitiv والأفعال الشائعة (wäre, hätte, könnte) — للتمني والافتراض والتهذيب.", keyWords: ["der Konjunktiv II", "würde + Infinitiv", "wäre", "hätte", "könnte"] },
  { id: "b1-05", unitId: "b1-05", level: "B1", order: 1, titleDe: "Gesundheit und Prävention", titleAr: "الصحة والوقاية", duration: 40, summary: "الحياة الصحية والوقاية، صيغة الشرط المتقدمة (hätte/wäre + Partizip II)، والجمل الشرطية الكاملة: Wenn... dann... (لو... لـ...).", keyWords: ["die Gesundheit", "die Prävention", "fit", "trainieren", "als ob"] },
  { id: "b1-06", unitId: "b1-06", level: "B1", order: 1, titleDe: "Kultur und Kunst", titleAr: "الثقافة والفن", duration: 40, summary: "وصف الأعمال الفنية، تصريف الصفات الكامل (Adjektivdeklination) مع الأدوات المعرفة وغير المعرفة وبدون أداة، والمقارنة بين الثقافات، ومفهوم الوطن والهجرة وصدمات الثقافة (Heimat, Migration und Kulturschock).", keyWords: ["die Kultur", "die Kunst", "das Gemälde", "der Maler", "die Adjektivdeklination"] },
  { id: "b1-07", unitId: "b1-07", level: "B1", order: 1, titleDe: "Politik und Gesellschaft", titleAr: "السياسة والمجتمع", duration: 40, summary: "المفاهيم السياسية الأساسية، الجمل الثانوية الزمنية (als, wenn, während, bevor, nachdem, bis) والسببية (weil, da) والتخالفية (obwohl, obgleich) — الخريطة الكاملة للجمل الثانوية.", keyWords: ["die Politik", "die Regierung", "das Gesetz", "die Wahl", "als"] },
  { id: "b1-08", unitId: "b1-08", level: "B1", order: 1, titleDe: "Technik und Digitales", titleAr: "التقنية والرقمنة", duration: 40, summary: "التقنية في الحياة اليومية، الروابط المزدوجة (nicht nur... sondern auch, sowohl... als auch, weder... noch, entweder... oder, je... desto)، والمستقبل (Futur I) مع werden.", keyWords: ["die Technik", "die Zukunft", "die künstliche Intelligenz", "das Futur I"] },
  { id: "b1-09", unitId: "b1-09", level: "B1", order: 1, titleDe: "Soziales Engagement", titleAr: "العمل التطوعي والاجتماعي", duration: 40, summary: "العمل التطوعي والمشاريع الاجتماعية، الوصلات الاسمية-الفعلية (Nomen-Verb-Verbindungen): eine Frage stellen, Bescheid sagen — وتصريف n-Deklination.", keyWords: ["das Ehrenamt", "der Verein", "die Spende", "eine Frage stellen", "eine Entscheidung treffen"] },
  { id: "b1-10", unitId: "b1-10", level: "B1", order: 1, titleDe: "Zukunft und Pläne", titleAr: "المستقبل والخطط", duration: 40, summary: "التحدث عن خطط المستقبل، مراجعة شاملة لكل قواعد B1 (Genitiv، Relativsätze، Konjunktiv II، Passiv، Adjektivdeklination)، وخاتمة المستوى المتوسط.", keyWords: ["die Zukunft", "der Plan", "das Ziel", "sich bewerben", "die B1-Grammatik"] },
  { id: "b1-11", unitId: "b1-11", level: "B1", order: 1, titleDe: "B1 kompakt — Prüfungsvorbereitung", titleAr: "B1 الشامل — التحضير للامتحان", duration: 45, summary: "المراجعة الختامية لمستوى B1: دمج الجمل الموصولة وGenitiv وPassiv وKonjunktiv II في مواقف حية، مع محاكاة أقسام Goethe-B1 الأربعة وتدريب على وساطة وتفاعل حقيقيين.", keyWords: ["die Prüfung bestehen", "die Anmeldung", "die Vorbereitung", "Meiner Meinung nach", "das Beratungsgespräch"] },
  { id: "b2-01", unitId: "b2-01", level: "B2", order: 1, titleDe: "Wissenschaft und Forschung", titleAr: "العلوم والبحث", duration: 45, summary: "فهم الموضوعات العلمية وتقديم العروض، نقل الكلام غير المباشر (Konjunktiv I / indirekte Rede) بالكامل: er sagt, er habe... — ونقل الأقوال في الأخبار والتقارير، والاستخدام الذاتي للأفعال الناقصة للتخمين (dürfte, müsste, muss, könnte).", keyWords: ["die Wissenschaft", "die Forschung", "das Experiment", "der Beweis", "der Konjunktiv I"] },
  { id: "b2-02", unitId: "b2-02", level: "B2", order: 1, titleDe: "Wirtschaft und Finanzen", titleAr: "الاقتصاد والمالية", duration: 45, summary: "تحليل الأخبار الاقتصادية، المبني للمجهول المتقدم: Zustandspassiv (sein + Partizip II)، Passiv مع الأفعال الشرطية، وبدائله (sich lassen, -bar, man).", keyWords: ["die Wirtschaft", "der Umsatz", "die Inflation", "der Vertrag", "das Zustandspassiv"] },
  { id: "b2-03", unitId: "b2-03", level: "B2", order: 1, titleDe: "Recht und Alltag", titleAr: "القانون والحياة اليومية", duration: 45, summary: "المفاهيم القانونية الأساسية وفهم العقود، الجمل النسبية المتقدمة (مع حروف الجر: auf den, mit der, wofür) والضمائر النسبية was/wo.", keyWords: ["das Recht", "das Gesetz", "der Vertrag", "das Gericht", "auf den"] },
  { id: "b2-04", unitId: "b2-04", level: "B2", order: 1, titleDe: "Literatur und Medien", titleAr: "الأدب والإعلام المتقدم", duration: 45, summary: "النصوص الأدبية والمساهمات الإعلامية الراقية، الصفات المشتقة من الفعل (Partizipialkonstruktionen): das spielende Kind, der geschriebene Brief — واختصار الجمل النسبية.", keyWords: ["die Literatur", "der Roman", "das Gedicht", "der Autor", "das Partizip I"] },
  { id: "b2-05", unitId: "b2-05", level: "B2", order: 1, titleDe: "Psychologie und Kommunikation", titleAr: "علم النفس والتواصل", duration: 45, summary: "نماذج التواصل والجوانب النفسية، أدوات الربط المتقدمة (indem, anstatt...zu, ohne...zu, es sei denn, je nachdem, statt dass) + روابط النتيجة (folglich, demnach) — روابط المستوى المتقدم الكاملة، مع الجسيمات المشدِّدة (Modalpartikeln: doch, ja, mal, denn, eigentlich, wohl) لغة الألمان الطبيعية في المحادثة.", keyWords: ["die Kommunikation", "das Missverständnis", "zuhören", "das Verhalten", "indem"] },
  { id: "b2-06", unitId: "b2-06", level: "B2", order: 1, titleDe: "Beruf und Karriere", titleAr: "المسار المهني", duration: 45, summary: "المسارات المهنية والتفاوض، الاشتقاق الاسمي (Nominalisierung): beim Lesen, das Schreiben, zum Nachdenken — تحويل الأفعال والجمل إلى أسماء بأسلوب رسمي، والعمل المرن وعن بعد (Homeoffice, Gleitzeit) ومفرداته.", keyWords: ["die Karriere", "die Führungskraft", "verhandeln", "die Probezeit", "die Nominalisierung"] },
  { id: "b2-07", unitId: "b2-07", level: "B2", order: 1, titleDe: "Philosophie und Gesellschaft", titleAr: "الفلسفة والمجتمع", duration: 45, summary: "مناقشة الموضوعات المجردة وبناء الحجج، المستقبل التام (Futur II): werde + Partizip II + haben/sein — والكتابة الجدلية (Erörterung) بأسلوب أكاديمي.", keyWords: ["die Philosophie", "die These", "das Argument", "die Erörterung", "das Futur II"] },
  { id: "b2-08", unitId: "b2-08", level: "B2", order: 1, titleDe: "Sprachen und Kulturen", titleAr: "اللغات والتبادل الثقافي", duration: 45, summary: "الاختلافات بين الثقافات وتعدد اللغات، الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen): sich interessieren für, warten auf, sich freuen über/auf — وجدول كامل.", keyWords: ["die Sprache", "die Kultur", "der Austausch", "interkulturell", "sich interessieren für"] },
  { id: "b2-09", unitId: "b2-09", level: "B2", order: 1, titleDe: "Arbeitsmarkt und Bewerbung", titleAr: "سوق العمل والتقديم الوظيفي", duration: 45, summary: "ملفات التقديم ومقابلات العمل، الوصلات الاسمية-الفعلية المتقدمة (in Betracht ziehen, zur Verfügung stellen) والمراسلات الرسمية الكاملة بأسلوب أكاديمي.", keyWords: ["der Arbeitsmarkt", "die Stelle", "das Anschreiben", "in Betracht ziehen", "zur Verfügung stellen"] },
  { id: "b2-10", unitId: "b2-10", level: "B2", order: 1, titleDe: "Studium in Deutschland", titleAr: "الدراسة في ألمانيا", duration: 45, summary: "النظام الجامعي والكتابة الأكاديمية (Fachsprache)، أساليب التأكيد والتلطيف والتحفظ، ومراجعة شاملة تجمع كل قواعد B2 — خاتمة المستويات الأربعة!", keyWords: ["das Studium", "die Hausarbeit", "das Seminar", "die Fachsprache", "meiner Ansicht nach"] },

];

/** الفهرس المُصدَّر — مرتَّب دائماً بترتيب المسار التعليمي */
export const LESSON_META: LessonMeta[] = sortLessonMeta(LESSON_META_SOURCE);

/** إيجاد درس بمعرّفه (من الفهرس الخفيف) */
export function getLessonMeta(id: string): LessonMeta | undefined {
  return LESSON_META.find((l) => l.id === id);
}

/** أول درس في وحدة (لروابط خارطة الطريق) */
export function getFirstLessonMetaForUnit(unitId: string): LessonMeta | undefined {
  return LESSON_META.find((l) => l.unitId === unitId);
}

/** عدد دروس وحدة (لفحص الوجود في صفحات الاختبار) */
export function getLessonCountForUnit(unitId: string): number {
  return LESSON_META.filter((l) => l.unitId === unitId).length;
}

/** كل دروس مستوى (بيانات وصفية) */
export function getLessonMetaByLevel(level: string): LessonMeta[] {
  return LESSON_META.filter((l) => l.level === level);
}

export const TOTAL_LESSONS_META = LESSON_META.length;

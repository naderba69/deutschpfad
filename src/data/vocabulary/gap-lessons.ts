import type {VocabEntry} from "@/types/lesson";

/**
 * مفردات دروس B1/B2 التي لا يغطيها بنك المفردات (B1_VOCAB / B2_VOCAB).
 * كتابة أصلية لهذا المشروع. هذه الدروس غير موجودة في `BANK_LESSON_IDS`،
 * فلا تتكرر مع البنك.
 *
 * ملاحظة قواعدية: dessen/deren يطابقان الشيء المملوك، لا الشخص المذكور
 * (مثال: die Frau, deren Tochter … — لأن Tochter مؤنث).
 */
export const GAP_LESSON_VOCAB: Record<string, VocabEntry[]> = {
  "b1-12": [
    {de: "der Grund", ar: "السبب", exampleDe: "Was ist der Grund für deine Entscheidung?", exampleAr: "ما سبب قرارك؟"},
    {de: "die Absicht", ar: "النية", exampleDe: "Ich habe die Absicht, nächstes Jahr umzuziehen.", exampleAr: "أنوي الانتقال إلى مكان آخر العام القادم."},
    {de: "das Ziel", ar: "الهدف", exampleDe: "Mein Ziel ist es, im Sommer B1 zu erreichen.", exampleAr: "هدفي أن أصل إلى B1 في الصيف."},
    {de: "der Zweck", ar: "الغرض", exampleDe: "Zu welchem Zweck reisen Sie nach Deutschland?", exampleAr: "لأي غرض تسافر إلى ألمانيا؟"},
    {de: "damit", ar: "حتى / لكي", exampleDe: "Ich lerne jeden Tag, damit ich bald flüssiger spreche.", exampleAr: "أتعلم كل يوم حتى أتحدث بطلاقة قريباً."},
    {de: "um … zu", ar: "من أجل أن (مع فاعل واحد)", exampleDe: "Ich spare Geld, um eine Reise zu machen.", exampleAr: "أدّخر المال من أجل القيام برحلة."},
    {de: "wegen", ar: "بسبب", exampleDe: "Wegen des Regens bleiben wir zu Hause.", exampleAr: "بسبب المطر نبقى في البيت."},
    {de: "trotz", ar: "رغم", exampleDe: "Trotz des Regens gehen wir spazieren.", exampleAr: "رغم المطر نخرج للمشي."},
    {de: "während", ar: "أثناء", exampleDe: "Während der Pause trinke ich einen Kaffee.", exampleAr: "أثناء الاستراحة أشرب قهوة."},
    {de: "aufgrund", ar: "بسبب (أسلوب رسمي)", exampleDe: "Aufgrund der Baustelle ist die Straße gesperrt.", exampleAr: "بسبب أعمال البناء الطريق مغلق."},
  ],
  "b2-11": [
    {de: "die Zugehörigkeit", ar: "الانتماء", exampleDe: "Das Gefühl der Zugehörigkeit ist im Team wichtig.", exampleAr: "الإحساس بالانتماء مهم داخل الفريق."},
    {de: "das Relativpronomen", ar: "الضمير النسبي", exampleDe: "Dessen und deren sind Relativpronomen im Genitiv.", exampleAr: "dessen و deren ضميران نسبيان في حالة الجر."},
    {de: "der Besitz", ar: "الملكية", exampleDe: "Das Haus ist in seinem Besitz.", exampleAr: "البيت في ملكيته."},
    {de: "dessen", ar: "الذي / التي له (مذكر أو محايد)", exampleDe: "Das ist der Nachbar, dessen Hund immer bellt.", exampleAr: "هذا الجار الذي كلبه ينبح دائماً."},
    {de: "deren", ar: "التي / الذي لها (مؤنث أو جمع)", exampleDe: "Das ist die Frau, deren Tochter Ärztin ist.", exampleAr: "هذه المرأة التي ابنتها طبيبة."},
    {de: "das Modalverb", ar: "الفعل المودال", exampleDe: "Können, müssen und dürfen sind Modalverben.", exampleAr: "können و müssen و dürfen أفعال مودال."},
    {de: "der Infinitiv", ar: "المصدر", exampleDe: "Im Perfekt steht der doppelte Infinitiv am Ende.", exampleAr: "في الماضي المركب يقع المصدر المزدوج في آخر الجملة."},
    {de: "lassen", ar: "يطلب من غيره أن يفعل", exampleDe: "Ich lasse mein Fahrrad reparieren.", exampleAr: "أطلب من غيري أن يُصلح دراجتي."},
    {de: "reparieren", ar: "يُصلح", exampleDe: "Der Techniker kann das Gerät reparieren.", exampleAr: "يستطيع الفني إصلاح الجهاز."},
    {de: "die Werkstatt", ar: "الورشة", exampleDe: "Mein Auto ist gerade in der Werkstatt.", exampleAr: "سيارتي في الورشة الآن."},
  ],
  "b2-12": [
    {de: "die Beförderung", ar: "الترقية", exampleDe: "Er hat eine Beförderung zum Teamleiter bekommen.", exampleAr: "حصل على ترقية إلى رئيس فريق."},
    {de: "die Weiterbildung", ar: "التدريب المستمر", exampleDe: "Die Firma bezahlt die Weiterbildung ihrer Mitarbeiter.", exampleAr: "تدفع الشركة تكاليف التدريب المستمر لموظفيها."},
    {de: "die Führungskraft", ar: "القيادي / المدير", exampleDe: "Gute Führungskräfte hören gut zu.", exampleAr: "القادة الجيدون يستمعون جيداً."},
    {de: "die Verantwortung", ar: "المسؤولية", exampleDe: "Ich übernehme die Verantwortung für dieses Projekt.", exampleAr: "أتحمل مسؤولية هذا المشروع."},
    {de: "der Lebenslauf", ar: "السيرة الذاتية", exampleDe: "Bitte schicken Sie Ihren Lebenslauf mit einem Foto.", exampleAr: "من فضلك أرسل سيرتك الذاتية مع صورة."},
    {de: "der Abschluss", ar: "الشهادة الجامعية أو المهنية", exampleDe: "Ihr Abschluss wird in Deutschland anerkannt.", exampleAr: "شهادتك تُعترف بها في ألمانيا."},
    {de: "sich bewerben (um)", ar: "يتقدّم لوظيفة", exampleDe: "Ich bewerbe mich um eine Stelle als Ingenieurin.", exampleAr: "أتقدم لوظيفة مهندسة."},
    {de: "die Bewerbung", ar: "طلب التوظيف", exampleDe: "Die Bewerbung muss bis Freitag eingereicht werden.", exampleAr: "يجب تقديم طلب التوظيف حتى يوم الجمعة."},
    {de: "der Konjunktiv II", ar: "صيغة الشرط والتمني المهذب", exampleDe: "Ich hätte gern mehr Verantwortung.", exampleAr: "كنت أود أن أتحمل مسؤولية أكبر."},
    {de: "der Aufstieg", ar: "التقدم المهني", exampleDe: "Der berufliche Aufstieg braucht Geduld.", exampleAr: "التقدم المهني يحتاج إلى صبر."},
  ],
  "b2-13": [
    {de: "die Digitalisierung", ar: "الرقمنة", exampleDe: "Die Digitalisierung verändert viele Berufe.", exampleAr: "الرقمنة تغيّر مهناً كثيرة."},
    {de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", exampleDe: "Künstliche Intelligenz hilft bei der Übersetzung.", exampleAr: "يساعد الذكاء الاصطناعي في الترجمة."},
    {de: "der Datenschutz", ar: "حماية البيانات", exampleDe: "Der Datenschutz ist in der EU streng geregelt.", exampleAr: "حماية البيانات منظّمة بصرامة في الاتحاد الأوروبي."},
    {de: "die Cybersicherheit", ar: "الأمن السيبراني", exampleDe: "Die Cybersicherheit der Firma wurde verbessert.", exampleAr: "تم تحسين الأمن السيبراني للشركة."},
    {de: "die Automatisierung", ar: "الأتمتة", exampleDe: "Die Automatisierung der Produktion spart Zeit.", exampleAr: "أتمتة الإنتاج توفّر الوقت."},
    {de: "nachvollziehbar", ar: "مفهوم ويمكن تتبّعه", exampleDe: "Die Entscheidung ist für mich nachvollziehbar.", exampleAr: "القرار مفهوم بالنسبة لي."},
    {de: "obwohl", ar: "مع أنّ", exampleDe: "Obwohl die KI schnell ist, braucht sie Kontrolle.", exampleAr: "مع أن الذكاء الاصطناعي سريع، يحتاج إلى مراقبة."},
    {de: "dennoch", ar: "ومع ذلك", exampleDe: "Die Software ist teuer; dennoch kaufen wir sie.", exampleAr: "البرنامج غالٍ، ومع ذلك نشتريه."},
    {de: "zwar … aber", ar: "صحيح أن … لكنّ", exampleDe: "Das System ist zwar schnell, aber nicht fehlerfrei.", exampleAr: "صحيح أن النظام سريع، لكنه ليس خالياً من الأخطاء."},
    {de: "die Software", ar: "البرمجية", exampleDe: "Die neue Software ist leicht zu bedienen.", exampleAr: "البرمجية الجديدة سهلة الاستعمال."},
  ],
};

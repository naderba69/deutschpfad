import type {VocabEntry} from "@/types/lesson";

/**
 * مفردات دروس A1 التي لا يغطيها بنك المفردات (A1_VOCAB).
 * كتابة أصلية لهذا المشروع. الدرس الذي له قائمة هنا يُقدَّم بها بدل البنك.
 */
export const A1_EXTRA_LESSON_VOCAB: Record<string, VocabEntry[]> = {
  "a1-00": [
    {de: "der Buchstabe", ar: "الحرف", exampleDe: "Das ist ein Buchstabe.", exampleAr: "هذا حرف."},
    {de: "buchstabieren", ar: "يهجّئ حرفاً حرفاً", exampleDe: "Bitte buchstabieren Sie Ihren Namen.", exampleAr: "من فضلك هجِّ اسمك حرفاً حرفاً."},
    {de: "aussprechen", ar: "ينطق", exampleDe: "Wie spricht man dieses Wort aus?", exampleAr: "كيف تُنطق هذه الكلمة؟"},
    {de: "der Laut", ar: "الصوت", exampleDe: "Dieser Laut ist neu für mich.", exampleAr: "هذا الصوت جديد بالنسبة لي."},
    {de: "der Umlaut", ar: "الحرف المعدَّل الصوت (ä, ö, ü)", exampleDe: "Ä, Ö und Ü sind Umlaute.", exampleAr: "Ä وÖ وÜ حروف معدّلة الصوت."},
    {de: "das ß", ar: "حرف ß (Eszett)", exampleDe: "Das ß ist ein besonderer Buchstabe.", exampleAr: "ß حرف خاص في الألمانية."},
    {de: "die Silbe", ar: "المقطع", exampleDe: "Das Wort hat zwei Silben.", exampleAr: "هذه الكلمة فيها مقطعان."},
    {de: "wiederholen", ar: "يكرّر", exampleDe: "Bitte wiederholen Sie.", exampleAr: "من فضلك كرّر."},
  ],
  "a1-01b": [
    {de: "wer", ar: "من", exampleDe: "Wer ist das?", exampleAr: "من هذا؟"},
    {de: "was", ar: "ماذا", exampleDe: "Was machst du heute?", exampleAr: "ماذا تفعل اليوم؟"},
    {de: "wo", ar: "أين", exampleDe: "Wo wohnst du?", exampleAr: "أين تسكن؟"},
    {de: "wann", ar: "متى", exampleDe: "Wann kommst du?", exampleAr: "متى تأتي؟"},
    {de: "wie", ar: "كيف", exampleDe: "Wie geht es dir?", exampleAr: "كيف حالك؟"},
    {de: "wohin", ar: "إلى أين", exampleDe: "Wohin fährst du?", exampleAr: "إلى أين تذهب؟"},
    {de: "das Fragewort", ar: "أداة الاستفهام", exampleDe: "„Wer“ ist ein Fragewort.", exampleAr: "«Wer» أداة استفهام."},
    {de: "fragen", ar: "يسأل", exampleDe: "Ich frage den Lehrer.", exampleAr: "أسأل المعلم."},
    {de: "antworten", ar: "يجيب", exampleDe: "Bitte antworten Sie auf die Frage.", exampleAr: "من فضلك أجب عن السؤال."},
    {de: "arbeiten", ar: "يعمل", exampleDe: "Ich arbeite in Tunis.", exampleAr: "أعمل في تونس."},
    {de: "gehen", ar: "يذهب مشياً", exampleDe: "Wir gehen ins Kino.", exampleAr: "نذهب إلى السينما."},
  ],
  "a1-14": [
    {de: "machen → gemacht", ar: "فعل", exampleDe: "Was hast du gestern gemacht?", exampleAr: "ماذا فعلتَ البارحة؟"},
    {de: "lernen → gelernt", ar: "تعلّم", exampleDe: "Ich habe Deutsch gelernt.", exampleAr: "لقد تعلّمتُ الألمانية."},
    {de: "kaufen → gekauft", ar: "اشترى", exampleDe: "Wir haben Brot gekauft.", exampleAr: "لقد اشترينا خبزاً."},
    {de: "sehen → gesehen", ar: "رأى / شاهد", exampleDe: "Ich habe einen Film gesehen.", exampleAr: "لقد شاهدتُ فيلماً."},
    {de: "essen → gegessen", ar: "أكل", exampleDe: "Hast du schon gegessen?", exampleAr: "هل أكلتَ بالفعل؟"},
    {de: "trinken → getrunken", ar: "شرب", exampleDe: "Er hat Tee getrunken.", exampleAr: "لقد شرب شاياً."},
    {de: "schreiben → geschrieben", ar: "كتب", exampleDe: "Sie hat eine E-Mail geschrieben.", exampleAr: "لقد كتبت رسالة إلكترونية."},
    {de: "besuchen → besucht", ar: "زار", exampleDe: "Ich habe meine Oma besucht.", exampleAr: "لقد زرتُ جدتي."},
    {de: "haben → gehabt", ar: "كان لديه / عاش", exampleDe: "Wir haben viel Spaß gehabt.", exampleAr: "لقد قضينا وقتاً ممتعاً."},
    {de: "fahren → gefahren (mit sein)", ar: "ذهب / سافر (مع sein)", exampleDe: "Ich bin mit dem Bus gefahren.", exampleAr: "لقد ركبتُ الحافلة."},
    {de: "gehen → gegangen (mit sein)", ar: "ذهب مشياً (مع sein)", exampleDe: "Wir sind nach Hause gegangen.", exampleAr: "لقد عدنا إلى البيت."},
    {de: "kommen → gekommen (mit sein)", ar: "جاء (مع sein)", exampleDe: "Er ist gestern spät gekommen.", exampleAr: "لقد جاء متأخراً البارحة."},
    {de: "sein → gewesen (mit sein)", ar: "كان", exampleDe: "Ich bin in Sousse gewesen.", exampleAr: "لقد كنتُ في سوسة."},
  ],
};

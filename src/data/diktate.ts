/**
 * ═══════════════════════════════════════════════════════════
 *  بنك تمارين الإملاء (Diktate) — A1 → B2
 *  كل مستوى: جمل إملاء قصيرة مناسبة (استمع واكتب)
 *  — توسيع اقتراح المرحلة النهائية: تمارين إملاء لكل مستوى —
 * ═══════════════════════════════════════════════════════════
 */

export interface Diktat {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  /** الجملة التي تُسمع */
  text: string;
  /** ترجمة عربية */
  ar: string;
  /** كلمات صعبة إملائياً (تلميح) */
  focusWords: string[];
  /** ملاحظة تعليمية */
  note: string;
}

export const DIKTATE: Diktat[] = [
  /* ── A1 ── */
  { id: "dk-a1-1", level: "A1", text: "Guten Tag! Ich heiße Mona und komme aus Tunesien.", ar: "طاب يومك! اسمي منى وأنا من تونس.", focusWords: ["heiße", "komme"], note: "الحرف ß في heiße يُستبدل بـ ss إذا لم يتوفر على لوحة المفاتيح." },
  { id: "dk-a1-2", level: "A1", text: "Meine Familie ist groß und wir essen zusammen.", ar: "عائلتي كبيرة ونأكل معاً.", focusWords: ["Familie", "zusammen"], note: "Familie بحرف F كبير (اسم)." },
  { id: "dk-a1-3", level: "A1", text: "Ich wohne in Berlin und arbeite in einer Schule.", ar: "أسكن في برلين وأعمل في مدرسة.", focusWords: ["wohne", "Schule"], note: "Berlin اسم مدينة — حرف كبير." },
  { id: "dk-a1-4", level: "A1", text: "Am Montag gehe ich ins Kino und am Dienstag in die Stadt.", ar: "الاثنين أذهب للسينما والثلاثاء إلى المدينة.", focusWords: ["Montag", "Dienstag", "Kino"], note: "أيام الأسبوع بأحرف كبيرة." },
  { id: "dk-a1-5", level: "A1", text: "Das Wetter ist heute schön, die Sonne scheint.", ar: "الطقس جميل اليوم، الشمس مشرقة.", focusWords: ["Wetter", "Sonne", "scheint"], note: "schön بـ ö، و scheint (تشرق) بـ ei." },
  { id: "dk-a1-6", level: "A1", text: "Ich habe zwei Brüder und eine Schwester.", ar: "عندي أخوان وأخت.", focusWords: ["Brüder", "Schwester"], note: "Brüder بـ ü (جمع Bruder)، و Schwester بـ sch ثم w." },
  { id: "dk-a1-7", level: "A1", text: "Am Abend trinken wir Tee und lesen ein Buch.", ar: "في المساء نشرب الشاي ونقرأ كتاباً.", focusWords: ["Abend", "Tee"], note: "Abend اسم فيكتب بحرف A كبير، و Tee فيه ee طويلة." },
  /* ── A2 ── */
  { id: "dk-a2-1", level: "A2", text: "Gestern bin ich mit dem Zug nach München gefahren.", ar: "أمس سافرت بالقطار إلى ميونخ.", focusWords: ["Gestern", "Zug", "München", "gefahren"], note: "ماضي الحركة مع sein: bin gefahren." },
  { id: "dk-a2-2", level: "A2", text: "Ich habe gestern einen sehr interessanten Film gesehen.", ar: "شاهدت أمس فيلماً مثيراً جداً.", focusWords: ["interessanten", "gesehen"], note: "einen interessanten Film — نصب مذكر مع تنوين." },
  { id: "dk-a2-3", level: "A2", text: "Kannst du mir bitte das Salz geben?", ar: "هل يمكنك إعطائي الملح من فضلك؟", focusWords: ["Kannst", "Salz"], note: "mir = Dativ (لي)." },
  { id: "dk-a2-4", level: "A2", text: "Wir treffen uns am Freitag um zehn Uhr vor dem Bahnhof.", ar: "نتقابل الجمعة العاشرة أمام المحطة.", focusWords: ["Freitag", "Bahnhof"], note: "vor dem Bahnhof — vor + Dativ (مكان ثابت)." },
  { id: "dk-a2-5", level: "A2", text: "Der Kaffee schmeckt mir sehr gut, aber er ist heiß.", ar: "مذاق القهوة طيب جداً بالنسبة إليّ، لكنها ساخنة.", focusWords: ["schmeckt", "heiß"], note: "schmecken + Dativ (mir). heiß بـ ei." },
  { id: "dk-a2-6", level: "A2", text: "Ich möchte bitte einen Termin für nächste Woche machen.", ar: "أريد من فضلك موعداً للأسبوع القادم.", focusWords: ["möchte", "Termin", "nächste"], note: "möchte بـ ö و ch في وسطها، و Termin اسم فيُكتب بحرف T كبير." },
  { id: "dk-a2-7", level: "A2", text: "Wir haben die Wohnung im dritten Stock gefunden.", ar: "وجدنا الشقة في الطابق الثالث.", focusWords: ["Wohnung", "dritten", "Stock"], note: "Stock ينتهي بـ ck (لا k وحدها)، و dritten فيها tt لأن الحركة قبلها قصيرة." },
  /* ── B1 ── */
  { id: "dk-b1-1", level: "B1", text: "Obwohl das Wetter schlecht war, sind wir spazieren gegangen.", ar: "رغم سوء الطقس ذهبنا في نزهة.", focusWords: ["Obwohl", "spazieren gegangen"], note: "Obwohl + فعل في النهاية. Perfekt: sind gegangen." },
  { id: "dk-b1-2", level: "B1", text: "Ich wusste nicht, dass die Prüfung schon nächste Woche ist.", ar: "لم أكن أعلم أن الامتحان الأسبوع القادم.", focusWords: ["wusste", "dass", "Prüfung"], note: "dass + جملة ثانوية (فعل في النهاية). wusste = Präteritum من wissen." },
  { id: "dk-b1-3", level: "B1", text: "Meiner Meinung nach sollte man mehr auf die Gesundheit achten.", ar: "في رأيي ينبغي الاهتمام بالصحة أكثر.", focusWords: ["Meiner Meinung nach", "Gesundheit", "achten"], note: "Meiner Meinung nach في أول الجملة يتبعها الفعل مباشرة." },
  { id: "dk-b1-4", level: "B1", text: "Wenn ich mehr Zeit hätte, würde ich ein Buch schreiben.", ar: "لو كان عندي وقت أكثر لكتبت كتاباً.", focusWords: ["hätte", "würde", "Buch"], note: "Konjunktiv II: hätte / würde schreiben." },
  { id: "dk-b1-5", level: "B1", text: "Die Firma, in der ich arbeite, ist sehr erfolgreich.", ar: "الشركة التي أعمل فيها ناجحة جداً.", focusWords: ["Firma", "erfolgreich"], note: "جملة نسبية مع حرف جر: in der ich arbeite." },
  { id: "dk-b1-7", level: "B1", text: "Obwohl es kalt war, sind wir zum Strand gefahren.", ar: "رغم البرد ذهبنا إلى الشاطئ.", focusWords: ["Obwohl", "Strand", "gefahren"], note: "Strand يُنطق في آخره t لكنه يُكتب d، و Obwohl يبدأ بحرف كبير لأنه أول الجملة." },
  { id: "dk-b1-8", level: "B1", text: "Ich glaube, dass der Film morgen beginnt.", ar: "أعتقد أن الفيلم يبدأ غداً.", focusWords: ["glaube", "dass", "beginnt"], note: "dass بحرف ss في الإملاء الحديث (أداة الوصل)، والفعل beginnt في آخر الجملة الثانوية." },
  /* ── B2 ── */
  { id: "dk-b2-1", level: "B2", text: "Die Studie zeigt, dass regelmäßige Bewegung das Risiko von Krankheiten reduziert.", ar: "تظهر الدراسة أن الحركة المنتظمة تقلل خطر الأمراض.", focusWords: ["Studie", "regelmäßige", "Krankheiten", "reduziert"], note: "dass + Konjunktiv محتمل في النقل: reduziere (أو reduziert)." },
  { id: "dk-b2-2", level: "B2", text: "Der Professor behauptet, die Ergebnisse seien noch nicht veröffentlicht worden.", ar: "يزعم الأستاذ أن النتائج لم تُنشر بعد.", focusWords: ["behauptet", "Ergebnisse", "veröffentlicht"], note: "Konjunktiv I: seien veröffentlicht worden (مجهول ماضٍ منقول)." },
  { id: "dk-b2-3", level: "B2", text: "Es lässt sich nicht leugnen, dass die Digitalisierung unseren Alltag verändert hat.", ar: "لا يمكن إنكار أن الرقمنة غيّرت حياتنا اليومية.", focusWords: ["leugnen", "Digitalisierung", "verändert"], note: "sich lassen + مصدر = بديل المجهول: Es lässt sich nicht leugnen." },
  { id: "dk-b2-4", level: "B2", text: "Aufgrund der steigenden Kosten müssen wir unsere Strategie überdenken.", ar: "بسبب التكاليف المتصاعدة يجب إعادة التفكير في استراتيجيتنا.", focusWords: ["Aufgrund", "steigenden", "Strategie", "überdenken"], note: "Aufgrund + Genitiv: der steigenden Kosten." },
  { id: "dk-b2-5", level: "B2", text: "Zusammenfassend lässt sich sagen, dass die Vorteile die Nachteile überwiegen.", ar: "خلاصةً يمكن القول إن المزايا تفوق العيوب.", focusWords: ["Zusammenfassend", "Vorteile", "Nachteile", "überwiegen"], note: "Zusammenfassend في البداية — عبارة ختامية B2." },
  { id: "dk-b2-6", level: "B2", text: "Die Ergebnisse der Studie wurden gestern veröffentlicht.", ar: "نُشرت نتائج الدراسة أمس.", focusWords: ["Ergebnisse", "veröffentlicht", "wurden"], note: "veröffentlicht بالبادئة ver- غير المنفصلة، و ö في الوسط، و wurden للمبني للمجهول في الماضي." },
  { id: "dk-b2-7", level: "B2", text: "Trotz des schlechten Wetters haben wir eine Wanderung gemacht.", ar: "رغم سوء الطقس قمنا بنزهة مشي.", focusWords: ["Trotz", "schlechten", "Wanderung"], note: "schlechten: ch بعد e وتنتهي بـ en. و Wanderung: فيها nd ثم ung." },
];

export const DIKTAT_LEVELS: ("A1" | "A2" | "B1" | "B2")[] = ["A1", "A2", "B1", "B2"];

export function getDiktateByLevel(level: string): Diktat[] {
  return DIKTATE.filter((d) => d.level === level);
}

export const TOTAL_DIKTATE = DIKTATE.length;

/**
 * تمرين الهملات والحرف ß — أصعب الأصوات للمتعلم العربي
 * كل عنصر: كلمة ألمانية بصوتها + 4 خيارات كتابة متشابهة (الصحيح + 3 أخطاء شائعة)
 */

export interface UmlautItem {
  de: string;
  ar: string;
  options: string[];
  correct: number; // فهرس الإجابة الصحيحة
}

export const UMLAUT_ITEMS: UmlautItem[] = [
  // ── ä ──
  { de: "Mädchen", ar: "فتاة", options: ["Mädchen", "Madchen", "Maedchen", "Medchen"], correct: 0 },
  { de: "Bär", ar: "دب", options: ["Bär", "Bar", "Ber", "Baer"], correct: 0 },
  { de: "Käse", ar: "جبن", options: ["Käse", "Kase", "Kese", "Kaese"], correct: 0 },
  { de: "spät", ar: "متأخر", options: ["spät", "spat", "spet", "speat"], correct: 0 },
  { de: "König", ar: "ملك", options: ["König", "Konig", "Kenig", "Koenig"], correct: 0 },
  // ── ö ──
  { de: "Höhe", ar: "ارتفاع", options: ["Höhe", "Hohe", "Hehe", "Hoehe"], correct: 0 },
  { de: "Möwe", ar: "نورس", options: ["Möwe", "Mowe", "Mewe", "Moeve"], correct: 0 },
  { de: "größer", ar: "أكبر", options: ["größer", "grosser", "grösser", "groser"], correct: 0 },
  // ── ü ──
  { de: "fühlen", ar: "يشعر", options: ["fühlen", "fuhlen", "fehlen", "fuehlen"], correct: 0 },
  { de: "Mühe", ar: "جهد", options: ["Mühe", "Muhe", "Mehe", "Muehe"], correct: 0 },
  { de: "Tür", ar: "باب", options: ["Tür", "Tur", "Ter", "Tuer"], correct: 0 },
  { de: "glücklich", ar: "سعيد", options: ["glücklich", "glucklich", "glecklich", "gluecklich"], correct: 0 },
  // ── ß ──
  { de: "Fuß", ar: "قدم", options: ["Fuß", "Fuss", "Fus", "Fuess"], correct: 0 },
  { de: "heißen", ar: "يُدعى", options: ["heißen", "heissen", "heisen", "heisen"], correct: 0 },
  { de: "Straße", ar: "شارع", options: ["Straße", "Strasse", "Strase", "Sträße"], correct: 0 },
  { de: "groß", ar: "كبير", options: ["groß", "gross", "gros", "groeß"], correct: 0 },
];

/** خلط بسيط (نسخة من دون تعديل الأصل) */
export function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

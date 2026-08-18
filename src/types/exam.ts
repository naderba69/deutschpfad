/**
 * أنواع محرك امتحان Goethe-Zertifikat B2 الرسمي (صيغة 2019+)
 * — بنية موحدة للأجزاء الخمسة للقراءة والأربعة للاستماع —
 * المدة والدرجات من وثائق Goethe-Institut الرسمية.
 */

export type ExamModule = "lesen" | "hören" | "schreiben" | "sprechen";

/* ═══════════ أسئلة القراءة ═══════════ */

/** Zuordnung (Teil 1/4): نص ← فئة/عنوان */
export interface ExamZuordnungItem {
  id: string;
  de: string;
  ar?: string;
  /** معرّف الفئة الصحيحة */
  categoryId: string;
}

export interface ExamZuordnungCategory {
  id: string;
  de: string;
  ar?: string;
}

/** Richtig/Falsch (Hören Teil 1): حوار + عبارات */
export interface ExamStatement {
  id: string;
  de: string;
  ar?: string;
  isTrue: boolean;
  whyAr: string;
}

/** MCQ عادي */
export interface ExamMcq {
  id: string;
  q: string;
  qAr?: string;
  options: string[];
  correct: number;
  whyAr?: string;
}

/** الفقرات الناقصة (Lesen Teil 3): نص + بنك جمل */
export interface ExamGapText {
  textWithGaps: string;
  textAr?: string;
  sentenceBank: { id: string; de: string }[];
  gapOrder: string[];
}

/** جزء واحد من القراءة */
export interface ExamLesenTeil {
  teil: 1 | 2 | 3 | 4 | 5;
  title: string;
  titleAr: string;
  minutes: number;
  points: number;
  kind: "zuordnung" | "mcq" | "gap" | "rf";
  /** Zuordnung */
  categories?: ExamZuordnungCategory[];
  items?: ExamZuordnungItem[];
  allowRepeat?: boolean;
  /** MCQ / نص */
  text?: string;
  textAr?: string;
  questions?: ExamMcq[];
  /** Gap */
  gap?: ExamGapText;
  /** Richtig/Falsch */
  statements?: ExamStatement[];
  introAr: string;
}

/* ═══════════ أسئلة الاستماع ═══════════ */

export interface ExamHoerenTeil {
  teil: 1 | 2 | 3 | 4;
  title: string;
  titleAr: string;
  minutes: number;
  points: number;
  kind: "rf" | "mcq" | "zuordnung";
  /** نص يُقرأ صوتياً (TTS) */
  audioText: string;
  audioAr?: string;
  /** Richtig/Falsch (Teil 1) */
  statements?: ExamStatement[];
  /** MCQ (Teil 2/4) */
  questions?: ExamMcq[];
  /** Zuordnung (Teil 3) */
  categories?: ExamZuordnungCategory[];
  items?: ExamZuordnungItem[];
  allowRepeat?: boolean;
  introAr: string;
}

/* ═══════════ الكتابة ═══════════ */

export interface ExamSchreibaufgabe {
  teil: 1 | 2;
  title: string;
  titleAr: string;
  minutes: number;
  points: number;
  /** نص المهمة الألماني الرسمي */
  aufgabeDe: string;
  aufgabeAr: string;
  /** الحد الأدنى من الكلمات (الرسمي: 150 / 100) */
  minWords: number;
  /** نقاط يجب تغطيتها */
  requires: { de: string; ar: string }[];
  /** بنية مقترحة */
  struktur: string[];
  /** عبارات مساعدة */
  redemittel: string[];
}

export const EXAM_WRITING_RUBRIC = [
  { name: "Erfüllung", ar: "إنجاز المهمة (الغرض + الجوانب المطلوبة)", max: 25 },
  { name: "Kohärenz", ar: "الترابط والتنظيم (الروابط المنطقية)", max: 25 },
  { name: "Wortschatz", ar: "المفردات (التنوع والدقة والملاءمة B2)", max: 25 },
  { name: "Struktur", ar: "البنية النحوية (الصحة والتنوع)", max: 25 },
] as const;

/* ═══════════ التحدث ═══════════ */

export interface ExamSprechenVortrag {
  id: string;
  topicDe: string;
  topicAr: string;
  /** الأسئلة الإرشادية الرسمية (Leitfragen) */
  leitfragen: string[];
}

export interface ExamSprechenDiskussion {
  id: string;
  themaDe: string;
  themaAr: string;
  /** موقف المتعلم */
  positionAr: string;
  pro: string[];
  kontra: string[];
}

export interface ExamSprechen {
  vortrag: ExamSprechenVortrag[];
  diskussion: ExamSprechenDiskussion[];
  /** المدد الرسمية: تحضير 15د + Teil1 ~4د + Teil2 ~5د */
  vorbereitungMinutes: number;
  teil1Minutes: number;
  teil2Minutes: number;
}

export const EXAM_SPRECHEN_RUBRIC = [
  { name: "Aussprache", ar: "النطق والتنغيم (مفهوم للمتحدث الأصلي)", max: 25 },
  { name: "Wortschatz", ar: "المفردات (دقة ومرونة وملاءمة للموضوع)", max: 25 },
  { name: "Flüssigkeit", ar: "الطلاقة (تدفق طبيعي بلا توقفات طويلة)", max: 25 },
  { name: "Interaktion", ar: "التفاعل (الرد على الأسئلة والبناء على كلام الآخر)", max: 25 },
] as const;

/* ═══════════ الامتحان الكامل ═══════════ */

export interface GoetheB2Exam {
  id: string;
  title: string;
  titleAr: string;
  /** المدد الرسمية */
  lesenMinutes: number;
  hoerenMinutes: number;
  schreibenMinutes: number;
  sprechenMinutes: number;
  lesen: ExamLesenTeil[];
  hoeren: ExamHoerenTeil[];
  schreiben: ExamSchreibaufgabe[];
  sprechen: ExamSprechen;
  /** عتبة النجاح الرسمية: 60 من 100 لكل مكوّن */
  passThreshold: number;
}

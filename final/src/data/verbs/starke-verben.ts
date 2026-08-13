/**
 * جدول الأفعال الشاذة (Starke Verben) — مرجع B1
 * — القائمة الأساسية لكل المستويات مع التصريفات الثلاثة —
 * (يُوسَّع في المرحلة 13 بجدول تفاعلي كامل قابل للبحث والفلترة)
 */
export interface StarkeVerb {
  infinitiv: string;
  /** Präsens 3. Person (er/sie/es) */
  präsens3: string;
  /** Präteritum (er/sie/es) */
  präteritum: string;
  /** Partizip II */
  partizip2: string;
  /** الترجمة العربية */
  ar: string;
  /** الفعل المساعد في Perfekt (haben أو sein) */
  hilfsverb: "haben" | "sein";
  /** مستوى الابتداء */
  level: "A1" | "A2" | "B1" | "B2";
  /** ملاحظة (اختياري) */
  note?: string;
}

export const STARK_VERBEN: StarkeVerb[] = [
  /* ── A1 ── */
  { infinitiv: "sein", präsens3: "ist", präteritum: "war", partizip2: "gewesen", ar: "يكون", hilfsverb: "sein", level: "A1" },
  { infinitiv: "haben", präsens3: "hat", präteritum: "hatte", partizip2: "gehabt", ar: "يملك", hilfsverb: "haben", level: "A1" },
  { infinitiv: "werden", präsens3: "wird", präteritum: "wurde", partizip2: "geworden", ar: "يصبح", hilfsverb: "sein", level: "A1" },
  { infinitiv: "heißen", präsens3: "heißt", präteritum: "hieß", partizip2: "geheißen", ar: "يُدعى", hilfsverb: "haben", level: "A1" },
  { infinitiv: "kommen", präsens3: "kommt", präteritum: "kam", partizip2: "gekommen", ar: "يأتي", hilfsverb: "sein", level: "A1" },
  { infinitiv: "gehen", präsens3: "geht", präteritum: "ging", partizip2: "gegangen", ar: "يذهب", hilfsverb: "sein", level: "A1" },
  { infinitiv: "essen", präsens3: "isst", präteritum: "aß", partizip2: "gegessen", ar: "يأكل", hilfsverb: "haben", level: "A1" },
  { infinitiv: "trinken", präsens3: "trinkt", präteritum: "trank", partizip2: "getrunken", ar: "يشرب", hilfsverb: "haben", level: "A1" },
  { infinitiv: "nehmen", präsens3: "nimmt", präteritum: "nahm", partizip2: "genommen", ar: "يأخذ", hilfsverb: "haben", level: "A1" },
  { infinitiv: "geben", präsens3: "gibt", präteritum: "gab", partizip2: "gegeben", ar: "يعطي", hilfsverb: "haben", level: "A1" },
  { infinitiv: "sehen", präsens3: "sieht", präteritum: "sah", partizip2: "gesehen", ar: "يرى", hilfsverb: "haben", level: "A1" },
  { infinitiv: "lesen", präsens3: "liest", präteritum: "las", partizip2: "gelesen", ar: "يقرأ", hilfsverb: "haben", level: "A1" },
  { infinitiv: "sprechen", präsens3: "spricht", präteritum: "sprach", partizip2: "gesprochen", ar: "يتكلم", hilfsverb: "haben", level: "A1" },
  { infinitiv: "schlafen", präsens3: "schläft", präteritum: "schlief", partizip2: "geschlafen", ar: "ينام", hilfsverb: "haben", level: "A1" },
  { infinitiv: "fahren", präsens3: "fährt", präteritum: "fuhr", partizip2: "gefahren", ar: "يقود/يذهب", hilfsverb: "sein", level: "A1" },
  { infinitiv: "tragen", präsens3: "trägt", präteritum: "trug", partizip2: "getragen", ar: "يرتدي/يحمل", hilfsverb: "haben", level: "A1" },
  { infinitiv: "laufen", präsens3: "läuft", präteritum: "lief", partizip2: "gelaufen", ar: "يجري", hilfsverb: "sein", level: "A1" },
  { infinitiv: "finden", präsens3: "findet", präteritum: "fand", partizip2: "gefunden", ar: "يجد", hilfsverb: "haben", level: "A1" },
  { infinitiv: "schreiben", präsens3: "schreibt", präteritum: "schrieb", partizip2: "geschrieben", ar: "يكتب", hilfsverb: "haben", level: "A1" },
  { infinitiv: "sitzen", präsens3: "sitzt", präteritum: "saß", partizip2: "gesessen", ar: "يجلس", hilfsverb: "haben", level: "A1" },
  { infinitiv: "stehen", präsens3: "steht", präteritum: "stand", partizip2: "gestanden", ar: "يقف", hilfsverb: "haben", level: "A1" },
  { infinitiv: "liegen", präsens3: "liegt", präteritum: "lag", partizip2: "gelegen", ar: "يستلقي/موجود", hilfsverb: "haben", level: "A1" },
  { infinitiv: "singen", präsens3: "singt", präteritum: "sang", partizip2: "gesungen", ar: "يغني", hilfsverb: "haben", level: "A1" },
  { infinitiv: "helfen", präsens3: "hilft", präteritum: "half", partizip2: "geholfen", ar: "يساعد", hilfsverb: "haben", level: "A1" },

  /* ── A2 ── */
  { infinitiv: "fliegen", präsens3: "fliegt", präteritum: "flog", partizip2: "geflogen", ar: "يطير", hilfsverb: "sein", level: "A2" },
  { infinitiv: "schwimmen", präsens3: "schwimmt", präteritum: "schwamm", partizip2: "geschwommen", ar: "يسبح", hilfsverb: "sein", level: "A2" },
  { infinitiv: "treffen", präsens3: "trifft", präteritum: "traf", partizip2: "getroffen", ar: "يقابل", hilfsverb: "haben", level: "A2" },
  { infinitiv: "vergessen", präsens3: "vergisst", präteritum: "vergaß", partizip2: "vergessen", ar: "ينسى", hilfsverb: "haben", level: "A2" },
  { infinitiv: "gewinnen", präsens3: "gewinnt", präteritum: "gewann", partizip2: "gewonnen", ar: "يفوز", hilfsverb: "haben", level: "A2" },
  { infinitiv: "verlieren", präsens3: "verliert", präteritum: "verlor", partizip2: "verloren", ar: "يخسر", hilfsverb: "haben", level: "A2" },
  { infinitiv: "ziehen", präsens3: "zieht", präteritum: "zog", partizip2: "gezogen", ar: "يسحب/ينتقل", hilfsverb: "sein", level: "A2" },
  { infinitiv: "rufen", präsens3: "ruft", präteritum: "rief", partizip2: "gerufen", ar: "ينادي/يتصل", hilfsverb: "haben", level: "A2" },
  { infinitiv: "beginnen", präsens3: "beginnt", präteritum: "begann", partizip2: "begonnen", ar: "يبدأ", hilfsverb: "haben", level: "A2" },
  { infinitiv: "trinken", präsens3: "trinkt", präteritum: "trank", partizip2: "getrunken", ar: "يشرب", hilfsverb: "haben", level: "A2" },
  { infinitiv: "gefallen", präsens3: "gefällt", präteritum: "gefiel", partizip2: "gefallen", ar: "يعجب", hilfsverb: "haben", level: "A2" },
  { infinitiv: "denken", präsens3: "denkt", präteritum: "dachte", partizip2: "gedacht", ar: "يفكر", hilfsverb: "haben", level: "A2" },
  { infinitiv: "bringen", präsens3: "bringt", präteritum: "brachte", partizip2: "gebracht", ar: "يحضر/يجلب", hilfsverb: "haben", level: "A2" },
  { infinitiv: "wissen", präsens3: "weiß", präteritum: "wusste", partizip2: "gewusst", ar: "يعرف", hilfsverb: "haben", level: "A2" },

  /* ── B1 ── */
  { infinitiv: "bleiben", präsens3: "bleibt", präteritum: "blieb", partizip2: "geblieben", ar: "يبقى", hilfsverb: "sein", level: "B1" },
  { infinitiv: "steigen", präsens3: "steigt", präteritum: "stieg", partizip2: "gestiegen", ar: "يصعد/يرتفع", hilfsverb: "sein", level: "B1" },
  { infinitiv: "fallen", präsens3: "fällt", präteritum: "fiel", partizip2: "gefallen", ar: "يسقط", hilfsverb: "sein", level: "B1" },
  { infinitiv: "verstehen", präsens3: "versteht", präteritum: "verstand", partizip2: "verstanden", ar: "يفهم", hilfsverb: "haben", level: "B1" },
  { infinitiv: "bekommen", präsens3: "bekommt", präteritum: "bekam", partizip2: "bekommen", ar: "يحصل على", hilfsverb: "haben", level: "B1" },
  { infinitiv: "geben", präsens3: "gibt", präteritum: "gab", partizip2: "gegeben", ar: "يعطي", hilfsverb: "haben", level: "B1" },
  { infinitiv: "empfehlen", präsens3: "empfiehlt", präteritum: "empfahl", partizip2: "empfohlen", ar: "ينصح", hilfsverb: "haben", level: "B1" },
  { infinitiv: "genießen", präsens3: "genießt", präteritum: "genoss", partizip2: "genossen", ar: "يستمتع", hilfsverb: "haben", level: "B1" },
  { infinitiv: "scheinen", präsens3: "scheint", präteritum: "schien", partizip2: "geschienen", ar: "يبدو/يشرق", hilfsverb: "haben", level: "B1" },
  { infinitiv: "hängen", präsens3: "hängt", präteritum: "hing", partizip2: "gehangen", ar: "يكون معلقاً", hilfsverb: "haben", level: "B1" },
  { infinitiv: "ziehen", präsens3: "zieht", präteritum: "zog", partizip2: "gezogen", ar: "يسحب", hilfsverb: "sein", level: "B1" },
  { infinitiv: "tragen", präsens3: "trägt", präteritum: "trug", partizip2: "getragen", ar: "يحمل", hilfsverb: "haben", level: "B1" },
  { infinitiv: "scheißen", präsens3: "scheißt", präteritum: "schiss", partizip2: "geschissen", ar: "(خارج الأدب — للتوعية)", hilfsverb: "haben", level: "B1", note: "كلمة نابية — تجنبها" },
  { infinitiv: "betreten", präsens3: "betritt", präteritum: "betrat", partizip2: "betreten", ar: "يدخل (مكاناً)", hilfsverb: "haben", level: "B1" },
  { infinitiv: "versprechen", präsens3: "verspricht", präteritum: "versprach", partizip2: "versprochen", ar: "يعد", hilfsverb: "haben", level: "B1" },
  { infinitiv: "ziehen", präsens3: "zieht", präteritum: "zog", partizip2: "gezogen", ar: "ينتقل/يسحب", hilfsverb: "sein", level: "B1" },

  /* ── B2 ── */
  { infinitiv: "zerstören", präsens3: "zerstört", präteritum: "zerstörte", partizip2: "zerstört", ar: "يدمر", hilfsverb: "haben", level: "B2" },
  { infinitiv: "entstehen", präsens3: "entsteht", präteritum: "entstand", partizip2: "entstanden", ar: "ينشأ", hilfsverb: "sein", level: "B2" },
  { infinitiv: "verbinden", präsens3: "verbindet", präteritum: "verband", partizip2: "verbunden", ar: "يربط/يصل", hilfsverb: "haben", level: "B2" },
  { infinitiv: "schieben", präsens3: "schiebt", präteritum: "schob", partizip2: "geschoben", ar: "يدفع", hilfsverb: "haben", level: "B2" },
  { infinitiv: "verlassen", präsens3: "verlässt", präteritum: "verließ", partizip2: "verlassen", ar: "يغادر", hilfsverb: "haben", level: "B2" },
  { infinitiv: "zunehmen", präsens3: "nimmt zu", präteritum: "nahm zu", partizip2: "zugenommen", ar: "يزداد", hilfsverb: "haben", level: "B2" },
  { infinitiv: "abnehmen", präsens3: "nimmt ab", präteritum: "nahm ab", partizip2: "abgenommen", ar: "ينقص", hilfsverb: "haben", level: "B2" },
  { infinitiv: "erhalten", präsens3: "erhält", präteritum: "erhielt", partizip2: "erhalten", ar: "يتلقى", hilfsverb: "haben", level: "B2" },
  { infinitiv: "enthalten", präsens3: "enthält", präteritum: "enthielt", partizip2: "enthalten", ar: "يحتوي", hilfsverb: "haben", level: "B2" },
  { infinitiv: "verlaufen", präsens3: "verläuft", präteritum: "verlief", partizip2: "verlaufen", ar: "يجري (أحداث)", hilfsverb: "sein", level: "B2" },
];

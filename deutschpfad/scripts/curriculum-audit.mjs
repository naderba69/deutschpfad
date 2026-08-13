#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════
 *  curriculum-audit.mjs — الجرد الآلي لمنهاج Goethe/CEFR (A1→B2)
 *  يقارن كل نقطة نحوية (Grammatik) وتواصلية (Kommunikation) من الجرد
 *  الأكاديمي المرجعي بمحتوى دروس المنصة الفعلي، ويطبع جدول تغطية
 *  (✓ موجود / ⚠️ في مستوى آخر / ✗ مفقود) مع اسم الملف الدال.
 *
 *  التشغيل:  node scripts/curriculum-audit.mjs
 *  — حماية دائمة ضد الانحدار: أي نقص مستقبلي يظهر فوراً في التقرير.
 * ═══════════════════════════════════════════════════════════════════════
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ── تحميل كل ملفات الدروس كمصفوفة {level, id, text} ── */
const LESSONS = [];
for (const level of ["a1", "a2", "b1", "b2"]) {
  for (const f of readdirSync(join(ROOT, "src/data/lessons", level))) {
    if (!f.endsWith(".ts")) continue;
    const text = readFileSync(join(ROOT, "src/data/lessons", level, f), "utf8");
    const id = (text.match(/id: "([^"]+)"/) || [])[1] ?? f.replace(".ts", "");
    LESSONS.push({ level, id, text });
  }
}
const norm = (s) => s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
const inLevel = (level) => LESSONS.filter((l) => l.level === level);
const inLesson = (id) => LESSONS.find((l) => l.id === id);

/* ═══ الجرد الأكاديمي المرجعي: كل بند = {level, theme, kind, term, keywords, lessons} ═══
   lessons: دروس متوقعة للبحث (فارغة = كامل المستوى) */
const ITEMS = [
  /* ─────────── مستوى A1 ─────────── */
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "g", term: "الفعل sein + heißen", keywords: ["sein", "heissen"], lessons: ["a1-01"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "g", term: "W-Fragen وترتيب V2", keywords: ["W-Fragen", "V2"], lessons: ["a1-01"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "g", term: "الضمائر الشخصية Nominativ", keywords: ["ich", "du", "er", "sie", "wir"], lessons: ["a1-01"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "g", term: "تصريف الأفعال المنتظمة (Präsens)", keywords: ["heißen", "heiße", "spielen", "wohnen"], lessons: ["a1-01", "a1-02", "a1-03"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "k", term: "التحية والوداع + du/Sie", keywords: ["Hallo", "Guten Morgen", "Guten Tag", "du und Sie"], lessons: ["a1-01"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "k", term: "تهجئة الاسم (Buchstabieren)", keywords: ["buchstabieren", "تهجئة الاسم", "التهجئة"], lessons: ["a1-00", "a1-01"] },
  { level: "a1", theme: "1. الترحيب والتعارف (Kontakte)", kind: "k", term: "الأرقام حتى 100", keywords: ["Zahlen", "الأرقام", "hundert"], lessons: ["a1-07"] },
  { level: "a1", theme: "2. الطعام والتسوق (Essen/Einkaufen)", kind: "g", term: "أدوات der/die/das + ein/eine", keywords: ["Bestimmte und unbestimmte Artikel", "ein/eine"], lessons: ["a1-03"] },
  { level: "a1", theme: "2. الطعام والتسوق (Essen/Einkaufen)", kind: "g", term: "النفي kein/keine", keywords: ["kein", "nicht"], lessons: ["a1-03", "a1-10"] },
  { level: "a1", theme: "2. الطعام والتسوق (Essen/Einkaufen)", kind: "g", term: "حالة النصب Akkusativ", keywords: ["Akkusativ", "den Apfel", "أفعال النصب"], lessons: ["a1-03"] },
  { level: "a1", theme: "2. الطعام والتسوق (Essen/Einkaufen)", kind: "k", term: "الجوع والعطش + الدفع", keywords: ["Hunger", "Durst", "kosten", "bezahle"], lessons: ["a1-03", "a1-07"] },
  { level: "a1", theme: "3. السكن (Wohnen)", kind: "g", term: "ضمائر الملكية mein/dein", keywords: ["Possessivartikel", "mein", "dein"], lessons: ["a1-02", "a1-04"] },
  { level: "a1", theme: "3. السكن (Wohnen)", kind: "g", term: "الصفات الأساسية", keywords: ["Adjektive", "prädikative"], lessons: ["a1-08"] },
  { level: "a1", theme: "3. السكن (Wohnen)", kind: "k", term: "وصف الشقة والأثاث", keywords: ["Räume", "Möbel", "الغرف والأثاث", "وصف الشقة"], lessons: ["a1-04"] },
  { level: "a1", theme: "4. اليوم والوقت (Tagesablauf)", kind: "g", term: "الأفعال المنفصلة Trennbare", keywords: ["Trennbare Verben", "aufstehen", "fernsehen"], lessons: ["a1-05"] },
  { level: "a1", theme: "4. اليوم والوقت (Tagesablauf)", kind: "g", term: "حروف الزمن am/um (+von…bis)", keywords: ["um أم am", "von 8 bis", "Die Uhrzeit"], lessons: ["a1-05", "a1-09"] },
  { level: "a1", theme: "4. اليوم والوقت (Tagesablauf)", kind: "k", term: "قول الوقت والروتين", keywords: ["Uhrzeit", "Tageszeiten", "يوم سامي"], lessons: ["a1-05"] },
  { level: "a1", theme: "5. العائلة والترفيه (Familie/Freizeit)", kind: "g", term: "أفعال الأمر Modalverben können/wollen/müssen", keywords: ["Modalverben", "können", "wollen", "muss"], lessons: ["a1-02", "a1-06"] },
  { level: "a1", theme: "5. العائلة والترفيه (Familie/Freizeit)", kind: "g", term: "تغيّر الصوت e→i / a→ä", keywords: ["isst", "fährst", "liest", "trägst"], lessons: ["a1-06", "a1-08"] },
  { level: "a1", theme: "5. العائلة والترفيه (Familie/Freizeit)", kind: "g", term: "war / hatte", keywords: ["war", "hatte"], lessons: ["a1-02", "a1-06"] },
  { level: "a1", theme: "5. العائلة والترفيه (Familie/Freizeit)", kind: "k", term: "العائلة والهوايات", keywords: ["Familie", "Hobbys", "الهوايات", "دعوة"], lessons: ["a1-02", "a1-06"] },

  /* ─────────── مستوى A2 ─────────── */
  { level: "a2", theme: "1. العمل (Beruf und Alltag)", kind: "g", term: "Perfekt مع haben", keywords: ["Perfekt", "habe gesehen", "gearbeitet"], lessons: ["a2-01", "a2-05"] },
  { level: "a2", theme: "1. العمل (Beruf und Alltag)", kind: "k", term: "مهام العمل + بريد رسمي", keywords: ["E-Mails", "مكالمة هاتفية", "Büro"], lessons: ["a2-05"] },
  { level: "a2", theme: "2. السفر والطقس (Reisen/Wetter)", kind: "g", term: "Perfekt مع sein", keywords: ["bin gefahren", "Perfekt", "geflogen"], lessons: ["a2-01"] },
  { level: "a2", theme: "2. السفر والطقس (Reisen/Wetter)", kind: "g", term: "حروف المكان nach/in/zu", keywords: ["nach", "in", "zu", "wohin"], lessons: ["a1-11", "a2-01"] },
  { level: "a2", theme: "2. السفر والطقس (Reisen/Wetter)", kind: "k", term: "حجز فندق + تخطيط رحلة", keywords: ["Hotel", "التخطيط", "Urlaub"], lessons: ["a2-01"] },
  { level: "a2", theme: "2. السفر والطقس (Reisen/Wetter)", kind: "k", term: "نشرة الطقس", keywords: ["Wetter", "تقرير الطقس", "الطقس"], lessons: ["a1-12"] },
  { level: "a2", theme: "3. الصحة (Gesundheit)", kind: "g", term: "Imperativ + dürfen/sollen", keywords: ["Imperativ", "sollen", "nicht dürfen"], lessons: ["a1-06", "a2-02"] },
  { level: "a2", theme: "3. الصحة (Gesundheit)", kind: "g", term: "Dativ", keywords: ["Dativ"], lessons: ["a2-02", "a2-09"] },
  { level: "a2", theme: "3. الصحة (Gesundheit)", kind: "k", term: "أعضاء الجسم والأعراض + موعد", keywords: ["Körper", "Schmerzen", "Symptome", "Arzt"], lessons: ["a2-02"] },
  { level: "a2", theme: "4. التوجيه والتعايش (Orientierung)", kind: "g", term: "Wechselpräpositionen مع Dativ", keywords: ["Wechselpräpositionen", "Dativ oder Akkusativ"], lessons: ["a2-04"] },
  { level: "a2", theme: "4. التوجيه والتعايش (Orientierung)", kind: "g", term: "weil / dass", keywords: ["weil", "dass"], lessons: ["a2-06", "a2-10"] },
  { level: "a2", theme: "4. التوجيه والتعايش (Orientierung)", kind: "k", term: "السؤال عن الطريق", keywords: ["nach dem Weg", "السؤال عن الطريق", "Richtungen"], lessons: ["a1-11"] },
  { level: "a2", theme: "4. التوجيه والتعايش (Orientierung)", kind: "k", term: "الجيران والعيش المشترك", keywords: ["Nachbarn", "الجيران", "Hausordnung", "Zusammenleben"], lessons: ["a2-04", "a2-12"] },
  { level: "a2", theme: "5. المناسبات والمطعم (Feste/Restaurant)", kind: "g", term: "Komparativ/Superlativ", keywords: ["Komparativ", "Superlativ", "schneller", "am schnellsten"], lessons: ["a2-08"] },
  { level: "a2", theme: "5. المناسبات والمطعم (Feste/Restaurant)", kind: "g", term: "wenn + أفعال Dativ+Akkusativ", keywords: ["wenn", "Dativ-Verben", "helfen", "gefallen"], lessons: ["a2-09", "a2-10"] },
  { level: "a2", theme: "5. المناسبات والمطعم (Feste/Restaurant)", kind: "k", term: "طلب الطعام + التهاني والهدايا", keywords: ["Rechnung", "طلب الطعام", "Geburtstag", "Geschenk"], lessons: ["a2-03", "a2-09"] },

  /* ─────────── مستوى B1 ─────────── */
  { level: "b1", theme: "1. التعليم والمسار (Lernen/Karriere)", kind: "g", term: "Präteritum", keywords: ["Präteritum"], lessons: ["b1-02"] },
  { level: "b1", theme: "1. التعليم والمسار (Lernen/Karriere)", kind: "g", term: "Konjunktiv II", keywords: ["Konjunktiv II", "würde", "hätte"], lessons: ["b1-04"] },
  { level: "b1", theme: "1. التعليم والمسار (Lernen/Karriere)", kind: "k", term: "السيرة الذاتية + أهداف", keywords: ["Lebenslauf", "السيرة"], lessons: ["b1-02"] },
  { level: "b1", theme: "2. الإعلام (Medien)", kind: "g", term: "Relativsätze", keywords: ["Relativsatz", "Relativsätze"], lessons: ["b1-01"] },
  { level: "b1", theme: "2. الإعلام (Medien)", kind: "g", term: "Passiv Präsens", keywords: ["Passiv", "wird gebaut"], lessons: ["b1-03"] },
  { level: "b1", theme: "2. الإعلام (Medien)", kind: "k", term: "الإنترنت ووسائل التواصل", keywords: ["Internet", "soziale", "Medien"], lessons: ["a2-06", "b1-04", "b1-08"] },
  { level: "b1", theme: "3. البيئة والاستهلاك (Umwelt)", kind: "g", term: "الروابط المزدوجة", keywords: ["nicht nur", "sondern auch", "weder", "entweder"], lessons: ["b1-08"] },
  { level: "b1", theme: "3. البيئة والاستهلاك (Umwelt)", kind: "g", term: "Infinitiv mit zu", keywords: ["Infinitiv mit zu", "um … zu", "anfangen", "zu schützen"], lessons: ["b1-03", "b1-08"] },
  { level: "b1", theme: "3. البيئة والاستهلاك (Umwelt)", kind: "k", term: "النفايات والمناخ والاستدامة", keywords: ["Mülltrennung", "Klima", "Nachhaltigkeit", "النفايات"], lessons: ["b1-03"] },
  { level: "b1", theme: "4. الهوية والثقافة (Heimat)", kind: "g", term: "Adjektivdeklination", keywords: ["Adjektivdeklination"], lessons: ["b1-06"] },
  { level: "b1", theme: "4. الهوية والثقافة (Heimat)", kind: "g", term: "Futur I", keywords: ["Futur I", "werde"], lessons: ["b1-08"] },
  { level: "b1", theme: "4. الهوية والثقافة (Heimat)", kind: "k", term: "الوطن/الهجرة/صدمات الثقافة", keywords: ["Heimat", "هجرة", "Kulturschock", "صدمات"], lessons: ["b1-06", "b2-08"] },
  { level: "b1", theme: "5. المشاعر والنزاعات (Gefühle)", kind: "g", term: "Verben mit Präpositionen", keywords: ["Verben mit", "worüber", "darüber", "festen Präpositionen"], lessons: ["b2-08"] },
  { level: "b1", theme: "5. المشاعر والنزاعات (Gefühle)", kind: "k", term: "الغضب/الفرح/الاعتذار والتصالح", keywords: ["Gefühle", "المشاعر", "Konflikt", "خلاف", "تصالح"], lessons: ["a2-12", "b2-05"] },

  /* ─────────── مستوى B2 ─────────── */
  { level: "b2", theme: "1. بيئة العمل (Arbeitswelt)", kind: "g", term: "Passiv-Ersatzformen", keywords: ["Ersatzformen", "Zustandspassiv", "Passiv mit Modalverben"], lessons: ["b2-02"] },
  { level: "b2", theme: "1. بيئة العمل (Arbeitswelt)", kind: "g", term: "folglich / demnach", keywords: ["folglich", "demnach"], lessons: ["b2-05", "b2-06"] },
  { level: "b2", theme: "1. بيئة العمل (Arbeitswelt)", kind: "k", term: "مقابلة + Anschreiben", keywords: ["Anschreiben", "Bewerbung", "مقابلة"], lessons: ["b2-09", "b2-06"] },
  { level: "b2", theme: "1. بيئة العمل (Arbeitswelt)", kind: "k", term: "العمل المرن/عن بعد", keywords: ["Homeoffice", "flexibel", "المرن", "عن بعد"], lessons: ["b2-06"] },
  { level: "b2", theme: "2. الاقتصاد والمال (Wirtschaft)", kind: "g", term: "Nominalisierung", keywords: ["Nominalisierung"], lessons: ["b2-06"] },
  { level: "b2", theme: "2. الاقتصاد والمال (Wirtschaft)", kind: "g", term: "Genitiv-Präpositionen (wegen/trotz)", keywords: ["wegen", "trotz", "während", "statt"], lessons: ["b1-01"] },
  { level: "b2", theme: "2. الاقتصاد والمال (Wirtschaft)", kind: "k", term: "البنوك والقروض والاستثمار", keywords: ["Bank", "Kredit", "Investition", "البنوك"], lessons: ["a2-07", "b2-02"] },
  { level: "b2", theme: "3. المجتمع والقانون (Politik)", kind: "g", term: "Konjunktiv I (نقل الكلام)", keywords: ["Konjunktiv I", "indirekte Rede", "habe"], lessons: ["b2-01"] },
  { level: "b2", theme: "3. المجتمع والقانون (Politik)", kind: "g", term: "الاستخدام الذاتي للأفعال الناقصة (تخمين)", keywords: ["dürfte", "müsste", "subjektiv", "könnte"], lessons: ["b2-01", "b2-07"] },
  { level: "b2", theme: "3. المجتمع والقانون (Politik)", kind: "k", term: "الآراء والقوانين والجمعيات", keywords: ["Politik", "القانون", "Recht", "الجمعية", "Ehrenamt"], lessons: ["b1-07", "b2-03", "b1-09"] },
  { level: "b2", theme: "4. العلوم والبحث (Wissenschaft)", kind: "g", term: "Partizip I/II كصفات", keywords: ["Partizip I", "Partizip II", "als Adjektive"], lessons: ["b2-04"] },
  { level: "b2", theme: "4. العلوم والبحث (Wissenschaft)", kind: "g", term: "تراكيب اسمية معقدة", keywords: ["Nominalisierung", "nominalisieren"], lessons: ["b2-06", "b2-10"] },
  { level: "b2", theme: "4. العلوم والبحث (Wissenschaft)", kind: "k", term: "عرض أكاديمي (Präsentation)", keywords: ["Präsentation", "العروض", "محاضرة"], lessons: ["b2-01", "b2-10"] },
  { level: "b2", theme: "4. العلوم والبحث (Wissenschaft)", kind: "k", term: "الذكاء الاصطناعي", keywords: ["Intelligenz", "الذكاء"], lessons: ["b1-08", "b2-01"] },
  { level: "b2", theme: "5. الثقافة والإعلام (Kultur)", kind: "g", term: "روابط konzessive/restriktive", keywords: ["obwohl", "es sei denn", "ohne"], lessons: ["b1-07", "b2-05"] },
  { level: "b2", theme: "5. الثقافة والإعلام (Kultur)", kind: "g", term: "Genitiv المتقدم", keywords: ["Genitiv"], lessons: ["b1-01", "b2-03"] },
  { level: "b2", theme: "5. الثقافة والإعلام (Kultur)", kind: "k", term: "نقد الكتب والأفلام", keywords: ["Buch", "مراجعة كتاب", "Film", "معرض الكتاب"], lessons: ["b2-04"] },
  { level: "b2", theme: "5. الثقافة والإعلام (Kultur)", kind: "k", term: "الرقابة والصحافة والرأي العام", keywords: ["Zensur", "الرقابة", "Zeitung", "Meinung"], lessons: ["b2-07", "a2-06"] },
];

/* ═══ التقييم ═══ */
function findMatches(item) {
  const pool = item.lessons.length
    ? item.lessons.map(inLesson).filter(Boolean)
    : inLevel(item.level);
  const hits = [];
  for (const kw of item.keywords) {
    const k = norm(kw);
    for (const l of pool) {
      if (norm(l.text).includes(k)) {
        hits.push({ kw, file: l.id });
        break;
      }
    }
  }
  return hits;
}

const rows = [];
for (const item of ITEMS) {
  const hits = findMatches(item);
  const foundAny = hits.length > 0;
  const expected = item.keywords.length;
  const partial = foundAny && hits.length < expected;
  const status = foundAny ? (partial ? "⚠️" : "✓") : "✗";
  const scope = item.lessons.length ? item.lessons.join(", ") : `كل ${item.level}`;
  rows.push({
    level: item.level.toUpperCase(),
    theme: item.theme,
    kind: item.kind === "g" ? "قواعد" : "تواصل",
    term: item.term,
    status,
    detail: foundAny ? hits.map((h) => `${h.file}`).join(", ") : `مفقود في: ${scope}`,
  });
}

/* ═══ الطباعة ═══ */
const ok = rows.filter((r) => r.status === "✓").length;
const warn = rows.filter((r) => r.status === "⚠️").length;
const miss = rows.filter((r) => r.status === "✗").length;
console.log("\n══════════════════════════════════════════════════════════════");
console.log("  الجرد الآلي لمنهاج Goethe/CEFR — تغطية الدروس (A1→B2)");
console.log("══════════════════════════════════════════════════════════════\n");
for (const level of ["A1", "A2", "B1", "B2"]) {
  console.log(`── مستوى ${level} ──`);
  for (const r of rows.filter((x) => x.level === level)) {
    console.log(`  ${r.status} [${r.kind}] ${r.term} → ${r.detail}`);
  }
  console.log("");
}
console.log("──────────────────────────────────────────────────────────────");
console.log(`  الملخص: ${ok} ✓ كامل | ${warn} ⚠️ جزئي/مستوى آخر | ${miss} ✗ مفقود  (الإجمالي ${rows.length})`);
console.log("  ✓=الموضوع مُدرَّس بدقة في الدروس المشار إليها | ⚠️=جزئي أو محتوى في مستوى آخر | ✗=نقص حقيقي");
console.log("══════════════════════════════════════════════════════════════\n");

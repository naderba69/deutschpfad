"use client";

import * as React from "react";
import {Search} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {cn} from "@/lib/utils";
import {getLevelVocab} from "@/data/vocabulary";
import type { VocabEntry } from "@/data/vocabulary/a1";

/**
 * ═══════════════════════════════════════════════════════════
 *  المعجم المصوّر — ربط بصري يقوّي الحفظ
 *  (Vercel مجاني: صور Emoji مدمجة + نطق TTS + تصنيف حسب الفئة)
 *  كل كلمة A1/A2 تُعرض بإيموجي دلالي + نطق + مثال.
 * ═══════════════════════════════════════════════════════════
 */

/** خريطة إيموجي دلالي للكلمات الأكثر تكراراً (تقع تلقائياً أو تُضبط يدوياً) */
const EMOJI: Record<string, string> = {
  // التحية والأساسيات
  hallo: "👋", guten: "🌅", morgen: "🌅", tag: "📅", abend: "🌆", nacht: "🌙",
  danke: "🙏", bitte: "🙏", ja: "✅", nein: "❌", tschüss: "👋", wiedersehen: "👋",
  // العائلة
  familie: "👨‍👩‍👧", mutter: "👩", vater: "👨", bruder: "👦", schwester: "👧", oma: "👵", opa: "👴",
  kind: "🧒", kinder: "🧒", sohn: "👦", tochter: "👧", eltern: "👨‍👩‍👦",
  // الطعام
  essen: "🍽️", trinken: "🥤", wasser: "💧", brot: "🍞", kaffee: "☕", tee: "🍵",
  milch: "🥛", apfel: "🍎", obst: "🍎", gemüse: "🥦", fleisch: "🥩", kuchen: "🍰",
  // المنزل
  haus: "🏠", wohnung: "🏢", zimmer: "🛏️", küche: "🍳", badezimmer: "🛁", tür: "🚪", fenster: "🪟",
  tisch: "🪑", stuhl: "🪑", bett: "🛏️", schlüssel: "🔑", lampe: "💡",
  // المدينة والتنقل
  stadt: "🏙️", auto: "🚗", bus: "🚌", bahn: "🚆", flugzeug: "✈️", fahrrad: "🚲",
  straße: "🛣️", krankenhaus: "🏥", schule: "🏫", bank: "🏦", polizei: "👮",
  // الطبيعة
  sonne: "☀️", mond: "🌙", stern: "⭐", regen: "🌧️", schnee: "❄️", wind: "💨",
  baum: "🌳", blume: "🌸", hund: "🐶", katze: "🐱", vogel: "🐦", pferd: "🐴",
  // الألوان
  rot: "🔴", blau: "🔵", grün: "🟢", gelb: "🟡", schwarz: "⚫", weiß: "⚪",
  // الملابس
  jacke: "🧥", schuh: "👟", kleid: "👗", hemd: "👔", hose: "👖", hut: "🎩",
  // الزمن
  zeit: "⏰", heute: "📆", morgen2: "🌅", woche: "📅", monat: "📅", jahr: "📆",
  // الأرقام والأشياء اليومية
  buch: "📖", telefon: "📱", computer: "💻", geld: "💰", geschenk: "🎁", brief: "✉️",
};

/** كلمات إيموجي إضافية للمستوى A1 (دليل سريع) */
const VISUAL_BANK: { de: string; ar: string; emoji: string; level: "A1" | "A2" }[] = [
  { de: "der Mann", ar: "الرجل", emoji: "👨", level: "A1" },
  { de: "die Frau", ar: "المرأة", emoji: "👩", level: "A1" },
  { de: "das Kind", ar: "الطفل", emoji: "🧒", level: "A1" },
  { de: "die Schule", ar: "المدرسة", emoji: "🏫", level: "A1" },
  { de: "der Arzt", ar: "الطبيب", emoji: "🩺", level: "A1" },
  { de: "die Arbeit", ar: "العمل", emoji: "💼", level: "A1" },
  { de: "der Freund", ar: "الصديق", emoji: "🤝", level: "A1" },
  { de: "das Essen", ar: "الطعام", emoji: "🍽️", level: "A1" },
  { de: "das Trinken", ar: "الشرب", emoji: "🥤", level: "A1" },
  { de: "die Liebe", ar: "الحب", emoji: "❤️", level: "A1" },
  { de: "das Glück", ar: "السعادة", emoji: "😊", level: "A1" },
  { de: "die Musik", ar: "الموسيقى", emoji: "🎵", level: "A1" },
  { de: "der Film", ar: "الفيلم", emoji: "🎬", level: "A1" },
  { de: "der Sport", ar: "الرياضة", emoji: "⚽", level: "A1" },
  { de: "das Meer", ar: "البحر", emoji: "🌊", level: "A2" },
  { de: "der Berg", ar: "الجبل", emoji: "⛰️", level: "A2" },
  { de: "der Urlaub", ar: "العطلة", emoji: "🏖️", level: "A2" },
  { de: "das Wetter", ar: "الطقس", emoji: "🌤️", level: "A2" },
  { de: "der Bahnhof", ar: "محطة القطار", emoji: "🚉", level: "A2" },
  { de: "das Museum", ar: "المتحف", emoji: "🏛️", level: "A2" },
  { de: "die Post", ar: "البريد", emoji: "📮", level: "A2" },
  { de: "der Markt", ar: "السوق", emoji: "🛒", level: "A2" },
  { de: "das Fahrrad", ar: "الدراجة", emoji: "🚲", level: "A2" },
  { de: "der Himmel", ar: "السماء", emoji: "🌌", level: "A2" },
  { de: "die Blume", ar: "الزهرة", emoji: "🌸", level: "A2" },
  { de: "der Regen", ar: "المطر", emoji: "🌧️", level: "A2" },
  { de: "die Sonne", ar: "الشمس", emoji: "☀️", level: "A2" },
  { de: "das Herz", ar: "القلب", emoji: "❤️", level: "A2" },
  { de: "die Reise", ar: "الرحلة", emoji: "🧳", level: "A2" },
  { de: "das Geschenk", ar: "الهدية", emoji: "🎁", level: "A2" },
];

function emojiFor(word: string): string {
  const key = word.toLowerCase().replace(/[^a-zäöüß]/g, "");
  if (EMOJI[key]) return EMOJI[key];
  if (EMOJI[word.toLowerCase()]) return EMOJI[word.toLowerCase()];
  return "🟦";
}

/** دمج مفردات A1/A2 مع الإيموجي التلقائي */
function buildVisual(): { de: string; ar: string; emoji: string; level: string }[] {
  const out: { de: string; ar: string; emoji: string; level: string }[] = [];
  for (const lvl of ["A1", "A2"] as const) {
    try {
      const vocab = getLevelVocab(lvl);
      for (const unit of Object.values(vocab) as unknown as VocabEntry[][]) {
        for (const entry of unit) {
          out.push({ de: entry.de, ar: entry.ar, emoji: emojiFor(entry.de), level: lvl });
        }
      }
    } catch {
      /* تجاهل */
    }
  }
  // أضف البنك البصري اليدوي (لا يكرر الموجود)
  for (const v of VISUAL_BANK) {
    if (!out.some((o) => o.de === v.de)) out.push(v);
  }
  return out;
}

const CATEGORIES = [
  { id: "all", label: "الكل" },
  { id: "👋", label: "التحية" },
  { id: "👨‍👩‍👧", label: "العائلة" },
  { id: "🍽️", label: "الطعام" },
  { id: "🏠", label: "المنزل" },
  { id: "🏙️", label: "المدينة" },
  { id: "🌳", label: "الطبيعة" },
  { id: "🛍️", label: "أشياء" },
];

export function PictureDictionaryClient() {
  const all = React.useMemo(() => buildVisual(), []);
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<"all" | "A1" | "A2">("all");
  const [emojiFilter, setEmojiFilter] = React.useState<string>("all");

  const filtered = all.filter((v) => {
    if (level !== "all" && v.level !== level) return false;
    if (emojiFilter !== "all" && v.emoji !== emojiFilter && !EMOJI_MAP[emojiFilter]?.includes(v.emoji)) return false;
    if (query) {
      const q = query.toLowerCase();
      if (!v.de.toLowerCase().includes(q) && !v.ar.includes(query)) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🖼️ المعجم المصوّر
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          كلمات A1–A2 بربط بصري (إيموجي دلالي) + نطق — الصورة تثبّت الكلمة في الذاكرة أسرع
          من الترجمة وحدها. المنصة كاملة تعمل دون خادم وبلا تكلفة.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث بالكلمة أو بالعربية…"
              className="h-10 w-full rounded-xl border border-input bg-background ps-9 pe-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-1.5" role="group" aria-label="المستوى">
            {(["all", "A1", "A2"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
                  level === l ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50",
                )}
              >
                {l === "all" ? "الكل" : l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setEmojiFilter(c.id)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-bold transition-colors",
                emojiFilter === c.id ? "border-primary bg-primary/10 text-primary" : "bg-background hover:border-primary/40",
              )}
            >
              {c.id === "all" ? "🗂️ الكل" : `${c.id} ${c.label}`}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-xs font-bold text-muted-foreground">
        {filtered.length} كلمة مرئية
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.slice(0, 200).map((v) => (
          <div
            key={`${v.de}-${v.ar}`}
            className="flex items-center gap-2.5 rounded-xl border bg-card p-3 transition-shadow hover:shadow-soft"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-xl" aria-hidden="true">
              {v.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="font-de truncate text-sm font-bold" dir="ltr" lang="de">
                  {v.de}
                </span>
                <SpeakButton text={v.de} size="icon" className="h-6 w-6" />
              </div>
              <p className="truncate text-xs text-muted-foreground">{v.ar}</p>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-10 text-center text-sm text-muted-foreground">لا نتائج — جرّب كلمة أخرى.</p>
      )}
    </div>
  );
}

/** خريطة فئات → إيموجي متوقع (للفلترة اليدوية) */
const EMOJI_MAP: Record<string, string[]> = {
  "👋": ["👋", "🌅", "🌆", "🌙", "🙏", "✅", "❌"],
  "👨‍👩‍👧": ["👨‍👩‍👧", "👩", "👨", "👦", "👧", "👵", "👴", "🧒"],
  "🍽️": ["🍽️", "🥤", "💧", "🍞", "☕", "🍵", "🥛", "🍎", "🥦", "🥩", "🍰"],
  "🏠": ["🏠", "🏢", "🛏️", "🍳", "🛁", "🚪", "🪟", "🪑", "🔑", "💡"],
  "🏙️": ["🏙️", "🚗", "🚌", "🚆", "✈️", "🚲", "🛣️", "🏥", "🏫", "🏦", "👮", "🚉", "📮", "🛒"],
  "🌳": ["☀️", "🌙", "⭐", "🌧️", "❄️", "💨", "🌳", "🌸", "🐶", "🐱", "🐦", "🐴", "🌊", "⛰️", "🌤️", "🌌"],
  "🛍️": ["🟦", "🧥", "👟", "👗", "👔", "👖", "🎩", "📖", "📱", "💻", "💰", "🎁", "✉️", "🎬", "🎵", "⚽", "🧳", "🏛️"],
};

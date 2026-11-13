/**
 * محرك المحادثة الحرة المحلي (بدون مفاتيح LLM)
 * — شريك محادثة ألماني يعمل 100% في المتصفح —
 *
 * يفهم نيات بسيطة من كلام المتعلم (تحية، تعريف، عمل، هوايات…) ويرد
 * بجمل ألمانية مناسبة لمستواه (A1→B2) مع سؤال متابعة لإبقاء الحوار حياً،
 * وتصحيح لطيف للأخطاء الشائعة عند المتعلم العربي.
 *
 * لا يحتاج إنترنت ولا مفاتيح: التعرف على الكلام والنطق عبر Web Speech API.
 */

export type ConversationLevel = "A1" | "A2" | "B1" | "B2";

export interface ConversationState {
  level: ConversationLevel;
  topicId: string;
  userName: string | null;
  turnCount: number;
  lastIntent: string | null;
  /** عدد الردود المستخدمة لكل نية — لتدوير الردود وتجنب التكرار */
  usedReplies: Record<string, number>;
}

export interface ConversationReply {
  /** الرد بالألمانية (يُنطق ويُعرض) */
  reply: string;
  /** ترجمة الرد بالعربية (تُعرض) */
  replyAr: string;
  /** تصحيح لطيف بالعربية عند رصد خطأ شائع */
  correction?: string;
  /** النية المكتشفة (للاختبارات والتشخيص) */
  intent: string;
}

export function createConversationState(level: ConversationLevel, topicId: string): ConversationState {
  return { level, topicId, userName: null, turnCount: 0, lastIntent: null, usedReplies: {} };
}

/* ── أدوات ── */

function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[.!?,;:"«»„“”]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function capitalize(s: string): string {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

/** استخراج اسم من «ich heiße X» / «mein name ist X» / «ich bin X» */
function extractName(n: string): string | null {
  const m =
    n.match(/ich heiße ([a-zäöüß]+)/) ??
    n.match(/mein name ist ([a-zäöüß]+)/) ??
    n.match(/ich bin ([a-zäöüß]+)(?: und|$)/);
  if (!m) return null;
  const name = capitalize(m[1]);
  // تجنب التقاط كلمات وظيفية
  if (["aus", "in", "und", "ein", "eine", "lehrer", "ingenieur", "arzt", "student"].includes(m[1])) return null;
  return name;
}

/** استخراج البلد من «ich komme aus X» */
function extractOrigin(n: string): string | null {
  const m = n.match(/ich komme aus ([a-zäöüß ]+?)(?: und|$)/) ?? n.match(/ich bin aus ([a-zäöüß ]+?)(?: und|$)/);
  return m ? capitalize(m[1].trim()) : null;
}

/** استخراج العمر من «ich bin 25 jahre alt» */
function extractAge(n: string): number | null {
  const m = n.match(/ich bin (\d{1,3}) jahre/);
  return m ? Number(m[1]) : null;
}

/* ── رصد الأخطاء الشائعة (تصحيح لطيف) ── */

function detectCorrection(n: string): string | undefined {
  // نسيان «alt» بعد العمر
  if (/ich bin \d{1,3} jahre$/.test(n)) {
    return "لا تنسَ كلمة «alt» في النهاية: Ich bin 25 Jahre alt (عمري 25 سنة).";
  }
  // إملاء Brüder
  if (/ich habe \d+ bruder(?!n)/.test(n)) {
    return "انتبه للإملاء: Brüder (بـ ü) — ich habe zwei Brüder.";
  }
  // ترتيب الكلمات: الفعل يجب أن يكون ثانياً
  if (/^ich (morgen|heute|gestern|jetzt) [a-zäöüß]+/.test(n)) {
    return "في الألمانية الفعل في المرتبة الثانية: Ich gehe morgen (أذهب غداً).";
  }
  // «ich komme aus» صحيحة — لا تصحيح
  return undefined;
}

import {
  GREETINGS,
  NAME_REPLIES,
  ORIGIN_REPLIES,
  AGE_REPLIES,
  FAMILY_REPLIES,
  WORK_REPLIES,
  HOBBY_REPLIES,
  FOOD_REPLIES,
  TRAVEL_REPLIES,
  FEELING_REPLIES,
  FEELING_BAD_REPLIES,
  PARTNER_QUESTION_REPLIES,
  YES_REPLIES,
  NO_REPLIES,
  QUESTION_REPLIES,
  STATEMENT_REPLIES,
  FALLBACK_REPLIES,
  GOODBYE_REPLIES,
  THANKS_REPLIES,
  WEATHER_REPLIES,
  TIME_REPLIES,
  DIRECTIONS_REPLIES,
  SHOPPING_REPLIES,
  TRANSPORT_REPLIES,
  LEARNING_REPLIES,
  WEEKEND_REPLIES,
  MUSIC_REPLIES,
  type Pool,
  type Variant,
} from "./offline-conversation-responses";

/* ── كشف النية ── */

interface IntentRule {
  intent: string;
  test: (n: string) => boolean;
  pool: Pool;
  /** استخراج بيانات من المدخل (اسم/بلد/عمر) */
  extract?: (n: string) => Record<string, string | number> | null;
}

const RULES: IntentRule[] = [
  { intent: "goodbye", test: (n) => /\b(tschüss|auf wiedersehen|bis später|bis bald|ciao|bye|tschau)\b/.test(n), pool: GOODBYE_REPLIES },
  { intent: "thanks", test: (n) => /\b(danke|vielen dank|danke schön|merci)\b/.test(n), pool: THANKS_REPLIES },
  { intent: "greeting", test: (n) => /\b(hallo|hi|guten tag|guten morgen|guten abend|servus|moin|grüß dich|hey)\b/.test(n), pool: GREETINGS },
  { intent: "how-are-you", test: (n) => /wie geht es (dir|euch)|wie geht'?s/.test(n), pool: FEELING_REPLIES },
  { intent: "feeling-bad", test: (n) => /mir geht es (nicht gut|schlecht)|ich fühle mich (nicht gut|schlecht|traurig)|mir geht es nicht/.test(n), pool: FEELING_BAD_REPLIES },
  { intent: "feeling-good", test: (n) => /mir geht es (gut|sehr gut|prima|super)|ich fühle mich (gut|prima|super)/.test(n), pool: FEELING_REPLIES },
  {
    intent: "name",
    test: (n) => /ich heiße|mein name ist|ich bin [a-zäöüß]+$/.test(n) && extractName(n) !== null,
    pool: NAME_REPLIES,
    extract: (n) => {
      const name = extractName(n);
      return name ? { name } : null;
    },
  },
  {
    intent: "origin",
    test: (n) => /ich komme aus|ich bin aus/.test(n),
    pool: ORIGIN_REPLIES,
    extract: (n) => {
      const origin = extractOrigin(n);
      return origin ? { origin } : null;
    },
  },
  {
    intent: "age",
    test: (n) => /ich bin \d{1,3} jahre/.test(n),
    pool: AGE_REPLIES,
    extract: (n) => {
      const age = extractAge(n);
      return age !== null ? { age } : null;
    },
  },
  { intent: "family", test: (n) => /ich habe \d+ (brüder|schwestern|kinder|geschwister)|ich habe (einen bruder|eine schwester|kinder)/.test(n), pool: FAMILY_REPLIES },
  { intent: "work", test: (n) => /ich arbeite|mein beruf|ich bin (lehrer|ingenieur|arzt|student|verkäufer|programmierer|mechaniker|koch|fahrer)/.test(n), pool: WORK_REPLIES },
  { intent: "weather", test: (n) => /wie ist das wetter|es regnet|es schneit|die sonne scheint|es ist (kalt|warm|heiß|windig|sonnig|bewölkt)/.test(n), pool: WEATHER_REPLIES },
  { intent: "time", test: (n) => /wie viel uhr|wie spät|um wie viel uhr|wie lange dauert/.test(n), pool: TIME_REPLIES },
  { intent: "directions", test: (n) => /wo ist|wie komme ich|ist es weit|geradeaus|links|rechts/.test(n), pool: DIRECTIONS_REPLIES },
  { intent: "shopping", test: (n) => /ich kaufe|wie viel kostet|ich möchte kaufen|ich suche|was kostet/.test(n), pool: SHOPPING_REPLIES },
  { intent: "transport", test: (n) => /ich fahre mit|der bus|der zug|ich nehme den|die u-bahn|mit dem fahrrad/.test(n), pool: TRANSPORT_REPLIES },
  { intent: "learning", test: (n) => /ich lerne deutsch|deutsch lernen|ich lerne|ich lerne gern/.test(n), pool: LEARNING_REPLIES },
  { intent: "weekend", test: (n) => /am wochenende|wochenende|am samstag|am sonntag/.test(n), pool: WEEKEND_REPLIES },
  { intent: "music", test: (n) => /ich höre( gern)? musik|meine lieblingsmusik|ich sehe einen film|ich schaue|ich sehe gern/.test(n), pool: MUSIC_REPLIES },
  { intent: "hobby", test: (n) => /ich spiele|ich höre|ich lese|ich mache gern|ich schwimme|ich fahre (gern )?rad|mein hobby|ich tanze|ich male/.test(n), pool: HOBBY_REPLIES },
  { intent: "food", test: (n) => /ich esse|ich trinke|mein lieblingsessen|ich koche/.test(n), pool: FOOD_REPLIES },
  { intent: "travel", test: (n) => /ich reise|ich möchte nach|ich fahre nach|ich fliege nach|urlaub|ich will nach/.test(n), pool: TRAVEL_REPLIES },
  { intent: "partner-question", test: (n) => /^(was|wo|wie|wann|wer|hast du|bist du|findest du|meinst du)/.test(n), pool: PARTNER_QUESTION_REPLIES },
  { intent: "yes", test: (n) => /^ja$|^jawohl$|^genau$/.test(n), pool: YES_REPLIES },
  { intent: "no", test: (n) => /^nein$|^doch nicht$|^nicht wirklich$/.test(n), pool: NO_REPLIES },
  { intent: "question", test: (n) => /\b(wie|was|wo|wann|wer|warum|woher|wohin|wie viele|wie viel)\b/.test(n), pool: QUESTION_REPLIES },
  { intent: "statement", test: (n) => /^ich /.test(n), pool: STATEMENT_REPLIES },
];

/* ── اختيار الرد ── */

function pickVariant(pool: Pool, level: ConversationLevel, state: ConversationState, intent: string): Variant {
  const variants = pool[level] ?? pool.A1 ?? FALLBACK_REPLIES.A1!;
  const used = state.usedReplies[intent] ?? 0;
  const variant = variants[used % variants.length];
  state.usedReplies[intent] = used + 1;
  return variant;
}

function fill(template: string, data: Record<string, string | number> | null): string {
  if (!data) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(data[k] ?? ""));
}

/**
 * الرد على مدخل المستخدم — دالة نقية تحدّث الحالة وتعيد الرد.
 */
export function respondToUser(state: ConversationState, input: string): { reply: ConversationReply; state: ConversationState } {
  const n = normalize(input);
  const correction = detectCorrection(n);

  // تحديث الحالة
  const next: ConversationState = {
    ...state,
    turnCount: state.turnCount + 1,
    usedReplies: { ...state.usedReplies },
  };

  // التقاط الاسم إن وُجد
  const name = extractName(n);
  if (name) next.userName = name;

  // كشف النية
  let matched: IntentRule | null = null;
  for (const rule of RULES) {
    if (rule.test(n)) {
      matched = rule;
      break;
    }
  }

  const intent = matched?.intent ?? "fallback";
  next.lastIntent = intent;

  const pool = matched?.pool ?? FALLBACK_REPLIES;
  const variant = pickVariant(pool, next.level, next, intent);
  const data = matched?.extract?.(n) ?? null;

  const reply: ConversationReply = {
    reply: fill(variant.de, data),
    replyAr: fill(variant.ar, data),
    intent,
  };
  if (correction) reply.correction = correction;

  return { reply, state: next };
}

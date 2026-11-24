import {recordEvent} from "@/lib/analytics/events";
import {createCard, forgettingCoefficient} from "@/lib/srs/sm2";
import {
  applyEbbinghausReview,
  DAY_MS,
  gradeTypedAnswer,
  MODEL_ID,
  policyFor,
  toEbbinghausCard,
} from "@/lib/srs/ebbinghaus";
import {createManualSnapshot} from "@/lib/storage/export-import";
import {getDb, getRecord, putRecord} from "@/lib/storage/db";
import {errorCardInput, type NotebookLike} from "@/lib/srs/error-cards";
import {buildVocabFile, importedCardId, type VocabFile, type VocabItem} from "@/lib/srs/vocab-file";
import {addReview, EMPTY_REVIEW_LOG, type ReviewLog} from "@/lib/srs/review-log";
import type { Flashcard } from "@/types/lesson";
import type { ReviewQuality, Sm2CardData } from "@/types/srs";

/**
 * خدمة بطاقات المراجعة (SRS) — تعمل فوق IndexedDB (مخزن cards)
 */

/** حدث يُطلق عند أي تغيير في البطاقات (لتحديث الرسوم مباشرة) */
export const CARDS_CHANGED_EVENT = "srs:cards-changed";

const REVIEW_LOG_KEY = "srs-review-log";

/** سجل المراجعات (إجمالي + مراجعات كل يوم) — يُقرأ للعرض */
export async function getReviewLog(): Promise<ReviewLog> {
  return (await getRecord<ReviewLog>("settings", REVIEW_LOG_KEY)) ?? EMPTY_REVIEW_LOG;
}

async function bumpReviewLog(now: number): Promise<void> {
  await putRecord("settings", REVIEW_LOG_KEY, addReview(await getReviewLog(), now));
}

function notifyCardsChanged(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(CARDS_CHANGED_EVENT));
}

/** إضافة بطاقات درس (لا يضيف المكرر) — تُستدعى عند إتمام درس */
export async function addLessonFlashcards(cards: Flashcard[]): Promise<number> {
  if (cards.length === 0) return 0;
  const db = await getDb();
  const existing = await db.getAll("cards");
  const existingIds = new Set(existing.map((c) => c.id));
  const toAdd = cards.filter((c) => !existingIds.has(c.id));

  if (toAdd.length === 0) return 0;
  const tx = db.transaction("cards", "readwrite");
  for (const c of toAdd) {
    tx.store.put(
      toEbbinghausCard(
        createCard({
          id: c.id,
          de: c.de,
          ar: c.ar,
          example: c.example,
          exampleAr: c.exampleAr,
          level: c.level,
          source: "lesson",
        }),
      ),
    );
  }
  await tx.done;
  notifyCardsChanged();
  return toAdd.length;
}

/** إضافة بطاقة يدوية */
export async function addManualCard(input: {
  de: string;
  ar: string;
  example?: string;
  exampleAr?: string;
  level: Sm2CardData["level"];
}): Promise<void> {
  const db = await getDb();
  const id = `manual-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  await db.put("cards", toEbbinghausCard(createCard({ id, ...input, source: "manual" })));
  notifyCardsChanged();
}

/** كل البطاقات */
export async function getAllCards(): Promise<Sm2CardData[]> {
  await ensureEbbinghausMigration();
  const db = await getDb();
  return db.getAll("cards");
}

/* ── الترحيل من SM-2 إلى إبنغهاوس ─────────────────────── */

const SRS_STATE_KEY = "srs-model-state";
const EXAM_MODE_KEY = "srs-exam-mode";

interface SrsModelState {
  model: typeof MODEL_ID;
  migratedAt: number;
  migratedCount: number;
  /** معرّف اللقطة الاحتياطية التي أُخذت قبل التحويل (للاستعادة اليدوية) */
  backupSnapshotId: string | null;
}

let migrationPromise: Promise<void> | null = null;

/**
 * ترحيل لمرة واحدة: لقطة احتياطية أولاً، ثم تحويل كل البطاقات.
 * إن فشلت اللقطة لا يُحوَّل شيء (أمان قبل أي كتابة). يُعاد المحاولة عند الفشل.
 */
export function ensureEbbinghausMigration(): Promise<void> {
  if (!migrationPromise) {
    migrationPromise = runEbbinghausMigration().catch((err) => {
      migrationPromise = null;
      throw err;
    });
  }
  return migrationPromise;
}

async function runEbbinghausMigration(): Promise<void> {
  const state = await getRecord<SrsModelState>("settings", SRS_STATE_KEY);
  if (state?.model === MODEL_ID) return;

  const db = await getDb();
  const all = await db.getAll("cards");
  const pending = all.filter((c) => c.srsModel !== MODEL_ID);
  if (pending.length === 0) {
    await putRecord("settings", SRS_STATE_KEY, {
      model: MODEL_ID,
      migratedAt: Date.now(),
      migratedCount: 0,
      backupSnapshotId: null,
    } satisfies SrsModelState);
    return;
  }

  // 1) لقطة احتياطية — إن فشلت نوقف هنا دون أي تحويل
  const backupSnapshotId = await createManualSnapshot("manual");

  // 2) تحويل بمعاملة واحدة (ذري)
  const tx = db.transaction("cards", "readwrite");
  for (const c of pending) tx.store.put(toEbbinghausCard(c));
  await tx.done;

  // 3) تسجيل الحالة بعد نجاح التحويل
  await putRecord("settings", SRS_STATE_KEY, {
    model: MODEL_ID,
    migratedAt: Date.now(),
    migratedCount: pending.length,
    backupSnapshotId,
  } satisfies SrsModelState);
}

/** وضع الامتحان المكثّف: احتفاظ 90% وأقصى فاصل 3 أيام */
export async function getExamMode(): Promise<boolean> {
  return (await getRecord<boolean>("settings", EXAM_MODE_KEY)) === true;
}

export async function setExamMode(on: boolean): Promise<void> {
  await putRecord("settings", EXAM_MODE_KEY, on);
}

/** البطاقات المستحقة اليوم (due <= now) مرتبة بالأقدم أولاً */
export async function getDueCards(now = Date.now()): Promise<Sm2CardData[]> {
  const all = await getAllCards();
  return all
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due);
}

/**
 * خريطة أزرار الجودة (1/3/4/5) إلى دقة. «صعب» = 0.75 تبقى نجاحاً
 * (تذكّرت بصعوبة)، و«نسيت» = 0.2 فشل.
 */
const QUALITY_TO_ACCURACY: Record<number, number> = {1: 0.2, 3: 0.75, 4: 0.9, 5: 1};

/** مراجعة بطاقة بتقييم الزر → نموذج إبنغهاوس + تسجيل حدث */
export async function reviewCard(id: string, quality: ReviewQuality): Promise<Sm2CardData | null> {
  await ensureEbbinghausMigration();
  const db = await getDb();
  const card = await db.get("cards", id);
  if (!card) return null;

  const accuracy = QUALITY_TO_ACCURACY[quality] ?? (quality >= 4 ? 0.9 : 0.2);
  const policy = policyFor(await getExamMode());
  const now = Date.now();
  const next = applyEbbinghausReview(card, accuracy, now, policy);
  await db.put("cards", next);
  await bumpReviewLog(now);
  void recordEvent({ type: "review", cardId: id, quality });
  notifyCardsChanged();

  return next;
}

/**
 * مراجعة بإجابة مكتوبة: الدقة تُحسب من المسافة بين الكتابة والهدف،
 * مع عقوبة المادة تلقائياً. يعيد التقييم حتى يعرضه الواجهة.
 */
export async function reviewCardByTyping(
  id: string,
  typed: string,
): Promise<{card: Sm2CardData; grade: ReturnType<typeof gradeTypedAnswer>} | null> {
  await ensureEbbinghausMigration();
  const db = await getDb();
  const card = await db.get("cards", id);
  if (!card) return null;

  const expected = card.de;
  const grade = gradeTypedAnswer(typed, expected);
  const policy = policyFor(await getExamMode());
  const now = Date.now();
  const next = applyEbbinghausReview(card, grade.accuracy, now, policy);
  await db.put("cards", next);
  await bumpReviewLog(now);
  void recordEvent({ type: "review", cardId: id, quality: Math.round(grade.accuracy * 5) as ReviewQuality });
  notifyCardsChanged();
  return {card: next, grade};
}

/**
 * خطأ من أي وحدة ⇒ بطاقة مستحقة بعد يوم (أول مرة)، أو فشل على البطاقة نفسها
 * فتُعاد جدولتها خلال 10 دقائق (تكرار الخطأ). بلا إجابة صحيحة لا بطاقة.
 */
export async function recordErrorCard(entry: NotebookLike): Promise<void> {
  const input = errorCardInput(entry);
  if (!input) return;
  const db = await getDb();
  const now = Date.now();
  const existing = await db.get("cards", input.id);
  if (existing) {
    const policy = policyFor(await getExamMode());
    await db.put("cards", applyEbbinghausReview(existing, 0.2, now, policy));
  } else {
    await db.put(
      "cards",
      {
        ...toEbbinghausCard(createCard({id: input.id, de: input.de, ar: input.ar, level: input.level, source: "error"})),
        due: now + DAY_MS,
      },
    );
  }
  notifyCardsChanged();
}

/**
 * استيراد مفردات (من ملف JSON أو من البنك الأساسي). المعرّف ثابت من الكلمة
 * والمستوى، فالبطاقة الموجودة لا تُكرَّر ولا تُمسّ (يحفظ تقدم المراجعة).
 */
export async function importVocabItems(
  items: VocabItem[],
  prefix: "vocab" | "core",
): Promise<{added: number; existing: number}> {
  const db = await getDb();
  const knownIds = new Set((await db.getAll("cards")).map((c) => c.id));
  const tx = db.transaction("cards", "readwrite");
  let added = 0;
  let existing = 0;
  for (const item of items) {
    const id = importedCardId(prefix, item);
    if (knownIds.has(id)) {
      existing++;
      continue;
    }
    knownIds.add(id);
    tx.store.put(
      toEbbinghausCard(
        createCard({
          id,
          de: item.de,
          ar: item.ar,
          example: item.example,
          exampleAr: item.exampleAr,
          level: item.level,
          source: "manual",
        }),
      ),
    );
    added++;
  }
  await tx.done;
  if (added > 0) notifyCardsChanged();
  return {added, existing};
}

/** ملف تصدير المفردات اليدوية (JSON) */
export async function exportCustomVocab(now: Date = new Date()): Promise<VocabFile> {
  const db = await getDb();
  return buildVocabFile(await db.getAll("cards"), now);
}

/** حذف بطاقة */
export async function deleteCard(id: string): Promise<void> {
  const db = await getDb();
  await db.delete("cards", id);
  notifyCardsChanged();
}

/** إحصائيات البطاقات */
export async function getCardStats(): Promise<{
  total: number;
  due: number;
  newCards: number;
  learning: number;
  mature: number;
}> {
  const all = await getAllCards();
  const now = Date.now();
  const due = all.filter((c) => c.due <= now).length;
  const newCards = all.filter((c) => c.repetitions === 0).length;
  const learning = all.filter((c) => c.repetitions > 0 && c.repetitions < 3).length;
  const mature = all.filter((c) => c.repetitions >= 3).length;
  return { total: all.length, due, newCards, learning, mature };
}

/** معامل النسيان الشخصي — من متوسط جودة كل مراجعات المستخدم */
export async function computeForgettingCoefficient(): Promise<number> {
  const all = await getAllCards();
  const totalQ = all.reduce((s, c) => s + c.qualitySum, 0);
  const totalN = all.reduce((s, c) => s + c.qualityCount, 0);
  if (totalN === 0) return 1;
  return forgettingCoefficient(totalQ / totalN, totalN);
}

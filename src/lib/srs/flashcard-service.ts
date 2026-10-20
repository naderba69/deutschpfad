import {recordEvent} from "@/lib/analytics/events";
import {createCard, applyReview, forgettingCoefficient} from "@/lib/srs/sm2";
import {getDb} from "@/lib/storage/db";
import type { Flashcard } from "@/types/lesson";
import type { ReviewQuality, Sm2CardData } from "@/types/srs";

/**
 * خدمة بطاقات المراجعة (SRS) — تعمل فوق IndexedDB (مخزن cards)
 */

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
      createCard({
        id: c.id,
        de: c.de,
        ar: c.ar,
        example: c.example,
        exampleAr: c.exampleAr,
        level: c.level,
        source: "lesson",
      }),
    );
  }
  await tx.done;
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
  await db.put(
    "cards",
    createCard({ id, ...input, source: "manual" }),
  );
}

/** كل البطاقات */
export async function getAllCards(): Promise<Sm2CardData[]> {
  const db = await getDb();
  return db.getAll("cards");
}

/** البطاقات المستحقة اليوم (due <= now) مرتبة بالأقدم أولاً */
export async function getDueCards(now = Date.now()): Promise<Sm2CardData[]> {
  const all = await getAllCards();
  return all
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due);
}

/** مراجعة بطاقة بتقييم جودة → تحديث SM-2 + تسجيل حدث */
export async function reviewCard(id: string, quality: ReviewQuality): Promise<Sm2CardData | null> {
  const db = await getDb();
  const card = await db.get("cards", id);
  if (!card) return null;

  const coefficient = await computeForgettingCoefficient();
  const next = applyReview(card, quality, coefficient);
  await db.put("cards", next);
  void recordEvent({ type: "review", cardId: id, quality });

  return next;
}

/** حذف بطاقة */
export async function deleteCard(id: string): Promise<void> {
  const db = await getDb();
  await db.delete("cards", id);
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

/**
 * مراجعة الجمل بالتكرار المتباعد (SRS) 🧠
 * — كل جملة من دروسك المكتملة تدخل نظام SM-2 وتراجعها بتكرار متباعد —
 * (تستخدم نفس مخزن cards مع بادئة sentence- حتى لا تختلط مع البطاقات)
 */

import {applyReview, createCard, forgettingCoefficient} from "@/lib/srs/sm2";
import {getDb} from "@/lib/storage/db";
import {getAllCards, reviewCard} from "@/lib/srs/flashcard-service";
import type { ReviewQuality, Sm2CardData } from "@/types/srs";

/** استخراج جمل من أمثلة بطاقات درس (فريدة) */
export function extractSentencesFromCards(cards: { de: string; ar: string; example?: string; exampleAr?: string }[]): { de: string; ar: string }[] {
  const seen = new Set<string>();
  const out: { de: string; ar: string }[] = [];
  for (const c of cards) {
    if (c.example && c.example.trim().length > 3 && !seen.has(c.example.trim())) {
      seen.add(c.example.trim());
      out.push({ de: c.example.trim(), ar: c.exampleAr?.trim() || c.ar });
    }
  }
  return out;
}

/** إضافة جمل درس مكتمل إلى نظام المراجعة (لا يضيف المكرر) */
export async function addLessonSentences(
  lessonId: string,
  sentences: { de: string; ar: string }[],
): Promise<number> {
  if (sentences.length === 0) return 0;
  const db = await getDb();
  const existing = await db.getAll("cards");
  const existingIds = new Set(existing.map((c) => c.id));
  let added = 0;
  for (const s of sentences) {
    const id = `sentence-${lessonId}-${hash(s.de)}`;
    if (existingIds.has(id)) continue;
    await db.put(
      "cards",
      createCard({
        id,
        de: s.de,
        ar: s.ar,
        source: "sentence",
        level: "A1",
      }),
    );
    added++;
  }
  return added;
}

/** دالة تجزئة بسيطة لنص (معرف فريد مستقر) */
function hash(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

/** الجمل المستحقة للمراجعة اليوم */
export async function getDueSentences(now = Date.now()): Promise<Sm2CardData[]> {
  const all = await getAllCards();
  return all
    .filter((c) => c.source === "sentence" && c.due <= now)
    .sort((a, b) => a.due - b.due);
}

/** عدد الجمل في النظام */
export async function countSentences(): Promise<number> {
  const all = await getAllCards();
  return all.filter((c) => c.source === "sentence").length;
}

export { reviewCard, forgettingCoefficient };

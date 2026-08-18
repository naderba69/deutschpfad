/**
 * اختبارات وحدة — بنك مفردات B2 بالمواضيع الـ18 الرسمية
 */
import { describe, expect, it } from "vitest";

import {
  B2_EXAM_TOPICS,
  B2_TOPIC_ALL,
  B2_TOPIC_VOCAB,
  getB2TopicWords,
  TOTAL_B2_TOPIC_WORDS,
} from "@/data/vocabulary/b2-topics";

describe("B2_EXAM_TOPICS — المواضيع الـ18 الرسمية", () => {
  it("يحتوي 18 موضوعاً بالضبط", () => {
    expect(B2_EXAM_TOPICS).toHaveLength(18);
  });

  it("كل موضوع بمعرّف فريد ورقم متسلسل", () => {
    const ids = new Set(B2_EXAM_TOPICS.map((t) => t.id));
    expect(ids.size).toBe(18);
    const nums = B2_EXAM_TOPICS.map((t) => t.num);
    expect([...nums].sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
  });

  it("كل موضوع له عنوان عربي وألماني", () => {
    for (const t of B2_EXAM_TOPICS) {
      expect(t.titleAr.length).toBeGreaterThan(0);
      expect(t.titleDe.length).toBeGreaterThan(0);
    }
  });

  it("كل موضوع له كلمات في البنك", () => {
    for (const t of B2_EXAM_TOPICS) {
      expect(getB2TopicWords(t.id).length).toBeGreaterThanOrEqual(10);
    }
  });
});

describe("B2_TOPIC_VOCAB — جودة الكلمات", () => {
  it("كل كلمة لها ترجمة عربية", () => {
    for (const w of B2_TOPIC_ALL) {
      expect(w.ar.length).toBeGreaterThan(0);
      expect(w.de.length).toBeGreaterThan(0);
    }
  });

  it("لا كلمات مكررة (بين المواضيع)", () => {
    const deSet = new Set(B2_TOPIC_ALL.map((w) => w.de));
    expect(deSet.size).toBe(B2_TOPIC_ALL.length);
  });

  it("عدد الكلمات الإجمالي متطابق مع العدادة", () => {
    expect(TOTAL_B2_TOPIC_WORDS).toBe(B2_TOPIC_ALL.length);
    const sum = Object.values(B2_TOPIC_VOCAB).reduce((s, arr) => s + arr.length, 0);
    expect(TOTAL_B2_TOPIC_WORDS).toBe(sum);
  });
});

import { getA1VocabAll } from "@/data/vocabulary/a1";
import { getA2VocabAll } from "@/data/vocabulary/a2";
import { getB1VocabAll } from "@/data/vocabulary/b1";
import { getB2VocabAll } from "@/data/vocabulary/b2";

describe("تغطية المفردات الشاملة — معايير Goethe التراكمية (4000-4800)", () => {
  it("مستوى A1 وحده: 500-650 كلمة", () => {
    expect(getA1VocabAll().length).toBeGreaterThanOrEqual(500);
  });

  it("A1+A2 تراكمياً: 1000-1200", () => {
    expect(getA1VocabAll().length + getA2VocabAll().length).toBeGreaterThanOrEqual(1000);
  });

  it("A1+A2+B1 تراكمياً: 2000-2500", () => {
    expect(getA1VocabAll().length + getA2VocabAll().length + getB1VocabAll().length).toBeGreaterThanOrEqual(2000);
  });

  it("الإجمالي الكامل (مع مواضيع B2): 4000+", () => {
    const total =
      getA1VocabAll().length + getA2VocabAll().length + getB1VocabAll().length + getB2VocabAll().length + B2_TOPIC_ALL.length;
    expect(total).toBeGreaterThanOrEqual(4000);
  });

  it("لا كلمات مكررة داخل أي مستوى بعد الدمج", () => {
    for (const list of [getA1VocabAll(), getA2VocabAll(), getB1VocabAll(), getB2VocabAll()]) {
      const de = list.map((w) => w.de);
      expect(new Set(de).size).toBe(de.length);
    }
  });
});

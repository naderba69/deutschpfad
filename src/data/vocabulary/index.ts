import { A1_VOCAB, getA1VocabAll } from "@/data/vocabulary/a1";
import { A2_VOCAB, getA2VocabAll } from "@/data/vocabulary/a2";
import { B1_VOCAB, getB1VocabAll } from "@/data/vocabulary/b1";
import { B2_VOCAB, getB2VocabAll } from "@/data/vocabulary/b2";


/** كل مفردات مستوى معين */
export function getLevelVocab(level: "A1" | "A2" | "B1" | "B2") {
  if (level === "A1") return getA1VocabAll();
  if (level === "A2") return getA2VocabAll();
  if (level === "B1") return getB1VocabAll();
  if (level === "B2") return getB2VocabAll();
  return [];
}


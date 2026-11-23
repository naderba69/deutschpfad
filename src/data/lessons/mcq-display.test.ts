import {describe, expect, it} from "vitest";
import {seededShuffle} from "@/lib/lesson/shuffle";
import {A1_RAW_LESSONS} from "./a1-level";
import {A2_RAW_LESSONS} from "./a2-level";
import {B1_RAW_LESSONS} from "./b1-level";
import {B2_RAW_LESSONS} from "./b2-level";

/**
 * الاختيار من متعدد: ما يراه المتعلم هو الترتيب بعد الخلط (seededShuffle بمعرّف التمرين)،
 * لا ترتيب المصدر. هذا الاختبار يحرس أمرين:
 *  1) أن الإجابة الصحيحة لا تتركّز في موضع واحد بعد الخلط.
 *  2) ألا يشير شرح تمرين إلى «الخيار الأول» أو «الخيار 3» — فيصير خاطئاً بعد الخلط.
 */
const all = [...A1_RAW_LESSONS, ...A2_RAW_LESSONS, ...B1_RAW_LESSONS, ...B2_RAW_LESSONS];
type Mcq = {id: string; type: string; options: string[]; correctIndex: number; explanation?: string; optionExplanations?: (string | null | undefined)[]};

const mcqs = all
  .flatMap((l) => [...(l.practiceBank ?? []), ...(l.miniTest ?? [])])
  .filter((e) => e.type === "multiple-choice") as unknown as Mcq[];

const POSITIONAL = /الخيار(?:ان|ين)?\s+(?:الأول|الثاني|الثالث|الرابع)|الخيار[اي]ن?\s*[0-9١-٤]|الخياران\s+[0-9١-٤]/;

describe("الاختيار من متعدد كما يراه المتعلم", () => {
  it("الإجابة الصحيحة بعد الخلط لا تتركّز في موضع واحد (أكثر من 40% ممنوع)", () => {
    expect(mcqs.length).toBeGreaterThan(300);
    const counts = new Map<number, number>();
    for (const e of mcqs) {
      const shown = seededShuffle(e.options, e.id).indexOf(e.options[e.correctIndex]);
      counts.set(shown, (counts.get(shown) ?? 0) + 1);
    }
    for (const [pos, n] of counts) {
      expect(n / mcqs.length, `الموضع ${pos}`).toBeLessThanOrEqual(0.4);
    }
  });

  it("لا شرح يشير إلى موضع الخيار (يصير خاطئاً بعد الخلط)", () => {
    const bad = mcqs.flatMap((e) => {
      const texts = [e.explanation ?? "", ...(e.optionExplanations ?? []).map((x) => x ?? "")];
      return texts.filter((t) => POSITIONAL.test(t)).map((t) => `${e.id}: ${t.slice(0, 60)}`);
    });
    expect(bad).toEqual([]);
  });
});

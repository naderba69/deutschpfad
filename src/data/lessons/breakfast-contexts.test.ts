import { describe, expect, it } from "vitest";

import { lessonA105 } from "@/data/lessons/a1/a1-05";
import { lessonA114 } from "@/data/lessons/a1/a1-14";
import { PODCASTS } from "@/data/podcasts";
import { STORIES_WAVE2 } from "@/data/stories/wave2";
import { RAW_TEST_BANK } from "@/data/tests/question-banks";

describe("سياقات الفطور في محتوى A1 وA2", () => {
  it("يحافظ على معنى الفعل في القراءة والقصة والبودكاست وبنك الاختبار", () => {
    expect(lessonA105.reading?.paragraphs[1]).toContain("frühstücke ich");
    expect(lessonA105.reading?.paragraphsAr[1]).toContain("أفطر في السادسة إلا ربعاً");

    const weekend = lessonA114.reading;
    expect(weekend?.paragraphs[1]).toContain("habe schnell gefrühstückt");
    expect(weekend?.paragraphsAr[1]).toContain("تناولتُ الفطور بسرعة");

    const story = STORIES_WAVE2.find(({ id }) => id === "a1-das-fruehstueck");
    expect(story?.segments[0]?.de).toContain("frühstückt die Familie");
    expect(story?.segments[0]?.ar).toContain("تتناول العائلة الفطور");

    const podcast = PODCASTS.find(({ id }) => id === "p-a2-sonnntag");
    expect(podcast?.script).toContain("haben zusammen gefrühstückt");
    expect(podcast?.scriptAr).toContain("تناولنا الفطور معاً");

    const examReading = RAW_TEST_BANK.find(({ id }) => id === "a1-r4");
    expect(examReading?.text).toContain("halb sieben frühstückt er");
    expect(examReading?.textAr).toContain("في السادسة والنصف يتناول الفطور");
  });
});

/**
 * حارس حكم الامتحان التشخيصي: سقف المستوى + عتبة الوحدة في B1/B2.
 * يثبت أن A1 لا يُستنتج له B2، وأن وحدة ضعيفة (<60) تُسقط B1/B2 مهما ارتفع المتوسط.
 */
import {describe, expect, it} from "vitest";

import {capToExamLevel, examPassed, failingModules, isModularExam, MODULE_PASS_PCT} from "./verdict";

const s = (skill: string, pct: number) => ({skill, pct});

describe("سقف المستوى المستنتج بمستوى الامتحان", () => {
  it("لا يتجاوز مستوى الامتحان أبداً", () => {
    expect(capToExamLevel("B2", "A1")).toBe("A1");
    expect(capToExamLevel("B2", "A2")).toBe("A2");
  });

  it("يُبقي المستوى الأدنى كما هو", () => {
    expect(capToExamLevel("A1", "B2")).toBe("A1");
    expect(capToExamLevel("B1", "B2")).toBe("B1");
  });

  it("يساوي مستوى الامتحان إذا كان مطابقاً", () => {
    expect(capToExamLevel("B1", "B1")).toBe("B1");
  });
});

describe("امتحان وحداتي (B1/B2): 60 لكل وحدة", () => {
  it("مُعرَّف: B1 وB2 وحداتيان، A1 وA2 لا", () => {
    expect(isModularExam("B1")).toBe(true);
    expect(isModularExam("B2")).toBe(true);
    expect(isModularExam("A1")).toBe(false);
    expect(isModularExam("A2")).toBe(false);
  });

  it("وحدة واحدة دون 60 تُسقط النجاح حتى لو كان المتوسط مرتفعاً", () => {
    // متوسط 80 لكن كتابة 40
    const skills = [s("lesen", 100), s("hören", 100), s("grammatik", 100), s("schreiben", 40), s("sprechen", 100)];
    expect(examPassed("B2", skills)).toBe(false);
    expect(failingModules("B2", skills)).toEqual(["schreiben"]);
  });

  it("كل الوحدات ≥ 60 تنجح", () => {
    const skills = [s("lesen", 60), s("hören", 60), s("grammatik", 60), s("schreiben", 60)];
    expect(examPassed("B1", skills)).toBe(true);
    expect(failingModules("B1", skills)).toEqual([]);
  });

  it("59 تسقط بالضبط (الحد 60 لا 59)", () => {
    expect(MODULE_PASS_PCT).toBe(60);
    expect(examPassed("B1", [s("lesen", 59), s("hören", 100)])).toBe(false);
  });
});

describe("امتحان غير وحداتي (A1/A2): النجاح على المتوسط", () => {
  it("وحدة ضعيفة لا تُسقط A1 إذا بلغ المتوسط 60", () => {
    const skills = [s("lesen", 30), s("hören", 90), s("grammatik", 80)];
    expect(examPassed("A1", skills)).toBe(true);
    expect(failingModules("A1", skills)).toEqual([]);
  });

  it("المتوسط دون 60 يسقط", () => {
    expect(examPassed("A2", [s("lesen", 50), s("hören", 50)])).toBe(false);
  });

  it("بلا وحدات لا نجاح", () => {
    expect(examPassed("A1", [])).toBe(false);
    expect(examPassed("B1", [])).toBe(false);
  });
});

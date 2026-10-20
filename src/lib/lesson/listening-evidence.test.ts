import { describe, expect, it } from "vitest";

import { getListeningQuestionTaskId } from "./listening-evidence";

describe("listening task evidence context", () => {
  it("allows dedicated listening evidence only before a transcript is revealed", () => {
    expect(getListeningQuestionTaskId("a1-11", "l1", "q1", false)).toBe(
      "listening:l1:q1",
    );
    expect(getListeningQuestionTaskId("a1-11", "l1", "q1", true)).toBe(
      "listening-transcript:a1-11:l1:q1",
    );
  });
});

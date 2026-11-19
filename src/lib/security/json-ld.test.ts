import { describe, expect, it } from "vitest";

import { serializeJsonLd } from "./json-ld";

describe("serializeJsonLd", () => {
  it("escapes HTML-significant characters and script-closing sequences", () => {
    const serialized = serializeJsonLd({ text: '</script><script>alert("x")</script> &' });

    expect(serialized).not.toContain("<");
    expect(serialized).not.toContain(">");
    expect(serialized).not.toContain("&");
    expect(serialized).toContain("\\u003c/script\\u003e");
    expect(JSON.parse(serialized)).toEqual({ text: '</script><script>alert("x")</script> &' });
  });

  it("escapes JavaScript line separators", () => {
    const serialized = serializeJsonLd({ text: "line\u2028separator\u2029" });

    expect(serialized).not.toContain("\u2028");
    expect(serialized).not.toContain("\u2029");
    expect(JSON.parse(serialized)).toEqual({ text: "line\u2028separator\u2029" });
  });
});

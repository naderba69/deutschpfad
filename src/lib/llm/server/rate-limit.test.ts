import {describe, expect, it} from "vitest";

import {clientIp, RATE_LIMIT_PER_MINUTE, SlidingWindowLimiter} from "./rate-limit";

const headers = (h: Record<string, string>) => ({get: (n: string) => h[n.toLowerCase()] ?? null});

describe("IP العميل", () => {
  it("بلا وكيل موثوق لا نقرأ الترويسات (قابلة للانتحال)", () => {
    expect(clientIp(headers({"x-forwarded-for": "1.2.3.4"}), false)).toBe("unknown");
  });
  it("مع الوكيل الموثوق نأخذ أول عنوان من x-forwarded-for", () => {
    expect(clientIp(headers({"x-forwarded-for": "1.2.3.4, 10.0.0.1"}), true)).toBe("1.2.3.4");
  });
  it("يعود إلى x-real-ip ثم unknown", () => {
    expect(clientIp(headers({"x-real-ip": "5.6.7.8"}), true)).toBe("5.6.7.8");
    expect(clientIp(headers({}), true)).toBe("unknown");
  });
});

describe("حد المعدل 45/دقيقة", () => {
  it("الحد المعلن 45", () => {
    expect(RATE_LIMIT_PER_MINUTE).toBe(45);
  });

  it("يسمح بـ45 ثم يرفض الـ46", () => {
    let t = 0;
    const lim = new SlidingWindowLimiter(45, 60_000, () => t);
    for (let i = 0; i < 45; i++) expect(lim.hit("ip").allowed).toBe(true);
    const denied = lim.hit("ip");
    expect(denied.allowed).toBe(false);
    expect(denied.retryAfterMs).toBe(60_000);
  });

  it("النافذة المنزلقة: بعد دقيقة تعود الطلبات", () => {
    let t = 0;
    const lim = new SlidingWindowLimiter(2, 60_000, () => t);
    lim.hit("ip");
    lim.hit("ip");
    expect(lim.hit("ip").allowed).toBe(false);
    t = 60_001;
    expect(lim.hit("ip").allowed).toBe(true);
  });

  it("الحد لكل IP لا مشترك", () => {
    let t = 0;
    const lim = new SlidingWindowLimiter(1, 60_000, () => t);
    expect(lim.hit("a").allowed).toBe(true);
    expect(lim.hit("b").allowed).toBe(true);
    expect(lim.hit("a").allowed).toBe(false);
  });
});

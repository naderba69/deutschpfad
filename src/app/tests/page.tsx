import type { Metadata } from "next";

import {LazyTestHub} from "@/components/tests/lazy/lazy-test-hub";

export const metadata: Metadata = {
  title: "الاختبارات — تدريبات وتقييمات داخلية",
  description:
    "اختبار تشخيصي وتدريبات للوحدات والمستويات. بعض التدريبات تستلهم أنماطاً من Goethe؛ نتائج المنصة تقديرية وليست امتحاناً رسمياً أو حكماً على الجاهزية.",
};

export default function TestsPage() {
  return <LazyTestHub />;
}

import type { Metadata } from "next";

import {LazyTestHub} from "@/components/tests/lazy/lazy-test-hub";

export const metadata: Metadata = {
  title: "الاختبارات — قس مستواك وجاهزيتك",
  description:
    "اختبار تحديد المستوى التشخيصي لكل مهارة، اختبارات نهاية الوحدات، واختبارات نهاية المستويات بصيغة Goethe-Zertifikat مع توقيت حقيقي.",
};

export default function TestsPage() {
  return <LazyTestHub />;
}

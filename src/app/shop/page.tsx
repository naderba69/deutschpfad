import type { Metadata } from "next";

import {GemsShopClient} from "@/components/shop/gems-shop-client";

export const metadata: Metadata = {
  title: "سوق الجواهر — DeutschPfad",
  description:
    "أنفق جواهرك على ثيمات وشارات وأدوات — كل شيء محلي على جهازك، بلا خادم وبلا أي دفع. مجاني 100%.",
};

export default function ShopPage() {
  return <GemsShopClient />;
}

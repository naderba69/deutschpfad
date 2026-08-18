"use client";

import * as React from "react";
import {BadgeCheck, Check, Gem, RotateCcw, ShoppingBag, Snowflake} from "lucide-react";

import {Button} from "@/components/ui/button";
import {playCorrect} from "@/lib/audio/sfx";
import {getGems, spendGems, addGems} from "@/lib/gamification/gems";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  سوق الجواهر — أنفق ما جمعته من جواهر (100% محلي، Vercel مجاني)
 *  ═══ فئات المشتريات ═══
 *  · ثيمات مخصصة (تغيير لون مميز في لوحتك)
 *  · شارات نادرة تُعرض في ملفك
 *  · تجميد السلسلة (يحفظ سلسلة أيامك من الانكسار)
 *  كل شيء يُخزَّن في LocalStorage — لا خادم ولا دفع.
 * ═══════════════════════════════════════════════════════════
 */

interface ShopItem {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  price: number;
  category: "theme" | "badge" | "utility";
}

const SHOP_ITEMS: ShopItem[] = [
  // ثيمات
  { id: "theme-gold", name: "الثيم الذهبي", desc: "إطار ذهبي في لوحة رحلتك", emoji: "✨", price: 50, category: "theme" },
  { id: "theme-ocean", name: "الثيم المحيطي", desc: "إطار أزرق هادئ", emoji: "🌊", price: 50, category: "theme" },
  { id: "theme-forest", name: "الثيم الأخضر", desc: "إطار أخضر طبيعي", emoji: "🌿", price: 50, category: "theme" },
  // شارات
  { id: "badge-early", name: "شارة الرائد", desc: "من أوائل مستخدمي المنصة", emoji: "🏅", price: 100, category: "badge" },
  { id: "badge-streak", name: "شارة السلسلة", desc: "تظهر في ملفك الشخصي", emoji: "🔥", price: 150, category: "badge" },
  { id: "badge-goethe", name: "شارة الطموح", desc: "لمن يستعد لاختبار Goethe", emoji: "🎯", price: 200, category: "badge" },
  // أدوات
  { id: "freeze", name: "تجميد السلسلة", desc: "يحمي سلسلة أيامك من الانكسار مرة واحدة", emoji: "❄️", price: 80, category: "utility" },
  { id: "gems-pack", name: "استراحة مكافأة", desc: "أدر جواهر إضافية يومياً (تعود غداً)", emoji: "💎", price: 0, category: "utility" },
];

const STORAGE = {
  owned: "dp:shop:owned:v1",
  freeze: "dp:shop:freeze:v1",
  bonus: "dp:shop:bonus:v1",
};

function readSet(key: string): Set<string> {
  try {
    return new Set<string>(JSON.parse(localStorage.getItem(key) ?? "[]"));
  } catch {
    return new Set();
  }
}
function writeSet(key: string, s: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...s]));
  } catch {
    /* تجاهل */
  }
}

export function GemsShopClient() {
  const [gems, setGems] = React.useState<number>(0);
  const [owned, setOwned] = React.useState<Set<string>>(new Set());
  const [freeze, setFreeze] = React.useState(0);
  const [notice, setNotice] = React.useState<string | null>(null);

  React.useEffect(() => {
    setGems(getGems());
    setOwned(readSet(STORAGE.owned));
    setFreeze(Number(localStorage.getItem(STORAGE.freeze) ?? "0"));
  }, []);

  const refresh = () => setGems(getGems());

  const buy = (item: ShopItem) => {
    if (owned.has(item.id)) return;
    if (item.id === "gems-pack") {
      // مكافأة اليوم (مرة كل يوم)
      const today = new Date().toISOString().slice(0, 10);
      if (localStorage.getItem(STORAGE.bonus) === today) {
        setNotice("جمعت مكافأتك اليوم — عُد غداً 💎");
        return;
      }
      localStorage.setItem(STORAGE.bonus, today);
      addGems(15);
      refresh();
      setNotice("+15 جوهرة إضافية! عُد غداً 💎");
      playCorrect();
      return;
    }
    if (item.category === "utility" && item.id === "freeze") {
      if (gems < item.price) {
        setNotice("الجواهر غير كافية — أكمل الدروس واجمع المزيد! 💪");
        return;
      }
      if (spendGems(item.price)) {
        setFreeze((f) => f + 1);
        localStorage.setItem(STORAGE.freeze, String(freeze + 1));
        refresh();
        setNotice(`❄️ حصلت على تجميد سلسلة — لديك الآن ${freeze + 1}`);
        playCorrect();
      }
      return;
    }
    // ثيم أو شارة
    if (gems < item.price) {
      setNotice("الجواهر غير كافية — أكمل الدروس واجمع المزيد! 💪");
      return;
    }
    if (spendGems(item.price)) {
      const next = new Set(owned);
      next.add(item.id);
      setOwned(next);
      writeSet(STORAGE.owned, next);
      refresh();
      setNotice(`✅ اشتريت «${item.name}»!`);
      playCorrect();
    }
  };

  const categories: { id: ShopItem["category"]; label: string; emoji: string }[] = [
    { id: "theme", label: "الثيمات", emoji: "🎨" },
    { id: "badge", label: "الشارات", emoji: "🏅" },
    { id: "utility", label: "أدوات", emoji: "🛠️" },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6 space-y-3">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          🛍️ سوق الجواهر
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          أنفق جواهرك التي جمعتها من الدروس والتمارين على ثيمات وشارات وأدوات —
          كل شيء يعمل محلياً على جهازك (بلا خادم وبلا أي دفع). أكمل الدروس لتكسب المزيد!
        </p>

        {/* رصيد الجواهر */}
        <div className="flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3">
          <Gem className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          <p className="text-sm font-extrabold text-gold-strong">رصيدك: {gems} جوهرة</p>
          <span className="ms-auto flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-xs font-bold text-muted-foreground">
            <Snowflake className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
            تجميد متاح: {freeze}
          </span>
        </div>

        {notice && (
          <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-bold text-primary" role="status">
            {notice}
          </div>
        )}
      </div>

      {categories.map((cat) => (
        <section key={cat.id} className="mb-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-extrabold">
            <span aria-hidden="true">{cat.emoji}</span> {cat.label}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SHOP_ITEMS.filter((i) => i.category === cat.id).map((item) => {
              const isOwned = owned.has(item.id);
              return (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border bg-card p-4",
                    isOwned && "border-success/50 bg-success/5",
                  )}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-extrabold">{item.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                    <div className="mt-2">
                      <Button
                        size="sm"
                        variant={isOwned ? "secondary" : item.id === "gems-pack" ? "gold" : "default"}
                        disabled={isOwned}
                        onClick={() => buy(item)}
                        className="gap-1.5"
                      >
                        {isOwned ? (
                          <>
                            <Check className="h-3.5 w-3.5" aria-hidden="true" /> مملوك
                          </>
                        ) : item.id === "gems-pack" ? (
                          <>
                            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> مكافأة اليوم (+15)
                          </>
                        ) : (
                          <>
                            <Gem className="h-3.5 w-3.5" aria-hidden="true" /> {item.price}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* الشارات المملوكة تظهر هنا */}
      {owned.size > 0 && (
        <section className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4">
          <h2 className="flex items-center gap-2 text-sm font-extrabold">
            <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            شاراتك ومقتنياتك
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[...owned].map((id) => {
              const item = SHOP_ITEMS.find((i) => i.id === id);
              if (!item) return null;
              return (
                <span key={id} className="inline-flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-xs font-bold">
                  <span aria-hidden="true">{item.emoji}</span> {item.name}
                </span>
              );
            })}
          </div>
        </section>
      )}

      <p className="mt-6 flex items-center gap-2 rounded-xl bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
        <ShoppingBag className="h-4 w-4" aria-hidden="true" />
        كل عمليات الشراء محلية على جهازك — شارك أصدقاءك الرابط وسيكون لكل منهم سوقه الخاص.
      </p>
    </div>
  );
}

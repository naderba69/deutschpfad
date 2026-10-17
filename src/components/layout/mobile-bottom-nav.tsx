"use client";

import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BookOpen, Home, LayoutDashboard, RefreshCcw} from "lucide-react";

import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  شريط التنقل السفلي للجوال — 4 تبويبات ثابتة
 *  (الرئيسية / المسار / المراجعة / لوحتي)
 *  يظهر فقط على الشاشات الصغيرة (md:hidden)
 * ═══════════════════════════════════════════════════════════
 */
const TABS = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/learning-path", label: "المسار", icon: BookOpen },
  { href: "/review/weekly", label: "المراجعة", icon: RefreshCcw },
  { href: "/dashboard", label: "لوحتي", icon: LayoutDashboard },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-md md:hidden"
      aria-label="التنقل السفلي"
    >
      <div className="mx-auto grid max-w-lg grid-cols-4">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active =
            pathname === tab.href ||
            (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-bold transition-colors",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {tab.label}
              {active && <span className="h-1 w-6 rounded-full bg-primary" aria-hidden="true" />}
            </Link>
          );
        })}
      </div>
      {/* حاجز أمان للأجهزة ذات شريط التنقل أسفل الشاشة */}
      <div className="h-[env(safe-area-inset-bottom)]" aria-hidden="true" />
    </nav>
  );
}

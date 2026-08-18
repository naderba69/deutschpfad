"use client";

import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ChevronDown, Menu, Percent, Settings} from "lucide-react";

import {Logo} from "@/components/brand/logo";
import {DueCounter} from "@/components/layout/due-counter";
import {ThemeToggle} from "@/components/layout/theme-toggle";
import {useProgress} from "@/components/providers/progress-provider";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {UsageCounter} from "@/components/llm/usage-counter";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {getOverallProgress} from "@/lib/progress-selectors";
import {siteConfig} from "@/lib/site-config";
import {cn} from "@/lib/utils";

/** شارة التقدم الإجمالي الظاهرة في الهيدر */
function HeaderProgress() {
  const { completedUnits, isHydrated } = useProgress();
  const pct = isHydrated ? getOverallProgress(completedUnits) : null;

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/learning-path"
            aria-label="التقدم الإجمالي في المنهج"
            className="hidden sm:inline-flex"
          >
            <Badge variant="secondary" className="gap-1.5 px-3 py-1">
              <Percent className="h-3.5 w-3.5 text-primary" />
              {/* suppressHydrationWarning: «…» قبل التحميل ثم النسبة — تغيّر مقصود */}
              <span className="font-de font-semibold" suppressHydrationWarning>{pct === null ? "…" : `${pct}%`}</span>
            </Badge>
          </Link>
        </TooltipTrigger>
        <TooltipContent>تقدمك الإجمالي في المنهج (A1→B2)</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="التنقل الرئيسي">
      {/* رابطان أساسيان دائمان */}
      <Link
        href="/learning-path"
        onClick={onNavigate}
        className={cn(
          "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
          pathname.startsWith("/learning-path") || pathname.startsWith("/lesson")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-foreground",
        )}
      >
        مسار التعلم
      </Link>
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className={cn(
          "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
          pathname.startsWith("/dashboard")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-foreground",
        )}
      >
        لوحتي
      </Link>

      {/* المجموعات المنسدلة (4) — تنظيم احترافي */}
      {siteConfig.navGroups.map((group) => (
        <DropdownMenu key={group.label}>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {group.label}
              <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-52">
            {group.items.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href} onClick={onNavigate} className="cursor-pointer">
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="shrink-0 rounded-lg py-2" aria-label="درب الألمانية — الرئيسية">
          <Logo />
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <HeaderProgress />
          <DueCounter />
          <UsageCounter />
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            aria-label="الإعدادات والبيانات"
          >
            <Link href="/settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild className="hidden lg:inline-flex" size="sm">
            <Link href="/learning-path">ابدأ رحلتك</Link>
          </Button>

          {/* قائمة الجوال */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="فتح القائمة">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 pt-4">
                <NavLinks
                  className="flex-col items-stretch"
                  onNavigate={() => setOpen(false)}
                />
              </div>
              <div className="mt-6 border-t pt-4">
                <p className="mb-2 text-xs font-semibold text-muted-foreground">
                  المستويات (CERR)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.levelsNav.map((lvl) => (
                    <SheetClose key={lvl.code} asChild>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={lvl.href}>
                          <span className="font-de font-bold">{lvl.code}</span>
                        </Link>
                      </Button>
                    </SheetClose>
                  ))}
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href="/learning-path" onClick={() => setOpen(false)}>
                    ابدأ رحلتك مجاناً
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

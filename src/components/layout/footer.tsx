import Link from "next/link";
import {Github, Globe, Heart, Mail} from "lucide-react";

import {Logo} from "@/components/brand/logo";
import {Separator} from "@/components/ui/separator";
import {siteConfig} from "@/lib/site-config";

/** فوتر الموقع — عمود الهوية + روابط المنصة + المستويات + مراجع سريعة */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* الهوية */}
          <div className="space-y-4">
            <Link href="/" aria-label="درب الألمانية — الرئيسية" className="inline-block rounded-lg py-1">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              منصة عربية متكاملة لتعليم اللغة الألمانية من A1 إلى B2 وفق منهجية معهد غوته
              ومعايير CEFR — مجانية بالكامل.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Globe, label: "الموقع الرسمي", href: siteConfig.url },
                { icon: Github, label: "المستودع على GitHub", href: "https://github.com" },
                { icon: Mail, label: "البريد الإلكتروني", href: "mailto:info@deutschpfad.app" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* روابط المنصة */}
          <div>
            <h3 className="mb-4 text-sm font-bold">المنصة</h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks["منصة"].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* المستويات */}
          <div>
            <h3 className="mb-4 text-sm font-bold">المستويات</h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.levelsNav.map((lvl) => (
                <li key={lvl.code}>
                  <Link
                    href={lvl.href}
                    className="inline-block py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-de font-bold">{lvl.code}</span>
                    {" — "}
                    {lvl.code === "A1"
                      ? "المبتدئ"
                      : lvl.code === "A2"
                        ? "ما قبل المتوسط"
                        : lvl.code === "B1"
                          ? "المتوسط"
                          : "المتقدم"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* مراجع سريعة */}
          <div>
            <h3 className="mb-4 text-sm font-bold">مراجع سريعة</h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks["مراجع سريعة"].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}{" "}
            <span className="font-de" dir="ltr">
              (DeutschPfad)
            </span>{" "}
            — جميع الحقوق محفوظة
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            صُنع بحب للمتعلمين العرب
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import {Compass, Home} from "lucide-react";

import {Button} from "@/components/ui/button";

/**
 * صفحة 404 — صفحة غير موجودة
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="font-de text-7xl font-extrabold text-primary sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">هذه الصفحة غير موجودة</h1>
      <p className="mt-3 max-w-md text-balance text-muted-foreground">
        يبدو أنك وصلت إلى طريق لا يقود إلى أي درس! ربما يكون الرابط قديماً أو الصفحة
        ستُبنى في مرحلة قادمة من المشروع.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="h-5 w-5" aria-hidden="true" />
            العودة للرئيسية
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/learning-path">
            <Compass className="h-5 w-5" aria-hidden="true" />
            استكشف مسار التعلم
          </Link>
        </Button>
      </div>
    </div>
  );
}

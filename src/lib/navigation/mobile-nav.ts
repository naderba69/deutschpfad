export function isMobileNavTabActive(pathname: string, href: string): boolean {
  return (
    pathname === href ||
    (href !== "/" && pathname.startsWith(href)) ||
    (href === "/learning-path" && (pathname.startsWith("/lesson/") || pathname.startsWith("/level/")))
  );
}

"use client";

import { T, useLocale } from "gt-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const localeNames: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  zh: "中文",
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const segments = pathname.split("/");
  const currentPage = segments[2] || "";

  const links = [
    { href: `/${locale}`, key: "", label: <T id="nav.pricing">Pricing</T> },
    {
      href: `/${locale}/features`,
      key: "features",
      label: <T id="nav.features">Features</T>,
    },
    { href: `/${locale}/faq`, key: "faq", label: <T id="nav.faq">FAQ</T> },
    {
      href: `/${locale}/contact`,
      key: "contact",
      label: <T id="nav.contact">Contact</T>,
    },
  ];

  function switchLocale(newLocale: string) {
    const segs = pathname.split("/");
    segs[1] = newLocale;
    router.push(segs.join("/"));
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-blue-600">GT</span>
          <span className="text-lg font-semibold text-zinc-900 dark:text-white">
            <T id="nav.brand">Translate</T>
          </span>
        </div>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.key
                  ? "text-blue-600"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <select
            value={locale}
            onChange={(e) => switchLocale(e.target.value)}
            className="rounded-md border border-zinc-200 bg-white px-2 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {Object.entries(localeNames).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

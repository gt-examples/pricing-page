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
          <a
            href="https://github.com/gt-examples/pricing-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
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

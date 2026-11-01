"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/blog" as const, label: "Блог" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(4,8,19,0.80)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(4,8,19,0.60)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Hanna Lukina"
            width={180}
            height={48}
            className="h-auto w-[160px] md:w-[180px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-on-accent shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
          >
            Написати в особисті
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(4,8,19,0.90)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[24px] px-4 py-3 text-sm font-medium text-text-muted hover:bg-[rgba(59,156,255,0.12)] hover:text-text"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold text-on-accent"
            >
              Написати в особисті
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
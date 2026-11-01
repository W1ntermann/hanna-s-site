"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hanna Lukina"
              width={180}
              height={48}
              className="h-auto w-[140px] md:w-[160px]"
            />
          </Link>
          <div className="mt-4 text-base text-[var(--text-muted)]/80">
            Перетворюю експертність у систему, яка продає.
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-light)]/80">
            Сторінки
          </div>
          <Link href="/blog" className="text-[var(--text-muted)] hover:text-[var(--text)]">
            Блог
          </Link>
          <Link href="/offer" className="text-[var(--text-muted)] hover:text-[var(--text)]">
            Договір оферти
          </Link>
          <Link href="/privacy" className="text-[var(--text-muted)] hover:text-[var(--text)]">
            Політика конфіденційності
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-light)]/80">
            Контакти
          </div>
          <a
            href="https://telegram.me/Anie_1212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <Send className="h-4 w-4" /> Telegram: @Anie_1212
          </a>
          <a
            href="mailto:admin@annalukina.top"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <Mail className="h-4 w-4" /> admin@annalukina.top
          </a>
          <span className="text-[var(--text-muted)]/80">ФОП Лукіна Анна</span>
          <span className="text-[var(--text-muted)]/80">ЄДРПОУ 3304516306</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-light)]/80">
            Соцмережі
          </div>
          <a
            href="https://t.me/Anie_1212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-on-accent shadow-[0_5px_0_var(--accent-deep)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
          >
            <Send className="h-4 w-4" /> Мій Telegram
          </a>
          <a
            href="https://www.instagram.com/lukinamarketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] px-8 py-4 text-sm font-semibold text-[var(--accent-light)] hover:bg-[rgba(59,156,255,0.12)] transition-all duration-250"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-[var(--text-muted)]/60 md:flex-row md:px-6">
          <div>© {new Date().getFullYear()} Hanna Lukina. Всі права захищені.</div>
          <div>Зроблено з увагою до деталей.</div>
        </div>
      </div>
    </footer>
  );
}
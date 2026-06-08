"use client";

import Link from "next/link";
import { Send, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-footer-foreground/60">
            HANNALUKINA
          </div>
          <div className="mt-3 text-xl font-semibold">Анна Лукіна</div>
          <div className="mt-2 text-sm text-footer-foreground/70">
            Ваш архітектор сенсів. Перетворюю експертність у систему, яка продає.
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-footer-foreground/60">
            Сторінки
          </div>
          <Link href="/expert" className="text-footer-foreground/85 hover:text-footer-foreground">
            Експерту
          </Link>
          <Link href="/blog" className="text-footer-foreground/85 hover:text-footer-foreground">
            Блог
          </Link>
          <Link href="/test" className="text-footer-foreground/85 hover:text-footer-foreground">
            Міні-тест на сенси
          </Link>
          <Link href="/privacy" className="text-footer-foreground/85 hover:text-footer-foreground">
            Політика конфіденційності
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-footer-foreground/60">
            Контакти
          </div>
          <a
            href="mailto:admin@annalukina.top"
            className="inline-flex items-center gap-2 text-footer-foreground/85 hover:text-footer-foreground"
          >
            <Mail className="h-4 w-4" /> admin@annalukina.top
          </a>
          <span className="text-footer-foreground/70">ФОП АННА ЛУКІНА</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-footer-foreground/60">
            Соцмережі
          </div>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
          >
            <Send className="h-4 w-4" /> Мій Telegram
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-footer-foreground/20 px-4 py-2.5 text-sm font-semibold text-footer-foreground transition hover:bg-footer-foreground/5"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-footer-foreground/60 md:flex-row">
          <div>© {new Date().getFullYear()} Hanna Lukina. Всі права захищені.</div>
          <div>Зроблено з увагою до деталей.</div>
        </div>
      </div>
    </footer>
  );
}
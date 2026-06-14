"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Hanna Lukina"
              width={180}
              height={48}
              className="h-auto w-[140px] md:w-[160px]"
            />
          </Link>
          <div className="mt-4 text-sm text-footer-foreground/70">
            Перетворюю експертність у систему, яка продає.
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-footer-foreground/60">
            Сторінки
          </div>
          <Link href="/blog" className="text-footer-foreground/85 hover:text-footer-foreground">
            Блог
          </Link>
          <Link href="/offer" className="text-footer-foreground/85 hover:text-footer-foreground">
            Договір оферти
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
            href="https://t.me/Anie_1212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-footer-foreground/85 hover:text-footer-foreground"
          >
            <Send className="h-4 w-4" /> Telegram: @Anie_1212
          </a>
          <a
            href="mailto:admin@annalukina.top"
            className="inline-flex items-center gap-2 text-footer-foreground/85 hover:text-footer-foreground"
          >
            <Mail className="h-4 w-4" /> admin@annalukina.top
          </a>
          <span className="text-footer-foreground/70">ФОП Лукіна Анна</span>
          <span className="text-footer-foreground/70">ЄДРПОУ 3304516306</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-footer-foreground/60">
            Соцмережі
          </div>
          <a
            href="https://t.me/Anie_1212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
          >
            <Send className="h-4 w-4" /> Мій Telegram
          </a>
          <a
            href="https://www.instagram.com/lukinamarketing/"
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
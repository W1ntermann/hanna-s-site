"use client";

import { Send, Instagram, Mail } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { trackEvent } from "@/lib/meta-pixel";

const channels = [
  {
    icon: Send,
    title: "Telegram",
    text: "Найшвидший спосіб відповіді — зазвичай протягом кількох годин.",
    cta: "Написати в Telegram",
    href: "https://telegram.me/Anie_1212",
    accent: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Подивіться кейси та напишіть у Direct.",
    cta: "Перейти в Instagram",
    href: "https://www.instagram.com/lukinamarketing/",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Зручно для розгорнутих листів і пропозицій співпраці.",
    cta: "admin@annalukina.top",
    href: "mailto:admin@annalukina.top",
  },
];

export function ContactContent() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Контакти"
        title="Напишіть в особисті"
        subtitle="Розкажіть коротко про вашу ситуацію — і ми оберемо найкращий формат співпраці."
      />

      <section className="mx-auto max-w-[1120px] px-4 py-24 md:py-32">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={() => trackEvent("Contact", { channel: c.title })}
              className={`group flex flex-col rounded-[24px] border p-7 transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_0_40px_-8px_var(--accent-glow)] backdrop-blur-[14px] ${
                c.accent
                  ? "border-[var(--border-strong)] bg-[rgba(59,156,255,0.10)] hover:border-[var(--border-strong)]"
                  : "border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(59,156,255,0.10)] text-[var(--accent-light)]">
                <c.icon className="h-5 w-5 text-[var(--accent-light)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{c.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-[var(--text-muted)]">{c.text}</p>
              <span className="mt-5 text-sm font-semibold text-[var(--accent-light)] group-hover:text-[var(--text)]">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-8 text-center md:p-10 backdrop-blur-[14px]">
          <div className="text-sm uppercase tracking-[0.2em] text-[var(--accent-light)]/80">Реквізити</div>
          <div className="mt-3 text-lg font-semibold text-[var(--text)]">ФОП АННА ЛУКІНА</div>
          <a
            href="mailto:admin@annalukina.top"
            onClick={() => trackEvent("Contact", { channel: "Email (footer)" })}
            className="mt-1 inline-block text-[var(--accent-light)] hover:underline hover:text-[var(--text)]"
          >
            admin@annalukina.top
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
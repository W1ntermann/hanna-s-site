import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-[var(--border)]/40 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1120px] px-4 py-24 text-center md:py-32">
        {eyebrow && (
          <div className="mb-6 eyebrow">
            {eyebrow}
          </div>
        )}
        <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-[800] leading-[1.02] tracking-tight text-[var(--text)] md:text-[clamp(2.25rem,8vw,4.5rem)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.55] text-[var(--text-muted)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
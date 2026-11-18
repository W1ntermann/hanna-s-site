import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Gem, MessageCircle, Send, ShieldCheck, ChartNoAxesCombined } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const metadata: Metadata = {
  title: "LUKINA | PRO LEADGEN — Канал для таргетологів",
  description:
    "Канал для таргетологів про лідген, що доносить цінність роботи саме з вами ще до першого контакту. Приєднуйтеся до каналу LUKINA | PRO LEADGEN.",
  openGraph: {
    title: "LUKINA | PRO LEADGEN — Канал для таргетологів — Hanna Lukina",
    description:
      "Про лідген, що доносить до потенційного клієнта цінність роботи саме з тобою ще до першого контакту.",
    type: "website",
  },
};

const telegramUrl = "https://t.me/+BX_IRfmNH0gyMDky";

const benefits = [
  {
    icon: Gem,
    title: "Корисні матеріали",
    description: "Практичні знання та інструменти для роботи з клієнтами.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Розбір логіки",
    description: "Розуміння того, як працює лідогенерація та продажі.",
  },
  {
    icon: MessageCircle,
    title: "Чат спілкування",
    description: "Обмін досвідом, думками та професійними інсайтами.",
  },
];

export default function InvitationPage() {
  return (
    <SiteLayout>
      <section className="relative z-10 mx-auto max-w-[880px] px-6 py-12 md:py-20 rounded-[32px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-[0_0_60px_-24px_var(--accent-glow)] backdrop-blur-[24px]">
        <Image
          src="/images/forLeadGen.jpg"
          alt="LUKINA | PRO LEADGEN"
          width={1584}
          height={396}
          priority
          className="mx-auto max-w-[640px] w-full h-auto rounded-[20px] object-cover border border-[var(--border)] mb-10 md:mb-12"
        />

        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[rgba(59,156,255,0.08)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-light)] backdrop-blur-[14px]">
            <Send className="h-3 w-3" fill="currentColor" />
            <span>LUKINA | PRO LEADGEN</span>
          </div>

          <h1 className="text-[clamp(1.75rem,6vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
            Канал для таргетологів
          </h1>

          <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[var(--text-muted)]">
            Про лідген, що доносить до потенційного клієнта цінність роботи саме з{" "}
            <span className="font-semibold text-[var(--text)] [text-shadow:0_0_14px_var(--accent-glow)]">
              тобою
            </span>
            ще до першого контакту.
          </p>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--bg)] shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
          >
            <span className="flex items-center justify-center">
              <Send className="h-4 w-4" fill="currentColor" />
            </span>
            <span>Перейти в канал</span>
            <ArrowUpRight className="h-4 w-4" fill="currentColor" />
          </a>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex flex-col items-center text-center rounded-[24px] border p-6 transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_0_30px_-8px_var(--accent-glow)] backdrop-blur-[14px] border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.08)] to-[rgba(10,18,36,0.6)] hover:border-[var(--border-strong)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(59,156,255,0.10)] text-[var(--accent-light)] mb-4">
                  <benefit.icon className="h-5 w-5 text-[var(--accent-light)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[var(--text-muted)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}


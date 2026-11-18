import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Gem, MessageCircle, Send, ShieldCheck, ChartNoAxesCombined } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

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
      <section className="mx-auto max-w-[1120px] px-4 py-8 md:py-16 relative overflow-hidden">
        <Image
          src="/images/forLeadGen.jpg"
          alt="LUKINA | PRO LEADGEN"
          width={1584}
          height={396}
          priority
          className="mx-auto max-w-full h-auto rounded-[24px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-[0_0_40px_-16px_var(--accent-glow)] backdrop-blur-[14px]"
        />
      </section>
      <PageHero
        title="Канал для таргетологів"
        subtitle={
          <>
            Про лідген, що доносить до потенційного клієнта цінність роботи{" "}
            <span className="font-semibold text-[var(--text)]">саме з тобою</span> ще до першого контакту.
          </>
        }
      />
      <section className="mx-auto max-w-[1120px] px-4 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative glows (ambient analog) */}
        <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--accent)]/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[80px]" />

        <div className="relative z-10 grid gap-12 md:grid-cols-12 items-start">
          {/* Hero content column */}
          <div className="md:col-span-7 space-y-8">
            {/* Telegram label (channel-label glass analog) */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[rgba(59,156,255,0.08)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-light)] backdrop-blur-[14px] shadow-[0_0_20px_-10px_var(--accent-glow)]">
              <Send className="h-4 w-4" fill="currentColor" />
              <span>Канал для таргетологів</span>
            </div>

            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--accent-light)]/70">
              LUKINA <span className="text-[var(--text)]">| PRO LEADGEN</span>
            </div>

            <p className="text-[17px] leading-[1.65] text-[var(--text-muted)]">
              Про лідген, що доносить до потенційного клієнта{" "}
              <span className="font-semibold text-[var(--text)] [text-shadow:0_0_14px_var(--accent-glow)]">
                цінність роботи саме з тобою
              </span>
              ще до першого контакту.
            </p>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--bg)] shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
            >
              <span className="flex items-center justify-center">
                <Send className="h-4 w-4" fill="currentColor" />
              </span>
              <span>Перейти в канал</span>
              <ArrowUpRight className="h-4 w-4" fill="currentColor" />
            </a>

          </div>

          {/* Visual column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative h-[320px] w-full max-w-[340px] rounded-[32px] border border-[var(--border-strong)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-6 backdrop-blur-[14px] shadow-[0_0_40px_-16px_var(--accent-glow)]">
              <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider text-[var(--accent-light)]/80">
                <span>LEAD GENERATION</span>
                <ChartNoAxesCombined className="h-3 w-3" strokeWidth={1.5} />
              </div>
              <div className="grid grid-cols-7 gap-1 h-[140px]">
                {[35, 52, 43, 68, 57, 82, 100].map((height) => (
                  <div
                    key={height}
                    className="rounded-t-sm bg-[var(--accent-light)]/60 animate-pulse"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-[var(--text-muted)]/70">
                <span>Strategy</span>
                <span>Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="mx-auto max-w-[1120px] px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[rgba(59,156,255,0.08)] px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-light)] backdrop-blur-[14px] mx-auto mb-4">
            <span className="h-1 w-1 rounded-full bg-[var(--accent-light)]" />
            <span>Що дає приєднання</span>
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] font-bold leading-tight text-[var(--text)]">
            Корисні матеріали, розбір логіки та спілкування
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--text-muted)]">
            Отримайте доступ до матеріалів, які допоможуть побудувати систему лідогенерації, яка продає ще до першого контакту.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <a
              key={benefit.title}
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-[24px] border p-7 transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_0_40px_-8px_var(--accent-glow)] backdrop-blur-[14px] border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] hover:border-[var(--border-strong)]`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(59,156,255,0.10)] text-[var(--accent-light)]">
                <benefit.icon className="h-5 w-5 text-[var(--accent-light)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{benefit.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-[var(--text-muted)]">
                {benefit.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-[var(--accent-light)] group-hover:text-[var(--text)]">
                Приєднатися →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA bottom strip */}
      <section className="mx-auto max-w-[1120px] px-4 py-20 md:py-28">
        <div className="rounded-[32px] border border-[var(--border-strong)] bg-gradient-to-br from-[rgba(59,156,255,0.14)] to-[rgba(10,18,36,0.94)] p-8 text-center shadow-[0_0_48px_-24px_var(--accent-glow)] backdrop-blur-[14px] md:p-12">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold leading-tight text-[var(--text)]">
            Приєднуйтеся до каналу LUKINA | PRO LEADGEN
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--text-muted)]">
            Канал для таргетологів про лідген, цінність та продажі ще до першого контакту.
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--bg)] shadow-[0_5px_0_var(--accent-deep)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px] active:shadow-[0_2px_0_var(--accent-deep)]"
          >
            <span className="flex items-center justify-center">
              <Send className="h-4 w-4" fill="currentColor" />
            </span>
            <span>Перейти в канал</span>
            <ArrowRight className="h-4 w-4" fill="currentColor" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Brain, BookOpen, MessageCircle, Send } from "lucide-react";
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
    id: "materials",
    icon: BookOpen,
    title: (
      <>
        Корисні <span className="font-semibold text-[var(--text)]">матеріали</span>
      </>
    ),
    description: (
      <>
        Практичні <span className="font-semibold text-[var(--text)]">знання</span> та <span className="font-semibold text-[var(--text)]">інструменти</span> для роботи з клієнтами.
      </>
    ),
  },
  {
    id: "logic",
    icon: Brain,
    title: (
      <>
        Розбір <span className="font-semibold text-[var(--text)]">логіки</span>
      </>
    ),
    description: (
      <>
        Розуміння того, як працює <span className="font-semibold text-[var(--text)]">лідогенерація</span> та продажі.
      </>
    ),
  },
  {
    id: "chat",
    icon: MessageCircle,
    title: (
      <>
        Чат <span className="font-semibold text-[var(--text)]">спілкування</span>
      </>
    ),
    description: (
      <>
        Обмін <span className="font-semibold text-[var(--text)]">досвідом</span>, думками та професійними <span className="font-semibold text-[var(--text)]">інсайтами</span>.
      </>
    ),
  },
];

export default function InvitationPage() {
  return (
    <SiteLayout>
      <section className="relative z-10 mx-auto max-w-[880px] px-6 py-12 md:py-20 rounded-[32px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-[0_0_60px_-24px_var(--accent-glow)] backdrop-blur-[24px]">
        <Image
          src="/images/leadGenNew.jpg"
          alt="LUKINA | PRO LEADGEN"
          width={1584}
          height={396}
          priority
          className="mx-auto w-full h-auto rounded-[20px] object-cover border border-[var(--border)] mb-10 md:mb-12"
        />

        <div className="text-center space-y-8">

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
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#0088cc] px-8 py-4 text-sm font-semibold text-white shadow-[0_5px_0_#006fa3] shadow-[0_12px_30px_-8px_rgba(0,136,204,0.35)] transition-all duration-250 hover:bg-[#006fa3] active:translate-y-[3px] active:shadow-[0_2px_0_#005a8a]"
          >
            <span className="flex items-center justify-center">
              <Send className="h-4 w-4" fill="currentColor" />
            </span>
            <span>Перейти в канал</span>
            <ArrowUpRight className="h-4 w-4" fill="currentColor" />
          </a>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(59,156,255,0.10)] text-[var(--accent-light)]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
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


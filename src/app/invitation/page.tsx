import type { Metadata } from "next";
import Image from "next/image";
import { Send } from "lucide-react";
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
      <div className="mx-auto max-w-[880px] px-6 py-12 md:py-20 text-center space-y-10">
        <Image
          src="/images/leadGenNew.jpg"
          alt="LUKINA | PRO LEADGEN"
          width={1584}
          height={396}
          priority
          className="mx-auto w-full h-auto rounded-[20px] object-cover border border-[var(--border)] mb-10 md:mb-12"
        />

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
          <Send className="h-4 w-4" fill="currentColor" />
          <span>Перейти в канал</span>
        </a>

        <div className="mt-12 flex flex-row gap-6 justify-center">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center flex-1 max-w-[240px]">
              <h3 className="text-base font-semibold text-[var(--text)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[13px] leading-[1.5] text-[var(--text-muted)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

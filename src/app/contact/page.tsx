import { Send, Instagram, Mail } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const metadata = {
  title: "Контакти",
  description: "Напишіть мені в особисті — Telegram, Instagram або електронною поштою.",
  openGraph: {
    title: "Контакти — Hanna Lukina",
    description: "Зв'яжіться зі мною зручним способом.",
  },
};

const channels = [
  {
    icon: Send,
    title: "Telegram",
    text: "Найшвидший спосіб відповіді — зазвичай протягом кількох годин.",
    cta: "Написати в Telegram",
    href: "https://t.me/",
    accent: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Подивіться кейси та напишіть у Direct.",
    cta: "Перейти в Instagram",
    href: "https://instagram.com/",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Зручно для розгорнутих листів і пропозицій співпраці.",
    cta: "admin@annalukina.top",
    href: "mailto:admin@annalukina.top",
  },
];

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Контакти"
        title="Напишіть в особисті"
        subtitle="Розкажіть коротко про вашу ситуацію — і ми оберемо найкращий формат співпраці."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border p-7 transition hover:-translate-y-0.5 hover:shadow-lg ${
                c.accent
                  ? "border-primary/40 bg-accent/40 hover:border-primary"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/75">{c.text}</p>
              <span className="mt-5 text-sm font-semibold text-primary group-hover:underline">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center md:p-10">
          <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Реквізити</div>
          <div className="mt-3 text-lg font-semibold text-foreground">ФОП АННА ЛУКІНА</div>
          <a href="mailto:admin@annalukina.top" className="mt-1 inline-block text-primary hover:underline">
            admin@annalukina.top
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const metadata = {
  title: "Блог",
  description: "Думки, кейси та інструменти про сенси, контент і прогрів клієнтів.",
  openGraph: {
    title: "Блог — Hanna Lukina",
    description: "Розбори, кейси та практики архітектури сенсів.",
  },
};

const posts = [
  {
    title: "Чому контент «не продає» і що з цим робити",
    excerpt:
      "Три типові помилки в блозі експерта, через які людина читає, ставить лайк і йде до конкурента.",
    date: "10 травня 2026",
    read: "6 хв",
    tag: "Контент",
  },
  {
    title: "«Скільки коштує?» як симптом",
    excerpt:
      "Питання про ціну майже завжди означає, що цінність не була показана раніше. Розбираємо чому.",
    date: "28 квітня 2026",
    read: "8 хв",
    tag: "Продажі",
  },
  {
    title: "Маршрут клієнта: 5 точок, де ви його втрачаєте",
    excerpt: "Карта типових «дір» у воронці експерта та як їх закрити без бюджету на рекламу.",
    date: "14 квітня 2026",
    read: "10 хв",
    tag: "Стратегія",
  },
  {
    title: "Як писати тексти, що відпрацьовують заперечення",
    excerpt:
      "Структура поста, після якого клієнт пише не «а скільки?», а «коли можемо почати?».",
    date: "2 квітня 2026",
    read: "7 хв",
    tag: "Копірайтинг",
  },
];

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Блог"
        title="Сенси, контент, продажі — без води."
        subtitle="Короткі розбори та практики, які допомагають експертам збирати власну систему прогріву."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                  {p.tag}
                </span>
                <span>{p.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {p.read}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/75">
                {p.excerpt}
              </p>
              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Читати далі <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
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
    title: "Чому у вас купа лайків, а заявок немає?",
    excerpt:
      "Три типові помилки в блозі експерта, через які людина читає, ставить лайк і йде до конкурента.",
    date: "10 травня 2026",
    read: "6 хв",
    tag: "Контент",
    href: "https://telegram.me/Cod4Sales/209",
  },
  {
    title: "«Скільки коштує?» як симптом",
    excerpt:
      "Питання про ціну майже завжди означає, що цінність не була показана раніше. Розбираємо чому.",
    date: "28 квітня 2026",
    read: "8 хв",
    tag: "Продажі",
    href: "https://telegram.me/Cod4Sales/185",
  },
  {
    title: "Чому одна людина готова купити у вас майже одразу, а інша і через рік не купить?",
    excerpt:
      "Різниця між «гарячим» і «холодним» клієнтом — і як з цим працювати експерту.",
    date: "14 квітня 2026",
    read: "7 хв",
    tag: "Стратегія",
    href: "https://telegram.me/Cod4Sales/58",
  },
  {
    title: "Для експертів, які продають свої послуги на консультаціях та не можуть довести клієнта до покупки",
    excerpt:
      "Як перестати продавати в особистих повідомленнях з нуля і збудувати систему прогріву.",
    date: "2 квітня 2026",
    read: "8 хв",
    tag: "Копірайтинг",
    href: "https://telegram.me/Cod4Sales/152",
  },
];

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Блог"
        title="Сенси, контент, продажі"
        subtitle="Короткі розбори та практики, які допомагають експертам збирати власну систему прогріву."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.href}
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
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {p.title}
                </a>
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/75">
                {p.excerpt}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Читати далі <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
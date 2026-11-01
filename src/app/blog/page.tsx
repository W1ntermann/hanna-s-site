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

      <section className="mx-auto max-w-[1120px] px-4 py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.href}
              className="group flex flex-col rounded-[24px] border border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-6 transition-all duration-250 hover:border-[var(--border-strong)] hover:-translate-y-[3px] hover:shadow-[0_0_40px_-8px_var(--accent-glow)] backdrop-blur-[14px]"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                <span className="rounded-full border border-[var(--border)] bg-[rgba(59,156,255,0.12)] px-2.5 py-1 font-semibold uppercase tracking-wider text-[var(--accent-light)]">
                  {p.tag}
                </span>
                <span>{p.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[var(--accent-light)]" /> {p.read}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--text)] group-hover:text-[var(--accent-light)]">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {p.title}
                </a>
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-[var(--text-muted)]">
                {p.excerpt}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-light)]"
              >
                Читати далі <ArrowRight className="h-4 w-4 text-[var(--accent-light)]" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
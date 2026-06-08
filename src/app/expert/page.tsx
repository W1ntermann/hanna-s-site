import Link from "next/link";
import { ArrowRight, Target, Layers, MessageSquare, Sparkles } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const metadata = {
  title: "Експерту",
  description:
    "Для експертів: як перетворити блог і рекламу у систему, що приводить готових до покупки клієнтів.",
  openGraph: {
    title: "Експерту — Hanna Lukina",
    description: "Архітектура сенсів для експертів: від першого дотику до «коли можемо почати?»",
  },
};

const pillars = [
  {
    icon: Target,
    title: "Точна позиція",
    body: "Формулюємо вашу унікальність так, щоб клієнт впізнавав себе у першому ж абзаці.",
  },
  {
    icon: Layers,
    title: "Контент-маршрут",
    body: "Послідовність торкань, яка веде холодну аудиторію до «це саме те, що мені потрібно».",
  },
  {
    icon: MessageSquare,
    title: "Прогрів у блозі",
    body: "Тексти, які відпрацьовують заперечення замість вас, ще до особистого діалогу.",
  },
  {
    icon: Sparkles,
    title: "Запуск і масштаб",
    body: "Збираємо систему, тестуємо й тільки тоді відкриваємо рекламний кран.",
  },
];

export default function ExpertPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Для експертів"
        title="Експертність ≠ продажі. Систему — можна побудувати."
        subtitle="Якщо ви консультант, наставник чи послуговий бізнес — ця сторінка про те, як перестати продавати з нуля у кожних особистих."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-accent/40 p-8 text-center md:p-10">
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">
            Готові подивитись, де саме система «протікає»?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Пройдіть короткий розбір — і я поверну персональні рекомендації під вашу ситуацію.
          </p>
          <Link
            href="/test"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:brightness-105"
          >
            Пройти міні-тест <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
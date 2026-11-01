import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const metadata = {
  title: "Hanna Lukina — Гарячі та кваліфіковані заявки",
  description:
    "Система, яка бере на себе 80% рутини та готує клієнтів до співпраці ще до першого повідомлення.",
  openGraph: {
    title: "Hanna Lukina — Гарячі та кваліфіковані заявки",
    description:
      "Персональний розбір блогу та готова схема шляху клієнта під вашу нішу.",
  },
};

const benefits = [
  "Відсіває халявщиків та любителів тільки питати ціни ще на вході.",
  "Пояснює цінність послуги так, що не доводиться виправдовувати вартість співпраці.",
  "Проводить людину за логічним шляхом від «хто ти?» до «Хочу! Коли починаємо?».",
];

const journey = ["Реклама", "Пояснення цінності", "Довіра", "Усвідомлене рішення"];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-[var(--border)]/30 bg-[var(--bg-elevated)]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[var(--accent-light)]/10 blur-3xl" />
        <div className="mx-auto max-w-[1120px] px-4 py-20 md:py-32">
          <div className="mb-6 eyebrow">@lukinamarketing</div>
          <h1 className="max-w-4xl text-[clamp(2.25rem,8vw,4.5rem)] font-[800] leading-[1.02] tracking-tight text-[var(--text)]">
            Задовбав пошук клієнтів?
          </h1>
          <p className="mt-6 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-[1.4] text-[var(--text-muted)]">
            👇 Тут вихід на гарячі та кваліфіковані заявки
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-[900px] px-4 py-20 md:py-28">
        <div className="space-y-6 text-[17px] leading-[1.65] text-[var(--text-muted)]">
          <p>Якщо ви вже все перепробували:</p>
          <p>
            палили бюджети на рекламу, гріли контентом, будували лід-магніти,
            чат-боти та застосовували секретні воронки, які мали 100500%
            спрацювати,
          </p>
          <p>але не отримали клієнтів.</p>
          <p>
            Вам потрібна не нова порція контенту і не ще одна технічна мутотня.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[var(--border-strong)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[14px] md:p-8">
          <p className="text-[19px] font-semibold leading-relaxed text-[var(--text)] md:text-[21px]">
            Потрібна система, яка бере на себе 80% рутини і готує людину до
            співпраці ще до того, як ви спишетесь. Уявіть, як вона працює на вас
            щодня:
          </p>
          <ul className="mt-6 space-y-4 text-[16px] leading-relaxed text-[var(--text-muted)]">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span aria-hidden="true">✅</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-[17px] leading-[1.65] text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">Результат:</span>{" "}
          На зідзвон або в приватні приходять ті, хто вже розуміє, за що платить,
          і готовий обговорювати умови. Без 40-хвилинних розмов з людьми, у яких
          немає грошей навіть на передоплату.
        </p>

        <h2 className="mt-20 text-[clamp(2rem,6vw,3.5rem)] font-[800] leading-tight tracking-tight text-[var(--text)]">
          Як це працює?
        </h2>
        <p className="mt-6 text-[17px] leading-[1.65] text-[var(--text-muted)]">
          Замість постінгу і очікувань, коли аудіторія сама прогріється, ми один
          раз збираємо ваше рішення у шлях клієнта:
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {journey.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-[20px] border border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-5"
            >
              <span className="text-xl font-bold text-[var(--accent-light)]">
                {index < journey.length - 1 ? "→" : "✓"}
              </span>
              <span className="font-medium text-[var(--text)]">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
          <p className="text-[17px] leading-[1.65] text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">Приклад:</span> у
            ніші психології з чеком від 60$ за год система дала +3 кваліфіковані
            заявки на день, без жодного допису в стрічці.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-[var(--text-muted)]">
            Таких кейсів багато, і кожного разу я адаптую схему під ваші дані.
          </p>
        </div>

        <section
          id="cta"
          className="mt-16 overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[14px] md:p-10"
        >
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
            Не хочете купувати кота в мішку? Тоді давайте перевіримо на вашій
            ніші👇
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-muted)]">
            Дайте відповідь всього на 6 коротких запитань.
          </p>
          <p className="mt-3 text-[17px] leading-[1.65] text-[var(--text-muted)]">
            Я особисто вивчу ваш блог і надішлю короткий відео розбір, де
            покажу:
          </p>
          <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-[var(--text-muted)]">
            <li>▪️ Де ви зараз втрачаєте гарячих клієнтів</li>
            <li>▪️ Як перезібрати оффер, щоб відсіяти халявщиків</li>
            <li>▪️ Готову схему шляху клієнта під вашу нішу</li>
          </ul>
          <a
            href="https://forms.gle/vuDmbQdVeveQZvJaA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--bg)] shadow-[0_12px_30px_-8px_var(--accent-glow)] transition-all duration-250 active:translate-y-[3px]"
          >
            👉 Отримати персональний розбір
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
            Роблю це вручну, тому беру лише 2 експерта на тиждень.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-[800] leading-tight tracking-tight text-[var(--text)]">
            Експертність і результати
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[var(--text-muted)]">
            За 7+ років у маркетингу, воронках та контенті я зрозуміла: клієнту
            потрібен зрозумілий маршрут до рішення. Тому збираю систему, де
            контент, шлях клієнта, реклама та прогрів працюють разом.
          </p>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)]">
            <Image
              src="/images/for-hero.jpg"
              alt="Hanna Lukina про досвід у маркетингу та систему роботи з клієнтами"
              width={1920}
              height={1080}
              sizes="(max-width: 900px) 100vw, 900px"
              className="h-auto w-full"
            />
          </div>

          <h3 className="mt-14 text-2xl font-bold text-[var(--text)] md:text-3xl">
            Відгуки та результати клієнтів
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-3 md:p-4">
              <Image
                src="/images/FeedBack.jpg"
                alt="Відгук клієнтки про результати співпраці"
                width={1080}
                height={714}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="px-2 pb-2 pt-4 text-sm text-[var(--text-muted)]">
                Відгук клієнтки про результати роботи
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-3 md:p-4">
              <Image
                src="/images/Result.jpg"
                alt="Результати рекламних кампаній: заявки та ціна за лід"
                width={1280}
                height={377}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="px-2 pb-2 pt-4 text-sm text-[var(--text-muted)]">
                Приклад результатів рекламних кампаній
              </figcaption>
            </figure>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}

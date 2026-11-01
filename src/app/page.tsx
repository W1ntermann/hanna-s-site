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
      <section className="relative isolate overflow-hidden border-b border-[var(--border-strong)]/60 bg-[radial-gradient(ellipse_at_75%_35%,rgba(59,156,255,0.16),transparent_42%),linear-gradient(135deg,#0A1224_0%,#040813_65%)]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto max-w-[1120px] px-4 py-24 md:py-36">
          <div className="mb-6 eyebrow">@lukinamarketing</div>
          <h1 className="max-w-4xl text-[clamp(2.5rem,8vw,5rem)] font-[800] leading-[1.02] tracking-tight text-[var(--text)]">
            Задовбав{" "}
            <span className="bg-gradient-to-r from-[var(--accent-light)] to-cyan-300 bg-clip-text text-transparent [filter:drop-shadow(0_0_22px_rgba(59,156,255,0.3))]">
              пошук клієнтів?
            </span>
          </h1>
          <p className="mt-7 inline-flex rounded-full border border-[var(--border-strong)] bg-[rgba(59,156,255,0.08)] px-5 py-3 text-[clamp(1.1rem,3vw,1.5rem)] font-semibold leading-[1.4] text-[var(--text)] shadow-[0_0_30px_-12px_var(--accent-glow)]">
            <span className="mr-2 text-[var(--accent-light)]">↓</span>
            Тут вихід на гарячі та кваліфіковані заявки
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
          <p>
            <span className="font-semibold text-[var(--accent-light)] [text-shadow:0_0_14px_var(--accent-glow)]">
              але не отримали клієнтів.
            </span>
          </p>
          <p>
            Вам потрібна не нова порція контенту і не ще одна технічна мутотня.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[var(--border-strong)] bg-[linear-gradient(135deg,rgba(59,156,255,0.14),rgba(10,18,36,0.94)_55%)] p-6 shadow-[0_0_36px_-20px_var(--accent-glow),0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[14px] md:p-8">
          <p className="text-[19px] font-semibold leading-relaxed text-[var(--text)] md:text-[21px]">
            Потрібна{" "}
            <span className="bg-gradient-to-r from-[var(--accent-light)] to-cyan-300 bg-clip-text font-bold text-transparent [filter:drop-shadow(0_0_12px_rgba(59,156,255,0.35))]">
              система
            </span>
            , яка бере на себе{" "}
            <span className="text-[var(--accent-light)]">80% рутини</span> і
            готує людину до співпраці ще до того, як ви спишетесь. Уявіть, як
            вона працює на вас щодня:
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
              className="group flex items-center gap-4 rounded-[20px] border border-[var(--border)] bg-gradient-to-br from-[rgba(59,156,255,0.10)] to-[rgba(10,18,36,0.85)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_0_28px_-12px_var(--accent-glow)]"
            >
              <span className="text-xl font-bold text-[var(--accent-light)] transition-[filter] group-hover:[filter:drop-shadow(0_0_8px_var(--accent-glow))]">
                {index < journey.length - 1 ? "→" : "✓"}
              </span>
              <span className="font-medium text-[var(--text)]">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-[var(--border-strong)] bg-[radial-gradient(ellipse_at_top_right,rgba(59,156,255,0.12),transparent_48%),var(--bg-elevated)] p-6 shadow-[0_0_36px_-22px_var(--accent-glow)] md:p-8">
          <p className="text-[17px] leading-[1.65] text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">Приклад:</span> у
            ніші психології з чеком від 60$ за год система дала +3 кваліфіковані
            заявки на день, без жодного допису в стрічці.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-[var(--text-muted)]">
            Таких кейсів багато, і кожного разу я адаптую схему під ваші дані.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[rgba(4,8,19,0.65)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_0_32px_-14px_var(--accent-glow)] md:p-4">
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
            <figure className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[rgba(4,8,19,0.65)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_0_32px_-14px_var(--accent-glow)] md:p-4">
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
        </div>

        <section
          id="cta"
          className="mt-16 overflow-hidden rounded-[32px] border border-[var(--border-strong)] bg-[radial-gradient(ellipse_at_top_right,rgba(59,156,255,0.16),transparent_48%),var(--bg-elevated)] p-6 shadow-[0_0_48px_-24px_var(--accent-glow),0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[14px] md:p-10"
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
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-light)] to-cyan-300 px-8 py-4 text-sm font-bold text-[#04101F] no-underline shadow-[0_0_28px_-8px_var(--accent-glow)] transition-all duration-250 hover:shadow-[0_0_38px_-4px_var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-light)] active:translate-y-[3px]"
          >
            👉 Отримати розбір
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
            Роблю це вручну, тому беру лише 2 експерта на тиждень.
          </p>
        </section>

        <section className="mt-20">
          <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-[0_0_36px_-22px_var(--accent-glow)]">
            <Image
              src="/images/for-hero.jpg"
              alt="Hanna Lukina про досвід у маркетингу та систему роботи з клієнтами"
              width={1920}
              height={1080}
              sizes="(max-width: 900px) 100vw, 900px"
              className="h-auto w-full"
            />
          </div>

        </section>
      </article>
    </SiteLayout>
  );
}

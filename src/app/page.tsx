import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hanna Lukina — Система прогріву клієнтів до заявки",
  description:
    "Збираю систему, яка показує цінність вашої послуги ще до першого повідомлення в директ. Замість «скільки коштує?» — «коли можемо почати?»",
  openGraph: {
    title: "Hanna Lukina — Архітектор сенсів",
    description: "Система, що пакує ваші сенси у маршрут прогріву клієнта.",
  },
};

function Block({ children }: { children: ReactNode }) {
  return <p className="text-[17px] leading-[1.75] text-foreground/85">{children}</p>;
}

const transformations = [
  { from: "«Цікаво, але потім»", to: "«О. Це прямо про мою ситуацію»" },
  { from: "«Зараз знову продаватимуть»", to: "«Здається, мені це реально потрібно»" },
  { from: "«Скільки коштує?»", to: "«Окей. Як мені це отримати?»" },
  { from: "Година листування, пояснення і «я подумаю»", to: "«Коли можемо почати?»" },
];

const steps = [
  {
    n: "01",
    title: "Знаходимо точку втрати",
    body: "Дивимося на ваші поточні продажі та знаходимо, у який саме момент людина думає «цікаво» але зникає.",
  },
  {
    n: "02",
    title: "Проєктуємо фільтр сенсів",
    body: "Прописуємо маршрут із необхідних кроків, після яких холодний клієнт розуміє: «Мені потрібно саме це і саме зараз».",
  },
  {
    n: "03",
    title: "Пишемо контент, який продає замість вас",
    body: "Перекладаємо вашу експертність на мову клієнта, щоби тексти закривали заперечення ще до першого «Привіт».",
  },
  {
    n: "04",
    title: "З'єднуємо все у систему",
    body: "Налаштовуємо цей конвеєр, тестуємо і лише потім відкриваємо кран із рекламою.",
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-accent/30 via-background to-background">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Архітектор сенсів
          </div>
          <h1 className="text-[34px] font-bold leading-[1.12] tracking-tight text-foreground md:text-[48px]">
            Ви запускаєте рекламу, ведете блог, грієте людей контентом, а потім все одно продаєте в особистих з&nbsp;нуля.
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-muted-foreground">
            Знову пояснюєте чим відрізняєтесь від інших, відпрацьовуєте заперечення і знову відповідаєте на запитання{" "}
            <span className="font-semibold text-primary">«а скільки коштує?»</span>.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6">
          <Block>
            Хоча насправді продаж має відбуватися набагато раніше, ще до того, як людина взагалі наважилася вам написати.
          </Block>

          <div className="my-10 rounded-2xl border-2 border-primary/70 bg-accent/40 p-7 shadow-[0_8px_30px_-12px_oklch(0.68_0.18_30/0.25)] md:p-9">
            <p className="text-[19px] font-semibold leading-relaxed text-foreground md:text-[21px]">
              Я збираю систему, яка показує цінність вашої послуги{" "}
              <span className="text-primary">ЩЕ ДО</span> першого повідомлення в директ.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/80">
              У результаті приходять не випадкові перехожі, яким просто запитати, а люди, які хочуть обговорити деталі роботи.
              Замість «Скільки коштує?» ви отримуєте:{" "}
              <span className="font-semibold text-foreground">«Хочу це, коли можна почати?»</span>
            </p>
          </div>

          <Block>
            Ця система працює як фільтр. Вона заздалегідь вказує на цінність послуги, допомагає людині усвідомити, що їй це потрібно прямо зараз, і відсіює тих, хто все одно нічого не купить. Замість годинних пояснень виходить нормальна розмова про домовленість.
          </Block>
        </div>

        <h2 className="mt-20 text-[28px] font-bold leading-tight text-foreground md:text-[34px]">
          Як це працює?
        </h2>
        <div className="mt-6 space-y-6">
          <Block>
            Ми беремо ваш продукт і будуємо покроковий маршрут, який пакує ваші сенси у систему.
            Людина бачить рекламу, переходить на сторінку, читає текст, який закриває її головні сумніви, починає довіряти,
            і лише після цього пише вам. Вона робить ці кроки сама, один за одним.
          </Block>
          <Block>Щоб людина не просто «побачила тебе», а зрозуміла:</Block>
        </div>

        <div className="mt-10 space-y-4">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-sm md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-5"
            >
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Було
                </div>
                <div className="mt-1 text-foreground/70 line-through decoration-muted-foreground/50">
                  {t.from}
                </div>
              </div>
              <ArrowRight className="hidden h-5 w-5 text-primary md:block" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Стало
                </div>
                <div className="mt-1 font-semibold text-foreground">{t.to}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          <Block>
            Під кожен проект система збирається по-різному. Бо іноді людина приходить, дивиться, думає «цікаво» і зникає.
            А десь навпаки: заявки є, але приходять люди, яким простіше безкоштовно порадитись, ніж купити.
          </Block>
          <Block>
            І тут важливий момент. Це не історія про «давайте ще контент навалимо». Продаж зазвичай ламається у конкретних місцях.
            І щоб людина дійшла до «коли можемо почати?» — ми покроково збираємо фундамент:
          </Block>
        </div>

        <div className="mt-10 space-y-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
            >
              <div className="text-3xl font-bold text-primary md:text-4xl">{s.n}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Block>
            Ось так замість купи непотрібних дій отримуєте зрозумілий конвеєр. Кожна деталь у ньому крутить наступну,
            і людина дозріває до покупки сама, ще до того, як ви почнете говорити з нею особисто.
          </Block>
        </div>

        <h2 className="mt-20 text-[28px] font-bold text-foreground md:text-[34px]">
          Скільки це коштує?
        </h2>
        <div className="mt-6 space-y-6">
          <Block>
            Ціна питання завжди залежить від того, що у вас вже працює і які деталі потрібно докрутити.
            Саме тому я спершу дивлюсь на поточну ситуацію.
          </Block>
          <Block>
            Нижче — короткий розбір-опитування, яке займає хвилину. Ви просто відмічаєте, як справи з клієнтами зараз,
            а я повертаюся до вас з готовим рішенням для вашої ситуації, а не з розмитими фразами.
          </Block>
        </div>

        <div
          id="cta"
          className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.62_0.2_25)] p-8 text-center text-primary-foreground shadow-xl md:p-12"
        >
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold md:text-2xl">
            Готові побачити, де саме губляться ваші клієнти?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-90">
            Хвилина часу — і ви отримаєте персональний розбір замість шаблонної відповіді.
          </p>
          <a
            href="https://t.me/Anna_Lukina_help_bot?start=6a0ade3d7e307ed0580f66b5"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition hover:bg-white/95"
          >
            Знайти слабкі місця у моїх продажах
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/images/for-hero.jpg"
            alt="Hanna Lukina"
            width={800}
            height={533}
            className="h-auto w-full max-w-2xl rounded-2xl shadow-lg"
            priority
          />
        </div>
      </article>
    </SiteLayout>
  );
}
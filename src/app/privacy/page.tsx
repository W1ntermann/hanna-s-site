import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const metadata = {
  title: "Політика конфіденційності",
  description: "Як ми обробляємо та зберігаємо ваші персональні дані.",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Документи"
        title="Політика конфіденційності"
        subtitle="Коротко та зрозуміло про те, як ми поводимось із вашими даними."
      />
      <article className="prose prose-neutral mx-auto max-w-3xl px-6 py-16 text-[16px] leading-relaxed text-foreground/85">
        <h2 className="text-xl font-semibold text-foreground">Які дані ми збираємо</h2>
        <p className="mt-3">
          Тільки ті, що ви свідомо надаєте: відповіді у формах, email та контактна інформація для зв'язку.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Як ми їх використовуємо</h2>
        <p className="mt-3">
          Виключно для відповіді на ваш запит, надання послуг та необхідної комунікації. Дані не передаються третім особам без вашої згоди.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Контакт</h2>
        <p className="mt-3">
          З будь-якими питаннями щодо ваших даних — напишіть на{" "}
          <a className="text-primary underline" href="mailto:admin@annalukina.top">
            admin@annalukina.top
          </a>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
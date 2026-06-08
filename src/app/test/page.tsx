"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

const questions = [
  {
    q: "Звідки зараз приходять клієнти?",
    options: ["Реклама", "Блог / контент", "Рекомендації", "Не системно"],
  },
  {
    q: "Як часто чуєте «скільки коштує?» першим повідомленням?",
    options: ["Майже завжди", "Іноді", "Рідко", "Не аналізував/ла"],
  },
  {
    q: "Що відбувається після першого діалогу?",
    options: ["«Я подумаю»", "Купують одразу", "Зникають", "По-різному"],
  },
  {
    q: "Що болить найбільше?",
    options: [
      "Низька конверсія в оплату",
      "Багато безкоштовних консультацій",
      "Замало заявок",
      "Не розумію, де втрачаю людей",
    ],
  },
];

export default function TestPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((step + 1) / questions.length) * 100, [step]);
  const current = questions[step];
  const selected = answers[step];

  if (submitted) {
    return (
      <SiteLayout>
        <PageHero eyebrow="Готово" title="Дякую! Я отримала ваші відповіді." subtitle="Найближчим часом повернусь з персональними рекомендаціями." />
        <section className="mx-auto max-w-2xl px-6 py-12 text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-7 w-7" />
          </div>
          <p className="mt-6 text-muted-foreground">Поки що — почитайте свіжі матеріали у блозі.</p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:brightness-105"
          >
            До блогу <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Міні-тест"
        title="Знайдіть слабкі місця у ваших продажах"
        subtitle="4 короткі питання — і я повернусь з персональним розбором замість шаблонної відповіді."
      />

      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9">
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>
                Питання {step + 1} з {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{current.q}</h2>

          <div className="mt-6 grid gap-3">
            {current.options.map((opt) => {
              const isSel = selected === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAnswers({ ...answers, [step]: opt })}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-medium transition ${
                    isSel
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-background text-foreground/80 hover:border-primary/40 hover:bg-accent/40"
                  }`}
                >
                  <span>{opt}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      isSel ? "border-primary bg-primary text-primary-foreground" : "border-border"
                    }`}
                  >
                    {isSel && <Check className="h-3 w-3" />}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Назад
            </button>
            {step < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!selected}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-105 disabled:opacity-50"
              >
                Далі <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                disabled={!selected}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-105 disabled:opacity-50"
              >
                Отримати розбір <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
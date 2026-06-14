import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Hanna Lukina — Маркетолог",
    template: "%s — Hanna Lukina",
  },
  description:
    "Система, що пакує ваші сенси у маршрут прогріву клієнта. Перетворюю експертність у систему, яка продає.",
  authors: [{ name: "Hanna Lukina" }],
  openGraph: {
    title: "Hanna Lukina — Маркетолог",
    description:
      "Система, що пакує ваші сенси у маршрут прогріву клієнта.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
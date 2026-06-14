import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Напишіть мені в особисті — Telegram, Instagram або електронною поштою.",
  openGraph: {
    title: "Контакти — Hanna Lukina",
    description: "Зв'яжіться зі мною зручним способом.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
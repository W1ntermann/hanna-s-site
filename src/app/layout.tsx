import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/meta-pixel";
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
      <body className="antialiased">
        {children}

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

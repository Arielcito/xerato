import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Archivo_Black } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"] });

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Xerato | Product Development Studio",
  description: "Grow your business with Xerato, a product development studio.",
  openGraph: {
    images: [
      {
        url: 'https://www.google.com/maps/uv?viewerState=lb&pb=!1s0x11ae81c94242f451:0x2a6b0cac40414137!5sGlobstand+technologies&imagekey=!1e10!2sAF1QipPrTTNGxsOszQTXFD3b68e40o0V_LiVsTWwh-H6&cr=rp_35',
        width: 1200,
        height: 630,
        alt: 'Xerato Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  return (
    <html lang={locale} className={archivoBlack.className}>
      <body>{children}</body>
    </html>
  );
}

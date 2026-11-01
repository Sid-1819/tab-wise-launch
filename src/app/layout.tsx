import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import { Providers } from "@/components/providers";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from "@/lib/seo";
import { PRODUCT_NAME } from "@/lib/constants";

import "@/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${PRODUCT_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: PRODUCT_NAME,
  authors: [{ name: PRODUCT_NAME }],
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    siteName: PRODUCT_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/tw_light-removebg-preview.png", media: "(prefers-color-scheme: light)" },
      { url: "/tw_dark-removebg-preview.png", media: "(prefers-color-scheme: dark)" },
      { url: "/tw_light-removebg-preview.png" },
    ],
    apple: "/tw_light-removebg-preview.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

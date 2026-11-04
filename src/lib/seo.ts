import { CHROME_WEB_STORE_URL, PRODUCT_NAME, PRODUCT_VERSION } from "@/lib/constants";
import { FAQS } from "@/lib/faq-data";

export const SITE_URL = "https://tabwise.visionly.dev";
export const GOOGLE_SITE_VERIFICATION = "IGEf7t12RYN-PP4ElyJG2rUNZsS9dkq3zSCi-CRQJeU";

export const DEFAULT_TITLE = "Tab Wise — Chrome side-panel tab manager";
export const DEFAULT_DESCRIPTION =
  "Tab Wise is a Featured Chrome Web Store extension — a calm, side-panel tab manager for searching, grouping, saving and recovering tabs without leaving the page.";

export const ROUTES = {
  home: "/",
  features: "/features",
  faq: "/faq",
  changelog: "/changelog",
  welcome: "/welcome",
  compare: "/compare",
  privacy: "/privacy",
} as const;

export type SitePath = (typeof ROUTES)[keyof typeof ROUTES];

export function absoluteUrl(path: SitePath | string = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: SitePath;
}) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${PRODUCT_NAME}`,
      description,
      url,
      type: "website" as const,
      siteName: PRODUCT_NAME,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} — ${PRODUCT_NAME}`,
      description,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PRODUCT_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    softwareVersion: PRODUCT_VERSION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: SITE_URL,
    downloadUrl: CHROME_WEB_STORE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webpageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: SitePath;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: PRODUCT_NAME,
      url: SITE_URL,
    },
  };
}

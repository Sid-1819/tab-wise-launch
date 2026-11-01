import { Faq } from "@/components/site/faq";
import { SiteLayout } from "@/components/site/site-layout";
import { Trust } from "@/components/site/trust";
import { CtaBanner } from "@/components/site/cta-banner";
import { PRODUCT_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about Tab Wise permissions, local storage, Chromium support, host access, and whether the Chrome tab manager is free and open source.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SiteLayout
      jsonLd={[
        webpageJsonLd({
          title: "FAQ",
          description: metadata.description ?? "",
          path: "/faq",
        }),
        faqJsonLd(),
        breadcrumbJsonLd([
          { name: PRODUCT_NAME, path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ]}
    >
      <section className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            FAQ
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Questions about Tab Wise, answered.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            What the Chrome extension reads, where data lives, and why it asks for host access.
          </p>
        </div>
      </section>
      <Faq />
      <Trust />
      <CtaBanner />
    </SiteLayout>
  );
}

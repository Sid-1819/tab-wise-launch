import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { SiteLayout } from "@/components/site/site-layout";
import { WhatsNew } from "@/components/site/whats-new";
import { CtaBanner } from "@/components/site/cta-banner";
import { PRODUCT_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Features",
  description:
    "Chrome tab manager features: search across tabs, domain groups, saved sessions, recently closed recovery, duplicate cleanup, and a local-first side panel.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <SiteLayout
      jsonLd={[
        webpageJsonLd({
          title: "Features",
          description: metadata.description ?? "",
          path: "/features",
        }),
        breadcrumbJsonLd([
          { name: PRODUCT_NAME, path: "/" },
          { name: "Features", path: "/features" },
        ]),
      ]}
    >
      <section className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Chrome tab manager
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            A quiet command center for Chrome tabs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tab Wise lives in the side panel so you can search, group, save and recover tabs
            without leaving the page you are on.
          </p>
        </div>
      </section>
      <Features />
      <WhatsNew />
      <HowItWorks />
      <CtaBanner />
    </SiteLayout>
  );
}

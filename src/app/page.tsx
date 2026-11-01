import { Contribute } from "@/components/site/contribute";
import { CtaBanner } from "@/components/site/cta-banner";
import { Faq } from "@/components/site/faq";
import { Features } from "@/components/site/features";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { SidePanelMockup } from "@/components/site/side-panel-mockup";
import { SiteLayout } from "@/components/site/site-layout";
import { Trust } from "@/components/site/trust";
import { WhatsNew } from "@/components/site/whats-new";
import { WhyItExists } from "@/components/site/why";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageMetadata, softwareJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Chrome side-panel tab manager",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  title: { absolute: DEFAULT_TITLE },
};

export default function HomePage() {
  return (
    <SiteLayout jsonLd={[websiteJsonLd(), softwareJsonLd()]}>
      <Hero />
      <WhatsNew />
      <WhyItExists />
      <SidePanelMockup />
      <Features />
      <HowItWorks />
      <Trust />
      <Faq />
      <Contribute />
      <CtaBanner />
    </SiteLayout>
  );
}

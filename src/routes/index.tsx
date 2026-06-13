import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { WhyItExists } from "@/components/site/why";
import { Features } from "@/components/site/features";
import { SidePanelMockup } from "@/components/site/side-panel-mockup";
import { HowItWorks } from "@/components/site/how-it-works";
import { Trust } from "@/components/site/trust";
import { Faq } from "@/components/site/faq";
import { Contribute } from "@/components/site/contribute";
import { CtaBanner } from "@/components/site/cta-banner";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyItExists />
        <SidePanelMockup />
        <Features />
        <HowItWorks />
        <Trust />
        <Faq />
        <Contribute />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

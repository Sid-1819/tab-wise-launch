import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JsonLd } from "@/components/json-ld";

type SiteLayoutProps = {
  children: React.ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function SiteLayout({ children, jsonLd }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

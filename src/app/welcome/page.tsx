import Link from "next/link";
import { Chrome } from "lucide-react";

import { SiteLayout } from "@/components/site/site-layout";
import { CtaBanner } from "@/components/site/cta-banner";
import { Button } from "@/components/ui/button";
import { CHROME_WEB_STORE_URL, PRODUCT_NAME, PRODUCT_VERSION } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

const STEPS = [
  {
    title: "Open the side panel",
    body: "Click the Tab Wise icon in the Chrome toolbar. The panel opens beside the page you are already on.",
  },
  {
    title: "Or use the shortcut",
    body: "Press Option+Shift+Y on Mac, or Alt+Shift+Y on Windows and Linux.",
  },
  {
    title: "Pin it",
    body: "Pin Tab Wise from the puzzle-piece menu so the icon stays visible after you close the panel.",
  },
] as const;

export const metadata = pageMetadata({
  title: "Welcome",
  description:
    "Tab Wise is installed. Open the side panel from the toolbar icon or with Option+Shift+Y on Mac (Alt+Shift+Y elsewhere), and pin it so it stays one click away.",
  path: "/welcome",
});

export default function WelcomePage() {
  return (
    <SiteLayout
      jsonLd={[
        webpageJsonLd({
          title: "Welcome",
          description: metadata.description ?? "",
          path: "/welcome",
        }),
        breadcrumbJsonLd([
          { name: PRODUCT_NAME, path: "/" },
          { name: "Welcome", path: "/welcome" },
        ]),
      ]}
    >
      <article className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Welcome · Version {PRODUCT_VERSION}
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Thanks for installing Tab Wise.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The extension lives in Chrome’s side panel. Search, group, and recover tabs without
            leaving the page you are on.
          </p>

          <ol className="mt-12 border-t border-hairline">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-1 border-b border-hairline py-5 sm:grid-cols-[3.5rem_16.5rem_1fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-display text-2xl text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl text-foreground">{step.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                <Chrome className="size-4" />
                Chrome Web Store
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/changelog">See what’s new</Link>
            </Button>
          </div>
        </div>
      </article>
      <CtaBanner />
    </SiteLayout>
  );
}

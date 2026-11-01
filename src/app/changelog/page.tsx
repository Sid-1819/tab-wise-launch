import Link from "next/link";

import { SiteLayout } from "@/components/site/site-layout";
import { CtaBanner } from "@/components/site/cta-banner";
import { PRODUCT_NAME, PRODUCT_VERSION } from "@/lib/constants";
import { CHANGELOG_UPDATED, WHATS_NEW_NOTES } from "@/lib/whats-new";
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Changelog",
  description: `What’s new in Tab Wise ${PRODUCT_VERSION}: sleep unused tabs, multi-window side panel, nested domain groups, smarter duplicates, and named group colors.`,
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <SiteLayout
      jsonLd={[
        webpageJsonLd({
          title: "Changelog",
          description: metadata.description ?? "",
          path: "/changelog",
        }),
        breadcrumbJsonLd([
          { name: PRODUCT_NAME, path: "/" },
          { name: "Changelog", path: "/changelog" },
        ]),
      ]}
    >
      <article className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Changelog · Version {PRODUCT_VERSION}
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            What’s new in Tab Wise {PRODUCT_VERSION}.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Updated {CHANGELOG_UPDATED}. Version {PRODUCT_VERSION} is for the mess that builds up:
            windows you forgot you opened, tabs you haven’t touched, and the same page hiding
            behind a slightly different URL.
          </p>

          <ol className="mt-12 border-t border-hairline">
            {WHATS_NEW_NOTES.map((note) => (
              <li
                key={note.n}
                className="grid gap-1 border-b border-hairline py-5 sm:grid-cols-[3.5rem_16.5rem_1fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-display text-2xl text-muted-foreground/50">{note.n}</span>
                <h2 className="font-display text-xl text-foreground">{note.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{note.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-muted-foreground">
            Prefer a live walkthrough?{" "}
            <Link href="/#whats-new" className="text-foreground underline underline-offset-2">
              Try the side-panel preview on the homepage
            </Link>
            .
          </p>
        </div>
      </article>
      <CtaBanner />
    </SiteLayout>
  );
}

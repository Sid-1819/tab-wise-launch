import Link from "next/link";

import { SiteLayout } from "@/components/site/site-layout";
import { CtaBanner } from "@/components/site/cta-banner";
import { PRODUCT_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "vs OneTab, Toby and Workona",
  description:
    "Compare Tab Wise with OneTab, Toby and Workona. A local-first Chrome side-panel tab manager with no account, live tabs, search, groups and saved sessions.",
  path: "/compare",
});

const ROWS = [
  {
    label: "Lives in Chrome’s side panel",
    tabWise: "Yes — stay on the page you’re on",
    onetab: "No — converts tabs into a list page",
    toby: "Collections in a new tab / dashboard",
    workona: "Workspace dashboard",
  },
  {
    label: "Account required",
    tabWise: "No",
    onetab: "No",
    toby: "Yes for sync",
    workona: "Yes",
  },
  {
    label: "Where data lives",
    tabWise: "Locally in Chrome storage",
    onetab: "Local list, optional export",
    toby: "Cloud collections",
    workona: "Cloud workspaces",
  },
  {
    label: "Live tab search",
    tabWise: "Titles, URLs and domains",
    onetab: "Search the saved list",
    toby: "Search collections",
    workona: "Search workspaces",
  },
  {
    label: "Grouping",
    tabWise: "Domain groups plus your own",
    onetab: "Named lists",
    toby: "Manual collections",
    workona: "Workspaces / resources",
  },
  {
    label: "Save & restore sessions",
    tabWise: "Capture a window and restore it later",
    onetab: "Send tabs to OneTab",
    toby: "Save collections",
    workona: "Switch workspaces",
  },
  {
    label: "Reads page content",
    tabWise: "Never — metadata only",
    onetab: "No",
    toby: "No",
    workona: "Workspace metadata",
  },
];

export default function ComparePage() {
  return (
    <SiteLayout
      jsonLd={[
        webpageJsonLd({
          title: "Tab Wise vs OneTab, Toby and Workona",
          description: metadata.description ?? "",
          path: "/compare",
        }),
        breadcrumbJsonLd([
          { name: PRODUCT_NAME, path: "/" },
          { name: "Compare", path: "/compare" },
        ]),
      ]}
    >
      <article className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Compare
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            A Chrome tab manager that stays beside your work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            OneTab, Toby and Workona each solve tab overload in a different way. Tab Wise is for
            people who want a live side panel — no account, no cloud copy of your browsing, and no
            need to leave the page.
          </p>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-hairline bg-surface">
            <table className="w-full min-w-[48rem] text-left text-sm">
              <thead className="border-b border-hairline bg-surface-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium"> </th>
                  <th className="px-4 py-3 font-medium text-foreground">Tab Wise</th>
                  <th className="px-4 py-3 font-medium">OneTab</th>
                  <th className="px-4 py-3 font-medium">Toby</th>
                  <th className="px-4 py-3 font-medium">Workona</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-hairline last:border-b-0">
                    <th className="px-4 py-4 font-medium text-foreground">{row.label}</th>
                    <td className="px-4 py-4 text-foreground">{row.tabWise}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.onetab}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.toby}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.workona}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl text-foreground">When Tab Wise is the better fit</h2>
            <p>
              Choose Tab Wise if you want to keep working in the current page while you search,
              group, sleep or restore tabs. It does not replace your tab strip with a bookmark list,
              and it does not ask you to create an account.
            </p>
            <p>
              OneTab is still a good “clear the deck” tool. Toby and Workona are stronger if you
              want cloud-synced collections or team workspaces. Tab Wise stays local-first and
              side-panel-native.
            </p>
            <p>
              See{" "}
              <Link href="/features" className="text-foreground underline underline-offset-2">
                every feature
              </Link>{" "}
              or read the{" "}
              <Link href="/privacy" className="text-foreground underline underline-offset-2">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
      <CtaBanner />
    </SiteLayout>
  );
}

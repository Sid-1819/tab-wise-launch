import {
  GITHUB_CONTRIBUTING_URL,
  GITHUB_GOOD_FIRST_ISSUES_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
} from "@/lib/constants";

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQS: FaqItem[] = [
  {
    q: "Does Tab Wise read the contents of my pages?",
    a: "No. It works with tab metadata only — titles, URLs and group state — never the contents of a page.",
  },
  {
    q: "Where is my data stored?",
    a: "Locally in your browser, via Chrome’s storage API. Nothing is sent to a server. There is no Tab Wise account.",
  },
  {
    q: "Will it work in Edge, Brave, Arc or other Chromium browsers?",
    a: "It’s built for Chrome’s side panel API, which is supported in most modern Chromium browsers. Behavior may vary slightly outside Chrome.",
  },
  {
    q: "Why does it ask for broad host access?",
    a: "Chrome requires host access to read tab URLs and titles across the sites you’ve already opened. That’s what powers search and grouping. Tab Wise does not inject scripts or read page content.",
  },
  {
    q: "Is the system RAM meter tracking my browsing?",
    a: "No. It reports your machine’s overall memory pressure, not anything per-tab or per-site. The permission is optional — Tab Wise works fully without it.",
  },
  {
    q: "Is it free? Open source?",
    a: "Free to install from the Chrome Web Store and open source on GitHub. File a bug or feature request, grab a good first issue, or read the contributing guide before opening a PR.",
  },
];

export const FAQ_LINKS = {
  repo: GITHUB_REPO_URL,
  issues: GITHUB_ISSUES_URL,
  goodFirstIssues: GITHUB_GOOD_FIRST_ISSUES_URL,
  contributing: GITHUB_CONTRIBUTING_URL,
};

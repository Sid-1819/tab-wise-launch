import type { MetadataRoute } from "next";

import { ROUTES, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: absoluteUrl(ROUTES.home), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl(ROUTES.features),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: absoluteUrl(ROUTES.faq), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: absoluteUrl(ROUTES.changelog),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(ROUTES.compare),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(ROUTES.privacy),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}

import type { MetadataRoute } from "next";
import { data } from "@/data";
import { discoverSite } from "@/lib/siteDiscovery";

const sitemap = (): MetadataRoute.Sitemap => {
  const { sitemapEntries } = discoverSite(data, data.siteOrigin);
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
};

export default sitemap;

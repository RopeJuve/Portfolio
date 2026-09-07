import type { MetadataRoute } from "next";
import { data } from "@/data";
import { discoverSite } from "@/lib/siteDiscovery";

export default function robots(): MetadataRoute.Robots {
  const { robots } = discoverSite(data, data.siteOrigin);
  return {
    rules: robots.rules,
    sitemap: robots.sitemap,
  };
}

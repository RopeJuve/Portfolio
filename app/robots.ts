import type { MetadataRoute } from "next";
import { data } from "@/data";
import { discoverSite } from "@/lib/siteDiscovery";

const robots = (): MetadataRoute.Robots => {
  const { robots: robotsConfig } = discoverSite(data, data.siteOrigin);
  return {
    rules: robotsConfig.rules,
    sitemap: robotsConfig.sitemap,
  };
};

export default robots;

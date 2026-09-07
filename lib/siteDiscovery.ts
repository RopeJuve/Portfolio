import type { HomeData, FaqItem } from "../types";

// ---------------------------------------------------------------------------
// Return types
// ---------------------------------------------------------------------------

export interface SiteDocumentMetadata {
  title: string;
  description: string;
  canonical: string;
  metadataBase: string;
  openGraph: {
    type: "website";
    title: string;
    description: string;
    url: string;
    images: [{ url: string; width: 1200; height: 630; alt: string }];
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: [string];
  };
}

export interface RobotsRule {
  userAgent: string | string[];
  allow: string[];
}

export interface SiteRobots {
  rules: RobotsRule[];
  sitemap: string;
}

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: "monthly";
  priority: 1;
}

export interface SiteDiscoveryResult {
  documentMetadata: SiteDocumentMetadata;
  robots: SiteRobots;
  sitemapEntries: SitemapEntry[];
  jsonLd: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const IDENTITY_BOTS: string[] = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
];

const buildPersonNode = (
  homeData: HomeData,
  origin: string
): Record<string, unknown> => {
  const stackTechnologies = homeData.techStack.flatMap(
    (row) => row.technologies
  );
  const serviceTitles = homeData.services.map((s) => s.title);
  const knowsAbout = Array.from(new Set([...stackTechnologies, ...serviceTitles]));

  const sameAs = homeData.socialLinks
    .filter((link) => link.label === "GitHub" || link.label === "LinkedIn")
    .map((link) => link.href);

  return {
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: "Robert Shterjov",
    jobTitle: "Full-Stack Web Developer",
    description: homeData.subTitle,
    image: `${origin}${homeData.profileImage}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    knowsAbout,
    sameAs,
  };
};

const buildProfessionalServiceNode = (
  homeData: HomeData,
  origin: string
): Record<string, unknown> => {
  const offers = homeData.services.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.description,
  }));

  return {
    "@type": "ProfessionalService",
    name: "Robert Shterjov — Freelance Full-Stack Web Development",
    provider: { "@id": `${origin}/#person` },
    areaServed: ["Germany", "Remote"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: offers,
    },
  };
};

const buildProfilePageNode = (
  origin: string
): Record<string, unknown> => ({
  "@type": "ProfilePage",
  url: origin,
  mainEntity: { "@id": `${origin}/#person` },
});

const buildFaqPageNode = (faq: FaqItem[]): Record<string, unknown> => ({
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

// ---------------------------------------------------------------------------
// Main discovery function
// ---------------------------------------------------------------------------

export const discoverSite = (
  homeData: HomeData,
  origin: string
): SiteDiscoveryResult => {
  const { documentTitle, documentDescription, socialCardImage, faq } =
    homeData;

  const socialCardUrl = `${origin}${socialCardImage}`;

  const documentMetadata: SiteDocumentMetadata = {
    title: documentTitle,
    description: documentDescription,
    canonical: origin,
    metadataBase: origin,
    openGraph: {
      type: "website",
      title: documentTitle,
      description: documentDescription,
      url: origin,
      images: [
        {
          url: socialCardUrl,
          width: 1200,
          height: 630,
          alt: documentTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: documentDescription,
      images: [socialCardUrl],
    },
  };

  const robots: SiteRobots = {
    rules: [
      { userAgent: "*", allow: ["/"] },
      ...IDENTITY_BOTS.map((bot) => ({
        userAgent: bot,
        allow: ["/"],
      })),
    ],
    sitemap: `${origin}/sitemap.xml`,
  };

  const sitemapEntries: SitemapEntry[] = [
    {
      url: origin,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonNode(homeData, origin),
      buildProfessionalServiceNode(homeData, origin),
      buildProfilePageNode(origin),
      buildFaqPageNode(faq),
    ],
  };

  return { documentMetadata, robots, sitemapEntries, jsonLd };
};

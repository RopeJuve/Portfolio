import { describe, expect, it } from "vitest";
import { data } from "../data";
import { discoverSite } from "./siteDiscovery";

const ORIGIN = "https://robert-shterjov.dev";
const result = discoverSite(data, ORIGIN);

describe("siteDiscovery — documentMetadata", () => {
  it("title contains freelance, full-stack, Germany, and Robert Shterjov", () => {
    const title = result.documentMetadata.title.toLowerCase();
    expect(title).toContain("freelance");
    expect(title).toContain("full-stack");
    expect(title).toContain("germany");
    expect(result.documentMetadata.title).toContain("Robert Shterjov");
  });

  it("title contains no price or rate", () => {
    expect(result.documentMetadata.title).not.toMatch(
      /€|\$|£|\/h|per hour|rate|price/i
    );
  });

  it("description starts from the Positioning Statement", () => {
    expect(result.documentMetadata.description).toMatch(
      /^I design and develop modern websites/
    );
  });

  it("description length is in the 150–160 character range", () => {
    const len = result.documentMetadata.description.length;
    expect(len).toBeGreaterThanOrEqual(150);
    expect(len).toBeLessThanOrEqual(160);
  });

  it("has a documentDescription containing Germany, availability, and reply time", () => {
    const desc = result.documentMetadata.description.toLowerCase();
    expect(desc).toContain("germany");
    expect(desc).toContain("q4 2026");
    expect(desc).toContain("working-day");
  });

  it("description contains no price or rate", () => {
    expect(result.documentMetadata.description).not.toMatch(
      /€|\$|£|\/h|per hour|rate|price/i
    );
  });

  it("canonical is the production origin", () => {
    expect(result.documentMetadata.canonical).toBe(ORIGIN);
  });

  it("metadataBase is the production origin", () => {
    expect(result.documentMetadata.metadataBase).toBe(ORIGIN);
  });

  it("Open Graph type is 'website'", () => {
    expect(result.documentMetadata.openGraph.type).toBe("website");
  });

  it("Open Graph title and description match the document-level fields", () => {
    expect(result.documentMetadata.openGraph.title).toBe(
      result.documentMetadata.title
    );
    expect(result.documentMetadata.openGraph.description).toBe(
      result.documentMetadata.description
    );
  });

  it("Open Graph image URL is absolute against the origin and is not the hero path", () => {
    const imageUrl = result.documentMetadata.openGraph.images[0].url;
    expect(imageUrl).toMatch(new RegExp(`^${ORIGIN}`));
    expect(imageUrl).not.toContain(data.heroImage);
  });

  it("Open Graph image dimensions are 1200×630", () => {
    const img = result.documentMetadata.openGraph.images[0];
    expect(img.width).toBe(1200);
    expect(img.height).toBe(630);
  });

  it("Twitter card is summary_large_image", () => {
    expect(result.documentMetadata.twitter.card).toBe("summary_large_image");
  });

  it("Twitter card title, description, and image match Open Graph", () => {
    expect(result.documentMetadata.twitter.title).toBe(
      result.documentMetadata.openGraph.title
    );
    expect(result.documentMetadata.twitter.description).toBe(
      result.documentMetadata.openGraph.description
    );
    expect(result.documentMetadata.twitter.images[0]).toBe(
      result.documentMetadata.openGraph.images[0].url
    );
  });
});

describe("siteDiscovery — robots", () => {
  it("has a rule allowing '/' for all agents ('*')", () => {
    const wildcardRule = result.robots.rules.find(
      (r: { userAgent: string | string[]; allow: string[] }) =>
        r.userAgent === "*" ||
        (Array.isArray(r.userAgent) && r.userAgent.includes("*"))
    );
    expect(wildcardRule).toBeDefined();
    expect(wildcardRule?.allow).toContain("/");
  });

  it("explicitly allows each required search and AI bot", () => {
    const allAgents = result.robots.rules.flatMap(
      (r: { userAgent: string | string[] }) =>
        Array.isArray(r.userAgent) ? r.userAgent : [r.userAgent]
    );
    for (const bot of [
      "Googlebot",
      "Bingbot",
      "GPTBot",
      "ChatGPT-User",
      "PerplexityBot",
      "ClaudeBot",
      "anthropic-ai",
      "Google-Extended",
    ]) {
      expect(allAgents).toContain(bot);
    }
  });

  it("sitemap field points to {origin}/sitemap.xml", () => {
    expect(result.robots.sitemap).toBe(`${ORIGIN}/sitemap.xml`);
  });

  it("has no disallow rules on any agent", () => {
    const hasDisallow = result.robots.rules.some(
      (r: { userAgent: string | string[]; allow: string[]; disallow?: string[] }) =>
        Array.isArray(r.disallow) && r.disallow.length > 0
    );
    expect(hasDisallow).toBe(false);
  });
});

describe("siteDiscovery — sitemap", () => {
  it("has exactly one entry", () => {
    expect(result.sitemapEntries).toHaveLength(1);
  });

  it("the single entry is the production homepage", () => {
    expect(result.sitemapEntries[0].url).toBe(ORIGIN);
  });

  it("changeFrequency is monthly and priority is 1", () => {
    expect(result.sitemapEntries[0].changeFrequency).toBe("monthly");
    expect(result.sitemapEntries[0].priority).toBe(1);
  });

  it("lastModified is a stable build-time date, not request time", () => {
    expect(result.sitemapEntries[0].lastModified.toISOString()).toBe(
      "2026-09-07T00:00:00.000Z"
    );
  });
});

describe("siteDiscovery — JSON-LD graph", () => {
  const graph = (result.jsonLd["@graph"] as Array<Record<string, unknown>>);

  const getNode = (type: string) =>
    graph.find((n) => n["@type"] === type) as Record<string, unknown> | undefined;

  it("context is schema.org", () => {
    expect(result.jsonLd["@context"]).toBe("https://schema.org");
  });

  it("includes a Person node with the correct @id", () => {
    const person = getNode("Person");
    expect(person).toBeDefined();
    expect(person?.["@id"]).toBe(`${ORIGIN}/#person`);
  });

  it("Person name is Robert Shterjov", () => {
    const person = getNode("Person");
    expect(person?.name).toBe("Robert Shterjov");
  });

  it("Person jobTitle is Full-Stack Web Developer", () => {
    const person = getNode("Person");
    expect(person?.jobTitle).toBe("Full-Stack Web Developer");
  });

  it("Person description is the Positioning Statement", () => {
    const person = getNode("Person");
    expect(person?.description).toBe(data.subTitle);
  });

  it("Person addressCountry is DE", () => {
    const person = getNode("Person");
    expect((person?.address as Record<string, unknown>)?.addressCountry).toBe("DE");
  });

  it("Person sameAs contains GitHub and LinkedIn only (not WhatsApp or Telegram)", () => {
    const person = getNode("Person");
    const sameAs = person?.sameAs as string[];
    expect(sameAs).toContain("https://github.com/RopeJuve");
    expect(sameAs).toContain("https://www.linkedin.com/in/robert-shterjov/");
    expect(sameAs).not.toContain(expect.stringContaining("wa.me"));
    expect(sameAs).not.toContain(expect.stringContaining("t.me"));
  });

  it("includes a ProfessionalService node", () => {
    expect(getNode("ProfessionalService")).toBeDefined();
  });

  it("ProfessionalService provider references the Person @id", () => {
    const service = getNode("ProfessionalService");
    const provider = service?.provider as Record<string, unknown>;
    expect(provider?.["@id"]).toBe(`${ORIGIN}/#person`);
  });

  it("ProfessionalService offers match the four service titles in order", () => {
    const service = getNode("ProfessionalService");
    const catalog = service?.hasOfferCatalog as Record<string, unknown>;
    const offers = catalog?.itemListElement as Array<Record<string, unknown>>;
    const offerNames = offers.map((o) => o.name);
    expect(offerNames).toEqual([
      "Full-stack build",
      "API & backend",
      "Interface build",
      "Fix & refactor",
    ]);
  });

  it("includes a ProfilePage node pointing at the Person", () => {
    const page = getNode("ProfilePage");
    expect(page).toBeDefined();
    const mainEntity = page?.mainEntity as Record<string, unknown>;
    expect(mainEntity?.["@id"]).toBe(`${ORIGIN}/#person`);
  });

  it("graph does not include an Organization node", () => {
    expect(getNode("Organization")).toBeUndefined();
  });

  it("includes a FAQPage node", () => {
    expect(getNode("FAQPage")).toBeDefined();
  });

  it("FAQPage questions deep-equal the faq list in home data", () => {
    const faqPage = getNode("FAQPage");
    const questions = faqPage?.mainEntity as Array<Record<string, unknown>>;
    expect(questions).toHaveLength(data.faq.length);
    for (let i = 0; i < data.faq.length; i++) {
      expect(questions[i].name).toBe(data.faq[i].question);
      const answer = questions[i].acceptedAnswer as Record<string, unknown>;
      expect(answer.text).toBe(data.faq[i].answer);
    }
  });

  it("FAQPage answers mention availability/slots and reply time", () => {
    const faqPage = getNode("FAQPage");
    const questions = faqPage?.mainEntity as Array<Record<string, unknown>>;
    const allAnswers = questions
      .map((q) => (q.acceptedAnswer as Record<string, unknown>).text as string)
      .join(" ");
    expect(allAnswers).toMatch(/slot|available/i);
    expect(allAnswers).toMatch(/working day/i);
  });

  it("FAQPage answers contain no price or rate", () => {
    const faqPage = getNode("FAQPage");
    const questions = faqPage?.mainEntity as Array<Record<string, unknown>>;
    for (const q of questions) {
      const text = (q.acceptedAnswer as Record<string, unknown>).text as string;
      expect(text).not.toMatch(/€|\$|£|\/h|per hour|\brate\b|\bprice\b/i);
    }
  });
});
